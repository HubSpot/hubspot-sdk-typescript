// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Create new event subscription for the specified app.
   *
   * @example
   * ```ts
   * const subscriptionResponse = await client.webhooks.create(
   *   0,
   *   { eventType: 'contact.propertyChange' },
   * );
   * ```
   */
  create(
    appID: number,
    body: WebhookCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    return this._client.post(path`/webhooks/v3/${appID}/subscriptions`, { body, ...options });
  }

  /**
   * Update an existing event subscription by ID.
   *
   * @example
   * ```ts
   * const subscriptionResponse = await client.webhooks.update(
   *   0,
   *   { appId: 0 },
   * );
   * ```
   */
  update(
    subscriptionID: number,
    params: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
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
   * const subscriptionListResponse = await client.webhooks.list(
   *   0,
   * );
   * ```
   */
  list(appID: number, options?: RequestOptions): APIPromise<SubscriptionListResponse> {
    return this._client.get(path`/webhooks/v3/${appID}/subscriptions`, options);
  }

  /**
   * Delete an existing event subscription by ID.
   *
   * @example
   * ```ts
   * await client.webhooks.delete(0, { appId: 0 });
   * ```
   */
  delete(subscriptionID: number, params: WebhookDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/webhooks/v3/${appId}/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete the webhook settings for the specified app. Event subscriptions will not
   * be deleted, but will be paused until another webhook is created.
   *
   * @example
   * ```ts
   * await client.webhooks.clear(0);
   * ```
   */
  clear(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/v3/${appID}/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update webhook settings for the specified app.
   *
   * @example
   * ```ts
   * const settingsResponse = await client.webhooks.configure(
   *   0,
   *   {
   *     targetUrl: 'https://www.example.com/hubspot/target',
   *     throttling: { maxConcurrentRequests: 10 },
   *   },
   * );
   * ```
   */
  configure(
    appID: number,
    body: WebhookConfigureParams,
    options?: RequestOptions,
  ): APIPromise<SettingsResponse> {
    return this._client.put(path`/webhooks/v3/${appID}/settings`, { body, ...options });
  }

  /**
   * Retrieve a specific event subscription by ID.
   *
   * @example
   * ```ts
   * const subscriptionResponse = await client.webhooks.read(0, {
   *   appId: 0,
   * });
   * ```
   */
  read(
    subscriptionID: number,
    params: WebhookReadParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    const { appId } = params;
    return this._client.get(path`/webhooks/v3/${appId}/subscriptions/${subscriptionID}`, options);
  }

  /**
   * Batch create event subscriptions for the specified app.
   *
   * @example
   * ```ts
   * const batchResponseSubscriptionResponse =
   *   await client.webhooks.updateBatch(0, {
   *     inputs: [{ id: 0, active: true }],
   *   });
   * ```
   */
  updateBatch(
    appID: number,
    body: WebhookUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseSubscriptionResponse> {
    return this._client.post(path`/webhooks/v3/${appID}/subscriptions/batch/update`, { body, ...options });
  }
}

export interface BatchInputSubscriptionBatchUpdateRequest {
  inputs: Array<SubscriptionBatchUpdateRequest>;
}

export interface BatchResponseSubscriptionResponse {
  /**
   * The date and time when the batch operation was completed.
   */
  completedAt: string;

  /**
   * The list of results from the batch operation.
   */
  results: Array<SubscriptionResponse>;

  /**
   * The date and time when the batch operation started.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, which can be PENDING, PROCESSING,
   * CANCELED, or COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * A collection of related links associated with the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch operation was requested.
   */
  requestedAt?: string;
}

export interface BatchResponseSubscriptionResponseWithErrors {
  completedAt: string;

  results: Array<SubscriptionResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

/**
 * New or updated webhook settings for an app.
 */
export interface SettingsChangeRequest {
  /**
   * A publicly available URL for HubSpot to call where event payloads will be
   * delivered.
   */
  targetUrl: string;

  /**
   * Configuration details for webhook throttling.
   */
  throttling: ThrottlingSettings;
}

/**
 * Webhook settings for an app.
 */
export interface SettingsResponse {
  /**
   * When this subscription was created. Formatted as milliseconds from the
   * [Unix epoch](#).
   */
  createdAt: string;

  /**
   * A publicly available URL for HubSpot to call where event payloads will be
   * delivered. See [link-so-some-doc](#) for details about the format of these event
   * payloads.
   */
  targetUrl: string;

  /**
   * Configuration details for webhook throttling.
   */
  throttling: ThrottlingSettings;

  /**
   * When this subscription was last updated. Formatted as milliseconds from the
   * [Unix epoch](#).
   */
  updatedAt?: string;
}

export interface SubscriptionBatchUpdateRequest {
  id: number;

  active: boolean;
}

/**
 * New webhook settings for an app.
 */
export interface SubscriptionCreateRequest {
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

/**
 * List of event subscriptions for your app
 */
export interface SubscriptionListResponse {
  /**
   * List of event subscriptions for your app
   */
  results: Array<SubscriptionResponse>;
}

/**
 * Updated details for the subscription.
 */
export interface SubscriptionPatchRequest {
  /**
   * Determines if the subscription is active or paused.
   */
  active?: boolean;
}

/**
 * Complete details for an event subscription.
 */
export interface SubscriptionResponse {
  /**
   * The unique ID of the subscription.
   */
  id: string;

  /**
   * Determines if the subscription is active or paused.
   */
  active: boolean;

  /**
   * When this subscription was created. Formatted as milliseconds from the
   * [Unix epoch](#).
   */
  createdAt: string;

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
   * The identifier of the object type associated with the subscription.
   */
  objectTypeId?: string;

  /**
   * The internal name of the property being monitored for changes. Only applies when
   * `eventType` is `propertyChange`.
   */
  propertyName?: string;

  /**
   * When this subscription was last updated. Formatted as milliseconds from the
   * [Unix epoch](#).
   */
  updatedAt?: string;
}

/**
 * Configuration details for webhook throttling.
 */
export interface ThrottlingSettings {
  /**
   * The maximum number of concurrent HTTP requests HubSpot will attempt to make to
   * your app.
   */
  maxConcurrentRequests: number;
}

export interface WebhookCreateParams {
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

export interface WebhookUpdateParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Body param: Determines if the subscription is active or paused.
   */
  active?: boolean;
}

export interface WebhookDeleteParams {
  /**
   * The ID of the app.
   */
  appId: number;
}

export interface WebhookConfigureParams {
  /**
   * A publicly available URL for HubSpot to call where event payloads will be
   * delivered.
   */
  targetUrl: string;

  /**
   * Configuration details for webhook throttling.
   */
  throttling: ThrottlingSettings;
}

export interface WebhookReadParams {
  /**
   * The ID of the app.
   */
  appId: number;
}

export interface WebhookUpdateBatchParams {
  inputs: Array<SubscriptionBatchUpdateRequest>;
}

export declare namespace Webhooks {
  export {
    type BatchInputSubscriptionBatchUpdateRequest as BatchInputSubscriptionBatchUpdateRequest,
    type BatchResponseSubscriptionResponse as BatchResponseSubscriptionResponse,
    type BatchResponseSubscriptionResponseWithErrors as BatchResponseSubscriptionResponseWithErrors,
    type SettingsChangeRequest as SettingsChangeRequest,
    type SettingsResponse as SettingsResponse,
    type SubscriptionBatchUpdateRequest as SubscriptionBatchUpdateRequest,
    type SubscriptionCreateRequest as SubscriptionCreateRequest,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionPatchRequest as SubscriptionPatchRequest,
    type SubscriptionResponse as SubscriptionResponse,
    type ThrottlingSettings as ThrottlingSettings,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookConfigureParams as WebhookConfigureParams,
    type WebhookReadParams as WebhookReadParams,
    type WebhookUpdateBatchParams as WebhookUpdateBatchParams,
  };
}
