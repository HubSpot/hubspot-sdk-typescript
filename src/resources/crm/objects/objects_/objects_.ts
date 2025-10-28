// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CRMAPI from '../../crm';
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

export class Objects extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a CRM object with the given properties and return a copy of the object,
   * including the ID. Documentation and examples for creating standard objects is
   * provided.
   *
   * @example
   * ```ts
   * const createdResponseSimplePublicObject =
   *   await client.crm.objects.objects.create('objectType', {
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  create(
    objectType: string,
    body: ObjectCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CreatedResponseSimplePublicObject> {
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
   *   await client.crm.objects.objects.update('objectId', {
   *     objectType: 'objectType',
   *     properties: {
   *       property_checkbox: 'false',
   *       property_date: '1572480000000',
   *       property_dropdown: 'choice_b',
   *       property_multiple_checkboxes: 'chocolate;strawberry',
   *       property_number: '17',
   *       property_radio: 'option_1',
   *       property_string: 'value',
   *     },
   *   });
   * ```
   */
  update(
    objectID: string,
    params: ObjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.SimplePublicObject> {
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
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.objects.list(
   *   'objectType',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    objectType: string,
    query: ObjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, CRMAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      path`/crm/v3/objects/${objectType}`,
      Page<CRMAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Move an Object identified by `{objectId}` to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.objects.objects.delete('objectId', {
   *   objectType: 'objectType',
   * });
   * ```
   */
  delete(objectID: string, params: ObjectDeleteParams, options?: RequestOptions): APIPromise<void> {
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
   *   await client.crm.objects.objects.get('objectId', {
   *     objectType: 'objectType',
   *   });
   * ```
   */
  get(
    objectID: string,
    params: ObjectGetParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.SimplePublicObjectWithAssociations> {
    const { objectType, ...query } = params;
    return this._client.get(path`/crm/v3/objects/${objectType}/${objectID}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.objects.search('objectType');
   * ```
   */
  search(
    objectType: string,
    body: ObjectSearchParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post(path`/crm/v3/objects/${objectType}/search`, { body, ...options });
  }
}

export interface ObjectCreateParams {
  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };

  associations?: Array<CRMAPI.PublicAssociationsForObject>;
}

export interface ObjectUpdateParams {
  /**
   * Path param:
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

export interface ObjectListParams extends PageParams {
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

export interface ObjectDeleteParams {
  objectType: string;
}

export interface ObjectGetParams {
  /**
   * Path param:
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

export interface ObjectSearchParams {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after?: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups?: Array<CRMAPI.FilterGroup>;

  /**
   * The maximum results to return, up to 200 objects.
   */
  limit?: number;

  /**
   * A list of property names to include in the response.
   */
  properties?: Array<string>;

  /**
   * The search query string, up to 3000 characters.
   */
  query?: string;

  /**
   * Specifies sorting order based on object properties.
   */
  sorts?: Array<string>;
}

Objects.Batch = Batch;

export declare namespace Objects {
  export {
    type ObjectCreateParams as ObjectCreateParams,
    type ObjectUpdateParams as ObjectUpdateParams,
    type ObjectListParams as ObjectListParams,
    type ObjectDeleteParams as ObjectDeleteParams,
    type ObjectGetParams as ObjectGetParams,
    type ObjectSearchParams as ObjectSearchParams,
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
