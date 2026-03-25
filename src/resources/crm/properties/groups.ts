// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Create and return a copy of a new property group.
   */
  create(
    objectType: string,
    body: GroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.PropertyGroup> {
    return this._client.post(path`/crm/properties/2026-03/${objectType}/groups`, { body, ...options });
  }

  /**
   * Perform a partial update of a property group identified by {groupName}. Provided
   * fields will be overwritten.
   */
  update(
    groupName: string,
    params: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.PropertyGroup> {
    const { objectType, ...body } = params;
    return this._client.patch(path`/crm/properties/2026-03/${objectType}/groups/${groupName}`, {
      body,
      ...options,
    });
  }

  /**
   * Read all existing property groups for the specified object type and HubSpot
   * account.
   */
  list(
    objectType: string,
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.CollectionResponsePropertyGroupNoPaging> {
    return this._client.get(path`/crm/properties/2026-03/${objectType}/groups`, { query, ...options });
  }

  /**
   * Move a property group identified by {groupName} to the recycling bin.
   */
  delete(groupName: string, params: GroupDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(path`/crm/properties/2026-03/${objectType}/groups/${groupName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a property group identified by {groupName}.
   */
  get(groupName: string, params: GroupGetParams, options?: RequestOptions): APIPromise<Shared.PropertyGroup> {
    const { objectType, ...query } = params;
    return this._client.get(path`/crm/properties/2026-03/${objectType}/groups/${groupName}`, {
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
   * Path param
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

export interface GroupListParams {
  locale?: string;
}

export interface GroupDeleteParams {
  objectType: string;
}

export interface GroupGetParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Query param
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
