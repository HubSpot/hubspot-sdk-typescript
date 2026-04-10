// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketingEventsAPI from './marketing-events';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAttendance extends APIResource {
  static override readonly _key: readonly ['marketing', 'marketingEvents', 'attendance'] = Object.freeze([
    'marketing',
    'marketingEvents',
    'attendance',
  ] as const);

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
   */
  createByEventIDAndContactID(
    subscriberState: string,
    params: AttendanceCreateByEventIDAndContactIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.BatchResponseSubscriberVidResponse> {
    const { objectId, ...body } = params;
    return this._client.post(
      path`/marketing/marketing-events/2026-03/${objectId}/attendance/${subscriberState}/create`,
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
   */
  createByEventIDAndEmail(
    subscriberState: string,
    params: AttendanceCreateByEventIDAndEmailParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.BatchResponseSubscriberEmailResponse> {
    const { objectId, ...body } = params;
    return this._client.post(
      path`/marketing/marketing-events/2026-03/${objectId}/attendance/${subscriberState}/email-create`,
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
   */
  createByExternalEventIDAndContactID(
    subscriberState: string,
    params: AttendanceCreateByExternalEventIDAndContactIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.BatchResponseSubscriberVidResponse> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/marketing-events/2026-03/attendance/${externalEventId}/${subscriberState}/create`,
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
   */
  createByExternalEventIDAndEmail(
    subscriberState: string,
    params: AttendanceCreateByExternalEventIDAndEmailParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.BatchResponseSubscriberEmailResponse> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/marketing-events/2026-03/attendance/${externalEventId}/${subscriberState}/email-create`,
      { query: { externalAccountId }, body, ...options },
    );
  }
}
export class Attendance extends BaseAttendance {}

export interface AttendanceCreateByEventIDAndContactIDParams {
  /**
   * Path param: The internal id of the marketing event in HubSpot.
   */
  objectId: string;

  /**
   * Body param: List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<MarketingEventsAPI.MarketingEventSubscriber>;
}

export interface AttendanceCreateByEventIDAndEmailParams {
  /**
   * Path param: The internal id of the marketing event in HubSpot.
   */
  objectId: string;

  /**
   * Body param: List of marketing event details to create or update
   */
  inputs: Array<MarketingEventsAPI.MarketingEventEmailSubscriber>;
}

export interface AttendanceCreateByExternalEventIDAndContactIDParams {
  /**
   * Path param
   */
  externalEventId: string;

  /**
   * Body param: List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<MarketingEventsAPI.MarketingEventSubscriber>;

  /**
   * Query param
   */
  externalAccountId?: string;
}

export interface AttendanceCreateByExternalEventIDAndEmailParams {
  /**
   * Path param
   */
  externalEventId: string;

  /**
   * Body param: List of marketing event details to create or update
   */
  inputs: Array<MarketingEventsAPI.MarketingEventEmailSubscriber>;

  /**
   * Query param
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
