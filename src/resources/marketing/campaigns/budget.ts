// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Budget extends APIResource {
  /**
   * Add a new budget item to the specified campaign. This operation allows you to
   * allocate a budget for a campaign by specifying the necessary details in the
   * request body.
   */
  create(
    campaignGuid: string,
    body: BudgetCreateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.PublicBudgetItem> {
    return this._client.post(path`/marketing/campaigns/2026-03/${campaignGuid}/budget`, { body, ...options });
  }

  /**
   * Update a specific budget item by its ID within a marketing campaign. This
   * operation allows you to modify the details of a budget item, such as its amount,
   * name, or order, ensuring that your campaign's financial records are accurate and
   * up-to-date.
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
   * Delete a specific budget item from a campaign using its unique ID. This
   * operation removes the budget item from the campaign's budget list, ensuring it
   * is no longer considered in budget calculations.
   */
  delete(budgetID: number, params: BudgetDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { campaignGuid } = params;
    return this._client.delete(path`/marketing/campaigns/2026-03/${campaignGuid}/budget/${budgetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific budget item by its ID for a given campaign. This endpoint is
   * useful for accessing detailed information about a particular budget item
   * associated with a marketing campaign.
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
   * Retrieve budget and spending items along with their totals for a specific
   * campaign. This endpoint provides insights into the financial allocations and
   * expenditures associated with the campaign, helping users to manage and analyze
   * campaign budgets effectively.
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
   * Path param: The unique identifier of the campaign to which the budget item
   * belongs.
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
  /**
   * The unique identifier of the campaign from which the budget item will be
   * deleted.
   */
  campaignGuid: string;
}

export interface BudgetGetParams {
  /**
   * The unique identifier of the campaign.
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
