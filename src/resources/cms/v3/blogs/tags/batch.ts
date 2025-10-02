// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create a batch of Blog Tags
   */
  create(body: BatchCreateParams, options?: RequestOptions): APIPromise<BlogsTagsBatchResponseTag> {
    return this._client.post('/cms/v3/blogs/tags/batch/create', { body, ...options });
  }

  /**
   * Update a batch of Blog Tags
   */
  update(params: BatchUpdateParams, options?: RequestOptions): APIPromise<BlogsTagsBatchResponseTag> {
    const { archived, ...body } = params;
    return this._client.post('/cms/v3/blogs/tags/batch/update', { query: { archived }, body, ...options });
  }

  /**
   * Delete a batch of Blog Tags
   */
  archive(body: BatchArchiveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/tags/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a batch of Blog Tags
   */
  read(params: BatchReadParams, options?: RequestOptions): APIPromise<BlogsTagsBatchResponseTag> {
    const { archived, ...body } = params;
    return this._client.post('/cms/v3/blogs/tags/batch/read', { query: { archived }, body, ...options });
  }
}

export interface BatchInputString {
  inputs: Array<string>;
}

export interface BlogsTagsBatchResponseTag {
  completedAt: string;

  results: Array<TagsAPI.BlogsTagsTag>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchCreateParams {
  inputs: Array<TagsAPI.BlogsTagsTag>;
}

export interface BatchUpdateParams {
  /**
   * Body param:
   */
  inputs: Array<unknown>;

  /**
   * Query param:
   */
  archived?: boolean;
}

export interface BatchArchiveParams {
  inputs: Array<string>;
}

export interface BatchReadParams {
  /**
   * Body param:
   */
  inputs: Array<string>;

  /**
   * Query param:
   */
  archived?: boolean;
}

export declare namespace Batch {
  export {
    type BatchInputString as BatchInputString,
    type BlogsTagsBatchResponseTag as BlogsTagsBatchResponseTag,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchReadParams as BatchReadParams,
  };
}
