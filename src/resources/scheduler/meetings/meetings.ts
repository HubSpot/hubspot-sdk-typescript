// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AdvancedAPI from './advanced';
import { Advanced, AdvancedBookParams, AdvancedCreateParams, BaseAdvanced } from './advanced';
import * as BasicAPI from './basic';
import {
  BaseBasic,
  Basic,
  BasicGetAvailabilityBySlugParams,
  BasicGetBookingInfoBySlugParams,
  BasicListParams,
} from './basic';
import { Page } from '../../../core/pagination';

export class BaseMeetings extends APIResource {
  static override readonly _key: readonly ['scheduler', 'meetings'] = Object.freeze([
    'scheduler',
    'meetings',
  ] as const);
}
export class Meetings extends BaseMeetings {
  advanced: AdvancedAPI.Advanced = new AdvancedAPI.Advanced(this._client);
  basic: BasicAPI.Basic = new BasicAPI.Basic(this._client);
}

export type ExternalLinkMetadataPage = Page<ExternalLinkMetadata>;

export interface CollectionResponseWithTotalExternalLinkMetadata {
  results: Array<ExternalLinkMetadata>;

  total: number;

  paging?: Shared.Paging;
}

export interface ExternalAssociationCreateRequest {
  /**
   * Contains the Id of a Public Object
   */
  to: Shared.PublicObjectID;

  types: Array<Shared.AssociationSpec>;
}

export interface ExternalBookingFormField {
  /**
   * The name of the form field.
   */
  name: string;

  /**
   * The value associated with the form field.
   */
  value: string;
}

export interface ExternalBookingInfo {
  allUsersBusyTimes: Array<ExternalUserBusyTimes>;

  customParams: ExternalMeetingsLinkSettings;

  /**
   * Whether the meeting was booked offline, meaning no associated calendar event was
   * created.
   */
  isOffline: boolean;

  /**
   * The unique identifier for the meeting link.
   */
  linkId: string;

  /**
   * The type of the meeting link. Accepted values are: GROUP_CALENDAR,
   * PERSONAL_LINK, ROUND_ROBIN_CALENDAR.
   */
  linkType: 'GROUP_CALENDAR' | 'PERSONAL_LINK' | 'ROUND_ROBIN_CALENDAR';

  brandingMetadata?: ExternalBrandingMetadata;

  linkAvailability?: ExternalLinkAvailability;
}

export interface ExternalBrandingMetadata {
  /**
   * The alternative text for the current logo.
   */
  logoAltText: string;

  /**
   * Whether Hubspot Marketing ads are shown.
   */
  showMarketingAd: boolean;

  /**
   * Whether Hubspot Sales ads are shown.
   */
  showSalesAd: boolean;

  /**
   * The secondary accent color used in branding.
   */
  accent2Color?: string;

  /**
   * The primary accent color used in branding.
   */
  accentColor?: string;

  /**
   * The first line of the company's address.
   */
  companyAddressLine1?: string;

  /**
   * The second line of the company's address.
   */
  companyAddressLine2?: string;

  /**
   * The URL of the company's avatar image.
   */
  companyAvatar?: string;

  /**
   * The city where the company is located.
   */
  companyCity?: string;

  /**
   * The country where the company is located.
   */
  companyCountry?: string;

  /**
   * The domain of the company's website.
   */
  companyDomain?: string;

  /**
   * The name of the company.
   */
  companyName?: string;

  /**
   * The state where the company is located.
   */
  companyState?: string;

  /**
   * The ZIP code of the company's location.
   */
  companyZip?: string;

  /**
   * The height of the logo in pixels.
   */
  logoHeight?: number;

  /**
   * The URL of a custom logo image.
   */
  logoUrl?: string;

  /**
   * The width of the logo in pixels.
   */
  logoWidth?: number;

  /**
   * The primary color used in branding.
   */
  primaryColor?: string;

  /**
   * The secondary color used in branding.
   */
  secondaryColor?: string;
}

export interface ExternalCalendarMeetingEventCreateProperties {
  /**
   * The time that the meeting should end in ISO 8601 format.
   */
  hs_meeting_end_time: string;

  /**
   * The outcome of the meeting. Acceptable default values are: SCHEDULED, COMPLETED,
   * RESCHEDULED, NO_SHOW, CANCELED. This property can be changed to include
   * additional custom values.
   */
  hs_meeting_outcome: string;

