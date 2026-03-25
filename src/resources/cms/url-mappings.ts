// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class URLMappings extends APIResource {
  /**
   * Create a new URL mapping in your HubSpot account. This endpoint allows you to
   * define URL redirections and mappings, which can be useful for managing site
   * navigation and SEO. The request body must include all required properties of the
   * UrlMapping schema.
   */
  create(body: URLMappingCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/url-mappings/2026-03/url-mappings', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve a list of URL mappings from the HubSpot account. This endpoint provides
   * access to URL mapping configurations, which can be used to manage and redirect
   * URLs within the HubSpot CMS. It is useful for understanding how URLs are
   * structured and redirected in your content management setup.
   */
  list(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/url-mappings/2026-03/url-mappings', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Delete a specific URL mapping in your HubSpot account using its unique
   * identifier. This operation will remove the URL mapping permanently, and it
   * requires appropriate write and delete permissions.
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/url-mappings/2026-03/url-mappings/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific URL mapping by its unique identifier. This endpoint is
   * useful for obtaining details about a particular URL mapping configuration within
   * your HubSpot account. It requires the ID of the URL mapping as a path parameter.
   */
  get(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/url-mappings/2026-03/url-mappings/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface URLMappingsURLMapping {
  /**
   * The unique identifier for the URL mapping, represented as a 64-bit integer.
   */
  id: number;

  /**
   * A Unix timestamp in milliseconds indicating the embargo time for CDN purge
   * related to the URL mapping.
   */
  cdnPurgeEmbargoTime: number;

  /**
   * A 64-bit integer representing the content group associated with the URL mapping.
   */
  contentGroupId: number;

  /**
   * A string representing the type of content object associated with the URL
   * mapping. Valid values include various content types such as 'CONTENT', 'LAYOUT',
   * 'FILE', etc.
   */
  cosObjectType:
    | 'ACCESS_GROUP_MEMBERSHIP'
    | 'APP_PAGE'
    | 'BLOCK'
    | 'BLOG'
    | 'BLOG_AUTHOR'
    | 'BRAND_BUSINESS_UNIT'
    | 'BRAND_SETTINGS'
    | 'CONTACT_MEMBERSHIP'
    | 'CONTENT'
    | 'CONTENT_EMBED'
    | 'CONTENT_FOLDER'
    | 'CONTENT_GROUP'
    | 'CRM_OBJECT'
    | 'CRM_OBJECT_TYPE'
    | 'CUSTOM_WIDGET'
    | 'CUSTOMER_PORTAL'
    | 'DATA_QUERY'
    | 'DESIGN_FOLDER'
    | 'DOMAIN'
    | 'DOMAIN_SETTINGS'
    | 'EMAIL_ADDRESS'
    | 'EXTENSION_RESOURCE'
    | 'FILE'
    | 'FOLDER'
    | 'FOLLOW_ME'
    | 'FORM'
    | 'GLOBAL_CONTENT'
    | 'HUBDB_TABLE'
    | 'HUBDB_TABLE_ROW'
    | 'IMAGE'
    | 'JS_PROJECT_COMPONENT'
    | 'KNOWLEDGE_BASE'
    | 'KNOWLEDGE_CATEGORY'
    | 'KNOWLEDGE_CATEGORY_TRANSLATION'
    | 'KNOWLEDGE_HOMEPAGE_CATEGORY'
    | 'LAYOUT'
    | 'LAYOUT_SECTION'
    | 'LIST_MEMBERSHIP'
    | 'MARKETPLACE_LISTING'
    | 'PASSWORD_PROTECTED'
    | 'PAYMENT'
    | 'PERSONALIZATION_TOKEN'
    | 'PLACEMENT'
    | 'PROJECT'
    | 'QUOTE_TEMPLATE'
    | 'RAW_ASSET'
    | 'REDIRECT_URL'
    | 'SECTION'
    | 'SERVERLESS_FUNCTION'
    | 'SITE_MAP'
    | 'SITE_MENU'
    | 'SITE_SETTINGS'
    | 'SUBSCRIPTIONS_SETTINGS'
    | 'TAG'
    | 'THEME'
    | 'THEME_SETTINGS'
    | 'UNRESTRICTED_ACCESS'
    | 'URL_MAPPING'
    | 'VIDEO_PLAYER'
    | 'WIDGET'
    | 'WORKFLOW';

  /**
   * A Unix timestamp in milliseconds indicating when the URL mapping was created.
   */
  created: number;

  /**
   * The identifier of the user who created the URL mapping.
   */
  createdById: number;

  /**
   * A Unix timestamp in milliseconds indicating when the URL mapping was deleted.
   */
  deletedAt: number;

  /**
   * The destination URL to which the routePrefix is redirected.
   */
  destination: string;

  /**
   * A boolean indicating if the URL mapping was created internally by the system.
   */
  internallyCreated: boolean;

  /**
   * A boolean indicating if the URL mapping is currently active.
   */
  isActive: boolean;

  /**
   * A boolean indicating if the full URL should be matched.
   */
  isMatchFullUrl: boolean;

  /**
   * A boolean indicating if the query string should be matched.
   */
  isMatchQueryString: boolean;

  /**
   * A boolean indicating if the mapping should only be applied after a 404 Not Found
   * response.
   */
  isOnlyAfterNotFound: boolean;

  /**
   * A boolean indicating if the routePrefix is a pattern.
   */
  isPattern: boolean;

  /**
   * A boolean indicating if the mapping should ignore the URL protocol (http/https).
   */
  isProtocolAgnostic: boolean;

  /**
   * A boolean indicating if the routePrefix should be treated as a regular
   * expression.
   */
  isRegex: boolean;

  /**
   * A boolean indicating if the trailing slash in the URL is optional.
   */
  isTrailingSlashOptional: boolean;

  /**
   * A label for the URL mapping.
   */
  label: string;

  /**
   * The name of the URL mapping.
   */
  name: string;

  /**
   * A string containing notes about the URL mapping.
   */
  note: string;

  /**
   * The identifier for the HubSpot portal associated with this URL mapping.
   */
  portalId: number;

  /**
   * An integer representing the precedence of the URL mapping, used to determine
   * order of evaluation.
   */
  precedence: number;

  /**
   * An integer representing the style of redirection used.
   */
  redirectStyle: number;

  /**
   * The prefix of the URL path that is being mapped.
   */
  routePrefix: string;

  /**
   * A Unix timestamp in milliseconds indicating when the URL mapping was last
   * updated.
   */
  updated: number;

  /**
   * The identifier of the user who last updated the URL mapping.
   */
  updatedById: number;
}

export interface URLMappingCreateParams {
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

export declare namespace URLMappings {
  export {
    type URLMappingsURLMapping as URLMappingsURLMapping,
    type URLMappingCreateParams as URLMappingCreateParams,
  };
}
