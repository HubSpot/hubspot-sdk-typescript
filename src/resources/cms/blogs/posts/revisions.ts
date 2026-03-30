// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Revisions extends APIResource {
  /**
   * Retrieve a previous version of a blog post.
   */
  getPreviousVersion(
    revisionID: string,
    params: RevisionGetPreviousVersionParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { objectId } = params;
    return this._client.get(path`/cms/blogs/2026-03/posts/${objectId}/revisions/${revisionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve all the previous versions of a blog post.
   */
  getPreviousVersions(
    objectID: string,
    query: RevisionGetPreviousVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/cms/blogs/2026-03/posts/${objectID}/revisions`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Restores a blog post to one of its previous versions.
   */
  restorePreviousVersion(
    revisionID: string,
    params: RevisionRestorePreviousVersionParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { objectId } = params;
    return this._client.post(path`/cms/blogs/2026-03/posts/${objectId}/revisions/${revisionID}/restore`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Takes a specified version of a blog post, sets it as the new draft version of
   * the blog post.
   */
  restorePreviousVersionToDraft(
    revisionID: number,
    params: RevisionRestorePreviousVersionToDraftParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { objectId } = params;
    return this._client.post(
      path`/cms/blogs/2026-03/posts/${objectId}/revisions/${revisionID}/restore-to-draft`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]), __binaryResponse: true },
    );
  }
}

export interface RevisionGetPreviousVersionParams {
  objectId: string;
}

export interface RevisionGetPreviousVersionsParams {
  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  before?: string;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;
}

export interface RevisionRestorePreviousVersionParams {
  objectId: string;
}

export interface RevisionRestorePreviousVersionToDraftParams {
  objectId: string;
}

export declare namespace Revisions {
  export {
    type RevisionGetPreviousVersionParams as RevisionGetPreviousVersionParams,
    type RevisionGetPreviousVersionsParams as RevisionGetPreviousVersionsParams,
    type RevisionRestorePreviousVersionParams as RevisionRestorePreviousVersionParams,
    type RevisionRestorePreviousVersionToDraftParams as RevisionRestorePreviousVersionToDraftParams,
  };
}
