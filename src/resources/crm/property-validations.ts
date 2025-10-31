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
   * const propertyValidations =
   *   await client.crm.propertyValidations.list('objectTypeId');
   * ```
   */
  list(objectTypeID: string, options?: RequestOptions): APIPromise<PropertyValidationListResponse> {
    return this._client.get(path`/crm/v3/property-validations/${objectTypeID}`, options);
  }

  /**
   * Read a property's validation rules identified by {propertyName}.
   *
   * @example
   * ```ts
   * const propertyValidation =
   *   await client.crm.propertyValidations.get('propertyName', {
   *     objectTypeId: 'objectTypeId',
   *   });
   * ```
   */
  get(
    propertyName: string,
    params: PropertyValidationGetParams,
    options?: RequestOptions,
  ): APIPromise<PropertyValidationGetResponse> {
    const { objectTypeId } = params;
    return this._client.get(path`/crm/v3/property-validations/${objectTypeId}/${propertyName}`, options);
  }
}

export interface PropertyValidationListResponse {
  results: Array<PropertyValidationListResponse.Result>;
}

export namespace PropertyValidationListResponse {
  export interface Result {
    propertyName: string;

    propertyValidationRules: Array<Result.PropertyValidationRule>;
  }

  export namespace Result {
    export interface PropertyValidationRule {
      ruleArguments: Array<string>;

      ruleType: string;
    }
  }
}

export interface PropertyValidationGetResponse {
  results: Array<PropertyValidationGetResponse.Result>;
}

export namespace PropertyValidationGetResponse {
  export interface Result {
    ruleArguments: Array<string>;

    ruleType: string;
  }
}

export interface PropertyValidationGetParams {
  objectTypeId: string;
}

export declare namespace PropertyValidations {
  export {
    type PropertyValidationListResponse as PropertyValidationListResponse,
    type PropertyValidationGetResponse as PropertyValidationGetResponse,
    type PropertyValidationGetParams as PropertyValidationGetParams,
  };
}
