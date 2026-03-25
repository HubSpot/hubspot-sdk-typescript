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
  /**
   * An array of traffic directions to filter the IP ranges. Valid values are
   * `INGRESS` and `EGRESS`.
   */
  direction?: Array<'INGRESS' | 'EGRESS'>;

  /**
   * An array of service types to filter the IP ranges. Valid values include `EMAIL`,
   * `API`, `DNS`, `WEB_SCRAPING`, and `TEST_SERVICE`.
   */
  service?: Array<'EMAIL' | 'API' | 'DNS' | 'WEB_SCRAPING'>;
}

export interface IPRangeListSimpleParams {
  /**
   * An array of directions to filter the IP ranges by. Valid values are `INGRESS`
   * and `EGRESS`.
   */
  direction?: Array<'INGRESS' | 'EGRESS'>;

  /**
   * An array specifying the service types to filter by. Valid values include
   * `EMAIL`, `API`, `DNS`, `WEB_SCRAPING`, and `TEST_SERVICE`.
   */
  service?: Array<'EMAIL' | 'API' | 'DNS' | 'WEB_SCRAPING'>;
}

export declare namespace IPRanges {
  export {
    type IPRangeListSimpleResponse as IPRangeListSimpleResponse,
    type IPRangeListParams as IPRangeListParams,
    type IPRangeListSimpleParams as IPRangeListSimpleParams,
  };
}
