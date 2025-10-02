// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DomainsAPI from './domains';
import { DomainRetrieveParams, DomainRetrieveResponse, Domains, DomainsDomain } from './domains';
import * as URLRedirectsAPI from './url-redirects';
import {
  URLMapping,
  URLRedirectRetrieveParams,
  URLRedirectRetrieveResponse,
  URLRedirectUpdateParams,
  URLRedirects,
} from './url-redirects';
import * as BlogsAPI from './blogs/blogs';
import { Blogs } from './blogs/blogs';
import * as HubdbAPI from './hubdb/hubdb';
import { Hubdb } from './hubdb/hubdb';

export class V3 extends APIResource {
  blogs: BlogsAPI.Blogs = new BlogsAPI.Blogs(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  hubdb: HubdbAPI.Hubdb = new HubdbAPI.Hubdb(this._client);
  urlRedirects: URLRedirectsAPI.URLRedirects = new URLRedirectsAPI.URLRedirects(this._client);
}

V3.Blogs = Blogs;
V3.Domains = Domains;
V3.Hubdb = Hubdb;
V3.URLRedirects = URLRedirects;

export declare namespace V3 {
  export { Blogs as Blogs };

  export {
    Domains as Domains,
    type DomainsDomain as DomainsDomain,
    type DomainRetrieveResponse as DomainRetrieveResponse,
    type DomainRetrieveParams as DomainRetrieveParams,
  };

  export { Hubdb as Hubdb };

  export {
    URLRedirects as URLRedirects,
    type URLMapping as URLMapping,
    type URLRedirectRetrieveResponse as URLRedirectRetrieveResponse,
    type URLRedirectUpdateParams as URLRedirectUpdateParams,
    type URLRedirectRetrieveParams as URLRedirectRetrieveParams,
  };
}
