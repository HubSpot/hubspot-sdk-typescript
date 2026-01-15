// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.partnerClients.batch.batchGet({
   *     inputs: [{ id: 'id' }],
   *     properties: ['string'],
   *     propertiesWithHistory: ['string'],
   *   });
   * ```
   */
  batchGet(
    params: BatchBatchGetParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/v3/objects/partner_clients/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * const batchResponseSimplePublicObject =
   *   await client.crm.objects.partnerClients.batch.batchUpdate(
   *     {
   *       inputs: [
   *         {
   *           id: 'id',
   *           properties: { foo: 'string' },
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  batchUpdate(
    body: BatchBatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/partner_clients/batch/update', { body, ...options });
  }
}

export interface BatchBatchGetParams {
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

export interface BatchBatchUpdateParams {
  inputs: Array<CrmAPI.SimplePublicObjectBatchInput>;
}

export declare namespace Batch {
  export {
    type BatchBatchGetParams as BatchBatchGetParams,
    type BatchBatchUpdateParams as BatchBatchUpdateParams,
  };
}
