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
   * Create a new URL redirect in your HubSpot account. This endpoint allows you to
   * define a new URL mapping that redirects traffic from a specified route to a
   * destination URL. This is useful for managing URL changes, handling outdated
   * links, or creating short links.
   */
  create(body: URLRedirectCreateParams, options?: RequestOptions): APIPromise<URLMapping> {
    return this._client.post('/cms/url-redirects/2026-03', { body, ...options });
  }

  /**
   * Update the details of an existing URL redirect in your HubSpot account. This
   * operation allows you to modify properties such as the destination URL, route
   * prefix, and other redirect settings. Use this endpoint to ensure your URL
   * redirects are up-to-date and functioning as intended.
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
   * Delete a specific URL redirect in your HubSpot account using its unique
   * identifier. This operation is useful for removing outdated or incorrect URL
   * redirects, ensuring that your URL mappings remain current and accurate.
   */
  delete(urlRedirectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/cms/url-redirects/2026-03/${urlRedirectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve detailed information about a specific URL redirect in your HubSpot
   * account using its unique identifier. This endpoint is useful for obtaining the
   * configuration and properties of a URL redirect, such as its destination, route
   * prefix, and other settings.
   */
  get(urlRedirectID: string, options?: RequestOptions): APIPromise<URLMapping> {
    return this._client.get(path`/cms/url-redirects/2026-03/${urlRedirectID}`, options);
  }
}

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
   * routePrefix.
   */
  destination: string;

  /**
   * The type of redirect to create. Options include: 301 (permanent), 302
   * (temporary), or 305 (proxy).
   */
  redirectStyle: number;

  /**
   * The target incoming URL, path, or pattern to match for redirection.
   */
  routePrefix: string;

  /**
   * Whether the routePrefix should match on the entire URL, including the domain.
   */
  isMatchFullUrl?: boolean;

  /**
   * Whether the routePrefix should match on the entire URL path, including the query
   * string.
   */
  isMatchQueryString?: boolean;

  /**
   * Whether the URL redirect mapping should apply only if a live page on the URL
   * isn't found. If False, the URL redirect mapping will take precedence over any
   * existing page.
   */
  isOnlyAfterNotFound?: boolean;

  /**
   * Whether the routePrefix should match based on pattern.
   */
  isPattern?: boolean;

  /**
   * Whether the routePrefix should match both HTTP and HTTPS protocols.
   */
  isProtocolAgnostic?: boolean;

  /**
   * Whether a trailing slash will be ignored.
   */
  isTrailingSlashOptional?: boolean;

  /**
   * Used to prioritize URL redirection. If a given URL matches more than one
   * redirect, the one with the lower precedence will be used.
   */
  precedence?: number;
}

export interface URLRedirectCreateParams {
  /**
   * The destination URL, where the target URL should be redirected if it matches the
   * routePrefix.
   */
  destination: string;

  /**
   * The type of redirect to create. Options include: 301 (permanent), 302
   * (temporary), or 305 (proxy).
   */
  redirectStyle: number;

  /**
   * The target incoming URL, path, or pattern to match for redirection.
   */
  routePrefix: string;

  /**
   * Whether the routePrefix should match on the entire URL, including the domain.
   */
  isMatchFullUrl?: boolean;

  /**
   * Whether the routePrefix should match on the entire URL path, including the query
   * string.
   */
  isMatchQueryString?: boolean;

  /**
   * Whether the URL redirect mapping should apply only if a live page on the URL
   * isn't found. If False, the URL redirect mapping will take precedence over any
   * existing page.
   */
  isOnlyAfterNotFound?: boolean;

  /**
   * Whether the routePrefix should match based on pattern.
   */
  isPattern?: boolean;

  /**
   * Whether the routePrefix should match both HTTP and HTTPS protocols.
   */
  isProtocolAgnostic?: boolean;

  /**
   * Whether a trailing slash will be ignored.
   */
  isTrailingSlashOptional?: boolean;

  /**
   * Used to prioritize URL redirection. If a given URL matches more than one
   * redirect, the one with the lower precedence will be used.
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

  /**
   * Filter redirects created after a specific timestamp. Format must be date-time.
   */
  createdAfter?: string;

  /**
   * Filter redirects by their exact creation timestamp. Format must be date-time.
   */
  createdAt?: string;

  /**
   * Filter redirects created before a specific timestamp. Format must be date-time.
   */
  createdBefore?: string;

  /**
   * Specify the order in which to sort the results. Accepts an array of strings.
   */
  sort?: Array<string>;

  /**
   * Filter redirects updated after a specific timestamp. Format must be date-time.
   */
  updatedAfter?: string;

  /**
   * Filter redirects by their exact update timestamp. Format must be date-time.
   */
  updatedAt?: string;

  /**
   * Filter redirects updated before a specific timestamp. Format must be date-time.
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
