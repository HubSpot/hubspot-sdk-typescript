// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as MediaBridgeAPI from './media-bridge';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Create a batch of properties of the specified object type.
   */
  create(
    objectType: string,
    params: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.BatchResponseProperty> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/2026-03/${appId}/properties/${objectType}/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Archive a batch of existing properties for the specified types.
   */
  delete(objectType: string, params: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/2026-03/${appId}/properties/${objectType}/batch/archive`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the details for a batch of properties for a specified object type.
   */
  get(
    objectType: string,
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.BatchResponseProperty> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/2026-03/${appId}/properties/${objectType}/batch/read`, {
      body,
      ...options,
    });
  }
}

export interface BatchCreateParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param
   */
  inputs: Array<Shared.PropertyCreate>;
}

export interface BatchDeleteParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param
   */
  inputs: Array<Shared.PropertyName>;
}

export interface BatchGetParams {
  /**
   * Path param
   */
  appId: number;

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
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };
}
