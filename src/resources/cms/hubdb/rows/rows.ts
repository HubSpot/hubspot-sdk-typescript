// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HubdbAPI from '../hubdb';
import { RandomAccessCollectionResponseWithTotalHubDBTableRowV3ResultsPage } from '../hubdb';
import * as DraftAPI from './draft/draft';
import { Draft } from './draft/draft';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Rows extends APIResource {
  draft: DraftAPI.Draft = new DraftAPI.Draft(this._client);

  /**
   * Add a new row to a table
   */
  create(
    tableIDOrName: string,
    body: RowCreateParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`, { body, ...options });
  }

  /**
   * Get rows for a table
   */
  list(
    tableIDOrName: string,
    query: RowListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RandomAccessCollectionResponseWithTotalHubDBTableRowV3ResultsPage, unknown> {
    return this._client.getAPIList(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`, Page<unknown>, {
      query,
      ...options,
    });
  }

  /**
   * Clone a row
   */
  cloneDraft(
    rowID: string,
    params: RowCloneDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, name } = params;
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft/clone`, {
      query: { name },
      ...options,
    });
  }

  /**
   * Permanently deletes a row
   */
  deleteDraft(rowID: string, params: RowDeleteDraftParams, options?: RequestOptions): APIPromise<void> {
    const { tableIdOrName } = params;
    return this._client.delete(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a table row
   */
  get(rowID: string, params: RowGetParams, options?: RequestOptions): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, ...query } = params;
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}`, { query, ...options });
  }

  /**
   * Get a row from the draft table
   */
  getDraft(
    rowID: string,
    params: RowGetDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, ...query } = params;
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      query,
      ...options,
    });
  }

  /**
   * Get rows from draft table
   */
  listDraft(
    tableIDOrName: string,
    query: RowListDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft`, { query, ...options });
  }

  /**
   * Replaces an existing row
   */
  replaceDraft(
    rowID: string,
    params: RowReplaceDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, ...body } = params;
    return this._client.put(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      body,
      ...options,
    });
  }

  /**
   * Updates an existing row
   */
  updateDraft(
    rowID: string,
    params: RowUpdateDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, ...body } = params;
    return this._client.patch(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      body,
      ...options,
    });
  }
}

export interface RowCreateParams {
  values: { [key: string]: HubdbAPI.Variant };

  childTableId?: number;

  displayIndex?: number;

  name?: string;

  path?: string;
}

export interface RowListParams extends PageParams {
  archived?: boolean;

  offset?: number;

  properties?: Array<string>;

  sort?: Array<string>;
}

export interface RowCloneDraftParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  name?: string;
}

export interface RowDeleteDraftParams {
  tableIdOrName: string;
}

export interface RowGetParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface RowGetDraftParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface RowListDraftParams {
  after?: string;

  archived?: boolean;

  limit?: number;

  offset?: number;

  properties?: Array<string>;

  sort?: Array<string>;
}

export interface RowReplaceDraftParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Body param:
   */
  values: { [key: string]: HubdbAPI.Variant };

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

export interface RowUpdateDraftParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Body param:
   */
  values: { [key: string]: HubdbAPI.Variant };

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

Rows.Draft = Draft;

export declare namespace Rows {
  export {
    type RowCreateParams as RowCreateParams,
    type RowListParams as RowListParams,
    type RowCloneDraftParams as RowCloneDraftParams,
    type RowDeleteDraftParams as RowDeleteDraftParams,
    type RowGetParams as RowGetParams,
    type RowGetDraftParams as RowGetDraftParams,
    type RowListDraftParams as RowListDraftParams,
    type RowReplaceDraftParams as RowReplaceDraftParams,
    type RowUpdateDraftParams as RowUpdateDraftParams,
  };

  export { Draft as Draft };
}

export { type RandomAccessCollectionResponseWithTotalHubDBTableRowV3ResultsPage };
