// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Budget extends APIResource {
  /**
   * Add a new budget item to the campaign
   */
  create(
    campaignGuid: string,
    body: BudgetCreateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicBudgetItem> {
    return this._client.post(path`/marketing/campaigns/2026-03/${campaignGuid}/budget`, { body, ...options });
  }

  /**
   * Update a specific budget item by ID
   */
  update(
    budgetID: number,
    params: BudgetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicBudgetItem> {
    const { campaignGuid, ...body } = params;
    return this._client.put(path`/marketing/campaigns/2026-03/${campaignGuid}/budget/${budgetID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a specific budget item by ID
   */
  delete(budgetID: number, params: BudgetDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid } = params;
    return this._client.delete(path`/marketing/campaigns/2026-03/${campaignGuid}/budget/${budgetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a specific budget item by ID
   */
  get(
    budgetID: number,
    params: BudgetGetParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicBudgetItem> {
    const { campaignGuid } = params;
    return this._client.get(path`/marketing/campaigns/2026-03/${campaignGuid}/budget/${budgetID}`, options);
  }

  /**
   * Retrieve detailed information about the budget and spend items for a specified
   * campaign, including the total budget, total spend, and remaining budget. Budget
   * and Spend items may be returned in any order, but the order field specifies
   * their sequence based on the creation date. The item with order 0 is the oldest,
   * and items with higher order values are newer
   */
  getTotals(campaignGuid: string, options?: RequestOptions): APIPromise<CampaignsAPI.PublicBudgetTotals> {
    return this._client.get(path`/marketing/campaigns/2026-03/${campaignGuid}/budget/totals`, options);
  }
}

export interface BudgetCreateParams {
  /**
   * The monetary value assigned to the budget item.
   */
  amount: number;

  /**
   * The name of the budget item.
   */
  name: string;

  /**
   * The sequence number indicating the order of the budget item.
   */
  order: number;

  /**
   * A detailed explanation or notes about the budget item.
   */
  description?: string;
}

export interface BudgetUpdateParams {
  /**
   * Path param
   */
  campaignGuid: string;

  /**
   * Body param: The monetary value assigned to the budget item.
   */
  amount: number;

  /**
   * Body param: The name of the budget item.
   */
  name: string;

  /**
   * Body param: The sequence number indicating the order of the budget item.
   */
  order: number;

  /**
   * Body param: A detailed explanation or notes about the budget item.
   */
  description?: string;
}

export interface BudgetDeleteParams {
  campaignGuid: string;
}

export interface BudgetGetParams {
  campaignGuid: string;
}

export declare namespace Budget {
  export {
    type BudgetCreateParams as BudgetCreateParams,
    type BudgetUpdateParams as BudgetUpdateParams,
    type BudgetDeleteParams as BudgetDeleteParams,
    type BudgetGetParams as BudgetGetParams,
  };
}
