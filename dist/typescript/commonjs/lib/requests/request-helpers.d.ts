import { Content, GenerateContentRequest, Part } from '../types';
export declare function formatSystemInstruction(input?: string | Part | Content): Content | undefined;
export declare function formatNewContent(request: string | Array<string | Part>): Content;
export declare function formatGenerateContentInput(params: GenerateContentRequest | string | Array<string | Part>): GenerateContentRequest;
//# sourceMappingURL=request-helpers.d.ts.map