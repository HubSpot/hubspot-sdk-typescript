// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import {
  CollectionResponsePublicPermissionSetNoPaging,
  CollectionResponsePublicTeamNoPaging,
  CollectionResponsePublicUserForwardPaging,
  PublicPermissionSet,
  PublicTeam,
  PublicUser,
  PublicUserUpdate,
  UserCreateParams,
  UserDeleteParams,
  UserListParams,
  UserProvisionRequest,
  UserReadParams,
  UserReplaceParams,
  Users,
} from './users';

export class Settings extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Settings.Users = Users;

export declare namespace Settings {
  export {
    Users as Users,
    type CollectionResponsePublicPermissionSetNoPaging as CollectionResponsePublicPermissionSetNoPaging,
    type CollectionResponsePublicTeamNoPaging as CollectionResponsePublicTeamNoPaging,
    type CollectionResponsePublicUserForwardPaging as CollectionResponsePublicUserForwardPaging,
    type PublicPermissionSet as PublicPermissionSet,
    type PublicTeam as PublicTeam,
    type PublicUser as PublicUser,
    type PublicUserUpdate as PublicUserUpdate,
    type UserProvisionRequest as UserProvisionRequest,
    type UserCreateParams as UserCreateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserReadParams as UserReadParams,
    type UserReplaceParams as UserReplaceParams,
  };
}
