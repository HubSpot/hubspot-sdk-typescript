// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailsAPI from './emails';
import {
  AggregateEmailStatistics,
  BaseEmails,
  CollectionResponseWithTotalEmailStatisticInterval,
  CollectionResponseWithTotalPublicEmail,
  CollectionResponseWithTotalPublicEmailVersion,
  EmailCloneParams,
  EmailCloneRequestVNext,
  EmailCreateAbTestVariationParams,
  EmailCreateParams,
  EmailCreateRequest,
  EmailDeleteParams,
  EmailGetAbTestVariationParams,
  EmailGetHistogramParams,
  EmailGetParams,
  EmailGetRevisionParams,
  EmailListParams,
  EmailListRevisionsParams,
  EmailRestoreRevisionParams,
  EmailRestoreRevisionToDraftParams,
  EmailStatisticInterval,
  EmailStatisticsData,
  EmailUpdateDraftParams,
  EmailUpdateParams,
  EmailUpdateRequest,
  Emails,
  Interval,
  PublicButtonStyleSettings,
  PublicDividerStyleSettings,
  PublicEmail,
  PublicEmailContent,
  PublicEmailFromDetails,
  PublicEmailRecipients,
  PublicEmailStyleSettings,
  PublicEmailSubscriptionDetails,
  PublicEmailTestingDetails,
  PublicEmailToDetails,
  PublicEmailVersion,
  PublicEmailsPage,
  PublicFontStyle,
  PublicRssEmailDetails,
  PublicWebversionDetails,
  SmartEmailField,
  VersionPublicEmail,
  VersionPublicEmailsPage,
} from './emails';
import * as SingleSendAPI from './single-send';
import { BaseSingleSend, SingleSend, SingleSendCreateParams } from './single-send';
import * as CampaignsAPI from './campaigns/campaigns';
import {
  BaseCampaigns,
  BatchInputPublicCampaignBatchUpdateItem,
  BatchInputPublicCampaignDeleteInput,
  BatchInputPublicCampaignInput,
  BatchInputPublicCampaignReadInput,
  BatchResponsePublicCampaign,
  BatchResponsePublicCampaignWithAssets,
  BatchResponsePublicCampaignWithAssetsWithErrors,
  BatchResponsePublicCampaignWithErrors,
  CampaignCreateParams,
  CampaignGetParams,
  CampaignListParams,
  CampaignUpdateParams,
  Campaigns,
  CollectionResponseContactReferenceForwardPaging,
  CollectionResponsePublicCampaignAsset,
  CollectionResponsePublicCampaignAssetForwardPaging,
  CollectionResponseWithTotalPublicCampaign,
  ContactReference,
  MetricsCounters,
  PublicBudgetItem,
  PublicBudgetItemInput,
  PublicBudgetTotals,
  PublicBusinessUnit,
  PublicCampaign,
  PublicCampaignAsset,
  PublicCampaignBatchUpdateItem,
  PublicCampaignDeleteInput,
  PublicCampaignInput,
  PublicCampaignReadInput,
  PublicCampaignWithAssets,
  PublicCampaignsPage,
  PublicSpendItem,
  PublicSpendItemInput,
  RevenueAttributionAggregate,
} from './campaigns/campaigns';
import * as MarketingEventsAPI from './marketing-events/marketing-events';
import {
  AppInfo,
  AttendanceCounters,
  BaseMarketingEvents,
  BatchInputMarketingEventCreateRequestParams,
  BatchInputMarketingEventEmailSubscriber,
  BatchInputMarketingEventExternalUniqueIdentifier,
  BatchInputMarketingEventPublicObjectIDDeleteRequest,
  BatchInputMarketingEventPublicUpdateRequestFullV2,
  BatchInputMarketingEventSubscriber,
  BatchResponseMarketingEventPublicDefaultResponse,
  BatchResponseMarketingEventPublicDefaultResponseV2,
  BatchResponseMarketingEventPublicDefaultResponseV2WithErrors,
  BatchResponseSubscriberEmailResponse,
  BatchResponseSubscriberVidResponse,
  CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging,
  CollectionResponseSearchPublicResponseWrapperNoPaging,
  CollectionResponseWithTotalMarketingEventIdentifiersResponse,
  CollectionResponseWithTotalParticipationBreakdown,
  CollectionResponseWithTotalPublicList,
  ContactAssociation,
  CrmPropertyWrapper,
  EventDetailSettings,
  EventDetailSettingsURL,
  MarketingEventAssociation,
  MarketingEventCompleteRequestParams,
  MarketingEventCreateParams,
  MarketingEventCreateRequestParams,
  MarketingEventDefaultResponse,
  MarketingEventDeleteBatchByExternalEventIDParams,
  MarketingEventDeleteBatchParams,
  MarketingEventDeleteByExternalEventIDParams,
  MarketingEventEmailSubscriber,
  MarketingEventExternalUniqueIdentifier,
  MarketingEventGetByExternalEventIDParams,
  MarketingEventIdentifiersResponse,
  MarketingEventListParams,
  MarketingEventPublicDefaultResponse,
  MarketingEventPublicDefaultResponseV2,
  MarketingEventPublicObjectIDDeleteRequest,
  MarketingEventPublicReadResponse,
  MarketingEventPublicReadResponseV2,
  MarketingEventPublicReadResponseV2sPage,
  MarketingEventPublicUpdateRequestFullV2,
  MarketingEventPublicUpdateRequestV2,
  MarketingEventSearchByExternalEventIDParams,
  MarketingEventSubscriber,
  MarketingEventUpdateBatchParams,
  MarketingEventUpdateByExternalEventIDParams,
  MarketingEventUpdateParams,
  MarketingEventUpdateRequestParams,
  MarketingEventUpsertBatchParams,
  MarketingEventUpsertByExternalEventIDParams,
  MarketingEvents,
  ParticipationAssociations,
  ParticipationBreakdown,
  ParticipationProperties,
  PublicList,
  SearchPublicResponseWrapper,
  SubscriberEmailResponse,
  SubscriberVidResponse,
} from './marketing-events/marketing-events';
import * as TransactionalAPI from './transactional/transactional';
import {
  BaseTransactional,
  CollectionResponseSmtpAPITokenViewForwardPaging,
  SmtpAPITokenRequestEgg,
  SmtpAPITokenView,
  Transactional,
} from './transactional/transactional';

