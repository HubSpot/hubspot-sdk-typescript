// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchGetEarliestParams,
  BatchGetLatestParams,
  BatchGetLocalEarliestParams,
  BatchGetLocalLatestParams,
  BatchGetLocalNextParams,
  BatchGetLocalParams,
  BatchGetNextParams,
  BatchGetParams,
  BatchUpdateSubscriptionsParams,
} from './batch';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class WebhookSubscriptions extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  createCrmSnapshot(
    body: WebhookSubscriptionCreateCrmSnapshotParams,
    options?: RequestOptions,
  ): APIPromise<CrmObjectSnapshotBatchResponse> {
    return this._client.post('/webhooks-journal/snapshots/2026-03/crm', { body, ...options });
  }

  createJournalSubscription(
    body: WebhookSubscriptionCreateJournalSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse1> {
    return this._client.post('/webhooks-journal/subscriptions/2026-03', { body, ...options });
  }

  /**
   * Create new event subscription for the specified app.
   */
  createSubscription(
    appID: number,
    body: WebhookSubscriptionCreateSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    return this._client.post(path`/webhooks/2026-03/${appID}/subscriptions`, { body, ...options });
  }

  createSubscriptionFilter(
    body: WebhookSubscriptionCreateSubscriptionFilterParams,
    options?: RequestOptions,
  ): APIPromise<FilterCreateResponse> {
    return this._client.post('/webhooks-journal/subscriptions/2026-03/filters', { body, ...options });
  }

  deleteJournalSubscription(subscriptionID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks-journal/subscriptions/2026-03/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deletePortalSubscriptions(portalID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks-journal/subscriptions/2026-03/portals/${portalID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete the webhook settings for the specified app. Event subscriptions will not
   * be deleted, but will be paused until another webhook is created.
   */
  deleteSettings(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/2026-03/${appID}/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete an existing event subscription by ID.
   */
  deleteSubscription(
    subscriptionID: number,
    params: WebhookSubscriptionDeleteSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/webhooks/2026-03/${appId}/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteSubscriptionFilter(filterID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks-journal/subscriptions/2026-03/filters/${filterID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getJournalEarliest(
    query: WebhookSubscriptionGetJournalEarliestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal/2026-03/earliest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  getJournalLatest(
    query: WebhookSubscriptionGetJournalLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal/2026-03/latest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  getJournalNextByOffset(
    offset: string,
    query: WebhookSubscriptionGetJournalNextByOffsetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/offset/${offset}/next`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  getJournalStatus(statusID: string, options?: RequestOptions): APIPromise<SnapshotStatusResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/status/${statusID}`, options);
  }

  getLocalJournalEarliest(
    query: WebhookSubscriptionGetLocalJournalEarliestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal-local/2026-03/earliest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  getLocalJournalLatest(
    query: WebhookSubscriptionGetLocalJournalLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal-local/2026-03/latest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  getLocalJournalNextByOffset(
    offset: string,
    query: WebhookSubscriptionGetLocalJournalNextByOffsetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/offset/${offset}/next`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  getLocalJournalStatus(statusID: string, options?: RequestOptions): APIPromise<SnapshotStatusResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/status/${statusID}`, options);
  }

  /**
   * Retrieve the webhook settings for the specified app, including the webhook’s
   * target URL, throttle configuration, and create/update date.
   */
  getSettings(appID: number, options?: RequestOptions): APIPromise<SettingsResponse> {
    return this._client.get(path`/webhooks/2026-03/${appID}/settings`, options);
  }

  /**
   * Retrieve a specific event subscription by ID.
   */
  getSubscription(
    subscriptionID: number,
    params: WebhookSubscriptionGetSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    const { appId } = params;
    return this._client.get(path`/webhooks/2026-03/${appId}/subscriptions/${subscriptionID}`, options);
  }

  getSubscriptionFilter(filterID: number, options?: RequestOptions): APIPromise<FilterResponse> {
    return this._client.get(path`/webhooks-journal/subscriptions/2026-03/filters/${filterID}`, options);
  }

  getSubscriptionFilterForSubscription(
    subscriptionID: number,
    options?: RequestOptions,
  ): APIPromise<WebhookSubscriptionGetSubscriptionFilterForSubscriptionResponse> {
    return this._client.get(
      path`/webhooks-journal/subscriptions/2026-03/filters/subscription/${subscriptionID}`,
      options,
    );
  }

  listJournalSubscriptions(
    options?: RequestOptions,
  ): APIPromise<CollectionResponseSubscriptionResponseNoPaging> {
    return this._client.get('/webhooks-journal/subscriptions/2026-03', options);
  }

  /**
   * Retrieve event subscriptions for the specified app.
   */
  listSubscriptions(appID: number, options?: RequestOptions): APIPromise<SubscriptionListResponse> {
    return this._client.get(path`/webhooks/2026-03/${appID}/subscriptions`, options);
  }

  /**
   * Update webhook settings for the specified app.
   */
  updateSettings(
    appID: number,
    body: WebhookSubscriptionUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<SettingsResponse> {
    return this._client.put(path`/webhooks/2026-03/${appID}/settings`, { body, ...options });
  }

  /**
   * Update an existing event subscription by ID.
   */
  updateSubscription(
    subscriptionID: number,
    params: WebhookSubscriptionUpdateSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    const { appId, ...body } = params;
    return this._client.patch(path`/webhooks/2026-03/${appId}/subscriptions/${subscriptionID}`, {
      body,
      ...options,
    });
  }
}

export interface ActionOverrideRequest {
  associatedObjectTypeIds?: Array<string>;

  listIds?: Array<number>;

  objectIds?: Array<number>;

  properties?: Array<string>;
}

export interface AppLifecycleEventSubscriptionUpsertRequest {
  eventTypeId: string;

  properties: Array<string>;

  subscriptionType: 'OBJECT' | 'ASSOCIATION' | 'EVENT' | 'APP_LIFECYCLE_EVENT' | 'LIST_MEMBERSHIP';
}

export interface AssociationSubscriptionUpsertRequest {
  actions: Array<
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'MERGE'
    | 'RESTORE'
    | 'ASSOCIATION_ADDED'
    | 'ASSOCIATION_REMOVED'
    | 'SNAPSHOT'
    | 'APP_INSTALL'
    | 'APP_UNINSTALL'
    | 'ADDED_TO_LIST'
    | 'REMOVED_FROM_LIST'
  >;

  associatedObjectTypeIds: Array<string>;

  objectIds: Array<number>;

  objectTypeId: string;

  portalId: number;

  subscriptionType: 'OBJECT' | 'ASSOCIATION' | 'EVENT' | 'APP_LIFECYCLE_EVENT' | 'LIST_MEMBERSHIP';
}

export interface BatchInputSubscriptionBatchUpdateRequest {
  inputs: Array<SubscriptionBatchUpdateRequest>;
}

export interface BatchResponseJournalFetchResponse {
  completedAt: string;

  results: Array<JournalFetchResponse>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponseJournalFetchResponseWithErrors {
  completedAt: string;

  results: Array<JournalFetchResponse>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
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

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the batch operation.
   */
  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseSubscriptionResponseNoPaging {
  results: Array<SubscriptionResponse1>;
}

export interface Condition {
  filterType: 'CRM_OBJECT_PROPERTY';

  operator:
    | 'CONTAINS'
    | 'ENDS_WITH'
    | 'EQ'
    | 'GT'
    | 'GTE'
    | 'IN'
    | 'IS_EMPTY'
    | 'IS_NOT_EMPTY'
    | 'LT'
    | 'LTE'
    | 'N_EQ'
    | 'NOT_IN'
    | 'STARTS_WITH';

  property: string;

  value?: string;

  values?: Array<string>;
}

export interface CrmObjectSnapshotBatchRequest {
  snapshotRequests: Array<CrmObjectSnapshotRequest>;
}

export interface CrmObjectSnapshotBatchResponse {
  snapshotResponses: Array<CrmObjectSnapshotResponse>;
}

export interface CrmObjectSnapshotRequest {
  objectId: number;

  objectTypeId: string;

  portalId: number;

  properties: Array<string>;
}

export interface CrmObjectSnapshotResponse {
  objectId: number;

  objectTypeId: string;

  portalId: number;

  snapshotStatusId: string;
}

/**
 * Defines a single condition for searching CRM objects, specifying the property to
 * filter on, the operator to use (such as equals, greater than, or contains), and
 * the value(s) to compare against.
 */
export interface Filter {
  conditions: Array<Condition>;
}

export interface FilterCreateRequest {
  /**
   * Defines a single condition for searching CRM objects, specifying the property to
   * filter on, the operator to use (such as equals, greater than, or contains), and
   * the value(s) to compare against.
   */
  filter: Filter;

  subscriptionId: number;
}

export interface FilterCreateResponse {
  filterId: number;
}

export interface FilterResponse {
  id: number;

  createdAt: number;

  /**
   * Defines a single condition for searching CRM objects, specifying the property to
   * filter on, the operator to use (such as equals, greater than, or contains), and
   * the value(s) to compare against.
   */
  filter: Filter;
}

export interface JournalFetchResponse {
  currentOffset: string;

  expiresAt: string;

  url: string;
}

export interface ListMembershipSubscriptionUpsertRequest {
  actions: Array<
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'MERGE'
    | 'RESTORE'
    | 'ASSOCIATION_ADDED'
    | 'ASSOCIATION_REMOVED'
    | 'SNAPSHOT'
    | 'APP_INSTALL'
    | 'APP_UNINSTALL'
    | 'ADDED_TO_LIST'
    | 'REMOVED_FROM_LIST'
  >;

  listIds: Array<number>;

  objectIds: Array<number>;

  portalId: number;

  subscriptionType: 'OBJECT' | 'ASSOCIATION' | 'EVENT' | 'APP_LIFECYCLE_EVENT' | 'LIST_MEMBERSHIP';
}

export interface ObjectSubscriptionUpsertRequest {
  actions: Array<
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'MERGE'
    | 'RESTORE'
    | 'ASSOCIATION_ADDED'
    | 'ASSOCIATION_REMOVED'
    | 'SNAPSHOT'
    | 'APP_INSTALL'
    | 'APP_UNINSTALL'
    | 'ADDED_TO_LIST'
    | 'REMOVED_FROM_LIST'
  >;

  objectIds: Array<number>;

  objectTypeId: string;

  portalId: number;

  properties: Array<string>;

  subscriptionType: 'OBJECT' | 'ASSOCIATION' | 'EVENT' | 'APP_LIFECYCLE_EVENT' | 'LIST_MEMBERSHIP';
}

export interface SettingsChangeRequest {
  /**
   * A publicly available URL for Hubspot to call where event payloads will be
   * delivered. See [link-so-some-doc](#) for details about the format of these event
   * payloads.
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
   * A publicly available URL for Hubspot to call where event payloads will be
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

export interface SnapshotStatusResponse {
  id: string;

  initiatedAt: number;

  status: 'COMPLETED' | 'EXPIRED' | 'FAILED' | 'IN_PROGRESS' | 'PENDING';

  completedAt?: number;

  errorCode?: 'INTERNAL_ERROR' | 'PERMISSION_DENIED' | 'TIMEOUT' | 'VALIDATION_ERROR';

  message?: string;
}

export interface SubscriptionBatchUpdateRequest {
  /**
   * The ID of the webhook subscription to update.
   */
  id: number;

  /**
   * Whether to activate or pause the webhook subscription. If true, the subscription
   * will send webhook notifications. If false, the subscription is paused and will
   * not send notifications.
   */
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

  /**
   * The name of the event to listen for. This is used with custom objects to specify
   * custom event types beyond the standard eventType enum values.
   */
  eventTypeName?: string;

  /**
   * The ID of the object type for the subscription. This can be a standard CRM
   * object (e.g., 'contact', 'company', 'deal') or a custom object ID for custom
   * object subscriptions.
   */
  objectTypeId?: string;

  /**
   * The internal name of the property to monitor for changes. Only applies when
   * `eventType` is `propertyChange`.
   */
  propertyName?: string;
}

export interface SubscriptionListResponse {
  /**
   * An array containing all active and paused event subscriptions configured for the
   * app.
   */
  results: Array<SubscriptionResponse>;
}

export interface SubscriptionPatchRequest {
  /**
   * Whether to activate or pause the webhook subscription. If true, the subscription
   * will send webhook notifications. If false, the subscription is paused and will
   * not send notifications.
   */
  active?: boolean;
}

export interface SubscriptionResponse {
  /**
   * The unique ID of the webhook subscription.
   */
  id: string;

  /**
   * Whether the subscription is active or paused. If true, the subscription will
   * send webhook notifications. If false, the subscription is paused and will not
   * send notifications.
   */
  active: boolean;

  /**
   * The timestamp when the webhook subscription was created, in ISO 8601 format
   * (e.g., 2020-02-29T12:30:00Z).
   */
  createdAt: string;

  /**
   * The type of event to listen for. Accepted values include contact.creation,
   * contact.deletion, contact.propertyChange, and similar event types for other CRM
   * objects and custom objects.
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

  /**
   * The name of the event to listen for. This is used with custom objects to specify
   * custom event types beyond the standard eventType enum values.
   */
  eventTypeName?: string;

  /**
   * The ID of the object type for the subscription. This can be a standard CRM
   * object (e.g., 'contact', 'company', 'deal') or a custom object ID for custom
   * object subscriptions.
   */
  objectTypeId?: string;

  /**
   * The internal name of the property to monitor for changes. Only applies when
   * eventType is propertyChange.
   */
  propertyName?: string;

  /**
   * The timestamp when the webhook subscription was last updated, in ISO 8601 format
   * (e.g., 2020-02-29T12:30:00Z).
   */
  updatedAt?: string;
}

export interface SubscriptionResponse1 {
  /**
   * The unique ID of the webhook subscription.
   */
  id: number;

  actions: Array<
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'MERGE'
    | 'RESTORE'
    | 'ASSOCIATION_ADDED'
    | 'ASSOCIATION_REMOVED'
    | 'SNAPSHOT'
    | 'APP_INSTALL'
    | 'APP_UNINSTALL'
    | 'ADDED_TO_LIST'
    | 'REMOVED_FROM_LIST'
  >;

  appId: number;

  /**
   * The timestamp when the webhook subscription was created, in ISO 8601 format
   * (e.g., 2020-02-29T12:30:00Z).
   */
  createdAt: string;

  /**
   * The ID of the object type for the subscription. This can be a standard CRM
   * object (e.g., 'contact', 'company', 'deal') or a custom object ID for custom
   * object subscriptions.
   */
  objectTypeId: string;

  subscriptionType: 'APP_LIFECYCLE_EVENT' | 'ASSOCIATION' | 'EVENT' | 'LIST_MEMBERSHIP' | 'OBJECT';

  /**
   * The timestamp when the webhook subscription was last updated, in ISO 8601 format
   * (e.g., 2020-02-29T12:30:00Z).
   */
  updatedAt: string;

  actionOverrides?: { [key: string]: ActionOverrideRequest };

  associatedObjectTypeIds?: Array<string>;

  createdBy?: number;

  deletedAt?: string;

  listIds?: Array<number>;

  objectIds?: Array<number>;

  portalId?: number;

  properties?: Array<string>;
}

export type SubscriptionUpsertRequest =
  | ObjectSubscriptionUpsertRequest
  | AssociationSubscriptionUpsertRequest
  | AppLifecycleEventSubscriptionUpsertRequest
  | ListMembershipSubscriptionUpsertRequest;

export interface ThrottlingSettings {
  /**
   * The maximum number of HTTP requests HubSpot will attempt to make to your app in
   * a given time frame determined by `period`.
   */
  maxConcurrentRequests: number;
}

export type WebhookSubscriptionGetSubscriptionFilterForSubscriptionResponse = Array<FilterResponse>;

export interface WebhookSubscriptionCreateCrmSnapshotParams {
  snapshotRequests: Array<CrmObjectSnapshotRequest>;
}

export type WebhookSubscriptionCreateJournalSubscriptionParams =
  | WebhookSubscriptionCreateJournalSubscriptionParams.ObjectSubscriptionUpsertRequest
  | WebhookSubscriptionCreateJournalSubscriptionParams.AssociationSubscriptionUpsertRequest
  | WebhookSubscriptionCreateJournalSubscriptionParams.AppLifecycleEventSubscriptionUpsertRequest
  | WebhookSubscriptionCreateJournalSubscriptionParams.ListMembershipSubscriptionUpsertRequest;

export declare namespace WebhookSubscriptionCreateJournalSubscriptionParams {
  export interface ObjectSubscriptionUpsertRequest {}

  export interface AssociationSubscriptionUpsertRequest {}

  export interface AppLifecycleEventSubscriptionUpsertRequest {}

  export interface ListMembershipSubscriptionUpsertRequest {}
}

export interface WebhookSubscriptionCreateSubscriptionParams {
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

  /**
   * The name of the event to listen for. This is used with custom objects to specify
   * custom event types beyond the standard eventType enum values.
   */
  eventTypeName?: string;

  /**
   * The ID of the object type for the subscription. This can be a standard CRM
   * object (e.g., 'contact', 'company', 'deal') or a custom object ID for custom
   * object subscriptions.
   */
  objectTypeId?: string;

  /**
   * The internal name of the property to monitor for changes. Only applies when
   * `eventType` is `propertyChange`.
   */
  propertyName?: string;
}

export interface WebhookSubscriptionCreateSubscriptionFilterParams {
  /**
   * Defines a single condition for searching CRM objects, specifying the property to
   * filter on, the operator to use (such as equals, greater than, or contains), and
   * the value(s) to compare against.
   */
  filter: Filter;

  subscriptionId: number;
}

export interface WebhookSubscriptionDeleteSubscriptionParams {
  appId: number;
}

export interface WebhookSubscriptionGetJournalEarliestParams {
  installPortalId?: number;
}

export interface WebhookSubscriptionGetJournalLatestParams {
  installPortalId?: number;
}

export interface WebhookSubscriptionGetJournalNextByOffsetParams {
  installPortalId?: number;
}

export interface WebhookSubscriptionGetLocalJournalEarliestParams {
  installPortalId?: number;
}

export interface WebhookSubscriptionGetLocalJournalLatestParams {
  installPortalId?: number;
}

export interface WebhookSubscriptionGetLocalJournalNextByOffsetParams {
  installPortalId?: number;
}

export interface WebhookSubscriptionGetSubscriptionParams {
  appId: number;
}

export interface WebhookSubscriptionUpdateSettingsParams {
  /**
   * A publicly available URL for Hubspot to call where event payloads will be
   * delivered. See [link-so-some-doc](#) for details about the format of these event
   * payloads.
   */
  targetUrl: string;

  throttling: ThrottlingSettings;
}

export interface WebhookSubscriptionUpdateSubscriptionParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param: Whether to activate or pause the webhook subscription. If true, the
   * subscription will send webhook notifications. If false, the subscription is
   * paused and will not send notifications.
   */
  active?: boolean;
}

WebhookSubscriptions.Batch = Batch;

export declare namespace WebhookSubscriptions {
  export {
    type ActionOverrideRequest as ActionOverrideRequest,
    type AppLifecycleEventSubscriptionUpsertRequest as AppLifecycleEventSubscriptionUpsertRequest,
    type AssociationSubscriptionUpsertRequest as AssociationSubscriptionUpsertRequest,
    type BatchInputSubscriptionBatchUpdateRequest as BatchInputSubscriptionBatchUpdateRequest,
    type BatchResponseJournalFetchResponse as BatchResponseJournalFetchResponse,
    type BatchResponseJournalFetchResponseWithErrors as BatchResponseJournalFetchResponseWithErrors,
    type BatchResponseSubscriptionResponse as BatchResponseSubscriptionResponse,
    type BatchResponseSubscriptionResponseWithErrors as BatchResponseSubscriptionResponseWithErrors,
    type CollectionResponseSubscriptionResponseNoPaging as CollectionResponseSubscriptionResponseNoPaging,
    type Condition as Condition,
    type CrmObjectSnapshotBatchRequest as CrmObjectSnapshotBatchRequest,
    type CrmObjectSnapshotBatchResponse as CrmObjectSnapshotBatchResponse,
    type CrmObjectSnapshotRequest as CrmObjectSnapshotRequest,
    type CrmObjectSnapshotResponse as CrmObjectSnapshotResponse,
    type Filter as Filter,
    type FilterCreateRequest as FilterCreateRequest,
    type FilterCreateResponse as FilterCreateResponse,
    type FilterResponse as FilterResponse,
    type JournalFetchResponse as JournalFetchResponse,
    type ListMembershipSubscriptionUpsertRequest as ListMembershipSubscriptionUpsertRequest,
    type ObjectSubscriptionUpsertRequest as ObjectSubscriptionUpsertRequest,
    type SettingsChangeRequest as SettingsChangeRequest,
    type SettingsResponse as SettingsResponse,
    type SnapshotStatusResponse as SnapshotStatusResponse,
    type SubscriptionBatchUpdateRequest as SubscriptionBatchUpdateRequest,
    type SubscriptionCreateRequest as SubscriptionCreateRequest,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionPatchRequest as SubscriptionPatchRequest,
    type SubscriptionResponse as SubscriptionResponse,
    type SubscriptionResponse1 as SubscriptionResponse1,
    type SubscriptionUpsertRequest as SubscriptionUpsertRequest,
    type ThrottlingSettings as ThrottlingSettings,
    type WebhookSubscriptionGetSubscriptionFilterForSubscriptionResponse as WebhookSubscriptionGetSubscriptionFilterForSubscriptionResponse,
    type WebhookSubscriptionCreateCrmSnapshotParams as WebhookSubscriptionCreateCrmSnapshotParams,
    type WebhookSubscriptionCreateJournalSubscriptionParams as WebhookSubscriptionCreateJournalSubscriptionParams,
    type WebhookSubscriptionCreateSubscriptionParams as WebhookSubscriptionCreateSubscriptionParams,
    type WebhookSubscriptionCreateSubscriptionFilterParams as WebhookSubscriptionCreateSubscriptionFilterParams,
    type WebhookSubscriptionDeleteSubscriptionParams as WebhookSubscriptionDeleteSubscriptionParams,
    type WebhookSubscriptionGetJournalEarliestParams as WebhookSubscriptionGetJournalEarliestParams,
    type WebhookSubscriptionGetJournalLatestParams as WebhookSubscriptionGetJournalLatestParams,
    type WebhookSubscriptionGetJournalNextByOffsetParams as WebhookSubscriptionGetJournalNextByOffsetParams,
    type WebhookSubscriptionGetLocalJournalEarliestParams as WebhookSubscriptionGetLocalJournalEarliestParams,
    type WebhookSubscriptionGetLocalJournalLatestParams as WebhookSubscriptionGetLocalJournalLatestParams,
    type WebhookSubscriptionGetLocalJournalNextByOffsetParams as WebhookSubscriptionGetLocalJournalNextByOffsetParams,
    type WebhookSubscriptionGetSubscriptionParams as WebhookSubscriptionGetSubscriptionParams,
    type WebhookSubscriptionUpdateSettingsParams as WebhookSubscriptionUpdateSettingsParams,
    type WebhookSubscriptionUpdateSubscriptionParams as WebhookSubscriptionUpdateSubscriptionParams,
  };

  export {
    Batch as Batch,
    type BatchGetParams as BatchGetParams,
    type BatchGetEarliestParams as BatchGetEarliestParams,
    type BatchGetLatestParams as BatchGetLatestParams,
    type BatchGetLocalParams as BatchGetLocalParams,
    type BatchGetLocalEarliestParams as BatchGetLocalEarliestParams,
    type BatchGetLocalLatestParams as BatchGetLocalLatestParams,
    type BatchGetLocalNextParams as BatchGetLocalNextParams,
    type BatchGetNextParams as BatchGetNextParams,
    type BatchUpdateSubscriptionsParams as BatchUpdateSubscriptionsParams,
  };
}
