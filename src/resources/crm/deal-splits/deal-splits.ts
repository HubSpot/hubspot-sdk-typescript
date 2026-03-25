// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CrmAPI from '../crm';
import * as BatchAPI from './batch';
import { Batch, BatchReadParams, BatchUpsertParams } from './batch';

export class DealSplits extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

export interface BatchResponseDealToDealSplits {
  /**
   * The timestamp indicating when the batch operation was completed, in date-time
   * format.
   */
  completedAt: string;

  /**
   * An array of deal-to-deal split objects representing the results of the batch
   * operation.
   */
  results: Array<DealToDealSplits>;

  /**
   * The timestamp indicating when the batch operation started, in date-time format.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, with possible values: CANCELED,
   * COMPLETE, PENDING, PROCESSING.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * A map of link names to associated URIs for additional resources or
   * documentation.
   */
  links?: { [key: string]: string };

  numErrors?: number;

  /**
   * The timestamp indicating when the batch operation was requested, in date-time
   * format.
   */
  requestedAt?: string;
}

export interface DealToDealSplits {
  /**
   * The unique identifier for the deal associated with the deal splits.
   */
  id: string;

  /**
   * An array of deal split objects, each representing a portion of the deal assigned
   * to an owner.
   */
  splits: Array<CrmAPI.SimplePublicObject>;
}

export interface PublicDealSplitInput {
  /**
   * The unique identifier of the owner receiving the deal split.
   */
  ownerId: number;

  /**
   * The portion of the deal assigned to the owner, expressed as a percentage. The
   * total percentage for all splits in a deal must sum up to 1.0 (100%) and can have
   * up to 8 decimal places.
   */
  percentage: number;
}

export interface PublicDealSplitsBatchCreateRequest {
  /**
   * An array of deal split inputs
   */
  inputs: Array<PublicDealSplitsCreateRequest>;
}

export interface PublicDealSplitsCreateRequest {
  /**
   * The unique identifier for the deal.
   */
  id: number;

  /**
   * An array of deal split inputs, each containing an owner ID and a percentage of
   * the deal split.
   */
  splits: Array<PublicDealSplitInput>;
}

DealSplits.Batch = Batch;

export declare namespace DealSplits {
  export {
    type BatchResponseDealToDealSplits as BatchResponseDealToDealSplits,
    type DealToDealSplits as DealToDealSplits,
    type PublicDealSplitInput as PublicDealSplitInput,
    type PublicDealSplitsBatchCreateRequest as PublicDealSplitsBatchCreateRequest,
    type PublicDealSplitsCreateRequest as PublicDealSplitsCreateRequest,
  };

  export {
    Batch as Batch,
    type BatchReadParams as BatchReadParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}
