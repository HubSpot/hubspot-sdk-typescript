// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CalendarAPI from './calendar';
import { Calendar, CalendarCreateParams } from './calendar';
import * as MeetingsLinksAPI from './meetings-links';
import {
  MeetingsLinkBookParams,
  MeetingsLinkGetAvailabilityBySlugParams,
  MeetingsLinkGetBookingInfoBySlugParams,
  MeetingsLinkListParams,
  MeetingsLinks,
} from './meetings-links';
import { Page } from '../../../core/pagination';

export class Meetings extends APIResource {
  calendar: CalendarAPI.Calendar = new CalendarAPI.Calendar(this._client);
  meetingsLinks: MeetingsLinksAPI.MeetingsLinks = new MeetingsLinksAPI.MeetingsLinks(this._client);
}

export type ExternalLinkMetadataPage = Page<ExternalLinkMetadata>;

export interface CollectionResponseWithTotalExternalLinkMetadataForwardPaging {
  results: Array<ExternalLinkMetadata>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface ExternalAssociationCreateRequest {
  to: Shared.PublicObjectID;

  types: Array<Shared.AssociationSpec>;
}

export interface ExternalBookingFormField {
  name: string;

  value: string;
}

export interface ExternalBookingInfo {
  allUsersBusyTimes: Array<ExternalUserBusyTimes>;

  customParams: ExternalMeetingsLinkSettings;

  isOffline: boolean;

  linkId: string;

  linkType: 'GROUP_CALENDAR' | 'PERSONAL_LINK' | 'ROUND_ROBIN_CALENDAR';

  brandingMetadata?: ExternalBrandingMetadata;

  linkAvailability?: ExternalLinkAvailability;
}

export interface ExternalBrandingMetadata {
  logoAltText: string;

  showMarketingAd: boolean;

  showSalesAd: boolean;

  accent2Color?: string;

  accentColor?: string;

  companyAddressLine1?: string;

  companyAddressLine2?: string;

  companyAvatar?: string;

  companyCity?: string;

  companyCountry?: string;

  companyDomain?: string;

  companyName?: string;

  companyState?: string;

  companyZip?: string;

  logoHeight?: number;

  logoUrl?: string;

  logoWidth?: number;

  primaryColor?: string;

  secondaryColor?: string;
}

export interface ExternalCalendarMeetingEventCreateProperties {
  hs_meeting_end_time: string;

  hs_meeting_outcome: string;

  hs_meeting_start_time: string;

  hs_meeting_title: string;

  hs_timestamp: string;

  hubspot_owner_id: string;

  hs_activity_type?: string;

  hs_attachment_ids?: Array<string>;

  hs_attendee_owner_ids?: Array<string>;

  hs_internal_meeting_notes?: string;

  hs_meeting_body?: string;

  hs_meeting_location?: string;

  hs_meeting_location_type?: string;
}

export interface ExternalCalendarMeetingEventCreateRequest {
  associations: Array<ExternalAssociationCreateRequest>;

  emailReminderSchedule: ExternalEmailReminderSchedule;

  properties: ExternalCalendarMeetingEventCreateProperties;

