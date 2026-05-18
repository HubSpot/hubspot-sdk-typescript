// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PagesAPI from '../pages';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['cms', 'pages', 'landingPages', 'batch'] = Object.freeze([
    'cms',
    'pages',
    'landingPages',
    'batch',
  ] as const);

  /**
   * Create a batch of landing pages as detailed in the request body.
   */
  createLandingPages(
    body: BatchCreateLandingPagesParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponsePage> {
    return this._client.post('/cms/pages/2026-03/landing-pages/batch/create', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete landing pages specified by ID in the request body. Note: this is not the
   * same as the dashboard `archive` function. To perform a dashboard `archive` send
   * an normal update with the `archivedInDashboard` field set to `true`.
   */
  deleteLandingPages(body: BatchDeleteLandingPagesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/landing-pages/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a batch of landing pages as specified in the request body.
   */
  getLandingPages(
    params: BatchGetLandingPagesParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponsePage> {
    const { archived, ...body } = params;
    return this._client.post('/cms/pages/2026-03/landing-pages/batch/read', {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a batch of landing pages as specified in the request body.
   */
  updateLandingPages(
    params: BatchUpdateLandingPagesParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponsePage> {
    const { archived, ...body } = params;
    return this._client.post('/cms/pages/2026-03/landing-pages/batch/update', {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }
}
export class Batch extends BaseBatch {}

export interface BatchCreateLandingPagesParams {
  /**
   * Pages to input.
   */
  inputs: Array<PagesAPI.PagesPage>;
}

export interface BatchDeleteLandingPagesParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface BatchGetLandingPagesParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface BatchUpdateLandingPagesParams {
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
    type BatchCreateLandingPagesParams as BatchCreateLandingPagesParams,
    type BatchDeleteLandingPagesParams as BatchDeleteLandingPagesParams,
    type BatchGetLandingPagesParams as BatchGetLandingPagesParams,
    type BatchUpdateLandingPagesParams as BatchUpdateLandingPagesParams,
  };
}
