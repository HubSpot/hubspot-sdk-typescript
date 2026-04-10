// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VisitorIdentificationAPI from './visitor-identification';
import {
  BaseVisitorIdentification,
  IdentificationTokenGenerationRequest,
  IdentificationTokenResponse,
  VisitorIdentification,
  VisitorIdentificationGenerateTokenParams,
} from './visitor-identification';
import * as CustomChannelsAPI from './custom-channels/custom-channels';
import {
  BaseCustomChannels,
  ChannelIntegrationMessageEgg,
  ChannelIntegrationParticipant,
  CollectionResponseWithTotalPublicChannelAccount,
  CollectionResponseWithTotalPublicChannelIntegrationChannel,
  ContactAddress,
  ContactAttachment,
  ContactEmail,
  ContactName,
  ContactOrg,
  ContactPhone,
  ContactProfile,
  ContactURL,
  CustomChannelCreateParams,
  CustomChannelGetParams,
  CustomChannelListParams,
  CustomChannelUpdateParams,
  CustomChannels,
  FileAttachment,
  LocationAttachment,
  MessageHeaderAttachment,
  PreResolvedContact,
  PreResolvedContacts,
  PublicChannelAccount,
  PublicChannelAccountEgg,
  PublicChannelAccountStagingToken,
  PublicChannelAccountStagingTokenUpdateRequest,
  PublicChannelAccountUpdateRequest,
  PublicChannelIntegrationChannel,
  PublicChannelIntegrationChannelCreate,
  PublicChannelIntegrationChannelPatch,
  PublicChannelIntegrationChannelsPage,
  PublicChannelIntegrationMessageUpdateRequest,
  PublicClient,
  PublicContact,
  PublicConversationsMessage,
  PublicDeliveryIdentifier,
  PublicFile,
  PublicLocation,
  PublicMessageFailureDetails,
  PublicMessageHeader,
  PublicMessageStatus,
  PublicQuickReplies,
  PublicRecipient,
  PublicSender,
  PublicSocialMetadataAttachment,
  PublicUnsupportedContent,
  PublicWhatsAppTemplateMetadata,
  QuickRepliesAttachment,
  QuickReply,
  SocialMetadata,
  SocialMetadataIntegrationAttachment,
  UnsupportedContentAttachment,
} from './custom-channels/custom-channels';

export class BaseConversations extends APIResource {
  static override readonly _key: readonly ['conversations'] = Object.freeze(['conversations'] as const);
}
export class Conversations extends BaseConversations {
  customChannels: CustomChannelsAPI.CustomChannels = new CustomChannelsAPI.CustomChannels(this._client);
  visitorIdentification: VisitorIdentificationAPI.VisitorIdentification =
    new VisitorIdentificationAPI.VisitorIdentification(this._client);
}

Conversations.CustomChannels = CustomChannels;
Conversations.BaseCustomChannels = BaseCustomChannels;
Conversations.VisitorIdentification = VisitorIdentification;
Conversations.BaseVisitorIdentification = BaseVisitorIdentification;

export declare namespace Conversations {
  export {
    CustomChannels as CustomChannels,
    BaseCustomChannels as BaseCustomChannels,
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
    type PublicChannelIntegrationChannelsPage as PublicChannelIntegrationChannelsPage,
    type CustomChannelCreateParams as CustomChannelCreateParams,
    type CustomChannelUpdateParams as CustomChannelUpdateParams,
    type CustomChannelListParams as CustomChannelListParams,
    type CustomChannelGetParams as CustomChannelGetParams,
  };

  export {
    VisitorIdentification as VisitorIdentification,
    BaseVisitorIdentification as BaseVisitorIdentification,
    type IdentificationTokenGenerationRequest as IdentificationTokenGenerationRequest,
    type IdentificationTokenResponse as IdentificationTokenResponse,
    type VisitorIdentificationGenerateTokenParams as VisitorIdentificationGenerateTokenParams,
  };
}
