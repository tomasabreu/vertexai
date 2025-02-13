import { RequestOptions } from '../types';
import { ApiSettings } from '../types/internal';
export declare enum Task {
    GENERATE_CONTENT = "generateContent",
    STREAM_GENERATE_CONTENT = "streamGenerateContent",
    COUNT_TOKENS = "countTokens"
}
export declare class RequestUrl {
    model: string;
    task: Task;
    apiSettings: ApiSettings;
    stream: boolean;
    requestOptions?: RequestOptions | undefined;
    constructor(model: string, task: Task, apiSettings: ApiSettings, stream: boolean, requestOptions?: RequestOptions | undefined);
    toString(): string;
    /**
     * If the model needs to be passed to the backend, it needs to
     * include project and location path.
     */
    get fullModelString(): string;
}
export declare function getHeaders(url: RequestUrl): Promise<Headers>;
export declare function constructRequest(model: string, task: Task, apiSettings: ApiSettings, stream: boolean, body: string, requestOptions?: RequestOptions): Promise<{
    url: string;
    fetchOptions: RequestInit;
}>;
export declare function makeRequest(model: string, task: Task, apiSettings: ApiSettings, stream: boolean, body: string, requestOptions?: RequestOptions): Promise<Response>;
//# sourceMappingURL=request.d.ts.map