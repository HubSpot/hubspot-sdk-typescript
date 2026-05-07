// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ChannelAccountsAPI from './channel-accounts';
import {
  BaseChannelAccounts,
  ChannelAccountCreateParams,
  ChannelAccountListParams,
  ChannelAccountUpdateParams,
  ChannelAccountUpdateStagingTokenParams,
  ChannelAccounts,
} from './channel-accounts';
import * as MessagesAPI from './messages';
import {
  BaseMessages,
  MessageCreateParams,
  MessageGetParams,
  MessageUpdateParams,
  Messages,
} from './messages';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCustomChannels extends APIResource {
  static override readonly _key: readonly ['conversations', 'customChannels'] = Object.freeze([
    'conversations',
    'customChannels',
  ] as const);

  create(
    body: CustomChannelCreateParams,
    options?: RequestOptions,
  ): APIPromise<PublicChannelIntegrationChannel> {
    return this._client.post('/conversations/custom-channels/2026-03', { body, ...options });
  }

  /**
   * Update the capabilities for an existing. You can also use it to update the
   * channel's webhookUri and its channelAccountConnectionRedirectUrl.
   */
  update(
    channelID: number,
    body: CustomChannelUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PublicChannelIntegrationChannel> {
    return this._client.patch(path`/conversations/custom-channels/2026-03/${channelID}`, {
      body,
      ...options,
    });
  }

  list(
    query: CustomChannelListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicChannelIntegrationChannelsPage, PublicChannelIntegrationChannel> {
    return this._client.getAPIList(
      '/conversations/custom-channels/2026-03',
      Page<PublicChannelIntegrationChannel>,
      { query, ...options },
    );
  }

  /**
   * Archive an existing registered custom channel
   */
  delete(channelID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/conversations/custom-channels/2026-03/${channelID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the details for a specific channel account. This contains all the
   * metadata about your channel account, including its channel, associated inbox id,
   * and delivery identifier information.
   */
  get(
    channelAccountID: number,
    params: CustomChannelGetParams,
    options?: RequestOptions,
  ): APIPromise<PublicChannelAccount> {
    const { channelId, ...query } = params;
    return this._client.get(
      path`/conversations/custom-channels/2026-03/${channelId}/channel-accounts/${channelAccountID}`,
      { query, ...options },
    );
  }
}
export class CustomChannels extends BaseCustomChannels {
  channelAccounts: ChannelAccountsAPI.ChannelAccounts = new ChannelAccountsAPI.ChannelAccounts(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
}

export type PublicChannelIntegrationChannelsPage = Page<PublicChannelIntegrationChannel>;

export type PublicChannelAccountsPage = Page<PublicChannelAccount>;

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

  associateWithContactId?: number;

  inReplyToId?: string;

  integrationIdempotencyId?: string;

  integrationThreadId?: string;

  richText?: string;
}

export interface ChannelIntegrationParticipant {
  deliveryIdentifier: PublicDeliveryIdentifier;

  name?: string;

  senderActorId?: string;
}

export interface CollectionResponseWithTotalPublicChannelAccount {
  results: Array<PublicChannelAccount>;

  total: number;

  paging?: Shared.Paging;
}

export interface CollectionResponseWithTotalPublicChannelIntegrationChannel {
  results: Array<PublicChannelIntegrationChannel>;

  total: number;

  paging?: Shared.Paging;
}

export interface ContactAddress {
  city?: string;

  country?: string;

  countryCode?: string;

  state?: string;

  street?: string;

  type?: 'HOME' | 'WORK';

  zip?: string;
}

export interface ContactAttachment {
  contactProfile: ContactProfile;

  type: 'CONTACT';
}

export interface ContactEmail {
  email: string;

  type?: 'HOME' | 'WORK';
}

export interface ContactName {
  firstName?: string;

  lastName?: string;

  middleName?: string;

  prefix?: string;

  suffix?: string;
}

export interface ContactOrg {
  company?: string;

  department?: string;

  title?: string;
}

export interface ContactPhone {
  phone: string;

  type?: 'CELL' | 'HOME' | 'MAIN' | 'WORK';
}

export interface ContactProfile {
  addresses: Array<ContactAddress>;

  emails: Array<ContactEmail>;

  phones: Array<ContactPhone>;

  urls: Array<ContactURL>;

  name?: ContactName;

  org?: ContactOrg;
}

export interface ContactURL {
  url: string;

  type?: 'HOME' | 'WORK';
}

export interface FileAttachment {
  fileId: string;

  type: 'FILE';

  fileUsageType?: 'AUDIO' | 'IMAGE' | 'OTHER' | 'STICKER' | 'VOICE_RECORDING';
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

export interface PublicChannelAccount {
  id: string;

  active: boolean;

  archived: boolean;

  authorized: boolean;

  channelId: string;

  createdAt: string;

  inboxId: string;

  name: string;

  archivedAt?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountEgg {
  authorized: boolean;

  inboxId: string;

  name: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountStagingToken {
  accountToken: string;

  createdAt: string;

  genericChannelId: number;

  inboxId: number;

  userId: number;

  accountName?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountStagingTokenUpdateRequest {
  accountName?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
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
  statusType: 'FAILED' | 'READ' | 'SENT';

  errorMessage?: string;
}

export interface PublicClient {
  clientType: 'HUBSPOT' | 'INTEGRATION' | 'SYSTEM' | 'UNKNOWN';

  integrationAppId?: number;
}

export interface PublicContact {
  contactProfile: ContactProfile;

  type: 'CONTACT';
}

export interface PublicConversationsMessage {
  id: string;

  archived: boolean;

  attachments: Array<
    | PublicFile
    | PublicLocation
    | PublicContact
    | PublicUnsupportedContent
    | PublicMessageHeader
    | PublicQuickReplies
    | PublicWhatsAppTemplateMetadata
    | PublicSocialMetadataAttachment
  >;

  channelAccountId: string;

  channelId: string;

  client: PublicClient;

  conversationsThreadId: string;

  createdAt: string;

  createdBy: string;

  direction: 'INCOMING' | 'OUTGOING';

  recipients: Array<PublicRecipient>;

  senders: Array<PublicSender>;

  text: string;

  truncationStatus: 'NOT_TRUNCATED' | 'TRUNCATED' | 'TRUNCATED_TO_MOST_RECENT_REPLY';

  type: 'MESSAGE';

  inReplyToId?: string;

  richText?: string;

  status?: PublicMessageStatus;

  subject?: string;

  updatedAt?: string;
}

export interface PublicDeliveryIdentifier {
  type: 'CHANNEL_SPECIFIC_OPAQUE_ID' | 'HS_EMAIL_ADDRESS' | 'HS_PHONE_NUMBER' | 'HS_SHORT_CODE';

  value: string;
}

export interface PublicFile {
  fileId: string;

  fileUsageType: 'AUDIO' | 'IMAGE' | 'OTHER' | 'STICKER' | 'VOICE_RECORDING';

  type: 'FILE';

  name?: string;

  url?: string;
}

export interface PublicLocation {
  latitude: number;

  longitude: number;

  type: 'LOCATION';

  address?: string;

  name?: string;

  url?: string;
}

export interface PublicMessageFailureDetails {
  errorMessageTokens: { [key: string]: string };

  errorMessage?: string;
}

export interface PublicMessageHeader {
  type: 'MESSAGE_HEADER';

  fileId?: number;

  text?: string;
}

export interface PublicMessageStatus {
  statusType: 'FAILED' | 'READ' | 'RECEIVED' | 'SENT';

  failureDetails?: PublicMessageFailureDetails;
}

export interface PublicQuickReplies {
  allowMultiSelect: boolean;

  allowUserInput: boolean;

  quickReplies: Array<QuickReply>;

  type: 'QUICK_REPLIES';
}

export interface PublicRecipient {
  deliveryIdentifier: PublicDeliveryIdentifier;

  actorId?: string;

  name?: string;

  recipientField?: string;
}

export interface PublicSender {
  actorId?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;

  name?: string;

  senderField?: string;
}

export interface PublicSocialMetadataAttachment {
  socialMetadata: SocialMetadata;

  type: 'SOCIAL_MEDIA_METADATA';
}

export interface PublicUnsupportedContent {
  type: 'UNSUPPORTED_CONTENT';
}

export interface PublicWhatsAppTemplateMetadata {
  crmObjectIds: { [key: string]: number };

  parameters: { [key: string]: string };

  type: 'WHATSAPP_TEMPLATE_METADATA';

  contentId?: number;

  mappedTemplateId?: number;

  rootMicId?: number;
}

export interface QuickRepliesAttachment {
  quickReplies: Array<QuickReply>;

  type: 'QUICK_REPLIES';
}

export interface QuickReply {
  value: string;

  valueType: 'TEXT' | 'URL';

  label?: string;
}

export interface SocialMetadata {
  mediaType:
    | 'ARTICLE'
    | 'AUDIO'
    | 'CAROUSEL'
    | 'DOCUMENT'
    | 'GIF'
    | 'LINK'
    | 'NONE'
    | 'PHOTO'
    | 'POLL'
    | 'STORY'
    | 'VIDEO';

  id?: string;

  description?: string;

  mediaTitle?: string;

  mediaUrl?: string;

  mediaUrlString?: string;

  thumbnailUrl?: string;
}

export interface SocialMetadataIntegrationAttachment {
  socialMetadata: SocialMetadata;

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
  defaultPageLength?: number;

  sort?: Array<string>;
}

export interface CustomChannelGetParams {
  /**
   * Path param
   */
  channelId: number;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

CustomChannels.ChannelAccounts = ChannelAccounts;
CustomChannels.BaseChannelAccounts = BaseChannelAccounts;
CustomChannels.Messages = Messages;
CustomChannels.BaseMessages = BaseMessages;

export declare namespace CustomChannels {
  export {
    type ChannelIntegrationMessageEgg as ChannelIntegrationMessageEgg,
    type ChannelIntegrationParticipant as ChannelIntegrationParticipant,
    type CollectionResponseWithTotalPublicChannelAccount as CollectionResponseWithTotalPublicChannelAccount,
    type CollectionResponseWithTotalPublicChannelIntegrationChannel as CollectionResponseWithTotalPublicChannelIntegrationChannel,
    type ContactAddress as ContactAddress,
    type ContactAttachment as ContactAttachment,
    type ContactEmail as ContactEmail,
    type ContactName as ContactName,
    type ContactOrg as ContactOrg,
    type ContactPhone as ContactPhone,
    type ContactProfile as ContactProfile,
    type ContactURL as ContactURL,
    type FileAttachment as FileAttachment,
    type LocationAttachment as LocationAttachment,
    type MessageHeaderAttachment as MessageHeaderAttachment,
    type PublicChannelAccount as PublicChannelAccount,
    type PublicChannelAccountEgg as PublicChannelAccountEgg,
    type PublicChannelAccountStagingToken as PublicChannelAccountStagingToken,
    type PublicChannelAccountStagingTokenUpdateRequest as PublicChannelAccountStagingTokenUpdateRequest,
    type PublicChannelAccountUpdateRequest as PublicChannelAccountUpdateRequest,
    type PublicChannelIntegrationChannel as PublicChannelIntegrationChannel,
    type PublicChannelIntegrationChannelCreate as PublicChannelIntegrationChannelCreate,
    type PublicChannelIntegrationChannelPatch as PublicChannelIntegrationChannelPatch,
    type PublicChannelIntegrationMessageUpdateRequest as PublicChannelIntegrationMessageUpdateRequest,
    type PublicClient as PublicClient,
    type PublicContact as PublicContact,
    type PublicConversationsMessage as PublicConversationsMessage,
    type PublicDeliveryIdentifier as PublicDeliveryIdentifier,
    type PublicFile as PublicFile,
    type PublicLocation as PublicLocation,
    type PublicMessageFailureDetails as PublicMessageFailureDetails,
    type PublicMessageHeader as PublicMessageHeader,
    type PublicMessageStatus as PublicMessageStatus,
    type PublicQuickReplies as PublicQuickReplies,
    type PublicRecipient as PublicRecipient,
    type PublicSender as PublicSender,
    type PublicSocialMetadataAttachment as PublicSocialMetadataAttachment,
    type PublicUnsupportedContent as PublicUnsupportedContent,
    type PublicWhatsAppTemplateMetadata as PublicWhatsAppTemplateMetadata,
    type QuickRepliesAttachment as QuickRepliesAttachment,
    type QuickReply as QuickReply,
    type SocialMetadata as SocialMetadata,
    type SocialMetadataIntegrationAttachment as SocialMetadataIntegrationAttachment,
    type UnsupportedContentAttachment as UnsupportedContentAttachment,
    type PublicChannelIntegrationChannelsPage as PublicChannelIntegrationChannelsPage,
    type CustomChannelCreateParams as CustomChannelCreateParams,
    type CustomChannelUpdateParams as CustomChannelUpdateParams,
    type CustomChannelListParams as CustomChannelListParams,
    type CustomChannelGetParams as CustomChannelGetParams,
  };

  export {
    ChannelAccounts as ChannelAccounts,
    BaseChannelAccounts as BaseChannelAccounts,
    type ChannelAccountCreateParams as ChannelAccountCreateParams,
    type ChannelAccountUpdateParams as ChannelAccountUpdateParams,
    type ChannelAccountListParams as ChannelAccountListParams,
    type ChannelAccountUpdateStagingTokenParams as ChannelAccountUpdateStagingTokenParams,
  };

  export {
    Messages as Messages,
    BaseMessages as BaseMessages,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageGetParams as MessageGetParams,
  };
}
