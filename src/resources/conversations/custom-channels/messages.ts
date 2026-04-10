// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomChannelsAPI from './custom-channels';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseMessages extends APIResource {
  static override readonly _key: readonly ['conversations', 'customChannels', 'messages'] = Object.freeze([
    'conversations',
    'customChannels',
    'messages',
  ] as const);

  /**
   * Publish a message over your custom channel
   */
  create(
    channelID: number,
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicConversationsMessage> {
    return this._client.post(path`/conversations/custom-channels/2026-03/${channelID}/messages`, {
      body,
      ...options,
    });
  }

  /**
   * Update a message's status to indicate if it was successfully sent, failed to
   * send, or was read. For failed messages, this can also include the error message
   * for the failure.
   */
  update(
    messageID: string,
    params: MessageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicConversationsMessage> {
    const { channelId, ...body } = params;
    return this._client.patch(
      path`/conversations/custom-channels/2026-03/${channelId}/messages/${messageID}`,
      { body, ...options },
    );
  }

  /**
   * Get the details for a specific message sent over a custom channel
   */
  get(
    messageID: string,
    params: MessageGetParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicConversationsMessage> {
    const { channelId } = params;
    return this._client.get(
      path`/conversations/custom-channels/2026-03/${channelId}/messages/${messageID}`,
      options,
    );
  }
}
export class Messages extends BaseMessages {}

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

  associateWithContactId?: number;

  inReplyToId?: string;

  integrationIdempotencyId?: string;

  integrationThreadId?: string;

  preResolvedContacts?: CustomChannelsAPI.PreResolvedContacts;

  richText?: string;
}

export interface MessageUpdateParams {
  /**
   * Path param
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
  channelId: number;
}

export declare namespace Messages {
  export {
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageGetParams as MessageGetParams,
  };
}
