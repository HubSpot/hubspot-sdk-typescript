// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ConversationsAPI from '../conversations';
import * as ChannelAccountStagingTokensAPI from './channel-account-staging-tokens';
import {
  ChannelAccountStagingTokenUpdateParams,
  ChannelAccountStagingTokens,
} from './channel-account-staging-tokens';
import * as ChannelAccountsAPI from './channel-accounts';
import {
  ChannelAccountCreateParams,
  ChannelAccountGetParams,
  ChannelAccountListParams,
  ChannelAccountUpdateParams,
  ChannelAccounts,
} from './channel-accounts';
import * as MessagesAPI from './messages';
import { MessageCreateParams, MessageGetParams, MessageUpdateParams, Messages } from './messages';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CustomChannels extends APIResource {
  channelAccountStagingTokens: ChannelAccountStagingTokensAPI.ChannelAccountStagingTokens =
    new ChannelAccountStagingTokensAPI.ChannelAccountStagingTokens(this._client);
  channelAccounts: ChannelAccountsAPI.ChannelAccounts = new ChannelAccountsAPI.ChannelAccounts(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Register a new channel along with its capabilities and the webhook url that will
   * be used to receive messages published over the channel
   *
   * @example
   * ```ts
   * const publicChannelIntegrationChannel =
   *   await client.conversations.customChannels.create({
   *     capabilities: { foo: {} },
   *     name: 'name',
   *   });
   * ```
   */
  create(
    body: CustomChannelCreateParams,
    options?: RequestOptions,
  ): APIPromise<PublicChannelIntegrationChannel> {
    return this._client.post('/conversations/v3/custom-channels/', { body, ...options });
  }

  /**
   * Update the capabilities for an existing. You can also use it to update the
   * channel's webhookUri and its channelAccountConnectionRedirectUrl.
   *
   * @example
   * ```ts
   * const publicChannelIntegrationChannel =
   *   await client.conversations.customChannels.update(0, {
   *     capabilities: { foo: {} },
   *     channelAccountConnectionRedirectUrl: {},
   *     channelDescription: {},
   *     channelLogoUrl: {},
   *     name: {},
   *     webhookUrl: {},
   *   });
   * ```
   */
  update(
    channelID: number,
    body: CustomChannelUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PublicChannelIntegrationChannel> {
    return this._client.patch(path`/conversations/v3/custom-channels/${channelID}`, { body, ...options });
  }

  /**
   * Retrieve all custom channels associated with the app.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicChannelIntegrationChannel of client.conversations.customChannels.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CustomChannelListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicChannelIntegrationChannelsPage, PublicChannelIntegrationChannel> {
    return this._client.getAPIList(
      '/conversations/v3/custom-channels/',
      Page<PublicChannelIntegrationChannel>,
      { query, ...options },
    );
  }

  /**
   * Archive an existing registered custom channel
   *
   * @example
   * ```ts
   * await client.conversations.customChannels.delete(0);
   * ```
   */
  delete(channelID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/conversations/v3/custom-channels/${channelID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the details about a custom channel. This API allows you to see a custom
   * channel's current capabilties and other configuration metadata
   *
   * @example
   * ```ts
   * const publicChannelIntegrationChannel =
   *   await client.conversations.customChannels.get(0);
   * ```
   */
  get(channelID: number, options?: RequestOptions): APIPromise<PublicChannelIntegrationChannel> {
    return this._client.get(path`/conversations/v3/custom-channels/${channelID}`, options);
  }
}

export type PublicChannelIntegrationChannelsPage = Page<PublicChannelIntegrationChannel>;

export interface ChannelIntegrationMessageEgg {
  attachments: Array<
    | FileAttachment
    | LocationAttachment
    | ContactAttachment
    | UnsupportedContentAttachment
    | MessageHeaderAttachment
    | QuickRepliesAttachment
    | SocialMetadataIntegrationAttachment
  >;

  channelAccountId: string;

  messageDirection: 'INCOMING' | 'OUTGOING';

  recipients: Array<ChannelIntegrationParticipant>;

  senders: Array<ChannelIntegrationParticipant>;

  text: string;

  timestamp: string;

  inReplyToId?: string;

  integrationIdempotencyId?: string;

  integrationThreadId?: string;

  preResolvedContacts?: PreResolvedContacts;

  richText?: string;
}

export interface ChannelIntegrationParticipant {
  deliveryIdentifier: ConversationsAPI.PublicDeliveryIdentifier;

  name?: string;
}

export interface CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging {
  results: Array<PublicChannelIntegrationChannel>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface ContactAttachment {
  contactProfile: ConversationsAPI.ContactProfile;

  type: 'CONTACT';
}

export interface FileAttachment {
  fileId: string;

  type: 'FILE';

  fileUsageType?: string;
}

export interface LocationAttachment {
  latitude: number;

  longitude: number;

  type: 'LOCATION';

  address?: string;

  name?: string;

  url?: string;
}

export interface MessageHeaderAttachment {
  type: 'MESSAGE_HEADER';

  fileId?: number;

  text?: string;
}

export interface PreResolvedContact {
  contactPropertiesLeadingToMatch: Array<string>;

  contactVid: number;
}

export interface PreResolvedContacts {
  contacts: Array<PreResolvedContact>;
}

export interface PublicChannelAccountEgg {
  authorized: boolean;

  inboxId: string;

  name: string;

  deliveryIdentifier?: ConversationsAPI.PublicDeliveryIdentifier;
}

export interface PublicChannelAccountStagingToken {
  accountToken: string;

  createdAt: string;

  genericChannelId: number;

  inboxId: number;

  userId: number;

  accountName?: string;

  deliveryIdentifier?: ConversationsAPI.PublicDeliveryIdentifier;
}

export interface PublicChannelAccountStagingTokenUpdateRequest {
  accountName: string;

  deliveryIdentifier: ConversationsAPI.PublicDeliveryIdentifier;
}

export interface PublicChannelAccountUpdateRequest {
  authorized?: boolean;

  name?: string;
}

export interface PublicChannelIntegrationChannel {
  id: string;

  capabilities: { [key: string]: unknown };

  createdAt: string;

  name: string;

  channelAccountConnectionRedirectUrl?: string;

  channelDescription?: string;

  channelLogoUrl?: string;

  webhookUrl?: string;
}

export interface PublicChannelIntegrationChannelCreate {
  capabilities: { [key: string]: unknown };

  name: string;

  channelAccountConnectionRedirectUrl?: string;

  channelDescription?: string;

  channelLogoUrl?: string;

  webhookUrl?: string;
}

export interface PublicChannelIntegrationChannelPatch {
  capabilities: { [key: string]: unknown };

  channelAccountConnectionRedirectUrl: unknown;

  channelDescription: unknown;

  channelLogoUrl: unknown;

  name: unknown;

  webhookUrl: unknown;
}

export interface PublicChannelIntegrationMessageUpdateRequest {
  /**
   * Valid status are SENT, FAILED, and READ
   */
  statusType: 'SENT' | 'FAILED' | 'READ';

  errorMessage?: string;
}

export interface PublicConversationsMessage {
  id: string;

  archived: boolean;

  attachments: Array<
    | ConversationsAPI.PublicFile
    | ConversationsAPI.PublicLocation
    | ConversationsAPI.PublicContact
    | ConversationsAPI.PublicUnsupportedContent
    | ConversationsAPI.PublicMessageHeader
    | ConversationsAPI.PublicQuickReplies
    | ConversationsAPI.PublicWhatsAppTemplateMetadata
    | ConversationsAPI.PublicSocialMetadataAttachment
  >;

  channelAccountId: string;

  channelId: string;

  client: ConversationsAPI.PublicClient;

  conversationsThreadId: string;

  createdAt: string;

  createdBy: string;

  direction: 'INCOMING' | 'OUTGOING';

  recipients: Array<ConversationsAPI.PublicRecipient>;

  senders: Array<ConversationsAPI.PublicSender>;

  text: string;

  truncationStatus: 'NOT_TRUNCATED' | 'TRUNCATED_TO_MOST_RECENT_REPLY' | 'TRUNCATED';

  type: 'MESSAGE';

  inReplyToId?: string;

  richText?: string;

  status?: ConversationsAPI.PublicMessageStatus;

  subject?: string;

  updatedAt?: string;
}

export interface QuickRepliesAttachment {
  quickReplies: Array<ConversationsAPI.QuickReply>;

  type: 'QUICK_REPLIES';
}

export interface SocialMetadataIntegrationAttachment {
  socialMetadata: ConversationsAPI.SocialMetadata;

  type: 'SOCIAL_MEDIA_METADATA';
}

export interface UnsupportedContentAttachment {
  type: 'UNSUPPORTED_CONTENT';
}

export interface CustomChannelCreateParams {
  capabilities: { [key: string]: unknown };

  name: string;

  channelAccountConnectionRedirectUrl?: string;

  channelDescription?: string;

  channelLogoUrl?: string;

  webhookUrl?: string;
}

export interface CustomChannelUpdateParams {
  capabilities: { [key: string]: unknown };

  channelAccountConnectionRedirectUrl: unknown;

  channelDescription: unknown;

  channelLogoUrl: unknown;

  name: unknown;

  webhookUrl: unknown;
}

export interface CustomChannelListParams extends PageParams {
  /**
   * Specify the default number of results to return per page.
   */
  defaultPageLength?: number;

  /**
   * Specify the sorting order for the results.
   */
  sort?: Array<string>;
}

CustomChannels.ChannelAccountStagingTokens = ChannelAccountStagingTokens;
CustomChannels.ChannelAccounts = ChannelAccounts;
CustomChannels.Messages = Messages;

export declare namespace CustomChannels {
  export {
    type ChannelIntegrationMessageEgg as ChannelIntegrationMessageEgg,
    type ChannelIntegrationParticipant as ChannelIntegrationParticipant,
    type CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging as CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging,
    type ContactAttachment as ContactAttachment,
    type FileAttachment as FileAttachment,
    type LocationAttachment as LocationAttachment,
    type MessageHeaderAttachment as MessageHeaderAttachment,
    type PreResolvedContact as PreResolvedContact,
    type PreResolvedContacts as PreResolvedContacts,
    type PublicChannelAccountEgg as PublicChannelAccountEgg,
    type PublicChannelAccountStagingToken as PublicChannelAccountStagingToken,
    type PublicChannelAccountStagingTokenUpdateRequest as PublicChannelAccountStagingTokenUpdateRequest,
    type PublicChannelAccountUpdateRequest as PublicChannelAccountUpdateRequest,
    type PublicChannelIntegrationChannel as PublicChannelIntegrationChannel,
    type PublicChannelIntegrationChannelCreate as PublicChannelIntegrationChannelCreate,
    type PublicChannelIntegrationChannelPatch as PublicChannelIntegrationChannelPatch,
    type PublicChannelIntegrationMessageUpdateRequest as PublicChannelIntegrationMessageUpdateRequest,
    type PublicConversationsMessage as PublicConversationsMessage,
    type QuickRepliesAttachment as QuickRepliesAttachment,
    type SocialMetadataIntegrationAttachment as SocialMetadataIntegrationAttachment,
    type UnsupportedContentAttachment as UnsupportedContentAttachment,
    type PublicChannelIntegrationChannelsPage as PublicChannelIntegrationChannelsPage,
    type CustomChannelCreateParams as CustomChannelCreateParams,
    type CustomChannelUpdateParams as CustomChannelUpdateParams,
    type CustomChannelListParams as CustomChannelListParams,
  };

  export {
    ChannelAccountStagingTokens as ChannelAccountStagingTokens,
    type ChannelAccountStagingTokenUpdateParams as ChannelAccountStagingTokenUpdateParams,
  };

  export {
    ChannelAccounts as ChannelAccounts,
    type ChannelAccountCreateParams as ChannelAccountCreateParams,
    type ChannelAccountUpdateParams as ChannelAccountUpdateParams,
    type ChannelAccountListParams as ChannelAccountListParams,
    type ChannelAccountGetParams as ChannelAccountGetParams,
  };

  export {
    Messages as Messages,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageGetParams as MessageGetParams,
  };
}
