"use strict";

var _PolyfillFunctions = require("react-native/Libraries/Utilities/PolyfillFunctions");
var _ponyfill = require("web-streams-polyfill/dist/ponyfill");
var _reactNativeFetchApi = require("react-native-fetch-api");
require("text-encoding");
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
// @ts-ignore

// @ts-ignore

// @ts-ignore

(0, _PolyfillFunctions.polyfillGlobal)('fetch', () => (...args) => (0, _reactNativeFetchApi.fetch)(args[0], {
  ...args[1],
  reactNative: {
    textStreaming: true
  }
}));
(0, _PolyfillFunctions.polyfillGlobal)('Headers', () => _reactNativeFetchApi.Headers);
(0, _PolyfillFunctions.polyfillGlobal)('Request', () => _reactNativeFetchApi.Request);
(0, _PolyfillFunctions.polyfillGlobal)('Response', () => _reactNativeFetchApi.Response);
(0, _PolyfillFunctions.polyfillGlobal)('ReadableStream', () => _ponyfill.ReadableStream);
//# sourceMappingURL=polyfills.js.map