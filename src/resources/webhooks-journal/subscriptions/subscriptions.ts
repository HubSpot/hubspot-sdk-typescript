// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WebhooksJournalAPI from '../webhooks-journal';
import * as FiltersAPI from './filters';
import { BaseFilters, FilterCreateParams, FilterListResponse, Filters } from './filters';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSubscriptions extends APIResource {
  static override readonly _key: readonly ['webhooksJournal', 'subscriptions'] = Object.freeze([
    'webhooksJournal',
    'subscriptions',
  ] as const);

  /**
   * Create a new subscription in the Webhooks Journal for the specified version.
   * This endpoint allows you to define the subscription details by providing the
   * necessary information in the request body. It supports various types of
   * subscriptions, including object, association, event, app lifecycle event, list
   * membership, and GDPR privacy deletion. Ensure that all required fields are
   * included in the request to successfully create a subscription.
   */
  create(
    body: SubscriptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksJournalAPI.JournalSubscriptionResponse> {
    return this._client.post('/webhooks-journal/subscriptions/2026-03', { body, ...options });
  }

  /**
   * Retrieve a list of webhook journal subscriptions for the specified version. This
   * endpoint allows you to view all active subscriptions without pagination. It is
   * useful for monitoring and managing webhook subscriptions in your HubSpot
   * account.
   */
  list(
    options?: RequestOptions,
  ): APIPromise<WebhooksJournalAPI.JournalCollectionResponseSubscriptionResponseNoPaging> {
    return this._client.get('/webhooks-journal/subscriptions/2026-03', options);
  }

  /**
   * Delete a specific webhook journal subscription using its unique identifier. This
   * operation is useful for managing and cleaning up subscriptions that are no
   * longer needed in your HubSpot account.
   */
  delete(subscriptionID: number, options?: RequestOptions): APIPromise<void> {
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
  deleteForPortal(portalID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks-journal/subscriptions/2026-03/portals/${portalID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve details of a specific webhook subscription using its unique identifier.
   * This endpoint is useful for obtaining information about a particular
   * subscription, such as its actions, object type, and associated properties.
   */
  get(
    subscriptionID: number,
    options?: RequestOptions,
  ): APIPromise<WebhooksJournalAPI.JournalSubscriptionResponse> {
    return this._client.get(path`/webhooks-journal/subscriptions/2026-03/${subscriptionID}`, options);
  }
}
export class Subscriptions extends BaseSubscriptions {
  filters: FiltersAPI.Filters = new FiltersAPI.Filters(this._client);
}

export type SubscriptionCreateParams =
  | SubscriptionCreateParams.ObjectSubscriptionUpsertRequest
  | SubscriptionCreateParams.AssociationSubscriptionUpsertRequest
  | SubscriptionCreateParams.AppLifecycleEventSubscriptionUpsertRequest
  | SubscriptionCreateParams.ListMembershipSubscriptionUpsertRequest
  | SubscriptionCreateParams.GdprPrivacyDeletionSubscriptionUpsertRequest;

export declare namespace SubscriptionCreateParams {
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

Subscriptions.Filters = Filters;
Subscriptions.BaseFilters = BaseFilters;

export declare namespace Subscriptions {
  export { type SubscriptionCreateParams as SubscriptionCreateParams };

  export {
    Filters as Filters,
    BaseFilters as BaseFilters,
    type FilterListResponse as FilterListResponse,
    type FilterCreateParams as FilterCreateParams,
  };
}
