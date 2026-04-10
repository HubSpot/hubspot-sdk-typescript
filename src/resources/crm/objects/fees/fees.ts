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

export class BaseFees extends APIResource {
  static override readonly _key: readonly ['crm', 'objects', 'fees'] = Object.freeze([
    'crm',
    'objects',
    'fees',
  ] as const);

  /**
   * Create a fee with the given properties and return a copy of the object,
   * including the ID. Documentation and examples for creating standard fees is
   * provided.
   */
  create(body: FeeCreateParams, options?: RequestOptions): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/fees', { body, ...options });
  }

  /**
   * Perform a partial update of an Object identified by `{feeId}`or optionally a
   * unique property value as specified by the `idProperty` query param. `{feeId}`
   * refers to the internal object ID by default, and the `idProperty` query param
   * refers to a property whose values are unique for the object. Provided property
   * values will be overwritten. Read-only and non-existent properties will result in
   * an error. Properties values can be cleared by passing an empty string.
   */
  update(
    feeID: string,
    params: FeeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/objects/2026-03/fees/${feeID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Read a page of fees. Control what is returned via the `properties` query param.
   */
  list(
    query: FeeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/2026-03/fees',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Move an Object identified by `{feeId}` to the recycling bin.
   */
  delete(feeID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/objects/2026-03/fees/${feeID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read an Object identified by `{feeId}`. `{feeId}` refers to the internal object
   * ID by default, or optionally any unique property value as specified by the
   * `idProperty` query param. Control what is returned via the `properties` query
   * param.
   */
  get(
    feeID: string,
    query: FeeGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/objects/2026-03/fees/${feeID}`, { query, ...options });
  }

  /**
   * Perform a search for fees based on various filters and criteria defined in the
   * request body. The search can include specific properties, sorting options, and
   * pagination details to refine the results.
   */
  search(
    body: FeeSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/fees/search', { body, ...options });
  }
}
export class Fees extends BaseFees {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

export interface FeeCreateParams {
  associations: Array<ObjectsAPI.PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
}

export interface FeeUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object type
   */
  idProperty?: string;
}

export interface FeeListParams extends PageParams {
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

export interface FeeGetParams {
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

export interface FeeSearchParams {
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

Fees.Batch = Batch;
Fees.BaseBatch = BaseBatch;

export declare namespace Fees {
  export {
    type FeeCreateParams as FeeCreateParams,
    type FeeUpdateParams as FeeUpdateParams,
    type FeeListParams as FeeListParams,
    type FeeGetParams as FeeGetParams,
    type FeeSearchParams as FeeSearchParams,
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
