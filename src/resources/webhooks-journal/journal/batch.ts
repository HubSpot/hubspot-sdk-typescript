// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['webhooksJournal', 'journal', 'batch'] = Object.freeze([
    'webhooksJournal',
    'journal',
    'batch',
  ] as const);

  /**
   * Execute a batch read operation on the webhooks journal for the specified date,
   * 2026-03. This endpoint allows you to retrieve multiple entries from the webhooks
   * journal in a single request, which can be useful for processing large amounts of
   * data efficiently. Ensure that the request body is provided in the required
   * format.
   */
  get(
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    const { installPortalId, ...body } = params;
    return this._client.post('/webhooks-journal/journal/2026-03/batch/read', {
      query: { installPortalId },
      body,
      ...options,
    });
  }

  /**
   * Retrieve the earliest batch of webhook journal entries for a specified count.
   * This endpoint is useful for accessing historical webhook data in batches,
   * allowing you to process or analyze older entries. The number of entries
   * retrieved is determined by the count parameter.
   */
  getEarliest(
    count: number,
    query: BatchGetEarliestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/earliest/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve a batch of webhook journal entries starting from a specified offset.
   * This endpoint allows you to fetch a defined number of entries, which can be
   * useful for processing large datasets in manageable chunks.
   */
  getFromOffset(
    count: number,
    params: BatchGetFromOffsetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    const { offset, ...query } = params;
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/${offset}/next/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the latest batch of webhook journal entries up to the specified count.
   * This endpoint is useful for fetching recent webhook data for analysis or
   * processing. The count parameter determines the maximum number of entries to
   * return.
   */
  getLatest(
    count: number,
    query: BatchGetLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/latest/${count}`, {
      query,
      ...options,
    });
  }
}
export class Batch extends BaseBatch {}

export interface BatchGetParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: An integer representing the ID of the portal installation for which
   * the webhooks journal data should be retrieved.
   */
  installPortalId?: number;
}

export interface BatchGetEarliestParams {
  /**
   * The ID of the portal installation. This is an integer value that specifies which
   * portal's data to access.
   */
  installPortalId?: number;
}

export interface BatchGetFromOffsetParams {
  /**
   * Path param: The starting point for fetching the journal entries. This is a
   * string value.
   */
  offset: string;

  /**
   * Query param: The ID of the portal installation. This is an integer value.
   */
  installPortalId?: number;
}

export interface BatchGetLatestParams {
  /**
   * The ID of the portal installation. This is an integer value used to specify the
   * portal context for the request.
   */
  installPortalId?: number;
}

export declare namespace Batch {
  export {
    type BatchGetParams as BatchGetParams,
    type BatchGetEarliestParams as BatchGetEarliestParams,
    type BatchGetFromOffsetParams as BatchGetFromOffsetParams,
    type BatchGetLatestParams as BatchGetLatestParams,
  };
}
