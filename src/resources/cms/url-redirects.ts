// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CmsAPI from './cms';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class URLRedirects extends APIResource {
  /**
   * Create a redirect
   */
  create(body: URLRedirectCreateParams, options?: RequestOptions): APIPromise<CmsAPI.CmsURLMapping> {
    return this._client.post('/cms/v3/url-redirects/', { body, ...options });
  }

  /**
   * Update a redirect
   */
  update(
    urlRedirectID: string,
    body: URLRedirectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CmsAPI.CmsURLMapping> {
    return this._client.patch(path`/cms/v3/url-redirects/${urlRedirectID}`, { body, ...options });
  }

  /**
   * Get current redirects
   */
  list(
    query: URLRedirectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CmsAPI.CmsCollectionResponseWithTotalURLMappingForwardPaging> {
    return this._client.get('/cms/v3/url-redirects/', { query, ...options });
  }

  /**
   * Delete a redirect
   */
  delete(urlRedirectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/cms/v3/url-redirects/${urlRedirectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get details for a redirect
   */
  read(urlRedirectID: string, options?: RequestOptions): APIPromise<CmsAPI.CmsURLMapping> {
    return this._client.get(path`/cms/v3/url-redirects/${urlRedirectID}`, options);
  }
}

export interface URLRedirectCreateParams {
  destination: string;

  redirectStyle: number;

  routePrefix: string;

  isMatchFullUrl?: boolean;

  isMatchQueryString?: boolean;

  isOnlyAfterNotFound?: boolean;

  isPattern?: boolean;

  isProtocolAgnostic?: boolean;

  isTrailingSlashOptional?: boolean;

  precedence?: number;
}

export interface URLRedirectUpdateParams {
  id: string;

  destination: string;

  isMatchFullUrl: boolean;

  isMatchQueryString: boolean;

  isOnlyAfterNotFound: boolean;

  isPattern: boolean;

  isProtocolAgnostic: boolean;

  isTrailingSlashOptional: boolean;

  precedence: number;

  redirectStyle: number;

  routePrefix: string;

  created?: string;

  updated?: string;
}

export interface URLRedirectListParams {
  after?: string;

  archived?: boolean;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  limit?: number;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export declare namespace URLRedirects {
  export {
    type URLRedirectCreateParams as URLRedirectCreateParams,
    type URLRedirectUpdateParams as URLRedirectUpdateParams,
    type URLRedirectListParams as URLRedirectListParams,
  };
}
