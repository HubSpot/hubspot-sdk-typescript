// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as CompaniesAPI from '../companies/companies';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchArchiveParams,
  BatchCreateParams,
  BatchReadParams,
  BatchUpdateParams,
  BatchUpsertParams,
} from './batch';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Number0_3 extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Read
   */
  retrieve(
    dealID: string,
    query: Number0_3RetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsSimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/0-3/${dealID}`, { query, ...options });
  }

  /**
   * Update
   */
  update(
    dealID: string,
    params: Number0_3UpdateParams,
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsSimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/0-3/${dealID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Archive
   */
  delete(dealID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/0-3/${dealID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create
   */
  _0_3(
    body: Number0_3_0_3Params,
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsCreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3', { body, ...options });
  }

  /**
   * Merge two deals with same type
   */
  merge(
    body: Number0_3MergeParams,
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3/merge', { body, ...options });
  }

  /**
   * List
   */
  retrieve0_3(
    query: Number0_3Retrieve0_3Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsCollectionResponseSimplePublicObjectWithAssociations> {
    return this._client.get('/crm/v3/objects/0-3', { query, ...options });
  }

  search(
    body: Number0_3SearchParams,
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsCollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3/search', { body, ...options });
  }
}

export interface Number0_3RetrieveParams {
  archived?: boolean;

  associations?: Array<string>;

  idProperty?: string;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface Number0_3UpdateParams {
  /**
   * Body param:
   */
  properties: { [key: string]: string };

  /**
   * Query param:
   */
  idProperty?: string;
}

export interface Number0_3_0_3Params {
  properties: { [key: string]: string };

  associations?: Array<CompaniesAPI.CRMObjectsPublicAssociationsForObject>;
}

export interface Number0_3MergeParams {
  objectIdToMerge: string;

  primaryObjectId: string;
}

export interface Number0_3Retrieve0_3Params {
  after?: string;

  archived?: boolean;

  associations?: Array<string>;

  limit?: number;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface Number0_3SearchParams {
  after?: string;

  filterGroups?: Array<Number0_3SearchParams.FilterGroup>;

  limit?: number;

  properties?: Array<string>;

  query?: string;

  sorts?: Array<string>;
}

export namespace Number0_3SearchParams {
  export interface FilterGroup {
    filters: Array<FilterGroup.Filter>;
  }

  export namespace FilterGroup {
    export interface Filter {
      operator:
        | 'EQ'
        | 'NEQ'
        | 'LT'
        | 'LTE'
        | 'GT'
        | 'GTE'
        | 'BETWEEN'
        | 'IN'
        | 'NOT_IN'
        | 'HAS_PROPERTY'
        | 'NOT_HAS_PROPERTY'
        | 'CONTAINS_TOKEN'
        | 'NOT_CONTAINS_TOKEN';

      propertyName: string;

      highValue?: string;

      value?: string;

      values?: Array<string>;
    }
  }
}

Number0_3.Batch = Batch;

export declare namespace Number0_3 {
  export {
    type Number0_3RetrieveParams as Number0_3RetrieveParams,
    type Number0_3UpdateParams as Number0_3UpdateParams,
    type Number0_3_0_3Params as Number0_3_0_3Params,
    type Number0_3MergeParams as Number0_3MergeParams,
    type Number0_3Retrieve0_3Params as Number0_3Retrieve0_3Params,
    type Number0_3SearchParams as Number0_3SearchParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchReadParams as BatchReadParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}
