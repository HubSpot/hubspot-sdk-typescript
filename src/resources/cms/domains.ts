// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { CursorURLPage, type CursorURLPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Domains extends APIResource {
  /**
   * Get current domains
   */
  list(
    query: DomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DomainsCursorURLPage, Domain> {
    return this._client.getAPIList('/cms/v3/domains/', CursorURLPage<Domain>, { query, ...options });
  }

  /**
   * Get a single domain
   */
  read(domainID: string, options?: RequestOptions): APIPromise<Domain> {
    return this._client.get(path`/cms/v3/domains/${domainID}`, options);
  }
}

export type DomainsCursorURLPage = CursorURLPage<Domain>;

export interface CollectionResponseWithTotalDomainForwardPaging {
  results: Array<Domain>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface Domain {
  id: string;

  domain: string;

  isResolving: boolean;

  isUsedForBlogPost: boolean;

  isUsedForEmail: boolean;

  isUsedForKnowledge: boolean;

  isUsedForLandingPage: boolean;

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

export interface DomainListParams extends CursorURLPageParams {
  after?: string;

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
    type CollectionResponseWithTotalDomainForwardPaging as CollectionResponseWithTotalDomainForwardPaging,
    type Domain as Domain,
    type DomainsCursorURLPage as DomainsCursorURLPage,
    type DomainListParams as DomainListParams,
  };
}
