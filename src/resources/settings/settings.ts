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
import * as UsersAPI from './users';
import {
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
  CurrencyBatchCreateParams,
  CurrencyBatchGetParams,
  CurrencyBatchUpdateParams,
  CurrencyCodeInfo,
  CurrencyCreateExchangeRateParams,
  CurrencyCreateRequest,
  CurrencyListExchangeRatesParams,
  CurrencyPairUpdate,
  CurrencyUpdateCompanyCurrencyParams,
  CurrencyUpdateExchangeRateParams,
  CurrencyUpdateVisibilityParams,
  ExchangeRate,
  ExchangeRateCreateRequest,
  ExchangeRateMultiplier,
  ExchangeRateUpdateRequest,
  ExchangeRatesPage,
} from './currencies/currencies';

export class Settings extends APIResource {
  currencies: CurrenciesAPI.Currencies = new CurrenciesAPI.Currencies(this._client);
  taxRates: TaxRatesAPI.TaxRates = new TaxRatesAPI.TaxRates(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Settings.Currencies = Currencies;
Settings.TaxRates = TaxRates;
Settings.Users = Users;

export declare namespace Settings {
  export {
    Currencies as Currencies,
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
    type ExchangeRatesPage as ExchangeRatesPage,
    type CurrencyBatchCreateParams as CurrencyBatchCreateParams,
    type CurrencyBatchGetParams as CurrencyBatchGetParams,
    type CurrencyBatchUpdateParams as CurrencyBatchUpdateParams,
    type CurrencyCreateExchangeRateParams as CurrencyCreateExchangeRateParams,
    type CurrencyListExchangeRatesParams as CurrencyListExchangeRatesParams,
    type CurrencyUpdateCompanyCurrencyParams as CurrencyUpdateCompanyCurrencyParams,
    type CurrencyUpdateExchangeRateParams as CurrencyUpdateExchangeRateParams,
    type CurrencyUpdateVisibilityParams as CurrencyUpdateVisibilityParams,
  };

  export {
    TaxRates as TaxRates,
    type CollectionResponsePublicTaxRateGroupForwardPaging as CollectionResponsePublicTaxRateGroupForwardPaging,
    type PublicTaxRateGroup as PublicTaxRateGroup,
    type PublicTaxRateGroupsPage as PublicTaxRateGroupsPage,
    type TaxRateListParams as TaxRateListParams,
  };

  export {
    Users as Users,
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