  /**
   * The time that the meeting should start in ISO 8601 format.
   */
  hs_meeting_start_time: string;

  /**
   * The title of the meeting and calendar event.
   */
  hs_meeting_title: string;

  /**
   * The time that the meeting should start in ISO 8601 format. This value should be
   * the same as `hs_meeting_start_time`.
   */
  hs_timestamp: string;

  /**
   * The ownerId of the HubSpot user who will host the meeting.
   */
  hubspot_owner_id: string;

  /**
   * The activity type of the meeting. Acceptable values are based on portal defined
   * call and meeting types.
   */
  hs_activity_type?: string;

  hs_attachment_ids?: Array<string>;

  hs_attendee_owner_ids?: Array<string>;

  /**
   * Internal notes related to the meeting.
   */
  hs_internal_meeting_notes?: string;

  /**
   * The description of the meeting and calendar event.
   */
  hs_meeting_body?: string;

  /**
   * The physical address, virtual location, or phone number where the meeting will
   * take place.
   */
  hs_meeting_location?: string;

  /**
   * The type of location for the meeting. Acceptable values are: ADDRESS, CUSTOM,
   * PHONE.
   */
  hs_meeting_location_type?: 'ADDRESS' | 'CUSTOM' | 'PHONE';
}

export interface ExternalCalendarMeetingEventCreateRequest {
  associations: Array<ExternalAssociationCreateRequest>;

  emailReminderSchedule: ExternalEmailReminderSchedule;

  properties: ExternalCalendarMeetingEventCreateProperties;

  /**
   * The timezone property that will be set on the meeting event.
   */
  timezone: string;
}

export interface ExternalCalendarMeetingEventResponseProperties {
  /**
   * The source of the engagement, will always be `MEETINGS`.
   */
  hs_engagement_source:
    | 'ACADEMY'
    | 'ACCEPTANCE_TEST'
    | 'ACTIVITY_AUTO_ASSOCIATE'
    | 'ACTIVITY_LOG_REVERT'
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
    | 'BREEZE_AGENT'
    | 'CALCULATED'
    | 'CENTRAL_EXCHANGE_RATES'
    | 'CHATSPOT'
    | 'CLONE_OBJECTS'
    | 'COMMUNICATOR'
    | 'COMPANIES'
    | 'COMPANY_FAMILIES'
    | 'COMPANY_INSIGHTS'
    | 'CONNECTED_ACCOUNT'
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
    | 'DATA_QUALITY'
    | 'DATASET'
    | 'DEALS'
    | 'DEFAULT'
    | 'DELETE_OBJECTS'
    | 'DI_WRITE_TO_CRM'
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
    | 'MARKETS'
    | 'MEETINGS'
    | 'MERGE_COMPANIES'
    | 'MERGE_CONTACTS'
    | 'MERGE_OBJECTS'
    | 'MERGE_REVERT_OBJECTS'
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
    | 'PROPERTY_DEFAULT_VALUE'
    | 'PROPERTY_RESTORE'
    | 'PROPERTY_SETTINGS'
    | 'PROSPECTING_AGENT'
    | 'QUOTAS'
    | 'QUOTES'
    | 'RECYCLING_BIN'
    | 'RESTORE_OBJECTS'
    | 'REVENUE_PLATFORM'
    | 'SALES'
    | 'SALES_MESSAGES'
    | 'SALESFORCE'
    | 'SEQUENCES'
    | 'SETTINGS'
    | 'SIDEKICK'
    | 'SIGNALS'
    | 'SLACK_INTEGRATION'
    | 'SMART_DATA_CAPTURE'
    | 'SOCIAL'
    | 'SUCCESS'
    | 'TALLY'
    | 'TASK'
    | 'UNKNOWN'
    | 'WAL_INCREMENTAL'
    | 'WORK_UI'
    | 'WORKFLOW_CONTACT_DELETE_ACTION'
    | 'WORKFLOWS';

  /**
   * The ID associated with the process created the engagement. Should always be
   * empty when creating meeting events through this API.
   */
  hs_engagement_source_id: string;

  /**
   * The end time of the meeting in ISO 8601 format.
   */
  hs_meeting_end_time: string;

  /**
   * The outcome of the meeting. Acceptable default values are: SCHEDULED, COMPLETED,
   * RESCHEDULED, NO_SHOW, CANCELED. This property can be changed to include
   * additional custom values.
   */
  hs_meeting_outcome: string;

