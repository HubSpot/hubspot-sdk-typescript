// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IPRangesAPI from './ip-ranges';
import {
  BaseIPRanges,
  IPRangeListParams,
  IPRangeListSimpleParams,
  IPRangeListSimpleResponse,
  IPRanges,
} from './ip-ranges';

export class BaseOrigins extends APIResource {
  static override readonly _key: readonly ['meta', 'origins'] = Object.freeze(['meta', 'origins'] as const);
}
export class Origins extends BaseOrigins {
  ipRanges: IPRangesAPI.IPRanges = new IPRangesAPI.IPRanges(this._client);
}

export interface CollectionResponseIPRangeNoPaging {
  /**
   * An array of IpRange objects, each representing a specific IP range with
   * associated details such as CIDR, direction, service, and description.
   */
  results: Array<IPRange>;
}

export interface IPRange {
  /**
   * The CIDR notation representing the IP range.
   */
  cidr: string;

  /**
   * A description of the IP range.
   */
  description: string;

  /**
   * The direction of the IP traffic, which can be INGRESS or EGRESS.
   */
  direction: 'EGRESS' | 'INGRESS';

  /**
   * The service associated with the IP range, such as EMAIL, API, DNS, or
   * WEB_SCRAPING.
   */
  service: 'API' | 'DNS' | 'EMAIL' | 'TEST_SERVICE' | 'WEB_SCRAPING';
}

Origins.IPRanges = IPRanges;
Origins.BaseIPRanges = BaseIPRanges;

export declare namespace Origins {
  export {
    type CollectionResponseIPRangeNoPaging as CollectionResponseIPRangeNoPaging,
    type IPRange as IPRange,
  };

  export {
    IPRanges as IPRanges,
    BaseIPRanges as BaseIPRanges,
    type IPRangeListSimpleResponse as IPRangeListSimpleResponse,
    type IPRangeListParams as IPRangeListParams,
    type IPRangeListSimpleParams as IPRangeListSimpleParams,
  };
}
