// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { PublicMessagesPage } from './conversations';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
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
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicMessage of client.conversations.messages.list(
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
  ): PagePromise<PublicMessagesPage, ConversationsAPI.PublicMessage> {
    return this._client.getAPIList(
      path`/conversations/v3/conversations/threads/${threadID}/messages`,
      Page<ConversationsAPI.PublicMessage>,
      { query, ...options },
    );
  }

  /**
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
  archived?: boolean;

  property?: string;

  sort?: Array<string>;
}

export interface MessageGetParams {
  /**
   * Path param:
   */
  threadId: number;

  /**
   * Query param:
   */
  property?: string;
}

export interface MessageGetOriginalContentParams {
  /**
   * Path param:
   */
  threadId: number;

  /**
   * Query param:
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

export { type PublicMessagesPage };
