"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  getVertexAI: true,
  getGenerativeModel: true,
  VertexAIError: true,
  GenerativeModel: true,
  ChatSession: true
};
Object.defineProperty(exports, "ChatSession", {
  enumerable: true,
  get: function () {
    return _chatSession.ChatSession;
  }
});
Object.defineProperty(exports, "GenerativeModel", {
  enumerable: true,
  get: function () {
    return _generativeModel.GenerativeModel;
  }
});
Object.defineProperty(exports, "VertexAIError", {
  enumerable: true,
  get: function () {
    return _errors.VertexAIError;
  }
});
exports.getGenerativeModel = getGenerativeModel;
exports.getVertexAI = getVertexAI;
require("./polyfills.js");
var _app = require("@react-native-firebase/app");
var _index = require("./types/index.js");
var _constants = require("./constants.js");
var _errors = require("./errors.js");
var _generativeModel = require("./models/generative-model.js");
var _chatSession = require("./methods/chat-session.js");
var _schemaBuilder = require("./requests/schema-builder.js");
Object.keys(_schemaBuilder).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _schemaBuilder[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _schemaBuilder[key];
    }
  });
});
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
 * Returns a <code>{@link VertexAI}</code> instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @FirebaseApp} to use.
 * @param options - The {@link VertexAIOptions} to use.
 * @param appCheck - The {@link @AppCheck} to use.
 * @param auth - The {@link @Auth} to use.
 */
function getVertexAI(app = (0, _app.getApp)(), options) {
  return {
    app,
    location: options?.location || _constants.DEFAULT_LOCATION,
    appCheck: options?.appCheck || null,
    auth: options?.auth || null
  };
}

/**
 * Returns a <code>{@link GenerativeModel}</code> class with methods for inference
 * and other functionality.
 *
 * @public
 */
function getGenerativeModel(vertexAI, modelParams, requestOptions) {
  if (!modelParams.model) {
    throw new _errors.VertexAIError(_index.VertexAIErrorCode.NO_MODEL, `Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })`);
  }
  return new _generativeModel.GenerativeModel(vertexAI, modelParams, requestOptions);
}
//# sourceMappingURL=index.js.map