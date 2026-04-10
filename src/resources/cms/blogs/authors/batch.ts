// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AuthorsAPI from './authors';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['cms', 'blogs', 'authors', 'batch'] = Object.freeze([
    'cms',
    'blogs',
    'authors',
    'batch',
  ] as const);

  /**
   * Create the Blog Author objects detailed in the request body.
   */
  create(body: BatchCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/cms/blogs/2026-03/authors/batch/create', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update the Blog Author objects identified in the request body.
   */
  update(params: BatchUpdateParams, options?: RequestOptions): APIPromise<Response> {
    const { archived, ...body } = params;
    return this._client.post('/cms/blogs/2026-03/authors/batch/update', {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Delete the Blog Author objects identified in the request body.
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/blogs/2026-03/authors/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the Blog Author objects identified in the request body.
   */
  get(params: BatchGetParams, options?: RequestOptions): APIPromise<Response> {
    const { archived, ...body } = params;
    return this._client.post('/cms/blogs/2026-03/authors/batch/read', {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}
export class Batch extends BaseBatch {}

export interface BatchCreateParams {
  /**
   * Blog authors to input.
   */
  inputs: Array<AuthorsAPI.BlogAuthor>;
}

export interface BatchUpdateParams {
  /**
   * Body param: JSON nodes to input.
   */
  inputs: Array<unknown>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface BatchDeleteParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface BatchGetParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };
}