  /**
   * The start time of the meeting in ISO 8601 format.
   */
  hs_meeting_start_time: string;

  /**
   * The title of the meeting and calendar event.
   */
  hs_meeting_title: string;

  /**
   * The time that the meeting should start in ISO 8601 format. This value should be
   * the same as `hs_meeting_start_time`.
   */
  hs_timestamp: string;

  /**
   * The activity type of the meeting. Acceptable values are based on portal defined
   * call and meeting types.
   */
  hs_activity_type?: string;

  hs_attachment_ids?: Array<string>;

  hs_attendee_owner_ids?: Array<string>;

  /**
   * Whether to include the meeting description in the reminder.
   */
  hs_include_description_in_reminder?: string;

  /**
   * Internal notes related to the meeting.
   */
  hs_internal_meeting_notes?: string;

  /**
   * The description of the meeting and calendar event.
   */
  hs_meeting_body?: string;

  /**
   * The calendar event URL for the meeting.
   */
  hs_meeting_external_url?: string;

  /**
   * The physical address, virtual location, or phone number where the meeting will
   * take place.
   */
  hs_meeting_location?: string;

  /**
   * The type of location for the meeting. Acceptable values are: ADDRESS, CUSTOM,
   * PHONE.
   */
  hs_meeting_location_type?: 'ADDRESS' | 'CUSTOM' | 'PHONE';

  /**
   * The unique ID of the created calendar event.
   */
  hs_unique_id?: string;

  /**
   * The owner ID of the HubSpot user hosting the meeting.
   */
  hubspot_owner_id?: string;
}

export interface ExternalCalenderMeetingEventResponse {
  /**
   * The unique identifier for the meeting event.
   */
  id: string;

  /**
   * The date and time when the meeting event was initially created, in ISO 8601
   * format.
   */
  createdAt: string;

  /**
   * The date and time when the meeting event was last updated, in ISO 8601 format.
   */
  lastUpdatedAt: string;

  properties: ExternalCalendarMeetingEventResponseProperties;
}

export interface ExternalClosedRange {
  /**
   * The end value of the closed range, represented as an integer.
   */
  end: number;

  /**
   * The start value of the closed range, represented as an integer.
   */
  start: number;
}

export interface ExternalCommunicationConsentCheckbox {
  /**
   * The ID of the communication consent form being recorded.
   */
  communicationTypeId: string;

  /**
   * The text label describing the consent being given.
   */
  label: string;

  /**
   * Whether the consent checkbox is required.
   */
  required: boolean;
}

export interface ExternalEmailReminderSchedule {
  reminders: Array<ExternalReminder>;

  /**
   * Whether the invite description should be included in the reminder.
   */
  shouldIncludeInviteDescription: boolean;
}

export interface ExternalGuestSettings {
  /**
   * Indicates whether guests can be added to the meeting.
   */
  canAddGuests: boolean;

  /**
   * The maximum number of guests that can be added to the meeting.
   */
  maxGuestCount: number;
}

export interface ExternalLegalConsentOptions {
  communicationConsentCheckboxes: Array<ExternalCommunicationConsentCheckbox>;

  /**
   * The text that describes the consent for communication preferences.
   */
  communicationConsentText: string;

  /**
   * Whether the legal basis for processing is legitimate interest.
   */
  isLegitimateInterest: boolean;

  legitimateInterestSubscriptionTypes: Array<number>;

  /**
   * The text that describes the data processing privacy policy.
   */
  privacyPolicyText: string;

  /**
   * The label for the checkbox used to obtain consent for data processing.
   */
  processingConsentCheckboxLabel: string;

  /**
   * The footer text accompanying the consent for data processing. This field is not
   * used by the meeting platform and will always be empty.
   */
  processingConsentFooterText: string;

  /**
   * The text that describes the consent for processing personal data.
   */
  processingConsentText: string;

  /**
   * The type of consent required for processing. Accepted values are: IMPLICIT,
   * REQUIRED_CHECKBOX.
   */
  processingConsentType: 'IMPLICIT' | 'REQUIRED_CHECKBOX';

