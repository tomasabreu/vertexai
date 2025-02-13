"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatSession = void 0;
var _requestHelpers = require("../requests/request-helpers.js");
var _responseHelpers = require("../requests/response-helpers.js");
var _chatSessionHelpers = require("./chat-session-helpers.js");
var _generateContent = require("./generate-content.js");
var _logger = require("../logger.js");
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

/**
 * Do not log a message for this error.
 */
const SILENT_ERROR = 'SILENT_ERROR';

/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */
class ChatSession {
  _history = [];
  _sendPromise = Promise.resolve();
  constructor(apiSettings, model, params, requestOptions) {
    this.model = model;
    this.params = params;
    this.requestOptions = requestOptions;
    this._apiSettings = apiSettings;
    if (params?.history) {
      (0, _chatSessionHelpers.validateChatHistory)(params.history);
      this._history = params.history;
    }
  }

  /**
   * Gets the chat history so far. Blocked prompts are not added to history.
   * Neither blocked candidates nor the prompts that generated them are added
   * to history.
   */
  async getHistory() {
    await this._sendPromise;
    return this._history;
  }

  /**
   * Sends a chat message and receives a non-streaming
   * <code>{@link GenerateContentResult}</code>
   */
  async sendMessage(request) {
    await this._sendPromise;
    const newContent = (0, _requestHelpers.formatNewContent)(request);
    const generateContentRequest = {
      safetySettings: this.params?.safetySettings,
      generationConfig: this.params?.generationConfig,
      tools: this.params?.tools,
      toolConfig: this.params?.toolConfig,
      systemInstruction: this.params?.systemInstruction,
      contents: [...this._history, newContent]
    };
    let finalResult = {};
    // Add onto the chain.
    this._sendPromise = this._sendPromise.then(() => (0, _generateContent.generateContent)(this._apiSettings, this.model, generateContentRequest, this.requestOptions)).then(result => {
      if (result.response.candidates && result.response.candidates.length > 0) {
        this._history.push(newContent);
        const responseContent = {
          parts: result.response.candidates?.[0]?.content.parts || [],
          // Response seems to come back without a role set.
          role: result.response.candidates?.[0]?.content.role || 'model'
        };
        this._history.push(responseContent);
      } else {
        const blockErrorMessage = (0, _responseHelpers.formatBlockErrorMessage)(result.response);
        if (blockErrorMessage) {
          _logger.logger.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
        }
      }
      finalResult = result;
    });
    await this._sendPromise;
    return finalResult;
  }

  /**
   * Sends a chat message and receives the response as a
   * <code>{@link GenerateContentStreamResult}</code> containing an iterable stream
   * and a response promise.
   */
  async sendMessageStream(request) {
    await this._sendPromise;
    const newContent = (0, _requestHelpers.formatNewContent)(request);
    const generateContentRequest = {
      safetySettings: this.params?.safetySettings,
      generationConfig: this.params?.generationConfig,
      tools: this.params?.tools,
      toolConfig: this.params?.toolConfig,
      systemInstruction: this.params?.systemInstruction,
      contents: [...this._history, newContent]
    };
    const streamPromise = (0, _generateContent.generateContentStream)(this._apiSettings, this.model, generateContentRequest, this.requestOptions);

    // Add onto the chain.
    this._sendPromise = this._sendPromise.then(() => streamPromise)
    // This must be handled to avoid unhandled rejection, but jump
    // to the final catch block with a label to not log this error.
    .catch(_ignored => {
      throw new Error(SILENT_ERROR);
    }).then(streamResult => streamResult.response).then(response => {
      if (response.candidates && response.candidates.length > 0) {
        this._history.push(newContent);
        const responseContent = {
          ...response.candidates[0]?.content
        };
        // Response seems to come back without a role set.
        if (!responseContent.role) {
          responseContent.role = 'model';
        }
        this._history.push(responseContent);
      } else {
        const blockErrorMessage = (0, _responseHelpers.formatBlockErrorMessage)(response);
        if (blockErrorMessage) {
          _logger.logger.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
        }
      }
    }).catch(e => {
      // Errors in streamPromise are already catchable by the user as
      // streamPromise is returned.
      // Avoid duplicating the error message in logs.
      if (e.message !== SILENT_ERROR) {
        // Users do not have access to _sendPromise to catch errors
        // downstream from streamPromise, so they should not throw.
        _logger.logger.error(e);
      }
    });
    return streamPromise;
  }
}
exports.ChatSession = ChatSession;
//# sourceMappingURL=chat-session.js.map