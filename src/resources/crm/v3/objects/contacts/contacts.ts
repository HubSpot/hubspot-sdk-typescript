// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as CompaniesAPI from '../companies/companies';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchArchiveParams,
  BatchCreateParams,
  BatchReadParams,
  BatchUpdateParams,
  BatchUpsertParams,
} from './batch';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Contacts extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a contact
   */
  create(
    body: ContactCreateParams,
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsCreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contacts', { body, ...options });
  }

  /**
   * Retrieve a contact
   */
  retrieve(
    contactID: string,
    query: ContactRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsSimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/contacts/${contactID}`, { query, ...options });
  }

  /**
   * Update a contact
   */
  update(
    contactID: string,
    body: ContactUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsSimplePublicObject> {
    return this._client.patch(path`/crm/v3/objects/contacts/${contactID}`, { body, ...options });
  }

  /**
   * Retrieve contacts
   */
  list(
    query: ContactListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsCollectionResponseSimplePublicObjectWithAssociations> {
    return this._client.get('/crm/v3/objects/contacts', { query, ...options });
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
   * Permanently delete a contact (GDPR-compliant)
   */
  gdprDelete(body: ContactGdprDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/objects/contacts/gdpr-delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Merge two contacts
   */
  merge(
    body: ContactMergeParams,
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contacts/merge', { body, ...options });
  }

  /**
   * Search for contacts
   */
  search(
    body: ContactSearchParams,
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.CRMObjectsCollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contacts/search', { body, ...options });
  }
}

export interface ContactCreateParams {
  properties: { [key: string]: string };

  associations?: Array<CompaniesAPI.CRMObjectsPublicAssociationsForObject>;
}

export interface ContactRetrieveParams {
  archived?: boolean;

  associations?: Array<string>;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface ContactUpdateParams {
  properties: { [key: string]: string };
}

export interface ContactListParams {
  after?: string;

  archived?: boolean;

  associations?: Array<string>;

  limit?: number;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface ContactGdprDeleteParams {
  objectId: string;

  idProperty?: string;
}

export interface ContactMergeParams {
  objectIdToMerge: string;

  primaryObjectId: string;
}

export interface ContactSearchParams {
  after?: string;

  filterGroups?: Array<ContactSearchParams.FilterGroup>;

  limit?: number;

  properties?: Array<string>;

  query?: string;

  sorts?: Array<string>;
}

export namespace ContactSearchParams {
  export interface FilterGroup {
    filters: Array<FilterGroup.Filter>;
  }

  export namespace FilterGroup {
    export interface Filter {
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

      propertyName: string;

      highValue?: string;

      value?: string;

      values?: Array<string>;
    }
  }
}

Contacts.Batch = Batch;

export declare namespace Contacts {
  export {
    type ContactCreateParams as ContactCreateParams,
    type ContactRetrieveParams as ContactRetrieveParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactGdprDeleteParams as ContactGdprDeleteParams,
    type ContactMergeParams as ContactMergeParams,
    type ContactSearchParams as ContactSearchParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchReadParams as BatchReadParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}
