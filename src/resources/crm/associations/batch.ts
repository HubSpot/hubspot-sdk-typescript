// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AssociationsAPI from './associations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * @example
   * ```ts
   * const batchResponsePublicAssociation =
   *   await client.crm.associations.batch.create(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       inputs: [
   *         {
   *           from: { id: '53628' },
   *           to: { id: '12726' },
   *           type: 'contact_to_company',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    toObjectType: string,
    params: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsAPI.BatchResponsePublicAssociation> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * await client.crm.associations.batch.delete('toObjectType', {
   *   fromObjectType: 'fromObjectType',
   *   inputs: [
   *     {
   *       from: { id: '53628' },
   *       to: { id: '12726' },
   *       type: 'contact_to_company',
   *     },
   *   ],
   * });
   * ```
   */
  delete(toObjectType: string, params: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/archive`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * const batchResponsePublicAssociationMulti =
   *   await client.crm.associations.batch.get('toObjectType', {
   *     fromObjectType: 'fromObjectType',
   *     inputs: [{ id: 'id' }],
   *   });
   * ```
   */
  get(
    toObjectType: string,
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsAPI.BatchResponsePublicAssociationMulti> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/read`, {
      body,
      ...options,
    });
  }
}

export interface BatchCreateParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<AssociationsAPI.PublicAssociation>;
}

export interface BatchDeleteParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<AssociationsAPI.PublicAssociation>;
}

export interface BatchGetParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<Shared.PublicObjectID>;
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };
}