export class BaseMarketing extends APIResource {
  static override readonly _key: readonly ['marketing'] = Object.freeze(['marketing'] as const);
}
export class Marketing extends BaseMarketing {
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  marketingEvents: MarketingEventsAPI.MarketingEvents = new MarketingEventsAPI.MarketingEvents(this._client);
  singleSend: SingleSendAPI.SingleSend = new SingleSendAPI.SingleSend(this._client);
  transactional: TransactionalAPI.Transactional = new TransactionalAPI.Transactional(this._client);
}

export interface EmailSendStatusView {
  /**
   * Status of the send request.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * Identifier used to query the status of the send.
   */
  statusId: string;

  /**
   * Time when the send was completed.
   */
  completedAt?: string;

  eventId?: EventIDView;

  /**
   * A human readable message describing the error along with remediation steps where
   * appropriate
   */
  message?: string;

  /**
   * Time when the send was requested.
   */
  requestedAt?: string;

  /**
   * Result of the send.
   */
  sendResult?:
    | 'ADDRESS_LIST_BOMBED'
    | 'ADDRESS_ONLY_ACCEPTED_ON_PROD'
    | 'ADDRESS_OPTED_OUT'
    | 'ATTACHMENT_DOWNLOAD_QUEUE_FULL'
    | 'BLOCKED_ADDRESS'
    | 'BLOCKED_DOMAIN'
    | 'BRAND_RECIPIENT_FATIGUE_SUPPRESSED'
    | 'CAMPAIGN_CANCELLED'
    | 'CANCELLED_ABUSE'
    | 'CORRUPT_INPUT'
    | 'EMAIL_DISABLED'
    | 'EMAIL_UNCONFIRMED'
    | 'GDPR_DOI_ENABLED'
    | 'GRAYMAIL_SUPPRESSED'
    | 'HUBL_LIMIT_EXCEEDED'
    | 'IDEMPOTENT_FAIL'
    | 'IDEMPOTENT_IGNORE'
    | 'INVALID_APP_ID_ATTRIBUTION'
    | 'INVALID_FROM_ADDRESS'
    | 'INVALID_TO_ADDRESS'
    | 'LOW_CONTACT_QUALITY_SCORE'
    | 'MISSING_CONTENT'
    | 'MISSING_REQUIRED_PARAMETER'
    | 'MISSING_TEMPLATE_PROPERTIES'
    | 'MTA_IGNORE'
    | 'NON_MARKETABLE_CONTACT'
    | 'PORTAL_AUTHENTICATION_FAILURE'
    | 'PORTAL_EXPIRED'
    | 'PORTAL_MISSING_MARKETING_SCOPE'
    | 'PORTAL_NOT_AUTHORIZED_FOR_APPLICATION'
    | 'PORTAL_OVER_LIMIT'
    | 'PORTAL_SUSPENDED'
    | 'PREVIOUS_SPAM'
    | 'PREVIOUSLY_BOUNCED'
    | 'PREVIOUSLY_UNSUBSCRIBED_BRAND'
    | 'PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT'
    | 'PREVIOUSLY_UNSUBSCRIBED_MESSAGE'
    | 'PREVIOUSLY_UNSUBSCRIBED_PORTAL'
    | 'QUARANTINED_ADDRESS'
    | 'QUEUED'
    | 'RECIPIENT_FATIGUE_SUPPRESSED'
    | 'SENT'
    | 'TEMPLATE_RENDER_EXCEPTION'
    | 'THROTTLED'
    | 'TOO_MANY_RECIPIENTS'
    | 'UBB_GOVERNANCE_MISSING'
    | 'UNCONFIGURED_SENDING_DOMAIN'
    | 'UNDELIVERABLE'
    | 'VALIDATION_FAILED';

