// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as EmailsAPI from '../../marketing/emails';
import * as BatchAPI from './batch';
import { Batch, BatchCreateParams, BatchDeleteParams, BatchReadParams } from './batch';
import * as GroupsAPI from './groups';
import { GroupCreateParams, GroupDeleteParams, GroupGetParams, GroupUpdateParams, Groups } from './groups';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Properties extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);

  /**
   * Create and return a copy of a new property for the specified object type.
   *
   * @example
   * ```ts
   * const createdResponseProperty =
   *   await client.crm.properties.create('objectType', {
   *     fieldType: 'select',
   *     groupName: 'contactinformation',
   *     label: 'My Contact Property',
   *     name: 'my_contact_property',
   *     type: 'enumeration',
   *   });
   * ```
   */
  create(
    objectType: string,
    body: PropertyCreateParams,
    options?: RequestOptions,
  ): APIPromise<CreatedResponseProperty> {
    return this._client.post(path`/crm/v3/properties/${objectType}`, { body, ...options });
  }

  /**
   * Perform a partial update of a property identified by { propertyName }. Provided
   * fields will be overwritten.
   *
   * @example
   * ```ts
   * const property = await client.crm.properties.update(
   *   'propertyName',
   *   { objectType: 'objectType' },
   * );
   * ```
   */
  update(
    propertyName: string,
    params: PropertyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { objectType, ...body } = params;
    return this._client.patch(path`/crm/v3/properties/${objectType}/${propertyName}`, { body, ...options });
  }

  /**
   * Read all existing properties for the specified object type and HubSpot account.
   *
   * @example
   * ```ts
   * const collectionResponseProperty =
   *   await client.crm.properties.list('objectType');
   * ```
   */
  list(
    objectType: string,
    query: PropertyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseProperty> {
    return this._client.get(path`/crm/v3/properties/${objectType}`, { query, ...options });
  }

  /**
   * Move a property identified by {propertyName} to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.properties.delete('propertyName', {
   *   objectType: 'objectType',
   * });
   * ```
   */
  delete(propertyName: string, params: PropertyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(path`/crm/v3/properties/${objectType}/${propertyName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a property identified by {propertyName}.
   *
   * @example
   * ```ts
   * const property = await client.crm.properties.get(
   *   'propertyName',
   *   { objectType: 'objectType' },
   * );
   * ```
   */
  get(
    propertyName: string,
    params: PropertyGetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { objectType, ...query } = params;
    return this._client.get(path`/crm/v3/properties/${objectType}/${propertyName}`, { query, ...options });
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

  results: Array<Shared.Property>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseProperty {
  results: Array<Shared.Property>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface CollectionResponsePropertyGroup {
  results: Array<PropertyGroup>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface CreatedResponseProperty {
  createdResourceId: string;

  /**
   * Defines a property
   */
  entity: Shared.Property;

  location?: string;
}

export interface CreatedResponsePropertyGroup {
  createdResourceId: string;

  /**
   * An ID for a group of properties
   */
  entity: PropertyGroup;

  location?: string;
}

export interface OptionInput {
  /**
   * If true, the option will not be shown in forms, bots, or meeting scheduling
   * pages. Supported for contact, company, ticket, and custom object enumeration
   * properties.
   */
  hidden: boolean;

  /**
   * A human-readable option label that will be shown in HubSpot.
   */
  label: string;

  /**
   * The internal value of the option, which must be used when setting the property
   * value through the API.
   */
  value: string;

  /**
   * A description of the option.
   */
  description?: string;

  /**
   * Options are shown in order starting with the lowest positive integer value.
   * Values of -1 will cause the option to be displayed after any positive values.
   */
  displayOrder?: number;
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

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';

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
   * If true, the option will not be shown in forms, bots, or meeting scheduling
   * pages. Supported for contact, company, ticket, and custom object enumeration
   * properties.
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
}

/**
 * An ID for a group of properties
 */
export interface PropertyGroup {
  archived: boolean;

  /**
   * Property groups are displayed in order starting with the lowest positive integer
   * value. Values of -1 will cause the property group to be displayed after any
   * positive values.
   */
  displayOrder: number;

  /**
   * A human-readable label that will be shown in HubSpot.
   */
  label: string;

  /**
   * The internal property group name, which must be used when referencing the
   * property group via the API.
   */
  name: string;
}

export interface PropertyGroupCreate {
  /**
   * A human-readable label that will be shown in HubSpot.
   */
  label: string;

  /**
   * The internal property group name, which must be used when referencing the
   * property group via the API.
   */
  name: string;

  /**
   * Property groups are displayed in order starting with the lowest positive integer
   * value. Values of -1 will cause the property group to be displayed after any
   * positive values.
   */
  displayOrder?: number;
}

export interface PropertyGroupUpdate {
  /**
   * Property groups are displayed in order starting with the lowest positive integer
   * value. Values of -1 will cause the property group to be displayed after any
   * positive values.
   */
  displayOrder?: number;

  /**
   * A human-readable label that will be shown in HubSpot.
   */
  label?: string;
}

export interface PropertyName {
  /**
   * The name of the property to read or modify.
   */
  name: string;
}

export interface PropertyUpdate {
  /**
   * Represents a formula that is used to compute a calculated property.
   */
  calculationFormula?: string;

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

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';

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
   * If true, the option will not be shown in forms, bots, or meeting scheduling
   * pages. Supported for contact, company, ticket, and custom object enumeration
   * properties.
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
}

export interface PropertyUpdateParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Body param: Represents a formula that is used to compute a calculated property.
   */
  calculationFormula?: string;

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
   * Body param: The data type of the property.
   */
  type?: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';
}

export interface PropertyListParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  properties?: string;
}

export interface PropertyDeleteParams {
  objectType: string;
}

export interface PropertyGetParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Query param:
   */
  properties?: string;
}

Properties.Batch = Batch;
Properties.Groups = Groups;

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
    type OptionInput as OptionInput,
    type PropertyCreate as PropertyCreate,
    type PropertyGroup as PropertyGroup,
    type PropertyGroupCreate as PropertyGroupCreate,
    type PropertyGroupUpdate as PropertyGroupUpdate,
    type PropertyName as PropertyName,
    type PropertyUpdate as PropertyUpdate,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyGetParams as PropertyGetParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchReadParams as BatchReadParams,
  };

  export {
    Groups as Groups,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };
}
