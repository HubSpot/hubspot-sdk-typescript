// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import { SimplePublicObjectWithAssociationsPage } from '../objects';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCreateParams,
  BatchDeleteParams,
  BatchReadParams,
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
  create(
    body: ContactCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contacts', { body, ...options });
  }

  /**
   * Update a contact
   */
  update(
    contactID: string,
    body: ContactUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObject> {
    return this._client.patch(path`/crm/v3/objects/contacts/${contactID}`, { body, ...options });
  }

  /**
   * Retrieve contacts
   */
  list(
    query: ContactListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/v3/objects/contacts',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Archive a contact
   */
  delete(contactID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/contacts/${contactID}`, {
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
}

export interface ContactCreateParams {
  properties: { [key: string]: string };

  associations?: Array<ObjectsAPI.PublicAssociationsForObject>;
}

export interface ContactUpdateParams {
  properties: { [key: string]: string };
}

export interface ContactListParams extends PageParams {
  archived?: boolean;

  associations?: Array<string>;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
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

Contacts.Batch = Batch;

export declare namespace Contacts {
  export {
    type ContactCreateParams as ContactCreateParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactMergeParams as ContactMergeParams,
    type ContactPurgeParams as ContactPurgeParams,
    type ContactReadParams as ContactReadParams,
    type ContactSearchParams as ContactSearchParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchReadParams as BatchReadParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
