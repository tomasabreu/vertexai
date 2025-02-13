import { EnhancedGenerateContentResponse, FunctionCall, GenerateContentResponse } from '../types';
/**
 * Creates an EnhancedGenerateContentResponse object that has helper functions and
 * other modifications that improve usability.
 */
export declare function createEnhancedContentResponse(response: GenerateContentResponse): EnhancedGenerateContentResponse;
/**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */
export declare function addHelpers(response: GenerateContentResponse): EnhancedGenerateContentResponse;
/**
 * Returns all text found in all parts of first candidate.
 */
export declare function getText(response: GenerateContentResponse): string;
/**
 * Returns <code>{@link FunctionCall}</code>s associated with first candidate.
 */
export declare function getFunctionCalls(response: GenerateContentResponse): FunctionCall[] | undefined;
export declare function formatBlockErrorMessage(response: GenerateContentResponse): string;
//# sourceMappingURL=response-helpers.d.ts.map