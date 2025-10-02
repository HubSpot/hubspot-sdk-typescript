// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ObjectsAPI from './objects';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Companies extends APIResource {
  /**
   * Create a company
   */
  create(
    body: CompanyCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsCreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies', { body, ...options });
  }

  /**
   * Update a batch of companies
   */
  update(
    body: CompanyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsBatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies/batch/update', { body, ...options });
  }

  /**
   * Retrieve companies
   */
  list(
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsCollectionResponseSimplePublicObjectWithAssociations> {
    return this._client.get('/crm/v3/objects/companies', { query, ...options });
  }

  /**
   * Archive a batch of companies
   */
  delete(body: CompanyDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/objects/companies/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Merge two companies
   */
  merge(
    body: CompanyMergeParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies/merge', { body, ...options });
  }

  /**
   * Retrieve a company
   */
  read(
    companyID: string,
    query: CompanyReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsSimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/companies/${companyID}`, { query, ...options });
  }

  /**
   * Search for companies
   */
  search(
    body: CompanySearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsCollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies/search', { body, ...options });
  }

  /**
   * Create or update a batch of companies by unique property values
   */
  upsert(
    body: CompanyUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsBatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/v3/objects/companies/batch/upsert', { body, ...options });
  }
}

export interface CompanyCreateParams {
  properties: { [key: string]: string };

  associations?: Array<ObjectsAPI.CRMObjectsPublicAssociationsForObject>;
}

export interface CompanyUpdateParams {
  inputs: Array<ObjectsAPI.CRMObjectsSimplePublicObjectBatchInput>;
}

export interface CompanyListParams {
  after?: string;

  archived?: boolean;

  associations?: Array<string>;

  limit?: number;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface CompanyDeleteParams {
  inputs: Array<ObjectsAPI.CRMObjectsSimplePublicObjectID>;
}

export interface CompanyMergeParams {
  objectIdToMerge: string;

  primaryObjectId: string;
}

export interface CompanyReadParams {
  archived?: boolean;

  associations?: Array<string>;

  idProperty?: string;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface CompanySearchParams {
  after?: string;

  filterGroups?: Array<ObjectsAPI.CRMObjectsFilterGroup>;

  limit?: number;

  properties?: Array<string>;

  query?: string;

  sorts?: Array<string>;
}

export interface CompanyUpsertParams {
  inputs: Array<ObjectsAPI.CRMObjectsSimplePublicObjectBatchInputUpsert>;
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
