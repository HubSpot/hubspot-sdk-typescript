// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FormsAPI from './forms';
import {
  CollectionResponseFormDefinitionBaseForwardPaging,
  DatepickerField,
  DependentField,
  DependentFieldFilter,
  DropdownField,
  EmailField,
  EmailFieldValidation,
  EnumeratedFieldOption,
  FieldGroup,
  FileField,
  FormCreateParams,
  FormDefinitionBase,
  FormDefinitionCreateRequestBase,
  FormDisplayOptions,
  FormGetParams,
  FormListParams,
  FormPostSubmitAction,
  FormReplaceParams,
  FormStyle,
  FormUpdateParams,
  Forms,
  HubSpotFormConfiguration,
  HubSpotFormDefinition,
  HubSpotFormDefinitionCreateRequest,
  HubSpotFormDefinitionPatchRequest,
  HubSpotFormDefinitionsPage,
  LegalConsentCheckbox,
  LegalConsentOptionsExplicitConsentToProcess,
  LegalConsentOptionsImplicitConsentToProcess,
  LegalConsentOptionsLegitimateInterest,
  LegalConsentOptionsNone,
  LifecycleStage,
  MobilePhoneField,
  MultiLineTextField,
  MultipleCheckboxesField,
  NumberField,
  NumberFieldValidation,
  PaymentLinkRadioField,
  PhoneField,
  PhoneFieldValidation,
  RadioField,
  SingleCheckboxField,
  SingleLineTextField,
} from './forms';
import * as SingleSendAPI from './single-send';
import { SingleSend, SingleSendSendParams } from './single-send';
import * as CampaignsAPI from './campaigns/campaigns';
import {
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
  CollectionResponseWithTotalPublicCampaignForwardPaging,
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
import * as EmailsAPI from './emails/emails';
import {
  AggregateEmailStatistics,
  CollectionResponseWithTotalEmailStatisticIntervalNoPaging,
  CollectionResponseWithTotalPublicEmailForwardPaging,
  CollectionResponseWithTotalVersionPublicEmail,
  EmailCloneParams,
  EmailCloneRequestVNext,
  EmailCreateAbTestVariationParams,
  EmailCreateParams,
  EmailCreateRequest,
  EmailDeleteParams,
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
  EmailsPaging,
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
  PublicEmailsPage,
  PublicFontStyle,
  PublicRssEmailDetails,
  PublicWebversionDetails,
  SmartEmailField,
  VersionPublicEmail,
  VersionPublicEmailsPage,
} from './emails/emails';
import * as EventsAPI from './events/events';
import {
  AppInfo,
  AttendanceCounters,
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
  CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging,
  CollectionResponseWithTotalParticipationBreakdownForwardPaging,
  CollectionResponseWithTotalPublicListNoPaging,
  ContactAssociation,
  CrmPropertyWrapper,
  EventCancelByExternalEventIDParams,
  EventCompleteByExternalEventIDParams,
  EventCreateParams,
  EventDeleteBatchByExternalEventIDParams,
  EventDeleteBatchParams,
  EventDeleteByExternalEventIDParams,
  EventDetailSettings,
  EventDetailSettingsURL,
  EventGetByExternalEventIDParams,
  EventListParams,
  EventSearchByExternalEventIDParams,
  EventUpdateBatchParams,
  EventUpdateByExternalEventIDParams,
  EventUpdateParams,
  EventUpsertBatchParams,
  EventUpsertByExternalEventIDParams,
  EventUpsertSubscriberStateByEmailParams,
  EventUpsertSubscriberStateByIDParams,
  Events,
  MarketingEventAssociation,
  MarketingEventCompleteRequestParams,
  MarketingEventCreateRequestParams,
  MarketingEventDefaultResponse,
  MarketingEventEmailSubscriber,
  MarketingEventExternalUniqueIdentifier,
  MarketingEventIdentifiersResponse,
  MarketingEventPublicDefaultResponse,
  MarketingEventPublicDefaultResponseV2,
  MarketingEventPublicObjectIDDeleteRequest,
  MarketingEventPublicReadResponse,
  MarketingEventPublicReadResponseV2,
  MarketingEventPublicReadResponseV2sPage,
  MarketingEventPublicUpdateRequestFullV2,
  MarketingEventPublicUpdateRequestV2,
  MarketingEventSubscriber,
  MarketingEventUpdateRequestParams,
  ParticipationAssociations,
  ParticipationBreakdown,
  ParticipationProperties,
  PropertyValue,
  PublicList,
  SearchPublicResponseWrapper,
  SubscriberEmailResponse,
  SubscriberVidResponse,
} from './events/events';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import {
  PublicSubscriptionStatus,
  PublicSubscriptionStatusesResponse,
  PublicUpdateSubscriptionStatusRequest,
  SubscriptionDefinition,
  SubscriptionDefinitionsResponse,
  SubscriptionSubscribeParams,
  SubscriptionUnsubscribeParams,
  Subscriptions,
} from './subscriptions/subscriptions';
import * as TransactionalAPI from './transactional/transactional';
import {
  CollectionResponseSmtpAPITokenViewForwardPaging,
  SmtpAPITokenRequestEgg,
  SmtpAPITokenView,
  Transactional,
} from './transactional/transactional';

export class Marketing extends APIResource {
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  forms: FormsAPI.Forms = new FormsAPI.Forms(this._client);
  singleSend: SingleSendAPI.SingleSend = new SingleSendAPI.SingleSend(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  transactional: TransactionalAPI.Transactional = new TransactionalAPI.Transactional(this._client);
}

/**
 * Describes the status of an email send request.
 */
export interface EmailSendStatusView {
  /**
   * Status of the send request.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * Identifier used to query the status of the send.
   */
  statusId: string;

  /**
   * Time when the send was completed.
   */
  completedAt?: string;

  /**
   * The ID of a send event.
   */
  eventId?: EventIDView;

  message?: string;

  /**
   * Time when the send was requested.
   */
  requestedAt?: string;

  /**
   * Result of the send.
   */
  sendResult?:
    | 'SENT'
    | 'IDEMPOTENT_IGNORE'
    | 'QUEUED'
    | 'IDEMPOTENT_FAIL'
    | 'THROTTLED'
    | 'EMAIL_DISABLED'
    | 'PORTAL_SUSPENDED'
    | 'INVALID_TO_ADDRESS'
    | 'BLOCKED_DOMAIN'
    | 'PREVIOUSLY_BOUNCED'
    | 'EMAIL_UNCONFIRMED'
    | 'PREVIOUS_SPAM'
    | 'PREVIOUSLY_UNSUBSCRIBED_MESSAGE'
    | 'PREVIOUSLY_UNSUBSCRIBED_PORTAL'
    | 'INVALID_FROM_ADDRESS'
    | 'CAMPAIGN_CANCELLED'
    | 'VALIDATION_FAILED'
    | 'MTA_IGNORE'
    | 'BLOCKED_ADDRESS'
    | 'PORTAL_OVER_LIMIT'
    | 'PORTAL_EXPIRED'
    | 'PORTAL_MISSING_MARKETING_SCOPE'
    | 'MISSING_TEMPLATE_PROPERTIES'
    | 'MISSING_REQUIRED_PARAMETER'
    | 'PORTAL_AUTHENTICATION_FAILURE'
    | 'MISSING_CONTENT'
    | 'CORRUPT_INPUT'
    | 'TEMPLATE_RENDER_EXCEPTION'
    | 'GRAYMAIL_SUPPRESSED'
    | 'UNCONFIGURED_SENDING_DOMAIN'
    | 'UNDELIVERABLE'
    | 'CANCELLED_ABUSE'
    | 'QUARANTINED_ADDRESS'
    | 'ADDRESS_ONLY_ACCEPTED_ON_PROD'
    | 'PORTAL_NOT_AUTHORIZED_FOR_APPLICATION'
    | 'ADDRESS_LIST_BOMBED'
    | 'ADDRESS_OPTED_OUT'
    | 'RECIPIENT_FATIGUE_SUPPRESSED'
    | 'TOO_MANY_RECIPIENTS'
    | 'PREVIOUSLY_UNSUBSCRIBED_BRAND'
    | 'NON_MARKETABLE_CONTACT'
    | 'PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT'
    | 'GDPR_DOI_ENABLED'
    | 'HUBL_LIMIT_EXCEEDED'
    | 'LOW_CONTACT_QUALITY_SCORE';

  /**
   * Time when the send began processing.
   */
  startedAt?: string;
}

/**
 * The ID of a send event.
 */
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

/**
 * A JSON object containing anything you want to override.
 */
export interface PublicSingleSendEmail {
  /**
   * The recipient of the email.
   */
  to: string;

  /**
   * List of email addresses to send as Bcc.
   */
  bcc?: Array<string>;

  /**
   * List of email addresses to send as Cc.
   */
  cc?: Array<string>;

  /**
   * The From header for the email.
   */
  from?: string;

  /**
   * List of Reply-To header values for the email.
   */
  replyTo?: Array<string>;

  /**
   * ID for a particular send. No more than one email will be sent per sendId.
   */
  sendId?: string;
}

/**
 * A request to send a single email asynchronously.
 */
export interface PublicSingleSendRequestEgg {
  /**
   * The content ID for the email, which can be found in email tool UI.
   */
  emailId: number;

  /**
   * A JSON object containing anything you want to override.
   */
  message: PublicSingleSendEmail;

  /**
   * The contactProperties field is a map of contact property values. Each contact
   * property value contains a name and value property. Each property will get set on
   * the contact record and will be visible in the template under {{ contact.NAME }}.
   * Use these properties when you want to set a contact property while you’re
   * sending the email. For example, when sending a receipt you may want to set a
   * last_paid_date property, as the sending of the receipt will have information
   * about the last payment.
   */
  contactProperties?: { [key: string]: string };

  /**
   * The customProperties field is a map of property values. Each property value
   * contains a name and value property. Each property will be visible in the
   * template under {{ custom.NAME }}. Note: Custom properties do not currently
   * support arrays. To provide a listing in an email, one workaround is to build an
   * HTML list (either with tables or ul) and specify it as a custom property.
   */
  customProperties?: { [key: string]: unknown };
}

Marketing.Campaigns = Campaigns;
Marketing.Emails = Emails;
Marketing.Events = Events;
Marketing.Forms = Forms;
Marketing.SingleSend = SingleSend;
Marketing.Subscriptions = Subscriptions;
Marketing.Transactional = Transactional;

export declare namespace Marketing {
  export {
    type EmailSendStatusView as EmailSendStatusView,
    type EventIDView as EventIDView,
    type PublicSingleSendEmail as PublicSingleSendEmail,
    type PublicSingleSendRequestEgg as PublicSingleSendRequestEgg,
  };

  export {
    Campaigns as Campaigns,
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
    type CollectionResponseWithTotalPublicCampaignForwardPaging as CollectionResponseWithTotalPublicCampaignForwardPaging,
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
    type AggregateEmailStatistics as AggregateEmailStatistics,
    type CollectionResponseWithTotalEmailStatisticIntervalNoPaging as CollectionResponseWithTotalEmailStatisticIntervalNoPaging,
    type CollectionResponseWithTotalPublicEmailForwardPaging as CollectionResponseWithTotalPublicEmailForwardPaging,
    type CollectionResponseWithTotalVersionPublicEmail as CollectionResponseWithTotalVersionPublicEmail,
    type EmailCloneRequestVNext as EmailCloneRequestVNext,
    type EmailCreateRequest as EmailCreateRequest,
    type EmailsPaging as EmailsPaging,
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
    type EmailGetRevisionParams as EmailGetRevisionParams,
    type EmailListRevisionsParams as EmailListRevisionsParams,
    type EmailRestoreRevisionParams as EmailRestoreRevisionParams,
    type EmailRestoreRevisionToDraftParams as EmailRestoreRevisionToDraftParams,
    type EmailUpdateDraftParams as EmailUpdateDraftParams,
  };

  export {
    Events as Events,
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
    type CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging as CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging,
    type CollectionResponseWithTotalParticipationBreakdownForwardPaging as CollectionResponseWithTotalParticipationBreakdownForwardPaging,
    type CollectionResponseWithTotalPublicListNoPaging as CollectionResponseWithTotalPublicListNoPaging,
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
    type PropertyValue as PropertyValue,
    type PublicList as PublicList,
    type SearchPublicResponseWrapper as SearchPublicResponseWrapper,
    type SubscriberEmailResponse as SubscriberEmailResponse,
    type SubscriberVidResponse as SubscriberVidResponse,
    type MarketingEventPublicReadResponseV2sPage as MarketingEventPublicReadResponseV2sPage,
    type EventCreateParams as EventCreateParams,
    type EventUpdateParams as EventUpdateParams,
    type EventListParams as EventListParams,
    type EventCancelByExternalEventIDParams as EventCancelByExternalEventIDParams,
    type EventCompleteByExternalEventIDParams as EventCompleteByExternalEventIDParams,
    type EventDeleteBatchParams as EventDeleteBatchParams,
    type EventDeleteBatchByExternalEventIDParams as EventDeleteBatchByExternalEventIDParams,
    type EventDeleteByExternalEventIDParams as EventDeleteByExternalEventIDParams,
    type EventGetByExternalEventIDParams as EventGetByExternalEventIDParams,
    type EventSearchByExternalEventIDParams as EventSearchByExternalEventIDParams,
    type EventUpdateBatchParams as EventUpdateBatchParams,
    type EventUpdateByExternalEventIDParams as EventUpdateByExternalEventIDParams,
    type EventUpsertBatchParams as EventUpsertBatchParams,
    type EventUpsertByExternalEventIDParams as EventUpsertByExternalEventIDParams,
    type EventUpsertSubscriberStateByEmailParams as EventUpsertSubscriberStateByEmailParams,
    type EventUpsertSubscriberStateByIDParams as EventUpsertSubscriberStateByIDParams,
  };

  export {
    Forms as Forms,
    type CollectionResponseFormDefinitionBaseForwardPaging as CollectionResponseFormDefinitionBaseForwardPaging,
    type DatepickerField as DatepickerField,
    type DependentField as DependentField,
    type DependentFieldFilter as DependentFieldFilter,
    type DropdownField as DropdownField,
    type EmailField as EmailField,
    type EmailFieldValidation as EmailFieldValidation,
    type EnumeratedFieldOption as EnumeratedFieldOption,
    type FieldGroup as FieldGroup,
    type FileField as FileField,
    type FormDefinitionBase as FormDefinitionBase,
    type FormDefinitionCreateRequestBase as FormDefinitionCreateRequestBase,
    type FormDisplayOptions as FormDisplayOptions,
    type FormPostSubmitAction as FormPostSubmitAction,
    type FormStyle as FormStyle,
    type HubSpotFormConfiguration as HubSpotFormConfiguration,
    type HubSpotFormDefinition as HubSpotFormDefinition,
    type HubSpotFormDefinitionCreateRequest as HubSpotFormDefinitionCreateRequest,
    type HubSpotFormDefinitionPatchRequest as HubSpotFormDefinitionPatchRequest,
    type LegalConsentCheckbox as LegalConsentCheckbox,
    type LegalConsentOptionsExplicitConsentToProcess as LegalConsentOptionsExplicitConsentToProcess,
    type LegalConsentOptionsImplicitConsentToProcess as LegalConsentOptionsImplicitConsentToProcess,
    type LegalConsentOptionsLegitimateInterest as LegalConsentOptionsLegitimateInterest,
    type LegalConsentOptionsNone as LegalConsentOptionsNone,
    type LifecycleStage as LifecycleStage,
    type MobilePhoneField as MobilePhoneField,
    type MultiLineTextField as MultiLineTextField,
    type MultipleCheckboxesField as MultipleCheckboxesField,
    type NumberField as NumberField,
    type NumberFieldValidation as NumberFieldValidation,
    type PaymentLinkRadioField as PaymentLinkRadioField,
    type PhoneField as PhoneField,
    type PhoneFieldValidation as PhoneFieldValidation,
    type RadioField as RadioField,
    type SingleCheckboxField as SingleCheckboxField,
    type SingleLineTextField as SingleLineTextField,
    type HubSpotFormDefinitionsPage as HubSpotFormDefinitionsPage,
    type FormCreateParams as FormCreateParams,
    type FormUpdateParams as FormUpdateParams,
    type FormListParams as FormListParams,
    type FormGetParams as FormGetParams,
    type FormReplaceParams as FormReplaceParams,
  };

  export { SingleSend as SingleSend, type SingleSendSendParams as SingleSendSendParams };

  export {
    Subscriptions as Subscriptions,
    type PublicSubscriptionStatus as PublicSubscriptionStatus,
    type PublicSubscriptionStatusesResponse as PublicSubscriptionStatusesResponse,
    type PublicUpdateSubscriptionStatusRequest as PublicUpdateSubscriptionStatusRequest,
    type SubscriptionDefinition as SubscriptionDefinition,
    type SubscriptionDefinitionsResponse as SubscriptionDefinitionsResponse,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionUnsubscribeParams as SubscriptionUnsubscribeParams,
  };

  export {
    Transactional as Transactional,
    type CollectionResponseSmtpAPITokenViewForwardPaging as CollectionResponseSmtpAPITokenViewForwardPaging,
    type SmtpAPITokenRequestEgg as SmtpAPITokenRequestEgg,
    type SmtpAPITokenView as SmtpAPITokenView,
  };
}
