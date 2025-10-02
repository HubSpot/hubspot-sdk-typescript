// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as BatchAPI from '../../associations/batch';
import * as CompaniesAPI from './companies';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create a batch of companies
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMObjectsBatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies/batch/create', { body, ...options });
  }

  /**
   * Update a batch of companies
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMObjectsBatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/companies/batch/update', { body, ...options });
  }

  /**
   * Archive a batch of companies
   */
  archive(body: BatchArchiveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/objects/companies/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a batch of companies
   */
  read(
    params: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<CRMObjectsBatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/v3/objects/companies/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Create or update a batch of companies by unique property values
   */
  upsert(
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<CRMObjectsBatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/v3/objects/companies/batch/upsert', { body, ...options });
  }
}

export interface CRMObjectsBatchInputSimplePublicObjectBatchInput {
  inputs: Array<CRMObjectsBatchInputSimplePublicObjectBatchInput.Input>;
}

export namespace CRMObjectsBatchInputSimplePublicObjectBatchInput {
  export interface Input {
    id: string;

    properties: { [key: string]: string };

    idProperty?: string;

    objectWriteTraceId?: string;
  }
}

export interface CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate {
  inputs: Array<CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate.Input>;
}

export namespace CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate {
  export interface Input {
    properties: { [key: string]: string };

    associations?: Array<CompaniesAPI.CRMObjectsPublicAssociationsForObject>;

    objectWriteTraceId?: string;
  }
}

export interface CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert {
  inputs: Array<CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert.Input>;
}

export namespace CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert {
  export interface Input {
    id: string;

    properties: { [key: string]: string };

    idProperty?: string;

    objectWriteTraceId?: string;
  }
}

export interface CRMObjectsBatchInputSimplePublicObjectID {
  inputs: Array<CRMObjectsSimplePublicObjectID>;
}

export interface CRMObjectsBatchReadInputSimplePublicObjectID {
  inputs: Array<CRMObjectsSimplePublicObjectID>;

  properties: Array<string>;

  propertiesWithHistory: Array<string>;

  idProperty?: string;
}

export interface CRMObjectsBatchResponseSimplePublicObject {
  completedAt: string;

  results: Array<CompaniesAPI.CRMObjectsSimplePublicObject>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMObjectsBatchResponseSimplePublicUpsertObject {
  completedAt: string;

  results: Array<CRMObjectsBatchResponseSimplePublicUpsertObject.Result>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export namespace CRMObjectsBatchResponseSimplePublicUpsertObject {
  export interface Result {
    id: string;

    createdAt: string;

    new: boolean;

    properties: { [key: string]: string };

    updatedAt: string;

    archived?: boolean;

    archivedAt?: string;

    objectWriteTraceId?: string;

    propertiesWithHistory?: { [key: string]: Array<Result.PropertiesWithHistory> };
  }

  export namespace Result {
    export interface PropertiesWithHistory {
      sourceType: string;

      timestamp: string;

      value: string;

      sourceId?: string;

      sourceLabel?: string;

      updatedByUserId?: number;
    }
  }
}

export interface CRMObjectsSimplePublicObjectID {
  id: string;
}

export interface BatchCreateParams {
  inputs: Array<BatchCreateParams.Input>;
}

export namespace BatchCreateParams {
  export interface Input {
    properties: { [key: string]: string };

    associations?: Array<CompaniesAPI.CRMObjectsPublicAssociationsForObject>;

    objectWriteTraceId?: string;
  }
}

export interface BatchUpdateParams {
  inputs: Array<BatchUpdateParams.Input>;
}

export namespace BatchUpdateParams {
  export interface Input {
    id: string;

    properties: { [key: string]: string };

    idProperty?: string;

    objectWriteTraceId?: string;
  }
}

export interface BatchArchiveParams {
  inputs: Array<CRMObjectsSimplePublicObjectID>;
}

export interface BatchReadParams {
  /**
   * Body param:
   */
  inputs: Array<CRMObjectsSimplePublicObjectID>;

  /**
   * Body param:
   */
  properties: Array<string>;

  /**
   * Body param:
   */
  propertiesWithHistory: Array<string>;

  /**
   * Query param:
   */
  archived?: boolean;

  /**
   * Body param:
   */
  idProperty?: string;
}

export interface BatchUpsertParams {
  inputs: Array<BatchUpsertParams.Input>;
}

export namespace BatchUpsertParams {
  export interface Input {
    id: string;

    properties: { [key: string]: string };

    idProperty?: string;

    objectWriteTraceId?: string;
  }
}

export declare namespace Batch {
  export {
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
