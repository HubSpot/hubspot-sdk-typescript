// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuditLogsAPI from './audit-logs';
import {
  AuditLogExportParams,
  AuditLogListParams,
  AuditLogs,
  CmsAuditLoggingExportFilters,
  CmsAuditLoggingExportSettings,
  CollectionResponsePublicAuditLog,
  PublicAuditLog,
  PublicAuditLogsPage,
} from './audit-logs';
import * as DomainsAPI from './domains';
import { CollectionResponseWithTotalDomain, Domain, DomainListParams, Domains, DomainsPage } from './domains';
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
import * as URLMappingsAPI from './url-mappings';
import { URLMappingCreateParams, URLMappings, URLMappingsURLMapping } from './url-mappings';
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
  Blogs,
  CursorPagedResultBlogAuthorLong,
  CursorPagedResultBlogPostLong,
  CursorPagedResultTagLong,
} from './blogs/blogs';
import * as HubdbAPI from './hubdb/hubdb';
import {
  BatchInputHubDBTableRowBatchCloneRequest,
  BatchInputHubDBTableRowV3BatchUpdateRequest,
  BatchInputHubDBTableRowV3Request,
  BatchResponseHubDBTableRowV3,
  BoundedNextPage,
  BoundedPaging,
  CollectionResponseWithTotalHubDBTableV3,
  Column,
  ColumnRequest,
  ForeignID,
  HubDBTableCloneRequest,
  HubDBTableRowBatchCloneRequest,
  HubDBTableRowV3,
  HubDBTableRowV3BatchUpdateRequest,
  HubDBTableRowV3Request,
  HubDBTableRowV3Wrapper,
  HubDBTableV3,
  HubDBTableV3Request,
  Hubdb,
  ImportResult,
  Option,
  RandomAccessCollectionResponseWithTotalHubDBTableRowV3,
  SimpleUser,
  StreamingCollectionResponseWithTotalHubDBTableRowV3,
  UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3,
  Variant,
} from './hubdb/hubdb';
import * as MediaBridgeAPI from './media-bridge/media-bridge';
import {
  AbsoluteValue,
  AddNumbers,
  AddTime,
  And,
  AttentionSpanCalculatedValues,
  AttentionSpanEvent,
  AttentionSpanEventRequest,
  BatchResponseProperty,
  BeginsWith,
  BooleanPropertyVariable,
  BooleanTargetPropertyVariable,
  BulkIntegratorObjectCreationResponse,
  CaseChangeTestExtensionData,
  CollectionResponseObjectSchemaNoPaging,
  CollectionResponsePropertyNoPaging,
  ConcatStrings,
  ConstantBoolean,
  ConstantNumber,
  ConstantString,
  Contains,
  Date,
  DatedExchangeRate,
  DefaultRequirements,
  DefinitionSource,
  DivideNumbers,
  Endpoints,
  Euler,
  EventVisibilityChange,
  EventVisibilityResponse,
  ExtensionData,
  ExternalOptionsMetaData,
  ExtractMostRecentEmailReplyHTML,
  ExtractMostRecentEmailReplyText,
  ExtractMostRecentPlainTextEmailReply,
  FetchCurrencyDecimalPlaces,
  FetchExchangeRate,
  FetchSingleCurrencyPortalCurrency,
  FieldLevelPermission,
  FilteringMetaData,
  FormatFullName,
  FormatPhoneNumber,
  FormatSearchablePhoneNumber,
  Group,
  GroupView,
  HasEmailReply,
  HasPlainTextEmailReply,
  IfBoolean,
  IfNumber,
  IfString,
  InboundDBObjectType,
  IntegratorOEmbedDomainModel,
  IntegratorOEmbedDomainRequest,
  IntegratorObjectCreationRequest,
  IntegratorObjectCreationResponse,
  IsEngagementType,
  IsPipelineStageClosed,
  IsPresent,
  LessThan,
  LessThanOrEqual,
  LowerCase,
  MaxNumbers,
  MediaBridge,
  MediaBridgeCreateAssociationParams,
  MediaBridgeCreateAttentionSpanEventParams,
  MediaBridgeCreateMediaPlayedEventParams,
  MediaBridgeCreateMediaPlayedPercentEventParams,
  MediaBridgeCreateObjectTypeParams,
  MediaBridgeCreateOembedDomainParams,
  MediaBridgeCreatePropertyGroupParams,
  MediaBridgeCreatePropertyParams,
  MediaBridgeDeleteAssociationParams,
  MediaBridgeDeleteOembedDomainParams,
  MediaBridgeDeletePropertyGroupParams,
  MediaBridgeDeletePropertyParams,
  MediaBridgeGetOembedDomainParams,
  MediaBridgeGetPropertyGroupParams,
  MediaBridgeGetPropertyParams,
  MediaBridgeGetSchemaParams,
  MediaBridgeListObjectTypesByMediaTypeParams,
  MediaBridgeListOembedDomainsParams,
  MediaBridgeListPropertiesParams,
  MediaBridgeListPropertyGroupsParams,
  MediaBridgeListSchemasParams,
  MediaBridgePropertyUpdate,
  MediaBridgeProviderPartial,
  MediaBridgeProviderRegistrationResponse,
  MediaBridgeRegisterAppNameParams,
  MediaBridgeUpdateEventVisibilitySettingsParams,
  MediaBridgeUpdateOembedDomainParams,
  MediaBridgeUpdatePropertyGroupParams,
  MediaBridgeUpdatePropertyParams,
  MediaBridgeUpdateSchemaParams,
  MediaBridgeUpdateSettingsParams,
  MediaPlayedEvent,
  MediaPlayedEventRequest,
  MediaPlayedPercentageEvent,
  MediaPlayedPercentageEventRequest,
  MinNumbers,
  Month,
  MoreThan,
  MoreThanOrEqual,
  MultiplyNumbers,
  Not,
  Now,
  NumberEquals,
  NumberPropertyVariable,
  NumberTargetPropertyVariable,
  NumberToString,
  OEmbedDomainsCollectionResponse,
  ObjectDefinitionResponse,
  ObjectSchema,
  ObjectTypeIDProto,
  Option1,
  OptionDecorations,
  OptionDecoratorsExtensionData,
  Or,
  ParseNumber,
  PeriodToMonths,
  PeriodToWeeks,
  PipelineProbability,
  Power,
  Property,
  Property1,
  PropertyDefinition,
  PropertyDefinitionSource,
  RequiredPropertiesExtensionData,
  RollupExpression,
  RoundDownNumbers,
  RoundNearestNumbers,
  RoundUpNumbers,
  ScopeMapping,
  SetContainsString,
  SoftRequiredPropertiesExtensionData,
  SquareRoot,
  StringEquals,
  StringLength,
  StringPropertyVariable,
  StringTargetPropertyVariable,
  Substring,
  SubtractNumbers,
  SubtractTime,
  TimeBetween,
  TimeBetweenSkipWeekends,
  TimestampOfPropertyVariable,
  TimestampOfTargetPropertyVariable,
  UpperCase,
  Xor,
  Year,
} from './media-bridge/media-bridge';
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
  CollectionResponseWithTotalContentFolderVersion,
  CollectionResponseWithTotalPageForwardPaging,
  CollectionResponseWithTotalPageVersion,
  ContentFolder,
  ContentFolderVersion,
  ContentLanguageCloneRequestVNext,
  CursorPagedResultContentFolderLong,
  CursorPagedResultPageLong,
  Page,
  PageGetLandingPageFoldersByQueryParams,
  PageGetLandingPageFoldersParams,
  PageGetLandingPageRevisionParams,
  PageGetLandingPagesByQueryParams,
  PageGetLandingPagesParams,
  PageGetSitePageRevisionParams,
  PageGetSitePagesByQueryParams,
  PageGetSitePagesParams,
  PageListLandingPageRevisionsParams,
  PageListSitePageRevisionsParams,
  PageRestoreLandingPageRevisionParams,
  PageRestoreLandingPageRevisionToDraftParams,
  PageRestoreSitePageRevisionParams,
  PageRestoreSitePageRevisionToDraftParams,
  PageVersion,
  PageVersionsPage,
  Pages,
} from './pages/pages';

export class Cms extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  blogs: BlogsAPI.Blogs = new BlogsAPI.Blogs(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  hubdb: HubdbAPI.Hubdb = new HubdbAPI.Hubdb(this._client);
  mediaBridge: MediaBridgeAPI.MediaBridge = new MediaBridgeAPI.MediaBridge(this._client);
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
  siteSearch: SiteSearchAPI.SiteSearch = new SiteSearchAPI.SiteSearch(this._client);
  sourceCode: SourceCodeAPI.SourceCode = new SourceCodeAPI.SourceCode(this._client);
  urlMappings: URLMappingsAPI.URLMappings = new URLMappingsAPI.URLMappings(this._client);
  urlRedirects: URLRedirectsAPI.URLRedirects = new URLRedirectsAPI.URLRedirects(this._client);
}

export interface Angle {
  /**
   * The unit of measurement for the angle.
   */
  units: 'deg' | 'grad' | 'rad' | 'turn';

  /**
   * The numerical representation of the angle.
   */
  value: number;
}

export interface AttachToLangPrimaryRequestVNext {
  /**
   * ID of the object to add to a multi-language group.
   */
  id: string;

