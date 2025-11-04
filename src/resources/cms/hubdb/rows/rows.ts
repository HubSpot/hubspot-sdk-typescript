// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { HubDBTableRowV3WrappersPage } from '../../../shared';
import * as HubdbAPI from '../hubdb';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCloneBatchParams,
  BatchCreateBatchParams,
  BatchGetBatchParams,
  BatchGetDraftBatchParams,
  BatchPurgeBatchParams,
  BatchReplaceBatchParams,
  BatchUpdateBatchParams,
} from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Rows extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Add a new row to a HubDB table. New rows will be added to the draft version of
   * the table. Use the `/publish` endpoint to push these changes to published
   * version.
   *
   * @example
   * ```ts
   * const hubDBTableRowV3 = await client.cms.hubdb.rows.create(
   *   'tableIdOrName',
   *   { values: { foo: {} } },
   * );
   * ```
   */
  create(
    tableIDOrName: string,
    body: RowCreateParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`, { body, ...options });
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const hubDBTableRowV3Wrapper of client.cms.hubdb.rows.list(
   *   'tableIdOrName',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    tableIDOrName: string,
    query: RowListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HubDBTableRowV3WrappersPage, Shared.HubDBTableRowV3Wrapper> {
    return this._client.getAPIList(
      path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`,
      Page<Shared.HubDBTableRowV3Wrapper>,
      { query, ...options },
    );
  }

  /**
   * Clones a single row in the draft version of a table.
   *
   * @example
   * ```ts
   * const hubDBTableRowV3 =
   *   await client.cms.hubdb.rows.cloneDraft('321669910225', {
   *     tableIdOrName: 'tableIdOrName',
   *   });
   * ```
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
   * Permanently deletes a row from a table's draft version.
   *
   * @example
   * ```ts
   * await client.cms.hubdb.rows.deleteDraft('321669910225', {
   *   tableIdOrName: 'tableIdOrName',
   * });
   * ```
   */
  deleteDraft(rowID: string, params: RowDeleteDraftParams, options?: RequestOptions): APIPromise<void> {
    const { tableIdOrName } = params;
    return this._client.delete(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a single row by ID from the published version of a table. **Note:** This
   * endpoint can be accessed without any authentication, if the table is set to be
   * allowed for public access.
   *
   * @example
   * ```ts
   * const hubDBTableRowV3 = await client.cms.hubdb.rows.get(
   *   '321669910225',
   *   { tableIdOrName: 'tableIdOrName' },
   * );
   * ```
   */
  get(rowID: string, params: RowGetParams, options?: RequestOptions): APIPromise<HubdbAPI.HubDBTableRowV3> {
    const { tableIdOrName, ...query } = params;
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}`, { query, ...options });
  }

  /**
   * Get a single row by ID from a table's draft version.
   *
   * @example
   * ```ts
   * const hubDBTableRowV3 =
   *   await client.cms.hubdb.rows.getDraft('321669910225', {
   *     tableIdOrName: 'tableIdOrName',
   *   });
   * ```
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
   * Returns rows in the draft version of the specified table. Row results can be
   * filtered and sorted. Filtering and sorting options will be sent as query
   * parameters to the API request. For example, by adding the query parameters
   * `column1__gt=5&sort=-column1`, API returns the rows with values for column
   * `column1` greater than 5 and in the descending order of `column1` values. Refer
   * to the
   * [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows)
   * for detailed filtering and sorting options.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const hubDBTableRowV3Wrapper of client.cms.hubdb.rows.listDraft(
   *   'tableIdOrName',
   * )) {
   *   // ...
   * }
   * ```
   */
  listDraft(
    tableIDOrName: string,
    query: RowListDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HubDBTableRowV3WrappersPage, Shared.HubDBTableRowV3Wrapper> {
    return this._client.getAPIList(
      path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft`,
      Page<Shared.HubDBTableRowV3Wrapper>,
      { query, ...options },
    );
  }

  /**
   * Replace a single row in the draft version of a table. All column values must be
   * specified. If a column has a value in the target table and this request doesn't
   * define that value, it will be deleted. See the "Create a row" endpoint for
   * instructions on how to format the JSON row definitions.
   *
   * @example
   * ```ts
   * const hubDBTableRowV3 =
   *   await client.cms.hubdb.rows.replaceDraft('321669910225', {
   *     tableIdOrName: 'tableIdOrName',
   *     values: { foo: {} },
   *   });
   * ```
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
   * Sparse updates a single row in the table's draft version. All the column values
   * need not be specified. Only the columns or fields that needs to be modified can
   * be specified. See the "Create a row" endpoint for instructions on how to format
   * the JSON row definitions.
   *
   * @example
   * ```ts
   * const hubDBTableRowV3 =
   *   await client.cms.hubdb.rows.updateDraft('321669910225', {
   *     tableIdOrName: 'tableIdOrName',
   *     values: { foo: {} },
   *   });
   * ```
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
  /**
   * List of key value pairs with the column name and column value
   */
  values: { [key: string]: HubdbAPI.Variant };

  /**
   * Specifies the value for the column child table id
   */
  childTableId?: number;

  displayIndex?: number;

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

export interface RowListParams extends PageParams {
  archived?: boolean;

  offset?: number;

  /**
   * Specify the column names to get results containing only the required columns
   * instead of all column details.
   */
  properties?: Array<string>;

  /**
   * Specifies the column names to sort the results by. See the above description for
   * more details.
   */
  sort?: Array<string>;
}

export interface RowCloneDraftParams {
  /**
   * Path param: The ID or name of the table
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  name?: string;
}

export interface RowDeleteDraftParams {
  /**
   * The ID or name of the table
   */
  tableIdOrName: string;
}

export interface RowGetParams {
  /**
   * Path param: The ID or name of the table
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface RowGetDraftParams {
  /**
   * Path param: The ID or name of the table
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface RowListDraftParams extends PageParams {
  archived?: boolean;

  offset?: number;

  /**
   * Specify the column names to get results containing only the required columns
   * instead of all column details. If you want to include multiple columns in the
   * result, use this query param as many times.
   */
  properties?: Array<string>;

  /**
   * Specifies the column names to sort the results by.
   */
  sort?: Array<string>;
}

export interface RowReplaceDraftParams {
  /**
   * Path param: The ID or name of the table
   */
  tableIdOrName: string;

  /**
   * Body param: List of key value pairs with the column name and column value
   */
  values: { [key: string]: HubdbAPI.Variant };

  /**
   * Body param: Specifies the value for the column child table id
   */
  childTableId?: number;

  /**
   * Body param:
   */
  displayIndex?: number;

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

export interface RowUpdateDraftParams {
  /**
   * Path param: The ID or name of the table
   */
  tableIdOrName: string;

  /**
   * Body param: List of key value pairs with the column name and column value
   */
  values: { [key: string]: HubdbAPI.Variant };

  /**
   * Body param: Specifies the value for the column child table id
   */
  childTableId?: number;

  /**
   * Body param:
   */
  displayIndex?: number;

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

Rows.Batch = Batch;

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

  export {
    Batch as Batch,
    type BatchCloneBatchParams as BatchCloneBatchParams,
    type BatchCreateBatchParams as BatchCreateBatchParams,
    type BatchGetBatchParams as BatchGetBatchParams,
    type BatchGetDraftBatchParams as BatchGetDraftBatchParams,
    type BatchPurgeBatchParams as BatchPurgeBatchParams,
    type BatchReplaceBatchParams as BatchReplaceBatchParams,
    type BatchUpdateBatchParams as BatchUpdateBatchParams,
  };
}

export { type HubDBTableRowV3WrappersPage };
