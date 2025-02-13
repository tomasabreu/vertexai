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

import { VertexAIErrorCode } from "../types/index.js";
import { VertexAIError } from "../errors.js";
export function formatSystemInstruction(input) {
  // null or undefined
  if (input == null) {
    return undefined;
  } else if (typeof input === 'string') {
    return {
      role: 'system',
      parts: [{
        text: input
      }]
    };
  } else if (input.text) {
    return {
      role: 'system',
      parts: [input]
    };
  } else if (input.parts) {
    if (!input.role) {
      return {
        role: 'system',
        parts: input.parts
      };
    } else {
      return input;
    }
  }
  return undefined;
}
export function formatNewContent(request) {
  let newParts = [];
  if (typeof request === 'string') {
    newParts = [{
      text: request
    }];
  } else {
    for (const partOrString of request) {
      if (typeof partOrString === 'string') {
        newParts.push({
          text: partOrString
        });
      } else {
        newParts.push(partOrString);
      }
    }
  }
  return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}

/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */
function assignRoleToPartsAndValidateSendMessageRequest(parts) {
  const userContent = {
    role: 'user',
    parts: []
  };
  const functionContent = {
    role: 'function',
    parts: []
  };
  let hasUserContent = false;
  let hasFunctionContent = false;
  for (const part of parts) {
    if ('functionResponse' in part) {
      functionContent.parts.push(part);
      hasFunctionContent = true;
    } else {
      userContent.parts.push(part);
      hasUserContent = true;
    }
  }
  if (hasUserContent && hasFunctionContent) {
    throw new VertexAIError(VertexAIErrorCode.INVALID_CONTENT, 'Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.');
  }
  if (!hasUserContent && !hasFunctionContent) {
    throw new VertexAIError(VertexAIErrorCode.INVALID_CONTENT, 'No Content is provided for sending chat message.');
  }
  if (hasUserContent) {
    return userContent;
  }
  return functionContent;
}
export function formatGenerateContentInput(params) {
  let formattedRequest;
  if (params.contents) {
    formattedRequest = params;
  } else {
    // Array or string
    const content = formatNewContent(params);
    formattedRequest = {
      contents: [content]
    };
  }
  if (params.systemInstruction) {
    formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
  }
  return formattedRequest;
}
//# sourceMappingURL=request-helpers.js.map