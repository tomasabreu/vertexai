"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemaType = void 0;
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
 * Contains the list of OpenAPI data types
 * as defined by the
 * {@link https://swagger.io/docs/specification/data-models/data-types/ | OpenAPI specification}
 * @public
 */
let SchemaType = exports.SchemaType = /*#__PURE__*/function (SchemaType) {
  /** String type. */
  SchemaType["STRING"] = "string";
  /** Number type. */
  SchemaType["NUMBER"] = "number";
  /** Integer type. */
  SchemaType["INTEGER"] = "integer";
  /** Boolean type. */
  SchemaType["BOOLEAN"] = "boolean";
  /** Array type. */
  SchemaType["ARRAY"] = "array";
  /** Object type. */
  SchemaType["OBJECT"] = "object";
  return SchemaType;
}({});
/**
 * Basic <code>{@link Schema}</code> properties shared across several Schema-related
 * types.
 * @public
 */
/**
 * Params passed to <code>{@link Schema}</code> static methods to create specific
 * <code>{@link Schema}</code> classes.
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
/**
 * Final format for <code>{@link Schema}</code> params passed to backend requests.
 * @public
 */
/**
 * Interface for <code>{@link Schema}</code> class.
 * @public
 */
/**
 * Interface for <code>{@link ObjectSchema}</code> class.
 * @public
 */
//# sourceMappingURL=schema.js.map