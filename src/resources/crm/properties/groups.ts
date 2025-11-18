// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PropertiesAPI from './properties';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Create and return a copy of a new property group.
   *
   * @example
   * ```ts
   * const createdResponsePropertyGroup =
   *   await client.crm.properties.groups.create('objectType', {
   *     label: 'label',
   *     name: 'name',
   *   });
   * ```
   */
  create(
    objectType: string,
    body: GroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<PropertiesAPI.CreatedResponsePropertyGroup> {
    return this._client.post(path`/crm/v3/properties/${objectType}/groups`, { body, ...options });
  }

  /**
   * Perform a partial update of a property group identified by {groupName}. Provided
   * fields will be overwritten.
   *
   * @example
   * ```ts
   * const propertyGroup =
   *   await client.crm.properties.groups.update('groupName', {
   *     objectType: 'objectType',
   *   });
   * ```
   */
  update(
    groupName: string,
    params: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PropertiesAPI.PropertyGroup> {
    const { objectType, ...body } = params;
    return this._client.patch(path`/crm/v3/properties/${objectType}/groups/${groupName}`, {
      body,
      ...options,
    });
  }

  /**
   * Read all existing property groups for the specified object type and HubSpot
   * account.
   *
   * @example
   * ```ts
   * const collectionResponsePropertyGroup =
   *   await client.crm.properties.groups.list('objectType');
   * ```
   */
  list(
    objectType: string,
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PropertiesAPI.CollectionResponsePropertyGroup> {
    return this._client.get(path`/crm/v3/properties/${objectType}/groups`, { query, ...options });
  }

  /**
   * Move a property group identified by {groupName} to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.properties.groups.delete('groupName', {
   *   objectType: 'objectType',
   * });
   * ```
   */
  delete(groupName: string, params: GroupDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(path`/crm/v3/properties/${objectType}/groups/${groupName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a property group identified by {groupName}.
   *
   * @example
   * ```ts
   * const propertyGroup =
   *   await client.crm.properties.groups.get('groupName', {
   *     objectType: 'objectType',
   *   });
   * ```
   */
  get(
    groupName: string,
    params: GroupGetParams,
    options?: RequestOptions,
  ): APIPromise<PropertiesAPI.PropertyGroup> {
    const { objectType, ...query } = params;
    return this._client.get(path`/crm/v3/properties/${objectType}/groups/${groupName}`, {
      query,
      ...options,
    });
  }
}

export interface GroupCreateParams {
  label: string;

  name: string;

  displayOrder?: number;
}

export interface GroupUpdateParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Body param:
   */
  displayOrder?: number;

  /**
   * Body param:
   */
  label?: string;
}

export interface GroupListParams {
  locale?: string;
}

export interface GroupDeleteParams {
  objectType: string;
}

export interface GroupGetParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Query param:
   */
  locale?: string;
}

export declare namespace Groups {
  export {
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };
}
