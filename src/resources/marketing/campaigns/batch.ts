// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * This endpoint creates a batch of campaigns. The maximum number of items in a
   * batch request is 50. The campaigns in the response are not guaranteed to be in
   * the same order as they were provided in the request.
   *
   * @example
   * ```ts
   * const batchResponsePublicCampaign =
   *   await client.marketing.campaigns.batch.create({
   *     inputs: [{ properties: { foo: 'string' } }],
   *   });
   * ```
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.BatchResponsePublicCampaign> {
    return this._client.post('/marketing/v3/campaigns/batch/create', { body, ...options });
  }

  /**
   * This endpoint updates a batch of campaigns based on the provided input data. The
   * maximum number of items in a batch request is 50. If an empty string ("") is
   * passed for any property in the Batch Update, it will reset that property's
   * value.
   *
   * @example
   * ```ts
   * const batchResponsePublicCampaign =
   *   await client.marketing.campaigns.batch.update({
   *     inputs: [
   *       {
   *         id: 'id',
   *         properties: { foo: 'string' },
   *       },
   *     ],
   *   });
   * ```
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.BatchResponsePublicCampaign> {
    return this._client.post('/marketing/v3/campaigns/batch/update', { body, ...options });
  }

  /**
   * This endpoint deletes a batch of campaigns. The maximum number of items in a
   * batch request is 50. The response will always be 204 No Content, regardless of
   * whether the campaigns exist or not, whether they were successfully deleted or
   * not, or if only some of the campaigns in the batch were deleted.
   *
   * @example
   * ```ts
   * await client.marketing.campaigns.batch.delete({
   *   inputs: [{ id: 'id' }],
   * });
   * ```
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/marketing/v3/campaigns/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint reads a batch of campaigns based on the provided input data and
   * returns the campaigns along with their associated assets. The maximum number of
   * items in a batch request is 50. The campaigns in the response are not guaranteed
   * to be in the same order as they were provided in the request. If duplicate
   * campaign IDs are provided in the request, duplicates will be ignored. The
   * response will include only unique IDs and will be returned without duplicates.
   *
   * @example
   * ```ts
   * const batchResponsePublicCampaignWithAssets =
   *   await client.marketing.campaigns.batch.get({
   *     inputs: [{ id: 'id' }],
   *   });
   * ```
   */
  get(
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.BatchResponsePublicCampaignWithAssets> {
    const { endDate, properties, startDate, ...body } = params;
    return this._client.post('/marketing/v3/campaigns/batch/read', {
      query: { endDate, properties, startDate },
      body,
      ...options,
    });
  }
}

export interface BatchCreateParams {
  inputs: Array<CampaignsAPI.PublicCampaignInput>;
}

export interface BatchUpdateParams {
  inputs: Array<CampaignsAPI.PublicCampaignBatchUpdateItem>;
}

export interface BatchDeleteParams {
  inputs: Array<CampaignsAPI.PublicCampaignDeleteInput>;
}

export interface BatchGetParams {
  /**
   * Body param
   */
  inputs: Array<CampaignsAPI.PublicCampaignReadInput>;

  /**
   * Query param: End date to fetch asset metrics, formatted as YYYY-MM-DD. This date
   * is used to fetch the metrics associated with the assets for a specified period.
   * If not provided, no asset metrics will be fetched.
   */
  endDate?: string;

  /**
   * Query param: A comma-separated list of the properties to be returned in the
   * response. If any of the specified properties has empty value on the requested
   * object(s), they will be ignored and not returned in response. If this parameter
   * is empty, the response will include an empty properties map.
   */
  properties?: Array<string>;

  /**
   * Query param: Start date to fetch asset metrics, formatted as YYYY-MM-DD. This
   * date is used to fetch the metrics associated with the assets for a specified
   * period. If not provided, no asset metrics will be fetched.
   */
  startDate?: string;
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };
}
