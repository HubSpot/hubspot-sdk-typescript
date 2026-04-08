// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * This endpoint allows you to update several partner client records at once by
   * providing a batch of CRM object records with their respective IDs and
   * properties. It is useful for synchronizing data across systems or making bulk
   * updates efficiently.
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/partner_clients/batch/update', { body, ...options });
  }

  /**
   * Retrieve multiple partner client objects in a single request by specifying their
   * IDs. This endpoint is useful for efficiently accessing data for multiple clients
   * at once, particularly when integrating with third-party systems.
   */
  get(
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/objects/2026-03/partner_clients/batch/read', {
      query: { archived },
      body,
      ...options,
    });
  }
}

export interface BatchUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface BatchGetParams {
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

export declare namespace Batch {
  export { type BatchUpdateParams as BatchUpdateParams, type BatchGetParams as BatchGetParams };
}