  /**
   * Time when the send began processing.
   */
  startedAt?: string;
}

export interface EventIDView {
  /**
   * Identifier of event.
   */
  id: string;

  /**
   * Time of event creation.
   */
  created: string;
}

export interface PublicSingleSendEmail {
  /**
   * List of email addresses to send as Bcc.
   */
  bcc: Array<string>;

  /**
   * List of email addresses to send as Cc.
   */
  cc: Array<string>;

  /**
   * List of Reply-To header values for the email.
   */
  replyTo: Array<string>;

  /**
   * The From header for the email.
   */
  from?: string;

  /**
   * ID for a particular send. No more than one email will be sent per sendId.
   */
  sendId?: string;

  /**
   * The recipient of the email.
   */
  to?: string;
}

export interface PublicSingleSendRequestEgg {
  /**
   * The contactProperties field is a map of contact property values. Each contact
   * property value contains a name and value property. Each property will get set on
   * the contact record and will be visible in the template under {{ contact.NAME }}.
   * Use these properties when you want to set a contact property while you’re
   * sending the email. For example, when sending a receipt you may want to set a
   * last_paid_date property, as the sending of the receipt will have information
   * about the last payment.
   */
  contactProperties: { [key: string]: string };

  /**
   * The customProperties field is a map of property values. Each property value
   * contains a name and value property. Each property will be visible in the
   * template under {{ custom.NAME }}. Note: Custom properties do not currently
   * support arrays. To provide a listing in an email, one workaround is to build an
   * HTML list (either with tables or ul) and specify it as a custom property.
   */
  customProperties: { [key: string]: unknown };

  /**
   * The content ID for the email, which can be found in email tool UI.
   */
  emailId: number;

  message: PublicSingleSendEmail;
}

