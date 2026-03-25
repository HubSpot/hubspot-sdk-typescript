// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create a batch of payments The `inputs` array can contain a `properties` object
   * to define property values for the record, along with an `associations` array to
   * define
   * [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4)
   * with other CRM records.
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/commerce_payments/batch/create', { body, ...options });
  }

  /**
   * Update a batch of payments by ID (`objectId`) or unique property value
   * (`idProperty`). Provided property values will be overwritten. Read-only and
   * non-existent properties will result in an error. Properties values can be
   * cleared by passing an empty string.
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/commerce_payments/batch/update', { body, ...options });
  }

  /**
   * Delete a batch of payments by ID.
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/objects/2026-03/commerce_payments/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a batch of payments by ID (`objectId`) or unique property value
   * (`idProperty`).
   */
  get(
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/objects/2026-03/commerce_payments/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Create and update a batch of payments by a unique property. Payments that don't
   * exist will be created, while existing payments will be updated.
   */
  upsert(
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/objects/2026-03/commerce_payments/batch/upsert', { body, ...options });
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

export interface BatchGetParams {
  /**
   * Body param
   */
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;

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
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
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
