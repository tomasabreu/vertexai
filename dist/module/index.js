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

import "./polyfills.js";
import { getApp } from '@react-native-firebase/app';
import { VertexAIErrorCode } from "./types/index.js";
import { DEFAULT_LOCATION } from "./constants.js";
import { VertexAIError } from "./errors.js";
import { GenerativeModel } from "./models/generative-model.js";
export { ChatSession } from "./methods/chat-session.js";
export * from "./requests/schema-builder.js";
export { GenerativeModel };
export { VertexAIError };

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
export function getVertexAI(app = getApp(), options) {
  return {
    app,
    location: options?.location || DEFAULT_LOCATION,
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
export function getGenerativeModel(vertexAI, modelParams, requestOptions) {
  if (!modelParams.model) {
    throw new VertexAIError(VertexAIErrorCode.NO_MODEL, `Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })`);
  }
  return new GenerativeModel(vertexAI, modelParams, requestOptions);
}
//# sourceMappingURL=index.js.map