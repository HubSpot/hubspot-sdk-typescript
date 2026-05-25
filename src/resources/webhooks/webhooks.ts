// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as WebhooksJournalAPI from '../webhooks-journal/webhooks-journal';
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
   * Create a batch of CRM object snapshots in HubSpot. This endpoint is used to
   * capture the current state of specified CRM objects for later reference or
   * analysis. It requires a JSON payload containing the details of the CRM objects
   * to snapshot. This operation is exempt from daily and ten-secondly rate limits.
   */
  createCrmSnapshots(
    body: WebhookCreateCrmSnapshotsParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CrmObjectSnapshotBatchResponse> {
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
   * Create a new subscription in the Webhooks Journal for the specified version.
   * This endpoint allows you to define the subscription details by providing the
   * necessary information in the request body. It supports various types of
   * subscriptions, including object, association, event, app lifecycle event, list
   * membership, and GDPR privacy deletion. Ensure that all required fields are
   * included in the request to successfully create a subscription.
   */
  createJournalSubscription(
    body: WebhookCreateJournalSubscriptionParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksJournalAPI.SubscriptionResponse> {
    return this._client.post('/webhooks-journal/subscriptions/2026-03', { body, ...options });
  }

  /**
   * Create a new filter for a specific webhook subscription in the HubSpot account.
   * This endpoint allows you to define conditions that determine when a webhook
   * should be triggered. The filter is associated with a subscription identified by
   * its ID, and the request must include the filter details.
   */
  createSubscriptionFilter(
    body: WebhookCreateSubscriptionFilterParams,
    options?: RequestOptions,
  ): APIPromise<Shared.FilterCreateResponse> {
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
   * longer needed in your HubSpot account.
   */
  deleteJournalSubscription(subscriptionID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks-journal/subscriptions/2026-03/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a webhook journal subscription for a specific portal. This operation
   * removes the subscription associated with the given portalId, ensuring that no
   * further webhook events are sent for this portal. Use this endpoint to manage and
   * clean up subscriptions that are no longer needed.
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
   * Remove a specific filter from the webhooks journal subscriptions. This operation
   * is useful for managing and cleaning up filters that are no longer needed. Once
   * deleted, the filter cannot be recovered.
   */
  deleteSubscriptionFilter(filterID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks-journal/subscriptions/2026-03/filters/${filterID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the earliest batch of webhook journal entries for a specified count.
   * This endpoint is useful for accessing historical webhook data in batches,
   * allowing you to process or analyze older entries. The number of entries
   * retrieved is determined by the count parameter.
   */
  getEarliestJournalBatch(
    count: number,
    query: WebhookGetEarliestJournalBatchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/earliest/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the earliest entry from the webhooks journal for the specified portal.
   * This endpoint is useful for accessing the first recorded webhook event in the
   * journal, which can be helpful for auditing or debugging purposes.
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
   * Retrieve the earliest batch of webhook journal entries. This endpoint is useful
   * for accessing the oldest available data in the webhook journal, allowing users
   * to process or analyze historical webhook events. The number of entries to fetch
   * is specified by the 'count' path parameter.
   */
  getEarliestLocalJournalBatch(
    count: number,
    query: WebhookGetEarliestLocalJournalBatchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/earliest/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the earliest webhook journal entries for the specified portal. This
   * endpoint can be used to access the oldest records available in the webhook
   * journal, which may be useful for auditing or historical analysis.
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
   * Execute a batch read operation on the webhooks journal for the specified date,
   * 2026-03. This endpoint allows you to retrieve multiple entries from the webhooks
   * journal in a single request, which can be useful for processing large amounts of
   * data efficiently. Ensure that the request body is provided in the required
   * format.
   */
  getJournalBatchByRequest(
    params: WebhookGetJournalBatchByRequestParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    const { installPortalId, ...body } = params;
    return this._client.post('/webhooks-journal/journal/2026-03/batch/read', {
      query: { installPortalId },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a batch of webhook journal entries starting from a specified offset.
   * This endpoint allows you to fetch a defined number of entries, which can be
   * useful for processing large datasets in manageable chunks.
   */
  getJournalBatchFromOffset(
    count: number,
    params: WebhookGetJournalBatchFromOffsetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    const { offset, ...query } = params;
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/${offset}/next/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the status of a specific webhook journal entry using its unique status
   * ID. This endpoint provides detailed information about the status, including
   * whether it is pending, in progress, completed, failed, or expired. It is useful
   * for monitoring and managing the state of webhook journal entries.
   */
  getJournalStatus(statusID: string, options?: RequestOptions): APIPromise<Shared.SnapshotStatusResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/status/${statusID}`, options);
  }

  /**
   * Retrieve details of a specific webhook subscription using its unique identifier.
   * This endpoint is useful for obtaining information about a particular
   * subscription, such as its actions, object type, and associated properties.
   */
  getJournalSubscription(
    subscriptionID: number,
    options?: RequestOptions,
  ): APIPromise<WebhooksJournalAPI.SubscriptionResponse> {
    return this._client.get(path`/webhooks-journal/subscriptions/2026-03/${subscriptionID}`, options);
  }

  /**
   * Retrieve the latest batch of webhook journal entries up to the specified count.
   * This endpoint is useful for fetching recent webhook data for analysis or
   * processing. The count parameter determines the maximum number of entries to
   * return.
   */
  getLatestJournalBatch(
    count: number,
    query: WebhookGetLatestJournalBatchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/latest/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the latest entries from the webhooks journal for the specified portal.
   * This endpoint is useful for accessing the most recent webhook events and their
   * statuses, allowing you to monitor and debug webhook activity effectively.
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
   * Retrieve the latest batch of webhook journal entries. This endpoint allows you
   * to specify the number of entries to fetch, providing a way to access the most
   * recent webhook events processed by your HubSpot account.
   */
  getLatestLocalJournalBatch(
    count: number,
    query: WebhookGetLatestLocalJournalBatchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/latest/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the latest entries from the webhooks journal for the specified portal.
   * This endpoint is useful for accessing the most recent webhook events that have
   * been logged, allowing for real-time monitoring or debugging of webhook
   * activities.
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
   * Execute a batch read operation on the webhooks journal. This endpoint allows you
   * to retrieve a batch of webhook journal entries by providing the necessary input
   * data. It is useful for processing multiple records in a single request,
   * streamlining data retrieval tasks.
   */
  getLocalJournalBatchByRequest(
    params: WebhookGetLocalJournalBatchByRequestParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    const { installPortalId, ...body } = params;
    return this._client.post('/webhooks-journal/journal-local/2026-03/batch/read', {
      query: { installPortalId },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a batch of webhook journal entries starting from a specified offset.
   * This endpoint is useful for paginating through large sets of webhook data. The
   * number of entries returned is determined by the 'count' parameter.
   */
  getLocalJournalBatchFromOffset(
    count: number,
    params: WebhookGetLocalJournalBatchFromOffsetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    const { offset, ...query } = params;
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/${offset}/next/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the status of a specific webhook journal entry using its unique status
   * ID. This endpoint is useful for monitoring the progress or outcome of webhook
   * journal entries, allowing you to check if an entry is pending, in progress,
   * completed, failed, or expired.
   */
  getLocalJournalStatus(
    statusID: string,
    options?: RequestOptions,
  ): APIPromise<Shared.SnapshotStatusResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/status/${statusID}`, options);
  }

  /**
   * Retrieve the next set of entries from the webhooks journal starting from a
   * specified offset. This endpoint is useful for paginating through journal entries
   * to process or analyze webhook events sequentially.
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
   * offset. This endpoint is useful for paginating through large sets of webhook
   * data, allowing you to continue from where a previous request left off.
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
   * endpoint allows you to access the details of the filter identified by the
   * filterId, which is useful for managing and understanding the conditions applied
   * to webhook events.
   */
  getSubscriptionFilter(filterID: number, options?: RequestOptions): APIPromise<Shared.FilterResponse> {
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
   * useful for monitoring and managing webhook subscriptions in your HubSpot
   * account.
   */
  listJournalSubscriptions(
    options?: RequestOptions,
  ): APIPromise<WebhooksJournalAPI.CollectionResponseSubscriptionResponseNoPaging> {
    return this._client.get('/webhooks-journal/subscriptions/2026-03', options);
  }

  /**
   * Retrieve the filters associated with a specific webhook subscription. This
   * endpoint allows you to view the filters applied to a subscription, which can
   * help in managing and understanding the conditions set for webhook events.
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

export interface BatchInputSubscriptionBatchUpdateRequest {
  /**
   * An array of SubscriptionBatchUpdateRequest objects, each representing a
   * subscription to be updated. This property is required.
   */
  inputs: Array<SubscriptionBatchUpdateRequest>;
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
  actionOverrides?: { [key: string]: Shared.ActionOverrideRequest };

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

export interface ThrottlingSettings {
  /**
   * The maximum number of concurrent requests allowed. This is an integer value.
   */
  maxConcurrentRequests: number;
}

export type WebhookListSubscriptionFiltersResponse = Array<Shared.FilterResponse>;

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
  snapshotRequests: Array<Shared.CrmObjectSnapshotRequest>;
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

    subscriptionType: 'OBJECT';
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

    subscriptionType: 'ASSOCIATION';
  }

  export interface AppLifecycleEventSubscriptionUpsertRequest {
    eventTypeId: string;

    properties: Array<string>;

    subscriptionType: 'APP_LIFECYCLE_EVENT';
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

    subscriptionType: 'LIST_MEMBERSHIP';
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

    subscriptionType: 'GDPR_PRIVACY_DELETION';
  }
}

export interface WebhookCreateSubscriptionFilterParams {
  /**
   * Defines a single condition for searching CRM objects, specifying the property to
   * filter on, the operator to use (such as equals, greater than, or contains), and
   * the value(s) to compare against.
   */
  filter: Shared.Filter;

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
   * The ID of the portal installation. This is an integer value that specifies which
   * portal's data to access.
   */
  installPortalId?: number;
}

export interface WebhookGetEarliestJournalEntryParams {
  /**
   * The ID of the portal installation to filter the journal entries by. This is an
   * integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetEarliestLocalJournalBatchParams {
  /**
   * The ID of the portal installation to filter the webhook journal entries. This is
   * an optional integer parameter.
   */
  installPortalId?: number;
}

export interface WebhookGetEarliestLocalJournalEntryParams {
  /**
   * The ID of the portal for which to retrieve the earliest webhook journal entries.
   * This parameter is optional and should be an integer.
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
   * Query param: An integer representing the ID of the portal installation for which
   * the webhooks journal data should be retrieved.
   */
  installPortalId?: number;
}

export interface WebhookGetJournalBatchFromOffsetParams {
  /**
   * Path param: The starting point for fetching the journal entries. This is a
   * string value.
   */
  offset: string;

  /**
   * Query param: The ID of the portal installation. This is an integer value.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestJournalBatchParams {
  /**
   * The ID of the portal installation. This is an integer value used to specify the
   * portal context for the request.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestJournalEntryParams {
  /**
   * The unique identifier of the portal installation for which to retrieve the
   * latest journal entries. This parameter is optional and should be an integer.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestLocalJournalBatchParams {
  /**
   * The ID of the portal where the webhook journal is installed. This parameter is
   * optional and used to specify the target portal.
   */
  installPortalId?: number;
}

export interface WebhookGetLatestLocalJournalEntryParams {
  /**
   * The ID of the portal for which to retrieve the latest journal entries. This is
   * an integer value.
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
   * parameter is optional and is used to specify the target portal for the
   * operation.
   */
  installPortalId?: number;
}

export interface WebhookGetLocalJournalBatchFromOffsetParams {
  /**
   * Path param: The starting point for the batch retrieval, specified as a string.
   */
  offset: string;

  /**
   * Query param: The ID of the portal where the webhooks are installed. This is an
   * optional parameter.
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
   * The ID of the portal installation to filter the webhook journal entries. This is
   * an integer value.
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
    type BatchInputSubscriptionBatchUpdateRequest as BatchInputSubscriptionBatchUpdateRequest,
    type BatchResponseSubscriptionResponse as BatchResponseSubscriptionResponse,
    type BatchResponseSubscriptionResponseWithErrors as BatchResponseSubscriptionResponseWithErrors,
    type CollectionResponseSubscriptionResponseNoPaging as CollectionResponseSubscriptionResponseNoPaging,
    type SettingsChangeRequest as SettingsChangeRequest,
    type SettingsResponse as SettingsResponse,
    type SubscriptionBatchUpdateRequest as SubscriptionBatchUpdateRequest,
    type SubscriptionCreateRequest as SubscriptionCreateRequest,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionPatchRequest as SubscriptionPatchRequest,
    type SubscriptionResponse as SubscriptionResponse,
    type SubscriptionResponse1 as SubscriptionResponse1,
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
