"use strict";

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

import { FinishReason, VertexAIErrorCode } from "../types/index.js";
import { VertexAIError } from "../errors.js";
import { logger } from "../logger.js";

/**
 * Creates an EnhancedGenerateContentResponse object that has helper functions and
 * other modifications that improve usability.
 */
export function createEnhancedContentResponse(response) {
  /**
   * The Vertex AI backend omits default values.
   * This causes the `index` property to be omitted from the first candidate in the
   * response, since it has index 0, and 0 is a default value.
   * See: https://github.com/firebase/firebase-js-sdk/issues/8566
   */
  if (response.candidates && !response.candidates[0]?.hasOwnProperty('index')) {
    response.candidates[0].index = 0;
  }
  const responseWithHelpers = addHelpers(response);
  return responseWithHelpers;
}

/**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */
export function addHelpers(response) {
  response.text = () => {
    if (response.candidates && response.candidates.length > 0) {
      if (response.candidates.length > 1) {
        logger.warn(`This response had ${response.candidates.length} ` + `candidates. Returning text from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
      }
      if (hadBadFinishReason(response.candidates[0])) {
        throw new VertexAIError(VertexAIErrorCode.RESPONSE_ERROR, `Response error: ${formatBlockErrorMessage(response)}. Response body stored in error.response`, {
          response
        });
      }
      return getText(response);
    } else if (response.promptFeedback) {
      throw new VertexAIError(VertexAIErrorCode.RESPONSE_ERROR, `Text not available. ${formatBlockErrorMessage(response)}`, {
        response
      });
    }
    return '';
  };
  response.functionCalls = () => {
    if (response.candidates && response.candidates.length > 0) {
      if (response.candidates.length > 1) {
        logger.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
      }
      if (hadBadFinishReason(response.candidates[0])) {
        throw new VertexAIError(VertexAIErrorCode.RESPONSE_ERROR, `Response error: ${formatBlockErrorMessage(response)}. Response body stored in error.response`, {
          response
        });
      }
      return getFunctionCalls(response);
    } else if (response.promptFeedback) {
      throw new VertexAIError(VertexAIErrorCode.RESPONSE_ERROR, `Function call not available. ${formatBlockErrorMessage(response)}`, {
        response
      });
    }
    return undefined;
  };
  return response;
}

/**
 * Returns all text found in all parts of first candidate.
 */
export function getText(response) {
  const textStrings = [];
  if (response.candidates?.[0]?.content?.parts) {
    for (const part of response.candidates?.[0].content?.parts) {
      if (part.text) {
        textStrings.push(part.text);
      }
    }
  }
  if (textStrings.length > 0) {
    return textStrings.join('');
  } else {
    return '';
  }
}

/**
 * Returns <code>{@link FunctionCall}</code>s associated with first candidate.
 */
export function getFunctionCalls(response) {
  const functionCalls = [];
  if (response.candidates?.[0]?.content?.parts) {
    for (const part of response.candidates?.[0].content?.parts) {
      if (part.functionCall) {
        functionCalls.push(part.functionCall);
      }
    }
  }
  if (functionCalls.length > 0) {
    return functionCalls;
  } else {
    return undefined;
  }
}
const badFinishReasons = [FinishReason.RECITATION, FinishReason.SAFETY];
function hadBadFinishReason(candidate) {
  return !!candidate.finishReason && badFinishReasons.includes(candidate.finishReason);
}
export function formatBlockErrorMessage(response) {
  let message = '';
  if ((!response.candidates || response.candidates.length === 0) && response.promptFeedback) {
    message += 'Response was blocked';
    if (response.promptFeedback?.blockReason) {
      message += ` due to ${response.promptFeedback.blockReason}`;
    }
    if (response.promptFeedback?.blockReasonMessage) {
      message += `: ${response.promptFeedback.blockReasonMessage}`;
    }
  } else if (response.candidates?.[0]) {
    const firstCandidate = response.candidates[0];
    if (hadBadFinishReason(firstCandidate)) {
      message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
      if (firstCandidate.finishMessage) {
        message += `: ${firstCandidate.finishMessage}`;
      }
    }
  }
  return message;
}
//# sourceMappingURL=response-helpers.js.map