  /**
   * Designated language of the object to add to a multi-language group.
   */
  language:
    | 'aa'
    | 'ab'
    | 'ae'
    | 'af'
    | 'af-na'
    | 'af-za'
    | 'agq'
    | 'agq-cm'
    | 'ak'
    | 'ak-gh'
    | 'am'
    | 'am-et'
    | 'an'
    | 'ann'
    | 'ann-ng'
    | 'ar'
    | 'ar-001'
    | 'ar-ae'
    | 'ar-bh'
    | 'ar-dj'
    | 'ar-dz'
    | 'ar-eg'
    | 'ar-eh'
    | 'ar-er'
    | 'ar-il'
    | 'ar-iq'
    | 'ar-jo'
    | 'ar-km'
    | 'ar-kw'
    | 'ar-lb'
    | 'ar-ly'
    | 'ar-ma'
    | 'ar-mr'
    | 'ar-om'
    | 'ar-ps'
    | 'ar-qa'
    | 'ar-sa'
    | 'ar-sd'
    | 'ar-so'
    | 'ar-ss'
    | 'ar-sy'
    | 'ar-td'
    | 'ar-tn'
    | 'ar-ye'
    | 'as'
    | 'as-in'
    | 'asa'
    | 'asa-tz'
    | 'ast'
    | 'ast-es'
    | 'av'
    | 'ay'
    | 'az'
    | 'az-az'
    | 'ba'
    | 'bas'
    | 'bas-cm'
    | 'be'
    | 'be-by'
    | 'bem'
    | 'bem-zm'
    | 'bez'
    | 'bez-tz'
    | 'bg'
    | 'bg-bg'
    | 'bgc'
    | 'bgc-in'
    | 'bho'
    | 'bho-in'
    | 'bi'
    | 'bm'
    | 'bm-ml'
    | 'bn'
    | 'bn-bd'
    | 'bn-in'
    | 'bo'
    | 'bo-cn'
    | 'bo-in'
    | 'br'
    | 'br-fr'
    | 'brx'
    | 'brx-in'
    | 'bs'
    | 'bs-ba'
    | 'ca'
    | 'ca-ad'
    | 'ca-es'
    | 'ca-fr'
    | 'ca-it'
    | 'ccp'
    | 'ccp-bd'
    | 'ccp-in'
    | 'ce'
    | 'ce-ru'
    | 'ceb'
    | 'ceb-ph'
    | 'cgg'
    | 'cgg-ug'
    | 'ch'
    | 'chr'
    | 'chr-us'
    | 'ckb'
    | 'ckb-iq'
    | 'ckb-ir'
    | 'co'
    | 'cr'
    | 'cs'
    | 'cs-cz'
    | 'cu'
    | 'cu-ru'
    | 'cv'
    | 'cv-ru'
    | 'cy'
    | 'cy-gb'
    | 'da'
    | 'da-dk'
    | 'da-gl'
    | 'dav'
    | 'dav-ke'
    | 'de'
    | 'de-at'
    | 'de-be'
    | 'de-ch'
    | 'de-de'
    | 'de-gr'
    | 'de-it'
    | 'de-li'
    | 'de-lu'
    | 'dje'
    | 'dje-ne'
    | 'doi'
    | 'doi-in'
    | 'dsb'
    | 'dsb-de'
    | 'dua'
    | 'dua-cm'
    | 'dv'
    | 'dyo'
    | 'dyo-sn'
    | 'dz'
    | 'dz-bt'
    | 'ebu'
    | 'ebu-ke'
    | 'ee'
    | 'ee-gh'
    | 'ee-tg'
    | 'el'
    | 'el-cy'
    | 'el-gr'
    | 'en'
    | 'en-001'
    | 'en-150'
    | 'en-ae'
    | 'en-ag'
    | 'en-ai'
    | 'en-as'
    | 'en-at'
    | 'en-au'
    | 'en-bb'
    | 'en-be'
    | 'en-bi'
    | 'en-bm'
    | 'en-bs'
    | 'en-bw'
    | 'en-bz'
    | 'en-ca'
    | 'en-cc'
    | 'en-ch'
    | 'en-ck'
    | 'en-cm'
    | 'en-cn'
    | 'en-cx'
    | 'en-cy'
    | 'en-de'
    | 'en-dg'
    | 'en-dk'
    | 'en-dm'
    | 'en-ee'
    | 'en-eg'
    | 'en-er'
    | 'en-es'
    | 'en-fi'
    | 'en-fj'
    | 'en-fk'
    | 'en-fm'
    | 'en-fr'
    | 'en-gb'
    | 'en-gd'
    | 'en-gg'
    | 'en-gh'
    | 'en-gi'
    | 'en-gm'
    | 'en-gu'
    | 'en-gy'
    | 'en-hk'
    | 'en-id'
    | 'en-ie'
    | 'en-il'
    | 'en-im'
    | 'en-in'
    | 'en-io'
    | 'en-je'
    | 'en-jm'
    | 'en-ke'
    | 'en-ki'
    | 'en-kn'
    | 'en-ky'
    | 'en-lc'
    | 'en-lr'
    | 'en-ls'
    | 'en-lu'
    | 'en-mg'
    | 'en-mh'
    | 'en-mo'
    | 'en-mp'
    | 'en-ms'
    | 'en-mt'
    | 'en-mu'
    | 'en-mv'
    | 'en-mw'
    | 'en-mx'
    | 'en-my'
    | 'en-na'
    | 'en-nf'
    | 'en-ng'
    | 'en-nl'
    | 'en-nr'
    | 'en-nu'
    | 'en-nz'
    | 'en-pg'
    | 'en-ph'
    | 'en-pk'
    | 'en-pn'
    | 'en-pr'
    | 'en-pt'
    | 'en-pw'
    | 'en-rw'
    | 'en-sb'
    | 'en-sc'
    | 'en-sd'
    | 'en-se'
    | 'en-sg'
    | 'en-sh'
    | 'en-si'
    | 'en-sl'
    | 'en-ss'
    | 'en-sx'
    | 'en-sz'
    | 'en-tc'
    | 'en-th'
    | 'en-tk'
    | 'en-tn'
    | 'en-to'
    | 'en-tt'
    | 'en-tv'
    | 'en-tz'
    | 'en-ug'
    | 'en-um'
    | 'en-us'
    | 'en-vc'
    | 'en-vg'
    | 'en-vi'
    | 'en-vn'
    | 'en-vu'
    | 'en-ws'
    | 'en-za'
    | 'en-zm'
    | 'en-zw'
    | 'eo'
    | 'eo-001'
    | 'es'
    | 'es-419'
    | 'es-ar'
    | 'es-bo'
    | 'es-br'
    | 'es-bz'
    | 'es-cl'
    | 'es-co'
    | 'es-cr'
    | 'es-cu'
    | 'es-do'
    | 'es-ea'
    | 'es-ec'
    | 'es-es'
    | 'es-gq'
    | 'es-gt'
    | 'es-hn'
    | 'es-ic'
    | 'es-mx'
    | 'es-ni'
    | 'es-pa'
    | 'es-pe'
    | 'es-ph'
    | 'es-pr'
    | 'es-py'
    | 'es-sv'
    | 'es-us'
    | 'es-uy'
    | 'es-ve'
    | 'et'
    | 'et-ee'
    | 'eu'
    | 'eu-es'
    | 'ewo'
    | 'ewo-cm'
    | 'fa'
    | 'fa-af'
    | 'fa-ir'
    | 'ff'
    | 'ff-bf'
    | 'ff-cm'
    | 'ff-gh'
    | 'ff-gm'
    | 'ff-gn'
    | 'ff-gw'
    | 'ff-lr'
    | 'ff-mr'
    | 'ff-ne'
    | 'ff-ng'
    | 'ff-sl'
    | 'ff-sn'
    | 'fi'
    | 'fi-fi'
    | 'fil'
    | 'fil-ph'
    | 'fj'
    | 'fo'
    | 'fo-dk'
    | 'fo-fo'
    | 'fr'
    | 'fr-be'
    | 'fr-bf'
    | 'fr-bi'
    | 'fr-bj'
    | 'fr-bl'
    | 'fr-ca'
    | 'fr-cd'
    | 'fr-cf'
    | 'fr-cg'
    | 'fr-ch'
    | 'fr-ci'
    | 'fr-cm'
    | 'fr-dj'
    | 'fr-dz'
    | 'fr-fr'
    | 'fr-ga'
    | 'fr-gf'
    | 'fr-gn'
    | 'fr-gp'
    | 'fr-gq'
    | 'fr-ht'
    | 'fr-km'
    | 'fr-lu'
    | 'fr-ma'
    | 'fr-mc'
    | 'fr-mf'
    | 'fr-mg'
    | 'fr-ml'
    | 'fr-mq'
    | 'fr-mr'
    | 'fr-mu'
    | 'fr-nc'
    | 'fr-ne'
    | 'fr-pf'
    | 'fr-pm'
    | 'fr-re'
    | 'fr-rw'
    | 'fr-sc'
    | 'fr-sn'
    | 'fr-sy'
    | 'fr-td'
    | 'fr-tg'
    | 'fr-tn'
    | 'fr-vu'
    | 'fr-wf'
    | 'fr-yt'
    | 'frr'
    | 'frr-de'
    | 'fur'
    | 'fur-it'
    | 'fy'
    | 'fy-nl'
    | 'ga'
    | 'ga-gb'
    | 'ga-ie'
    | 'gd'
    | 'gd-gb'
    | 'gl'
    | 'gl-es'
    | 'gn'
    | 'gsw'
    | 'gsw-ch'
    | 'gsw-fr'
    | 'gsw-li'
    | 'gu'
    | 'gu-in'
    | 'guz'
    | 'guz-ke'
    | 'gv'
    | 'gv-im'
    | 'ha'
    | 'ha-gh'
    | 'ha-ne'
    | 'ha-ng'
    | 'haw'
    | 'haw-us'
    | 'he'
    | 'he-il'
    | 'hi'
    | 'hi-in'
    | 'hmn'
    | 'ho'
    | 'hr'
    | 'hr-ba'
    | 'hr-hr'
    | 'hsb'
    | 'hsb-de'
    | 'ht'
    | 'hu'
    | 'hu-hu'
    | 'hy'
    | 'hy-am'
    | 'hz'
    | 'ia'
    | 'ia-001'
    | 'id'
    | 'id-id'
    | 'ie'
    | 'ig'
    | 'ig-ng'
    | 'ii'
    | 'ii-cn'
    | 'ik'
    | 'io'
    | 'is'
    | 'is-is'
    | 'it'
    | 'it-ch'
    | 'it-it'
    | 'it-sm'
    | 'it-va'
    | 'iu'
    | 'ja'
    | 'ja-jp'
    | 'jgo'
    | 'jgo-cm'
    | 'jmc'
    | 'jmc-tz'
    | 'jv'
    | 'jv-id'
    | 'ka'
    | 'ka-ge'
    | 'kab'
    | 'kab-dz'
    | 'kam'
    | 'kam-ke'
    | 'kar'
    | 'kde'
    | 'kde-tz'
    | 'kea'
    | 'kea-cv'
    | 'kg'
    | 'kgp'
    | 'kgp-br'
    | 'kh'
    | 'khq'
    | 'khq-ml'
    | 'ki'
    | 'ki-ke'
    | 'kj'
    | 'kk'
    | 'kk-kz'
    | 'kkj'
    | 'kkj-cm'
    | 'kl'
    | 'kl-gl'
    | 'kln'
    | 'kln-ke'
    | 'km'
    | 'km-kh'
    | 'kn'
    | 'kn-in'
    | 'ko'
    | 'ko-kp'
    | 'ko-kr'
    | 'kok'
    | 'kok-in'
    | 'kr'
    | 'ks'
    | 'ks-in'
    | 'ksb'
    | 'ksb-tz'
    | 'ksf'
    | 'ksf-cm'
    | 'ksh'
    | 'ksh-de'
    | 'ku'
    | 'ku-tr'
    | 'kv'
    | 'kw'
    | 'kw-gb'
    | 'ky'
    | 'ky-kg'
    | 'la'
    | 'lag'
    | 'lag-tz'
    | 'lb'
    | 'lb-lu'
    | 'lg'
    | 'lg-ug'
    | 'li'
    | 'lkt'
    | 'lkt-us'
    | 'ln'
    | 'ln-ao'
    | 'ln-cd'
    | 'ln-cf'
    | 'ln-cg'
    | 'lo'
    | 'lo-la'
    | 'lrc'
    | 'lrc-iq'
    | 'lrc-ir'
    | 'lt'
    | 'lt-lt'
    | 'lu'
    | 'lu-cd'
    | 'luo'
    | 'luo-ke'
    | 'luy'
    | 'luy-ke'
    | 'lv'
    | 'lv-lv'
    | 'mai'
    | 'mai-in'
    | 'mas'
    | 'mas-ke'
    | 'mas-tz'
    | 'mdf'
    | 'mdf-ru'
    | 'mer'
    | 'mer-ke'
    | 'mfe'
    | 'mfe-mu'
    | 'mg'
    | 'mg-mg'
    | 'mgh'
    | 'mgh-mz'
    | 'mgo'
    | 'mgo-cm'
    | 'mh'
    | 'mi'
    | 'mi-nz'
    | 'mk'
    | 'mk-mk'
    | 'ml'
    | 'ml-in'
    | 'mn'
    | 'mn-mn'
    | 'mni'
    | 'mni-in'
    | 'mr'
    | 'mr-in'
    | 'ms'
    | 'ms-bn'
    | 'ms-id'
    | 'ms-my'
    | 'ms-sg'
    | 'mt'
    | 'mt-mt'
    | 'mua'
    | 'mua-cm'
    | 'my'
    | 'my-mm'
    | 'mzn'
    | 'mzn-ir'
    | 'na'
    | 'naq'
    | 'naq-na'
    | 'nb'
    | 'nb-no'
    | 'nb-sj'
    | 'nd'
    | 'nd-zw'
    | 'nds'
    | 'nds-de'
    | 'nds-nl'
    | 'ne'
    | 'ne-in'
    | 'ne-np'
    | 'ng'
    | 'nl'
    | 'nl-aw'
    | 'nl-be'
    | 'nl-bq'
    | 'nl-ch'
    | 'nl-cw'
    | 'nl-lu'
    | 'nl-nl'
    | 'nl-sr'
    | 'nl-sx'
    | 'nmg'
    | 'nmg-cm'
    | 'nn'
    | 'nn-no'
    | 'nnh'
    | 'nnh-cm'
    | 'no'
    | 'no-no'
    | 'nr'
    | 'nus'
    | 'nus-ss'
    | 'nv'
    | 'ny'
    | 'nyn'
    | 'nyn-ug'
    | 'oc'
    | 'oc-es'
    | 'oc-fr'
    | 'oj'
    | 'om'
    | 'om-et'
    | 'om-ke'
    | 'or'
    | 'or-in'
    | 'os'
    | 'os-ge'
    | 'os-ru'
    | 'pa'
    | 'pa-in'
    | 'pa-pk'
    | 'pcm'
    | 'pcm-ng'
    | 'pi'
    | 'pis'
    | 'pis-sb'
    | 'pl'
    | 'pl-pl'
    | 'prg'
    | 'prg-001'
    | 'ps'
    | 'ps-af'
    | 'ps-pk'
    | 'pt'
    | 'pt-ao'
    | 'pt-br'
    | 'pt-ch'
    | 'pt-cv'
    | 'pt-gq'
    | 'pt-gw'
    | 'pt-lu'
    | 'pt-mo'
    | 'pt-mz'
    | 'pt-pt'
    | 'pt-st'
    | 'pt-tl'
    | 'qu'
    | 'qu-bo'
    | 'qu-ec'
    | 'qu-pe'
    | 'raj'
    | 'raj-in'
    | 'rm'
    | 'rm-ch'
    | 'rn'
    | 'rn-bi'
    | 'ro'
    | 'ro-md'
    | 'ro-ro'
    | 'rof'
    | 'rof-tz'
    | 'ru'
    | 'ru-by'
    | 'ru-kg'
    | 'ru-kz'
    | 'ru-md'
    | 'ru-ru'
    | 'ru-ua'
    | 'rw'
    | 'rw-rw'
    | 'rwk'
    | 'rwk-tz'
    | 'sa'
    | 'sa-in'
    | 'sah'
    | 'sah-ru'
    | 'saq'
    | 'saq-ke'
    | 'sat'
    | 'sat-in'
    | 'sbp'
    | 'sbp-tz'
    | 'sc'
    | 'sc-it'
    | 'sd'
    | 'sd-in'
    | 'sd-pk'
    | 'se'
    | 'se-fi'
    | 'se-no'
    | 'se-se'
    | 'seh'
    | 'seh-mz'
    | 'ses'
    | 'ses-ml'
    | 'sg'
    | 'sg-cf'
    | 'shi'
    | 'shi-ma'
    | 'si'
    | 'si-lk'
    | 'sk'
    | 'sk-sk'
    | 'sl'
    | 'sl-si'
    | 'sm'
    | 'smn'
    | 'smn-fi'
    | 'sms'
    | 'sms-fi'
    | 'sn'
    | 'sn-zw'
    | 'so'
    | 'so-dj'
    | 'so-et'
    | 'so-ke'
    | 'so-so'
    | 'sq'
    | 'sq-al'
    | 'sq-mk'
    | 'sq-xk'
    | 'sr'
    | 'sr-ba'
    | 'sr-cs'
    | 'sr-me'
    | 'sr-rs'
    | 'sr-xk'
    | 'ss'
    | 'st'
    | 'su'
    | 'su-id'
    | 'sv'
    | 'sv-ax'
    | 'sv-fi'
    | 'sv-se'
    | 'sw'
    | 'sw-cd'
    | 'sw-ke'
    | 'sw-tz'
    | 'sw-ug'
    | 'sy'
    | 'ta'
    | 'ta-in'
    | 'ta-lk'
    | 'ta-my'
    | 'ta-sg'
    | 'te'
    | 'te-in'
    | 'teo'
    | 'teo-ke'
    | 'teo-ug'
    | 'tg'
    | 'tg-tj'
    | 'th'
    | 'th-th'
    | 'ti'
    | 'ti-er'
    | 'ti-et'
    | 'tk'
    | 'tk-tm'
    | 'tl'
    | 'tn'
    | 'to'
    | 'to-to'
    | 'tok'
    | 'tok-001'
    | 'tr'
    | 'tr-cy'
    | 'tr-tr'
    | 'ts'
    | 'tt'
    | 'tt-ru'
    | 'tw'
    | 'twq'
    | 'twq-ne'
    | 'ty'
    | 'tzm'
    | 'tzm-ma'
    | 'ug'
    | 'ug-cn'
    | 'uk'
    | 'uk-ua'
    | 'ur'
    | 'ur-in'
    | 'ur-pk'
    | 'uz'
    | 'uz-af'
    | 'uz-uz'
    | 'vai'
    | 'vai-lr'
    | 've'
    | 'vi'
    | 'vi-vn'
    | 'vo'
    | 'vo-001'
    | 'vun'
    | 'vun-tz'
    | 'wa'
    | 'wae'
    | 'wae-ch'
    | 'wo'
    | 'wo-sn'
    | 'xh'
    | 'xh-za'
    | 'xog'
    | 'xog-ug'
    | 'yav'
    | 'yav-cm'
    | 'yi'
    | 'yi-001'
    | 'yo'
    | 'yo-bj'
    | 'yo-ng'
    | 'yrl'
    | 'yrl-br'
    | 'yrl-co'
    | 'yrl-ve'
    | 'yue'
    | 'yue-cn'
    | 'yue-hk'
    | 'za'
    | 'zgh'
    | 'zgh-ma'
    | 'zh'
    | 'zh-cn'
    | 'zh-hans'
    | 'zh-hant'
    | 'zh-hk'
    | 'zh-mo'
    | 'zh-sg'
    | 'zh-tw'
    | 'zu'
    | 'zu-za';

