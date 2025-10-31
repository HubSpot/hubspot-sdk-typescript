// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConversationsAPI from '../conversations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Publish a message over your custom channel
   *
   * @example
   * ```ts
   * const publicConversationsMessage =
   *   await client.conversations.customChannels.messages.create(
   *     'channelId',
   *     {
   *       attachments: [{ fileId: 'fileId', type: 'FILE' }],
   *       channelAccountId: 'channelAccountId',
   *       integrationThreadId: 'integrationThreadId',
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
    channelID: string,
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicConversationsMessage> {
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
   * const publicConversationsMessage =
   *   await client.conversations.customChannels.messages.update(
   *     'messageId',
   *     { channelId: 'channelId', statusType: 'SENT' },
   *   );
   * ```
   */
  update(
    messageID: string,
    params: MessageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicConversationsMessage> {
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
   * const publicConversationsMessage =
   *   await client.conversations.customChannels.messages.get(
   *     'messageId',
   *     { channelId: 'channelId' },
   *   );
   * ```
   */
  get(
    messageID: string,
    params: MessageGetParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicConversationsMessage> {
    const { channelId } = params;
    return this._client.get(
      path`/conversations/v3/custom-channels/${channelId}/messages/${messageID}`,
      options,
    );
  }
}

export interface MessageCreateParams {
  attachments: Array<
    | MessageCreateParams.ConversationsCustomchannelsFileAttachment
    | MessageCreateParams.ConversationsCustomchannelsLocationAttachment
    | MessageCreateParams.ConversationsCustomchannelsContactAttachment
    | MessageCreateParams.ConversationsCustomchannelsUnsupportedContentAttachment
    | MessageCreateParams.ConversationsCustomchannelsMessageHeaderAttachment
    | MessageCreateParams.ConversationsCustomchannelsQuickRepliesAttachment
    | MessageCreateParams.ConversationsCustomchannelsSocialMetadataIntegrationAttachment
  >;

  channelAccountId: string;

  integrationThreadId: string;

  messageDirection: 'INCOMING' | 'OUTGOING';

  recipients: Array<MessageCreateParams.Recipient>;

  senders: Array<MessageCreateParams.Sender>;

  text: string;

  timestamp: string;

  inReplyToId?: string;

  integrationIdempotencyId?: string;

  preResolvedContacts?: MessageCreateParams.PreResolvedContacts;

  richText?: string;
}

export namespace MessageCreateParams {
  export interface ConversationsCustomchannelsFileAttachment {
    fileId: string;

    type: 'FILE';

    fileUsageType?: string;
  }

  export interface ConversationsCustomchannelsLocationAttachment {
    latitude: number;

    longitude: number;

    type: 'LOCATION';

    address?: string;

    name?: string;

    url?: string;
  }

  export interface ConversationsCustomchannelsContactAttachment {
    contactProfile: ConversationsAPI.ContactProfile;

    type: 'CONTACT';
  }

  export interface ConversationsCustomchannelsUnsupportedContentAttachment {
    type: 'UNSUPPORTED_CONTENT';
  }

  export interface ConversationsCustomchannelsMessageHeaderAttachment {
    type: 'MESSAGE_HEADER';

    fileId?: number;

    text?: string;
  }

  export interface ConversationsCustomchannelsQuickRepliesAttachment {
    quickReplies: Array<ConversationsAPI.QuickReply>;

    type: 'QUICK_REPLIES';
  }

  export interface ConversationsCustomchannelsSocialMetadataIntegrationAttachment {
    socialMetadata: ConversationsAPI.SocialMetadata;

    type: 'SOCIAL_MEDIA_METADATA';
  }

  export interface Recipient {
    deliveryIdentifier: ConversationsAPI.PublicDeliveryIdentifier;

    name?: string;
  }

  export interface Sender {
    deliveryIdentifier: ConversationsAPI.PublicDeliveryIdentifier;

    name?: string;
  }

  export interface PreResolvedContacts {
    contacts: Array<PreResolvedContacts.Contact>;
  }

  export namespace PreResolvedContacts {
    export interface Contact {
      contactPropertiesLeadingToMatch: Array<string>;

      contactVid: number;
    }
  }
}

export interface MessageUpdateParams {
  /**
   * Path param:
   */
  channelId: string;

  /**
   * Body param: Valid status are SENT, FAILED, and READ
   */
  statusType: 'SENT' | 'FAILED' | 'READ';

  /**
   * Body param:
   */
  errorMessage?: string;
}

export interface MessageGetParams {
  channelId: string;
}

export declare namespace Messages {
  export {
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageGetParams as MessageGetParams,
  };
}
