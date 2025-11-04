// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PropertyValidations extends APIResource {
  /**
   * Read all properties with validation rules for a given object.
   *
   * @example
   * ```ts
   * const collectionResponsePublicPropertyValidationRuleMapNoPaging =
   *   await client.crm.propertyValidations.list('objectTypeId');
   * ```
   */
  list(
    objectTypeID: string,
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicPropertyValidationRuleMapNoPaging> {
    return this._client.get(path`/crm/v3/property-validations/${objectTypeID}`, options);
  }

  /**
   * @example
   * ```ts
   * await client.crm.propertyValidations.crmV3PropertyValidationsObjectTypeIDPropertyNameRuleTypeRuleType(
   *   'FORMAT',
   *   {
   *     objectTypeId: 'objectTypeId',
   *     propertyName: 'propertyName',
   *     ruleArguments: ['string'],
   *   },
   * );
   * ```
   */
  crmV3PropertyValidationsObjectTypeIDPropertyNameRuleTypeRuleType(
    ruleType:
      | 'FORMAT'
      | 'ALPHANUMERIC'
      | 'MAX_LENGTH'
      | 'MIN_LENGTH'
      | 'MIN_NUMBER'
      | 'MAX_NUMBER'
      | 'START_DATE'
      | 'END_DATE'
      | 'SPECIAL_CHARACTERS'
      | 'WHITESPACE'
      | 'DECIMAL'
      | 'BEFORE_DURATION'
      | 'AFTER_DURATION'
      | 'DAYS_OF_WEEK'
      | 'REGEX'
      | 'START_DATETIME'
      | 'END_DATETIME'
      | 'BEFORE_DATETIME_DURATION'
      | 'AFTER_DATETIME_DURATION'
      | 'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE'
      | 'URL'
      | 'URL_ALLOWED_DOMAINS'
      | 'URL_BLOCKED_DOMAINS'
      | 'EMAIL'
      | 'EMAIL_ALLOWED_DOMAINS'
      | 'EMAIL_BLOCKED_DOMAINS'
      | 'DOMAIN',
    params: PropertyValidationCrmV3PropertyValidationsObjectTypeIDPropertyNameRuleTypeRuleTypeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { objectTypeId, propertyName, ...body } = params;
    return this._client.put(
      path`/crm/v3/property-validations/${objectTypeId}/${propertyName}/rule-type/${ruleType}`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Read a property's validation rules identified by {propertyName}.
   *
   * @example
   * ```ts
   * const collectionResponsePublicPropertyValidationRuleNoPaging =
   *   await client.crm.propertyValidations.get('propertyName', {
   *     objectTypeId: 'objectTypeId',
   *   });
   * ```
   */
  get(
    propertyName: string,
    params: PropertyValidationGetParams,
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicPropertyValidationRuleNoPaging> {
    const { objectTypeId } = params;
    return this._client.get(path`/crm/v3/property-validations/${objectTypeId}/${propertyName}`, options);
  }
}

export interface CollectionResponsePublicPropertyValidationRuleMapNoPaging {
  results: Array<PublicPropertyValidationRuleMap>;
}

export interface CollectionResponsePublicPropertyValidationRuleNoPaging {
  results: Array<PublicPropertyValidationRule>;
}

export interface PublicPropertyValidationRule {
  ruleArguments: Array<string>;

  ruleType:
    | 'FORMAT'
    | 'ALPHANUMERIC'
    | 'MAX_LENGTH'
    | 'MIN_LENGTH'
    | 'MIN_NUMBER'
    | 'MAX_NUMBER'
    | 'START_DATE'
    | 'END_DATE'
    | 'SPECIAL_CHARACTERS'
    | 'WHITESPACE'
    | 'DECIMAL'
    | 'BEFORE_DURATION'
    | 'AFTER_DURATION'
    | 'DAYS_OF_WEEK'
    | 'REGEX'
    | 'START_DATETIME'
    | 'END_DATETIME'
    | 'BEFORE_DATETIME_DURATION'
    | 'AFTER_DATETIME_DURATION'
    | 'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE'
    | 'URL'
    | 'URL_ALLOWED_DOMAINS'
    | 'URL_BLOCKED_DOMAINS'
    | 'EMAIL'
    | 'EMAIL_ALLOWED_DOMAINS'
    | 'EMAIL_BLOCKED_DOMAINS'
    | 'DOMAIN';
}

export interface PublicPropertyValidationRuleMap {
  propertyName: string;

  propertyValidationRules: Array<PublicPropertyValidationRule>;
}

export interface PublicPropertyValidationRuleUpdate {
  ruleArguments: Array<string>;
}

export interface PropertyValidationCrmV3PropertyValidationsObjectTypeIDPropertyNameRuleTypeRuleTypeParams {
  /**
   * Path param:
   */
  objectTypeId: string;

  /**
   * Path param:
   */
  propertyName: string;

  /**
   * Body param:
   */
  ruleArguments: Array<string>;
}

export interface PropertyValidationGetParams {
  objectTypeId: string;
}

export declare namespace PropertyValidations {
  export {
    type CollectionResponsePublicPropertyValidationRuleMapNoPaging as CollectionResponsePublicPropertyValidationRuleMapNoPaging,
    type CollectionResponsePublicPropertyValidationRuleNoPaging as CollectionResponsePublicPropertyValidationRuleNoPaging,
    type PublicPropertyValidationRule as PublicPropertyValidationRule,
    type PublicPropertyValidationRuleMap as PublicPropertyValidationRuleMap,
    type PublicPropertyValidationRuleUpdate as PublicPropertyValidationRuleUpdate,
    type PropertyValidationCrmV3PropertyValidationsObjectTypeIDPropertyNameRuleTypeRuleTypeParams as PropertyValidationCrmV3PropertyValidationsObjectTypeIDPropertyNameRuleTypeRuleTypeParams,
    type PropertyValidationGetParams as PropertyValidationGetParams,
  };
}
