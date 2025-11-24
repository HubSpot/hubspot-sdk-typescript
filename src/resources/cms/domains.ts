// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Domains extends APIResource {
  /**
   * Returns all existing domains that have been created. Results can be limited and
   * filtered by creation or updated date.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const domain of client.cms.domains.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DomainsPage, Domain> {
    return this._client.getAPIList('/cms/v3/domains/', Page<Domain>, { query, ...options });
  }

  /**
   * Returns a single domains with the id specified.
   *
   * @example
   * ```ts
   * const domain = await client.cms.domains.get('domainId');
   * ```
   */
  get(domainID: string, options?: RequestOptions): APIPromise<Domain> {
    return this._client.get(path`/cms/v3/domains/${domainID}`, options);
  }
}

export type DomainsPage = Page<Domain>;

export interface CollectionResponseWithTotalDomainForwardPaging {
  results: Array<Domain>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface Domain {
  /**
   * The unique ID of this domain.
   */
  id: string;

  /**
   * The actual domain or sub-domain. e.g. www.hubspot.com
   */
  domain: string;

  /**
   * Whether the DNS for this domain is optimally configured for use with HubSpot.
   */
  isResolving: boolean;

  /**
   * Whether the domain is used for CMS blog posts.
   */
  isUsedForBlogPost: boolean;

  /**
   * Whether the domain is used for CMS email web pages.
   */
  isUsedForEmail: boolean;

  /**
   * Whether the domain is used for CMS knowledge pages.
   */
  isUsedForKnowledge: boolean;

  /**
   * Whether the domain is used for CMS landing pages.
   */
  isUsedForLandingPage: boolean;

  /**
   * Whether the domain is used for CMS site pages.
   */
  isUsedForSitePage: boolean;

  correctCname?: string;

  created?: string;

  isSslEnabled?: boolean;

  isSslOnly?: boolean;

  manuallyMarkedAsResolving?: boolean;

  primaryBlogPost?: boolean;

  primaryEmail?: boolean;

  primaryKnowledge?: boolean;

  primaryLandingPage?: boolean;

  primarySitePage?: boolean;

  secondaryToDomain?: string;

  updated?: string;
}

export interface DomainListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Only return domains created after this date.
   */
  createdAfter?: string;

  /**
   * Only return domains created at this date.
   */
  createdAt?: string;

  /**
   * Only return domains created before this date.
   */
  createdBefore?: string;

  /**
   * Specifies the order in which the domains are returned.
   */
  sort?: Array<string>;

  /**
   * Only return domains updated after this date.
   */
  updatedAfter?: string;

  /**
   * Only return domains updated at this date.
   */
  updatedAt?: string;

  /**
   * Only return domains updated before this date.
   */
  updatedBefore?: string;
}

export declare namespace Domains {
  export {
    type CollectionResponseWithTotalDomainForwardPaging as CollectionResponseWithTotalDomainForwardPaging,
    type Domain as Domain,
    type DomainsPage as DomainsPage,
    type DomainListParams as DomainListParams,
  };
}
