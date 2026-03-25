// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create a batch of campaigns with specified properties. This endpoint allows for
   * the creation of multiple campaigns in a single request. Note that the 'hs_goal'
   * property is deprecated and will be ignored if provided.
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.BatchResponsePublicCampaign> {
    return this._client.post('/marketing/campaigns/2026-03/batch/create', { body, ...options });
  }

  /**
   * Update a batch of marketing campaigns with specified properties. This endpoint
   * allows you to modify multiple campaigns in one request. Note that the 'hs_goal'
   * property is deprecated and will be ignored if provided.
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.BatchResponsePublicCampaign> {
    return this._client.post('/marketing/campaigns/2026-03/batch/update', { body, ...options });
  }

  /**
   * Archive a batch of marketing campaigns in your HubSpot account. This operation
   * permanently removes the specified campaigns, making them inaccessible. It is
   * useful for cleaning up outdated or unnecessary campaigns in bulk.
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/marketing/campaigns/2026-03/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a batch of campaigns with specified properties and date range. This
   * endpoint allows you to filter campaigns by start and end dates and specify which
   * properties to include in the response.
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
   * Query param: The end date for filtering campaigns, in YYYY-MM-DD format.
   */
  endDate?: string;

  /**
   * Query param: A comma-separated list of property names to include in the
   * response.
   */
  properties?: Array<string>;

  /**
   * Query param: The start date for filtering campaigns, in YYYY-MM-DD format.
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
