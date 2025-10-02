// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as DomainsAPI from './domains';
import {
  CmsDomainsCollectionResponseWithTotalDomainForwardPaging,
  CmsDomainsDomain,
  DomainListParams,
  Domains,
} from './domains';
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
  CmsHubdbBatchInputHubDBTableRowBatchCloneRequest,
  CmsHubdbBatchInputHubDBTableRowV3BatchUpdateRequest,
  CmsHubdbBatchInputHubDBTableRowV3Request,
  CmsHubdbBatchResponseHubDBTableRowV3,
  CmsHubdbBatchResponseHubDBTableRowV3WithErrors,
  CmsHubdbBoundedNextPage,
  CmsHubdbBoundedPaging,
  CmsHubdbCollectionResponseWithTotalHubDBTableV3ForwardPaging,
  CmsHubdbColumn,
  CmsHubdbColumnRequest,
  CmsHubdbForeignID,
  CmsHubdbHubDBTableCloneRequest,
  CmsHubdbHubDBTableRowBatchCloneRequest,
  CmsHubdbHubDBTableRowV3,
  CmsHubdbHubDBTableRowV3BatchUpdateRequest,
  CmsHubdbHubDBTableRowV3Request,
  CmsHubdbHubDBTableV3,
  CmsHubdbHubDBTableV3Request,
  CmsHubdbImportResult,
  CmsHubdbOption,
  CmsHubdbRandomAccessCollectionResponseWithTotalHubDBTableRowV3,
  CmsHubdbSimpleUser,
  CmsHubdbStandardError,
  CmsHubdbStreamingCollectionResponseWithTotalHubDBTableRowV3,
  CmsHubdbUnifiedCollectionResponseWithTotalBaseHubDBTableRowV3,
  CmsHubdbVariant,
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
} from './hubdb/hubdb';

export class Cms extends APIResource {
  blogs: BlogsAPI.Blogs = new BlogsAPI.Blogs(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  hubdb: HubdbAPI.Hubdb = new HubdbAPI.Hubdb(this._client);
  urlRedirects: URLRedirectsAPI.URLRedirects = new URLRedirectsAPI.URLRedirects(this._client);
}

export interface CmsCollectionResponseWithTotalURLMappingForwardPaging {
  results: Array<CmsURLMapping>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface CmsURLMapping {
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

export interface CmsURLMappingCreateRequestBody {
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
    type CmsCollectionResponseWithTotalURLMappingForwardPaging as CmsCollectionResponseWithTotalURLMappingForwardPaging,
    type CmsURLMapping as CmsURLMapping,
    type CmsURLMappingCreateRequestBody as CmsURLMappingCreateRequestBody,
  };

  export { Blogs as Blogs };

  export {
    Domains as Domains,
    type CmsDomainsCollectionResponseWithTotalDomainForwardPaging as CmsDomainsCollectionResponseWithTotalDomainForwardPaging,
    type CmsDomainsDomain as CmsDomainsDomain,
    type DomainListParams as DomainListParams,
  };

  export {
    Hubdb as Hubdb,
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

  export {
    URLRedirects as URLRedirects,
    type URLRedirectCreateParams as URLRedirectCreateParams,
    type URLRedirectUpdateParams as URLRedirectUpdateParams,
    type URLRedirectListParams as URLRedirectListParams,
  };
}
