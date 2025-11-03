// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CrmAPI from '../crm';

export class Appointments extends APIResource {}

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
  filterGroups: Array<CrmAPI.FilterGroup>;

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

  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<CrmAPI.ValueWithTimestamp> };

  url?: string;
}

export interface SimplePublicObjectBatchInputForCreate {
  associations: Array<CrmAPI.PublicAssociationsForObject>;

  properties: { [key: string]: string };

  objectWriteTraceId?: string;
}

/**
 * Is the input object used to create a new CRM object, containing the properties
 * to be set and optional associations to link the new record with other CRM
 * objects.
 */
export interface SimplePublicObjectInputForCreate {
  associations: Array<CrmAPI.PublicAssociationsForObject>;

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
  associations?: { [key: string]: CrmAPI.CollectionResponseAssociatedID };

  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<CrmAPI.ValueWithTimestamp> };

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

  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<CrmAPI.ValueWithTimestamp> };

  url?: string;
}

export declare namespace Appointments {
  export {
    type PublicObjectSearchRequest as PublicObjectSearchRequest,
    type SimplePublicObject as SimplePublicObject,
    type SimplePublicObjectBatchInputForCreate as SimplePublicObjectBatchInputForCreate,
    type SimplePublicObjectInputForCreate as SimplePublicObjectInputForCreate,
    type SimplePublicObjectWithAssociations as SimplePublicObjectWithAssociations,
    type SimplePublicUpsertObject as SimplePublicUpsertObject,
  };
}
