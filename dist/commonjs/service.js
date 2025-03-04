"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VertexAIService = void 0;
var _constants = require("./constants.js");
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

class VertexAIService {
  constructor(app, auth, appCheck, options) {
    this.app = app;
    this.options = options;
    this.auth = auth || null;
    this.appCheck = appCheck || null;
    this.location = this.options?.location || _constants.DEFAULT_LOCATION;
  }
}
exports.VertexAIService = VertexAIService;
//# sourceMappingURL=service.js.map