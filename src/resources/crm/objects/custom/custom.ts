// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { SimplePublicObjectWithAssociationsPage } from '../../crm';
import * as BatchAPI from './batch';
import {
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

export class Custom extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a CRM object with the given properties and return a copy of the object,
   * including the ID. Documentation and examples for creating standard objects is
   * provided.
   *
   * @example
   * ```ts
   * const createdResponseSimplePublicObject =
   *   await client.crm.objects.custom.create('objectType', {
   *     associations: [
   *       {
   *         to: { id: '37295' },
   *         types: [
   *           {
   *             associationCategory: 'HUBSPOT_DEFINED',
   *             associationTypeId: 0,
   *           },
   *         ],
   *       },
   *     ],
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  create(
    objectType: string,
    body: CustomCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CreatedResponseSimplePublicObject> {
    return this._client.post(path`/crm/v3/objects/${objectType}`, { body, ...options });
  }

  /**
   * Perform a partial update of an Object identified by `{objectId}`or optionally a
   * unique property value as specified by the `idProperty` query param. `{objectId}`
   * refers to the internal object ID by default, and the `idProperty` query param
   * refers to a property whose values are unique for the object. Provided property
   * values will be overwritten. Read-only and non-existent properties will result in
   * an error. Properties values can be cleared by passing an empty string.
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.custom.update('objectId', {
   *     objectType: 'objectType',
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  update(
    objectID: string,
    params: CustomUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { objectType, idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/${objectType}/${objectID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Read a page of objects. Control what is returned via the `properties` query
   * param.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.custom.list(
   *   'objectType',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    objectType: string,
    query: CustomListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, CrmAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      path`/crm/v3/objects/${objectType}`,
      Page<CrmAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Move an Object identified by `{objectId}` to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.objects.custom.delete('objectId', {
   *   objectType: 'objectType',
   * });
   * ```
   */
  delete(objectID: string, params: CustomDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(path`/crm/v3/objects/${objectType}/${objectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read an Object identified by `{objectId}`. `{objectId}` refers to the internal
   * object ID by default, or optionally any unique property value as specified by
   * the `idProperty` query param. Control what is returned via the `properties`
   * query param.
   *
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.custom.get('objectId', {
   *     objectType: 'objectType',
   *   });
   * ```
   */
  get(
    objectID: string,
    params: CustomGetParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObjectWithAssociations> {
    const { objectType, ...query } = params;
    return this._client.get(path`/crm/v3/objects/${objectType}/${objectID}`, { query, ...options });
  }

  /**
   * Merge two objects with same type
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.custom.merge('objectType', {
   *     objectIdToMerge: 'objectIdToMerge',
   *     primaryObjectId: 'primaryObjectId',
   *   });
   * ```
   */
  merge(
    objectType: string,
    body: CustomMergeParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post(path`/crm/v3/objects/${objectType}/merge`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.custom.search('objectType', {
   *     after: 'after',
   *     filterGroups: [
   *       {
   *         filters: [
   *           {
   *             operator: 'BETWEEN',
   *             propertyName: 'propertyName',
   *           },
   *         ],
   *       },
   *     ],
   *     limit: 0,
   *     properties: ['string'],
   *     sorts: ['string'],
   *   });
   * ```
   */
  search(
    objectType: string,
    body: CustomSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post(path`/crm/v3/objects/${objectType}/search`, { body, ...options });
  }
}

export interface CustomCreateParams {
  associations: Array<CrmAPI.PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
}

export interface CustomUpdateParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object
   */
  idProperty?: string;
}

export interface CustomListParams extends PageParams {
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

export interface CustomDeleteParams {
  objectType: string;
}

export interface CustomGetParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Query param: A comma separated list of object types to retrieve associated IDs
   * for. If any of the specified associations do not exist, they will be ignored.
   */
  associations?: Array<string>;

  /**
   * Query param: The name of a property whose values are unique for this object
   */
  idProperty?: string;

  /**
   * Query param: A comma separated list of the properties to be returned in the
   * response. If any of the specified properties are not present on the requested
   * object(s), they will be ignored.
   */
  properties?: Array<string>;

  /**
   * Query param: A comma separated list of the properties to be returned along with
   * their history of previous values. If any of the specified properties are not
   * present on the requested object(s), they will be ignored.
   */
  propertiesWithHistory?: Array<string>;
}

export interface CustomMergeParams {
  /**
   * The unique identifier of the CRM object that will be merged into the primary
   * object.
   */
  objectIdToMerge: string;

  /**
   * The unique identifier of the CRM object that will remain after the merge.
   */
  primaryObjectId: string;
}

export interface CustomSearchParams {
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

Custom.Batch = Batch;

export declare namespace Custom {
  export {
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomListParams as CustomListParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
    type CustomMergeParams as CustomMergeParams,
    type CustomSearchParams as CustomSearchParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
