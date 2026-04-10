// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['marketing', 'campaigns', 'batch'] = Object.freeze([
    'marketing',
    'campaigns',
    'batch',
  ] as const);

  /**
   * This endpoint creates a batch of campaigns. The maximum number of items in a
   * batch request is 50. The campaigns in the response are not guaranteed to be in
   * the same order as they were provided in the request.
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.BatchResponsePublicCampaign> {
    return this._client.post('/marketing/campaigns/2026-03/batch/create', { body, ...options });
  }

  /**
   * This endpoint updates a batch of campaigns based on the provided input data. The
   * maximum number of items in a batch request is 50. If an empty string ("") is
   * passed for any property in the Batch Update, it will reset that property's
   * value.
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.BatchResponsePublicCampaign> {
    return this._client.post('/marketing/campaigns/2026-03/batch/update', { body, ...options });
  }

  /**
   * This endpoint deletes a batch of campaigns. The maximum number of items in a
   * batch request is 50. The response will always be 204 No Content, regardless of
   * whether the campaigns exist or not, whether they were successfully deleted or
   * not, or if only some of the campaigns in the batch were deleted.
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/marketing/campaigns/2026-03/batch/archive', {
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
   */
  get(
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.BatchResponsePublicCampaignWithAssets> {
    const { endDate, properties, startDate, ...body } = params;
    return this._client.post('/marketing/campaigns/2026-03/batch/read', {
      query: { endDate, properties, startDate },
      body,
      ...options,
    });
  }
}
export class Batch extends BaseBatch {}

export interface BatchCreateParams {
  /**
   * An array of PublicCampaignInput objects, each representing the properties of a
   * campaign to be created in the batch. This property is required.
   */
  inputs: Array<CampaignsAPI.PublicCampaignInput>;
}

export interface BatchUpdateParams {
  /**
   * An array of PublicCampaignBatchUpdateItem objects, each containing the ID and
   * properties to update for a specific campaign.
   */
  inputs: Array<CampaignsAPI.PublicCampaignBatchUpdateItem>;
}

export interface BatchDeleteParams {
  /**
   * An array of PublicCampaignDeleteInput objects, each specifying a campaign to be
   * deleted. Each object must include the campaign's unique identifier.
   */
  inputs: Array<CampaignsAPI.PublicCampaignDeleteInput>;
}

export interface BatchGetParams {
  /**
   * Body param: An array of PublicCampaignReadInput objects, each containing the ID
   * of a campaign to be read. This property is required.
   */
  inputs: Array<CampaignsAPI.PublicCampaignReadInput>;

  /**
   * Query param
   */
  endDate?: string;

  /**
   * Query param
   */
  properties?: Array<string>;

  /**
   * Query param
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
