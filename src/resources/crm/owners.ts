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
  id: string;

  archived: boolean;

  createdAt: string;

  type: 'PERSON' | 'QUEUE';

  updatedAt: string;

  email?: string;

  firstName?: string;

  lastName?: string;

  teams?: Array<UsersAPI.PublicTeam>;

  userId?: number;

  userIdIncludingInactive?: number;
}

export interface PublicTeam {
  id: string;

  name: string;

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
