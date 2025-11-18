// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { CollectionResponsePublicMessageForwardPagingResultsPage } from './conversations';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Send a new message on a thread at the current timestamp.
   *
   * @example
   * ```ts
   * const publicMessage =
   *   await client.conversations.messages.create(0);
   * ```
   */
  create(
    threadID: number,
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicMessage> {
    return this._client.post(path`/conversations/v3/conversations/threads/${threadID}/messages`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the message history for a specific thread.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const message of client.conversations.messages.list(
   *   0,
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    threadID: number,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    CollectionResponsePublicMessageForwardPagingResultsPage,
    | ConversationsAPI.ConversationsPublicConversationsMessage
    | ConversationsAPI.PublicComment
    | ConversationsAPI.PublicWelcomeMessage
    | ConversationsAPI.PublicAssignmentMessage
    | ConversationsAPI.PublicThreadStatusChange
    | ConversationsAPI.PublicThreadInboxChange
  > {
    return this._client.getAPIList(
      path`/conversations/v3/conversations/threads/${threadID}/messages`,
      Page<
        | ConversationsAPI.ConversationsPublicConversationsMessage
        | ConversationsAPI.PublicComment
        | ConversationsAPI.PublicWelcomeMessage
        | ConversationsAPI.PublicAssignmentMessage
        | ConversationsAPI.PublicThreadStatusChange
        | ConversationsAPI.PublicThreadInboxChange
      >,
      { query, ...options },
    );
  }

  /**
   * Retrieve a single message from a thread using the message ID.
   *
   * @example
   * ```ts
   * const publicMessage =
   *   await client.conversations.messages.get('messageId', {
   *     threadId: 0,
   *   });
   * ```
   */
  get(
    messageID: string,
    params: MessageGetParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicMessage> {
    const { threadId, ...query } = params;
    return this._client.get(path`/conversations/v3/conversations/threads/${threadId}/messages/${messageID}`, {
      query,
      ...options,
    });
  }

  /**
   * Returns the complete original text and rich text bodies of a message. This will
   * be different from the text and rich text in the message itself if the message's
   * `truncationStatus` is anything other than `NOT_TRUNCATED`.
   *
   * @example
   * ```ts
   * const publicMessageContent =
   *   await client.conversations.messages.getOriginalContent(
   *     'messageId',
   *     { threadId: 0 },
   *   );
   * ```
   */
  getOriginalContent(
    messageID: string,
    params: MessageGetOriginalContentParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicMessageContent> {
    const { threadId, ...query } = params;
    return this._client.get(
      path`/conversations/v3/conversations/threads/${threadId}/messages/${messageID}/original-content`,
      { query, ...options },
    );
  }
}

export type MessageCreateParams =
  | MessageCreateParams.PublicConversationsMessageEgg
  | MessageCreateParams.PublicCommentEgg;

export declare namespace MessageCreateParams {
  export interface PublicConversationsMessageEgg {}

  export interface PublicCommentEgg {}
}

export interface MessageListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * A specific property to include in the message response.
   */
  property?: string;

  /**
   * Sort direction. Valid options are `createdAt` (ascending), and `-createdAt`
   * (descending, default)
   */
  sort?: Array<string>;
}

export interface MessageGetParams {
  /**
   * Path param: The unique ID of the thread.
   */
  threadId: number;

  /**
   * Query param: A specific property to include in the message response.
   */
  property?: string;
}

export interface MessageGetOriginalContentParams {
  /**
   * Path param: The unique ID of the thread.
   */
  threadId: number;

  /**
   * Query param: A specific property to include in the original content response.
   */
  property?: string;
}

export declare namespace Messages {
  export {
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
    type MessageGetParams as MessageGetParams,
    type MessageGetOriginalContentParams as MessageGetOriginalContentParams,
  };
}

export { type CollectionResponsePublicMessageForwardPagingResultsPage };
