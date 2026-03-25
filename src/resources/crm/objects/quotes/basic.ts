// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Basic extends APIResource {
  /**
   * Create multiple quotes in a single request by providing a batch of quote
   * objects, each with its own properties and optional associations.
   */
  create(
    body: BasicCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/quotes/batch/create', { body, ...options });
  }

  /**
   * Update multiple quotes using their internal IDs or unique property values. This
   * endpoint allows batch processing of quote updates, ensuring efficient management
   * of multiple records in a single request.
   */
  update(
    body: BasicUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/quotes/batch/update', { body, ...options });
  }

  /**
   * Archive multiple quotes by their IDs in a single request, effectively moving
   * them to the recycling bin.
   */
  delete(body: BasicDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/objects/2026-03/quotes/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve records by record ID or include the `idProperty` parameter to retrieve
   * records by a custom unique value property.
   */
  get(
    params: BasicGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/objects/2026-03/quotes/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Create or update records identified by a unique property value as specified by
   * the `idProperty` query param. `idProperty` query param refers to a property
   * whose values are unique for the object.
   */
  upsert(
    body: BasicUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post('/crm/objects/2026-03/quotes/batch/upsert', { body, ...options });
  }
}

export interface BasicCreateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputForCreate>;
}

export interface BasicUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface BasicDeleteParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;
}

export interface BasicGetParams {
  /**
   * Body param
   */
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;

  /**
   * Body param: Key-value pairs for setting properties for the new object.
   */
  properties: Array<string>;

  /**
   * Body param: Key-value pairs for setting properties for the new object and their
   * histories.
   */
  propertiesWithHistory: Array<string>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Body param: When using a custom unique value property to retrieve records, the
   * name of the property. Do not include this parameter if retrieving by record ID.
   */
  idProperty?: string;
}

export interface BasicUpsertParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace Basic {
  export {
    type BasicCreateParams as BasicCreateParams,
    type BasicUpdateParams as BasicUpdateParams,
    type BasicDeleteParams as BasicDeleteParams,
    type BasicGetParams as BasicGetParams,
    type BasicUpsertParams as BasicUpsertParams,
  };
}
