// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Domains extends APIResource {
  list(
    query: DomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DomainsPage, Domain> {
    return this._client.getAPIList('/cms/domains/2026-03', Page<Domain>, { query, ...options });
  }

  /**
   * Returns a single domains with the id specified.
   */
  get(domainID: string, options?: RequestOptions): APIPromise<Domain> {
    return this._client.get(path`/cms/domains/2026-03/${domainID}`, options);
  }
}

export type DomainsPage = Page<Domain>;

export interface CollectionResponseWithTotalDomain {
  /**
   * The results of the query.
   */
  results: Array<Domain>;

  /**
   * The number of available results.
   */
  total: number;

  paging?: Shared.Paging;
}

export interface Domain {
  /**
   * The unique ID of this domain.
   */
  id: string;

  /**
   * The expected CNAME record for the domain.
   */
  correctCname: string;

  /**
   * The date and time when the domain was created.
   */
  created: string;

  /**
   * The actual domain or sub-domain. e.g. www.hubspot.com
   */
  domain: string;

  /**
   * Whether the DNS for this domain is optimally configured for use with HubSpot.
   */
  isResolving: boolean;

  /**
   * Indicates whether SSL is enabled for the domain.
   */
  isSslEnabled: boolean;

  /**
   * Indicates whether the domain is accessible only via SSL.
   */
  isSslOnly: boolean;

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

  /**
   * Indicates whether the domain has been manually marked as resolving.
   */
  manuallyMarkedAsResolving: boolean;

  /**
   * Indicates whether the domain is the primary domain for blog posts.
   */
  primaryBlogPost: boolean;

  /**
   * Indicates whether the domain is the primary domain for email pages.
   */
  primaryEmail: boolean;

  /**
   * Indicates whether the domain is the primary domain for knowledge pages.
   */
  primaryKnowledge: boolean;

  /**
   * Indicates whether the domain is the primary domain for landing pages.
   */
  primaryLandingPage: boolean;

  /**
   * Indicates whether the domain is the primary domain for site pages.
   */
  primarySitePage: boolean;

  /**
   * Specifies the domain to which this domain is secondary.
   */
  secondaryToDomain: string;

  /**
   * The date and time when the domain was last updated.
   */
  updated: string;
}

export interface DomainListParams extends PageParams {
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

export declare namespace Domains {
  export {
    type CollectionResponseWithTotalDomain as CollectionResponseWithTotalDomain,
    type Domain as Domain,
    type DomainsPage as DomainsPage,
    type DomainListParams as DomainListParams,
  };
}
