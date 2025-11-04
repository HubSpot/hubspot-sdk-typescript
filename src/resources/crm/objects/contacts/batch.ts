// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create a batch of contacts. The `inputs` array can contain a `properties` object
   * to define property values for each record, along with an `associations` array to
   * define
   * [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4)
   * with other CRM records.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.contacts.batch.create({
   *     inputs: [{ properties: { foo: 'string' } }],
   *   });
   * ```
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contacts/batch/create', { body, ...options });
  }

  /**
   * Update a batch of contacts by ID (`contactId`) or unique property value
   * (`idProperty`). Provided property values will be overwritten. Read-only and
   * non-existent properties will result in an error. Properties values can be
   * cleared by passing an empty string.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.contacts.batch.update({
   *     inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *   });
   * ```
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contacts/batch/update', { body, ...options });
  }

  /**
   * Archive a batch of contacts by ID. Archived contacts can be restored within 90
   * days of deletion. Learn more about the
   * [data impacted by contact deletions](https://knowledge.hubspot.com/privacy-and-consent/understand-restorable-and-permanent-contact-deletions)
   * and how to
   * [restore archived records](https://knowledge.hubspot.com/records/restore-deleted-records).
   *
   * @example
   * ```ts
   * await client.crm.objects.contacts.batch.delete({
   *   inputs: [{ id: 'id' }],
   * });
   * ```
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/objects/contacts/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a batch of contacts by ID (`contactId`) or unique property value
   * (`idProperty`).
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.contacts.batch.get({
   *     inputs: [{ id: 'id' }],
   *     properties: ['string'],
   *     propertiesWithHistory: ['string'],
   *   });
   * ```
   */
  get(params: BatchGetParams, options?: RequestOptions): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/v3/objects/contacts/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Upsert a batch of contacts. The `inputs` array can contain a `properties` object
   * to define property values for each record.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicUpsertObject =
   *   await client.crm.objects.contacts.batch.upsert({
   *     inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *   });
   * ```
   */
  upsert(
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/v3/objects/contacts/batch/upsert', { body, ...options });
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
   * Body param:
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
