// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { Page } from '../../core/pagination';

export class MarketingEvents extends APIResource {}

export type MarketingEventPublicReadResponseV2sPage = Page<MarketingEventPublicReadResponseV2>;

export interface AppInfo {
  id: string;

  name: string;
}

export interface AttendanceCounters {
  attended: number;

  cancelled: number;

  noShows: number;

  registered: number;
}

export interface BatchInputMarketingEventCreateRequestParams {
  inputs: Array<MarketingEventCreateRequestParams>;
}

export interface BatchInputMarketingEventEmailSubscriber {
  /**
   * List of marketing event details to create or update
   */
  inputs: Array<MarketingEventEmailSubscriber>;
}

export interface BatchInputMarketingEventExternalUniqueIdentifier {
  inputs: Array<MarketingEventExternalUniqueIdentifier>;
}

export interface BatchInputMarketingEventPublicObjectIDDeleteRequest {
  inputs: Array<MarketingEventPublicObjectIDDeleteRequest>;
}

export interface BatchInputMarketingEventPublicUpdateRequestFullV2 {
  inputs: Array<MarketingEventPublicUpdateRequestFullV2>;
}

export interface BatchInputMarketingEventSubscriber {
  /**
   * List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<MarketingEventSubscriber>;
}

export interface BatchResponseMarketingEventPublicDefaultResponse {
  completedAt: string;

  results: Array<MarketingEventPublicDefaultResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseMarketingEventPublicDefaultResponseV2 {
  completedAt: string;

  results: Array<MarketingEventPublicDefaultResponseV2>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponseMarketingEventPublicDefaultResponseV2WithErrors {
  completedAt: string;

  results: Array<MarketingEventPublicDefaultResponseV2>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseSubscriberEmailResponse {
  completedAt: string;

  results: Array<SubscriberEmailResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseSubscriberVidResponse {
  completedAt: string;

  results: Array<SubscriberVidResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging {
  results: Array<MarketingEventPublicReadResponseV2>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseSearchPublicResponseWrapperNoPaging {
  results: Array<SearchPublicResponseWrapper>;
}

export interface CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging {
  results: Array<MarketingEventIdentifiersResponse>;

  total: number;
}

export interface CollectionResponseWithTotalParticipationBreakdownForwardPaging {
  results: Array<ParticipationBreakdown>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalPublicListNoPaging {
  results: Array<PublicList>;

  total: number;
}

export interface ContactAssociation {
  contactId: string;

  email: string;

  firstname?: string;

  lastname?: string;
}

export interface CRMPropertyWrapper {
  name: string;

  value: string;
}

export interface EventDetailSettings {
  /**
   * The id of the application the settings are for
   */
  appId: number;

  /**
   * The url that will be used to fetch marketing event details by id
   */
  eventDetailsUrl: string;
}

export interface EventDetailSettingsURL {
  /**
   * The url that will be used to fetch marketing event details by id. Must contain a
   * `%s` character sequence that will be substituted with the event id. For example:
   * `https://my.event.app/events/%s`
   */
  eventDetailsUrl: string;
}

export interface MarketingEventAssociation {
  marketingEventId: string;

  name: string;

  externalAccountId?: string;

  externalEventId?: string;
}

export interface MarketingEventCompleteRequestParams {
  endDateTime: string;

  startDateTime: string;
}

export interface MarketingEventCreateRequestParams {
  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;

  /**
   * The id of the marketing event in the external event application.
   */
  externalEventId: string;

  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled. Defaults to `false`
   */
  eventCancelled?: boolean;

  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * Describes what type of event this is. For example: `WEBINAR`, `CONFERENCE`,
   * `WORKSHOP`
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventDefaultResponse {
  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled.
   */
  eventCancelled?: boolean;

  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * The type of the marketing event.
   */
  eventType?: string;

  /**
   * The URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  objectId?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventEmailSubscriber {
  /**
   * The email address of the contact in HubSpot to associate with the event.
   */
  email: string;

  /**
   * Timestamp in milliseconds at which the contact subscribed to the event.
   */
  interactionDateTime: number;

  contactProperties?: { [key: string]: string };

  properties?: { [key: string]: string };
}

export interface MarketingEventExternalUniqueIdentifier {
  /**
   * The id of the application that created the marketing event in HubSpot.
   */
  appId: number;

  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;

  /**
   * The id of the marketing event in the external event application.
   */
  externalEventId: string;
}

export interface MarketingEventIdentifiersResponse {
  externalEventId: string;

  marketingEventName: string;

  objectId: string;

  appInfo?: AppInfo;

  externalAccountId?: string;
}

export interface MarketingEventPublicDefaultResponse {
  id: string;

