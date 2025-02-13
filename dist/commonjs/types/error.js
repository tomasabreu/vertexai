"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VertexAIErrorCode = void 0;
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
 * Details object that may be included in an error response.
 *
 * @public
 */
/**
 * Details object that contains data originating from a bad HTTP response.
 *
 * @public
 */
/**
 * Standardized error codes that <code>{@link VertexAIError}</code> can have.
 *
 * @public
 */
let VertexAIErrorCode = exports.VertexAIErrorCode = /*#__PURE__*/function (VertexAIErrorCode) {
  /** A generic error occurred. */
  VertexAIErrorCode["ERROR"] = "error";
  /** An error occurred in a request. */
  VertexAIErrorCode["REQUEST_ERROR"] = "request-error";
  /** An error occurred in a response. */
  VertexAIErrorCode["RESPONSE_ERROR"] = "response-error";
  /** An error occurred while performing a fetch. */
  VertexAIErrorCode["FETCH_ERROR"] = "fetch-error";
  /** An error associated with a Content object.  */
  VertexAIErrorCode["INVALID_CONTENT"] = "invalid-content";
  /** An error due to the Firebase API not being enabled in the Console. */
  VertexAIErrorCode["API_NOT_ENABLED"] = "api-not-enabled";
  /** An error due to invalid Schema input.  */
  VertexAIErrorCode["INVALID_SCHEMA"] = "invalid-schema";
  /** An error occurred due to a missing Firebase API key. */
  VertexAIErrorCode["NO_API_KEY"] = "no-api-key";
  /** An error occurred due to a model name not being specified during initialization. */
  VertexAIErrorCode["NO_MODEL"] = "no-model";
  /** An error occurred due to a missing project ID. */
  VertexAIErrorCode["NO_PROJECT_ID"] = "no-project-id";
  /** An error occurred while parsing. */
  VertexAIErrorCode["PARSE_FAILED"] = "parse-failed";
  return VertexAIErrorCode;
}({});
//# sourceMappingURL=error.js.map