  /**
   * ID of primary language object in multi-language group.
   */
  primaryId: string;

  /**
   * Primary language of the multi-language group.
   */
  primaryLanguage?:
    | 'aa'
    | 'ab'
    | 'ae'
    | 'af'
    | 'af-na'
    | 'af-za'
    | 'agq'
    | 'agq-cm'
    | 'ak'
    | 'ak-gh'
    | 'am'
    | 'am-et'
    | 'an'
    | 'ann'
    | 'ann-ng'
    | 'ar'
    | 'ar-001'
    | 'ar-ae'
    | 'ar-bh'
    | 'ar-dj'
    | 'ar-dz'
    | 'ar-eg'
    | 'ar-eh'
    | 'ar-er'
    | 'ar-il'
    | 'ar-iq'
    | 'ar-jo'
    | 'ar-km'
    | 'ar-kw'
    | 'ar-lb'
    | 'ar-ly'
    | 'ar-ma'
    | 'ar-mr'
    | 'ar-om'
    | 'ar-ps'
    | 'ar-qa'
    | 'ar-sa'
    | 'ar-sd'
    | 'ar-so'
    | 'ar-ss'
    | 'ar-sy'
    | 'ar-td'
    | 'ar-tn'
    | 'ar-ye'
    | 'as'
    | 'as-in'
    | 'asa'
    | 'asa-tz'
    | 'ast'
    | 'ast-es'
    | 'av'
    | 'ay'
    | 'az'
    | 'az-az'
    | 'ba'
    | 'bas'
    | 'bas-cm'
    | 'be'
    | 'be-by'
    | 'bem'
    | 'bem-zm'
    | 'bez'
    | 'bez-tz'
    | 'bg'
    | 'bg-bg'
    | 'bgc'
    | 'bgc-in'
    | 'bho'
    | 'bho-in'
    | 'bi'
    | 'bm'
    | 'bm-ml'
    | 'bn'
    | 'bn-bd'
    | 'bn-in'
    | 'bo'
    | 'bo-cn'
    | 'bo-in'
    | 'br'
    | 'br-fr'
    | 'brx'
    | 'brx-in'
    | 'bs'
    | 'bs-ba'
    | 'ca'
    | 'ca-ad'
    | 'ca-es'
    | 'ca-fr'
    | 'ca-it'
    | 'ccp'
    | 'ccp-bd'
    | 'ccp-in'
    | 'ce'
    | 'ce-ru'
    | 'ceb'
    | 'ceb-ph'
    | 'cgg'
    | 'cgg-ug'
    | 'ch'
    | 'chr'
    | 'chr-us'
    | 'ckb'
    | 'ckb-iq'
    | 'ckb-ir'
    | 'co'
    | 'cr'
    | 'cs'
    | 'cs-cz'
    | 'cu'
    | 'cu-ru'
    | 'cv'
    | 'cv-ru'
    | 'cy'
    | 'cy-gb'
    | 'da'
    | 'da-dk'
    | 'da-gl'
    | 'dav'
    | 'dav-ke'
    | 'de'
    | 'de-at'
    | 'de-be'
    | 'de-ch'
    | 'de-de'
    | 'de-gr'
    | 'de-it'
    | 'de-li'
    | 'de-lu'
    | 'dje'
    | 'dje-ne'
    | 'doi'
    | 'doi-in'
    | 'dsb'
    | 'dsb-de'
    | 'dua'
    | 'dua-cm'
    | 'dv'
    | 'dyo'
    | 'dyo-sn'
    | 'dz'
    | 'dz-bt'
    | 'ebu'
    | 'ebu-ke'
    | 'ee'
    | 'ee-gh'
    | 'ee-tg'
    | 'el'
    | 'el-cy'
    | 'el-gr'
    | 'en'
    | 'en-001'
    | 'en-150'
    | 'en-ae'
    | 'en-ag'
    | 'en-ai'
    | 'en-as'
    | 'en-at'
    | 'en-au'
    | 'en-bb'
    | 'en-be'
    | 'en-bi'
    | 'en-bm'
    | 'en-bs'
    | 'en-bw'
    | 'en-bz'
    | 'en-ca'
    | 'en-cc'
    | 'en-ch'
    | 'en-ck'
    | 'en-cm'
    | 'en-cn'
    | 'en-cx'
    | 'en-cy'
    | 'en-de'
    | 'en-dg'
    | 'en-dk'
    | 'en-dm'
    | 'en-ee'
    | 'en-eg'
    | 'en-er'
    | 'en-es'
    | 'en-fi'
    | 'en-fj'
    | 'en-fk'
    | 'en-fm'
    | 'en-fr'
    | 'en-gb'
    | 'en-gd'
    | 'en-gg'
    | 'en-gh'
    | 'en-gi'
    | 'en-gm'
    | 'en-gu'
    | 'en-gy'
    | 'en-hk'
    | 'en-id'
    | 'en-ie'
    | 'en-il'
    | 'en-im'
    | 'en-in'
    | 'en-io'
    | 'en-je'
    | 'en-jm'
    | 'en-ke'
    | 'en-ki'
    | 'en-kn'
    | 'en-ky'
    | 'en-lc'
    | 'en-lr'
    | 'en-ls'
    | 'en-lu'
    | 'en-mg'
    | 'en-mh'
    | 'en-mo'
    | 'en-mp'
    | 'en-ms'
    | 'en-mt'
    | 'en-mu'
    | 'en-mv'
    | 'en-mw'
    | 'en-mx'
    | 'en-my'
    | 'en-na'
    | 'en-nf'
    | 'en-ng'
    | 'en-nl'
    | 'en-nr'
    | 'en-nu'
    | 'en-nz'
    | 'en-pg'
    | 'en-ph'
    | 'en-pk'
    | 'en-pn'
    | 'en-pr'
    | 'en-pt'
    | 'en-pw'
    | 'en-rw'
    | 'en-sb'
    | 'en-sc'
    | 'en-sd'
    | 'en-se'
    | 'en-sg'
    | 'en-sh'
    | 'en-si'
    | 'en-sl'
    | 'en-ss'
    | 'en-sx'
    | 'en-sz'
    | 'en-tc'
    | 'en-th'
    | 'en-tk'
    | 'en-tn'
    | 'en-to'
    | 'en-tt'
    | 'en-tv'
    | 'en-tz'
    | 'en-ug'
    | 'en-um'
    | 'en-us'
    | 'en-vc'
    | 'en-vg'
    | 'en-vi'
    | 'en-vn'
    | 'en-vu'
    | 'en-ws'
    | 'en-za'
    | 'en-zm'
    | 'en-zw'
    | 'eo'
    | 'eo-001'
    | 'es'
    | 'es-419'
    | 'es-ar'
    | 'es-bo'
    | 'es-br'
    | 'es-bz'
    | 'es-cl'
    | 'es-co'
    | 'es-cr'
    | 'es-cu'
    | 'es-do'
    | 'es-ea'
    | 'es-ec'
    | 'es-es'
    | 'es-gq'
    | 'es-gt'
    | 'es-hn'
    | 'es-ic'
    | 'es-mx'
    | 'es-ni'
    | 'es-pa'
    | 'es-pe'
    | 'es-ph'
    | 'es-pr'
    | 'es-py'
    | 'es-sv'
    | 'es-us'
    | 'es-uy'
    | 'es-ve'
    | 'et'
    | 'et-ee'
    | 'eu'
    | 'eu-es'
    | 'ewo'
    | 'ewo-cm'
    | 'fa'
    | 'fa-af'
    | 'fa-ir'
    | 'ff'
    | 'ff-bf'
    | 'ff-cm'
    | 'ff-gh'
    | 'ff-gm'
    | 'ff-gn'
    | 'ff-gw'
    | 'ff-lr'
    | 'ff-mr'
    | 'ff-ne'
    | 'ff-ng'
    | 'ff-sl'
    | 'ff-sn'
    | 'fi'
    | 'fi-fi'
    | 'fil'
    | 'fil-ph'
    | 'fj'
    | 'fo'
    | 'fo-dk'
    | 'fo-fo'
    | 'fr'
    | 'fr-be'
    | 'fr-bf'
    | 'fr-bi'
    | 'fr-bj'
    | 'fr-bl'
    | 'fr-ca'
    | 'fr-cd'
    | 'fr-cf'
    | 'fr-cg'
    | 'fr-ch'
    | 'fr-ci'
    | 'fr-cm'
    | 'fr-dj'
    | 'fr-dz'
    | 'fr-fr'
    | 'fr-ga'
    | 'fr-gf'
    | 'fr-gn'
    | 'fr-gp'
    | 'fr-gq'
    | 'fr-ht'
    | 'fr-km'
    | 'fr-lu'
    | 'fr-ma'
    | 'fr-mc'
    | 'fr-mf'
    | 'fr-mg'
    | 'fr-ml'
    | 'fr-mq'
    | 'fr-mr'
    | 'fr-mu'
    | 'fr-nc'
    | 'fr-ne'
    | 'fr-pf'
    | 'fr-pm'
    | 'fr-re'
    | 'fr-rw'
    | 'fr-sc'
    | 'fr-sn'
    | 'fr-sy'
    | 'fr-td'
    | 'fr-tg'
    | 'fr-tn'
    | 'fr-vu'
    | 'fr-wf'
    | 'fr-yt'
    | 'frr'
    | 'frr-de'
    | 'fur'
    | 'fur-it'
    | 'fy'
    | 'fy-nl'
    | 'ga'
    | 'ga-gb'
    | 'ga-ie'
    | 'gd'
    | 'gd-gb'
    | 'gl'
    | 'gl-es'
    | 'gn'
    | 'gsw'
    | 'gsw-ch'
    | 'gsw-fr'
    | 'gsw-li'
    | 'gu'
    | 'gu-in'
    | 'guz'
    | 'guz-ke'
    | 'gv'
    | 'gv-im'
    | 'ha'
    | 'ha-gh'
    | 'ha-ne'
    | 'ha-ng'
    | 'haw'
    | 'haw-us'
    | 'he'
    | 'he-il'
    | 'hi'
    | 'hi-in'
    | 'hmn'
    | 'ho'
    | 'hr'
    | 'hr-ba'
    | 'hr-hr'
    | 'hsb'
    | 'hsb-de'
    | 'ht'
    | 'hu'
    | 'hu-hu'
    | 'hy'
    | 'hy-am'
    | 'hz'
    | 'ia'
    | 'ia-001'
    | 'id'
    | 'id-id'
    | 'ie'
    | 'ig'
    | 'ig-ng'
    | 'ii'
    | 'ii-cn'
    | 'ik'
    | 'io'
    | 'is'
    | 'is-is'
    | 'it'
    | 'it-ch'
    | 'it-it'
    | 'it-sm'
    | 'it-va'
    | 'iu'
    | 'ja'
    | 'ja-jp'
    | 'jgo'
    | 'jgo-cm'
    | 'jmc'
    | 'jmc-tz'
    | 'jv'
    | 'jv-id'
    | 'ka'
    | 'ka-ge'
    | 'kab'
    | 'kab-dz'
    | 'kam'
    | 'kam-ke'
    | 'kar'
    | 'kde'
    | 'kde-tz'
    | 'kea'
    | 'kea-cv'
    | 'kg'
    | 'kgp'
    | 'kgp-br'
    | 'kh'
    | 'khq'
    | 'khq-ml'
    | 'ki'
    | 'ki-ke'
    | 'kj'
    | 'kk'
    | 'kk-kz'
    | 'kkj'
    | 'kkj-cm'
    | 'kl'
    | 'kl-gl'
    | 'kln'
    | 'kln-ke'
    | 'km'
    | 'km-kh'
    | 'kn'
    | 'kn-in'
    | 'ko'
    | 'ko-kp'
    | 'ko-kr'
    | 'kok'
    | 'kok-in'
    | 'kr'
    | 'ks'
    | 'ks-in'
    | 'ksb'
    | 'ksb-tz'
    | 'ksf'
    | 'ksf-cm'
    | 'ksh'
    | 'ksh-de'
    | 'ku'
    | 'ku-tr'
    | 'kv'
    | 'kw'
    | 'kw-gb'
    | 'ky'
    | 'ky-kg'
    | 'la'
    | 'lag'
    | 'lag-tz'
    | 'lb'
    | 'lb-lu'
    | 'lg'
    | 'lg-ug'
    | 'li'
    | 'lkt'
    | 'lkt-us'
    | 'ln'
    | 'ln-ao'
    | 'ln-cd'
    | 'ln-cf'
    | 'ln-cg'
    | 'lo'
    | 'lo-la'
    | 'lrc'
    | 'lrc-iq'
    | 'lrc-ir'
    | 'lt'
    | 'lt-lt'
    | 'lu'
    | 'lu-cd'
    | 'luo'
    | 'luo-ke'
    | 'luy'
    | 'luy-ke'
    | 'lv'
    | 'lv-lv'
    | 'mai'
    | 'mai-in'
    | 'mas'
    | 'mas-ke'
    | 'mas-tz'
    | 'mdf'
    | 'mdf-ru'
    | 'mer'
    | 'mer-ke'
    | 'mfe'
    | 'mfe-mu'
    | 'mg'
    | 'mg-mg'
    | 'mgh'
    | 'mgh-mz'
    | 'mgo'
    | 'mgo-cm'
    | 'mh'
    | 'mi'
    | 'mi-nz'
    | 'mk'
    | 'mk-mk'
    | 'ml'
    | 'ml-in'
    | 'mn'
    | 'mn-mn'
    | 'mni'
    | 'mni-in'
    | 'mr'
    | 'mr-in'
    | 'ms'
    | 'ms-bn'
    | 'ms-id'
    | 'ms-my'
    | 'ms-sg'
    | 'mt'
    | 'mt-mt'
    | 'mua'
    | 'mua-cm'
    | 'my'
    | 'my-mm'
    | 'mzn'
    | 'mzn-ir'
    | 'na'
    | 'naq'
    | 'naq-na'
    | 'nb'
    | 'nb-no'
    | 'nb-sj'
    | 'nd'
    | 'nd-zw'
    | 'nds'
    | 'nds-de'
    | 'nds-nl'
    | 'ne'
    | 'ne-in'
    | 'ne-np'
    | 'ng'
    | 'nl'
    | 'nl-aw'
    | 'nl-be'
    | 'nl-bq'
    | 'nl-ch'
    | 'nl-cw'
    | 'nl-lu'
    | 'nl-nl'
    | 'nl-sr'
    | 'nl-sx'
    | 'nmg'
    | 'nmg-cm'
    | 'nn'
    | 'nn-no'
    | 'nnh'
    | 'nnh-cm'
    | 'no'
    | 'no-no'
    | 'nr'
    | 'nus'
    | 'nus-ss'
    | 'nv'
    | 'ny'
    | 'nyn'
    | 'nyn-ug'
    | 'oc'
    | 'oc-es'
    | 'oc-fr'
    | 'oj'
    | 'om'
    | 'om-et'
    | 'om-ke'
    | 'or'
    | 'or-in'
    | 'os'
    | 'os-ge'
    | 'os-ru'
    | 'pa'
    | 'pa-in'
    | 'pa-pk'
    | 'pcm'
    | 'pcm-ng'
    | 'pi'
    | 'pis'
    | 'pis-sb'
    | 'pl'
    | 'pl-pl'
    | 'prg'
    | 'prg-001'
    | 'ps'
    | 'ps-af'
    | 'ps-pk'
    | 'pt'
    | 'pt-ao'
    | 'pt-br'
    | 'pt-ch'
    | 'pt-cv'
    | 'pt-gq'
    | 'pt-gw'
    | 'pt-lu'
    | 'pt-mo'
    | 'pt-mz'
    | 'pt-pt'
    | 'pt-st'
    | 'pt-tl'
    | 'qu'
    | 'qu-bo'
    | 'qu-ec'
    | 'qu-pe'
    | 'raj'
    | 'raj-in'
    | 'rm'
    | 'rm-ch'
    | 'rn'
    | 'rn-bi'
    | 'ro'
    | 'ro-md'
    | 'ro-ro'
    | 'rof'
    | 'rof-tz'
    | 'ru'
    | 'ru-by'
    | 'ru-kg'
    | 'ru-kz'
    | 'ru-md'
    | 'ru-ru'
    | 'ru-ua'
    | 'rw'
    | 'rw-rw'
    | 'rwk'
    | 'rwk-tz'
    | 'sa'
    | 'sa-in'
    | 'sah'
    | 'sah-ru'
    | 'saq'
    | 'saq-ke'
    | 'sat'
    | 'sat-in'
    | 'sbp'
    | 'sbp-tz'
    | 'sc'
    | 'sc-it'
    | 'sd'
    | 'sd-in'
    | 'sd-pk'
    | 'se'
    | 'se-fi'
    | 'se-no'
    | 'se-se'
    | 'seh'
    | 'seh-mz'
    | 'ses'
    | 'ses-ml'
    | 'sg'
    | 'sg-cf'
    | 'shi'
    | 'shi-ma'
    | 'si'
    | 'si-lk'
    | 'sk'
    | 'sk-sk'
    | 'sl'
    | 'sl-si'
    | 'sm'
    | 'smn'
    | 'smn-fi'
    | 'sms'
    | 'sms-fi'
    | 'sn'
    | 'sn-zw'
    | 'so'
    | 'so-dj'
    | 'so-et'
    | 'so-ke'
    | 'so-so'
    | 'sq'
    | 'sq-al'
    | 'sq-mk'
    | 'sq-xk'
    | 'sr'
    | 'sr-ba'
    | 'sr-cs'
    | 'sr-me'
    | 'sr-rs'
    | 'sr-xk'
    | 'ss'
    | 'st'
    | 'su'
    | 'su-id'
    | 'sv'
    | 'sv-ax'
    | 'sv-fi'
    | 'sv-se'
    | 'sw'
    | 'sw-cd'
    | 'sw-ke'
    | 'sw-tz'
    | 'sw-ug'
    | 'sy'
    | 'ta'
    | 'ta-in'
    | 'ta-lk'
    | 'ta-my'
    | 'ta-sg'
    | 'te'
    | 'te-in'
    | 'teo'
    | 'teo-ke'
    | 'teo-ug'
    | 'tg'
    | 'tg-tj'
    | 'th'
    | 'th-th'
    | 'ti'
    | 'ti-er'
    | 'ti-et'
    | 'tk'
    | 'tk-tm'
    | 'tl'
    | 'tn'
    | 'to'
    | 'to-to'
    | 'tok'
    | 'tok-001'
    | 'tr'
    | 'tr-cy'
    | 'tr-tr'
    | 'ts'
    | 'tt'
    | 'tt-ru'
    | 'tw'
    | 'twq'
    | 'twq-ne'
    | 'ty'
    | 'tzm'
    | 'tzm-ma'
    | 'ug'
    | 'ug-cn'
    | 'uk'
    | 'uk-ua'
    | 'ur'
    | 'ur-in'
    | 'ur-pk'
    | 'uz'
    | 'uz-af'
    | 'uz-uz'
    | 'vai'
    | 'vai-lr'
    | 've'
    | 'vi'
    | 'vi-vn'
    | 'vo'
    | 'vo-001'
    | 'vun'
    | 'vun-tz'
    | 'wa'
    | 'wae'
    | 'wae-ch'
    | 'wo'
    | 'wo-sn'
    | 'xh'
    | 'xh-za'
    | 'xog'
    | 'xog-ug'
    | 'yav'
    | 'yav-cm'
    | 'yi'
    | 'yi-001'
    | 'yo'
    | 'yo-bj'
    | 'yo-ng'
    | 'yrl'
    | 'yrl-br'
    | 'yrl-co'
    | 'yrl-ve'
    | 'yue'
    | 'yue-cn'
    | 'yue-hk'
    | 'za'
    | 'zgh'
    | 'zgh-ma'
    | 'zh'
    | 'zh-cn'
    | 'zh-hans'
    | 'zh-hant'
    | 'zh-hk'
    | 'zh-mo'
    | 'zh-sg'
    | 'zh-tw'
    | 'zu'
    | 'zu-za';
}

