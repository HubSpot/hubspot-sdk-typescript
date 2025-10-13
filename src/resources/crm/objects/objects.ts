// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../crm';
import * as EmailsAPI from '../../marketing/emails';
import * as CompaniesAPI from './companies';
import {
  Companies,
  CompanyCreateParams,
  CompanyDeleteParams,
  CompanyListParams,
  CompanyMergeParams,
  CompanyReadParams,
  CompanySearchParams,
  CompanyUpdateParams,
  CompanyUpsertParams,
} from './companies';
import * as SchemasAPI from './schemas';
import {
  AssociationDefinition,
  AssociationDefinitionEgg,
  CollectionResponseObjectSchemaNoPaging,
  ObjectSchema,
  ObjectSchemaEgg,
  ObjectTypeDefinition,
  ObjectTypeDefinitionLabels,
  ObjectTypeDefinitionPatch,
  ObjectTypePropertyCreate,
  OptionInput,
  SchemaArchiveAssociationParams,
  SchemaCreateAssociationParams,
  SchemaCreateParams,
  SchemaDeleteParams,
  SchemaListParams,
  SchemaUpdateParams,
  Schemas,
} from './schemas';
import * as ContactsAPI from './contacts/contacts';
import {
  ContactCreateParams,
  ContactListParams,
  ContactMergeParams,
  ContactPurgeParams,
  ContactReadParams,
  ContactSearchParams,
  ContactUpdateParams,
  Contacts,
} from './contacts/contacts';
import * as DealsAPI from './deals/deals';
import {
  DealCreateParams,
  DealListParams,
  DealMergeParams,
  DealReadParams,
  DealSearchParams,
  DealUpdateParams,
  DealUpsertParams,
  Deals,
} from './deals/deals';
import { Page } from '../../../core/pagination';

export class Objects extends APIResource {
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  deals: DealsAPI.Deals = new DealsAPI.Deals(this._client);
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
}

export type SimplePublicObjectWithAssociationsPage = Page<SimplePublicObjectWithAssociations>;

export interface BatchInputSimplePublicObjectBatchInput {
  inputs: Array<SimplePublicObjectBatchInput>;
}

export interface BatchInputSimplePublicObjectBatchInputForCreate {
  inputs: Array<SimplePublicObjectBatchInputForCreate>;
}

export interface BatchInputSimplePublicObjectBatchInputUpsert {
  inputs: Array<SimplePublicObjectBatchInputUpsert>;
}

export interface BatchInputSimplePublicObjectID {
  inputs: Array<SimplePublicObjectID>;
}

/**
 * Specifies the input for reading a batch of CRM objects, including arrays of
 * object IDs, requested property names (with optional history), and an optional
 * unique identifying property.
 */
export interface BatchReadInputSimplePublicObjectID {
  inputs: Array<SimplePublicObjectID>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: Array<string>;

  /**
   * Key-value pairs for setting properties for the new object and their histories.
   */
  propertiesWithHistory: Array<string>;

  /**
   * When using a custom unique value property to retrieve records, the name of the
   * property. Do not include this parameter if retrieving by record ID.
   */
  idProperty?: string;
}

/**
 * A public object batch response object
 */
export interface BatchResponseSimplePublicObject {
  /**
   * The timestamp when the batch processing was completed, in ISO 8601 format.
   */
  completedAt: string;

  results: Array<SimplePublicObject>;

  /**
   * The timestamp when the batch processing began, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request: "PENDING", "PROCESSING",
   * "CANCELLED", or "COMPLETE"
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  numErrors?: number;

  /**
   * The timestamp when the batch request was initially made, in ISO 8601 format.
   */
  requestedAt?: string;
}

/**
 * Represents the result of a batch upsert operation, including the operation’s
 * status, timestamps, and a list of successfully created or updated objects.
 */
export interface BatchResponseSimplePublicUpsertObject {
  /**
   * The timestamp when the batch process was completed, in ISO 8601 format.
   */
  completedAt: string;

  results: Array<SimplePublicUpsertObject>;

  /**
   * The timestamp when the batch process began execution, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request. Can be: "PENDING", "PROCESSING",
   * "CANCELED", or "COMPLETE".
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  numErrors?: number;

  /**
   * The timestamp when the batch process was initiated, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface CollectionResponseAssociatedID {
  results: Array<CRMAPI.AssociatedID>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface CollectionResponseSimplePublicObjectWithAssociations {
  results: Array<SimplePublicObjectWithAssociations>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface CollectionResponseWithTotalSimplePublicObject {
  results: Array<SimplePublicObject>;

  /**
   * The number of available results
   */
  total: number;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface CreatedResponseSimplePublicObject {
  createdResourceId: string;

  /**
   * A simple public object.
   */
  entity: SimplePublicObject;

  location?: string;
}

/**
 * Defines a single condition for searching CRM objects, specifying the property to
 * filter on, the operator to use (such as equals, greater than, or contains), and
 * the value(s) to compare against.
 */
export interface Filter {
  /**
   * null
   */
  operator:
    | 'EQ'
    | 'NEQ'
    | 'LT'
    | 'LTE'
    | 'GT'
    | 'GTE'
    | 'BETWEEN'
    | 'IN'
    | 'NOT_IN'
    | 'HAS_PROPERTY'
    | 'NOT_HAS_PROPERTY'
    | 'CONTAINS_TOKEN'
    | 'NOT_CONTAINS_TOKEN';

