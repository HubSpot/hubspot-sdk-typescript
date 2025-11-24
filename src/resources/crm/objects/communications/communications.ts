// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { SimplePublicObjectWithAssociationsPage } from '../../crm';
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
   * Create a communication with the given properties and return a copy of the
   * object, including the ID. Documentation and examples for creating standard
   * communications is provided.
   *
   * @example
   * ```ts
   * const createdResponseSimplePublicObject =
   *   await client.crm.objects.communications.create({
   *     associations: [
   *       {
   *         to: { id: '37295' },
   *         types: [
   *           {
   *             associationCategory: 'HUBSPOT_DEFINED',
   *             associationTypeId: 0,
   *           },
   *         ],
   *       },
   *     ],
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  create(
    body: CommunicationCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/communications', { body, ...options });
  }

  /**
   * Perform a partial update of an Object identified by `{communicationId}`or
   * optionally a unique property value as specified by the `idProperty` query param.
   * `{communicationId}` refers to the internal object ID by default, and the
   * `idProperty` query param refers to a property whose values are unique for the
   * object. Provided property values will be overwritten. Read-only and non-existent
   * properties will result in an error. Properties values can be cleared by passing
   * an empty string.
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.communications.update(
   *     'communicationId',
   *     { properties: { foo: 'string' } },
   *   );
   * ```
   */
  update(
    communicationID: string,
    params: CommunicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/communications/${communicationID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Read a page of communications. Control what is returned via the `properties`
   * query param.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.communications.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CommunicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, CrmAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/v3/objects/communications',
      Page<CrmAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Move an Object identified by `{communicationId}` to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.objects.communications.delete(
   *   'communicationId',
   * );
   * ```
   */
  delete(communicationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/communications/${communicationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read an Object identified by `{communicationId}`. `{communicationId}` refers to
   * the internal object ID by default, or optionally any unique property value as
   * specified by the `idProperty` query param. Control what is returned via the
   * `properties` query param.
   *
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.communications.get(
   *     'communicationId',
   *   );
   * ```
   */
  get(
    communicationID: string,
    query: CommunicationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/communications/${communicationID}`, { query, ...options });
  }

  /**
   * Search for messages by filtering on properties, searching through associations,
   * and sorting results. Learn more about
   * [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.communications.search({
   *     after: 'after',
   *     filterGroups: [
   *       {
   *         filters: [
   *           {
   *             operator: 'BETWEEN',
   *             propertyName: 'propertyName',
   *           },
   *         ],
   *       },
   *     ],
   *     limit: 0,
   *     properties: ['string'],
   *     sorts: ['string'],
   *   });
   * ```
   */
  search(
    body: CommunicationSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/communications/search', { body, ...options });
  }
}

export interface CommunicationCreateParams {
  associations: Array<CrmAPI.PublicAssociationsForObject>;

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
   * Query param: The name of a property whose values are unique for this object
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
   * the maximum number of communications that can be read by a single request.
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
   * The name of a property whose values are unique for this object
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