export interface BackgroundImage {
  /**
   * Defines the position of the background image.
   */
  backgroundPosition: string;

  /**
   * Specifies the size of the background image.
   */
  backgroundSize: string;

  /**
   * The URL of the background image.
   */
  imageUrl: string;
}

export interface BatchInputJsonNode {
  /**
   * JSON nodes to input.
   */
  inputs: Array<unknown>;
}

export interface BreakpointStyles {
  /**
   * Boolean indicating if the breakpoint is visible.
   */
  hidden: boolean;

  margin: Margin;

  padding: Padding;
}

export interface ColorStop {
  color: RgbaColor;
}

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

export interface ContentLanguageVariation {
  /**
   * ID of object to set as primary in multi-language group.
   */
  id: number;

  /**
   * If True, the variant will not show up in your dashboard, although the post could
   * still be live.
   */
  archivedInDashboard: boolean;

  /**
   * The name of the user who last published the blog post. For posts that haven't
   * been published yet, this property will reflect the user who initially created
   * the draft.
   */
  authorName: string;

  /**
   * The GUID of the marketing campaign this page is a part of.
   */
  campaign: string;

  /**
   * Name of the associated marketing campaign.
   */
  campaignName: string;

  /**
   * The timestamp (ISO8601 format) when this Blog Post was created.
   */
  created: string;

