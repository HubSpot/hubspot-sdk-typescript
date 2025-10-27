// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as CmsAPI from '../../cms';
import * as PagesAPI from '../../pages/pages';
import * as EmailsAPI from '../../../marketing/emails/emails';
import * as BatchAPI from './batch';
import { Batch, BatchCreateParams, BatchDeleteParams, BatchReadParams, BatchUpdateParams } from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Posts extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a new blog post, specifying its content in the request body.
   *
   * @example
   * ```ts
   * const blogPost = await client.cms.blogs.posts.create({
   *   id: 'id',
   *   abStatus: 'master',
   *   abTestId: 'abTestId',
   *   archivedAt: 0,
   *   archivedInDashboard: true,
   *   attachedStylesheets: [{ foo: {} }],
   *   authorName: 'authorName',
   *   blogAuthorId: 'blogAuthorId',
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
   *   enableGoogleAmpOutputOverride: true,
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
   *   password: 'password',
   *   postBody: 'postBody',
   *   postSummary: 'postSummary',
   *   publicAccessRules: [{}],
   *   publicAccessRulesEnabled: true,
   *   publishDate: '2019-12-27T18:11:19.117Z',
   *   publishImmediately: true,
   *   rssBody: 'rssBody',
   *   rssSummary: 'rssSummary',
   *   slug: 'slug',
   *   state: 'state',
   *   tagIds: [0],
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
  create(body: PostCreateParams, options?: RequestOptions): APIPromise<BlogPost> {
    return this._client.post('/cms/v3/blogs/posts', { body, ...options });
  }

  /**
   * Partially updates a single blog post by ID. You only need to specify the values
   * that you want to update.
   *
   * @example
   * ```ts
   * const blogPost = await client.cms.blogs.posts.update('objectId', {
   *   id: 'id',
   *   abStatus: 'master',
   *   abTestId: 'abTestId',
   *   archivedAt: 0,
   *   archivedInDashboard: true,
   *   attachedStylesheets: [{ foo: {} }],
   *   authorName: 'authorName',
   *   blogAuthorId: 'blogAuthorId',
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
   *   enableGoogleAmpOutputOverride: true,
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
   *   password: 'password',
   *   postBody: 'postBody',
   *   postSummary: 'postSummary',
   *   publicAccessRules: [{}],
   *   publicAccessRulesEnabled: true,
   *   publishDate: '2019-12-27T18:11:19.117Z',
   *   publishImmediately: true,
   *   rssBody: 'rssBody',
   *   rssSummary: 'rssSummary',
   *   slug: 'slug',
   *   state: 'state',
   *   tagIds: [0],
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
  update(objectID: string, params: PostUpdateParams, options?: RequestOptions): APIPromise<BlogPost> {
    const { archived, ...body } = params;
    return this._client.patch(path`/cms/v3/blogs/posts/${objectID}`, {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Retrieve all blog posts, with paging and filtering options. This method would be
   * useful for an integration that ingests posts and suggests edits.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const blogPost of client.cms.blogs.posts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PostListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BlogPostsPage, BlogPost> {
    return this._client.getAPIList('/cms/v3/blogs/posts', Page<BlogPost>, { query, ...options });
  }

  /**
   * Delete a blog post by ID.
   *
   * @example
   * ```ts
   * await client.cms.blogs.posts.delete('objectId');
   * ```
   */
  delete(
    objectID: string,
    params: PostDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/cms/v3/blogs/posts/${objectID}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Attach a blog post to a
   * [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
   *
   * @example
   * ```ts
   * await client.cms.blogs.posts.attachToLangGroup({
   *   id: 'id',
   *   language: 'language',
   *   primaryId: 'primaryId',
   * });
   * ```
   */
  attachToLangGroup(body: PostAttachToLangGroupParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/posts/multi-language/attach-to-lang-group', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Clone a blog post, making a copy of it in a new blog post.
   *
   * @example
   * ```ts
   * const blogPost = await client.cms.blogs.posts.clone({
   *   id: 'id',
   * });
   * ```
   */
  clone(body: PostCloneParams, options?: RequestOptions): APIPromise<BlogPost> {
    return this._client.post('/cms/v3/blogs/posts/clone', { body, ...options });
  }

  /**
   * Create a new language variation from an existing blog post
   *
   * @example
   * ```ts
   * const blogPost =
   *   await client.cms.blogs.posts.createLangVariation({
   *     id: 'id',
   *   });
   * ```
   */
  createLangVariation(body: PostCreateLangVariationParams, options?: RequestOptions): APIPromise<BlogPost> {
    return this._client.post('/cms/v3/blogs/posts/multi-language/create-language-variation', {
      body,
      ...options,
    });
  }

  /**
   * Detach a blog post from a
   * [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
   *
   * @example
   * ```ts
   * await client.cms.blogs.posts.detachFromLangGroup({
   *   id: 'id',
   * });
   * ```
   */
  detachFromLangGroup(body: PostDetachFromLangGroupParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/posts/multi-language/detach-from-lang-group', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the full draft version of a blog post.
   *
   * @example
   * ```ts
   * const blogPost = await client.cms.blogs.posts.getDraftByID(
   *   'objectId',
   * );
   * ```
   */
  getDraftByID(objectID: string, options?: RequestOptions): APIPromise<BlogPost> {
    return this._client.get(path`/cms/v3/blogs/posts/${objectID}/draft`, options);
  }

  /**
   * Retrieve a previous version of a blog post.
   *
   * @example
   * ```ts
   * const versionBlogPost =
   *   await client.cms.blogs.posts.getPreviousVersion(
   *     'revisionId',
   *     { objectId: 'objectId' },
   *   );
   * ```
   */
  getPreviousVersion(
    revisionID: string,
    params: PostGetPreviousVersionParams,
    options?: RequestOptions,
  ): APIPromise<VersionBlogPost> {
    const { objectId } = params;
    return this._client.get(path`/cms/v3/blogs/posts/${objectId}/revisions/${revisionID}`, options);
  }

  /**
   * Retrieve all the previous versions of a blog post.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const versionBlogPost of client.cms.blogs.posts.getPreviousVersions(
   *   'objectId',
   * )) {
   *   // ...
   * }
   * ```
   */
  getPreviousVersions(
    objectID: string,
    query: PostGetPreviousVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VersionBlogPostsPage, VersionBlogPost> {
    return this._client.getAPIList(path`/cms/v3/blogs/posts/${objectID}/revisions`, Page<VersionBlogPost>, {
      query,
      ...options,
    });
  }

  /**
   * Publish the draft version of the blog post, sending its content to the live
   * page.
   *
   * @example
   * ```ts
   * await client.cms.blogs.posts.pushLive('objectId');
   * ```
   */
  pushLive(objectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/cms/v3/blogs/posts/${objectID}/draft/push-live`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a blog post by the post ID.
   *
   * @example
   * ```ts
   * const blogPost = await client.cms.blogs.posts.read(
   *   'objectId',
   * );
   * ```
   */
  read(
    objectID: string,
    query: PostReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlogPost> {
    return this._client.get(path`/cms/v3/blogs/posts/${objectID}`, { query, ...options });
  }

  /**
   * Discard all drafted content, resetting the draft to contain the content in the
   * currently published version.
   *
   * @example
   * ```ts
   * await client.cms.blogs.posts.resetDraft('objectId');
   * ```
   */
  resetDraft(objectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/cms/v3/blogs/posts/${objectID}/draft/reset`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restores a blog post to one of its previous versions.
   *
   * @example
   * ```ts
   * const blogPost =
   *   await client.cms.blogs.posts.restorePreviousVersion(
   *     'revisionId',
   *     { objectId: 'objectId' },
   *   );
   * ```
   */
  restorePreviousVersion(
    revisionID: string,
    params: PostRestorePreviousVersionParams,
    options?: RequestOptions,
  ): APIPromise<BlogPost> {
    const { objectId } = params;
    return this._client.post(path`/cms/v3/blogs/posts/${objectId}/revisions/${revisionID}/restore`, options);
  }

  /**
   * Takes a specified version of a blog post, sets it as the new draft version of
   * the blog post.
   *
   * @example
   * ```ts
   * const blogPost =
   *   await client.cms.blogs.posts.restorePreviousVersionToDraft(
   *     0,
   *     { objectId: 'objectId' },
   *   );
   * ```
   */
  restorePreviousVersionToDraft(
    revisionID: number,
    params: PostRestorePreviousVersionToDraftParams,
    options?: RequestOptions,
  ): APIPromise<BlogPost> {
    const { objectId } = params;
    return this._client.post(
      path`/cms/v3/blogs/posts/${objectId}/revisions/${revisionID}/restore-to-draft`,
      options,
    );
  }

  /**
   * Schedule a blog post to be published at a specified time.
   *
   * @example
   * ```ts
   * await client.cms.blogs.posts.schedule({
   *   id: 'id',
   *   publishDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  schedule(body: PostScheduleParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/posts/schedule', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set the primary language of a
   * [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content)
   * to the language of the provided post (specified as an ID in the request body)
   *
   * @example
   * ```ts
   * await client.cms.blogs.posts.setLangPrimary({ id: 'id' });
   * ```
   */
  setLangPrimary(body: PostSetLangPrimaryParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/cms/v3/blogs/posts/multi-language/set-new-lang-primary', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Partially updates the draft version of a single blog post by ID. You only need
   * to specify the values that you want to update.
   *
   * @example
   * ```ts
   * const blogPost = await client.cms.blogs.posts.updateDraft('objectId', {
   *   id: 'id',
   *   abStatus: 'master',
   *   abTestId: 'abTestId',
   *   archivedAt: 0,
   *   archivedInDashboard: true,
   *   attachedStylesheets: [{ foo: {} }],
   *   authorName: 'authorName',
   *   blogAuthorId: 'blogAuthorId',
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
   *   enableGoogleAmpOutputOverride: true,
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
   *   password: 'password',
   *   postBody: 'postBody',
   *   postSummary: 'postSummary',
   *   publicAccessRules: [{}],
   *   publicAccessRulesEnabled: true,
   *   publishDate: '2019-12-27T18:11:19.117Z',
   *   publishImmediately: true,
   *   rssBody: 'rssBody',
   *   rssSummary: 'rssSummary',
   *   slug: 'slug',
   *   state: 'state',
   *   tagIds: [0],
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
  updateDraft(objectID: string, body: PostUpdateDraftParams, options?: RequestOptions): APIPromise<BlogPost> {
    return this._client.patch(path`/cms/v3/blogs/posts/${objectID}/draft`, { body, ...options });
  }

  /**
   * Explicitly set new languages for each post in a
   * [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
   *
   * @example
   * ```ts
   * await client.cms.blogs.posts.updateLangs({
   *   languages: { foo: 'string' },
   *   primaryId: 'primaryId',
   * });
   * ```
   */
  updateLangs(body: PostUpdateLangsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/posts/multi-language/update-languages', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type BlogPostsPage = Page<BlogPost>;

export type VersionBlogPostsPage = Page<VersionBlogPost>;

/**
 * Wrapper for providing an array of blog posts as inputs.
 */
export interface BatchInputBlogPost {
  /**
   * Blog posts to input.
   */
  inputs: Array<BlogPost>;
}

/**
 * Response object for batch operations on blog posts.
 */
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
 * Response object for batch operations on blog posts with errors.
 */
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
 * Model definition for a Blog Post.
 */
export interface BlogPost {
  /**
   * The unique ID of the blog post.
   */
  id: string;

  abStatus:
    | 'master'
    | 'variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'automated_loser_variant';

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
   * The name of the blog author associated with the post.
   */
  authorName: string;

  /**
   * The ID of the blog author associated with this post.
   */
  blogAuthorId: string;

  /**
   * The GUID of the marketing campaign the post is associated with.
   */
  campaign: string;

  /**
   * ID of the object type.
   */
  categoryId: number;

  /**
   * The ID of the post's parent blog.
   */
  contentGroupId: string;

  /**
   * An ENUM descibing the type of this object. Should always be BLOG_POST.
   */
  contentTypeCategory:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15';

  created: string;

  /**
   * The ID of the user that created the post.
   */
  createdById: string;

  currentlyPublished: boolean;

  /**
   * A generated ENUM descibing the current state of this Blog Post. Should always
   * match state.
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
   * The domain that the post lives on. If null, the post will default to the domain
   * of the parent blog.
   */
  domain: string;

  dynamicPageDataSourceId: string;

  dynamicPageDataSourceType: number;

  /**
   * For dynamic HubDB pages, the ID of the HubDB table this post references.
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
   * The HTML title of the post.
   */
  htmlTitle: string;

  /**
   * Boolean to determine whether or not the Primary CSS Files should be applied.
   */
  includeDefaultCustomCss: boolean;

  /**
   * The explicitly defined ISO 639 language code of the post. If null, the post will
   * default to the language of the parent blog.
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
    | 'en-ee'
    | 'en-er'
    | 'en-fr'
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

  mabExperimentId: string;

  /**
   * A description that goes in <meta> tag on the page.
   */
  metaDescription: string;

  /**
   * The internal name of the post.
   */
  name: string;

  pageExpiryDate: number;

  pageExpiryEnabled: boolean;

  pageExpiryRedirectId: number;

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
   * The URL slug of the blog post. This field is appended to the domain to construct
   * the url of this post.
   */
  slug: string;

  /**
   * An enumeration describing the current publish state of the post.
   */
  state: string;

  /**
   * The IDs of the tags associated with this post.
   */
  tagIds: Array<number>;

  themeSettingsValues: { [key: string]: unknown };

  /**
   * ID of the primary blog post that this post was translated from.
   */
  translatedFromId: string;

  translations: { [key: string]: PagesAPI.ContentLanguageVariation };

  updated: string;

  /**
   * The ID of the user that updated the post.
   */
  updatedById: string;

  /**
   * A generated field representing the URL of this blog post.
   */
  url: string;

  /**
   * Boolean to determine if this post should use a featured image.
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

/**
 * Request body object for creating new blog post language variant.
 */
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

export interface BreakpointStyles {
  hidden: boolean;

  margin: Margin;

  padding: Padding;
}

/**
 * Response object for collections of blog posts with pagination information.
 */
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

/**
 * Response object for collections of blog post versions with pagination
 * information.
 */
export interface CollectionResponseWithTotalVersionBlogPost {
  /**
   * Collection of blog post versions.
   */
  results: Array<VersionBlogPost>;

  /**
   * Total number of blog post versions.
   */
  total: number;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface ContentLanguageVariation {
  id: number;

  archivedInDashboard: boolean;

  authorName: string;

  campaign: string;

  campaignName: string;

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

export type Margin = unknown;

export type Padding = unknown;

/**
 * Model definition of a version of a blog post.
 */
export interface VersionBlogPost {
  /**
   * The id of the version.
   */
  id: string;

  /**
   * Model definition for a Blog Post.
   */
  object: BlogPost;

  updatedAt: string;

  /**
   * Model definition for a version user. Contains addition information about the
   * user who created a version.
   */
  user: Shared.VersionUser;
}

export interface PostCreateParams {
  /**
   * The unique ID of the blog post.
   */
  id: string;

  abStatus:
    | 'master'
    | 'variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'automated_loser_variant';

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
   * The name of the blog author associated with the post.
   */
  authorName: string;

  /**
   * The ID of the blog author associated with this post.
   */
  blogAuthorId: string;

  /**
   * The GUID of the marketing campaign the post is associated with.
   */
  campaign: string;

  /**
   * ID of the object type.
   */
  categoryId: number;

  /**
   * The ID of the post's parent blog.
   */
  contentGroupId: string;

  /**
   * An ENUM descibing the type of this object. Should always be BLOG_POST.
   */
  contentTypeCategory:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15';

  created: string;

  /**
   * The ID of the user that created the post.
   */
  createdById: string;

  currentlyPublished: boolean;

  /**
   * A generated ENUM descibing the current state of this Blog Post. Should always
   * match state.
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
   * The domain that the post lives on. If null, the post will default to the domain
   * of the parent blog.
   */
  domain: string;

  dynamicPageDataSourceId: string;

  dynamicPageDataSourceType: number;

  /**
   * For dynamic HubDB pages, the ID of the HubDB table this post references.
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
   * The HTML title of the post.
   */
  htmlTitle: string;

  /**
   * Boolean to determine whether or not the Primary CSS Files should be applied.
   */
  includeDefaultCustomCss: boolean;

  /**
   * The explicitly defined ISO 639 language code of the post. If null, the post will
   * default to the language of the parent blog.
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
    | 'en-ee'
    | 'en-er'
    | 'en-fr'
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

  mabExperimentId: string;

  /**
   * A description that goes in <meta> tag on the page.
   */
  metaDescription: string;

  /**
   * The internal name of the post.
   */
  name: string;

  pageExpiryDate: number;

  pageExpiryEnabled: boolean;

  pageExpiryRedirectId: number;

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
   * The URL slug of the blog post. This field is appended to the domain to construct
   * the url of this post.
   */
  slug: string;

  /**
   * An enumeration describing the current publish state of the post.
   */
  state: string;

  /**
   * The IDs of the tags associated with this post.
   */
  tagIds: Array<number>;

  themeSettingsValues: { [key: string]: unknown };

  /**
   * ID of the primary blog post that this post was translated from.
   */
  translatedFromId: string;

  translations: { [key: string]: PagesAPI.ContentLanguageVariation };

  updated: string;

  /**
   * The ID of the user that updated the post.
   */
  updatedById: string;

  /**
   * A generated field representing the URL of this blog post.
   */
  url: string;

  /**
   * Boolean to determine if this post should use a featured image.
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
   * Body param: The unique ID of the blog post.
   */
  id: string;

  /**
   * Body param:
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
   * Body param:
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
   * Body param: The name of the blog author associated with the post.
   */
  authorName: string;

  /**
   * Body param: The ID of the blog author associated with this post.
   */
  blogAuthorId: string;

  /**
   * Body param: The GUID of the marketing campaign the post is associated with.
   */
  campaign: string;

  /**
   * Body param: ID of the object type.
   */
  categoryId: number;

  /**
   * Body param: The ID of the post's parent blog.
   */
  contentGroupId: string;

  /**
   * Body param: An ENUM descibing the type of this object. Should always be
   * BLOG_POST.
   */
  contentTypeCategory:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15';

  /**
   * Body param:
   */
  created: string;

  /**
   * Body param: The ID of the user that created the post.
   */
  createdById: string;

  /**
   * Body param:
   */
  currentlyPublished: boolean;

  /**
   * Body param: A generated ENUM descibing the current state of this Blog Post.
   * Should always match state.
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
   * Body param: The domain that the post lives on. If null, the post will default to
   * the domain of the parent blog.
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
   * Body param: For dynamic HubDB pages, the ID of the HubDB table this post
   * references.
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
   * Body param:
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
   * Body param: The HTML title of the post.
   */
  htmlTitle: string;

  /**
   * Body param: Boolean to determine whether or not the Primary CSS Files should be
   * applied.
   */
  includeDefaultCustomCss: boolean;

  /**
   * Body param: The explicitly defined ISO 639 language code of the post. If null,
   * the post will default to the language of the parent blog.
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
    | 'en-ee'
    | 'en-er'
    | 'en-fr'
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
   * Body param:
   */
  mabExperimentId: string;

  /**
   * Body param: A description that goes in <meta> tag on the page.
   */
  metaDescription: string;

  /**
   * Body param: The internal name of the post.
   */
  name: string;

  /**
   * Body param:
   */
  pageExpiryDate: number;

  /**
   * Body param:
   */
  pageExpiryEnabled: boolean;

  /**
   * Body param:
   */
  pageExpiryRedirectId: number;

  /**
   * Body param:
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
   * Body param: The URL slug of the blog post. This field is appended to the domain
   * to construct the url of this post.
   */
  slug: string;

  /**
   * Body param: An enumeration describing the current publish state of the post.
   */
  state: string;

  /**
   * Body param: The IDs of the tags associated with this post.
   */
  tagIds: Array<number>;

  /**
   * Body param:
   */
  themeSettingsValues: { [key: string]: unknown };

  /**
   * Body param: ID of the primary blog post that this post was translated from.
   */
  translatedFromId: string;

  /**
   * Body param:
   */
  translations: { [key: string]: PagesAPI.ContentLanguageVariation };

  /**
   * Body param:
   */
  updated: string;

  /**
   * Body param: The ID of the user that updated the post.
   */
  updatedById: string;

  /**
   * Body param: A generated field representing the URL of this blog post.
   */
  url: string;

  /**
   * Body param: Boolean to determine if this post should use a featured image.
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
   * Query param: Specifies whether to update deleted blog posts. Defaults to
   * `false`.
   */
  archived?: boolean;
}

export interface PostListParams extends PageParams {
  /**
   * Specifies whether to return deleted blog posts. Defaults to `false`.
   */
  archived?: boolean;

  /**
   * Only return blog posts created after the specified time.
   */
  createdAfter?: string;

  /**
   * Only return blog posts created at exactly the specified time.
   */
  createdAt?: string;

  /**
   * Only return blog posts created before the specified time.
   */
  createdBefore?: string;

  property?: string;

  /**
   * Specifies which fields to use for sorting results. Valid fields are `createdAt`
   * (default), `name`, `updatedAt`, `createdBy`, `updatedBy`.
   */
  sort?: Array<string>;

  /**
   * Only return blog posts last updated after the specified time.
   */
  updatedAfter?: string;

  /**
   * Only return blog posts last updated at exactly the specified time.
   */
  updatedAt?: string;

  /**
   * Only return blog posts last updated before the specified time.
   */
  updatedBefore?: string;
}

export interface PostDeleteParams {
  /**
   * Whether to return only results that have been deleted.
   */
  archived?: boolean;
}

export interface PostAttachToLangGroupParams {
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

export interface PostCreateLangVariationParams {
  /**
   * ID of blog post to clone.
   */
  id: string;

  /**
   * Target language of new variant.
   */
  language?: string;
}

export interface PostDetachFromLangGroupParams {
  /**
   * ID of the object to remove from a multi-language group.
   */
  id: string;
}

export interface PostGetPreviousVersionParams {
  /**
   * The ID of the blog post.
   */
  objectId: string;
}

export interface PostGetPreviousVersionsParams extends PageParams {
  before?: string;
}

export interface PostReadParams {
  /**
   * Specifies whether to return deleted blog posts. Defaults to `false`.
   */
  archived?: boolean;

  /**
   * Specific properties to return.
   */
  property?: string;
}

export interface PostRestorePreviousVersionParams {
  /**
   * The ID of the blog post.
   */
  objectId: string;
}

export interface PostRestorePreviousVersionToDraftParams {
  /**
   * The ID of the blog post.
   */
  objectId: string;
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

export interface PostSetLangPrimaryParams {
  /**
   * ID of object to set as primary in multi-language group.
   */
  id: string;
}

export interface PostUpdateDraftParams {
  /**
   * The unique ID of the blog post.
   */
  id: string;

  abStatus:
    | 'master'
    | 'variant'
    | 'loser_variant'
    | 'mab_master'
    | 'mab_variant'
    | 'automated_master'
    | 'automated_variant'
    | 'automated_loser_variant';

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
   * The name of the blog author associated with the post.
   */
  authorName: string;

  /**
   * The ID of the blog author associated with this post.
   */
  blogAuthorId: string;

  /**
   * The GUID of the marketing campaign the post is associated with.
   */
  campaign: string;

  /**
   * ID of the object type.
   */
  categoryId: number;

  /**
   * The ID of the post's parent blog.
   */
  contentGroupId: string;

  /**
   * An ENUM descibing the type of this object. Should always be BLOG_POST.
   */
  contentTypeCategory:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15';

  created: string;

  /**
   * The ID of the user that created the post.
   */
  createdById: string;

  currentlyPublished: boolean;

  /**
   * A generated ENUM descibing the current state of this Blog Post. Should always
   * match state.
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
   * The domain that the post lives on. If null, the post will default to the domain
   * of the parent blog.
   */
  domain: string;

  dynamicPageDataSourceId: string;

  dynamicPageDataSourceType: number;

  /**
   * For dynamic HubDB pages, the ID of the HubDB table this post references.
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
   * The HTML title of the post.
   */
  htmlTitle: string;

  /**
   * Boolean to determine whether or not the Primary CSS Files should be applied.
   */
  includeDefaultCustomCss: boolean;

  /**
   * The explicitly defined ISO 639 language code of the post. If null, the post will
   * default to the language of the parent blog.
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
    | 'en-ee'
    | 'en-er'
    | 'en-fr'
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

  mabExperimentId: string;

  /**
   * A description that goes in <meta> tag on the page.
   */
  metaDescription: string;

  /**
   * The internal name of the post.
   */
  name: string;

  pageExpiryDate: number;

  pageExpiryEnabled: boolean;

  pageExpiryRedirectId: number;

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
   * The URL slug of the blog post. This field is appended to the domain to construct
   * the url of this post.
   */
  slug: string;

  /**
   * An enumeration describing the current publish state of the post.
   */
  state: string;

  /**
   * The IDs of the tags associated with this post.
   */
  tagIds: Array<number>;

  themeSettingsValues: { [key: string]: unknown };

  /**
   * ID of the primary blog post that this post was translated from.
   */
  translatedFromId: string;

  translations: { [key: string]: PagesAPI.ContentLanguageVariation };

  updated: string;

  /**
   * The ID of the user that updated the post.
   */
  updatedById: string;

  /**
   * A generated field representing the URL of this blog post.
   */
  url: string;

  /**
   * Boolean to determine if this post should use a featured image.
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

export interface PostUpdateLangsParams {
  /**
   * Map of object IDs to associated languages of object in the multi-language group.
   */
  languages: { [key: string]: string };

  /**
   * ID of the primary object in the multi-language group.
   */
  primaryId: string;
}

Posts.Batch = Batch;

export declare namespace Posts {
  export {
    type BatchInputBlogPost as BatchInputBlogPost,
    type BatchResponseBlogPost as BatchResponseBlogPost,
    type BatchResponseBlogPostWithErrors as BatchResponseBlogPostWithErrors,
    type BlogPost as BlogPost,
    type BlogPostLanguageCloneRequestVNext as BlogPostLanguageCloneRequestVNext,
    type BreakpointStyles as BreakpointStyles,
    type CollectionResponseWithTotalBlogPostForwardPaging as CollectionResponseWithTotalBlogPostForwardPaging,
    type CollectionResponseWithTotalVersionBlogPost as CollectionResponseWithTotalVersionBlogPost,
    type ContentLanguageVariation as ContentLanguageVariation,
    type Margin as Margin,
    type Padding as Padding,
    type VersionBlogPost as VersionBlogPost,
    type BlogPostsPage as BlogPostsPage,
    type VersionBlogPostsPage as VersionBlogPostsPage,
    type PostCreateParams as PostCreateParams,
    type PostUpdateParams as PostUpdateParams,
    type PostListParams as PostListParams,
    type PostDeleteParams as PostDeleteParams,
    type PostAttachToLangGroupParams as PostAttachToLangGroupParams,
    type PostCloneParams as PostCloneParams,
    type PostCreateLangVariationParams as PostCreateLangVariationParams,
    type PostDetachFromLangGroupParams as PostDetachFromLangGroupParams,
    type PostGetPreviousVersionParams as PostGetPreviousVersionParams,
    type PostGetPreviousVersionsParams as PostGetPreviousVersionsParams,
    type PostReadParams as PostReadParams,
    type PostRestorePreviousVersionParams as PostRestorePreviousVersionParams,
    type PostRestorePreviousVersionToDraftParams as PostRestorePreviousVersionToDraftParams,
    type PostScheduleParams as PostScheduleParams,
    type PostSetLangPrimaryParams as PostSetLangPrimaryParams,
    type PostUpdateDraftParams as PostUpdateDraftParams,
    type PostUpdateLangsParams as PostUpdateLangsParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchReadParams as BatchReadParams,
  };
}
