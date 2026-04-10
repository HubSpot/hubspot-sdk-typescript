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

export class BaseProducts extends APIResource {
  static override readonly _key: readonly ['crm', 'objects', 'products'] = Object.freeze([
    'crm',
    'objects',
    'products',
  ] as const);

  /**
   * Create a product with the given properties and return a copy of the object,
   * including the ID. Documentation and examples for creating standard products is
   * provided.
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/products', { body, ...options });
  }

  /**
   * Perform a partial update of an Object identified by `{productId}`or optionally a
   * unique property value as specified by the `idProperty` query param.
   * `{productId}` refers to the internal object ID by default, and the `idProperty`
   * query param refers to a property whose values are unique for the object.
   * Provided property values will be overwritten. Read-only and non-existent
   * properties will result in an error. Properties values can be cleared by passing
   * an empty string.
   */
  update(
    productID: string,
    params: ProductUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/objects/2026-03/products/${productID}`, {
      query: { idProperty },
      body,
      ...options,
    });
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
   * Move an Object identified by `{productId}` to the recycling bin.
   */
  delete(productID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/objects/2026-03/products/${productID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read an Object identified by `{productId}`. `{productId}` refers to the internal
   * object ID by default, or optionally any unique property value as specified by
   * the `idProperty` query param. Control what is returned via the `properties`
   * query param.
   */
  get(
    productID: string,
    query: ProductGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/objects/2026-03/products/${productID}`, { query, ...options });
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
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/products/search', { body, ...options });
  }
}
export class Products extends BaseProducts {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

export interface ProductCreateParams {
  associations: Array<ObjectsAPI.PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
}

export interface ProductUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object type
   */
  idProperty?: string;
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

export interface ProductGetParams {
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

Products.Batch = Batch;
Products.BaseBatch = BaseBatch;

export declare namespace Products {
  export {
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductGetParams as ProductGetParams,
    type ProductSearchParams as ProductSearchParams,
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
