// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class URLRedirects extends APIResource {
  /**
   * Creates and configures a new URL redirect.
   *
   * @example
   * ```ts
   * const urlMapping = await client.cms.urlRedirects.create({
   *   destination: 'destination',
   *   redirectStyle: 0,
   *   routePrefix: 'routePrefix',
   * });
   * ```
   */
  create(body: URLRedirectCreateParams, options?: RequestOptions): APIPromise<URLMapping> {
    return this._client.post('/cms/v3/url-redirects/', { body, ...options });
  }

  /**
   * Updates the settings for an existing URL redirect.
   *
   * @example
   * ```ts
   * const urlMapping = await client.cms.urlRedirects.update(
   *   'urlRedirectId',
   *   {
   *     id: 'id',
   *     destination: 'destination',
   *     isMatchFullUrl: true,
   *     isMatchQueryString: true,
   *     isOnlyAfterNotFound: true,
   *     isPattern: true,
   *     isProtocolAgnostic: true,
   *     isTrailingSlashOptional: true,
   *     precedence: 0,
   *     redirectStyle: 0,
   *     routePrefix: 'routePrefix',
   *   },
   * );
   * ```
   */
  update(
    urlRedirectID: string,
    body: URLRedirectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<URLMapping> {
    return this._client.patch(path`/cms/v3/url-redirects/${urlRedirectID}`, { body, ...options });
  }

  /**
   * Returns all existing URL redirects. Results can be limited and filtered by
   * creation or updated date.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const urlMapping of client.cms.urlRedirects.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: URLRedirectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<URLMappingsPage, URLMapping> {
    return this._client.getAPIList('/cms/v3/url-redirects/', Page<URLMapping>, { query, ...options });
  }

  /**
   * Delete one existing redirect, so it is no longer mapped.
   *
   * @example
   * ```ts
   * await client.cms.urlRedirects.delete('urlRedirectId');
   * ```
   */
  delete(urlRedirectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/cms/v3/url-redirects/${urlRedirectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the details for a single existing URL redirect by ID.
   *
   * @example
   * ```ts
   * const urlMapping = await client.cms.urlRedirects.read(
   *   'urlRedirectId',
   * );
   * ```
   */
  read(urlRedirectID: string, options?: RequestOptions): APIPromise<URLMapping> {
    return this._client.get(path`/cms/v3/url-redirects/${urlRedirectID}`, options);
  }
}

export type URLMappingsPage = Page<URLMapping>;

export interface CollectionResponseWithTotalURLMappingForwardPaging {
  results: Array<URLMapping>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface URLMapping {
  /**
   * The unique ID of this URL redirect.
   */
  id: string;

  /**
   * The destination URL, where the target URL should be redirected if it matches the
   * `routePrefix`.
   */
  destination: string;

  /**
   * Whether the `routePrefix` should match on the entire URL, including the domain.
   */
  isMatchFullUrl: boolean;

  /**
   * Whether the `routePrefix` should match on the entire URL path, including the
   * query string.
   */
  isMatchQueryString: boolean;

  /**
   * Whether the URL redirect mapping should apply only if a live page on the URL
   * isn't found. If False, the URL redirect mapping will take precedence over any
   * existing page.
   */
  isOnlyAfterNotFound: boolean;

  /**
   * Whether the `routePrefix` should match based on pattern.
   */
  isPattern: boolean;

  /**
   * Whether the `routePrefix` should match both HTTP and HTTPS protocols.
   */
  isProtocolAgnostic: boolean;

  /**
   * Whether a trailing slash will be ignored.
   */
  isTrailingSlashOptional: boolean;

  /**
   * Used to prioritize URL redirection. If a given URL matches more than one
   * redirect, the one with the **lower** precedence will be used.
   */
  precedence: number;

  /**
   * The type of redirect to create. Options include: 301 (permanent), 302
   * (temporary), or 305 (proxy). Find more details
   * [here](https://knowledge.hubspot.com/cos-general/how-to-redirect-a-hubspot-page).
   */
  redirectStyle: number;

  /**
   * The target incoming URL, path, or pattern to match for redirection.
   */
  routePrefix: string;

  created?: string;

  updated?: string;
}

export interface URLMappingCreateRequestBody {
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
  /**
   * The unique ID of this URL redirect.
   */
  id: string;

  /**
   * The destination URL, where the target URL should be redirected if it matches the
   * `routePrefix`.
   */
  destination: string;

  /**
   * Whether the `routePrefix` should match on the entire URL, including the domain.
   */
  isMatchFullUrl: boolean;

  /**
   * Whether the `routePrefix` should match on the entire URL path, including the
   * query string.
   */
  isMatchQueryString: boolean;

  /**
   * Whether the URL redirect mapping should apply only if a live page on the URL
   * isn't found. If False, the URL redirect mapping will take precedence over any
   * existing page.
   */
  isOnlyAfterNotFound: boolean;

  /**
   * Whether the `routePrefix` should match based on pattern.
   */
  isPattern: boolean;

  /**
   * Whether the `routePrefix` should match both HTTP and HTTPS protocols.
   */
  isProtocolAgnostic: boolean;

  /**
   * Whether a trailing slash will be ignored.
   */
  isTrailingSlashOptional: boolean;

  /**
   * Used to prioritize URL redirection. If a given URL matches more than one
   * redirect, the one with the **lower** precedence will be used.
   */
  precedence: number;

  /**
   * The type of redirect to create. Options include: 301 (permanent), 302
   * (temporary), or 305 (proxy). Find more details
   * [here](https://knowledge.hubspot.com/cos-general/how-to-redirect-a-hubspot-page).
   */
  redirectStyle: number;

  /**
   * The target incoming URL, path, or pattern to match for redirection.
   */
  routePrefix: string;

  created?: string;

  updated?: string;
}

export interface URLRedirectListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Only return redirects created after this date.
   */
  createdAfter?: string;

  /**
   * Only return redirects created on exactly this date.
   */
  createdAt?: string;

  /**
   * Only return redirects created before this date.
   */
  createdBefore?: string;

  sort?: Array<string>;

  /**
   * Only return redirects last updated after this date.
   */
  updatedAfter?: string;

  /**
   * Only return redirects last updated on exactly this date.
   */
  updatedAt?: string;

  /**
   * Only return redirects last updated before this date.
   */
  updatedBefore?: string;
}

export declare namespace URLRedirects {
  export {
    type CollectionResponseWithTotalURLMappingForwardPaging as CollectionResponseWithTotalURLMappingForwardPaging,
    type URLMapping as URLMapping,
    type URLMappingCreateRequestBody as URLMappingCreateRequestBody,
    type URLMappingsPage as URLMappingsPage,
    type URLRedirectCreateParams as URLRedirectCreateParams,
    type URLRedirectUpdateParams as URLRedirectUpdateParams,
    type URLRedirectListParams as URLRedirectListParams,
  };
}