  /**
   * The internal name of the content language variation.
   */
  name: string;

  /**
   * Set this to create a password protected page. Entering the password will be
   * required to view the page.
   */
  password: string;

  publicAccessRules: Array<PublicAccessRule>;

  /**
   * Boolean to determine whether or not to respect publicAccessRules.
   */
  publicAccessRulesEnabled: boolean;

  /**
   * The date (ISO8601 format) the page is to be published at.
   */
  publishDate: string;

  /**
   * The path of the this page. This field is appended to the domain to construct the
   * url of this page.
   */
  slug: string;

  /**
   * An ENUM describing the current state of this page.
   *
   * Maximum string length: 25
   */
  state: string;

  /**
   * The timestamp (ISO8601 format) when this Blog Post was updated.
   */
  updated: string;

  tagIds?: Array<number>;
}

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

  /**
   * The CSS class applied to the layout section.
   */
  cssClass: string;

  /**
   * The CSS ID applied to the layout section.
   */
  cssId: string;

  /**
   * Custom CSS styles applied to the layout section.
   */
  cssStyle: string;

  /**
   * The label for the layout section.
   */
  label: string;

  /**
   * The name assigned to the layout section.
   */
  name: string;

  /**
   * null
   */
  params: { [key: string]: unknown };

  rowMetaData: Array<RowMetaData>;

  rows: Array<{ [key: string]: LayoutSection }>;

  styles: Styles;

  /**
   * The type of the layout section.
   */
  type: string;

  /**
   * The width of the layout section.
   */
  w: number;

  /**
   * The x-coordinate position of the layout section.
   */
  x: number;
}

export interface Margin {
  bottom: Size;

  top: Size;
}

export interface Padding {
  bottom: Size;

  left: Size;

  right: Size;

  top: Size;
}

export type PublicAccessRule = unknown;

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
  /**
   * The CSS class applied to the row.
   */
  cssClass: string;

  styles: Styles;
}

export interface SetNewLanguagePrimaryRequestVNext {
  /**
   * ID of object to set as primary in multi-language group.
   */
  id: string;
}

export interface SideOrCorner {
  /**
   * Specifies the horizontal side of an element.
   */
  horizontalSide: 'CENTER' | 'LEFT' | 'RIGHT';

  /**
   * Specifies the vertical side of an element.
   */
  verticalSide: 'BOTTOM' | 'MIDDLE' | 'TOP';
}

export interface Size {
  units:
    | '%'
    | 'ch'
    | 'cm'
    | 'em'
    | 'ex'
    | 'in'
    | 'lh'
    | 'mm'
    | 'pc'
    | 'pt'
    | 'px'
    | 'Q'
    | 'rem'
    | 'vh'
    | 'vmax'
    | 'vmin'
    | 'vw';

  value: number;
}

export interface Styles {
  backgroundColor: RgbaColor;

  backgroundGradient: Gradient;

  backgroundImage: BackgroundImage;

  /**
   * Indicates whether flexbox positioning is enabled for the section.
   */
  flexboxPositioning:
    | 'BOTTOM_CENTER'
    | 'BOTTOM_LEFT'
    | 'BOTTOM_RIGHT'
    | 'MIDDLE_CENTER'
    | 'MIDDLE_LEFT'
    | 'MIDDLE_RIGHT'
    | 'TOP_CENTER'
    | 'TOP_LEFT'
    | 'TOP_RIGHT';

  /**
   * Determines if the section should be forced to full width.
   */
  forceFullWidthSection: boolean;

  /**
   * Defines the maximum width for centering the section.
   */
  maxWidthSectionCentering: number;

  /**
   * Specifies the vertical alignment of elements within the section.
   */
  verticalAlignment: 'BOTTOM' | 'MIDDLE' | 'TOP';

  /**
   * Breakpoint CSS styles for margin, padding, etc...
   */
  breakpointStyles?: { [key: string]: BreakpointStyles };
}

