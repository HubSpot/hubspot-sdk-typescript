// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as RowsAPI from './rows';
import {
  RowCloneBatchParams,
  RowCloneDraftParams,
  RowCreateBatchParams,
  RowCreateParams,
  RowDeleteDraftParams,
  RowGetBatchParams,
  RowGetDraftBatchParams,
  RowGetDraftParams,
  RowGetParams,
  RowListParams,
  RowPurgeBatchParams,
  RowReplaceBatchParams,
  RowReplaceDraftParams,
  RowUpdateBatchParams,
  RowUpdateDraftParams,
  Rows,
} from './rows';
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
  TableListDraftParams,
  TableListParams,
  TablePublishDraftParams,
  TableResetDraftParams,
  TableUnpublishParams,
  TableUpdateDraftParams,
  Tables,
} from './tables';
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
  /**
   * The timestamp indicating when the batch processing was completed.
   */
  completedAt: string;

  results: Array<HubDBTableRowV3>;

  /**
   * The timestamp indicating when the batch processing began.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, with possible values: CANCELED,
   * COMPLETE, PENDING, PROCESSING.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * A collection of related links associated with the batch response.
   */
  links?: { [key: string]: string };

  /**
   * The timestamp indicating when the batch request was made.
   */
  requestedAt?: string;
}

export interface BatchResponseHubDBTableRowV3WithErrors {
  /**
   * The timestamp indicating when the batch processing was completed.
   */
  completedAt: string;

  results: Array<HubDBTableRowV3>;

  /**
   * The timestamp indicating when the batch processing began.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, with possible values: CANCELED,
   * COMPLETE, PENDING, PROCESSING.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * A collection of related links associated with the batch response.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch operation.
   */
  numErrors?: number;

  /**
   * The timestamp indicating when the batch request was made.
   */
  requestedAt?: string;
}

export interface BoundedNextPage {
  /**
   * The offset value indicating the starting point for the next set of results.
   */
  offset: number;

  /**
   * A URL that can be used to retrieve the next set of results.
   */
  link?: string;
}

export interface BoundedPaging {
  next?: BoundedNextPage;
}

export interface CollectionResponseWithTotalHubDBTableV3 {
  results: Array<HubDBTableV3>;

  total: number;

  paging?: Shared.Paging;
}

export interface Column {
  /**
   * Column Id
   */
  id: string;

  /**
   * Indicates whether the column has been deleted.
   */
  deleted: boolean;

  /**
   * The description of the column.
   */
  description: string;

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
    | 'BOOLEAN'
    | 'CODE'
    | 'COMPOSITE'
    | 'CTA'
    | 'CURRENCY'
    | 'DATE'
    | 'DATETIME'
    | 'EMBED'
    | 'FILE'
    | 'FOREIGN_ID'
    | 'HUBSPOT_VIDEO'
    | 'IMAGE'
    | 'JSON'
    | 'LOCATION'
    | 'MULTISELECT'
    | 'NULL'
    | 'NUMBER'
    | 'RICHTEXT'
    | 'SELECT'
    | 'TEXT'
    | 'URL'
    | 'VIDEO';

  /**
   * The timestamp when the column was created.
   */
  createdAt?: string;

  createdBy?: SimpleUser;

  /**
   * The ID of the user who created the column.
   */
  createdByUserId?: number;

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
  options?: Array<Option>;

  /**
   * The timestamp when the column was last updated.
   */
  updatedAt?: string;

  updatedBy?: SimpleUser;

  /**
   * The ID of the user who last updated the column.
   */
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
  options: Array<Option>;

  /**
   * Type of the column
   */
  type:
    | 'BOOLEAN'
    | 'CODE'
    | 'COMPOSITE'
    | 'CTA'
    | 'CURRENCY'
    | 'DATE'
    | 'DATETIME'
    | 'EMBED'
    | 'FILE'
    | 'FOREIGN_ID'
    | 'HUBSPOT_VIDEO'
    | 'IMAGE'
    | 'JSON'
    | 'LOCATION'
    | 'MULTISELECT'
    | 'NULL'
    | 'NUMBER'
    | 'RICHTEXT'
    | 'SELECT'
    | 'TEXT'
    | 'URL'
    | 'VIDEO';

  /**
   * The id of the column from another table to which the column refers/points to.
   */
  foreignColumnId?: number;

  /**
   * The id of another table to which the column refers/points to.
   */
  foreignTableId?: number;

  /**
   * Defines the maximum number of characters allowed in the column.
   */
  maxNumberOfCharacters?: number;

  /**
   * Specifies the maximum number of options that can be set for select and
   * multi-select columns.
   */
  maxNumberOfOptions?: number;
}

export interface ForeignID {
  /**
   * Unique identifier for the foreign ID.
   */
  id: string;

  /**
   * Name of the foreign ID.
   */
  name: string;

  /**
   * Type of the foreign ID.
   */
  type: string;
}

export interface HubDBTableCloneRequest {
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

export interface HubDBTableRowBatchCloneRequest {
  /**
   * The ID of the row to be cloned.
   */
  id: string;

  /**
   * The name for the cloned row.
   */
  name?: string;
}

export interface HubDBTableRowV3 {
  /**
   * The id of the table row
   */
  id: string;

  /**
   * Specifies the value for the column child table id
   */
  childTableId: string;

