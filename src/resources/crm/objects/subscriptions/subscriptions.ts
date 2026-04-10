// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import * as ObjectsAPI from '../objects';
import { SimplePublicObjectWithAssociationsPage } from '../objects';
import * as BatchAPI from './batch';
import {
  BaseBatch,
  Batch,
  BatchCreateParams,
  BatchDeleteParams,
  BatchGetParams,
  BatchUpdateParams,
  BatchUpsertParams,
} from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseSubscriptions extends APIResource {
  static override readonly _key: readonly ['crm', 'objects', 'subscriptions'] = Object.freeze([
    'crm',
    'objects',
    'subscriptions',
  ] as const);

  /**
   * Create a new subscription object with specified properties and optional
   * associations.
   */
  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/subscriptions', { body, ...options });
  }

  /**
   * Update a specific subscription by its ID with new property values.
   */
  update(
    subscriptionID: string,
    params: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/objects/2026-03/subscriptions/${subscriptionID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a list of subscription objects, with options to filter by properties,
   * associations, and archived status.
   */
  list(
    query: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/2026-03/subscriptions',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Delete a specific subscription by its ID.
   */
  delete(subscriptionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/objects/2026-03/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific subscription by its ID, including its properties and
   * associations.
   */
  get(
    subscriptionID: string,
    query: SubscriptionGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/objects/2026-03/subscriptions/${subscriptionID}`, {
      query,
      ...options,
    });
  }

  /**
   * Execute a search for CRM commerce subscriptions based on defined filters,
   * properties, and sorting options. This endpoint allows for complex queries to
   * retrieve specific subscription data, supporting pagination and a variety of
   * search parameters.
   */
  search(
    body: SubscriptionSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/subscriptions/search', { body, ...options });
  }
}
export class Subscriptions extends BaseSubscriptions {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

export interface SubscriptionCreateParams {
  associations: Array<ObjectsAPI.PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
}

export interface SubscriptionUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object type
   */
  idProperty?: string;
}

export interface SubscriptionListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * A comma separated list of object types to retrieve associated IDs for. If any of
   * the specified associations do not exist, they will be ignored.
   */
  associations?: Array<string>;

  /**
   * A comma separated list of the properties to be returned in the response. If any
   * of the specified properties are not present on the requested object(s), they
   * will be ignored.
   */
  properties?: Array<string>;

  /**
   * A comma separated list of the properties to be returned along with their history
   * of previous values. If any of the specified properties are not present on the
   * requested object(s), they will be ignored. Usage of this parameter will reduce
   * the maximum number of objects that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface SubscriptionGetParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * A comma separated list of object types to retrieve associated IDs for. If any of
   * the specified associations do not exist, they will be ignored.
   */
  associations?: Array<string>;

  /**
   * The name of a property whose values are unique for this object type
   */
  idProperty?: string;

  /**
   * A comma separated list of the properties to be returned in the response. If any
   * of the specified properties are not present on the requested object(s), they
   * will be ignored.
   */
  properties?: Array<string>;

  /**
   * A comma separated list of the properties to be returned along with their history
   * of previous values. If any of the specified properties are not present on the
   * requested object(s), they will be ignored.
   */
  propertiesWithHistory?: Array<string>;
}

export interface SubscriptionSearchParams {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups: Array<CrmAPI.FilterGroup>;

  /**
   * The maximum results to return, up to 200 objects.
   */
  limit: number;

  /**
   * A list of property names to include in the response.
   */
  properties: Array<string>;

  /**
   * Specifies sorting order based on object properties.
   */
  sorts: Array<string>;

  /**
   * The search query string, up to 3000 characters.
   */
  query?: string;
}

Subscriptions.Batch = Batch;
Subscriptions.BaseBatch = BaseBatch;

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionGetParams as SubscriptionGetParams,
    type SubscriptionSearchParams as SubscriptionSearchParams,
  };

  export {
    Batch as Batch,
    BaseBatch as BaseBatch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
