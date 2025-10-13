// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Emails extends APIResource {
  /**
   * Use this endpoint to create a new marketing email.
   *
   * @example
   * ```ts
   * const publicEmail = await client.marketing.emails.create({
   *   name: 'My subject',
   * });
   * ```
   */
  create(body: EmailCreateParams, options?: RequestOptions): APIPromise<PublicEmail> {
    return this._client.post('/marketing/v3/emails/', { body, ...options });
  }

  /**
   * Change properties of a marketing email.
   *
   * @example
   * ```ts
   * const publicEmail = await client.marketing.emails.update(
   *   'emailId',
   * );
   * ```
   */
  update(emailID: string, params: EmailUpdateParams, options?: RequestOptions): APIPromise<PublicEmail> {
    const { query_archived, ...body } = params;
    return this._client.patch(path`/marketing/v3/emails/${emailID}`, {
      query: { archived: query_archived },
      body,
      ...options,
    });
  }

  /**
   * The results can be filtered, allowing you to find a specific set of emails. See
   * the table below for a full list of filtering options.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicEmail of client.marketing.emails.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EmailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicEmailsPage, PublicEmail> {
    return this._client.getAPIList('/marketing/v3/emails/', Page<PublicEmail>, { query, ...options });
  }

  /**
   * Delete a marketing email by its ID
   *
   * @example
   * ```ts
   * await client.marketing.emails.delete('emailId');
   * ```
   */
  delete(
    emailID: string,
    params: EmailDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/marketing/v3/emails/${emailID}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This will create a duplicate email with the same properties as the original,
   * with the exception of a unique ID.
   *
   * @example
   * ```ts
   * const publicEmail = await client.marketing.emails.clone({
   *   id: 'id',
   * });
   * ```
   */
  clone(body: EmailCloneParams, options?: RequestOptions): APIPromise<PublicEmail> {
    return this._client.post('/marketing/v3/emails/clone', { body, ...options });
  }

  /**
   * Create a variation of a marketing email for an A/B test. The new variation will
   * be created as a draft. If an active variation already exists, a new one won't be
   * created.
   *
   * @example
   * ```ts
   * const publicEmail =
   *   await client.marketing.emails.createAbTestVariation({
   *     contentId: '7',
   *     variationName: 'variationName',
   *   });
   * ```
   */
  createAbTestVariation(
    body: EmailCreateAbTestVariationParams,
    options?: RequestOptions,
  ): APIPromise<PublicEmail> {
    return this._client.post('/marketing/v3/emails/ab-test/create-variation', { body, ...options });
  }

  /**
   * This endpoint lets you obtain the variation of an A/B marketing email. If the
   * email is variation A (master) it will return variation B (variant) and vice
   * versa.
   *
   * @example
   * ```ts
   * const publicEmail =
   *   await client.marketing.emails.getAbTestVariation(
   *     'emailId',
   *   );
   * ```
   */
  getAbTestVariation(emailID: string, options?: RequestOptions): APIPromise<PublicEmail> {
    return this._client.get(path`/marketing/v3/emails/${emailID}/ab-test/get-variation`, options);
  }

  /**
   * Get the draft version of an email (if it exists). If no draft version exists,
   * the published email is returned.
   *
   * @example
   * ```ts
   * const publicEmail = await client.marketing.emails.getDraft(
   *   'emailId',
   * );
   * ```
   */
  getDraft(emailID: string, options?: RequestOptions): APIPromise<PublicEmail> {
    return this._client.get(path`/marketing/v3/emails/${emailID}/draft`, options);
  }

  /**
   * Use this endpoint to get aggregated statistics of emails sent in a specified
   * time span. It also returns the list of emails that were sent during the time
   * span.
   *
   * @example
   * ```ts
   * const aggregateEmailStatistics =
   *   await client.marketing.emails.getEmailsList();
   * ```
   */
  getEmailsList(
    query: EmailGetEmailsListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AggregateEmailStatistics> {
    return this._client.get('/marketing/v3/emails/statistics/list', { query, ...options });
  }

  /**
   * Get aggregated statistics in intervals for a specified time span. Each interval
   * contains aggregated statistics of the emails that were sent in that time.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalEmailStatisticIntervalNoPaging =
   *   await client.marketing.emails.getHistogram();
   * ```
   */
  getHistogram(
    query: EmailGetHistogramParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseWithTotalEmailStatisticIntervalNoPaging> {
    return this._client.get('/marketing/v3/emails/statistics/histogram', { query, ...options });
  }

  /**
   * Get a specific revision of a marketing email.
   *
   * @example
   * ```ts
   * const versionPublicEmail =
   *   await client.marketing.emails.getRevisionByID(
   *     'revisionId',
   *     { emailId: 'emailId' },
   *   );
   * ```
   */
  getRevisionByID(
    revisionID: string,
    params: EmailGetRevisionByIDParams,
    options?: RequestOptions,
  ): APIPromise<VersionPublicEmail> {
    const { emailId } = params;
    return this._client.get(path`/marketing/v3/emails/${emailId}/revisions/${revisionID}`, options);
  }

  /**
   * Get a list of all versions of a marketing email, with each entry including the
   * full state of that particular version. To view the most recent version, sort by
   * the updatedAt parameter.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalVersionPublicEmail =
   *   await client.marketing.emails.getRevisions('emailId');
   * ```
   */
  getRevisions(
    emailID: string,
    query: EmailGetRevisionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseWithTotalVersionPublicEmail> {
    return this._client.get(path`/marketing/v3/emails/${emailID}/revisions`, { query, ...options });
  }

  /**
   * If you have a Marketing Hub Enterprise account or the transactional email
   * add-on, you can use this endpoint to publish an automated email or send/schedule
   * a regular email.
   *
   * @example
   * ```ts
   * await client.marketing.emails.publishOrSend('emailId');
   * ```
   */
  publishOrSend(emailID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/marketing/v3/emails/${emailID}/publish`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the details for a marketing email.
   *
   * @example
   * ```ts
   * const publicEmail = await client.marketing.emails.read(
   *   'emailId',
   * );
   * ```
   */
  read(
    emailID: string,
    query: EmailReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicEmail> {
    return this._client.get(path`/marketing/v3/emails/${emailID}`, { query, ...options });
  }

  /**
   * Resets the draft back to a copy of the live object.
   *
   * @example
   * ```ts
   * await client.marketing.emails.resetDraft('emailId');
   * ```
   */
  resetDraft(emailID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/marketing/v3/emails/${emailID}/draft/reset`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restores a previous revision of a marketing email to DRAFT state. If there is
   * currently something in the draft for that object, it is overwritten.
   *
   * @example
   * ```ts
   * const publicEmail =
   *   await client.marketing.emails.restoreDraftRevision(0, {
   *     emailId: 'emailId',
   *   });
   * ```
   */
  restoreDraftRevision(
    revisionID: number,
    params: EmailRestoreDraftRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PublicEmail> {
    const { emailId } = params;
    return this._client.post(
      path`/marketing/v3/emails/${emailId}/revisions/${revisionID}/restore-to-draft`,
      options,
    );
  }

  /**
   * Restores a previous revision of a marketing email. The current revision becomes
   * old, and the restored revision is given a new version number.
   *
   * @example
   * ```ts
   * await client.marketing.emails.restoreRevision(
   *   'revisionId',
   *   { emailId: 'emailId' },
   * );
   * ```
   */
  restoreRevision(
    revisionID: string,
    params: EmailRestoreRevisionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { emailId } = params;
    return this._client.post(path`/marketing/v3/emails/${emailId}/revisions/${revisionID}/restore`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * If you have a Marketing Hub Enterprise account or the transactional email
   * add-on, you can use this endpoint to unpublish an automated email or cancel a
   * regular email. If the email is already in the process of being sent, canceling
   * might not be possible.
   *
   * @example
   * ```ts
   * await client.marketing.emails.unpublishOrCancel('emailId');
   * ```
   */
  unpublishOrCancel(emailID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/marketing/v3/emails/${emailID}/unpublish`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create or update the draft version of a marketing email. If no draft exists, the
   * system creates a draft from the current “live” email then applies the request
   * body to that draft. The draft version only lives on the buffer—the email is not
   * cloned.
   *
   * @example
   * ```ts
   * const publicEmail =
   *   await client.marketing.emails.upsertDraft('emailId');
   * ```
   */
  upsertDraft(
    emailID: string,
    body: EmailUpsertDraftParams,
    options?: RequestOptions,
  ): APIPromise<PublicEmail> {
    return this._client.patch(path`/marketing/v3/emails/${emailID}/draft`, { body, ...options });
  }
}

export type PublicEmailsPage = Page<PublicEmail>;

/**
 * Request body object for creating A/B tests.
 */
export interface AbTestCreateRequestVNext {
  /**
   * ID of the object to test.
   */
  contentId: string;

  variationName: string;
}

/**
 * Aggregated statistics for the given interval, plus the IDs of emails that were
 * sent during that interval.
 */
export interface AggregateEmailStatistics {
  aggregate?: EmailStatisticsData;

  /**
   * The aggregated statistics per campaign.
   */
  campaignAggregations?: { [key: string]: EmailStatisticsData };

  /**
   * List of email IDs that were sent during the time span.
   */
  emails?: Array<number>;
}

/**
 * Response object for collections of EmailStatisticIntervals.
 */
export interface CollectionResponseWithTotalEmailStatisticIntervalNoPaging {
  /**
   * Collection of objects.
   */
  results: Array<EmailStatisticInterval>;

  /**
   * Total number of objects.
   */
  total: number;
}

/**
 * Response object for collections of marketing emails with pagination information.
 */
export interface CollectionResponseWithTotalPublicEmailForwardPaging {
  /**
   * Collection of emails.
   */
  results: Array<PublicEmail>;

  /**
   * Total number of content emails.
   */
  total: number;

  paging?: Shared.ForwardPaging;
}

/**
 * Response object for collections of marketing emails with pagination information.
 */
export interface CollectionResponseWithTotalVersionPublicEmail {
  /**
   * Collection of emails.
   */
  results: Array<VersionPublicEmail>;

  /**
   * Total number of content emails.
   */
  total: number;

  /**
   * Contains information pagination of results.
   */
  paging?: Paging;
}

export interface EmailCloneRequestVNext {
  /**
   * The unique identifier of the email to be cloned.
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

/**
 * Properties of a marketing email you can set when creating a marketing email.
 */
export interface EmailCreateRequest {
  /**
   * The name of the email, as displayed on the email dashboard.
   */
  name: string;

  /**
   * The active domain of the email.
   */
  activeDomain?: string;

  /**
   * Determines if the email is archived or not.
   */
  archived?: boolean;

  businessUnitId?: number;

  /**
   * The ID of the campaign this email is associated to.
   */
  campaign?: string;

  /**
   * Data structure representing the content of the email.
   */
  content?: PublicEmailContent;

  /**
   * The ID of the feedback survey linked to the email.
   */
  feedbackSurveyId?: string;

  /**
   * Data structure representing the from fields on the email.
   */
  from?: PublicEmailFromDetails;

  jitterSendTime?: boolean;

  language?:
    | 'af'
    | 'af-na'
    | 'af-za'
    | 'agq'
    | 'agq-cm'
    | 'ak'
    | 'ak-gh'
    | 'am'
    | 'am-et'
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
    | 'az'
    | 'az-az'
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
    | 'ka-ge'
    | 'kde'
    | 'kde-tz'
    | 'kea'
    | 'kea-cv'
    | 'kgp'
    | 'kgp-br'
    | 'khq'
    | 'khq-ml'
    | 'ki'
    | 'ki-ke'
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
    | 'kw'
    | 'kw-gb'
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
    | 'no'
    | 'no-no'
    | 'nus'
    | 'nus-ss'
    | 'nyn'
    | 'nyn-ug'
    | 'oc'
    | 'oc-es'
    | 'oc-fr'
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
    | 'to'
    | 'tok'
    | 'tok-001'
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
    | 'yrl'
    | 'yrl-br'
    | 'yrl-co'
    | 'yrl-ve'
    | 'yue'
    | 'yue-cn'
    | 'yue-hk'
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
   * The date and time the email is scheduled for, in ISO8601 representation. This is
   * only used in local time or scheduled emails.
   */
  publishDate?: string;

  /**
   * RSS related data if it is a blog or rss email.
   */
  rssData?: PublicRssEmailDetails;

  /**
   * Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish?: boolean;

  /**
   * The email state.
   */
  state?:
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
   * The email subcategory.
   */
  subcategory?:
    | 'ab_master'
    | 'ab_variant'
    | 'ab_loser_variant'
    | 'page_stub'
    | 'landing_page'
    | 'site_page'
    | 'legacy_page'
    | 'ab_master_site_page'
    | 'ab_variant_site_page'
    | 'ab_loser_variant_site_page'
    | 'performable_landing_page'
    | 'performable_landing_page_cutover'
    | 'staged_page'
    | 'automated'
    | 'automated_for_deal'
    | 'automated_for_form'
    | 'automated_for_form_legacy'
    | 'automated_for_form_buffer'
    | 'automated_for_form_draft'
    | 'rss_to_email'
    | 'rss_to_email_child'
    | 'blog_email'
    | 'blog_email_child'
    | 'optin_email'
    | 'optin_followup_email'
    | 'batch'
    | 'resubscribe_email'
    | 'unsubscribe_confirmation_email'
    | 'resubscribe_confirmation_email'
    | 'single_send_api'
    | 'marketing_single_send_api'
    | 'smtp_token'
    | 'localtime'
    | 'automated_for_ticket'
    | 'automated_for_leadflow'
    | 'automated_for_feedback_ces'
    | 'automated_for_feedback_nps'
    | 'automated_for_feedback_custom'
    | 'membership_registration'
    | 'membership_password_saved'
    | 'membership_password_reset'
    | 'membership_otp_login'
    | 'membership_passwordless_auth'
    | 'membership_email_verification'
    | 'membership_registration_follow_up'
    | 'membership_verification'
    | 'membership_follow_up'
    | 'ticket_closed_kickback_email'
    | 'ticket_opened_kickback_email'
    | 'automated_for_custom_survey'
    | 'discardable_stub'
    | 'normal_blog_post'
    | 'legacy_blog_post'
    | 'imported_blog_post'
    | 'automated_ab_master'
    | 'automated_ab_variant'
    | 'web_interactive'
    | 'portal_content'
    | 'page_instance_layout'
    | 'kb_article_instance_layout'
    | 'kb_listing'
    | 'kb_search_results'
    | 'kb_support_form'
    | 'kb_404_page'
    | 'case_study'
    | 'case_study_listing'
    | 'case_study_instance_layout'
    | 'scp_static_page'
    | 'scp_instance_layout_page'
    | 'podcast_instance_layout'
    | 'podcast_listing'
    | 'blog_article_instance_layout'
    | 'blog_article_listing'
    | 'blog_author_detail'
    | 'UNKNOWN';

  /**
   * The subject of the email.
   */
  subject?: string;

  /**
   * Data structure representing the subscription fields of the email.
   */
  subscriptionDetails?: PublicEmailSubscriptionDetails;

  /**
   * AB testing related data. This property is only returned for AB type emails.
   */
  testing?: PublicEmailTestingDetails;

  /**
   * Data structure representing the to fields of the email.
   */
  to?: PublicEmailToDetails;

  webversion?: PublicWebversionDetails;
}

export interface EmailStatisticInterval {
  aggregations?: EmailStatisticsData;

  interval?: Interval;
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

/**
 * Properties of a marketing email you can update via the API.
 */
export interface EmailUpdateRequest {
  /**
   * The active domain of the email.
   */
  activeDomain?: string;

  /**
   * Determines if the email is archived or not.
   */
  archived?: boolean;

  businessUnitId?: number;

  /**
   * The ID of the campaign this email is associated to.
   */
  campaign?: string;

  /**
   * Data structure representing the content of the email.
   */
  content?: PublicEmailContent;

  /**
   * Data structure representing the from fields on the email.
   */
  from?: PublicEmailFromDetails;

  jitterSendTime?: boolean;

  language?:
    | 'af'
    | 'af-na'
    | 'af-za'
    | 'agq'
    | 'agq-cm'
    | 'ak'
    | 'ak-gh'
    | 'am'
    | 'am-et'
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
    | 'az'
    | 'az-az'
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
    | 'ka-ge'
    | 'kde'
    | 'kde-tz'
    | 'kea'
    | 'kea-cv'
    | 'kgp'
    | 'kgp-br'
    | 'khq'
    | 'khq-ml'
    | 'ki'
    | 'ki-ke'
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
    | 'kw'
    | 'kw-gb'
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
    | 'no'
    | 'no-no'
    | 'nus'
    | 'nus-ss'
    | 'nyn'
    | 'nyn-ug'
    | 'oc'
    | 'oc-es'
    | 'oc-fr'
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
    | 'to'
    | 'tok'
    | 'tok-001'
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
    | 'yrl'
    | 'yrl-br'
    | 'yrl-co'
    | 'yrl-ve'
    | 'yue'
    | 'yue-cn'
    | 'yue-hk'
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

  /**
   * RSS related data if it is a blog or rss email.
   */
  rssData?: PublicRssEmailDetails;

  /**
   * Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish?: boolean;

  /**
   * The email state.
   */
  state?:
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
   * The email subcategory.
   */
  subcategory?:
    | 'ab_master'
    | 'ab_variant'
    | 'ab_loser_variant'
    | 'page_stub'
    | 'landing_page'
    | 'site_page'
    | 'legacy_page'
    | 'ab_master_site_page'
    | 'ab_variant_site_page'
    | 'ab_loser_variant_site_page'
    | 'performable_landing_page'
    | 'performable_landing_page_cutover'
    | 'staged_page'
    | 'automated'
    | 'automated_for_deal'
    | 'automated_for_form'
    | 'automated_for_form_legacy'
    | 'automated_for_form_buffer'
    | 'automated_for_form_draft'
    | 'rss_to_email'
    | 'rss_to_email_child'
    | 'blog_email'
    | 'blog_email_child'
    | 'optin_email'
    | 'optin_followup_email'
    | 'batch'
    | 'resubscribe_email'
    | 'unsubscribe_confirmation_email'
    | 'resubscribe_confirmation_email'
    | 'single_send_api'
    | 'marketing_single_send_api'
    | 'smtp_token'
    | 'localtime'
    | 'automated_for_ticket'
    | 'automated_for_leadflow'
    | 'automated_for_feedback_ces'
    | 'automated_for_feedback_nps'
    | 'automated_for_feedback_custom'
    | 'membership_registration'
    | 'membership_password_saved'
    | 'membership_password_reset'
    | 'membership_otp_login'
    | 'membership_passwordless_auth'
    | 'membership_email_verification'
    | 'membership_registration_follow_up'
    | 'membership_verification'
    | 'membership_follow_up'
    | 'ticket_closed_kickback_email'
    | 'ticket_opened_kickback_email'
    | 'automated_for_custom_survey'
    | 'discardable_stub'
    | 'normal_blog_post'
    | 'legacy_blog_post'
    | 'imported_blog_post'
    | 'automated_ab_master'
    | 'automated_ab_variant'
    | 'web_interactive'
    | 'portal_content'
    | 'page_instance_layout'
    | 'kb_article_instance_layout'
    | 'kb_listing'
    | 'kb_search_results'
    | 'kb_support_form'
    | 'kb_404_page'
    | 'case_study'
    | 'case_study_listing'
    | 'case_study_instance_layout'
    | 'scp_static_page'
    | 'scp_instance_layout_page'
    | 'podcast_instance_layout'
    | 'podcast_listing'
    | 'blog_article_instance_layout'
    | 'blog_article_listing'
    | 'blog_author_detail'
    | 'UNKNOWN';

  /**
   * The subject of the email.
   */
  subject?: string;

  /**
   * Data structure representing the subscription fields of the email.
   */
  subscriptionDetails?: PublicEmailSubscriptionDetails;

  /**
   * AB testing related data. This property is only returned for AB type emails.
   */
  testing?: PublicEmailTestingDetails;

  /**
   * Data structure representing the to fields of the email.
   */
  to?: PublicEmailToDetails;

  webversion?: PublicWebversionDetails;
}

export interface Interval {
  end: string;

  start: string;
}

/**
 * Contains information pagination of results.
 */
export interface Paging {
  /**
   * Specifies the paging information needed to retrieve the next set of results in a
   * paginated API response
   */
  next: Shared.NextPage;

  /**
   * specifies the paging information needed to retrieve the previous set of results
   * in a paginated API response
   */
  prev?: Shared.PreviousPage;
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

/**
 * A marketing email
 */
export interface PublicEmail {
  /**
   * The email ID.
   */
  id: string;

  /**
   * Data structure representing the content of the email.
   */
  content: PublicEmailContent;

  /**
   * Data structure representing the from fields on the email.
   */
  from: PublicEmailFromDetails;

  /**
   * The name of the email, as displayed on the email dashboard.
   */
  name: string;

  /**
   * Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish: boolean;

  /**
   * The email state.
   */
  state:
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
   * The email subcategory.
   */
  subcategory: string;

  /**
   * The subject of the email.
   */
  subject: string;

  /**
   * Data structure representing the to fields of the email.
   */
  to: PublicEmailToDetails;

  /**
   * The active domain of the email.
   */
  activeDomain?: string;

  allEmailCampaignIds?: Array<string>;

  /**
   * Determines if the email is archived or not.
   */
  archived?: boolean;

  businessUnitId?: string;

  /**
   * The campaign GUID on the email.
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

  /**
   * The ID of the feedback survey linked to the email.
   */
  feedbackSurveyId?: string;

  folderId?: number;

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
    | 'af'
    | 'af-na'
    | 'af-za'
    | 'agq'
    | 'agq-cm'
    | 'ak'
    | 'ak-gh'
    | 'am'
    | 'am-et'
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
    | 'az'
    | 'az-az'
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
    | 'ka-ge'
    | 'kde'
    | 'kde-tz'
    | 'kea'
    | 'kea-cv'
    | 'kgp'
    | 'kgp-br'
    | 'khq'
    | 'khq-ml'
    | 'ki'
    | 'ki-ke'
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
    | 'kw'
    | 'kw-gb'
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
    | 'no'
    | 'no-no'
    | 'nus'
    | 'nus-ss'
    | 'nyn'
    | 'nyn-ug'
    | 'oc'
    | 'oc-es'
    | 'oc-fr'
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
    | 'to'
    | 'tok'
    | 'tok-001'
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
    | 'yrl'
    | 'yrl-br'
    | 'yrl-co'
    | 'yrl-ve'
    | 'yue'
    | 'yue-cn'
    | 'yue-hk'
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
   * The date and time the email is scheduled for, in ISO8601 representation. This is
   * only used in local time or scheduled emails.
   */
  publishDate?: string;

  /**
   * The date and time the email was published at, in ISO8601 representation.
   */
  publishedAt?: string;

  publishedByEmail?: string;

  /**
   * The ID of the user who published the email.
   */
  publishedById?: string;

  publishedByName?: string;

  /**
   * RSS related data if it is a blog or rss email.
   */
  rssData?: PublicRssEmailDetails;

  stats?: EmailStatisticsData;

  /**
   * Data structure representing the subscription fields of the email.
   */
  subscriptionDetails?: PublicEmailSubscriptionDetails;

  /**
   * AB testing related data. This property is only returned for AB type emails.
   */
  testing?: PublicEmailTestingDetails;

  /**
   * The email type, this is derived from other properties on the email such as
   * subcategory.
   */
  type?:
    | 'AB_EMAIL'
    | 'BATCH_EMAIL'
    | 'LOCALTIME_EMAIL'
    | 'AUTOMATED_AB_EMAIL'
    | 'BLOG_EMAIL'
    | 'BLOG_EMAIL_CHILD'
    | 'RSS_EMAIL'
    | 'RSS_EMAIL_CHILD'
    | 'RESUBSCRIBE_EMAIL'
    | 'OPTIN_EMAIL'
    | 'OPTIN_FOLLOWUP_EMAIL'
    | 'AUTOMATED_EMAIL'
    | 'FEEDBACK_CES_EMAIL'
    | 'FEEDBACK_CUSTOM_EMAIL'
    | 'FEEDBACK_CUSTOM_SURVEY_EMAIL'
    | 'FEEDBACK_NPS_EMAIL'
    | 'FOLLOWUP_EMAIL'
    | 'LEADFLOW_EMAIL'
    | 'SINGLE_SEND_API'
    | 'MARKETING_SINGLE_SEND_API'
    | 'SMTP_TOKEN'
    | 'TICKET_EMAIL'
    | 'MEMBERSHIP_REGISTRATION_EMAIL'
    | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL'
    | 'MEMBERSHIP_PASSWORD_RESET_EMAIL'
    | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL'
    | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL'
    | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL'
    | 'MEMBERSHIP_OTP_LOGIN_EMAIL'
    | 'MEMBERSHIP_FOLLOW_UP_EMAIL'
    | 'MEMBERSHIP_VERIFICATION_EMAIL';

  /**
   * The date and time of the last update to the email, in ISO8601 representation.
   */
  updatedAt?: string;

  /**
   * The ID of the user who last updated the email.
   */
  updatedById?: string;

  webversion?: PublicWebversionDetails;

  /**
   * Names of workflows in which the email is used within a "send email" action.
   */
  workflowNames?: Array<string>;
}

/**
 * Data structure representing the content of the email.
 */
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

/**
 * Data structure representing the from fields on the email.
 */
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

/**
 * Data structure representing lists of IDs that should be included and excluded.
 */
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

  backgroundImageType?: string;

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

/**
 * Data structure representing the subscription fields of the email.
 */
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
}

/**
 * AB testing related data. This property is only returned for AB type emails.
 */
export interface PublicEmailTestingDetails {
  /**
   * Version of the email that should be sent if there are too few recipients to
   * conduct an AB test.
   */
  abSampleSizeDefault?:
    | 'master'
    | 'variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'automated_loser_variant';

  /**
   * Version of the email that should be sent if the results are inconclusive after
   * the test period, master or variant.
   */
  abSamplingDefault?:
    | 'master'
    | 'variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'automated_loser_variant';

  /**
   * Status of the AB test.
   */
  abStatus?:
    | 'master'
    | 'variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'automated_loser_variant';

  /**
   * Metric to determine the version that will be sent to the remaining contacts.
   */
  abSuccessMetric?: 'CLICKS_BY_OPENS' | 'CLICKS_BY_DELIVERED' | 'OPENS_BY_DELIVERED';

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

/**
 * Data structure representing the to fields of the email.
 */
export interface PublicEmailToDetails {
  /**
   * Data structure representing lists of IDs that should be included and excluded.
   */
  contactIds?: PublicEmailRecipients;

  /**
   * Data structure representing lists of IDs that should be included and excluded.
   */
  contactIlsLists?: PublicEmailRecipients;

  /**
   * Data structure representing lists of IDs that should be included and excluded.
   */
  contactLists?: PublicEmailRecipients;

  limitSendFrequency?: boolean;

  suppressGraymail?: boolean;
}

export interface PublicFontStyle {
  bold?: boolean;

  color?: string;

  font?: string;

  italic?: boolean;

  size?: number;

  underline?: boolean;
}

/**
 * RSS related data if it is a blog or rss email.
 */
export interface PublicRssEmailDetails {
  blogEmailType?: string;

  blogImageMaxWidth?: number;

  blogLayout?: string;

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

/**
 * An email field whose value is controlled by one or more smart rules.
 */
export type SmartEmailField = unknown;

/**
 * Model definition for a marketing email version. Contains metadata describing the
 * version of the marketing email. It can be used to view edit history of a
 * marketing email.
 */
export interface VersionPublicEmail {
  /**
   * ID of this marketing email version.
   */
  id: string;

  /**
   * A marketing email
   */
  object: PublicEmail;

  updatedAt: string;

  /**
   * Model definition for a version user. Contains addition information about the
   * user who created a version.
   */
  user: Shared.VersionUser;
}

export interface EmailCreateParams {
  /**
   * The name of the email, as displayed on the email dashboard.
   */
  name: string;

  /**
   * The active domain of the email.
   */
  activeDomain?: string;

  /**
   * Determines if the email is archived or not.
   */
  archived?: boolean;

  businessUnitId?: number;

  /**
   * The ID of the campaign this email is associated to.
   */
  campaign?: string;

  /**
   * Data structure representing the content of the email.
   */
  content?: PublicEmailContent;

  /**
   * The ID of the feedback survey linked to the email.
   */
  feedbackSurveyId?: string;

  /**
   * Data structure representing the from fields on the email.
   */
  from?: PublicEmailFromDetails;

  jitterSendTime?: boolean;

  language?:
    | 'af'
    | 'af-na'
    | 'af-za'
    | 'agq'
    | 'agq-cm'
    | 'ak'
    | 'ak-gh'
    | 'am'
    | 'am-et'
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
    | 'az'
    | 'az-az'
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
    | 'ka-ge'
    | 'kde'
    | 'kde-tz'
    | 'kea'
    | 'kea-cv'
    | 'kgp'
    | 'kgp-br'
    | 'khq'
    | 'khq-ml'
    | 'ki'
    | 'ki-ke'
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
    | 'kw'
    | 'kw-gb'
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
    | 'no'
    | 'no-no'
    | 'nus'
    | 'nus-ss'
    | 'nyn'
    | 'nyn-ug'
    | 'oc'
    | 'oc-es'
    | 'oc-fr'
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
    | 'to'
    | 'tok'
    | 'tok-001'
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
    | 'yrl'
    | 'yrl-br'
    | 'yrl-co'
    | 'yrl-ve'
    | 'yue'
    | 'yue-cn'
    | 'yue-hk'
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
   * The date and time the email is scheduled for, in ISO8601 representation. This is
   * only used in local time or scheduled emails.
   */
  publishDate?: string;

  /**
   * RSS related data if it is a blog or rss email.
   */
  rssData?: PublicRssEmailDetails;

  /**
   * Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish?: boolean;

  /**
   * The email state.
   */
  state?:
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
   * The email subcategory.
   */
  subcategory?:
    | 'ab_master'
    | 'ab_variant'
    | 'ab_loser_variant'
    | 'page_stub'
    | 'landing_page'
    | 'site_page'
    | 'legacy_page'
    | 'ab_master_site_page'
    | 'ab_variant_site_page'
    | 'ab_loser_variant_site_page'
    | 'performable_landing_page'
    | 'performable_landing_page_cutover'
    | 'staged_page'
    | 'automated'
    | 'automated_for_deal'
    | 'automated_for_form'
    | 'automated_for_form_legacy'
    | 'automated_for_form_buffer'
    | 'automated_for_form_draft'
    | 'rss_to_email'
    | 'rss_to_email_child'
    | 'blog_email'
    | 'blog_email_child'
    | 'optin_email'
    | 'optin_followup_email'
    | 'batch'
    | 'resubscribe_email'
    | 'unsubscribe_confirmation_email'
    | 'resubscribe_confirmation_email'
    | 'single_send_api'
    | 'marketing_single_send_api'
    | 'smtp_token'
    | 'localtime'
    | 'automated_for_ticket'
    | 'automated_for_leadflow'
    | 'automated_for_feedback_ces'
    | 'automated_for_feedback_nps'
    | 'automated_for_feedback_custom'
    | 'membership_registration'
    | 'membership_password_saved'
    | 'membership_password_reset'
    | 'membership_otp_login'
    | 'membership_passwordless_auth'
    | 'membership_email_verification'
    | 'membership_registration_follow_up'
    | 'membership_verification'
    | 'membership_follow_up'
    | 'ticket_closed_kickback_email'
    | 'ticket_opened_kickback_email'
    | 'automated_for_custom_survey'
    | 'discardable_stub'
    | 'normal_blog_post'
    | 'legacy_blog_post'
    | 'imported_blog_post'
    | 'automated_ab_master'
    | 'automated_ab_variant'
    | 'web_interactive'
    | 'portal_content'
    | 'page_instance_layout'
    | 'kb_article_instance_layout'
    | 'kb_listing'
    | 'kb_search_results'
    | 'kb_support_form'
    | 'kb_404_page'
    | 'case_study'
    | 'case_study_listing'
    | 'case_study_instance_layout'
    | 'scp_static_page'
    | 'scp_instance_layout_page'
    | 'podcast_instance_layout'
    | 'podcast_listing'
    | 'blog_article_instance_layout'
    | 'blog_article_listing'
    | 'blog_author_detail'
    | 'UNKNOWN';

  /**
   * The subject of the email.
   */
  subject?: string;

  /**
   * Data structure representing the subscription fields of the email.
   */
  subscriptionDetails?: PublicEmailSubscriptionDetails;

  /**
   * AB testing related data. This property is only returned for AB type emails.
   */
  testing?: PublicEmailTestingDetails;

  /**
   * Data structure representing the to fields of the email.
   */
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
   * Body param:
   */
  businessUnitId?: number;

  /**
   * Body param: The ID of the campaign this email is associated to.
   */
  campaign?: string;

  /**
   * Body param: Data structure representing the content of the email.
   */
  content?: PublicEmailContent;

  /**
   * Body param: Data structure representing the from fields on the email.
   */
  from?: PublicEmailFromDetails;

  /**
   * Body param:
   */
  jitterSendTime?: boolean;

  /**
   * Body param:
   */
  language?:
    | 'af'
    | 'af-na'
    | 'af-za'
    | 'agq'
    | 'agq-cm'
    | 'ak'
    | 'ak-gh'
    | 'am'
    | 'am-et'
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
    | 'az'
    | 'az-az'
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
    | 'ka-ge'
    | 'kde'
    | 'kde-tz'
    | 'kea'
    | 'kea-cv'
    | 'kgp'
    | 'kgp-br'
    | 'khq'
    | 'khq-ml'
    | 'ki'
    | 'ki-ke'
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
    | 'kw'
    | 'kw-gb'
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
    | 'no'
    | 'no-no'
    | 'nus'
    | 'nus-ss'
    | 'nyn'
    | 'nyn-ug'
    | 'oc'
    | 'oc-es'
    | 'oc-fr'
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
    | 'to'
    | 'tok'
    | 'tok-001'
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
    | 'yrl'
    | 'yrl-br'
    | 'yrl-co'
    | 'yrl-ve'
    | 'yue'
    | 'yue-cn'
    | 'yue-hk'
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
   * Body param: RSS related data if it is a blog or rss email.
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
   * Body param: The email subcategory.
   */
  subcategory?:
    | 'ab_master'
    | 'ab_variant'
    | 'ab_loser_variant'
    | 'page_stub'
    | 'landing_page'
    | 'site_page'
    | 'legacy_page'
    | 'ab_master_site_page'
    | 'ab_variant_site_page'
    | 'ab_loser_variant_site_page'
    | 'performable_landing_page'
    | 'performable_landing_page_cutover'
    | 'staged_page'
    | 'automated'
    | 'automated_for_deal'
    | 'automated_for_form'
    | 'automated_for_form_legacy'
    | 'automated_for_form_buffer'
    | 'automated_for_form_draft'
    | 'rss_to_email'
    | 'rss_to_email_child'
    | 'blog_email'
    | 'blog_email_child'
    | 'optin_email'
    | 'optin_followup_email'
    | 'batch'
    | 'resubscribe_email'
    | 'unsubscribe_confirmation_email'
    | 'resubscribe_confirmation_email'
    | 'single_send_api'
    | 'marketing_single_send_api'
    | 'smtp_token'
    | 'localtime'
    | 'automated_for_ticket'
    | 'automated_for_leadflow'
    | 'automated_for_feedback_ces'
    | 'automated_for_feedback_nps'
    | 'automated_for_feedback_custom'
    | 'membership_registration'
    | 'membership_password_saved'
    | 'membership_password_reset'
    | 'membership_otp_login'
    | 'membership_passwordless_auth'
    | 'membership_email_verification'
    | 'membership_registration_follow_up'
    | 'membership_verification'
    | 'membership_follow_up'
    | 'ticket_closed_kickback_email'
    | 'ticket_opened_kickback_email'
    | 'automated_for_custom_survey'
    | 'discardable_stub'
    | 'normal_blog_post'
    | 'legacy_blog_post'
    | 'imported_blog_post'
    | 'automated_ab_master'
    | 'automated_ab_variant'
    | 'web_interactive'
    | 'portal_content'
    | 'page_instance_layout'
    | 'kb_article_instance_layout'
    | 'kb_listing'
    | 'kb_search_results'
    | 'kb_support_form'
    | 'kb_404_page'
    | 'case_study'
    | 'case_study_listing'
    | 'case_study_instance_layout'
    | 'scp_static_page'
    | 'scp_instance_layout_page'
    | 'podcast_instance_layout'
    | 'podcast_listing'
    | 'blog_article_instance_layout'
    | 'blog_article_listing'
    | 'blog_author_detail'
    | 'UNKNOWN';

  /**
   * Body param: The subject of the email.
   */
  subject?: string;

  /**
   * Body param: Data structure representing the subscription fields of the email.
   */
  subscriptionDetails?: PublicEmailSubscriptionDetails;

  /**
   * Body param: AB testing related data. This property is only returned for AB type
   * emails.
   */
  testing?: PublicEmailTestingDetails;

  /**
   * Body param: Data structure representing the to fields of the email.
   */
  to?: PublicEmailToDetails;

  /**
   * Body param:
   */
  webversion?: PublicWebversionDetails;
}

export interface EmailListParams extends PageParams {
  /**
   * Specifies whether to return archived emails. Defaults to `false`.
   */
  archived?: boolean;

  /**
   * Filter by campaign GUID. All emails will be returned if not present.
   */
  campaign?: string;

  /**
   * Only return emails created after the specified time.
   */
  createdAfter?: string;

  /**
   * Only return emails created at exactly the specified time.
   */
  createdAt?: string;

  /**
   * Only return emails created before the specified time.
   */
  createdBefore?: string;

  /**
   * Limit the response to only include this specified list of properties.
   */
  includedProperties?: Array<string>;

  /**
   * Include statistics with emails.
   */
  includeStats?: boolean;

  /**
   * Filter by published/draft emails. All emails will be returned if not present.
   */
  isPublished?: boolean;

  /**
   * Include the names for any associated marketing campaigns.
   */
  marketingCampaignNames?: boolean;

  /**
   * Specifies which fields to use for sorting results. Valid fields are `name`,
   * `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. `createdAt` will be used by
   * default.
   */
  sort?: Array<string>;

  /**
   * Email types to be filtered by. Multiple types can be included. All emails will
   * be returned if not present.
   */
  type?:
    | 'AB_EMAIL'
    | 'BATCH_EMAIL'
    | 'LOCALTIME_EMAIL'
    | 'AUTOMATED_AB_EMAIL'
    | 'BLOG_EMAIL'
    | 'BLOG_EMAIL_CHILD'
    | 'RSS_EMAIL'
    | 'RSS_EMAIL_CHILD'
    | 'RESUBSCRIBE_EMAIL'
    | 'OPTIN_EMAIL'
    | 'OPTIN_FOLLOWUP_EMAIL'
    | 'AUTOMATED_EMAIL'
    | 'FEEDBACK_CES_EMAIL'
    | 'FEEDBACK_CUSTOM_EMAIL'
    | 'FEEDBACK_CUSTOM_SURVEY_EMAIL'
    | 'FEEDBACK_NPS_EMAIL'
    | 'FOLLOWUP_EMAIL'
    | 'LEADFLOW_EMAIL'
    | 'SINGLE_SEND_API'
    | 'MARKETING_SINGLE_SEND_API'
    | 'SMTP_TOKEN'
    | 'TICKET_EMAIL'
    | 'MEMBERSHIP_REGISTRATION_EMAIL'
    | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL'
    | 'MEMBERSHIP_PASSWORD_RESET_EMAIL'
    | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL'
    | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL'
    | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL'
    | 'MEMBERSHIP_OTP_LOGIN_EMAIL'
    | 'MEMBERSHIP_FOLLOW_UP_EMAIL'
    | 'MEMBERSHIP_VERIFICATION_EMAIL';

  /**
   * Only return emails last updated after the specified time.
   */
  updatedAfter?: string;

  /**
   * Only return emails last updated at exactly the specified time.
   */
  updatedAt?: string;

  /**
   * Only return emails last updated before the specified time.
   */
  updatedBefore?: string;

  /**
   * Include the names of any workflows associated with the returned emails.
   */
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
   * The unique identifier of the email to be cloned.
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

  variationName: string;
}

export interface EmailGetEmailsListParams {
  /**
   * Filter by email IDs. Only include statistics of emails with these IDs.
   */
  emailIds?: Array<number>;

  /**
   * The end timestamp of the time span, in ISO8601 representation.
   */
  endTimestamp?: string;

  /**
   * Specifies which email properties should be returned. All properties will be
   * returned by default.
   */
  property?: string;

  /**
   * The start timestamp of the time span, in ISO8601 representation.
   */
  startTimestamp?: string;
}

export interface EmailGetHistogramParams {
  /**
   * Filter by email IDs. Only include statistics of emails with these IDs.
   */
  emailIds?: Array<number>;

  /**
   * The end timestamp of the time span, in ISO8601 representation.
   */
  endTimestamp?: string;

  /**
   * The interval to aggregate statistics for.
   */
  interval?: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'QUARTER_HOUR' | 'MINUTE' | 'SECOND';

  /**
   * The start timestamp of the time span, in ISO8601 representation.
   */
  startTimestamp?: string;
}

export interface EmailGetRevisionByIDParams {
  /**
   * The marketing email ID.
   */
  emailId: string;
}

export interface EmailGetRevisionsParams {
  /**
   * The cursor token value to get the next set of results. You can get this from the
   * `paging.next.after` JSON property of a paged response containing more results.
   */
  after?: string;

  /**
   * The cursor token value to get the previous set of results. You can get this from
   * the `paging.prev.before` JSON property of a paged response containing more
   * results.
   */
  before?: string;

  /**
   * The maximum number of results to return. Default is 10.
   */
  limit?: number;
}

export interface EmailReadParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Limit the response to only include the specified properties.
   */
  includedProperties?: Array<string>;

  /**
   * Include statistics with email.
   */
  includeStats?: boolean;

  /**
   * If set to true, loads `campaignName` and `campaignUtm`.
   */
  marketingCampaignNames?: boolean;

  /**
   * If set to true, loads workflows in which the email is used within a "send email"
   * action.
   */
  workflowNames?: boolean;
}

export interface EmailRestoreDraftRevisionParams {
  /**
   * The marketing email ID.
   */
  emailId: string;
}

export interface EmailRestoreRevisionParams {
  /**
   * The marketing email ID.
   */
  emailId: string;
}

export interface EmailUpsertDraftParams {
  /**
   * The active domain of the email.
   */
  activeDomain?: string;

  /**
   * Determines if the email is archived or not.
   */
  archived?: boolean;

  businessUnitId?: number;

  /**
   * The ID of the campaign this email is associated to.
   */
  campaign?: string;

  /**
   * Data structure representing the content of the email.
   */
  content?: PublicEmailContent;

  /**
   * Data structure representing the from fields on the email.
   */
  from?: PublicEmailFromDetails;

  jitterSendTime?: boolean;

  language?:
    | 'af'
    | 'af-na'
    | 'af-za'
    | 'agq'
    | 'agq-cm'
    | 'ak'
    | 'ak-gh'
    | 'am'
    | 'am-et'
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
    | 'az'
    | 'az-az'
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
    | 'ka-ge'
    | 'kde'
    | 'kde-tz'
    | 'kea'
    | 'kea-cv'
    | 'kgp'
    | 'kgp-br'
    | 'khq'
    | 'khq-ml'
    | 'ki'
    | 'ki-ke'
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
    | 'kw'
    | 'kw-gb'
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
    | 'no'
    | 'no-no'
    | 'nus'
    | 'nus-ss'
    | 'nyn'
    | 'nyn-ug'
    | 'oc'
    | 'oc-es'
    | 'oc-fr'
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
    | 'to'
    | 'tok'
    | 'tok-001'
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
    | 'yrl'
    | 'yrl-br'
    | 'yrl-co'
    | 'yrl-ve'
    | 'yue'
    | 'yue-cn'
    | 'yue-hk'
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

  /**
   * RSS related data if it is a blog or rss email.
   */
  rssData?: PublicRssEmailDetails;

  /**
   * Determines whether the email will be sent immediately on publish.
   */
  sendOnPublish?: boolean;

  /**
   * The email state.
   */
  state?:
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
   * The email subcategory.
   */
  subcategory?:
    | 'ab_master'
    | 'ab_variant'
    | 'ab_loser_variant'
    | 'page_stub'
    | 'landing_page'
    | 'site_page'
    | 'legacy_page'
    | 'ab_master_site_page'
    | 'ab_variant_site_page'
    | 'ab_loser_variant_site_page'
    | 'performable_landing_page'
    | 'performable_landing_page_cutover'
    | 'staged_page'
    | 'automated'
    | 'automated_for_deal'
    | 'automated_for_form'
    | 'automated_for_form_legacy'
    | 'automated_for_form_buffer'
    | 'automated_for_form_draft'
    | 'rss_to_email'
    | 'rss_to_email_child'
    | 'blog_email'
    | 'blog_email_child'
    | 'optin_email'
    | 'optin_followup_email'
    | 'batch'
    | 'resubscribe_email'
    | 'unsubscribe_confirmation_email'
    | 'resubscribe_confirmation_email'
    | 'single_send_api'
    | 'marketing_single_send_api'
    | 'smtp_token'
    | 'localtime'
    | 'automated_for_ticket'
    | 'automated_for_leadflow'
    | 'automated_for_feedback_ces'
    | 'automated_for_feedback_nps'
    | 'automated_for_feedback_custom'
    | 'membership_registration'
    | 'membership_password_saved'
    | 'membership_password_reset'
    | 'membership_otp_login'
    | 'membership_passwordless_auth'
    | 'membership_email_verification'
    | 'membership_registration_follow_up'
    | 'membership_verification'
    | 'membership_follow_up'
    | 'ticket_closed_kickback_email'
    | 'ticket_opened_kickback_email'
    | 'automated_for_custom_survey'
    | 'discardable_stub'
    | 'normal_blog_post'
    | 'legacy_blog_post'
    | 'imported_blog_post'
    | 'automated_ab_master'
    | 'automated_ab_variant'
    | 'web_interactive'
    | 'portal_content'
    | 'page_instance_layout'
    | 'kb_article_instance_layout'
    | 'kb_listing'
    | 'kb_search_results'
    | 'kb_support_form'
    | 'kb_404_page'
    | 'case_study'
    | 'case_study_listing'
    | 'case_study_instance_layout'
    | 'scp_static_page'
    | 'scp_instance_layout_page'
    | 'podcast_instance_layout'
    | 'podcast_listing'
    | 'blog_article_instance_layout'
    | 'blog_article_listing'
    | 'blog_author_detail'
    | 'UNKNOWN';

  /**
   * The subject of the email.
   */
  subject?: string;

  /**
   * Data structure representing the subscription fields of the email.
   */
  subscriptionDetails?: PublicEmailSubscriptionDetails;

  /**
   * AB testing related data. This property is only returned for AB type emails.
   */
  testing?: PublicEmailTestingDetails;

  /**
   * Data structure representing the to fields of the email.
   */
  to?: PublicEmailToDetails;

  webversion?: PublicWebversionDetails;
}

export declare namespace Emails {
  export {
    type AbTestCreateRequestVNext as AbTestCreateRequestVNext,
    type AggregateEmailStatistics as AggregateEmailStatistics,
    type CollectionResponseWithTotalEmailStatisticIntervalNoPaging as CollectionResponseWithTotalEmailStatisticIntervalNoPaging,
    type CollectionResponseWithTotalPublicEmailForwardPaging as CollectionResponseWithTotalPublicEmailForwardPaging,
    type CollectionResponseWithTotalVersionPublicEmail as CollectionResponseWithTotalVersionPublicEmail,
    type EmailCloneRequestVNext as EmailCloneRequestVNext,
    type EmailCreateRequest as EmailCreateRequest,
    type EmailStatisticInterval as EmailStatisticInterval,
    type EmailStatisticsData as EmailStatisticsData,
    type EmailUpdateRequest as EmailUpdateRequest,
    type Interval as Interval,
    type Paging as Paging,
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
    type PublicFontStyle as PublicFontStyle,
    type PublicRssEmailDetails as PublicRssEmailDetails,
    type PublicWebversionDetails as PublicWebversionDetails,
    type SmartEmailField as SmartEmailField,
    type VersionPublicEmail as VersionPublicEmail,
    type PublicEmailsPage as PublicEmailsPage,
    type EmailCreateParams as EmailCreateParams,
    type EmailUpdateParams as EmailUpdateParams,
    type EmailListParams as EmailListParams,
    type EmailDeleteParams as EmailDeleteParams,
    type EmailCloneParams as EmailCloneParams,
    type EmailCreateAbTestVariationParams as EmailCreateAbTestVariationParams,
    type EmailGetEmailsListParams as EmailGetEmailsListParams,
    type EmailGetHistogramParams as EmailGetHistogramParams,
    type EmailGetRevisionByIDParams as EmailGetRevisionByIDParams,
    type EmailGetRevisionsParams as EmailGetRevisionsParams,
    type EmailReadParams as EmailReadParams,
    type EmailRestoreDraftRevisionParams as EmailRestoreDraftRevisionParams,
    type EmailRestoreRevisionParams as EmailRestoreRevisionParams,
    type EmailUpsertDraftParams as EmailUpsertDraftParams,
  };
}
