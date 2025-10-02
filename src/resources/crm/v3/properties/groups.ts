// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DailyAPI from '../../../account-info/v3/api-usage/daily';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Create a property group
   */
  create(
    objectType: string,
    body: GroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<GroupCreateResponse> {
    return this._client.post(path`/crm/v3/properties/${objectType}/groups`, { body, ...options });
  }

  /**
   * Read a property group
   */
  retrieve(
    groupName: string,
    params: GroupRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CRMPropertiesPropertyGroup> {
    const { objectType } = params;
    return this._client.get(path`/crm/v3/properties/${objectType}/groups/${groupName}`, options);
  }

  /**
   * Update a property group
   */
  update(
    groupName: string,
    params: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMPropertiesPropertyGroup> {
    const { objectType, ...body } = params;
    return this._client.patch(path`/crm/v3/properties/${objectType}/groups/${groupName}`, {
      body,
      ...options,
    });
  }

  /**
   * Read all property groups
   */
  list(objectType: string, options?: RequestOptions): APIPromise<GroupListResponse> {
    return this._client.get(path`/crm/v3/properties/${objectType}/groups`, options);
  }

  /**
   * Archive a property group
   */
  delete(groupName: string, params: GroupDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(path`/crm/v3/properties/${objectType}/groups/${groupName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CRMPropertiesPropertyGroup {
  archived: boolean;

  displayOrder: number;

  label: string;

  name: string;
}

export interface GroupCreateResponse {
  createdResourceId: string;

  entity: CRMPropertiesPropertyGroup;

  location?: string;
}

export interface GroupListResponse {
  results: Array<CRMPropertiesPropertyGroup>;

  paging?: DailyAPI.Paging;
}

export interface GroupCreateParams {
  label: string;

  name: string;

  displayOrder?: number;
}

export interface GroupRetrieveParams {
  objectType: string;
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

export interface GroupDeleteParams {
  objectType: string;
}

export declare namespace Groups {
  export {
    type CRMPropertiesPropertyGroup as CRMPropertiesPropertyGroup,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupRetrieveParams as GroupRetrieveParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupDeleteParams as GroupDeleteParams,
  };
}
