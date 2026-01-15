// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConversationsAPI from '../conversations';
import * as CustomChannelsAPI from './custom-channels';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Publish a message over your custom channel
   *
   * @example
   * ```ts
   * const conversationsPublicConversationsMessage =
   *   await client.conversations.customChannels.messages.create(
   *     0,
   *     {
   *       attachments: [{ fileId: 'fileId', type: 'FILE' }],
   *       channelAccountId: 'channelAccountId',
   *       messageDirection: 'INCOMING',
   *       recipients: [
   *         {
   *           deliveryIdentifier: {
   *             type: 'type',
   *             value: 'value',
   *           },
   *         },
   *       ],
   *       senders: [
   *         {
   *           deliveryIdentifier: {
   *             type: 'type',
   *             value: 'value',
   *           },
   *         },
   *       ],
   *       text: 'text',
   *       timestamp: '2019-12-27T18:11:19.117Z',
   *     },
   *   );
   * ```
   */
  create(
    channelID: number,
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.ConversationsPublicConversationsMessage> {
    return this._client.post(path`/conversations/v3/custom-channels/${channelID}/messages`, {
      body,
      ...options,
    });
  }

  /**
   * Update a message's status to indicate if it was successfully sent, failed to
   * send, or was read. For failed messages, this can also include the error message
   * for the failure.
   *
   * @example
   * ```ts
   * const conversationsPublicConversationsMessage =
   *   await client.conversations.customChannels.messages.update(
   *     'messageId',
   *     { channelId: 0, statusType: 'FAILED' },
   *   );
   * ```
   */
  update(
    messageID: string,
    params: MessageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.ConversationsPublicConversationsMessage> {
    const { channelId, ...body } = params;
    return this._client.patch(path`/conversations/v3/custom-channels/${channelId}/messages/${messageID}`, {
      body,
      ...options,
    });
  }

  /**
   * Get the details for a specific message sent over a custom channel
   *
   * @example
   * ```ts
   * const conversationsPublicConversationsMessage =
   *   await client.conversations.customChannels.messages.get(
   *     'messageId',
   *     { channelId: 0 },
   *   );
   * ```
   */
  get(
    messageID: string,
    params: MessageGetParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.ConversationsPublicConversationsMessage> {
    const { channelId } = params;
    return this._client.get(
      path`/conversations/v3/custom-channels/${channelId}/messages/${messageID}`,
      options,
    );
  }
}

export interface MessageCreateParams {
  attachments: Array<
    | CustomChannelsAPI.FileAttachment
    | CustomChannelsAPI.LocationAttachment
    | CustomChannelsAPI.ContactAttachment
    | CustomChannelsAPI.UnsupportedContentAttachment
    | CustomChannelsAPI.MessageHeaderAttachment
    | CustomChannelsAPI.QuickRepliesAttachment
    | CustomChannelsAPI.SocialMetadataIntegrationAttachment
  >;

  channelAccountId: string;

  messageDirection: 'INCOMING' | 'OUTGOING';

  recipients: Array<CustomChannelsAPI.ChannelIntegrationParticipant>;

  senders: Array<CustomChannelsAPI.ChannelIntegrationParticipant>;

  text: string;

  timestamp: string;

  inReplyToId?: string;

  integrationIdempotencyId?: string;

  integrationThreadId?: string;

  preResolvedContacts?: CustomChannelsAPI.PreResolvedContacts;

  richText?: string;
}

export interface MessageUpdateParams {
  /**
   * Path param: The channel the message was sent over
   */
  channelId: number;

  /**
   * Body param: Valid status are SENT, FAILED, and READ
   */
  statusType: 'FAILED' | 'READ' | 'SENT';

  /**
   * Body param
   */
  errorMessage?: string;
}

export interface MessageGetParams {
  /**
   * The channel the message was sent over
   */
  channelId: number;
}

export declare namespace Messages {
  export {
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageGetParams as MessageGetParams,
  };
}
