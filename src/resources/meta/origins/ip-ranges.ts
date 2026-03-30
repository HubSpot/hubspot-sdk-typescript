// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OriginsAPI from './origins';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class IPRanges extends APIResource {
  /**
   * Retrieve a collection of IP ranges associated with specific services and
   * directions, such as `EMAIL`, `API`, `DNS`, or `WEB_SCRAPING`. The response
   * includes details like CIDR notation, description, and the direction of IP
   * traffic.
   */
  list(
    query: IPRangeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OriginsAPI.CollectionResponseIPRangeNoPaging> {
    return this._client.get('/meta/network-origins/2026-03/ip-ranges', { query, ...options });
  }

  /**
   * Retrieve a simplified list of IP ranges for specified services and directions in
   * plain text format. This endpoint provides a straightforward representation of IP
   * ranges without additional metadata.
   */
  listSimple(
    query: IPRangeListSimpleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/meta/network-origins/2026-03/ip-ranges/simple', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type IPRangeListSimpleResponse = string;

export interface IPRangeListParams {
  direction?: Array<'INGRESS' | 'EGRESS'>;

  service?: Array<'EMAIL' | 'API' | 'DNS' | 'WEB_SCRAPING' | 'TEST_SERVICE'>;
}

export interface IPRangeListSimpleParams {
  direction?: Array<'INGRESS' | 'EGRESS'>;

  service?: Array<'EMAIL' | 'API' | 'DNS' | 'WEB_SCRAPING' | 'TEST_SERVICE'>;
}

export declare namespace IPRanges {
  export {
    type IPRangeListSimpleResponse as IPRangeListSimpleResponse,
    type IPRangeListParams as IPRangeListParams,
    type IPRangeListSimpleParams as IPRangeListSimpleParams,
  };
}