  /**
   * The name of the property to apply the filter to.
   */
  propertyName: string;

  /**
   * The upper boundary value when using ranged-based filters.
   */
  highValue?: string;

  /**
   * The value to match against the property.
   */
  value?: string;

  /**
   * The values to match against the property.
   */
  values?: Array<string>;
}

export interface FilterGroup {
  filters: Array<Filter>;
}

export interface PublicAssociationsForObject {
  to: Shared.PublicObjectID;

  types: Array<Shared.AssociationSpec>;
}

export interface PublicGdprDeleteInput {
  /**
   * The ID of the company to delete.
   */
  objectId: string;

  /**
   * The name of a unique property, when identifying records by property instead of
   * ID.
   */
  idProperty?: string;
}

export interface PublicMergeInput {
  /**
   * The ID of the company to merge into the primary.
   */
  objectIdToMerge: string;

  /**
   * The ID of the primary company, which the other will merge into.
   */
  primaryObjectId: string;
}

/**
 * Describes a search request
 */
export interface PublicObjectSearchRequest {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after?: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups?: Array<FilterGroup>;

  /**
   * The maximum results to return, up to 200 objects.
   */
  limit?: number;

  /**
   * A list of property names to include in the response.
   */
  properties?: Array<string>;

  /**
   * The search query string, up to 3000 characters.
   */
  query?: string;

  /**
   * Specifies sorting order based on object properties.
   */
  sorts?: Array<string>;
}

/**
 * A simple public object.
 */
export interface SimplePublicObject {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * The timestamp when the object was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * Key-value pairs representing the properties of the object.
   */
  properties: { [key: string]: string | null };

  /**
   * The timestamp when the object was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * Whether the object is archived.
   */
  archived?: boolean;

  /**
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };
}

/**
 * Contains an array of CRM object records to be processed in a batch operation,
 * each defined by their ID and properties.
 */
export interface SimplePublicObjectBatchInput {
  /**
   * The ID to be updated. This can be the object ID, or the unique property value of
   * the `idProperty` property.
   */
  id: string;

  /**
   * The company property values to set.
   */
  properties: { [key: string]: string };

  /**
   * The name of a property whose values are unique for this object
   */
  idProperty?: string;

  /**
   * In each input object, set this field to a unique ID value to enable more
   * granular debugging for error responses. Learn more about
   * [multi-status errors](https://developers.hubspot.com/docs/reference/api/other-resources/error-handling#multi-status-errors).
   */
  objectWriteTraceId?: string;
}

export interface SimplePublicObjectBatchInputForCreate {
  properties: { [key: string]: string };

  associations?: Array<PublicAssociationsForObject>;

  objectWriteTraceId?: string;
}

/**
 * Represents an object used in batch upsert operations, containing an object’s
 * unique identifier, its properties, and optionally the unique property name and a
 * write trace ID.
 */
export interface SimplePublicObjectBatchInputUpsert {
  /**
   * The ID of the company to update.
   */
  id: string;

  /**
   * The company property values to set.
   */
  properties: { [key: string]: string };

  /**
   * The name of a property whose values are unique for this object
   */
  idProperty?: string;

  /**
   * In each input object, set this field to a unique ID value to enable more
   * granular debugging for error responses. Learn more about
   * [multi-status errors](https://developers.hubspot.com/docs/reference/api/other-resources/error-handling#multi-status-errors).
   */
  objectWriteTraceId?: string;
}

export interface SimplePublicObjectID {
  id: string;
}

/**
 * Represents the input required to create or update a CRM object, containing an
 * object with property names and their corresponding values.
 */
export interface SimplePublicObjectInput {
  /**
   * The company property values to set.
   */
  properties: { [key: string]: string };
}

/**
 * Is the input object used to create a new CRM object, containing the properties
 * to be set and optional associations to link the new record with other CRM
 * objects.
 */
export interface SimplePublicObjectInputForCreate {
  /**
   * The company property values to set.
   */
  properties: { [key: string]: string };

