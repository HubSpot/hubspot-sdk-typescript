// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import * as ObjectsAPI from '../objects';
import { SimplePublicObjectWithAssociationsPage } from '../objects';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCreateParams,
  BatchDeleteParams,
  BatchGetParams,
  BatchUpdateParams,
  BatchUpsertParams,
} from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Contacts extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a contact
   */
  create(body: ContactCreateParams, options?: RequestOptions): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/contacts', { body, ...options });
  }

  /**
   * Update an existing contact, identified by ID or email/unique property value. To
   * identify a contact by ID, include the ID in the request URL path. To identify a
   * contact by their email or other unique property, include the email/property
   * value in the request URL path, and add the `idProperty` query parameter
   * (`/crm/v3/objects/contacts/jon@website.com?idProperty=email`). Provided property
   * values will be overwritten. Read-only and non-existent properties will result in
   * an error. Properties values can be cleared by passing an empty string.
   */
  update(
    contactID: string,
    params: ContactUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/objects/2026-03/contacts/${contactID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  list(
    query: ContactListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/2026-03/contacts',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Delete a contact by ID. Deleted contacts can be restored within 90 days of
   * deletion. Learn more about the
   * [data impacted by contact deletions](https://knowledge.hubspot.com/privacy-and-consent/understand-restorable-and-permanent-contact-deletions)
   * and how to
   * [restore archived records](https://knowledge.hubspot.com/records/restore-deleted-records).
   */
  delete(contactID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/objects/2026-03/contacts/${contactID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  gdprDelete(body: ContactGdprDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/objects/2026-03/contacts/gdpr-delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  get(
    contactID: string,
    query: ContactGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/objects/2026-03/contacts/${contactID}`, { query, ...options });
  }

  /**
   * Merge two contacts
   */
  merge(body: ContactMergeParams, options?: RequestOptions): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/contacts/merge', { body, ...options });
  }

  /**
   * Search for contacts by filtering on properties, searching through associations,
   * and sorting results. Learn more about
   * [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).
   */
  search(
    body: ContactSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/contacts/search', { body, ...options });
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
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * A comma separated list of object types to retrieve associated IDs for. If any of
   * the specified associations do not exist, they will be ignored.
   */
  associations?: Array<string>;

  /**
   * The name of a property whose values are unique for this object type
   */
  idProperty?: string;

  /**
   * A comma separated list of the properties to be returned in the response. If any
   * of the specified properties are not present on the requested object(s), they
   * will be ignored.
   */
  properties?: Array<string>;

  /**
   * A comma separated list of the properties to be returned along with their history
   * of previous values. If any of the specified properties are not present on the
   * requested object(s), they will be ignored.
   */
  propertiesWithHistory?: Array<string>;
}

export interface ContactMergeParams {
  /**
   * The ID of the company to merge into the primary.
   */
  objectIdToMerge: string;

  /**
   * The ID of the primary company, which the other will merge into.
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

Contacts.Batch = Batch;

export declare namespace Contacts {
  export {
    type PublicGdprDeleteInput as PublicGdprDeleteInput,
    type ContactCreateParams as ContactCreateParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactGdprDeleteParams as ContactGdprDeleteParams,
    type ContactGetParams as ContactGetParams,
    type ContactMergeParams as ContactMergeParams,
    type ContactSearchParams as ContactSearchParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