  createdAt: string;

  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  updatedAt: string;

  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled.
   */
  eventCancelled?: boolean;

  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * The type of the marketing event.
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  objectId?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventPublicDefaultResponseV2 {
  createdAt: string;

  customProperties: Array<CRMPropertyWrapper>;

  eventName: string;

  objectId: string;

  updatedAt: string;

  appInfo?: AppInfo;

  endDateTime?: string;

  eventCancelled?: boolean;

  eventCompleted?: boolean;

  eventDescription?: string;

  eventOrganizer?: string;

  eventType?: string;

  eventUrl?: string;

  startDateTime?: string;
}

export interface MarketingEventPublicObjectIDDeleteRequest {
  objectId: string;
}

export interface MarketingEventPublicReadResponse {
  id: string;

  /**
   * The number of HubSpot contacts that attended this marketing event.
   */
  attendees: number;

  /**
   * The number of HubSpot contacts that registered for this marketing event, but
   * later cancelled their registration.
   */
  cancellations: number;

  createdAt: string;

  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  /**
   * The id of the marketing event in the external event application.
   */
  externalEventId: string;

  /**
   * The number of HubSpot contacts that registered for this marketing event, but did
   * not attend. This field only had a value when the event is over.
   */
  noShows: number;

  /**
   * The number of HubSpot contacts that registered for this marketing event.
   */
  registrants: number;

  updatedAt: string;

  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled.
   */
  eventCancelled?: boolean;

  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * The type of the marketing event.
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  objectId?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventPublicReadResponseV2 {
  createdAt: string;

  customProperties: Array<CRMPropertyWrapper>;

  eventName: string;

  objectId: string;

  updatedAt: string;

  appInfo?: AppInfo;

  attendees?: number;

  cancellations?: number;

  endDateTime?: string;

  eventCancelled?: boolean;

  eventCompleted?: boolean;

  eventDescription?: string;

  eventOrganizer?: string;

  eventStatus?: string;

  eventType?: string;

  eventUrl?: string;

  externalEventId?: string;

  noShows?: number;

  registrants?: number;

  startDateTime?: string;
}

export interface MarketingEventPublicUpdateRequestFullV2 {
  customProperties: Array<PropertyValue>;

  objectId: string;

  endDateTime?: string;

  eventCancelled?: boolean;

  eventDescription?: string;

  eventName?: string;

  eventOrganizer?: string;

  eventType?: string;

  eventUrl?: string;

  startDateTime?: string;
}

export interface MarketingEventPublicUpdateRequestV2 {
  customProperties: Array<PropertyValue>;

  endDateTime?: string;

  eventCancelled?: boolean;

  eventDescription?: string;

  eventName?: string;

  eventOrganizer?: string;

  eventType?: string;

  eventUrl?: string;

  startDateTime?: string;
}

export interface MarketingEventSubscriber {
  /**
   * Timestamp in milliseconds at which the contact subscribed to the event.
   */
  interactionDateTime: number;

  properties?: { [key: string]: string };

  vid?: number;
}

export interface MarketingEventUpdateRequestParams {
  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled. Defaults to `false`
   */
  eventCancelled?: boolean;

  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * The name of the marketing event.
   */
  eventName?: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer?: string;

  /**
   * Describes what type of event this is. For example: `WEBINAR`, `CONFERENCE`,
   * `WORKSHOP`
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface ParticipationAssociations {
  contact: ContactAssociation;

  marketingEvent: MarketingEventAssociation;
}

export interface ParticipationBreakdown {
  id: string;

  associations: ParticipationAssociations;

  createdAt: string;

  properties: ParticipationProperties;
}

export interface ParticipationProperties {
  attendanceState: 'REGISTERED' | 'ATTENDED' | 'CANCELLED' | 'EMPTY' | 'NO_SHOW';

  occurredAt: number;

  attendanceDurationSeconds?: number;

  attendancePercentage?: string;
}

/**
 * Represents a single custom property of a marketing event, storing its name,
 * value, metadata (like source, timestamp, and sensitivity), and related audit
 * information for tracking changes.
 */
export interface PropertyValue {
  /**
   * Name of custom property
   */
  name: string;

  sourceUpstreamDeployable: string;

  /**
   * Custom property value
   */
  value: string;

  /**
   * The sensitivity level of the property, such as "non_sensitive", "sensitive", and
   * "highly_sensitive".
   */
  dataSensitivity?: 'none' | 'standard' | 'high';

  /**
   * Whether the property value is encrypted.
   */
  isEncrypted?: boolean;

  isLargeValue?: boolean;

  persistenceTimestamp?: number;

  /**
   * A unique ID associated with this request.
   */
  requestId?: string;

  /**
   * Whether the value was selected by a user.
   */
  selectedByUser?: boolean;

  /**
   * The timestamp when the value was selected by a user, if applicable.
   */
  selectedByUserTimestamp?: number;

