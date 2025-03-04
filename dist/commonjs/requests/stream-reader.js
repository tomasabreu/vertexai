"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggregateResponses = aggregateResponses;
exports.getResponseStream = getResponseStream;
exports.processStream = processStream;
var _webStreamsPolyfill = require("web-streams-polyfill");
var _index = require("../types/index.js");
var _errors = require("../errors.js");
var _responseHelpers = require("./response-helpers.js");
/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;

/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */
function processStream(response) {
  const inputStream = new _webStreamsPolyfill.ReadableStream({
    async start(controller) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      while (true) {
        const {
          done,
          value
        } = await reader.read();
        if (done) {
          controller.close();
          break;
        }
        const decodedValue = decoder.decode(value, {
          stream: true
        });
        controller.enqueue(decodedValue);
      }
    }
  });
  const responseStream = getResponseStream(inputStream);
  const [stream1, stream2] = responseStream.tee();
  return {
    stream: generateResponseSequence(stream1),
    response: getResponsePromise(stream2)
  };
}
async function getResponsePromise(stream) {
  const allResponses = [];
  const reader = stream.getReader();
  while (true) {
    const {
      done,
      value
    } = await reader.read();
    if (done) {
      const enhancedResponse = (0, _responseHelpers.createEnhancedContentResponse)(aggregateResponses(allResponses));
      return enhancedResponse;
    }
    allResponses.push(value);
  }
}
async function* generateResponseSequence(stream) {
  const reader = stream.getReader();
  while (true) {
    const {
      value,
      done
    } = await reader.read();
    if (done) {
      break;
    }
    const enhancedResponse = (0, _responseHelpers.createEnhancedContentResponse)(value);
    yield enhancedResponse;
  }
}

/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */
function getResponseStream(inputStream) {
  const reader = inputStream.getReader();
  const stream = new _webStreamsPolyfill.ReadableStream({
    start(controller) {
      let currentText = '';
      return pump().then(() => undefined);
      function pump() {
        return reader.read().then(({
          value,
          done
        }) => {
          if (done) {
            if (currentText.trim()) {
              controller.error(new _errors.VertexAIError(_index.VertexAIErrorCode.PARSE_FAILED, 'Failed to parse stream'));
              return;
            }
            controller.close();
            return;
          }
          currentText += value;
          let match = currentText.match(responseLineRE);
          let parsedResponse;
          while (match) {
            try {
              parsedResponse = JSON.parse(match[1]);
            } catch (_) {
              controller.error(new _errors.VertexAIError(_index.VertexAIErrorCode.PARSE_FAILED, `Error parsing JSON response: "${match[1]}`));
              return;
            }
            controller.enqueue(parsedResponse);
            currentText = currentText.substring(match[0].length);
            match = currentText.match(responseLineRE);
          }
          return pump();
        });
      }
    }
  });
  return stream;
}

/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */
function aggregateResponses(responses) {
  const lastResponse = responses[responses.length - 1];
  const aggregatedResponse = {
    promptFeedback: lastResponse?.promptFeedback
  };
  for (const response of responses) {
    if (response.candidates) {
      for (const candidate of response.candidates) {
        // Index will be undefined if it's the first index (0), so we should use 0 if it's undefined.
        // See: https://github.com/firebase/firebase-js-sdk/issues/8566
        const i = candidate.index || 0;
        if (!aggregatedResponse.candidates) {
          aggregatedResponse.candidates = [];
        }
        if (!aggregatedResponse.candidates[i]) {
          aggregatedResponse.candidates[i] = {
            index: candidate.index
          };
        }
        // Keep overwriting, the last one will be final
        aggregatedResponse.candidates[i].citationMetadata = candidate.citationMetadata;
        aggregatedResponse.candidates[i].finishReason = candidate.finishReason;
        aggregatedResponse.candidates[i].finishMessage = candidate.finishMessage;
        aggregatedResponse.candidates[i].safetyRatings = candidate.safetyRatings;

        /**
         * Candidates should always have content and parts, but this handles
         * possible malformed responses.
         */
        if (candidate.content && candidate.content.parts) {
          if (!aggregatedResponse.candidates[i].content) {
            aggregatedResponse.candidates[i].content = {
              role: candidate.content.role || 'user',
              parts: []
            };
          }
          const newPart = {};
          for (const part of candidate.content.parts) {
            if (part.text) {
              newPart.text = part.text;
            }
            if (part.functionCall) {
              newPart.functionCall = part.functionCall;
            }
            if (Object.keys(newPart).length === 0) {
              newPart.text = '';
            }
            aggregatedResponse.candidates[i].content.parts.push(newPart);
          }
        }
      }
    }
  }
  return aggregatedResponse;
}
//# sourceMappingURL=stream-reader.js.map