Marketing.Campaigns = Campaigns;
Marketing.BaseCampaigns = BaseCampaigns;
Marketing.Emails = Emails;
Marketing.BaseEmails = BaseEmails;
Marketing.MarketingEvents = MarketingEvents;
Marketing.BaseMarketingEvents = BaseMarketingEvents;
Marketing.SingleSend = SingleSend;
Marketing.BaseSingleSend = BaseSingleSend;
Marketing.Transactional = Transactional;
Marketing.BaseTransactional = BaseTransactional;

export declare namespace Marketing {
  export {
    type EmailSendStatusView as EmailSendStatusView,
    type EventIDView as EventIDView,
    type PublicSingleSendEmail as PublicSingleSendEmail,
    type PublicSingleSendRequestEgg as PublicSingleSendRequestEgg,
  };

  export {
    Campaigns as Campaigns,
    BaseCampaigns as BaseCampaigns,
    type BatchInputPublicCampaignBatchUpdateItem as BatchInputPublicCampaignBatchUpdateItem,
    type BatchInputPublicCampaignDeleteInput as BatchInputPublicCampaignDeleteInput,
    type BatchInputPublicCampaignInput as BatchInputPublicCampaignInput,
    type BatchInputPublicCampaignReadInput as BatchInputPublicCampaignReadInput,
    type BatchResponsePublicCampaign as BatchResponsePublicCampaign,
    type BatchResponsePublicCampaignWithAssets as BatchResponsePublicCampaignWithAssets,
    type BatchResponsePublicCampaignWithAssetsWithErrors as BatchResponsePublicCampaignWithAssetsWithErrors,
    type BatchResponsePublicCampaignWithErrors as BatchResponsePublicCampaignWithErrors,
    type CollectionResponseContactReferenceForwardPaging as CollectionResponseContactReferenceForwardPaging,
    type CollectionResponsePublicCampaignAsset as CollectionResponsePublicCampaignAsset,
    type CollectionResponsePublicCampaignAssetForwardPaging as CollectionResponsePublicCampaignAssetForwardPaging,
    type CollectionResponseWithTotalPublicCampaign as CollectionResponseWithTotalPublicCampaign,
    type ContactReference as ContactReference,
    type MetricsCounters as MetricsCounters,
    type PublicBudgetItem as PublicBudgetItem,
    type PublicBudgetItemInput as PublicBudgetItemInput,
    type PublicBudgetTotals as PublicBudgetTotals,
    type PublicBusinessUnit as PublicBusinessUnit,
    type PublicCampaign as PublicCampaign,
    type PublicCampaignAsset as PublicCampaignAsset,
    type PublicCampaignBatchUpdateItem as PublicCampaignBatchUpdateItem,
    type PublicCampaignDeleteInput as PublicCampaignDeleteInput,
    type PublicCampaignInput as PublicCampaignInput,
    type PublicCampaignReadInput as PublicCampaignReadInput,
    type PublicCampaignWithAssets as PublicCampaignWithAssets,
    type PublicSpendItem as PublicSpendItem,
    type PublicSpendItemInput as PublicSpendItemInput,
    type RevenueAttributionAggregate as RevenueAttributionAggregate,
    type PublicCampaignsPage as PublicCampaignsPage,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignGetParams as CampaignGetParams,
  };

