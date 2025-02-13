"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countTokens = countTokens;
var _request = require("../requests/request.js");
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

async function countTokens(apiSettings, model, params, requestOptions) {
  const response = await (0, _request.makeRequest)(model, _request.Task.COUNT_TOKENS, apiSettings, false, JSON.stringify(params), requestOptions);
  return response.json();
}
//# sourceMappingURL=count-tokens.js.map