// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HubdbAPI from '../hubdb';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Clones rows in the draft version of the specified table, given a set of row ids.
   * Maximum of 100 row ids per call.
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
   * Creates rows in the draft version of the specified table, given an array of row
   * objects. Maximum of 100 row object per call. See the overview section for more
   * details with an example.
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
   * Returns rows in the published version of the specified table, given a set of row
   * IDs. **Note:** This endpoint can be accessed without any authentication if the
   * table is set to be allowed for public access.
   */
  getBatch(
    tableIDOrName: string,
    body: BatchGetBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/batch/read`, {
      body,
      ...options,
    });
  }

  /**
   * Returns rows in the draft version of the specified table, given a set of row
   * IDs.
   */
  getDraftBatch(
    tableIDOrName: string,
    body: BatchGetDraftBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/read`, {
      body,
      ...options,
    });
  }

  /**
   * Permanently deletes rows from the draft version of the table, given a set of row
   * IDs. Maximum of 100 row IDs per call.
   */
  purgeBatch(tableIDOrName: string, body: BatchPurgeBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/purge`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Replaces multiple rows as a batch in the draft version of the table, with a
   * maximum of 100 rows per call. See the endpoint
   * `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a
   * single row.
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
   * Updates multiple rows as a batch in the draft version of the table, with a
   * maximum of 100 rows per call. See the endpoint
   * `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a
   * single row.
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

export interface BatchGetBatchParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface BatchGetDraftBatchParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface BatchPurgeBatchParams {
  /**
   * Strings to input.
   */
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
    type BatchGetBatchParams as BatchGetBatchParams,
    type BatchGetDraftBatchParams as BatchGetDraftBatchParams,
    type BatchPurgeBatchParams as BatchPurgeBatchParams,
    type BatchReplaceBatchParams as BatchReplaceBatchParams,
    type BatchUpdateBatchParams as BatchUpdateBatchParams,
  };
}
