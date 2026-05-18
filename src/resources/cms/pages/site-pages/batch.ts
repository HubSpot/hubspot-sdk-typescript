// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PagesAPI from '../pages';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['cms', 'pages', 'sitePages', 'batch'] = Object.freeze([
    'cms',
    'pages',
    'sitePages',
    'batch',
  ] as const);

  /**
   * Create a batch of website pages as specified in the request body.
   */
  createSitePages(
    body: BatchCreateSitePagesParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponsePage> {
    return this._client.post('/cms/pages/2026-03/site-pages/batch/create', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a batch of website pages as specified in the request body. Note that this
   * is not the same as the dashboard `archive` function. To perform a dashboard
   * `archive` send an normal update with the `archivedInDashboard` field set to
   * `true`.
   */
  deleteSitePages(body: BatchDeleteSitePagesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/site-pages/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a batch of website pages as specified in the request body.
   */
  getSitePages(
    params: BatchGetSitePagesParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponsePage> {
    const { archived, ...body } = params;
    return this._client.post('/cms/pages/2026-03/site-pages/batch/read', {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a batch of website pages as specified in the request body.
   */
  updateSitePages(
    params: BatchUpdateSitePagesParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponsePage> {
    const { archived, ...body } = params;
    return this._client.post('/cms/pages/2026-03/site-pages/batch/update', {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }
}
export class Batch extends BaseBatch {}

export interface BatchCreateSitePagesParams {
  /**
   * Pages to input.
   */
  inputs: Array<PagesAPI.PagesPage>;
}

export interface BatchDeleteSitePagesParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface BatchGetSitePagesParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface BatchUpdateSitePagesParams {
  /**
   * Body param: JSON nodes to input.
   */
  inputs: Array<unknown>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export declare namespace Batch {
  export {
    type BatchCreateSitePagesParams as BatchCreateSitePagesParams,
    type BatchDeleteSitePagesParams as BatchDeleteSitePagesParams,
    type BatchGetSitePagesParams as BatchGetSitePagesParams,
    type BatchUpdateSitePagesParams as BatchUpdateSitePagesParams,
  };
}
