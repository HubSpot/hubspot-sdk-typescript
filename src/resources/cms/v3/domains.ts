// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActivityAPI from '../../account-info/v3/activity';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Domains extends APIResource {
  /**
   * Get a single domain
   */
  retrieve(domainID: string, options?: RequestOptions): APIPromise<DomainsDomain> {
    return this._client.get(path`/cms/v3/domains/${domainID}`, options);
  }

  /**
   * Get current domains
   */
  retrieve(
    query: DomainRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DomainRetrieveResponse> {
    return this._client.get('/cms/v3/domains/', { query, ...options });
  }
}

export interface DomainsDomain {
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

export interface DomainRetrieveResponse {
  results: Array<DomainsDomain>;

  total: number;

  paging?: ActivityAPI.ForwardPaging;
}

export interface DomainRetrieveParams {
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

export declare namespace Domains {
  export {
    type DomainsDomain as DomainsDomain,
    type DomainRetrieveResponse as DomainRetrieveResponse,
    type DomainRetrieveParams as DomainRetrieveParams,
  };
}
