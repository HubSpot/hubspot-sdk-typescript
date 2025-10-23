// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CRMAPI from '../crm';
import * as PropertiesAPI from '../properties/properties';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Schemas extends APIResource {
  /**
   * Define a new object schema, along with custom properties and associations. The
   * entire object schema, including its object type ID, properties, and associations
   * will be returned in the response.
   *
   * @example
   * ```ts
   * const objectSchema =
   *   await client.crm.objects.schemas.create({
   *     associatedObjects: ['CONTACT'],
   *     labels: {},
   *     name: 'my_object',
   *     properties: [
   *       {
   *         fieldType: 'select',
   *         label: 'My object property',
   *         name: 'my_object_property',
   *         type: 'enumeration',
   *       },
   *     ],
   *     requiredProperties: ['my_object_property'],
   *   });
   * ```
   */
  create(body: SchemaCreateParams, options?: RequestOptions): APIPromise<ObjectSchema> {
    return this._client.post('/crm-object-schemas/v3/schemas', { body, ...options });
  }

  /**
   * Update the details for an existing object schema.
   *
   * @example
   * ```ts
   * const objectTypeDefinition =
   *   await client.crm.objects.schemas.update('objectType');
   * ```
   */
  update(
    objectType: string,
    body: SchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectTypeDefinition> {
    return this._client.patch(path`/crm-object-schemas/v3/schemas/${objectType}`, { body, ...options });
  }

  /**
   * Returns all object schemas that have been defined for your account.
   *
   * @example
   * ```ts
   * const collectionResponseObjectSchemaNoPaging =
   *   await client.crm.objects.schemas.list();
   * ```
   */
  list(
    query: SchemaListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseObjectSchemaNoPaging> {
    return this._client.get('/crm-object-schemas/v3/schemas', { query, ...options });
  }

  /**
   * Deletes a schema. Any existing records of this schema must be deleted **first**.
   * Otherwise this call will fail.
   *
   * @example
   * ```ts
   * await client.crm.objects.schemas.delete('objectType');
   * ```
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
   * Removes an existing association from a schema.
   *
   * @example
   * ```ts
   * await client.crm.objects.schemas.archiveAssociation(
   *   'associationIdentifier',
   *   { objectType: 'objectType' },
   * );
   * ```
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
   * Defines a new association between the primary schema's object type and other
   * object types.
   *
   * @example
   * ```ts
   * const associationDefinition =
   *   await client.crm.objects.schemas.createAssociation(
   *     'objectType',
   *     {
   *       fromObjectTypeId: '2-123456',
   *       toObjectTypeId: 'contact',
   *     },
   *   );
   * ```
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
   * Returns an existing object schema.
   *
   * @example
   * ```ts
   * const objectSchema = await client.crm.objects.schemas.read(
   *   'objectType',
   * );
   * ```
   */
  read(objectType: string, options?: RequestOptions): APIPromise<ObjectSchema> {
    return this._client.get(path`/crm-object-schemas/v3/schemas/${objectType}`, options);
  }
}

/**
 * Defines an association between two object types.
 */
export interface AssociationDefinition {
  /**
   * A unique ID for this association.
   */
  id: string;

  /**
   * ID of the primary object type to link from.
   */
  fromObjectTypeId: string;

  /**
   * ID of the target object type to link to.
   */
  toObjectTypeId: string;

  /**
   * When the association was defined.
   */
  createdAt?: string;

  /**
   * A unique name for this association.
   */
  name?: string;

  /**
   * When the association was last updated.
   */
  updatedAt?: string;
}

/**
 * Defines an association between two object types.
 */
export interface AssociationDefinitionEgg {
  /**
   * ID of the primary object type to link from.
   */
  fromObjectTypeId: string;

  /**
   * ID of the target object type to link to.
   */
  toObjectTypeId: string;

  /**
   * A unique name for this association.
   */
  name?: string;
}

export interface CollectionResponseObjectSchemaNoPaging {
  results: Array<ObjectSchema>;
}

/**
 * Defines an object schema, including its properties and associations.
 */
export interface ObjectSchema {
  /**
   * A unique ID for this schema's object type. Will be defined as
   * {meta-type}-{unique ID}.
   */
  id: string;

  /**
   * Associations defined for a given object type.
   */
  associations: Array<AssociationDefinition>;

  /**
   * Singular and plural labels for the object. Used in CRM display.
   */
  labels: ObjectTypeDefinitionLabels;

  /**
   * A unique name for the schema's object type.
   */
  name: string;

  /**
   * Properties defined for this object type.
   */
  properties: Array<CRMAPI.Property>;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties: Array<string>;

  archived?: boolean;

  /**
   * When the object schema was created.
   */
  createdAt?: string;

  createdByUserId?: number;

  description?: string;

  /**
   * An assigned unique ID for the object, including portal ID and object name.
   */
  fullyQualifiedName?: string;

  objectTypeId?: string;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;

  /**
   * When the object schema was last updated.
   */
  updatedAt?: string;

  updatedByUserId?: number;
}

/**
 * Defines a new object type, its properties, and associations.
 */
export interface ObjectSchemaEgg {
  /**
   * Associations defined for this object type.
   */
  associatedObjects: Array<string>;

  /**
   * Singular and plural labels for the object. Used in CRM display.
   */
  labels: ObjectTypeDefinitionLabels;

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

  description?: string;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;
}

/**
 * Defines an object type.
 */
export interface ObjectTypeDefinition {
  /**
   * A unique ID for this object type. Will be defined as {meta-type}-{unique ID}.
   */
  id: string;

  /**
   * Singular and plural labels for the object. Used in CRM display.
   */
  labels: ObjectTypeDefinitionLabels;

  /**
   * A unique name for this object. For internal use only.
   */
  name: string;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties: Array<string>;

  archived?: boolean;

  /**
   * When the object type was created.
   */
  createdAt?: string;

  description?: string;

  fullyQualifiedName?: string;

  objectTypeId?: string;

  /**
   * The ID of the account that this object type is specific to.
   */
  portalId?: number;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;

  /**
   * When the object type was last updated.
   */
  updatedAt?: string;
}

/**
 * Singular and plural labels for the object. Used in CRM display.
 */
export interface ObjectTypeDefinitionLabels {
  /**
   * The word for multiple objects. (There’s no way to change this later.)
   */
  plural?: string;

  /**
   * The word for one object. (There’s no way to change this later.)
   */
  singular?: string;
}

/**
 * Defines attributes to update on an object type.
 */
export interface ObjectTypeDefinitionPatch {
  clearDescription?: boolean;

  description?: string;

  /**
   * Singular and plural labels for the object. Used in CRM display.
   */
  labels?: ObjectTypeDefinitionLabels;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties?: Array<string>;

  restorable?: boolean;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;
}

/**
 * Defines a property to create.
 */
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
  type: 'string' | 'number' | 'date' | 'datetime' | 'enumeration' | 'bool';

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

  hidden?: boolean;

  /**
   * Controls how numeric properties are formatted in the HubSpot UI
   */
  numberDisplayHint?: 'unformatted' | 'formatted' | 'currency' | 'percentage' | 'duration' | 'probability';

  /**
   * A list of available options for the property. This field is only required for
   * enumerated properties.
   */
  options?: Array<PropertiesAPI.OptionInput>;

  /**
   * Controls how the property options will be sorted in the HubSpot UI.
   */
  optionSortStrategy?: 'DISPLAY_ORDER' | 'ALPHABETICAL';

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
    | 'unformatted_single_line'
    | 'multi_line'
    | 'email'
    | 'phone_number'
    | 'domain_name'
    | 'ip_address'
    | 'physical_address'
    | 'postal_code';
}

/**
 * Defines a enumeration property option
 */
export interface OptionInput {
  /**
   * Options are shown in order starting with the lowest positive integer value.
   * Values of -1 will cause the option to be displayed after any positive values.
   */
  displayOrder: number;

  /**
   * Hidden options won't be shown in HubSpot.
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
}

export interface SchemaCreateParams {
  /**
   * Associations defined for this object type.
   */
  associatedObjects: Array<string>;

  /**
   * Singular and plural labels for the object. Used in CRM display.
   */
  labels: ObjectTypeDefinitionLabels;

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

  description?: string;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;
}

export interface SchemaUpdateParams {
  clearDescription?: boolean;

  description?: string;

  /**
   * Singular and plural labels for the object. Used in CRM display.
   */
  labels?: ObjectTypeDefinitionLabels;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties?: Array<string>;

  restorable?: boolean;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;
}

export interface SchemaListParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface SchemaDeleteParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface SchemaArchiveAssociationParams {
  /**
   * Fully qualified name or object type ID of your schema.
   */
  objectType: string;
}

export interface SchemaCreateAssociationParams {
  /**
   * ID of the primary object type to link from.
   */
  fromObjectTypeId: string;

  /**
   * ID of the target object type to link to.
   */
  toObjectTypeId: string;

  /**
   * A unique name for this association.
   */
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
