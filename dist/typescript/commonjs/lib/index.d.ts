import './polyfills';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import { ModelParams, RequestOptions } from './types';
import { VertexAI, VertexAIOptions } from './public-types';
import { VertexAIError } from './errors';
import { GenerativeModel } from './models/generative-model';
export { ChatSession } from './methods/chat-session';
export * from './requests/schema-builder';
export { GenerativeModel };
export { VertexAIError };
/**
 * Returns a <code>{@link VertexAI}</code> instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @FirebaseApp} to use.
 * @param options - The {@link VertexAIOptions} to use.
 * @param appCheck - The {@link @AppCheck} to use.
 * @param auth - The {@link @Auth} to use.
 */
export declare function getVertexAI(app?: ReactNativeFirebase.FirebaseApp, options?: VertexAIOptions): VertexAI;
/**
 * Returns a <code>{@link GenerativeModel}</code> class with methods for inference
 * and other functionality.
 *
 * @public
 */
export declare function getGenerativeModel(vertexAI: VertexAI, modelParams: ModelParams, requestOptions?: RequestOptions): GenerativeModel;
//# sourceMappingURL=index.d.ts.map