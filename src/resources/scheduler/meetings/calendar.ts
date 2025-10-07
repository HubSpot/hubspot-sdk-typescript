// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MeetingsAPI from './meetings';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Calendar extends APIResource {
  create(
    body: CalendarCreateParams,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalCalenderMeetingEventResponse> {
    return this._client.post('/scheduler/v3/meetings/calendar', { body, ...options });
  }
}

export interface CalendarCreateParams {
  associations: Array<MeetingsAPI.ExternalAssociationCreateRequest>;

  emailReminderSchedule: MeetingsAPI.ExternalEmailReminderSchedule;

  properties: MeetingsAPI.ExternalCalendarMeetingEventCreateProperties;

  timezone: string;
}

export declare namespace Calendar {
  export { type CalendarCreateParams as CalendarCreateParams };
}
