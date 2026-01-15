// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MediaBridgeAPI from './media-bridge';
import * as PropertiesAPI from '../../crm/properties/properties';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Create a new property group for the specified object type.
   *
   * @example
   * ```ts
   * const propertyGroup =
   *   await client.cms.mediaBridge.groups.create('objectType', {
   *     appId: 0,
   *     label: 'label',
   *     name: 'name',
   *   });
   * ```
   */
  create(
    objectType: string,
    params: GroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<PropertiesAPI.PropertyGroup> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/v1/${appId}/properties/${objectType}/groups`, {
      body,
      ...options,
    });
  }

  /**
   * Get the property groups for a specified object type.
   *
   * @example
   * ```ts
   * const collectionResponsePropertyGroupNoPaging =
   *   await client.cms.mediaBridge.groups.list('objectType', {
   *     appId: 0,
   *   });
   * ```
   */
  list(
    objectType: string,
    params: GroupListParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.CollectionResponsePropertyGroupNoPaging> {
    const { appId } = params;
    return this._client.get(path`/media-bridge/v1/${appId}/properties/${objectType}/groups`, options);
  }

  /**
   * Delete an existing property group by name
   *
   * @example
   * ```ts
   * await client.cms.mediaBridge.groups.deleteByName(
   *   'groupName',
   *   { appId: 0, objectType: 'objectType' },
   * );
   * ```
   */
  deleteByName(
    groupName: string,
    params: GroupDeleteByNameParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, objectType } = params;
    return this._client.delete(path`/media-bridge/v1/${appId}/properties/${objectType}/groups/${groupName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the details of an existing property group by name.
   *
   * @example
   * ```ts
   * const propertyGroup =
   *   await client.cms.mediaBridge.groups.getByName(
   *     'groupName',
   *     { appId: 0, objectType: 'objectType' },
   *   );
   * ```
   */
  getByName(
    groupName: string,
    params: GroupGetByNameParams,
    options?: RequestOptions,
  ): APIPromise<PropertiesAPI.PropertyGroup> {
    const { appId, objectType } = params;
    return this._client.get(
      path`/media-bridge/v1/${appId}/properties/${objectType}/groups/${groupName}`,
      options,
    );
  }

  /**
   * Update an existing property group by name.
   *
   * @example
   * ```ts
   * const propertyGroup =
   *   await client.cms.mediaBridge.groups.updateByName(
   *     'groupName',
   *     { appId: 0, objectType: 'objectType' },
   *   );
   * ```
   */
  updateByName(
    groupName: string,
    params: GroupUpdateByNameParams,
    options?: RequestOptions,
  ): APIPromise<PropertiesAPI.PropertyGroup> {
    const { appId, objectType, ...body } = params;
    return this._client.patch(path`/media-bridge/v1/${appId}/properties/${objectType}/groups/${groupName}`, {
      body,
      ...options,
    });
  }
}

export interface GroupCreateParams {
  /**
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
   */
  appId: number;

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
  displayOrder?: number;
}

export interface GroupListParams {
  /**
   * The appId for the media bridge app. It is possible to have multiple apps in your
   * developer account that use the media bridge.
   */
  appId: number;
}

export interface GroupDeleteByNameParams {
  /**
   * The appId for the media bridge app. It is possible to have multiple apps in your
   * developer account that use the media bridge.
   */
  appId: number;

  /**
   * The object type for the property group
   */
  objectType: string;
}

export interface GroupGetByNameParams {
  /**
   * The appId for the media bridge app. It is possible to have multiple apps in your
   * developer account that use the media bridge.
   */
  appId: number;

  /**
   * The object type for the property group.
   */
  objectType: string;
}

export interface GroupUpdateByNameParams {
  /**
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
   */
  appId: number;

  /**
   * Path param: The object type for the property group.
   */
  objectType: string;

  /**
   * Body param
   */
  displayOrder?: number;

  /**
   * Body param
   */
  label?: string;
}

export declare namespace Groups {
  export {
    type GroupCreateParams as GroupCreateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteByNameParams as GroupDeleteByNameParams,
    type GroupGetByNameParams as GroupGetByNameParams,
    type GroupUpdateByNameParams as GroupUpdateByNameParams,
  };
}
