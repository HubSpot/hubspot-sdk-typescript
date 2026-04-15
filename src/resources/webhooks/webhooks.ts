// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseWebhooks extends APIResource {
  static override readonly _key: readonly ['webhooks'] = Object.freeze(['webhooks'] as const);

  /**
   * Batch create event subscriptions for the specified app.
   */
  createBatchEventSubscriptions(
    appID: number,
    body: WebhookCreateBatchEventSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseSubscriptionResponse> {
    return this._client.post(path`/webhooks/2026-03/${appID}/subscriptions/batch/update`, {
      body,
      ...options,
    });
  }

  /**
   * Create a batch of CRM object snapshots for a specified portal. This endpoint
   * allows you to capture the current state of CRM objects by submitting a batch
   * request with the necessary object details. It is useful for tracking changes or
   * maintaining historical records of CRM data.
   */
  createCrmSnapshots(
    body: WebhookCreateCrmSnapshotsParams,
    options?: RequestOptions,
  ): APIPromise<CrmObjectSnapshotBatchResponse> {
    return this._client.post('/webhooks-journal/snapshots/2026-03/crm', { body, ...options });
  }

  /**
   * Create new event subscription for the specified app.
   */
  createEventSubscription(
    appID: number,
    body: WebhookCreateEventSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    return this._client.post(path`/webhooks/2026-03/${appID}/subscriptions`, { body, ...options });
  }

  /**
   * Create a new subscription in the webhooks journal for the specified version.
   * This endpoint allows you to define the subscription details, including actions
   * and object types, to manage webhook events effectively. It requires a valid
   * request body with the subscription details.
   */
  createJournalSubscription(
    body: WebhookCreateJournalSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse1> {
    return this._client.post('/webhooks-journal/subscriptions/2026-03', { body, ...options });
  }

  /**
   * Create a new filter for a webhook subscription in the HubSpot account. This
   * endpoint allows you to define conditions that determine when a webhook event
   * should be triggered for a specific subscription. The request body must include
   * the subscription ID and the filter details.
   */
  createSubscriptionFilter(
    body: WebhookCreateSubscriptionFilterParams,
    options?: RequestOptions,
  ): APIPromise<FilterCreateResponse> {
    return this._client.post('/webhooks-journal/subscriptions/2026-03/filters', { body, ...options });
  }

  /**
   * Delete an existing event subscription by ID.
   */
  deleteEventSubscription(
    subscriptionID: number,
    params: WebhookDeleteEventSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/webhooks/2026-03/${appId}/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a specific webhook journal subscription using its unique identifier. This
   * operation is useful for managing and cleaning up subscriptions that are no
   * longer needed.
   */
  deleteJournalSubscription(subscriptionID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks-journal/subscriptions/2026-03/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a webhook journal subscription for a specific portal. This operation
   * removes the subscription associated with the given portalId, effectively
   * stopping any webhook events from being sent to the portal.
   */
  deleteJournalSubscriptionForPortal(portalID: number, options?: RequestOptions): APIPromise<void> {
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
   * Remove a specific filter from your webhook journal subscriptions. This operation
   * is useful when you need to clean up or modify the filters applied to your
   * webhook subscriptions. The filter identified by the filterId will be permanently
   * deleted.
   */
  deleteSubscriptionFilter(filterID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks-journal/subscriptions/2026-03/filters/${filterID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the earliest batch of webhook journal entries up to the specified
   * count. This endpoint is useful for fetching historical webhook data in batches,
   * allowing you to process or analyze them as needed.
   */
  getEarliestJournalBatch(
    count: number,
    query: WebhookGetEarliestJournalBatchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/earliest/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the earliest entry from the webhooks journal for the specified portal.
   * This endpoint is useful for accessing the initial entries in the journal, which
   * can be helpful for debugging or auditing purposes.
   */
  getEarliestJournalEntry(
    query: WebhookGetEarliestJournalEntryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal/2026-03/earliest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the earliest batch of webhook journal entries up to a specified count.
   * This endpoint is useful for accessing the oldest records available in the
   * webhook journal, allowing you to process or analyze historical webhook data.
   */
  getEarliestLocalJournalBatch(
    count: number,
    query: WebhookGetEarliestLocalJournalBatchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/earliest/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the earliest entry from the webhooks journal for the specified portal.
   * This endpoint is useful for accessing the oldest available data in the journal,
   * which can be used for historical analysis or troubleshooting.
   */
  getEarliestLocalJournalEntry(
    query: WebhookGetEarliestLocalJournalEntryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal-local/2026-03/earliest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve a specific event subscription by ID.
   */
  getEventSubscription(
    subscriptionID: number,
    params: WebhookGetEventSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    const { appId } = params;
    return this._client.get(path`/webhooks/2026-03/${appId}/subscriptions/${subscriptionID}`, options);
  }

  /**
   * Read a batch of webhook journal entries for the specified portal. This endpoint
   * allows you to retrieve detailed information about webhook events processed by
   * your HubSpot account. It is useful for auditing and tracking webhook activity.
   */
  getJournalBatchByRequest(
    params: WebhookGetJournalBatchByRequestParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseJournalFetchResponse> {
    const { installPortalId, ...body } = params;
    return this._client.post('/webhooks-journal/journal/2026-03/batch/read', {
      query: { installPortalId },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a batch of webhook journal entries starting from a specified offset.
   * This endpoint allows you to specify the number of entries to retrieve, helping
   * you manage and paginate through large sets of webhook data efficiently.
   */
  getJournalBatchFromOffset(
    count: number,
    params: WebhookGetJournalBatchFromOffsetParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseJournalFetchResponse> {
    const { offset, ...query } = params;
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/${offset}/next/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the status of a specific webhook journal entry using its unique status
   * ID. This endpoint is useful for monitoring the progress or outcome of a webhook
   * operation, providing insights into whether it is pending, in progress,
   * completed, failed, or expired.
   */
  getJournalStatus(statusID: string, options?: RequestOptions): APIPromise<SnapshotStatusResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/status/${statusID}`, options);
  }

  /**
   * Retrieve details of a specific webhook journal subscription using its unique
   * identifier. This endpoint is useful for obtaining information about a particular
   * subscription, such as its actions, object types, and associated properties.
   */
  getJournalSubscription(
    subscriptionID: number,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse1> {
    return this._client.get(path`/webhooks-journal/subscriptions/2026-03/${subscriptionID}`, options);
  }

  /**
   * Retrieve the latest batch of webhook journal entries up to a specified count.
   * This endpoint is useful for fetching the most recent webhook events processed by
   * your HubSpot account. The response includes details about each event, and you
   * can specify the number of entries to retrieve.
   */
  getLatestJournalBatch(
    count: number,
    query: WebhookGetLatestJournalBatchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/latest/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the latest entry from the webhooks journal for the specified portal.
   * This endpoint is useful for accessing the most recent webhook data available in
   * the journal.
   */
  getLatestJournalEntry(
    query: WebhookGetLatestJournalEntryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal/2026-03/latest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the latest batch of webhook journal entries up to a specified count.
   * This endpoint is useful for fetching the most recent webhook events processed by
   * the system. It requires authentication and supports various security schemes.
   */
  getLatestLocalJournalBatch(
    count: number,
    query: WebhookGetLatestLocalJournalBatchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/latest/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the latest entries from the webhooks journal. This endpoint is useful
   * for accessing the most recent webhook data for analysis or troubleshooting. It
   * supports filtering by the installPortalId to narrow down results to a specific
   * portal.
   */
  getLatestLocalJournalEntry(
    query: WebhookGetLatestLocalJournalEntryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal-local/2026-03/latest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Perform a batch read operation on the webhooks journal. This endpoint allows you
   * to retrieve a batch of journal entries by providing the necessary input data. It
   * is useful for processing large volumes of webhook data efficiently.
   */
  getLocalJournalBatchByRequest(
    params: WebhookGetLocalJournalBatchByRequestParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseJournalFetchResponse> {
    const { installPortalId, ...body } = params;
    return this._client.post('/webhooks-journal/journal-local/2026-03/batch/read', {
      query: { installPortalId },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a batch of webhook journal entries starting from a specified offset.
   * This endpoint is useful for fetching sequential batches of data, allowing you to
   * paginate through large sets of webhook journal entries efficiently.
   */
  getLocalJournalBatchFromOffset(
    count: number,
    params: WebhookGetLocalJournalBatchFromOffsetParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseJournalFetchResponse> {
    const { offset, ...query } = params;
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/${offset}/next/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the status of a specific webhook journal entry using its unique status
   * ID. This endpoint is useful for checking the progress or result of a webhook
   * operation, such as whether it is pending, in progress, completed, failed, or
   * expired.
   */
  getLocalJournalStatus(statusID: string, options?: RequestOptions): APIPromise<SnapshotStatusResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/status/${statusID}`, options);
  }

  /**
   * Retrieve the next set of webhook journal entries starting from a specified
   * offset. This endpoint is useful for paginating through webhook journal entries
   * in a HubSpot account. It allows you to continue fetching entries from where the
   * last request left off, using the offset parameter.
   */
  getNextJournalEntries(
    offset: string,
    query: WebhookGetNextJournalEntriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/offset/${offset}/next`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the next set of journal entries starting from a specified offset. This
   * endpoint is useful for paginating through webhook journal entries in a
   * sequential manner. It requires specifying the offset from which the next entries
   * should be fetched.
   */
  getNextLocalJournalEntries(
    offset: string,
    query: WebhookGetNextLocalJournalEntriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/offset/${offset}/next`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the webhook settings for the specified app, including the webhook’s
   * target URL, throttle configuration, and create/update date.
   */
  getSettings(appID: number, options?: RequestOptions): APIPromise<SettingsResponse> {
    return this._client.get(path`/webhooks/2026-03/${appID}/settings`, options);
  }

  /**
   * Retrieve a specific filter associated with a webhook journal subscription. This
   * endpoint allows you to access detailed information about the filter identified
   * by the filterId path parameter. It is useful for managing and reviewing filter
   * configurations within your webhook subscriptions.
   */
  getSubscriptionFilter(filterID: number, options?: RequestOptions): APIPromise<FilterResponse> {
    return this._client.get(path`/webhooks-journal/subscriptions/2026-03/filters/${filterID}`, options);
  }

  /**
   * Retrieve event subscriptions for the specified app.
   */
  listEventSubscriptions(appID: number, options?: RequestOptions): APIPromise<SubscriptionListResponse> {
    return this._client.get(path`/webhooks/2026-03/${appID}/subscriptions`, options);
  }

  /**
   * Retrieve a list of webhook journal subscriptions for the specified version. This
   * endpoint allows you to view all active subscriptions without pagination. It is
   * useful for managing and auditing webhook subscriptions in your HubSpot account.
   */
  listJournalSubscriptions(
    options?: RequestOptions,
  ): APIPromise<CollectionResponseSubscriptionResponseNoPaging> {
    return this._client.get('/webhooks-journal/subscriptions/2026-03', options);
  }

  /**
   * Retrieve the filters associated with a specific webhook subscription. This
   * endpoint is useful for obtaining detailed information about the filters applied
   * to a subscription, which can help in managing and understanding the data flow
   * through your webhook integrations.
   */
  listSubscriptionFilters(
    subscriptionID: number,
    options?: RequestOptions,
  ): APIPromise<WebhookListSubscriptionFiltersResponse> {
    return this._client.get(
      path`/webhooks-journal/subscriptions/2026-03/filters/subscription/${subscriptionID}`,
      options,
    );
  }

  /**
   * Update an existing event subscription by ID.
   */
  updateEventSubscription(
    subscriptionID: number,
    params: WebhookUpdateEventSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse> {
    const { appId, ...body } = params;
    return this._client.patch(path`/webhooks/2026-03/${appId}/subscriptions/${subscriptionID}`, {
      body,
      ...options,
    });
  }

  /**
   * Update webhook settings for the specified app.
   */
  updateSettings(
    appID: number,
    body: WebhookUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<SettingsResponse> {
    return this._client.put(path`/webhooks/2026-03/${appID}/settings`, { body, ...options });
  }
}
export class Webhooks extends BaseWebhooks {}

export interface ActionOverrideRequest {
  /**
   * An array of strings, each representing an associated object type ID relevant to
   * the action override.
   */
  associatedObjectTypeIds?: Array<string>;

  /**
   * An array of integers representing list IDs that are affected by the action
   * override. These IDs are in int64 format.
   */
  listIds?: Array<number>;

  /**
   * An array of integers, each representing an object ID for which the action
   * override is applicable. These IDs are in int64 format.
   */
  objectIds?: Array<number>;

  /**
   * An array of strings representing specific properties to be overridden in the
   * action. Each entry in the array corresponds to a property name.
   */
  properties?: Array<string>;
}

export interface AppLifecycleEventSubscriptionUpsertRequest {
  eventTypeId: string;

  properties: Array<string>;

  subscriptionType:
    | 'OBJECT'
    | 'ASSOCIATION'
    | 'EVENT'
    | 'APP_LIFECYCLE_EVENT'
    | 'LIST_MEMBERSHIP'
    | 'GDPR_PRIVACY_DELETION';
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
    | 'GDPR_DELETE'
  >;

  associatedObjectTypeIds: Array<string>;

  objectIds: Array<number>;

  objectTypeId: string;

  portalId: number;

  subscriptionType:
    | 'OBJECT'
    | 'ASSOCIATION'
    | 'EVENT'
    | 'APP_LIFECYCLE_EVENT'
    | 'LIST_MEMBERSHIP'
    | 'GDPR_PRIVACY_DELETION';
}

export interface BatchInputSubscriptionBatchUpdateRequest {
  /**
   * An array of SubscriptionBatchUpdateRequest objects, each representing a
   * subscription to be updated. This property is required.
   */
  inputs: Array<SubscriptionBatchUpdateRequest>;
}

export interface BatchResponseJournalFetchResponse {
  /**
   * The date and time when the batch operation was completed, in ISO 8601 format.
   */
  completedAt: string;

  /**
   * An array of journal fetch responses, each containing details about individual
   * journal entries.
   */
  results: Array<JournalFetchResponse>;

  /**
   * The date and time when the batch operation started, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The current status of the batch operation. Valid values include 'PENDING',
   * 'PROCESSING', 'CANCELED', and 'COMPLETE'.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * A map of link names to associated URIs, providing additional resources or
   * documentation related to the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch operation was requested, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface BatchResponseJournalFetchResponseWithErrors {
  /**
   * The date and time when the batch operation was completed, in ISO 8601 format.
   */
  completedAt: string;

  /**
   * An array of journal fetch responses, each representing a result from the batch
   * operation.
   */
  results: Array<JournalFetchResponse>;

  /**
   * The date and time when the batch operation started, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The current status of the batch operation. Valid values include 'PENDING',
   * 'PROCESSING', 'CANCELED', and 'COMPLETE'.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of errors that occurred during the batch operation, each represented by
   * a StandardError object.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A map of link names to associated URIs, which may provide additional information
   * or resources related to the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the batch operation.
   */
  numErrors?: number;

  /**
   * The date and time when the batch operation was requested, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface BatchResponseSubscriptionResponse {
  /**
   * The date and time when the batch operation was completed, in ISO 8601 format.
   */
  completedAt: string;

  /**
   * An array of SubscriptionResponse objects, each representing the result of an
   * individual subscription update within the batch operation.
   */
  results: Array<SubscriptionResponse>;

  /**
   * The date and time when the batch operation started, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The current status of the batch operation. Valid values include 'PENDING',
   * 'PROCESSING', 'CANCELED', and 'COMPLETE'.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * A map of link names to associated URIs, providing additional information or
   * resources related to the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch operation was requested, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface BatchResponseSubscriptionResponseWithErrors {
  /**
   * The date and time when the batch operation was completed, in ISO 8601 format.
   */
  completedAt: string;

  /**
   * An array of SubscriptionResponse objects, representing the results of the batch
   * operation.
   */
  results: Array<SubscriptionResponse>;

  /**
   * The date and time when the batch operation started, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The current status of the batch operation. Valid values include 'PENDING',
   * 'PROCESSING', 'CANCELED', and 'COMPLETE'.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of StandardError objects, detailing any errors that occurred during the
   * batch operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A map of link names to associated URIs, providing additional resources or
   * documentation related to the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch operation.
   */
  numErrors?: number;

  /**
   * The date and time when the batch operation was requested, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface CollectionResponseSubscriptionResponseNoPaging {
  /**
   * An array of SubscriptionResponse objects, each representing a subscription's
   * details such as actions, app ID, and timestamps.
   */
  results: Array<SubscriptionResponse1>;
}

export interface Condition {
  /**
   * A string representing the type of filter. Valid value is 'CRM_OBJECT_PROPERTY'.
   */
  filterType: 'CRM_OBJECT_PROPERTY';

  /**
   * A string indicating the operation to apply for filtering. Valid values include
   * 'EQ', 'N_EQ', 'LT', 'GT', 'LTE', 'GTE', 'CONTAINS', 'STARTS_WITH', 'ENDS_WITH',
   * 'IN', 'NOT_IN', 'IS_EMPTY', and 'IS_NOT_EMPTY'.
   */
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

  /**
   * A string specifying the property of the CRM object to be filtered.
   */
  property: string;

  /**
   * A string representing the value to compare against the specified property when
   * filtering.
   */
  value?: string;

  /**
   * An array of strings, each representing a value to be used in the filtering
   * operation.
   */
  values?: Array<string>;
}

export interface CrmObjectSnapshotBatchRequest {
  /**
   * An array of CrmObjectSnapshotRequest objects, each representing a request to
   * capture a snapshot of a specific CRM object. This property is required.
   */
  snapshotRequests: Array<CrmObjectSnapshotRequest>;
}

export interface CrmObjectSnapshotBatchResponse {
  /**
   * An array of CrmObjectSnapshotResponse objects, each containing the details of a
   * single CRM object snapshot request. This property is required.
   */
  snapshotResponses: Array<CrmObjectSnapshotResponse>;
}

export interface CrmObjectSnapshotRequest {
  /**
   * An integer representing the unique identifier of the CRM object for which the
   * snapshot is being requested.
   */
  objectId: number;

  /**
   * A string representing the type identifier of the CRM object.
   */
  objectTypeId: string;

  /**
   * An integer representing the unique identifier of the HubSpot portal.
   */
  portalId: number;

  /**
   * An array of strings, each representing a property of the CRM object to be
   * included in the snapshot.
   */
  properties: Array<string>;
}

export interface CrmObjectSnapshotResponse {
  /**
   * An integer representing the unique identifier for the CRM object.
   */
  objectId: number;

  /**
   * A string representing the type identifier of the CRM object.
   */
  objectTypeId: string;

  /**
   * An integer representing the unique identifier for the HubSpot portal.
   */
  portalId: number;

  /**
   * A UUID string representing the status identifier of the snapshot.
   */
  snapshotStatusId: string;
}

/**
 * Defines a single condition for searching CRM objects, specifying the property to
 * filter on, the operator to use (such as equals, greater than, or contains), and
 * the value(s) to compare against.
 */
export interface Filter {
  /**
   * An array of conditions that define the filter criteria. Each condition specifies
   * a property, operator, and value to determine if a data item meets the filter
   * requirements.
   */
  conditions: Array<Condition>;
}

export interface FilterCreateRequest {
  /**
   * Defines a single condition for searching CRM objects, specifying the property to
   * filter on, the operator to use (such as equals, greater than, or contains), and
   * the value(s) to compare against.
   */
  filter: Filter;

  /**
   * The unique identifier of the subscription to which the filter will be applied.
   * It is an integer in int64 format.
   */
  subscriptionId: number;
}

export interface FilterCreateResponse {
  /**
   * The unique identifier for the created filter. It is an integer formatted as
   * int64.
   */
  filterId: number;
}

export interface FilterResponse {
  /**
   * The unique identifier for the filter. It is an integer in int64 format.
   */
  id: number;

  /**
   * A timestamp indicating when the filter was created, represented as an integer in
   * int64 format.
   */
  createdAt: number;

  /**
   * Defines a single condition for searching CRM objects, specifying the property to
   * filter on, the operator to use (such as equals, greater than, or contains), and
   * the value(s) to compare against.
   */
  filter: Filter;
}

export interface GdprPrivacyDeletionSubscriptionUpsertRequest {
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
    | 'GDPR_DELETE'
  >;

  objectTypeId: string;

  portalId: number;

  subscriptionType:
    | 'OBJECT'
    | 'ASSOCIATION'
    | 'EVENT'
    | 'APP_LIFECYCLE_EVENT'
    | 'LIST_MEMBERSHIP'
    | 'GDPR_PRIVACY_DELETION';
}

export interface JournalFetchResponse {
  /**
   * A UUID string indicating the current offset in the journal data, used for
   * pagination.
   */
  currentOffset: string;

  /**
   * The date and time when the URL will expire, in ISO 8601 format.
   */
  expiresAt: string;

  /**
   * A string representing the URL where the fetched journal data can be accessed.
   */
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
    | 'GDPR_DELETE'
  >;

  listIds: Array<number>;

  objectIds: Array<number>;

  portalId: number;

  subscriptionType:
    | 'OBJECT'
    | 'ASSOCIATION'
    | 'EVENT'
    | 'APP_LIFECYCLE_EVENT'
    | 'LIST_MEMBERSHIP'
    | 'GDPR_PRIVACY_DELETION';
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
    | 'GDPR_DELETE'
  >;

  objectIds: Array<number>;

  objectTypeId: string;

  portalId: number;

  properties: Array<string>;

  subscriptionType:
    | 'OBJECT'
    | 'ASSOCIATION'
    | 'EVENT'
    | 'APP_LIFECYCLE_EVENT'
    | 'LIST_MEMBERSHIP'
    | 'GDPR_PRIVACY_DELETION';
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
   * The date and time when the webhook settings were created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * The URL to which the webhook events will be sent. It is a string.
   */
  targetUrl: string;

  throttling: ThrottlingSettings;

  /**
   * The date and time when the webhook settings were last updated, in ISO 8601
   * format.
   */
  updatedAt?: string;
}

export interface SnapshotStatusResponse {
  /**
   * The unique identifier for the snapshot operation, formatted as a UUID.
   */
  id: string;

  /**
   * A Unix timestamp in milliseconds indicating when the snapshot operation was
   * initiated.
   */
  initiatedAt: number;

  /**
   * The current status of the snapshot operation. Valid values include 'PENDING',
   * 'IN_PROGRESS', 'COMPLETED', 'FAILED', and 'EXPIRED'.
   */
  status: 'COMPLETED' | 'EXPIRED' | 'FAILED' | 'IN_PROGRESS' | 'PENDING';

  /**
   * A Unix timestamp in milliseconds indicating when the snapshot operation was
   * completed.
   */
  completedAt?: number;

  /**
   * The code representing any error that occurred during the snapshot operation.
   * Possible values are 'TIMEOUT', 'VALIDATION_ERROR', 'INTERNAL_ERROR', and
   * 'PERMISSION_DENIED'.
   */
  errorCode?: 'INTERNAL_ERROR' | 'PERMISSION_DENIED' | 'TIMEOUT' | 'VALIDATION_ERROR';

  /**
   * A descriptive message providing additional information about the snapshot
   * operation or any errors encountered.
   */
  message?: string;
}

export interface SubscriptionBatchUpdateRequest {
  /**
   * The unique identifier for the subscription to be updated. It is an integer.
   */
  id: number;

  /**
   * A boolean indicating whether the subscription is active.
   */
  active: boolean;
}

export interface SubscriptionCreateRequest {
  /**
   * A boolean indicating whether the subscription is active. This field is required.
   */
  active: boolean;

  /**
   * A string representing the type of event to subscribe to. Valid values include
   * various object changes such as 'contact.propertyChange', 'deal.creation', and
   * 'conversation.newMessage'.
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
   * A string that provides a human-readable name for the event type. This is
   * optional.
   */
  eventTypeName?: string;

  /**
   * A string representing the identifier of the object type for which the
   * subscription is being created. This is optional.
   */
  objectTypeId?: string;

  /**
   * A string indicating the name of the property that triggers the event. This is
   * optional and used when subscribing to property change events.
   */
  propertyName?: string;
}

export interface SubscriptionListResponse {
  /**
   * An array of SubscriptionResponse objects, each representing a subscription
   * associated with the app. This property is required.
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
   * The unique identifier for the subscription, represented as an integer.
   */
  id: string;

  /**
   * A boolean indicating whether the subscription is currently active.
   */
  active: boolean;

  /**
   * The date and time when the subscription was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * The type of event that triggers the subscription. Valid values include various
   * object changes such as 'contact.propertyChange', 'deal.creation', and
   * 'ticket.deletion'.
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
   * A descriptive name for the event type.
   */
  eventTypeName?: string;

  /**
   * The identifier for the object type associated with the subscription, represented
   * as a string.
   */
  objectTypeId?: string;

  /**
   * The name of the property associated with the event, if applicable.
   */
  propertyName?: string;

  /**
   * The date and time when the subscription was last updated, in ISO 8601 format.
   */
  updatedAt?: string;
}

export interface SubscriptionResponse1 {
  /**
   * The unique identifier for the subscription, represented as an integer.
   */
  id: number;

  /**
   * An array of actions that trigger the subscription, such as 'CREATE', 'UPDATE',
   * 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED',
   * 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST',
   * 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.
   */
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
    | 'GDPR_DELETE'
  >;

  /**
   * The unique identifier for the app associated with the subscription, represented
   * as an integer.
   */
  appId: number;

  /**
   * The date and time when the subscription was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * The identifier for the object type associated with the subscription, represented
   * as a string.
   */
  objectTypeId: string;

  /**
   * The type of subscription, which can be one of 'OBJECT', 'ASSOCIATION', 'EVENT',
   * 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.
   */
  subscriptionType:
    | 'APP_LIFECYCLE_EVENT'
    | 'ASSOCIATION'
    | 'EVENT'
    | 'GDPR_PRIVACY_DELETION'
    | 'LIST_MEMBERSHIP'
    | 'OBJECT';

  /**
   * The date and time when the subscription was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * An object containing action overrides, where each key is an action and the value
   * is an ActionOverrideRequest object.
   */
  actionOverrides?: { [key: string]: ActionOverrideRequest };

  /**
   * An array of strings representing the associated object type IDs for the
   * subscription.
   */
  associatedObjectTypeIds?: Array<string>;

  /**
   * The unique identifier for the user who created the subscription, represented as
   * an integer.
   */
  createdBy?: number;

  /**
   * The date and time when the subscription was deleted, in ISO 8601 format.
   */
  deletedAt?: string;

  /**
   * An array of integers representing the list IDs associated with the subscription.
   */
  listIds?: Array<number>;

  /**
   * An array of integers representing the object IDs associated with the
   * subscription.
   */
  objectIds?: Array<number>;

  /**
   * The unique identifier for the portal associated with the subscription,
   * represented as an integer.
   */
  portalId?: number;

  /**
   * An array of strings representing the properties associated with the
   * subscription.
   */
  properties?: Array<string>;
}

export type SubscriptionUpsertRequest =
  | ObjectSubscriptionUpsertRequest
  | AssociationSubscriptionUpsertRequest
  | AppLifecycleEventSubscriptionUpsertRequest
  | ListMembershipSubscriptionUpsertRequest
  | GdprPrivacyDeletionSubscriptionUpsertRequest;

export interface ThrottlingSettings {
  /**
   * The maximum number of concurrent requests allowed. It is an integer value.
   */
  maxConcurrentRequests: number;
}

export type WebhookListSubscriptionFiltersResponse = Array<FilterResponse>;

export interface WebhookCreateBatchEventSubscriptionsParams {
  /**
   * An array of SubscriptionBatchUpdateRequest objects, each representing a
   * subscription to be updated. This property is required.
   */
  inputs: Array<SubscriptionBatchUpdateRequest>;
}

export interface WebhookCreateCrmSnapshotsParams {
  /**
   * An array of CrmObjectSnapshotRequest objects, each representing a request to
   * capture a snapshot of a specific CRM object. This property is required.
   */
  snapshotRequests: Array<CrmObjectSnapshotRequest>;
}

export interface WebhookCreateEventSubscriptionParams {
  /**
   * A boolean indicating whether the subscription is active. This field is required.
   */
  active: boolean;

  /**
   * A string representing the type of event to subscribe to. Valid values include
   * various object changes such as 'contact.propertyChange', 'deal.creation', and
   * 'conversation.newMessage'.
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
   * A string that provides a human-readable name for the event type. This is
   * optional.
   */
  eventTypeName?: string;

  /**
   * A string representing the identifier of the object type for which the
   * subscription is being created. This is optional.
   */
  objectTypeId?: string;

  /**
   * A string indicating the name of the property that triggers the event. This is
   * optional and used when subscribing to property change events.
   */
  propertyName?: string;
}

export type WebhookCreateJournalSubscriptionParams =
  | WebhookCreateJournalSubscriptionParams.ObjectSubscriptionUpsertRequest
  | WebhookCreateJournalSubscriptionParams.AssociationSubscriptionUpsertRequest
  | WebhookCreateJournalSubscriptionParams.AppLifecycleEventSubscriptionUpsertRequest
  | WebhookCreateJournalSubscriptionParams.ListMembershipSubscriptionUpsertRequest
  | WebhookCreateJournalSubscriptionParams.GdprPrivacyDeletionSubscriptionUpsertRequest;

export declare namespace WebhookCreateJournalSubscriptionParams {
  export interface ObjectSubscriptionUpsertRequest {}

  export interface AssociationSubscriptionUpsertRequest {}

  export interface AppLifecycleEventSubscriptionUpsertRequest {}

  export interface ListMembershipSubscriptionUpsertRequest {}

  export interface GdprPrivacyDeletionSubscriptionUpsertRequest {}
}

export interface WebhookCreateSubscriptionFilterParams {
  /**
   * Defines a single condition for searching CRM objects, specifying the property to
   * filter on, the operator to use (such as equals, greater than, or contains), and
   * the value(s) to compare against.
   */
  filter: Filter;

  /**
   * The unique identifier of the subscription to which the filter will be applied.
   * It is an integer in int64 format.
   */
  subscriptionId: number;
}

export interface WebhookDeleteEventSubscriptionParams {
  /**
   * The identifier for the app.
   */
  appId: number;
}

export interface WebhookGetEarliestJournalBatchParams {
  /**
   * The ID of the portal installation for which to fetch the journal entries. This
   * is an optional parameter.
   */
  installPortalId?: number;
}

export interface WebhookGetEarliestJournalEntryParams {
  /**
   * The ID of the portal installation to filter the journal entries. This is an
   * integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetEarliestLocalJournalBatchParams {
  /**
   * The ID of the portal installation to filter the webhook journal entries. It is
   * an integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetEarliestLocalJournalEntryParams {
  /**
   * The ID of the portal for which to retrieve the earliest journal entry. This
   * parameter is optional and should be an integer.
   */
  installPortalId?: number;
}

export interface WebhookGetEventSubscriptionParams {
  /**
   * The identifier for the app.
   */
  appId: number;
}

export interface WebhookGetJournalBatchByRequestParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: The ID of the portal from which to retrieve webhook journal
   * entries. This is an integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetJournalBatchFromOffsetParams {
  /**
   * Path param: The starting point for retrieving the batch of webhook journal
   * entries. This parameter is required and determines where the batch retrieval
   * begins.
   */
  offset: string;

  /**
   * Query param: The ID of the portal installation to filter the webhook journal
   * entries. This parameter is optional and is used to specify which portal's data
   * to retrieve.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestJournalBatchParams {
  /**
   * The ID of the portal installation. This parameter is optional and can be used to
   * filter results by a specific portal.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestJournalEntryParams {
  /**
   * The ID of the portal for which to retrieve the latest journal entry. It is an
   * integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestLocalJournalBatchParams {
  /**
   * The ID of the portal installation to filter the webhook journal entries. It is
   * an optional integer parameter.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestLocalJournalEntryParams {
  /**
   * An integer representing the ID of the portal to filter the webhook journal
   * entries.
   */
  installPortalId?: number;
}

export interface WebhookGetLocalJournalBatchByRequestParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: The ID of the portal where the webhook is installed. This parameter
   * is optional and is used to specify the portal context for the operation.
   */
  installPortalId?: number;
}

export interface WebhookGetLocalJournalBatchFromOffsetParams {
  /**
   * Path param: The starting point for the batch retrieval. This is a string value
   * representing the offset in the journal.
   */
  offset: string;

  /**
   * Query param: The ID of the portal where the webhooks are installed. This is an
   * integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetNextJournalEntriesParams {
  /**
   * The ID of the portal where the webhooks are installed. This is an integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetNextLocalJournalEntriesParams {
  /**
   * The ID of the portal installation to filter the journal entries by. This is an
   * optional parameter.
   */
  installPortalId?: number;
}

export interface WebhookUpdateEventSubscriptionParams {
  /**
   * Path param: The identifier for the app.
   */
  appId: number;

  /**
   * Body param: Whether to activate or pause the webhook subscription. If true, the
   * subscription will send webhook notifications. If false, the subscription is
   * paused and will not send notifications.
   */
  active?: boolean;
}

export interface WebhookUpdateSettingsParams {
  /**
   * A publicly available URL for Hubspot to call where event payloads will be
   * delivered. See [link-so-some-doc](#) for details about the format of these event
   * payloads.
   */
  targetUrl: string;

  throttling: ThrottlingSettings;
}

export declare namespace Webhooks {
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
    type GdprPrivacyDeletionSubscriptionUpsertRequest as GdprPrivacyDeletionSubscriptionUpsertRequest,
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
    type WebhookListSubscriptionFiltersResponse as WebhookListSubscriptionFiltersResponse,
    type WebhookCreateBatchEventSubscriptionsParams as WebhookCreateBatchEventSubscriptionsParams,
    type WebhookCreateCrmSnapshotsParams as WebhookCreateCrmSnapshotsParams,
    type WebhookCreateEventSubscriptionParams as WebhookCreateEventSubscriptionParams,
    type WebhookCreateJournalSubscriptionParams as WebhookCreateJournalSubscriptionParams,
    type WebhookCreateSubscriptionFilterParams as WebhookCreateSubscriptionFilterParams,
    type WebhookDeleteEventSubscriptionParams as WebhookDeleteEventSubscriptionParams,
    type WebhookGetEarliestJournalBatchParams as WebhookGetEarliestJournalBatchParams,
    type WebhookGetEarliestJournalEntryParams as WebhookGetEarliestJournalEntryParams,
    type WebhookGetEarliestLocalJournalBatchParams as WebhookGetEarliestLocalJournalBatchParams,
    type WebhookGetEarliestLocalJournalEntryParams as WebhookGetEarliestLocalJournalEntryParams,
    type WebhookGetEventSubscriptionParams as WebhookGetEventSubscriptionParams,
    type WebhookGetJournalBatchByRequestParams as WebhookGetJournalBatchByRequestParams,
    type WebhookGetJournalBatchFromOffsetParams as WebhookGetJournalBatchFromOffsetParams,
    type WebhookGetLatestJournalBatchParams as WebhookGetLatestJournalBatchParams,
    type WebhookGetLatestJournalEntryParams as WebhookGetLatestJournalEntryParams,
    type WebhookGetLatestLocalJournalBatchParams as WebhookGetLatestLocalJournalBatchParams,
    type WebhookGetLatestLocalJournalEntryParams as WebhookGetLatestLocalJournalEntryParams,
    type WebhookGetLocalJournalBatchByRequestParams as WebhookGetLocalJournalBatchByRequestParams,
    type WebhookGetLocalJournalBatchFromOffsetParams as WebhookGetLocalJournalBatchFromOffsetParams,
    type WebhookGetNextJournalEntriesParams as WebhookGetNextJournalEntriesParams,
    type WebhookGetNextLocalJournalEntriesParams as WebhookGetNextLocalJournalEntriesParams,
    type WebhookUpdateEventSubscriptionParams as WebhookUpdateEventSubscriptionParams,
    type WebhookUpdateSettingsParams as WebhookUpdateSettingsParams,
  };
}
