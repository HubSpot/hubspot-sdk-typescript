// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../../core/resource';
import * as RowsAPI from '../rows';
import * as DraftAPI from './draft';
import { APIPromise } from '../../../../../../../core/api-promise';
import { buildHeaders } from '../../../../../../../internal/headers';
import { RequestOptions } from '../../../../../../../internal/request-options';
import { path } from '../../../../../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Create rows in batch
   */
  create(
    tableIDOrName: string,
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<HubdbBatchResponseRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Update rows in batch in draft table
   */
  update(
    tableIDOrName: string,
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<HubdbBatchResponseRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/update`, {
      body,
      ...options,
    });
  }

  /**
   * Clone rows in batch
   */
  clone(
    tableIDOrName: string,
    body: BatchCloneParams,
    options?: RequestOptions,
  ): APIPromise<HubdbBatchResponseRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/clone`, {
      body,
      ...options,
    });
  }

  /**
   * Permanently deletes rows
   */
  purge(tableIDOrName: string, body: BatchPurgeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/purge`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a set of rows from draft table
   */
  read(
    tableIDOrName: string,
    body: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<HubdbBatchResponseRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/read`, {
      body,
      ...options,
    });
  }

  /**
   * Replace rows in batch in draft table
   */
  replace(
    tableIDOrName: string,
    body: BatchReplaceParams,
    options?: RequestOptions,
  ): APIPromise<HubdbBatchResponseRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/replace`, {
      body,
      ...options,
    });
  }
}

export interface HubdbBatchInputRowV3UpdateRequest {
  inputs: Array<HubdbBatchInputRowV3UpdateRequest.Input>;
}

export namespace HubdbBatchInputRowV3UpdateRequest {
  export interface Input {
    id: string;

    values: { [key: string]: unknown };

    childTableId?: number;

    displayIndex?: number;

    name?: string;

    path?: string;
  }
}

export interface HubdbBatchResponseRowV3 {
  completedAt?: string;

  links?: { [key: string]: string };

  requestedAt?: string;

  results?: Array<RowsAPI.HubdbTableRowV3>;

  startedAt?: string;

  status?: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';
}

export interface BatchCreateParams {
  inputs: Array<DraftAPI.HubdbTableRowV3Request>;
}

export interface BatchUpdateParams {
  inputs: Array<BatchUpdateParams.Input>;
}

export namespace BatchUpdateParams {
  export interface Input {
    id: string;

    values: { [key: string]: unknown };

    childTableId?: number;

    displayIndex?: number;

    name?: string;

    path?: string;
  }
}

export interface BatchCloneParams {
  inputs: Array<BatchCloneParams.Input>;
}

export namespace BatchCloneParams {
  export interface Input {
    id: string;

    name?: string;
  }
}

export interface BatchPurgeParams {
  inputs: Array<string>;
}

export interface BatchReadParams {
  inputs: Array<string>;
}

export interface BatchReplaceParams {
  inputs: Array<BatchReplaceParams.Input>;
}

export namespace BatchReplaceParams {
  export interface Input {
    id: string;

    values: { [key: string]: unknown };

    childTableId?: number;

    displayIndex?: number;

    name?: string;

    path?: string;
  }
}

export declare namespace Batch {
  export {
    type HubdbBatchInputRowV3UpdateRequest as HubdbBatchInputRowV3UpdateRequest,
    type HubdbBatchResponseRowV3 as HubdbBatchResponseRowV3,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchCloneParams as BatchCloneParams,
    type BatchPurgeParams as BatchPurgeParams,
    type BatchReadParams as BatchReadParams,
    type BatchReplaceParams as BatchReplaceParams,
  };
}
