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
import { Page } from '../../../core/pagination';

export class Hubdb extends APIResource {
  rows: RowsAPI.Rows = new RowsAPI.Rows(this._client);
  tables: TablesAPI.Tables = new TablesAPI.Tables(this._client);
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
