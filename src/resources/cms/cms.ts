// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuditLogsAPI from './audit-logs';
import {
  AuditLogListParams,
  AuditLogs,
  CollectionResponsePublicAuditLog,
  PublicAuditLog,
  PublicAuditLogsPage,
} from './audit-logs';
import * as DomainsAPI from './domains';
import {
  CollectionResponseWithTotalDomainForwardPaging,
  Domain,
  DomainListParams,
  Domains,
  DomainsPage,
} from './domains';
import * as SiteSearchAPI from './site-search';
import {
  ContentSearchResult,
  IndexedData,
  IndexedField,
  PublicSearchResults,
  SiteSearch,
  SiteSearchGetIndexedDataParams,
  SiteSearchSearchParams,
} from './site-search';
import * as SourceCodeAPI from './source-code';
import {
  AssetFileMetadata,
  FileExtractRequest,
  SourceCode,
  SourceCodeCreateParams,
  SourceCodeDeleteParams,
  SourceCodeExtractAsyncParams,
  SourceCodeGetMetadataParams,
  SourceCodeGetParams,
  SourceCodeUpsertParams,
  SourceCodeValidateParams,
} from './source-code';
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
  ImportResult,
  Option,
  RandomAccessCollectionResponseWithTotalHubDBTableRowV3,
  SimpleUser,
  StandardError,
  StreamingCollectionResponseWithTotalHubDBTableRowV3,
  UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3,
  Variant,
} from './hubdb/hubdb';
import * as MediaBridgeAPI from './media-bridge/media-bridge';
import { MediaBridge } from './media-bridge/media-bridge';
import * as PagesAPI from './pages/pages';
import {
  AbTestEndRequestVNext,
  AbTestRerunRequestVNext,
  BatchInputContentFolder,
  BatchInputPage,
  BatchResponseContentFolder,
  BatchResponseContentFolderWithErrors,
  BatchResponsePage,
  BatchResponsePageWithErrors,
  CollectionResponseWithTotalContentFolderForwardPaging,
  CollectionResponseWithTotalPageForwardPaging,
  CollectionResponseWithTotalVersionContentFolder,
  CollectionResponseWithTotalVersionPage,
  ContentFolder,
  ContentLanguageCloneRequestVNext,
  ContentLanguageVariation,
  Page,
  Pages,
  VersionContentFolder,
  VersionPage,
} from './pages/pages';
import * as PostsAPI from './blogs/posts/posts';

export class Cms extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  blogs: BlogsAPI.Blogs = new BlogsAPI.Blogs(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  hubdb: HubdbAPI.Hubdb = new HubdbAPI.Hubdb(this._client);
  mediaBridge: MediaBridgeAPI.MediaBridge = new MediaBridgeAPI.MediaBridge(this._client);
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
  siteSearch: SiteSearchAPI.SiteSearch = new SiteSearchAPI.SiteSearch(this._client);
  sourceCode: SourceCodeAPI.SourceCode = new SourceCodeAPI.SourceCode(this._client);
  urlRedirects: URLRedirectsAPI.URLRedirects = new URLRedirectsAPI.URLRedirects(this._client);
}

export interface Angle {
  units: string;

  value: number;
}

/**
 * Request body object for attaching objects to multi-language groups.
 */
export interface AttachToLangPrimaryRequestVNext {
  /**
   * ID of the object to add to a multi-language group.
   */
  id: string;

  /**
   * Designated language of the object to add to a multi-language group.
   */
  language: string;

  /**
   * ID of primary language object in multi-language group.
   */
  primaryId: string;

  /**
   * Primary language of the multi-language group.
   */
  primaryLanguage?: string;
}

export interface BackgroundImage {
  backgroundPosition: string;

  backgroundSize: string;

  imageUrl: string;
}

/**
 * Wrapper for providing an array of JSON nodes as inputs.
 */
export interface BatchInputJsonNode {
  /**
   * JSON nodes to input.
   */
  inputs: Array<unknown>;
}

export interface ColorStop {
  /**
   * A color defined by RGB values.
   */
  color: RgbaColor;
}

/**
 * Request body object for cloning content.
 */
export interface ContentCloneRequestVNext {
  /**
   * ID of the object to be cloned.
   */
  id: string;

  /**
   * Name of the cloned object.
   */
  cloneName?: string;
}

/**
 * Request body object for scheduling the publish of content
 */
export interface ContentScheduleRequestVNext {
  /**
   * The ID of the object to be scheduled.
   */
  id: string;

  /**
   * The date the object should transition from scheduled to published.
   */
  publishDate: string;
}

/**
 * Request body object for detaching objects from multi-language groups.
 */
export interface DetachFromLangGroupRequestVNext {
  /**
   * ID of the object to remove from a multi-language group.
   */
  id: string;
}

export interface Gradient {
  angle: Angle;

  colors: Array<ColorStop>;

  sideOrCorner: SideOrCorner;
}

export interface LayoutSection {
  cells: Array<LayoutSection>;

  cssClass: string;

  cssId: string;

  cssStyle: string;

  label: string;

  name: string;

  /**
   * null
   */
  params: { [key: string]: unknown };

  rowMetaData: Array<RowMetaData>;

  rows: Array<{ [key: string]: LayoutSection }>;

  styles: Styles;

  type: string;

  w: number;

  x: number;
}

export type PublicAccessRule = unknown;

/**
 * A color defined by RGB values.
 */
export interface RgbaColor {
  /**
   * Alpha.
   */
  a: number;

