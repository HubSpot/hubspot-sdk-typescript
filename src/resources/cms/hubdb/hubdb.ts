// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../../crm/crm';
import * as EmailsAPI from '../../marketing/emails';
import * as RowsAPI from './rows/rows';
import { Rows } from './rows/rows';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Hubdb extends APIResource {
  rows: RowsAPI.Rows = new RowsAPI.Rows(this._client);

  /**
   * Archive a table
   */
  archiveTable(tableIDOrName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/cms/v3/hubdb/tables/${tableIDOrName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Clone a table
   */
  cloneDraftTable(
    tableIDOrName: string,
    body: HubdbCloneDraftTableParams,
    options?: RequestOptions,
  ): APIPromise<HubDBTableV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/clone`, { body, ...options });
  }

  /**
   * Clone a row
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
   * Clone rows in batch
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
   * Create rows in batch
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
   * Create a new table
   */
  createTable(body: HubdbCreateTableParams, options?: RequestOptions): APIPromise<HubDBTableV3> {
    return this._client.post('/cms/v3/hubdb/tables', { body, ...options });
  }

  /**
   * Add a new row to a table
   */
  createTableRow(
    tableIDOrName: string,
    body: HubdbCreateTableRowParams,
    options?: RequestOptions,
  ): APIPromise<HubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`, { body, ...options });
  }

  /**
   * Export a draft table
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
   * Export a published version of a table
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
   * Return all draft tables
   */
  getAllDraftTables(
    query: HubdbGetAllDraftTablesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseWithTotalHubDBTableV3ForwardPaging> {
    return this._client.get('/cms/v3/hubdb/tables/draft', { query, ...options });
  }

  /**
   * Get all published tables
   */
  getAllTables(
    query: HubdbGetAllTablesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseWithTotalHubDBTableV3ForwardPaging> {
    return this._client.get('/cms/v3/hubdb/tables', { query, ...options });
  }

  /**
   * Get details for a draft table
   */
  getDraftTableDetailsByID(
    tableIDOrName: string,
    query: HubdbGetDraftTableDetailsByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubDBTableV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft`, { query, ...options });
  }

  /**
   * Get a row from the draft table
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
   * Get details of a published table
   */
  getTableDetails(
    tableIDOrName: string,
    query: HubdbGetTableDetailsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubDBTableV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}`, { query, ...options });
  }

  /**
   * Get a table row
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
   * Get rows for a table
   */
  getTableRows(
    tableIDOrName: string,
    query: HubdbGetTableRowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`, { query, ...options });
  }

  /**
   * Import data into draft table
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
   * Publish a table from draft
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
   * Permanently deletes a row
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
   * Permanently deletes rows
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
   * Get a set of rows from draft table
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
   * Get a set of rows
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
   * Delete a table version
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
   * Replaces an existing row
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
   * Replace rows in batch in draft table
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
   * Reset a draft table
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
   * Unpublish a table
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
   * Update an existing table
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
   * Updates an existing row
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
   * Update rows in batch in draft table
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
  label: string;

  name: string;

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

  id?: string;

  createdAt?: string;

  createdBy?: SimpleUser;

  createdByUserId?: number;

  deleted?: boolean;

  foreignColumnId?: number;

  foreignIds?: Array<ForeignID>;

  foreignIdsById?: { [key: string]: ForeignID };

  foreignIdsByName?: { [key: string]: ForeignID };

  foreignTableId?: number;

  optionCount?: number;

  options?: Array<CRMAPI.Option>;

  updatedAt?: string;

  updatedBy?: SimpleUser;

  updatedByUserId?: number;

  width?: number;
}

export interface ColumnRequest {
  id: number;

  label: string;

  name: string;

  options: Array<CRMAPI.Option>;

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

  foreignColumnId?: number;

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
  copyRows: boolean;

  isHubspotDefined: boolean;

  newLabel?: string;

  newName?: string;
}

export interface HubDBTableRowBatchCloneRequest {
  id: string;

  name?: string;
}

export interface HubDBTableRowV3 {
  values: { [key: string]: unknown };

  id?: string;

  childTableId?: string;

  createdAt?: string;

  name?: string;

  path?: string;

  publishedAt?: string;

  updatedAt?: string;
}

export interface HubDBTableRowV3BatchUpdateRequest {
  id: string;

  values: { [key: string]: Variant };

  childTableId?: number;

  displayIndex?: number;

  name?: string;

  path?: string;
}

export interface HubDBTableRowV3Request {
  values: { [key: string]: Variant };

  childTableId?: number;

  displayIndex?: number;

  name?: string;

  path?: string;
}

export interface HubDBTableV3 {
  deletedAt: string;

  label: string;

  name: string;

  id?: string;

  allowChildTables?: boolean;

  allowPublicApiAccess?: boolean;

  columnCount?: number;

  columns?: Array<Column>;

  createdAt?: string;

  createdBy?: SimpleUser;

  deleted?: boolean;

  dynamicMetaTags?: { [key: string]: number };

  enableChildTablePages?: boolean;

  isOrderedManually?: boolean;

  published?: boolean;

  publishedAt?: string;

  rowCount?: number;

  updatedAt?: string;

  updatedBy?: SimpleUser;

  useForPages?: boolean;
}

export interface HubDBTableV3Request {
  label: string;

  name: string;

  allowChildTables?: boolean;

  allowPublicApiAccess?: boolean;

  columns?: Array<ColumnRequest>;

  dynamicMetaTags?: { [key: string]: number };

  enableChildTablePages?: boolean;

  useForPages?: boolean;
}

export interface ImportResult {
  duplicateRows: number;

  errors: Array<Shared.Error>;

  rowLimitExceeded: boolean;

  rowsImported: number;
}

export interface Option {
  id: string;

  createdAt: string;

  name: string;

  order: number;

  type: string;

  updatedAt: string;

  createdBy?: SimpleUser;

  createdByUserId?: number;

  label?: string;

  updatedBy?: SimpleUser;

  updatedByUserId?: number;
}

export interface RandomAccessCollectionResponseWithTotalHubDBTableRowV3 {
  results: Array<unknown>;

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

export interface StandardError {
  category: string;

  context: { [key: string]: Array<string> };

  errors: Array<Shared.ErrorDetail>;

  links: { [key: string]: string };

  message: string;

  status: string;

  subCategory: unknown;

  id?: string;
}

export interface StreamingCollectionResponseWithTotalHubDBTableRowV3 {
  results: Array<unknown>;

  total: number;

  type: 'STREAMING';

  paging?: EmailsAPI.Paging;
}

export type UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3 =
  | RandomAccessCollectionResponseWithTotalHubDBTableRowV3
  | StreamingCollectionResponseWithTotalHubDBTableRowV3;

export type Variant = unknown;

export interface HubdbCloneDraftTableParams {
  copyRows: boolean;

  isHubspotDefined: boolean;

  newLabel?: string;

  newName?: string;
}

export interface HubdbCloneDraftTableRowParams {
  /**
   * Path param:
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
  label: string;

  name: string;

  allowChildTables?: boolean;

  allowPublicApiAccess?: boolean;

  columns?: Array<ColumnRequest>;

  dynamicMetaTags?: { [key: string]: number };

  enableChildTablePages?: boolean;

  useForPages?: boolean;
}

export interface HubdbCreateTableRowParams {
  values: { [key: string]: Variant };

  childTableId?: number;

  displayIndex?: number;

  name?: string;

  path?: string;
}

export interface HubdbExportDraftTableParams {
  format?: string;
}

export interface HubdbExportTableParams {
  format?: string;
}

export interface HubdbGetAllDraftTablesParams {
  after?: string;

  archived?: boolean;

  contentType?: string;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  isGetLocalizedSchema?: boolean;

  limit?: number;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface HubdbGetAllTablesParams {
  after?: string;

  archived?: boolean;

  contentType?: string;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  isGetLocalizedSchema?: boolean;

  limit?: number;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface HubdbGetDraftTableDetailsByIDParams {
  archived?: boolean;

  includeForeignIds?: boolean;

  isGetLocalizedSchema?: boolean;
}

export interface HubdbGetDraftTableRowByIDParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface HubdbGetTableDetailsParams {
  archived?: boolean;

  includeForeignIds?: boolean;

  isGetLocalizedSchema?: boolean;
}

export interface HubdbGetTableRowParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface HubdbGetTableRowsParams {
  after?: string;

  archived?: boolean;

  limit?: number;

  offset?: number;

  properties?: Array<string>;

  sort?: Array<string>;
}

export interface HubdbImportDraftTableParams {
  config?: string;

  file?: Uploadable;
}

export interface HubdbPublishDraftTableParams {
  includeForeignIds?: boolean;
}

export interface HubdbPurgeDraftTableRowParams {
  tableIdOrName: string;
}

export interface HubdbPurgeDraftTableRowsParams {
  inputs: Array<string>;
}

export interface HubdbReadDraftTableRowsParams {
  inputs: Array<string>;
}

export interface HubdbReadTableRowsParams {
  inputs: Array<string>;
}

export interface HubdbRemoveTableVersionParams {
  tableIdOrName: string;
}

export interface HubdbReplaceDraftTableRowParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Body param:
   */
  values: { [key: string]: Variant };

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

export interface HubdbReplaceDraftTableRowsParams {
  inputs: Array<HubDBTableRowV3BatchUpdateRequest>;
}

export interface HubdbResetDraftTableParams {
  includeForeignIds?: boolean;
}

export interface HubdbUnpublishTableParams {
  includeForeignIds?: boolean;
}

export interface HubdbUpdateDraftTableParams {
  /**
   * Body param:
   */
  label: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Query param:
   */
  archived?: boolean;

  /**
   * Query param:
   */
  includeForeignIds?: boolean;

  /**
   * Query param:
   */
  isGetLocalizedSchema?: boolean;

  /**
   * Body param:
   */
  allowChildTables?: boolean;

  /**
   * Body param:
   */
  allowPublicApiAccess?: boolean;

  /**
   * Body param:
   */
  columns?: Array<ColumnRequest>;

  /**
   * Body param:
   */
  dynamicMetaTags?: { [key: string]: number };

  /**
   * Body param:
   */
  enableChildTablePages?: boolean;

  /**
   * Body param:
   */
  useForPages?: boolean;
}

export interface HubdbUpdateDraftTableRowParams {
  /**
   * Path param:
   */
  tableIdOrName: string;

  /**
   * Body param:
   */
  values: { [key: string]: Variant };

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

export interface HubdbUpdateDraftTableRowsParams {
  inputs: Array<HubDBTableRowV3BatchUpdateRequest>;
}

Hubdb.Rows = Rows;

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

  export { Rows as Rows };
}
