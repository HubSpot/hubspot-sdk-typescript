// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CrmAPI from '../crm';
import * as ObjectsAPI from './objects';
import { SimplePublicObjectWithAssociationsPage } from './objects';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Custom extends APIResource {
  /**
   * Create a batch of objects
   */
  create(
    objectType: string,
    body: CustomCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/batch/create`, { body, ...options });
  }

  /**
   * Update a batch of objects by internal ID, or unique property values
   */
  update(
    objectType: string,
    body: CustomUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/batch/update`, { body, ...options });
  }

  /**
   * Read a page of objects. Control what is returned via the `properties` query
   * param.
   */
  list(
    objectType: string,
    query: CustomListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      path`/crm/objects/2026-03/${objectType}`,
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Archive a batch of objects by ID
   */
  delete(objectType: string, body: CustomDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/batch/archive`, {
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
    objectType: string,
    params: CustomGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post(path`/crm/objects/2026-03/${objectType}/batch/read`, {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Merge two CRM objects of the same type by specifying one as the primary object
   * and the other as the object to be merged into it.
   */
  merge(
    objectType: string,
    body: CustomMergeParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/merge`, { body, ...options });
  }

  search(
    objectType: string,
    body: CustomSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/search`, { body, ...options });
  }

  /**
   * Create or update records identified by a unique property value as specified by
   * the `idProperty` query param. `idProperty` query param refers to a property
   * whose values are unique for the object.
   */
  upsert(
    objectType: string,
    body: CustomUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/batch/upsert`, { body, ...options });
  }
}

export interface CustomCreateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputForCreate>;
}

export interface CustomUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
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
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;
}

export interface CustomGetParams {
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

export interface CustomMergeParams {
  /**
   * The ID of the company to merge into the primary.
   */
  objectIdToMerge: string;

  /**
   * The ID of the primary company, which the other will merge into.
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

export interface CustomUpsertParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace Custom {
  export {
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomListParams as CustomListParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
    type CustomMergeParams as CustomMergeParams,
    type CustomSearchParams as CustomSearchParams,
    type CustomUpsertParams as CustomUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