  associations?: Array<PublicAssociationsForObject>;
}

/**
 * Represents a CRM object along with its properties, timestamps, and a set of
 * associated object IDs grouped by association type.
 */
export interface SimplePublicObjectWithAssociations {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * The timestamp when the object was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string | null };

  /**
   * The timestamp when the object was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * Whether the object is archived.
   */
  archived?: boolean;

  /**
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  /**
   * A list defining relationships with other objects.
   */
  associations?: { [key: string]: CollectionResponseAssociatedID };

  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };
}

/**
 * Represents a CRM object that has either been created or updated (upserted)
 */
export interface SimplePublicUpsertObject {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * The timestamp when the object was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * Whether the property is new.
   */
  new: boolean;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * The timestamp when the object was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * Whether the object is archived.
   */
  archived?: boolean;

  /**
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };
}

/**
 * Property model that includes timestamp.
 */
export interface ValueWithTimestamp {
  /**
   * The property type.
   */
  sourceType: string;

  /**
   * The timestamp when the property was updated, in ISO 8601 format.
   */
  timestamp: string;

  /**
   * The property value.
   */
  value: string;

  /**
   * The unique ID of the property.
   */
  sourceId?: string;

  /**
   * A human-readable label.
   */
  sourceLabel?: string;

  /**
   * The ID of the user who last updated the property.
   */
  updatedByUserId?: number;
}

Objects.Companies = Companies;
Objects.Contacts = Contacts;
Objects.Deals = Deals;
Objects.Schemas = Schemas;

export declare namespace Objects {
  export {
    type BatchInputSimplePublicObjectBatchInput as BatchInputSimplePublicObjectBatchInput,
    type BatchInputSimplePublicObjectBatchInputForCreate as BatchInputSimplePublicObjectBatchInputForCreate,
    type BatchInputSimplePublicObjectBatchInputUpsert as BatchInputSimplePublicObjectBatchInputUpsert,
    type BatchInputSimplePublicObjectID as BatchInputSimplePublicObjectID,
    type BatchReadInputSimplePublicObjectID as BatchReadInputSimplePublicObjectID,
    type BatchResponseSimplePublicObject as BatchResponseSimplePublicObject,
    type BatchResponseSimplePublicUpsertObject as BatchResponseSimplePublicUpsertObject,
    type CollectionResponseAssociatedID as CollectionResponseAssociatedID,
    type CollectionResponseSimplePublicObjectWithAssociations as CollectionResponseSimplePublicObjectWithAssociations,
    type CollectionResponseWithTotalSimplePublicObject as CollectionResponseWithTotalSimplePublicObject,
    type CreatedResponseSimplePublicObject as CreatedResponseSimplePublicObject,
    type Filter as Filter,
    type FilterGroup as FilterGroup,
    type PublicAssociationsForObject as PublicAssociationsForObject,
    type PublicGdprDeleteInput as PublicGdprDeleteInput,
    type PublicMergeInput as PublicMergeInput,
    type PublicObjectSearchRequest as PublicObjectSearchRequest,
    type SimplePublicObject as SimplePublicObject,
    type SimplePublicObjectBatchInput as SimplePublicObjectBatchInput,
    type SimplePublicObjectBatchInputForCreate as SimplePublicObjectBatchInputForCreate,
    type SimplePublicObjectBatchInputUpsert as SimplePublicObjectBatchInputUpsert,
    type SimplePublicObjectID as SimplePublicObjectID,
    type SimplePublicObjectInput as SimplePublicObjectInput,
    type SimplePublicObjectInputForCreate as SimplePublicObjectInputForCreate,
    type SimplePublicObjectWithAssociations as SimplePublicObjectWithAssociations,
    type SimplePublicUpsertObject as SimplePublicUpsertObject,
    type ValueWithTimestamp as ValueWithTimestamp,
  };

  export {
    Companies as Companies,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyDeleteParams as CompanyDeleteParams,
    type CompanyMergeParams as CompanyMergeParams,
    type CompanyReadParams as CompanyReadParams,
    type CompanySearchParams as CompanySearchParams,
    type CompanyUpsertParams as CompanyUpsertParams,
  };

  export {
    Contacts as Contacts,
    type ContactCreateParams as ContactCreateParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactMergeParams as ContactMergeParams,
    type ContactPurgeParams as ContactPurgeParams,
    type ContactReadParams as ContactReadParams,
    type ContactSearchParams as ContactSearchParams,
  };

  export {
    Deals as Deals,
    type DealCreateParams as DealCreateParams,
    type DealUpdateParams as DealUpdateParams,
    type DealListParams as DealListParams,
    type DealMergeParams as DealMergeParams,
    type DealReadParams as DealReadParams,
    type DealSearchParams as DealSearchParams,
    type DealUpsertParams as DealUpsertParams,
  };

  export {
    Schemas as Schemas,
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
