// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import * as AssociationsAPI from './associations';
import { Associations } from './associations';
import * as BatchAPI from './batch';
import { Batch } from './batch';
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
  create(
    body: DealCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsCreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3', { body, ...options });
  }

  /**
   * Update
   */
  update(
    dealID: string,
    params: DealUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsSimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/0-3/${dealID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * List
   */
  list(
    query: DealListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsCollectionResponseSimplePublicObjectWithAssociations> {
    return this._client.get('/crm/v3/objects/0-3', { query, ...options });
  }

  /**
   * Archive
   */
  delete(dealID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/0-3/${dealID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Merge two deals with same type
   */
  merge(
    body: DealMergeParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3/merge', { body, ...options });
  }

  /**
   * Read
   */
  read(
    dealID: string,
    query: DealReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsSimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/0-3/${dealID}`, { query, ...options });
  }

  search(
    body: DealSearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsCollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/0-3/search', { body, ...options });
  }

  /**
   * Create or update a batch of deals by unique property values
   */
  upsert(
    body: DealUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CRMObjectsBatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/v3/objects/0-3/batch/upsert', { body, ...options });
  }
}

export interface DealCreateParams {
  properties: { [key: string]: string };

  associations?: Array<ObjectsAPI.CRMObjectsPublicAssociationsForObject>;
}

export interface DealUpdateParams {
  /**
   * Body param:
   */
  properties: { [key: string]: string };

  /**
   * Query param:
   */
  idProperty?: string;
}

export interface DealListParams {
  after?: string;

  archived?: boolean;

  associations?: Array<string>;

  limit?: number;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface DealMergeParams {
  objectIdToMerge: string;

  primaryObjectId: string;
}

export interface DealReadParams {
  archived?: boolean;

  associations?: Array<string>;

  idProperty?: string;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface DealSearchParams {
  after?: string;

  filterGroups?: Array<ObjectsAPI.CRMObjectsFilterGroup>;

  limit?: number;

  properties?: Array<string>;

  query?: string;

  sorts?: Array<string>;
}

export interface DealUpsertParams {
  inputs: Array<ObjectsAPI.CRMObjectsSimplePublicObjectBatchInputUpsert>;
}

Deals.Associations = Associations;
Deals.Batch = Batch;

export declare namespace Deals {
  export {
    type DealCreateParams as DealCreateParams,
    type DealUpdateParams as DealUpdateParams,
    type DealListParams as DealListParams,
    type DealMergeParams as DealMergeParams,
    type DealReadParams as DealReadParams,
    type DealSearchParams as DealSearchParams,
    type DealUpsertParams as DealUpsertParams,
  };

  export { Associations as Associations };

  export { Batch as Batch };
}
