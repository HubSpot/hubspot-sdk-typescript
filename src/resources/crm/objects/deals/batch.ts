// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create a batch of deals
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3/batch/create', { body, ...options });
  }

  /**
   * Update a batch of deals by internal ID, or unique property values
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3/batch/update', { body, ...options });
  }

  /**
   * Archive a batch of deals by ID
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
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
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/v3/objects/0-3/batch/read', { query: { archived }, body, ...options });
  }

  /**
   * Create or update a batch of deals by unique property values
   */
  upsert(
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/v3/objects/0-3/batch/upsert', { body, ...options });
  }
}

export interface BatchCreateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputForCreate>;
}

export interface BatchUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface BatchDeleteParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;
}

export interface BatchReadParams {
  /**
   * Body param:
   */
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;

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
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchReadParams as BatchReadParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}