  /**
   * The legal basis for processing under legitimate interest. Accepted values are:
   * LEGITIMATE_INTEREST_PQL, LEGITIMATE_INTEREST_CLIENT, PERFORMANCE_OF_CONTRACT,
   * CONSENT_WITH_NOTICE, NON_GDPR, PROCESS_AND_STORE, LEGITIMATE_INTEREST_OTHER.
   */
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
  /**
   * The ID of communication consent form being recorded.
   */
  communicationTypeId: string;

  /**
   * Whether the user has given consent for the specified communication type.
   */
  consented: boolean;
}

export interface ExternalLinkAvailability {
  /**
   * Whether there are more available meeting times beyond the returned set.
   */
  hasMore: boolean;

  /**
   * Available booking slots for the meeting, grouped by the duration.
   */
  linkAvailabilityByDuration: { [key: string]: ExternalLinkAvailabilityForDuration };
}

export interface ExternalLinkAvailabilityAndBusyTimes {
  allUsersBusyTimes: Array<ExternalUserBusyTimes>;

  linkAvailability?: ExternalLinkAvailability;
}

export interface ExternalLinkAvailabilityForDuration {
  availabilities: Array<ExternalMeetingAvailability>;

  /**
   * The duration of the meeting in milliseconds.
   */
  meetingDurationMillis: number;
}

export interface ExternalLinkDisplayInfo {
  /**
   * The URL of the user's custom uploaded avatar image.
   */
  avatar?: string;

  /**
   * The URL of the company's avatar image.
   */
  companyAvatar?: string;

  /**
   * Deprecated field with no impact of link display info.
   */
  headline?: string;

  /**
   * Option for determining which avatar to display on scheduling page. Accepted
   * values are: PROFILE_IMAGE, COMPANY_LOGO, CUSTOM_AVATAR,
   */
  publicDisplayAvatarOption?: 'COMPANY_LOGO' | 'CUSTOM_AVATAR' | 'PROFILE_IMAGE';
}

export interface ExternalLinkFormField {
  /**
   * The specific field type of the form field. Corresponds to property types (e.g.,
   * `select`, `radio`, `date`, etc)
   */
  fieldType: string;

  /**
   * Whether the form field is a custom field.
   */
  isCustom: boolean;

  /**
   * Whether the form field is mandatory.
   */
  isRequired: boolean;

  /**
   * The text label for the form field.
   */
  label: string;

  /**
   * The name identifier for the form field.
   */
  name: string;

  options: Array<ExternalOption>;

  /**
   * The data type of the form field accepts (e.g. `date`, `enumeration`, etc)
   */
  type: string;
}

export interface ExternalLinkMetadata {
  /**
   * The unique identifier for the meeting link.
   */
  id: string;

  /**
   * The Unix time in milliseconds when the meeting link was created.
   */
  createdAt: string;

  /**
   * Whether the meeting link is the user's default link.
   */
  defaultLink: boolean;

  /**
   * The URL of the meeting link.
   */
  link: string;

  /**
   * The user ID of the meeting link's organizer.
   */
  organizerUserId: string;

  /**
   * The slug of the meeting link, located directly after the domain in the URL.
   */
  slug: string;

  /**
   * The type of the external meeting link. Accepted values are: PERSONAL_LINK,
   * GROUP_CALENDAR, ROUND_ROBIN_CALENDAR.
   */
  type: 'GROUP_CALENDAR' | 'PERSONAL_LINK' | 'ROUND_ROBIN_CALENDAR';

  userIdsOfLinkMembers: Array<string>;

  /**
   * The name of the meeting link.
   */
  name?: string;

  /**
   * The Unix time in milliseconds when the meeting link was last updated.
   */
  updatedAt?: string;
}

export interface ExternalMeetingAvailability {
  /**
   * The end time of the meeting availability, represented as Unix time in
   * milliseconds.
   */
  endMillisUtc: number;

  /**
   * The start time of the meeting availability, represented as Unix time in
   * milliseconds.
   */
  startMillisUtc: number;
}

export interface ExternalMeetingBooking {
  /**
   * The duration of the meeting in milliseconds.
   */
  duration: number;

  /**
   * The email address of the person booking the meeting.
   */
  email: string;

  /**
   * The first name of the person booking the meeting.
   */
  firstName: string;

  formFields: Array<ExternalBookingFormField>;

  /**
   * The last name of the person booking the meeting.
   */
  lastName: string;

  legalConsentResponses: Array<ExternalLegalConsentResponse>;

