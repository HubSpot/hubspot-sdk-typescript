// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
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

  ruleType: string;
}

export interface PublicPropertyValidationRuleMap {
  propertyName: string;

  propertyValidationRules: Array<PublicPropertyValidationRule>;
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
    type PropertyValidationGetParams as PropertyValidationGetParams,
  };
}
