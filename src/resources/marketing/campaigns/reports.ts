// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Reports extends APIResource {
  /**
   * This endpoint retrieves key attribution metrics for a specified campaign, such
   * as sessions, new contacts, and influenced contacts.
   *
   * @example
   * ```ts
   * const metricsCounters =
   *   await client.marketing.campaigns.reports.getAttributionMetrics(
   *     'campaignGuid',
   *   );
   * ```
   */
  getAttributionMetrics(
    campaignGuid: string,
    query: ReportGetAttributionMetricsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.MetricsCounters> {
    return this._client.get(path`/marketing/v3/campaigns/${campaignGuid}/reports/metrics`, {
      query,
      ...options,
    });
  }

  /**
   * Fetch revenue attribution report data for a specified campaign
   *
   * @example
   * ```ts
   * const revenueAttributionAggregate =
   *   await client.marketing.campaigns.reports.getRevenueAttribution(
   *     'campaignGuid',
   *   );
   * ```
   */
  getRevenueAttribution(
    campaignGuid: string,
    query: ReportGetRevenueAttributionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.RevenueAttributionAggregate> {
    return this._client.get(path`/marketing/v3/campaigns/${campaignGuid}/reports/revenue`, {
      query,
      ...options,
    });
  }

  /**
   * Fetch the list of contact IDs for the specified campaign and contact type
   *
   * @example
   * ```ts
   * const collectionResponseContactReferenceForwardPaging =
   *   await client.marketing.campaigns.reports.listContactIDsByType(
   *     'contactType',
   *     { campaignGuid: 'campaignGuid' },
   *   );
   * ```
   */
  listContactIDsByType(
    contactType: string,
    params: ReportListContactIDsByTypeParams,
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.CollectionResponseContactReferenceForwardPaging> {
    const { campaignGuid, ...query } = params;
    return this._client.get(path`/marketing/v3/campaigns/${campaignGuid}/reports/contacts/${contactType}`, {
      query,
      ...options,
    });
  }
}

export interface ReportGetAttributionMetricsParams {
  /**
   * End date for the report data, formatted as YYYY-MM-DD. Default value: Current
   * date
   */
  endDate?: string;

  /**
   * The start date for the report data, formatted as YYYY-MM-DD. Default value:
   * 2006-01-01
   */
  startDate?: string;
}

export interface ReportGetRevenueAttributionParams {
  /**
   * Allowed values: LINEAR, FIRST_INTERACTION, LAST_INTERACTION, FULL_PATH,
   * U_SHAPED, W_SHAPED, TIME_DECAY, J_SHAPED, INVERSE_J_SHAPED Default value: LINEAR
   */
  attributionModel?: string;

  /**
   * End date for the report data, formatted as YYYY-MM-DD. Default value: Current
   * date
   */
  endDate?: string;

  /**
   * The start date for the report data, formatted as YYYY-MM-DD. Default value:
   * 2006-01-01
   */
  startDate?: string;
}

export interface ReportListContactIDsByTypeParams {
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
   * Query param: End date for the report data, formatted as YYYY-MM-DD. Default
   * value: Current date
   */
  endDate?: string;

  /**
   * Query param: Limit for the number of contacts to fetch Default: 100
   */
  limit?: number;

  /**
   * Query param: The start date for the report data, formatted as YYYY-MM-DD.
   * Default value: 2006-01-01
   */
  startDate?: string;
}

export declare namespace Reports {
  export {
    type ReportGetAttributionMetricsParams as ReportGetAttributionMetricsParams,
    type ReportGetRevenueAttributionParams as ReportGetRevenueAttributionParams,
    type ReportListContactIDsByTypeParams as ReportListContactIDsByTypeParams,
  };
}
