// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../../core/resource';
import * as DailyAPI from '../../../../../../account-info/v3/api-usage/daily';
import * as RowsAPI from '../rows';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCloneParams,
  BatchCreateParams,
  BatchPurgeParams,
  BatchReadParams,
  BatchReplaceParams,
  BatchUpdateParams,
  HubdbBatchInputRowV3UpdateRequest,
  HubdbBatchResponseRowV3,
} from './batch';
import { APIPromise } from '../../../../../../../core/api-promise';
import { buildHeaders } from '../../../../../../../internal/headers';
import { RequestOptions } from '../../../../../../../internal/request-options';
import { path } from '../../../../../../../internal/utils/path';

export class Draft extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Replaces an existing row
   */
  create(
    rowID: string,
    params: DraftCreateParams,
    options?: RequestOptions,
  ): APIPromise<RowsAPI.HubdbTableRowV3> {
    const { tableIdOrName, ...body } = params;
    return this._client.put(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      body,
      ...options,
    });
  }

  /**
   * Get a row from the draft table
   */
  list(
    rowID: string,
    params: DraftListParams,
    options?: RequestOptions,
  ): APIPromise<RowsAPI.HubdbTableRowV3> {
    const { tableIdOrName, ...query } = params;
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      query,
      ...options,
    });
  }

  /**
   * Clone a row
   */
  clone(
    rowID: string,
    params: DraftCloneParams,
    options?: RequestOptions,
  ): APIPromise<RowsAPI.HubdbTableRowV3> {
    const { tableIdOrName, name } = params;
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft/clone`, {
      query: { name },
      ...options,
    });
  }

  /**
   * Permanently deletes a row
   */
  deleteAll(rowID: string, params: DraftDeleteAllParams, options?: RequestOptions): APIPromise<void> {
    const { tableIdOrName } = params;
    return this._client.delete(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates an existing row
   */
  patchAll(
    rowID: string,
    params: DraftPatchAllParams,
    options?: RequestOptions,
  ): APIPromise<RowsAPI.HubdbTableRowV3> {
    const { tableIdOrName, ...body } = params;
    return this._client.patch(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      body,
      ...options,
    });
  }
}

export interface HubdbTableRowV3Request {
  values: { [key: string]: unknown };

  childTableId?: number;

  displayIndex?: number;

  name?: string;

  path?: string;
}

export type HubdbUnifiedCollectionResponseWithTotal =
  | HubdbUnifiedCollectionResponseWithTotal.CmsHubdbRandomAccessCollectionResponseWithTotalHubDBTableRowV3
  | HubdbUnifiedCollectionResponseWithTotal.CmsHubdbStreamingCollectionResponseWithTotalHubDBTableRowV3;

export namespace HubdbUnifiedCollectionResponseWithTotal {
  export interface CmsHubdbRandomAccessCollectionResponseWithTotalHubDBTableRowV3 {
    results: Array<unknown>;

    total: number;

    type: 'RANDOM_ACCESS';

    paging?: CmsHubdbRandomAccessCollectionResponseWithTotalHubDBTableRowV3.Paging;
  }

  export namespace CmsHubdbRandomAccessCollectionResponseWithTotalHubDBTableRowV3 {
    export interface Paging {
      next?: Paging.Next;
    }

    export namespace Paging {
      export interface Next {
        offset: number;

        link?: string;
      }
    }
  }

  export interface CmsHubdbStreamingCollectionResponseWithTotalHubDBTableRowV3 {
    results: Array<unknown>;

    total: number;

    type: 'STREAMING';

    paging?: DailyAPI.Paging;
  }
}

export interface DraftCreateParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Body param:
   */
  values: { [key: string]: unknown };

  /**
   * Body param:
   */
  childTableId?: number;

  /**
   * Body param:
   */
  displayIndex?: number;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  path?: string;
}

export interface DraftListParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface DraftCloneParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  name?: string;
}

export interface DraftDeleteAllParams {
  tableIdOrName: string;
}

export interface DraftPatchAllParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Body param:
   */
  values: { [key: string]: unknown };

  /**
   * Body param:
   */
  childTableId?: number;

  /**
   * Body param:
   */
  displayIndex?: number;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  path?: string;
}

Draft.Batch = Batch;

export declare namespace Draft {
  export {
    type HubdbTableRowV3Request as HubdbTableRowV3Request,
    type HubdbUnifiedCollectionResponseWithTotal as HubdbUnifiedCollectionResponseWithTotal,
    type DraftCreateParams as DraftCreateParams,
    type DraftListParams as DraftListParams,
    type DraftCloneParams as DraftCloneParams,
    type DraftDeleteAllParams as DraftDeleteAllParams,
    type DraftPatchAllParams as DraftPatchAllParams,
  };

  export {
    Batch as Batch,
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
