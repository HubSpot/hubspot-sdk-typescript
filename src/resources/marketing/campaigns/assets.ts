// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Assets extends APIResource {
  /**
   * Associate an asset with a specific campaign in your HubSpot account. This
   * operation allows you to link an asset of a specified type and ID to a campaign,
   * facilitating better organization and tracking of campaign resources.
   */
  update(assetID: string, params: AssetUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid, assetType } = params;
    return this._client.put(
      path`/marketing/campaigns/2026-03/${campaignGuid}/assets/${assetType}/${assetID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * List all assets of a specified campaign by asset type. This endpoint allows you
   * to retrieve assets associated with a campaign, filtered by the type of asset. It
   * supports pagination and date filtering to manage and refine the results.
   */
  list(
    assetType: string,
    params: AssetListParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.CollectionResponsePublicCampaignAssetForwardPaging> {
    const { campaignGuid, ...query } = params;
    return this._client.get(path`/marketing/campaigns/2026-03/${campaignGuid}/assets/${assetType}`, {
      query,
      ...options,
    });
  }

  /**
   * Disassociate an asset from a specific campaign. This operation removes the
   * association between the specified asset and campaign, effectively detaching the
   * asset from the campaign's context.
   */
  delete(assetID: string, params: AssetDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid, assetType } = params;
    return this._client.delete(
      path`/marketing/campaigns/2026-03/${campaignGuid}/assets/${assetType}/${assetID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface AssetUpdateParams {
  /**
   * The unique identifier of the campaign to which the asset will be associated.
   */
  campaignGuid: string;

  /**
   * The type of asset to be associated with the campaign.
   */
  assetType: string;
}

export interface AssetListParams {
  /**
   * Path param: The unique identifier of the campaign.
   */
  campaignGuid: string;

  /**
   * Query param: The paging cursor token of the last successfully read resource will
   * be returned as the `paging.next.after` JSON property of a paged response
   * containing more results.
   */
  after?: string;

  /**
   * Query param: The end date for filtering assets, in YYYY-MM-DD format.
   */
  endDate?: string;

  /**
   * Query param: The maximum number of results to display per page.
   */
  limit?: string;

  /**
   * Query param: The start date for filtering assets, in YYYY-MM-DD format.
   */
  startDate?: string;
}

export interface AssetDeleteParams {
  /**
   * The unique identifier of the campaign from which the asset will be
   * disassociated.
   */
  campaignGuid: string;

  /**
   * The type of asset to be disassociated from the campaign.
   */
  assetType: string;
}

export declare namespace Assets {
  export {
    type AssetUpdateParams as AssetUpdateParams,
    type AssetListParams as AssetListParams,
    type AssetDeleteParams as AssetDeleteParams,
  };
}
