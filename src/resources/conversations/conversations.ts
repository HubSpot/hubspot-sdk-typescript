// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActorsAPI from './actors';
import { ActorBatchReadParams, ActorGetParams, Actors } from './actors';
import * as ChannelAccountsAPI from './channel-accounts';
import { ChannelAccountGetParams, ChannelAccountListParams, ChannelAccounts } from './channel-accounts';
import * as ChannelsAPI from './channels';
import { ChannelListParams, Channels } from './channels';
import * as InboxesAPI from './inboxes';
import { InboxGetParams, InboxListParams, Inboxes } from './inboxes';
import * as MessagesAPI from './messages';
import {
  MessageCreateParams,
  MessageGetOriginalContentParams,
  MessageGetParams,
  MessageListParams,
  Messages,
} from './messages';
import * as ThreadsAPI from './threads';
import { ThreadGetParams, ThreadListParams, ThreadUpdateParams, Threads } from './threads';
import * as VisitorIdentificationAPI from './visitor-identification';
import {
  IdentificationTokenGenerationRequest,
  IdentificationTokenResponse,
  VisitorIdentification,
  VisitorIdentificationGenerateTokenParams,
} from './visitor-identification';
import * as CustomChannelsAPI from './custom-channels/custom-channels';
import {
  ChannelIntegrationMessageEgg,
  ChannelIntegrationParticipant,
  CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging,
  ContactAttachment,
  CustomChannelCreateParams,
  CustomChannelListParams,
  CustomChannelUpdateParams,
  CustomChannels,
  FileAttachment,
  LocationAttachment,
  MessageHeaderAttachment,
  PreResolvedContact,
  PreResolvedContacts,
  PublicChannelAccountEgg,
  PublicChannelAccountStagingToken,
  PublicChannelAccountStagingTokenUpdateRequest,
  PublicChannelAccountUpdateRequest,
  PublicChannelIntegrationChannel,
  PublicChannelIntegrationChannelCreate,
  PublicChannelIntegrationChannelPatch,
  PublicChannelIntegrationChannelsPage,
  PublicChannelIntegrationMessageUpdateRequest,
  PublicConversationsMessage,
  QuickRepliesAttachment,
  SocialMetadataIntegrationAttachment,
  UnsupportedContentAttachment,
} from './custom-channels/custom-channels';
import { Page } from '../../core/pagination';

export class Conversations extends APIResource {
  actors: ActorsAPI.Actors = new ActorsAPI.Actors(this._client);
  channelAccounts: ChannelAccountsAPI.ChannelAccounts = new ChannelAccountsAPI.ChannelAccounts(this._client);
  channels: ChannelsAPI.Channels = new ChannelsAPI.Channels(this._client);
  customChannels: CustomChannelsAPI.CustomChannels = new CustomChannelsAPI.CustomChannels(this._client);
  inboxes: InboxesAPI.Inboxes = new InboxesAPI.Inboxes(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
  visitorIdentification: VisitorIdentificationAPI.VisitorIdentification =
    new VisitorIdentificationAPI.VisitorIdentification(this._client);
}

export type PublicChannelAccountsPage = Page<PublicChannelAccount>;

export type PublicChannelsPage = Page<PublicChannel>;

export type PublicInboxesPage = Page<PublicInbox>;

export type PublicThreadsPage = Page<PublicThread>;

export interface AgentActor {
  id: string;

  type: 'AGENT';

  avatar?: string;

  email?: string;

  name?: string;
}

export interface BatchResponsePublicActor {
  completedAt: string;

