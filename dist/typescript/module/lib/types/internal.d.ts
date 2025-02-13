import { FirebaseAppCheckTypes } from '@react-native-firebase/app-check';
export interface ApiSettings {
    apiKey: string;
    project: string;
    location: string;
    getAuthToken?: () => Promise<string>;
    getAppCheckToken?: () => Promise<FirebaseAppCheckTypes.AppCheckTokenResult>;
}
//# sourceMappingURL=internal.d.ts.map