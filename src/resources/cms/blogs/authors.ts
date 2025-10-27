// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Authors extends APIResource {
  /**
   * Create a new Blog Author.
   *
   * @example
   * ```ts
   * const blogAuthor = await client.cms.blogs.authors.create({
   *   id: 'id',
   *   avatar: 'avatar',
   *   bio: 'bio',
   *   created: '2019-12-27T18:11:19.117Z',
   *   deletedAt: '2019-12-27T18:11:19.117Z',
   *   displayName: 'displayName',
   *   email: 'email',
   *   facebook: 'facebook',
   *   fullName: 'fullName',
   *   language: 'af',
   *   linkedin: 'linkedin',
   *   name: 'name',
   *   slug: 'slug',
   *   translatedFromId: 0,
   *   twitter: 'twitter',
   *   updated: '2019-12-27T18:11:19.117Z',
   *   website: 'website',
   * });
   * ```
   */
  create(body: AuthorCreateParams, options?: RequestOptions): APIPromise<BlogAuthor> {
    return this._client.post('/cms/v3/blogs/authors', { body, ...options });
  }

  /**
   * Sparse updates a single Blog Author object identified by the id in the path. All
   * the column values need not be specified. Only the that need to be modified can
   * be specified.
   *
   * @example
   * ```ts
   * const blogAuthor = await client.cms.blogs.authors.update(
   *   'objectId',
   *   {
   *     id: 'id',
   *     avatar: 'avatar',
   *     bio: 'bio',
   *     created: '2019-12-27T18:11:19.117Z',
   *     deletedAt: '2019-12-27T18:11:19.117Z',
   *     displayName: 'displayName',
   *     email: 'email',
   *     facebook: 'facebook',
   *     fullName: 'fullName',
   *     language: 'af',
   *     linkedin: 'linkedin',
   *     name: 'name',
   *     slug: 'slug',
   *     translatedFromId: 0,
   *     twitter: 'twitter',
   *     updated: '2019-12-27T18:11:19.117Z',
   *     website: 'website',
   *   },
   * );
   * ```
   */
  update(objectID: string, params: AuthorUpdateParams, options?: RequestOptions): APIPromise<BlogAuthor> {
    const { archived, ...body } = params;
    return this._client.patch(path`/cms/v3/blogs/authors/${objectID}`, {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Get the list of blog authors. Supports paging and filtering. This method would
   * be useful for an integration that examined these models and used an external
   * service to suggest edits.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const blogAuthor of client.cms.blogs.authors.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AuthorListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BlogAuthorsPage, BlogAuthor> {
    return this._client.getAPIList('/cms/v3/blogs/authors', Page<BlogAuthor>, { query, ...options });
  }

  /**
   * Delete the Blog Author object identified by the id in the path.
   *
   * @example
   * ```ts
   * await client.cms.blogs.authors.delete('objectId');
   * ```
   */
  delete(
    objectID: string,
    params: AuthorDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/cms/v3/blogs/authors/${objectID}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Attach a Blog Author to a multi-language group.
   *
   * @example
   * ```ts
   * await client.cms.blogs.authors.attachToLangGroup({
   *   id: 'id',
   *   language: 'language',
   *   primaryId: 'primaryId',
   * });
   * ```
   */
  attachToLangGroup(body: AuthorAttachToLangGroupParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/authors/multi-language/attach-to-lang-group', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create the Blog Author objects detailed in the request body.
   *
   * @example
   * ```ts
   * const batchResponseBlogAuthor =
   *   await client.cms.blogs.authors.createBatch({
   *     inputs: [
   *       {
   *         id: 'id',
   *         avatar: 'avatar',
   *         bio: 'bio',
   *         created: '2019-12-27T18:11:19.117Z',
   *         deletedAt: '2019-12-27T18:11:19.117Z',
   *         displayName: 'displayName',
   *         email: 'email',
   *         facebook: 'facebook',
   *         fullName: 'fullName',
   *         language: 'af',
   *         linkedin: 'linkedin',
   *         name: 'name',
   *         slug: 'slug',
   *         translatedFromId: 0,
   *         twitter: 'twitter',
   *         updated: '2019-12-27T18:11:19.117Z',
   *         website: 'website',
   *       },
   *     ],
   *   });
   * ```
   */
  createBatch(body: AuthorCreateBatchParams, options?: RequestOptions): APIPromise<BatchResponseBlogAuthor> {
    return this._client.post('/cms/v3/blogs/authors/batch/create', { body, ...options });
  }

  /**
   * Create a new language variation from an existing Blog Author.
   *
   * @example
   * ```ts
   * const blogAuthor =
   *   await client.cms.blogs.authors.createLanguageVariation({
   *     id: 'id',
   *     blogAuthor: {
   *       id: 'id',
   *       avatar: 'avatar',
   *       bio: 'bio',
   *       created: '2019-12-27T18:11:19.117Z',
   *       deletedAt: '2019-12-27T18:11:19.117Z',
   *       displayName: 'displayName',
   *       email: 'email',
   *       facebook: 'facebook',
   *       fullName: 'fullName',
   *       language: 'af',
   *       linkedin: 'linkedin',
   *       name: 'name',
   *       slug: 'slug',
   *       translatedFromId: 0,
   *       twitter: 'twitter',
   *       updated: '2019-12-27T18:11:19.117Z',
   *       website: 'website',
   *     },
   *   });
   * ```
   */
  createLanguageVariation(
    body: AuthorCreateLanguageVariationParams,
    options?: RequestOptions,
  ): APIPromise<BlogAuthor> {
    return this._client.post('/cms/v3/blogs/authors/multi-language/create-language-variation', {
      body,
      ...options,
    });
  }

  /**
   * Delete the Blog Author objects identified in the request body.
   *
   * @example
   * ```ts
   * await client.cms.blogs.authors.deleteBatch({
   *   inputs: ['string'],
   * });
   * ```
   */
  deleteBatch(body: AuthorDeleteBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/authors/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Detach a Blog Author from a multi-language group.
   *
   * @example
   * ```ts
   * await client.cms.blogs.authors.detachFromLangGroup({
   *   id: 'id',
   * });
   * ```
   */
  detachFromLangGroup(body: AuthorDetachFromLangGroupParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/authors/multi-language/detach-from-lang-group', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the Blog Author object identified by the id in the path.
   *
   * @example
   * ```ts
   * const blogAuthor = await client.cms.blogs.authors.get(
   *   'objectId',
   * );
   * ```
   */
  get(
    objectID: string,
    query: AuthorGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlogAuthor> {
    return this._client.get(path`/cms/v3/blogs/authors/${objectID}`, { query, ...options });
  }

  /**
   * Retrieve the Blog Author objects identified in the request body.
   *
   * @example
   * ```ts
   * const batchResponseBlogAuthor =
   *   await client.cms.blogs.authors.getBatch({
   *     inputs: ['string'],
   *   });
   * ```
   */
  getBatch(params: AuthorGetBatchParams, options?: RequestOptions): APIPromise<BatchResponseBlogAuthor> {
    const { archived, ...body } = params;
    return this._client.post('/cms/v3/blogs/authors/batch/read', { query: { archived }, body, ...options });
  }

  /**
   * Set a Blog Author as the primary language of a multi-language group.
   *
   * @example
   * ```ts
   * await client.cms.blogs.authors.setNewLangPrimary({
   *   id: 'id',
   * });
   * ```
   */
  setNewLangPrimary(body: AuthorSetNewLangPrimaryParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/cms/v3/blogs/authors/multi-language/set-new-lang-primary', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update the Blog Author objects identified in the request body.
   *
   * @example
   * ```ts
   * const batchResponseBlogAuthor =
   *   await client.cms.blogs.authors.updateBatch({
   *     inputs: [{}],
   *   });
   * ```
   */
  updateBatch(
    params: AuthorUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseBlogAuthor> {
    const { archived, ...body } = params;
    return this._client.post('/cms/v3/blogs/authors/batch/update', { query: { archived }, body, ...options });
  }

  /**
   * Explicitly set new languages for each Blog Author in a multi-language group.
   *
   * @example
   * ```ts
   * await client.cms.blogs.authors.updateLanguages({
   *   languages: { foo: 'string' },
   *   primaryId: 'primaryId',
   * });
   * ```
   */
  updateLanguages(body: AuthorUpdateLanguagesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/authors/multi-language/update-languages', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type BlogAuthorsPage = Page<BlogAuthor>;

/**
 * Wrapper for providing an array of blog authors as inputs.
 */
export interface BatchInputBlogAuthor {
  /**
   * Blog authors to input.
   */
  inputs: Array<BlogAuthor>;
}

/**
 * Response object for batch operations on blog authors.
 */
export interface BatchResponseBlogAuthor {
  /**
   * Time of batch operation completion.
   */
  completedAt: string;

  /**
   * Results of batch operation.
   */
  results: Array<BlogAuthor>;

  /**
   * Time of batch operation start.
   */
  startedAt: string;

  /**
   * Status of batch operation.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * Links associated with batch operation.
   */
  links?: { [key: string]: string };

  /**
   * Time of batch operation request.
   */
  requestedAt?: string;
}

/**
 * Response object for batch operations on blog authors with errors.
 */
export interface BatchResponseBlogAuthorWithErrors {
  /**
   * Time of batch operation completion.
   */
  completedAt: string;

  /**
   * Results of batch operation.
   */
  results: Array<BlogAuthor>;

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
 * Model definition for a Blog Author.
 */
export interface BlogAuthor {
  /**
   * The unique ID of the Blog Author.
   */
  id: string;

  /**
   * URL to the blog author's avatar, if supplying a custom one.
   */
  avatar: string;

  /**
   * A short biography of the blog author.
   */
  bio: string;

  created: string;

  /**
   * The timestamp (ISO8601 format) when this Blog Author was deleted.
   */
  deletedAt: string;

  /**
   * The full name of the Blog Author to be displayed.
   */
  displayName: string;

  /**
   * Email address of the Blog Author.
   */
  email: string;

  /**
   * URL to the Blog Author's Facebook page.
   */
  facebook: string;

  fullName: string;

  /**
   * The explicitly defined ISO 639 language code of the blog author.
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

  /**
   * URL to the blog author's LinkedIn page.
   */
  linkedin: string;

  name: string;

  slug: string;

  /**
   * ID of the primary blog author this object was translated from.
   */
  translatedFromId: number;

  /**
   * URL or username of the Twitter account associated with the Blog Author. This
   * will be normalized into the Twitter url for said user.
   */
  twitter: string;

  updated: string;

  /**
   * URL to the website of the Blog Author.
   */
  website: string;
}

/**
 * Request body object for cloning blog authors.
 */
export interface BlogAuthorCloneRequestVNext {
  /**
   * ID of the object to be cloned.
   */
  id: string;

  /**
   * Model definition for a Blog Author.
   */
  blogAuthor: BlogAuthor;

  /**
   * Language of newly cloned object.
   */
  language?: string;

  /**
   * Primary language in multi-language group.
   */
  primaryLanguage?: string;
}

/**
 * Response object for collections of blog authors with pagination information.
 */
export interface CollectionResponseWithTotalBlogAuthorForwardPaging {
  /**
   * Collection of blog authors.
   */
  results: Array<BlogAuthor>;

  /**
   * Total number of blog authors.
   */
  total: number;

  paging?: Shared.ForwardPaging;
}

export interface AuthorCreateParams {
  /**
   * The unique ID of the Blog Author.
   */
  id: string;

  /**
   * URL to the blog author's avatar, if supplying a custom one.
   */
  avatar: string;

  /**
   * A short biography of the blog author.
   */
  bio: string;

  created: string;

  /**
   * The timestamp (ISO8601 format) when this Blog Author was deleted.
   */
  deletedAt: string;

  /**
   * The full name of the Blog Author to be displayed.
   */
  displayName: string;

  /**
   * Email address of the Blog Author.
   */
  email: string;

  /**
   * URL to the Blog Author's Facebook page.
   */
  facebook: string;

  fullName: string;

  /**
   * The explicitly defined ISO 639 language code of the blog author.
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

  /**
   * URL to the blog author's LinkedIn page.
   */
  linkedin: string;

  name: string;

  slug: string;

  /**
   * ID of the primary blog author this object was translated from.
   */
  translatedFromId: number;

  /**
   * URL or username of the Twitter account associated with the Blog Author. This
   * will be normalized into the Twitter url for said user.
   */
  twitter: string;

  updated: string;

  /**
   * URL to the website of the Blog Author.
   */
  website: string;
}

export interface AuthorUpdateParams {
  /**
   * Body param: The unique ID of the Blog Author.
   */
  id: string;

  /**
   * Body param: URL to the blog author's avatar, if supplying a custom one.
   */
  avatar: string;

  /**
   * Body param: A short biography of the blog author.
   */
  bio: string;

  /**
   * Body param:
   */
  created: string;

  /**
   * Body param: The timestamp (ISO8601 format) when this Blog Author was deleted.
   */
  deletedAt: string;

  /**
   * Body param: The full name of the Blog Author to be displayed.
   */
  displayName: string;

  /**
   * Body param: Email address of the Blog Author.
   */
  email: string;

  /**
   * Body param: URL to the Blog Author's Facebook page.
   */
  facebook: string;

  /**
   * Body param:
   */
  fullName: string;

  /**
   * Body param: The explicitly defined ISO 639 language code of the blog author.
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

  /**
   * Body param: URL to the blog author's LinkedIn page.
   */
  linkedin: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  slug: string;

  /**
   * Body param: ID of the primary blog author this object was translated from.
   */
  translatedFromId: number;

  /**
   * Body param: URL or username of the Twitter account associated with the Blog
   * Author. This will be normalized into the Twitter url for said user.
   */
  twitter: string;

  /**
   * Body param:
   */
  updated: string;

  /**
   * Body param: URL to the website of the Blog Author.
   */
  website: string;

  /**
   * Query param: Specifies whether to update deleted Blog Authors. Defaults to
   * `false`.
   */
  archived?: boolean;
}

export interface AuthorListParams extends PageParams {
  /**
   * Specifies whether to return deleted Blog Authors. Defaults to `false`.
   */
  archived?: boolean;

  /**
   * Only return Blog Authors created after the specified time.
   */
  createdAfter?: string;

  /**
   * Only return Blog Authors created at exactly the specified time.
   */
  createdAt?: string;

  /**
   * Only return Blog Authors created before the specified time.
   */
  createdBefore?: string;

  property?: string;

  /**
   * Specifies which fields to use for sorting results. Valid fields are `name`,
   * `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. `createdAt` will be used by
   * default.
   */
  sort?: Array<string>;

  /**
   * Only return Blog Authors last updated after the specified time.
   */
  updatedAfter?: string;

  /**
   * Only return Blog Authors last updated at exactly the specified time.
   */
  updatedAt?: string;

  /**
   * Only return Blog Authors last updated before the specified time.
   */
  updatedBefore?: string;
}

export interface AuthorDeleteParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface AuthorAttachToLangGroupParams {
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

export interface AuthorCreateBatchParams {
  /**
   * Blog authors to input.
   */
  inputs: Array<BlogAuthor>;
}

export interface AuthorCreateLanguageVariationParams {
  /**
   * ID of the object to be cloned.
   */
  id: string;

  /**
   * Model definition for a Blog Author.
   */
  blogAuthor: BlogAuthor;

  /**
   * Language of newly cloned object.
   */
  language?: string;

  /**
   * Primary language in multi-language group.
   */
  primaryLanguage?: string;
}

export interface AuthorDeleteBatchParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface AuthorDetachFromLangGroupParams {
  /**
   * ID of the object to remove from a multi-language group.
   */
  id: string;
}

export interface AuthorGetParams {
  /**
   * Specifies whether to return deleted Blog Authors. Defaults to `false`.
   */
  archived?: boolean;

  property?: string;
}

export interface AuthorGetBatchParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: Specifies whether to return deleted Blog Authors. Defaults to
   * `false`.
   */
  archived?: boolean;
}

export interface AuthorSetNewLangPrimaryParams {
  /**
   * ID of object to set as primary in multi-language group.
   */
  id: string;
}

export interface AuthorUpdateBatchParams {
  /**
   * Body param: JSON nodes to input.
   */
  inputs: Array<unknown>;

  /**
   * Query param: Specifies whether to update deleted Blog Authors. Defaults to
   * `false`.
   */
  archived?: boolean;
}

export interface AuthorUpdateLanguagesParams {
  /**
   * Map of object IDs to associated languages of object in the multi-language group.
   */
  languages: { [key: string]: string };

  /**
   * ID of the primary object in the multi-language group.
   */
  primaryId: string;
}

export declare namespace Authors {
  export {
    type BatchInputBlogAuthor as BatchInputBlogAuthor,
    type BatchResponseBlogAuthor as BatchResponseBlogAuthor,
    type BatchResponseBlogAuthorWithErrors as BatchResponseBlogAuthorWithErrors,
    type BlogAuthor as BlogAuthor,
    type BlogAuthorCloneRequestVNext as BlogAuthorCloneRequestVNext,
    type CollectionResponseWithTotalBlogAuthorForwardPaging as CollectionResponseWithTotalBlogAuthorForwardPaging,
    type BlogAuthorsPage as BlogAuthorsPage,
    type AuthorCreateParams as AuthorCreateParams,
    type AuthorUpdateParams as AuthorUpdateParams,
    type AuthorListParams as AuthorListParams,
    type AuthorDeleteParams as AuthorDeleteParams,
    type AuthorAttachToLangGroupParams as AuthorAttachToLangGroupParams,
    type AuthorCreateBatchParams as AuthorCreateBatchParams,
    type AuthorCreateLanguageVariationParams as AuthorCreateLanguageVariationParams,
    type AuthorDeleteBatchParams as AuthorDeleteBatchParams,
    type AuthorDetachFromLangGroupParams as AuthorDetachFromLangGroupParams,
    type AuthorGetParams as AuthorGetParams,
    type AuthorGetBatchParams as AuthorGetBatchParams,
    type AuthorSetNewLangPrimaryParams as AuthorSetNewLangPrimaryParams,
    type AuthorUpdateBatchParams as AuthorUpdateBatchParams,
    type AuthorUpdateLanguagesParams as AuthorUpdateLanguagesParams,
  };
}
