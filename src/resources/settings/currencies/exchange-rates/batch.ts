// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as CurrenciesAPI from '../currencies';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['settings', 'currencies', 'exchangeRates', 'batch'] =
    Object.freeze(['settings', 'currencies', 'exchangeRates', 'batch'] as const);

  /**
   * Create multiple exchange rates in a single request.
   */
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CurrenciesAPI.BatchResponseExchangeRate> {
    return this._client.post('/settings/currencies/2026-03/exchange-rates/batch/create', {
      body,
      ...options,
    });
  }

  /**
   * Update the conversion rates for multiple exchange rates in a batch operation.
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CurrenciesAPI.BatchResponseExchangeRate> {
    return this._client.post('/settings/currencies/2026-03/exchange-rates/batch/update', {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the details of multiple exchange rates in a single request, specified
   * by their IDs.
   */
  get(body: BatchGetParams, options?: RequestOptions): APIPromise<CurrenciesAPI.BatchResponseExchangeRate> {
    return this._client.post('/settings/currencies/2026-03/exchange-rates/batch/read', { body, ...options });
  }
}
export class Batch extends BaseBatch {}

export interface BatchCreateParams {
  inputs: Array<CurrenciesAPI.ExchangeRateCreateRequest>;
}

export interface BatchUpdateParams {
  inputs: Array<CurrenciesAPI.ExchangeRateUpdateRequest>;
}

export interface BatchGetParams {
  /**
   * An array of deal split inputs
   */
  inputs: Array<Shared.PublicObjectID>;
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchGetParams as BatchGetParams,
  };
}
