// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PropertiesValidations extends APIResource {
  getByObjectTypeID(
    objectTypeID: string,
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicPropertyValidationRuleMapNoPaging> {
    return this._client.get(path`/crm/property-validations/2026-03/${objectTypeID}`, options);
  }

  getByObjectTypeIDAndPropertyName(
    propertyName: string,
    params: PropertiesValidationGetByObjectTypeIDAndPropertyNameParams,
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicPropertyValidationRuleNoPaging> {
    const { objectTypeId } = params;
    return this._client.get(path`/crm/property-validations/2026-03/${objectTypeId}/${propertyName}`, options);
  }

  getByObjectTypeIDPropertyNameAndRuleType(
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
    params: PropertiesValidationGetByObjectTypeIDPropertyNameAndRuleTypeParams,
    options?: RequestOptions,
  ): APIPromise<PublicPropertyValidationRule> {
    const { objectTypeId, propertyName } = params;
    return this._client.get(
      path`/crm/property-validations/2026-03/${objectTypeId}/${propertyName}/rule-type/${ruleType}`,
      options,
    );
  }

  updateByObjectTypeIDPropertyNameAndRuleType(
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
    params: PropertiesValidationUpdateByObjectTypeIDPropertyNameAndRuleTypeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { objectTypeId, propertyName, ...body } = params;
    return this._client.put(
      path`/crm/property-validations/2026-03/${objectTypeId}/${propertyName}/rule-type/${ruleType}`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
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

  shouldApplyNormalization?: boolean;
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

  shouldApplyNormalization?: boolean;
}

export interface PropertiesValidationGetByObjectTypeIDAndPropertyNameParams {
  objectTypeId: string;
}

export interface PropertiesValidationGetByObjectTypeIDPropertyNameAndRuleTypeParams {
  objectTypeId: string;

  propertyName: string;
}

export interface PropertiesValidationUpdateByObjectTypeIDPropertyNameAndRuleTypeParams {
  /**
   * Path param
   */
  objectTypeId: string;

  /**
   * Path param
   */
  propertyName: string;

  /**
   * Body param: A list of arguments that define the constraints for the validation
   * rule.
   */
  ruleArguments: Array<string>;

  /**
   * Body param
   */
  shouldApplyNormalization?: boolean;
}

export declare namespace PropertiesValidations {
  export {
    type CollectionResponsePublicPropertyValidationRuleMapNoPaging as CollectionResponsePublicPropertyValidationRuleMapNoPaging,
    type CollectionResponsePublicPropertyValidationRuleNoPaging as CollectionResponsePublicPropertyValidationRuleNoPaging,
    type PublicPropertyValidationRule as PublicPropertyValidationRule,
    type PublicPropertyValidationRuleMap as PublicPropertyValidationRuleMap,
    type PublicPropertyValidationRuleUpdate as PublicPropertyValidationRuleUpdate,
    type PropertiesValidationGetByObjectTypeIDAndPropertyNameParams as PropertiesValidationGetByObjectTypeIDAndPropertyNameParams,
    type PropertiesValidationGetByObjectTypeIDPropertyNameAndRuleTypeParams as PropertiesValidationGetByObjectTypeIDPropertyNameAndRuleTypeParams,
    type PropertiesValidationUpdateByObjectTypeIDPropertyNameAndRuleTypeParams as PropertiesValidationUpdateByObjectTypeIDPropertyNameAndRuleTypeParams,
  };
}
