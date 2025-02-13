import { ReadableStream } from 'web-streams-polyfill';
import { GenerateContentResponse, GenerateContentStreamResult } from '../types';
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */
export declare function processStream(response: Response): GenerateContentStreamResult;
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */
export declare function getResponseStream<T>(inputStream: ReadableStream<string>): ReadableStream<T>;
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */
export declare function aggregateResponses(responses: GenerateContentResponse[]): GenerateContentResponse;
//# sourceMappingURL=stream-reader.d.ts.map