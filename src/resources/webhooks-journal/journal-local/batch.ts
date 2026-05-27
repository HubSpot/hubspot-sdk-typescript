// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['webhooksJournal', 'journalLocal', 'batch'] = Object.freeze([
    'webhooksJournal',
    'journalLocal',
    'batch',
  ] as const);

  /**
   * Execute a batch read operation on the webhooks journal. This endpoint allows you
   * to retrieve a batch of webhook journal entries by providing the necessary input
   * data. It is useful for processing multiple records in a single request,
   * streamlining data retrieval tasks.
   */
  get(
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    const { installPortalId, ...body } = params;
    return this._client.post('/webhooks-journal/journal-local/2026-03/batch/read', {
      query: { installPortalId },
      body,
      ...options,
    });
  }

  /**
   * Retrieve the earliest batch of webhook journal entries. This endpoint is useful
   * for accessing the oldest available data in the webhook journal, allowing users
   * to process or analyze historical webhook events. The number of entries to fetch
   * is specified by the 'count' path parameter.
   */
  getEarliest(
    count: number,
    query: BatchGetEarliestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/earliest/${count}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve a batch of webhook journal entries starting from a specified offset.
   * This endpoint is useful for paginating through large sets of webhook data. The
   * number of entries returned is determined by the 'count' parameter.
   */
  getFromOffset(
    count: number,
    params: BatchGetFromOffsetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseJournalFetchResponse> {
    const { offset, ...query } = params;
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/${offset}/next/${count}`, {
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
   * Query param: The ID of the portal where the webhooks are installed. This
   * parameter is optional and is used to specify the target portal for the
   * operation.
   */
  installPortalId?: number;
}

export interface BatchGetEarliestParams {
  /**
   * The ID of the portal installation to filter the webhook journal entries. This is
   * an optional integer parameter.
   */
  installPortalId?: number;
}

export interface BatchGetFromOffsetParams {
  /**
   * Path param: The starting point for the batch retrieval, specified as a string.
   */
  offset: string;

  /**
   * Query param: The ID of the portal where the webhooks are installed. This is an
   * optional parameter.
   */
  installPortalId?: number;
}

export declare namespace Batch {
  export {
    type BatchGetParams as BatchGetParams,
    type BatchGetEarliestParams as BatchGetEarliestParams,
    type BatchGetFromOffsetParams as BatchGetFromOffsetParams,
  };
}