  /**
   * Timestamp at which the row is created
   */
  createdAt: string;

  /**
   * Specifies the value for `hs_name` column, which will be used as title in the
   * dynamic pages
   */
  name: string;

  /**
   * Specifies the value for `hs_path` column, which will be used as slug in the
   * dynamic pages
   */
  path: string;

  /**
   * The timestamp indicating when the row was last published, in date-time format.
   */
  publishedAt: string;

  /**
   * Timestamp at which the row is updated last time
   */
  updatedAt: string;

  /**
   * List of key value pairs with the column name and column value
   */
  values: { [key: string]: unknown };
}

export interface HubDBTableRowV3BatchUpdateRequest {
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
  values: { [key: string]: Variant };

  /**
   * The id of the table row
   */
  id?: string;

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
  values: { [key: string]: Variant };

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

/**
 * HubDbTableRowV3Wrapper
 */
export type HubDBTableRowV3Wrapper = unknown;

export interface HubDBTableV3 {
  /**
   * Id of the table
   */
  id: string;

  /**
   * Specifies whether child tables can be created
   */
  allowChildTables: boolean;

  /**
   * Specifies whether the table can be read by public without authorization
   */
  allowPublicApiAccess: boolean;

  /**
   * Number of columns including deleted
   */
  columnCount: number;

  /**
   * List of columns in the table
   */
  columns: Array<Column>;

  /**
   * Timestamp at which the table is created
   */
  createdAt: string;

  /**
   * Specifies whether the table is marked as deleted.
   */
  deleted: boolean;

  /**
   * The timestamp indicating when the table was deleted.
   */
  deletedAt: string;

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
   * Indicates whether the table is currently published.
   */
  published: boolean;

  /**
   * Timestamp at which the table is published recently
   */
  publishedAt: string;

  /**
   * Number of rows in the table
   */
  rowCount: number;

  /**
   * Timestamp at which the table is updated recently
   */
  updatedAt: string;

  /**
   * Specifies whether the table can be used for creation of dynamic pages
   */
  useForPages: boolean;

  createdBy?: SimpleUser;

  /**
   * Indicates whether the table rows are ordered manually.
   */
  isOrderedManually?: boolean;

  updatedBy?: SimpleUser;
}

export interface HubDBTableV3Request {
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
  columns: Array<ColumnRequest>;

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
   * A user-friendly label that identifies the option.
   */
  label: string;

  /**
   * An internal name assigned to the option, distinct from the label.
   */
  name: string;

  /**
   * The order in which the option appears, represented as an integer.
   */
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

  updatedBy?: SimpleUser;

  /**
   * The ID of the user who last updated the option.
   */
  updatedByUserId?: number;
}

export interface RandomAccessCollectionResponseWithTotalHubDBTableRowV3 {
  results: Array<HubDBTableRowV3Wrapper>;

  /**
   * The total number of rows available in the collection.
   */
  total: number;

  /**
   * Indicates the type of response, which is 'RANDOM_ACCESS' by default.
   */
  type: 'RANDOM_ACCESS';

  paging?: BoundedPaging;
}

export interface SimpleUser {
  /**
   * The unique identifier for the user.
   */
  id: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The first name of the user.
   */
  firstName: string;

  /**
   * The last name of the user.
   */
  lastName: string;
}

export interface StreamingCollectionResponseWithTotalHubDBTableRowV3 {
  results: Array<HubDBTableRowV3Wrapper>;

  /**
   * The total number of rows available in the collection.
   */
  total: number;

  /**
   * Indicates the type of response, which is 'STREAMING' by default.
   */
  type: 'STREAMING';

  paging?: Shared.Paging;
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
    type CollectionResponseWithTotalHubDBTableV3 as CollectionResponseWithTotalHubDBTableV3,
    type Column as Column,
    type ColumnRequest as ColumnRequest,
    type ForeignID as ForeignID,
    type HubDBTableCloneRequest as HubDBTableCloneRequest,
    type HubDBTableRowBatchCloneRequest as HubDBTableRowBatchCloneRequest,
    type HubDBTableRowV3 as HubDBTableRowV3,
    type HubDBTableRowV3BatchUpdateRequest as HubDBTableRowV3BatchUpdateRequest,
    type HubDBTableRowV3Request as HubDBTableRowV3Request,
    type HubDBTableRowV3Wrapper as HubDBTableRowV3Wrapper,
    type HubDBTableV3 as HubDBTableV3,
    type HubDBTableV3Request as HubDBTableV3Request,
    type ImportResult as ImportResult,
    type Option as Option,
    type RandomAccessCollectionResponseWithTotalHubDBTableRowV3 as RandomAccessCollectionResponseWithTotalHubDBTableRowV3,
    type SimpleUser as SimpleUser,
    type StreamingCollectionResponseWithTotalHubDBTableRowV3 as StreamingCollectionResponseWithTotalHubDBTableRowV3,
    type UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3 as UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3,
    type Variant as Variant,
  };

  export {
    Rows as Rows,
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
    type TableListDraftParams as TableListDraftParams,
    type TablePublishDraftParams as TablePublishDraftParams,
    type TableResetDraftParams as TableResetDraftParams,
    type TableUnpublishParams as TableUnpublishParams,
    type TableUpdateDraftParams as TableUpdateDraftParams,
  };
}
