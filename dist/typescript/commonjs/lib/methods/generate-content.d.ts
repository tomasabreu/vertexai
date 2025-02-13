import { GenerateContentRequest, GenerateContentResult, GenerateContentStreamResult, RequestOptions } from '../types';
import { ApiSettings } from '../types/internal';
export declare function generateContentStream(apiSettings: ApiSettings, model: string, params: GenerateContentRequest, requestOptions?: RequestOptions): Promise<GenerateContentStreamResult>;
export declare function generateContent(apiSettings: ApiSettings, model: string, params: GenerateContentRequest, requestOptions?: RequestOptions): Promise<GenerateContentResult>;
//# sourceMappingURL=generate-content.d.ts.map