// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CRMAPI from '../crm';
import * as PropertiesAPI from '../properties';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Schemas extends APIResource {
  /**
   * Create a new schema
   */
  create(body: SchemaCreateParams, options?: RequestOptions): APIPromise<ObjectSchema> {
    return this._client.post('/crm-object-schemas/v3/schemas', { body, ...options });
  }

  /**
   * Update a schema
   */
  update(
    objectType: string,
    body: SchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectTypeDefinition> {
    return this._client.patch(path`/crm-object-schemas/v3/schemas/${objectType}`, { body, ...options });
  }

  /**
   * Get all schemas
   */
  list(
    query: SchemaListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseObjectSchemaNoPaging> {
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

  /**
   * Remove an association
   */
  archiveAssociation(
    associationIdentifier: string,
    params: SchemaArchiveAssociationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(
      path`/crm-object-schemas/v3/schemas/${objectType}/associations/${associationIdentifier}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Create an association
   */
  createAssociation(
    objectType: string,
    body: SchemaCreateAssociationParams,
    options?: RequestOptions,
  ): APIPromise<AssociationDefinition> {
    return this._client.post(path`/crm-object-schemas/v3/schemas/${objectType}/associations`, {
      body,
      ...options,
    });
  }

  /**
   * Get an existing schema
   */
  read(objectType: string, options?: RequestOptions): APIPromise<ObjectSchema> {
    return this._client.get(path`/crm-object-schemas/v3/schemas/${objectType}`, options);
  }
}

export interface AssociationDefinition {
  id: string;

  fromObjectTypeId: string;

  toObjectTypeId: string;

  createdAt?: string;

  name?: string;

  updatedAt?: string;
}

export interface AssociationDefinitionEgg {
  fromObjectTypeId: string;

  toObjectTypeId: string;

  name?: string;
}

export interface CollectionResponseObjectSchemaNoPaging {
  results: Array<ObjectSchema>;
}

export interface ObjectSchema {
  id: string;

  associations: Array<AssociationDefinition>;

  labels: ObjectTypeDefinitionLabels;

  name: string;

  properties: Array<CRMAPI.Property>;

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

export interface ObjectSchemaEgg {
  associatedObjects: Array<string>;

  labels: ObjectTypeDefinitionLabels;

  name: string;

  properties: Array<ObjectTypePropertyCreate>;

  requiredProperties: Array<string>;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface ObjectTypeDefinition {
  id: string;

  labels: ObjectTypeDefinitionLabels;

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

export interface ObjectTypeDefinitionLabels {
  plural?: string;

  singular?: string;
}

export interface ObjectTypeDefinitionPatch {
  clearDescription?: boolean;

  labels?: ObjectTypeDefinitionLabels;

  primaryDisplayProperty?: string;

  requiredProperties?: Array<string>;

  restorable?: boolean;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface ObjectTypePropertyCreate {
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

export interface OptionInput {
  displayOrder: number;

  hidden: boolean;

  label: string;

  value: string;
}

export interface SchemaCreateParams {
  associatedObjects: Array<string>;

  labels: ObjectTypeDefinitionLabels;

  name: string;

  properties: Array<ObjectTypePropertyCreate>;

  requiredProperties: Array<string>;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface SchemaUpdateParams {
  clearDescription?: boolean;

  labels?: ObjectTypeDefinitionLabels;

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

export interface SchemaArchiveAssociationParams {
  objectType: string;
}

export interface SchemaCreateAssociationParams {
  fromObjectTypeId: string;

  toObjectTypeId: string;

  name?: string;
}

export declare namespace Schemas {
  export {
    type AssociationDefinition as AssociationDefinition,
    type AssociationDefinitionEgg as AssociationDefinitionEgg,
    type CollectionResponseObjectSchemaNoPaging as CollectionResponseObjectSchemaNoPaging,
    type ObjectSchema as ObjectSchema,
    type ObjectSchemaEgg as ObjectSchemaEgg,
    type ObjectTypeDefinition as ObjectTypeDefinition,
    type ObjectTypeDefinitionLabels as ObjectTypeDefinitionLabels,
    type ObjectTypeDefinitionPatch as ObjectTypeDefinitionPatch,
    type ObjectTypePropertyCreate as ObjectTypePropertyCreate,
    type OptionInput as OptionInput,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
    type SchemaArchiveAssociationParams as SchemaArchiveAssociationParams,
    type SchemaCreateAssociationParams as SchemaCreateAssociationParams,
  };
}
