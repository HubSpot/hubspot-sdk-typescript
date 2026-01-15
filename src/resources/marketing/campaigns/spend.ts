// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Spend extends APIResource {
  /**
   * Create a new campaign spend item
   *
   * @example
   * ```ts
   * const publicSpendItem =
   *   await client.marketing.campaigns.spend.create(
   *     'campaignGuid',
   *     {
   *       amount: 0,
   *       name: 'name',
   *       order: 0,
   *     },
   *   );
   * ```
   */
  create(
    campaignGuid: string,
    body: SpendCreateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicSpendItem> {
    return this._client.post(path`/marketing/v3/campaigns/${campaignGuid}/spend`, { body, ...options });
  }

  /**
   * Update a specific campaign spend item by ID
   *
   * @example
   * ```ts
   * const publicSpendItem =
   *   await client.marketing.campaigns.spend.update(0, {
   *     campaignGuid: 'campaignGuid',
   *     amount: 0,
   *     name: 'name',
   *     order: 0,
   *   });
   * ```
   */
  update(
    spendID: number,
    params: SpendUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicSpendItem> {
    const { campaignGuid, ...body } = params;
    return this._client.put(path`/marketing/v3/campaigns/${campaignGuid}/spend/${spendID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a specific campaign spend item by ID
   *
   * @example
   * ```ts
   * await client.marketing.campaigns.spend.delete(0, {
   *   campaignGuid: 'campaignGuid',
   * });
   * ```
   */
  delete(spendID: number, params: SpendDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid } = params;
    return this._client.delete(path`/marketing/v3/campaigns/${campaignGuid}/spend/${spendID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a campaign spend item by its spendId
   *
   * @example
   * ```ts
   * const publicSpendItem =
   *   await client.marketing.campaigns.spend.get(0, {
   *     campaignGuid: 'campaignGuid',
   *   });
   * ```
   */
  get(
    spendID: number,
    params: SpendGetParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicSpendItem> {
    const { campaignGuid } = params;
    return this._client.get(path`/marketing/v3/campaigns/${campaignGuid}/spend/${spendID}`, options);
  }
}

export interface SpendCreateParams {
  amount: number;

  name: string;

  order: number;

  description?: string;
}

export interface SpendUpdateParams {
  /**
   * Path param: Unique identifier for the campaign.
   */
  campaignGuid: string;

  /**
   * Body param
   */
  amount: number;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  order: number;

  /**
   * Body param
   */
  description?: string;
}

export interface SpendDeleteParams {
  /**
   * Unique identifier for the campaign.
   */
  campaignGuid: string;
}

export interface SpendGetParams {
  /**
   * Unique identifier for the campaign.
   */
  campaignGuid: string;
}

export declare namespace Spend {
  export {
    type SpendCreateParams as SpendCreateParams,
    type SpendUpdateParams as SpendUpdateParams,
    type SpendDeleteParams as SpendDeleteParams,
    type SpendGetParams as SpendGetParams,
  };
}
