// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PostsAPI from './posts';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create a batch of blog posts, specifying their content in the request body.
   */
  create(body: BatchCreateParams, options?: RequestOptions): APIPromise<PostsAPI.BatchResponseBlogPost> {
    return this._client.post('/cms/v3/blogs/posts/batch/create', { body, ...options });
  }

  /**
   * Update a batch of blog posts.
   */
  update(params: BatchUpdateParams, options?: RequestOptions): APIPromise<PostsAPI.BatchResponseBlogPost> {
    const { archived, ...body } = params;
    return this._client.post('/cms/v3/blogs/posts/batch/update', { query: { archived }, body, ...options });
  }

  /**
   * Delete a blog post by ID. Note: This is not the same as the in-app `archive`
   * function. To perform a dashboard `archive` send an normal update with the
   * `archivedInDashboard` field set to `true`.
   */
  delete(body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/posts/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a batch of blog posts by ID. identified in the request body.
   */
  read(params: BatchReadParams, options?: RequestOptions): APIPromise<PostsAPI.BatchResponseBlogPost> {
    const { archived, ...body } = params;
    return this._client.post('/cms/v3/blogs/posts/batch/read', { query: { archived }, body, ...options });
  }
}

export interface BatchCreateParams {
  /**
   * Blog posts to input.
   */
  inputs: Array<PostsAPI.BlogPost>;
}

export interface BatchUpdateParams {
  /**
   * Body param: JSON nodes to input.
   */
  inputs: Array<unknown>;

  /**
   * Query param: Specifies whether to update deleted Blog Posts. Defaults to
   * `false`.
   */
  archived?: boolean;
}

export interface BatchDeleteParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface BatchReadParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: Specifies whether to return deleted blog posts Defaults to `false`.
   */
  archived?: boolean;
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchReadParams as BatchReadParams,
  };
}
