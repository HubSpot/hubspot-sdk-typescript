// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';

export class CustomChannels extends APIResource {}

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

  integrationThreadId: string;

  messageDirection: 'INCOMING' | 'OUTGOING';

  recipients: Array<ChannelIntegrationParticipant>;

  senders: Array<ChannelIntegrationParticipant>;

  text: string;

  timestamp: string;

  inReplyToId?: string;

  integrationIdempotencyId?: string;

  preResolvedContacts?: PreResolvedContacts;

  richText?: string;
}

export interface ChannelIntegrationParticipant {
  deliveryIdentifier: PublicDeliveryIdentifier;

  name?: string;
}

export interface CollectionResponseWithTotalPublicChannelAccountForwardPaging {
  results: Array<PublicChannelAccount>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging {
  results: Array<PublicChannelIntegrationChannel>;

  total: number;

  paging?: Shared.ForwardPaging;
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

  type?: 'CELL' | 'MAIN' | 'HOME' | 'WORK';
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
  accountName: string;

  deliveryIdentifier: PublicDeliveryIdentifier;
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

  channelDescription: unknown;

  channelLogoUrl: unknown;

  channelAccountConnectionRedirectUrl?: unknown;

  name?: unknown;

  webhookUrl?: unknown;
}

export interface PublicChannelIntegrationMessageUpdateRequest {
  /**
   * Valid status are SENT, FAILED, and READ
   */
  statusType: 'SENT' | 'FAILED' | 'READ';

  errorMessage?: string;
}

export interface PublicClient {
  clientType: 'HUBSPOT' | 'SYSTEM' | 'INTEGRATION' | 'UNKNOWN';

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

  truncationStatus: 'NOT_TRUNCATED' | 'TRUNCATED_TO_MOST_RECENT_REPLY' | 'TRUNCATED';

  type: 'MESSAGE';

  inReplyToId?: string;

  richText?: string;

  status?: PublicMessageStatus;

  subject?: string;

  updatedAt?: string;
}

export interface PublicDeliveryIdentifier {
  type: string;

  value: string;
}

export interface PublicFile {
  fileId: string;

  fileUsageType: string;

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
  statusType: 'SENT' | 'FAILED' | 'RECEIVED' | 'READ';

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

  mappedTemplateId: string;

  parameters: { [key: string]: string };

  type: 'WHATSAPP_TEMPLATE_METADATA';
}

export interface QuickRepliesAttachment {
  quickReplies: Array<QuickReply>;

  type: 'QUICK_REPLIES';
}

export interface QuickReply {
  value: string;

  valueType: string;

  label?: string;
}

export interface SocialMetadata {
  mediaType: string;

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

export declare namespace CustomChannels {
  export {
    type ChannelIntegrationMessageEgg as ChannelIntegrationMessageEgg,
    type ChannelIntegrationParticipant as ChannelIntegrationParticipant,
    type CollectionResponseWithTotalPublicChannelAccountForwardPaging as CollectionResponseWithTotalPublicChannelAccountForwardPaging,
    type CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging as CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging,
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
    type PreResolvedContact as PreResolvedContact,
    type PreResolvedContacts as PreResolvedContacts,
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
  };
}
