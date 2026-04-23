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
   * Create a batch of CRM object snapshots for the specified portal. This endpoint
   * allows you to capture the state of CRM objects at a specific point in time,
   * which can be useful for auditing or historical analysis. The request requires a
   * list of CRM object snapshot requests, each specifying the portal ID, object ID,
   * object type ID, and properties to include in the snapshot.
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
   * Create a new webhook subscription for the specified portal in the HubSpot
   * account. This endpoint allows you to define the subscription details, including
   * the types of events you want to subscribe to. The request body must include the
   * necessary subscription information as defined by the SubscriptionUpsertRequest
   * schema.
   */
  createJournalSubscription(
    body: WebhookCreateJournalSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse1> {
    return this._client.post('/webhooks-journal/subscriptions/2026-03', { body, ...options });
  }

  /**
   * Create a new filter for a webhook subscription in your HubSpot account. This
   * endpoint allows you to define specific conditions that a webhook event must meet
   * to trigger the subscription. It is useful for managing and customizing the
   * behavior of webhook subscriptions based on specific criteria.
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
   * longer needed or relevant.
   */
  deleteJournalSubscription(subscriptionID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks-journal/subscriptions/2026-03/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a webhook journal subscription for a specific portal. This operation
   * removes the subscription associated with the given portalId, and no content is
   * returned upon successful deletion.
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
   * Delete a specific filter associated with a webhook journal subscription. This
   * operation is useful for managing and cleaning up filters that are no longer
   * needed in your subscription setup. The endpoint requires the unique identifier
   * of the filter to be deleted.
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
   * allowing you to process or analyze the earliest entries first.
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
   * Retrieve the earliest entry from the webhooks journal for the specified version.
   * This endpoint is useful for accessing the oldest records available in the
   * journal, which can be helpful for auditing or historical data analysis.
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
   * Retrieve the earliest batch of webhook journal entries based on the specified
   * count. This endpoint is useful for fetching a specific number of the earliest
   * entries in the webhook journal for analysis or processing.
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
   * This endpoint is useful for accessing the oldest records in the journal, which
   * can be helpful for auditing or tracking purposes.
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
   * Perform a batch read operation on the webhooks journal for the specified date.
   * This endpoint allows you to retrieve multiple entries from the webhooks journal
   * in a single request, which can be useful for processing large amounts of data
   * efficiently.
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
   * This endpoint allows you to fetch a specified number of entries, making it
   * useful for paginating through large sets of webhook journal data.
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
   * Retrieve the status of a specific webhook journal entry using its status ID.
   * This endpoint is useful for checking the current state of a webhook process,
   * such as whether it is pending, in progress, completed, failed, or expired.
   */
  getJournalStatus(statusID: string, options?: RequestOptions): APIPromise<SnapshotStatusResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/status/${statusID}`, options);
  }

  /**
   * Retrieve details of a specific webhook subscription using its unique identifier.
   * This endpoint is useful for obtaining information about a particular
   * subscription's configuration and status within the HubSpot account.
   */
  getJournalSubscription(
    subscriptionID: number,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResponse1> {
    return this._client.get(path`/webhooks-journal/subscriptions/2026-03/${subscriptionID}`, options);
  }

  /**
   * Retrieve the latest batch of webhook journal entries. This endpoint allows you
   * to specify the number of entries to fetch, providing a way to access recent
   * webhook activity within your HubSpot account.
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
   * Retrieve the latest entries from the webhooks journal for the specified portal.
   * This endpoint is useful for accessing the most recent webhook events processed
   * by your HubSpot account. It allows you to filter the results by the portal ID to
   * ensure you are retrieving data relevant to a specific installation.
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
   * Retrieve the latest batch of webhook journal entries. This endpoint is useful
   * for accessing the most recent data entries processed by the webhook journal. It
   * requires specifying the number of entries to retrieve.
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
   * Retrieve the latest entries from the webhooks journal for the specified portal.
   * This endpoint is useful for accessing the most recent webhook events that have
   * been logged, allowing you to process or analyze them as needed.
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
   * to read multiple entries from the journal in a single request. It requires a
   * JSON request body specifying the inputs to be read. The response includes the
   * results of the batch read operation, and may return multiple statuses if there
   * are errors.
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
   * This endpoint allows you to fetch a defined number of entries, facilitating the
   * processing of webhook data in manageable chunks.
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
   * ID. This endpoint is useful for monitoring the progress or completion of webhook
   * processing tasks.
   */
  getLocalJournalStatus(statusID: string, options?: RequestOptions): APIPromise<SnapshotStatusResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/status/${statusID}`, options);
  }

  /**
   * Retrieve the next batch of webhook journal entries starting from a specified
   * offset. This endpoint is useful for paginating through large sets of webhook
   * data, allowing you to continue fetching entries from where you last left off.
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
   * Retrieve the next set of webhook journal entries starting from a specified
   * offset. This endpoint is useful for paginating through webhook journal data in a
   * sequential manner, allowing you to fetch entries beyond a given point.
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
   * Retrieve details of a specific filter associated with a webhook subscription in
   * the HubSpot account. This endpoint is useful for accessing the configuration and
   * conditions of a filter by its unique identifier.
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
   * Retrieve a list of webhook journal subscriptions for the specified API version.
   * This endpoint provides details about each subscription, including actions,
   * object types, and associated properties. It is useful for managing and reviewing
   * current webhook subscriptions.
   */
  listJournalSubscriptions(
    options?: RequestOptions,
  ): APIPromise<CollectionResponseSubscriptionResponseNoPaging> {
    return this._client.get('/webhooks-journal/subscriptions/2026-03', options);
  }

  /**
   * Retrieve the filters associated with a specific webhook subscription in the
   * HubSpot account. This endpoint is useful for obtaining detailed information
   * about the filters applied to a given subscription, identified by its
   * subscription ID.
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
   * An array of integers representing list IDs that are associated with the action
   * override. The integers are in int64 format.
   */
  listIds?: Array<number>;

  /**
   * An array of integers, each representing an object ID for which the action
   * override is applicable. The integers are in int64 format.
   */
  objectIds?: Array<number>;

  /**
   * An array of strings representing the properties to be overridden in the action.
   * Each string corresponds to a property name.
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
   * An array of results from the batch operation, each represented as a
   * JournalFetchResponse object.
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
   * A map of link names to associated URIs related to the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch operation was requested, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface BatchResponseJournalFetchResponseWithErrors {
  /**
   * The date and time when the batch process was completed, in ISO 8601 format.
   */
  completedAt: string;

  /**
   * An array of journal fetch responses, each representing a result from the batch
   * process.
   */
  results: Array<JournalFetchResponse>;

  /**
   * The date and time when the batch process started, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The current status of the batch process. Valid values include 'PENDING',
   * 'PROCESSING', 'CANCELED', and 'COMPLETE'.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of standard errors that occurred during the batch process, providing
   * details about each error.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A map of link names to associated URIs, providing additional context or actions
   * related to the batch process.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the batch process.
   */
  numErrors?: number;

  /**
   * The date and time when the batch request was made, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface BatchResponseSubscriptionResponse {
  /**
   * The date and time when the batch operation was completed, in ISO 8601 format.
   */
  completedAt: string;

  /**
   * An array containing the results of the batch operation, with each item
   * representing an individual subscription response.
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
   * A map of link names to associated URIs providing additional information about
   * the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch operation was requested, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface BatchResponseSubscriptionResponseWithErrors {
  /**
   * The date and time when the batch processing was completed, in ISO 8601 format.
   */
  completedAt: string;

  /**
   * An array of SubscriptionResponse objects representing the results of each
   * subscription update processed in the batch.
   */
  results: Array<SubscriptionResponse>;

  /**
   * The date and time when the batch processing began, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The current status of the batch operation. Valid values include 'PENDING',
   * 'PROCESSING', 'CANCELED', and 'COMPLETE'.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of StandardError objects detailing any errors that occurred during the
   * batch processing.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A map of link names to associated URIs, providing additional resources or
   * documentation related to the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The total number of errors encountered during the batch operation.
   */
  numErrors?: number;

  /**
   * The date and time when the batch request was initially made, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface CollectionResponseSubscriptionResponseNoPaging {
  /**
   * An array of SubscriptionResponse objects, each representing a subscription's
   * details such as actions, appId, createdAt, and other relevant properties.
   */
  results: Array<SubscriptionResponse1>;
}

