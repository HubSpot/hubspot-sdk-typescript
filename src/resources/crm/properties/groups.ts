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
   *     label: 'My Property Group',
   *     name: 'mypropertygroup',
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
    options?: RequestOptions,
  ): APIPromise<PropertiesAPI.CollectionResponsePropertyGroup> {
    return this._client.get(path`/crm/v3/properties/${objectType}/groups`, options);
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
    const { objectType } = params;
    return this._client.get(path`/crm/v3/properties/${objectType}/groups/${groupName}`, options);
  }
}

export interface GroupCreateParams {
  /**
   * A human-readable label that will be shown in HubSpot.
   */
  label: string;

  /**
   * The internal property group name, which must be used when referencing the
   * property group via the API.
   */
  name: string;

  /**
   * Property groups are displayed in order starting with the lowest positive integer
   * value. Values of -1 will cause the property group to be displayed after any
   * positive values.
   */
  displayOrder?: number;
}

export interface GroupUpdateParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Body param: Property groups are displayed in order starting with the lowest
   * positive integer value. Values of -1 will cause the property group to be
   * displayed after any positive values.
   */
  displayOrder?: number;

  /**
   * Body param: A human-readable label that will be shown in HubSpot.
   */
  label?: string;
}

export interface GroupDeleteParams {
  objectType: string;
}

export interface GroupGetParams {
  objectType: string;
}

export declare namespace Groups {
  export {
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };
}
