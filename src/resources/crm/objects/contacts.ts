// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ObjectsAPI from './objects';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Contacts extends APIResource {
  /**
   * Create a contact
   */
  create(
    body: ContactCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contacts', { body, ...options });
  }

  /**
   * Update a batch of contacts
   */
  update(
    body: ContactUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contacts/batch/update', { body, ...options });
  }

  /**
   * Retrieve contacts
   */
  list(
    query: ContactListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseSimplePublicObjectWithAssociations> {
    return this._client.get('/crm/v3/objects/contacts', { query, ...options });
  }

  /**
   * Archive a batch of contacts
   */
  delete(body: ContactDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/objects/contacts/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Merge two contacts
   */
  merge(body: ContactMergeParams, options?: RequestOptions): APIPromise<ObjectsAPI.SimplePublicObject> {
    return this._client.post('/crm/v3/objects/contacts/merge', { body, ...options });
  }

  /**
   * Permanently delete a contact (GDPR-compliant)
   */
  purge(body: ContactPurgeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/objects/contacts/gdpr-delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a contact
   */
  read(
    contactID: string,
    query: ContactReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/contacts/${contactID}`, { query, ...options });
  }

  /**
   * Search for contacts
   */
  search(
    body: ContactSearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contacts/search', { body, ...options });
  }

  /**
   * Create or update a batch of contacts
   */
  upsert(
    body: ContactUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/v3/objects/contacts/batch/upsert', { body, ...options });
  }
}

export interface ContactCreateParams {
  properties: { [key: string]: string };

  associations?: Array<ObjectsAPI.PublicAssociationsForObject>;
}

export interface ContactUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface ContactListParams {
  after?: string;

  archived?: boolean;

  associations?: Array<string>;

  limit?: number;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface ContactDeleteParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;
}

export interface ContactMergeParams {
  objectIdToMerge: string;

  primaryObjectId: string;
}

export interface ContactPurgeParams {
  objectId: string;

  idProperty?: string;
}

export interface ContactReadParams {
  archived?: boolean;

  associations?: Array<string>;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface ContactSearchParams {
  after?: string;

  filterGroups?: Array<ObjectsAPI.FilterGroup>;

  limit?: number;

  properties?: Array<string>;

  query?: string;

  sorts?: Array<string>;
}

export interface ContactUpsertParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace Contacts {
  export {
    type ContactCreateParams as ContactCreateParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactDeleteParams as ContactDeleteParams,
    type ContactMergeParams as ContactMergeParams,
    type ContactPurgeParams as ContactPurgeParams,
    type ContactReadParams as ContactReadParams,
    type ContactSearchParams as ContactSearchParams,
    type ContactUpsertParams as ContactUpsertParams,
  };
}
