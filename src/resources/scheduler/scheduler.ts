// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MeetingsAPI from './meetings/meetings';
import {
  CollectionResponseWithTotalExternalLinkMetadataForwardPaging,
  ExternalAssociationCreateRequest,
  ExternalBookingFormField,
  ExternalBookingInfo,
  ExternalBrandingMetadata,
  ExternalCalendarMeetingEventCreateProperties,
  ExternalCalendarMeetingEventCreateRequest,
  ExternalCalendarMeetingEventResponseProperties,
  ExternalCalenderMeetingEventResponse,
  ExternalClosedRange,
  ExternalCommunicationConsentCheckbox,
  ExternalEmailReminderSchedule,
  ExternalGuestSettings,
  ExternalLegalConsentOptions,
  ExternalLegalConsentResponse,
  ExternalLinkAvailability,
  ExternalLinkAvailabilityAndBusyTimes,
  ExternalLinkAvailabilityForDuration,
  ExternalLinkDisplayInfo,
  ExternalLinkFormField,
  ExternalLinkMetadata,
  ExternalMeetingAvailability,
  ExternalMeetingBooking,
  ExternalMeetingBookingResponse,
  ExternalMeetingsLinkSettings,
  ExternalMeetingsUser,
  ExternalMeetingsWelcomeScreenInfo,
  ExternalOption,
  ExternalReminder,
  ExternalTimeRange,
  ExternalUserBusyTimes,
  ExternalUserProfile,
  ExternalValidatedFormField,
  Meetings,
} from './meetings/meetings';

export class Scheduler extends APIResource {
  meetings: MeetingsAPI.Meetings = new MeetingsAPI.Meetings(this._client);
}

Scheduler.Meetings = Meetings;

export declare namespace Scheduler {
  export {
    Meetings as Meetings,
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
}
