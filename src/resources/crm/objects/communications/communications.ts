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

export class Communications extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a single communication (WhatsApp, SMS, LinkedIn message). Include a
   * `properties` object to define
   * [property values](https://developers.hubspot.com/docs/guides/api/crm/properties)
   * for the {objectName}, along with an `associations` array to define
   * [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4)
   * with other CRM records.
   */
  create(body: CommunicationCreateParams, options?: RequestOptions): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/communications', { body, ...options });
  }

  /**
   * Update a communication by ID (`objectId`) or unique property value
   * (`idProperty`). Provided property values will be overwritten. Read-only and
   * non-existent properties will result in an error. Properties values can be
   * cleared by passing an empty string.
   */
  update(
    communicationID: string,
    params: CommunicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/objects/2026-03/communications/${communicationID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a communication by its ID (`objectId`) or by a unique property
   * (`idProperty`). You can specify what is returned using the `properties` query
   * parameter.
   */
  list(
    query: CommunicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/2026-03/communications',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Delete a communication by ID.
   */
  delete(communicationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/objects/2026-03/communications/${communicationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a communication (WhatsApp, SMS, LinkedIn message) by its ID
   * (`objectId`) or by a unique property (`idProperty`). You can specify what is
   * returned using the `properties` query parameter.
   */
  get(
    communicationID: string,
    query: CommunicationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/objects/2026-03/communications/${communicationID}`, {
      query,
      ...options,
    });
  }

  /**
   * Search for messages by filtering on properties, searching through associations,
   * and sorting results. Learn more about
   * [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).
   */
  search(
    body: CommunicationSearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/communications/search', { body, ...options });
  }
}

export interface CommunicationCreateParams {
  associations: Array<ObjectsAPI.PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
}

export interface CommunicationUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object type
   */
  idProperty?: string;
}

export interface CommunicationListParams extends PageParams {
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

export interface CommunicationGetParams {
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

export interface CommunicationSearchParams {
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

Communications.Batch = Batch;

export declare namespace Communications {
  export {
    type CommunicationCreateParams as CommunicationCreateParams,
    type CommunicationUpdateParams as CommunicationUpdateParams,
    type CommunicationListParams as CommunicationListParams,
    type CommunicationGetParams as CommunicationGetParams,
    type CommunicationSearchParams as CommunicationSearchParams,
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