  likelyAvailableUserIds: Array<string>;

  /**
   * The unique path identifier for the meeting page.
   */
  slug: string;

  /**
   * The date and time when the meeting is scheduled to start, in ISO 8601 format.
   */
  startTime: string;

  /**
   * The locale used for formatting dates and times in the meeting booking.
   */
  locale?: string;

  /**
   * The timezone in which the meeting is scheduled.
   */
  timezone?: string;
}

export interface ExternalMeetingBookingResponse {
  /**
   * The timezone the meeting was booked from.
   */
  bookingTimezone: string;

  /**
   * The unique identifier for the meeting's calendar event.
   */
  calendarEventId: string;

  /**
   * The ID of the contact associated to the meeting.
   */
  contactId: string;

  /**
   * The duration of the meeting in milliseconds.
   */
  duration: number;

  /**
   * The date and time when the meeting is scheduled to end, in ISO 8601 format.
   */
  end: string;

  formFields: Array<ExternalValidatedFormField>;

  guestEmails: Array<string>;

  /**
   * Whether the meeting was booked offline and no associated calendar event was
   * created.
   */
  isOffline: boolean;

  legalConsentResponses: Array<ExternalLegalConsentResponse>;

  /**
   * The date and time when the meeting is scheduled to start, in ISO 8601 format.
   */
  start: string;

  /**
   * The title of the meeting and calendar event.
   */
  subject: string;

  /**
   * The locale the meeting was booked with, used to determine date formatting in
   * calendar event description.
   */
  locale?: string;

  /**
   * The physical or virtual location where the meeting will take place.
   */
  location?: string;

  /**
   * The unique identifier for the web conference meeting.
   */
  webConferenceMeetingId?: string;

  /**
   * The URL for accessing the meeting's web conference.
   */
  webConferenceUrl?: string;
}

export interface ExternalMeetingsLinkSettings {
  /**
   * An array containing the closed range availability for a meeting link. Closed
   * range times are provided as minute offsets from midnight (e.g., 540 corresponds
   * to 9am).
   */
  availability: { [key: string]: ExternalClosedRange };

  durations: Array<number>;

  formFields: Array<ExternalLinkFormField>;

  /**
   * Whether the legal consent checkbox is displayed during meeting booking.
   */
  legalConsentEnabled: boolean;

  /**
   * The minimum buffer time in milliseconds between consecutive meetings.
   */
  meetingBufferTime: number;

  /**
   * Indicates whether the meeting owner is prioritized during booking. Only applies
   * to link types of ROUND_ROBIN.
   */
  ownerPrioritized: boolean;

  /**
   * The increment for available start times of meetings, spelt out as a word (e.g.
   * 15 minute increment corresponds to `FIFTEEN`). `MEETING_DURATION` is also a
   * valid value.
   */
  startTimeIncrementMinutes:
    | 'FIFTEEN'
    | 'FIVE'
    | 'FORTY_FIVE'
    | 'MEETING_DURATION'
    | 'NINETY'
    | 'ONE_HUNDRED_TWENTY'
    | 'SIXTY'
    | 'TEN'
    | 'THIRTY'
    | 'TWENTY';

  /**
   * Legacy property that indicates the number of weeks in advance that availability
   * is advertised. May be outdated or superseded by other properties.
   */
  weeksToAdvertise: number;

  /**
   * The end date for a meeting link's custom availability window, represented as
   * Unix time in milliseconds.
   */
  customAvailabilityEndDate?: number;

  /**
   * The start date for a meeting link's custom availability window, represented as
   * Unix time in milliseconds.
   */
  customAvailabilityStartDate?: number;

  displayInfo?: ExternalLinkDisplayInfo;

  guestSettings?: ExternalGuestSettings;

  /**
   * The language setting used for the meeting link.
   */
  language?: string;

  legalConsentOptions?: ExternalLegalConsentOptions;

  /**
   * The locale setting used for formatting dates and times in the meeting link.
   */
  locale?: string;

  /**
   * The physical or virtual location where the meeting will take place.
   */
  location?: string;

  /**
   * The URL to redirect to after a meeting is booked.
   */
  redirectUrl?: string;

  welcomeScreenInfo?: ExternalMeetingsWelcomeScreenInfo;
}

export interface ExternalMeetingsUser {
  /**
   * The ID for the meetings user. This value is different than the userId.
   */
  id: string;

