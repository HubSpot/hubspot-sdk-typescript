// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Assets extends APIResource {
  /**
   * Associate a specified asset with a campaign. Using the API, you can create and
   * remove associations for the following asset types: forms, static lists, external
   * website pages, sequences, meetings, playbooks, feedback surveys, podcast
   * episodes, sales documents, marketing emails, case studies, knowledge base
   * articles, calls, and CTAs.
   *
   * For other asset types, it is recommended to manage your associations directly in
   * the campaign tool in HubSpot.
   *
   * @example
   * ```ts
   * await client.marketing.campaigns.assets.update('assetId', {
   *   campaignGuid: 'campaignGuid',
   *   assetType: 'assetType',
   * });
   * ```
   */
  update(assetID: string, params: AssetUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid, assetType } = params;
    return this._client.put(path`/marketing/v3/campaigns/${campaignGuid}/assets/${assetType}/${assetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint lists all assets of the campaign by asset type. The assetType
   * parameter is required, and each request can only fetch assets of a single type.
   * Asset metrics can also be fetched along with the assets; they are available only
   * if start and end dates are provided.
   *
   * @example
   * ```ts
   * const collectionResponsePublicCampaignAssetForwardPaging =
   *   await client.marketing.campaigns.assets.list(
   *     'assetType',
   *     { campaignGuid: 'campaignGuid' },
   *   );
   * ```
   */
  list(
    assetType: string,
    params: AssetListParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.CollectionResponsePublicCampaignAssetForwardPaging> {
    const { campaignGuid, ...query } = params;
    return this._client.get(path`/marketing/v3/campaigns/${campaignGuid}/assets/${assetType}`, {
      query,
      ...options,
    });
  }

  /**
   * Disassociate a specified asset from a campaign. Important: Currently, only the
   * following asset types can be associated and disassociated via the API: Forms,
   * Static lists, External website pages
   *
   * @example
   * ```ts
   * await client.marketing.campaigns.assets.delete('assetId', {
   *   campaignGuid: 'campaignGuid',
   *   assetType: 'assetType',
   * });
   * ```
   */
  delete(assetID: string, params: AssetDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid, assetType } = params;
    return this._client.delete(path`/marketing/v3/campaigns/${campaignGuid}/assets/${assetType}/${assetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AssetUpdateParams {
  /**
   * Unique identifier for the campaign, formatted as a UUID
   */
  campaignGuid: string;

  /**
   * The type of asset Important: Currently, only the following asset types are
   * available for association via the API: FORM, OBJECT_LIST, EXTERNAL_WEB_URL
   */
  assetType: string;
}

export interface AssetListParams {
  /**
   * Path param: Unique identifier for the campaign, formatted as a UUID.
   */
  campaignGuid: string;

  /**
   * Query param: A cursor for pagination. If provided, the results will start after
   * the given cursor. Example: NTI1Cg%3D%3D
   */
  after?: string;

  /**
   * Query param: End date to fetch asset metrics, formatted as YYYY-MM-DD. This date
   * is used to fetch the metrics associated with the assets for a specified period.
   * If not provided, no asset metrics will be fetched.
   */
  endDate?: string;

  /**
   * Query param: The maximum number of results to return. Default: 10
   */
  limit?: string;

  /**
   * Query param: Start date to fetch asset metrics, formatted as YYYY-MM-DD. This
   * date is used to fetch the metrics associated with the assets for a specified
   * period. If not provided, no asset metrics will be fetched.
   */
  startDate?: string;
}

export interface AssetDeleteParams {
  /**
   * Unique identifier for the campaign, formatted as a UUID.
   */
  campaignGuid: string;

  /**
   * The type of asset Important: Currently, only the following asset types are
   * available for disassociation via the API: FORM, OBJECT_LIST, EXTERNAL_WEB_URL
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