export interface Condition {
  /**
   * A string indicating the type of filter being applied. Valid value is
   * 'CRM_OBJECT_PROPERTY'.
   */
  filterType: 'CRM_OBJECT_PROPERTY';

  /**
   * A string specifying the operation to be performed in the condition. Valid values
   * include 'EQ', 'N_EQ', 'LT', 'GT', 'LTE', 'GTE', 'CONTAINS', 'STARTS_WITH',
   * 'ENDS_WITH', 'IN', 'NOT_IN', 'IS_EMPTY', and 'IS_NOT_EMPTY'.
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
   * A string representing the specific property of the CRM object that the condition
   * applies to.
   */
  property: string;

  /**
   * A string representing the value to be compared against the specified property
   * when using single-value operators.
   */
  value?: string;

  /**
   * An array of strings used to specify multiple values for comparison when using
   * operators that support multiple values, such as 'IN' or 'NOT_IN'.
   */
  values?: Array<string>;
}

export interface CrmObjectSnapshotBatchRequest {
  /**
   * An array of CrmObjectSnapshotRequest objects, each representing a request to
   * create a snapshot for a specific CRM object. This property is required.
   */
  snapshotRequests: Array<CrmObjectSnapshotRequest>;
}

export interface CrmObjectSnapshotBatchResponse {
  /**
   * An array of CrmObjectSnapshotResponse objects, each representing the result of a
   * snapshot operation for a specific CRM object. This property is required.
   */
  snapshotResponses: Array<CrmObjectSnapshotResponse>;
}

