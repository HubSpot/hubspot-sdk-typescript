// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as DealSplitsAPI from './deal-splits';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['crm', 'dealSplits', 'batch'] = Object.freeze([
    'crm',
    'dealSplits',
    'batch',
  ] as const);

  /**
   * Read a batch of deal split objects by their associated deal object internal ID
   */
  read(
    body: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<DealSplitsAPI.BatchResponseDealToDealSplits> {
    return this._client.post('/deal-splits/2026-03/batch/read', { body, ...options });
  }

  /**
   * Create or replace deal splits for deals with the provided IDs. Deal split
   * percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal
   * places
   */
  upsert(
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<DealSplitsAPI.BatchResponseDealToDealSplits> {
    return this._client.post('/deal-splits/2026-03/batch/upsert', { body, ...options });
  }
}
export class Batch extends BaseBatch {}

export interface BatchReadParams {
  /**
   * An array of deal split inputs
   */
  inputs: Array<Shared.PublicObjectID>;
}

export interface BatchUpsertParams {
  /**
   * An array of deal split inputs
   */
  inputs: Array<DealSplitsAPI.PublicDealSplitsCreateRequest>;
}

export declare namespace Batch {
  export { type BatchReadParams as BatchReadParams, type BatchUpsertParams as BatchUpsertParams };
}
