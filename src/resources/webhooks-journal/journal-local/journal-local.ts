// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as BatchAPI from './batch';
import { BaseBatch, Batch, BatchGetEarliestParams, BatchGetFromOffsetParams, BatchGetParams } from './batch';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseJournalLocal extends APIResource {
  static override readonly _key: readonly ['webhooksJournal', 'journalLocal'] = Object.freeze([
    'webhooksJournal',
    'journalLocal',
  ] as const);

  /**
   * Retrieve the earliest webhook journal entries for the specified portal. This
   * endpoint can be used to access the oldest records available in the webhook
   * journal, which may be useful for auditing or historical analysis.
   */
  getEarliest(
    query: JournalLocalGetEarliestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal-local/2026-03/earliest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the latest entries from the webhooks journal for the specified portal.
   * This endpoint is useful for accessing the most recent webhook events and their
   * statuses, allowing you to monitor and debug webhook activity effectively.
   */
  getLatest(
    query: JournalLocalGetLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal/2026-03/latest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the next set of webhook journal entries starting from a specified
   * offset. This endpoint is useful for paginating through large sets of webhook
   * data, allowing you to continue from where a previous request left off.
   */
  getNextFromOffset(
    offset: string,
    query: JournalLocalGetNextFromOffsetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/offset/${offset}/next`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the status of a specific webhook journal entry using its unique status
   * ID. This endpoint is useful for monitoring the progress or outcome of webhook
   * journal entries, allowing you to check if an entry is pending, in progress,
   * completed, failed, or expired.
   */
  getStatus(statusID: string, options?: RequestOptions): APIPromise<Shared.SnapshotStatusResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/status/${statusID}`, options);
  }
}
export class JournalLocal extends BaseJournalLocal {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

export interface JournalLocalGetEarliestParams {
  /**
   * The ID of the portal for which to retrieve the earliest webhook journal entries.
   * This parameter is optional and should be an integer.
   */
  installPortalId?: number;
}

export interface JournalLocalGetLatestParams {
  /**
   * The unique identifier of the portal installation for which to retrieve the
   * latest journal entries. This parameter is optional and should be an integer.
   */
  installPortalId?: number;
}

export interface JournalLocalGetNextFromOffsetParams {
  /**
   * The ID of the portal installation to filter the webhook journal entries. This is
   * an integer value.
   */
  installPortalId?: number;
}

JournalLocal.Batch = Batch;
JournalLocal.BaseBatch = BaseBatch;

export declare namespace JournalLocal {
  export {
    type JournalLocalGetEarliestParams as JournalLocalGetEarliestParams,
    type JournalLocalGetLatestParams as JournalLocalGetLatestParams,
    type JournalLocalGetNextFromOffsetParams as JournalLocalGetNextFromOffsetParams,
  };

  export {
    Batch as Batch,
    BaseBatch as BaseBatch,
    type BatchGetParams as BatchGetParams,
    type BatchGetEarliestParams as BatchGetEarliestParams,
    type BatchGetFromOffsetParams as BatchGetFromOffsetParams,
  };
}
