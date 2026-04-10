// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MeetingsAPI from './meetings';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseAdvanced extends APIResource {
  static override readonly _key: readonly ['scheduler', 'meetings', 'advanced'] = Object.freeze([
    'scheduler',
    'meetings',
    'advanced',
  ] as const);

  /**
   * Create a new calendar event and meeting object by providing the necessary
   * details such as associations, email reminders, meeting object properties, and
   * timezone.
   */
  create(
    params: AdvancedCreateParams,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalCalenderMeetingEventResponse> {
    const { organizerUserId, ...body } = params;
    return this._client.post('/scheduler/2026-03/meetings/calendar', {
      query: { organizerUserId },
      body,
      ...options,
    });
  }

  /**
   * Book a meeting for a specified meeting page.
   */
  book(
    body: AdvancedBookParams,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalMeetingBookingResponse> {
    return this._client.post('/scheduler/2026-03/meetings/meeting-links/book', { body, ...options });
  }
}
export class Advanced extends BaseAdvanced {}

export interface AdvancedCreateParams {
  /**
   * Query param
   */
  organizerUserId: string;

  /**
   * Body param
   */
  associations: Array<MeetingsAPI.ExternalAssociationCreateRequest>;

  /**
   * Body param
   */
  emailReminderSchedule: MeetingsAPI.ExternalEmailReminderSchedule;

  /**
   * Body param
   */
  properties: MeetingsAPI.ExternalCalendarMeetingEventCreateProperties;

  /**
   * Body param: The timezone property that will be set on the meeting event.
   */
  timezone: string;
}

export interface AdvancedBookParams {
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

  formFields: Array<MeetingsAPI.ExternalBookingFormField>;

  /**
   * The last name of the person booking the meeting.
   */
  lastName: string;

  legalConsentResponses: Array<MeetingsAPI.ExternalLegalConsentResponse>;

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

export declare namespace Advanced {
  export { type AdvancedCreateParams as AdvancedCreateParams, type AdvancedBookParams as AdvancedBookParams };
}