export interface UpdateLanguagesRequestVNext {
  /**
   * Map of object IDs to associated languages of object in the multi-language group.
   */
  languages: {
    [key: string]:
      | 'aa'
      | 'ab'
      | 'ae'
      | 'af'
      | 'af-na'
      | 'af-za'
      | 'agq'
      | 'agq-cm'
      | 'ak'
      | 'ak-gh'
      | 'am'
      | 'am-et'
      | 'an'
      | 'ann'
      | 'ann-ng'
      | 'ar'
      | 'ar-001'
      | 'ar-ae'
      | 'ar-bh'
      | 'ar-dj'
      | 'ar-dz'
      | 'ar-eg'
      | 'ar-eh'
      | 'ar-er'
      | 'ar-il'
      | 'ar-iq'
      | 'ar-jo'
      | 'ar-km'
      | 'ar-kw'
      | 'ar-lb'
      | 'ar-ly'
      | 'ar-ma'
      | 'ar-mr'
      | 'ar-om'
      | 'ar-ps'
      | 'ar-qa'
      | 'ar-sa'
      | 'ar-sd'
      | 'ar-so'
      | 'ar-ss'
      | 'ar-sy'
      | 'ar-td'
      | 'ar-tn'
      | 'ar-ye'
      | 'as'
      | 'asa'
      | 'asa-tz'
      | 'ast'
      | 'ast-es'
      | 'as-in'
      | 'av'
      | 'ay'
      | 'az'
      | 'az-az'
      | 'ba'
      | 'bas'
      | 'bas-cm'
      | 'be'
      | 'bem'
      | 'bem-zm'
      | 'bez'
      | 'bez-tz'
      | 'be-by'
      | 'bg'
      | 'bgc'
      | 'bgc-in'
      | 'bg-bg'
      | 'bi'
      | 'bho'
      | 'bho-in'
      | 'bm'
      | 'bm-ml'
      | 'bn'
      | 'bn-bd'
      | 'bn-in'
      | 'bo'
      | 'bo-cn'
      | 'bo-in'
      | 'br'
      | 'brx'
      | 'brx-in'
      | 'br-fr'
      | 'bs'
      | 'bs-ba'
      | 'ca'
      | 'ca-ad'
      | 'ca-es'
      | 'ca-fr'
      | 'ca-it'
      | 'ccp'
      | 'ccp-bd'
      | 'ccp-in'
      | 'ce'
      | 'ceb'
      | 'ceb-ph'
      | 'ce-ru'
      | 'ch'
      | 'cgg'
      | 'cgg-ug'
      | 'chr'
      | 'chr-us'
      | 'ckb'
      | 'ckb-iq'
      | 'ckb-ir'
      | 'co'
      | 'cr'
      | 'cs'
      | 'cs-cz'
      | 'cu'
      | 'cu-ru'
      | 'cv'
      | 'cv-ru'
      | 'cy'
      | 'cy-gb'
      | 'da'
      | 'dav'
      | 'dav-ke'
      | 'da-dk'
      | 'da-gl'
      | 'de'
      | 'de-at'
      | 'de-be'
      | 'de-ch'
      | 'de-de'
      | 'de-gr'
      | 'de-it'
      | 'de-li'
      | 'de-lu'
      | 'dje'
      | 'dje-ne'
      | 'doi'
      | 'doi-in'
      | 'dsb'
      | 'dsb-de'
      | 'dua'
      | 'dua-cm'
      | 'dyo'
      | 'dyo-sn'
      | 'dv'
      | 'dz'
      | 'dz-bt'
      | 'ebu'
      | 'ebu-ke'
      | 'ee'
      | 'ee-gh'
      | 'ee-tg'
      | 'el'
      | 'el-cy'
      | 'el-gr'
      | 'en'
      | 'en-001'
      | 'en-150'
      | 'en-ae'
      | 'en-ag'
      | 'en-ai'
      | 'en-as'
      | 'en-at'
      | 'en-au'
      | 'en-bb'
      | 'en-be'
      | 'en-bi'
      | 'en-bm'
      | 'en-bs'
      | 'en-bw'
      | 'en-bz'
      | 'en-ca'
      | 'en-cc'
      | 'en-ch'
      | 'en-ck'
      | 'en-cm'
      | 'en-cn'
      | 'en-cx'
      | 'en-cy'
      | 'en-de'
      | 'en-dg'
      | 'en-dk'
      | 'en-dm'
      | 'en-ee'
      | 'en-eg'
      | 'en-er'
      | 'en-es'
      | 'en-fi'
      | 'en-fj'
      | 'en-fk'
      | 'en-fm'
      | 'en-fr'
      | 'en-gb'
      | 'en-gd'
      | 'en-gg'
      | 'en-gh'
      | 'en-gi'
      | 'en-gm'
      | 'en-gu'
      | 'en-gy'
      | 'en-hk'
      | 'en-id'
      | 'en-ie'
      | 'en-il'
      | 'en-im'
      | 'en-in'
      | 'en-io'
      | 'en-je'
      | 'en-jm'
      | 'en-ke'
      | 'en-ki'
      | 'en-kn'
      | 'en-ky'
      | 'en-lc'
      | 'en-lr'
      | 'en-ls'
      | 'en-lu'
      | 'en-mg'
      | 'en-mh'
      | 'en-mo'
      | 'en-mp'
      | 'en-ms'
      | 'en-mt'
      | 'en-mu'
      | 'en-mv'
      | 'en-mw'
      | 'en-mx'
      | 'en-my'
      | 'en-na'
      | 'en-nf'
      | 'en-ng'
      | 'en-nl'
      | 'en-nr'
      | 'en-nu'
      | 'en-nz'
      | 'en-pg'
      | 'en-ph'
      | 'en-pk'
      | 'en-pn'
      | 'en-pr'
      | 'en-pt'
      | 'en-pw'
      | 'en-rw'
      | 'en-sb'
      | 'en-sc'
      | 'en-sd'
      | 'en-se'
      | 'en-sg'
      | 'en-sh'
      | 'en-si'
      | 'en-sl'
      | 'en-ss'
      | 'en-sx'
      | 'en-sz'
      | 'en-tc'
      | 'en-th'
      | 'en-tk'
      | 'en-tn'
      | 'en-to'
      | 'en-tt'
      | 'en-tv'
      | 'en-tz'
      | 'en-ug'
      | 'en-um'
      | 'en-us'
      | 'en-vc'
      | 'en-vg'
      | 'en-vi'
      | 'en-vn'
      | 'en-vu'
      | 'en-ws'
      | 'en-za'
      | 'en-zm'
      | 'en-zw'
      | 'eo'
      | 'eo-001'
      | 'es'
      | 'es-419'
      | 'es-ar'
      | 'es-bo'
      | 'es-br'
      | 'es-bz'
      | 'es-cl'
      | 'es-co'
      | 'es-cr'
      | 'es-cu'
      | 'es-do'
      | 'es-ea'
      | 'es-ec'
      | 'es-es'
      | 'es-gq'
      | 'es-gt'
      | 'es-hn'
      | 'es-ic'
      | 'es-mx'
      | 'es-ni'
      | 'es-pa'
      | 'es-pe'
      | 'es-ph'
      | 'es-pr'
      | 'es-py'
      | 'es-sv'
      | 'es-us'
      | 'es-uy'
      | 'es-ve'
      | 'et'
      | 'et-ee'
      | 'eu'
      | 'eu-es'
      | 'ewo'
      | 'ewo-cm'
      | 'fa'
      | 'fa-af'
      | 'fa-ir'
      | 'ff'
      | 'ff-bf'
      | 'ff-cm'
      | 'ff-gh'
      | 'ff-gm'
      | 'ff-gn'
      | 'ff-gw'
      | 'ff-lr'
      | 'ff-mr'
      | 'ff-ne'
      | 'ff-ng'
      | 'ff-sl'
      | 'ff-sn'
      | 'fi'
      | 'fil'
      | 'fil-ph'
      | 'fi-fi'
      | 'fj'
      | 'fo'
      | 'fo-dk'
      | 'fo-fo'
      | 'fr'
      | 'frr'
      | 'frr-de'
      | 'fr-be'
      | 'fr-bf'
      | 'fr-bi'
      | 'fr-bj'
      | 'fr-bl'
      | 'fr-ca'
      | 'fr-cd'
      | 'fr-cf'
      | 'fr-cg'
      | 'fr-ch'
      | 'fr-ci'
      | 'fr-cm'
      | 'fr-dj'
      | 'fr-dz'
      | 'fr-fr'
      | 'fr-ga'
      | 'fr-gf'
      | 'fr-gn'
      | 'fr-gp'
      | 'fr-gq'
      | 'fr-ht'
      | 'fr-km'
      | 'fr-lu'
      | 'fr-ma'
      | 'fr-mc'
      | 'fr-mf'
      | 'fr-mg'
      | 'fr-ml'
      | 'fr-mq'
      | 'fr-mr'
      | 'fr-mu'
      | 'fr-nc'
      | 'fr-ne'
      | 'fr-pf'
      | 'fr-pm'
      | 'fr-re'
      | 'fr-rw'
      | 'fr-sc'
      | 'fr-sn'
      | 'fr-sy'
      | 'fr-td'
      | 'fr-tg'
      | 'fr-tn'
      | 'fr-vu'
      | 'fr-wf'
      | 'fr-yt'
      | 'fur'
      | 'fur-it'
      | 'fy'
      | 'fy-nl'
      | 'ga'
      | 'ga-gb'
      | 'ga-ie'
      | 'gd'
      | 'gd-gb'
      | 'gl'
      | 'gl-es'
      | 'gn'
      | 'gsw'
      | 'gsw-ch'
      | 'gsw-fr'
      | 'gsw-li'
      | 'gu'
      | 'guz'
      | 'guz-ke'
      | 'gu-in'
      | 'gv'
      | 'gv-im'
      | 'ha'
      | 'haw'
      | 'haw-us'
      | 'ha-gh'
      | 'ha-ne'
      | 'ha-ng'
      | 'he'
      | 'he-il'
      | 'hi'
      | 'hi-in'
      | 'hmn'
      | 'ho'
      | 'hr'
      | 'hr-ba'
      | 'hr-hr'
      | 'ht'
      | 'hsb'
      | 'hsb-de'
      | 'hu'
      | 'hu-hu'
      | 'hy'
      | 'hy-am'
      | 'hz'
      | 'ia'
      | 'ia-001'
      | 'id'
      | 'ie'
      | 'ig'
      | 'ig-ng'
      | 'ii'
      | 'ii-cn'
      | 'ik'
      | 'io'
      | 'id-id'
      | 'is'
      | 'is-is'
      | 'it'
      | 'it-ch'
      | 'it-it'
      | 'it-sm'
      | 'it-va'
      | 'iu'
      | 'ja'
      | 'ja-jp'
      | 'jgo'
      | 'jgo-cm'
      | 'yi'
      | 'yi-001'
      | 'jmc'
      | 'jmc-tz'
      | 'jv'
      | 'jv-id'
      | 'ka'
      | 'kab'
      | 'kab-dz'
      | 'kam'
      | 'kam-ke'
      | 'kar'
      | 'ka-ge'
      | 'kde'
      | 'kde-tz'
      | 'kea'
      | 'kea-cv'
      | 'kgp'
      | 'kgp-br'
      | 'kg'
      | 'kh'
      | 'khq'
      | 'khq-ml'
      | 'ki'
      | 'ki-ke'
      | 'kj'
      | 'kk'
      | 'kkj'
      | 'kkj-cm'
      | 'kk-kz'
      | 'kl'
      | 'kln'
      | 'kln-ke'
      | 'kl-gl'
      | 'km'
      | 'km-kh'
      | 'kn'
      | 'kn-in'
      | 'ko'
      | 'kok'
      | 'kok-in'
      | 'ko-kp'
      | 'ko-kr'
      | 'kr'
      | 'ks'
      | 'ksb'
      | 'ksb-tz'
      | 'ksf'
      | 'ksf-cm'
      | 'ksh'
      | 'ksh-de'
      | 'ks-in'
      | 'ku'
      | 'ku-tr'
      | 'kv'
      | 'kw'
      | 'kw-gb'
      | 'ky'
      | 'ky-kg'
      | 'lag'
      | 'lag-tz'
      | 'la'
      | 'lb'
      | 'lb-lu'
      | 'lg'
      | 'lg-ug'
      | 'lkt'
      | 'lkt-us'
      | 'li'
      | 'ln'
      | 'ln-ao'
      | 'ln-cd'
      | 'ln-cf'
      | 'ln-cg'
      | 'lo'
      | 'lo-la'
      | 'lrc'
      | 'lrc-iq'
      | 'lrc-ir'
      | 'lt'
      | 'lt-lt'
      | 'lu'
      | 'luo'
      | 'luo-ke'
      | 'luy'
      | 'luy-ke'
      | 'lu-cd'
      | 'lv'
      | 'lv-lv'
      | 'mai'
      | 'mai-in'
      | 'mas'
      | 'mas-ke'
      | 'mas-tz'
      | 'mdf'
      | 'mdf-ru'
      | 'mer'
      | 'mer-ke'
      | 'mfe'
      | 'mfe-mu'
      | 'mg'
      | 'mgh'
      | 'mgh-mz'
      | 'mgo'
      | 'mgo-cm'
      | 'mg-mg'
      | 'mh'
      | 'mi'
      | 'mi-nz'
      | 'mk'
      | 'mk-mk'
      | 'ml'
      | 'ml-in'
      | 'mn'
      | 'mni'
      | 'mni-in'
      | 'mn-mn'
      | 'mr'
      | 'mr-in'
      | 'ms'
      | 'ms-bn'
      | 'ms-id'
      | 'ms-my'
      | 'ms-sg'
      | 'mt'
      | 'mt-mt'
      | 'mua'
      | 'mua-cm'
      | 'my'
      | 'my-mm'
      | 'mzn'
      | 'mzn-ir'
      | 'naq'
      | 'naq-na'
      | 'na'
      | 'nb'
      | 'nb-no'
      | 'nb-sj'
      | 'nd'
      | 'nds'
      | 'nds-de'
      | 'nds-nl'
      | 'nd-zw'
      | 'ne'
      | 'ne-in'
      | 'ne-np'
      | 'ng'
      | 'nl'
      | 'nl-aw'
      | 'nl-be'
      | 'nl-bq'
      | 'nl-ch'
      | 'nl-cw'
      | 'nl-lu'
      | 'nl-nl'
      | 'nl-sr'
      | 'nl-sx'
      | 'nmg'
      | 'nmg-cm'
      | 'nn'
      | 'nnh'
      | 'nnh-cm'
      | 'nn-no'
      | 'nr'
      | 'nv'
      | 'ny'
      | 'no'
      | 'no-no'
      | 'nus'
      | 'nus-ss'
      | 'nyn'
      | 'nyn-ug'
      | 'oc'
      | 'oc-es'
      | 'oc-fr'
      | 'oj'
      | 'om'
      | 'om-et'
      | 'om-ke'
      | 'or'
      | 'or-in'
      | 'os'
      | 'os-ge'
      | 'os-ru'
      | 'pa'
      | 'pa-in'
      | 'pa-pk'
      | 'pcm'
      | 'pcm-ng'
      | 'pis'
      | 'pis-sb'
      | 'pi'
      | 'pl'
      | 'pl-pl'
      | 'prg'
      | 'prg-001'
      | 'ps'
      | 'ps-af'
      | 'ps-pk'
      | 'pt'
      | 'pt-ao'
      | 'pt-br'
      | 'pt-ch'
      | 'pt-cv'
      | 'pt-gq'
      | 'pt-gw'
      | 'pt-lu'
      | 'pt-mo'
      | 'pt-mz'
      | 'pt-pt'
      | 'pt-st'
      | 'pt-tl'
      | 'qu'
      | 'qu-bo'
      | 'qu-ec'
      | 'qu-pe'
      | 'raj'
      | 'raj-in'
      | 'rm'
      | 'rm-ch'
      | 'rn'
      | 'rn-bi'
      | 'ro'
      | 'rof'
      | 'rof-tz'
      | 'ro-md'
      | 'ro-ro'
      | 'ru'
      | 'ru-by'
      | 'ru-kg'
      | 'ru-kz'
      | 'ru-md'
      | 'ru-ru'
      | 'ru-ua'
      | 'rw'
      | 'rwk'
      | 'rwk-tz'
      | 'rw-rw'
      | 'sa'
      | 'sah'
      | 'sah-ru'
      | 'saq'
      | 'saq-ke'
      | 'sat'
      | 'sat-in'
      | 'sa-in'
      | 'sbp'
      | 'sbp-tz'
      | 'sc'
      | 'sc-it'
      | 'sd'
      | 'sd-in'
      | 'sd-pk'
      | 'se'
      | 'seh'
      | 'seh-mz'
      | 'ses'
      | 'ses-ml'
      | 'se-fi'
      | 'se-no'
      | 'se-se'
      | 'sg'
      | 'sg-cf'
      | 'shi'
      | 'shi-ma'
      | 'si'
      | 'si-lk'
      | 'sk'
      | 'sk-sk'
      | 'sl'
      | 'sl-si'
      | 'sm'
      | 'smn'
      | 'smn-fi'
      | 'sms'
      | 'sms-fi'
      | 'sn'
      | 'sn-zw'
      | 'so'
      | 'so-dj'
      | 'so-et'
      | 'so-ke'
      | 'so-so'
      | 'sq'
      | 'sq-al'
      | 'sq-mk'
      | 'sq-xk'
      | 'sr'
      | 'sr-ba'
      | 'sr-cs'
      | 'sr-me'
      | 'sr-rs'
      | 'sr-xk'
      | 'ss'
      | 'st'
      | 'su'
      | 'su-id'
      | 'sv'
      | 'sv-ax'
      | 'sv-fi'
      | 'sv-se'
      | 'sw'
      | 'sw-cd'
      | 'sw-ke'
      | 'sw-tz'
      | 'sw-ug'
      | 'sy'
      | 'ta'
      | 'ta-in'
      | 'ta-lk'
      | 'ta-my'
      | 'ta-sg'
      | 'te'
      | 'teo'
      | 'teo-ke'
      | 'teo-ug'
      | 'te-in'
      | 'tg'
      | 'tg-tj'
      | 'th'
      | 'th-th'
      | 'ti'
      | 'ti-er'
      | 'ti-et'
      | 'tk'
      | 'tk-tm'
      | 'tl'
      | 'tn'
      | 'to'
      | 'tok'
      | 'tok-001'
      | 'to-to'
      | 'ts'
      | 'tr'
      | 'tr-cy'
      | 'tr-tr'
      | 'tt'
      | 'tt-ru'
      | 'tw'
      | 'ty'
      | 'twq'
      | 'twq-ne'
      | 'tzm'
      | 'tzm-ma'
      | 'ug'
      | 'ug-cn'
      | 'uk'
      | 'uk-ua'
      | 'ur'
      | 'ur-in'
      | 'ur-pk'
      | 'uz'
      | 'uz-af'
      | 'uz-uz'
      | 'vai'
      | 'vai-lr'
      | 've'
      | 'vi'
      | 'vi-vn'
      | 'vo'
      | 'vo-001'
      | 'vun'
      | 'vun-tz'
      | 'wa'
      | 'wae'
      | 'wae-ch'
      | 'wo'
      | 'wo-sn'
      | 'xh'
      | 'xh-za'
      | 'xog'
      | 'xog-ug'
      | 'yav'
      | 'yav-cm'
      | 'yo'
      | 'yo-bj'
      | 'yo-ng'
      | 'yrl'
      | 'yrl-br'
      | 'yrl-co'
      | 'yrl-ve'
      | 'yue'
      | 'yue-cn'
      | 'yue-hk'
      | 'zgh'
      | 'zgh-ma'
      | 'za'
      | 'zh'
      | 'zh-cn'
      | 'zh-hans'
      | 'zh-hant'
      | 'zh-hk'
      | 'zh-mo'
      | 'zh-sg'
      | 'zh-tw'
      | 'zu'
      | 'zu-za';
  };

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
Cms.URLMappings = URLMappings;
Cms.URLRedirects = URLRedirects;

export declare namespace Cms {
  export {
    type Angle as Angle,
    type AttachToLangPrimaryRequestVNext as AttachToLangPrimaryRequestVNext,
    type BackgroundImage as BackgroundImage,
    type BatchInputJsonNode as BatchInputJsonNode,
    type BreakpointStyles as BreakpointStyles,
    type ColorStop as ColorStop,
    type ContentCloneRequestVNext as ContentCloneRequestVNext,
    type ContentLanguageVariation as ContentLanguageVariation,
    type ContentScheduleRequestVNext as ContentScheduleRequestVNext,
    type DetachFromLangGroupRequestVNext as DetachFromLangGroupRequestVNext,
    type Gradient as Gradient,
    type LayoutSection as LayoutSection,
    type Margin as Margin,
    type Padding as Padding,
    type PublicAccessRule as PublicAccessRule,
    type RgbaColor as RgbaColor,
    type RowMetaData as RowMetaData,
    type SetNewLanguagePrimaryRequestVNext as SetNewLanguagePrimaryRequestVNext,
    type SideOrCorner as SideOrCorner,
    type Size as Size,
    type Styles as Styles,
    type UpdateLanguagesRequestVNext as UpdateLanguagesRequestVNext,
  };

