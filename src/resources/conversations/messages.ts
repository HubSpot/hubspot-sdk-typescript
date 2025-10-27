// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Send a new message on a thread at the current timestamp.
   *
   * @example
   * ```ts
   * const publicMessage =
   *   await client.conversations.messages.create('threadId');
   * ```
   */
  create(
    threadID: string,
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
   * const collectionResponsePublicMessageForwardPaging =
   *   await client.conversations.messages.list('threadId');
   * ```
   */
  list(
    threadID: string,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.CollectionResponsePublicMessageForwardPaging> {
    return this._client.get(path`/conversations/v3/conversations/threads/${threadID}/messages`, options);
  }

  /**
   * Retrieve a single message from a thread using the message ID.
   *
   * @example
   * ```ts
   * const publicMessage =
   *   await client.conversations.messages.get('messageId', {
   *     threadId: 'threadId',
   *   });
   * ```
   */
  get(
    messageID: string,
    params: MessageGetParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicMessage> {
    const { threadId } = params;
    return this._client.get(
      path`/conversations/v3/conversations/threads/${threadId}/messages/${messageID}`,
      options,
    );
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
   *     { threadId: 'threadId' },
   *   );
   * ```
   */
  getOriginalContent(
    messageID: string,
    params: MessageGetOriginalContentParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicMessageContent> {
    const { threadId } = params;
    return this._client.get(
      path`/conversations/v3/conversations/threads/${threadId}/messages/${messageID}/original-content`,
      options,
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

export interface MessageGetParams {
  threadId: string;
}

export interface MessageGetOriginalContentParams {
  threadId: string;
}

export declare namespace Messages {
  export {
    type MessageCreateParams as MessageCreateParams,
    type MessageGetParams as MessageGetParams,
    type MessageGetOriginalContentParams as MessageGetOriginalContentParams,
  };
}
