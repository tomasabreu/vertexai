"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POSSIBLE_ROLES = exports.HarmSeverity = exports.HarmProbability = exports.HarmCategory = exports.HarmBlockThreshold = exports.HarmBlockMethod = exports.FunctionCallingMode = exports.FinishReason = exports.BlockReason = void 0;
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
 * Role is the producer of the content.
 * @public
 */

/**
 * Possible roles.
 * @public
 */
const POSSIBLE_ROLES = exports.POSSIBLE_ROLES = ['user', 'model', 'function', 'system'];

/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */
let HarmCategory = exports.HarmCategory = /*#__PURE__*/function (HarmCategory) {
  HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
  HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
  HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
  HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
  return HarmCategory;
}({});
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */
let HarmBlockThreshold = exports.HarmBlockThreshold = /*#__PURE__*/function (HarmBlockThreshold) {
  // Content with NEGLIGIBLE will be allowed.
  HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
  // Content with NEGLIGIBLE and LOW will be allowed.
  HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
  // Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed.
  HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
  // All content will be allowed.
  HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
  return HarmBlockThreshold;
}({});
/**
 * @public
 */
let HarmBlockMethod = exports.HarmBlockMethod = /*#__PURE__*/function (HarmBlockMethod) {
  // The harm block method uses both probability and severity scores.
  HarmBlockMethod["SEVERITY"] = "SEVERITY";
  // The harm block method uses the probability score.
  HarmBlockMethod["PROBABILITY"] = "PROBABILITY";
  return HarmBlockMethod;
}({});
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */
let HarmProbability = exports.HarmProbability = /*#__PURE__*/function (HarmProbability) {
  // Content has a negligible chance of being unsafe.
  HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
  // Content has a low chance of being unsafe.
  HarmProbability["LOW"] = "LOW";
  // Content has a medium chance of being unsafe.
  HarmProbability["MEDIUM"] = "MEDIUM";
  // Content has a high chance of being unsafe.
  HarmProbability["HIGH"] = "HIGH";
  return HarmProbability;
}({});
/**
 * Harm severity levels.
 * @public
 */
let HarmSeverity = exports.HarmSeverity = /*#__PURE__*/function (HarmSeverity) {
  // Negligible level of harm severity.
  HarmSeverity["HARM_SEVERITY_NEGLIGIBLE"] = "HARM_SEVERITY_NEGLIGIBLE";
  // Low level of harm severity.
  HarmSeverity["HARM_SEVERITY_LOW"] = "HARM_SEVERITY_LOW";
  // Medium level of harm severity.
  HarmSeverity["HARM_SEVERITY_MEDIUM"] = "HARM_SEVERITY_MEDIUM";
  // High level of harm severity.
  HarmSeverity["HARM_SEVERITY_HIGH"] = "HARM_SEVERITY_HIGH";
  return HarmSeverity;
}({});
/**
 * Reason that a prompt was blocked.
 * @public
 */
let BlockReason = exports.BlockReason = /*#__PURE__*/function (BlockReason) {
  // Content was blocked by safety settings.
  BlockReason["SAFETY"] = "SAFETY";
  // Content was blocked, but the reason is uncategorized.
  BlockReason["OTHER"] = "OTHER";
  return BlockReason;
}({});
/**
 * Reason that a candidate finished.
 * @public
 */
let FinishReason = exports.FinishReason = /*#__PURE__*/function (FinishReason) {
  // Natural stop point of the model or provided stop sequence.
  FinishReason["STOP"] = "STOP";
  // The maximum number of tokens as specified in the request was reached.
  FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
  // The candidate content was flagged for safety reasons.
  FinishReason["SAFETY"] = "SAFETY";
  // The candidate content was flagged for recitation reasons.
  FinishReason["RECITATION"] = "RECITATION";
  // Unknown reason.
  FinishReason["OTHER"] = "OTHER";
  return FinishReason;
}({});
/**
 * @public
 */
let FunctionCallingMode = exports.FunctionCallingMode = /*#__PURE__*/function (FunctionCallingMode) {
  // Default model behavior, model decides to predict either a function call
  // or a natural language response.
  FunctionCallingMode["AUTO"] = "AUTO";
  // Model is constrained to always predicting a function call only.
  // If "allowed_function_names" is set, the predicted function call will be
  // limited to any one of "allowed_function_names", else the predicted
  // function call will be any one of the provided "function_declarations".
  FunctionCallingMode["ANY"] = "ANY";
  // Model will not predict any function call. Model behavior is same as when
  // not passing any function declarations.
  FunctionCallingMode["NONE"] = "NONE";
  return FunctionCallingMode;
}({});
//# sourceMappingURL=enums.js.map