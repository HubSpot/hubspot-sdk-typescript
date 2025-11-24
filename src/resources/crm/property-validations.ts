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
   * Update a specific validation rule for a property identified by its name and rule
   * type.
   *
   * @example
   * ```ts
   * await client.crm.propertyValidations.crmV3PropertyValidationsObjectTypeIDPropertyNameRuleTypeRuleType(
   *   'AFTER_DATETIME_DURATION',
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
      | 'AFTER_DATETIME_DURATION'
      | 'AFTER_DURATION'
      | 'ALPHANUMERIC'
      | 'BEFORE_DATETIME_DURATION'
      | 'BEFORE_DURATION'
      | 'DAYS_OF_WEEK'
      | 'DECIMAL'
      | 'DOMAIN'
      | 'EMAIL'
      | 'EMAIL_ALLOWED_DOMAINS'
      | 'EMAIL_BLOCKED_DOMAINS'
      | 'END_DATE'
      | 'END_DATETIME'
      | 'FORMAT'
      | 'MAX_LENGTH'
      | 'MAX_NUMBER'
      | 'MIN_LENGTH'
      | 'MIN_NUMBER'
      | 'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE'
      | 'REGEX'
      | 'SPECIAL_CHARACTERS'
      | 'START_DATE'
      | 'START_DATETIME'
      | 'URL'
      | 'URL_ALLOWED_DOMAINS'
      | 'URL_BLOCKED_DOMAINS'
      | 'WHITESPACE',
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
  /**
   * Collection of properties with their validation rules. Each item maps a property
   * name to its configured validation rules for the specified object type.
   */
  results: Array<PublicPropertyValidationRuleMap>;
}

export interface CollectionResponsePublicPropertyValidationRuleNoPaging {
  /**
   * Collection of validation rules configured for the specified property. Each rule
   * defines a constraint that property values must satisfy (e.g., format
   * requirements, length limits, allowed values).
   */
  results: Array<PublicPropertyValidationRule>;
}

export interface PublicPropertyValidationRule {
  /**
   * A list of arguments that define the specific conditions or parameters for the
   * validation rule.
   */
  ruleArguments: Array<string>;

  /**
   * The category of validation applied to the property, such as FORMAT,
   * ALPHANUMERIC, or MAX_LENGTH.
   */
  ruleType:
    | 'AFTER_DATETIME_DURATION'
    | 'AFTER_DURATION'
    | 'ALPHANUMERIC'
    | 'BEFORE_DATETIME_DURATION'
    | 'BEFORE_DURATION'
    | 'DAYS_OF_WEEK'
    | 'DECIMAL'
    | 'DOMAIN'
    | 'EMAIL'
    | 'EMAIL_ALLOWED_DOMAINS'
    | 'EMAIL_BLOCKED_DOMAINS'
    | 'END_DATE'
    | 'END_DATETIME'
    | 'FORMAT'
    | 'MAX_LENGTH'
    | 'MAX_NUMBER'
    | 'MIN_LENGTH'
    | 'MIN_NUMBER'
    | 'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE'
    | 'REGEX'
    | 'SPECIAL_CHARACTERS'
    | 'START_DATE'
    | 'START_DATETIME'
    | 'URL'
    | 'URL_ALLOWED_DOMAINS'
    | 'URL_BLOCKED_DOMAINS'
    | 'WHITESPACE';
}

export interface PublicPropertyValidationRuleMap {
  /**
   * The name of the property for which validation rules are defined.
   */
  propertyName: string;

  /**
   * A list of validation rules applicable to the property.
   */
  propertyValidationRules: Array<PublicPropertyValidationRule>;
}

export interface PublicPropertyValidationRuleUpdate {
  /**
   * A list of arguments that define the constraints for the validation rule.
   */
  ruleArguments: Array<string>;
}

export interface PropertyValidationCrmV3PropertyValidationsObjectTypeIDPropertyNameRuleTypeRuleTypeParams {
  /**
   * Path param: The ID of the object type to which the property belongs.
   */
  objectTypeId: string;

  /**
   * Path param: The name of the property for which the validation rule is being
   * updated.
   */
  propertyName: string;

  /**
   * Body param: A list of arguments that define the constraints for the validation
   * rule.
   */
  ruleArguments: Array<string>;
}

export interface PropertyValidationGetParams {
  /**
   * The ID of the object type to which the property belongs.
   */
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
