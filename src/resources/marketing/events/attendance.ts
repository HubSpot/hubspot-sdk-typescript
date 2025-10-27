// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketingAPI from '../marketing';
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
   *   await client.marketing.events.attendance.createByEventIDAndContactID(
   *     'subscriberState',
   *     {
   *       objectId: 'objectId',
   *       inputs: [{ interactionDateTime: 0 }],
   *     },
   *   );
   * ```
   */
  createByEventIDAndContactID(
    subscriberState: string,
    params: AttendanceCreateByEventIDAndContactIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingAPI.BatchResponseSubscriberVidResponse> {
    const { objectId, ...body } = params;
    return this._client.post(
      path`/marketing/v3/marketing-events/${objectId}/attendance/${subscriberState}/create`,
      { body, ...options },
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
   *   await client.marketing.events.attendance.createByEventIDAndEmail(
   *     'subscriberState',
   *     {
   *       objectId: 'objectId',
   *       inputs: [{ email: 'email', interactionDateTime: 0 }],
   *     },
   *   );
   * ```
   */
  createByEventIDAndEmail(
    subscriberState: string,
    params: AttendanceCreateByEventIDAndEmailParams,
    options?: RequestOptions,
  ): APIPromise<MarketingAPI.BatchResponseSubscriberEmailResponse> {
    const { objectId, ...body } = params;
    return this._client.post(
      path`/marketing/v3/marketing-events/${objectId}/attendance/${subscriberState}/email-create`,
      { body, ...options },
    );
  }

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
   *   await client.marketing.events.attendance.createByExternalEventIDAndContactID(
   *     'subscriberState',
   *     {
   *       externalEventId: 'externalEventId',
   *       inputs: [{ interactionDateTime: 0 }],
   *     },
   *   );
   * ```
   */
  createByExternalEventIDAndContactID(
    subscriberState: string,
    params: AttendanceCreateByExternalEventIDAndContactIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingAPI.BatchResponseSubscriberVidResponse> {
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
   *   await client.marketing.events.attendance.createByExternalEventIDAndEmail(
   *     'subscriberState',
   *     {
   *       externalEventId: 'externalEventId',
   *       inputs: [{ email: 'email', interactionDateTime: 0 }],
   *     },
   *   );
   * ```
   */
  createByExternalEventIDAndEmail(
    subscriberState: string,
    params: AttendanceCreateByExternalEventIDAndEmailParams,
    options?: RequestOptions,
  ): APIPromise<MarketingAPI.BatchResponseSubscriberEmailResponse> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/v3/marketing-events/attendance/${externalEventId}/${subscriberState}/email-create`,
      { query: { externalAccountId }, body, ...options },
    );
  }
}

export interface AttendanceCreateByEventIDAndContactIDParams {
  /**
   * Path param: The internal id of the marketing event in HubSpot
   */
  objectId: string;

  /**
   * Body param: List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<MarketingAPI.MarketingEventSubscriber>;
}

export interface AttendanceCreateByEventIDAndEmailParams {
  /**
   * Path param: The internal ID of the marketing event in HubSpot
   */
  objectId: string;

  /**
   * Body param: List of marketing event details to create or update
   */
  inputs: Array<MarketingAPI.MarketingEventEmailSubscriber>;
}

export interface AttendanceCreateByExternalEventIDAndContactIDParams {
  /**
   * Path param: The id of the marketing event in the external event application
   */
  externalEventId: string;

  /**
   * Body param: List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<MarketingAPI.MarketingEventSubscriber>;

  /**
   * Query param: The accountId that is associated with this marketing event in the
   * external event application
   */
  externalAccountId?: string;
}

export interface AttendanceCreateByExternalEventIDAndEmailParams {
  /**
   * Path param: The id of the marketing event in the external event application
   */
  externalEventId: string;

  /**
   * Body param: List of marketing event details to create or update
   */
  inputs: Array<MarketingAPI.MarketingEventEmailSubscriber>;

  /**
   * Query param: The accountId that is associated with this marketing event in the
   * external event application
   */
  externalAccountId?: string;
}

export declare namespace Attendance {
  export {
    type AttendanceCreateByEventIDAndContactIDParams as AttendanceCreateByEventIDAndContactIDParams,
    type AttendanceCreateByEventIDAndEmailParams as AttendanceCreateByEventIDAndEmailParams,
    type AttendanceCreateByExternalEventIDAndContactIDParams as AttendanceCreateByExternalEventIDAndContactIDParams,
    type AttendanceCreateByExternalEventIDAndEmailParams as AttendanceCreateByExternalEventIDAndEmailParams,
  };
}
