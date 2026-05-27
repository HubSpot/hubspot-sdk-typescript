// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseURLRedirects extends APIResource {
  static override readonly _key: readonly ['cms', 'urlRedirects'] = Object.freeze([
    'cms',
    'urlRedirects',
  ] as const);

  /**
   * Create a new URL redirect in your HubSpot account. This endpoint allows you to
   * define a new URL mapping that redirects traffic from a specified route to a
   * destination URL. This is useful for managing URL changes, handling outdated
   * links, or creating short links.
   */
  create(body: URLRedirectCreateParams, options?: RequestOptions): APIPromise<URLMapping> {
    return this._client.post('/cms/url-redirects/2026-03', { body, ...options });
  }

  /**
   * Updates the settings for an existing URL redirect.
   */
  update(
    urlRedirectID: string,
    body: URLRedirectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<URLMapping> {
    return this._client.patch(path`/cms/url-redirects/2026-03/${urlRedirectID}`, { body, ...options });
  }

  /**
   * Retrieve a list of URL redirects configured in your HubSpot account. This
   * endpoint allows you to filter redirects based on their creation or update
   * timestamps, and sort the results. It supports pagination and can include
   * archived redirects if specified.
   */
  list(
    query: URLRedirectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<URLMappingsPage, URLMapping> {
    return this._client.getAPIList('/cms/url-redirects/2026-03', Page<URLMapping>, { query, ...options });
  }

  /**
   * Delete one existing redirect, so it is no longer mapped.
   */
  delete(urlRedirectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/cms/url-redirects/2026-03/${urlRedirectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  createURLMapping(body: URLRedirectCreateURLMappingParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/cms/url-redirects/2026-03/url-mappings', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  deleteURLMapping(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/cms/url-redirects/2026-03/url-mappings/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the details for a single existing URL redirect by ID.
   */
  get(urlRedirectID: string, options?: RequestOptions): APIPromise<URLMapping> {
    return this._client.get(path`/cms/url-redirects/2026-03/${urlRedirectID}`, options);
  }

  getURLMapping(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/cms/url-redirects/2026-03/url-mappings/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  listURLMappings(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/cms/url-redirects/2026-03/url-mappings', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}
export class URLRedirects extends BaseURLRedirects {}

export type URLMappingsPage = Page<URLMapping>;

export interface CollectionResponseWithTotalURLMappingForwardPaging {
  /**
   * An array of UrlMapping objects, each representing a specific URL mapping.
   */
  results: Array<URLMapping>;

  /**
   * The total number of URL mappings available.
   */
  total: number;

  paging?: Shared.ForwardPaging;
}

export interface URLMapping {
  /**
   * The unique ID of this URL redirect.
   */
  id: string;

  /**
   * The date and time when the URL mapping was initially created.
   */
  created: string;

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

  /**
   * The date and time when the URL mapping was last modified.
   */
  updated: string;
}

export interface URLMappingCreateRequestBody {
  /**
   * The destination URL, where the target URL should be redirected if it matches the
   * `routePrefix`.
   */
  destination: string;

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

  /**
   * Whether the `routePrefix` should match on the entire URL, including the domain.
   */
  isMatchFullUrl?: boolean;

  /**
   * Whether the `routePrefix` should match on the entire URL path, including the
   * query string.
   */
  isMatchQueryString?: boolean;

  /**
   * Whether the URL redirect mapping should apply only if a live page on the URL
   * isn't found. If False, the URL redirect mapping will take precedence over any
   * existing page.
   */
  isOnlyAfterNotFound?: boolean;

  /**
   * Whether the `routePrefix` should match based on pattern.
   */
  isPattern?: boolean;

  /**
   * Whether the `routePrefix` should match both HTTP and HTTPS protocols.
   */
  isProtocolAgnostic?: boolean;

  /**
   * Whether a trailing slash will be ignored.
   */
  isTrailingSlashOptional?: boolean;

  /**
   * Used to prioritize URL redirection. If a given URL matches more than one
   * redirect, the one with the **lower** precedence will be used.
   */
  precedence?: number;
}

export interface URLRedirectCreateParams {
  /**
   * The destination URL, where the target URL should be redirected if it matches the
   * `routePrefix`.
   */
  destination: string;

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

  /**
   * Whether the `routePrefix` should match on the entire URL, including the domain.
   */
  isMatchFullUrl?: boolean;

  /**
   * Whether the `routePrefix` should match on the entire URL path, including the
   * query string.
   */
  isMatchQueryString?: boolean;

  /**
   * Whether the URL redirect mapping should apply only if a live page on the URL
   * isn't found. If False, the URL redirect mapping will take precedence over any
   * existing page.
   */
  isOnlyAfterNotFound?: boolean;

  /**
   * Whether the `routePrefix` should match based on pattern.
   */
  isPattern?: boolean;

  /**
   * Whether the `routePrefix` should match both HTTP and HTTPS protocols.
   */
  isProtocolAgnostic?: boolean;

  /**
   * Whether a trailing slash will be ignored.
   */
  isTrailingSlashOptional?: boolean;

  /**
   * Used to prioritize URL redirection. If a given URL matches more than one
   * redirect, the one with the **lower** precedence will be used.
   */
  precedence?: number;
}

export interface URLRedirectUpdateParams {
  /**
   * The unique ID of this URL redirect.
   */
  id: string;

  /**
   * The date and time when the URL mapping was initially created.
   */
  created: string;

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

  /**
   * The date and time when the URL mapping was last modified.
   */
  updated: string;
}

export interface URLRedirectListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface URLRedirectCreateURLMappingParams {
  /**
   * The unique ID of this URL redirect.
   */
  id: string;

  /**
   * The date and time when the URL mapping was initially created.
   */
  created: string;

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

  /**
   * The date and time when the URL mapping was last modified.
   */
  updated: string;
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
    type URLRedirectCreateURLMappingParams as URLRedirectCreateURLMappingParams,
  };
}
