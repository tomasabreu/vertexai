import { Content, GenerateContentResult, GenerateContentStreamResult, Part, RequestOptions, StartChatParams } from '../types';
import { ApiSettings } from '../types/internal';
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */
export declare class ChatSession {
    model: string;
    params?: StartChatParams | undefined;
    requestOptions?: RequestOptions | undefined;
    private _apiSettings;
    private _history;
    private _sendPromise;
    constructor(apiSettings: ApiSettings, model: string, params?: StartChatParams | undefined, requestOptions?: RequestOptions | undefined);
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Neither blocked candidates nor the prompts that generated them are added
     * to history.
     */
    getHistory(): Promise<Content[]>;
    /**
     * Sends a chat message and receives a non-streaming
     * <code>{@link GenerateContentResult}</code>
     */
    sendMessage(request: string | Array<string | Part>): Promise<GenerateContentResult>;
    /**
     * Sends a chat message and receives the response as a
     * <code>{@link GenerateContentStreamResult}</code> containing an iterable stream
     * and a response promise.
     */
    sendMessageStream(request: string | Array<string | Part>): Promise<GenerateContentStreamResult>;
}
//# sourceMappingURL=chat-session.d.ts.map