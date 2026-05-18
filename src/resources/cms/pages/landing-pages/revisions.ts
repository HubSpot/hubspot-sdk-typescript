// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PagesAPI from '../pages';
import { PageVersionsPage } from '../pages';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseRevisions extends APIResource {
  static override readonly _key: readonly ['cms', 'pages', 'landingPages', 'revisions'] = Object.freeze([
    'cms',
    'pages',
    'landingPages',
    'revisions',
  ] as const);

  /**
   * Retrieve a previous version of a landing page, specified by page ID and revision
   * ID.
   */
  getLandingPageRevision(
    revisionID: string,
    params: RevisionGetLandingPageRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.PageVersion> {
    const { objectId } = params;
    return this._client.get(
      path`/cms/pages/2026-03/landing-pages/${objectId}/revisions/${revisionID}`,
      options,
    );
  }

  /**
   * Retrieve all the previous versions of a landing page, specified by page ID.
   */
  listLandingPageRevisions(
    objectID: string,
    query: RevisionListLandingPageRevisionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PageVersionsPage, PagesAPI.PageVersion> {
    return this._client.getAPIList(
      path`/cms/pages/2026-03/landing-pages/${objectID}/revisions`,
      Page<PagesAPI.PageVersion>,
      { query, ...options },
    );
  }

  /**
   * Restores a previous version of a landing page, specified by page ID and revision
   * ID.
   */
  restoreLandingPageRevision(
    revisionID: string,
    params: RevisionRestoreLandingPageRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.PagesPage> {
    const { objectId } = params;
    return this._client.post(
      path`/cms/pages/2026-03/landing-pages/${objectId}/revisions/${revisionID}/restore`,
      options,
    );
  }

  /**
   * Specify a previous version of a landing page to set as the page draft.
   */
  restoreLandingPageRevisionToDraft(
    revisionID: number,
    params: RevisionRestoreLandingPageRevisionToDraftParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.PagesPage> {
    const { objectId } = params;
    return this._client.post(
      path`/cms/pages/2026-03/landing-pages/${objectId}/revisions/${revisionID}/restore-to-draft`,
      options,
    );
  }
}
export class Revisions extends BaseRevisions {}

export interface RevisionGetLandingPageRevisionParams {
  objectId: string;
}

export interface RevisionListLandingPageRevisionsParams extends PageParams {
  before?: string;
}

export interface RevisionRestoreLandingPageRevisionParams {
  objectId: string;
}

export interface RevisionRestoreLandingPageRevisionToDraftParams {
  objectId: string;
}

export declare namespace Revisions {
  export {
    type RevisionGetLandingPageRevisionParams as RevisionGetLandingPageRevisionParams,
    type RevisionListLandingPageRevisionsParams as RevisionListLandingPageRevisionsParams,
    type RevisionRestoreLandingPageRevisionParams as RevisionRestoreLandingPageRevisionParams,
    type RevisionRestoreLandingPageRevisionToDraftParams as RevisionRestoreLandingPageRevisionToDraftParams,
  };
}

export { type PageVersionsPage };
