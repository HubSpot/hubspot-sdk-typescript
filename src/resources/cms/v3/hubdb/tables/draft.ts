// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as DraftAPI from './draft';
import * as ActivityAPI from '../../../../account-info/v3/activity';
import * as PropertiesAPI from '../../../../crm/v3/properties/properties';
import { APIPromise } from '../../../../../core/api-promise';
import { type Uploadable } from '../../../../../core/uploads';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../../internal/uploads';
import { path } from '../../../../../internal/utils/path';

export class Draft extends APIResource {
  /**
   * Get details for a draft table
   */
  list(
    tableIDOrName: string,
    query: DraftListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbTableV3> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft`, { query, ...options });
  }

  /**
   * Clone a table
   */
  clone(tableIDOrName: string, body: DraftCloneParams, options?: RequestOptions): APIPromise<HubdbTableV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/clone`, { body, ...options });
  }

  /**
   * Import data into draft table
   */
  import(
    tableIDOrName: string,
    body: DraftImportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DraftImportResponse> {
    return this._client.post(
      path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/import`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Update an existing table
   */
  patchAll(
    tableIDOrName: string,
    params: DraftPatchAllParams,
    options?: RequestOptions,
  ): APIPromise<HubdbTableV3> {
    const { archived, includeForeignIds, isGetLocalizedSchema, ...body } = params;
    return this._client.patch(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft`, {
      query: { archived, includeForeignIds, isGetLocalizedSchema },
      body,
      ...options,
    });
  }

  /**
   * Publish a table from draft
   */
  publish(
    tableIDOrName: string,
    params: DraftPublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/publish`, {
      query: { includeForeignIds },
      ...options,
    });
  }

  /**
   * Reset a draft table
   */
  reset(
    tableIDOrName: string,
    params: DraftResetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubdbTableV3> {
    const { includeForeignIds } = params ?? {};
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/reset`, {
      query: { includeForeignIds },
      ...options,
    });
  }

  /**
   * Export a draft table
   */
  retrieveExport(
    tableIDOrName: string,
    query: DraftRetrieveExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/cms/v3/hubdb/tables/${tableIDOrName}/draft/export`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.ms-excel' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface ErrorDetail {
  message: string;

  code?: string;

  context?: { [key: string]: Array<string> };

  in?: string;

  subCategory?: string;
}

export interface HubdbCollectionResponseWithTotal {
  results: Array<HubdbTableV3>;

  total: number;

  paging?: ActivityAPI.ForwardPaging;
}

export interface HubdbSimpleUser {
  id: string;

  email: string;

  firstName: string;

  lastName: string;
}

export interface HubdbTableV3 {
  deletedAt: string;

  label: string;

  name: string;

  id?: string;

  allowChildTables?: boolean;

  allowPublicApiAccess?: boolean;

  columnCount?: number;

  columns?: Array<HubdbTableV3.Column>;

  createdAt?: string;

  createdBy?: HubdbSimpleUser;

  deleted?: boolean;

  dynamicMetaTags?: { [key: string]: number };

  enableChildTablePages?: boolean;

  isOrderedManually?: boolean;

  published?: boolean;

  publishedAt?: string;

  rowCount?: number;

  updatedAt?: string;

  updatedBy?: HubdbSimpleUser;

  useForPages?: boolean;
}

export namespace HubdbTableV3 {
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

    createdBy?: DraftAPI.HubdbSimpleUser;

    createdByUserId?: number;

    deleted?: boolean;

    foreignColumnId?: number;

    foreignIds?: Array<Column.ForeignID>;

    foreignIdsById?: { [key: string]: Column.ForeignIDsByID };

    foreignIdsByName?: { [key: string]: Column.ForeignIDsByName };

    foreignTableId?: number;

    optionCount?: number;

    options?: Array<PropertiesAPI.CRMOption>;

    updatedAt?: string;

    updatedBy?: DraftAPI.HubdbSimpleUser;

    updatedByUserId?: number;

    width?: number;
  }

  export namespace Column {
    export interface ForeignID {
      id: string;

      name: string;

      type: string;
    }

    export interface ForeignIDsByID {
      id: string;

      name: string;

      type: string;
    }

    export interface ForeignIDsByName {
      id: string;

      name: string;

      type: string;
    }
  }
}

export interface DraftImportResponse {
  duplicateRows: number;

  errors: Array<DraftImportResponse.Error>;

  rowLimitExceeded: boolean;

  rowsImported: number;
}

export namespace DraftImportResponse {
  export interface Error {
    category: string;

    correlationId: string;

    message: string;

    context?: { [key: string]: Array<string> };

    errors?: Array<DraftAPI.ErrorDetail>;

    links?: { [key: string]: string };

    subCategory?: string;
  }
}

export interface DraftListParams {
  archived?: boolean;

  includeForeignIds?: boolean;

  isGetLocalizedSchema?: boolean;
}

export interface DraftCloneParams {
  copyRows: boolean;

  isHubspotDefined: boolean;

  newLabel?: string;

  newName?: string;
}

export interface DraftImportParams {
  config?: string;

  file?: Uploadable;
}

export interface DraftPatchAllParams {
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
  columns?: Array<DraftPatchAllParams.Column>;

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

export namespace DraftPatchAllParams {
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

export interface DraftPublishParams {
  includeForeignIds?: boolean;
}

export interface DraftResetParams {
  includeForeignIds?: boolean;
}

export interface DraftRetrieveExportParams {
  format?: string;
}

export declare namespace Draft {
  export {
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
}
