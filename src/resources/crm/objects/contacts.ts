// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ObjectsAPI from './objects';
import { SimplePublicObjectWithAssociationsPage } from './objects';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Contacts extends APIResource {
  /**
   * Create a CRM object with the given properties and return a copy of the object,
   * including the ID. Documentation and examples for creating standard objects is
   * provided.
   */
  create(
    objectType: string,
    body: ContactCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}`, { body, ...options });
  }

  /**
   * Perform a partial update of an Object identified by `{objectId}`or optionally a
   * unique property value as specified by the `idProperty` query param. `{objectId}`
   * refers to the internal object ID by default, and the `idProperty` query param
   * refers to a property whose values are unique for the object. Provided property
   * values will be overwritten. Read-only and non-existent properties will result in
   * an error. Properties values can be cleared by passing an empty string.
   */
  update(
    objectID: string,
    params: ContactUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObject> {
    const { objectType, idProperty, ...body } = params;
    return this._client.patch(path`/crm/objects/2026-03/${objectType}/${objectID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Read a page of objects. Control what is returned via the `properties` query
   * param.
   */
  list(
    objectType: string,
    query: ContactListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      path`/crm/objects/2026-03/${objectType}`,
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Move an Object identified by `{objectId}` to the recycling bin.
   */
  delete(objectID: string, params: ContactDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(path`/crm/objects/2026-03/${objectType}/${objectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Permanently delete a contact and all associated content to follow GDPR. Use
   * optional property `idProperty` set to `email` to identify contact by email
   * address. If email address is not found, the email address will be added to a
   * blocklist and prevent it from being used in the future. Learn more about
   * [permanently deleting contacts](https://knowledge.hubspot.com/privacy-and-consent/how-do-i-perform-a-gdpr-delete-in-hubspot).
   */
  gdprDelete(objectType: string, body: ContactGdprDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/gdpr-delete`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read an Object identified by `{objectId}`. `{objectId}` refers to the internal
   * object ID by default, or optionally any unique property value as specified by
   * the `idProperty` query param. Control what is returned via the `properties`
   * query param.
   */
  get(
    objectID: string,
    params: ContactGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    const { objectType, ...query } = params;
    return this._client.get(path`/crm/objects/2026-03/${objectType}/${objectID}`, { query, ...options });
  }

  /**
   * Merge two CRM objects of the same type by specifying one as the primary object
   * and the other as the object to be merged into it.
   */
  merge(
    objectType: string,
    body: ContactMergeParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/merge`, { body, ...options });
  }

  /**
   * Execute a search query to find CRM objects of a given type, using specified
   * filters and properties. The search can be customized with filters, sorting, and
   * pagination options.
   */
  search(
    objectType: string,
    body: ContactSearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/search`, { body, ...options });
  }
}

/**
 * An input that contains the information required to process a public GDPR data
 * deletion request.
 */
export interface PublicGdprDeleteInput {
  /**
   * The ID of the contact to permanently delete.
   */
  objectId: string;

  /**
   * The name of a property whose values are unique for this object. An alternative
   * to identifying a contact by ID.
   */
  idProperty?: string;
}

export interface ContactCreateParams {
  associations: Array<ObjectsAPI.PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
}

export interface ContactUpdateParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object type
   */
  idProperty?: string;
}

export interface ContactListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * A comma separated list of object types to retrieve associated IDs for. If any of
   * the specified associations do not exist, they will be ignored.
   */
  associations?: Array<string>;

  /**
   * A comma separated list of the properties to be returned in the response. If any
   * of the specified properties are not present on the requested object(s), they
   * will be ignored.
   */
  properties?: Array<string>;

  /**
   * A comma separated list of the properties to be returned along with their history
   * of previous values. If any of the specified properties are not present on the
   * requested object(s), they will be ignored. Usage of this parameter will reduce
   * the maximum number of objects that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface ContactDeleteParams {
  objectType: string;
}

export interface ContactGdprDeleteParams {
  /**
   * The ID of the contact to permanently delete.
   */
  objectId: string;

  /**
   * The name of a property whose values are unique for this object. An alternative
   * to identifying a contact by ID.
   */
  idProperty?: string;
}

export interface ContactGetParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Query param: A comma separated list of object types to retrieve associated IDs
   * for. If any of the specified associations do not exist, they will be ignored.
   */
  associations?: Array<string>;

  /**
   * Query param: The name of a property whose values are unique for this object type
   */
  idProperty?: string;

  /**
   * Query param: A comma separated list of the properties to be returned in the
   * response. If any of the specified properties are not present on the requested
   * object(s), they will be ignored.
   */
  properties?: Array<string>;

  /**
   * Query param: A comma separated list of the properties to be returned along with
   * their history of previous values. If any of the specified properties are not
   * present on the requested object(s), they will be ignored.
   */
  propertiesWithHistory?: Array<string>;
}

export interface ContactMergeParams {
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

export interface ContactSearchParams {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups: Array<ObjectsAPI.FilterGroup>;

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

export declare namespace Contacts {
  export {
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
}

export { type SimplePublicObjectWithAssociationsPage };
