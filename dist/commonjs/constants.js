"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERTEX_TYPE = exports.PACKAGE_VERSION = exports.LANGUAGE_TAG = exports.DEFAULT_LOCATION = exports.DEFAULT_FETCH_TIMEOUT_MS = exports.DEFAULT_BASE_URL = exports.DEFAULT_API_VERSION = void 0;
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

const VERTEX_TYPE = exports.VERTEX_TYPE = "vertexAI";
const DEFAULT_LOCATION = exports.DEFAULT_LOCATION = "us-central1";
const DEFAULT_BASE_URL = exports.DEFAULT_BASE_URL = "https://firebasevertexai.googleapis.com";

// This is the default API version for the VertexAI API. At some point, should be able to change when the feature becomes available.
// `v1beta` & `stable` available: https://cloud.google.com/vertex-ai/docs/reference#versions
const DEFAULT_API_VERSION = exports.DEFAULT_API_VERSION = "v1beta";
const PACKAGE_VERSION = exports.PACKAGE_VERSION = "0.0.01";
const LANGUAGE_TAG = exports.LANGUAGE_TAG = "gl-rn";
const DEFAULT_FETCH_TIMEOUT_MS = exports.DEFAULT_FETCH_TIMEOUT_MS = 180 * 1000;
//# sourceMappingURL=constants.js.map