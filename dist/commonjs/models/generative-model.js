"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenerativeModel = void 0;
var _generateContent = require("../methods/generate-content.js");
var _index = require("../types/index.js");
var _errors = require("../errors.js");
var _chatSession = require("../methods/chat-session.js");
var _countTokens = require("../methods/count-tokens.js");
var _requestHelpers = require("../requests/request-helpers.js");
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
 * Class for generative model APIs.
 * @public
 */
class GenerativeModel {
  constructor(vertexAI, modelParams, requestOptions) {
    if (!vertexAI.app?.options?.apiKey) {
      throw new _errors.VertexAIError(_index.VertexAIErrorCode.NO_API_KEY, `The "apiKey" field is empty in the local Firebase config. Firebase VertexAI requires this field to contain a valid API key.`);
    } else if (!vertexAI.app?.options?.projectId) {
      throw new _errors.VertexAIError(_index.VertexAIErrorCode.NO_PROJECT_ID, `The "projectId" field is empty in the local Firebase config. Firebase VertexAI requires this field to contain a valid project ID.`);
    } else {
      this._apiSettings = {
        apiKey: vertexAI.app.options.apiKey,
        project: vertexAI.app.options.projectId,
        location: vertexAI.location
      };
      if (vertexAI.appCheck) {
        this._apiSettings.getAppCheckToken = () => vertexAI.appCheck.getToken();
      }
      if (vertexAI.auth?.currentUser) {
        this._apiSettings.getAuthToken = () => vertexAI.auth.currentUser.getIdToken();
      }
    }
    if (modelParams.model.includes('/')) {
      if (modelParams.model.startsWith('models/')) {
        // Add "publishers/google" if the user is only passing in 'models/model-name'.
        this.model = `publishers/google/${modelParams.model}`;
      } else {
        // Any other custom format (e.g. tuned models) must be passed in correctly.
        this.model = modelParams.model;
      }
    } else {
      // If path is not included, assume it's a non-tuned model.
      this.model = `publishers/google/models/${modelParams.model}`;
    }
    this.generationConfig = modelParams.generationConfig || {};
    this.safetySettings = modelParams.safetySettings || [];
    this.tools = modelParams.tools;
    this.toolConfig = modelParams.toolConfig;
    this.systemInstruction = (0, _requestHelpers.formatSystemInstruction)(modelParams.systemInstruction);
    this.requestOptions = requestOptions || {};
  }

  /**
   * Makes a single non-streaming call to the model
   * and returns an object containing a single <code>{@link GenerateContentResponse}</code>.
   */
  async generateContent(request) {
    const formattedParams = (0, _requestHelpers.formatGenerateContentInput)(request);
    return (0, _generateContent.generateContent)(this._apiSettings, this.model, {
      generationConfig: this.generationConfig,
      safetySettings: this.safetySettings,
      tools: this.tools,
      toolConfig: this.toolConfig,
      systemInstruction: this.systemInstruction,
      ...formattedParams
    }, this.requestOptions);
  }

  /**
   * Makes a single streaming call to the model
   * and returns an object containing an iterable stream that iterates
   * over all chunks in the streaming response as well as
   * a promise that returns the final aggregated response.
   */
  async generateContentStream(request) {
    const formattedParams = (0, _requestHelpers.formatGenerateContentInput)(request);
    return (0, _generateContent.generateContentStream)(this._apiSettings, this.model, {
      generationConfig: this.generationConfig,
      safetySettings: this.safetySettings,
      tools: this.tools,
      toolConfig: this.toolConfig,
      systemInstruction: this.systemInstruction,
      ...formattedParams
    }, this.requestOptions);
  }

  /**
   * Gets a new <code>{@link ChatSession}</code> instance which can be used for
   * multi-turn chats.
   */
  startChat(startChatParams) {
    return new _chatSession.ChatSession(this._apiSettings, this.model, {
      tools: this.tools,
      toolConfig: this.toolConfig,
      systemInstruction: this.systemInstruction,
      ...startChatParams
    }, this.requestOptions);
  }

  /**
   * Counts the tokens in the provided request.
   */
  async countTokens(request) {
    const formattedParams = (0, _requestHelpers.formatGenerateContentInput)(request);
    return (0, _countTokens.countTokens)(this._apiSettings, this.model, formattedParams);
  }
}
exports.GenerativeModel = GenerativeModel;
//# sourceMappingURL=generative-model.js.map