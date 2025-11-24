// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * New users will only have minimal permissions, which is contacts-base. A welcome
   * email will prompt them to set a password and log in to HubSpot.
   *
   * @example
   * ```ts
   * const publicUser = await client.settings.users.create({
   *   email: 'newUser@email.com',
   * });
   * ```
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<PublicUser> {
    return this._client.post('/settings/v3/users/', { body, ...options });
  }

  /**
   * Modifies a user identified by `userId`. `userId` refers to the user's ID by
   * default, or optionally email as specified by the `IdProperty` query param.
   *
   * @example
   * ```ts
   * const publicUser = await client.settings.users.update(
   *   'userId',
   * );
   * ```
   */
  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<PublicUser> {
    const { idProperty, ...body } = params;
    return this._client.put(path`/settings/v3/users/${userID}`, { query: { idProperty }, body, ...options });
  }

  /**
   * Retrieves a list of users from an account
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicUser of client.settings.users.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicUsersPage, PublicUser> {
    return this._client.getAPIList('/settings/v3/users/', Page<PublicUser>, { query, ...options });
  }

  /**
   * Removes a user identified by `userId`. `userId` refers to the user's ID by
   * default, or optionally email as specified by the `IdProperty` query param.
   *
   * @example
   * ```ts
   * await client.settings.users.delete('userId');
   * ```
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
   * Retrieves a user identified by `userId`. `userId` refers to the user's ID by
   * default, or optionally email as specified by the `IdProperty` query param.
   *
   * @example
   * ```ts
   * const publicUser = await client.settings.users.get(
   *   'userId',
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const collectionResponsePublicPermissionSetNoPaging =
   *   await client.settings.users.listRoles();
   * ```
   */
  listRoles(options?: RequestOptions): APIPromise<CollectionResponsePublicPermissionSetNoPaging> {
    return this._client.get('/settings/v3/users/roles', options);
  }

  /**
   * View teams for this account
   *
   * @example
   * ```ts
   * const collectionResponsePublicTeamNoPaging =
   *   await client.settings.users.listTeams();
   * ```
   */
  listTeams(options?: RequestOptions): APIPromise<CollectionResponsePublicTeamNoPaging> {
    return this._client.get('/settings/v3/users/teams', options);
  }
}

export type PublicUsersPage = Page<PublicUser>;

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

/**
 * A role that can be assigned to a user
 */
export interface PublicPermissionSet {
  /**
   * The role's unique ID
   */
  id: string;

  /**
   * The role's name
   */
  name: string;

  /**
   * Whether this role has a paid seat and requires the billing-write scope to
   * assign/unassign to users
   */
  requiresBillingWrite: boolean;
}

/**
 * A team that can be assigned to a user
 */
export interface PublicTeam {
  /**
   * The team's unique ID
   */
  id: string;

  /**
   * The team's name
   */
  name: string;

  /**
   * Secondary or additional members of this team
   */
  secondaryUserIds: Array<string>;

  /**
   * Primary members of this team
   */
  userIds: Array<string>;
}

/**
 * A user
 */
export interface PublicUser {
  /**
   * The user's unique ID.
   */
  id: string;

  /**
   * The user's email.
   */
  email: string;

  /**
   * The user's first name.
   */
  firstName?: string;

  /**
   * The user's last name.
   */
  lastName?: string;

  /**
   * The user's primary team
   */
  primaryTeamId?: string;

  /**
   * The user's role.
   */
  roleId?: string;

  /**
   * A list of role IDs assigned to the user.
   */
  roleIds?: Array<string>;

  /**
   * The user's additional teams.
   */
  secondaryTeamIds?: Array<string>;

  /**
   * Whether a welcome email was sent to the user. This value will only be populated
   * in response to a provisioning request. Subsequent queries will be false.
   */
  sendWelcomeEmail?: boolean;

  /**
   * Whether the user has super admin privileges.
   */
  superAdmin?: boolean;
}

/**
 * A user to update
 */
export interface PublicUserUpdate {
  /**
   * The first name of the user.
   */
  firstName?: string;

  /**
   * The last name of the user.
   */
  lastName?: string;

  /**
   * The user's primary team.
   */
  primaryTeamId?: string;

  /**
   * The user's role.
   */
  roleId?: string;

  /**
   * The user's additional teams.
   */
  secondaryTeamIds?: Array<string>;
}

/**
 * A user creation request
 */
export interface UserProvisionRequest {
  /**
   * The user's email.
   */
  email: string;

  /**
   * The user's first name.
   */
  firstName?: string;

  /**
   * The user's last name.
   */
  lastName?: string;

  /**
   * The user's primary team.
   */
  primaryTeamId?: string;

  /**
   * The user's role.
   */
  roleId?: string;

  /**
   * The user's additional teams.
   */
  secondaryTeamIds?: Array<string>;

  /**
   * Whether to send a welcome email.
   */
  sendWelcomeEmail?: boolean;
}

export interface UserCreateParams {
  /**
   * The user's email.
   */
  email: string;

  /**
   * The user's first name.
   */
  firstName?: string;

  /**
   * The user's last name.
   */
  lastName?: string;

  /**
   * The user's primary team.
   */
  primaryTeamId?: string;

  /**
   * The user's role.
   */
  roleId?: string;

  /**
   * The user's additional teams.
   */
  secondaryTeamIds?: Array<string>;

  /**
   * Whether to send a welcome email.
   */
  sendWelcomeEmail?: boolean;
}

export interface UserUpdateParams {
  /**
   * Query param: The name of a property with unique user values. Valid values are
   * `USER_ID`(default) or `EMAIL`
   */
  idProperty?: 'EMAIL' | 'USER_ID';

  /**
   * Body param: The first name of the user.
   */
  firstName?: string;

  /**
   * Body param: The last name of the user.
   */
  lastName?: string;

  /**
   * Body param: The user's primary team.
   */
  primaryTeamId?: string;

  /**
   * Body param: The user's role.
   */
  roleId?: string;

  /**
   * Body param: The user's additional teams.
   */
  secondaryTeamIds?: Array<string>;
}

export interface UserListParams extends PageParams {}

export interface UserDeleteParams {
  /**
   * The name of a property with unique user values. Valid values are
   * `USER_ID`(default) or `EMAIL`
   */
  idProperty?: 'EMAIL' | 'USER_ID';
}

export interface UserGetParams {
  /**
   * The name of a property with unique user values. Valid values are
   * `USER_ID`(default) or `EMAIL`
   */
  idProperty?: 'EMAIL' | 'USER_ID';
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
    type PublicUsersPage as PublicUsersPage,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserGetParams as UserGetParams,
  };
}
