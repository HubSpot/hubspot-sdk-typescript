// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as DealSplitsAPI from './deal-splits';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Batch extends APIResource {
  read(
    body: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<DealSplitsAPI.BatchResponseDealToDealSplits> {
    return this._client.post('/deal-splits/2026-03/batch/read', { body, ...options });
  }

  upsert(
    body: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<DealSplitsAPI.BatchResponseDealToDealSplits> {
    return this._client.post('/deal-splits/2026-03/batch/upsert', { body, ...options });
  }
}

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