  /**
   * The origin of the property value, such as "IMPORT" or "API".
   */
  source?:
    | 'UNKNOWN'
    | 'IMPORT'
    | 'API'
    | 'FORM'
    | 'ANALYTICS'
    | 'MIGRATION'
    | 'SALESFORCE'
    | 'INTEGRATION'
    | 'CONTACTS_WEB'
    | 'WAL_INCREMENTAL'
    | 'TASK'
    | 'EMAIL'
    | 'WORKFLOWS'
    | 'CALCULATED'
    | 'SOCIAL'
    | 'BATCH_UPDATE'
    | 'SIGNALS'
    | 'BIDEN'
    | 'DEFAULT'
    | 'COMPANIES'
    | 'DEALS'
    | 'ASSISTS'
    | 'PRESENTATIONS'
    | 'TALLY'
    | 'SIDEKICK'
    | 'CRM_UI'
    | 'MERGE_CONTACTS'
    | 'PORTAL_USER_ASSOCIATOR'
    | 'INTEGRATIONS_PLATFORM'
    | 'BCC_TO_CRM'
    | 'FORWARD_TO_CRM'
    | 'ENGAGEMENTS'
    | 'SALES'
    | 'HEISENBERG'
    | 'LEADIN'
    | 'GMAIL_INTEGRATION'
    | 'ACADEMY'
    | 'SALES_MESSAGES'
    | 'AVATARS_SERVICE'
    | 'MERGE_COMPANIES'
    | 'SEQUENCES'
    | 'COMPANY_FAMILIES'
    | 'MOBILE_IOS'
    | 'MOBILE_ANDROID'
    | 'CONTACTS'
    | 'ASSOCIATIONS'
    | 'EXTENSION'
    | 'SUCCESS'
    | 'BOT'
    | 'INTEGRATIONS_SYNC'
    | 'AUTOMATION_PLATFORM'
    | 'CONVERSATIONS'
    | 'EMAIL_INTEGRATION'
    | 'CONTENT_MEMBERSHIP'
    | 'QUOTES'
    | 'BET_ASSIGNMENT'
    | 'QUOTAS'
    | 'BET_CRM_CONNECTOR'
    | 'MEETINGS'
    | 'MERGE_OBJECTS'
    | 'RECYCLING_BIN'
    | 'ADS'
    | 'AI_GROUP'
    | 'COMMUNICATOR'
    | 'SETTINGS'
    | 'PROPERTY_SETTINGS'
    | 'PIPELINE_SETTINGS'
    | 'COMPANY_INSIGHTS'
    | 'BEHAVIORAL_EVENTS'
    | 'PAYMENTS'
    | 'GOALS'
    | 'PORTAL_OBJECT_SYNC'
    | 'APPROVALS'
    | 'FILE_MANAGER'
    | 'MARKETPLACE'
    | 'INTERNAL_PROCESSING'
    | 'FORECASTING'
    | 'SLACK_INTEGRATION'
    | 'CRM_UI_BULK_ACTION'
    | 'WORKFLOW_CONTACT_DELETE_ACTION'
    | 'ACCEPTANCE_TEST'
    | 'PLAYBOOKS'
    | 'CHATSPOT'
    | 'FLYWHEEL_PRODUCT_DATA_SYNC'
    | 'HELP_DESK'
    | 'BILLING'
    | 'DATA_ENRICHMENT'
    | 'AUTOMATION_JOURNEY'
    | 'MICROAPPS'
    | 'INTENT'
    | 'PROSPECTING_AGENT'
    | 'CENTRAL_EXCHANGE_RATES'
    | 'HELP_DESK_AI'
    | 'CONVERSATIONAL_ENRICHMENT'
    | 'CRM_PROCESSES_PLATFORM'
    | 'CLONE_OBJECTS'
    | 'MARKET_SOURCING'
    | 'DATASET'
    | 'PROPERTY_RESTORE';

  /**
   * The ID of the property source indicating where it was created.
   */
  sourceId?: string;

  /**
   * A human-readable label.
   */
  sourceLabel?: string;

  /**
   * Source metadata encoded as a base64 string. For example: `ZXhhbXBsZSBzdHJpbmc=`
   */
  sourceMetadata?: string;

  /**
   * The unique identifier associated with the source.
   */
  sourceVid?: Array<number>;

  /**
   * When the value was set, as a 64-bit integer.
   */
  timestamp?: number;

  /**
   * The unit of measurement or context for the value.
   */
  unit?: string;

  /**
   * The ID of the user who updated the property.
   */
  updatedByUserId?: number;

  useTimestampAsPersistenceTimestamp?: boolean;
}

export interface PublicList {
  listId: string;

  listVersion: number;

  name: string;

  objectTypeId: string;

  processingStatus: string;

  processingType: string;

  createdAt?: string;

  createdById?: string;

  deletedAt?: string;

  filtersUpdatedAt?: string;

  size?: number;

  updatedAt?: string;

  updatedById?: string;
}

export interface SearchPublicResponseWrapper {
  appId: number;

  externalAccountId: string;

  externalEventId: string;

  objectId: string;
}

export interface SubscriberEmailResponse {
  email: string;

  vid: number;
}

export interface SubscriberVidResponse {
  vid: number;
}

export declare namespace MarketingEvents {
  export {
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
    type CRMPropertyWrapper as CRMPropertyWrapper,
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
  };
}
