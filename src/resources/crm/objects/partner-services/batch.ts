// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Update a batch of partner services by internal ID, or unique property values
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.partnerServices.batch.update({
   *     inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *   });
   * ```
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/partner_services/batch/update', { body, ...options });
  }

  /**
   * Retrieve records by record ID or include the `idProperty` parameter to retrieve
   * records by a custom unique value property.
   *
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.partnerServices.batch.get({
   *     inputs: [{ id: 'id' }],
   *     properties: ['string'],
   *     propertiesWithHistory: ['string'],
   *   });
   * ```
   */
  get(params: BatchGetParams, options?: RequestOptions): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/v3/objects/partner_services/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }
}

export interface BatchUpdateParams {
  inputs: Array<CrmAPI.SimplePublicObjectBatchInput>;
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
   * Body param: A unique property used to identify objects instead of the default
   * ID.
   */
  idProperty?: string;
}

export declare namespace Batch {
  export { type BatchUpdateParams as BatchUpdateParams, type BatchGetParams as BatchGetParams };
}
