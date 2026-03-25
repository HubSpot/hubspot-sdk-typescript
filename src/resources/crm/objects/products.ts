// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CrmAPI from '../crm';
import * as ObjectsAPI from './objects';
import { SimplePublicObjectWithAssociationsPage } from './objects';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Products extends APIResource {
  /**
   * Create multiple products in a single request by specifying their properties, and
   * receive a response containing the details of the created products.
   */
  create(
    body: ProductCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/products/batch/create', { body, ...options });
  }

  /**
   * Update multiple products in a single request using their internal IDs or unique
   * property values. This batch operation allows for efficient modifications of
   * product records by specifying the properties to be updated. Ensure that the
   * provided property values are correct, as read-only and non-existent properties
   * will result in an error.
   */
  update(
    body: ProductUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/products/batch/update', { body, ...options });
  }

  /**
   * Read a page of products. Control what is returned via the `properties` query
   * param.
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/2026-03/products',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Archive multiple products at once by providing their IDs. This operation moves
   * the specified products to the recycling bin, effectively removing them from
   * active use without permanently deleting them.
   */
  delete(body: ProductDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/objects/2026-03/products/batch/archive', {
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
    params: ProductGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/objects/2026-03/products/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Execute a search for products based on defined filters, properties, and sorting
   * options. This endpoint allows for detailed querying of product data within the
   * CRM, enabling users to retrieve specific product information by applying
   * multiple filter groups and sorting criteria.
   */
  search(
    body: ProductSearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/products/search', { body, ...options });
  }

  /**
   * Create or update records identified by a unique property value as specified by
   * the `idProperty` query param. `idProperty` query param refers to a property
   * whose values are unique for the object.
   */
  upsert(
    body: ProductUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/objects/2026-03/products/batch/upsert', { body, ...options });
  }
}

export interface ProductCreateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputForCreate>;
}

export interface ProductUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface ProductListParams extends PageParams {
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

export interface ProductDeleteParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;
}

export interface ProductGetParams {
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

export interface ProductSearchParams {
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

export interface ProductUpsertParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace Products {
  export {
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
    type ProductGetParams as ProductGetParams,
    type ProductSearchParams as ProductSearchParams,
    type ProductUpsertParams as ProductUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