  results: Array<PublicActor>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponsePublicActorWithErrors {
  completedAt: string;

  results: Array<PublicActor>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BotActor {
  id: string;

  type: 'BOT';

  avatar?: string;

  name?: string;
}

export interface CollectionResponsePublicMessageForwardPaging {
  results: Array<
    | ConversationsPublicConversationsMessage
    | PublicComment
    | PublicWelcomeMessage
    | PublicAssignmentMessage
    | PublicThreadStatusChange
    | PublicThreadInboxChange
  >;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponsePublicThreadForwardPaging {
  results: Array<PublicThread>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalPublicChannelAccountForwardPaging {
  results: Array<PublicChannelAccount>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalPublicChannelForwardPaging {
  results: Array<PublicChannel>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalPublicInboxForwardPaging {
  results: Array<PublicInbox>;

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

export interface ConversationsPublicConversationsMessage {
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

export interface EmailActor {
  id: string;

  email: string;

  type: 'EMAIL';
}

export interface IntegratorActor {
  id: string;

  name: string;

  type: 'INTEGRATOR';

  avatar?: string;
}

export interface LlmActor {
  id: string;

  type: 'LLM';

  avatar?: string;

  name?: string;
}

export type PublicActor =
  | AgentActor
  | BotActor
  | IntegratorActor
  | SystemActor
  | VisitorActor
  | EmailActor
  | LlmActor;

export interface PublicAssignmentMessage {
  id: string;

  archived: boolean;

  client: PublicClient;

  conversationsThreadId: string;

  createdAt: string;

  createdBy: string;

  recipients: Array<PublicRecipient>;

  senders: Array<PublicSender>;

  type: 'ASSIGNMENT';

  assignedFrom?: string;

  assignedTo?: string;

  updatedAt?: string;
}

export interface PublicChannel {
  id: string;

  name: string;
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

export interface PublicClient {
  clientType: 'HUBSPOT' | 'INTEGRATION' | 'SYSTEM' | 'UNKNOWN';

  integrationAppId?: number;
}

export interface PublicComment {
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

  client: PublicClient;

  conversationsThreadId: string;

  createdAt: string;

  createdBy: string;

  recipients: Array<PublicRecipient>;

  richText: string;

  senders: Array<PublicSender>;

  text: string;

  type: 'COMMENT';

  updatedAt?: string;
}

export interface PublicCommentEgg {
  attachments: Array<PublicFileEgg | PublicQuickRepliesEgg | PublicSocialMediaEgg>;

  text: string;

  type: 'COMMENT';

  richText?: string;
}

export interface PublicContact {
  contactProfile: ContactProfile;

  type: 'CONTACT';
}

export interface PublicConversationsMessageEgg {
  attachments: Array<PublicFileEgg | PublicQuickRepliesEgg | PublicSocialMediaEgg>;

  channelAccountId: string;

  channelId: string;

  recipients: Array<PublicRecipientEgg>;

  senderActorId: string;

  text: string;

  type: 'MESSAGE';

  richText?: string;

  subject?: string;
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

export interface PublicFileEgg {
  fileId: string;

  type: 'FILE';
}

export interface PublicInbox {
  id: string;

  archived: boolean;

  createdAt: string;

  name: string;

  type: string;

  updatedAt: string;

  archivedAt?: string;
}

export interface PublicLocation {
  latitude: number;

  longitude: number;

  type: 'LOCATION';

  address?: string;

  name?: string;

  url?: string;
}

export type PublicMessage =
  | ConversationsPublicConversationsMessage
  | PublicComment
  | PublicWelcomeMessage
  | PublicAssignmentMessage
  | PublicThreadStatusChange
  | PublicThreadInboxChange;

export interface PublicMessageContent {
  richText?: string;

  text?: string;
}

export type PublicMessageEgg = PublicConversationsMessageEgg | PublicCommentEgg;

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

export interface PublicQuickRepliesEgg {
  quickReplies: Array<QuickReply>;

  type: 'QUICK_REPLIES';
}

export interface PublicRecipient {
  deliveryIdentifier: PublicDeliveryIdentifier;

  actorId?: string;

  name?: string;

  recipientField?: string;
}

export interface PublicRecipientEgg {
  deliveryIdentifiers: Array<PublicDeliveryIdentifier>;

  actorId?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;

  name?: string;

  recipientField?: string;
}

export interface PublicSender {
  actorId?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;

  name?: string;

  senderField?: string;
}

export interface PublicSocialMediaEgg {
  socialMetadata: SocialMetadata;

  type: 'SOCIAL_MEDIA_METADATA';
}

export interface PublicSocialMetadataAttachment {
  socialMetadata: SocialMetadata;

  type: 'SOCIAL_MEDIA_METADATA';
}

export interface PublicThread {
  id: string;

  archived: boolean;

  associatedContactId: string;

  createdAt: string;

  inboxId: string;

  originalChannelAccountId: string;

  originalChannelId: string;

  spam: boolean;

  status: 'CLOSED' | 'OPEN';

  assignedTo?: string;

  closedAt?: string;

  latestMessageReceivedTimestamp?: string;

  latestMessageSentTimestamp?: string;

  latestMessageTimestamp?: string;

  threadAssociations?: PublicThreadAssociations;
}

export interface PublicThreadAssociations {
  associatedTicketId?: string;
}

export interface PublicThreadInboxChange {
  id: string;

  archived: boolean;

  client: PublicClient;

  conversationsThreadId: string;

  createdAt: string;

  createdBy: string;

  fromInboxId: string;

  recipients: Array<PublicRecipient>;

  senders: Array<PublicSender>;

  toInboxId: string;

  type: 'THREAD_INBOX_CHANGE';

  updatedAt?: string;
}

export interface PublicThreadStatusChange {
  id: string;

  archived: boolean;

  client: PublicClient;

  conversationsThreadId: string;

  createdAt: string;

  createdBy: string;

  newStatus: 'OPEN' | 'CLOSED';

  recipients: Array<PublicRecipient>;

  senders: Array<PublicSender>;

  type: 'THREAD_STATUS_CHANGE';

  updatedAt?: string;
}

export interface PublicThreadUpdateRequest {
  archived?: boolean;

  status?: 'CLOSED' | 'OPEN';
}

export interface PublicUnsupportedContent {
  type: 'UNSUPPORTED_CONTENT';
}

export interface PublicWelcomeMessage {
  id: string;

  archived: boolean;

  channelAccountId: string;

  channelId: string;

  client: PublicClient;

  conversationsThreadId: string;

  createdAt: string;

  createdBy: string;

  recipients: Array<PublicRecipient>;

  senders: Array<PublicSender>;

  text: string;

  type: 'WELCOME_MESSAGE';

  richText?: string;

  updatedAt?: string;
}

export interface PublicWhatsAppTemplateMetadata {
  crmObjectIds: { [key: string]: number };

  mappedTemplateId: string;

  parameters: { [key: string]: string };

  type: 'WHATSAPP_TEMPLATE_METADATA';
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

export interface SystemActor {
  id: string;

  type: 'SYSTEM';
}

export interface VisitorActor {
  id: string;

  type: 'VISITOR';

  avatar?: string;

  email?: string;

  name?: string;
}

Conversations.Actors = Actors;
Conversations.ChannelAccounts = ChannelAccounts;
Conversations.Channels = Channels;
Conversations.CustomChannels = CustomChannels;
Conversations.Inboxes = Inboxes;
Conversations.Messages = Messages;
Conversations.Threads = Threads;
Conversations.VisitorIdentification = VisitorIdentification;

export declare namespace Conversations {
  export {
    type AgentActor as AgentActor,
    type BatchResponsePublicActor as BatchResponsePublicActor,
    type BatchResponsePublicActorWithErrors as BatchResponsePublicActorWithErrors,
    type BotActor as BotActor,
    type CollectionResponsePublicMessageForwardPaging as CollectionResponsePublicMessageForwardPaging,
    type CollectionResponsePublicThreadForwardPaging as CollectionResponsePublicThreadForwardPaging,
    type CollectionResponseWithTotalPublicChannelAccountForwardPaging as CollectionResponseWithTotalPublicChannelAccountForwardPaging,
    type CollectionResponseWithTotalPublicChannelForwardPaging as CollectionResponseWithTotalPublicChannelForwardPaging,
    type CollectionResponseWithTotalPublicInboxForwardPaging as CollectionResponseWithTotalPublicInboxForwardPaging,
    type ContactAddress as ContactAddress,
    type ContactEmail as ContactEmail,
    type ContactName as ContactName,
    type ContactOrg as ContactOrg,
    type ContactPhone as ContactPhone,
    type ContactProfile as ContactProfile,
    type ContactURL as ContactURL,
    type ConversationsPublicConversationsMessage as ConversationsPublicConversationsMessage,
    type EmailActor as EmailActor,
    type IntegratorActor as IntegratorActor,
    type LlmActor as LlmActor,
    type PublicActor as PublicActor,
    type PublicAssignmentMessage as PublicAssignmentMessage,
    type PublicChannel as PublicChannel,
    type PublicChannelAccount as PublicChannelAccount,
    type PublicClient as PublicClient,
    type PublicComment as PublicComment,
    type PublicCommentEgg as PublicCommentEgg,
    type PublicContact as PublicContact,
    type PublicConversationsMessageEgg as PublicConversationsMessageEgg,
    type PublicDeliveryIdentifier as PublicDeliveryIdentifier,
    type PublicFile as PublicFile,
    type PublicFileEgg as PublicFileEgg,
    type PublicInbox as PublicInbox,
    type PublicLocation as PublicLocation,
    type PublicMessage as PublicMessage,
    type PublicMessageContent as PublicMessageContent,
    type PublicMessageEgg as PublicMessageEgg,
    type PublicMessageFailureDetails as PublicMessageFailureDetails,
    type PublicMessageHeader as PublicMessageHeader,
    type PublicMessageStatus as PublicMessageStatus,
    type PublicQuickReplies as PublicQuickReplies,
    type PublicQuickRepliesEgg as PublicQuickRepliesEgg,
    type PublicRecipient as PublicRecipient,
    type PublicRecipientEgg as PublicRecipientEgg,
    type PublicSender as PublicSender,
    type PublicSocialMediaEgg as PublicSocialMediaEgg,
    type PublicSocialMetadataAttachment as PublicSocialMetadataAttachment,
    type PublicThread as PublicThread,
    type PublicThreadAssociations as PublicThreadAssociations,
    type PublicThreadInboxChange as PublicThreadInboxChange,
    type PublicThreadStatusChange as PublicThreadStatusChange,
    type PublicThreadUpdateRequest as PublicThreadUpdateRequest,
    type PublicUnsupportedContent as PublicUnsupportedContent,
    type PublicWelcomeMessage as PublicWelcomeMessage,
    type PublicWhatsAppTemplateMetadata as PublicWhatsAppTemplateMetadata,
    type QuickReply as QuickReply,
    type SocialMetadata as SocialMetadata,
    type SystemActor as SystemActor,
    type VisitorActor as VisitorActor,
  };

  export {
    Actors as Actors,
    type ActorBatchReadParams as ActorBatchReadParams,
    type ActorGetParams as ActorGetParams,
  };

  export {
    ChannelAccounts as ChannelAccounts,
    type ChannelAccountListParams as ChannelAccountListParams,
    type ChannelAccountGetParams as ChannelAccountGetParams,
  };

  export { Channels as Channels, type ChannelListParams as ChannelListParams };

  export {
    CustomChannels as CustomChannels,
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
    Inboxes as Inboxes,
    type InboxListParams as InboxListParams,
    type InboxGetParams as InboxGetParams,
  };

  export {
    Messages as Messages,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
    type MessageGetParams as MessageGetParams,
    type MessageGetOriginalContentParams as MessageGetOriginalContentParams,
  };

  export {
    Threads as Threads,
    type ThreadUpdateParams as ThreadUpdateParams,
    type ThreadListParams as ThreadListParams,
    type ThreadGetParams as ThreadGetParams,
  };

  export {
    VisitorIdentification as VisitorIdentification,
    type IdentificationTokenGenerationRequest as IdentificationTokenGenerationRequest,
    type IdentificationTokenResponse as IdentificationTokenResponse,
    type VisitorIdentificationGenerateTokenParams as VisitorIdentificationGenerateTokenParams,
  };
}
