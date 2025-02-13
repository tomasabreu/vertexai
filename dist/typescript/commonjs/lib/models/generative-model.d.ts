import { Content, CountTokensRequest, CountTokensResponse, GenerateContentRequest, GenerateContentResult, GenerateContentStreamResult, GenerationConfig, ModelParams, Part, RequestOptions, SafetySetting, StartChatParams, Tool, ToolConfig } from '../types';
import { ChatSession } from '../methods/chat-session';
import { VertexAI } from '../public-types';
/**
 * Class for generative model APIs.
 * @public
 */
export declare class GenerativeModel {
    private _apiSettings;
    model: string;
    generationConfig: GenerationConfig;
    safetySettings: SafetySetting[];
    requestOptions?: RequestOptions;
    tools?: Tool[];
    toolConfig?: ToolConfig;
    systemInstruction?: Content;
    constructor(vertexAI: VertexAI, modelParams: ModelParams, requestOptions?: RequestOptions);
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single <code>{@link GenerateContentResponse}</code>.
     */
    generateContent(request: GenerateContentRequest | string | Array<string | Part>): Promise<GenerateContentResult>;
    /**
     * Makes a single streaming call to the model
     * and returns an object containing an iterable stream that iterates
     * over all chunks in the streaming response as well as
     * a promise that returns the final aggregated response.
     */
    generateContentStream(request: GenerateContentRequest | string | Array<string | Part>): Promise<GenerateContentStreamResult>;
    /**
     * Gets a new <code>{@link ChatSession}</code> instance which can be used for
     * multi-turn chats.
     */
    startChat(startChatParams?: StartChatParams): ChatSession;
    /**
     * Counts the tokens in the provided request.
     */
    countTokens(request: CountTokensRequest | string | Array<string | Part>): Promise<CountTokensResponse>;
}
//# sourceMappingURL=generative-model.d.ts.map