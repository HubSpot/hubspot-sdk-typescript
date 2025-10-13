// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ObjectsAPI from './objects';
import { SimplePublicObjectWithAssociationsPage } from './objects';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Companies extends APIResource {
  /**
   * Create a single company. Include a `properties` object to define
   * [property values](https://developers.hubspot.com/docs/guides/api/crm/properties)
   * for the company, along with an `associations` array to define
   * [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4)
   * with other CRM records.
   *
   * @example
   * ```ts
   * const createdResponseSimplePublicObject =
   *   await client.crm.objects.companies.create({
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  create(
    body: CompanyCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies', { body, ...options });
  }

  /**
   * Update a batch of companies by ID.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.companies.update({
   *     inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *   });
   * ```
   */
  update(
    body: CompanyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies/batch/update', { body, ...options });
  }

  /**
   * Retrieve all companies, using query parameters to control the information that
   * gets returned.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.companies.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/v3/objects/companies',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Delete a batch of companies by ID. Deleted companies can be restored within 90
   * days of deletion. Learn more about
   * [restoring records](https://knowledge.hubspot.com/records/restore-deleted-records).
   *
   * @example
   * ```ts
   * await client.crm.objects.companies.delete({
   *   inputs: [{ id: 'id' }],
   * });
   * ```
   */
  delete(body: CompanyDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/objects/companies/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Merge two company records. Learn more about
   * [merging records](https://knowledge.hubspot.com/records/merge-records).
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.companies.merge({
   *     objectIdToMerge: 'objectIdToMerge',
   *     primaryObjectId: 'primaryObjectId',
   *   });
   * ```
   */
  merge(body: CompanyMergeParams, options?: RequestOptions): APIPromise<ObjectsAPI.SimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies/merge', { body, ...options });
  }

  /**
   * Retrieve a company by its ID (`companyId`) or by a unique property
   * (`idProperty`). You can specify what is returned using the `properties` query
   * parameter.
   *
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.companies.read('companyId');
   * ```
   */
  read(
    companyID: string,
    query: CompanyReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/companies/${companyID}`, { query, ...options });
  }

  /**
   * Search for companies by filtering on properties, searching through associations,
   * and sorting results. Learn more about
   * [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.companies.search();
   * ```
   */
  search(
    body: CompanySearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies/search', { body, ...options });
  }

  /**
   * Create or update companies identified by a unique property value as specified by
   * the `idProperty` query parameter. `idProperty` query param refers to a property
   * whose values are unique for the object.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicUpsertObject =
   *   await client.crm.objects.companies.upsert({
   *     inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *   });
   * ```
   */
  upsert(
    body: CompanyUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/v3/objects/companies/batch/upsert', { body, ...options });
  }
}

export interface CompanyCreateParams {
  /**
   * The company property values to set.
   */
  properties: { [key: string]: string };

  associations?: Array<ObjectsAPI.PublicAssociationsForObject>;
}

export interface CompanyUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface CompanyListParams extends PageParams {
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
   * the maximum number of companies that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface CompanyDeleteParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;
}

export interface CompanyMergeParams {
  /**
   * The ID of the company to merge into the primary.
   */
  objectIdToMerge: string;

  /**
   * The ID of the primary company, which the other will merge into.
   */
  primaryObjectId: string;
}

export interface CompanyReadParams {
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
   * The name of a property whose values are unique for this object
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

export interface CompanySearchParams {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after?: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups?: Array<ObjectsAPI.FilterGroup>;

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

export interface CompanyUpsertParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace Companies {
  export {
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyDeleteParams as CompanyDeleteParams,
    type CompanyMergeParams as CompanyMergeParams,
    type CompanyReadParams as CompanyReadParams,
    type CompanySearchParams as CompanySearchParams,
    type CompanyUpsertParams as CompanyUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
