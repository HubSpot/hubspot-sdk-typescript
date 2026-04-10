// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseEmails extends APIResource {
  static override readonly _key: readonly ['marketing', 'emails'] = Object.freeze([
    'marketing',
    'emails',
  ] as const);

  create(body: EmailCreateParams, options?: RequestOptions): APIPromise<PublicEmail> {
    return this._client.post('/marketing/emails/2026-03', { body, ...options });
  }

  /**
   * Change properties of a marketing email.
   */
  update(emailID: string, params: EmailUpdateParams, options?: RequestOptions): APIPromise<PublicEmail> {
    const { query_archived, ...body } = params;
    return this._client.patch(path`/marketing/emails/2026-03/${emailID}`, {
      query: { archived: query_archived },
      body,
      ...options,
    });
  }

  list(
    query: EmailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicEmailsPage, PublicEmail> {
    return this._client.getAPIList('/marketing/emails/2026-03', Page<PublicEmail>, { query, ...options });
  }

  /**
   * Delete a marketing email by its ID
   */
  delete(
    emailID: string,
    params: EmailDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/marketing/emails/2026-03/${emailID}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This will create a duplicate email with the same properties as the original,
   * with the exception of a unique ID.
   */
  clone(body: EmailCloneParams, options?: RequestOptions): APIPromise<PublicEmail> {
    return this._client.post('/marketing/emails/2026-03/clone', { body, ...options });
  }

  /**
   * Create a variation of a marketing email for an A/B test. The new variation will
   * be created as a draft. If an active variation already exists, a new one won't be
   * created.
   */
  createAbTestVariation(
    body: EmailCreateAbTestVariationParams,
    options?: RequestOptions,
  ): APIPromise<PublicEmail> {
    return this._client.post('/marketing/emails/2026-03/ab-test/create-variation', { body, ...options });
  }

  /**
   * Use this endpoint to get aggregated statistics of emails sent in a specified
   * time span. It also returns the list of emails that were sent during the time
   * span.
   */
  get(
    query: EmailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AggregateEmailStatistics> {
    return this._client.get('/marketing/emails/2026-03/statistics/list', { query, ...options });
  }

  /**
   * This endpoint lets you obtain the variation of an A/B marketing email. If the
   * email is variation A (master) it will return variation B (variant) and vice
   * versa.
   */
  getAbTestVariation(
    emailID: string,
    query: EmailGetAbTestVariationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicEmail> {
    return this._client.get(path`/marketing/emails/2026-03/${emailID}/ab-test/get-variation`, {
      query,
      ...options,
    });
  }

  /**
   * Get the draft version of an email (if it exists). If no draft version exists,
   * the published email is returned.
   */
  getDraft(emailID: string, options?: RequestOptions): APIPromise<PublicEmail> {
    return this._client.get(path`/marketing/emails/2026-03/${emailID}/draft`, options);
  }

  /**
   * Get aggregated statistics in intervals for a specified time span. Each interval
   * contains aggregated statistics of the emails that were sent in that time.
   */
  getHistogram(
    query: EmailGetHistogramParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseWithTotalEmailStatisticInterval> {
    return this._client.get('/marketing/emails/2026-03/statistics/histogram', { query, ...options });
  }

  /**
   * Get a specific revision of a marketing email.
   */
  getRevision(
    revisionID: string,
    params: EmailGetRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PublicEmailVersion> {
    const { emailId } = params;
    return this._client.get(path`/marketing/emails/2026-03/${emailId}/revisions/${revisionID}`, options);
  }

  /**
   * Get a list of all versions of a marketing email, with each entry including the
   * full state of that particular version. To view the most recent version, sort by
   * the updatedAt parameter.
   */
  listRevisions(
    emailID: string,
    query: EmailListRevisionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VersionPublicEmailsPage, VersionPublicEmail> {
    return this._client.getAPIList(
      path`/marketing/emails/2026-03/${emailID}/revisions`,
      Page<VersionPublicEmail>,
      { query, ...options },
    );
  }

  /**
   * If you have a Marketing Hub Enterprise account or the transactional email
   * add-on, you can use this endpoint to publish an automated email or send/schedule
   * a regular email.
   */
  publish(emailID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/marketing/emails/2026-03/${emailID}/publish`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Resets the draft back to a copy of the live object.
   */
  resetDraft(emailID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/marketing/emails/2026-03/${emailID}/draft/reset`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restores a previous revision of a marketing email. The current revision becomes
   * old, and the restored revision is given a new version number.
   */
  restoreRevision(
    revisionID: string,
    params: EmailRestoreRevisionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { emailId } = params;
    return this._client.post(path`/marketing/emails/2026-03/${emailId}/revisions/${revisionID}/restore`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restores a previous revision of a marketing email to DRAFT state. If there is
   * currently something in the draft for that object, it is overwritten.
   */
  restoreRevisionToDraft(
    revisionID: number,
    params: EmailRestoreRevisionToDraftParams,
    options?: RequestOptions,
  ): APIPromise<PublicEmail> {
    const { emailId } = params;
    return this._client.post(
      path`/marketing/emails/2026-03/${emailId}/revisions/${revisionID}/restore-to-draft`,
      options,
    );
  }

  /**
   * If you have a Marketing Hub Enterprise account or the transactional email
   * add-on, you can use this endpoint to unpublish an automated email or cancel a
   * regular email. If the email is already in the process of being sent, canceling
   * might not be possible.
   */
  unpublish(emailID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/marketing/emails/2026-03/${emailID}/unpublish`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create or update the draft version of a marketing email. If no draft exists, the
   * system creates a draft from the current “live” email then applies the request
   * body to that draft. The draft version only lives on the buffer—the email is not
   * cloned.
   */
  updateDraft(
    emailID: string,
    body: EmailUpdateDraftParams,
    options?: RequestOptions,
  ): APIPromise<PublicEmail> {
    return this._client.patch(path`/marketing/emails/2026-03/${emailID}/draft`, { body, ...options });
  }
}
export class Emails extends BaseEmails {}

export type PublicEmailsPage = Page<PublicEmail>;

export type VersionPublicEmailsPage = Page<VersionPublicEmail>;

export interface AggregateEmailStatistics {
  aggregate: EmailStatisticsData;

  /**
   * The aggregated statistics per campaign.
   */
  campaignAggregations: { [key: string]: EmailStatisticsData };

  /**
   * List of email IDs that were sent during the time span.
   */
  emails: Array<number>;
}

export interface CollectionResponseWithTotalEmailStatisticInterval {
  results: Array<EmailStatisticInterval>;

  total: number;

  paging?: Shared.Paging;
}

export interface CollectionResponseWithTotalPublicEmail {
  results: Array<PublicEmail>;

  total: number;

  paging?: Shared.Paging;
}

export interface CollectionResponseWithTotalPublicEmailVersion {
  results: Array<VersionPublicEmail>;

  total: number;

  paging?: Shared.Paging;
}

export interface EmailCloneRequestVNext {
  /**
   * The email ID.
   */
  id: string;

  /**
   * The name to assign to the cloned email.
   */
  cloneName?: string;

  /**
   * The language code for the cloned email, such as 'en' for English.
   */
  language?: string;
}

export interface EmailCreateRequest {
  /**
   * The active domain of the email.
   */
  activeDomain?: string;

  /**
   * Determines if the email is archived or not.
   */
  archived?: boolean;

  /**
   * The ID of the business unit associated with the email.
   */
  businessUnitId?: number;

  /**
   * The ID of the campaign this email is associated to.
   */
  campaign?: string;

  content?: PublicEmailContent;

  /**
   * The ID of the feedback survey linked to the email.
   */
  feedbackSurveyId?: string;

  /**
   * The ID of the folder where the email will be stored.
   */
  folderIdV2?: number;

  from?: PublicEmailFromDetails;

  /**
   * Determines whether the email send time should be randomized to avoid sending all
   * emails at the exact same time.
   */
  jitterSendTime?: boolean;

  /**
   * The language code for the email, such as 'en' for English.
   */
  language?:
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
   * The name of the email, as displayed on the email dashboard.
   */
  name?: string;

  /**
   * The date and time the email is scheduled for, in ISO8601 representation. This is
   * only used in local time or scheduled emails.
   */
  publishDate?: string;

  rssData?: PublicRssEmailDetails;

  /**
   * Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish?: boolean;

  /**
   * The email state.
   */
  state?:
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
   * The email subcategory.
   */
  subcategory?:
    | 'ab_loser_variant'
    | 'ab_loser_variant_site_page'
    | 'ab_master'
    | 'ab_master_site_page'
    | 'ab_variant'
    | 'ab_variant_site_page'
    | 'automated'
    | 'automated_ab_master'
    | 'automated_ab_variant'
    | 'automated_for_crm'
    | 'automated_for_custom_survey'
    | 'automated_for_deal'
    | 'automated_for_feedback_ces'
    | 'automated_for_feedback_custom'
    | 'automated_for_feedback_nps'
    | 'automated_for_form'
    | 'automated_for_form_buffer'
    | 'automated_for_form_draft'
    | 'automated_for_form_legacy'
    | 'automated_for_leadflow'
    | 'automated_for_ticket'
    | 'batch'
    | 'blog_article_instance_layout'
    | 'blog_article_listing'
    | 'blog_author_detail'
    | 'blog_email'
    | 'blog_email_child'
    | 'case_study'
    | 'case_study_instance_layout'
    | 'case_study_listing'
    | 'discardable_stub'
    | 'imported_blog_post'
    | 'kb_404_page'
    | 'kb_article_instance_layout'
    | 'kb_listing'
    | 'kb_search_results'
    | 'kb_support_form'
    | 'landing_page'
    | 'legacy_blog_post'
    | 'legacy_page'
    | 'localtime'
    | 'manage_preferences_email'
    | 'marketing_single_send_api'
    | 'membership_email_verification'
    | 'membership_follow_up'
    | 'membership_otp_login'
    | 'membership_password_reset'
    | 'membership_password_saved'
    | 'membership_passwordless_auth'
    | 'membership_registration'
    | 'membership_registration_follow_up'
    | 'membership_verification'
    | 'normal_blog_post'
    | 'optin_email'
    | 'optin_followup_email'
    | 'page_instance_layout'
    | 'page_stub'
    | 'performable_landing_page'
    | 'performable_landing_page_cutover'
    | 'podcast_instance_layout'
    | 'podcast_listing'
    | 'portal_content'
    | 'resubscribe_confirmation_email'
    | 'resubscribe_email'
    | 'rss_to_email'
    | 'rss_to_email_child'
    | 'scp_instance_layout_page'
    | 'scp_static_page'
    | 'single_send_api'
    | 'site_page'
    | 'smtp_token'
    | 'staged_page'
    | 'ticket_closed_kickback_email'
    | 'ticket_opened_kickback_email'
    | 'ticket_pipeline_automated'
    | 'UNKNOWN'
    | 'unsubscribe_confirmation_email'
    | 'web_interactive';

  /**
   * The subject of the email.
   */
  subject?: string;

  subscriptionDetails?: PublicEmailSubscriptionDetails;

  testing?: PublicEmailTestingDetails;

  to?: PublicEmailToDetails;

  webversion?: PublicWebversionDetails;
}

export interface EmailStatisticInterval {
  aggregations: EmailStatisticsData;

  interval: Interval;
}

export interface EmailStatisticsData {
  /**
   * Counters like number of `sent`, `open` or `delivered`.
   */
  counters: { [key: string]: number };

  /**
   * Statistics by device.
   */
  deviceBreakdown: { [key: string]: { [key: string]: number } };

  /**
   * Number of emails that were dropped and bounced.
   */
  qualifierStats: { [key: string]: { [key: string]: number } };

  /**
   * Ratios like `openratio` or `clickratio`
   */
  ratios: { [key: string]: number };
}

export interface EmailUpdateRequest {
  /**
   * The active domain of the email.
   */
  activeDomain?: string;

  /**
   * Determines if the email is archived or not.
   */
  archived?: boolean;

  /**
   * The ID of the business unit associated with the email.
   */
  businessUnitId?: number;

  /**
   * The ID of the campaign this email is associated to.
   */
  campaign?: string;

  content?: PublicEmailContent;

  /**
   * The ID of the folder where the email will be stored.
   */
  folderIdV2?: number;

  from?: PublicEmailFromDetails;

  /**
   * Determines whether the email send time should be randomized to avoid sending all
   * emails at the exact same time.
   */
  jitterSendTime?: boolean;

  /**
   * The language code for the email, such as 'en' for English.
   */
  language?:
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
   * The name of the email, as displayed on the email dashboard.
   */
  name?: string;

  /**
   * The date and time the email is scheduled for, in ISO8601 representation. This is
   * only used in local time or scheduled emails.
   */
  publishDate?: string;

  rssData?: PublicRssEmailDetails;

  /**
   * Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish?: boolean;

  /**
   * The email state.
   */
  state?:
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
   * The email subcategory.
   */
  subcategory?:
    | 'ab_loser_variant'
    | 'ab_loser_variant_site_page'
    | 'ab_master'
    | 'ab_master_site_page'
    | 'ab_variant'
    | 'ab_variant_site_page'
    | 'automated'
    | 'automated_ab_master'
    | 'automated_ab_variant'
    | 'automated_for_crm'
    | 'automated_for_custom_survey'
    | 'automated_for_deal'
    | 'automated_for_feedback_ces'
    | 'automated_for_feedback_custom'
    | 'automated_for_feedback_nps'
    | 'automated_for_form'
    | 'automated_for_form_buffer'
    | 'automated_for_form_draft'
    | 'automated_for_form_legacy'
    | 'automated_for_leadflow'
    | 'automated_for_ticket'
    | 'batch'
    | 'blog_article_instance_layout'
    | 'blog_article_listing'
    | 'blog_author_detail'
    | 'blog_email'
    | 'blog_email_child'
    | 'case_study'
    | 'case_study_instance_layout'
    | 'case_study_listing'
    | 'discardable_stub'
    | 'imported_blog_post'
    | 'kb_404_page'
    | 'kb_article_instance_layout'
    | 'kb_listing'
    | 'kb_search_results'
    | 'kb_support_form'
    | 'landing_page'
    | 'legacy_blog_post'
    | 'legacy_page'
    | 'localtime'
    | 'manage_preferences_email'
    | 'marketing_single_send_api'
    | 'membership_email_verification'
    | 'membership_follow_up'
    | 'membership_otp_login'
    | 'membership_password_reset'
    | 'membership_password_saved'
    | 'membership_passwordless_auth'
    | 'membership_registration'
    | 'membership_registration_follow_up'
    | 'membership_verification'
    | 'normal_blog_post'
    | 'optin_email'
    | 'optin_followup_email'
    | 'page_instance_layout'
    | 'page_stub'
    | 'performable_landing_page'
    | 'performable_landing_page_cutover'
    | 'podcast_instance_layout'
    | 'podcast_listing'
    | 'portal_content'
    | 'resubscribe_confirmation_email'
    | 'resubscribe_email'
    | 'rss_to_email'
    | 'rss_to_email_child'
    | 'scp_instance_layout_page'
    | 'scp_static_page'
    | 'single_send_api'
    | 'site_page'
    | 'smtp_token'
    | 'staged_page'
    | 'ticket_closed_kickback_email'
    | 'ticket_opened_kickback_email'
    | 'ticket_pipeline_automated'
    | 'UNKNOWN'
    | 'unsubscribe_confirmation_email'
    | 'web_interactive';

  /**
   * The subject of the email.
   */
  subject?: string;

  subscriptionDetails?: PublicEmailSubscriptionDetails;

  testing?: PublicEmailTestingDetails;

  to?: PublicEmailToDetails;

  webversion?: PublicWebversionDetails;
}

export interface Interval {
  /**
   * The end timestamp of the interval, in ISO8601 format.
   */
  end: string;

  /**
   * The start timestamp of the interval, in ISO8601 format.
   */
  start: string;
}

export interface PublicButtonStyleSettings {
  backgroundColor?: unknown;

  cornerRadius?: number;

  fontStyle?: PublicFontStyle;
}

export interface PublicDividerStyleSettings {
  color?: unknown;

  height?: number;

  lineType?: string;
}

export interface PublicEmail {
  isAb: boolean;

  /**
   * The email ID.
   */
  id?: string;

  /**
   * The active domain of the email.
   */
  activeDomain?: string;

  /**
   * List of emailCampaignIds.
   */
  allEmailCampaignIds?: Array<string>;

  /**
   * Determines if the email is archived or not.
   */
  archived?: boolean;

  businessUnitId?: string;

  /**
   * The ID of the campaign this email is associated to.
   */
  campaign?: string;

  /**
   * The name of the campaign.
   */
  campaignName?: string;

  campaignUtm?: string;

  /**
   * The ID of the email this email was cloned from.
   */
  clonedFrom?: string;

  content?: PublicEmailContent;

  /**
   * The date and time of the email's creation, in ISO8601 representation.
   */
  createdAt?: string;

  /**
   * The id of the user who created the email.
   */
  createdById?: string;

  /**
   * The date and time the email was deleted at, in ISO8601 representation.
   */
  deletedAt?: string;

  emailCampaignGroupId?: string;

  emailTemplateMode?: 'DESIGN_MANAGER' | 'DRAG_AND_DROP';

  /**
   * The ID of the feedback survey linked to the email.
   */
  feedbackSurveyId?: string;

  folderId?: number;

  folderIdV2?: number;

  from?: PublicEmailFromDetails;

  /**
   * Returns the published status of the email. This is read only.
   */
  isPublished?: boolean;

  /**
   * Returns whether the email is a transactional email or not. This is read only.
   */
  isTransactional?: boolean;

  jitterSendTime?: boolean;

  language?:
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
   * The name of the email, as displayed on the email dashboard.
   */
  name?: string;

  previewKey?: string;

  primaryEmailCampaignId?: string;

  /**
   * The date and time the email is scheduled for, in ISO8601 representation. This is
   * only used in local time or scheduled emails.
   */
  publishDate?: string;

  /**
   * The date and time the email was published at, in ISO8601 representation.
   */
  publishedAt?: string;

  /**
   * Email of the user who published/sent the email.
   */
  publishedByEmail?: string;

  /**
   * The ID of the user who published the email.
   */
  publishedById?: string;

  /**
   * Name of the user who published the email.
   */
  publishedByName?: string;

  rssData?: PublicRssEmailDetails;

  /**
   * Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish?: boolean;

  /**
   * The email state.
   */
  state?:
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

  stats?: EmailStatisticsData;

  /**
   * The email subcategory.
   */
  subcategory?: string;

  /**
   * The subject of the email.
   */
  subject?: string;

  subscriptionDetails?: PublicEmailSubscriptionDetails;

  teamsWithAccess?: Array<string>;

  testing?: PublicEmailTestingDetails;

  to?: PublicEmailToDetails;

  /**
   * The email type, this is derived from other properties on the email such as
   * subcategory.
   */
  type?:
    | 'AB_EMAIL'
    | 'AUTOMATED_AB_EMAIL'
    | 'AUTOMATED_EMAIL'
    | 'BATCH_EMAIL'
    | 'BLOG_EMAIL'
    | 'BLOG_EMAIL_CHILD'
    | 'FEEDBACK_CES_EMAIL'
    | 'FEEDBACK_CUSTOM_EMAIL'
    | 'FEEDBACK_CUSTOM_SURVEY_EMAIL'
    | 'FEEDBACK_NPS_EMAIL'
    | 'FOLLOWUP_EMAIL'
    | 'LEADFLOW_EMAIL'
    | 'LOCALTIME_EMAIL'
    | 'MANAGE_PREFERENCES_EMAIL'
    | 'MARKETING_SINGLE_SEND_API'
    | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL'
    | 'MEMBERSHIP_FOLLOW_UP_EMAIL'
    | 'MEMBERSHIP_OTP_LOGIN_EMAIL'
    | 'MEMBERSHIP_PASSWORD_RESET_EMAIL'
    | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL'
    | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL'
    | 'MEMBERSHIP_REGISTRATION_EMAIL'
    | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL'
    | 'MEMBERSHIP_VERIFICATION_EMAIL'
    | 'OPTIN_EMAIL'
    | 'OPTIN_FOLLOWUP_EMAIL'
    | 'RESUBSCRIBE_EMAIL'
    | 'RSS_EMAIL'
    | 'RSS_EMAIL_CHILD'
    | 'SINGLE_SEND_API'
    | 'SMTP_TOKEN'
    | 'TICKET_EMAIL';

  unpublishedAt?: string;

  /**
   * The date and time of the last update to the email, in ISO8601 representation.
   */
  updatedAt?: string;

  /**
   * The id of the user who last updated the email.
   */
  updatedById?: string;

  usersWithAccess?: Array<string>;

  webversion?: PublicWebversionDetails;

  /**
   * Names of workflows in which the email is used within a "send email" action.
   */
  workflowNames?: Array<string>;
}

export interface PublicEmailContent {
  flexAreas?: { [key: string]: unknown };

  plainTextVersion?: string;

  smartFields?: { [key: string]: SmartEmailField };

  styleSettings?: PublicEmailStyleSettings;

  templatePath?: string;

  themeSettingsValues?: { [key: string]: unknown };

  widgetContainers?: { [key: string]: unknown };

  widgets?: { [key: string]: unknown };
}

export interface PublicEmailFromDetails {
  /**
   * The reply to recipients will see.
   */
  customReplyTo?: string;

  /**
   * The name recipients will see.
   */
  fromName?: string;

  /**
   * The from address and reply to email address (if no customReplyTo defined)
   * recipients will see.
   */
  replyTo?: string;
}

export interface PublicEmailRecipients {
  /**
   * Excluded IDs.
   */
  exclude?: Array<string>;

  /**
   * Included IDs.
   */
  include?: Array<string>;
}

export interface PublicEmailStyleSettings {
  backgroundColor?: string;

  backgroundImage?: string;

  backgroundImageType?: 'REPEAT' | 'SINGLE' | 'STRETCH';

  bodyBorderColor?: string;

  bodyBorderColorChoice?: string;

  bodyBorderWidth?: number;

  bodyColor?: string;

  buttonStyleSettings?: PublicButtonStyleSettings;

  colorPickerFavorite1?: string;

  colorPickerFavorite2?: string;

  colorPickerFavorite3?: string;

  colorPickerFavorite4?: string;

  colorPickerFavorite5?: string;

  colorPickerFavorite6?: string;

  dividerStyleSettings?: PublicDividerStyleSettings;

  emailBodyPadding?: string;

  emailBodyWidth?: string;

  headingOneFont?: PublicFontStyle;

  headingTwoFont?: PublicFontStyle;

  linksFont?: PublicFontStyle;

  primaryAccentColor?: string;

  primaryFont?: string;

  primaryFontColor?: string;

  primaryFontLineHeight?: string;

  primaryFontSize?: number;

  secondaryAccentColor?: string;

  secondaryFont?: string;

  secondaryFontColor?: string;

  secondaryFontLineHeight?: string;

  secondaryFontSize?: number;
}

export interface PublicEmailSubscriptionDetails {
  /**
   * ID of the selected office location.
   */
  officeLocationId?: string;

  preferencesGroupId?: string;

  /**
   * ID of the subscription.
   */
  subscriptionId?: string;

  subscriptionName?: string;
}

export interface PublicEmailTestingDetails {
  isAbVariation: boolean;

  /**
   * Version of the email that should be sent if there are too few recipients to
   * conduct an AB test.
   */
  abSampleSizeDefault?:
    | 'automated_loser_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'master'
    | 'variant';

  /**
   * Version of the email that should be sent if the results are inconclusive after
   * the test period, master or variant.
   */
  abSamplingDefault?:
    | 'automated_loser_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'master'
    | 'variant';

  /**
   * Status of the AB test.
   */
  abStatus?:
    | 'automated_loser_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'master'
    | 'variant';

  /**
   * Metric to determine the version that will be sent to the remaining contacts.
   */
  abSuccessMetric?: 'CLICKS_BY_DELIVERED' | 'CLICKS_BY_OPENS' | 'OPENS_BY_DELIVERED';

  /**
   * The size of your test group.
   */
  abTestPercentage?: number;

  /**
   * Time limit on gathering test results. After this time is up, the winning version
   * will be sent to the remaining contacts.
   */
  hoursToWait?: number;

  /**
   * The ID of the AB test.
   */
  testId?: string;
}

export interface PublicEmailToDetails {
  contactIds?: PublicEmailRecipients;

  contactIlsLists?: PublicEmailRecipients;

  contactLists?: PublicEmailRecipients;

  limitSendFrequency?: boolean;

  /**
   * Whether to send to unengaged contacts (false) or not (true).
   */
  suppressGraymail?: boolean;
}

export interface PublicEmailVersion {
  id: string;

  object: PublicEmail;

  updatedAt: string;

  user: Shared.VersionUser;
}

export interface PublicFontStyle {
  bold?: boolean;

  color?: string;

  font?: string;

  italic?: boolean;

  size?: number;

  underline?: boolean;
}

export interface PublicRssEmailDetails {
  blogEmailType?: string;

  blogImageMaxWidth?: number;

  blogLayout?: 'FULL_POST' | 'SUMMARY_NO_FEATURED_IMAGE' | 'SUMMARY_WITH_FEATURED_IMAGE';

  hubspotBlogId?: string;

  maxEntries?: number;

  rssEntryTemplate?: string;

  timing?: { [key: string]: unknown };

  url?: string;

  useHeadlineAsSubject?: boolean;
}

export interface PublicWebversionDetails {
  domain?: string;

  enabled?: boolean;

  expiresAt?: string;

  isPageRedirected?: boolean;

  metaDescription?: string;

  pageExpiryEnabled?: boolean;

  redirectToPageId?: string;

  redirectToUrl?: string;

  slug?: string;

  title?: string;

  url?: string;
}

export type SmartEmailField = unknown;

export interface VersionPublicEmail {
  /**
   * ID of this marketing email version.
   */
  id: string;

  object: PublicEmail;

  /**
   * The date and time of the last update to the email, in ISO8601 representation.
   */
  updatedAt: string;

  user: Shared.VersionUser;
}

export interface EmailCreateParams {
  /**
   * The active domain of the email.
   */
  activeDomain?: string;

  /**
   * Determines if the email is archived or not.
   */
  archived?: boolean;

  /**
   * The ID of the business unit associated with the email.
   */
  businessUnitId?: number;

  /**
   * The ID of the campaign this email is associated to.
   */
  campaign?: string;

  content?: PublicEmailContent;

  /**
   * The ID of the feedback survey linked to the email.
   */
  feedbackSurveyId?: string;

  /**
   * The ID of the folder where the email will be stored.
   */
  folderIdV2?: number;

  from?: PublicEmailFromDetails;

  /**
   * Determines whether the email send time should be randomized to avoid sending all
   * emails at the exact same time.
   */
  jitterSendTime?: boolean;

  /**
   * The language code for the email, such as 'en' for English.
   */
  language?:
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
   * The name of the email, as displayed on the email dashboard.
   */
  name?: string;

  /**
   * The date and time the email is scheduled for, in ISO8601 representation. This is
   * only used in local time or scheduled emails.
   */
  publishDate?: string;

  rssData?: PublicRssEmailDetails;

  /**
   * Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish?: boolean;

  /**
   * The email state.
   */
  state?:
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
   * The email subcategory.
   */
  subcategory?:
    | 'ab_loser_variant'
    | 'ab_loser_variant_site_page'
    | 'ab_master'
    | 'ab_master_site_page'
    | 'ab_variant'
    | 'ab_variant_site_page'
    | 'automated'
    | 'automated_ab_master'
    | 'automated_ab_variant'
    | 'automated_for_crm'
    | 'automated_for_custom_survey'
    | 'automated_for_deal'
    | 'automated_for_feedback_ces'
    | 'automated_for_feedback_custom'
    | 'automated_for_feedback_nps'
    | 'automated_for_form'
    | 'automated_for_form_buffer'
    | 'automated_for_form_draft'
    | 'automated_for_form_legacy'
    | 'automated_for_leadflow'
    | 'automated_for_ticket'
    | 'batch'
    | 'blog_article_instance_layout'
    | 'blog_article_listing'
    | 'blog_author_detail'
    | 'blog_email'
    | 'blog_email_child'
    | 'case_study'
    | 'case_study_instance_layout'
    | 'case_study_listing'
    | 'discardable_stub'
    | 'imported_blog_post'
    | 'kb_404_page'
    | 'kb_article_instance_layout'
    | 'kb_listing'
    | 'kb_search_results'
    | 'kb_support_form'
    | 'landing_page'
    | 'legacy_blog_post'
    | 'legacy_page'
    | 'localtime'
    | 'manage_preferences_email'
    | 'marketing_single_send_api'
    | 'membership_email_verification'
    | 'membership_follow_up'
    | 'membership_otp_login'
    | 'membership_password_reset'
    | 'membership_password_saved'
    | 'membership_passwordless_auth'
    | 'membership_registration'
    | 'membership_registration_follow_up'
    | 'membership_verification'
    | 'normal_blog_post'
    | 'optin_email'
    | 'optin_followup_email'
    | 'page_instance_layout'
    | 'page_stub'
    | 'performable_landing_page'
    | 'performable_landing_page_cutover'
    | 'podcast_instance_layout'
    | 'podcast_listing'
    | 'portal_content'
    | 'resubscribe_confirmation_email'
    | 'resubscribe_email'
    | 'rss_to_email'
    | 'rss_to_email_child'
    | 'scp_instance_layout_page'
    | 'scp_static_page'
    | 'single_send_api'
    | 'site_page'
    | 'smtp_token'
    | 'staged_page'
    | 'ticket_closed_kickback_email'
    | 'ticket_opened_kickback_email'
    | 'ticket_pipeline_automated'
    | 'UNKNOWN'
    | 'unsubscribe_confirmation_email'
    | 'web_interactive';

  /**
   * The subject of the email.
   */
  subject?: string;

  subscriptionDetails?: PublicEmailSubscriptionDetails;

  testing?: PublicEmailTestingDetails;

  to?: PublicEmailToDetails;

  webversion?: PublicWebversionDetails;
}

export interface EmailUpdateParams {
  /**
   * Query param: Whether to return only results that have been archived.
   */
  query_archived?: boolean;

  /**
   * Body param: The active domain of the email.
   */
  activeDomain?: string;

  /**
   * Body param: Determines if the email is archived or not.
   */
  body_archived?: boolean;

  /**
   * Body param: The ID of the business unit associated with the email.
   */
  businessUnitId?: number;

  /**
   * Body param: The ID of the campaign this email is associated to.
   */
  campaign?: string;

  /**
   * Body param
   */
  content?: PublicEmailContent;

  /**
   * Body param: The ID of the folder where the email will be stored.
   */
  folderIdV2?: number;

  /**
   * Body param
   */
  from?: PublicEmailFromDetails;

  /**
   * Body param: Determines whether the email send time should be randomized to avoid
   * sending all emails at the exact same time.
   */
  jitterSendTime?: boolean;

  /**
   * Body param: The language code for the email, such as 'en' for English.
   */
  language?:
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
   * Body param: The name of the email, as displayed on the email dashboard.
   */
  name?: string;

  /**
   * Body param: The date and time the email is scheduled for, in ISO8601
   * representation. This is only used in local time or scheduled emails.
   */
  publishDate?: string;

  /**
   * Body param
   */
  rssData?: PublicRssEmailDetails;

  /**
   * Body param: Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish?: boolean;

  /**
   * Body param: The email state.
   */
  state?:
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
   * Body param: The email subcategory.
   */
  subcategory?:
    | 'ab_loser_variant'
    | 'ab_loser_variant_site_page'
    | 'ab_master'
    | 'ab_master_site_page'
    | 'ab_variant'
    | 'ab_variant_site_page'
    | 'automated'
    | 'automated_ab_master'
    | 'automated_ab_variant'
    | 'automated_for_crm'
    | 'automated_for_custom_survey'
    | 'automated_for_deal'
    | 'automated_for_feedback_ces'
    | 'automated_for_feedback_custom'
    | 'automated_for_feedback_nps'
    | 'automated_for_form'
    | 'automated_for_form_buffer'
    | 'automated_for_form_draft'
    | 'automated_for_form_legacy'
    | 'automated_for_leadflow'
    | 'automated_for_ticket'
    | 'batch'
    | 'blog_article_instance_layout'
    | 'blog_article_listing'
    | 'blog_author_detail'
    | 'blog_email'
    | 'blog_email_child'
    | 'case_study'
    | 'case_study_instance_layout'
    | 'case_study_listing'
    | 'discardable_stub'
    | 'imported_blog_post'
    | 'kb_404_page'
    | 'kb_article_instance_layout'
    | 'kb_listing'
    | 'kb_search_results'
    | 'kb_support_form'
    | 'landing_page'
    | 'legacy_blog_post'
    | 'legacy_page'
    | 'localtime'
    | 'manage_preferences_email'
    | 'marketing_single_send_api'
    | 'membership_email_verification'
    | 'membership_follow_up'
    | 'membership_otp_login'
    | 'membership_password_reset'
    | 'membership_password_saved'
    | 'membership_passwordless_auth'
    | 'membership_registration'
    | 'membership_registration_follow_up'
    | 'membership_verification'
    | 'normal_blog_post'
    | 'optin_email'
    | 'optin_followup_email'
    | 'page_instance_layout'
    | 'page_stub'
    | 'performable_landing_page'
    | 'performable_landing_page_cutover'
    | 'podcast_instance_layout'
    | 'podcast_listing'
    | 'portal_content'
    | 'resubscribe_confirmation_email'
    | 'resubscribe_email'
    | 'rss_to_email'
    | 'rss_to_email_child'
    | 'scp_instance_layout_page'
    | 'scp_static_page'
    | 'single_send_api'
    | 'site_page'
    | 'smtp_token'
    | 'staged_page'
    | 'ticket_closed_kickback_email'
    | 'ticket_opened_kickback_email'
    | 'ticket_pipeline_automated'
    | 'UNKNOWN'
    | 'unsubscribe_confirmation_email'
    | 'web_interactive';

  /**
   * Body param: The subject of the email.
   */
  subject?: string;

  /**
   * Body param
   */
  subscriptionDetails?: PublicEmailSubscriptionDetails;

  /**
   * Body param
   */
  testing?: PublicEmailTestingDetails;

  /**
   * Body param
   */
  to?: PublicEmailToDetails;

  /**
   * Body param
   */
  webversion?: PublicWebversionDetails;
}

export interface EmailListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  campaign?: string;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  includedProperties?: Array<string>;

  includeStats?: boolean;

  isPublished?: boolean;

  marketingCampaignNames?: boolean;

  publishedAfter?: string;

  publishedAt?: string;

  publishedBefore?: string;

  sort?: Array<string>;

  type?:
    | 'AB_EMAIL'
    | 'AUTOMATED_AB_EMAIL'
    | 'AUTOMATED_EMAIL'
    | 'BATCH_EMAIL'
    | 'BLOG_EMAIL'
    | 'BLOG_EMAIL_CHILD'
    | 'FEEDBACK_CES_EMAIL'
    | 'FEEDBACK_CUSTOM_EMAIL'
    | 'FEEDBACK_CUSTOM_SURVEY_EMAIL'
    | 'FEEDBACK_NPS_EMAIL'
    | 'FOLLOWUP_EMAIL'
    | 'LEADFLOW_EMAIL'
    | 'LOCALTIME_EMAIL'
    | 'MANAGE_PREFERENCES_EMAIL'
    | 'MARKETING_SINGLE_SEND_API'
    | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL'
    | 'MEMBERSHIP_FOLLOW_UP_EMAIL'
    | 'MEMBERSHIP_OTP_LOGIN_EMAIL'
    | 'MEMBERSHIP_PASSWORD_RESET_EMAIL'
    | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL'
    | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL'
    | 'MEMBERSHIP_REGISTRATION_EMAIL'
    | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL'
    | 'MEMBERSHIP_VERIFICATION_EMAIL'
    | 'OPTIN_EMAIL'
    | 'OPTIN_FOLLOWUP_EMAIL'
    | 'RESUBSCRIBE_EMAIL'
    | 'RSS_EMAIL'
    | 'RSS_EMAIL_CHILD'
    | 'SINGLE_SEND_API'
    | 'SMTP_TOKEN'
    | 'TICKET_EMAIL';

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;

  variantStats?: boolean;

  workflowNames?: boolean;
}

export interface EmailDeleteParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface EmailCloneParams {
  /**
   * The email ID.
   */
  id: string;

  /**
   * The name to assign to the cloned email.
   */
  cloneName?: string;

  /**
   * The language code for the cloned email, such as 'en' for English.
   */
  language?: string;
}

export interface EmailCreateAbTestVariationParams {
  /**
   * ID of the object to test.
   */
  contentId: string;

  /**
   * Name of A/B test variation.
   */
  variationName: string;
}

export interface EmailGetParams {
  emailIds?: Array<number>;

  endTimestamp?: string;

  property?: string;

  startTimestamp?: string;
}

export interface EmailGetAbTestVariationParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  includedProperties?: Array<string>;

  includeStats?: boolean;

  marketingCampaignNames?: boolean;

  variantStats?: boolean;

  workflowNames?: boolean;
}

export interface EmailGetHistogramParams {
  emailIds?: Array<number>;

  endTimestamp?: string;

  interval?: 'DAY' | 'HOUR' | 'MINUTE' | 'MONTH' | 'QUARTER' | 'QUARTER_HOUR' | 'SECOND' | 'WEEK' | 'YEAR';

  startTimestamp?: string;
}

export interface EmailGetRevisionParams {
  emailId: string;
}

export interface EmailListRevisionsParams extends PageParams {
  before?: string;
}

export interface EmailRestoreRevisionParams {
  emailId: string;
}

export interface EmailRestoreRevisionToDraftParams {
  emailId: string;
}

export interface EmailUpdateDraftParams {
  /**
   * The active domain of the email.
   */
  activeDomain?: string;

  /**
   * Determines if the email is archived or not.
   */
  archived?: boolean;

  /**
   * The ID of the business unit associated with the email.
   */
  businessUnitId?: number;

  /**
   * The ID of the campaign this email is associated to.
   */
  campaign?: string;

  content?: PublicEmailContent;

  /**
   * The ID of the folder where the email will be stored.
   */
  folderIdV2?: number;

  from?: PublicEmailFromDetails;

  /**
   * Determines whether the email send time should be randomized to avoid sending all
   * emails at the exact same time.
   */
  jitterSendTime?: boolean;

  /**
   * The language code for the email, such as 'en' for English.
   */
  language?:
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
   * The name of the email, as displayed on the email dashboard.
   */
  name?: string;

  /**
   * The date and time the email is scheduled for, in ISO8601 representation. This is
   * only used in local time or scheduled emails.
   */
  publishDate?: string;

  rssData?: PublicRssEmailDetails;

  /**
   * Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish?: boolean;

  /**
   * The email state.
   */
  state?:
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
   * The email subcategory.
   */
  subcategory?:
    | 'ab_loser_variant'
    | 'ab_loser_variant_site_page'
    | 'ab_master'
    | 'ab_master_site_page'
    | 'ab_variant'
    | 'ab_variant_site_page'
    | 'automated'
    | 'automated_ab_master'
    | 'automated_ab_variant'
    | 'automated_for_crm'
    | 'automated_for_custom_survey'
    | 'automated_for_deal'
    | 'automated_for_feedback_ces'
    | 'automated_for_feedback_custom'
    | 'automated_for_feedback_nps'
    | 'automated_for_form'
    | 'automated_for_form_buffer'
    | 'automated_for_form_draft'
    | 'automated_for_form_legacy'
    | 'automated_for_leadflow'
    | 'automated_for_ticket'
    | 'batch'
    | 'blog_article_instance_layout'
    | 'blog_article_listing'
    | 'blog_author_detail'
    | 'blog_email'
    | 'blog_email_child'
    | 'case_study'
    | 'case_study_instance_layout'
    | 'case_study_listing'
    | 'discardable_stub'
    | 'imported_blog_post'
    | 'kb_404_page'
    | 'kb_article_instance_layout'
    | 'kb_listing'
    | 'kb_search_results'
    | 'kb_support_form'
    | 'landing_page'
    | 'legacy_blog_post'
    | 'legacy_page'
    | 'localtime'
    | 'manage_preferences_email'
    | 'marketing_single_send_api'
    | 'membership_email_verification'
    | 'membership_follow_up'
    | 'membership_otp_login'
    | 'membership_password_reset'
    | 'membership_password_saved'
    | 'membership_passwordless_auth'
    | 'membership_registration'
    | 'membership_registration_follow_up'
    | 'membership_verification'
    | 'normal_blog_post'
    | 'optin_email'
    | 'optin_followup_email'
    | 'page_instance_layout'
    | 'page_stub'
    | 'performable_landing_page'
    | 'performable_landing_page_cutover'
    | 'podcast_instance_layout'
    | 'podcast_listing'
    | 'portal_content'
    | 'resubscribe_confirmation_email'
    | 'resubscribe_email'
    | 'rss_to_email'
    | 'rss_to_email_child'
    | 'scp_instance_layout_page'
    | 'scp_static_page'
    | 'single_send_api'
    | 'site_page'
    | 'smtp_token'
    | 'staged_page'
    | 'ticket_closed_kickback_email'
    | 'ticket_opened_kickback_email'
    | 'ticket_pipeline_automated'
    | 'UNKNOWN'
    | 'unsubscribe_confirmation_email'
    | 'web_interactive';

  /**
   * The subject of the email.
   */
  subject?: string;

  subscriptionDetails?: PublicEmailSubscriptionDetails;

  testing?: PublicEmailTestingDetails;

  to?: PublicEmailToDetails;

  webversion?: PublicWebversionDetails;
}

export declare namespace Emails {
  export {
    type AggregateEmailStatistics as AggregateEmailStatistics,
    type CollectionResponseWithTotalEmailStatisticInterval as CollectionResponseWithTotalEmailStatisticInterval,
    type CollectionResponseWithTotalPublicEmail as CollectionResponseWithTotalPublicEmail,
    type CollectionResponseWithTotalPublicEmailVersion as CollectionResponseWithTotalPublicEmailVersion,
    type EmailCloneRequestVNext as EmailCloneRequestVNext,
    type EmailCreateRequest as EmailCreateRequest,
    type EmailStatisticInterval as EmailStatisticInterval,
    type EmailStatisticsData as EmailStatisticsData,
    type EmailUpdateRequest as EmailUpdateRequest,
    type Interval as Interval,
    type PublicButtonStyleSettings as PublicButtonStyleSettings,
    type PublicDividerStyleSettings as PublicDividerStyleSettings,
    type PublicEmail as PublicEmail,
    type PublicEmailContent as PublicEmailContent,
    type PublicEmailFromDetails as PublicEmailFromDetails,
    type PublicEmailRecipients as PublicEmailRecipients,
    type PublicEmailStyleSettings as PublicEmailStyleSettings,
    type PublicEmailSubscriptionDetails as PublicEmailSubscriptionDetails,
    type PublicEmailTestingDetails as PublicEmailTestingDetails,
    type PublicEmailToDetails as PublicEmailToDetails,
    type PublicEmailVersion as PublicEmailVersion,
    type PublicFontStyle as PublicFontStyle,
    type PublicRssEmailDetails as PublicRssEmailDetails,
    type PublicWebversionDetails as PublicWebversionDetails,
    type SmartEmailField as SmartEmailField,
    type VersionPublicEmail as VersionPublicEmail,
    type PublicEmailsPage as PublicEmailsPage,
    type VersionPublicEmailsPage as VersionPublicEmailsPage,
    type EmailCreateParams as EmailCreateParams,
    type EmailUpdateParams as EmailUpdateParams,
    type EmailListParams as EmailListParams,
    type EmailDeleteParams as EmailDeleteParams,
    type EmailCloneParams as EmailCloneParams,
    type EmailCreateAbTestVariationParams as EmailCreateAbTestVariationParams,
    type EmailGetParams as EmailGetParams,
    type EmailGetAbTestVariationParams as EmailGetAbTestVariationParams,
    type EmailGetHistogramParams as EmailGetHistogramParams,
    type EmailGetRevisionParams as EmailGetRevisionParams,
    type EmailListRevisionsParams as EmailListRevisionsParams,
    type EmailRestoreRevisionParams as EmailRestoreRevisionParams,
    type EmailRestoreRevisionToDraftParams as EmailRestoreRevisionToDraftParams,
    type EmailUpdateDraftParams as EmailUpdateDraftParams,
  };
}
