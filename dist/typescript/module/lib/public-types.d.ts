import { ReactNativeFirebase } from '@react-native-firebase/app';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseAppCheckTypes } from '@react-native-firebase/app-check';
export * from './types';
/**
 * An instance of the Vertex AI in Firebase SDK.
 * @public
 */
export interface VertexAI {
    /**
     * The {@link @firebase/app#FirebaseApp} this <code>{@link VertexAI}</code> instance is associated with.
     */
    app: ReactNativeFirebase.FirebaseApp;
    location: string;
    appCheck?: FirebaseAppCheckTypes.Module | null;
    auth?: FirebaseAuthTypes.Module | null;
}
/**
 * Options when initializing the Vertex AI in Firebase SDK.
 * @public
 */
export interface VertexAIOptions {
    location?: string;
    appCheck?: FirebaseAppCheckTypes.Module | null;
    auth?: FirebaseAuthTypes.Module | null;
}
//# sourceMappingURL=public-types.d.ts.map