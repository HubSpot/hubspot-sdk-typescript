// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CrmAPI from '../crm';
import * as BatchAPI from './batch';
import { BaseBatch, Batch, BatchCreateParams, BatchDeleteParams, BatchGetParams } from './batch';
import * as GroupsAPI from './groups';
import {
  BaseGroups,
  GroupCreateParams,
  GroupDeleteParams,
  GroupGetParams,
  GroupListParams,
  GroupUpdateParams,
  Groups,
} from './groups';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseProperties extends APIResource {
  static override readonly _key: readonly ['crm', 'properties'] = Object.freeze([
    'crm',
    'properties',
  ] as const);

  /**
   * Create and return a copy of a new property for the specified object type.
   */
  create(
    objectType: string,
    body: PropertyCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.Property> {
    return this._client.post(path`/crm/properties/2026-03/${objectType}`, { body, ...options });
  }

  /**
   * Perform a partial update of a property identified by { propertyName }. Provided
   * fields will be overwritten.
   */
  update(
    propertyName: string,
    params: PropertyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.Property> {
    const { objectType, ...body } = params;
    return this._client.patch(path`/crm/properties/2026-03/${objectType}/${propertyName}`, {
      body,
      ...options,
    });
  }

  /**
   * Read all existing properties for the specified object type and HubSpot account.
   */
  list(
    objectType: string,
    query: PropertyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePropertyNoPaging> {
    return this._client.get(path`/crm/properties/2026-03/${objectType}`, { query, ...options });
  }

  /**
   * Move a property identified by {propertyName} to the recycling bin.
   */
  delete(propertyName: string, params: PropertyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(path`/crm/properties/2026-03/${objectType}/${propertyName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a property identified by {propertyName}.
   */
  get(
    propertyName: string,
    params: PropertyGetParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.Property> {
    const { objectType, ...query } = params;
    return this._client.get(path`/crm/properties/2026-03/${objectType}/${propertyName}`, {
      query,
      ...options,
    });
  }
}
export class Properties extends BaseProperties {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
}

export interface BatchInputPropertyCreate {
  inputs: Array<PropertyCreate>;
}

export interface BatchResponseProperty {
  /**
   * The timestamp indicating when the batch operation was completed.
   */
  completedAt: string;

  results: Array<CrmAPI.Property>;

  /**
   * The timestamp indicating when the batch operation began processing.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, with possible values being CANCELED,
   * COMPLETE, PENDING, or PROCESSING.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * A collection of URLs linking to documentation or resources related to the batch
   * operation.
   */
  links?: { [key: string]: string };

  /**
   * The timestamp indicating when the batch operation was requested.
   */
  requestedAt?: string;
}

export interface BatchResponsePropertyWithErrors {
  completedAt: string;

  results: Array<CrmAPI.Property>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponsePropertyNoPaging {
  results: Array<CrmAPI.Property>;
}

export interface PropertyCreate {
  /**
   * Controls how the property appears in HubSpot.
   */
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

  /**
   * The name of the property group the property belongs to.
   */
  groupName: string;

  /**
   * A human-readable property label that will be shown in HubSpot.
   */
  label: string;

  /**
   * The internal property name, which must be used when referencing the property via
   * the API.
   */
  name: string;

  /**
   * The data type of the property.
   */
  type: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';

  /**
   * Represents a formula that is used to compute a calculated property.
   */
  calculationFormula?: string;

  currencyPropertyName?: string;

  /**
   * Indicates the sensitivity level of the property, with options: highly_sensitive,
   * non_sensitive, or sensitive.
   */
  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  /**
   * A description of the property that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Properties are displayed in order starting with the lowest positive integer
   * value. Values of -1 will cause the property to be displayed after any positive
   * values.
   */
  displayOrder?: number;

  /**
   * Applicable only for 'enumeration' type properties. Should be set to true in
   * conjunction with a 'referencedObjectType' of 'OWNER'. Otherwise false.
   */
  externalOptions?: boolean;

  /**
   * Whether or not the property can be used in a HubSpot form.
   */
  formField?: boolean;

  /**
   * Whether or not the property's value must be unique. Once set, this can't be
   * changed.
   */
  hasUniqueValue?: boolean;

  /**
   * If true, the property won't be visible and can't be used in HubSpot.
   */
  hidden?: boolean;

  /**
   * A list of valid options for the property. This field is required for enumerated
   * properties.
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Should be set to 'OWNER' when 'externalOptions' is true, which causes the
   * property to dynamically pull option values from the current HubSpot users.
   */
  referencedObjectType?: string;

  showCurrencySymbol?: boolean;
}

export interface PropertyUpdate {
  /**
   * Represents a formula that is used to compute a calculated property.
   */
  calculationFormula?: string;

  currencyPropertyName?: string;

  /**
   * A description of the property that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Properties are displayed in order starting with the lowest positive integer
   * value. Values of -1 will cause the Property to be displayed after any positive
   * values.
   */
  displayOrder?: number;

  /**
   * Controls how the property appears in HubSpot.
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
   * Whether or not the property can be used in a HubSpot form.
   */
  formField?: boolean;

  /**
   * The name of the property group the property belongs to.
   */
  groupName?: string;

  /**
   * If true, the property won't be visible and can't be used in HubSpot.
   */
  hidden?: boolean;

  /**
   * A human-readable property label that will be shown in HubSpot.
   */
  label?: string;

  /**
   * A list of valid options for the property.
   */
  options?: Array<Shared.OptionInput>;

  showCurrencySymbol?: boolean;

  /**
   * The data type of the property.
   */
  type?: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';
}

export interface PropertyCreateParams {
  /**
   * Controls how the property appears in HubSpot.
   */
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

  /**
   * The name of the property group the property belongs to.
   */
  groupName: string;

  /**
   * A human-readable property label that will be shown in HubSpot.
   */
  label: string;

  /**
   * The internal property name, which must be used when referencing the property via
   * the API.
   */
  name: string;

  /**
   * The data type of the property.
   */
  type: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';

  /**
   * Represents a formula that is used to compute a calculated property.
   */
  calculationFormula?: string;

  currencyPropertyName?: string;

  /**
   * Indicates the sensitivity level of the property, with options: highly_sensitive,
   * non_sensitive, or sensitive.
   */
  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  /**
   * A description of the property that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Properties are displayed in order starting with the lowest positive integer
   * value. Values of -1 will cause the property to be displayed after any positive
   * values.
   */
  displayOrder?: number;

  /**
   * Applicable only for 'enumeration' type properties. Should be set to true in
   * conjunction with a 'referencedObjectType' of 'OWNER'. Otherwise false.
   */
  externalOptions?: boolean;

  /**
   * Whether or not the property can be used in a HubSpot form.
   */
  formField?: boolean;

  /**
   * Whether or not the property's value must be unique. Once set, this can't be
   * changed.
   */
  hasUniqueValue?: boolean;

  /**
   * If true, the property won't be visible and can't be used in HubSpot.
   */
  hidden?: boolean;

  /**
   * A list of valid options for the property. This field is required for enumerated
   * properties.
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Should be set to 'OWNER' when 'externalOptions' is true, which causes the
   * property to dynamically pull option values from the current HubSpot users.
   */
  referencedObjectType?: string;

  showCurrencySymbol?: boolean;
}

export interface PropertyUpdateParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Body param: Represents a formula that is used to compute a calculated property.
   */
  calculationFormula?: string;

  /**
   * Body param
   */
  currencyPropertyName?: string;

  /**
   * Body param: A description of the property that will be shown as help text in
   * HubSpot.
   */
  description?: string;

  /**
   * Body param: Properties are displayed in order starting with the lowest positive
   * integer value. Values of -1 will cause the Property to be displayed after any
   * positive values.
   */
  displayOrder?: number;

  /**
   * Body param: Controls how the property appears in HubSpot.
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
   * Body param: Whether or not the property can be used in a HubSpot form.
   */
  formField?: boolean;

  /**
   * Body param: The name of the property group the property belongs to.
   */
  groupName?: string;

  /**
   * Body param: If true, the property won't be visible and can't be used in HubSpot.
   */
  hidden?: boolean;

  /**
   * Body param: A human-readable property label that will be shown in HubSpot.
   */
  label?: string;

  /**
   * Body param: A list of valid options for the property.
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Body param
   */
  showCurrencySymbol?: boolean;

  /**
   * Body param: The data type of the property.
   */
  type?: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';
}

export interface PropertyListParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  locale?: string;

  properties?: string;
}

export interface PropertyDeleteParams {
  objectType: string;
}

export interface PropertyGetParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Query param
   */
  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  /**
   * Query param
   */
  locale?: string;

  /**
   * Query param
   */
  properties?: string;
}

Properties.Batch = Batch;
Properties.BaseBatch = BaseBatch;
Properties.Groups = Groups;
Properties.BaseGroups = BaseGroups;

export declare namespace Properties {
  export {
    type BatchInputPropertyCreate as BatchInputPropertyCreate,
    type BatchResponseProperty as BatchResponseProperty,
    type BatchResponsePropertyWithErrors as BatchResponsePropertyWithErrors,
    type CollectionResponsePropertyNoPaging as CollectionResponsePropertyNoPaging,
    type PropertyCreate as PropertyCreate,
    type PropertyUpdate as PropertyUpdate,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyGetParams as PropertyGetParams,
  };

  export {
    Batch as Batch,
    BaseBatch as BaseBatch,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };

  export {
    Groups as Groups,
    BaseGroups as BaseGroups,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };
}
