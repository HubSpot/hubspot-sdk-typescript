// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PagesAPI from '../pages';
import { PageVersionsPage } from '../pages';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseRevisions extends APIResource {
  static override readonly _key: readonly ['cms', 'pages', 'sitePages', 'revisions'] = Object.freeze([
    'cms',
    'pages',
    'sitePages',
    'revisions',
  ] as const);

  /**
   * Retrieve a previous version of a website page by the revision ID.
   */
  getSitePageRevision(
    revisionID: string,
    params: RevisionGetSitePageRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.PageVersion> {
    const { objectId } = params;
    return this._client.get(path`/cms/pages/2026-03/site-pages/${objectId}/revisions/${revisionID}`, options);
  }

  /**
   * Retrieves all the previous versions of a website page, specified by page ID.
   */
  listSitePageRevisions(
    objectID: string,
    query: RevisionListSitePageRevisionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PageVersionsPage, PagesAPI.PageVersion> {
    return this._client.getAPIList(
      path`/cms/pages/2026-03/site-pages/${objectID}/revisions`,
      Page<PagesAPI.PageVersion>,
      { query, ...options },
    );
  }

  /**
   * Restores a website page to a previous version, specified by page ID and version
   * ID.
   */
  restoreSitePageRevision(
    revisionID: string,
    params: RevisionRestoreSitePageRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.PagesPage> {
    const { objectId } = params;
    return this._client.post(
      path`/cms/pages/2026-03/site-pages/${objectId}/revisions/${revisionID}/restore`,
      options,
    );
  }

  /**
   * Takes a specified version of a website page and sets it as the new draft version
   * of the page.
   */
  restoreSitePageRevisionToDraft(
    revisionID: number,
    params: RevisionRestoreSitePageRevisionToDraftParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.PagesPage> {
    const { objectId } = params;
    return this._client.post(
      path`/cms/pages/2026-03/site-pages/${objectId}/revisions/${revisionID}/restore-to-draft`,
      options,
    );
  }
}
export class Revisions extends BaseRevisions {}

export interface RevisionGetSitePageRevisionParams {
  /**
   * The unique identifier of the site page.
   */
  objectId: string;
}

export interface RevisionListSitePageRevisionsParams extends PageParams {
  before?: string;
}

export interface RevisionRestoreSitePageRevisionParams {
  objectId: string;
}

export interface RevisionRestoreSitePageRevisionToDraftParams {
  objectId: string;
}

export declare namespace Revisions {
  export {
    type RevisionGetSitePageRevisionParams as RevisionGetSitePageRevisionParams,
    type RevisionListSitePageRevisionsParams as RevisionListSitePageRevisionsParams,
    type RevisionRestoreSitePageRevisionParams as RevisionRestoreSitePageRevisionParams,
    type RevisionRestoreSitePageRevisionToDraftParams as RevisionRestoreSitePageRevisionToDraftParams,
  };
}

export { type PageVersionsPage };
