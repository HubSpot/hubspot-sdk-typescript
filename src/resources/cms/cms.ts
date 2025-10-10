// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DomainsAPI from './domains';
import {
  CollectionResponseWithTotalDomainForwardPaging,
  Domain,
  DomainListParams,
  Domains,
  DomainsPage,
} from './domains';
import * as URLRedirectsAPI from './url-redirects';
import {
  CollectionResponseWithTotalURLMappingForwardPaging,
  URLMapping,
  URLMappingCreateRequestBody,
  URLMappingsPage,
  URLRedirectCreateParams,
  URLRedirectListParams,
  URLRedirectUpdateParams,
  URLRedirects,
} from './url-redirects';
import * as BlogsAPI from './blogs/blogs';
import {
  AttachToLangPrimaryRequestVNext,
  BatchInputJsonNode,
  Blogs,
  DetachFromLangGroupRequestVNext,
  SetNewLanguagePrimaryRequestVNext,
  UpdateLanguagesRequestVNext,
} from './blogs/blogs';
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
  HubDBOption,
  HubDBStandardError,
  HubDBTableCloneRequest,
  HubDBTableRowBatchCloneRequest,
  HubDBTableRowV3,
  HubDBTableRowV3BatchUpdateRequest,
  HubDBTableRowV3Request,
  HubDBTableV3,
  HubDBTableV3Request,
  Hubdb,
  ImportResult,
  RandomAccessCollectionResponseWithTotalHubDBTableRowV3,
  SimpleUser,
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

Cms.Blogs = Blogs;
Cms.Domains = Domains;
Cms.Hubdb = Hubdb;
Cms.URLRedirects = URLRedirects;

export declare namespace Cms {
  export {
    Blogs as Blogs,
    type AttachToLangPrimaryRequestVNext as AttachToLangPrimaryRequestVNext,
    type BatchInputJsonNode as BatchInputJsonNode,
    type DetachFromLangGroupRequestVNext as DetachFromLangGroupRequestVNext,
    type SetNewLanguagePrimaryRequestVNext as SetNewLanguagePrimaryRequestVNext,
    type UpdateLanguagesRequestVNext as UpdateLanguagesRequestVNext,
  };

  export {
    Domains as Domains,
    type CollectionResponseWithTotalDomainForwardPaging as CollectionResponseWithTotalDomainForwardPaging,
    type Domain as Domain,
    type DomainsPage as DomainsPage,
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
    type HubDBOption as HubDBOption,
    type HubDBStandardError as HubDBStandardError,
    type HubDBTableCloneRequest as HubDBTableCloneRequest,
    type HubDBTableRowBatchCloneRequest as HubDBTableRowBatchCloneRequest,
    type HubDBTableRowV3 as HubDBTableRowV3,
    type HubDBTableRowV3BatchUpdateRequest as HubDBTableRowV3BatchUpdateRequest,
    type HubDBTableRowV3Request as HubDBTableRowV3Request,
    type HubDBTableV3 as HubDBTableV3,
    type HubDBTableV3Request as HubDBTableV3Request,
    type ImportResult as ImportResult,
    type RandomAccessCollectionResponseWithTotalHubDBTableRowV3 as RandomAccessCollectionResponseWithTotalHubDBTableRowV3,
    type SimpleUser as SimpleUser,
    type StreamingCollectionResponseWithTotalHubDBTableRowV3 as StreamingCollectionResponseWithTotalHubDBTableRowV3,
    type UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3 as UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3,
    type Variant as Variant,
  };

  export {
    URLRedirects as URLRedirects,
    type CollectionResponseWithTotalURLMappingForwardPaging as CollectionResponseWithTotalURLMappingForwardPaging,
    type URLMapping as URLMapping,
    type URLMappingCreateRequestBody as URLMappingCreateRequestBody,
    type URLMappingsPage as URLMappingsPage,
    type URLRedirectCreateParams as URLRedirectCreateParams,
    type URLRedirectUpdateParams as URLRedirectUpdateParams,
    type URLRedirectListParams as URLRedirectListParams,
  };
}