  timezone: string;
}

export interface ExternalCalendarMeetingEventResponseProperties {
  hs_engagement_source:
    | 'ACADEMY'
    | 'ACCEPTANCE_TEST'
    | 'ACTIVITY_AUTO_ASSOCIATE'
    | 'ADS'
    | 'AI_GROUP'
    | 'ANALYTICS'
    | 'API'
    | 'APPROVALS'
    | 'ASSISTS'
    | 'ASSOCIATIONS'
    | 'AUTO_ASSOCIATE_BY_DOMAIN'
    | 'AUTOMATION_JOURNEY'
    | 'AUTOMATION_PLATFORM'
    | 'AVATARS_SERVICE'
    | 'BATCH_UPDATE'
    | 'BCC_TO_CRM'
    | 'BEHAVIORAL_EVENTS'
    | 'BET_ASSIGNMENT'
    | 'BET_CRM_CONNECTOR'
    | 'BIDEN'
    | 'BILLING'
    | 'BOT'
    | 'CALCULATED'
    | 'CENTRAL_EXCHANGE_RATES'
    | 'CHATSPOT'
    | 'CLONE_OBJECTS'
    | 'COMMUNICATOR'
    | 'COMPANIES'
    | 'COMPANY_FAMILIES'
    | 'COMPANY_INSIGHTS'
    | 'CONTACTS'
    | 'CONTACTS_WEB'
    | 'CONTENT_MEMBERSHIP'
    | 'CONVERSATIONAL_ENRICHMENT'
    | 'CONVERSATIONS'
    | 'CRM_PROCESSES_PLATFORM'
    | 'CRM_UI'
    | 'CRM_UI_BULK_ACTION'
    | 'CUSTOMER_AGENT'
    | 'DATA_ENRICHMENT'
    | 'DATASET'
    | 'DEALS'
    | 'DEFAULT'
    | 'DELETE_OBJECTS'
    | 'EMAIL'
    | 'EMAIL_INBOX_IMPORT'
    | 'EMAIL_INTEGRATION'
    | 'ENGAGEMENTS'
    | 'EXTENSION'
    | 'FILE_MANAGER'
    | 'FLYWHEEL_PRODUCT_DATA_SYNC'
    | 'FORECASTING'
    | 'FORM'
    | 'FORWARD_TO_CRM'
    | 'GMAIL_INTEGRATION'
    | 'GOALS'
    | 'HEISENBERG'
    | 'HELP_DESK'
    | 'HELP_DESK_AI'
    | 'IMPORT'
    | 'INTEGRATION'
    | 'INTEGRATIONS_PLATFORM'
    | 'INTEGRATIONS_SYNC'
    | 'INTENT'
    | 'INTERNAL_PROCESSING'
    | 'LEADIN'
    | 'LEGAL_BASIS_REMEDIATION'
    | 'MARKET_SOURCING'
    | 'MARKETPLACE'
    | 'MEETINGS'
    | 'MERGE_COMPANIES'
    | 'MERGE_CONTACTS'
    | 'MERGE_OBJECTS'
    | 'MICROAPPS'
    | 'MIGRATION'
    | 'MOBILE_ANDROID'
    | 'MOBILE_IOS'
    | 'PAYMENTS'
    | 'PIPELINE_SETTINGS'
    | 'PLAYBOOKS'
    | 'PORTAL_OBJECT_SYNC'
    | 'PORTAL_USER_ASSOCIATOR'
    | 'PRESENTATIONS'
    | 'PRIMARY_AUTOMATION'
    | 'PROPERTY_RESTORE'
    | 'PROPERTY_SETTINGS'
    | 'PROSPECTING_AGENT'
    | 'QUOTAS'
    | 'QUOTES'
    | 'RECYCLING_BIN'
    | 'RESTORE_OBJECTS'
    | 'SALES'
    | 'SALES_MESSAGES'
    | 'SALESFORCE'
    | 'SEQUENCES'
    | 'SETTINGS'
    | 'SIDEKICK'
    | 'SIGNALS'
    | 'SLACK_INTEGRATION'
    | 'SOCIAL'
    | 'SUCCESS'
    | 'TALLY'
    | 'TASK'
    | 'UNKNOWN'
    | 'WAL_INCREMENTAL'
    | 'WORKFLOW_CONTACT_DELETE_ACTION'
    | 'WORKFLOWS';

  hs_engagement_source_id: string;

  hs_meeting_end_time: string;

  hs_meeting_outcome: string;

  hs_meeting_start_time: string;

  hs_meeting_title: string;

  hs_timestamp: string;

  hs_activity_type?: string;

  hs_attachment_ids?: Array<string>;

  hs_attendee_owner_ids?: Array<string>;

  hs_include_description_in_reminder?: string;

  hs_internal_meeting_notes?: string;

  hs_meeting_body?: string;

  hs_meeting_external_url?: string;

  hs_meeting_location?: string;

  hs_meeting_location_type?: 'ADDRESS' | 'CUSTOM' | 'PHONE';

  hs_unique_id?: string;

  hubspot_owner_id?: string;
}

export interface ExternalCalenderMeetingEventResponse {
  id: string;

  createdAt: string;

  lastUpdatedAt: string;

  properties: ExternalCalendarMeetingEventResponseProperties;
}

export interface ExternalClosedRange {
  end: number;

  start: number;
}

export interface ExternalCommunicationConsentCheckbox {
  communicationTypeId: string;

