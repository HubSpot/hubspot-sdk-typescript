// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketingEventsAPI from './marketing-events';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Attendance extends APIResource {
  /**
   * Records the participation of multiple HubSpot contacts in a Marketing Event
   * using their HubSpot contact IDs.
   *
   * Additional Functionality:
   *
   * - Adds a timeline event to the contacts.
   *
   * Allowed Properties: For the state "attend":
   *
   * - joinedAt
   * - leftAt
   *
   * @example
   * ```ts
   * const batchResponseSubscriberVidResponse =
   *   await client.marketing.marketingEvents.attendance.createByContactID(
   *     'subscriberState',
   *     {
   *       externalEventId: 'externalEventId',
   *       inputs: [{ interactionDateTime: 0 }],
   *     },
   *   );
   * ```
   */
  createByContactID(
    subscriberState: string,
    params: AttendanceCreateByContactIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.BatchResponseSubscriberVidResponse> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/v3/marketing-events/attendance/${externalEventId}/${subscriberState}/create`,
      { query: { externalAccountId }, body, ...options },
    );
  }

  /**
   * Records the participation of multiple HubSpot contacts in a Marketing Event
   * using their email addresses.
   *
   * If a contact does not exist, it will be automatically created. The
   * contactProperties field is used exclusively for creating new contacts and will
   * not update properties of existing contacts.
   *
   * Additional Functionality:
   *
   * - Adds a timeline event to the contacts.
   *
   * Allowed Properties: For the state "attend":
   *
   * - joinedAt
   * - leftAt
   *
   * @example
   * ```ts
   * const batchResponseSubscriberEmailResponse =
   *   await client.marketing.marketingEvents.attendance.createByEmail(
   *     'subscriberState',
   *     {
   *       externalEventId: 'externalEventId',
   *       inputs: [{ email: 'email', interactionDateTime: 0 }],
   *     },
   *   );
   * ```
   */
  createByEmail(
    subscriberState: string,
    params: AttendanceCreateByEmailParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.BatchResponseSubscriberEmailResponse> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/v3/marketing-events/attendance/${externalEventId}/${subscriberState}/email-create`,
      { query: { externalAccountId }, body, ...options },
    );
  }
}

export interface AttendanceCreateByContactIDParams {
  /**
   * Path param: The id of the marketing event in the external event application
   */
  externalEventId: string;

  /**
   * Body param: List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<MarketingEventsAPI.MarketingEventSubscriber>;

  /**
   * Query param: The accountId that is associated with this marketing event in the
   * external event application
   */
  externalAccountId?: string;
}

export interface AttendanceCreateByEmailParams {
  /**
   * Path param: The id of the marketing event in the external event application
   */
  externalEventId: string;

  /**
   * Body param: List of marketing event details to create or update
   */
  inputs: Array<MarketingEventsAPI.MarketingEventEmailSubscriber>;

  /**
   * Query param: The accountId that is associated with this marketing event in the
   * external event application
   */
  externalAccountId?: string;
}

export declare namespace Attendance {
  export {
    type AttendanceCreateByContactIDParams as AttendanceCreateByContactIDParams,
    type AttendanceCreateByEmailParams as AttendanceCreateByEmailParams,
  };
}
