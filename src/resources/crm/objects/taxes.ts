// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CrmAPI from '../crm';
import * as ObjectsAPI from './objects';
import { SimplePublicObjectWithAssociationsPage } from './objects';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Taxes extends APIResource {
  /**
   * Create multiple tax records in a single request, each with specified properties
   * and optional associations, and receive a response with details of the created
   * objects.
   */
  create(
    body: TaxCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/taxes/batch/create', { body, ...options });
  }

  /**
   * Update multiple tax records using their internal IDs or unique property values.
   * This operation allows for batch processing of updates to tax objects, ensuring
   * efficient management of tax data in bulk.
   */
  update(
    body: TaxUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/taxes/batch/update', { body, ...options });
  }

  /**
   * Read a page of taxes. Control what is returned via the `properties` query param.
   */
  list(
    query: TaxListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/2026-03/taxes',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Archive multiple taxes by their IDs in a single request.
   */
  delete(body: TaxDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/objects/2026-03/taxes/batch/archive', {
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
    params: TaxGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/objects/2026-03/taxes/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Execute a search for tax objects based on defined filters, sorting options, and
   * properties to be included in the response. This allows for customized retrieval
   * of tax data according to specific search parameters.
   */
  search(
    body: TaxSearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/taxes/search', { body, ...options });
  }

  /**
   * Create or update records identified by a unique property value as specified by
   * the `idProperty` query param. `idProperty` query param refers to a property
   * whose values are unique for the object.
   */
  upsert(
    body: TaxUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/objects/2026-03/taxes/batch/upsert', { body, ...options });
  }
}

export interface TaxCreateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputForCreate>;
}

export interface TaxUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface TaxListParams extends PageParams {
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

export interface TaxDeleteParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;
}

export interface TaxGetParams {
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

export interface TaxSearchParams {
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

export interface TaxUpsertParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace Taxes {
  export {
    type TaxCreateParams as TaxCreateParams,
    type TaxUpdateParams as TaxUpdateParams,
    type TaxListParams as TaxListParams,
    type TaxDeleteParams as TaxDeleteParams,
    type TaxGetParams as TaxGetParams,
    type TaxSearchParams as TaxSearchParams,
    type TaxUpsertParams as TaxUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
