// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CallingAPI from '../crm/extensions/calling/calling';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppWebhooks extends APIResource {
  batchUpdateSubscriptions(
    appID: number,
    body: AppWebhookBatchUpdateSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseSubscriptionResponse> {
    return this._client.post(path`/app-webhooks/2026-03/${appID}/subscriptions/batch/update`, {
      body,
      ...options,
    });
  }

  createSubscription(
    appID: number,
    body: AppWebhookCreateSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    return this._client.post(path`/app-webhooks/2026-03/${appID}/subscriptions`, { body, ...options });
  }

  deleteSettings(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/app-webhooks/2026-03/${appID}/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteSubscription(
    subscriptionID: number,
    params: AppWebhookDeleteSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/app-webhooks/2026-03/${appId}/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getSettings(appID: number, options?: RequestOptions): APIPromise<CallingAPI.SettingsResponse> {
    return this._client.get(path`/app-webhooks/2026-03/${appID}/settings`, options);
  }

  getSubscription(
    subscriptionID: number,
    params: AppWebhookGetSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    const { appId } = params;
    return this._client.get(path`/app-webhooks/2026-03/${appId}/subscriptions/${subscriptionID}`, options);
  }

  listSubscriptions(appID: number, options?: RequestOptions): APIPromise<SubscriptionListResponse> {
    return this._client.get(path`/app-webhooks/2026-03/${appID}/subscriptions`, options);
  }

  updateSettings(
    appID: number,
    body: AppWebhookUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.SettingsResponse> {
    return this._client.put(path`/app-webhooks/2026-03/${appID}/settings`, { body, ...options });
  }

  updateSubscription(
    subscriptionID: number,
    params: AppWebhookUpdateSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    const { appId, ...body } = params;
    return this._client.patch(path`/app-webhooks/2026-03/${appId}/subscriptions/${subscriptionID}`, {
      body,
      ...options,
    });
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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * A collection of related links associated with the batch operation.
   */
  links?: { [key: string]: string };

  numErrors?: number;

  /**
   * The date and time when the batch operation was requested.
   */
  requestedAt?: string;
}

export interface SettingsChangeRequest {
  /**
   * A publicly available URL for HubSpot to call where event payloads will be
   * delivered.
   */
  targetUrl: string;

  throttling: ThrottlingSettings;
}

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

export interface SubscriptionCreateRequest {
  /**
   * Determines if the subscription is active or paused. Defaults to false.
   */
  active: boolean;

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
    | 'event.completed'
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

  eventTypeName?: string;

  objectTypeId?: string;

  /**
   * The internal name of the property to monitor for changes. Only applies when
   * `eventType` is `propertyChange`.
   */
  propertyName?: string;
}

export interface SubscriptionListResponse {
  /**
   * List of event subscriptions for your app
   */
  results: Array<SubscriptionResponse>;
}

export interface SubscriptionPatchRequest {
  /**
   * Determines if the subscription is active or paused.
   */
  active?: boolean;
}

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
    | 'event.completed'
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

  eventTypeName?: string;

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

export interface ThrottlingSettings {
  /**
   * The maximum number of concurrent HTTP requests HubSpot will attempt to make to
   * your app.
   */
  maxConcurrentRequests: number;
}

export interface AppWebhookBatchUpdateSubscriptionsParams {
  inputs: Array<SubscriptionBatchUpdateRequest>;
}

export interface AppWebhookCreateSubscriptionParams {
  /**
   * Determines if the subscription is active or paused. Defaults to false.
   */
  active: boolean;

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
    | 'event.completed'
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

  eventTypeName?: string;

  objectTypeId?: string;

  /**
   * The internal name of the property to monitor for changes. Only applies when
   * `eventType` is `propertyChange`.
   */
  propertyName?: string;
}

export interface AppWebhookDeleteSubscriptionParams {
  appId: number;
}

export interface AppWebhookGetSubscriptionParams {
  appId: number;
}

export interface AppWebhookUpdateSettingsParams {
  /**
   * A publicly available URL for HubSpot to call where event payloads will be
   * delivered.
   */
  targetUrl: string;

  throttling: ThrottlingSettings;
}

export interface AppWebhookUpdateSubscriptionParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param: Determines if the subscription is active or paused.
   */
  active?: boolean;
}

export declare namespace AppWebhooks {
  export {
    type BatchInputSubscriptionBatchUpdateRequest as BatchInputSubscriptionBatchUpdateRequest,
    type BatchResponseSubscriptionResponse as BatchResponseSubscriptionResponse,
    type SettingsChangeRequest as SettingsChangeRequest,
    type SettingsResponse as SettingsResponse,
    type SubscriptionBatchUpdateRequest as SubscriptionBatchUpdateRequest,
    type SubscriptionCreateRequest as SubscriptionCreateRequest,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionPatchRequest as SubscriptionPatchRequest,
    type SubscriptionResponse as SubscriptionResponse,
    type ThrottlingSettings as ThrottlingSettings,
    type AppWebhookBatchUpdateSubscriptionsParams as AppWebhookBatchUpdateSubscriptionsParams,
    type AppWebhookCreateSubscriptionParams as AppWebhookCreateSubscriptionParams,
    type AppWebhookDeleteSubscriptionParams as AppWebhookDeleteSubscriptionParams,
    type AppWebhookGetSubscriptionParams as AppWebhookGetSubscriptionParams,
    type AppWebhookUpdateSettingsParams as AppWebhookUpdateSettingsParams,
    type AppWebhookUpdateSubscriptionParams as AppWebhookUpdateSubscriptionParams,
  };
}