  label: string;

  required: boolean;
}

export interface ExternalEmailReminderSchedule {
  reminders: Array<ExternalReminder>;

  shouldIncludeInviteDescription: boolean;
}

export interface ExternalGuestSettings {
  canAddGuests: boolean;

  maxGuestCount: number;
}

export interface ExternalLegalConsentOptions {
  communicationConsentCheckboxes: Array<ExternalCommunicationConsentCheckbox>;

  communicationConsentText: string;

  isLegitimateInterest: boolean;

  legitimateInterestSubscriptionTypes: Array<number>;

  privacyPolicyText: string;

  processingConsentCheckboxLabel: string;

  processingConsentFooterText: string;

  processingConsentText: string;

  processingConsentType: string;

  legitimateInterestLegalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';
}

export interface ExternalLegalConsentResponse {
  communicationTypeId: string;

  consented: boolean;
}

export interface ExternalLinkAvailability {
  hasMore: boolean;

  linkAvailabilityByDuration: { [key: string]: ExternalLinkAvailabilityForDuration };
}

export interface ExternalLinkAvailabilityAndBusyTimes {
  allUsersBusyTimes: Array<ExternalUserBusyTimes>;

  linkAvailability?: ExternalLinkAvailability;
}

export interface ExternalLinkAvailabilityForDuration {
  availabilities: Array<ExternalMeetingAvailability>;

  meetingDurationMillis: number;
}

export interface ExternalLinkDisplayInfo {
  avatar?: string;

  companyAvatar?: string;

  headline?: string;

  publicDisplayAvatarOption?: string;
}

export interface ExternalLinkFormField {
  fieldType: string;

  isCustom: boolean;

  isRequired: boolean;

  label: string;

  name: string;

  options: Array<ExternalOption>;

  type: string;
}

export interface ExternalLinkMetadata {
  id: string;

  createdAt: string;

  defaultLink: boolean;

  link: string;

  organizerUserId: string;

  slug: string;

  type: string;

  userIdsOfLinkMembers: Array<string>;

  name?: string;

  updatedAt?: string;
}

export interface ExternalMeetingAvailability {
  endMillisUtc: number;

  startMillisUtc: number;
}

export interface ExternalMeetingBooking {
  duration: number;

  email: string;

  firstName: string;

  formFields: Array<ExternalBookingFormField>;

  lastName: string;

  legalConsentResponses: Array<ExternalLegalConsentResponse>;

  likelyAvailableUserIds: Array<string>;

  slug: string;

  startTime: string;

  locale?: string;

  timezone?: string;
}

export interface ExternalMeetingBookingResponse {
  bookingTimezone: string;

  calendarEventId: string;

  contactId: string;

  duration: number;

  end: string;

  formFields: Array<ExternalValidatedFormField>;

  guestEmails: Array<string>;

  isOffline: boolean;

  legalConsentResponses: Array<ExternalLegalConsentResponse>;

  start: string;

  subject: string;

  locale?: string;

  location?: string;

  webConferenceMeetingId?: string;

  webConferenceUrl?: string;
}

export interface ExternalMeetingsLinkSettings {
  availability: { [key: string]: ExternalClosedRange };

  durations: Array<number>;

  formFields: Array<ExternalLinkFormField>;

  legalConsentEnabled: boolean;

  meetingBufferTime: number;

  ownerPrioritized: boolean;

  startTimeIncrementMinutes: string;

  weeksToAdvertise: number;

  customAvailabilityEndDate?: number;

  customAvailabilityStartDate?: number;

  displayInfo?: ExternalLinkDisplayInfo;

  guestSettings?: ExternalGuestSettings;

  language?: string;

  legalConsentOptions?: ExternalLegalConsentOptions;

  locale?: string;

  location?: string;

  redirectUrl?: string;

  welcomeScreenInfo?: ExternalMeetingsWelcomeScreenInfo;
}

export interface ExternalMeetingsUser {
  id: string;

  calendarProvider: string;

  isSalesStarter: boolean;

  userId: string;

  userProfile: ExternalUserProfile;
}

export interface ExternalMeetingsWelcomeScreenInfo {
  description?: string;

  logoUrl?: string;

  showWelcomeScreen?: boolean;

  title?: string;

