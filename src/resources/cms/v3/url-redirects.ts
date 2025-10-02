// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActivityAPI from '../../account-info/v3/activity';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class URLRedirects extends APIResource {
  /**
   * Get details for a redirect
   */
  retrieve(urlRedirectID: string, options?: RequestOptions): APIPromise<URLMapping> {
    return this._client.get(path`/cms/v3/url-redirects/${urlRedirectID}`, options);
  }

  /**
   * Create a redirect
   */
  update(body: URLRedirectUpdateParams, options?: RequestOptions): APIPromise<URLMapping> {
    return this._client.post('/cms/v3/url-redirects/', { body, ...options });
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
   * Get current redirects
   */
  retrieve(
    query: URLRedirectRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<URLRedirectRetrieveResponse> {
    return this._client.get('/cms/v3/url-redirects/', { query, ...options });
  }
}

export interface URLMapping {
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

export interface URLRedirectRetrieveResponse {
  results: Array<URLMapping>;

  total: number;

  paging?: ActivityAPI.ForwardPaging;
}

export interface URLRedirectUpdateParams {
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

export interface URLRedirectRetrieveParams {
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
    type URLMapping as URLMapping,
    type URLRedirectRetrieveResponse as URLRedirectRetrieveResponse,
    type URLRedirectUpdateParams as URLRedirectUpdateParams,
    type URLRedirectRetrieveParams as URLRedirectRetrieveParams,
  };
}
