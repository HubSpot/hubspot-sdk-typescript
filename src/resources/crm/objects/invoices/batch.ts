// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CRMAPI from '../../crm';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create a batch of invoices
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.invoices.batch.create({
   *     inputs: [{ properties: { foo: 'string' } }],
   *   });
   * ```
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/invoices/batch/create', { body, ...options });
  }

  /**
   * Update a batch of invoices by internal ID, or unique property values
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.invoices.batch.update({
   *     inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *   });
   * ```
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/invoices/batch/update', { body, ...options });
  }

  /**
   * Archive a batch of invoices by ID
   *
   * @example
   * ```ts
   * await client.crm.objects.invoices.batch.delete({
   *   inputs: [{ id: 'id' }],
   * });
   * ```
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/objects/invoices/batch/archive', {
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
   *   await client.crm.objects.invoices.batch.get({
   *     inputs: [{ id: 'id' }],
   *     properties: ['string'],
   *     propertiesWithHistory: ['string'],
   *   });
   * ```
   */
  get(params: BatchGetParams, options?: RequestOptions): APIPromise<CRMAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/v3/objects/invoices/batch/read', {
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
   *   await client.crm.objects.invoices.batch.upsert({
   *     inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *   });
   * ```
   */
  upsert(
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/v3/objects/invoices/batch/upsert', { body, ...options });
  }
}

export interface BatchCreateParams {
  inputs: Array<CRMAPI.SimplePublicObjectBatchInputForCreate>;
}

export interface BatchUpdateParams {
  inputs: Array<CRMAPI.SimplePublicObjectBatchInput>;
}

export interface BatchDeleteParams {
  inputs: Array<CRMAPI.SimplePublicObjectID>;
}

export interface BatchGetParams {
  /**
   * Body param:
   */
  inputs: Array<CRMAPI.SimplePublicObjectID>;

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
  inputs: Array<CRMAPI.SimplePublicObjectBatchInputUpsert>;
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
