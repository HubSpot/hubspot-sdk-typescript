// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CRMAPI from '../../crm';
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
  ): APIPromise<CRMAPI.BatchResponseSimplePublicObject> {
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
   *       inputs: [{ id: 'id', properties: { foo: 'string' } }],
   *     },
   *   );
   * ```
   */
  batchUpdate(
    body: BatchBatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/partner_clients/batch/update', { body, ...options });
  }
}

export interface BatchBatchGetParams {
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
   * Query param:
   */
  archived?: boolean;

  /**
   * Body param: When using a custom unique value property to retrieve records, the
   * name of the property. Do not include this parameter if retrieving by record ID.
   */
  idProperty?: string;
}

export interface BatchBatchUpdateParams {
  inputs: Array<CRMAPI.SimplePublicObjectBatchInput>;
}

export declare namespace Batch {
  export {
    type BatchBatchGetParams as BatchBatchGetParams,
    type BatchBatchUpdateParams as BatchBatchUpdateParams,
  };
}
