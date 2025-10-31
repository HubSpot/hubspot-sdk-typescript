// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TaxRates extends APIResource {
  /**
   * Retrieve a paginated list of all tax rates set up in the account tax rate
   * library
   *
   * @example
   * ```ts
   * const collectionResponsePublicTaxRateGroupForwardPaging =
   *   await client.settings.taxRates.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CollectionResponsePublicTaxRateGroupForwardPaging> {
    return this._client.get('/tax-rates/v1/tax-rates', options);
  }

  /**
   * Retrieve a specific tax rate by its `taxRateGroupId`.
   *
   * @example
   * ```ts
   * const publicTaxRateGroup =
   *   await client.settings.taxRates.get('taxRateGroupId');
   * ```
   */
  get(taxRateGroupID: string, options?: RequestOptions): APIPromise<PublicTaxRateGroup> {
    return this._client.get(path`/tax-rates/v1/tax-rates/${taxRateGroupID}`, options);
  }
}

export interface CollectionResponsePublicTaxRateGroupForwardPaging {
  results: Array<PublicTaxRateGroup>;

  paging?: Shared.ForwardPaging;
}

export interface PublicTaxRateGroup {
  id: string;

  active: boolean;

  createdAt: string;

  label: string;

  name: string;

  percentageRate: number;

  updatedAt: string;
}

export declare namespace TaxRates {
  export {
    type CollectionResponsePublicTaxRateGroupForwardPaging as CollectionResponsePublicTaxRateGroupForwardPaging,
    type PublicTaxRateGroup as PublicTaxRateGroup,
  };
}
