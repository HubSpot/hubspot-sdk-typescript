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
   * The unique ID for the owner.
   */
  id: string;

  /**
   * Whether the owner is archived.
   */
  archived: boolean;

  /**
   * The timestamp when the owner was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * The type of owner. Accepted values are: PERSON, QUEUE.
   */
  type: 'PERSON' | 'QUEUE';

  /**
   * The timestamp when the owner was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * The owner's email address.
   */
  email?: string;

  /**
   * The owner's first name.
   */
  firstName?: string;

  /**
   * The owner's last name.
   */
  lastName?: string;

  teams?: Array<UsersAPI.PublicTeam>;

  /**
   * The ID of the active HubSpot user associated with the owner.
   */
  userId?: number;

  /**
   * The user ID, including inactive users.
   */
  userIdIncludingInactive?: number;
}

export interface PublicTeam {
  /**
   * The unique ID for the team.
   */
  id: string;

  /**
   * The team's name.
   */
  name: string;

  /**
   * Whether this is the owner's primary team.
   */
  primary: boolean;
}

export interface OwnerListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Filter by email address (optional).
   */
  email?: string;
}

export interface OwnerGetParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Specifies whether to use 'id' or 'userId' as the identifier for the owner.
   */
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
