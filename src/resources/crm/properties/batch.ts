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
   */
  create(
    objectType: string,
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseProperty> {
    return this._client.post(path`/crm/properties/2026-03/${objectType}/batch/create`, { body, ...options });
  }

  /**
   * Delete multiple properties in a single request. This method will return a 204 No
   * Content response on success regardless of the initial state of the property
   * (e.g. active, already archived, non-existent).
   */
  delete(objectType: string, body: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/crm/properties/2026-03/${objectType}/batch/archive`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a batch of properties.
   */
  get(
    objectType: string,
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseProperty> {
    const { locale, ...body } = params;
    return this._client.post(path`/crm/properties/2026-03/${objectType}/batch/read`, {
      query: { locale },
      body,
      ...options,
    });
  }
}

export interface BatchCreateParams {
  inputs: Array<Shared.PropertyCreate>;
}

export interface BatchDeleteParams {
  inputs: Array<Shared.PropertyName>;
}

export interface BatchGetParams {
  /**
   * Body param
   */
  archived: boolean;

  /**
   * Body param
   */
  dataSensitivity: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  /**
   * Body param
   */
  inputs: Array<Shared.PropertyName>;

  /**
   * Query param
   */
  locale?: string;
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };
}
