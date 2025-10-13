// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../../crm/crm';
import * as EmailsAPI from '../../marketing/emails';
import * as TablesAPI from './tables';
import {
  TableCloneDraftParams,
  TableCreateParams,
  TableDeleteVersionParams,
  TableExportDraftParams,
  TableExportParams,
  TableGetDraftParams,
  TableGetParams,
  TableImportDraftParams,
  TableListDraftsParams,
  TableListParams,
  TablePublishDraftParams,
  TableResetDraftParams,
  TableUnpublishParams,
  TableUpdateDraftParams,
  Tables,
} from './tables';
import * as RowsAPI from './rows/rows';
import {
  RowCloneDraftParams,
  RowCreateParams,
  RowDeleteDraftParams,
  RowGetDraftParams,
  RowGetParams,
  RowListDraftParams,
  RowListParams,
  RowReplaceDraftParams,
  RowUpdateDraftParams,
  Rows,
} from './rows/rows';
import { APIPromise } from '../../../core/api-promise';
import { Page } from '../../../core/pagination';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Hubdb extends APIResource {
  rows: RowsAPI.Rows = new RowsAPI.Rows(this._client);
  tables: TablesAPI.Tables = new TablesAPI.Tables(this._client);

  /**
   * Archive (soft delete) an existing HubDB table. This archives both the published
   * and draft versions.
   */
  archiveTable(tableIDOrName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/cms/v3/hubdb/tables/${tableIDOrName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can
   * be sent as JSON in the request body. This will create the cloned table as a
   * draft.
   */
  cloneDraftTable(
    tableIDOrName: string,
    body: HubdbCloneDraftTableParams,
    options?: RequestOptions,
  ): APIPromise<HubDBTableV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/clone`, { body, ...options });
  }

  /**
   * Clones a single row in the draft version of a table.
   */
  cloneDraftTableRow(
    rowID: string,
    params: HubdbCloneDraftTableRowParams,
    options?: RequestOptions,
  ): APIPromise<HubDBTableRowV3> {
    const { tableIdOrName, name } = params;
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft/clone`, {
      query: { name },
      ...options,
    });
  }

  /**
   * Clones rows in the draft version of the specified table, given a set of row ids.
   * Maximum of 100 row ids per call.
   */
  cloneDraftTableRows(
    tableIDOrName: string,
    body: HubdbCloneDraftTableRowsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseHubDBTableRowV3> {
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
  createDraftTableRows(
    tableIDOrName: string,
    body: HubdbCreateDraftTableRowsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Creates a new draft HubDB table given a JSON schema. The table name and label
   * should be unique for each account.
   */
  createTable(body: HubdbCreateTableParams, options?: RequestOptions): APIPromise<HubDBTableV3> {
    return this._client.post('/cms/v3/hubdb/tables', { body, ...options });
  }

  /**
   * Add a new row to a HubDB table. New rows will be added to the draft version of
   * the table. Use the `/publish` endpoint to push these changes to published
   * version.
   */
  createTableRow(
    tableIDOrName: string,
    body: HubdbCreateTableRowParams,
    options?: RequestOptions,
  ): APIPromise<HubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`, { body, ...options });
  }

  /**
   * Exports the draft version of a table to CSV / EXCEL format.
   */
  exportDraftTable(
    tableIDOrName: string,
    query: HubdbExportDraftTableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/export`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.ms-excel' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Exports the published version of a table in a specified format.
   */
  exportTable(
    tableIDOrName: string,
    query: HubdbExportTableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/export`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.ms-excel' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Returns the details for each draft table defined in the specified account,
   * including column definitions.
   */
  getAllDraftTables(
    query: HubdbGetAllDraftTablesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseWithTotalHubDBTableV3ForwardPaging> {
    return this._client.get('/cms/v3/hubdb/tables/draft', { query, ...options });
  }

  /**
   * Returns the details for the published version of each table defined in an
   * account, including column definitions.
   */
  getAllTables(
    query: HubdbGetAllTablesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseWithTotalHubDBTableV3ForwardPaging> {
    return this._client.get('/cms/v3/hubdb/tables', { query, ...options });
  }

  /**
   * Get the details for the draft version of a specific HubDB table. This will
   * include the definitions for the columns in the table and the number of rows in
   * the table.
   */
  getDraftTableDetailsByID(
    tableIDOrName: string,
    query: HubdbGetDraftTableDetailsByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubDBTableV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft`, { query, ...options });
  }

  /**
   * Get a single row by ID from a table's draft version.
   */
  getDraftTableRowByID(
    rowID: string,
    params: HubdbGetDraftTableRowByIDParams,
    options?: RequestOptions,
  ): APIPromise<HubDBTableRowV3> {
    const { tableIdOrName, ...query } = params;
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      query,
      ...options,
    });
  }

  /**
   * Returns the details for the published version of the specified table. This will
   * include the definitions for the columns in the table and the number of rows in
   * the table.
   *
   * **Note:** This endpoint can be accessed without any authentication if the table
   * is set to be allowed for public access. To do so, you'll need to include the
   * HubSpot account ID in a `portalId` query parameter.
   */
  getTableDetails(
    tableIDOrName: string,
    query: HubdbGetTableDetailsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubDBTableV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}`, { query, ...options });
  }

  /**
   * Get a single row by ID from the published version of a table. **Note:** This
   * endpoint can be accessed without any authentication, if the table is set to be
   * allowed for public access.
   */
  getTableRow(
    rowID: string,
    params: HubdbGetTableRowParams,
    options?: RequestOptions,
  ): APIPromise<HubDBTableRowV3> {
    const { tableIdOrName, ...query } = params;
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}`, { query, ...options });
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
  getTableRows(
    tableIDOrName: string,
    query: HubdbGetTableRowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`, { query, ...options });
  }

  /**
   * Import the contents of a CSV file into an existing HubDB table. The data will
   * always be imported into the draft version of the table. Use the `/publish`
   * endpoint to push these changes to the published version. This endpoint takes a
   * multi-part POST request. The first part will be a set of JSON-formatted options
   * for the import and you can specify this with the name as `config`. The second
   * part will be the CSV file you want to import and you can specify this with the
   * name as `file`. Refer the
   * [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#importing-tables)
   * to check the details and format of the JSON-formatted options for the import.
   */
  importDraftTable(
    tableIDOrName: string,
    body: HubdbImportDraftTableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImportResult> {
    return this._client.post(
      path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/import`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Publishes the table by copying the data and table schema changes from draft
   * version to the published version, meaning any website pages using data from the
   * table will be updated.
   */
  publishDraftTable(
    tableIDOrName: string,
    params: HubdbPublishDraftTableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubDBTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/publish`, {
      query: { includeForeignIds },
      ...options,
    });
  }

  /**
   * Permanently deletes a row from a table's draft version.
   */
  purgeDraftTableRow(
    rowID: string,
    params: HubdbPurgeDraftTableRowParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { tableIdOrName } = params;
    return this._client.delete(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Permanently deletes rows from the draft version of the table, given a set of row
   * IDs. Maximum of 100 row IDs per call.
   */
  purgeDraftTableRows(
    tableIDOrName: string,
    body: HubdbPurgeDraftTableRowsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/purge`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns rows in the draft version of the specified table, given a set of row
   * IDs.
   */
  readDraftTableRows(
    tableIDOrName: string,
    body: HubdbReadDraftTableRowsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/read`, {
      body,
      ...options,
    });
  }

  /**
   * Returns rows in the published version of the specified table, given a set of row
   * IDs. **Note:** This endpoint can be accessed without any authentication if the
   * table is set to be allowed for public access.
   */
  readTableRows(
    tableIDOrName: string,
    body: HubdbReadTableRowsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/batch/read`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a specific version of a table
   */
  removeTableVersion(
    versionID: number,
    params: HubdbRemoveTableVersionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { tableIdOrName } = params;
    return this._client.delete(path`/cms/v3/hubdb/tables/${tableIdOrName}/versions/${versionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Replace a single row in the draft version of a table. All column values must be
   * specified. If a column has a value in the target table and this request doesn't
   * define that value, it will be deleted. See the "Create a row" endpoint for
   * instructions on how to format the JSON row definitions.
   */
  replaceDraftTableRow(
    rowID: string,
    params: HubdbReplaceDraftTableRowParams,
    options?: RequestOptions,
  ): APIPromise<HubDBTableRowV3> {
    const { tableIdOrName, ...body } = params;
    return this._client.put(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
      body,
      ...options,
    });
  }

  /**
   * Replaces multiple rows as a batch in the draft version of the table, with a
   * maximum of 100 rows per call. See the endpoint
   * `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a
   * single row.
   */
  replaceDraftTableRows(
    tableIDOrName: string,
    body: HubdbReplaceDraftTableRowsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/replace`, {
      body,
      ...options,
    });
  }

  /**
   * Replaces the data in the draft version of the table with values from the
   * published version. Any unpublished changes in the draft will be lost after this
   * call is made.
   */
  resetDraftTable(
    tableIDOrName: string,
    params: HubdbResetDraftTableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubDBTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/reset`, {
      query: { includeForeignIds },
      ...options,
    });
  }

  /**
   * Unpublishes the table, meaning any website pages using data from the table will
   * not render any data.
   */
  unpublishTable(
    tableIDOrName: string,
    params: HubdbUnpublishTableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubDBTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/unpublish`, {
      query: { includeForeignIds },
      ...options,
    });
  }

  /**
   * Update an existing HubDB table. You can use this endpoint to add or remove
   * columns to the table as well as restore an archived table. Tables updated using
   * the endpoint will only modify the draft verion of the table. Use the `/publish`
   * endpoint to push all the changes to the published version. To restore a table,
   * include the query parameter `archived=true` and `"archived": false` in the json
   * body. **Note:** You need to include all the columns in the input when you are
   * adding/removing/updating a column. If you do not include an already existing
   * column in the request, it will be deleted.
   */
  updateDraftTable(
    tableIDOrName: string,
    params: HubdbUpdateDraftTableParams,
    options?: RequestOptions,
  ): APIPromise<HubDBTableV3> {
    const { archived, includeForeignIds, isGetLocalizedSchema, ...body } = params;
    return this._client.patch(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft`, {
      query: { archived, includeForeignIds, isGetLocalizedSchema },
      body,
      ...options,
    });
  }

  /**
   * Sparse updates a single row in the table's draft version. All the column values
   * need not be specified. Only the columns or fields that needs to be modified can
   * be specified. See the "Create a row" endpoint for instructions on how to format
   * the JSON row definitions.
   */
  updateDraftTableRow(
    rowID: string,
    params: HubdbUpdateDraftTableRowParams,
    options?: RequestOptions,
  ): APIPromise<HubDBTableRowV3> {
    const { tableIdOrName, ...body } = params;
    return this._client.patch(path`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowID}/draft`, {
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
  updateDraftTableRows(
    tableIDOrName: string,
    body: HubdbUpdateDraftTableRowsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/update`, {
      body,
      ...options,
    });
  }
}

export type HubDBTableV3sPage = Page<HubDBTableV3>;

export interface BatchInputHubDBTableRowBatchCloneRequest {
  inputs: Array<HubDBTableRowBatchCloneRequest>;
}

export interface BatchInputHubDBTableRowV3BatchUpdateRequest {
  inputs: Array<HubDBTableRowV3BatchUpdateRequest>;
}

export interface BatchInputHubDBTableRowV3Request {
  inputs: Array<HubDBTableRowV3Request>;
}

export interface BatchResponseHubDBTableRowV3 {
  completedAt?: string;

  links?: { [key: string]: string };

  requestedAt?: string;

  results?: Array<HubDBTableRowV3>;

  startedAt?: string;

  status?: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';
}

export interface BatchResponseHubDBTableRowV3WithErrors {
  completedAt: string;

  results: Array<HubDBTableRowV3>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BoundedNextPage {
  offset: number;

  link?: string;
}

export interface BoundedPaging {
  next?: BoundedNextPage;
}

export interface CollectionResponseWithTotalHubDBTableV3ForwardPaging {
  results: Array<HubDBTableV3>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface Column {
  /**
   * Label of the column
   */
  label: string;

  /**
   * Name of the column
   */
  name: string;

  /**
   * Type of the column
   */
  type:
    | 'NULL'
    | 'TEXT'
    | 'NUMBER'
    | 'URL'
    | 'IMAGE'
    | 'SELECT'
    | 'MULTISELECT'
    | 'BOOLEAN'
    | 'LOCATION'
    | 'DATE'
    | 'DATETIME'
    | 'CURRENCY'
    | 'RICHTEXT'
    | 'FOREIGN_ID'
    | 'VIDEO'
    | 'CTA'
    | 'FILE'
    | 'JSON'
    | 'COMPOSITE'
    | 'CODE'
    | 'HUBSPOT_VIDEO'
    | 'EMBED';

  /**
   * Column Id
   */
  id?: string;

  createdAt?: string;

  createdBy?: SimpleUser;

  createdByUserId?: number;

  deleted?: boolean;

  description?: string;

  /**
   * Foreign Column id
   */
  foreignColumnId?: number;

  /**
   * Foreign Ids
   */
  foreignIds?: Array<ForeignID>;

  /**
   * Foreign ids
   */
  foreignIdsById?: { [key: string]: ForeignID };

  /**
   * Foreign ids by name
   */
  foreignIdsByName?: { [key: string]: ForeignID };

  /**
   * Foreign table id referenced
   */
  foreignTableId?: number;

  /**
   * Number of options available
   */
  optionCount?: number;

  /**
   * Options to choose for select and multi-select columns
   */
  options?: Array<CRMAPI.Option>;

  updatedAt?: string;

  updatedBy?: SimpleUser;

  updatedByUserId?: number;

  /**
   * Column width for HubDB UI
   */
  width?: number;
}

export interface ColumnRequest {
  /**
   * Column Id
   */
  id: number;

  /**
   * Label of the column
   */
  label: string;

  /**
   * Name of the column
   */
  name: string;

  /**
   * Options to choose for select and multi-select columns
   */
  options: Array<CRMAPI.Option>;

  /**
   * Type of the column
   */
  type:
    | 'NULL'
    | 'TEXT'
    | 'NUMBER'
    | 'URL'
    | 'IMAGE'
    | 'SELECT'
    | 'MULTISELECT'
    | 'BOOLEAN'
    | 'LOCATION'
    | 'DATE'
    | 'DATETIME'
    | 'CURRENCY'
    | 'RICHTEXT'
    | 'FOREIGN_ID'
    | 'VIDEO'
    | 'CTA'
    | 'FILE'
    | 'JSON'
    | 'COMPOSITE'
    | 'CODE'
    | 'HUBSPOT_VIDEO'
    | 'EMBED';

  /**
   * The id of the column from another table to which the column refers/points to.
   */
  foreignColumnId?: number;

  /**
   * The id of another table to which the column refers/points to.
   */
  foreignTableId?: number;

  maxNumberOfCharacters?: number;

  maxNumberOfOptions?: number;
}

export interface ForeignID {
  id: string;

  name: string;

  type: string;
}

export interface HubDBTableCloneRequest {
  /**
   * Specifies whether to copy the rows during clone
   */
  copyRows: boolean;

  isHubspotDefined: boolean;

  /**
   * The new label for the cloned table
   */
  newLabel?: string;

  /**
   * The new name for the cloned table
   */
  newName?: string;
}

export interface HubDBTableRowBatchCloneRequest {
  id: string;

  name?: string;
}

export interface HubDBTableRowV3 {
  /**
   * List of key value pairs with the column name and column value
   */
  values: { [key: string]: unknown };

  /**
   * The id of the table row
   */
  id?: string;

  /**
   * Specifies the value for the column child table id
   */
  childTableId?: string;

  /**
   * Timestamp at which the row is created
   */
  createdAt?: string;

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

  publishedAt?: string;

  /**
   * Timestamp at which the row is updated last time
   */
  updatedAt?: string;
}

export interface HubDBTableRowV3BatchUpdateRequest {
  /**
   * The id of the table row
   */
  id: string;

  /**
   * List of key value pairs with the column name and column value
   */
  values: { [key: string]: Variant };

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

export interface HubDBTableRowV3Request {
  /**
   * List of key value pairs with the column name and column value
   */
  values: { [key: string]: Variant };

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

export interface HubDBTableV3 {
  deletedAt: string;

  /**
   * Label of the table
   */
  label: string;

  /**
   * Name of the table
   */
  name: string;

  /**
   * Id of the table
   */
  id?: string;

  /**
   * Specifies whether child tables can be created
   */
  allowChildTables?: boolean;

  /**
   * Specifies whether the table can be read by public without authorization
   */
  allowPublicApiAccess?: boolean;

  /**
   * Number of columns including deleted
   */
  columnCount?: number;

  /**
   * List of columns in the table
   */
  columns?: Array<Column>;

  /**
   * Timestamp at which the table is created
   */
  createdAt?: string;

  createdBy?: SimpleUser;

  deleted?: boolean;

  /**
   * Specifies the key value pairs of the
   * [metadata fields](https://developers.hubspot.com/docs/cms/guides/dynamic-pages/hubdb#dynamic-pages)
   * with the associated column IDs.
   */
  dynamicMetaTags?: { [key: string]: number };

  /**
   * Specifies creation of multi-level dynamic pages using child tables
   */
  enableChildTablePages?: boolean;

  isOrderedManually?: boolean;

  published?: boolean;

  /**
   * Timestamp at which the table is published recently
   */
  publishedAt?: string;

  /**
   * Number of rows in the table
   */
  rowCount?: number;

  /**
   * Timestamp at which the table is updated recently
   */
  updatedAt?: string;

  updatedBy?: SimpleUser;

  /**
   * Specifies whether the table can be used for creation of dynamic pages
   */
  useForPages?: boolean;
}

export interface HubDBTableV3Request {
  /**
   * Label of the table
   */
  label: string;

  /**
   * Name of the table
   */
  name: string;

  /**
   * Specifies whether child tables can be created
   */
  allowChildTables?: boolean;

  /**
   * Specifies whether the table can be read by public without authorization
   */
  allowPublicApiAccess?: boolean;

  /**
   * List of columns in the table
   */
  columns?: Array<ColumnRequest>;

  /**
   * Specifies the key value pairs of the
   * [metadata fields](https://developers.hubspot.com/docs/cms/guides/dynamic-pages/hubdb#dynamic-pages)
   * with the associated column IDs.
   */
  dynamicMetaTags?: { [key: string]: number };

  /**
   * Specifies creation of multi-level dynamic pages using child tables
   */
  enableChildTablePages?: boolean;

  /**
   * Specifies whether the table can be used for creation of dynamic pages
   */
  useForPages?: boolean;
}

export interface ImportResult {
  /**
   * Specifies number of duplicate rows
   */
  duplicateRows: number;

  /**
   * List of errors during import
   */
  errors: Array<Shared.Error>;

  /**
   * Specifies whether row limit exceeded during import
   */
  rowLimitExceeded: boolean;

  /**
   * Specifies number of rows imported
   */
  rowsImported: number;
}

/**
 * A HubSpot property option
 */
export interface Option {
  /**
   * The unique ID of the option.
   */
  id: string;

  /**
   * The timestamp when the option was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * An internal name assigned to the option, distinct from the label.
   */
  name: string;

  order: number;

  /**
   * Indicates the category or data type of the option (e.g., string, number).
   */
  type: string;

  /**
   * The timestamp when the option was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  createdBy?: SimpleUser;

  /**
   * The ID of the user who created the option.
   */
  createdByUserId?: number;

  /**
   * A user-friendly label that identifies the option.
   */
  label?: string;

  updatedBy?: SimpleUser;

  /**
   * The ID of the user who last updated the option.
   */
  updatedByUserId?: number;
}

export interface RandomAccessCollectionResponseWithTotalHubDBTableRowV3 {
  results: Array<Array<unknown>>;

  total: number;

  type: 'RANDOM_ACCESS';

  paging?: BoundedPaging;
}

export interface SimpleUser {
  id: string;

  email: string;

  firstName: string;

  lastName: string;
}

/**
 * Ye olde error
 */
export interface StandardError {
  /**
   * Specifies the main category of the error, determining the broad area of issue.
   */
  category: string;

  /**
   * An object containing context-specific information pertinent to the error.
   */
  context: { [key: string]: Array<string> };

  /**
   * The detailed error objects.
   */
  errors: Array<Shared.ErrorDetail>;

  /**
   * An object containing links related to the error, such as documentation URLs or
   * support contact pages.
   */
  links: { [key: string]: string };

  /**
   * A detailed message describing the error.
   */
  message: string;

  /**
   * The HTTP status code associated with the error.
   */
  status: string;

  /**
   * Identifies the subcategory of the error, providing more specific context within
   * the main category.
   */
  subCategory: unknown;

  /**
   * The unique ID of the error instance.
   */
  id?: string;
}

export interface StreamingCollectionResponseWithTotalHubDBTableRowV3 {
  results: Array<unknown>;

  total: number;

  type: 'STREAMING';

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export type UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3 =
  | RandomAccessCollectionResponseWithTotalHubDBTableRowV3
  | StreamingCollectionResponseWithTotalHubDBTableRowV3;

export type Variant = unknown;

export interface HubdbCloneDraftTableParams {
  /**
   * Specifies whether to copy the rows during clone
   */
  copyRows: boolean;

  isHubspotDefined: boolean;

  /**
   * The new label for the cloned table
   */
  newLabel?: string;

  /**
   * The new name for the cloned table
   */
  newName?: string;
}

export interface HubdbCloneDraftTableRowParams {
  /**
   * Path param: The ID or name of the table
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  name?: string;
}

export interface HubdbCloneDraftTableRowsParams {
  inputs: Array<HubDBTableRowBatchCloneRequest>;
}

export interface HubdbCreateDraftTableRowsParams {
  inputs: Array<HubDBTableRowV3Request>;
}

export interface HubdbCreateTableParams {
  /**
   * Label of the table
   */
  label: string;

  /**
   * Name of the table
   */
  name: string;

  /**
   * Specifies whether child tables can be created
   */
  allowChildTables?: boolean;

  /**
   * Specifies whether the table can be read by public without authorization
   */
  allowPublicApiAccess?: boolean;

  /**
   * List of columns in the table
   */
  columns?: Array<ColumnRequest>;

  /**
   * Specifies the key value pairs of the
   * [metadata fields](https://developers.hubspot.com/docs/cms/guides/dynamic-pages/hubdb#dynamic-pages)
   * with the associated column IDs.
   */
  dynamicMetaTags?: { [key: string]: number };

  /**
   * Specifies creation of multi-level dynamic pages using child tables
   */
  enableChildTablePages?: boolean;

  /**
   * Specifies whether the table can be used for creation of dynamic pages
   */
  useForPages?: boolean;
}

export interface HubdbCreateTableRowParams {
  /**
   * List of key value pairs with the column name and column value
   */
  values: { [key: string]: Variant };

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

export interface HubdbExportDraftTableParams {
  /**
   * The file format to export. Possible values include `CSV`, `XLSX`, and `XLS`.
   */
  format?: string;
}

export interface HubdbExportTableParams {
  /**
   * The file format to export. Possible values include `CSV`, `XLSX`, and `XLS`.
   */
  format?: string;
}

export interface HubdbGetAllDraftTablesParams {
  /**
   * The cursor token value to get the next set of results. You can get this from the
   * `paging.next.after` JSON property of a paged response containing more results.
   */
  after?: string;

  /**
   * Specifies whether to return archived tables. Defaults to `false`.
   */
  archived?: boolean;

  contentType?: string;

  /**
   * Only return tables created after the specified time.
   */
  createdAfter?: string;

  /**
   * Only return tables created at exactly the specified time.
   */
  createdAt?: string;

  /**
   * Only return tables created before the specified time.
   */
  createdBefore?: string;

  isGetLocalizedSchema?: boolean;

  /**
   * The maximum number of results to return. Default is 1000.
   */
  limit?: number;

  /**
   * Specifies which fields to use for sorting results. Valid fields are `name`,
   * `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. `createdAt` will be used by
   * default.
   */
  sort?: Array<string>;

  /**
   * Only return tables last updated after the specified time.
   */
  updatedAfter?: string;

  /**
   * Only return tables last updated at exactly the specified time.
   */
  updatedAt?: string;

  /**
   * Only return tables last updated before the specified time.
   */
  updatedBefore?: string;
}

export interface HubdbGetAllTablesParams {
  /**
   * The cursor token value to get the next set of results. You can get this from the
   * `paging.next.after` JSON property of a paged response containing more results.
   */
  after?: string;

  /**
   * Specifies whether to return archived tables. Defaults to `false`.
   */
  archived?: boolean;

  contentType?: string;

  /**
   * Only return tables created after the specified time.
   */
  createdAfter?: string;

  /**
   * Only return tables created at exactly the specified time.
   */
  createdAt?: string;

  /**
   * Only return tables created before the specified time.
   */
  createdBefore?: string;

  isGetLocalizedSchema?: boolean;

  /**
   * The maximum number of results to return. Default is 1000.
   */
  limit?: number;

  /**
   * Specifies which fields to use for sorting results. Valid fields are `name`,
   * `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. `createdAt` will be used by
   * default.
   */
  sort?: Array<string>;

  /**
   * Only return tables last updated after the specified time.
   */
  updatedAfter?: string;

  /**
   * Only return tables last updated at exactly the specified time.
   */
  updatedAt?: string;

  /**
   * Only return tables last updated before the specified time.
   */
  updatedBefore?: string;
}

export interface HubdbGetDraftTableDetailsByIDParams {
  /**
   * Set this to `true` to return an archived table. Defaults to `false`.
   */
  archived?: boolean;

  /**
   * Set this to `true` to populate foreign ID values in the result.
   */
  includeForeignIds?: boolean;

  isGetLocalizedSchema?: boolean;
}

export interface HubdbGetDraftTableRowByIDParams {
  /**
   * Path param: The ID or name of the table
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface HubdbGetTableDetailsParams {
  /**
   * Set this to `true` to return details for an archived table. Defaults to `false`.
   */
  archived?: boolean;

  /**
   * Set this to `true` to populate foreign ID values in the result.
   */
  includeForeignIds?: boolean;

  isGetLocalizedSchema?: boolean;
}

export interface HubdbGetTableRowParams {
  /**
   * Path param: The ID or name of the table
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface HubdbGetTableRowsParams {
  /**
   * The cursor token value to get the next set of results. You can get this from the
   * `paging.next.after` JSON property of a paged response containing more results.
   */
  after?: string;

  archived?: boolean;

  /**
   * The maximum number of results to return. Default is `1000`.
   */
  limit?: number;

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

export interface HubdbImportDraftTableParams {
  config?: string;

  file?: Uploadable;
}

export interface HubdbPublishDraftTableParams {
  /**
   * Set this to `true` to populate foreign ID values in the response.
   */
  includeForeignIds?: boolean;
}

export interface HubdbPurgeDraftTableRowParams {
  /**
   * The ID or name of the table
   */
  tableIdOrName: string;
}

export interface HubdbPurgeDraftTableRowsParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface HubdbReadDraftTableRowsParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface HubdbReadTableRowsParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface HubdbRemoveTableVersionParams {
  tableIdOrName: string;
}

export interface HubdbReplaceDraftTableRowParams {
  /**
   * Path param: The ID or name of the table
   */
  tableIdOrName: string;

  /**
   * Body param: List of key value pairs with the column name and column value
   */
  values: { [key: string]: Variant };

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

export interface HubdbReplaceDraftTableRowsParams {
  inputs: Array<HubDBTableRowV3BatchUpdateRequest>;
}

export interface HubdbResetDraftTableParams {
  /**
   * Set this to `true` to populate foreign ID values in the response.
   */
  includeForeignIds?: boolean;
}

export interface HubdbUnpublishTableParams {
  /**
   * Set this to `true` to populate foreign ID values in the response.
   */
  includeForeignIds?: boolean;
}

export interface HubdbUpdateDraftTableParams {
  /**
   * Body param: Label of the table
   */
  label: string;

  /**
   * Body param: Name of the table
   */
  name: string;

  /**
   * Query param: Specifies whether to return archived tables. Defaults to `false`.
   */
  archived?: boolean;

  /**
   * Query param: Set this to `true` to populate foreign ID values in the result.
   */
  includeForeignIds?: boolean;

  /**
   * Query param:
   */
  isGetLocalizedSchema?: boolean;

  /**
   * Body param: Specifies whether child tables can be created
   */
  allowChildTables?: boolean;

  /**
   * Body param: Specifies whether the table can be read by public without
   * authorization
   */
  allowPublicApiAccess?: boolean;

  /**
   * Body param: List of columns in the table
   */
  columns?: Array<ColumnRequest>;

  /**
   * Body param: Specifies the key value pairs of the
   * [metadata fields](https://developers.hubspot.com/docs/cms/guides/dynamic-pages/hubdb#dynamic-pages)
   * with the associated column IDs.
   */
  dynamicMetaTags?: { [key: string]: number };

  /**
   * Body param: Specifies creation of multi-level dynamic pages using child tables
   */
  enableChildTablePages?: boolean;

  /**
   * Body param: Specifies whether the table can be used for creation of dynamic
   * pages
   */
  useForPages?: boolean;
}

export interface HubdbUpdateDraftTableRowParams {
  /**
   * Path param: The ID or name of the table
   */
  tableIdOrName: string;

  /**
   * Body param: List of key value pairs with the column name and column value
   */
  values: { [key: string]: Variant };

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

export interface HubdbUpdateDraftTableRowsParams {
  inputs: Array<HubDBTableRowV3BatchUpdateRequest>;
}

Hubdb.Rows = Rows;
Hubdb.Tables = Tables;

export declare namespace Hubdb {
  export {
    type BatchInputHubDBTableRowBatchCloneRequest as BatchInputHubDBTableRowBatchCloneRequest,
    type BatchInputHubDBTableRowV3BatchUpdateRequest as BatchInputHubDBTableRowV3BatchUpdateRequest,
    type BatchInputHubDBTableRowV3Request as BatchInputHubDBTableRowV3Request,
    type BatchResponseHubDBTableRowV3 as BatchResponseHubDBTableRowV3,
    type BatchResponseHubDBTableRowV3WithErrors as BatchResponseHubDBTableRowV3WithErrors,
    type BoundedNextPage as BoundedNextPage,
    type BoundedPaging as BoundedPaging,
    type CollectionResponseWithTotalHubDBTableV3ForwardPaging as CollectionResponseWithTotalHubDBTableV3ForwardPaging,
    type Column as Column,
    type ColumnRequest as ColumnRequest,
    type ForeignID as ForeignID,
    type HubDBTableCloneRequest as HubDBTableCloneRequest,
    type HubDBTableRowBatchCloneRequest as HubDBTableRowBatchCloneRequest,
    type HubDBTableRowV3 as HubDBTableRowV3,
    type HubDBTableRowV3BatchUpdateRequest as HubDBTableRowV3BatchUpdateRequest,
    type HubDBTableRowV3Request as HubDBTableRowV3Request,
    type HubDBTableV3 as HubDBTableV3,
    type HubDBTableV3Request as HubDBTableV3Request,
    type ImportResult as ImportResult,
    type Option as Option,
    type RandomAccessCollectionResponseWithTotalHubDBTableRowV3 as RandomAccessCollectionResponseWithTotalHubDBTableRowV3,
    type SimpleUser as SimpleUser,
    type StandardError as StandardError,
    type StreamingCollectionResponseWithTotalHubDBTableRowV3 as StreamingCollectionResponseWithTotalHubDBTableRowV3,
    type UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3 as UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3,
    type Variant as Variant,
    type HubdbCloneDraftTableParams as HubdbCloneDraftTableParams,
    type HubdbCloneDraftTableRowParams as HubdbCloneDraftTableRowParams,
    type HubdbCloneDraftTableRowsParams as HubdbCloneDraftTableRowsParams,
    type HubdbCreateDraftTableRowsParams as HubdbCreateDraftTableRowsParams,
    type HubdbCreateTableParams as HubdbCreateTableParams,
    type HubdbCreateTableRowParams as HubdbCreateTableRowParams,
    type HubdbExportDraftTableParams as HubdbExportDraftTableParams,
    type HubdbExportTableParams as HubdbExportTableParams,
    type HubdbGetAllDraftTablesParams as HubdbGetAllDraftTablesParams,
    type HubdbGetAllTablesParams as HubdbGetAllTablesParams,
    type HubdbGetDraftTableDetailsByIDParams as HubdbGetDraftTableDetailsByIDParams,
    type HubdbGetDraftTableRowByIDParams as HubdbGetDraftTableRowByIDParams,
    type HubdbGetTableDetailsParams as HubdbGetTableDetailsParams,
    type HubdbGetTableRowParams as HubdbGetTableRowParams,
    type HubdbGetTableRowsParams as HubdbGetTableRowsParams,
    type HubdbImportDraftTableParams as HubdbImportDraftTableParams,
    type HubdbPublishDraftTableParams as HubdbPublishDraftTableParams,
    type HubdbPurgeDraftTableRowParams as HubdbPurgeDraftTableRowParams,
    type HubdbPurgeDraftTableRowsParams as HubdbPurgeDraftTableRowsParams,
    type HubdbReadDraftTableRowsParams as HubdbReadDraftTableRowsParams,
    type HubdbReadTableRowsParams as HubdbReadTableRowsParams,
    type HubdbRemoveTableVersionParams as HubdbRemoveTableVersionParams,
    type HubdbReplaceDraftTableRowParams as HubdbReplaceDraftTableRowParams,
    type HubdbReplaceDraftTableRowsParams as HubdbReplaceDraftTableRowsParams,
    type HubdbResetDraftTableParams as HubdbResetDraftTableParams,
    type HubdbUnpublishTableParams as HubdbUnpublishTableParams,
    type HubdbUpdateDraftTableParams as HubdbUpdateDraftTableParams,
    type HubdbUpdateDraftTableRowParams as HubdbUpdateDraftTableRowParams,
    type HubdbUpdateDraftTableRowsParams as HubdbUpdateDraftTableRowsParams,
  };

  export {
    Rows as Rows,
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
    Tables as Tables,
    type TableCreateParams as TableCreateParams,
    type TableListParams as TableListParams,
    type TableCloneDraftParams as TableCloneDraftParams,
    type TableDeleteVersionParams as TableDeleteVersionParams,
    type TableExportParams as TableExportParams,
    type TableExportDraftParams as TableExportDraftParams,
    type TableGetParams as TableGetParams,
    type TableGetDraftParams as TableGetDraftParams,
    type TableImportDraftParams as TableImportDraftParams,
    type TableListDraftsParams as TableListDraftsParams,
    type TablePublishDraftParams as TablePublishDraftParams,
    type TableResetDraftParams as TableResetDraftParams,
    type TableUnpublishParams as TableUnpublishParams,
    type TableUpdateDraftParams as TableUpdateDraftParams,
  };
}
