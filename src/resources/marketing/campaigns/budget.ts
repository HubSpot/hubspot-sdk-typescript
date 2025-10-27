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
   *
   * @example
   * ```ts
   * const publicBudgetItem =
   *   await client.marketing.campaigns.budget.create(
   *     'campaignGuid',
   *     { amount: 0, name: 'name', order: 0 },
   *   );
   * ```
   */
  create(
    campaignGuid: string,
    body: BudgetCreateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicBudgetItem> {
    return this._client.post(path`/marketing/v3/campaigns/${campaignGuid}/budget`, { body, ...options });
  }

  /**
   * Update a specific budget item by ID
   *
   * @example
   * ```ts
   * const publicBudgetItem =
   *   await client.marketing.campaigns.budget.update(0, {
   *     campaignGuid: 'campaignGuid',
   *     amount: 0,
   *     name: 'name',
   *     order: 0,
   *   });
   * ```
   */
  update(
    budgetID: number,
    params: BudgetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicBudgetItem> {
    const { campaignGuid, ...body } = params;
    return this._client.put(path`/marketing/v3/campaigns/${campaignGuid}/budget/${budgetID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a specific budget item by ID
   *
   * @example
   * ```ts
   * await client.marketing.campaigns.budget.delete(0, {
   *   campaignGuid: 'campaignGuid',
   * });
   * ```
   */
  delete(budgetID: number, params: BudgetDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid } = params;
    return this._client.delete(path`/marketing/v3/campaigns/${campaignGuid}/budget/${budgetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a specific budget item by ID
   *
   * @example
   * ```ts
   * const publicBudgetItem =
   *   await client.marketing.campaigns.budget.get(0, {
   *     campaignGuid: 'campaignGuid',
   *   });
   * ```
   */
  get(
    budgetID: number,
    params: BudgetGetParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicBudgetItem> {
    const { campaignGuid } = params;
    return this._client.get(path`/marketing/v3/campaigns/${campaignGuid}/budget/${budgetID}`, options);
  }

  /**
   * Retrieve detailed information about the budget and spend items for a specified
   * campaign, including the total budget, total spend, and remaining budget. Budget
   * and Spend items may be returned in any order, but the order field specifies
   * their sequence based on the creation date. The item with order 0 is the oldest,
   * and items with higher order values are newer
   *
   * @example
   * ```ts
   * const publicBudgetTotals =
   *   await client.marketing.campaigns.budget.getTotals(
   *     'campaignGuid',
   *   );
   * ```
   */
  getTotals(campaignGuid: string, options?: RequestOptions): APIPromise<CampaignsAPI.PublicBudgetTotals> {
    return this._client.get(path`/marketing/v3/campaigns/${campaignGuid}/budget/totals`, options);
  }
}

export interface BudgetCreateParams {
  amount: number;

  name: string;

  order: number;

  description?: string;
}

export interface BudgetUpdateParams {
  /**
   * Path param: Unique identifier for the campaign.
   */
  campaignGuid: string;

  /**
   * Body param:
   */
  amount: number;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  order: number;

  /**
   * Body param:
   */
  description?: string;
}

export interface BudgetDeleteParams {
  /**
   * Unique identifier for the campaign.
   */
  campaignGuid: string;
}

export interface BudgetGetParams {
  /**
   * Unique identifier for the campaign.
   */
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
