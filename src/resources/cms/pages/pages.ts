// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CmsAPI from '../cms';
import * as LandingPagesAPI from './landing-pages';
import {
  LandingPageAttachToLangGroupParams,
  LandingPageCloneParams,
  LandingPageCreateAbTestVariationParams,
  LandingPageCreateBatchParams,
  LandingPageCreateFolderParams,
  LandingPageCreateFoldersBatchParams,
  LandingPageCreateLanguageVariationParams,
  LandingPageCreateParams,
  LandingPageDeleteBatchParams,
  LandingPageDeleteFolderParams,
  LandingPageDeleteFoldersBatchParams,
  LandingPageDeleteParams,
  LandingPageDetachFromLangGroupParams,
  LandingPageEndAbTestParams,
  LandingPageGetBatchParams,
  LandingPageGetFolderParams,
  LandingPageGetFolderRevisionParams,
  LandingPageGetFoldersBatchParams,
  LandingPageGetParams,
  LandingPageGetRevisionParams,
  LandingPageListFolderRevisionsParams,
  LandingPageListFoldersParams,
  LandingPageListParams,
  LandingPageListRevisionsParams,
  LandingPageRerunAbTestParams,
  LandingPageRestoreFolderRevisionParams,
  LandingPageRestoreRevisionParams,
  LandingPageRestoreRevisionToDraftParams,
  LandingPageScheduleParams,
  LandingPageSetNewLangPrimaryParams,
  LandingPageUpdateBatchParams,
  LandingPageUpdateDraftParams,
  LandingPageUpdateFolderParams,
  LandingPageUpdateFoldersBatchParams,
  LandingPageUpdateLanguagesParams,
  LandingPageUpdateParams,
  LandingPages,
} from './landing-pages';
import * as SitePagesAPI from './site-pages';
import {
  SitePageAttachToLangGroupParams,
  SitePageCloneParams,
  SitePageCreateAbTestVariationParams,
  SitePageCreateBatchParams,
  SitePageCreateLanguageVariationParams,
  SitePageCreateParams,
  SitePageDeleteBatchParams,
  SitePageDeleteParams,
  SitePageDetachFromLangGroupParams,
  SitePageEndAbTestParams,
  SitePageGetBatchParams,
  SitePageGetParams,
  SitePageGetRevisionParams,
  SitePageListParams,
  SitePageListRevisionsParams,
  SitePageRerunAbTestParams,
  SitePageRestoreRevisionParams,
  SitePageRestoreRevisionToDraftParams,
  SitePageScheduleParams,
  SitePageSetNewLangPrimaryParams,
  SitePageUpdateBatchParams,
  SitePageUpdateDraftParams,
  SitePageUpdateLanguagesParams,
  SitePageUpdateParams,
  SitePages,
} from './site-pages';
import { Page as PaginationPage } from '../../../core/pagination';

export class Pages extends APIResource {
  landingPages: LandingPagesAPI.LandingPages = new LandingPagesAPI.LandingPages(this._client);
  sitePages: SitePagesAPI.SitePages = new SitePagesAPI.SitePages(this._client);
}

export type PagesPage = PaginationPage<Page>;

export type VersionContentFoldersPage = PaginationPage<VersionContentFolder>;

export type ContentFoldersPage = PaginationPage<ContentFolder>;

export type VersionPagesPage = PaginationPage<VersionPage>;

/**
 * Request body object for ending A/B tests.
 */
export interface AbTestEndRequestVNext {
  /**
   * ID of the test to end.
   */
  abTestId: string;

  /**
   * ID of the object to designate as the test winner.
   */
  winnerId: string;
}

/**
 * Request body object for rerunning A/B tests.
 */
export interface AbTestRerunRequestVNext {
  /**
   * ID of the test to rerun.
   */
  abTestId: string;

  /**
   * ID of the object to reactivate as a test variation.
   */
  variationId: string;
}

/**
 * Wrapper for providing an array of content folders as inputs.
 */
export interface BatchInputContentFolder {
  /**
   * Content folders to input.
   */
  inputs: Array<ContentFolder>;
}

/**
 * Wrapper for providing an array of pages as inputs.
 */
export interface BatchInputPage {
  /**
   * Pages to input.
   */
  inputs: Array<Page>;
}

