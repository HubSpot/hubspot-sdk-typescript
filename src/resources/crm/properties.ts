// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CRMAPI from './crm';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Properties extends APIResource {
  /**
   * Create a property group
   */
  create(
    objectType: string,
    body: PropertyCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMPropertiesCreatedResponsePropertyGroup> {
    return this._client.post(path`/crm/v3/properties/${objectType}/groups`, { body, ...options });
  }

  /**
   * Update a property
   */
  update(
    propertyName: string,
    params: PropertyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CRMProperty> {
    const { objectType, ...body } = params;
    return this._client.patch(path`/crm/v3/properties/${objectType}/${propertyName}`, { body, ...options });
  }

  /**
   * Read all property groups
   */
  list(
    objectType: string,
    options?: RequestOptions,
  ): APIPromise<CRMPropertiesCollectionResponsePropertyGroup> {
    return this._client.get(path`/crm/v3/properties/${objectType}/groups`, options);
  }

  /**
   * Archive a property
   */
  delete(propertyName: string, params: PropertyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(path`/crm/v3/properties/${objectType}/${propertyName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a property
   */
  getByName(
    propertyName: string,
    params: PropertyGetByNameParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CRMProperty> {
    const { objectType, ...query } = params;
    return this._client.get(path`/crm/v3/properties/${objectType}/${propertyName}`, { query, ...options });
  }

  /**
   * Read a batch of properties
   */
  read(
    objectType: string,
    body: PropertyReadParams,
    options?: RequestOptions,
  ): APIPromise<CRMPropertiesBatchResponseProperty> {
    return this._client.post(path`/crm/v3/properties/${objectType}/batch/read`, { body, ...options });
  }
}

export interface CRMPropertiesBatchInputPropertyCreate {
  inputs: Array<CRMPropertiesPropertyCreate>;
}

export interface CRMPropertiesBatchInputPropertyName {
  inputs: Array<CRMPropertiesPropertyName>;
}

export interface CRMPropertiesBatchReadInputPropertyName {
  archived: boolean;

  inputs: Array<CRMPropertiesPropertyName>;

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';
}

export interface CRMPropertiesBatchResponseProperty {
  completedAt: string;

  results: Array<CRMAPI.CRMProperty>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMPropertiesCollectionResponseProperty {
  results: Array<CRMAPI.CRMProperty>;

  paging?: Shared.Paging;
}

export interface CRMPropertiesCollectionResponsePropertyGroup {
  results: Array<CRMPropertiesPropertyGroup>;

  paging?: Shared.Paging;
}

export interface CRMPropertiesCreatedResponseProperty {
  createdResourceId: string;

  entity: CRMAPI.CRMProperty;

  location?: string;
}

export interface CRMPropertiesCreatedResponsePropertyGroup {
  createdResourceId: string;

  entity: CRMPropertiesPropertyGroup;

  location?: string;
}

export interface CRMPropertiesOptionInput {
  hidden: boolean;

  label: string;

  value: string;

  displayOrder?: number;
}

export interface CRMPropertiesPropertyCreate {
  fieldType:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea';

  groupName: string;

  label: string;

  name: string;

  type: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';

  calculationFormula?: string;

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';

  displayOrder?: number;

  externalOptions?: boolean;

  formField?: boolean;

  hasUniqueValue?: boolean;

  hidden?: boolean;

  options?: Array<CRMPropertiesOptionInput>;

  referencedObjectType?: string;
}

export interface CRMPropertiesPropertyGroup {
  archived: boolean;

  displayOrder: number;

  label: string;

  name: string;
}

export interface CRMPropertiesPropertyGroupCreate {
  label: string;

  name: string;

  displayOrder?: number;
}

export interface CRMPropertiesPropertyGroupUpdate {
  displayOrder?: number;

  label?: string;
}

export interface CRMPropertiesPropertyName {
  name: string;
}

export interface CRMPropertiesPropertyUpdate {
  calculationFormula?: string;

  displayOrder?: number;

  fieldType?:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea';

  formField?: boolean;

  groupName?: string;

  hidden?: boolean;

  label?: string;

  options?: Array<CRMPropertiesOptionInput>;

  type?: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';
}

export interface PropertyCreateParams {
  label: string;

  name: string;

  displayOrder?: number;
}

export interface PropertyUpdateParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Body param:
   */
  calculationFormula?: string;

  /**
   * Body param:
   */
  displayOrder?: number;

  /**
   * Body param:
   */
  fieldType?:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea';

  /**
   * Body param:
   */
  formField?: boolean;

  /**
   * Body param:
   */
  groupName?: string;

  /**
   * Body param:
   */
  hidden?: boolean;

  /**
   * Body param:
   */
  label?: string;

  /**
   * Body param:
   */
  options?: Array<CRMPropertiesOptionInput>;

  /**
   * Body param:
   */
  type?: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';
}

export interface PropertyDeleteParams {
  objectType: string;
}

export interface PropertyGetByNameParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Query param:
   */
  archived?: boolean;

  /**
   * Query param:
   */
  properties?: string;
}

export interface PropertyReadParams {
  archived: boolean;

  inputs: Array<CRMPropertiesPropertyName>;

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';
}

export declare namespace Properties {
  export {
    type CRMPropertiesBatchInputPropertyCreate as CRMPropertiesBatchInputPropertyCreate,
    type CRMPropertiesBatchInputPropertyName as CRMPropertiesBatchInputPropertyName,
    type CRMPropertiesBatchReadInputPropertyName as CRMPropertiesBatchReadInputPropertyName,
    type CRMPropertiesBatchResponseProperty as CRMPropertiesBatchResponseProperty,
    type CRMPropertiesCollectionResponseProperty as CRMPropertiesCollectionResponseProperty,
    type CRMPropertiesCollectionResponsePropertyGroup as CRMPropertiesCollectionResponsePropertyGroup,
    type CRMPropertiesCreatedResponseProperty as CRMPropertiesCreatedResponseProperty,
    type CRMPropertiesCreatedResponsePropertyGroup as CRMPropertiesCreatedResponsePropertyGroup,
    type CRMPropertiesOptionInput as CRMPropertiesOptionInput,
    type CRMPropertiesPropertyCreate as CRMPropertiesPropertyCreate,
    type CRMPropertiesPropertyGroup as CRMPropertiesPropertyGroup,
    type CRMPropertiesPropertyGroupCreate as CRMPropertiesPropertyGroupCreate,
    type CRMPropertiesPropertyGroupUpdate as CRMPropertiesPropertyGroupUpdate,
    type CRMPropertiesPropertyName as CRMPropertiesPropertyName,
    type CRMPropertiesPropertyUpdate as CRMPropertiesPropertyUpdate,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyGetByNameParams as PropertyGetByNameParams,
    type PropertyReadParams as PropertyReadParams,
  };
}
