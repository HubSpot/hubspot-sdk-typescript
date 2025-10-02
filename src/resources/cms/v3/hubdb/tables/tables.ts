// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as PropertiesAPI from '../../../../crm/v3/properties/properties';
import * as DraftAPI from './draft';
import {
  Draft,
  DraftCloneParams,
  DraftImportParams,
  DraftImportResponse,
  DraftListParams,
  DraftPatchAllParams,
  DraftPublishParams,
  DraftResetParams,
  DraftRetrieveExportParams,
  ErrorDetail,
  HubdbCollectionResponseWithTotal,
  HubdbSimpleUser,
  HubdbTableV3,
} from './draft';
import * as RowsAPI from './rows/rows';
import { HubdbTableRowV3, RowCreateParams, RowListParams, RowRetrieveParams, Rows } from './rows/rows';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Tables extends APIResource {
  draft: DraftAPI.Draft = new DraftAPI.Draft(this._client);
  rows: RowsAPI.Rows = new RowsAPI.Rows(this._client);

  /**
   * Create a new table
   */
  create(body: TableCreateParams, options?: RequestOptions): APIPromise<DraftAPI.HubdbTableV3> {
    return this._client.post('/cms/v3/hubdb/tables', { body, ...options });
  }

  /**
   * Get details of a published table
   */
  retrieve(
    tableIDOrName: string,
    query: TableRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DraftAPI.HubdbTableV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}`, { query, ...options });
  }

  /**
   * Get all published tables
   */
  list(
    query: TableListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DraftAPI.HubdbCollectionResponseWithTotal> {
    return this._client.get('/cms/v3/hubdb/tables', { query, ...options });
  }

  /**
   * Delete a table version
   */
  delete(versionID: number, params: TableDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { tableIdOrName } = params;
    return this._client.delete(path`/cms/v3/hubdb/tables/${tableIdOrName}/versions/${versionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Export a published version of a table
   */
  retrieveExport(
    tableIDOrName: string,
    query: TableRetrieveExportParams | null | undefined = {},
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
   * Unpublish a table
   */
  unpublish(
    tableIDOrName: string,
    params: TableUnpublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DraftAPI.HubdbTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/unpublish`, {
      query: { includeForeignIds },
      ...options,
    });
  }
}

export interface HubdbTableV3Request {
  label: string;

  name: string;

  allowChildTables?: boolean;

  allowPublicApiAccess?: boolean;

  columns?: Array<HubdbTableV3Request.Column>;

  dynamicMetaTags?: { [key: string]: number };

  enableChildTablePages?: boolean;

  useForPages?: boolean;
}

export namespace HubdbTableV3Request {
  export interface Column {
    id: number;

    label: string;

    name: string;

    options: Array<PropertiesAPI.CRMOption>;

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
}

export interface TableCreateParams {
  label: string;

  name: string;

  allowChildTables?: boolean;

  allowPublicApiAccess?: boolean;

  columns?: Array<TableCreateParams.Column>;

  dynamicMetaTags?: { [key: string]: number };

  enableChildTablePages?: boolean;

  useForPages?: boolean;
}

export namespace TableCreateParams {
  export interface Column {
    id: number;

    label: string;

    name: string;

    options: Array<PropertiesAPI.CRMOption>;

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
}

export interface TableRetrieveParams {
  archived?: boolean;

  includeForeignIds?: boolean;

  isGetLocalizedSchema?: boolean;
}

export interface TableListParams {
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

export interface TableDeleteParams {
  tableIdOrName: string;
}

export interface TableRetrieveExportParams {
  format?: string;
}

export interface TableUnpublishParams {
  includeForeignIds?: boolean;
}

Tables.Draft = Draft;
Tables.Rows = Rows;

export declare namespace Tables {
  export {
    type HubdbTableV3Request as HubdbTableV3Request,
    type TableCreateParams as TableCreateParams,
    type TableRetrieveParams as TableRetrieveParams,
    type TableListParams as TableListParams,
    type TableDeleteParams as TableDeleteParams,
    type TableRetrieveExportParams as TableRetrieveExportParams,
    type TableUnpublishParams as TableUnpublishParams,
  };

  export {
    Draft as Draft,
    type ErrorDetail as ErrorDetail,
    type HubdbCollectionResponseWithTotal as HubdbCollectionResponseWithTotal,
    type HubdbSimpleUser as HubdbSimpleUser,
    type HubdbTableV3 as HubdbTableV3,
    type DraftImportResponse as DraftImportResponse,
    type DraftListParams as DraftListParams,
    type DraftCloneParams as DraftCloneParams,
    type DraftImportParams as DraftImportParams,
    type DraftPatchAllParams as DraftPatchAllParams,
    type DraftPublishParams as DraftPublishParams,
    type DraftResetParams as DraftResetParams,
    type DraftRetrieveExportParams as DraftRetrieveExportParams,
  };

  export {
    Rows as Rows,
    type HubdbTableRowV3 as HubdbTableRowV3,
    type RowCreateParams as RowCreateParams,
    type RowRetrieveParams as RowRetrieveParams,
    type RowListParams as RowListParams,
  };
}
