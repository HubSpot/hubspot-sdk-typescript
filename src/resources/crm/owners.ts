// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as UsersAPI from '../settings/users';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Owners extends APIResource {
  /**
   * Retrieve a paginated list of owners available in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicOwner of client.crm.owners.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OwnerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicOwnersPage, PublicOwner> {
    return this._client.getAPIList('/crm/v3/owners/', Page<PublicOwner>, { query, ...options });
  }

  /**
   * Retrieve details of a specific owner using either their 'id' or 'userId'.
   *
   * @example
   * ```ts
   * const publicOwner = await client.crm.owners.get(0);
   * ```
   */
  get(
    ownerID: number,
    query: OwnerGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicOwner> {
    return this._client.get(path`/crm/v3/owners/${ownerID}`, { query, ...options });
  }
}

export type PublicOwnersPage = Page<PublicOwner>;

export interface CollectionResponsePublicOwnerForwardPaging {
  results: Array<PublicOwner>;

  paging?: Shared.ForwardPaging;
}

export interface PublicOwner {
  /**
   * The unique identifier of the owner.
   */
  id: string;

  /**
   * Indicates whether the owner is archived.
   */
  archived: boolean;

  /**
   * The date and time when the owner was created.
   */
  createdAt: string;

  /**
   * The type of the owner, which can be either PERSON or QUEUE.
   */
  type: 'PERSON' | 'QUEUE';

  /**
   * The date and time when the owner was last updated.
   */
  updatedAt: string;

  /**
   * The email address of the owner.
   */
  email?: string;

  /**
   * The first name of the owner.
   */
  firstName?: string;

  /**
   * The last name of the owner.
   */
  lastName?: string;

  teams?: Array<UsersAPI.PublicTeam>;

  /**
   * The user ID of the owner.
   */
  userId?: number;

  /**
   * The user ID of the owner, including inactive users.
   */
  userIdIncludingInactive?: number;
}

export interface PublicTeam {
  id: string;

  name: string;

  primary: boolean;
}

export interface OwnerListParams extends PageParams {
  archived?: boolean;

  email?: string;
}

export interface OwnerGetParams {
  archived?: boolean;

  idProperty?: 'id' | 'userId';
}

export declare namespace Owners {
  export {
    type CollectionResponsePublicOwnerForwardPaging as CollectionResponsePublicOwnerForwardPaging,
    type PublicOwner as PublicOwner,
    type PublicTeam as PublicTeam,
    type PublicOwnersPage as PublicOwnersPage,
    type OwnerListParams as OwnerListParams,
    type OwnerGetParams as OwnerGetParams,
  };
}