export interface CrmObjectSnapshotRequest {
  /**
   * An integer representing the unique identifier of the CRM object for which the
   * snapshot is requested.
   */
  objectId: number;

  /**
   * A string representing the type identifier of the CRM object, specifying what
   * kind of object it is within HubSpot.
   */
  objectTypeId: string;

  /**
   * An integer representing the unique identifier of the HubSpot account (portal)
   * where the CRM object resides.
   */
  portalId: number;

  /**
   * An array of strings, each representing a property of the CRM object that should
   * be included in the snapshot.
   */
  properties: Array<string>;
}

export interface CrmObjectSnapshotResponse {
  /**
   * An integer representing the unique identifier of the CRM object for which the
   * snapshot is taken.
   */
  objectId: number;

  /**
   * A string indicating the type of the CRM object, such as contact, company, or
   * deal.
   */
  objectTypeId: string;

  /**
   * An integer representing the unique identifier of the HubSpot portal associated
   * with the CRM object.
   */
  portalId: number;

  /**
   * A UUID string representing the status identifier of the snapshot request,
   * indicating the current state of the snapshot process.
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
   * An array of conditions that define the criteria for the filter. Each condition
   * specifies a property, an operator, and optionally a value or values.
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
   * It is an integer formatted as int64.
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
   * A Unix timestamp in milliseconds indicating when the filter was created.
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
   * The unique identifier for the current offset of the journal entry, formatted as
   * a UUID.
   */
  currentOffset: string;

  /**
   * The date and time when the URL will expire, in ISO 8601 format.
   */
  expiresAt: string;

  /**
   * The URL where the journal entry can be accessed. It is a string.
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
   * The URL to which webhook events will be sent. It is a string.
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
   * The unique identifier for the snapshot operation, represented as a UUID.
   */
  id: string;

  /**
   * The timestamp indicating when the snapshot operation was initiated, represented
   * as a Unix timestamp in milliseconds.
   */
  initiatedAt: number;

