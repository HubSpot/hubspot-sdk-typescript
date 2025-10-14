// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DomainsAPI from './domains';
import {
  CollectionResponseWithTotalDomainForwardPaging,
  Domain,
  DomainListParams,
  Domains,
  DomainsPage,
} from './domains';
import * as URLRedirectsAPI from './url-redirects';
import {
  CollectionResponseWithTotalURLMappingForwardPaging,
  URLMapping,
  URLMappingCreateRequestBody,
  URLMappingsPage,
  URLRedirectCreateParams,
  URLRedirectListParams,
  URLRedirectUpdateParams,
  URLRedirects,
} from './url-redirects';
import * as BlogsAPI from './blogs/blogs';
import {
  AttachToLangPrimaryRequestVNext,
  BatchInputJsonNode,
  Blogs,
  DetachFromLangGroupRequestVNext,
  SetNewLanguagePrimaryRequestVNext,
  UpdateLanguagesRequestVNext,
} from './blogs/blogs';

export class Cms extends APIResource {
  blogs: BlogsAPI.Blogs = new BlogsAPI.Blogs(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  urlRedirects: URLRedirectsAPI.URLRedirects = new URLRedirectsAPI.URLRedirects(this._client);
}

Cms.Blogs = Blogs;
Cms.Domains = Domains;
Cms.URLRedirects = URLRedirects;

export declare namespace Cms {
  export {
    Blogs as Blogs,
    type AttachToLangPrimaryRequestVNext as AttachToLangPrimaryRequestVNext,
    type BatchInputJsonNode as BatchInputJsonNode,
    type DetachFromLangGroupRequestVNext as DetachFromLangGroupRequestVNext,
    type SetNewLanguagePrimaryRequestVNext as SetNewLanguagePrimaryRequestVNext,
    type UpdateLanguagesRequestVNext as UpdateLanguagesRequestVNext,
  };

  export {
    Domains as Domains,
    type CollectionResponseWithTotalDomainForwardPaging as CollectionResponseWithTotalDomainForwardPaging,
    type Domain as Domain,
    type DomainsPage as DomainsPage,
    type DomainListParams as DomainListParams,
  };

  export {
    URLRedirects as URLRedirects,
    type CollectionResponseWithTotalURLMappingForwardPaging as CollectionResponseWithTotalURLMappingForwardPaging,
    type URLMapping as URLMapping,
    type URLMappingCreateRequestBody as URLMappingCreateRequestBody,
    type URLMappingsPage as URLMappingsPage,
    type URLRedirectCreateParams as URLRedirectCreateParams,
    type URLRedirectUpdateParams as URLRedirectUpdateParams,
    type URLRedirectListParams as URLRedirectListParams,
  };
}
