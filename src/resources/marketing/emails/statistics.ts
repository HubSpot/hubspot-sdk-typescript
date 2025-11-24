// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EmailsAPI from './emails';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Statistics extends APIResource {
  /**
   * Use this endpoint to get aggregated statistics of emails sent in a specified
   * time span. It also returns the list of emails that were sent during the time
   * span.
   *
   * @example
   * ```ts
   * const aggregateEmailStatistics =
   *   await client.marketing.emails.statistics.get();
   * ```
   */
  get(
    query: StatisticGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailsAPI.AggregateEmailStatistics> {
    return this._client.get('/marketing/v3/emails/statistics/list', { query, ...options });
  }

  /**
   * Get aggregated statistics in intervals for a specified time span. Each interval
   * contains aggregated statistics of the emails that were sent in that time.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalEmailStatisticIntervalNoPaging =
   *   await client.marketing.emails.statistics.getHistogram();
   * ```
   */
  getHistogram(
    query: StatisticGetHistogramParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailsAPI.CollectionResponseWithTotalEmailStatisticIntervalNoPaging> {
    return this._client.get('/marketing/v3/emails/statistics/histogram', { query, ...options });
  }
}

export interface StatisticGetParams {
  /**
   * Filter by email IDs. Only include statistics of emails with these IDs.
   */
  emailIds?: Array<number>;

  /**
   * The end timestamp of the time span, in ISO8601 representation.
   */
  endTimestamp?: string;

  /**
   * Specifies which email properties should be returned. All properties will be
   * returned by default.
   */
  property?: string;

  /**
   * The start timestamp of the time span, in ISO8601 representation.
   */
  startTimestamp?: string;
}

export interface StatisticGetHistogramParams {
  /**
   * Filter by email IDs. Only include statistics of emails with these IDs.
   */
  emailIds?: Array<number>;

  /**
   * The end timestamp of the time span, in ISO8601 representation.
   */
  endTimestamp?: string;

  /**
   * The interval to aggregate statistics for.
   */
  interval?: 'DAY' | 'HOUR' | 'MINUTE' | 'MONTH' | 'QUARTER' | 'QUARTER_HOUR' | 'SECOND' | 'WEEK' | 'YEAR';

  /**
   * The start timestamp of the time span, in ISO8601 representation.
   */
  startTimestamp?: string;
}

export declare namespace Statistics {
  export {
    type StatisticGetParams as StatisticGetParams,
    type StatisticGetHistogramParams as StatisticGetHistogramParams,
  };
}
