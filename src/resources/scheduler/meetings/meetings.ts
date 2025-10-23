// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CalendarAPI from './calendar';
import { Calendar, CalendarCreateParams } from './calendar';
import * as MeetingsLinksAPI from './meetings-links';
import { MeetingsLinkBookParams, MeetingsLinks } from './meetings-links';

export class Meetings extends APIResource {
  calendar: CalendarAPI.Calendar = new CalendarAPI.Calendar(this._client);
  meetingsLinks: MeetingsLinksAPI.MeetingsLinks = new MeetingsLinksAPI.MeetingsLinks(this._client);
}

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

  linkType: 'PERSONAL_LINK' | 'GROUP_CALENDAR' | 'ROUND_ROBIN_CALENDAR';

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

  hs_activity_type?: string;

  hs_attachment_ids?: Array<string>;

  hs_attendee_owner_ids?: Array<string>;

  hs_internal_meeting_notes?: string;

  hs_meeting_body?: string;

  hs_meeting_location?: string;

  hs_meeting_location_type?: string;

  hubspot_owner_id?: string;
}

export interface ExternalCalendarMeetingEventCreateRequest {
  associations: Array<ExternalAssociationCreateRequest>;

  emailReminderSchedule: ExternalEmailReminderSchedule;

  properties: ExternalCalendarMeetingEventCreateProperties;

  timezone: string;
}

export interface ExternalCalendarMeetingEventResponseProperties {
  hs_engagement_source:
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
    | 'PROPERTY_RESTORE'
    | 'EMAIL_INBOX_IMPORT'
    | 'CUSTOMER_AGENT'
    | 'LEGAL_BASIS_REMEDIATION'
    | 'AUTO_ASSOCIATE_BY_DOMAIN'
    | 'ACTIVITY_AUTO_ASSOCIATE'
    | 'PRIMARY_AUTOMATION'
    | 'DELETE_OBJECTS'
    | 'RESTORE_OBJECTS';

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

  hs_meeting_location_type?: 'PHONE' | 'ADDRESS' | 'CUSTOM';

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
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';
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

  export { MeetingsLinks as MeetingsLinks, type MeetingsLinkBookParams as MeetingsLinkBookParams };
}
