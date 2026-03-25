// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ContactsAPI from './contacts';
import {
  ContactCreateParams,
  ContactDeleteParams,
  ContactGdprDeleteParams,
  ContactGetParams,
  ContactListParams,
  ContactMergeParams,
  ContactSearchParams,
  ContactUpdateParams,
  Contacts,
  PublicGdprDeleteInput,
} from './contacts';
import * as CustomAPI from './custom';
import {
  BatchResponsePublicDefaultAssociation,
  Custom,
  CustomCreateParams,
  CustomDeleteParams,
  CustomGetParams,
  CustomListParams,
  CustomMergeParams,
  CustomSearchParams,
  CustomUpdateParams,
  CustomUpsertParams,
  LabelsBetweenObjectPair,
  PublicDefaultAssociation,
} from './custom';
import { Page } from '../../../core/pagination';

export class Objects extends APIResource {
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
}

export type SimplePublicObjectWithAssociationsPage = Page<SimplePublicObjectWithAssociations>;

/**
 * Contains the id and type of an association
 */
export interface AssociatedID {
  /**
   * The ID for the association type.
   */
  id: string;

  /**
   * The type of associations.
   */
  type: string;
}

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
   * The status of the batch processing request. The expected value is "COMPLETE".
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  /**
   * The total number of errors that occurred during the batch operation.
   */
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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  /**
   * The total number of errors that occurred during the operation.
   */
  numErrors?: number;

  /**
   * The timestamp when the batch process was initiated, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface CollectionResponseAssociatedID {
  results: Array<AssociatedID>;

  paging?: Shared.Paging;
}

export interface CollectionResponseSimplePublicObjectWithAssociationsForwardPaging {
  results: Array<SimplePublicObjectWithAssociations>;

  paging?: Shared.ForwardPaging;
}

/**
 * Represents a list of simple objects returned from an API request, along with the
 * total count of objects available.
 */
export interface CollectionResponseWithTotalSimplePublicObject {
  results: Array<SimplePublicObject>;

  /**
   * The number of available results
   */
  total: number;

  paging?: Shared.Paging;
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
    | 'BETWEEN'
    | 'CONTAINS_TOKEN'
    | 'EQ'
    | 'GT'
    | 'GTE'
    | 'HAS_PROPERTY'
    | 'IN'
    | 'LT'
    | 'LTE'
    | 'NEQ'
    | 'NOT_CONTAINS_TOKEN'
    | 'NOT_HAS_PROPERTY'
    | 'NOT_IN';

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
  /**
   * Contains the Id of a Public Object
   */
  to: Shared.PublicObjectID;

  types: Array<Shared.AssociationSpec>;
}

/**
 * Input data for merging two records.
 */
export interface PublicMergeInput {
  /**
   * The object ID of the record that the merge will not set as the current value
   * after the merge.
   */
  objectIdToMerge: string;

  /**
   * The object ID of the record that the merge will generally set as the current
   * value after the merge.
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
  after: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups: Array<FilterGroup>;

  /**
   * The maximum results to return, up to 200 objects.
   */
  limit: number;

  /**
   * A list of property names to include in the response.
   */
  properties: Array<string>;

  /**
   * Specifies sorting order based on object properties.
   */
  sorts: Array<string>;

  /**
   * The search query string, up to 3000 characters.
   */
  query?: string;
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
   * Whether the object is archived.
   */
  archived: boolean;

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
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  /**
   * An identifier used for tracing the write request for the object.
   */
  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };

  /**
   * The URL associated with the object.
   */
  url?: string;
}

/**
 * Contains an array of CRM object records to be processed in a batch operation,
 * each defined by their ID and properties.
 */
export interface SimplePublicObjectBatchInput {
  /**
   * The ID of the contact to update. This can be the object ID, or the unique
   * property value of the `idProperty` property.
   */
  id: string;

  /**
   * Key-value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * The name of a unique property, when identifying records by property.
   */
  idProperty?: string;

  /**
   * A unique identifier for tracing the request.
   */
  objectWriteTraceId?: string;
}

