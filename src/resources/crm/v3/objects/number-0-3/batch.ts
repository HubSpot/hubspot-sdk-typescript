// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as BatchAPI from '../companies/batch';
import * as CompaniesAPI from '../companies/companies';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create a batch of deals
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<BatchAPI.CRMObjectsBatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3/batch/create', { body, ...options });
  }

  /**
   * Update a batch of deals by internal ID, or unique property values
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BatchAPI.CRMObjectsBatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3/batch/update', { body, ...options });
  }

  /**
   * Archive a batch of deals by ID
   */
  archive(body: BatchArchiveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/objects/0-3/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a batch of deals by internal ID, or unique property values
   */
  read(
    params: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<BatchAPI.CRMObjectsBatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/v3/objects/0-3/batch/read', { query: { archived }, body, ...options });
  }

  /**
   * Create or update a batch of deals by unique property values
   */
  upsert(
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<BatchAPI.CRMObjectsBatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/v3/objects/0-3/batch/upsert', { body, ...options });
  }
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
  inputs: Array<BatchAPI.CRMObjectsSimplePublicObjectID>;
}

export interface BatchReadParams {
  /**
   * Body param:
   */
  inputs: Array<BatchAPI.CRMObjectsSimplePublicObjectID>;

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
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchReadParams as BatchReadParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}
