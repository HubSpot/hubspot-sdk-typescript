// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssociationsAPI from './associations';
import {
  AssociationCreateParams,
  AssociationDeleteParams,
  Associations,
  CRMAssociationDefinition,
} from './associations';
import * as PropertiesAPI from '../../../crm/v3/properties/properties';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Schemas extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);

  /**
   * Create a new schema
   */
  create(body: SchemaCreateParams, options?: RequestOptions): APIPromise<CRMObjectSchema> {
    return this._client.post('/crm-object-schemas/v3/schemas', { body, ...options });
  }

  /**
   * Get an existing schema
   */
  retrieve(objectType: string, options?: RequestOptions): APIPromise<CRMObjectSchema> {
    return this._client.get(path`/crm-object-schemas/v3/schemas/${objectType}`, options);
  }

  /**
   * Update a schema
   */
  update(
    objectType: string,
    body: SchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SchemaUpdateResponse> {
    return this._client.patch(path`/crm-object-schemas/v3/schemas/${objectType}`, { body, ...options });
  }

  /**
   * Get all schemas
   */
  list(
    query: SchemaListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SchemaListResponse> {
    return this._client.get('/crm-object-schemas/v3/schemas', { query, ...options });
  }

  /**
   * Delete a schema
   */
  delete(
    objectType: string,
    params: SchemaDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/crm-object-schemas/v3/schemas/${objectType}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CRMObjectSchema {
  id: string;

  associations: Array<AssociationsAPI.CRMAssociationDefinition>;

  labels: CRMObjectTypeDefinitionLabels;

  name: string;

  properties: Array<PropertiesAPI.CRMProperty>;

  requiredProperties: Array<string>;

  archived?: boolean;

  createdAt?: string;

  createdByUserId?: number;

  fullyQualifiedName?: string;

  objectTypeId?: string;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;

  updatedAt?: string;

  updatedByUserId?: number;
}

export interface CRMObjectTypeDefinitionLabels {
  plural?: string;

  singular?: string;
}

export interface SchemaUpdateResponse {
  id: string;

  labels: CRMObjectTypeDefinitionLabels;

  name: string;

  requiredProperties: Array<string>;

  archived?: boolean;

  createdAt?: string;

  fullyQualifiedName?: string;

  objectTypeId?: string;

  portalId?: number;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;

  updatedAt?: string;
}

export interface SchemaListResponse {
  results: Array<CRMObjectSchema>;
}

export interface SchemaCreateParams {
  associatedObjects: Array<string>;

  labels: CRMObjectTypeDefinitionLabels;

  name: string;

  properties: Array<SchemaCreateParams.Property>;

  requiredProperties: Array<string>;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export namespace SchemaCreateParams {
  export interface Property {
    fieldType: string;

    label: string;

    name: string;

    type: 'string' | 'number' | 'date' | 'datetime' | 'enumeration' | 'bool';

    displayOrder?: number;

    formField?: boolean;

    groupName?: string;

    hasUniqueValue?: boolean;

    hidden?: boolean;

    numberDisplayHint?: 'unformatted' | 'formatted' | 'currency' | 'percentage' | 'duration' | 'probability';

    options?: Array<PropertiesAPI.CRMPropertiesOptionInput>;

    optionSortStrategy?: 'DISPLAY_ORDER' | 'ALPHABETICAL';

    referencedObjectType?: string;

    searchableInGlobalSearch?: boolean;

    showCurrencySymbol?: boolean;

    textDisplayHint?:
      | 'unformatted_single_line'
      | 'multi_line'
      | 'email'
      | 'phone_number'
      | 'domain_name'
      | 'ip_address'
      | 'physical_address'
      | 'postal_code';
  }
}

export interface SchemaUpdateParams {
  clearDescription?: boolean;

  labels?: CRMObjectTypeDefinitionLabels;

  primaryDisplayProperty?: string;

  requiredProperties?: Array<string>;

  restorable?: boolean;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface SchemaListParams {
  archived?: boolean;
}

export interface SchemaDeleteParams {
  archived?: boolean;
}

Schemas.Associations = Associations;

export declare namespace Schemas {
  export {
    type CRMObjectSchema as CRMObjectSchema,
    type CRMObjectTypeDefinitionLabels as CRMObjectTypeDefinitionLabels,
    type SchemaUpdateResponse as SchemaUpdateResponse,
    type SchemaListResponse as SchemaListResponse,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
  };

  export {
    Associations as Associations,
    type CRMAssociationDefinition as CRMAssociationDefinition,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationDeleteParams as AssociationDeleteParams,
  };
}
