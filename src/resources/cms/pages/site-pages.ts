// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CmsAPI from '../cms';
import * as PagesAPI from './pages';
import { PagesPage } from './pages';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SitePages extends APIResource {
  /**
   * Create a new Site Page
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.create({
   *   id: 'id',
   *   abStatus: 'master',
   *   abTestId: 'abTestId',
   *   archivedAt: '2019-12-27T18:11:19.117Z',
   *   archivedInDashboard: true,
   *   attachedStylesheets: [{ foo: {} }],
   *   authorName: 'authorName',
   *   campaign: 'campaign',
   *   categoryId: 0,
   *   contentGroupId: 'contentGroupId',
   *   contentTypeCategory: '0',
   *   created: '2019-12-27T18:11:19.117Z',
   *   createdById: 'createdById',
   *   currentlyPublished: true,
   *   currentState: 'AUTOMATED',
   *   domain: 'domain',
   *   dynamicPageDataSourceId: 'dynamicPageDataSourceId',
   *   dynamicPageDataSourceType: 0,
   *   dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
   *   enableDomainStylesheets: true,
   *   enableLayoutStylesheets: true,
   *   featuredImage: 'featuredImage',
   *   featuredImageAltText: 'featuredImageAltText',
   *   folderId: 'folderId',
   *   footerHtml: 'footerHtml',
   *   headHtml: 'headHtml',
   *   htmlTitle: 'htmlTitle',
   *   includeDefaultCustomCss: true,
   *   language: 'af',
   *   layoutSections: {
   *     foo: { ... },
   *   },
   *   linkRelCanonicalUrl: 'linkRelCanonicalUrl',
   *   mabExperimentId: 'mabExperimentId',
   *   metaDescription: 'metaDescription',
   *   name: 'name',
   *   pageExpiryDate: 0,
   *   pageExpiryEnabled: true,
   *   pageExpiryRedirectId: 0,
   *   pageExpiryRedirectUrl: 'pageExpiryRedirectUrl',
   *   pageRedirected: true,
   *   password: 'password',
   *   publicAccessRules: [{}],
   *   publicAccessRulesEnabled: true,
   *   publishDate: '2019-12-27T18:11:19.117Z',
   *   publishImmediately: true,
   *   slug: 'slug',
   *   state: 'state',
   *   subcategory: 'subcategory',
   *   templatePath: 'templatePath',
   *   themeSettingsValues: { foo: {} },
   *   translatedFromId: 'translatedFromId',
   *   translations: {
   *     foo: { ... },
   *   },
   *   updated: '2019-12-27T18:11:19.117Z',
   *   updatedById: 'updatedById',
   *   url: 'url',
   *   useFeaturedImage: true,
   *   widgetContainers: { foo: {} },
   *   widgets: { foo: {} },
   * });
   * ```
   */
  create(body: SitePageCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/pages/site-pages', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Sparse updates a single Site Page object identified by the id in the path. You
   * only need to specify the column values that you are modifying.
   *
   * @example
   * ```ts
   * const page = await client.cms.pages.sitePages.update('objectId', {
   *   id: 'id',
   *   abStatus: 'master',
   *   abTestId: 'abTestId',
   *   archivedAt: '2019-12-27T18:11:19.117Z',
   *   archivedInDashboard: true,
   *   attachedStylesheets: [{ foo: {} }],
   *   authorName: 'authorName',
   *   campaign: 'campaign',
   *   categoryId: 0,
   *   contentGroupId: 'contentGroupId',
   *   contentTypeCategory: '0',
   *   created: '2019-12-27T18:11:19.117Z',
   *   createdById: 'createdById',
   *   currentlyPublished: true,
   *   currentState: 'AUTOMATED',
   *   domain: 'domain',
   *   dynamicPageDataSourceId: 'dynamicPageDataSourceId',
   *   dynamicPageDataSourceType: 0,
   *   dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
   *   enableDomainStylesheets: true,
   *   enableLayoutStylesheets: true,
   *   featuredImage: 'featuredImage',
   *   featuredImageAltText: 'featuredImageAltText',
   *   folderId: 'folderId',
   *   footerHtml: 'footerHtml',
   *   headHtml: 'headHtml',
   *   htmlTitle: 'htmlTitle',
   *   includeDefaultCustomCss: true,
   *   language: 'af',
   *   layoutSections: {
   *     foo: { ... },
   *   },
   *   linkRelCanonicalUrl: 'linkRelCanonicalUrl',
   *   mabExperimentId: 'mabExperimentId',
   *   metaDescription: 'metaDescription',
   *   name: 'name',
   *   pageExpiryDate: 0,
   *   pageExpiryEnabled: true,
   *   pageExpiryRedirectId: 0,
   *   pageExpiryRedirectUrl: 'pageExpiryRedirectUrl',
   *   pageRedirected: true,
   *   password: 'password',
   *   publicAccessRules: [{}],
   *   publicAccessRulesEnabled: true,
   *   publishDate: '2019-12-27T18:11:19.117Z',
   *   publishImmediately: true,
   *   slug: 'slug',
   *   state: 'state',
   *   subcategory: 'subcategory',
   *   templatePath: 'templatePath',
   *   themeSettingsValues: { foo: {} },
   *   translatedFromId: 'translatedFromId',
   *   translations: {
   *     foo: { ... },
   *   },
   *   updated: '2019-12-27T18:11:19.117Z',
   *   updatedById: 'updatedById',
   *   url: 'url',
   *   useFeaturedImage: true,
   *   widgetContainers: { foo: {} },
   *   widgets: { foo: {} },
   * });
   * ```
   */
  update(
    objectID: string,
    params: SitePageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.Page> {
    const { archived, ...body } = params;
    return this._client.patch(path`/cms/v3/pages/site-pages/${objectID}`, {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Get the list of site pages. Supports paging and filtering. This method would be
   * useful for an integration that examined these models and used an external
   * service to suggest edits.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const page of client.cms.pages.sitePages.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SitePageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PagesPage, PagesAPI.Page> {
    return this._client.getAPIList('/cms/v3/pages/site-pages', Page<PagesAPI.Page>, { query, ...options });
  }

  /**
   * Delete the Site Page object identified by the id in the path.
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.delete('objectId');
   * ```
   */
  delete(
    objectID: string,
    params: SitePageDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/cms/v3/pages/site-pages/${objectID}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Attach a site page to a multi-language group.
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.attachToLangGroup({
   *   id: 'id',
   *   language: 'language',
   *   primaryId: 'primaryId',
   * });
   * ```
   */
  attachToLangGroup(body: SitePageAttachToLangGroupParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/pages/site-pages/multi-language/attach-to-lang-group', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Clone a Site Page
   *
   * @example
   * ```ts
   * const page = await client.cms.pages.sitePages.clone({
   *   id: 'id',
   * });
   * ```
   */
  clone(body: SitePageCloneParams, options?: RequestOptions): APIPromise<PagesAPI.Page> {
    return this._client.post('/cms/v3/pages/site-pages/clone', { body, ...options });
  }

  /**
   * Create a new A/B test variation based on the information provided in the request
   * body.
   *
   * @example
   * ```ts
   * const page =
   *   await client.cms.pages.sitePages.createAbTestVariation({
   *     contentId: 'contentId',
   *     variationName: 'variationName',
   *   });
   * ```
   */
  createAbTestVariation(
    body: SitePageCreateAbTestVariationParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.Page> {
    return this._client.post('/cms/v3/pages/site-pages/ab-test/create-variation', { body, ...options });
  }

  /**
   * Create the Site Page objects detailed in the request body.
   *
   * @example
   * ```ts
   * const batchResponsePage = await client.cms.pages.sitePages.createBatch({
   *   inputs: [
   *     {
   *       id: 'id',
   *       abStatus: 'master',
   *       abTestId: 'abTestId',
   *       archivedAt: '2019-12-27T18:11:19.117Z',
   *       archivedInDashboard: true,
   *       attachedStylesheets: [
   *         { ... },
   *       ],
   *       authorName: 'authorName',
   *       campaign: 'campaign',
   *       categoryId: 0,
   *       contentGroupId: 'contentGroupId',
   *       contentTypeCategory: '0',
   *       created: '2019-12-27T18:11:19.117Z',
   *       createdById: 'createdById',
   *       currentlyPublished: true,
   *       currentState: 'AUTOMATED',
   *       domain: 'domain',
   *       dynamicPageDataSourceId: 'dynamicPageDataSourceId',
   *       dynamicPageDataSourceType: 0,
   *       dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
   *       enableDomainStylesheets: true,
   *       enableLayoutStylesheets: true,
   *       featuredImage: 'featuredImage',
   *       featuredImageAltText: 'featuredImageAltText',
   *       folderId: 'folderId',
   *       footerHtml: 'footerHtml',
   *       headHtml: 'headHtml',
   *       htmlTitle: 'htmlTitle',
   *       includeDefaultCustomCss: true,
   *       language: 'af',
   *       layoutSections: { ... },
   *       linkRelCanonicalUrl: 'linkRelCanonicalUrl',
   *       mabExperimentId: 'mabExperimentId',
   *       metaDescription: 'metaDescription',
   *       name: 'name',
   *       pageExpiryDate: 0,
   *       pageExpiryEnabled: true,
   *       pageExpiryRedirectId: 0,
   *       pageExpiryRedirectUrl: 'pageExpiryRedirectUrl',
   *       pageRedirected: true,
   *       password: 'password',
   *       publicAccessRules: [{}],
   *       publicAccessRulesEnabled: true,
   *       publishDate: '2019-12-27T18:11:19.117Z',
   *       publishImmediately: true,
   *       slug: 'slug',
   *       state: 'state',
   *       subcategory: 'subcategory',
   *       templatePath: 'templatePath',
   *       themeSettingsValues: { ... },
   *       translatedFromId: 'translatedFromId',
   *       translations: { ... },
   *       updated: '2019-12-27T18:11:19.117Z',
   *       updatedById: 'updatedById',
   *       url: 'url',
   *       useFeaturedImage: true,
   *       widgetContainers: { ... },
   *       widgets: { ... },
   *     },
   *   ],
   * });
   * ```
   */
  createBatch(
    body: SitePageCreateBatchParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponsePage> {
    return this._client.post('/cms/v3/pages/site-pages/batch/create', { body, ...options });
  }

  /**
   * Create a new language variation from an existing site page
   *
   * @example
   * ```ts
   * const page =
   *   await client.cms.pages.sitePages.createLanguageVariation({
   *     id: 'id',
   *   });
   * ```
   */
  createLanguageVariation(
    body: SitePageCreateLanguageVariationParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.Page> {
    return this._client.post('/cms/v3/pages/site-pages/multi-language/create-language-variation', {
      body,
      ...options,
    });
  }

  /**
   * Delete the Site Page objects identified in the request body. Note: This is not
   * the same as the dashboard `archive` function. To perform a dashboard `archive`
   * send an normal update with the `archivedInDashboard` field set to true.
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.deleteBatch({
   *   inputs: ['string'],
   * });
   * ```
   */
  deleteBatch(body: SitePageDeleteBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/pages/site-pages/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Detach a site page from a multi-language group.
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.detachFromLangGroup({
   *   id: 'id',
   * });
   * ```
   */
  detachFromLangGroup(body: SitePageDetachFromLangGroupParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/pages/site-pages/multi-language/detach-from-lang-group', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * End an active A/B test and designate a winner.
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.endAbTest({
   *   abTestId: 'abTestId',
   *   winnerId: 'winnerId',
   * });
   * ```
   */
  endAbTest(body: SitePageEndAbTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/pages/site-pages/ab-test/end', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the Site Page object identified by the id in the path.
   *
   * @example
   * ```ts
   * const page = await client.cms.pages.sitePages.get(
   *   'objectId',
   * );
   * ```
   */
  get(
    objectID: string,
    query: SitePageGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PagesAPI.Page> {
    return this._client.get(path`/cms/v3/pages/site-pages/${objectID}`, { query, ...options });
  }

  /**
   * Retrieve the Site Page objects identified in the request body.
   *
   * @example
   * ```ts
   * const batchResponsePage =
   *   await client.cms.pages.sitePages.getBatch({
   *     inputs: ['string'],
   *   });
   * ```
   */
  getBatch(params: SitePageGetBatchParams, options?: RequestOptions): APIPromise<PagesAPI.BatchResponsePage> {
    const { archived, ...body } = params;
    return this._client.post('/cms/v3/pages/site-pages/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Retrieve the full draft version of the Site Page.
   *
   * @example
   * ```ts
   * const page = await client.cms.pages.sitePages.getDraft(
   *   'objectId',
   * );
   * ```
   */
  getDraft(objectID: string, options?: RequestOptions): APIPromise<PagesAPI.Page> {
    return this._client.get(path`/cms/v3/pages/site-pages/${objectID}/draft`, options);
  }

  /**
   * Retrieves a previous version of a Site Page
   *
   * @example
   * ```ts
   * const versionPage =
   *   await client.cms.pages.sitePages.getRevision(
   *     'revisionId',
   *     { objectId: 'objectId' },
   *   );
   * ```
   */
  getRevision(
    revisionID: string,
    params: SitePageGetRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.VersionPage> {
    const { objectId } = params;
    return this._client.get(path`/cms/v3/pages/site-pages/${objectId}/revisions/${revisionID}`, options);
  }

  /**
   * Retrieves all the previous versions of a Site Page.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalVersionPage =
   *   await client.cms.pages.sitePages.listRevisions(
   *     'objectId',
   *   );
   * ```
   */
  listRevisions(
    objectID: string,
    query: SitePageListRevisionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PagesAPI.CollectionResponseWithTotalVersionPage> {
    return this._client.get(path`/cms/v3/pages/site-pages/${objectID}/revisions`, { query, ...options });
  }

  /**
   * Take any changes from the draft version of the Site Page and apply them to the
   * live version.
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.publishDraft('objectId');
   * ```
   */
  publishDraft(objectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/cms/v3/pages/site-pages/${objectID}/draft/push-live`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rerun a previous A/B test.
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.rerunAbTest({
   *   abTestId: 'abTestId',
   *   variationId: 'variationId',
   * });
   * ```
   */
  rerunAbTest(body: SitePageRerunAbTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/pages/site-pages/ab-test/rerun', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Discards any edits and resets the draft to the live version.
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.resetDraft('objectId');
   * ```
   */
  resetDraft(objectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/cms/v3/pages/site-pages/${objectID}/draft/reset`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Takes a specified version of a Site Page and restores it.
   *
   * @example
   * ```ts
   * const page =
   *   await client.cms.pages.sitePages.restoreRevision(
   *     'revisionId',
   *     { objectId: 'objectId' },
   *   );
   * ```
   */
  restoreRevision(
    revisionID: string,
    params: SitePageRestoreRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.Page> {
    const { objectId } = params;
    return this._client.post(
      path`/cms/v3/pages/site-pages/${objectId}/revisions/${revisionID}/restore`,
      options,
    );
  }

  /**
   * Takes a specified version of a Site Page, sets it as the new draft version of
   * the Site Page.
   *
   * @example
   * ```ts
   * const page =
   *   await client.cms.pages.sitePages.restoreRevisionToDraft(
   *     0,
   *     { objectId: 'objectId' },
   *   );
   * ```
   */
  restoreRevisionToDraft(
    revisionID: number,
    params: SitePageRestoreRevisionToDraftParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.Page> {
    const { objectId } = params;
    return this._client.post(
      path`/cms/v3/pages/site-pages/${objectId}/revisions/${revisionID}/restore-to-draft`,
      options,
    );
  }

  /**
   * Schedule a Site Page to be Published
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.schedule({
   *   id: 'id',
   *   publishDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  schedule(body: SitePageScheduleParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/pages/site-pages/schedule', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set a site page as the primary language of a multi-language group.
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.setNewLangPrimary({
   *   id: 'id',
   * });
   * ```
   */
  setNewLangPrimary(body: SitePageSetNewLangPrimaryParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/cms/v3/pages/site-pages/multi-language/set-new-lang-primary', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update the Site Page objects identified in the request body.
   *
   * @example
   * ```ts
   * const batchResponsePage =
   *   await client.cms.pages.sitePages.updateBatch({
   *     inputs: [{}],
   *   });
   * ```
   */
  updateBatch(
    params: SitePageUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponsePage> {
    const { archived, ...body } = params;
    return this._client.post('/cms/v3/pages/site-pages/batch/update', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Sparse updates the draft version of a single Site Page object identified by the
   * id in the path. You only need to specify the column values that you are
   * modifying.
   *
   * @example
   * ```ts
   * const page = await client.cms.pages.sitePages.updateDraft('objectId', {
   *   id: 'id',
   *   abStatus: 'master',
   *   abTestId: 'abTestId',
   *   archivedAt: '2019-12-27T18:11:19.117Z',
   *   archivedInDashboard: true,
   *   attachedStylesheets: [{ foo: {} }],
   *   authorName: 'authorName',
   *   campaign: 'campaign',
   *   categoryId: 0,
   *   contentGroupId: 'contentGroupId',
   *   contentTypeCategory: '0',
   *   created: '2019-12-27T18:11:19.117Z',
   *   createdById: 'createdById',
   *   currentlyPublished: true,
   *   currentState: 'AUTOMATED',
   *   domain: 'domain',
   *   dynamicPageDataSourceId: 'dynamicPageDataSourceId',
   *   dynamicPageDataSourceType: 0,
   *   dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
   *   enableDomainStylesheets: true,
   *   enableLayoutStylesheets: true,
   *   featuredImage: 'featuredImage',
   *   featuredImageAltText: 'featuredImageAltText',
   *   folderId: 'folderId',
   *   footerHtml: 'footerHtml',
   *   headHtml: 'headHtml',
   *   htmlTitle: 'htmlTitle',
   *   includeDefaultCustomCss: true,
   *   language: 'af',
   *   layoutSections: {
   *     foo: { ... },
   *   },
   *   linkRelCanonicalUrl: 'linkRelCanonicalUrl',
   *   mabExperimentId: 'mabExperimentId',
   *   metaDescription: 'metaDescription',
   *   name: 'name',
   *   pageExpiryDate: 0,
   *   pageExpiryEnabled: true,
   *   pageExpiryRedirectId: 0,
   *   pageExpiryRedirectUrl: 'pageExpiryRedirectUrl',
   *   pageRedirected: true,
   *   password: 'password',
   *   publicAccessRules: [{}],
   *   publicAccessRulesEnabled: true,
   *   publishDate: '2019-12-27T18:11:19.117Z',
   *   publishImmediately: true,
   *   slug: 'slug',
   *   state: 'state',
   *   subcategory: 'subcategory',
   *   templatePath: 'templatePath',
   *   themeSettingsValues: { foo: {} },
   *   translatedFromId: 'translatedFromId',
   *   translations: {
   *     foo: { ... },
   *   },
   *   updated: '2019-12-27T18:11:19.117Z',
   *   updatedById: 'updatedById',
   *   url: 'url',
   *   useFeaturedImage: true,
   *   widgetContainers: { foo: {} },
   *   widgets: { foo: {} },
   * });
   * ```
   */
  updateDraft(
    objectID: string,
    body: SitePageUpdateDraftParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.Page> {
    return this._client.patch(path`/cms/v3/pages/site-pages/${objectID}/draft`, { body, ...options });
  }

  /**
   * Explicitly set new languages for each site page in a multi-language group.
   *
   * @example
   * ```ts
   * await client.cms.pages.sitePages.updateLanguages({
   *   languages: { foo: 'string' },
   *   primaryId: 'primaryId',
   * });
   * ```
   */
  updateLanguages(body: SitePageUpdateLanguagesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/pages/site-pages/multi-language/update-languages', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SitePageCreateParams {
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

  translations: { [key: string]: PagesAPI.PagesContentLanguageVariation };

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

export interface SitePageUpdateParams {
  /**
   * Body param: The unique ID of the page.
   */
  id: string;

  /**
   * Body param: The status of the AB test associated with this page, if applicable
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
   * Body param: The ID of the AB test associated with this page, if applicable
   */
  abTestId: string;

  /**
   * Body param: The timestamp (ISO8601 format) when this page was deleted.
   */
  archivedAt: string;

  /**
   * Body param: If True, the page will not show up in your dashboard, although the
   * page could still be live.
   */
  archivedInDashboard: boolean;

  /**
   * Body param: List of stylesheets to attach to this page. These stylesheets are
   * attached to just this page. Order of precedence is bottom to top, just like in
   * the HTML.
   */
  attachedStylesheets: Array<{ [key: string]: unknown }>;

  /**
   * Body param: The name of the user that updated this page.
   */
  authorName: string;

  /**
   * Body param: The GUID of the marketing campaign this page is a part of.
   */
  campaign: string;

  /**
   * Body param: ID of the type of object this is. Should always .
   */
  categoryId: number;

  /**
   * Body param:
   */
  contentGroupId: string;

  /**
   * Body param: An ENUM descibing the type of this object. Should be either
   * LANDING_PAGE or SITE_PAGE.
   */
  contentTypeCategory: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

  /**
   * Body param:
   */
  created: string;

  /**
   * Body param: The ID of the user that created this page.
   */
  createdById: string;

  /**
   * Body param:
   */
  currentlyPublished: boolean;

  /**
   * Body param: A generated ENUM descibing the current state of this page.
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
   * Body param: The domain this page will resolve to. If null, the page will default
   * to the primary domain for this content type.
   */
  domain: string;

  /**
   * Body param:
   */
  dynamicPageDataSourceId: string;

  /**
   * Body param:
   */
  dynamicPageDataSourceType: number;

  /**
   * Body param: The ID of the HubDB table this page references, if applicable
   */
  dynamicPageHubDbTableId: string;

  /**
   * Body param: Boolean to determine whether or not the styles from the template
   * should be applied.
   */
  enableDomainStylesheets: boolean;

  /**
   * Body param: Boolean to determine whether or not the styles from the template
   * should be applied.
   */
  enableLayoutStylesheets: boolean;

  /**
   * Body param: The featuredImage of this page.
   */
  featuredImage: string;

  /**
   * Body param: Alt Text of the featuredImage.
   */
  featuredImageAltText: string;

  /**
   * Body param: The ID of the associated folder this landing page is organized under
   * in the app dashboard.
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
   * Body param: The html title of this page.
   */
  htmlTitle: string;

  /**
   * Body param: Boolean to determine whether or not the Primary CSS Files should be
   * applied.
   */
  includeDefaultCustomCss: boolean;

  /**
   * Body param: The explicitly defined ISO 639 language code of the page. If null,
   * the page will default to the language of the Domain.
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
   * Body param:
   */
  layoutSections: { [key: string]: CmsAPI.LayoutSection };

  /**
   * Body param: Optional override to set the URL to be used in the rel=canonical
   * link tag on the page.
   */
  linkRelCanonicalUrl: string;

  /**
   * Body param: The ID of the MAB test (or dynamic test) associated with this page,
   * if applicable
   */
  mabExperimentId: string;

  /**
   * Body param: A description that goes in <meta> tag on the page.
   */
  metaDescription: string;

  /**
   * Body param: The internal name of the page.
   */
  name: string;

  /**
   * Body param: The date at which this page should expire and begin redirecting to
   * another url or page.
   */
  pageExpiryDate: number;

  /**
   * Body param: Boolean describing if the page expiration feature is enabled for
   * this page
   */
  pageExpiryEnabled: boolean;

  /**
   * Body param: The ID of another page this page's url should redirect to once this
   * page expires. Should only set this or pageExpiryRedirectUrl.
   */
  pageExpiryRedirectId: number;

  /**
   * Body param: The URL this page's url should redirect to once this page expires.
   * Should only set this or pageExpiryRedirectId.
   */
  pageExpiryRedirectUrl: string;

  /**
   * Body param: A generated Boolean describing whether or not this page is currently
   * expired and being redirected.
   */
  pageRedirected: boolean;

  /**
   * Body param: Set this to create a password protected page. Entering the password
   * will be required to view the page.
   */
  password: string;

  /**
   * Body param: Rules for require member registration to access private content.
   */
  publicAccessRules: Array<CmsAPI.PublicAccessRule>;

  /**
   * Body param: Boolean to determine whether or not to respect publicAccessRules.
   */
  publicAccessRulesEnabled: boolean;

  /**
   * Body param: The date (ISO8601 format) the page is to be published at.
   */
  publishDate: string;

  /**
   * Body param: Set this to true if you want to be published immediately when the
   * schedule publish endpoint is called, and to ignore the publish_date setting.
   */
  publishImmediately: boolean;

  /**
   * Body param: The path of the this page. This field is appended to the domain to
   * construct the url of this page.
   */
  slug: string;

  /**
   * Body param: An ENUM descibing the current state of this page.
   */
  state: string;

  /**
   * Body param: Details the type of page this is. Should always be landing_page or
   * site_page
   */
  subcategory: string;

  /**
   * Body param: String detailing the path of the template used for this page.
   */
  templatePath: string;

  /**
   * Body param:
   */
  themeSettingsValues: { [key: string]: unknown };

  /**
   * Body param: ID of the primary page this object was translated from.
   */
  translatedFromId: string;

  /**
   * Body param:
   */
  translations: { [key: string]: PagesAPI.PagesContentLanguageVariation };

  /**
   * Body param:
   */
  updated: string;

  /**
   * Body param: The ID of the user that updated this page.
   */
  updatedById: string;

  /**
   * Body param: A generated field representing the URL of this page.
   */
  url: string;

  /**
   * Body param: Boolean to determine if this page should use a featuredImage.
   */
  useFeaturedImage: boolean;

  /**
   * Body param: A data structure containing the data for all the modules inside the
   * containers for this page. This will only be populated if the page has widget
   * containers.
   */
  widgetContainers: { [key: string]: unknown };

  /**
   * Body param: A data structure containing the data for all the modules for this
   * page.
   */
  widgets: { [key: string]: unknown };

  /**
   * Query param: Specifies whether to update deleted Site Pages. Defaults to
   * `false`.
   */
  archived?: boolean;
}

export interface SitePageListParams extends PageParams {
  /**
   * Specifies whether to return deleted Site Pages. Defaults to `false`.
   */
  archived?: boolean;

  /**
   * Only return Site Pages created after the specified time.
   */
  createdAfter?: string;

  /**
   * Only return Site Pages created at exactly the specified time.
   */
  createdAt?: string;

  /**
   * Only return Site Pages created before the specified time.
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
   * Only return Site Pages last updated after the specified time.
   */
  updatedAfter?: string;

  /**
   * Only return Site Pages last updated at exactly the specified time.
   */
  updatedAt?: string;

  /**
   * Only return Site Pages last updated before the specified time.
   */
  updatedBefore?: string;
}

export interface SitePageDeleteParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface SitePageAttachToLangGroupParams {
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

export interface SitePageCloneParams {
  /**
   * ID of the object to be cloned.
   */
  id: string;

  /**
   * Name of the cloned object.
   */
  cloneName?: string;
}

export interface SitePageCreateAbTestVariationParams {
  /**
   * ID of the object to test.
   */
  contentId: string;

  /**
   * Name of A/B test variation.
   */
  variationName: string;
}

export interface SitePageCreateBatchParams {
  /**
   * Pages to input.
   */
  inputs: Array<PagesAPI.Page>;
}

export interface SitePageCreateLanguageVariationParams {
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

export interface SitePageDeleteBatchParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface SitePageDetachFromLangGroupParams {
  /**
   * ID of the object to remove from a multi-language group.
   */
  id: string;
}

export interface SitePageEndAbTestParams {
  /**
   * ID of the test to end.
   */
  abTestId: string;

  /**
   * ID of the object to designate as the test winner.
   */
  winnerId: string;
}

export interface SitePageGetParams {
  /**
   * Specifies whether to return deleted Site Pages. Defaults to `false`.
   */
  archived?: boolean;

  property?: string;
}

export interface SitePageGetBatchParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: Specifies whether to return deleted Site Pages. Defaults to
   * `false`.
   */
  archived?: boolean;
}

export interface SitePageGetRevisionParams {
  /**
   * The Site Page id.
   */
  objectId: string;
}

export interface SitePageListRevisionsParams {
  /**
   * The cursor token value to get the next set of results. You can get this from the
   * `paging.next.after` JSON property of a paged response containing more results.
   */
  after?: string;

  before?: string;

  /**
   * The maximum number of results to return. Default is 100.
   */
  limit?: number;
}

export interface SitePageRerunAbTestParams {
  /**
   * ID of the test to rerun.
   */
  abTestId: string;

  /**
   * ID of the object to reactivate as a test variation.
   */
  variationId: string;
}

export interface SitePageRestoreRevisionParams {
  /**
   * The Site Page id.
   */
  objectId: string;
}

export interface SitePageRestoreRevisionToDraftParams {
  /**
   * The Site Page id.
   */
  objectId: string;
}

export interface SitePageScheduleParams {
  /**
   * The ID of the object to be scheduled.
   */
  id: string;

  /**
   * The date the object should transition from scheduled to published.
   */
  publishDate: string;
}

export interface SitePageSetNewLangPrimaryParams {
  /**
   * ID of object to set as primary in multi-language group.
   */
  id: string;
}

export interface SitePageUpdateBatchParams {
  /**
   * Body param: JSON nodes to input.
   */
  inputs: Array<unknown>;

  /**
   * Query param: Specifies whether to update deleted Site Pages. Defaults to
   * `false`.
   */
  archived?: boolean;
}

export interface SitePageUpdateDraftParams {
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

  translations: { [key: string]: PagesAPI.PagesContentLanguageVariation };

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

export interface SitePageUpdateLanguagesParams {
  /**
   * Map of object IDs to associated languages of object in the multi-language group.
   */
  languages: { [key: string]: string };

  /**
   * ID of the primary object in the multi-language group.
   */
  primaryId: string;
}

export declare namespace SitePages {
  export {
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

export { type PagesPage };
