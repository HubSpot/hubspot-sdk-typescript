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
   */
  create(
    campaignGuid: string,
    body: SpendCreateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicSpendItem> {
    return this._client.post(path`/marketing/campaigns/2026-03/${campaignGuid}/spend`, { body, ...options });
  }

  /**
   * Update a specific campaign spend item by ID
   */
  update(
    spendID: number,
    params: SpendUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicSpendItem> {
    const { campaignGuid, ...body } = params;
    return this._client.put(path`/marketing/campaigns/2026-03/${campaignGuid}/spend/${spendID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a specific campaign spend item by ID
   */
  delete(spendID: number, params: SpendDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid } = params;
    return this._client.delete(path`/marketing/campaigns/2026-03/${campaignGuid}/spend/${spendID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a campaign spend item by its spendId
   */
  get(
    spendID: number,
    params: SpendGetParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicSpendItem> {
    const { campaignGuid } = params;
    return this._client.get(path`/marketing/campaigns/2026-03/${campaignGuid}/spend/${spendID}`, options);
  }
}

export interface SpendCreateParams {
  /**
   * The monetary value of the spend item.
   */
  amount: number;

  /**
   * The name of the spend item.
   */
  name: string;

  /**
   * The sequence number indicating the order of the spend item.
   */
  order: number;

  /**
   * A brief description of the spend item.
   */
  description?: string;
}

export interface SpendUpdateParams {
  /**
   * Path param
   */
  campaignGuid: string;

  /**
   * Body param: The monetary value of the spend item.
   */
  amount: number;

  /**
   * Body param: The name of the spend item.
   */
  name: string;

  /**
   * Body param: The sequence number indicating the order of the spend item.
   */
  order: number;

  /**
   * Body param: A brief description of the spend item.
   */
  description?: string;
}

export interface SpendDeleteParams {
  campaignGuid: string;
}

export interface SpendGetParams {
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
