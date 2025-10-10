// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import * as AssociationsAPI from './associations';
import { Associations } from './associations';
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
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Deals extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create
   */
  createByObjectTypeID(
    body: DealCreateByObjectTypeIDParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3', { body, ...options });
  }

  /**
   * Archive
   */
  deleteByObjectTypeID(dealID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/0-3/${dealID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read
   */
  getByObjectTypeID(
    dealID: string,
    query: DealGetByObjectTypeIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/0-3/${dealID}`, { query, ...options });
  }

  /**
   * List
   */
  listByObjectTypeID(
    query: DealListByObjectTypeIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseSimplePublicObjectWithAssociations> {
    return this._client.get('/crm/v3/objects/0-3', { query, ...options });
  }

  /**
   * Merge two deals with same type
   */
  mergeByObjectTypeID(
    body: DealMergeByObjectTypeIDParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3/merge', { body, ...options });
  }

  searchByObjectTypeID(
    body: DealSearchByObjectTypeIDParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3/search', { body, ...options });
  }

  /**
   * Update
   */
  updateByObjectTypeID(
    dealID: string,
    params: DealUpdateByObjectTypeIDParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/0-3/${dealID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }
}

export interface DealCreateByObjectTypeIDParams {
  properties: { [key: string]: string };

  associations?: Array<ObjectsAPI.PublicAssociationsForObject>;
}

export interface DealGetByObjectTypeIDParams {
  archived?: boolean;

  associations?: Array<string>;

  idProperty?: string;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface DealListByObjectTypeIDParams {
  after?: string;

  archived?: boolean;

  associations?: Array<string>;

  limit?: number;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface DealMergeByObjectTypeIDParams {
  objectIdToMerge: string;

  primaryObjectId: string;
}

export interface DealSearchByObjectTypeIDParams {
  after?: string;

  filterGroups?: Array<ObjectsAPI.FilterGroup>;

  limit?: number;

  properties?: Array<string>;

  query?: string;

  sorts?: Array<string>;
}

export interface DealUpdateByObjectTypeIDParams {
  /**
   * Body param:
   */
  properties: { [key: string]: string };

  /**
   * Query param:
   */
  idProperty?: string;
}

Deals.Associations = Associations;
Deals.Batch = Batch;

export declare namespace Deals {
  export {
    type DealCreateByObjectTypeIDParams as DealCreateByObjectTypeIDParams,
    type DealGetByObjectTypeIDParams as DealGetByObjectTypeIDParams,
    type DealListByObjectTypeIDParams as DealListByObjectTypeIDParams,
    type DealMergeByObjectTypeIDParams as DealMergeByObjectTypeIDParams,
    type DealSearchByObjectTypeIDParams as DealSearchByObjectTypeIDParams,
    type DealUpdateByObjectTypeIDParams as DealUpdateByObjectTypeIDParams,
  };

  export { Associations as Associations };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchReadParams as BatchReadParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}
