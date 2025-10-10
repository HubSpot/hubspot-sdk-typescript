// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as HubdbAPI from '../../hubdb';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Clone rows in batch
   */
  cloneBatch(
    tableIDOrName: string,
    body: BatchCloneBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/clone`, {
      body,
      ...options,
    });
  }

  /**
   * Create rows in batch
   */
  createBatch(
    tableIDOrName: string,
    body: BatchCreateBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Permanently deletes rows
   */
  purgeBatch(tableIDOrName: string, body: BatchPurgeBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/purge`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a set of rows
   */
  readBatch(
    tableIDOrName: string,
    body: BatchReadBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/batch/read`, {
      body,
      ...options,
    });
  }

  /**
   * Get a set of rows from draft table
   */
  readDraftBatch(
    tableIDOrName: string,
    body: BatchReadDraftBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/read`, {
      body,
      ...options,
    });
  }

  /**
   * Replace rows in batch in draft table
   */
  replaceBatch(
    tableIDOrName: string,
    body: BatchReplaceBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/replace`, {
      body,
      ...options,
    });
  }

  /**
   * Update rows in batch in draft table
   */
  updateBatch(
    tableIDOrName: string,
    body: BatchUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/update`, {
      body,
      ...options,
    });
  }
}

export interface BatchCloneBatchParams {
  inputs: Array<HubdbAPI.HubDBTableRowBatchCloneRequest>;
}

export interface BatchCreateBatchParams {
  inputs: Array<HubdbAPI.HubDBTableRowV3Request>;
}

export interface BatchPurgeBatchParams {
  inputs: Array<string>;
}

export interface BatchReadBatchParams {
  inputs: Array<string>;
}

export interface BatchReadDraftBatchParams {
  inputs: Array<string>;
}

export interface BatchReplaceBatchParams {
  inputs: Array<HubdbAPI.HubDBTableRowV3BatchUpdateRequest>;
}

export interface BatchUpdateBatchParams {
  inputs: Array<HubdbAPI.HubDBTableRowV3BatchUpdateRequest>;
}

export declare namespace Batch {
  export {
    type BatchCloneBatchParams as BatchCloneBatchParams,
    type BatchCreateBatchParams as BatchCreateBatchParams,
    type BatchPurgeBatchParams as BatchPurgeBatchParams,
    type BatchReadBatchParams as BatchReadBatchParams,
    type BatchReadDraftBatchParams as BatchReadDraftBatchParams,
    type BatchReplaceBatchParams as BatchReplaceBatchParams,
    type BatchUpdateBatchParams as BatchUpdateBatchParams,
  };
}
