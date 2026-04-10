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

export class BaseTables extends APIResource {
  static override readonly _key: readonly ['cms', 'hubdb', 'tables'] = Object.freeze([
    'cms',
    'hubdb',
    'tables',
  ] as const);

  /**
   * Creates a new draft HubDB table given a JSON schema. The table name and label
   * should be unique for each account.
   */
  create(body: TableCreateParams, options?: RequestOptions): APIPromise<HubdbAPI.HubDBTableV3> {
    return this._client.post('/cms/hubdb/2026-03/tables', { body, ...options });
  }

  /**
   * Returns the details for the published version of each table defined in an
   * account, including column definitions.
   */
  list(
    query: TableListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HubDBTableV3sPage, HubdbAPI.HubDBTableV3> {
    return this._client.getAPIList('/cms/hubdb/2026-03/tables', Page<HubdbAPI.HubDBTableV3>, {
      query,
      ...options,
    });
  }

  /**
   * Archive (soft delete) an existing HubDB table. This archives both the published
   * and draft versions.
   */
  delete(tableIDOrName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/cms/hubdb/2026-03/tables/${tableIDOrName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can
   * be sent as JSON in the request body. This will create the cloned table as a
   * draft.
   */
  cloneDraft(
    tableIDOrName: string,
    body: TableCloneDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/draft/clone`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a specific version of a table
   */
  deleteVersion(
    versionID: number,
    params: TableDeleteVersionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { tableIdOrName } = params;
    return this._client.delete(path`/cms/hubdb/2026-03/tables/${tableIdOrName}/versions/${versionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Exports the published version of a table in a specified format.
   */
  export(
    tableIDOrName: string,
    query: TableExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/export`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.ms-excel' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Exports the draft version of a table to CSV / EXCEL format.
   */
  exportDraft(
    tableIDOrName: string,
    query: TableExportDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/draft/export`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.ms-excel' }, options?.headers]),
      __binaryResponse: true,
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
  get(
    tableIDOrName: string,
    query: TableGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    return this._client.get(path`/cms/hubdb/2026-03/tables/${tableIDOrName}`, { query, ...options });
  }

  /**
   * Get the details for the draft version of a specific HubDB table. This will
   * include the definitions for the columns in the table and the number of rows in
   * the table.
   */
  getDraft(
    tableIDOrName: string,
    query: TableGetDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    return this._client.get(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/draft`, { query, ...options });
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
  importDraft(
    tableIDOrName: string,
    body: TableImportDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.ImportResult> {
    return this._client.post(
      path`/cms/hubdb/2026-03/tables/${tableIDOrName}/draft/import`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Returns the details for each draft table defined in the specified account,
   * including column definitions.
   */
  listDraft(
    query: TableListDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HubDBTableV3sPage, HubdbAPI.HubDBTableV3> {
    return this._client.getAPIList('/cms/hubdb/2026-03/tables/draft', Page<HubdbAPI.HubDBTableV3>, {
      query,
      ...options,
    });
  }

  /**
   * Publishes the table by copying the data and table schema changes from draft
   * version to the published version, meaning any website pages using data from the
   * table will be updated.
   */
  publishDraft(
    tableIDOrName: string,
    params: TablePublishDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/draft/publish`, {
      query: { includeForeignIds },
      ...options,
    });
  }

  /**
   * Replaces the data in the draft version of the table with values from the
   * published version. Any unpublished changes in the draft will be lost after this
   * call is made.
   */
  resetDraft(
    tableIDOrName: string,
    params: TableResetDraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/draft/reset`, {
      query: { includeForeignIds },
      ...options,
    });
  }

  /**
   * Unpublishes the table, meaning any website pages using data from the table will
   * not render any data.
   */
  unpublish(
    tableIDOrName: string,
    params: TableUnpublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/unpublish`, {
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
  updateDraft(
    tableIDOrName: string,
    params: TableUpdateDraftParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.HubDBTableV3> {
    const { archived, includeForeignIds, isGetLocalizedSchema, ...body } = params;
    return this._client.patch(path`/cms/hubdb/2026-03/tables/${tableIDOrName}/draft`, {
      query: { archived, includeForeignIds, isGetLocalizedSchema },
      body,
      ...options,
    });
  }
}
export class Tables extends BaseTables {}

export interface TableCreateParams {
  /**
   * Specifies whether child tables can be created
   */
  allowChildTables: boolean;

  /**
   * Specifies whether the table can be read by public without authorization
   */
  allowPublicApiAccess: boolean;

  /**
   * List of columns in the table
   */
  columns: Array<HubdbAPI.ColumnRequest>;

  /**
   * Specifies the key value pairs of the
   * [metadata fields](https://developers.hubspot.com/docs/cms/guides/dynamic-pages/hubdb#dynamic-pages)
   * with the associated column IDs.
   */
  dynamicMetaTags: { [key: string]: number };

  /**
   * Specifies creation of multi-level dynamic pages using child tables
   */
  enableChildTablePages: boolean;

  /**
   * Label of the table
   */
  label: string;

  /**
   * Name of the table
   */
  name: string;

  /**
   * Specifies whether the table can be used for creation of dynamic pages
   */
  useForPages: boolean;
}

export interface TableListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
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
  /**
   * Specifies whether to copy the rows during clone
   */
  copyRows: boolean;

  /**
   * Indicates whether the table is defined by HubSpot.
   */
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
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  includeForeignIds?: boolean;

  isGetLocalizedSchema?: boolean;
}

export interface TableGetDraftParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  includeForeignIds?: boolean;

  isGetLocalizedSchema?: boolean;
}

export interface TableImportDraftParams {
  config?: string;

  file?: Uploadable;
}

export interface TableListDraftParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
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
   * Body param: Specifies whether child tables can be created
   */
  allowChildTables: boolean;

  /**
   * Body param: Specifies whether the table can be read by public without
   * authorization
   */
  allowPublicApiAccess: boolean;

  /**
   * Body param: List of columns in the table
   */
  columns: Array<HubdbAPI.ColumnRequest>;

  /**
   * Body param: Specifies the key value pairs of the
   * [metadata fields](https://developers.hubspot.com/docs/cms/guides/dynamic-pages/hubdb#dynamic-pages)
   * with the associated column IDs.
   */
  dynamicMetaTags: { [key: string]: number };

  /**
   * Body param: Specifies creation of multi-level dynamic pages using child tables
   */
  enableChildTablePages: boolean;

  /**
   * Body param: Label of the table
   */
  label: string;

  /**
   * Body param: Name of the table
   */
  name: string;

  /**
   * Body param: Specifies whether the table can be used for creation of dynamic
   * pages
   */
  useForPages: boolean;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Query param
   */
  includeForeignIds?: boolean;

  /**
   * Query param
   */
  isGetLocalizedSchema?: boolean;
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
    type TableListDraftParams as TableListDraftParams,
    type TablePublishDraftParams as TablePublishDraftParams,
    type TableResetDraftParams as TableResetDraftParams,
    type TableUnpublishParams as TableUnpublishParams,
    type TableUpdateDraftParams as TableUpdateDraftParams,
  };
}

export { type HubDBTableV3sPage };
