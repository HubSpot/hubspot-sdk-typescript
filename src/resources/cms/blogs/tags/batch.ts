// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['cms', 'blogs', 'tags', 'batch'] = Object.freeze([
    'cms',
    'blogs',
    'tags',
    'batch',
  ] as const);

  /**
   * Delete the Blog Tag objects identified in the request body.
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/blogs/2026-03/tags/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create the Blog Tag objects detailed in the request body.
   */
  createBatch(body: BatchCreateBatchParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/cms/blogs/2026-03/tags/batch/create', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the Blog Tag objects identified in the request body.
   */
  getBatch(params: BatchGetBatchParams, options?: RequestOptions): APIPromise<Response> {
    const { archived, ...body } = params;
    return this._client.post('/cms/blogs/2026-03/tags/batch/read', {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update the Blog Tag objects identified in the request body.
   */
  updateBatch(params: BatchUpdateBatchParams, options?: RequestOptions): APIPromise<Response> {
    const { archived, ...body } = params;
    return this._client.post('/cms/blogs/2026-03/tags/batch/update', {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}
export class Batch extends BaseBatch {}

export interface BatchDeleteParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface BatchCreateBatchParams {
  /**
   * Blog tags to input.
   */
  inputs: Array<TagsAPI.Tag>;
}

export interface BatchGetBatchParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface BatchUpdateBatchParams {
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
    type BatchDeleteParams as BatchDeleteParams,
    type BatchCreateBatchParams as BatchCreateBatchParams,
    type BatchGetBatchParams as BatchGetBatchParams,
    type BatchUpdateBatchParams as BatchUpdateBatchParams,
  };
}
