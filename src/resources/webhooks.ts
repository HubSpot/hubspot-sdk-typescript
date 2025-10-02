// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Create an event subscription
   */
  create(
    appID: number,
    body: WebhookCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksSubscriptionResponse> {
    return this._client.post(path`/webhooks/v3/${appID}/subscriptions`, { body, ...options });
  }

  /**
   * Update an event subscription
   */
  update(
    subscriptionID: number,
    params: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksSubscriptionResponse> {
    const { appId, ...body } = params;
    return this._client.patch(path`/webhooks/v3/${appId}/subscriptions/${subscriptionID}`, {
      body,
      ...options,
    });
  }

  /**
   * Read event subscriptions
   */
  list(appID: number, options?: RequestOptions): APIPromise<WebhooksSubscriptionListResponse> {
    return this._client.get(path`/webhooks/v3/${appID}/subscriptions`, options);
  }

  /**
   * Delete event subscription
   */
  delete(subscriptionID: number, params: WebhookDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/webhooks/v3/${appId}/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete webhook settings
   */
  clear(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/v3/${appID}/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update webhook settings
   */
  configure(
    appID: number,
    body: WebhookConfigureParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksSettingsResponse> {
    return this._client.put(path`/webhooks/v3/${appID}/settings`, { body, ...options });
  }

  /**
   * Read an event subscription
   */
  read(
    subscriptionID: number,
    params: WebhookReadParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksSubscriptionResponse> {
    const { appId } = params;
    return this._client.get(path`/webhooks/v3/${appId}/subscriptions/${subscriptionID}`, options);
  }

  /**
   * Batch create event subscriptions
   */
  updateBatch(
    appID: number,
    body: WebhookUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksBatchResponseSubscriptionResponse> {
    return this._client.post(path`/webhooks/v3/${appID}/subscriptions/batch/update`, { body, ...options });
  }
}

export interface WebhooksBatchInputSubscriptionBatchUpdateRequest {
  inputs: Array<WebhooksSubscriptionBatchUpdateRequest>;
}

export interface WebhooksBatchResponseSubscriptionResponse {
  completedAt: string;

  results: Array<WebhooksSubscriptionResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface WebhooksBatchResponseSubscriptionResponseWithErrors {
  completedAt: string;

  results: Array<WebhooksSubscriptionResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface WebhooksSettingsChangeRequest {
  targetUrl: string;

  throttling: WebhooksThrottlingSettings;
}

export interface WebhooksSettingsResponse {
  createdAt: string;

  targetUrl: string;

  throttling: WebhooksThrottlingSettings;

  updatedAt?: string;
}

export interface WebhooksSubscriptionBatchUpdateRequest {
  id: number;

  active: boolean;
}

export interface WebhooksSubscriptionCreateRequest {
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

export interface WebhooksSubscriptionListResponse {
  results: Array<WebhooksSubscriptionResponse>;
}

export interface WebhooksSubscriptionPatchRequest {
  active?: boolean;
}

export interface WebhooksSubscriptionResponse {
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

export interface WebhooksThrottlingSettings {
  maxConcurrentRequests: number;
}

export interface WebhookCreateParams {
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

export interface WebhookUpdateParams {
  /**
   * Path param:
   */
  appId: number;

  /**
   * Body param:
   */
  active?: boolean;
}

export interface WebhookDeleteParams {
  appId: number;
}

export interface WebhookConfigureParams {
  targetUrl: string;

  throttling: WebhooksThrottlingSettings;
}

export interface WebhookReadParams {
  appId: number;
}

export interface WebhookUpdateBatchParams {
  inputs: Array<WebhooksSubscriptionBatchUpdateRequest>;
}

export declare namespace Webhooks {
  export {
    type WebhooksBatchInputSubscriptionBatchUpdateRequest as WebhooksBatchInputSubscriptionBatchUpdateRequest,
    type WebhooksBatchResponseSubscriptionResponse as WebhooksBatchResponseSubscriptionResponse,
    type WebhooksBatchResponseSubscriptionResponseWithErrors as WebhooksBatchResponseSubscriptionResponseWithErrors,
    type WebhooksSettingsChangeRequest as WebhooksSettingsChangeRequest,
    type WebhooksSettingsResponse as WebhooksSettingsResponse,
    type WebhooksSubscriptionBatchUpdateRequest as WebhooksSubscriptionBatchUpdateRequest,
    type WebhooksSubscriptionCreateRequest as WebhooksSubscriptionCreateRequest,
    type WebhooksSubscriptionListResponse as WebhooksSubscriptionListResponse,
    type WebhooksSubscriptionPatchRequest as WebhooksSubscriptionPatchRequest,
    type WebhooksSubscriptionResponse as WebhooksSubscriptionResponse,
    type WebhooksThrottlingSettings as WebhooksThrottlingSettings,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookConfigureParams as WebhookConfigureParams,
    type WebhookReadParams as WebhookReadParams,
    type WebhookUpdateBatchParams as WebhookUpdateBatchParams,
  };
}
