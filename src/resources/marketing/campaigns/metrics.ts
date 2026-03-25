// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignsAPI from './campaigns';
import { ContactReferencesPage } from './campaigns';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Metrics extends APIResource {
  /**
   * Fetch the metrics for a specific marketing campaign using its unique identifier.
   * This endpoint allows you to retrieve various performance metrics of the
   * campaign, which can be useful for analyzing the effectiveness of your marketing
   * efforts over a specified time period.
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
   * Fetch revenue attribution report data for a specific campaign. This endpoint
   * allows you to retrieve detailed revenue attribution information, which can be
   * filtered by attribution model and date range. It is useful for analyzing the
   * financial impact of marketing campaigns.
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
   * Fetch the list of contact IDs for the specified campaign and contact type. This
   * endpoint allows you to retrieve contact identifiers associated with a particular
   * campaign, filtered by the type of contact. It is useful for analyzing or
   * processing contacts involved in specific marketing campaigns.
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

export interface MetricGetAttributionMetricsParams {
  /**
   * The end date for fetching metrics, in YYYY-MM-DD format.
   */
  endDate?: string;

  /**
   * The start date for fetching metrics, in YYYY-MM-DD format.
   */
  startDate?: string;
}

export interface MetricGetRevenueAttributionParams {
  /**
   * The model used to attribute revenue to the campaign.
   */
  attributionModel?: string;

  /**
   * End date to fetch attribution data, YYYY-MM-DD.
   */
  endDate?: string;

  /**
   * Start date to fetch attribution data, YYYY-MM-DD.
   */
  startDate?: string;
}

export interface MetricListContactIDsByTypeParams extends PageParams {
  /**
   * Path param: The unique identifier of the campaign.
   */
  campaignGuid: string;

  /**
   * Query param: The end date for filtering contacts, formatted as a string.
   */
  endDate?: string;

  /**
   * Query param: The start date for filtering contacts, formatted as a string.
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
