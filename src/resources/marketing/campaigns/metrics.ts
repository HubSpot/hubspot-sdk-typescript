// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { ContactReferencesPage } from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseMetrics extends APIResource {
  static override readonly _key: readonly ['marketing', 'campaigns', 'metrics'] = Object.freeze([
    'marketing',
    'campaigns',
    'metrics',
  ] as const);

  /**
   * This endpoint retrieves key attribution metrics for a specified campaign, such
   * as sessions, new contacts, and influenced contacts.
   */
  getAttributionMetrics(
    campaignGuid: string,
    query: MetricGetAttributionMetricsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.MetricsCounters> {
    return this._client.get(path`/marketing/campaigns/2026-03/${campaignGuid}/reports/metrics`, {
      query,
      ...options,
    });
  }

  /**
   * Fetch revenue attribution report data for a specified campaign
   */
  getRevenueAttribution(
    campaignGuid: string,
    query: MetricGetRevenueAttributionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CampaignsAPI.RevenueAttributionAggregate> {
    return this._client.get(path`/marketing/campaigns/2026-03/${campaignGuid}/reports/revenue`, {
      query,
      ...options,
    });
  }

  /**
   * Fetch the list of contact IDs for the specified campaign and contact type
   */
  listContactIDsByType(
    contactType: string,
    params: MetricListContactIDsByTypeParams,
    options?: RequestOptions,
  ): PagePromise<ContactReferencesPage, CampaignsAPI.ContactReference> {
    const { campaignGuid, ...query } = params;
    return this._client.getAPIList(
      path`/marketing/campaigns/2026-03/${campaignGuid}/reports/contacts/${contactType}`,
      Page<CampaignsAPI.ContactReference>,
      { query, ...options },
    );
  }
}
export class Metrics extends BaseMetrics {}

export interface MetricGetAttributionMetricsParams {
  endDate?: string;

  startDate?: string;
}

export interface MetricGetRevenueAttributionParams {
  attributionModel?: string;

  /**
   * End date to fetch attribution data, YYYY-MM-DD
   */
  endDate?: string;

  /**
   * Start date to fetch attribution data, YYYY-MM-DD
   */
  startDate?: string;
}

export interface MetricListContactIDsByTypeParams extends PageParams {
  /**
   * Path param: The unique identifier of the campaign
   */
  campaignGuid: string;

  /**
   * Query param
   */
  endDate?: string;

  /**
   * Query param
   */
  startDate?: string;
}

export declare namespace Metrics {
  export {
    type MetricGetAttributionMetricsParams as MetricGetAttributionMetricsParams,
    type MetricGetRevenueAttributionParams as MetricGetRevenueAttributionParams,
    type MetricListContactIDsByTypeParams as MetricListContactIDsByTypeParams,
  };
}

export { type ContactReferencesPage };
