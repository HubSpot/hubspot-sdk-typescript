// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CrmAPI from '../crm';
import * as ObjectsAPI from './objects';
import { SimplePublicObjectWithAssociationsPage } from './objects';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class PostalMail extends APIResource {
  /**
   * Create a batch of postal mail objects.
   */
  create(
    body: PostalMailCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/postal_mail/batch/create', { body, ...options });
  }

  /**
   * Update multiple postal mail objects in a single request.
   */
  update(
    body: PostalMailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/postal_mail/batch/update', { body, ...options });
  }

  list(
    query: PostalMailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/2026-03/postal_mail',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Archive a batch of postal mail objects using their IDs.
   */
  delete(body: PostalMailDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/objects/2026-03/postal_mail/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve multiple postal mail objects using their internal IDs or unique
   * property values.
   */
  get(
    params: PostalMailGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/objects/2026-03/postal_mail/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Search for postal mail objects using specific criteria in the request.
   */
  search(
    body: PostalMailSearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/postal_mail/search', { body, ...options });
  }

  /**
   * Create or update postal mails identified by a unique property value as specified
   * by the `idProperty` query param. `idProperty` query param refers to a property
   * whose values are unique for the object.
   */
  upsert(
    body: PostalMailUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/objects/2026-03/postal_mail/batch/upsert', { body, ...options });
  }
}

export interface PostalMailCreateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputForCreate>;
}

export interface PostalMailUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface PostalMailListParams extends PageParams {
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

export interface PostalMailDeleteParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;
}

export interface PostalMailGetParams {
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

export interface PostalMailSearchParams {
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

export interface PostalMailUpsertParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace PostalMail {
  export {
    type PostalMailCreateParams as PostalMailCreateParams,
    type PostalMailUpdateParams as PostalMailUpdateParams,
    type PostalMailListParams as PostalMailListParams,
    type PostalMailDeleteParams as PostalMailDeleteParams,
    type PostalMailGetParams as PostalMailGetParams,
    type PostalMailSearchParams as PostalMailSearchParams,
    type PostalMailUpsertParams as PostalMailUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
