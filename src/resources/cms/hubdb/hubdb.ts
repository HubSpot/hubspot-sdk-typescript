// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../../crm/crm';
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
  ): APIPromise<CmsHubdbHubDBTableV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/clone`, { body, ...options });
  }

  /**
   * Clone a row
   */
  cloneDraftTableRow(
    rowID: string,
    params: HubdbCloneDraftTableRowParams,
    options?: RequestOptions,
  ): APIPromise<CmsHubdbHubDBTableRowV3> {
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
  ): APIPromise<CmsHubdbBatchResponseHubDBTableRowV3> {
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
  ): APIPromise<CmsHubdbBatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Create a new table
   */
  createTable(body: HubdbCreateTableParams, options?: RequestOptions): APIPromise<CmsHubdbHubDBTableV3> {
    return this._client.post('/cms/v3/hubdb/tables', { body, ...options });
  }

  /**
   * Add a new row to a table
   */
  createTableRow(
    tableIDOrName: string,
    body: HubdbCreateTableRowParams,
    options?: RequestOptions,
  ): APIPromise<CmsHubdbHubDBTableRowV3> {
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
  ): APIPromise<CmsHubdbCollectionResponseWithTotalHubDBTableV3ForwardPaging> {
    return this._client.get('/cms/v3/hubdb/tables/draft', { query, ...options });
  }

  /**
   * Get all published tables
   */
  getAllTables(
    query: HubdbGetAllTablesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CmsHubdbCollectionResponseWithTotalHubDBTableV3ForwardPaging> {
    return this._client.get('/cms/v3/hubdb/tables', { query, ...options });
  }

  /**
   * Get details for a draft table
   */
  getDraftTableDetailsByID(
    tableIDOrName: string,
    query: HubdbGetDraftTableDetailsByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CmsHubdbHubDBTableV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft`, { query, ...options });
  }

  /**
   * Get a row from the draft table
   */
  getDraftTableRowByID(
    rowID: string,
    params: HubdbGetDraftTableRowByIDParams,
    options?: RequestOptions,
  ): APIPromise<CmsHubdbHubDBTableRowV3> {
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
  ): APIPromise<CmsHubdbHubDBTableV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}`, { query, ...options });
  }

  /**
   * Get a table row
   */
  getTableRow(
    rowID: string,
    params: HubdbGetTableRowParams,
    options?: RequestOptions,
  ): APIPromise<CmsHubdbHubDBTableRowV3> {
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
  ): APIPromise<CmsHubdbUnifiedCollectionResponseWithTotalBaseHubDBTableRowV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows`, { query, ...options });
  }

  /**
   * Import data into draft table
   */
  importDraftTable(
    tableIDOrName: string,
    body: HubdbImportDraftTableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CmsHubdbImportResult> {
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
  ): APIPromise<CmsHubdbHubDBTableV3> {
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
  ): APIPromise<CmsHubdbBatchResponseHubDBTableRowV3> {
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
  ): APIPromise<CmsHubdbBatchResponseHubDBTableRowV3> {
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
  ): APIPromise<CmsHubdbHubDBTableRowV3> {
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
  ): APIPromise<CmsHubdbBatchResponseHubDBTableRowV3> {
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
  ): APIPromise<CmsHubdbHubDBTableV3> {
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
  ): APIPromise<CmsHubdbHubDBTableV3> {
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
  ): APIPromise<CmsHubdbHubDBTableV3> {
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
  ): APIPromise<CmsHubdbHubDBTableRowV3> {
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
  ): APIPromise<CmsHubdbBatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/update`, {
      body,
      ...options,
    });
  }
}

export interface CmsHubdbBatchInputHubDBTableRowBatchCloneRequest {
  inputs: Array<CmsHubdbHubDBTableRowBatchCloneRequest>;
}

export interface CmsHubdbBatchInputHubDBTableRowV3BatchUpdateRequest {
  inputs: Array<CmsHubdbHubDBTableRowV3BatchUpdateRequest>;
}

export interface CmsHubdbBatchInputHubDBTableRowV3Request {
  inputs: Array<CmsHubdbHubDBTableRowV3Request>;
}

export interface CmsHubdbBatchResponseHubDBTableRowV3 {
  completedAt?: string;

  links?: { [key: string]: string };

  requestedAt?: string;

  results?: Array<CmsHubdbHubDBTableRowV3>;

  startedAt?: string;

  status?: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';
}

export interface CmsHubdbBatchResponseHubDBTableRowV3WithErrors {
  completedAt: string;

  results: Array<CmsHubdbHubDBTableRowV3>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CmsHubdbBoundedNextPage {
  offset: number;

  link?: string;
}

export interface CmsHubdbBoundedPaging {
  next?: CmsHubdbBoundedNextPage;
}

export interface CmsHubdbCollectionResponseWithTotalHubDBTableV3ForwardPaging {
  results: Array<CmsHubdbHubDBTableV3>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface CmsHubdbColumn {
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

  createdBy?: CmsHubdbSimpleUser;

  createdByUserId?: number;

  deleted?: boolean;

  foreignColumnId?: number;

  foreignIds?: Array<CmsHubdbForeignID>;

  foreignIdsById?: { [key: string]: CmsHubdbForeignID };

  foreignIdsByName?: { [key: string]: CmsHubdbForeignID };

  foreignTableId?: number;

  optionCount?: number;

  options?: Array<CRMAPI.CRMOption>;

  updatedAt?: string;

  updatedBy?: CmsHubdbSimpleUser;

  updatedByUserId?: number;

  width?: number;
}

export interface CmsHubdbColumnRequest {
  id: number;

  label: string;

  name: string;

  options: Array<CRMAPI.CRMOption>;

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

export interface CmsHubdbForeignID {
  id: string;

  name: string;

  type: string;
}

export interface CmsHubdbHubDBTableCloneRequest {
  copyRows: boolean;

  isHubspotDefined: boolean;

  newLabel?: string;

  newName?: string;
}

export interface CmsHubdbHubDBTableRowBatchCloneRequest {
  id: string;

  name?: string;
}

export interface CmsHubdbHubDBTableRowV3 {
  values: { [key: string]: unknown };

  id?: string;

  childTableId?: string;

  createdAt?: string;

  name?: string;

  path?: string;

  publishedAt?: string;

  updatedAt?: string;
}

export interface CmsHubdbHubDBTableRowV3BatchUpdateRequest {
  id: string;

  values: { [key: string]: CmsHubdbVariant };

  childTableId?: number;

  displayIndex?: number;

  name?: string;

  path?: string;
}

export interface CmsHubdbHubDBTableRowV3Request {
  values: { [key: string]: CmsHubdbVariant };

  childTableId?: number;

  displayIndex?: number;

  name?: string;

  path?: string;
}

export interface CmsHubdbHubDBTableV3 {
  deletedAt: string;

  label: string;

  name: string;

  id?: string;

  allowChildTables?: boolean;

  allowPublicApiAccess?: boolean;

  columnCount?: number;

  columns?: Array<CmsHubdbColumn>;

  createdAt?: string;

  createdBy?: CmsHubdbSimpleUser;

  deleted?: boolean;

  dynamicMetaTags?: { [key: string]: number };

  enableChildTablePages?: boolean;

  isOrderedManually?: boolean;

  published?: boolean;

  publishedAt?: string;

  rowCount?: number;

  updatedAt?: string;

  updatedBy?: CmsHubdbSimpleUser;

  useForPages?: boolean;
}

export interface CmsHubdbHubDBTableV3Request {
  label: string;

  name: string;

  allowChildTables?: boolean;

  allowPublicApiAccess?: boolean;

  columns?: Array<CmsHubdbColumnRequest>;

  dynamicMetaTags?: { [key: string]: number };

  enableChildTablePages?: boolean;

  useForPages?: boolean;
}

export interface CmsHubdbImportResult {
  duplicateRows: number;

  errors: Array<Shared.Error>;

  rowLimitExceeded: boolean;

  rowsImported: number;
}

export interface CmsHubdbOption {
  id: string;

  createdAt: string;

  name: string;

  order: number;

  type: string;

  updatedAt: string;

  createdBy?: CmsHubdbSimpleUser;

  createdByUserId?: number;

  label?: string;

  updatedBy?: CmsHubdbSimpleUser;

  updatedByUserId?: number;
}

export interface CmsHubdbRandomAccessCollectionResponseWithTotalHubDBTableRowV3 {
  results: Array<unknown>;

  total: number;

  type: 'RANDOM_ACCESS';

  paging?: CmsHubdbBoundedPaging;
}

export interface CmsHubdbSimpleUser {
  id: string;

  email: string;

  firstName: string;

  lastName: string;
}

export interface CmsHubdbStandardError {
  category: string;

  context: { [key: string]: Array<string> };

  errors: Array<Shared.ErrorDetail>;

  links: { [key: string]: string };

  message: string;

  status: string;

  subCategory: unknown;

  id?: string;
}

export interface CmsHubdbStreamingCollectionResponseWithTotalHubDBTableRowV3 {
  results: Array<unknown>;

  total: number;

  type: 'STREAMING';

  paging?: Shared.Paging;
}

export type CmsHubdbUnifiedCollectionResponseWithTotalBaseHubDBTableRowV3 =
  | CmsHubdbRandomAccessCollectionResponseWithTotalHubDBTableRowV3
  | CmsHubdbStreamingCollectionResponseWithTotalHubDBTableRowV3;

export type CmsHubdbVariant = unknown;

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
  inputs: Array<CmsHubdbHubDBTableRowBatchCloneRequest>;
}

export interface HubdbCreateDraftTableRowsParams {
  inputs: Array<CmsHubdbHubDBTableRowV3Request>;
}

export interface HubdbCreateTableParams {
  label: string;

  name: string;

  allowChildTables?: boolean;

  allowPublicApiAccess?: boolean;

  columns?: Array<CmsHubdbColumnRequest>;

  dynamicMetaTags?: { [key: string]: number };

  enableChildTablePages?: boolean;

  useForPages?: boolean;
}

export interface HubdbCreateTableRowParams {
  values: { [key: string]: CmsHubdbVariant };

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
  values: { [key: string]: CmsHubdbVariant };

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
  inputs: Array<CmsHubdbHubDBTableRowV3BatchUpdateRequest>;
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
  columns?: Array<CmsHubdbColumnRequest>;

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
  values: { [key: string]: CmsHubdbVariant };

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
  inputs: Array<CmsHubdbHubDBTableRowV3BatchUpdateRequest>;
}

Hubdb.Rows = Rows;

export declare namespace Hubdb {
  export {
    type CmsHubdbBatchInputHubDBTableRowBatchCloneRequest as CmsHubdbBatchInputHubDBTableRowBatchCloneRequest,
    type CmsHubdbBatchInputHubDBTableRowV3BatchUpdateRequest as CmsHubdbBatchInputHubDBTableRowV3BatchUpdateRequest,
    type CmsHubdbBatchInputHubDBTableRowV3Request as CmsHubdbBatchInputHubDBTableRowV3Request,
    type CmsHubdbBatchResponseHubDBTableRowV3 as CmsHubdbBatchResponseHubDBTableRowV3,
    type CmsHubdbBatchResponseHubDBTableRowV3WithErrors as CmsHubdbBatchResponseHubDBTableRowV3WithErrors,
    type CmsHubdbBoundedNextPage as CmsHubdbBoundedNextPage,
    type CmsHubdbBoundedPaging as CmsHubdbBoundedPaging,
    type CmsHubdbCollectionResponseWithTotalHubDBTableV3ForwardPaging as CmsHubdbCollectionResponseWithTotalHubDBTableV3ForwardPaging,
    type CmsHubdbColumn as CmsHubdbColumn,
    type CmsHubdbColumnRequest as CmsHubdbColumnRequest,
    type CmsHubdbForeignID as CmsHubdbForeignID,
    type CmsHubdbHubDBTableCloneRequest as CmsHubdbHubDBTableCloneRequest,
    type CmsHubdbHubDBTableRowBatchCloneRequest as CmsHubdbHubDBTableRowBatchCloneRequest,
    type CmsHubdbHubDBTableRowV3 as CmsHubdbHubDBTableRowV3,
    type CmsHubdbHubDBTableRowV3BatchUpdateRequest as CmsHubdbHubDBTableRowV3BatchUpdateRequest,
    type CmsHubdbHubDBTableRowV3Request as CmsHubdbHubDBTableRowV3Request,
    type CmsHubdbHubDBTableV3 as CmsHubdbHubDBTableV3,
    type CmsHubdbHubDBTableV3Request as CmsHubdbHubDBTableV3Request,
    type CmsHubdbImportResult as CmsHubdbImportResult,
    type CmsHubdbOption as CmsHubdbOption,
    type CmsHubdbRandomAccessCollectionResponseWithTotalHubDBTableRowV3 as CmsHubdbRandomAccessCollectionResponseWithTotalHubDBTableRowV3,
    type CmsHubdbSimpleUser as CmsHubdbSimpleUser,
    type CmsHubdbStandardError as CmsHubdbStandardError,
    type CmsHubdbStreamingCollectionResponseWithTotalHubDBTableRowV3 as CmsHubdbStreamingCollectionResponseWithTotalHubDBTableRowV3,
    type CmsHubdbUnifiedCollectionResponseWithTotalBaseHubDBTableRowV3 as CmsHubdbUnifiedCollectionResponseWithTotalBaseHubDBTableRowV3,
    type CmsHubdbVariant as CmsHubdbVariant,
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
