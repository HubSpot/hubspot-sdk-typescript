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
import * as MetricsAPI from './metrics';
import {
  MetricGetAttributionMetricsParams,
  MetricGetRevenueAttributionParams,
  MetricListContactIDsByTypeParams,
  Metrics,
} from './metrics';
import * as SpendAPI from './spend';
import { Spend, SpendCreateParams, SpendDeleteParams, SpendGetParams, SpendUpdateParams } from './spend';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Campaigns extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  budget: BudgetAPI.Budget = new BudgetAPI.Budget(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  spend: SpendAPI.Spend = new SpendAPI.Spend(this._client);

  /**
   * Create a campaign with the specified properties and receive a copy of the
   * campaign object, including its ID. Note that the 'hs_goal' property is
   * deprecated and will be ignored if provided.
   */
  create(body: CampaignCreateParams, options?: RequestOptions): APIPromise<PublicCampaign> {
    return this._client.post('/marketing/campaigns/2026-03', { body, ...options });
  }

  /**
   * Perform a partial update of a campaign identified by the specified campaignGuid.
   * Provided property values will be overwritten. Read-only and non-existent
   * properties will cause 400 error. If an empty string is passed for any property
   * in the Batch Update, it will reset that property's value.
   */
  update(
    campaignGuid: string,
    body: CampaignUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PublicCampaign> {
    return this._client.patch(path`/marketing/campaigns/2026-03/${campaignGuid}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of campaigns from your HubSpot account. This endpoint
   * allows you to specify sorting, pagination, and filtering options to tailor the
   * results to your needs.
   */
  list(
    query: CampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicCampaignsPage, PublicCampaign> {
    return this._client.getAPIList('/marketing/campaigns/2026-03', Page<PublicCampaign>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a specified campaign from the system. This call will return a 204 No
   * Content response regardless of whether the campaignGuid provided corresponds to
   * an existing campaign or not.
   */
  delete(campaignGuid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/marketing/campaigns/2026-03/${campaignGuid}`, {
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
   */
  get(
    campaignGuid: string,
    query: CampaignGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicCampaignWithAssets> {
    return this._client.get(path`/marketing/campaigns/2026-03/${campaignGuid}`, { query, ...options });
  }
}

export type PublicCampaignsPage = Page<PublicCampaign>;

export type ContactReferencesPage = Page<ContactReference>;

export interface BatchInputPublicCampaignBatchUpdateItem {
  /**
   * An array of PublicCampaignBatchUpdateItem objects, each containing the ID and
   * properties to update for a specific campaign.
   */
  inputs: Array<PublicCampaignBatchUpdateItem>;
}

export interface BatchInputPublicCampaignDeleteInput {
  /**
   * An array of PublicCampaignDeleteInput objects, each specifying a campaign to be
   * deleted. Each object must include the campaign's unique identifier.
   */
  inputs: Array<PublicCampaignDeleteInput>;
}

export interface BatchInputPublicCampaignInput {
  /**
   * An array of PublicCampaignInput objects, each representing the properties of a
   * campaign to be created in the batch. This property is required.
   */
  inputs: Array<PublicCampaignInput>;
}

export interface BatchInputPublicCampaignReadInput {
  /**
   * An array of PublicCampaignReadInput objects, each containing the ID of a
   * campaign to be read. This property is required.
   */
  inputs: Array<PublicCampaignReadInput>;
}

export interface BatchResponsePublicCampaign {
  /**
   * The date and time when the batch operation was completed, formatted as a
   * date-time string.
   */
  completedAt: string;

  /**
   * An array of results from the batch operation, each item representing a public
   * campaign.
   */
  results: Array<PublicCampaign>;

  /**
   * The date and time when the batch operation started, formatted as a date-time
   * string.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, with possible values: CANCELED,
   * COMPLETE, PENDING, PROCESSING.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of errors that occurred during the batch operation, each item detailing
   * a specific error.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A map of related links associated with the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the batch operation.
   */
  numErrors?: number;

  /**
   * The date and time when the batch operation was requested, formatted as a
   * date-time string.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicCampaignWithAssets {
  /**
   * The timestamp when the batch request processing was completed.
   */
  completedAt: string;

  /**
   * An array of results from the batch operation, each representing a public
   * campaign with assets.
   */
  results: Array<PublicCampaignWithAssets>;

  /**
   * The timestamp when the processing of the batch request began.
   */
  startedAt: string;

  /**
   * The current processing status of the batch operation, with possible values:
   * CANCELED, COMPLETE, PENDING, PROCESSING.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of errors encountered during the batch operation, each described by a
   * StandardError object.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A collection of URLs linking to related resources or documentation.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch operation.
   */
  numErrors?: number;

  /**
   * The timestamp when the batch request was initially made.
   */
  requestedAt?: string;
}

export interface CollectionResponseContactReferenceForwardPaging {
  /**
   * An array of contact references, each containing an identifier for a contact.
   */
  results: Array<ContactReference>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponsePublicCampaignAsset {
  /**
   * An array of public campaign assets. Each item in the array is an object
   * representing a campaign asset.
   */
  results: Array<PublicCampaignAsset>;

  paging?: Shared.Paging;
}

export interface CollectionResponsePublicCampaignAssetForwardPaging {
  /**
   * An array of public campaign assets. Each item in the array is a reference to a
   * PublicCampaignAsset object.
   */
  results: Array<PublicCampaignAsset>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalPublicCampaign {
  /**
   * An array of PublicCampaign objects, each representing a campaign with its
   * associated properties.
   */
  results: Array<PublicCampaign>;

  /**
   * An integer representing the total number of public campaigns available.
   */
  total: number;

  paging?: Shared.Paging;
}

export interface ContactReference {
  /**
   * Unique identifier for the contact.
   */
  id: string;
}

export interface MetricsCounters {
  /**
   * The number of contacts influenced by the campaign.
   */
  influencedContacts: number;

  /**
   * The number of new contacts attributed to the campaign as the first touchpoint.
   */
  newContactsFirstTouch: number;

  /**
   * The number of new contacts attributed to the campaign as the last touchpoint.
   */
  newContactsLastTouch: number;

  /**
   * The total number of sessions generated by the campaign.
   */
  sessions: number;
}

export interface PublicBudgetItem {
  /**
   * The unique identifier for the budget item.
   */
  id: string;

  /**
   * The monetary amount allocated for the budget item.
   */
  amount: number;

  /**
   * The timestamp when the budget item was created.
   */
  createdAt: number;

  /**
   * The name of the budget item.
   */
  name: string;

  /**
   * The order of the budget item, indicating its sequence based on creation date.
   */
  order: number;

  /**
   * The timestamp when the budget item was last updated.
   */
  updatedAt: number;

  /**
   * A description of the budget item.
   */
  description?: string;
}

export interface PublicBudgetItemInput {
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

export interface PublicBudgetTotals {
  /**
   * An array of budget items associated with the campaign. Each item is represented
   * by a PublicBudgetItem object.
   */
  budgetItems: Array<PublicBudgetItem>;

  /**
   * The currency code used for the budget and spend amounts, following ISO 4217
   * standards.
   */
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

  /**
   * An array of spend items associated with the campaign. Each item is represented
   * by a PublicSpendItem object.
   */
  spendItems: Array<PublicSpendItem>;

  /**
   * The total budget allocated for the campaign.
   */
  budgetTotal?: number;

  /**
   * The remaining budget available for the campaign after accounting for all spend
   * items.
   */
  remainingBudget?: number;

  /**
   * The total amount spent across all spend items in the campaign.
   */
  spendTotal?: number;
}

export interface PublicBusinessUnit {
  /**
   * The unique identifier for the business unit, represented as an integer.
   */
  id: number;
}

export interface PublicCampaign {
  /**
   * The unique identifier for the campaign.
   */
  id: string;

  /**
   * An array of business units associated with the campaign, each represented by a
   * PublicBusinessUnit object.
   */
  businessUnits: Array<PublicBusinessUnit>;

  /**
   * The date and time when the campaign was created, formatted as a date-time
   * string.
   */
  createdAt: string;

  /**
   * A collection of key-value pairs representing additional properties of the
   * campaign.
   */
  properties: { [key: string]: string };

  /**
   * The date and time when the campaign was last updated, formatted as a date-time
   * string.
   */
  updatedAt: string;
}

export interface PublicCampaignAsset {
  /**
   * The unique identifier for the campaign asset.
   */
  id: string;

  /**
   * A collection of metrics associated with the campaign asset, represented as
   * key-value pairs.
   */
  metrics?: { [key: string]: number };

  /**
   * The name of the campaign asset.
   */
  name?: string;
}

export interface PublicCampaignBatchUpdateItem {
  /**
   * The unique identifier for the campaign to be updated.
   */
  id: string;

  /**
   * A set of key-value pairs representing the properties to be updated for the
   * campaign.
   */
  properties: { [key: string]: string };
}

export interface PublicCampaignDeleteInput {
  /**
   * The unique identifier for the campaign to be deleted.
   */
  id: string;
}

export interface PublicCampaignInput {
  /**
   * A collection of key-value pairs representing the properties of the campaign.
   * Each key is a property name, and the corresponding value is the property's
   * value.
   */
  properties: { [key: string]: string };
}

export interface PublicCampaignReadInput {
  /**
   * The unique identifier for a campaign.
   */
  id: string;
}

export interface PublicCampaignWithAssets {
  /**
   * The unique identifier for the campaign.
   */
  id: string;

  /**
   * Contains the assets associated with the campaign, each represented as a
   * collection of campaign assets.
   */
  assets: { [key: string]: CollectionResponsePublicCampaignAsset };

  /**
   * An array of business units associated with the campaign, each represented by a
   * PublicBusinessUnit object.
   */
  businessUnits: Array<PublicBusinessUnit>;

  /**
   * The date and time when the campaign was created, formatted as a date-time
   * string.
   */
  createdAt: string;

  /**
   * A map of key-value pairs representing the properties of the campaign.
   */
  properties: { [key: string]: string };

  /**
   * The date and time when the campaign was last updated, formatted as a date-time
   * string.
   */
  updatedAt: string;
}

export interface PublicSpendItem {
  /**
   * Unique identifier for the spend item.
   */
  id: string;

  /**
   * The monetary value associated with the spend item.
   */
  amount: number;

  /**
   * The timestamp indicating when the spend item was created.
   */
  createdAt: number;

  /**
   * The name assigned to the spend item.
   */
  name: string;

  /**
   * The sequence order of the spend item, where 0 is the oldest.
   */
  order: number;

  /**
   * The timestamp indicating when the spend item was last updated.
   */
  updatedAt: number;

  /**
   * A detailed explanation or notes about the spend item.
   */
  description?: string;
}

export interface PublicSpendItemInput {
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

export interface RevenueAttributionAggregate {
  /**
   * The number of contacts attributed to the campaign.
   */
  contactsNumber?: number;

  /**
   * The currency code used for the revenue attribution, with accepted values
   * including AED, AFN, ALL, and others.
   */
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

  /**
   * The total amount of deals attributed to the campaign.
   */
  dealAmount?: number;

  /**
   * The number of deals attributed to the campaign.
   */
  dealsNumber?: number;

  /**
   * The total revenue amount attributed to the campaign.
   */
  revenueAmount?: number;
}

export interface CampaignCreateParams {
  /**
   * A collection of key-value pairs representing the properties of the campaign.
   * Each key is a property name, and the corresponding value is the property's
   * value.
   */
  properties: { [key: string]: string };
}

export interface CampaignUpdateParams {
  /**
   * A collection of key-value pairs representing the properties of the campaign.
   * Each key is a property name, and the corresponding value is the property's
   * value.
   */
  properties: { [key: string]: string };
}

export interface CampaignListParams extends PageParams {
  name?: string;

  properties?: Array<string>;

  sort?: string;
}

export interface CampaignGetParams {
  endDate?: string;

  properties?: Array<string>;

  startDate?: string;
}

Campaigns.Assets = Assets;
Campaigns.Batch = Batch;
Campaigns.Budget = Budget;
Campaigns.Metrics = Metrics;
Campaigns.Spend = Spend;

export declare namespace Campaigns {
  export {
    type BatchInputPublicCampaignBatchUpdateItem as BatchInputPublicCampaignBatchUpdateItem,
    type BatchInputPublicCampaignDeleteInput as BatchInputPublicCampaignDeleteInput,
    type BatchInputPublicCampaignInput as BatchInputPublicCampaignInput,
    type BatchInputPublicCampaignReadInput as BatchInputPublicCampaignReadInput,
    type BatchResponsePublicCampaign as BatchResponsePublicCampaign,
    type BatchResponsePublicCampaignWithAssets as BatchResponsePublicCampaignWithAssets,
    type CollectionResponseContactReferenceForwardPaging as CollectionResponseContactReferenceForwardPaging,
    type CollectionResponsePublicCampaignAsset as CollectionResponsePublicCampaignAsset,
    type CollectionResponsePublicCampaignAssetForwardPaging as CollectionResponsePublicCampaignAssetForwardPaging,
    type CollectionResponseWithTotalPublicCampaign as CollectionResponseWithTotalPublicCampaign,
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
    Metrics as Metrics,
    type MetricGetAttributionMetricsParams as MetricGetAttributionMetricsParams,
    type MetricGetRevenueAttributionParams as MetricGetRevenueAttributionParams,
    type MetricListContactIDsByTypeParams as MetricListContactIDsByTypeParams,
  };

  export {
    Spend as Spend,
    type SpendCreateParams as SpendCreateParams,
    type SpendUpdateParams as SpendUpdateParams,
    type SpendDeleteParams as SpendDeleteParams,
    type SpendGetParams as SpendGetParams,
  };
}
