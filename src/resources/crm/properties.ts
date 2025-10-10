// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CRMAPI from './crm';
import * as EmailsAPI from '../marketing/emails';
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
  ): APIPromise<CreatedResponsePropertyGroup> {
    return this._client.post(path`/crm/v3/properties/${objectType}/groups`, { body, ...options });
  }

  /**
   * Update a property
   */
  update(
    propertyName: string,
    params: PropertyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.Property> {
    const { objectType, ...body } = params;
    return this._client.patch(path`/crm/v3/properties/${objectType}/${propertyName}`, { body, ...options });
  }

  /**
   * Read all property groups
   */
  list(objectType: string, options?: RequestOptions): APIPromise<CollectionResponsePropertyGroup> {
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
  ): APIPromise<CRMAPI.Property> {
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
  ): APIPromise<BatchResponseProperty> {
    return this._client.post(path`/crm/v3/properties/${objectType}/batch/read`, { body, ...options });
  }
}

export interface BatchInputPropertyCreate {
  inputs: Array<PropertyCreate>;
}

export interface BatchInputPropertyName {
  inputs: Array<PropertyName>;
}

export interface BatchReadInputPropertyName {
  archived: boolean;

  inputs: Array<PropertyName>;

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';
}

export interface BatchResponseProperty {
  completedAt: string;

  results: Array<CRMAPI.Property>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseProperty {
  results: Array<CRMAPI.Property>;

  paging?: EmailsAPI.MarketingEmailsPaging;
}

export interface CollectionResponsePropertyGroup {
  results: Array<PropertyGroup>;

  paging?: EmailsAPI.MarketingEmailsPaging;
}

export interface CreatedResponseProperty {
  createdResourceId: string;

  entity: CRMAPI.Property;

  location?: string;
}

export interface CreatedResponsePropertyGroup {
  createdResourceId: string;

  entity: PropertyGroup;

  location?: string;
}

export interface CRMPropertiesOptionInput {
  hidden: boolean;

  label: string;

  value: string;

  displayOrder?: number;
}

export interface PropertyCreate {
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

export interface PropertyGroup {
  archived: boolean;

  displayOrder: number;

  label: string;

  name: string;
}

export interface PropertyGroupCreate {
  label: string;

  name: string;

  displayOrder?: number;
}

export interface PropertyGroupUpdate {
  displayOrder?: number;

  label?: string;
}

export interface PropertyName {
  name: string;
}

export interface PropertyUpdate {
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

  inputs: Array<PropertyName>;

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';
}

export declare namespace Properties {
  export {
    type BatchInputPropertyCreate as BatchInputPropertyCreate,
    type BatchInputPropertyName as BatchInputPropertyName,
    type BatchReadInputPropertyName as BatchReadInputPropertyName,
    type BatchResponseProperty as BatchResponseProperty,
    type CollectionResponseProperty as CollectionResponseProperty,
    type CollectionResponsePropertyGroup as CollectionResponsePropertyGroup,
    type CreatedResponseProperty as CreatedResponseProperty,
    type CreatedResponsePropertyGroup as CreatedResponsePropertyGroup,
    type CRMPropertiesOptionInput as CRMPropertiesOptionInput,
    type PropertyCreate as PropertyCreate,
    type PropertyGroup as PropertyGroup,
    type PropertyGroupCreate as PropertyGroupCreate,
    type PropertyGroupUpdate as PropertyGroupUpdate,
    type PropertyName as PropertyName,
    type PropertyUpdate as PropertyUpdate,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyGetByNameParams as PropertyGetByNameParams,
    type PropertyReadParams as PropertyReadParams,
  };
}
