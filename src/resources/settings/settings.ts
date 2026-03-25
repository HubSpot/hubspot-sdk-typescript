// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TaxRatesAPI from './tax-rates';
import {
  CollectionResponsePublicTaxRateGroupForwardPaging,
  PublicTaxRateGroup,
  PublicTaxRateGroupsPage,
  TaxRateListParams,
  TaxRates,
} from './tax-rates';
import * as CurrenciesAPI from './currencies/currencies';
import {
  BatchInputExchangeRateCreateRequest,
  BatchInputExchangeRateUpdateRequest,
  BatchResponseExchangeRate,
  CentralExchangeRatesInformation,
  CollectionResponseCurrencyCodeInfoNoPaging,
  CollectionResponseExchangeRateForwardPaging,
  CollectionResponseExchangeRateNoPaging,
  CompanyCurrency,
  CompanyCurrencyUpdateRequest,
  Currencies,
  CurrencyCodeInfo,
  CurrencyCreateRequest,
  CurrencyPairUpdate,
  CurrencyUpdateCompanyCurrencyParams,
  ExchangeRate,
  ExchangeRateCreateRequest,
  ExchangeRateMultiplier,
  ExchangeRateUpdateRequest,
} from './currencies/currencies';

export class Settings extends APIResource {
  currencies: CurrenciesAPI.Currencies = new CurrenciesAPI.Currencies(this._client);
  taxRates: TaxRatesAPI.TaxRates = new TaxRatesAPI.TaxRates(this._client);
}

Settings.Currencies = Currencies;
Settings.TaxRates = TaxRates;

export declare namespace Settings {
  export {
    Currencies as Currencies,
    type BatchInputExchangeRateCreateRequest as BatchInputExchangeRateCreateRequest,
    type BatchInputExchangeRateUpdateRequest as BatchInputExchangeRateUpdateRequest,
    type BatchResponseExchangeRate as BatchResponseExchangeRate,
    type CentralExchangeRatesInformation as CentralExchangeRatesInformation,
    type CollectionResponseCurrencyCodeInfoNoPaging as CollectionResponseCurrencyCodeInfoNoPaging,
    type CollectionResponseExchangeRateForwardPaging as CollectionResponseExchangeRateForwardPaging,
    type CollectionResponseExchangeRateNoPaging as CollectionResponseExchangeRateNoPaging,
    type CompanyCurrency as CompanyCurrency,
    type CompanyCurrencyUpdateRequest as CompanyCurrencyUpdateRequest,
    type CurrencyCodeInfo as CurrencyCodeInfo,
    type CurrencyCreateRequest as CurrencyCreateRequest,
    type CurrencyPairUpdate as CurrencyPairUpdate,
    type ExchangeRate as ExchangeRate,
    type ExchangeRateCreateRequest as ExchangeRateCreateRequest,
    type ExchangeRateMultiplier as ExchangeRateMultiplier,
    type ExchangeRateUpdateRequest as ExchangeRateUpdateRequest,
    type CurrencyUpdateCompanyCurrencyParams as CurrencyUpdateCompanyCurrencyParams,
  };

  export {
    TaxRates as TaxRates,
    type CollectionResponsePublicTaxRateGroupForwardPaging as CollectionResponsePublicTaxRateGroupForwardPaging,
    type PublicTaxRateGroup as PublicTaxRateGroup,
    type PublicTaxRateGroupsPage as PublicTaxRateGroupsPage,
    type TaxRateListParams as TaxRateListParams,
  };
}