  /**
   * The current status of the snapshot. Valid values include 'PENDING',
   * 'IN_PROGRESS', 'COMPLETED', 'FAILED', and 'EXPIRED'.
   */
  status: 'COMPLETED' | 'EXPIRED' | 'FAILED' | 'IN_PROGRESS' | 'PENDING';

  /**
   * The timestamp indicating when the snapshot operation was completed, represented
   * as a Unix timestamp in milliseconds.
   */
  completedAt?: number;

  /**
   * A code representing the error that occurred, if any. Possible values are
   * 'TIMEOUT', 'VALIDATION_ERROR', 'INTERNAL_ERROR', and 'PERMISSION_DENIED'.
   */
  errorCode?: 'INTERNAL_ERROR' | 'PERMISSION_DENIED' | 'TIMEOUT' | 'VALIDATION_ERROR';

  /**
   * A descriptive message providing additional information about the snapshot
   * operation or error.
   */
  message?: string;
}

export interface SubscriptionBatchUpdateRequest {
  /**
   * The unique identifier for the subscription. It is an integer.
   */
  id: number;

  /**
   * A boolean indicating whether the subscription is active.
   */
  active: boolean;
}

export interface SubscriptionCreateRequest {
  /**
   * A boolean indicating whether the subscription is active.
   */
  active: boolean;

  /**
   * A string representing the type of event to subscribe to. Valid values include
   * various property changes, creations, deletions, merges, restorations,
   * association changes, and event completions.
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
   * A string providing a human-readable name for the event type.
   */
  eventTypeName?: string;

  /**
   * A string representing the ID of the object type associated with the
   * subscription.
   */
  objectTypeId?: string;

  /**
   * A string indicating the specific property name related to the event type, if
   * applicable.
   */
  propertyName?: string;
}

export interface SubscriptionListResponse {
  /**
   * An array of subscription responses, each detailing a specific subscription's
   * properties and status.
   */
  results: Array<SubscriptionResponse>;
}

export interface SubscriptionPatchRequest {
  /**
   * A boolean indicating whether the subscription is active. If true, the
   * subscription is active; if false, it is inactive.
   */
  active?: boolean;
}

export interface SubscriptionResponse {
  /**
   * The unique identifier for the subscription. It is an integer formatted as int64.
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
   * property changes, creations, deletions, merges, restores, and association
   * changes for different HubSpot objects.
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
   * The name of the event type for the subscription.
   */
  eventTypeName?: string;

  /**
   * The identifier for the object type associated with the subscription. It is a
   * string.
   */
  objectTypeId?: string;

  /**
   * The name of the property associated with the subscription event, if applicable.
   */
  propertyName?: string;

  /**
   * The date and time when the subscription was last updated, in ISO 8601 format.
   */
  updatedAt?: string;
}

export interface SubscriptionResponse1 {
  /**
   * The unique identifier for the subscription. It is an integer formatted as int64.
   */
  id: number;

  /**
   * A list of actions that trigger the subscription. Possible values include
   * 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED',
   * 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL',
   * 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.
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
   * The unique identifier for the app associated with the subscription. It is an
   * integer formatted as int64.
   */
  appId: number;

  /**
   * The date and time when the subscription was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * The identifier for the object type associated with the subscription. It is a
   * string.
   */
  objectTypeId: string;

  /**
   * The type of subscription, which can be one of the following: 'OBJECT',
   * 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or
   * 'GDPR_PRIVACY_DELETION'.
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
   * A list of associated object type IDs. Each ID is a string.
   */
  associatedObjectTypeIds?: Array<string>;

  /**
   * The ID of the user who created the subscription. It is an integer formatted as
   * int64.
   */
  createdBy?: number;

  /**
   * The date and time when the subscription was deleted, in ISO 8601 format, if
   * applicable.
   */
  deletedAt?: string;

  /**
   * A list of list IDs associated with the subscription. Each ID is an integer
   * formatted as int64.
   */
  listIds?: Array<number>;

