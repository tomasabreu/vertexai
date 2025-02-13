import { ReactNativeFirebase } from '@react-native-firebase/app';
import { VertexAI, VertexAIOptions } from './public-types';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseAppCheckTypes } from '@react-native-firebase/app-check';
export declare class VertexAIService implements VertexAI {
    app: ReactNativeFirebase.FirebaseApp;
    options?: VertexAIOptions | undefined;
    auth: FirebaseAuthTypes.Module | null;
    appCheck: FirebaseAppCheckTypes.Module | null;
    location: string;
    constructor(app: ReactNativeFirebase.FirebaseApp, auth?: FirebaseAuthTypes.Module, appCheck?: FirebaseAppCheckTypes.Module, options?: VertexAIOptions | undefined);
}
//# sourceMappingURL=service.d.ts.map