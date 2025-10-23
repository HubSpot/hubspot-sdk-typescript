// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebhooksAPI from './webhooks';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Create new event subscription for the specified app.
   *
   * @example
   * ```ts
   * const subscriptionResponse =
   *   await client.webhooks.subscriptions.create(0, {
   *     eventType: 'contact.propertyChange',
   *   });
   * ```
   */
  create(
    appID: number,
    body: SubscriptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.SubscriptionResponse> {
    return this._client.post(path`/webhooks/v3/${appID}/subscriptions`, { body, ...options });
  }

  /**
   * Update an existing event subscription by ID.
   *
   * @example
   * ```ts
   * const subscriptionResponse =
   *   await client.webhooks.subscriptions.update(0, {
   *     appId: 0,
   *   });
   * ```
   */
  update(
    subscriptionID: number,
    params: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.SubscriptionResponse> {
    const { appId, ...body } = params;
    return this._client.patch(path`/webhooks/v3/${appId}/subscriptions/${subscriptionID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve event subscriptions for the specified app.
   *
   * @example
   * ```ts
   * const subscriptionListResponse =
   *   await client.webhooks.subscriptions.list(0);
   * ```
   */
  list(appID: number, options?: RequestOptions): APIPromise<WebhooksAPI.SubscriptionListResponse> {
    return this._client.get(path`/webhooks/v3/${appID}/subscriptions`, options);
  }

  /**
   * Delete an existing event subscription by ID.
   *
   * @example
   * ```ts
   * await client.webhooks.subscriptions.delete(0, { appId: 0 });
   * ```
   */
  delete(
    subscriptionID: number,
    params: SubscriptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/webhooks/v3/${appId}/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific event subscription by ID.
   *
   * @example
   * ```ts
   * const subscriptionResponse =
   *   await client.webhooks.subscriptions.get(0, { appId: 0 });
   * ```
   */
  get(
    subscriptionID: number,
    params: SubscriptionGetParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.SubscriptionResponse> {
    const { appId } = params;
    return this._client.get(path`/webhooks/v3/${appId}/subscriptions/${subscriptionID}`, options);
  }

  /**
   * Batch create event subscriptions for the specified app.
   *
   * @example
   * ```ts
   * const batchResponseSubscriptionResponse =
   *   await client.webhooks.subscriptions.updateBatch(0, {
   *     inputs: [{ id: 0, active: true }],
   *   });
   * ```
   */
  updateBatch(
    appID: number,
    body: SubscriptionUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseSubscriptionResponse> {
    return this._client.post(path`/webhooks/v3/${appID}/subscriptions/batch/update`, { body, ...options });
  }
}

export interface SubscriptionCreateParams {
  /**
   * Type of event to listen for. Can be one of `create`, `delete`,
   * `deletedForPrivacy`, or `propertyChange`.
   */
  eventType:
    | 'contact.propertyChange'
    | 'company.propertyChange'
    | 'deal.propertyChange'
    | 'ticket.propertyChange'
    | 'product.propertyChange'
    | 'line_item.propertyChange'
    | 'contact.creation'
    | 'contact.deletion'
    | 'contact.privacyDeletion'
    | 'company.creation'
    | 'company.deletion'
    | 'deal.creation'
    | 'deal.deletion'
    | 'ticket.creation'
    | 'ticket.deletion'
    | 'product.creation'
    | 'product.deletion'
    | 'line_item.creation'
    | 'line_item.deletion'
    | 'conversation.creation'
    | 'conversation.deletion'
    | 'conversation.newMessage'
    | 'conversation.privacyDeletion'
    | 'conversation.propertyChange'
    | 'contact.merge'
    | 'company.merge'
    | 'deal.merge'
    | 'ticket.merge'
    | 'product.merge'
    | 'line_item.merge'
    | 'contact.restore'
    | 'company.restore'
    | 'deal.restore'
    | 'ticket.restore'
    | 'product.restore'
    | 'line_item.restore'
    | 'contact.associationChange'
    | 'company.associationChange'
    | 'deal.associationChange'
    | 'ticket.associationChange'
    | 'line_item.associationChange'
    | 'object.propertyChange'
    | 'object.creation'
    | 'object.deletion'
    | 'object.merge'
    | 'object.restore'
    | 'object.associationChange';

  /**
   * Determines if the subscription is active or paused. Defaults to false.
   */
  active?: boolean;

  objectTypeId?: string;

  /**
   * The internal name of the property to monitor for changes. Only applies when
   * `eventType` is `propertyChange`.
   */
  propertyName?: string;
}

export interface SubscriptionUpdateParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Body param: Determines if the subscription is active or paused.
   */
  active?: boolean;
}

export interface SubscriptionDeleteParams {
  /**
   * The ID of the app.
   */
  appId: number;
}

export interface SubscriptionGetParams {
  /**
   * The ID of the app.
   */
  appId: number;
}

export interface SubscriptionUpdateBatchParams {
  inputs: Array<WebhooksAPI.SubscriptionBatchUpdateRequest>;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
    type SubscriptionGetParams as SubscriptionGetParams,
    type SubscriptionUpdateBatchParams as SubscriptionUpdateBatchParams,
  };
}
