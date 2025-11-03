// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Create a batch of objects
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.custom.batch.create(
   *     'objectType',
   *     { inputs: [{ properties: { foo: 'string' } }] },
   *   );
   * ```
   */
  create(
    objectType: string,
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    return this._client.post(path`/crm/v3/objects/${objectType}/batch/create`, { body, ...options });
  }

  /**
   * Update a batch of objects by internal ID, or unique property values
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.custom.batch.update(
   *     'objectType',
   *     {
   *       inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *     },
   *   );
   * ```
   */
  update(
    objectType: string,
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    return this._client.post(path`/crm/v3/objects/${objectType}/batch/update`, { body, ...options });
  }

  /**
   * Archive a batch of objects by ID
   *
   * @example
   * ```ts
   * await client.crm.objects.custom.batch.delete('objectType', {
   *   inputs: [{ id: 'id' }],
   * });
   * ```
   */
  delete(objectType: string, body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/crm/v3/objects/${objectType}/batch/archive`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve records by record ID or include the `idProperty` parameter to retrieve
   * records by a custom unique value property.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.custom.batch.get('objectType', {
   *     inputs: [{ id: 'id' }],
   *     properties: ['string'],
   *     propertiesWithHistory: ['string'],
   *   });
   * ```
   */
  get(
    objectType: string,
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post(path`/crm/v3/objects/${objectType}/batch/read`, {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Create or update records identified by a unique property value as specified by
   * the `idProperty` query param. `idProperty` query param refers to a property
   * whose values are unique for the object.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicUpsertObject =
   *   await client.crm.objects.custom.batch.upsert(
   *     'objectType',
   *     {
   *       inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *     },
   *   );
   * ```
   */
  upsert(
    objectType: string,
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post(path`/crm/v3/objects/${objectType}/batch/upsert`, { body, ...options });
  }
}

export interface BatchCreateParams {
  inputs: Array<CrmAPI.SimplePublicObjectBatchInputForCreate>;
}

export interface BatchUpdateParams {
  inputs: Array<CrmAPI.SimplePublicObjectBatchInput>;
}

export interface BatchDeleteParams {
  inputs: Array<CrmAPI.SimplePublicObjectID>;
}

export interface BatchGetParams {
  /**
   * Body param:
   */
  inputs: Array<CrmAPI.SimplePublicObjectID>;

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

export interface BatchUpsertParams {
  inputs: Array<CrmAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}
