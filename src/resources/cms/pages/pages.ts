// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CmsAPI from '../cms';
import * as LandingPagesAPI from './landing-pages/landing-pages';
import {
  BaseLandingPages,
  LandingPageCloneParams,
  LandingPageCreateParams,
  LandingPageDeleteParams,
  LandingPageGetParams,
  LandingPageListParams,
  LandingPageScheduleParams,
  LandingPageUpdateParams,
  LandingPages,
} from './landing-pages/landing-pages';
import * as SitePagesAPI from './site-pages/site-pages';
import {
  BaseSitePages,
  SitePageCloneParams,
  SitePageCreateParams,
  SitePageDeleteParams,
  SitePageGetParams,
  SitePageListParams,
  SitePageScheduleParams,
  SitePageUpdateParams,
  SitePages,
} from './site-pages/site-pages';
import { Page } from '../../../core/pagination';

export class BasePages extends APIResource {
  static override readonly _key: readonly ['cms', 'pages'] = Object.freeze(['cms', 'pages'] as const);
}
export class Pages extends BasePages {
  landingPages: LandingPagesAPI.LandingPages = new LandingPagesAPI.LandingPages(this._client);
  sitePages: SitePagesAPI.SitePages = new SitePagesAPI.SitePages(this._client);
}

export type PagesPagesPage = Page<PagesPage>;

export type ContentFoldersPage = Page<ContentFolder>;

export type ContentFolderVersionsPage = Page<ContentFolderVersion>;

export type PageVersionsPage = Page<PageVersion>;

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

export interface BatchInputContentFolder {
  /**
   * Content folders to input.
   */
  inputs: Array<ContentFolder>;
}

export interface BatchInputPage {
  /**
   * Pages to input.
   */
  inputs: Array<PagesPage>;
}

export interface BatchResponseContentFolder {
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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * Links associated with batch operation.
   */
  links?: { [key: string]: string };

  /**
   * Time of batch operation request.
   */
  requestedAt?: string;
}

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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

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

export interface BatchResponsePage {
  /**
   * Time of batch operation completion.
   */
  completedAt: string;

  /**
   * Results of batch operation.
   */
  results: Array<PagesPage>;

  /**
   * Time of batch operation start.
   */
  startedAt: string;

  /**
   * Status of batch operation.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * Links associated with batch operation.
   */
  links?: { [key: string]: string };

  /**
   * Time of batch operation request.
   */
  requestedAt?: string;
}

export interface BatchResponsePageWithErrors {
  /**
   * Time of batch operation completion.
   */
  completedAt: string;

  /**
   * Results of batch operation.
   */
  results: Array<PagesPage>;

  /**
   * Time of batch operation start.
   */
  startedAt: string;

  /**
   * Status of batch operation.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

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

export interface CollectionResponseWithTotalContentFolderVersion {
  results: Array<ContentFolderVersion>;

  total: number;

  paging?: Shared.Paging;
}

export interface CollectionResponseWithTotalPageForwardPaging {
  /**
   * Collection of pages.
   */
  results: Array<PagesPage>;

  /**
   * Total number of pages.
   */
  total: number;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalPageVersion {
  results: Array<PageVersion>;

  total: number;

  paging?: Shared.Paging;
}

export interface ContentFolder {
  /**
   * The unique ID of the content folder.
   */
  id: string;

  /**
   * The type of object this folder applies to. Should always be LANDING_PAGE.
   */
  category: number;

  /**
   * The timestamp indicating when the content folder was created.
   */
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

  /**
   * The timestamp indicating when the content folder was last updated.
   */
  updated: string;
}

export interface ContentFolderVersion {
  id: string;

  object: ContentFolder;

  updatedAt: string;

  user: Shared.VersionUser;
}

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

  usePublished?: boolean;
}

export interface PageVersion {
  id: string;

  object: PagesPage;

  updatedAt: string;

  user: Shared.VersionUser;
}

export interface PagesPage {
  /**
   * The unique ID of the page.
   */
  id: string;

  /**
   * The status of the AB test associated with this page, if applicable
   */
  abStatus:
    | 'automated_loser_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'master'
    | 'variant';

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

  /**
   * The unique identifier for the content group associated with the page.
   */
  contentGroupId: string;

  /**
   * An ENUM descibing the type of this object. Should be either LANDING_PAGE or
   * SITE_PAGE.
   */
  contentTypeCategory:
    | '0'
    | '1'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '2'
    | '20'
    | '21'
    | '22'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9';

  /**
   * The timestamp indicating when the page was created.
   */
  created: string;

  /**
   * The ID of the user that created this page.
   */
  createdById: string;

  /**
   * Indicates whether the page is currently published.
   */
  currentlyPublished: boolean;

  /**
   * A generated ENUM descibing the current state of this page.
   */
  currentState:
    | 'AGENT_GENERATED'
    | 'AUTOMATED'
    | 'AUTOMATED_AB'
    | 'AUTOMATED_AB_VARIANT'
    | 'AUTOMATED_DRAFT'
    | 'AUTOMATED_DRAFT_AB'
    | 'AUTOMATED_DRAFT_ABVARIANT'
    | 'AUTOMATED_FOR_FORM'
    | 'AUTOMATED_FOR_FORM_BUFFER'
    | 'AUTOMATED_FOR_FORM_DRAFT'
    | 'AUTOMATED_FOR_FORM_LEGACY'
    | 'AUTOMATED_LOSER_ABVARIANT'
    | 'AUTOMATED_SENDING'
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
    | 'SCHEDULED_OR_PUBLISHED';

