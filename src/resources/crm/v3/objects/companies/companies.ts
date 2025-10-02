// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as DailyAPI from '../../../../account-info/v3/api-usage/daily';
import * as BatchAPI from '../../associations/batch';
import * as CompaniesBatchAPI from './batch';
import {
  Batch,
  BatchArchiveParams,
  BatchCreateParams,
  BatchReadParams,
  BatchUpdateParams,
  BatchUpsertParams,
  CRMObjectsBatchInputSimplePublicObjectBatchInput,
  CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate,
  CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert,
  CRMObjectsBatchInputSimplePublicObjectID,
  CRMObjectsBatchReadInputSimplePublicObjectID,
  CRMObjectsBatchResponseSimplePublicObject,
  CRMObjectsBatchResponseSimplePublicUpsertObject,
  CRMObjectsSimplePublicObjectID,
} from './batch';
import * as BatchBatchAPI from '../../../v4/associations/batch/batch';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Companies extends APIResource {
  batch: CompaniesBatchAPI.Batch = new CompaniesBatchAPI.Batch(this._client);

  /**
   * Create a company
   */
  create(
    body: CompanyCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMObjectsCreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies', { body, ...options });
  }

  /**
   * Retrieve a company
   */
  retrieve(
    companyID: string,
    query: CompanyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CRMObjectsSimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/companies/${companyID}`, { query, ...options });
  }

  /**
   * Update a company
   */
  update(
    companyID: string,
    params: CompanyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMObjectsSimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/companies/${companyID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Retrieve companies
   */
  list(
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CRMObjectsCollectionResponseSimplePublicObjectWithAssociations> {
    return this._client.get('/crm/v3/objects/companies', { query, ...options });
  }

  /**
   * Archive a company
   */
  delete(companyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/companies/${companyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Merge two companies
   */
  merge(body: CompanyMergeParams, options?: RequestOptions): APIPromise<CRMObjectsSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies/merge', { body, ...options });
  }

  /**
   * Search for companies
   */
  search(
    body: CompanySearchParams,
    options?: RequestOptions,
  ): APIPromise<CRMObjectsCollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies/search', { body, ...options });
  }
}

export interface CRMObjectsCollectionResponseSimplePublicObjectWithAssociations {
  results: Array<CRMObjectsSimplePublicObjectWithAssociations>;

  paging?: DailyAPI.Paging;
}

export interface CRMObjectsCollectionResponseWithTotalSimplePublicObject {
  results: Array<CRMObjectsSimplePublicObject>;

  total: number;

  paging?: DailyAPI.Paging;
}

export interface CRMObjectsCreatedResponseSimplePublicObject {
  createdResourceId: string;

  entity: CRMObjectsSimplePublicObject;

  location?: string;
}

export interface CRMObjectsPublicAssociationsForObject {
  to: BatchAPI.CRMPublicObjectID;

  types: Array<BatchBatchAPI.AssociationSpec>;
}

export interface CRMObjectsPublicMergeInput {
  objectIdToMerge: string;

  primaryObjectId: string;
}

export interface CRMObjectsPublicObjectSearchRequest {
  after?: string;

  filterGroups?: Array<CRMObjectsPublicObjectSearchRequest.FilterGroup>;

  limit?: number;

  properties?: Array<string>;

  query?: string;

  sorts?: Array<string>;
}

export namespace CRMObjectsPublicObjectSearchRequest {
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

export interface CRMObjectsSimplePublicObject {
  id: string;

  createdAt: string;

  properties: { [key: string]: string | null };

  updatedAt: string;

  archived?: boolean;

  archivedAt?: string;

  objectWriteTraceId?: string;

  propertiesWithHistory?: { [key: string]: Array<CRMObjectsSimplePublicObject.PropertiesWithHistory> };
}

export namespace CRMObjectsSimplePublicObject {
  export interface PropertiesWithHistory {
    sourceType: string;

    timestamp: string;

    value: string;

    sourceId?: string;

    sourceLabel?: string;

    updatedByUserId?: number;
  }
}

export interface CRMObjectsSimplePublicObjectInput {
  properties: { [key: string]: string };
}

export interface CRMObjectsSimplePublicObjectInputForCreate {
  properties: { [key: string]: string };

  associations?: Array<CRMObjectsPublicAssociationsForObject>;
}

export interface CRMObjectsSimplePublicObjectWithAssociations {
  id: string;

  createdAt: string;

  properties: { [key: string]: string | null };

  updatedAt: string;

  archived?: boolean;

  archivedAt?: string;

  associations?: { [key: string]: CRMObjectsSimplePublicObjectWithAssociations.Associations };

  objectWriteTraceId?: string;

  propertiesWithHistory?: {
    [key: string]: Array<CRMObjectsSimplePublicObjectWithAssociations.PropertiesWithHistory>;
  };
}

export namespace CRMObjectsSimplePublicObjectWithAssociations {
  export interface Associations {
    results: Array<Associations.Result>;

    paging?: DailyAPI.Paging;
  }

  export namespace Associations {
    export interface Result {
      id: string;

      type: string;
    }
  }

  export interface PropertiesWithHistory {
    sourceType: string;

    timestamp: string;

    value: string;

    sourceId?: string;

    sourceLabel?: string;

    updatedByUserId?: number;
  }
}

export interface CompanyCreateParams {
  properties: { [key: string]: string };

  associations?: Array<CRMObjectsPublicAssociationsForObject>;
}

export interface CompanyRetrieveParams {
  archived?: boolean;

  associations?: Array<string>;

  idProperty?: string;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface CompanyUpdateParams {
  /**
   * Body param:
   */
  properties: { [key: string]: string };

  /**
   * Query param:
   */
  idProperty?: string;
}

export interface CompanyListParams {
  after?: string;

  archived?: boolean;

  associations?: Array<string>;

  limit?: number;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface CompanyMergeParams {
  objectIdToMerge: string;

  primaryObjectId: string;
}

export interface CompanySearchParams {
  after?: string;

  filterGroups?: Array<CompanySearchParams.FilterGroup>;

  limit?: number;

  properties?: Array<string>;

  query?: string;

  sorts?: Array<string>;
}

export namespace CompanySearchParams {
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

Companies.Batch = Batch;

export declare namespace Companies {
  export {
    type CRMObjectsCollectionResponseSimplePublicObjectWithAssociations as CRMObjectsCollectionResponseSimplePublicObjectWithAssociations,
    type CRMObjectsCollectionResponseWithTotalSimplePublicObject as CRMObjectsCollectionResponseWithTotalSimplePublicObject,
    type CRMObjectsCreatedResponseSimplePublicObject as CRMObjectsCreatedResponseSimplePublicObject,
    type CRMObjectsPublicAssociationsForObject as CRMObjectsPublicAssociationsForObject,
    type CRMObjectsPublicMergeInput as CRMObjectsPublicMergeInput,
    type CRMObjectsPublicObjectSearchRequest as CRMObjectsPublicObjectSearchRequest,
    type CRMObjectsSimplePublicObject as CRMObjectsSimplePublicObject,
    type CRMObjectsSimplePublicObjectInput as CRMObjectsSimplePublicObjectInput,
    type CRMObjectsSimplePublicObjectInputForCreate as CRMObjectsSimplePublicObjectInputForCreate,
    type CRMObjectsSimplePublicObjectWithAssociations as CRMObjectsSimplePublicObjectWithAssociations,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyRetrieveParams as CompanyRetrieveParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyMergeParams as CompanyMergeParams,
    type CompanySearchParams as CompanySearchParams,
  };

  export {
    Batch as Batch,
    type CRMObjectsBatchInputSimplePublicObjectBatchInput as CRMObjectsBatchInputSimplePublicObjectBatchInput,
    type CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate as CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate,
    type CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert as CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert,
    type CRMObjectsBatchInputSimplePublicObjectID as CRMObjectsBatchInputSimplePublicObjectID,
    type CRMObjectsBatchReadInputSimplePublicObjectID as CRMObjectsBatchReadInputSimplePublicObjectID,
    type CRMObjectsBatchResponseSimplePublicObject as CRMObjectsBatchResponseSimplePublicObject,
    type CRMObjectsBatchResponseSimplePublicUpsertObject as CRMObjectsBatchResponseSimplePublicUpsertObject,
    type CRMObjectsSimplePublicObjectID as CRMObjectsSimplePublicObjectID,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchReadParams as BatchReadParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}
