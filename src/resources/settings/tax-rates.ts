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
   * const taxRates = await client.settings.taxRates.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<TaxRateListResponse> {
    return this._client.get('/tax-rates/v1/tax-rates', options);
  }

  /**
   * Retrieve a specific tax rate by its `taxRateGroupId`.
   *
   * @example
   * ```ts
   * const taxRate = await client.settings.taxRates.get(
   *   'taxRateGroupId',
   * );
   * ```
   */
  get(taxRateGroupID: string, options?: RequestOptions): APIPromise<TaxRateGetResponse> {
    return this._client.get(path`/tax-rates/v1/tax-rates/${taxRateGroupID}`, options);
  }
}

export interface TaxRateListResponse {
  results: Array<TaxRateListResponse.Result>;

  paging?: Shared.ForwardPaging;
}

export namespace TaxRateListResponse {
  export interface Result {
    id: string;

    active: boolean;

    createdAt: string;

    label: string;

    name: string;

    percentageRate: number;

    updatedAt: string;
  }
}

export interface TaxRateGetResponse {
  id: string;

  active: boolean;

  createdAt: string;

  label: string;

  name: string;

  percentageRate: number;

  updatedAt: string;
}

export declare namespace TaxRates {
  export { type TaxRateListResponse as TaxRateListResponse, type TaxRateGetResponse as TaxRateGetResponse };
}
