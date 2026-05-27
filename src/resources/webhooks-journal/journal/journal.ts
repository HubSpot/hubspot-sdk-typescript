// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as BatchAPI from './batch';
import {
  BaseBatch,
  Batch,
  BatchGetEarliestParams,
  BatchGetFromOffsetParams,
  BatchGetLatestParams,
  BatchGetParams,
} from './batch';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseJournal extends APIResource {
  static override readonly _key: readonly ['webhooksJournal', 'journal'] = Object.freeze([
    'webhooksJournal',
    'journal',
  ] as const);

  /**
   * Retrieve the earliest entry from the webhooks journal for the specified portal.
   * This endpoint is useful for accessing the first recorded webhook event in the
   * journal, which can be helpful for auditing or debugging purposes.
   */
  getEarliest(
    query: JournalGetEarliestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/webhooks-journal/journal/2026-03/earliest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the next set of entries from the webhooks journal starting from a
   * specified offset. This endpoint is useful for paginating through journal entries
   * to process or analyze webhook events sequentially.
   */
  getNextFromOffset(
    offset: string,
    query: JournalGetNextFromOffsetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/offset/${offset}/next`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the status of a specific webhook journal entry using its unique status
   * ID. This endpoint provides detailed information about the status, including
   * whether it is pending, in progress, completed, failed, or expired. It is useful
   * for monitoring and managing the state of webhook journal entries.
   */
  getStatus(statusID: string, options?: RequestOptions): APIPromise<Shared.SnapshotStatusResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/status/${statusID}`, options);
  }
}
export class Journal extends BaseJournal {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

export interface JournalGetEarliestParams {
  /**
   * The ID of the portal installation to filter the journal entries by. This is an
   * integer value.
   */
  installPortalId?: number;
}

export interface JournalGetNextFromOffsetParams {
  /**
   * The ID of the portal where the webhooks are installed. This is an integer value.
   */
  installPortalId?: number;
}

Journal.Batch = Batch;
Journal.BaseBatch = BaseBatch;

export declare namespace Journal {
  export {
    type JournalGetEarliestParams as JournalGetEarliestParams,
    type JournalGetNextFromOffsetParams as JournalGetNextFromOffsetParams,
  };

  export {
    Batch as Batch,
    BaseBatch as BaseBatch,
    type BatchGetParams as BatchGetParams,
    type BatchGetEarliestParams as BatchGetEarliestParams,
    type BatchGetFromOffsetParams as BatchGetFromOffsetParams,
    type BatchGetLatestParams as BatchGetLatestParams,
  };
}
