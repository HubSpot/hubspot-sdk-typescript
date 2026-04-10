// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as CmsAPI from '../../cms';
import * as BatchAPI from './batch';
import {
  BaseBatch,
  Batch,
  BatchCreateParams,
  BatchDeleteParams,
  BatchGetParams,
  BatchUpdateParams,
} from './batch';
import * as MultiLanguageAPI from './multi-language';
import {
  BaseMultiLanguage,
  MultiLanguage,
  MultiLanguageAttachToLangGroupParams,
  MultiLanguageCreateLangVariationParams,
  MultiLanguageDetachFromLangGroupParams,
  MultiLanguageSetLangPrimaryParams,
  MultiLanguageUpdateLangsParams,
} from './multi-language';
import * as RevisionsAPI from './revisions';
import {
  BaseRevisions,
  RevisionGetPreviousVersionParams,
  RevisionGetPreviousVersionsParams,
  RevisionRestorePreviousVersionParams,
  RevisionRestorePreviousVersionToDraftParams,
  Revisions,
} from './revisions';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BasePosts extends APIResource {
  static override readonly _key: readonly ['cms', 'blogs', 'posts'] = Object.freeze([
    'cms',
    'blogs',
    'posts',
  ] as const);

  /**
   * Create a new blog post, specifying its content in the request body.
   */
  create(body: PostCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/cms/blogs/2026-03/posts', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Partially updates a single blog post by ID. You only need to specify the values
   * that you want to update.
   */
  update(objectID: string, params: PostUpdateParams, options?: RequestOptions): APIPromise<Response> {
    const { archived, ...body } = params;
    return this._client.patch(path`/cms/blogs/2026-03/posts/${objectID}`, {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  list(query: PostListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/cms/blogs/2026-03/posts/cursor', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Delete a blog post by ID.
   */
  delete(
    objectID: string,
    params: PostDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/cms/blogs/2026-03/posts/${objectID}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Clone a blog post, making a copy of it in a new blog post.
   */
  clone(body: PostCloneParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/cms/blogs/2026-03/posts/clone', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve a blog post by the post ID.
   */
  get(
    objectID: string,
    query: PostGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/cms/blogs/2026-03/posts/${objectID}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the full draft version of a blog post.
   */
  getDraftByID(objectID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/cms/blogs/2026-03/posts/${objectID}/draft`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  listAuthors(
    query: PostListAuthorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/cms/blogs/2026-03/authors/cursor', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  listTags(
    query: PostListTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/cms/blogs/2026-03/tags/cursor', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Publish the draft version of the blog post, sending its content to the live
   * page.
   */
  pushLive(objectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/cms/blogs/2026-03/posts/${objectID}/draft/push-live`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  query(query: PostQueryParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/cms/blogs/2026-03/posts/cursor/query', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  queryAuthors(
    query: PostQueryAuthorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/cms/blogs/2026-03/authors/cursor/query', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  queryTags(
    query: PostQueryTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/cms/blogs/2026-03/tags/cursor/query', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Discard all drafted content, resetting the draft to contain the content in the
   * currently published version.
   */
  resetDraft(objectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/cms/blogs/2026-03/posts/${objectID}/draft/reset`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Schedule a blog post to be published at a specified time.
   */
  schedule(body: PostScheduleParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/blogs/2026-03/posts/schedule', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Partially updates the draft version of a single blog post by ID. You only need
   * to specify the values that you want to update.
   */
  updateDraft(objectID: string, body: PostUpdateDraftParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.patch(path`/cms/blogs/2026-03/posts/${objectID}/draft`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}
export class Posts extends BasePosts {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  multiLanguage: MultiLanguageAPI.MultiLanguage = new MultiLanguageAPI.MultiLanguage(this._client);
  revisions: RevisionsAPI.Revisions = new RevisionsAPI.Revisions(this._client);
}

export interface BatchInputBlogPost {
  /**
   * Blog posts to input.
   */
  inputs: Array<BlogPost>;
}

export interface BatchResponseBlogPost {
  /**
   * Time of batch operation completion.
   */
  completedAt: string;

  /**
   * Results of batch operation.
   */
  results: Array<BlogPost>;

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

export interface BatchResponseBlogPostWithErrors {
  /**
   * Time of batch operation completion.
   */
  completedAt: string;

  /**
   * Results of batch operation.
   */
  results: Array<BlogPost>;

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

export interface BlogPost {
  /**
   * The unique ID of the Blog Post.
   */
  id: string;

  /**
   * The status of the AB test associated with this blog post, if applicable
   *
   * Available options: automated_loser_variant, automated_master, automated_variant,
   * loser_variant, mab_master, mab_variant, master, variant
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
   * The timestamp (ISO8601 format) when this Blog Post was deleted.
   */
  archivedAt: number;

  /**
   * If True, the post will not show up in your dashboard, although the post could
   * still be live.
   */
  archivedInDashboard: boolean;

  /**
   * List of stylesheets to attach to this blog post. These stylesheets are attached
   * to just this page. Order of precedence is bottom to top, just like in the HTML.
   */
  attachedStylesheets: Array<{ [key: string]: unknown }>;

  /**
   * The name of the user that updated this Blog Post.
   */
  authorName: string;

  /**
   * The ID of the Blog Author associated with this Blog Post.
   */
  blogAuthorId: string;

  /**
   * The GUID of the marketing campaign this Blog Post is a part of.
   */
  campaign: string;

  /**
   * ID of the type of object this is. Should always .
   */
  categoryId: number;

  /**
   * The ID of the parent Blog this Blog Post is associated with.
   */
  contentGroupId: string;

  /**
   * An ENUM descibing the type of this object. Should always be BLOG_POST.
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
   * The timestamp (ISO8601 format) when this Blog Post was created.
   */
  created: string;

  /**
   * The ID of the user that created this Blog Post.
   */
  createdById: string;

  /**
   * Whether the post is published (true or false)
   */
  currentlyPublished: boolean;

  /**
   * A generated ENUM descibing the current state of this Blog Post. Should always
   * match state.
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
   * The domain this Blog Post will resolve to. If null, the Blog Post will default
   * to the domain of the ParentBlog.
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
   * The ID of the HubDB table this Blog Post references, if applicable
   */
  dynamicPageHubDbTableId: string;

  /**
   * Boolean to determine whether or not the styles from the template should be
   * applied.
   */
  enableDomainStylesheets: boolean;

  /**
   * Boolean to allow overriding the AMP settings for the blog.
   */
  enableGoogleAmpOutputOverride: boolean;

  /**
   * Boolean to determine whether or not the styles from the template should be
   * applied.
   */
  enableLayoutStylesheets: boolean;

  /**
   * The featuredImage of this Blog Post.
   */
  featuredImage: string;

  /**
   * Alt Text of the featuredImage.
   */
  featuredImageAltText: string;

  /**
   * Unique identifier of associated folder
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
   * The html title of this Blog Post.
   */
  htmlTitle: string;

  /**
   * Boolean to determine whether or not the Primary CSS Files should be applied.
   */
  includeDefaultCustomCss: boolean;

  /**
   * The explicitly defined ISO 639 language code of the Blog Post. If null, the Blog
   * Post will default to the language of the ParentBlog.
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
   * A structure detailing the layout sections of the blog post.
   */
  layoutSections: { [key: string]: CmsAPI.LayoutSection };

  /**
   * Optional override to set the URL to be used in the rel=canonical link tag on the
   * page.
   */
  linkRelCanonicalUrl: string;

  /**
   * Unique identifier of the MAB Experiment
   */
  mabExperimentId: string;

  /**
   * A description that goes in <meta> tag on the page.
   */
  metaDescription: string;

  /**
   * The internal name of the Blog Post.
   */
  name: string;

  /**
   * The date at which this blog post should expire and begin redirecting to another
   * url or page.
   */
  pageExpiryDate: number;

  /**
   * Boolean describing if the page expiration feature is enabled for this blog post.
   */
  pageExpiryEnabled: boolean;

  /**
   * The ID of another page this blog post's url should redirect to once this blog
   * post expires. Should only set this or pageExpiryRedirectUrl.
   */
  pageExpiryRedirectId: number;

  /**
   * The URL this blog post's url should redirect to once it expires. Should only set
   * this or pageExpiryRedirectId.
   */
  pageExpiryRedirectUrl: string;

  /**
   * Set this to create a password protected page. Entering the password will be
   * required to view the page.
   */
  password: string;

  /**
   * The HTML of the main post body.
   */
  postBody: string;

  /**
   * The summary of the blog post that will appear on the main listing page.
   */
  postSummary: string;

  /**
   * Rules for require member registration to access private content.
   */
  publicAccessRules: Array<CmsAPI.PublicAccessRule>;

  /**
   * Boolean to determine whether or not to respect publicAccessRules.
   */
  publicAccessRulesEnabled: boolean;

  /**
   * The date (ISO8601 format) the blog post is to be published at.
   */
  publishDate: string;

  /**
   * Set this to true if you want to be published immediately when the schedule
   * publish endpoint is called, and to ignore the publish_date setting.
   */
  publishImmediately: boolean;

  /**
   * The contents of the RSS body for this Blog Post.
   */
  rssBody: string;

  /**
   * The contents of the RSS summary for this Blog Post.
   */
  rssSummary: string;

  /**
   * The path of the this blog post. This field is appended to the domain to
   * construct the url of this post.
   */
  slug: string;

  /**
   * An ENUM descibing the current state of this Blog Post.
   */
  state: string;

  /**
   * List of IDs for the tags associated with this Blog Post.
   */
  tagIds: Array<number>;

  /**
   * A collection of settings specific to the theme applied to the blog post.
   */
  themeSettingsValues: { [key: string]: unknown };

  /**
   * ID of the primary blog post this object was translated from.
   */
  translatedFromId: string;

  /**
   * A map of translations for the blog post, each associated with a specific
   * language variation.
   */
  translations: { [key: string]: CmsAPI.ContentLanguageVariation };

  /**
   * The timestamp (ISO8601 format) when this Blog Post was updated.
   */
  updated: string;

  /**
   * The ID of the user that updated this Blog Post.
   */
  updatedById: string;

  /**
   * A generated field representing the URL of this blog post.
   */
  url: string;

  /**
   * Boolean to determine if this post should use a featuredImage.
   */
  useFeaturedImage: boolean;

  /**
   * A data structure containing the data for all the modules inside the containers
   * for this post. This will only be populated if the page has widget containers.
   */
  widgetContainers: { [key: string]: unknown };

  /**
   * A data structure containing the data for all the modules for this page.
   */
  widgets: { [key: string]: unknown };
}

export interface BlogPostLanguageCloneRequestVNext {
  /**
   * ID of blog post to clone.
   */
  id: string;

  /**
   * Target language of new variant.
   */
  language?: string;
}

export interface BlogPostVersion {
  id: string;

  object: BlogPost;

  updatedAt: string;

  user: Shared.VersionUser;
}

export interface CollectionResponseWithTotalBlogPostForwardPaging {
  /**
   * Collection of blog posts.
   */
  results: Array<BlogPost>;

  /**
   * Total number of blog posts.
   */
  total: number;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalBlogPostVersion {
  results: Array<VersionBlogPost>;

  total: number;

  paging?: Shared.Paging;
}

export interface VersionBlogPost {
  /**
   * The id of the version.
   */
  id: string;

  object: BlogPost;

  /**
   * The timestamp (ISO8601 format) when this version of the Blog Post was updated.
   */
  updatedAt: string;

  user: Shared.VersionUser;
}

export interface PostCreateParams {
  /**
   * The unique ID of the Blog Post.
   */
  id: string;

  /**
   * The status of the AB test associated with this blog post, if applicable
   *
   * Available options: automated_loser_variant, automated_master, automated_variant,
   * loser_variant, mab_master, mab_variant, master, variant
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
   * The timestamp (ISO8601 format) when this Blog Post was deleted.
   */
  archivedAt: number;

  /**
   * If True, the post will not show up in your dashboard, although the post could
   * still be live.
   */
  archivedInDashboard: boolean;

  /**
   * List of stylesheets to attach to this blog post. These stylesheets are attached
   * to just this page. Order of precedence is bottom to top, just like in the HTML.
   */
  attachedStylesheets: Array<{ [key: string]: unknown }>;

  /**
   * The name of the user that updated this Blog Post.
   */
  authorName: string;

  /**
   * The ID of the Blog Author associated with this Blog Post.
   */
  blogAuthorId: string;

  /**
   * The GUID of the marketing campaign this Blog Post is a part of.
   */
  campaign: string;

  /**
   * ID of the type of object this is. Should always .
   */
  categoryId: number;

  /**
   * The ID of the parent Blog this Blog Post is associated with.
   */
  contentGroupId: string;

  /**
   * An ENUM descibing the type of this object. Should always be BLOG_POST.
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
   * The timestamp (ISO8601 format) when this Blog Post was created.
   */
  created: string;

  /**
   * The ID of the user that created this Blog Post.
   */
  createdById: string;

  /**
   * Whether the post is published (true or false)
   */
  currentlyPublished: boolean;

  /**
   * A generated ENUM descibing the current state of this Blog Post. Should always
   * match state.
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
   * The domain this Blog Post will resolve to. If null, the Blog Post will default
   * to the domain of the ParentBlog.
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
   * The ID of the HubDB table this Blog Post references, if applicable
   */
  dynamicPageHubDbTableId: string;

  /**
   * Boolean to determine whether or not the styles from the template should be
   * applied.
   */
  enableDomainStylesheets: boolean;

  /**
   * Boolean to allow overriding the AMP settings for the blog.
   */
  enableGoogleAmpOutputOverride: boolean;

  /**
   * Boolean to determine whether or not the styles from the template should be
   * applied.
   */
  enableLayoutStylesheets: boolean;

  /**
   * The featuredImage of this Blog Post.
   */
  featuredImage: string;

  /**
   * Alt Text of the featuredImage.
   */
  featuredImageAltText: string;

  /**
   * Unique identifier of associated folder
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
   * The html title of this Blog Post.
   */
  htmlTitle: string;

  /**
   * Boolean to determine whether or not the Primary CSS Files should be applied.
   */
  includeDefaultCustomCss: boolean;

  /**
   * The explicitly defined ISO 639 language code of the Blog Post. If null, the Blog
   * Post will default to the language of the ParentBlog.
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
   * A structure detailing the layout sections of the blog post.
   */
  layoutSections: { [key: string]: CmsAPI.LayoutSection };

  /**
   * Optional override to set the URL to be used in the rel=canonical link tag on the
   * page.
   */
  linkRelCanonicalUrl: string;

  /**
   * Unique identifier of the MAB Experiment
   */
  mabExperimentId: string;

  /**
   * A description that goes in <meta> tag on the page.
   */
  metaDescription: string;

  /**
   * The internal name of the Blog Post.
   */
  name: string;

  /**
   * The date at which this blog post should expire and begin redirecting to another
   * url or page.
   */
  pageExpiryDate: number;

  /**
   * Boolean describing if the page expiration feature is enabled for this blog post.
   */
  pageExpiryEnabled: boolean;

  /**
   * The ID of another page this blog post's url should redirect to once this blog
   * post expires. Should only set this or pageExpiryRedirectUrl.
   */
  pageExpiryRedirectId: number;

  /**
   * The URL this blog post's url should redirect to once it expires. Should only set
   * this or pageExpiryRedirectId.
   */
  pageExpiryRedirectUrl: string;

  /**
   * Set this to create a password protected page. Entering the password will be
   * required to view the page.
   */
  password: string;

  /**
   * The HTML of the main post body.
   */
  postBody: string;

  /**
   * The summary of the blog post that will appear on the main listing page.
   */
  postSummary: string;

  /**
   * Rules for require member registration to access private content.
   */
  publicAccessRules: Array<CmsAPI.PublicAccessRule>;

  /**
   * Boolean to determine whether or not to respect publicAccessRules.
   */
  publicAccessRulesEnabled: boolean;

  /**
   * The date (ISO8601 format) the blog post is to be published at.
   */
  publishDate: string;

  /**
   * Set this to true if you want to be published immediately when the schedule
   * publish endpoint is called, and to ignore the publish_date setting.
   */
  publishImmediately: boolean;

  /**
   * The contents of the RSS body for this Blog Post.
   */
  rssBody: string;

  /**
   * The contents of the RSS summary for this Blog Post.
   */
  rssSummary: string;

  /**
   * The path of the this blog post. This field is appended to the domain to
   * construct the url of this post.
   */
  slug: string;

  /**
   * An ENUM descibing the current state of this Blog Post.
   */
  state: string;

  /**
   * List of IDs for the tags associated with this Blog Post.
   */
  tagIds: Array<number>;

  /**
   * A collection of settings specific to the theme applied to the blog post.
   */
  themeSettingsValues: { [key: string]: unknown };

  /**
   * ID of the primary blog post this object was translated from.
   */
  translatedFromId: string;

  /**
   * A map of translations for the blog post, each associated with a specific
   * language variation.
   */
  translations: { [key: string]: CmsAPI.ContentLanguageVariation };

  /**
   * The timestamp (ISO8601 format) when this Blog Post was updated.
   */
  updated: string;

  /**
   * The ID of the user that updated this Blog Post.
   */
  updatedById: string;

  /**
   * A generated field representing the URL of this blog post.
   */
  url: string;

  /**
   * Boolean to determine if this post should use a featuredImage.
   */
  useFeaturedImage: boolean;

  /**
   * A data structure containing the data for all the modules inside the containers
   * for this post. This will only be populated if the page has widget containers.
   */
  widgetContainers: { [key: string]: unknown };

  /**
   * A data structure containing the data for all the modules for this page.
   */
  widgets: { [key: string]: unknown };
}

export interface PostUpdateParams {
  /**
   * Body param: The unique ID of the Blog Post.
   */
  id: string;

  /**
   * Body param: The status of the AB test associated with this blog post, if
   * applicable
   *
   * Available options: automated_loser_variant, automated_master, automated_variant,
   * loser_variant, mab_master, mab_variant, master, variant
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
   * Body param: The ID of the AB test associated with this page, if applicable
   */
  abTestId: string;

  /**
   * Body param: The timestamp (ISO8601 format) when this Blog Post was deleted.
   */
  archivedAt: number;

  /**
   * Body param: If True, the post will not show up in your dashboard, although the
   * post could still be live.
   */
  archivedInDashboard: boolean;

  /**
   * Body param: List of stylesheets to attach to this blog post. These stylesheets
   * are attached to just this page. Order of precedence is bottom to top, just like
   * in the HTML.
   */
  attachedStylesheets: Array<{ [key: string]: unknown }>;

  /**
   * Body param: The name of the user that updated this Blog Post.
   */
  authorName: string;

  /**
   * Body param: The ID of the Blog Author associated with this Blog Post.
   */
  blogAuthorId: string;

  /**
   * Body param: The GUID of the marketing campaign this Blog Post is a part of.
   */
  campaign: string;

  /**
   * Body param: ID of the type of object this is. Should always .
   */
  categoryId: number;

  /**
   * Body param: The ID of the parent Blog this Blog Post is associated with.
   */
  contentGroupId: string;

  /**
   * Body param: An ENUM descibing the type of this object. Should always be
   * BLOG_POST.
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
   * Body param: The timestamp (ISO8601 format) when this Blog Post was created.
   */
  created: string;

  /**
   * Body param: The ID of the user that created this Blog Post.
   */
  createdById: string;

  /**
   * Body param: Whether the post is published (true or false)
   */
  currentlyPublished: boolean;

  /**
   * Body param: A generated ENUM descibing the current state of this Blog Post.
   * Should always match state.
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
   * Body param: The domain this Blog Post will resolve to. If null, the Blog Post
   * will default to the domain of the ParentBlog.
   */
  domain: string;

  /**
   * Body param: The identifier for the data source used by the dynamic page.
   */
  dynamicPageDataSourceId: string;

  /**
   * Body param: The type of data source used by the dynamic page.
   */
  dynamicPageDataSourceType: number;

  /**
   * Body param: The ID of the HubDB table this Blog Post references, if applicable
   */
  dynamicPageHubDbTableId: string;

  /**
   * Body param: Boolean to determine whether or not the styles from the template
   * should be applied.
   */
  enableDomainStylesheets: boolean;

  /**
   * Body param: Boolean to allow overriding the AMP settings for the blog.
   */
  enableGoogleAmpOutputOverride: boolean;

  /**
   * Body param: Boolean to determine whether or not the styles from the template
   * should be applied.
   */
  enableLayoutStylesheets: boolean;

  /**
   * Body param: The featuredImage of this Blog Post.
   */
  featuredImage: string;

  /**
   * Body param: Alt Text of the featuredImage.
   */
  featuredImageAltText: string;

  /**
   * Body param: Unique identifier of associated folder
   */
  folderId: string;

  /**
   * Body param: Custom HTML for embed codes, javascript that should be placed before
   * the </body> tag of the page.
   */
  footerHtml: string;

  /**
   * Body param: Custom HTML for embed codes, javascript, etc. that goes in the
   * <head> tag of the page.
   */
  headHtml: string;

  /**
   * Body param: The html title of this Blog Post.
   */
  htmlTitle: string;

  /**
   * Body param: Boolean to determine whether or not the Primary CSS Files should be
   * applied.
   */
  includeDefaultCustomCss: boolean;

  /**
   * Body param: The explicitly defined ISO 639 language code of the Blog Post. If
   * null, the Blog Post will default to the language of the ParentBlog.
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
   * Body param: A structure detailing the layout sections of the blog post.
   */
  layoutSections: { [key: string]: CmsAPI.LayoutSection };

  /**
   * Body param: Optional override to set the URL to be used in the rel=canonical
   * link tag on the page.
   */
  linkRelCanonicalUrl: string;

  /**
   * Body param: Unique identifier of the MAB Experiment
   */
  mabExperimentId: string;

  /**
   * Body param: A description that goes in <meta> tag on the page.
   */
  metaDescription: string;

  /**
   * Body param: The internal name of the Blog Post.
   */
  name: string;

  /**
   * Body param: The date at which this blog post should expire and begin redirecting
   * to another url or page.
   */
  pageExpiryDate: number;

  /**
   * Body param: Boolean describing if the page expiration feature is enabled for
   * this blog post.
   */
  pageExpiryEnabled: boolean;

  /**
   * Body param: The ID of another page this blog post's url should redirect to once
   * this blog post expires. Should only set this or pageExpiryRedirectUrl.
   */
  pageExpiryRedirectId: number;

  /**
   * Body param: The URL this blog post's url should redirect to once it expires.
   * Should only set this or pageExpiryRedirectId.
   */
  pageExpiryRedirectUrl: string;

  /**
   * Body param: Set this to create a password protected page. Entering the password
   * will be required to view the page.
   */
  password: string;

  /**
   * Body param: The HTML of the main post body.
   */
  postBody: string;

  /**
   * Body param: The summary of the blog post that will appear on the main listing
   * page.
   */
  postSummary: string;

  /**
   * Body param: Rules for require member registration to access private content.
   */
  publicAccessRules: Array<CmsAPI.PublicAccessRule>;

  /**
   * Body param: Boolean to determine whether or not to respect publicAccessRules.
   */
  publicAccessRulesEnabled: boolean;

  /**
   * Body param: The date (ISO8601 format) the blog post is to be published at.
   */
  publishDate: string;

  /**
   * Body param: Set this to true if you want to be published immediately when the
   * schedule publish endpoint is called, and to ignore the publish_date setting.
   */
  publishImmediately: boolean;

  /**
   * Body param: The contents of the RSS body for this Blog Post.
   */
  rssBody: string;

  /**
   * Body param: The contents of the RSS summary for this Blog Post.
   */
  rssSummary: string;

  /**
   * Body param: The path of the this blog post. This field is appended to the domain
   * to construct the url of this post.
   */
  slug: string;

  /**
   * Body param: An ENUM descibing the current state of this Blog Post.
   */
  state: string;

  /**
   * Body param: List of IDs for the tags associated with this Blog Post.
   */
  tagIds: Array<number>;

  /**
   * Body param: A collection of settings specific to the theme applied to the blog
   * post.
   */
  themeSettingsValues: { [key: string]: unknown };

  /**
   * Body param: ID of the primary blog post this object was translated from.
   */
  translatedFromId: string;

  /**
   * Body param: A map of translations for the blog post, each associated with a
   * specific language variation.
   */
  translations: { [key: string]: CmsAPI.ContentLanguageVariation };

  /**
   * Body param: The timestamp (ISO8601 format) when this Blog Post was updated.
   */
  updated: string;

  /**
   * Body param: The ID of the user that updated this Blog Post.
   */
  updatedById: string;

  /**
   * Body param: A generated field representing the URL of this blog post.
   */
  url: string;

  /**
   * Body param: Boolean to determine if this post should use a featuredImage.
   */
  useFeaturedImage: boolean;

  /**
   * Body param: A data structure containing the data for all the modules inside the
   * containers for this post. This will only be populated if the page has widget
   * containers.
   */
  widgetContainers: { [key: string]: unknown };

  /**
   * Body param: A data structure containing the data for all the modules for this
   * page.
   */
  widgets: { [key: string]: unknown };

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface PostListParams {
  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;

  property?: string;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface PostDeleteParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface PostCloneParams {
  /**
   * ID of the object to be cloned.
   */
  id: string;

  /**
   * Name of the cloned object.
   */
  cloneName?: string;
}

export interface PostGetParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  property?: string;
}

export interface PostListAuthorsParams {
  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;

  property?: string;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface PostListTagsParams {
  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;

  property?: string;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface PostQueryParams {
  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;

  property?: string;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface PostQueryAuthorsParams {
  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;

  property?: string;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface PostQueryTagsParams {
  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;

  property?: string;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface PostScheduleParams {
  /**
   * The ID of the object to be scheduled.
   */
  id: string;

  /**
   * The date the object should transition from scheduled to published.
   */
  publishDate: string;
}

export interface PostUpdateDraftParams {
  /**
   * The unique ID of the Blog Post.
   */
  id: string;

  /**
   * The status of the AB test associated with this blog post, if applicable
   *
   * Available options: automated_loser_variant, automated_master, automated_variant,
   * loser_variant, mab_master, mab_variant, master, variant
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
   * The timestamp (ISO8601 format) when this Blog Post was deleted.
   */
  archivedAt: number;

  /**
   * If True, the post will not show up in your dashboard, although the post could
   * still be live.
   */
  archivedInDashboard: boolean;

  /**
   * List of stylesheets to attach to this blog post. These stylesheets are attached
   * to just this page. Order of precedence is bottom to top, just like in the HTML.
   */
  attachedStylesheets: Array<{ [key: string]: unknown }>;

  /**
   * The name of the user that updated this Blog Post.
   */
  authorName: string;

  /**
   * The ID of the Blog Author associated with this Blog Post.
   */
  blogAuthorId: string;

  /**
   * The GUID of the marketing campaign this Blog Post is a part of.
   */
  campaign: string;

  /**
   * ID of the type of object this is. Should always .
   */
  categoryId: number;

  /**
   * The ID of the parent Blog this Blog Post is associated with.
   */
  contentGroupId: string;

  /**
   * An ENUM descibing the type of this object. Should always be BLOG_POST.
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
   * The timestamp (ISO8601 format) when this Blog Post was created.
   */
  created: string;

  /**
   * The ID of the user that created this Blog Post.
   */
  createdById: string;

  /**
   * Whether the post is published (true or false)
   */
  currentlyPublished: boolean;

  /**
   * A generated ENUM descibing the current state of this Blog Post. Should always
   * match state.
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
   * The domain this Blog Post will resolve to. If null, the Blog Post will default
   * to the domain of the ParentBlog.
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
   * The ID of the HubDB table this Blog Post references, if applicable
   */
  dynamicPageHubDbTableId: string;

  /**
   * Boolean to determine whether or not the styles from the template should be
   * applied.
   */
  enableDomainStylesheets: boolean;

  /**
   * Boolean to allow overriding the AMP settings for the blog.
   */
  enableGoogleAmpOutputOverride: boolean;

  /**
   * Boolean to determine whether or not the styles from the template should be
   * applied.
   */
  enableLayoutStylesheets: boolean;

  /**
   * The featuredImage of this Blog Post.
   */
  featuredImage: string;

  /**
   * Alt Text of the featuredImage.
   */
  featuredImageAltText: string;

  /**
   * Unique identifier of associated folder
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
   * The html title of this Blog Post.
   */
  htmlTitle: string;

  /**
   * Boolean to determine whether or not the Primary CSS Files should be applied.
   */
  includeDefaultCustomCss: boolean;

  /**
   * The explicitly defined ISO 639 language code of the Blog Post. If null, the Blog
   * Post will default to the language of the ParentBlog.
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
   * A structure detailing the layout sections of the blog post.
   */
  layoutSections: { [key: string]: CmsAPI.LayoutSection };

  /**
   * Optional override to set the URL to be used in the rel=canonical link tag on the
   * page.
   */
  linkRelCanonicalUrl: string;

  /**
   * Unique identifier of the MAB Experiment
   */
  mabExperimentId: string;

  /**
   * A description that goes in <meta> tag on the page.
   */
  metaDescription: string;

  /**
   * The internal name of the Blog Post.
   */
  name: string;

  /**
   * The date at which this blog post should expire and begin redirecting to another
   * url or page.
   */
  pageExpiryDate: number;

  /**
   * Boolean describing if the page expiration feature is enabled for this blog post.
   */
  pageExpiryEnabled: boolean;

  /**
   * The ID of another page this blog post's url should redirect to once this blog
   * post expires. Should only set this or pageExpiryRedirectUrl.
   */
  pageExpiryRedirectId: number;

  /**
   * The URL this blog post's url should redirect to once it expires. Should only set
   * this or pageExpiryRedirectId.
   */
  pageExpiryRedirectUrl: string;

  /**
   * Set this to create a password protected page. Entering the password will be
   * required to view the page.
   */
  password: string;

  /**
   * The HTML of the main post body.
   */
  postBody: string;

  /**
   * The summary of the blog post that will appear on the main listing page.
   */
  postSummary: string;

  /**
   * Rules for require member registration to access private content.
   */
  publicAccessRules: Array<CmsAPI.PublicAccessRule>;

  /**
   * Boolean to determine whether or not to respect publicAccessRules.
   */
  publicAccessRulesEnabled: boolean;

  /**
   * The date (ISO8601 format) the blog post is to be published at.
   */
  publishDate: string;

  /**
   * Set this to true if you want to be published immediately when the schedule
   * publish endpoint is called, and to ignore the publish_date setting.
   */
  publishImmediately: boolean;

  /**
   * The contents of the RSS body for this Blog Post.
   */
  rssBody: string;

  /**
   * The contents of the RSS summary for this Blog Post.
   */
  rssSummary: string;

  /**
   * The path of the this blog post. This field is appended to the domain to
   * construct the url of this post.
   */
  slug: string;

  /**
   * An ENUM descibing the current state of this Blog Post.
   */
  state: string;

  /**
   * List of IDs for the tags associated with this Blog Post.
   */
  tagIds: Array<number>;

  /**
   * A collection of settings specific to the theme applied to the blog post.
   */
  themeSettingsValues: { [key: string]: unknown };

  /**
   * ID of the primary blog post this object was translated from.
   */
  translatedFromId: string;

  /**
   * A map of translations for the blog post, each associated with a specific
   * language variation.
   */
  translations: { [key: string]: CmsAPI.ContentLanguageVariation };

  /**
   * The timestamp (ISO8601 format) when this Blog Post was updated.
   */
  updated: string;

  /**
   * The ID of the user that updated this Blog Post.
   */
  updatedById: string;

  /**
   * A generated field representing the URL of this blog post.
   */
  url: string;

  /**
   * Boolean to determine if this post should use a featuredImage.
   */
  useFeaturedImage: boolean;

  /**
   * A data structure containing the data for all the modules inside the containers
   * for this post. This will only be populated if the page has widget containers.
   */
  widgetContainers: { [key: string]: unknown };

  /**
   * A data structure containing the data for all the modules for this page.
   */
  widgets: { [key: string]: unknown };
}

Posts.Batch = Batch;
Posts.BaseBatch = BaseBatch;
Posts.MultiLanguage = MultiLanguage;
Posts.BaseMultiLanguage = BaseMultiLanguage;
Posts.Revisions = Revisions;
Posts.BaseRevisions = BaseRevisions;

export declare namespace Posts {
  export {
    type BatchInputBlogPost as BatchInputBlogPost,
    type BatchResponseBlogPost as BatchResponseBlogPost,
    type BatchResponseBlogPostWithErrors as BatchResponseBlogPostWithErrors,
    type BlogPost as BlogPost,
    type BlogPostLanguageCloneRequestVNext as BlogPostLanguageCloneRequestVNext,
    type BlogPostVersion as BlogPostVersion,
    type CollectionResponseWithTotalBlogPostForwardPaging as CollectionResponseWithTotalBlogPostForwardPaging,
    type CollectionResponseWithTotalBlogPostVersion as CollectionResponseWithTotalBlogPostVersion,
    type VersionBlogPost as VersionBlogPost,
    type PostCreateParams as PostCreateParams,
    type PostUpdateParams as PostUpdateParams,
    type PostListParams as PostListParams,
    type PostDeleteParams as PostDeleteParams,
    type PostCloneParams as PostCloneParams,
    type PostGetParams as PostGetParams,
    type PostListAuthorsParams as PostListAuthorsParams,
    type PostListTagsParams as PostListTagsParams,
    type PostQueryParams as PostQueryParams,
    type PostQueryAuthorsParams as PostQueryAuthorsParams,
    type PostQueryTagsParams as PostQueryTagsParams,
    type PostScheduleParams as PostScheduleParams,
    type PostUpdateDraftParams as PostUpdateDraftParams,
  };

  export {
    Batch as Batch,
    BaseBatch as BaseBatch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };

  export {
    MultiLanguage as MultiLanguage,
    BaseMultiLanguage as BaseMultiLanguage,
    type MultiLanguageAttachToLangGroupParams as MultiLanguageAttachToLangGroupParams,
    type MultiLanguageCreateLangVariationParams as MultiLanguageCreateLangVariationParams,
    type MultiLanguageDetachFromLangGroupParams as MultiLanguageDetachFromLangGroupParams,
    type MultiLanguageSetLangPrimaryParams as MultiLanguageSetLangPrimaryParams,
    type MultiLanguageUpdateLangsParams as MultiLanguageUpdateLangsParams,
  };

  export {
    Revisions as Revisions,
    BaseRevisions as BaseRevisions,
    type RevisionGetPreviousVersionParams as RevisionGetPreviousVersionParams,
    type RevisionGetPreviousVersionsParams as RevisionGetPreviousVersionsParams,
    type RevisionRestorePreviousVersionParams as RevisionRestorePreviousVersionParams,
    type RevisionRestorePreviousVersionToDraftParams as RevisionRestorePreviousVersionToDraftParams,
  };
}
