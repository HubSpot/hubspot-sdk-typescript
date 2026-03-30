// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Send extends APIResource {
  /**
   * Send multiple event occurrences at once.
   */
  batchSend(body: SendBatchSendParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/events/2026-03/send/batch', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send data for a single custom event occurrence.
   */
  send(body: SendSendParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/events/2026-03/send', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SendBatchSendParams {
  inputs: Array<EventsAPI.BehavioralEventHTTPCompletionRequest>;
}

export interface SendSendParams {
  /**
   * Internal name of the event-type to trigger
   */
  eventName: string;

  /**
   * Map of properties for the event in the format property internal name - property
   * value
   */
  properties: { [key: string]: string };

  /**
   * Email of visitor
   */
  email?: string;

  /**
   * The object id that this event occurred on. Could be a contact id or a visitor
   * id.
   */
  objectId?: string;

  /**
   * The time when this event occurred (if any). If this isn't set, the current time
   * will be used
   */
  occurredAt?: string;

  /**
   * User token
   */
  utk?: string;

  uuid?: string;
}

export declare namespace Send {
  export { type SendBatchSendParams as SendBatchSendParams, type SendSendParams as SendSendParams };
}