  /**
   * The domain this page will resolve to. If null, the page will default to the
   * primary domain for this content type.
   */
  domain: string;

  /**
   * The identifier for the data source used by the dynamic page.
   */
  dynamicPageDataSourceId: string;

  /**
   * The type of data source used by the dynamic page.
   */
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
    | 'bal'
    | 'bal-pk'
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
    | 'blo'
    | 'blo-bj'
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
    | 'csw'
    | 'csw-ca'
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
    | 'en-cz'
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
    | 'en-gs'
    | 'en-gu'
    | 'en-gy'
    | 'en-hk'
    | 'en-hu'
    | 'en-id'
    | 'en-ie'
    | 'en-il'
    | 'en-im'
    | 'en-in'
    | 'en-io'
    | 'en-it'
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
    | 'en-no'
    | 'en-nr'
    | 'en-nu'
    | 'en-nz'
    | 'en-pg'
    | 'en-ph'
    | 'en-pk'
    | 'en-pl'
    | 'en-pn'
    | 'en-pr'
    | 'en-pt'
    | 'en-pw'
    | 'en-ro'
    | 'en-rw'
    | 'en-sb'
    | 'en-sc'
    | 'en-sd'
    | 'en-se'
    | 'en-sg'
    | 'en-sh'
    | 'en-si'
    | 'en-sk'
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
    | 'gaa'
    | 'gaa-gh'
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
    | 'ht-ht'
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
    | 'ie-ee'
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
    | 'ko-cn'
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
    | 'kxv'
    | 'kxv-in'
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
    | 'lij'
    | 'lij-it'
    | 'lkt'
    | 'lkt-us'
    | 'lmo'
    | 'lmo-it'
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
    | 'nqo'
    | 'nqo-gn'
    | 'nr'
    | 'nso'
    | 'nso-za'
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
    | 'st-ls'
    | 'st-za'
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
    | 'syr'
    | 'syr-iq'
    | 'syr-sy'
    | 'szl'
    | 'szl-pl'
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
    | 'tn-bw'
    | 'tn-za'
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
    | 'vec'
    | 'vec-it'
    | 'vi'
    | 'vi-vn'
    | 'vmw'
    | 'vmw-mz'
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
    | 'xnr'
    | 'xnr-in'
    | 'xog'
    | 'xog-ug'
    | 'yav'
    | 'yav-cm'
    | 'yi'
    | 'yi-001'
    | 'yi-ua'
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
    | 'yue-mo'
    | 'za'
    | 'za-cn'
    | 'zgh'
    | 'zgh-ma'
    | 'zh'
    | 'zh-cn'
    | 'zh-hans'
    | 'zh-hant'
    | 'zh-hk'
    | 'zh-mo'
    | 'zh-my'
    | 'zh-sg'
    | 'zh-tw'
    | 'zu'
    | 'zu-za';

  /**
   * A structure detailing the layout sections of the page.
   */
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

  /**
   * A collection of settings specific to the theme applied to the page.
   */
  themeSettingsValues: { [key: string]: unknown };

  /**
   * ID of the primary page this object was translated from.
   */
  translatedFromId: string;

  /**
   * A map of translations for the page, each associated with a specific language
   * variation.
   */
  translations: { [key: string]: CmsAPI.ContentLanguageVariation };

  /**
   * The timestamp indicating when the page was last updated.
   */
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

Pages.LandingPages = LandingPages;
Pages.BaseLandingPages = BaseLandingPages;
Pages.SitePages = SitePages;
Pages.BaseSitePages = BaseSitePages;

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
    type CollectionResponseWithTotalContentFolderVersion as CollectionResponseWithTotalContentFolderVersion,
    type CollectionResponseWithTotalPageForwardPaging as CollectionResponseWithTotalPageForwardPaging,
    type CollectionResponseWithTotalPageVersion as CollectionResponseWithTotalPageVersion,
    type ContentFolder as ContentFolder,
    type ContentFolderVersion as ContentFolderVersion,
    type ContentLanguageCloneRequestVNext as ContentLanguageCloneRequestVNext,
    type PageVersion as PageVersion,
    type PagesPage as PagesPage,
  };

  export {
    LandingPages as LandingPages,
    BaseLandingPages as BaseLandingPages,
    type LandingPageCreateParams as LandingPageCreateParams,
    type LandingPageUpdateParams as LandingPageUpdateParams,
    type LandingPageListParams as LandingPageListParams,
    type LandingPageDeleteParams as LandingPageDeleteParams,
    type LandingPageCloneParams as LandingPageCloneParams,
    type LandingPageGetParams as LandingPageGetParams,
    type LandingPageScheduleParams as LandingPageScheduleParams,
  };

  export {
    SitePages as SitePages,
    BaseSitePages as BaseSitePages,
    type SitePageCreateParams as SitePageCreateParams,
    type SitePageUpdateParams as SitePageUpdateParams,
    type SitePageListParams as SitePageListParams,
    type SitePageDeleteParams as SitePageDeleteParams,
    type SitePageCloneParams as SitePageCloneParams,
    type SitePageGetParams as SitePageGetParams,
    type SitePageScheduleParams as SitePageScheduleParams,
  };
}