/**
 * Response object for successful batch operations on content folders.
 */
export interface BatchResponseContentFolder {
  completedAt: string;

  results: Array<ContentFolder>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

/**
 * Response object for batch operations on content folders with errors.
 */
export interface BatchResponseContentFolderWithErrors {
  /**
   * Time of batch operation completion.
   */
  completedAt: string;

  /**
   * Results of batch operation.
   */
  results: Array<ContentFolder>;

  /**
   * Time of batch operation start.
   */
  startedAt: string;

  /**
   * Status of batch operation.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * Errors in batch operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * Links associated with batch operation.
   */
  links?: { [key: string]: string };

  /**
   * Number of errors.
   */
  numErrors?: number;

  /**
   * Time of batch operation request.
   */
  requestedAt?: string;
}

/**
 * Response object for successful batch operations on pages.
 */
export interface BatchResponsePage {
  completedAt: string;

  results: Array<Page>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

/**
 * Response object for batch operations on pages with errors.
 */
export interface BatchResponsePageWithErrors {
  /**
   * Time of batch operation completion.
   */
  completedAt: string;

  /**
   * Results of batch operation.
   */
  results: Array<Page>;

  /**
   * Time of batch operation start.
   */
  startedAt: string;

  /**
   * Status of batch operation.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * Errors in batch operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * Links associated with batch operation.
   */
  links?: { [key: string]: string };

  /**
   * Number of errors.
   */
  numErrors?: number;

  /**
   * Time of batch operation request.
   */
  requestedAt?: string;
}

/**
 * Response object for collections of content folders with pagination information.
 */
export interface CollectionResponseWithTotalContentFolderForwardPaging {
  /**
   * Collection of content folders.
   */
  results: Array<ContentFolder>;

  /**
   * Total number of content folders.
   */
  total: number;

  paging?: Shared.ForwardPaging;
}

/**
 * Response object for collections of pages with pagination information.
 */
export interface CollectionResponseWithTotalPageForwardPaging {
  /**
   * Collection of pages.
   */
  results: Array<Page>;

  /**
   * Total number of pages.
   */
  total: number;

  paging?: Shared.ForwardPaging;
}

/**
 * Response object for collections of content folder versions with pagination
 * information.
 */
export interface CollectionResponseWithTotalVersionContentFolder {
  /**
   * Collection of content folder versions.
   */
  results: Array<VersionContentFolder>;

  /**
   * Total number of content folder versions.
   */
  total: number;

  paging?: Shared.Paging;
}

/**
 * Response object for collections of page versions with pagination information.
 */
export interface CollectionResponseWithTotalVersionPage {
  /**
   * Collection of page versions.
   */
  results: Array<VersionPage>;

  /**
   * Total number of page versions.
   */
  total: number;

  paging?: Shared.Paging;
}

/**
 * Model definition for a content folder.
 */
export interface ContentFolder {
  /**
   * The unique ID of the content folder.
   */
  id: string;

  /**
   * The type of object this folder applies to. Should always be LANDING_PAGE.
   */
  category: number;

  created: string;

  /**
   * The timestamp (ISO8601 format) when this content folder was deleted.
   */
  deletedAt: string;

  /**
   * The name of the folder which will show up in the app dashboard
   */
  name: string;

  /**
   * The ID of the content folder this folder is nested under
   */
  parentFolderId: number;

  updated: string;
}

/**
 * Request body object for creating new language variant content.
 */
export interface ContentLanguageCloneRequestVNext {
  /**
   * ID of content to clone.
   */
  id: string;

  /**
   * Target language of new variant.
   */
  language?: string;

  /**
   * Language of primary content to clone.
   */
  primaryLanguage?: string;
}

/**
 * Model definition for a landing page or site page.
 */
export interface Page {
  /**
   * The unique ID of the page.
   */
  id: string;

  /**
   * The status of the AB test associated with this page, if applicable
   */
  abStatus:
    | 'master'
    | 'variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'automated_loser_variant';

  /**
   * The ID of the AB test associated with this page, if applicable
   */
  abTestId: string;

  /**
   * The timestamp (ISO8601 format) when this page was deleted.
   */
  archivedAt: string;

