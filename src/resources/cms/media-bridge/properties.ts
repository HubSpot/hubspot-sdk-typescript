// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as MediaBridgeAPI from './media-bridge';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Properties extends APIResource {
  /**
   * Create a new property for the specified media type
   *
   * @example
   * ```ts
   * const property =
   *   await client.cms.mediaBridge.properties.create(
   *     'objectType',
   *     {
   *       appId: 'appId',
   *       fieldType: 'booleancheckbox',
   *       groupName: 'groupName',
   *       label: 'label',
   *       name: 'name',
   *       type: 'bool',
   *     },
   *   );
   * ```
   */
  create(
    objectType: string,
    params: PropertyCreateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/v1/${appId}/properties/${objectType}`, { body, ...options });
  }

  /**
   * Update an existing property for an object type.
   *
   * @example
   * ```ts
   * const property =
   *   await client.cms.mediaBridge.properties.update(
   *     'propertyName',
   *     { appId: 'appId', objectType: 'objectType' },
   *   );
   * ```
   */
  update(
    propertyName: string,
    params: PropertyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { appId, objectType, ...body } = params;
    return this._client.patch(path`/media-bridge/v1/${appId}/properties/${objectType}/${propertyName}`, {
      body,
      ...options,
    });
  }

  /**
   * Get the existing properties defined for a media object type.
   *
   * @example
   * ```ts
   * const collectionResponsePropertyNoPaging =
   *   await client.cms.mediaBridge.properties.list(
   *     'objectType',
   *     { appId: 'appId' },
   *   );
   * ```
   */
  list(
    objectType: string,
    params: PropertyListParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.CollectionResponsePropertyNoPaging> {
    const { appId } = params;
    return this._client.get(path`/media-bridge/v1/${appId}/properties/${objectType}`, options);
  }

  /**
   * Delete an existing property for an object type.
   *
   * @example
   * ```ts
   * await client.cms.mediaBridge.properties.delete(
   *   'propertyName',
   *   { appId: 'appId', objectType: 'objectType' },
   * );
   * ```
   */
  delete(propertyName: string, params: PropertyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId, objectType } = params;
    return this._client.delete(path`/media-bridge/v1/${appId}/properties/${objectType}/${propertyName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Archive a batch of existing properties for the specified types.
   *
   * @example
   * ```ts
   * await client.cms.mediaBridge.properties.archiveBatch(
   *   'objectType',
   *   { appId: 'appId', inputs: [{ name: 'name' }] },
   * );
   * ```
   */
  archiveBatch(
    objectType: string,
    params: PropertyArchiveBatchParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/v1/${appId}/properties/${objectType}/batch/archive`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a batch of properties of the specified object type.
   *
   * @example
   * ```ts
   * const batchResponseProperty =
   *   await client.cms.mediaBridge.properties.createBatch(
   *     'objectType',
   *     {
   *       appId: 'appId',
   *       inputs: [
   *         {
   *           fieldType: 'booleancheckbox',
   *           groupName: 'groupName',
   *           label: 'label',
   *           name: 'name',
   *           type: 'bool',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  createBatch(
    objectType: string,
    params: PropertyCreateBatchParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseProperty> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/v1/${appId}/properties/${objectType}/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Get the details for an existing property by name.
   *
   * @example
   * ```ts
   * const property =
   *   await client.cms.mediaBridge.properties.get(
   *     'propertyName',
   *     { appId: 'appId', objectType: 'objectType' },
   *   );
   * ```
   */
  get(
    propertyName: string,
    params: PropertyGetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { appId, objectType } = params;
    return this._client.get(
      path`/media-bridge/v1/${appId}/properties/${objectType}/${propertyName}`,
      options,
    );
  }

  /**
   * Get the details for a batch of properties for a specified object type.
   *
   * @example
   * ```ts
   * const batchResponseProperty =
   *   await client.cms.mediaBridge.properties.getBatch(
   *     'objectType',
   *     {
   *       appId: 'appId',
   *       archived: true,
   *       inputs: [{ name: 'name' }],
   *     },
   *   );
   * ```
   */
  getBatch(
    objectType: string,
    params: PropertyGetBatchParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BatchResponseProperty> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/v1/${appId}/properties/${objectType}/batch/read`, {
      body,
      ...options,
    });
  }
}

export interface PropertyCreateParams {
  /**
   * Path param:
   */
  appId: string;

  /**
   * Body param:
   */
  fieldType:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea';

  /**
   * Body param:
   */
  groupName: string;

  /**
   * Body param:
   */
  label: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  type: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';

  /**
   * Body param:
   */
  calculationFormula?: string;

  /**
   * Body param:
   */
  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param:
   */
  displayOrder?: number;

  /**
   * Body param:
   */
  externalOptions?: boolean;

  /**
   * Body param:
   */
  formField?: boolean;

  /**
   * Body param:
   */
  hasUniqueValue?: boolean;

  /**
   * Body param:
   */
  hidden?: boolean;

  /**
   * Body param:
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Body param:
   */
  referencedObjectType?: string;
}

export interface PropertyUpdateParams {
  /**
   * Path param:
   */
  appId: string;

  /**
   * Path param:
   */
  objectType: string;

  /**
   * Body param:
   */
  calculationFormula?: string;

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param:
   */
  displayOrder?: number;

  /**
   * Body param:
   */
  fieldType?:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea';

  /**
   * Body param:
   */
  formField?: boolean;

  /**
   * Body param:
   */
  groupName?: string;

  /**
   * Body param:
   */
  hasUniqueValue?: boolean;

  /**
   * Body param:
   */
  hidden?: boolean;

  /**
   * Body param:
   */
  label?: string;

  /**
   * Body param:
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Body param:
   */
  type?: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';
}

export interface PropertyListParams {
  appId: string;
}

export interface PropertyDeleteParams {
  appId: string;

  objectType: string;
}

export interface PropertyArchiveBatchParams {
  /**
   * Path param:
   */
  appId: string;

  /**
   * Body param:
   */
  inputs: Array<Shared.PropertyName>;
}

export interface PropertyCreateBatchParams {
  /**
   * Path param:
   */
  appId: string;

  /**
   * Body param:
   */
  inputs: Array<Shared.PropertyCreate>;
}

export interface PropertyGetParams {
  appId: string;

  objectType: string;
}

export interface PropertyGetBatchParams {
  /**
   * Path param:
   */
  appId: string;

  /**
   * Body param:
   */
  archived: boolean;

  /**
   * Body param:
   */
  inputs: Array<Shared.PropertyName>;

  /**
   * Body param:
   */
  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';
}

export declare namespace Properties {
  export {
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyArchiveBatchParams as PropertyArchiveBatchParams,
    type PropertyCreateBatchParams as PropertyCreateBatchParams,
    type PropertyGetParams as PropertyGetParams,
    type PropertyGetBatchParams as PropertyGetBatchParams,
  };
}
