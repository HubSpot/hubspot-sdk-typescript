// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Create a batch of properties using the same rules as when creating an individual
   * property.
   *
   * @example
   * ```ts
   * const batchResponseProperty =
   *   await client.crm.properties.batch.create('objectType', {
   *     inputs: [
   *       {
   *         fieldType: 'booleancheckbox',
   *         groupName: 'groupName',
   *         label: 'label',
   *         name: 'name',
   *         type: 'bool',
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    objectType: string,
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseProperty> {
    return this._client.post(path`/crm/v3/properties/${objectType}/batch/create`, { body, ...options });
  }

  /**
   * Archive a provided list of properties. This method will return a 204 No Content
   * response on success regardless of the initial state of the property (e.g.
   * active, already archived, non-existent).
   *
   * @example
   * ```ts
   * await client.crm.properties.batch.delete('objectType', {
   *   inputs: [{ name: 'name' }],
   * });
   * ```
   */
  delete(objectType: string, body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/crm/v3/properties/${objectType}/batch/archive`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a provided list of properties.
   *
   * @example
   * ```ts
   * const batchResponseProperty =
   *   await client.crm.properties.batch.get('objectType', {
   *     archived: true,
   *     inputs: [{ name: 'name' }],
   *   });
   * ```
   */
  get(
    objectType: string,
    body: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseProperty> {
    return this._client.post(path`/crm/v3/properties/${objectType}/batch/read`, { body, ...options });
  }
}

export interface BatchCreateParams {
  inputs: Array<Shared.PropertyCreate>;
}

export interface BatchDeleteParams {
  inputs: Array<Shared.PropertyName>;
}

export interface BatchGetParams {
  archived: boolean;

  inputs: Array<Shared.PropertyName>;

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };
}