  /**
   * If True, the page will not show up in your dashboard, although the page could
   * still be live.
   */
  archivedInDashboard: boolean;

  /**
   * List of stylesheets to attach to this page. These stylesheets are attached to
   * just this page. Order of precedence is bottom to top, just like in the HTML.
   */
  attachedStylesheets: Array<{ [key: string]: unknown }>;

  /**
   * The name of the user that updated this page.
   */
  authorName: string;

  /**
   * The GUID of the marketing campaign this page is a part of.
   */
  campaign: string;

  /**
   * ID of the type of object this is. Should always .
   */
  categoryId: number;

  contentGroupId: string;

  /**
   * An ENUM descibing the type of this object. Should be either LANDING_PAGE or
   * SITE_PAGE.
   */
  contentTypeCategory: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

  created: string;

  /**
   * The ID of the user that created this page.
   */
  createdById: string;

  currentlyPublished: boolean;

  /**
   * A generated ENUM descibing the current state of this page.
   */
  currentState:
    | 'AUTOMATED'
    | 'AUTOMATED_DRAFT'
    | 'AUTOMATED_SENDING'
    | 'AUTOMATED_FOR_FORM'
    | 'AUTOMATED_FOR_FORM_BUFFER'
    | 'AUTOMATED_FOR_FORM_DRAFT'
    | 'AUTOMATED_FOR_FORM_LEGACY'
    | 'BLOG_EMAIL_DRAFT'
    | 'BLOG_EMAIL_PUBLISHED'
    | 'DRAFT'
    | 'DRAFT_AB'
    | 'DRAFT_AB_VARIANT'
    | 'ERROR'
    | 'LOSER_AB_VARIANT'
    | 'PAGE_STUB'
    | 'PRE_PROCESSING'
    | 'PROCESSING'
    | 'PUBLISHED'
    | 'PUBLISHED_AB'
    | 'PUBLISHED_AB_VARIANT'
    | 'PUBLISHED_OR_SCHEDULED'
    | 'RSS_TO_EMAIL_DRAFT'
    | 'RSS_TO_EMAIL_PUBLISHED'
    | 'SCHEDULED'
    | 'SCHEDULED_AB'
    | 'SCHEDULED_OR_PUBLISHED'
    | 'AUTOMATED_AB'
    | 'AUTOMATED_AB_VARIANT'
    | 'AUTOMATED_DRAFT_AB'
    | 'AUTOMATED_DRAFT_ABVARIANT'
    | 'AUTOMATED_LOSER_ABVARIANT';

  /**
   * The domain this page will resolve to. If null, the page will default to the
   * primary domain for this content type.
   */
  domain: string;

  dynamicPageDataSourceId: string;

  dynamicPageDataSourceType: number;

  /**
   * The ID of the HubDB table this page references, if applicable
   */
  dynamicPageHubDbTableId: string;

  /**
   * Boolean to determine whether or not the styles from the template should be
   * applied.
   */
  enableDomainStylesheets: boolean;

  /**
   * Boolean to determine whether or not the styles from the template should be
   * applied.
   */
  enableLayoutStylesheets: boolean;

  /**
   * The featuredImage of this page.
   */
  featuredImage: string;

  /**
   * Alt Text of the featuredImage.
   */
  featuredImageAltText: string;

  /**
   * The ID of the associated folder this landing page is organized under in the app
   * dashboard.
   */
  folderId: string;

  /**
   * Custom HTML for embed codes, javascript that should be placed before the </body>
   * tag of the page.
   */
  footerHtml: string;

  /**
   * Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the
   * page.
   */
  headHtml: string;

  /**
   * The html title of this page.
   */
  htmlTitle: string;

  /**
   * Boolean to determine whether or not the Primary CSS Files should be applied.
   */
  includeDefaultCustomCss: boolean;