/**
 * An input object that contains a collection of objects to be created together in
 * a batch.
 */
export interface SimplePublicObjectBatchInputForCreate {
  associations: Array<PublicAssociationsForObject>;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * An identifier used for tracing the creation or update request of the object.
   */
  objectWriteTraceId?: string;
}

/**
 * Represents an object used in batch upsert operations, containing an object’s
 * unique identifier, its properties, and optionally the unique property name and a
 * write trace ID.
 */
export interface SimplePublicObjectBatchInputUpsert {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * The name of a property whose values are unique for this object
   */
  idProperty?: string;

  /**
   * An identifier for tracing the creation request.
   */
  objectWriteTraceId?: string;
}

/**
 * Contains the Id of a Public Object
 */
export interface SimplePublicObjectID {
  /**
   * The unique ID of the object.
   */
  id: string;
}

/**
 * Represents the input required to create or update a CRM object, containing an
 * object with property names and their corresponding values.
 */
export interface SimplePublicObjectInput {
  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };
}

/**
 * Is the input object used to create a new CRM object, containing the properties
 * to be set and optional associations to link the new record with other CRM
 * objects.
 */
export interface SimplePublicObjectInputForCreate {
  associations: Array<PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
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
   * Whether the object is archived.
   */
  archived: boolean;

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
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  /**
   * A list defining relationships with other objects.
   */
  associations?: { [key: string]: CollectionResponseAssociatedID };

  /**
   * An identifier used for tracing the creation or update request of the object.
   */
  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };

  /**
   * The URL on the API that provide direct navigation to the corresponding UI pages
   * for the connectors.
   */
  url?: string;
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
   * Whether the object is archived.
   */
  archived: boolean;

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
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  /**
   * An identifier for tracing the creation request.
   */
  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };

  /**
   * The URL associated with the object.
   */
  url?: string;
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

Objects.Contacts = Contacts;
Objects.Custom = Custom;

export declare namespace Objects {
  export {
    type AssociatedID as AssociatedID,
    type BatchInputSimplePublicObjectBatchInput as BatchInputSimplePublicObjectBatchInput,
    type BatchInputSimplePublicObjectBatchInputForCreate as BatchInputSimplePublicObjectBatchInputForCreate,
    type BatchInputSimplePublicObjectBatchInputUpsert as BatchInputSimplePublicObjectBatchInputUpsert,
    type BatchInputSimplePublicObjectID as BatchInputSimplePublicObjectID,
    type BatchReadInputSimplePublicObjectID as BatchReadInputSimplePublicObjectID,
    type BatchResponseSimplePublicObject as BatchResponseSimplePublicObject,
    type BatchResponseSimplePublicUpsertObject as BatchResponseSimplePublicUpsertObject,
    type CollectionResponseAssociatedID as CollectionResponseAssociatedID,
    type CollectionResponseSimplePublicObjectWithAssociationsForwardPaging as CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
    type CollectionResponseWithTotalSimplePublicObject as CollectionResponseWithTotalSimplePublicObject,
    type Filter as Filter,
    type FilterGroup as FilterGroup,
    type PublicAssociationsForObject as PublicAssociationsForObject,
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
    Contacts as Contacts,
    type PublicGdprDeleteInput as PublicGdprDeleteInput,
    type ContactCreateParams as ContactCreateParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactDeleteParams as ContactDeleteParams,
    type ContactGdprDeleteParams as ContactGdprDeleteParams,
    type ContactGetParams as ContactGetParams,
    type ContactMergeParams as ContactMergeParams,
    type ContactSearchParams as ContactSearchParams,
  };

  export {
    Custom as Custom,
    type BatchResponsePublicDefaultAssociation as BatchResponsePublicDefaultAssociation,
    type LabelsBetweenObjectPair as LabelsBetweenObjectPair,
    type PublicDefaultAssociation as PublicDefaultAssociation,
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomListParams as CustomListParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
    type CustomMergeParams as CustomMergeParams,
    type CustomSearchParams as CustomSearchParams,
    type CustomUpsertParams as CustomUpsertParams,
  };
}
