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
   *       appId: 0,
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
   *     { appId: 0, objectType: 'objectType' },
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
   *     { appId: 0 },
   *   );
   * ```
   */
  list(
    objectType: string,
    params: PropertyListParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.CollectionResponsePropertyNoPaging> {
    const { appId, ...query } = params;
    return this._client.get(path`/media-bridge/v1/${appId}/properties/${objectType}`, { query, ...options });
  }

  /**
   * Delete an existing property for an object type.
   *
   * @example
   * ```ts
   * await client.cms.mediaBridge.properties.delete(
   *   'propertyName',
   *   { appId: 0, objectType: 'objectType' },
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
   * Create a batch of properties of the specified object type.
   *
   * @example
   * ```ts
   * const batchResponseProperty =
   *   await client.cms.mediaBridge.properties.createBatch(
   *     'objectType',
   *     {
   *       appId: 0,
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
   * Archive a batch of existing properties for the specified types.
   *
   * @example
   * ```ts
   * await client.cms.mediaBridge.properties.deleteBatch(
   *   'objectType',
   *   { appId: 0, inputs: [{ name: 'name' }] },
   * );
   * ```
   */
  deleteBatch(
    objectType: string,
    params: PropertyDeleteBatchParams,
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
   * Get the details for an existing property by name.
   *
   * @example
   * ```ts
   * const property =
   *   await client.cms.mediaBridge.properties.get(
   *     'propertyName',
   *     { appId: 0, objectType: 'objectType' },
   *   );
   * ```
   */
  get(
    propertyName: string,
    params: PropertyGetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { appId, objectType, ...query } = params;
    return this._client.get(path`/media-bridge/v1/${appId}/properties/${objectType}/${propertyName}`, {
      query,
      ...options,
    });
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
   *       appId: 0,
   *       archived: true,
   *       dataSensitivity: 'highly_sensitive',
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
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
   */
  appId: number;

  /**
   * Body param
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
   * Body param
   */
  groupName: string;

  /**
   * Body param
   */
  label: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  type: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';

  /**
   * Body param
   */
  calculationFormula?: string;

  /**
   * Body param
   */
  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  displayOrder?: number;

  /**
   * Body param
   */
  externalOptions?: boolean;

  /**
   * Body param
   */
  formField?: boolean;

  /**
   * Body param
   */
  hasUniqueValue?: boolean;

  /**
   * Body param
   */
  hidden?: boolean;

  /**
   * Body param
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Body param
   */
  referencedObjectType?: string;
}

export interface PropertyUpdateParams {
  /**
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
   */
  appId: number;

  /**
   * Path param: The object type for the property to be updated.
   */
  objectType: string;

  /**
   * Body param
   */
  calculationFormula?: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  displayOrder?: number;

  /**
   * Body param
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
   * Body param
   */
  formField?: boolean;

  /**
   * Body param
   */
  groupName?: string;

  /**
   * Body param
   */
  hasUniqueValue?: boolean;

  /**
   * Body param
   */
  hidden?: boolean;

  /**
   * Body param
   */
  label?: string;

  /**
   * Body param
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Body param
   */
  type?: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';
}

export interface PropertyListParams {
  /**
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
   */
  appId: number;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Query param: Filter the response to the specified properties.
   */
  properties?: string;
}

export interface PropertyDeleteParams {
  /**
   * The appId for the media bridge app. It is possible to have multiple apps in your
   * developer account that use the media bridge.
   */
  appId: number;

  /**
   * The object type for the property to delete.
   */
  objectType: string;
}

export interface PropertyCreateBatchParams {
  /**
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
   */
  appId: number;

  /**
   * Body param
   */
  inputs: Array<Shared.PropertyCreate>;
}

export interface PropertyDeleteBatchParams {
  /**
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
   */
  appId: number;

  /**
   * Body param
   */
  inputs: Array<Shared.PropertyName>;
}

export interface PropertyGetParams {
  /**
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
   */
  appId: number;

  /**
   * Path param: The object type for the property.
   */
  objectType: string;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Query param: Limit the response to only include the specified properties.
   */
  properties?: string;
}

export interface PropertyGetBatchParams {
  /**
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
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

export declare namespace Properties {
  export {
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyCreateBatchParams as PropertyCreateBatchParams,
    type PropertyDeleteBatchParams as PropertyDeleteBatchParams,
    type PropertyGetParams as PropertyGetParams,
    type PropertyGetBatchParams as PropertyGetBatchParams,
  };
}