  /**
   * The explicitly defined ISO 639 language code of the page. If null, the page will
   * default to the language of the Domain.
   */
  language:
    | 'af'
    | 'af-na'
    | 'af-za'
    | 'agq'
    | 'agq-cm'
    | 'ak'
    | 'ak-gh'
    | 'am'
    | 'am-et'
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
    | 'az'
    | 'az-az'
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
    | 'chr'
    | 'chr-us'
    | 'ckb'
    | 'ckb-iq'
    | 'ckb-ir'
    | 'cs'
    | 'cs-cz'
    | 'cu'
    | 'cu-ru'
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
    | 'en-er'
    | 'en-fi'
    | 'en-fj'
    | 'en-fk'
    | 'en-fm'
    | 'en-gb'
    | 'en-gd'
    | 'en-gg'
    | 'en-gh'
    | 'en-gi'
    | 'en-gm'
    | 'en-gu'
    | 'en-gy'
    | 'en-hk'
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
    | 'en-tk'
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
    | 'hi'
    | 'hi-in'
    | 'hr'
    | 'hr-ba'
    | 'hr-hr'
    | 'hsb'
    | 'hsb-de'
    | 'hu'
    | 'hu-hu'
    | 'hy'
    | 'hy-am'
    | 'ia'
    | 'ia-001'
    | 'id'
    | 'ig'
    | 'ig-ng'
    | 'ii'
    | 'ii-cn'
    | 'id-id'
    | 'is'
    | 'is-is'
    | 'it'
    | 'it-ch'
    | 'it-it'
    | 'it-sm'
    | 'it-va'
    | 'he-il'
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
    | 'ka-ge'
    | 'kab'
    | 'kab-dz'
    | 'kam'
    | 'kam-ke'
    | 'kde'
    | 'kde-tz'
    | 'kea'
    | 'kea-cv'
    | 'khq'
    | 'khq-ml'
    | 'ki'
    | 'ki-ke'
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
    | 'ks'
    | 'ks-in'
    | 'ksb'
    | 'ksb-tz'
    | 'ksf'
    | 'ksf-cm'
    | 'ksh'
    | 'ksh-de'
    | 'kw'
    | 'kw-gb'
    | 'ku'
    | 'ku-tr'
    | 'ky'
    | 'ky-kg'
    | 'lag'
    | 'lag-tz'
    | 'lb'
    | 'lb-lu'
    | 'lg'
    | 'lg-ug'
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
    | 'nl'
    | 'nl-aw'
    | 'nl-be'
    | 'nl-ch'
    | 'nl-bq'
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
    | 'nus'
    | 'nus-ss'
    | 'nyn'
    | 'nyn-ug'
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
    | 'smn'
    | 'smn-fi'
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
    | 'to'
    | 'to-to'
    | 'tr'
    | 'tr-cy'
    | 'tr-tr'
    | 'tt'
    | 'tt-ru'
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
    | 'vi'
    | 'vi-vn'
    | 'vo'
    | 'vo-001'
    | 'vun'
    | 'vun-tz'
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
    | 'yue'
    | 'yue-cn'
    | 'yue-hk'
    | 'zgh'
    | 'zgh-ma'
    | 'zh'
    | 'zh-cn'
    | 'zh-hk'
    | 'zh-mo'
    | 'zh-sg'
    | 'zh-tw'
    | 'zh-hans'
    | 'zh-hant'
    | 'zu'
    | 'zu-za';

  layoutSections: { [key: string]: CmsAPI.LayoutSection };

  /**
   * Optional override to set the URL to be used in the rel=canonical link tag on the
   * page.
   */
  linkRelCanonicalUrl: string;

  /**
   * The ID of the MAB test (or dynamic test) associated with this page, if
   * applicable
   */
  mabExperimentId: string;

  /**
   * A description that goes in <meta> tag on the page.
   */
  metaDescription: string;

  /**
   * The internal name of the page.
   */
  name: string;

  /**
   * The date at which this page should expire and begin redirecting to another url
   * or page.
   */
  pageExpiryDate: number;

  /**
   * Boolean describing if the page expiration feature is enabled for this page
   */
  pageExpiryEnabled: boolean;

  /**
   * The ID of another page this page's url should redirect to once this page
   * expires. Should only set this or pageExpiryRedirectUrl.
   */
  pageExpiryRedirectId: number;

  /**
   * The URL this page's url should redirect to once this page expires. Should only
   * set this or pageExpiryRedirectId.
   */
  pageExpiryRedirectUrl: string;

  /**
   * A generated Boolean describing whether or not this page is currently expired and
   * being redirected.
   */
  pageRedirected: boolean;

