// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MeetingsAPI from './meetings';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Calendar extends APIResource {
  create(
    params: CalendarCreateParams,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalCalenderMeetingEventResponse> {
    const { organizerUserId, ...body } = params;
    return this._client.post('/scheduler/v3/meetings/calendar', {
      query: { organizerUserId },
      body,
      ...options,
    });
  }
}

export interface CalendarCreateParams {
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
   * Body param
   */
  timezone: string;
}

export declare namespace Calendar {
  export { type CalendarCreateParams as CalendarCreateParams };
}
