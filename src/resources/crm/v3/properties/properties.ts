// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DailyAPI from '../../../account-info/v3/api-usage/daily';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchArchiveParams,
  BatchCreateParams,
  BatchReadParams,
  CRMPropertiesBatchResponseProperty,
  CRMPropertiesPropertyName,
} from './batch';
import * as GroupsAPI from './groups';
import {
  CRMPropertiesPropertyGroup,
  GroupCreateParams,
  GroupCreateResponse,
  GroupDeleteParams,
  GroupListResponse,
  GroupRetrieveParams,
  GroupUpdateParams,
  Groups,
} from './groups';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Properties extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);

  /**
   * Read all properties
   */
  retrieve(
    objectType: string,
    query: PropertyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PropertyRetrieveResponse> {
    return this._client.get(path`/crm/v3/properties/${objectType}`, { query, ...options });
  }

  /**
   * Create a property
   */
  update(
    objectType: string,
    body: PropertyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PropertyUpdateResponse> {
    return this._client.post(path`/crm/v3/properties/${objectType}`, { body, ...options });
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
}

export interface CRMOption {
  hidden: boolean;

  label: string;

  value: string;

  displayOrder?: number;
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

export interface CRMProperty {
  fieldType: string;

  groupName: string;

  label: string;

  name: string;

  options: Array<CRMOption>;

  type: string;

  archived?: boolean;

  archivedAt?: string;

  calculated?: boolean;

  calculationFormula?: string;

  createdAt?: string;

  createdUserId?: string;

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';

  displayOrder?: number;

  externalOptions?: boolean;

  formField?: boolean;

  hasUniqueValue?: boolean;

  hidden?: boolean;

  hubspotDefined?: boolean;

  modificationMetadata?: CRMProperty.ModificationMetadata;

  referencedObjectType?: string;

  sensitiveDataCategories?: Array<string>;

  showCurrencySymbol?: boolean;

  updatedAt?: string;

  updatedUserId?: string;
}

export namespace CRMProperty {
  export interface ModificationMetadata {
    archivable: boolean;

    readOnlyDefinition: boolean;

    readOnlyValue: boolean;

    readOnlyOptions?: boolean;
  }
}

export interface PropertyRetrieveResponse {
  results: Array<CRMProperty>;

  paging?: DailyAPI.Paging;
}

export interface PropertyUpdateResponse {
  createdResourceId: string;

  entity: CRMProperty;

  location?: string;
}

export interface PropertyRetrieveParams {
  archived?: boolean;

  properties?: string;
}

export interface PropertyUpdateParams {
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

export interface PropertyDeleteParams {
  objectType: string;
}

Properties.Batch = Batch;
Properties.Groups = Groups;

export declare namespace Properties {
  export {
    type CRMOption as CRMOption,
    type CRMPropertiesOptionInput as CRMPropertiesOptionInput,
    type CRMPropertiesPropertyCreate as CRMPropertiesPropertyCreate,
    type CRMProperty as CRMProperty,
    type PropertyRetrieveResponse as PropertyRetrieveResponse,
    type PropertyUpdateResponse as PropertyUpdateResponse,
    type PropertyRetrieveParams as PropertyRetrieveParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
  };

  export {
    Batch as Batch,
    type CRMPropertiesBatchResponseProperty as CRMPropertiesBatchResponseProperty,
    type CRMPropertiesPropertyName as CRMPropertiesPropertyName,
    type BatchCreateParams as BatchCreateParams,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchReadParams as BatchReadParams,
  };

  export {
    Groups as Groups,
    type CRMPropertiesPropertyGroup as CRMPropertiesPropertyGroup,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupRetrieveParams as GroupRetrieveParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupDeleteParams as GroupDeleteParams,
  };
}