  /**
   * Set this to create a password protected page. Entering the password will be
   * required to view the page.
   */
  password: string;

  /**
   * Rules for require member registration to access private content.
   */
  publicAccessRules: Array<CmsAPI.PublicAccessRule>;

  /**
   * Boolean to determine whether or not to respect publicAccessRules.
   */
  publicAccessRulesEnabled: boolean;

  /**
   * The date (ISO8601 format) the page is to be published at.
   */
  publishDate: string;

  /**
   * Set this to true if you want to be published immediately when the schedule
   * publish endpoint is called, and to ignore the publish_date setting.
   */
  publishImmediately: boolean;

  /**
   * The path of the this page. This field is appended to the domain to construct the
   * url of this page.
   */
  slug: string;

  /**
   * An ENUM descibing the current state of this page.
   */
  state: string;

  /**
   * Details the type of page this is. Should always be landing_page or site_page
   */
  subcategory: string;

  /**
   * String detailing the path of the template used for this page.
   */
  templatePath: string;

  themeSettingsValues: { [key: string]: unknown };

  /**
   * ID of the primary page this object was translated from.
   */
  translatedFromId: string;

  translations: { [key: string]: PagesContentLanguageVariation };

  updated: string;

  /**
   * The ID of the user that updated this page.
   */
  updatedById: string;

  /**
   * A generated field representing the URL of this page.
   */
  url: string;

  /**
   * Boolean to determine if this page should use a featuredImage.
   */
  useFeaturedImage: boolean;

  /**
   * A data structure containing the data for all the modules inside the containers
   * for this page. This will only be populated if the page has widget containers.
   */
  widgetContainers: { [key: string]: unknown };

  /**
   * A data structure containing the data for all the modules for this page.
   */
  widgets: { [key: string]: unknown };
}

export interface PagesContentLanguageVariation {
  id: number;

  archivedInDashboard: boolean;

  authorName: string;

  campaign: string;

  created: string;

  name: string;

  password: string;

  publicAccessRules: Array<CmsAPI.PublicAccessRule>;

  publicAccessRulesEnabled: boolean;

  publishDate: string;

  slug: string;

  state: string;

  updated: string;

  tagIds?: Array<number>;
}

/**
 * Model definition for a content folder version. Contains metadata describing the
 * version of the folder. It can be used to view edit history of a folder.
 */
export interface VersionContentFolder {
  /**
   * ID of this folder version.
   */
  id: string;

  /**
   * Model definition for a content folder.
   */
  object: ContentFolder;

  updatedAt: string;

  /**
   * Model definition for a version user. Contains addition information about the
   * user who created a version.
   */
  user: Shared.VersionUser;
}

/**
 * Model definition for a landing page or site page version. Contains metadata
 * describing the version of the page. It can be used to view edit history of a
 * page.
 */
export interface VersionPage {
  /**
   * ID of this page version.
   */
  id: string;

  /**
   * Model definition for a landing page or site page.
   */
  object: Page;

  updatedAt: string;

  /**
   * Model definition for a version user. Contains addition information about the
   * user who created a version.
   */
  user: Shared.VersionUser;
}

Pages.LandingPages = LandingPages;
Pages.SitePages = SitePages;

export declare namespace Pages {
  export {
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
    type Page as Page,
    type PagesContentLanguageVariation as PagesContentLanguageVariation,
    type VersionContentFolder as VersionContentFolder,
    type VersionPage as VersionPage,
  };