  /**
   * The calendar provider associated with the user. Accepted values are: GOOGLE,
   * OFFICE365, EXCHANGE, UNKNOWN.
   */
  calendarProvider: 'EXCHANGE' | 'GOOGLE' | 'OFFICE365' | 'UNKNOWN';

  /**
   * Whether the user has a sales starter seat.
   */
  isSalesStarter: boolean;

  /**
   * The ID of the user.
   */
  userId: string;

  userProfile: ExternalUserProfile;
}

export interface ExternalMeetingsWelcomeScreenInfo {
  /**
   * A brief description displayed the welcome screen below the title.
   */
  description?: string;

  /**
   * The URL of the logo image to be displayed on the welcome screen, only used if
   * `useCompanyLogo` is false.
   */
  logoUrl?: string;

  /**
   * Deprecated property. Value can be ignored but will always be false.
   */
  showWelcomeScreen?: boolean;

  /**
   * The main heading displayed on the welcome screen.
   */
  title?: string;

  /**
   * Whether the company's logo should be displayed on the welcome screen.
   */
  useCompanyLogo?: boolean;
}

export interface ExternalOption {
  /**
   * A brief description of the option.
   */
  description: string;

  /**
   * The order in which the option should be displayed.
   */
  displayOrder: number;

  /**
   * Deprecated property. Will always be 0.
   */
  doubleData: number;

  /**
   * Whether the option should be hidden from the user.
   */
  hidden: boolean;

  /**
   * The text label for the option.
   */
  label: string;

  /**
   * Whether the option is read-only.
   */
  readOnly: boolean;

  /**
   * The value associated with the option.
   */
  value: string;
}

export interface ExternalReminder {
  /**
   * The number of timeUnits prior to the meeting start when the reminder will be
   * sent.
   */
  numberOfTimeUnits: number;

  /**
   * Accepted values are: WEEKS, DAYS, HOURS, MINUTES.
   */
  timeUnit: 'DAYS' | 'HOURS' | 'MINUTES' | 'WEEKS';
}

export interface ExternalTimeRange {
  /**
   * The end time of the time range, represented as Unix time in milliseconds.
   */
  end: number;

  /**
   * The start time of the time range, represented as Unix time in milliseconds.
   */
  start: number;
}

export interface ExternalUserBusyTimes {
  busyTimes: Array<ExternalTimeRange>;

  /**
   * Whether the user is offline.
   */
  isOffline: boolean;

  meetingsUser: ExternalMeetingsUser;
}

export interface ExternalUserProfile {
  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The first name of the user.
   */
  firstName?: string;

  /**
   * The full name of the user.
   */
  fullName?: string;

  /**
   * The last name of the user.
   */
  lastName?: string;
}

export interface ExternalValidatedFormField {
  /**
   * Whether the form field is a custom field.
   */
  isCustom: boolean;

  /**
   * The text label associated with the form field.
   */
  label: string;

  /**
   * The name identifier for the form field, includes underscores in place of spaces
   * (e.g., the label `my form` is converted to `my_form`).
   */
  name: string;

  /**
   * The value associated with the form field.
   */
  value: string;

  /**
   * The specific input type of the form field. Corresponds to property types (e.g.,
   * `select`, `radio`, `date`, etc).
   */
  fieldType?: string;

  /**
   * The translated text label for the form field.
   */
  translatedLabel?: string;

  /**
   * The text label associated to a form field selection or option.
   */
  valueLabel?: string;
}

Meetings.Advanced = Advanced;
Meetings.BaseAdvanced = BaseAdvanced;
Meetings.Basic = Basic;
Meetings.BaseBasic = BaseBasic;

export declare namespace Meetings {
  export {
    type CollectionResponseWithTotalExternalLinkMetadata as CollectionResponseWithTotalExternalLinkMetadata,
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

  export {
    Advanced as Advanced,
    BaseAdvanced as BaseAdvanced,
    type AdvancedCreateParams as AdvancedCreateParams,
    type AdvancedBookParams as AdvancedBookParams,
  };

  export {
    Basic as Basic,
    BaseBasic as BaseBasic,
    type BasicListParams as BasicListParams,
    type BasicGetAvailabilityBySlugParams as BasicGetAvailabilityBySlugParams,
    type BasicGetBookingInfoBySlugParams as BasicGetBookingInfoBySlugParams,
  };
}