  useCompanyLogo?: boolean;
}

export interface ExternalOption {
  description: string;

  displayOrder: number;

  doubleData: number;

  hidden: boolean;

  label: string;

  readOnly: boolean;

  value: string;
}

export interface ExternalReminder {
  numberOfTimeUnits: number;

  timeUnit: string;
}

export interface ExternalTimeRange {
  end: number;

  start: number;
}

export interface ExternalUserBusyTimes {
  busyTimes: Array<ExternalTimeRange>;

  isOffline: boolean;

  meetingsUser: ExternalMeetingsUser;
}

export interface ExternalUserProfile {
  email: string;

  firstName?: string;

  fullName?: string;

  lastName?: string;
}

export interface ExternalValidatedFormField {
  isCustom: boolean;

  label: string;

  name: string;

  value: string;

  fieldType?: string;

  translatedLabel?: string;

  valueLabel?: string;
}

Meetings.Calendar = Calendar;
Meetings.MeetingsLinks = MeetingsLinks;

export declare namespace Meetings {
  export {
    type CollectionResponseWithTotalExternalLinkMetadataForwardPaging as CollectionResponseWithTotalExternalLinkMetadataForwardPaging,
    type ExternalAssociationCreateRequest as ExternalAssociationCreateRequest,
    type ExternalBookingFormField as ExternalBookingFormField,
    type ExternalBookingInfo as ExternalBookingInfo,
    type ExternalBrandingMetadata as ExternalBrandingMetadata,
    type ExternalCalendarMeetingEventCreateProperties as ExternalCalendarMeetingEventCreateProperties,
    type ExternalCalendarMeetingEventCreateRequest as ExternalCalendarMeetingEventCreateRequest,
    type ExternalCalendarMeetingEventResponseProperties as ExternalCalendarMeetingEventResponseProperties,
    type ExternalCalenderMeetingEventResponse as ExternalCalenderMeetingEventResponse,
    type ExternalClosedRange as ExternalClosedRange,
    type ExternalCommunicationConsentCheckbox as ExternalCommunicationConsentCheckbox,
    type ExternalEmailReminderSchedule as ExternalEmailReminderSchedule,
    type ExternalGuestSettings as ExternalGuestSettings,
    type ExternalLegalConsentOptions as ExternalLegalConsentOptions,
    type ExternalLegalConsentResponse as ExternalLegalConsentResponse,
    type ExternalLinkAvailability as ExternalLinkAvailability,
    type ExternalLinkAvailabilityAndBusyTimes as ExternalLinkAvailabilityAndBusyTimes,
    type ExternalLinkAvailabilityForDuration as ExternalLinkAvailabilityForDuration,
    type ExternalLinkDisplayInfo as ExternalLinkDisplayInfo,
    type ExternalLinkFormField as ExternalLinkFormField,
    type ExternalLinkMetadata as ExternalLinkMetadata,
    type ExternalMeetingAvailability as ExternalMeetingAvailability,
    type ExternalMeetingBooking as ExternalMeetingBooking,
    type ExternalMeetingBookingResponse as ExternalMeetingBookingResponse,
    type ExternalMeetingsLinkSettings as ExternalMeetingsLinkSettings,
    type ExternalMeetingsUser as ExternalMeetingsUser,
    type ExternalMeetingsWelcomeScreenInfo as ExternalMeetingsWelcomeScreenInfo,
    type ExternalOption as ExternalOption,
    type ExternalReminder as ExternalReminder,
    type ExternalTimeRange as ExternalTimeRange,
    type ExternalUserBusyTimes as ExternalUserBusyTimes,
    type ExternalUserProfile as ExternalUserProfile,
    type ExternalValidatedFormField as ExternalValidatedFormField,
  };

  export { Calendar as Calendar, type CalendarCreateParams as CalendarCreateParams };

  export {
    MeetingsLinks as MeetingsLinks,
    type MeetingsLinkListParams as MeetingsLinkListParams,
    type MeetingsLinkBookParams as MeetingsLinkBookParams,
    type MeetingsLinkGetAvailabilityBySlugParams as MeetingsLinkGetAvailabilityBySlugParams,
    type MeetingsLinkGetBookingInfoBySlugParams as MeetingsLinkGetBookingInfoBySlugParams,
  };
}