  export {
    AuditLogs as AuditLogs,
    type CmsAuditLoggingExportFilters as CmsAuditLoggingExportFilters,
    type CmsAuditLoggingExportSettings as CmsAuditLoggingExportSettings,
    type CollectionResponsePublicAuditLog as CollectionResponsePublicAuditLog,
    type PublicAuditLog as PublicAuditLog,
    type PublicAuditLogsPage as PublicAuditLogsPage,
    type AuditLogListParams as AuditLogListParams,
    type AuditLogExportParams as AuditLogExportParams,
  };

  export {
    Blogs as Blogs,
    type CursorPagedResultBlogAuthorLong as CursorPagedResultBlogAuthorLong,
    type CursorPagedResultBlogPostLong as CursorPagedResultBlogPostLong,
    type CursorPagedResultTagLong as CursorPagedResultTagLong,
  };

  export {
    Domains as Domains,
    type CollectionResponseWithTotalDomain as CollectionResponseWithTotalDomain,
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
    MediaBridge as MediaBridge,
    type AbsoluteValue as AbsoluteValue,
    type AddNumbers as AddNumbers,
    type AddTime as AddTime,
    type And as And,
    type AttentionSpanCalculatedValues as AttentionSpanCalculatedValues,
    type AttentionSpanEvent as AttentionSpanEvent,
    type AttentionSpanEventRequest as AttentionSpanEventRequest,
    type BatchResponseProperty as BatchResponseProperty,
    type BeginsWith as BeginsWith,
    type BooleanPropertyVariable as BooleanPropertyVariable,
    type BooleanTargetPropertyVariable as BooleanTargetPropertyVariable,
    type BulkIntegratorObjectCreationResponse as BulkIntegratorObjectCreationResponse,
    type CaseChangeTestExtensionData as CaseChangeTestExtensionData,
    type CollectionResponseObjectSchemaNoPaging as CollectionResponseObjectSchemaNoPaging,
    type CollectionResponsePropertyNoPaging as CollectionResponsePropertyNoPaging,
    type ConcatStrings as ConcatStrings,
    type ConstantBoolean as ConstantBoolean,
    type ConstantNumber as ConstantNumber,
    type ConstantString as ConstantString,
    type Contains as Contains,
    type Date as Date,
    type DatedExchangeRate as DatedExchangeRate,
    type DefaultRequirements as DefaultRequirements,
    type DefinitionSource as DefinitionSource,
    type DivideNumbers as DivideNumbers,
    type Endpoints as Endpoints,
    type Euler as Euler,
    type EventVisibilityChange as EventVisibilityChange,
    type EventVisibilityResponse as EventVisibilityResponse,
    type ExtensionData as ExtensionData,
    type ExternalOptionsMetaData as ExternalOptionsMetaData,
    type ExtractMostRecentEmailReplyHTML as ExtractMostRecentEmailReplyHTML,
    type ExtractMostRecentEmailReplyText as ExtractMostRecentEmailReplyText,
    type ExtractMostRecentPlainTextEmailReply as ExtractMostRecentPlainTextEmailReply,
    type FetchCurrencyDecimalPlaces as FetchCurrencyDecimalPlaces,
    type FetchExchangeRate as FetchExchangeRate,
    type FetchSingleCurrencyPortalCurrency as FetchSingleCurrencyPortalCurrency,
    type FieldLevelPermission as FieldLevelPermission,
    type FilteringMetaData as FilteringMetaData,
    type FormatFullName as FormatFullName,
    type FormatPhoneNumber as FormatPhoneNumber,
    type FormatSearchablePhoneNumber as FormatSearchablePhoneNumber,
    type Group as Group,
    type GroupView as GroupView,
    type HasEmailReply as HasEmailReply,
    type HasPlainTextEmailReply as HasPlainTextEmailReply,
    type IfBoolean as IfBoolean,
    type IfNumber as IfNumber,
    type IfString as IfString,
    type InboundDBObjectType as InboundDBObjectType,
    type IntegratorOEmbedDomainModel as IntegratorOEmbedDomainModel,
    type IntegratorOEmbedDomainRequest as IntegratorOEmbedDomainRequest,
    type IntegratorObjectCreationRequest as IntegratorObjectCreationRequest,
    type IntegratorObjectCreationResponse as IntegratorObjectCreationResponse,
    type IsEngagementType as IsEngagementType,
    type IsPipelineStageClosed as IsPipelineStageClosed,
    type IsPresent as IsPresent,
    type LessThan as LessThan,
    type LessThanOrEqual as LessThanOrEqual,
    type LowerCase as LowerCase,
    type MaxNumbers as MaxNumbers,
    type MediaBridgePropertyUpdate as MediaBridgePropertyUpdate,
    type MediaBridgeProviderPartial as MediaBridgeProviderPartial,
    type MediaBridgeProviderRegistrationResponse as MediaBridgeProviderRegistrationResponse,
    type MediaPlayedEvent as MediaPlayedEvent,
    type MediaPlayedEventRequest as MediaPlayedEventRequest,
    type MediaPlayedPercentageEvent as MediaPlayedPercentageEvent,
    type MediaPlayedPercentageEventRequest as MediaPlayedPercentageEventRequest,
    type MinNumbers as MinNumbers,
    type Month as Month,
    type MoreThan as MoreThan,
    type MoreThanOrEqual as MoreThanOrEqual,
    type MultiplyNumbers as MultiplyNumbers,
    type Not as Not,
    type Now as Now,
    type NumberEquals as NumberEquals,
    type NumberPropertyVariable as NumberPropertyVariable,
    type NumberTargetPropertyVariable as NumberTargetPropertyVariable,
    type NumberToString as NumberToString,
    type OEmbedDomainsCollectionResponse as OEmbedDomainsCollectionResponse,
    type ObjectDefinitionResponse as ObjectDefinitionResponse,
    type ObjectSchema as ObjectSchema,
    type ObjectTypeIDProto as ObjectTypeIDProto,
    type Option1 as Option1,
    type OptionDecorations as OptionDecorations,
    type OptionDecoratorsExtensionData as OptionDecoratorsExtensionData,
    type Or as Or,
    type ParseNumber as ParseNumber,
    type PeriodToMonths as PeriodToMonths,
    type PeriodToWeeks as PeriodToWeeks,
    type PipelineProbability as PipelineProbability,
    type Power as Power,
    type Property as Property,
    type Property1 as Property1,
    type PropertyDefinition as PropertyDefinition,
    type PropertyDefinitionSource as PropertyDefinitionSource,
    type RequiredPropertiesExtensionData as RequiredPropertiesExtensionData,
    type RollupExpression as RollupExpression,
    type RoundDownNumbers as RoundDownNumbers,
    type RoundNearestNumbers as RoundNearestNumbers,
    type RoundUpNumbers as RoundUpNumbers,
    type ScopeMapping as ScopeMapping,
    type SetContainsString as SetContainsString,
    type SoftRequiredPropertiesExtensionData as SoftRequiredPropertiesExtensionData,
    type SquareRoot as SquareRoot,
    type StringEquals as StringEquals,
    type StringLength as StringLength,
    type StringPropertyVariable as StringPropertyVariable,
    type StringTargetPropertyVariable as StringTargetPropertyVariable,
    type Substring as Substring,
    type SubtractNumbers as SubtractNumbers,
    type SubtractTime as SubtractTime,
    type TimeBetween as TimeBetween,
    type TimeBetweenSkipWeekends as TimeBetweenSkipWeekends,
    type TimestampOfPropertyVariable as TimestampOfPropertyVariable,
    type TimestampOfTargetPropertyVariable as TimestampOfTargetPropertyVariable,
    type UpperCase as UpperCase,
    type Xor as Xor,
    type Year as Year,
    type MediaBridgeCreateAssociationParams as MediaBridgeCreateAssociationParams,
    type MediaBridgeCreateAttentionSpanEventParams as MediaBridgeCreateAttentionSpanEventParams,
    type MediaBridgeCreateMediaPlayedEventParams as MediaBridgeCreateMediaPlayedEventParams,
    type MediaBridgeCreateMediaPlayedPercentEventParams as MediaBridgeCreateMediaPlayedPercentEventParams,
    type MediaBridgeCreateObjectTypeParams as MediaBridgeCreateObjectTypeParams,
    type MediaBridgeCreateOembedDomainParams as MediaBridgeCreateOembedDomainParams,
    type MediaBridgeCreatePropertyParams as MediaBridgeCreatePropertyParams,
    type MediaBridgeCreatePropertyGroupParams as MediaBridgeCreatePropertyGroupParams,
    type MediaBridgeDeleteAssociationParams as MediaBridgeDeleteAssociationParams,
    type MediaBridgeDeleteOembedDomainParams as MediaBridgeDeleteOembedDomainParams,
    type MediaBridgeDeletePropertyParams as MediaBridgeDeletePropertyParams,
    type MediaBridgeDeletePropertyGroupParams as MediaBridgeDeletePropertyGroupParams,
    type MediaBridgeGetOembedDomainParams as MediaBridgeGetOembedDomainParams,
    type MediaBridgeGetPropertyParams as MediaBridgeGetPropertyParams,
    type MediaBridgeGetPropertyGroupParams as MediaBridgeGetPropertyGroupParams,
    type MediaBridgeGetSchemaParams as MediaBridgeGetSchemaParams,
    type MediaBridgeListObjectTypesByMediaTypeParams as MediaBridgeListObjectTypesByMediaTypeParams,
    type MediaBridgeListOembedDomainsParams as MediaBridgeListOembedDomainsParams,
    type MediaBridgeListPropertiesParams as MediaBridgeListPropertiesParams,
    type MediaBridgeListPropertyGroupsParams as MediaBridgeListPropertyGroupsParams,
    type MediaBridgeListSchemasParams as MediaBridgeListSchemasParams,
    type MediaBridgeRegisterAppNameParams as MediaBridgeRegisterAppNameParams,
    type MediaBridgeUpdateEventVisibilitySettingsParams as MediaBridgeUpdateEventVisibilitySettingsParams,
    type MediaBridgeUpdateOembedDomainParams as MediaBridgeUpdateOembedDomainParams,
    type MediaBridgeUpdatePropertyParams as MediaBridgeUpdatePropertyParams,
    type MediaBridgeUpdatePropertyGroupParams as MediaBridgeUpdatePropertyGroupParams,
    type MediaBridgeUpdateSchemaParams as MediaBridgeUpdateSchemaParams,
    type MediaBridgeUpdateSettingsParams as MediaBridgeUpdateSettingsParams,
  };

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
    type CollectionResponseWithTotalContentFolderVersion as CollectionResponseWithTotalContentFolderVersion,
    type CollectionResponseWithTotalPageForwardPaging as CollectionResponseWithTotalPageForwardPaging,
    type CollectionResponseWithTotalPageVersion as CollectionResponseWithTotalPageVersion,
    type ContentFolder as ContentFolder,
    type ContentFolderVersion as ContentFolderVersion,
    type ContentLanguageCloneRequestVNext as ContentLanguageCloneRequestVNext,
    type CursorPagedResultContentFolderLong as CursorPagedResultContentFolderLong,
    type CursorPagedResultPageLong as CursorPagedResultPageLong,
    type Page as Page,
    type PageVersion as PageVersion,
    type PageVersionsPage as PageVersionsPage,
    type PageGetLandingPageFoldersParams as PageGetLandingPageFoldersParams,
    type PageGetLandingPageFoldersByQueryParams as PageGetLandingPageFoldersByQueryParams,
    type PageGetLandingPageRevisionParams as PageGetLandingPageRevisionParams,
    type PageGetLandingPagesParams as PageGetLandingPagesParams,
    type PageGetLandingPagesByQueryParams as PageGetLandingPagesByQueryParams,
    type PageGetSitePageRevisionParams as PageGetSitePageRevisionParams,
    type PageGetSitePagesParams as PageGetSitePagesParams,
    type PageGetSitePagesByQueryParams as PageGetSitePagesByQueryParams,
    type PageListLandingPageRevisionsParams as PageListLandingPageRevisionsParams,
    type PageListSitePageRevisionsParams as PageListSitePageRevisionsParams,
    type PageRestoreLandingPageRevisionParams as PageRestoreLandingPageRevisionParams,
    type PageRestoreLandingPageRevisionToDraftParams as PageRestoreLandingPageRevisionToDraftParams,
    type PageRestoreSitePageRevisionParams as PageRestoreSitePageRevisionParams,
    type PageRestoreSitePageRevisionToDraftParams as PageRestoreSitePageRevisionToDraftParams,
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
    URLMappings as URLMappings,
    type URLMappingsURLMapping as URLMappingsURLMapping,
    type URLMappingCreateParams as URLMappingCreateParams,
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
