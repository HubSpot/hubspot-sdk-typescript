// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchAPI from './batch';
import { Batch, BatchCreateParams, BatchCreateResponse } from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Subscriptions extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create an event subscription
   */
  create(appID: number, body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.post(path`/webhooks/v3/${appID}/subscriptions`, { body, ...options });
  }

  /**
   * Read an event subscription
   */
  retrieve(
    subscriptionID: number,
    params: SubscriptionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Subscription> {
    const { appId } = params;
    return this._client.get(path`/webhooks/v3/${appId}/subscriptions/${subscriptionID}`, options);
  }

  /**
   * Update an event subscription
   */
  update(
    subscriptionID: number,
    params: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Subscription> {
    const { appId, ...body } = params;
    return this._client.patch(path`/webhooks/v3/${appId}/subscriptions/${subscriptionID}`, {
      body,
      ...options,
    });
  }

  /**
   * Read event subscriptions
   */
  list(appID: number, options?: RequestOptions): APIPromise<SubscriptionListResponse> {
    return this._client.get(path`/webhooks/v3/${appID}/subscriptions`, options);
  }

  /**
   * Delete event subscription
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
}

export interface Subscription {
  id: string;

  active: boolean;

  createdAt: string;

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

  objectTypeId?: string;

  propertyName?: string;

  updatedAt?: string;
}

export interface SubscriptionListResponse {
  results: Array<Subscription>;
}

export interface SubscriptionCreateParams {
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

  active?: boolean;

  objectTypeId?: string;

  propertyName?: string;
}

export interface SubscriptionRetrieveParams {
  appId: number;
}

export interface SubscriptionUpdateParams {
  /**
   * Path param:
   */
  appId: number;

  /**
   * Body param:
   */
  active?: boolean;
}

export interface SubscriptionDeleteParams {
  appId: number;
}

Subscriptions.Batch = Batch;

export declare namespace Subscriptions {
  export {
    type Subscription as Subscription,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };

  export {
    Batch as Batch,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchCreateParams as BatchCreateParams,
  };
}
