// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import * as ObjectsAPI from '../objects';
import { SimplePublicObjectWithAssociationsPage } from '../objects';
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

export class Companies extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a single company. Include a `properties` object to define
   * [property values](https://developers.hubspot.com/docs/guides/api/crm/properties)
   * for the company, along with an `associations` array to define
   * [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4)
   * with other CRM records.
   */
  create(body: CompanyCreateParams, options?: RequestOptions): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/companies', { body, ...options });
  }

  /**
   * Update a company by ID (`companyId`) or unique property value (`idProperty`).
   * Provided property values will be overwritten. Read-only and non-existent
   * properties will result in an error. Properties values can be cleared by passing
   * an empty string.
   */
  update(
    companyID: string,
    params: CompanyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/objects/2026-03/companies/${companyID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Retrieve all companies, using query parameters to control the information that
   * gets returned.
   */
  list(
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/2026-03/companies',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Delete a company by ID. Deleted companies can be restored within 90 days of
   * deletion. Learn more about
   * [restoring records](https://knowledge.hubspot.com/records/restore-deleted-records).
   */
  delete(companyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/objects/2026-03/companies/${companyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a company by its ID (`companyId`) or by a unique property
   * (`idProperty`). You can specify what is returned using the `properties` query
   * parameter.
   */
  get(
    companyID: string,
    query: CompanyGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/objects/2026-03/companies/${companyID}`, { query, ...options });
  }

  /**
   * Merge two company records. Learn more about
   * [merging records](https://knowledge.hubspot.com/records/merge-records).
   */
  merge(body: CompanyMergeParams, options?: RequestOptions): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/companies/merge', { body, ...options });
  }

  /**
   * Search for companies by filtering on properties, searching through associations,
   * and sorting results. Learn more about
   * [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).
   */
  search(
    body: CompanySearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/companies/search', { body, ...options });
  }
}

export interface CompanyCreateParams {
  associations: Array<ObjectsAPI.PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
}

export interface CompanyUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object type
   */
  idProperty?: string;
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
   * the maximum number of objects that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface CompanyGetParams {
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

export interface CompanySearchParams {
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

Companies.Batch = Batch;

export declare namespace Companies {
  export {
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyGetParams as CompanyGetParams,
    type CompanyMergeParams as CompanyMergeParams,
    type CompanySearchParams as CompanySearchParams,
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
