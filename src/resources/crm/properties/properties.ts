// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as BatchAPI from './batch';
import { Batch, BatchCreateParams, BatchDeleteParams, BatchGetParams } from './batch';
import * as GroupsAPI from './groups';
import {
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

export class Properties extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);

  /**
   * Create and return a copy of a new property for the specified object type.
   */
  create(
    objectType: string,
    body: PropertyCreateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
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
  ): APIPromise<Shared.Property> {
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
  ): APIPromise<Shared.CollectionResponsePropertyNoPaging> {
    return this._client.get(path`/crm/properties/2026-03/${objectType}`, { query, ...options });
  }

  /**
   * Delete an existing property.
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
  ): APIPromise<Shared.Property> {
    const { objectType, ...query } = params;
    return this._client.get(path`/crm/properties/2026-03/${objectType}/${propertyName}`, {
      query,
      ...options,
    });
  }
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
   * Property groups are displayed in order starting with the lowest positive integer
   * value. Values of -1 will cause the property group to be displayed after any
   * positive values.
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
   * A human-readable label that will be shown in HubSpot.
   */
  label?: string;

  /**
   * A list of valid options for the property. This field is required for enumerated
   * properties.
   */
  options?: Array<Shared.OptionInput>;

  /**
   * The data type of the property.
   */
  type?: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';
}

export interface PropertyCreateParams {
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

  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  description?: string;

  displayOrder?: number;

  externalOptions?: boolean;

  formField?: boolean;

  hasUniqueValue?: boolean;

  hidden?: boolean;

  options?: Array<Shared.OptionInput>;

  referencedObjectType?: string;
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
   * Body param: A description of the property that will be shown as help text in
   * HubSpot.
   */
  description?: string;

  /**
   * Body param: Property groups are displayed in order starting with the lowest
   * positive integer value. Values of -1 will cause the property group to be
   * displayed after any positive values.
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
   * Body param: A human-readable label that will be shown in HubSpot.
   */
  label?: string;

  /**
   * Body param: A list of valid options for the property. This field is required for
   * enumerated properties.
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
Properties.Groups = Groups;

export declare namespace Properties {
  export {
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
    type BatchGetParams as BatchGetParams,
  };

  export {
    Groups as Groups,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };
}
