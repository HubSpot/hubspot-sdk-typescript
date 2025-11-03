// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AssetsAPI from './assets';
import { AssetDeleteParams, AssetListParams, AssetUpdateParams, Assets } from './assets';
import * as BatchAPI from './batch';
import { Batch, BatchCreateParams, BatchDeleteParams, BatchGetParams, BatchUpdateParams } from './batch';
import * as BudgetAPI from './budget';
import {
  Budget,
  BudgetCreateParams,
  BudgetDeleteParams,
  BudgetGetParams,
  BudgetUpdateParams,
} from './budget';
import * as ReportsAPI from './reports';
import {
  ReportGetAttributionMetricsParams,
  ReportGetRevenueAttributionParams,
  ReportListContactIDsByTypeParams,
  Reports,
} from './reports';
import * as SpendAPI from './spend';
import { Spend, SpendCreateParams, SpendDeleteParams, SpendGetParams, SpendUpdateParams } from './spend';
import * as EmailsAPI from '../emails/emails';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Campaigns extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  budget: BudgetAPI.Budget = new BudgetAPI.Budget(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
  spend: SpendAPI.Spend = new SpendAPI.Spend(this._client);

  /**
   * Create a campaign with the given properties and return the campaign object,
   * including the campaignGuid and created properties.
   *
   * @example
   * ```ts
   * const publicCampaign =
   *   await client.marketing.campaigns.create({
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  create(body: CampaignCreateParams, options?: RequestOptions): APIPromise<PublicCampaign> {
    return this._client.post('/marketing/v3/campaigns/', { body, ...options });
  }

  /**
   * Perform a partial update of a campaign identified by the specified campaignGuid.
   * Provided property values will be overwritten. Read-only and non-existent
   * properties will cause 400 error. If an empty string is passed for any property
   * in the Batch Update, it will reset that property's value.
   *
   * @example
   * ```ts
   * const publicCampaign =
   *   await client.marketing.campaigns.update('campaignGuid', {
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  update(
    campaignGuid: string,
    body: CampaignUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PublicCampaign> {
    return this._client.patch(path`/marketing/v3/campaigns/${campaignGuid}`, { body, ...options });
  }

  /**
   * This endpoint allows users to search for and return a page of campaigns based on
   * various query parameters. Users can filter by name, sort, and paginate through
   * the campaigns, as well as control which properties are returned in the response.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicCampaign of client.marketing.campaigns.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicCampaignsPage, PublicCampaign> {
    return this._client.getAPIList('/marketing/v3/campaigns/', Page<PublicCampaign>, { query, ...options });
  }

  /**
   * Delete a specified campaign from the system. This call will return a 204 No
   * Content response regardless of whether the campaignGuid provided corresponds to
   * an existing campaign or not.
   *
   * @example
   * ```ts
   * await client.marketing.campaigns.delete('campaignGuid');
   * ```
   */
  delete(campaignGuid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/marketing/v3/campaigns/${campaignGuid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a campaign identified by a specific campaignGuid with the given properties.
   * Along with the campaign information, it also returns information about assets.
   * Depending on the query parameters used, this can also be used to return
   * information about the corresponding assets' metrics. Metrics are available only
   * if startDate and endDate are provided.
   *
   * @example
   * ```ts
   * const publicCampaignWithAssets =
   *   await client.marketing.campaigns.get('campaignGuid');
   * ```
   */
  get(
    campaignGuid: string,
    query: CampaignGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicCampaignWithAssets> {
    return this._client.get(path`/marketing/v3/campaigns/${campaignGuid}`, { query, ...options });
  }
}

export type PublicCampaignsPage = Page<PublicCampaign>;

export interface BatchInputPublicCampaignBatchUpdateItem {
  inputs: Array<PublicCampaignBatchUpdateItem>;
}

export interface BatchInputPublicCampaignDeleteInput {
  inputs: Array<PublicCampaignDeleteInput>;
}

export interface BatchInputPublicCampaignInput {
  inputs: Array<PublicCampaignInput>;
}

export interface BatchInputPublicCampaignReadInput {
  inputs: Array<PublicCampaignReadInput>;
}

export interface BatchResponsePublicCampaign {
  completedAt: string;

  results: Array<PublicCampaign>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponsePublicCampaignWithAssets {
  completedAt: string;

  results: Array<PublicCampaignWithAssets>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponsePublicCampaignWithAssetsWithErrors {
  completedAt: string;

  results: Array<PublicCampaignWithAssets>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponsePublicCampaignWithErrors {
  completedAt: string;

  results: Array<PublicCampaign>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseContactReferenceForwardPaging {
  results: Array<ContactReference>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponsePublicCampaignAsset {
  results: Array<PublicCampaignAsset>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.EmailsPaging;
}

export interface CollectionResponsePublicCampaignAssetForwardPaging {
  results: Array<PublicCampaignAsset>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalPublicCampaignForwardPaging {
  results: Array<PublicCampaign>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface ContactReference {
  id: string;
}

export interface MetricsCounters {
  influencedContacts: number;

  newContactsFirstTouch: number;

  newContactsLastTouch: number;

  sessions: number;
}

export interface PublicBudgetItem {
  id: string;

  amount: number;

  createdAt: number;

  name: string;

  order: number;

  updatedAt: number;

  description?: string;
}

export interface PublicBudgetItemInput {
  amount: number;

  name: string;

  order: number;

  description?: string;
}

export interface PublicBudgetTotals {
  budgetItems: Array<PublicBudgetItem>;

  currencyCode:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BOV'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHE'
    | 'CHF'
    | 'CHW'
    | 'CLF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'COU'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MXV'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'USN'
    | 'UYI'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'XSU'
    | 'XUA'
    | 'YER'
    | 'ZAR'
    | 'ZMW'
    | 'ZWL';

  spendItems: Array<PublicSpendItem>;

  budgetTotal?: number;

  remainingBudget?: number;

  spendTotal?: number;
}

export interface PublicBusinessUnit {
  id: number;
}

export interface PublicCampaign {
  id: string;

  businessUnits: Array<PublicBusinessUnit>;

  createdAt: string;

  properties: { [key: string]: string };

  updatedAt: string;
}

export interface PublicCampaignAsset {
  id: string;

  metrics: { [key: string]: number };

  name?: string;
}

export interface PublicCampaignBatchUpdateItem {
  id: string;

  properties: { [key: string]: string };
}

export interface PublicCampaignDeleteInput {
  id: string;
}

export interface PublicCampaignInput {
  properties: { [key: string]: string };
}

export interface PublicCampaignReadInput {
  id: string;
}

export interface PublicCampaignWithAssets {
  id: string;

  assets: { [key: string]: CollectionResponsePublicCampaignAsset };

  businessUnits: Array<PublicBusinessUnit>;

  createdAt: string;

  properties: { [key: string]: string };

  updatedAt: string;
}

export interface PublicSpendItem {
  id: string;

  amount: number;

  createdAt: number;

  name: string;

  order: number;

  updatedAt: number;

  description?: string;
}

export interface PublicSpendItemInput {
  amount: number;

  name: string;

  order: number;

  description?: string;
}

export interface RevenueAttributionAggregate {
  contactsNumber?: number;

  currencyCode?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BOV'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHE'
    | 'CHF'
    | 'CHW'
    | 'CLF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'COU'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MXV'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'USN'
    | 'UYI'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'XSU'
    | 'XUA'
    | 'YER'
    | 'ZAR'
    | 'ZMW'
    | 'ZWL';

  dealAmount?: number;

  dealsNumber?: number;

  revenueAmount?: number;
}

export interface CampaignCreateParams {
  properties: { [key: string]: string };
}

export interface CampaignUpdateParams {
  properties: { [key: string]: string };
}

export interface CampaignListParams extends PageParams {
  /**
   * A filter to return campaigns whose names contain the specified substring. This
   * allows partial matching of campaign names, returning all campaigns that include
   * the given substring in their name. If this parameter is not provided, the search
   * will return all campaigns
   */
  name?: string;

  /**
   * A comma-separated list of the properties to be returned in the response. If any
   * of the specified properties has empty value on the requested object(s), they
   * will be ignored and not returned in response. If this parameter is empty, the
   * response will include an empty properties map
   */
  properties?: Array<string>;

  /**
   * The field by which to sort the results. Allowed values are hs_name, createdAt,
   * updatedAt. An optional '-' before the property name can denote descending order
   * Default: hs_name
   */
  sort?: string;
}

export interface CampaignGetParams {
  /**
   * End date to fetch asset metrics, formatted as YYYY-MM-DD. This date is used to
   * fetch the metrics associated with the assets for a specified period. If not
   * provided, no asset metrics will be fetched.
   */
  endDate?: string;

  /**
   * A comma-separated list of the properties to be returned in the response. If any
   * of the specified properties has empty value on the requested object, they will
   * be ignored and not returned in response. If this parameter is empty, the
   * response will include an empty properties map.
   */
  properties?: Array<string>;

  /**
   * Start date to fetch asset metrics, formatted as YYYY-MM-DD. This date is used to
   * fetch the metrics associated with the assets for a specified period. If not
   * provided, no asset metrics will be fetched.
   */
  startDate?: string;
}

Campaigns.Assets = Assets;
Campaigns.Batch = Batch;
Campaigns.Budget = Budget;
Campaigns.Reports = Reports;
Campaigns.Spend = Spend;

export declare namespace Campaigns {
  export {
    type BatchInputPublicCampaignBatchUpdateItem as BatchInputPublicCampaignBatchUpdateItem,
    type BatchInputPublicCampaignDeleteInput as BatchInputPublicCampaignDeleteInput,
    type BatchInputPublicCampaignInput as BatchInputPublicCampaignInput,
    type BatchInputPublicCampaignReadInput as BatchInputPublicCampaignReadInput,
    type BatchResponsePublicCampaign as BatchResponsePublicCampaign,
    type BatchResponsePublicCampaignWithAssets as BatchResponsePublicCampaignWithAssets,
    type BatchResponsePublicCampaignWithAssetsWithErrors as BatchResponsePublicCampaignWithAssetsWithErrors,
    type BatchResponsePublicCampaignWithErrors as BatchResponsePublicCampaignWithErrors,
    type CollectionResponseContactReferenceForwardPaging as CollectionResponseContactReferenceForwardPaging,
    type CollectionResponsePublicCampaignAsset as CollectionResponsePublicCampaignAsset,
    type CollectionResponsePublicCampaignAssetForwardPaging as CollectionResponsePublicCampaignAssetForwardPaging,
    type CollectionResponseWithTotalPublicCampaignForwardPaging as CollectionResponseWithTotalPublicCampaignForwardPaging,
    type ContactReference as ContactReference,
    type MetricsCounters as MetricsCounters,
    type PublicBudgetItem as PublicBudgetItem,
    type PublicBudgetItemInput as PublicBudgetItemInput,
    type PublicBudgetTotals as PublicBudgetTotals,
    type PublicBusinessUnit as PublicBusinessUnit,
    type PublicCampaign as PublicCampaign,
    type PublicCampaignAsset as PublicCampaignAsset,
    type PublicCampaignBatchUpdateItem as PublicCampaignBatchUpdateItem,
    type PublicCampaignDeleteInput as PublicCampaignDeleteInput,
    type PublicCampaignInput as PublicCampaignInput,
    type PublicCampaignReadInput as PublicCampaignReadInput,
    type PublicCampaignWithAssets as PublicCampaignWithAssets,
    type PublicSpendItem as PublicSpendItem,
    type PublicSpendItemInput as PublicSpendItemInput,
    type RevenueAttributionAggregate as RevenueAttributionAggregate,
    type PublicCampaignsPage as PublicCampaignsPage,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignGetParams as CampaignGetParams,
  };

  export {
    Assets as Assets,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetListParams as AssetListParams,
    type AssetDeleteParams as AssetDeleteParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };

  export {
    Budget as Budget,
    type BudgetCreateParams as BudgetCreateParams,
    type BudgetUpdateParams as BudgetUpdateParams,
    type BudgetDeleteParams as BudgetDeleteParams,
    type BudgetGetParams as BudgetGetParams,
  };

  export {
    Reports as Reports,
    type ReportGetAttributionMetricsParams as ReportGetAttributionMetricsParams,
    type ReportGetRevenueAttributionParams as ReportGetRevenueAttributionParams,
    type ReportListContactIDsByTypeParams as ReportListContactIDsByTypeParams,
  };

  export {
    Spend as Spend,
    type SpendCreateParams as SpendCreateParams,
    type SpendUpdateParams as SpendUpdateParams,
    type SpendDeleteParams as SpendDeleteParams,
    type SpendGetParams as SpendGetParams,
  };
}