  /**
   * A list of object IDs associated with the subscription. Each ID is an integer
   * formatted as int64.
   */
  objectIds?: Array<number>;

  /**
   * The unique identifier for the portal associated with the subscription. It is an
   * integer formatted as int64.
   */
  portalId?: number;

  /**
   * A list of property names associated with the subscription. Each property is a
   * string.
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
   * The maximum number of concurrent requests allowed. This is an integer value.
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
   * create a snapshot for a specific CRM object. This property is required.
   */
  snapshotRequests: Array<CrmObjectSnapshotRequest>;
}

export interface WebhookCreateEventSubscriptionParams {
  /**
   * A boolean indicating whether the subscription is active.
   */
  active: boolean;

  /**
   * A string representing the type of event to subscribe to. Valid values include
   * various property changes, creations, deletions, merges, restorations,
   * association changes, and event completions.
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
   * A string providing a human-readable name for the event type.
   */
  eventTypeName?: string;

  /**
   * A string representing the ID of the object type associated with the
   * subscription.
   */
  objectTypeId?: string;

  /**
   * A string indicating the specific property name related to the event type, if
   * applicable.
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
   * It is an integer formatted as int64.
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
   * The ID of the portal installation to filter the webhook journal entries by. This
   * is an integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetEarliestJournalEntryParams {
  /**
   * The ID of the portal installation to filter the journal entries. It is an
   * integer.
   */
  installPortalId?: number;
}

export interface WebhookGetEarliestLocalJournalBatchParams {
  /**
   * The ID of the portal where the webhooks are installed. This is an integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetEarliestLocalJournalEntryParams {
  /**
   * The ID of the portal installation to filter the journal entries by. This
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
   * Query param: The ID of the portal where the webhooks are installed. This is an
   * integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetJournalBatchFromOffsetParams {
  /**
   * Path param: The starting point for fetching the next batch of journal entries.
   * This is a string value that indicates the offset position.
   */
  offset: string;

  /**
   * Query param: The ID of the portal installation. This is an integer value used to
   * specify the portal context for the request.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestJournalBatchParams {
  /**
   * The ID of the portal installation. This is an integer value used to identify the
   * specific portal.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestJournalEntryParams {
  /**
   * The ID of the portal installation to filter the journal entries. It is an
   * integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestLocalJournalBatchParams {
  /**
   * The ID of the portal installation. This parameter is optional and used to filter
   * the journal entries by a specific portal.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestLocalJournalEntryParams {
  /**
   * The ID of the portal for which to retrieve the latest journal entries. This
   * parameter is optional and should be an integer.
   */
  installPortalId?: number;
}

export interface WebhookGetLocalJournalBatchByRequestParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: The ID of the portal where the webhooks are installed. This
   * parameter is optional and is used to specify the target portal.
   */
  installPortalId?: number;
}

export interface WebhookGetLocalJournalBatchFromOffsetParams {
  /**
   * Path param: The starting point for fetching the batch of journal entries. This
   * is a string value that indicates the offset position.
   */
  offset: string;

  /**
   * Query param: The ID of the portal installation. This is an integer value used to
   * specify the portal context for the request.
   */
  installPortalId?: number;
}

export interface WebhookGetNextJournalEntriesParams {
  /**
   * The ID of the portal installation to filter the webhook journal entries. This is
   * an optional parameter.
   */
  installPortalId?: number;
}

export interface WebhookGetNextLocalJournalEntriesParams {
  /**
   * The ID of the portal where the webhook is installed. This is an integer value.
   */
  installPortalId?: number;
}

export interface WebhookUpdateEventSubscriptionParams {
  /**
   * Path param: The identifier for the app.
   */
  appId: number;

  /**
   * Body param: A boolean indicating whether the subscription is active. If true,
   * the subscription is active; if false, it is inactive.
   */
  active?: boolean;
}

export interface WebhookUpdateSettingsParams {
  /**
   * The URL to which webhook events will be sent. It is a string.
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
