// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as DomainsAPI from './domains';
import { CollectionResponseWithTotalDomainForwardPaging, Domain, DomainListParams, Domains } from './domains';
import * as URLRedirectsAPI from './url-redirects';
import {
  URLRedirectCreateParams,
  URLRedirectListParams,
  URLRedirectUpdateParams,
  URLRedirects,
} from './url-redirects';
import * as BlogsAPI from './blogs/blogs';
import { Blogs } from './blogs/blogs';
import * as HubdbAPI from './hubdb/hubdb';
import {
  BatchInputHubDBTableRowBatchCloneRequest,
  BatchInputHubDBTableRowV3BatchUpdateRequest,
  BatchInputHubDBTableRowV3Request,
  BatchResponseHubDBTableRowV3,
  BatchResponseHubDBTableRowV3WithErrors,
  BoundedNextPage,
  BoundedPaging,
  CollectionResponseWithTotalHubDBTableV3ForwardPaging,
  Column,
  ColumnRequest,
  ForeignID,
  HubDBTableCloneRequest,
  HubDBTableRowBatchCloneRequest,
  HubDBTableRowV3,
  HubDBTableRowV3BatchUpdateRequest,
  HubDBTableRowV3Request,
  HubDBTableV3,
  HubDBTableV3Request,
  Hubdb,
  HubdbCloneDraftTableParams,
  HubdbCloneDraftTableRowParams,
  HubdbCloneDraftTableRowsParams,
  HubdbCreateDraftTableRowsParams,
  HubdbCreateTableParams,
  HubdbCreateTableRowParams,
  HubdbExportDraftTableParams,
  HubdbExportTableParams,
  HubdbGetAllDraftTablesParams,
  HubdbGetAllTablesParams,
  HubdbGetDraftTableDetailsByIDParams,
  HubdbGetDraftTableRowByIDParams,
  HubdbGetTableDetailsParams,
  HubdbGetTableRowParams,
  HubdbGetTableRowsParams,
  HubdbImportDraftTableParams,
  HubdbPublishDraftTableParams,
  HubdbPurgeDraftTableRowParams,
  HubdbPurgeDraftTableRowsParams,
  HubdbReadDraftTableRowsParams,
  HubdbReadTableRowsParams,
  HubdbRemoveTableVersionParams,
  HubdbReplaceDraftTableRowParams,
  HubdbReplaceDraftTableRowsParams,
  HubdbResetDraftTableParams,
  HubdbUnpublishTableParams,
  HubdbUpdateDraftTableParams,
  HubdbUpdateDraftTableRowParams,
  HubdbUpdateDraftTableRowsParams,
  ImportResult,
  Option,
  RandomAccessCollectionResponseWithTotalHubDBTableRowV3,
  SimpleUser,
  StandardError,
  StreamingCollectionResponseWithTotalHubDBTableRowV3,
  UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3,
  Variant,
} from './hubdb/hubdb';

export class Cms extends APIResource {
  blogs: BlogsAPI.Blogs = new BlogsAPI.Blogs(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  hubdb: HubdbAPI.Hubdb = new HubdbAPI.Hubdb(this._client);
  urlRedirects: URLRedirectsAPI.URLRedirects = new URLRedirectsAPI.URLRedirects(this._client);
}

export interface CollectionResponseWithTotalURLMappingForwardPaging {
  results: Array<URLMapping>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface URLMapping {
  id: string;

  destination: string;

  isMatchFullUrl: boolean;

  isMatchQueryString: boolean;

  isOnlyAfterNotFound: boolean;

  isPattern: boolean;

  isProtocolAgnostic: boolean;

  isTrailingSlashOptional: boolean;

  precedence: number;

  redirectStyle: number;

  routePrefix: string;

  created?: string;

  updated?: string;
}

export interface URLMappingCreateRequestBody {
  destination: string;

  redirectStyle: number;

  routePrefix: string;

  isMatchFullUrl?: boolean;

  isMatchQueryString?: boolean;

  isOnlyAfterNotFound?: boolean;

  isPattern?: boolean;

  isProtocolAgnostic?: boolean;

  isTrailingSlashOptional?: boolean;

  precedence?: number;
}

Cms.Blogs = Blogs;
Cms.Domains = Domains;
Cms.Hubdb = Hubdb;
Cms.URLRedirects = URLRedirects;

export declare namespace Cms {
  export {
    type CollectionResponseWithTotalURLMappingForwardPaging as CollectionResponseWithTotalURLMappingForwardPaging,
    type URLMapping as URLMapping,
    type URLMappingCreateRequestBody as URLMappingCreateRequestBody,
  };

  export { Blogs as Blogs };

  export {
    Domains as Domains,
    type CollectionResponseWithTotalDomainForwardPaging as CollectionResponseWithTotalDomainForwardPaging,
    type Domain as Domain,
    type DomainListParams as DomainListParams,
  };

  export {
    Hubdb as Hubdb,
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
    URLRedirects as URLRedirects,
    type URLRedirectCreateParams as URLRedirectCreateParams,
    type URLRedirectUpdateParams as URLRedirectUpdateParams,
    type URLRedirectListParams as URLRedirectListParams,
  };
}
