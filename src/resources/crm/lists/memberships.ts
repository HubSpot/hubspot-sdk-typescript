// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ListsAPI from './lists';
import { JoinTimeAndRecordIDsPage } from './lists';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Memberships extends APIResource {
  /**
   * Fetch the memberships of a list in order sorted by the `recordId` of the records
   * in the list.
   *
   * The `recordId`s are sorted in _ascending_ order if an `after` offset or no
   * offset is provided. If only a `before` offset is provided, then the records are
   * sorted in _descending_ order.
   *
   * The `after` offset parameter will take precedence over the `before` offset in a
   * case where both are provided.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const joinTimeAndRecordID of client.crm.lists.memberships.list(
   *   'listId',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    listID: string,
    query: MembershipListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<JoinTimeAndRecordIDsPage, ListsAPI.JoinTimeAndRecordID> {
    return this._client.getAPIList(
      path`/crm/v3/lists/${listID}/memberships`,
      Page<ListsAPI.JoinTimeAndRecordID>,
      { query, ...options },
    );
  }

  /**
   * Add the records provided to the list. Records that do not exist or that are
   * already members of the list are ignored.
   *
   * This endpoint only works for lists that have a `processingType` of `MANUAL` or
   * `SNAPSHOT`.
   *
   * @example
   * ```ts
   * const membershipsUpdateResponse =
   *   await client.crm.lists.memberships.add('listId', {
   *     body: ['string'],
   *   });
   * ```
   */
  add(
    listID: string,
    params: MembershipAddParams,
    options?: RequestOptions,
  ): APIPromise<ListsAPI.MembershipsUpdateResponse> {
    const { body } = params;
    return this._client.put(path`/crm/v3/lists/${listID}/memberships/add`, { body: body, ...options });
  }

  /**
   * Add all of the records from a _source list_ (specified by the `sourceListId`) to
   * a _destination list_ (specified by the `listId`). Records that are already
   * members of the _destination list_ will be ignored. The _destination_ and _source
   * list_ IDs must be different. The _destination_ and _source lists_ must contain
   * records of the same type (e.g. contacts, companies, etc.).
   *
   * This endpoint only works for _destination lists_ that have a `processingType` of
   * `MANUAL` or `SNAPSHOT`. The _source list_ can have any `processingType`.
   *
   * This endpoint only supports a `sourceListId` for lists with less than 100,000
   * memberships.
   *
   * @example
   * ```ts
   * await client.crm.lists.memberships.addAllFromList(
   *   'sourceListId',
   *   { listId: 'listId' },
   * );
   * ```
   */
  addAllFromList(
    sourceListID: string,
    params: MembershipAddAllFromListParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { listId } = params;
    return this._client.put(path`/crm/v3/lists/${listId}/memberships/add-from/${sourceListID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Add and/or remove records that have already been created in the system to and/or
   * from a list.
   *
   * This endpoint only works for lists that have a `processingType` of `MANUAL` or
   * `SNAPSHOT`.
   *
   * @example
   * ```ts
   * const membershipsUpdateResponse =
   *   await client.crm.lists.memberships.addAndRemove(
   *     'listId',
   *     {
   *       recordIdsToAdd: ['123', '456', '789'],
   *       recordIdsToRemove: ['654'],
   *     },
   *   );
   * ```
   */
  addAndRemove(
    listID: string,
    body: MembershipAddAndRemoveParams,
    options?: RequestOptions,
  ): APIPromise<ListsAPI.MembershipsUpdateResponse> {
    return this._client.put(path`/crm/v3/lists/${listID}/memberships/add-and-remove`, { body, ...options });
  }

  /**
   * For given record provide lists this record is member of.
   *
   * @example
   * ```ts
   * const apiCollectionResponseRecordListMembershipNoPaging =
   *   await client.crm.lists.memberships.getLists('recordId', {
   *     objectTypeId: 'objectTypeId',
   *   });
   * ```
   */
  getLists(
    recordID: string,
    params: MembershipGetListsParams,
    options?: RequestOptions,
  ): APIPromise<ListsAPI.APICollectionResponseRecordListMembershipNoPaging> {
    const { objectTypeId } = params;
    return this._client.get(path`/crm/v3/lists/records/${objectTypeId}/${recordID}/memberships`, options);
  }

  /**
   * Fetch the memberships of a list in order sorted by the time the records were
   * added to the list.
   *
   * The `recordId`s are sorted in _ascending_ order if an `after` offset or no
   * offset is provided. If only a `before` offset is provided, then the records are
   * sorted in _descending_ order.
   *
   * The `after` offset parameter will take precedence over the `before` offset in a
   * case where both are provided.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const joinTimeAndRecordID of client.crm.lists.memberships.getPageOrderedByAddedToListDate(
   *   'listId',
   * )) {
   *   // ...
   * }
   * ```
   */
  getPageOrderedByAddedToListDate(
    listID: string,
    query: MembershipGetPageOrderedByAddedToListDateParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<JoinTimeAndRecordIDsPage, ListsAPI.JoinTimeAndRecordID> {
    return this._client.getAPIList(
      path`/crm/v3/lists/${listID}/memberships/join-order`,
      Page<ListsAPI.JoinTimeAndRecordID>,
      { query, ...options },
    );
  }

  /**
   * Remove the records provided from the list. Records that do not exist or that are
   * not members of the list are ignored.
   *
   * This endpoint only works for lists that have a `processingType` of `MANUAL` or
   * `SNAPSHOT`.
   *
   * @example
   * ```ts
   * const membershipsUpdateResponse =
   *   await client.crm.lists.memberships.remove('listId', {
   *     body: ['string'],
   *   });
   * ```
   */
  remove(
    listID: string,
    params: MembershipRemoveParams,
    options?: RequestOptions,
  ): APIPromise<ListsAPI.MembershipsUpdateResponse> {
    const { body } = params;
    return this._client.put(path`/crm/v3/lists/${listID}/memberships/remove`, { body: body, ...options });
  }

  /**
   * Remove **all** of the records from a list. **_Note:_** _The list is not
   * deleted._
   *
   * This endpoint only works for lists that have a `processingType` of `MANUAL` or
   * `SNAPSHOT`.
   *
   * This endpoint only supports lists that have less than 100,000 memberships.
   *
   * @example
   * ```ts
   * await client.crm.lists.memberships.removeAll('listId');
   * ```
   */
  removeAll(listID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/lists/${listID}/memberships`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MembershipListParams extends PageParams {
  /**
   * The paging offset token for the page that comes `before` the previously
   * requested records.
   *
   * If provided, then the records in the response will be the records preceding the
   * offset, sorted in _descending_ order.
   */
  before?: string;
}

export interface MembershipAddParams {
  body: Array<string>;
}

export interface MembershipAddAllFromListParams {
  /**
   * The **ILS ID** of the `MANUAL` or `SNAPSHOT` _destination list_, which the
   * _source list_ records are added to.
   */
  listId: string;
}

export interface MembershipAddAndRemoveParams {
  recordIdsToAdd: Array<string>;

  recordIdsToRemove: Array<string>;
}

export interface MembershipGetListsParams {
  /**
   * Object type id of the record
   */
  objectTypeId: string;
}

export interface MembershipGetPageOrderedByAddedToListDateParams extends PageParams {
  /**
   * The paging offset token for the page that comes `before` the previously
   * requested records.
   *
   * If provided, then the records in the response will be the records preceding the
   * offset, sorted in _descending_ order.
   */
  before?: string;
}

export interface MembershipRemoveParams {
  body: Array<string>;
}

export declare namespace Memberships {
  export {
    type MembershipListParams as MembershipListParams,
    type MembershipAddParams as MembershipAddParams,
    type MembershipAddAllFromListParams as MembershipAddAllFromListParams,
    type MembershipAddAndRemoveParams as MembershipAddAndRemoveParams,
    type MembershipGetListsParams as MembershipGetListsParams,
    type MembershipGetPageOrderedByAddedToListDateParams as MembershipGetPageOrderedByAddedToListDateParams,
    type MembershipRemoveParams as MembershipRemoveParams,
  };
}

export { type JoinTimeAndRecordIDsPage };
