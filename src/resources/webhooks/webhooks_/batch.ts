// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WebhooksAPI from './webhooks_';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Batch create event subscriptions for the specified app.
   */
  create(
    appID: number,
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseSubscriptionResponse> {
    return this._client.post(path`/webhooks/2026-03/${appID}/subscriptions/batch/update`, {
      body,
      ...options,
    });
  }

  getEarliest(
    count: number,
    query: BatchGetEarliestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/earliest/${count}`, {
      query,
      ...options,
    });
  }

  getLatest(
    count: number,
    query: BatchGetLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/latest/${count}`, {
      query,
      ...options,
    });
  }

  getNext(
    count: number,
    params: BatchGetNextParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseJournalFetchResponse> {
    const { offset, ...query } = params;
    return this._client.get(path`/webhooks-journal/journal/2026-03/batch/${offset}/next/${count}`, {
      query,
      ...options,
    });
  }

  read(
    params: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseJournalFetchResponse> {
    const { installPortalId, ...body } = params;
    return this._client.post('/webhooks-journal/journal/2026-03/batch/read', {
      query: { installPortalId },
      body,
      ...options,
    });
  }
}

export interface BatchCreateParams {
  inputs: Array<WebhooksAPI.SubscriptionBatchUpdateRequest>;
}

export interface BatchGetEarliestParams {
  installPortalId?: number;
}

export interface BatchGetLatestParams {
  installPortalId?: number;
}

export interface BatchGetNextParams {
  /**
   * Path param
   */
  offset: string;

  /**
   * Query param
   */
  installPortalId?: number;
}

export interface BatchReadParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param
   */
  installPortalId?: number;
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchGetEarliestParams as BatchGetEarliestParams,
    type BatchGetLatestParams as BatchGetLatestParams,
    type BatchGetNextParams as BatchGetNextParams,
    type BatchReadParams as BatchReadParams,
  };
}
