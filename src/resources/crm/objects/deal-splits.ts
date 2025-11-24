// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CrmAPI from '../crm';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class DealSplits extends APIResource {
  /**
   * Read a batch of deal split objects by their associated deal object internal ID
   *
   * @example
   * ```ts
   * const batchResponseDealToDealSplits =
   *   await client.crm.objects.dealSplits.batchRead({
   *     inputs: [{ id: '37295' }],
   *   });
   * ```
   */
  batchRead(
    body: DealSplitBatchReadParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseDealToDealSplits> {
    return this._client.post('/crm/v3/objects/deals/splits/batch/read', { body, ...options });
  }

  /**
   * Create or replace deal splits for deals with the provided IDs. Deal split
   * percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal
   * places
   *
   * @example
   * ```ts
   * const batchResponseDealToDealSplits =
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
  ): APIPromise<BatchResponseDealToDealSplits> {
    return this._client.post('/crm/v3/objects/deals/splits/batch/upsert', { body, ...options });
  }
}

export interface BatchResponseDealToDealSplits {
  completedAt: string;

  results: Array<DealToDealSplits>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponseDealToDealSplitsWithErrors {
  completedAt: string;

  results: Array<DealToDealSplits>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface DealToDealSplits {
  id: string;

  splits: Array<CrmAPI.SimplePublicObject>;
}

/**
 * A simple public object.
 */
export interface ObjectsDealSplitsSimplePublicObject {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * The timestamp when the object was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * Key-value pairs representing the properties of the object.
   */
  properties: { [key: string]: string | null };

  /**
   * The timestamp when the object was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * Whether the object is archived.
   */
  archived?: boolean;

  /**
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<CrmAPI.ValueWithTimestamp> };
}

export interface PublicDealSplitInput {
  ownerId: number;

  percentage: number;
}

export interface PublicDealSplitsBatchCreateRequest {
  inputs: Array<PublicDealSplitsCreateRequest>;
}

export interface PublicDealSplitsCreateRequest {
  id: number;

  splits: Array<PublicDealSplitInput>;
}

export interface DealSplitBatchReadParams {
  inputs: Array<Shared.PublicObjectID>;
}

export interface DealSplitBatchUpsertParams {
  inputs: Array<PublicDealSplitsCreateRequest>;
}

export declare namespace DealSplits {
  export {
    type BatchResponseDealToDealSplits as BatchResponseDealToDealSplits,
    type BatchResponseDealToDealSplitsWithErrors as BatchResponseDealToDealSplitsWithErrors,
    type DealToDealSplits as DealToDealSplits,
    type ObjectsDealSplitsSimplePublicObject as ObjectsDealSplitsSimplePublicObject,
    type PublicDealSplitInput as PublicDealSplitInput,
    type PublicDealSplitsBatchCreateRequest as PublicDealSplitsBatchCreateRequest,
    type PublicDealSplitsCreateRequest as PublicDealSplitsCreateRequest,
    type DealSplitBatchReadParams as DealSplitBatchReadParams,
    type DealSplitBatchUpsertParams as DealSplitBatchUpsertParams,
  };
}
