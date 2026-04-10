// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as CmsAPI from '../../cms';
import * as MultiLanguageAPI from './multi-language';
import {
  BaseMultiLanguage,
  MultiLanguage,
  MultiLanguageAttachToLangGroupParams,
  MultiLanguageCreateLanguageVariationParams,
  MultiLanguageDetachFromLangGroupParams,
  MultiLanguageSetNewLangPrimaryParams,
  MultiLanguageUpdateLanguagesParams,
} from './multi-language';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['cms', 'blogs', 'settings'] = Object.freeze([
    'cms',
    'blogs',
    'settings',
  ] as const);

  /**
   * Get the list of blogs. Results can be limited and filtered by creation or
   * updated date.
   */
  list(
    query: SettingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BlogsPage, Blog> {
    return this._client.getAPIList('/cms/blog-settings/2026-03/settings', Page<Blog>, { query, ...options });
  }

  /**
   * Retrieve a specific blog by its ID.
   */
  get(blogID: string, options?: RequestOptions): APIPromise<Blog> {
    return this._client.get(path`/cms/blog-settings/2026-03/settings/${blogID}`, options);
  }

  /**
   * Get a specific blog revision.
   */
  getRevision(
    revisionID: string,
    params: SettingGetRevisionParams,
    options?: RequestOptions,
  ): APIPromise<BlogVersion> {
    const { blogId } = params;
    return this._client.get(
      path`/cms/blog-settings/2026-03/settings/${blogId}/revisions/${revisionID}`,
      options,
    );
  }

  /**
   * Get the list of blog revisions. Results can be limited and filtered by creation
   * or updated date.
   */
  listRevisions(
    blogID: string,
    query: SettingListRevisionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VersionBlogsPage, VersionBlog> {
    return this._client.getAPIList(
      path`/cms/blog-settings/2026-03/settings/${blogID}/revisions`,
      Page<VersionBlog>,
      { query, ...options },
    );
  }
}
export class Settings extends BaseSettings {
  multiLanguage: MultiLanguageAPI.MultiLanguage = new MultiLanguageAPI.MultiLanguage(this._client);
}

export type BlogsPage = Page<Blog>;

export type VersionBlogsPage = Page<VersionBlog>;

export interface Blog {
  /**
   * The unique ID of the Blog.
   */
  id: string;

  /**
   * Blog's root URL
   */
  absoluteUrl: string;

  /**
   * Boolean determining whether or not this blog allows public comments.
   */
  allowComments: boolean;

  /**
   * The timestamp (ISO8601 format) when this blog was created.
   */
  created: string;

  /**
   * The timestamp (ISO8601 format) when this Blog was deleted.
   */
  deletedAt: string;

  /**
   * The Description of this Blog.
   */
  description: string;

  /**
   * The html title of this Blog.
   */
  htmlTitle: string;

  /**
   * The explicitly defined language of the Blog. If null, the Blog will default to
   * the language of the Domain.
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

  listingPageId: string;

  /**
   * The internal name of the blog.
   */
  name: string;

  /**
   * Rules for require member registration to access private content.
   */
  publicAccessRules: Array<CmsAPI.PublicAccessRule>;

  /**
   * Boolean to determine whether or not to respect publicAccessRules.
   */
  publicAccessRulesEnabled: boolean;

  /**
   * The public title of this Blog.
   */
  publicTitle: string;

  /**
   * The path of the this blog. This field is appended to the domain to construct the
   * url of this blog.
   */
  slug: string;

  /**
   * ID of the primary Blog this object was translated from.
   */
  translatedFromId: string;

  /**
   * The timestamp (ISO8601 format) when this blog was updated.
   */
  updated: string;
}

export interface BlogLanguageCloneRequestVNext {
  /**
   * ID of blog to clone.
   */
  id: string;

  /**
   * Target language of new variant.
   */
  language?: string;

  /**
   * Language of primary blog to clone.
   */
  primaryLanguage?: string;

  /**
   * Path to this blog.
   */
  slug?: string;
}

export interface BlogVersion {
  id: string;

  object: Blog;

  updatedAt: string;

  user: Shared.VersionUser;
}

export interface CollectionResponseWithTotalBlog {
  results: Array<Blog>;

  total: number;

  paging?: Shared.Paging;
}

export interface CollectionResponseWithTotalBlogVersion {
  results: Array<VersionBlog>;

  total: number;

  paging?: Shared.Paging;
}

export interface VersionBlog {
  /**
   * The id of the version.
   */
  id: string;

  object: Blog;

  /**
   * The timestamp (ISO8601 format) when this blog version was updated.
   */
  updatedAt: string;

  user: Shared.VersionUser;
}

export interface SettingListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface SettingGetRevisionParams {
  blogId: string;
}

export interface SettingListRevisionsParams extends PageParams {
  before?: string;
}

Settings.MultiLanguage = MultiLanguage;
Settings.BaseMultiLanguage = BaseMultiLanguage;

export declare namespace Settings {
  export {
    type Blog as Blog,
    type BlogLanguageCloneRequestVNext as BlogLanguageCloneRequestVNext,
    type BlogVersion as BlogVersion,
    type CollectionResponseWithTotalBlog as CollectionResponseWithTotalBlog,
    type CollectionResponseWithTotalBlogVersion as CollectionResponseWithTotalBlogVersion,
    type VersionBlog as VersionBlog,
    type BlogsPage as BlogsPage,
    type VersionBlogsPage as VersionBlogsPage,
    type SettingListParams as SettingListParams,
    type SettingGetRevisionParams as SettingGetRevisionParams,
    type SettingListRevisionsParams as SettingListRevisionsParams,
  };

  export {
    MultiLanguage as MultiLanguage,
    BaseMultiLanguage as BaseMultiLanguage,
    type MultiLanguageAttachToLangGroupParams as MultiLanguageAttachToLangGroupParams,
    type MultiLanguageCreateLanguageVariationParams as MultiLanguageCreateLanguageVariationParams,
    type MultiLanguageDetachFromLangGroupParams as MultiLanguageDetachFromLangGroupParams,
    type MultiLanguageSetNewLangPrimaryParams as MultiLanguageSetNewLangPrimaryParams,
    type MultiLanguageUpdateLanguagesParams as MultiLanguageUpdateLanguagesParams,
  };
}
