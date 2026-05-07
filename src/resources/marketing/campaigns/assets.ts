// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAssets extends APIResource {
  static override readonly _key: readonly ['marketing', 'campaigns', 'assets'] = Object.freeze([
    'marketing',
    'campaigns',
    'assets',
  ] as const);

  /**
   * Associate a specified asset with a campaign. Using the API, you can create
   * associations for the following asset types: ads, blog posts, calls, case
   * studies, CTAs, CTAs (legacy), external website pages, feedback surveys, forms,
   * files, knowledge base articles, landing pages, marketing email, marketing
   * events, meetings, playbooks, podcast episodes, sales documents, sales emails,
   * sequences, SMS, social posts, static lists, videos, website pages, and
   * workflows.
   *
   * For other asset types, it is recommended to manage your associations directly in
   * the campaign tool in HubSpot.
   */
  update(assetID: string, params: AssetUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid, assetType } = params;
    return this._client.put(
      path`/marketing/campaigns/2026-03/${campaignGuid}/assets/${assetType}/${assetID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * This endpoint lists all assets of the campaign by asset type. The assetType
   * parameter is required, and each request can only fetch assets of a single type.
   * Asset metrics can also be fetched along with the assets; they are available only
   * if start and end dates are provided.
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
   * Disassociate a specified asset from a campaign. Using the API, you can remove
   * associations for the following asset types: ads, blog posts, calls, case
   * studies, CTAs, CTAs (legacy), external website pages, feedback surveys, forms,
   * files, knowledge base articles, landing pages, marketing email, marketing
   * events, meetings, playbooks, podcast episodes, sales documents, sales emails,
   * sequences, SMS, social posts, static lists, videos, website pages, and
   * workflows.
   *
   * For other asset types, it is recommended to manage your associations directly in
   * the campaign tool in HubSpot.
   */
  delete(assetID: string, params: AssetDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid, assetType } = params;
    return this._client.delete(
      path`/marketing/campaigns/2026-03/${campaignGuid}/assets/${assetType}/${assetID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}
export class Assets extends BaseAssets {}

export interface AssetUpdateParams {
  /**
   * The UUID of the campaign, required Example: 9dbec438-53e2-4b28-8c0f-38f56574a6e8
   */
  campaignGuid: string;

  /**
   * The type of asset to disassociate, required Example: OBJECT_LIST
   */
  assetType: string;
}

export interface AssetListParams {
  /**
   * Path param: The UUID of the campaign, required Example:
   * 9dbec438-53e2-4b28-8c0f-38f56574a6e8
   */
  campaignGuid: string;

  /**
   * Query param: The paging cursor token of the last successfully read resource will
   * be returned as the `paging.next.after` JSON property of a paged response
   * containing more results.
   */
  after?: string;

  /**
   * Query param: End date to fetch asset metrics, formatted as YYYY-MM-DD. This date
   * is used to fetch the metrics associated with the assets for a specified period.
   * If not provided, no asset metrics will be fetched. Example: 2024-01-27
   */
  endDate?: string;

  /**
   * Query param: The maximum number of results to display per page.
   */
  limit?: string;

  /**
   * Query param: Start date to fetch asset metrics, formatted as YYYY-MM-DD. This
   * date is used to fetch the metrics associated with the assets for a specified
   * period. If not provided, no asset metrics will be fetched. Example: 2023-01-20
   */
  startDate?: string;
}

export interface AssetDeleteParams {
  /**
   * The UUID of the campaign, required Example: 9dbec438-53e2-4b28-8c0f-38f56574a6e8
   */
  campaignGuid: string;

  /**
   * The type of asset to disassociate, required Example: OBJECT_LIST
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
