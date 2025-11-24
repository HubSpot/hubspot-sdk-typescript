// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Cancel an active commerce subscription using the subscription ID.
   *
   * @example
   * ```ts
   * const response = await client.crm.subscriptions.cancel(0);
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  cancel(objectID: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/payments-subscriptions/v1/subscriptions/crm/${objectID}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Pause an active subscription using the subscription ID.
   *
   * @example
   * ```ts
   * const response = await client.crm.subscriptions.pause(0);
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  pause(objectID: number, body: SubscriptionPauseParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/payments-subscriptions/v1/subscriptions/crm/${objectID}/pause`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Resume a previously paused subscription using the subscription ID.
   *
   * @example
   * ```ts
   * const response = await client.crm.subscriptions.unpause(0, {
   *   proposedNextBillingDate: 0,
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  unpause(objectID: number, body: SubscriptionUnpauseParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/payments-subscriptions/v1/subscriptions/crm/${objectID}/unpause`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface PauseSubscriptionRequest {
  pauseReason?: string;
}

export interface UnpauseRequest {
  proposedNextBillingDate: number;
}

export interface SubscriptionPauseParams {
  pauseReason?: string;
}

export interface SubscriptionUnpauseParams {
  proposedNextBillingDate: number;
}

export declare namespace Subscriptions {
  export {
    type PauseSubscriptionRequest as PauseSubscriptionRequest,
    type UnpauseRequest as UnpauseRequest,
    type SubscriptionPauseParams as SubscriptionPauseParams,
    type SubscriptionUnpauseParams as SubscriptionUnpauseParams,
  };
}