  export {
    Emails as Emails,
    BaseEmails as BaseEmails,
    type AggregateEmailStatistics as AggregateEmailStatistics,
    type CollectionResponseWithTotalEmailStatisticInterval as CollectionResponseWithTotalEmailStatisticInterval,
    type CollectionResponseWithTotalPublicEmail as CollectionResponseWithTotalPublicEmail,
    type CollectionResponseWithTotalPublicEmailVersion as CollectionResponseWithTotalPublicEmailVersion,
    type EmailCloneRequestVNext as EmailCloneRequestVNext,
    type EmailCreateRequest as EmailCreateRequest,
    type EmailStatisticInterval as EmailStatisticInterval,
    type EmailStatisticsData as EmailStatisticsData,
    type EmailUpdateRequest as EmailUpdateRequest,
    type Interval as Interval,
    type PublicButtonStyleSettings as PublicButtonStyleSettings,
    type PublicDividerStyleSettings as PublicDividerStyleSettings,
    type PublicEmail as PublicEmail,
    type PublicEmailContent as PublicEmailContent,
    type PublicEmailFromDetails as PublicEmailFromDetails,
    type PublicEmailRecipients as PublicEmailRecipients,
    type PublicEmailStyleSettings as PublicEmailStyleSettings,
    type PublicEmailSubscriptionDetails as PublicEmailSubscriptionDetails,
    type PublicEmailTestingDetails as PublicEmailTestingDetails,
    type PublicEmailToDetails as PublicEmailToDetails,
    type PublicEmailVersion as PublicEmailVersion,
    type PublicFontStyle as PublicFontStyle,
    type PublicRssEmailDetails as PublicRssEmailDetails,
    type PublicWebversionDetails as PublicWebversionDetails,
    type SmartEmailField as SmartEmailField,
    type VersionPublicEmail as VersionPublicEmail,
    type PublicEmailsPage as PublicEmailsPage,
    type VersionPublicEmailsPage as VersionPublicEmailsPage,
    type EmailCreateParams as EmailCreateParams,
    type EmailUpdateParams as EmailUpdateParams,
    type EmailListParams as EmailListParams,
    type EmailDeleteParams as EmailDeleteParams,
    type EmailCloneParams as EmailCloneParams,
    type EmailCreateAbTestVariationParams as EmailCreateAbTestVariationParams,
    type EmailGetParams as EmailGetParams,
    type EmailGetAbTestVariationParams as EmailGetAbTestVariationParams,
    type EmailGetHistogramParams as EmailGetHistogramParams,
    type EmailGetRevisionParams as EmailGetRevisionParams,
    type EmailListRevisionsParams as EmailListRevisionsParams,
    type EmailRestoreRevisionParams as EmailRestoreRevisionParams,
    type EmailRestoreRevisionToDraftParams as EmailRestoreRevisionToDraftParams,
    type EmailUpdateDraftParams as EmailUpdateDraftParams,
  };

