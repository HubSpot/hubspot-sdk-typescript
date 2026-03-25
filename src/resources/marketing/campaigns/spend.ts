// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Spend extends APIResource {
  /**
   * Create a new campaign spend item for a specific campaign identified by its
   * unique ID. This endpoint allows you to add financial details related to campaign
   * expenditures, which can be useful for budget tracking and financial reporting.
   */
  create(
    campaignGuid: string,
    body: SpendCreateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicSpendItem> {
    return this._client.post(path`/marketing/campaigns/2026-03/${campaignGuid}/spend`, { body, ...options });
  }

  /**
   * Update a specific campaign spend item by its ID. This endpoint allows you to
   * modify the details of a spend item associated with a marketing campaign, such as
   * its amount, name, or order. Use this to keep your campaign spend data accurate
   * and up-to-date.
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
   * Delete a specific campaign spend item by its ID. This operation is useful for
   * removing spend items that are no longer needed or were added in error. Once
   * deleted, the spend item cannot be recovered.
   */
  delete(spendID: number, params: SpendDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid } = params;
    return this._client.delete(path`/marketing/campaigns/2026-03/${campaignGuid}/spend/${spendID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve details of a specific campaign spend item using its spendId. This
   * endpoint allows you to access information about the spend associated with a
   * particular campaign, identified by the campaignGuid.
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
   * Path param: The unique identifier of the campaign.
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
  /**
   * The unique identifier of the campaign.
   */
  campaignGuid: string;
}

export interface SpendGetParams {
  /**
   * The unique identifier of the campaign.
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