  /**
   * Blue.
   */
  b: number;

  /**
   * Green.
   */
  g: number;

  /**
   * Red.
   */
  r: number;
}

export interface RowMetaData {
  cssClass: string;

  styles: Styles;
}

/**
 * Request body object for setting a new primary language.
 */
export interface SetNewLanguagePrimaryRequestVNext {
  /**
   * ID of object to set as primary in multi-language group.
   */
  id: string;
}

export interface SideOrCorner {
  horizontalSide: string;

  verticalSide: string;
}

export interface Styles {
  /**
   * A color defined by RGB values.
   */
  backgroundColor: RgbaColor;

  backgroundGradient: Gradient;

  backgroundImage: BackgroundImage;

  flexboxPositioning: string;

  forceFullWidthSection: boolean;

  maxWidthSectionCentering: number;

  verticalAlignment: string;

  breakpointStyles?: { [key: string]: PostsAPI.BreakpointStyles };
}

/**
 * Request object for updating languages within a multi-language group.
 */
export interface UpdateLanguagesRequestVNext {
  /**
   * Map of object IDs to associated languages of object in the multi-language group.
   */
  languages: { [key: string]: string };

  /**
   * ID of the primary object in the multi-language group.
   */
  primaryId: string;
}

Cms.AuditLogs = AuditLogs;
Cms.Blogs = Blogs;
Cms.Domains = Domains;
Cms.Hubdb = Hubdb;
Cms.MediaBridge = MediaBridge;
Cms.Pages = Pages;
Cms.SiteSearch = SiteSearch;
Cms.SourceCode = SourceCode;
Cms.URLRedirects = URLRedirects;

export declare namespace Cms {
  export {
    type Angle as Angle,
    type AttachToLangPrimaryRequestVNext as AttachToLangPrimaryRequestVNext,
    type BackgroundImage as BackgroundImage,
    type BatchInputJsonNode as BatchInputJsonNode,
    type ColorStop as ColorStop,
    type ContentCloneRequestVNext as ContentCloneRequestVNext,
    type ContentScheduleRequestVNext as ContentScheduleRequestVNext,
    type DetachFromLangGroupRequestVNext as DetachFromLangGroupRequestVNext,
    type Gradient as Gradient,
    type LayoutSection as LayoutSection,
    type PublicAccessRule as PublicAccessRule,
    type RgbaColor as RgbaColor,
    type RowMetaData as RowMetaData,
    type SetNewLanguagePrimaryRequestVNext as SetNewLanguagePrimaryRequestVNext,
    type SideOrCorner as SideOrCorner,
    type Styles as Styles,
    type UpdateLanguagesRequestVNext as UpdateLanguagesRequestVNext,
  };

  export {
    AuditLogs as AuditLogs,
    type CollectionResponsePublicAuditLog as CollectionResponsePublicAuditLog,
    type PublicAuditLog as PublicAuditLog,
    type PublicAuditLogsPage as PublicAuditLogsPage,
    type AuditLogListParams as AuditLogListParams,
  };

  export { Blogs as Blogs };

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

  export { MediaBridge as MediaBridge };

  export {
    Pages as Pages,
    type AbTestEndRequestVNext as AbTestEndRequestVNext,
    type AbTestRerunRequestVNext as AbTestRerunRequestVNext,
    type BatchInputContentFolder as BatchInputContentFolder,
    type BatchInputPage as BatchInputPage,
    type BatchResponseContentFolder as BatchResponseContentFolder,
    type BatchResponseContentFolderWithErrors as BatchResponseContentFolderWithErrors,
    type BatchResponsePage as BatchResponsePage,
    type BatchResponsePageWithErrors as BatchResponsePageWithErrors,
    type CollectionResponseWithTotalContentFolderForwardPaging as CollectionResponseWithTotalContentFolderForwardPaging,
    type CollectionResponseWithTotalPageForwardPaging as CollectionResponseWithTotalPageForwardPaging,
    type CollectionResponseWithTotalVersionContentFolder as CollectionResponseWithTotalVersionContentFolder,
    type CollectionResponseWithTotalVersionPage as CollectionResponseWithTotalVersionPage,
    type ContentFolder as ContentFolder,
    type ContentLanguageCloneRequestVNext as ContentLanguageCloneRequestVNext,
    type ContentLanguageVariation as ContentLanguageVariation,
    type Page as Page,
    type VersionContentFolder as VersionContentFolder,
    type VersionPage as VersionPage,
  };

  export {
    SiteSearch as SiteSearch,
    type ContentSearchResult as ContentSearchResult,
    type IndexedData as IndexedData,
    type IndexedField as IndexedField,
    type PublicSearchResults as PublicSearchResults,
    type SiteSearchGetIndexedDataParams as SiteSearchGetIndexedDataParams,
    type SiteSearchSearchParams as SiteSearchSearchParams,
  };

  export {
    SourceCode as SourceCode,
    type AssetFileMetadata as AssetFileMetadata,
    type FileExtractRequest as FileExtractRequest,
    type SourceCodeCreateParams as SourceCodeCreateParams,
    type SourceCodeDeleteParams as SourceCodeDeleteParams,
    type SourceCodeExtractAsyncParams as SourceCodeExtractAsyncParams,
    type SourceCodeGetParams as SourceCodeGetParams,
    type SourceCodeGetMetadataParams as SourceCodeGetMetadataParams,
    type SourceCodeUpsertParams as SourceCodeUpsertParams,
    type SourceCodeValidateParams as SourceCodeValidateParams,
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
