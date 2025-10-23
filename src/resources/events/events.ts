// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchAPI from './batch';
import { Batch, BatchSendParams } from './batch';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Events extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Send data for a single event completion.
   *
   * @example
   * ```ts
   * await client.events.send({
   *   eventName: 'pe123456_account_login',
   * });
   * ```
   */
  send(body: EventSendParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/events/v3/send', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BatchedBehavioralEventHTTPCompletionRequest {
  inputs: Array<BehavioralEventHTTPCompletionRequest>;
}

export interface BehavioralEventHTTPCompletionRequest {
  /**
   * The internal name of the event (`pe<portalID>_eventName`). Can be retrieved
   * through the
   * [event definitions API](https://developers.hubspot.com/docs/reference/api/analytics-and-events/custom-events/custom-event-definitions#get-%2Fevents%2Fv3%2Fevent-definitions)
   * or in
   * [HubSpot's UI](https://knowledge.hubspot.com/reports/create-custom-behavioral-events-with-the-code-wizard#find-internal-name).
   */
  eventName: string;

  /**
   * The visitor's email address. Used for associating the event data with a CRM
   * record.
   */
  email?: string;

  /**
   * The ID of the object that completed the event (e.g., contact ID or visitor ID).
   */
  objectId?: string;

  /**
   * The time when this event occurred. If this isn't set, the current time will be
   * used.
   */
  occurredAt?: string;

  /**
   * The event properties to update. Takes the format of key-value pairs (property
   * internal name and property value). Learn more about
   * [HubSpot's default event properties](https://developers.hubspot.com/docs/guides/api/analytics-and-events/custom-events/custom-event-definitions#hubspot-s-default-event-properties).
   */
  properties?: { [key: string]: string };

  /**
   * The visitor's usertoken. Used for associating the event data with a CRM record.
   */
  utk?: string;

  /**
   * Include a universally unique identifier to assign a unique ID to the event
   * completion. Can be useful for matching data between HubSpot and other external
   * systems.
   */
  uuid?: string;
}

export interface EventSendParams {
  /**
   * The internal name of the event (`pe<portalID>_eventName`). Can be retrieved
   * through the
   * [event definitions API](https://developers.hubspot.com/docs/reference/api/analytics-and-events/custom-events/custom-event-definitions#get-%2Fevents%2Fv3%2Fevent-definitions)
   * or in
   * [HubSpot's UI](https://knowledge.hubspot.com/reports/create-custom-behavioral-events-with-the-code-wizard#find-internal-name).
   */
  eventName: string;

  /**
   * The visitor's email address. Used for associating the event data with a CRM
   * record.
   */
  email?: string;

  /**
   * The ID of the object that completed the event (e.g., contact ID or visitor ID).
   */
  objectId?: string;

  /**
   * The time when this event occurred. If this isn't set, the current time will be
   * used.
   */
  occurredAt?: string;

  /**
   * The event properties to update. Takes the format of key-value pairs (property
   * internal name and property value). Learn more about
   * [HubSpot's default event properties](https://developers.hubspot.com/docs/guides/api/analytics-and-events/custom-events/custom-event-definitions#hubspot-s-default-event-properties).
   */
  properties?: { [key: string]: string };

  /**
   * The visitor's usertoken. Used for associating the event data with a CRM record.
   */
  utk?: string;

  /**
   * Include a universally unique identifier to assign a unique ID to the event
   * completion. Can be useful for matching data between HubSpot and other external
   * systems.
   */
  uuid?: string;
}

Events.Batch = Batch;

export declare namespace Events {
  export {
    type BatchedBehavioralEventHTTPCompletionRequest as BatchedBehavioralEventHTTPCompletionRequest,
    type BehavioralEventHTTPCompletionRequest as BehavioralEventHTTPCompletionRequest,
    type EventSendParams as EventSendParams,
  };

  export { Batch as Batch, type BatchSendParams as BatchSendParams };
}
