// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HubdbAPI from './hubdb';
import { HubDBTableV3sPage } from './hubdb';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Tables extends APIResource {
  /**
   * Create a new table
   */
  create(body: TableCreateParams, options?: RequestOptions): APIPromise<HubdbAPI.HubDBTableV3> {
    return this._client.post('/cms/v3/hubdb/tables', { body, ...options });
  }

  /**
   * Get all published tables
   */
  list(
    query: TableListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HubDBTableV3sPage, HubdbAPI.HubDBTableV3> {
    return this._client.getAPIList('/cms/v3/hubdb/tables', Page<HubdbAPI.HubDBTableV3>, {
      query,
      ...options,
    });
  }

  /**
   * Archive a table
   */
  archive(tableIDOrName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/cms/v3/hubdb/tables/${tableIDOrName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Clone a table
   */
  cloneDraft(
    tableIDOrName: string,
    body: TableCloneDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/clone`, { body, ...options });
  }

  /**
   * Delete a table version
   */
  deleteVersion(
    versionID: number,
    params: TableDeleteVersionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { tableIdOrName } = params;
    return this._client.delete(path`/cms/v3/hubdb/tables/${tableIdOrName}/versions/${versionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Export a published version of a table
   */
  export(
    tableIDOrName: string,
    query: TableExportParams | null | undefined = {},
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
   * Export a draft table
   */
  exportDraft(
    tableIDOrName: string,
    query: TableExportDraftParams | null | undefined = {},
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
   * Get details of a published table
   */
  get(
    tableIDOrName: string,
    query: TableGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}`, { query, ...options });
  }

  /**
   * Get details for a draft table
   */
  getDraft(
    tableIDOrName: string,
    query: TableGetDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft`, { query, ...options });
  }

  /**
   * Import data into draft table
   */
  importDraft(
    tableIDOrName: string,
    body: TableImportDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.ImportResult> {
    return this._client.post(
      path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/import`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Return all draft tables
   */
  listDrafts(
    query: TableListDraftsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.CollectionResponseWithTotalHubDBTableV3ForwardPaging> {
    return this._client.get('/cms/v3/hubdb/tables/draft', { query, ...options });
  }

  /**
   * Publish a table from draft
   */
  publishDraft(
    tableIDOrName: string,
    params: TablePublishDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/publish`, {
      query: { includeForeignIds },
      ...options,
    });
  }

  /**
   * Reset a draft table
   */
  resetDraft(
    tableIDOrName: string,
    params: TableResetDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/reset`, {
      query: { includeForeignIds },
      ...options,
    });
  }

  /**
   * Unpublish a table
   */
  unpublish(
    tableIDOrName: string,
    params: TableUnpublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/unpublish`, {
      query: { includeForeignIds },
      ...options,
    });
  }

  /**
   * Update an existing table
   */
  updateDraft(
    tableIDOrName: string,
    params: TableUpdateDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    const { archived, includeForeignIds, isGetLocalizedSchema, ...body } = params;
    return this._client.patch(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft`, {
      query: { archived, includeForeignIds, isGetLocalizedSchema },
      body,
      ...options,
    });
  }
}

export interface TableCreateParams {
  label: string;

  name: string;

  allowChildTables?: boolean;

  allowPublicApiAccess?: boolean;

  columns?: Array<HubdbAPI.ColumnRequest>;

  dynamicMetaTags?: { [key: string]: number };

  enableChildTablePages?: boolean;

  useForPages?: boolean;
}

export interface TableListParams extends PageParams {
  archived?: boolean;

  contentType?: string;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  isGetLocalizedSchema?: boolean;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface TableCloneDraftParams {
  copyRows: boolean;

  isHubspotDefined: boolean;

  newLabel?: string;

  newName?: string;
}

export interface TableDeleteVersionParams {
  tableIdOrName: string;
}

export interface TableExportParams {
  format?: string;
}

export interface TableExportDraftParams {
  format?: string;
}

export interface TableGetParams {
  archived?: boolean;

  includeForeignIds?: boolean;

  isGetLocalizedSchema?: boolean;
}

export interface TableGetDraftParams {
  archived?: boolean;

  includeForeignIds?: boolean;

  isGetLocalizedSchema?: boolean;
}

export interface TableImportDraftParams {
  config?: string;

  file?: Uploadable;
}

export interface TableListDraftsParams {
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

export interface TablePublishDraftParams {
  includeForeignIds?: boolean;
}

export interface TableResetDraftParams {
  includeForeignIds?: boolean;
}

export interface TableUnpublishParams {
  includeForeignIds?: boolean;
}

export interface TableUpdateDraftParams {
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
  columns?: Array<HubdbAPI.ColumnRequest>;

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

export declare namespace Tables {
  export {
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

export { type HubDBTableV3sPage };
