// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create multiple projects in a single request.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.projects.batch.create({
   *     inputs: [
   *       {
   *         associations: [
   *           {
   *             to: { id: '37295' },
   *             types: [
   *               {
   *                 associationCategory: 'HUBSPOT_DEFINED',
   *                 associationTypeId: 0,
   *               },
   *             ],
   *           },
   *         ],
   *         properties: { foo: 'string' },
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/v3/projects/batch/create', { body, ...options });
  }

  /**
   * Update multiple projects using their internal IDs or unique property values.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.projects.batch.update({
   *     inputs: [
   *       {
   *         id: 'id',
   *         properties: { foo: 'string' },
   *       },
   *     ],
   *   });
   * ```
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/v3/projects/batch/update', { body, ...options });
  }

  /**
   * Archive multiple projects using their IDs.
   *
   * @example
   * ```ts
   * await client.crm.objects.projects.batch.delete({
   *   inputs: [{ id: 'id' }],
   * });
   * ```
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/objects/v3/projects/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve records by record ID or include the idProperty parameter to retrieve
   * records by a custom unique value property.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.projects.batch.get({
   *     inputs: [{ id: 'id' }],
   *     properties: ['string'],
   *     propertiesWithHistory: ['string'],
   *   });
   * ```
   */
  get(params: BatchGetParams, options?: RequestOptions): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/objects/v3/projects/batch/read', {
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
   *   await client.crm.objects.projects.batch.upsert({
   *     inputs: [
   *       {
   *         id: 'id',
   *         properties: { foo: 'string' },
   *       },
   *     ],
   *   });
   * ```
   */
  upsert(
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/objects/v3/projects/batch/upsert', { body, ...options });
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
   * Body param
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
   * Query param
   */
  archived?: boolean;

  /**
   * Body param: A unique property used to identify objects instead of the default
   * ID.
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
