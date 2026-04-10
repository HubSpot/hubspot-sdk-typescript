// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TaxRatesAPI from './tax-rates';
import {
  BaseTaxRates,
  CollectionResponsePublicTaxRateGroupForwardPaging,
  PublicTaxRateGroup,
  PublicTaxRateGroupsPage,
  TaxRateListParams,
  TaxRates,
} from './tax-rates';
import * as UsersAPI from './users';
import {
  BaseUsers,
  CollectionResponsePublicPermissionSetNoPaging,
  CollectionResponsePublicTeamNoPaging,
  CollectionResponsePublicUserForwardPaging,
  PublicPermissionSet,
  PublicTeam,
  PublicUser,
  PublicUserUpdate,
  PublicUsersPage,
  UserCreateParams,
  UserDeleteParams,
  UserGetParams,
  UserListParams,
  UserProvisionRequest,
  UserUpdateParams,
  Users,
} from './users';
import * as CurrenciesAPI from './currencies/currencies';
import {
  BaseCurrencies,
  BatchInputExchangeRateCreateRequest,
  BatchInputExchangeRateUpdateRequest,
  BatchResponseExchangeRate,
  BatchResponseExchangeRateWithErrors,
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

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['settings'] = Object.freeze(['settings'] as const);
}
export class Settings extends BaseSettings {
  currencies: CurrenciesAPI.Currencies = new CurrenciesAPI.Currencies(this._client);
  taxRates: TaxRatesAPI.TaxRates = new TaxRatesAPI.TaxRates(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Settings.Currencies = Currencies;
Settings.BaseCurrencies = BaseCurrencies;
Settings.TaxRates = TaxRates;
Settings.BaseTaxRates = BaseTaxRates;
Settings.Users = Users;
Settings.BaseUsers = BaseUsers;

export declare namespace Settings {
  export {
    Currencies as Currencies,
    BaseCurrencies as BaseCurrencies,
    type BatchInputExchangeRateCreateRequest as BatchInputExchangeRateCreateRequest,
    type BatchInputExchangeRateUpdateRequest as BatchInputExchangeRateUpdateRequest,
    type BatchResponseExchangeRate as BatchResponseExchangeRate,
    type BatchResponseExchangeRateWithErrors as BatchResponseExchangeRateWithErrors,
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
    BaseTaxRates as BaseTaxRates,
    type CollectionResponsePublicTaxRateGroupForwardPaging as CollectionResponsePublicTaxRateGroupForwardPaging,
    type PublicTaxRateGroup as PublicTaxRateGroup,
    type PublicTaxRateGroupsPage as PublicTaxRateGroupsPage,
    type TaxRateListParams as TaxRateListParams,
  };

  export {
    Users as Users,
    BaseUsers as BaseUsers,
    type CollectionResponsePublicPermissionSetNoPaging as CollectionResponsePublicPermissionSetNoPaging,
    type CollectionResponsePublicTeamNoPaging as CollectionResponsePublicTeamNoPaging,
    type CollectionResponsePublicUserForwardPaging as CollectionResponsePublicUserForwardPaging,
    type PublicPermissionSet as PublicPermissionSet,
    type PublicTeam as PublicTeam,
    type PublicUser as PublicUser,
    type PublicUserUpdate as PublicUserUpdate,
    type UserProvisionRequest as UserProvisionRequest,
    type PublicUsersPage as PublicUsersPage,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserGetParams as UserGetParams,
  };
}
