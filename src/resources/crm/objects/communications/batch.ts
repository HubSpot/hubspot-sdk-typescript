// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CRMAPI from '../../crm';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create a batch of messages. The `inputs` array can contain a `properties` object
   * to define property values for each message, along with an `associations` array
   * to define
   * [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4)
   * with other CRM records.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.communications.batch.create({
   *     inputs: [{ properties: { foo: 'string' } }],
   *   });
   * ```
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/communications/batch/create', { body, ...options });
  }

  /**
   * Update a batch of messages by ID (`communicationId`) or unique property value
   * (`idProperty`). Provided property values will be overwritten. Read-only and
   * non-existent properties will result in an error. Properties values can be
   * cleared by passing an empty string.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.communications.batch.update({
   *     inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *   });
   * ```
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/communications/batch/update', { body, ...options });
  }

  /**
   * Delete a batch of messages by ID. A deleted message can be restored within 90
   * days of being deleted. Learn more about
   * [restoring activity records](https://knowledge.hubspot.com/records/restore-deleted-activity-in-a-record).
   *
   * @example
   * ```ts
   * await client.crm.objects.communications.batch.delete({
   *   inputs: [{ id: 'id' }],
   * });
   * ```
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/objects/communications/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a batch of messages by ID (`communicationId`) or unique property value
   * (`idProperty`).
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.communications.batch.get({
   *     inputs: [{ id: 'id' }],
   *     properties: ['string'],
   *     propertiesWithHistory: ['string'],
   *   });
   * ```
   */
  get(params: BatchGetParams, options?: RequestOptions): APIPromise<CRMAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/v3/objects/communications/batch/read', {
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
   *   await client.crm.objects.communications.batch.upsert({
   *     inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *   });
   * ```
   */
  upsert(
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/v3/objects/communications/batch/upsert', { body, ...options });
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