  export {
    MarketingEvents as MarketingEvents,
    BaseMarketingEvents as BaseMarketingEvents,
    type AppInfo as AppInfo,
    type AttendanceCounters as AttendanceCounters,
    type BatchInputMarketingEventCreateRequestParams as BatchInputMarketingEventCreateRequestParams,
    type BatchInputMarketingEventEmailSubscriber as BatchInputMarketingEventEmailSubscriber,
    type BatchInputMarketingEventExternalUniqueIdentifier as BatchInputMarketingEventExternalUniqueIdentifier,
    type BatchInputMarketingEventPublicObjectIDDeleteRequest as BatchInputMarketingEventPublicObjectIDDeleteRequest,
    type BatchInputMarketingEventPublicUpdateRequestFullV2 as BatchInputMarketingEventPublicUpdateRequestFullV2,
    type BatchInputMarketingEventSubscriber as BatchInputMarketingEventSubscriber,
    type BatchResponseMarketingEventPublicDefaultResponse as BatchResponseMarketingEventPublicDefaultResponse,
    type BatchResponseMarketingEventPublicDefaultResponseV2 as BatchResponseMarketingEventPublicDefaultResponseV2,
    type BatchResponseMarketingEventPublicDefaultResponseV2WithErrors as BatchResponseMarketingEventPublicDefaultResponseV2WithErrors,
    type BatchResponseSubscriberEmailResponse as BatchResponseSubscriberEmailResponse,
    type BatchResponseSubscriberVidResponse as BatchResponseSubscriberVidResponse,
    type CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging as CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging,
    type CollectionResponseSearchPublicResponseWrapperNoPaging as CollectionResponseSearchPublicResponseWrapperNoPaging,
    type CollectionResponseWithTotalMarketingEventIdentifiersResponse as CollectionResponseWithTotalMarketingEventIdentifiersResponse,
    type CollectionResponseWithTotalParticipationBreakdown as CollectionResponseWithTotalParticipationBreakdown,
    type CollectionResponseWithTotalPublicList as CollectionResponseWithTotalPublicList,
    type ContactAssociation as ContactAssociation,
    type CrmPropertyWrapper as CrmPropertyWrapper,
    type EventDetailSettings as EventDetailSettings,
    type EventDetailSettingsURL as EventDetailSettingsURL,
    type MarketingEventAssociation as MarketingEventAssociation,
    type MarketingEventCompleteRequestParams as MarketingEventCompleteRequestParams,
    type MarketingEventCreateRequestParams as MarketingEventCreateRequestParams,
    type MarketingEventDefaultResponse as MarketingEventDefaultResponse,
    type MarketingEventEmailSubscriber as MarketingEventEmailSubscriber,
    type MarketingEventExternalUniqueIdentifier as MarketingEventExternalUniqueIdentifier,
    type MarketingEventIdentifiersResponse as MarketingEventIdentifiersResponse,
    type MarketingEventPublicDefaultResponse as MarketingEventPublicDefaultResponse,
    type MarketingEventPublicDefaultResponseV2 as MarketingEventPublicDefaultResponseV2,
    type MarketingEventPublicObjectIDDeleteRequest as MarketingEventPublicObjectIDDeleteRequest,
    type MarketingEventPublicReadResponse as MarketingEventPublicReadResponse,
    type MarketingEventPublicReadResponseV2 as MarketingEventPublicReadResponseV2,
    type MarketingEventPublicUpdateRequestFullV2 as MarketingEventPublicUpdateRequestFullV2,
    type MarketingEventPublicUpdateRequestV2 as MarketingEventPublicUpdateRequestV2,
    type MarketingEventSubscriber as MarketingEventSubscriber,
    type MarketingEventUpdateRequestParams as MarketingEventUpdateRequestParams,
    type ParticipationAssociations as ParticipationAssociations,
    type ParticipationBreakdown as ParticipationBreakdown,
    type ParticipationProperties as ParticipationProperties,
    type PublicList as PublicList,
    type SearchPublicResponseWrapper as SearchPublicResponseWrapper,
    type SubscriberEmailResponse as SubscriberEmailResponse,
    type SubscriberVidResponse as SubscriberVidResponse,
    type MarketingEventPublicReadResponseV2sPage as MarketingEventPublicReadResponseV2sPage,
    type MarketingEventCreateParams as MarketingEventCreateParams,
    type MarketingEventUpdateParams as MarketingEventUpdateParams,
    type MarketingEventListParams as MarketingEventListParams,
    type MarketingEventDeleteBatchParams as MarketingEventDeleteBatchParams,
    type MarketingEventDeleteBatchByExternalEventIDParams as MarketingEventDeleteBatchByExternalEventIDParams,
    type MarketingEventDeleteByExternalEventIDParams as MarketingEventDeleteByExternalEventIDParams,
    type MarketingEventGetByExternalEventIDParams as MarketingEventGetByExternalEventIDParams,
    type MarketingEventSearchByExternalEventIDParams as MarketingEventSearchByExternalEventIDParams,
    type MarketingEventUpdateBatchParams as MarketingEventUpdateBatchParams,
    type MarketingEventUpdateByExternalEventIDParams as MarketingEventUpdateByExternalEventIDParams,
    type MarketingEventUpsertBatchParams as MarketingEventUpsertBatchParams,
    type MarketingEventUpsertByExternalEventIDParams as MarketingEventUpsertByExternalEventIDParams,
  };

  export {
    SingleSend as SingleSend,
    BaseSingleSend as BaseSingleSend,
    type SingleSendCreateParams as SingleSendCreateParams,
  };

  export {
    Transactional as Transactional,
    BaseTransactional as BaseTransactional,
    type CollectionResponseSmtpAPITokenViewForwardPaging as CollectionResponseSmtpAPITokenViewForwardPaging,
    type SmtpAPITokenRequestEgg as SmtpAPITokenRequestEgg,
    type SmtpAPITokenView as SmtpAPITokenView,
  };
}
