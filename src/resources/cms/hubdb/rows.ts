// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HubdbAPI from './hubdb';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRows extends APIResource {
  static override readonly _key: readonly ['cms', 'hubdb', 'rows'] = Object.freeze([
    'cms',
    'hubdb',
    'rows',
  ] as const);

  /**
   * Add a new row to a HubDB table. New rows will be added to the draft version of
   * the table. Use the `/publish` endpoint to push these changes to published
   * version.
   */
  create(
    tableIDOrName: string,
    body: RowCreateParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/rows`, { body, ...options });
  }

  /**
   * Returns a set of rows in the published version of the specified table. Row
   * results can be filtered and sorted. Filtering and sorting options will be sent
   * as query parameters to the API request. For example, by adding the query
   * parameters `column1__gt=5&sort=-column1`, API returns the rows with values for
   * column `column1` greater than 5 and in the descending order of `column1` values.
   * Refer to the
   * [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows)
   * for detailed filtering and sorting options. **Note:** This endpoint can be
   * accessed without any authentication, if the table is set to be allowed for
   * public access.
   */
  list(
    tableIDOrName: string,
    query: RowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3> {
    return this._client.get(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/rows`, { query, ...options });
  }

  /**
   * Clones rows in the draft version of the specified table, given a set of row ids.
   * Maximum of 100 row ids per call.
   */
  cloneBatch(
    tableIDOrName: string,
    body: RowCloneBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/rows/draft/batch/clone`, {
      body,
      ...options,
    });
  }

  /**
   * Clones a single row in the draft version of a table.
   */
  cloneDraft(
    rowID: string,
    params: RowCloneDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, name } = params;
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIdOrName}/rows/${rowID}/draft/clone`, {
      query: { name },
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
    body: RowCreateBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/rows/draft/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Permanently deletes a row from a table's draft version.
   */
  deleteDraft(rowID: string, params: RowDeleteDraftParams, options?: RequestOptions): APIPromise<void> {
    const { tableIdOrName } = params;
    return this._client.delete(path`/cms/hubdb/2026-03/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a single row by ID from the published version of a table. **Note:** This
   * endpoint can be accessed without any authentication, if the table is set to be
   * allowed for public access.
   */
  get(rowID: string, params: RowGetParams, options?: RequestOptions): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, ...query } = params;
    return this._client.get(path`/cms/hubdb/2026-03/tables/${tableIdOrName}/rows/${rowID}`, {
      query,
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
    body: RowGetBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/rows/batch/read`, {
      body,
      ...options,
    });
  }

  /**
   * Get a single row by ID from a table's draft version.
   */
  getDraft(
    rowID: string,
    params: RowGetDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, ...query } = params;
    return this._client.get(path`/cms/hubdb/2026-03/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      query,
      ...options,
    });
  }

  /**
   * Returns rows in the draft version of the specified table, given a set of row
   * IDs.
   */
  getDraftBatch(
    tableIDOrName: string,
    body: RowGetDraftBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/rows/draft/batch/read`, {
      body,
      ...options,
    });
  }

  /**
   * Permanently delete rows from the draft version of a table, given a set of row
   * IDs. Maximum of 100 row IDs per call.
   */
  purgeBatch(tableIDOrName: string, body: RowPurgeBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/rows/draft/batch/purge`, {
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
    body: RowReplaceBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/rows/draft/batch/replace`, {
      body,
      ...options,
    });
  }

  /**
   * Replace a single row in the draft version of a table. All column values must be
   * specified. If a column has a value in the target table and this request doesn't
   * define that value, it will be deleted. See the "Create a row" endpoint for
   * instructions on how to format the JSON row definitions.
   */
  replaceDraft(
    rowID: string,
    params: RowReplaceDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, ...body } = params;
    return this._client.put(path`/cms/hubdb/2026-03/tables/${tableIdOrName}/rows/${rowID}/draft`, {
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
    body: RowUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/rows/draft/batch/update`, {
      body,
      ...options,
    });
  }

  /**
   * Partially update a single row in the table's draft version. All the column
   * values need not be specified. Only the columns or fields that needs to be
   * modified can be specified. See the "Create a row" endpoint for instructions on
   * how to format the JSON row definitions.
   */
  updateDraft(
    rowID: string,
    params: RowUpdateDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, ...body } = params;
    return this._client.patch(path`/cms/hubdb/2026-03/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      body,
      ...options,
    });
  }
}
export class Rows extends BaseRows {}

