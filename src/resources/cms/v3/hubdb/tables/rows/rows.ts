// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as BatchAPI from './batch';
import { Batch, BatchReadParams } from './batch';
import * as DraftAPI from './draft/draft';
import {
  Draft,
  DraftCloneParams,
  DraftCreateParams,
  DraftDeleteAllParams,
  DraftListParams,
  DraftPatchAllParams,
  HubdbTableRowV3Request,
  HubdbUnifiedCollectionResponseWithTotal,
} from './draft/draft';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Rows extends APIResource {
  draft: DraftAPI.Draft = new DraftAPI.Draft(this._client);
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Add a new row to a table
   */
  create(
    tableIDOrName: string,
    body: RowCreateParams,
    options?: RequestOptions,
  ): APIPromise<HubdbTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`, { body, ...options });
  }

  /**
   * Get a table row
   */
  retrieve(rowID: string, params: RowRetrieveParams, options?: RequestOptions): APIPromise<HubdbTableRowV3> {
    const { tableIdOrName, ...query } = params;
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}`, { query, ...options });
  }

  /**
   * Get rows for a table
   */
  list(
    tableIDOrName: string,
    query: RowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DraftAPI.HubdbUnifiedCollectionResponseWithTotal> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`, { query, ...options });
  }
}

export interface HubdbTableRowV3 {
  values: { [key: string]: unknown };

  id?: string;

  childTableId?: string;

  createdAt?: string;

  name?: string;

  path?: string;

  publishedAt?: string;

  updatedAt?: string;
}

export interface RowCreateParams {
  values: { [key: string]: unknown };

  childTableId?: number;

  displayIndex?: number;

  name?: string;

  path?: string;
}

export interface RowRetrieveParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface RowListParams {
  after?: string;

  archived?: boolean;

  limit?: number;

  offset?: number;

  properties?: Array<string>;

  sort?: Array<string>;
}

Rows.Draft = Draft;
Rows.Batch = Batch;

export declare namespace Rows {
  export {
    type HubdbTableRowV3 as HubdbTableRowV3,
    type RowCreateParams as RowCreateParams,
    type RowRetrieveParams as RowRetrieveParams,
    type RowListParams as RowListParams,
  };

  export {
    Draft as Draft,
    type HubdbTableRowV3Request as HubdbTableRowV3Request,
    type HubdbUnifiedCollectionResponseWithTotal as HubdbUnifiedCollectionResponseWithTotal,
    type DraftCreateParams as DraftCreateParams,
    type DraftListParams as DraftListParams,
    type DraftCloneParams as DraftCloneParams,
    type DraftDeleteAllParams as DraftDeleteAllParams,
    type DraftPatchAllParams as DraftPatchAllParams,
  };

  export { Batch as Batch, type BatchReadParams as BatchReadParams };
}