  export {
    LandingPages as LandingPages,
    type LandingPageCreateParams as LandingPageCreateParams,
    type LandingPageUpdateParams as LandingPageUpdateParams,
    type LandingPageListParams as LandingPageListParams,
    type LandingPageDeleteParams as LandingPageDeleteParams,
    type LandingPageAttachToLangGroupParams as LandingPageAttachToLangGroupParams,
    type LandingPageCloneParams as LandingPageCloneParams,
    type LandingPageCreateAbTestVariationParams as LandingPageCreateAbTestVariationParams,
    type LandingPageCreateBatchParams as LandingPageCreateBatchParams,
    type LandingPageCreateFolderParams as LandingPageCreateFolderParams,
    type LandingPageCreateFoldersBatchParams as LandingPageCreateFoldersBatchParams,
    type LandingPageCreateLanguageVariationParams as LandingPageCreateLanguageVariationParams,
    type LandingPageDeleteBatchParams as LandingPageDeleteBatchParams,
    type LandingPageDeleteFolderParams as LandingPageDeleteFolderParams,
    type LandingPageDeleteFoldersBatchParams as LandingPageDeleteFoldersBatchParams,
    type LandingPageDetachFromLangGroupParams as LandingPageDetachFromLangGroupParams,
    type LandingPageEndAbTestParams as LandingPageEndAbTestParams,
    type LandingPageGetParams as LandingPageGetParams,
    type LandingPageGetBatchParams as LandingPageGetBatchParams,
    type LandingPageGetFolderParams as LandingPageGetFolderParams,
    type LandingPageGetFolderRevisionParams as LandingPageGetFolderRevisionParams,
    type LandingPageGetFoldersBatchParams as LandingPageGetFoldersBatchParams,
    type LandingPageGetRevisionParams as LandingPageGetRevisionParams,
    type LandingPageListFolderRevisionsParams as LandingPageListFolderRevisionsParams,
    type LandingPageListFoldersParams as LandingPageListFoldersParams,
    type LandingPageListRevisionsParams as LandingPageListRevisionsParams,
    type LandingPageRerunAbTestParams as LandingPageRerunAbTestParams,
    type LandingPageRestoreFolderRevisionParams as LandingPageRestoreFolderRevisionParams,
    type LandingPageRestoreRevisionParams as LandingPageRestoreRevisionParams,
    type LandingPageRestoreRevisionToDraftParams as LandingPageRestoreRevisionToDraftParams,
    type LandingPageScheduleParams as LandingPageScheduleParams,
    type LandingPageSetNewLangPrimaryParams as LandingPageSetNewLangPrimaryParams,
    type LandingPageUpdateBatchParams as LandingPageUpdateBatchParams,
    type LandingPageUpdateDraftParams as LandingPageUpdateDraftParams,
    type LandingPageUpdateFolderParams as LandingPageUpdateFolderParams,
    type LandingPageUpdateFoldersBatchParams as LandingPageUpdateFoldersBatchParams,
    type LandingPageUpdateLanguagesParams as LandingPageUpdateLanguagesParams,
  };

  export {
    SitePages as SitePages,
    type SitePageCreateParams as SitePageCreateParams,
    type SitePageUpdateParams as SitePageUpdateParams,
    type SitePageListParams as SitePageListParams,
    type SitePageDeleteParams as SitePageDeleteParams,
    type SitePageAttachToLangGroupParams as SitePageAttachToLangGroupParams,
    type SitePageCloneParams as SitePageCloneParams,
    type SitePageCreateAbTestVariationParams as SitePageCreateAbTestVariationParams,
    type SitePageCreateBatchParams as SitePageCreateBatchParams,
    type SitePageCreateLanguageVariationParams as SitePageCreateLanguageVariationParams,
    type SitePageDeleteBatchParams as SitePageDeleteBatchParams,
    type SitePageDetachFromLangGroupParams as SitePageDetachFromLangGroupParams,
    type SitePageEndAbTestParams as SitePageEndAbTestParams,
    type SitePageGetParams as SitePageGetParams,
    type SitePageGetBatchParams as SitePageGetBatchParams,
    type SitePageGetRevisionParams as SitePageGetRevisionParams,
    type SitePageListRevisionsParams as SitePageListRevisionsParams,
    type SitePageRerunAbTestParams as SitePageRerunAbTestParams,
    type SitePageRestoreRevisionParams as SitePageRestoreRevisionParams,
    type SitePageRestoreRevisionToDraftParams as SitePageRestoreRevisionToDraftParams,
    type SitePageScheduleParams as SitePageScheduleParams,
    type SitePageSetNewLangPrimaryParams as SitePageSetNewLangPrimaryParams,
    type SitePageUpdateBatchParams as SitePageUpdateBatchParams,
    type SitePageUpdateDraftParams as SitePageUpdateDraftParams,
    type SitePageUpdateLanguagesParams as SitePageUpdateLanguagesParams,
  };
}
