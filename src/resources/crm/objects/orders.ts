// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CrmAPI from '../crm';
import * as ObjectsAPI from './objects';
import { SimplePublicObjectWithAssociationsPage } from './objects';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Orders extends APIResource {
  /**
   * Create a batch of orders in the system.
   */
  create(
    body: OrderCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/orders/batch/create', { body, ...options });
  }

  /**
   * Update a batch of orders using their internal IDs or unique property values.
   */
  update(
    body: OrderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/orders/batch/update', { body, ...options });
  }

  /**
   * Read a page of orders. Control what is returned via the `properties` query
   * param.
   */
  list(
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/2026-03/orders',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Archive a batch of orders identified by their IDs.
   */
  delete(body: OrderDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/objects/2026-03/orders/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve records by record ID or include the `idProperty` parameter to retrieve
   * records by a custom unique value property.
   */
  get(
    params: OrderGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/objects/2026-03/orders/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Execute a search for orders using specified criteria and return matching
   * results.
   */
  search(
    body: OrderSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/orders/search', { body, ...options });
  }

  /**
   * Create or update records identified by a unique property value as specified by
   * the `idProperty` query param. `idProperty` query param refers to a property
   * whose values are unique for the object.
   */
  upsert(
    body: OrderUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/objects/2026-03/orders/batch/upsert', { body, ...options });
  }
}

export interface OrderCreateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputForCreate>;
}

export interface OrderUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface OrderListParams extends PageParams {
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

export interface OrderDeleteParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;
}

export interface OrderGetParams {
  /**
   * Body param
   */
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;

  /**
   * Body param: Key-value pairs for setting properties for the new object.
   */
  properties: Array<string>;

  /**
   * Body param: Key-value pairs for setting properties for the new object and their
   * histories.
   */
  propertiesWithHistory: Array<string>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Body param: When using a custom unique value property to retrieve records, the
   * name of the property. Do not include this parameter if retrieving by record ID.
   */
  idProperty?: string;
}

export interface OrderSearchParams {
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

export interface OrderUpsertParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace Orders {
  export {
    type OrderCreateParams as OrderCreateParams,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderListParams as OrderListParams,
    type OrderDeleteParams as OrderDeleteParams,
    type OrderGetParams as OrderGetParams,
    type OrderSearchParams as OrderSearchParams,
    type OrderUpsertParams as OrderUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
