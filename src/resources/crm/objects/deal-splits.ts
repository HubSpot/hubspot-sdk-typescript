// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../crm';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class DealSplits extends APIResource {
  /**
   * Read a batch of deal split objects by their associated deal object internal ID
   *
   * @example
   * ```ts
   * const response =
   *   await client.crm.objects.dealSplits.batchRead({
   *     inputs: [{ id: '37295' }],
   *   });
   * ```
   */
  batchRead(
    body: DealSplitBatchReadParams,
    options?: RequestOptions,
  ): APIPromise<DealSplitBatchReadResponse> {
    return this._client.post('/crm/v3/objects/deals/splits/batch/read', { body, ...options });
  }

  /**
   * Create or replace deal splits for deals with the provided IDs. Deal split
   * percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal
   * places
   *
   * @example
   * ```ts
   * const response =
   *   await client.crm.objects.dealSplits.batchUpsert({
   *     inputs: [
   *       { id: 0, splits: [{ ownerId: 0, percentage: 0 }] },
   *     ],
   *   });
   * ```
   */
  batchUpsert(
    body: DealSplitBatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<DealSplitBatchUpsertResponse> {
    return this._client.post('/crm/v3/objects/deals/splits/batch/upsert', { body, ...options });
  }
}

export interface DealSplitBatchReadResponse {
  completedAt: string;

  results: Array<DealSplitBatchReadResponse.Result>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export namespace DealSplitBatchReadResponse {
  export interface Result {
    id: string;

    splits: Array<CRMAPI.SimplePublicObject>;
  }
}

export interface DealSplitBatchUpsertResponse {
  completedAt: string;

  results: Array<DealSplitBatchUpsertResponse.Result>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export namespace DealSplitBatchUpsertResponse {
  export interface Result {
    id: string;

    splits: Array<CRMAPI.SimplePublicObject>;
  }
}

export interface DealSplitBatchReadParams {
  inputs: Array<Shared.PublicObjectID>;
}

export interface DealSplitBatchUpsertParams {
  inputs: Array<DealSplitBatchUpsertParams.Input>;
}

export namespace DealSplitBatchUpsertParams {
  export interface Input {
    id: number;

    splits: Array<Input.Split>;
  }

  export namespace Input {
    export interface Split {
      ownerId: number;

      percentage: number;
    }
  }
}

export declare namespace DealSplits {
  export {
    type DealSplitBatchReadResponse as DealSplitBatchReadResponse,
    type DealSplitBatchUpsertResponse as DealSplitBatchUpsertResponse,
    type DealSplitBatchReadParams as DealSplitBatchReadParams,
    type DealSplitBatchUpsertParams as DealSplitBatchUpsertParams,
  };
}
