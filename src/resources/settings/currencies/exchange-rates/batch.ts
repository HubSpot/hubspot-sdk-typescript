// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as CurrenciesAPI from '../currencies';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CurrenciesAPI.BatchResponseExchangeRate> {
    return this._client.post('/settings/currencies/2026-03/exchange-rates/batch/create', {
      body,
      ...options,
    });
  }

  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CurrenciesAPI.BatchResponseExchangeRate> {
    return this._client.post('/settings/currencies/2026-03/exchange-rates/batch/update', {
      body,
      ...options,
    });
  }

  get(body: BatchGetParams, options?: RequestOptions): APIPromise<CurrenciesAPI.BatchResponseExchangeRate> {
    return this._client.post('/settings/currencies/2026-03/exchange-rates/batch/read', { body, ...options });
  }
}

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
