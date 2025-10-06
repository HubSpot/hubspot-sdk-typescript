// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Adds a user
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<PublicUser> {
    return this._client.post('/settings/v3/users/', { body, ...options });
  }

  /**
   * Modifies a user
   */
  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<PublicUser> {
    const { idProperty, ...body } = params;
    return this._client.put(path`/settings/v3/users/${userID}`, { query: { idProperty }, body, ...options });
  }

  /**
   * Retrieves a list of users from an account
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicUserForwardPaging> {
    return this._client.get('/settings/v3/users/', { query, ...options });
  }

  /**
   * Removes a user
   */
  delete(
    userID: string,
    params: UserDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { idProperty } = params ?? {};
    return this._client.delete(path`/settings/v3/users/${userID}`, {
      query: { idProperty },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a user
   */
  get(
    userID: string,
    query: UserGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicUser> {
    return this._client.get(path`/settings/v3/users/${userID}`, { query, ...options });
  }

  /**
   * Retrieves the roles on an account
   */
  listRoles(options?: RequestOptions): APIPromise<CollectionResponsePublicPermissionSetNoPaging> {
    return this._client.get('/settings/v3/users/roles', options);
  }

  /**
   * See details about this account's teams
   */
  listTeams(options?: RequestOptions): APIPromise<CollectionResponsePublicTeamNoPaging> {
    return this._client.get('/settings/v3/users/teams', options);
  }
}

export interface CollectionResponsePublicPermissionSetNoPaging {
  results: Array<PublicPermissionSet>;
}

export interface CollectionResponsePublicTeamNoPaging {
  results: Array<PublicTeam>;
}

export interface CollectionResponsePublicUserForwardPaging {
  results: Array<PublicUser>;

  paging?: Shared.ForwardPaging;
}

export interface PublicPermissionSet {
  id: string;

  name: string;

  requiresBillingWrite: boolean;
}

export interface PublicTeam {
  id: string;

  name: string;

  secondaryUserIds: Array<string>;

  userIds: Array<string>;
}

export interface PublicUser {
  id: string;

  email: string;

  firstName?: string;

  lastName?: string;

  primaryTeamId?: string;

  roleId?: string;

  roleIds?: Array<string>;

  secondaryTeamIds?: Array<string>;

  sendWelcomeEmail?: boolean;

  superAdmin?: boolean;
}

export interface PublicUserUpdate {
  firstName?: string;

  lastName?: string;

  primaryTeamId?: string;

  roleId?: string;

  secondaryTeamIds?: Array<string>;
}

export interface UserProvisionRequest {
  email: string;

  firstName?: string;

  lastName?: string;

  primaryTeamId?: string;

  roleId?: string;

  secondaryTeamIds?: Array<string>;

  sendWelcomeEmail?: boolean;
}

export interface UserCreateParams {
  email: string;

  firstName?: string;

  lastName?: string;

  primaryTeamId?: string;

  roleId?: string;

  secondaryTeamIds?: Array<string>;

  sendWelcomeEmail?: boolean;
}

export interface UserUpdateParams {
  /**
   * Query param:
   */
  idProperty?: 'USER_ID' | 'EMAIL';

  /**
   * Body param:
   */
  firstName?: string;

  /**
   * Body param:
   */
  lastName?: string;

  /**
   * Body param:
   */
  primaryTeamId?: string;

  /**
   * Body param:
   */
  roleId?: string;

  /**
   * Body param:
   */
  secondaryTeamIds?: Array<string>;
}

export interface UserListParams {
  after?: string;

  limit?: number;
}

export interface UserDeleteParams {
  idProperty?: 'USER_ID' | 'EMAIL';
}

export interface UserGetParams {
  idProperty?: 'USER_ID' | 'EMAIL';
}

export declare namespace Users {
  export {
    type CollectionResponsePublicPermissionSetNoPaging as CollectionResponsePublicPermissionSetNoPaging,
    type CollectionResponsePublicTeamNoPaging as CollectionResponsePublicTeamNoPaging,
    type CollectionResponsePublicUserForwardPaging as CollectionResponsePublicUserForwardPaging,
    type PublicPermissionSet as PublicPermissionSet,
    type PublicTeam as PublicTeam,
    type PublicUser as PublicUser,
    type PublicUserUpdate as PublicUserUpdate,
    type UserProvisionRequest as UserProvisionRequest,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserGetParams as UserGetParams,
  };
}
