// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SubscriberState extends APIResource {
  /**
   * Record a subscriber state between multiple HubSpot contacts and a marketing
   * event, using contact email addresses. Note that the contact must already exist
   * in HubSpot; a contact will not be created. The contactProperties field is used
   * only when creating a new contact. These properties will not update existing
   * contacts.
   */
  recordByEmail(
    subscriberState: string,
    params: SubscriberStateRecordByEmailParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/marketing-events/2026-03/events/${externalEventId}/${subscriberState}/email-upsert`,
      {
        query: { externalAccountId },
        body,
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }

  /**
   * Record a subscriber state between multiple HubSpot contacts and a marketing
   * event, using HubSpot contact IDs. Note that the contact must already exist in
   * HubSpot; a contact will not be created.
   */
  recordByID(
    subscriberState: string,
    params: SubscriberStateRecordByIDParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/marketing-events/2026-03/events/${externalEventId}/${subscriberState}/upsert`,
      {
        query: { externalAccountId },
        body,
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }
}

export interface SubscriberStateRecordByEmailParams {
  /**
   * Path param
   */
  externalEventId: string;

  /**
   * Query param
   */
  externalAccountId: string;

  /**
   * Body param: List of marketing event details to create or update
   */
  inputs: Array<EventsAPI.MarketingEventEmailSubscriber>;
}

export interface SubscriberStateRecordByIDParams {
  /**
   * Path param
   */
  externalEventId: string;

  /**
   * Query param
   */
  externalAccountId: string;

  /**
   * Body param: List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<EventsAPI.MarketingEventSubscriber>;
}

export declare namespace SubscriberState {
  export {
    type SubscriberStateRecordByEmailParams as SubscriberStateRecordByEmailParams,
    type SubscriberStateRecordByIDParams as SubscriberStateRecordByIDParams,
  };
}
