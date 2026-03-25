// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Attendance extends APIResource {
  createByEventIDAndContactID(
    subscriberState: string,
    params: AttendanceCreateByEventIDAndContactIDParams,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.BatchResponseSubscriberVidResponse> {
    const { objectId, ...body } = params;
    return this._client.post(
      path`/marketing/marketing-events/2026-03/${objectId}/attendance/${subscriberState}/create`,
      { body, ...options },
    );
  }

  createByEventIDAndEmail(
    subscriberState: string,
    params: AttendanceCreateByEventIDAndEmailParams,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.BatchResponseSubscriberEmailResponse> {
    const { objectId, ...body } = params;
    return this._client.post(
      path`/marketing/marketing-events/2026-03/${objectId}/attendance/${subscriberState}/email-create`,
      { body, ...options },
    );
  }

  createByExternalEventIDAndContactID(
    subscriberState: string,
    params: AttendanceCreateByExternalEventIDAndContactIDParams,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.BatchResponseSubscriberVidResponse> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/marketing-events/2026-03/attendance/${externalEventId}/${subscriberState}/create`,
      { query: { externalAccountId }, body, ...options },
    );
  }

  createByExternalEventIDAndEmail(
    subscriberState: string,
    params: AttendanceCreateByExternalEventIDAndEmailParams,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.BatchResponseSubscriberEmailResponse> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/marketing-events/2026-03/attendance/${externalEventId}/${subscriberState}/email-create`,
      { query: { externalAccountId }, body, ...options },
    );
  }
}

export interface AttendanceCreateByEventIDAndContactIDParams {
  /**
   * Path param: The internal id of the marketing event in HubSpot.
   */
  objectId: string;

  /**
   * Body param: List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<EventsAPI.MarketingEventSubscriber>;
}

export interface AttendanceCreateByEventIDAndEmailParams {
  /**
   * Path param: The internal id of the marketing event in HubSpot.
   */
  objectId: string;

  /**
   * Body param: List of marketing event details to create or update
   */
  inputs: Array<EventsAPI.MarketingEventEmailSubscriber>;
}

export interface AttendanceCreateByExternalEventIDAndContactIDParams {
  /**
   * Path param
   */
  externalEventId: string;

  /**
   * Body param: List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<EventsAPI.MarketingEventSubscriber>;

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
  inputs: Array<EventsAPI.MarketingEventEmailSubscriber>;

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
