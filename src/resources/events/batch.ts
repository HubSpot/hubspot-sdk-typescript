// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Send multiple event completions at once.
   *
   * @example
   * ```ts
   * await client.events.batch.send({
   *   inputs: [{ eventName: 'pe123456_account_login' }],
   * });
   * ```
   */
  send(body: BatchSendParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/events/v3/send/batch', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BatchSendParams {
  inputs: Array<EventsAPI.BehavioralEventHTTPCompletionRequest>;
}

export declare namespace Batch {
  export { type BatchSendParams as BatchSendParams };
}
