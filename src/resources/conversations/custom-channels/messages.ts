// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomChannelsAPI from './custom-channels';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Publish a message
   */
  create(
    channelID: string,
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicConversationsMessage> {
    return this._client.post(path`/conversations/v3/custom-channels/${channelID}/messages`, {
      body,
      ...options,
    });
  }

  /**
   * Get a message
   */
  get(
    messageID: string,
    params: MessageGetParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicConversationsMessage> {
    const { channelId } = params;
    return this._client.get(
      path`/conversations/v3/custom-channels/${channelId}/messages/${messageID}`,
      options,
    );
  }

  /**
   * Update a message
   */
  updateStatus(
    messageID: string,
    params: MessageUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicConversationsMessage> {
    const { channelId, ...body } = params;
    return this._client.patch(path`/conversations/v3/custom-channels/${channelId}/messages/${messageID}`, {
      body,
      ...options,
    });
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

  integrationThreadId: string;

  messageDirection: 'INCOMING' | 'OUTGOING';

  recipients: Array<CustomChannelsAPI.ChannelIntegrationParticipant>;

  senders: Array<CustomChannelsAPI.ChannelIntegrationParticipant>;

  text: string;

  timestamp: string;

  inReplyToId?: string;

  integrationIdempotencyId?: string;

  preResolvedContacts?: CustomChannelsAPI.PreResolvedContacts;

  richText?: string;
}

export interface MessageGetParams {
  channelId: string;
}

export interface MessageUpdateStatusParams {
  /**
   * Path param:
   */
  channelId: string;

  /**
   * Body param:
   */
  statusType: 'SENT' | 'FAILED' | 'READ';

  /**
   * Body param:
   */
  errorMessage?: string;
}

export declare namespace Messages {
  export {
    type MessageCreateParams as MessageCreateParams,
    type MessageGetParams as MessageGetParams,
    type MessageUpdateStatusParams as MessageUpdateStatusParams,
  };
}
