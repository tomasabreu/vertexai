import { FirebaseError } from '@firebase/util';
import { VertexAIErrorCode, CustomErrorData } from './types';
/**
 * Error class for the Vertex AI in Firebase SDK.
 *
 * @public
 */
export declare class VertexAIError extends FirebaseError {
    readonly code: VertexAIErrorCode;
    readonly customErrorData?: CustomErrorData | undefined;
    /**
     * Constructs a new instance of the `VertexAIError` class.
     *
     * @param code - The error code from <code>{@link VertexAIErrorCode}</code>.
     * @param message - A human-readable message describing the error.
     * @param customErrorData - Optional error data.
     */
    constructor(code: VertexAIErrorCode, message: string, customErrorData?: CustomErrorData | undefined);
}
//# sourceMappingURL=errors.d.ts.map