// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TaxRates extends APIResource {
  /**
   * Retrieve a paginated list of all tax rates set up in the account tax rate
   * library
   */
  list(
    query: TaxRateListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicTaxRateGroupsPage, PublicTaxRateGroup> {
    return this._client.getAPIList('/tax-rates/2026-03/tax-rates', Page<PublicTaxRateGroup>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve a specific tax rate by its `taxRateGroupId`.
   */
  get(taxRateGroupID: string, options?: RequestOptions): APIPromise<PublicTaxRateGroup> {
    return this._client.get(path`/tax-rates/2026-03/tax-rates/${taxRateGroupID}`, options);
  }
}

export type PublicTaxRateGroupsPage = Page<PublicTaxRateGroup>;

export interface CollectionResponsePublicTaxRateGroupForwardPaging {
  results: Array<PublicTaxRateGroup>;

  paging?: Shared.ForwardPaging;
}

export interface PublicTaxRateGroup {
  /**
   * The unique identifier for the tax rate.
   */
  id: string;

  /**
   * Indicates whether the tax rate group is currently active.
   */
  active: boolean;

  /**
   * The date and time when the tax rate was created.
   */
  createdAt: string;

  /**
   * The display label for the tax rate.
   */
  label: string;

  /**
   * The name of the tax rate.
   */
  name: string;

  /**
   * The percentage rate applied.
   */
  percentageRate: number;

  /**
   * The date and time when the tax rate was last updated.
   */
  updatedAt: string;
}

export interface TaxRateListParams extends PageParams {
  active?: boolean;
}

export declare namespace TaxRates {
  export {
    type CollectionResponsePublicTaxRateGroupForwardPaging as CollectionResponsePublicTaxRateGroupForwardPaging,
    type PublicTaxRateGroup as PublicTaxRateGroup,
    type PublicTaxRateGroupsPage as PublicTaxRateGroupsPage,
    type TaxRateListParams as TaxRateListParams,
  };
}
