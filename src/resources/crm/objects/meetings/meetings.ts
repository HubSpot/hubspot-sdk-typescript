// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import { SimplePublicObjectWithAssociationsPage } from '../objects';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchArchiveParams,
  BatchCreateParams,
  BatchReadParams,
  BatchUpdateParams,
  BatchUpsertParams,
} from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Meetings extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a meeting with the given properties and return a copy of the object,
   * including the ID. Documentation and examples for creating standard meetings is
   * provided.
   *
   * @example
   * ```ts
   * const createdResponseSimplePublicObject =
   *   await client.crm.objects.meetings.create({
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  create(
    body: MeetingCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/meetings', { body, ...options });
  }

  /**
   * Perform a partial update of an Object identified by `{meetingId}`or optionally a
   * unique property value as specified by the `idProperty` query param.
   * `{meetingId}` refers to the internal object ID by default, and the `idProperty`
   * query param refers to a property whose values are unique for the object.
   * Provided property values will be overwritten. Read-only and non-existent
   * properties will result in an error. Properties values can be cleared by passing
   * an empty string.
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.meetings.update('meetingId', {
   *     properties: {
   *       property_checkbox: 'false',
   *       property_date: '1572480000000',
   *       property_dropdown: 'choice_b',
   *       property_multiple_checkboxes: 'chocolate;strawberry',
   *       property_number: '17',
   *       property_radio: 'option_1',
   *       property_string: 'value',
   *     },
   *   });
   * ```
   */
  update(
    meetingID: string,
    params: MeetingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/meetings/${meetingID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Read a page of meetings. Control what is returned via the `properties` query
   * param.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.meetings.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MeetingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/v3/objects/meetings',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Move an Object identified by `{meetingId}` to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.objects.meetings.delete('meetingId');
   * ```
   */
  delete(meetingID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/meetings/${meetingID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read an Object identified by `{meetingId}`. `{meetingId}` refers to the internal
   * object ID by default, or optionally any unique property value as specified by
   * the `idProperty` query param. Control what is returned via the `properties`
   * query param.
   *
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.meetings.get('meetingId');
   * ```
   */
  get(
    meetingID: string,
    query: MeetingGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/meetings/${meetingID}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.meetings.search();
   * ```
   */
  search(
    body: MeetingSearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/meetings/search', { body, ...options });
  }
}

export interface MeetingCreateParams {
  /**
   * The company property values to set.
   */
  properties: { [key: string]: string };

  associations?: Array<ObjectsAPI.PublicAssociationsForObject>;
}

export interface MeetingUpdateParams {
  /**
   * Body param: The company property values to set.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object
   */
  idProperty?: string;
}

export interface MeetingListParams extends PageParams {
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
   * the maximum number of meetings that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface MeetingGetParams {
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

export interface MeetingSearchParams {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after?: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups?: Array<ObjectsAPI.FilterGroup>;

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

Meetings.Batch = Batch;

export declare namespace Meetings {
  export {
    type MeetingCreateParams as MeetingCreateParams,
    type MeetingUpdateParams as MeetingUpdateParams,
    type MeetingListParams as MeetingListParams,
    type MeetingGetParams as MeetingGetParams,
    type MeetingSearchParams as MeetingSearchParams,
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

export { type SimplePublicObjectWithAssociationsPage };
