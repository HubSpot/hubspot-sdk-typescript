// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WebhooksAPI from './webhooks_';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Batch extends APIResource {
  get(
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseJournalFetchResponse> {
    const { installPortalId, ...body } = params;
    return this._client.post('/webhooks-journal/journal-local/2026-03/batch/read', {
      query: { installPortalId },
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

  getLocal(
    params: BatchGetLocalParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseJournalFetchResponse> {
    const { installPortalId, ...body } = params;
    return this._client.post('/webhooks-journal/journal/2026-03/batch/read', {
      query: { installPortalId },
      body,
      ...options,
    });
  }

  getLocalEarliest(
    count: number,
    query: BatchGetLocalEarliestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/earliest/${count}`, {
      query,
      ...options,
    });
  }

  getLocalLatest(
    count: number,
    query: BatchGetLocalLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseJournalFetchResponse> {
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/latest/${count}`, {
      query,
      ...options,
    });
  }

  getLocalNext(
    count: number,
    params: BatchGetLocalNextParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseJournalFetchResponse> {
    const { offset, ...query } = params;
    return this._client.get(path`/webhooks-journal/journal-local/2026-03/batch/${offset}/next/${count}`, {
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

  /**
   * Batch create event subscriptions for the specified app.
   */
  updateSubscriptions(
    appID: number,
    body: BatchUpdateSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.BatchResponseSubscriptionResponse> {
    return this._client.post(path`/webhooks/2026-03/${appID}/subscriptions/batch/update`, {
      body,
      ...options,
    });
  }
}

export interface BatchGetParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param
   */
  installPortalId?: number;
}

export interface BatchGetEarliestParams {
  installPortalId?: number;
}

export interface BatchGetLatestParams {
  installPortalId?: number;
}

export interface BatchGetLocalParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param
   */
  installPortalId?: number;
}

export interface BatchGetLocalEarliestParams {
  installPortalId?: number;
}

export interface BatchGetLocalLatestParams {
  installPortalId?: number;
}

export interface BatchGetLocalNextParams {
  /**
   * Path param
   */
  offset: string;

  /**
   * Query param
   */
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

export interface BatchUpdateSubscriptionsParams {
  inputs: Array<WebhooksAPI.SubscriptionBatchUpdateRequest>;
}

export declare namespace Batch {
  export {
    type BatchGetParams as BatchGetParams,
    type BatchGetEarliestParams as BatchGetEarliestParams,
    type BatchGetLatestParams as BatchGetLatestParams,
    type BatchGetLocalParams as BatchGetLocalParams,
    type BatchGetLocalEarliestParams as BatchGetLocalEarliestParams,
    type BatchGetLocalLatestParams as BatchGetLocalLatestParams,
    type BatchGetLocalNextParams as BatchGetLocalNextParams,
    type BatchGetNextParams as BatchGetNextParams,
    type BatchUpdateSubscriptionsParams as BatchUpdateSubscriptionsParams,
  };
}
