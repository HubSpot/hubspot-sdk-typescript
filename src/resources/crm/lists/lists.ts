// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as EmailsAPI from '../../marketing/emails';
import * as FoldersAPI from './folders';
import {
  FolderCreateParams,
  FolderGetParams,
  FolderMoveListParams,
  FolderMoveParams,
  FolderRenameParams,
  Folders,
} from './folders';
import * as MappingAPI from './mapping';
import { Mapping, MappingBatchCreateIDMappingParams, MappingGetIDMappingParams } from './mapping';
import * as MembershipsAPI from './memberships';
import {
  MembershipAddAllFromListParams,
  MembershipAddAndRemoveParams,
  MembershipAddParams,
  MembershipGetListsParams,
  MembershipGetPageOrderedByAddedToListDateParams,
  MembershipListParams,
  MembershipRemoveParams,
  Memberships,
} from './memberships';
import { APIPromise } from '../../../core/api-promise';
import { Page } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Lists extends APIResource {
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
  mapping: MappingAPI.Mapping = new MappingAPI.Mapping(this._client);
  memberships: MembershipsAPI.Memberships = new MembershipsAPI.Memberships(this._client);

  /**
   * Create a new list with the provided object list definition.
   *
   * @example
   * ```ts
   * const listCreateResponse = await client.crm.lists.create({
   *   name: 'Dynamic Association List Example',
   *   objectTypeId: '0-1',
   *   processingType: 'DYNAMIC',
   * });
   * ```
   */
  create(body: ListCreateParams, options?: RequestOptions): APIPromise<ListCreateResponse> {
    return this._client.post('/crm/v3/lists/', { body, ...options });
  }

  /**
   * Fetch multiple lists in a single request by **ILS list ID**. The response will
   * include the definitions of all lists that exist for the `listIds` provided.
   *
   * @example
   * ```ts
   * const listsByIDResponse = await client.crm.lists.list();
   * ```
   */
  list(
    query: ListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListsByIDResponse> {
    return this._client.get('/crm/v3/lists/', { query, ...options });
  }

  /**
   * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be
   * restored up to 90-days following the delete. After 90-days, the list is purged
   * and can no longer be restored.
   *
   * @example
   * ```ts
   * await client.crm.lists.delete('listId');
   * ```
   */
  delete(listID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/lists/${listID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete an existing scheduled conversion for a list.
   *
   * @example
   * ```ts
   * await client.crm.lists.deleteScheduleConversion('listId');
   * ```
   */
  deleteScheduleConversion(listID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/lists/${listID}/schedule-conversion`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch a single list by **ILS list ID**.
   *
   * @example
   * ```ts
   * const listFetchResponse = await client.crm.lists.get(
   *   'listId',
   * );
   * ```
   */
  get(
    listID: string,
    query: ListGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListFetchResponse> {
    return this._client.get(path`/crm/v3/lists/${listID}`, { query, ...options });
  }

  /**
   * Fetch a single list by list name and object type.
   *
   * @example
   * ```ts
   * const listFetchResponse =
   *   await client.crm.lists.getByObjectTypeIDAndName(
   *     'listName',
   *     { objectTypeId: 'objectTypeId' },
   *   );
   * ```
   */
  getByObjectTypeIDAndName(
    listName: string,
    params: ListGetByObjectTypeIDAndNameParams,
    options?: RequestOptions,
  ): APIPromise<ListFetchResponse> {
    const { objectTypeId, ...query } = params;
    return this._client.get(path`/crm/v3/lists/object-type-id/${objectTypeId}/name/${listName}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the conversion details for a list. This can be used to check for an
   * upcoming conversion, or to get the details of when a list was already converted.
   *
   * @example
   * ```ts
   * const publicListConversionResponse =
   *   await client.crm.lists.getScheduleConversion('listId');
   * ```
   */
  getScheduleConversion(listID: string, options?: RequestOptions): APIPromise<PublicListConversionResponse> {
    return this._client.get(path`/crm/v3/lists/${listID}/schedule-conversion`, options);
  }

  /**
   * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible
   * to be restored up-to 90-days after the list has been deleted.
   *
   * @example
   * ```ts
   * await client.crm.lists.restore('listId');
   * ```
   */
  restore(listID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/crm/v3/lists/${listID}/restore`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Schedule the conversion of an active list into a static list, or update the
   * already scheduled conversion. This can be scheduled for a specific date or based
   * on activity.
   *
   * @example
   * ```ts
   * const publicListConversionResponse =
   *   await client.crm.lists.scheduleConversion('listId', {
   *     conversionType: 'CONVERSION_DATE',
   *     day: 0,
   *     month: 0,
   *     year: 0,
   *   });
   * ```
   */
  scheduleConversion(
    listID: string,
    body: ListScheduleConversionParams,
    options?: RequestOptions,
  ): APIPromise<PublicListConversionResponse> {
    return this._client.put(path`/crm/v3/lists/${listID}/schedule-conversion`, { body, ...options });
  }

  /**
   * Search lists by list name or page through all lists by providing an empty
   * `query` value.
   *
   * @example
   * ```ts
   * const listSearchResponse = await client.crm.lists.search();
   * ```
   */
  search(body: ListSearchParams, options?: RequestOptions): APIPromise<ListSearchResponse> {
    return this._client.post('/crm/v3/lists/search', { body, ...options });
  }

  /**
   * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list
   * memberships will be re-evaluated and updated to match the new definition.
   *
   * @example
   * ```ts
   * const listUpdateResponse = await client.crm.lists.updateFilters('listId', {
   *   filterBranch: {
   *     filterBranches: [
   *       { ... },
   *     ],
   *     filterBranchOperator: 'filterBranchOperator',
   *     filterBranchType: 'OR',
   *     filters: [
   *       { ... },
   *     ],
   *   },
   * });
   * ```
   */
  updateFilters(
    listID: string,
    params: ListUpdateFiltersParams,
    options?: RequestOptions,
  ): APIPromise<ListUpdateResponse> {
    const { enrollObjectsInWorkflows, ...body } = params;
    return this._client.put(path`/crm/v3/lists/${listID}/update-list-filters`, {
      query: { enrollObjectsInWorkflows },
      body,
      ...options,
    });
  }

  /**
   * Update the name of a list. The name must be globally unique relative to all
   * other public lists in the portal.
   *
   * @example
   * ```ts
   * const listUpdateResponse =
   *   await client.crm.lists.updateName('listId');
   * ```
   */
  updateName(
    listID: string,
    params: ListUpdateNameParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListUpdateResponse> {
    const { includeFilters, listName } = params ?? {};
    return this._client.put(path`/crm/v3/lists/${listID}/update-list-name`, {
      query: { includeFilters, listName },
      ...options,
    });
  }
}

export type JoinTimeAndRecordIDsPage = Page<JoinTimeAndRecordID>;

export interface APICollectionResponseJoinTimeAndRecordID {
  results: Array<JoinTimeAndRecordID>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;

  total?: number;
}

export interface APICollectionResponseRecordListMembershipNoPaging {
  results: Array<RecordListMembership>;

  total?: number;
}

export interface JoinTimeAndRecordID {
  membershipTimestamp: string;

  recordId: string;
}

/**
 * The request object used when creating a new object list.
 */
export interface ListCreateRequest {
  /**
   * The name of the list, which must be globally unique across all public lists in
   * the portal.
   */
  name: string;

  /**
   * The object type ID of the type of objects that the list will store.
   */
  objectTypeId: string;

  /**
   * The processing type of the list. One of: `SNAPSHOT`, `MANUAL`, or `DYNAMIC`.
   */
  processingType: string;

  /**
   * The list of custom properties to tie to the list. Custom property name is the
   * key, the value is the value.
   */
  customProperties?: { [key: string]: string };

  filterBranch?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  /**
   * The ID of the folder that the list should be created in. If left blank, then the
   * list will be created in the root of the list folder structure.
   */
  listFolderId?: number;

  listPermissions?: PublicListPermissions;

  membershipSettings?: PublicMembershipSettings;
}

/**
 * The response for a list create request.
 */
export interface ListCreateResponse {
  /**
   * An object list definition.
   */
  list: PublicObjectList;
}

/**
 * The response for a list fetch request.
 */
export interface ListFetchResponse {
  /**
   * An object list definition.
   */
  list: PublicObjectList;
}

/**
 * The definition of the list filter branch update request.
 */
export interface ListFilterUpdateRequest {
  filterBranch:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;
}

export interface ListFolderCreateRequest {
  /**
   * The name of the folder to be created.
   */
  name: string;

  /**
   * The folder this should be created in, if not specified will be created in the
   * root folder 0.
   */
  parentFolderId?: string;
}

export interface ListFolderCreateResponse {
  folder: PublicListFolder;
}

export interface ListFolderFetchResponse {
  folder: PublicListFolder;
}

export interface ListMoveRequest {
  /**
   * The Id of the list to move.
   */
  listId: string;

  /**
   * The Id of folder to move the list to, the root folder is Id 0.
   */
  newFolderId: string;
}

/**
 * The response object containing the lists found for a multi-list fetch.
 */
export interface ListsByIDResponse {
  /**
   * The object list definitions.
   */
  lists: Array<PublicObjectList>;
}

/**
 * The request object used for searching through lists.
 */
export interface ListSearchRequest {
  /**
   * The property names of any additional list properties to include in the response.
   * Properties that do not exist or that are empty for a particular list are not
   * included in the response.
   *
   * By default, all requests will fetch the following properties for each list:
   * `hs_list_size`, `hs_last_record_added_at`, `hs_last_record_removed_at`,
   * `hs_folder_name`, and `hs_list_reference_count`.
   */
  additionalProperties?: Array<string>;

  /**
   * The number of lists to include in the response. Defaults to `20` if no value is
   * provided. The max `count` is `500`.
   */
  count?: number;

  /**
   * The `listIds` that will be used to filter results by `listId`. If values are
   * provided, then the response will only include results that have a `listId` in
   * this array.
   *
   * If no value is provided, or if an empty list is provided, then the results will
   * not be filtered by `listId`.
   */
  listIds?: Array<string>;

  /**
   * Value used to paginate through lists. The `offset` provided in the response can
   * be used in the next request to fetch the next page of results. Defaults to `0`
   * if no offset is provided.
   */
  offset?: number;

  /**
   * The `processingTypes` that will be used to filter results by `processingType`.
   * If values are provided, then the response will only include results that have a
   * `processingType` in this array.
   *
   * If no value is provided, or if an empty list is provided, then results will not
   * be filtered by `processingType`.
   *
   * Valid `processingTypes` are: `MANUAL`, `SNAPSHOT`, or `DYNAMIC`.
   */
  processingTypes?: Array<string>;

  /**
   * The `query` that will be used to search for lists by list name. If no `query` is
   * provided, then the results will include all lists.
   */
  query?: string;

  sort?: string;
}

/**
 * The response object with the list search hits and additional information
 * regarding pagination.
 */
export interface ListSearchResponse {
  /**
   * Whether or not there are more results to page through.
   */
  hasMore: boolean;

  /**
   * The lists that matched the search criteria.
   */
  lists: Array<PublicObjectListSearchResult>;

  /**
   * Value to be passed in a future request to paginate through list search results.
   */
  offset: number;

  /**
   * The total number of lists that match the search criteria.
   */
  total: number;
}

/**
 * The updated definition of the list in response to a list update request.
 */
export interface ListUpdateResponse {
  /**
   * An object list definition.
   */
  updatedList?: PublicObjectList;
}

/**
 * The IDs of the records to add and/or remove from a list.
 */
export interface MembershipChangeRequest {
  recordIdsToAdd: Array<string>;

  recordIdsToRemove: Array<string>;
}

/**
 * The IDs of the records that were `added`, `removed`, and/or found to be
 * `missing` as a result of the membership update request.
 */
export interface MembershipsUpdateResponse {
  /**
   * The IDs of the records that were `missing` (e.g. did not exist in the portal)
   * and so were not `added` or `removed`.
   */
  recordIdsMissing: Array<string>;

  /**
   * The IDs of the records that were `removed` from the list.
   */
  recordIdsRemoved: Array<string>;

  recordsIdsAdded: Array<string>;
}

export interface PublicBatchMigrationMapping {
  legacyListIdsToIdsMapping: Array<PublicMigrationMapping>;

  /**
   * A list of legacy list ids that were passed in but not found. It will be empty if
   * no id's are missing
   */
  missingLegacyListIds: Array<string>;
}

export interface PublicListConversionDate {
  conversionType: 'CONVERSION_DATE';

  day: number;

  month: number;

  year: number;
}

export interface PublicListConversionInactivity {
  conversionType: 'INACTIVITY';

  offset: number;

  timeUnit: 'DAY' | 'WEEK' | 'MONTH';
}

export interface PublicListConversionResponse {
  listId: string;

  convertedAt?: string;

  requestedConversionTime?: PublicListConversionDate | PublicListConversionInactivity;
}

export type PublicListConversionTime = PublicListConversionDate | PublicListConversionInactivity;

export interface PublicListFolder {
  /**
   * The Id of the folder.
   */
  id: string;

  /**
   * An array of list Id's contained in this folder.
   */
  childLists: Array<number>;

  childNodes: Array<PublicListFolder>;

  /**
   * The Id of the folder this folder is in, the root folder is represented as 0.
   */
  parentFolderId: string;

  /**
   * The time the folder was created at.
   */
  createdAt?: string;

  /**
   * The name of the folder.
   */
  name?: string;

  /**
   * The time the folder was last updated at.
   */
  updatedAt?: string;

  /**
   * The time that the contents of the folder was last updated at.
   */
  updatedContentsAt?: string;

  /**
   * The user Id of the owner of the folder.
   */
  userId?: number;
}

export interface PublicListPermissions {
  teamsWithEditAccess: Array<number>;

  usersWithEditAccess: Array<number>;
}

export interface PublicMembershipSettings {
  includeUnassigned?: boolean;

  membershipTeamId?: number;
}

export interface PublicMigrationMapping {
  /**
   * The legacy list id for the list
   */
  legacyListId: string;

  /**
   * The V3 list id for the list
   */
  listId: string;
}

/**
 * An object list definition.
 */
export interface PublicObjectList {
  /**
   * The **ILS ID** of the list.
   */
  listId: string;

  /**
   * The version of the list.
   */
  listVersion: number;

  /**
   * The name of the list.
   */
  name: string;

  /**
   * The object type of the list.
   */
  objectTypeId: string;

  /**
   * The processing status of the list.
   */
  processingStatus: string;

  /**
   * The processing type of the list.
   */
  processingType: string;

  /**
   * The time when the list was created.
   */
  createdAt?: string;

  /**
   * The ID of the user that created the list.
   */
  createdById?: string;

  /**
   * The time when the list was deleted.
   */
  deletedAt?: string;

  filterBranch?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  /**
   * The time when the filters for this list were last updated.
   */
  filtersUpdatedAt?: string;

  listPermissions?: PublicListPermissions;

  membershipSettings?: PublicMembershipSettings;

  /**
   * Size of the list
   */
  size?: number;

  /**
   * The time the list was last updated.
   */
  updatedAt?: string;

  /**
   * The ID of the user that last updated the list.
   */
  updatedById?: string;
}

export interface PublicObjectListSearchResult {
  /**
   * The name and value of any additional properties that exist for this list and
   * that were included in the search request.
   */
  additionalProperties: { [key: string]: string };

  /**
   * The **ILS ID** of the list.
   */
  listId: string;

  /**
   * The version of the list.
   */
  listVersion: number;

  /**
   * The name of the list.
   */
  name: string;

  /**
   * The object type of the list.
   */
  objectTypeId: string;

  /**
   * The processing status of the list.
   */
  processingStatus: string;

  /**
   * The processing type of the list.
   */
  processingType: string;

  /**
   * The time when the list was created.
   */
  createdAt?: string;

  /**
   * The ID of the user that created the list.
   */
  createdById?: string;

  /**
   * The time when the list was deleted.
   */
  deletedAt?: string;

  /**
   * The time when the filters for this list were last updated.
   */
  filtersUpdatedAt?: string;

  /**
   * The time the list was last updated.
   */
  updatedAt?: string;

  /**
   * The ID of the user that last updated the list.
   */
  updatedById?: string;
}

/**
 * Lists record is member of
 */
export interface RecordListMembership {
  firstAddedTimestamp: string;

  lastAddedTimestamp: string;

  listId: string;

  listVersion: number;

  isPublicList?: boolean;
}

export interface ListCreateParams {
  /**
   * The name of the list, which must be globally unique across all public lists in
   * the portal.
   */
  name: string;

  /**
   * The object type ID of the type of objects that the list will store.
   */
  objectTypeId: string;

  /**
   * The processing type of the list. One of: `SNAPSHOT`, `MANUAL`, or `DYNAMIC`.
   */
  processingType: string;

  /**
   * The list of custom properties to tie to the list. Custom property name is the
   * key, the value is the value.
   */
  customProperties?: { [key: string]: string };

  filterBranch?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  /**
   * The ID of the folder that the list should be created in. If left blank, then the
   * list will be created in the root of the list folder structure.
   */
  listFolderId?: number;

  listPermissions?: PublicListPermissions;

  membershipSettings?: PublicMembershipSettings;
}

export interface ListListParams {
  /**
   * A flag indicating whether or not the response object list definitions should
   * include a filter branch definition. By default, object list definitions will not
   * have their filter branch definitions included in the response.
   */
  includeFilters?: boolean;

  /**
   * The **ILS IDs** of the lists to fetch.
   */
  listIds?: Array<string>;
}

export interface ListGetParams {
  /**
   * A flag indicating whether or not the response object list definition should
   * include a filter branch definition. By default, object list definitions will not
   * have their filter branch definitions included in the response.
   */
  includeFilters?: boolean;
}

export interface ListGetByObjectTypeIDAndNameParams {
  /**
   * Path param: The object type ID of the object types stored by the list to fetch.
   * For example, `0-1` for a `CONTACT` list.
   */
  objectTypeId: string;

  /**
   * Query param: A flag indicating whether or not the response object list
   * definition should include a filter branch definition. By default, object list
   * definitions will not have their filter branch definitions included in the
   * response.
   */
  includeFilters?: boolean;
}

export type ListScheduleConversionParams =
  | ListScheduleConversionParams.PublicListConversionDate
  | ListScheduleConversionParams.PublicListConversionInactivity;

export declare namespace ListScheduleConversionParams {
  export interface PublicListConversionDate {
    conversionType: 'CONVERSION_DATE';

    day: number;

    month: number;

    year: number;
  }

  export interface PublicListConversionInactivity {
    conversionType: 'INACTIVITY';

    offset: number;

    timeUnit: 'DAY' | 'WEEK' | 'MONTH';
  }
}

export interface ListSearchParams {
  /**
   * The property names of any additional list properties to include in the response.
   * Properties that do not exist or that are empty for a particular list are not
   * included in the response.
   *
   * By default, all requests will fetch the following properties for each list:
   * `hs_list_size`, `hs_last_record_added_at`, `hs_last_record_removed_at`,
   * `hs_folder_name`, and `hs_list_reference_count`.
   */
  additionalProperties?: Array<string>;

  /**
   * The number of lists to include in the response. Defaults to `20` if no value is
   * provided. The max `count` is `500`.
   */
  count?: number;

  /**
   * The `listIds` that will be used to filter results by `listId`. If values are
   * provided, then the response will only include results that have a `listId` in
   * this array.
   *
   * If no value is provided, or if an empty list is provided, then the results will
   * not be filtered by `listId`.
   */
  listIds?: Array<string>;

  /**
   * Value used to paginate through lists. The `offset` provided in the response can
   * be used in the next request to fetch the next page of results. Defaults to `0`
   * if no offset is provided.
   */
  offset?: number;

  /**
   * The `processingTypes` that will be used to filter results by `processingType`.
   * If values are provided, then the response will only include results that have a
   * `processingType` in this array.
   *
   * If no value is provided, or if an empty list is provided, then results will not
   * be filtered by `processingType`.
   *
   * Valid `processingTypes` are: `MANUAL`, `SNAPSHOT`, or `DYNAMIC`.
   */
  processingTypes?: Array<string>;

  /**
   * The `query` that will be used to search for lists by list name. If no `query` is
   * provided, then the results will include all lists.
   */
  query?: string;

  sort?: string;
}

export interface ListUpdateFiltersParams {
  /**
   * Body param:
   */
  filterBranch:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  /**
   * Query param: A flag indicating whether or not the memberships added to the list
   * as a result of the filter change should be enrolled in workflows that are
   * relevant to this list.
   */
  enrollObjectsInWorkflows?: boolean;
}

export interface ListUpdateNameParams {
  /**
   * A flag indicating whether or not the response object list definition should
   * include a filter branch definition. By default, object list definitions will not
   * have their filter branch definitions included in the response.
   */
  includeFilters?: boolean;

  /**
   * The name to update the list to.
   */
  listName?: string;
}

Lists.Folders = Folders;
Lists.Mapping = Mapping;
Lists.Memberships = Memberships;

export declare namespace Lists {
  export {
    type APICollectionResponseJoinTimeAndRecordID as APICollectionResponseJoinTimeAndRecordID,
    type APICollectionResponseRecordListMembershipNoPaging as APICollectionResponseRecordListMembershipNoPaging,
    type JoinTimeAndRecordID as JoinTimeAndRecordID,
    type ListCreateRequest as ListCreateRequest,
    type ListCreateResponse as ListCreateResponse,
    type ListFetchResponse as ListFetchResponse,
    type ListFilterUpdateRequest as ListFilterUpdateRequest,
    type ListFolderCreateRequest as ListFolderCreateRequest,
    type ListFolderCreateResponse as ListFolderCreateResponse,
    type ListFolderFetchResponse as ListFolderFetchResponse,
    type ListMoveRequest as ListMoveRequest,
    type ListsByIDResponse as ListsByIDResponse,
    type ListSearchRequest as ListSearchRequest,
    type ListSearchResponse as ListSearchResponse,
    type ListUpdateResponse as ListUpdateResponse,
    type MembershipChangeRequest as MembershipChangeRequest,
    type MembershipsUpdateResponse as MembershipsUpdateResponse,
    type PublicBatchMigrationMapping as PublicBatchMigrationMapping,
    type PublicListConversionDate as PublicListConversionDate,
    type PublicListConversionInactivity as PublicListConversionInactivity,
    type PublicListConversionResponse as PublicListConversionResponse,
    type PublicListConversionTime as PublicListConversionTime,
    type PublicListFolder as PublicListFolder,
    type PublicListPermissions as PublicListPermissions,
    type PublicMembershipSettings as PublicMembershipSettings,
    type PublicMigrationMapping as PublicMigrationMapping,
    type PublicObjectList as PublicObjectList,
    type PublicObjectListSearchResult as PublicObjectListSearchResult,
    type RecordListMembership as RecordListMembership,
    type ListCreateParams as ListCreateParams,
    type ListListParams as ListListParams,
    type ListGetParams as ListGetParams,
    type ListGetByObjectTypeIDAndNameParams as ListGetByObjectTypeIDAndNameParams,
    type ListScheduleConversionParams as ListScheduleConversionParams,
    type ListSearchParams as ListSearchParams,
    type ListUpdateFiltersParams as ListUpdateFiltersParams,
    type ListUpdateNameParams as ListUpdateNameParams,
  };

  export {
    Folders as Folders,
    type FolderCreateParams as FolderCreateParams,
    type FolderGetParams as FolderGetParams,
    type FolderMoveParams as FolderMoveParams,
    type FolderMoveListParams as FolderMoveListParams,
    type FolderRenameParams as FolderRenameParams,
  };

  export {
    Mapping as Mapping,
    type MappingBatchCreateIDMappingParams as MappingBatchCreateIDMappingParams,
    type MappingGetIDMappingParams as MappingGetIDMappingParams,
  };

  export {
    Memberships as Memberships,
    type MembershipListParams as MembershipListParams,
    type MembershipAddParams as MembershipAddParams,
    type MembershipAddAllFromListParams as MembershipAddAllFromListParams,
    type MembershipAddAndRemoveParams as MembershipAddAndRemoveParams,
    type MembershipGetListsParams as MembershipGetListsParams,
    type MembershipGetPageOrderedByAddedToListDateParams as MembershipGetPageOrderedByAddedToListDateParams,
    type MembershipRemoveParams as MembershipRemoveParams,
  };
}
