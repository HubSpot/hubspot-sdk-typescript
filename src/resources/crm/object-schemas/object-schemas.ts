// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as BatchAPI from './batch';
import { BaseBatch, Batch, BatchGetParams } from './batch';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseObjectSchemas extends APIResource {
  static override readonly _key: readonly ['crm', 'objectSchemas'] = Object.freeze([
    'crm',
    'objectSchemas',
  ] as const);

  /**
   * Create a new custom object schema by defining its properties and associations.
   */
  create(body: ObjectSchemaCreateParams, options?: RequestOptions): APIPromise<ObjectSchema> {
    return this._client.post('/crm-object-schemas/2026-03/schemas', { body, ...options });
  }

  /**
   * Update attributes of a custom object schema, such as properties and labels,
   * using the object type ID or fully qualified name.
   */
  update(
    objectType: string,
    body: ObjectSchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ObjectTypeDefinition> {
    return this._client.patch(path`/crm-object-schemas/2026-03/schemas/${objectType}`, { body, ...options });
  }

  /**
   * Retrieve all custom object schemas, with options to include property
   * definitions, association definitions, and audit metadata.
   */
  list(
    query: ObjectSchemaListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseObjectSchemaNoPaging> {
    return this._client.get('/crm-object-schemas/2026-03/schemas', { query, ...options });
  }

  /**
   * Remove a custom object schema from the account using its object type ID or fully
   * qualified name.
   */
  delete(
    objectType: string,
    params: ObjectSchemaDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/crm-object-schemas/2026-03/schemas/${objectType}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new association between the specified object type and another object
   * type. This operation requires the definition of the association attributes, such
   * as the primary and target object type IDs.
   */
  createAssociation(
    objectType: string,
    body: ObjectSchemaCreateAssociationParams,
    options?: RequestOptions,
  ): APIPromise<Shared.AssociationDefinition> {
    return this._client.post(path`/crm-object-schemas/2026-03/schemas/${objectType}/associations`, {
      body,
      ...options,
    });
  }

  /**
   * Remove an association between two object types identified by the association
   * identifier and object type. This operation is irreversible and will permanently
   * delete the specified association.
   */
  deleteAssociation(
    associationIdentifier: string,
    params: ObjectSchemaDeleteAssociationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(
      path`/crm-object-schemas/2026-03/schemas/${objectType}/associations/${associationIdentifier}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Retrieve details of a custom object schema, including its properties and
   * associations, using the object type ID or fully qualified name.
   */
  get(
    objectType: string,
    query: ObjectSchemaGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectSchema> {
    return this._client.get(path`/crm-object-schemas/2026-03/schemas/${objectType}`, { query, ...options });
  }
}
export class ObjectSchemas extends BaseObjectSchemas {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

export interface CollectionResponseObjectSchemaNoPaging {
  results: Array<ObjectSchema>;
}

export interface ObjectSchema {
  /**
   * A unique ID for this schema's object type. Will be defined as
   * {meta-type}-{unique ID}.
   */
  id: string;

  allowsSensitiveProperties: boolean;

  archived: boolean;

  /**
   * Associations defined for a given object type.
   */
  associations: Array<Shared.AssociationDefinition>;

  /**
   * An assigned unique ID for the object, including portal ID and object name.
   */
  fullyQualifiedName: string;

  labels: Shared.ObjectTypeDefinitionLabels;

  /**
   * A unique name for the schema's object type.
   */
  name: string;

  objectTypeId: string;

  /**
   * Properties defined for this object type.
   */
  properties: Array<Shared.Property>;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties: Array<string>;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties: Array<string>;

  /**
   * When the object schema was created.
   */
  createdAt?: string;

  createdByUserId?: number;

  description?: string;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * When the object schema was last updated.
   */
  updatedAt?: string;

  updatedByUserId?: number;
}

export interface ObjectSchemaBatchReadRequest {
  /**
   * Indicates whether to include association definitions in the response.
   */
  includeAssociationDefinitions: boolean;

  /**
   * Indicates whether to include audit metadata in the response.
   */
  includeAuditMetadata: boolean;

  /**
   * Indicates whether to include property definitions in the response.
   */
  includePropertyDefinitions: boolean;

  inputs: Array<string>;
}

export interface ObjectSchemaEgg {
  /**
   * Determines if the object type can include properties that are marked as
   * sensitive.
   */
  allowsSensitiveProperties: boolean;

  /**
   * Associations defined for this object type.
   */
  associatedObjects: Array<string>;

  labels: Shared.ObjectTypeDefinitionLabels;

  /**
   * A unique name for this object. For internal use only.
   */
  name: string;

  /**
   * Properties defined for this object type.
   */
  properties: Array<ObjectTypePropertyCreate>;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties: Array<string>;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties: Array<string>;

  /**
   * A brief explanation of the object type.
   */
  description?: string;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;
}

export interface ObjectTypePropertyCreate {
  /**
   * Controls how the property appears in HubSpot.
   */
  fieldType: string;

  /**
   * A human-readable property label that will be shown in HubSpot.
   */
  label: string;

  /**
   * The internal property name, which must be used when referencing the property
   * from the API.
   */
  name: string;

  /**
   * The data type of the property.
   */
  type: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';

  /**
   * A description of the property that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * The order that this property should be displayed in the HubSpot UI relative to
   * other properties for this object type. Properties are displayed in order
   * starting with the lowest positive integer value. A value of -1 will cause the
   * property to be displayed **after** any positive values.
   */
  displayOrder?: number;

  /**
   * Specifies the reference type for external options associated with the property.
   */
  externalOptionsReferenceType?: string;

  /**
   * Whether the property can be used in a HubSpot form.
   */
  formField?: boolean;

  /**
   * The name of the group this property belongs to.
   */
  groupName?: string;

  /**
   * Whether or not the property's value must be unique. Once set, this can't be
   * changed.
   */
  hasUniqueValue?: boolean;

  /**
   * Hidden options won't be shown in HubSpot.
   */
  hidden?: boolean;

  /**
   * Controls how numeric properties are formatted in the HubSpot UI
   */
  numberDisplayHint?: 'currency' | 'duration' | 'formatted' | 'percentage' | 'probability' | 'unformatted';

  /**
   * A list of available options for the property. This field is only required for
   * enumerated properties.
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Controls how the property options will be sorted in the HubSpot UI.
   */
  optionSortStrategy?: 'ALPHABETICAL' | 'DISPLAY_ORDER';

  /**
   * Defines the options this property will return, e.g. OWNER would return name of
   * users on the portal.
   */
  referencedObjectType?: string;

  /**
   * Allow users to search for information entered to this field (limited to 3
   * properties)
   */
  searchableInGlobalSearch?: boolean;

  /**
   * Whether the property will display the currency symbol in the HubSpot UI.
   */
  showCurrencySymbol?: boolean;

  /**
   * Controls how text properties are formatted in the HubSpot UI
   */
  textDisplayHint?:
    | 'domain_name'
    | 'email'
    | 'ip_address'
    | 'multi_line'
    | 'phone_number'
    | 'physical_address'
    | 'postal_code'
    | 'unformatted_single_line';
}

export interface ObjectSchemaCreateParams {
  /**
   * Determines if the object type can include properties that are marked as
   * sensitive.
   */
  allowsSensitiveProperties: boolean;

  /**
   * Associations defined for this object type.
   */
  associatedObjects: Array<string>;

  labels: Shared.ObjectTypeDefinitionLabels;

  /**
   * A unique name for this object. For internal use only.
   */
  name: string;

  /**
   * Properties defined for this object type.
   */
  properties: Array<ObjectTypePropertyCreate>;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties: Array<string>;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties: Array<string>;

  /**
   * A brief explanation of the object type.
   */
  description?: string;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;
}

export interface ObjectSchemaUpdateParams {
  clearDescription: boolean;

  allowsSensitiveProperties?: boolean;

  description?: string;

  labels?: Shared.ObjectTypeDefinitionLabels;

  primaryDisplayProperty?: string;

  requiredProperties?: Array<string>;

  restorable?: boolean;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface ObjectSchemaListParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  includeAssociationDefinitions?: boolean;

  includeAuditMetadata?: boolean;

  includePropertyDefinitions?: boolean;
}

export interface ObjectSchemaDeleteParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface ObjectSchemaCreateAssociationParams {
  fromObjectTypeId: string;

  toObjectTypeId: string;

  name?: string;
}

export interface ObjectSchemaDeleteAssociationParams {
  objectType: string;
}

export interface ObjectSchemaGetParams {
  includeAssociationDefinitions?: boolean;

  includeAuditMetadata?: boolean;

  includePropertyDefinitions?: boolean;
}

ObjectSchemas.Batch = Batch;
ObjectSchemas.BaseBatch = BaseBatch;

export declare namespace ObjectSchemas {
  export {
    type CollectionResponseObjectSchemaNoPaging as CollectionResponseObjectSchemaNoPaging,
    type ObjectSchema as ObjectSchema,
    type ObjectSchemaBatchReadRequest as ObjectSchemaBatchReadRequest,
    type ObjectSchemaEgg as ObjectSchemaEgg,
    type ObjectTypePropertyCreate as ObjectTypePropertyCreate,
    type ObjectSchemaCreateParams as ObjectSchemaCreateParams,
    type ObjectSchemaUpdateParams as ObjectSchemaUpdateParams,
    type ObjectSchemaListParams as ObjectSchemaListParams,
    type ObjectSchemaDeleteParams as ObjectSchemaDeleteParams,
    type ObjectSchemaCreateAssociationParams as ObjectSchemaCreateAssociationParams,
    type ObjectSchemaDeleteAssociationParams as ObjectSchemaDeleteAssociationParams,
    type ObjectSchemaGetParams as ObjectSchemaGetParams,
  };

  export { Batch as Batch, BaseBatch as BaseBatch, type BatchGetParams as BatchGetParams };
}