export interface RowCreateParams {
  /**
   * Specifies the value for the column child table id
   */
  childTableId: number;

  /**
   * The index position for displaying the row within the table.
   */
  displayIndex: number;

  /**
   * List of key value pairs with the column name and column value
   */
  values: { [key: string]: HubdbAPI.Variant };

  /**
   * Specifies the value for `hs_name` column, which will be used as title in the
   * dynamic pages
   */
  name?: string;

  /**
   * Specifies the value for `hs_path` column, which will be used as slug in the
   * dynamic pages
   */
  path?: string;
}

export interface RowListParams {
  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;

  offset?: number;

  properties?: Array<string>;

  sort?: Array<string>;
}

export interface RowCloneBatchParams {
  inputs: Array<HubdbAPI.HubDBTableRowBatchCloneRequest>;
}

export interface RowCloneDraftParams {
  /**
   * Path param
   */
  tableIdOrName: string;

  /**
   * Query param
   */
  name?: string;
}

export interface RowCreateBatchParams {
  inputs: Array<HubdbAPI.HubDBTableRowV3Request>;
}

export interface RowDeleteDraftParams {
  tableIdOrName: string;
}

export interface RowGetParams {
  /**
   * Path param
   */
  tableIdOrName: string;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface RowGetBatchParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface RowGetDraftParams {
  /**
   * Path param
   */
  tableIdOrName: string;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface RowGetDraftBatchParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface RowPurgeBatchParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface RowReplaceBatchParams {
  inputs: Array<HubdbAPI.HubDBTableRowV3BatchUpdateRequest>;
}

export interface RowReplaceDraftParams {
  /**
   * Path param
   */
  tableIdOrName: string;

  /**
   * Body param: Specifies the value for the column child table id
   */
  childTableId: number;

  /**
   * Body param: The index position for displaying the row within the table.
   */
  displayIndex: number;

  /**
   * Body param: List of key value pairs with the column name and column value
   */
  values: { [key: string]: HubdbAPI.Variant };

  /**
   * Body param: Specifies the value for `hs_name` column, which will be used as
   * title in the dynamic pages
   */
  name?: string;

  /**
   * Body param: Specifies the value for `hs_path` column, which will be used as slug
   * in the dynamic pages
   */
  path?: string;
}

export interface RowUpdateBatchParams {
  inputs: Array<HubdbAPI.HubDBTableRowV3BatchUpdateRequest>;
}

export interface RowUpdateDraftParams {
  /**
   * Path param
   */
  tableIdOrName: string;

  /**
   * Body param: Specifies the value for the column child table id
   */
  childTableId: number;

  /**
   * Body param: The index position for displaying the row within the table.
   */
  displayIndex: number;

  /**
   * Body param: List of key value pairs with the column name and column value
   */
  values: { [key: string]: HubdbAPI.Variant };

  /**
   * Body param: Specifies the value for `hs_name` column, which will be used as
   * title in the dynamic pages
   */
  name?: string;

  /**
   * Body param: Specifies the value for `hs_path` column, which will be used as slug
   * in the dynamic pages
   */
  path?: string;
}

export declare namespace Rows {
  export {
    type RowCreateParams as RowCreateParams,
    type RowListParams as RowListParams,
    type RowCloneBatchParams as RowCloneBatchParams,
    type RowCloneDraftParams as RowCloneDraftParams,
    type RowCreateBatchParams as RowCreateBatchParams,
    type RowDeleteDraftParams as RowDeleteDraftParams,
    type RowGetParams as RowGetParams,
    type RowGetBatchParams as RowGetBatchParams,
    type RowGetDraftParams as RowGetDraftParams,
    type RowGetDraftBatchParams as RowGetDraftBatchParams,
    type RowPurgeBatchParams as RowPurgeBatchParams,
    type RowReplaceBatchParams as RowReplaceBatchParams,
    type RowReplaceDraftParams as RowReplaceDraftParams,
    type RowUpdateBatchParams as RowUpdateBatchParams,
    type RowUpdateDraftParams as RowUpdateDraftParams,
  };
}
