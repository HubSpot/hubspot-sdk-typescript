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
    | 'company.associationChange'
    | 'company.creation'
    | 'company.deletion'
    | 'company.merge'
    | 'company.propertyChange'
    | 'company.restore'
    | 'contact.associationChange'
    | 'contact.creation'
    | 'contact.deletion'
    | 'contact.merge'
    | 'contact.privacyDeletion'
    | 'contact.propertyChange'
    | 'contact.restore'
    | 'conversation.creation'
    | 'conversation.deletion'
    | 'conversation.newMessage'
    | 'conversation.privacyDeletion'
    | 'conversation.propertyChange'
    | 'deal.associationChange'
    | 'deal.creation'
    | 'deal.deletion'
    | 'deal.merge'
    | 'deal.propertyChange'
    | 'deal.restore'
    | 'line_item.associationChange'
    | 'line_item.creation'
    | 'line_item.deletion'
    | 'line_item.merge'
    | 'line_item.propertyChange'
    | 'line_item.restore'
    | 'object.associationChange'
    | 'object.creation'
    | 'object.deletion'
    | 'object.merge'
    | 'object.propertyChange'
    | 'object.restore'
    | 'product.creation'
    | 'product.deletion'
    | 'product.merge'
    | 'product.propertyChange'
    | 'product.restore'
    | 'ticket.associationChange'
    | 'ticket.creation'
    | 'ticket.deletion'
    | 'ticket.merge'
    | 'ticket.propertyChange'
    | 'ticket.restore';

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
