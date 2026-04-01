// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Lists extends APIResource {
  create(body: ListCreateParams, options?: RequestOptions): APIPromise<ListCreateResponse> {
    return this._client.post('/crm/lists/2026-03', { body, ...options });
  }

  list(
    query: ListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListsByIDResponse> {
    return this._client.get('/crm/lists/2026-03', { query, ...options });
  }

  delete(listID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/lists/2026-03/${listID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  addAndRemoveMemberships(
    listID: string,
    body: ListAddAndRemoveMembershipsParams,
    options?: RequestOptions,
  ): APIPromise<MembershipsUpdateResponse> {
    return this._client.put(path`/crm/lists/2026-03/${listID}/memberships/add-and-remove`, {
      body,
      ...options,
    });
  }

  addMemberships(
    listID: string,
    params: ListAddMembershipsParams,
    options?: RequestOptions,
  ): APIPromise<MembershipsUpdateResponse> {
    const { body } = params;
    return this._client.put(path`/crm/lists/2026-03/${listID}/memberships/add`, { body: body, ...options });
  }

  addMembershipsFrom(
    sourceListID: string,
    params: ListAddMembershipsFromParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { listId } = params;
    return this._client.put(path`/crm/lists/2026-03/${listId}/memberships/add-from/${sourceListID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  batchReadMemberships(
    body: ListBatchReadMembershipsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseRecordIDWithMemberships> {
    return this._client.post('/crm/lists/2026-03/records/memberships/batch/read', { body, ...options });
  }

  createFolder(body: ListCreateFolderParams, options?: RequestOptions): APIPromise<ListFolderCreateResponse> {
    return this._client.post('/crm/lists/2026-03/folders', { body, ...options });
  }

  createIDMapping(
    params: ListCreateIDMappingParams,
    options?: RequestOptions,
  ): APIPromise<PublicBatchMigrationMapping> {
    const { body } = params;
    return this._client.post('/crm/lists/2026-03/idmapping', { body: body, ...options });
  }

  deleteFolder(folderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/lists/2026-03/folders/${folderID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteMemberships(listID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/lists/2026-03/${listID}/memberships`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  get(
    listID: string,
    query: ListGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListFetchResponse> {
    return this._client.get(path`/crm/lists/2026-03/${listID}`, { query, ...options });
  }

  getByObjectTypeAndName(
    listName: string,
    params: ListGetByObjectTypeAndNameParams,
    options?: RequestOptions,
  ): APIPromise<ListFetchResponse> {
    const { objectTypeId, ...query } = params;
    return this._client.get(path`/crm/lists/2026-03/object-type-id/${objectTypeId}/name/${listName}`, {
      query,
      ...options,
    });
  }

  getIDMapping(
    query: ListGetIDMappingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicMigrationMapping> {
    return this._client.get('/crm/lists/2026-03/idmapping', { query, ...options });
  }

  getMembershipsJoinOrder(
    listID: string,
    query: ListGetMembershipsJoinOrderParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<JoinTimeAndRecordIDsPage, JoinTimeAndRecordID> {
    return this._client.getAPIList(
      path`/crm/lists/2026-03/${listID}/memberships/join-order`,
      Page<JoinTimeAndRecordID>,
      { query, ...options },
    );
  }

  getRecordMemberships(
    recordID: string,
    params: ListGetRecordMembershipsParams,
    options?: RequestOptions,
  ): APIPromise<APICollectionResponseRecordListMembership> {
    const { objectTypeId } = params;
    return this._client.get(
      path`/crm/lists/2026-03/records/${objectTypeId}/${recordID}/memberships`,
      options,
    );
  }

  getScheduleConversion(listID: string, options?: RequestOptions): APIPromise<PublicListConversionResponse> {
    return this._client.get(path`/crm/lists/2026-03/${listID}/schedule-conversion`, options);
  }

  getSizeAndEditsHistoryBetween(
    listID: string,
    query: ListGetSizeAndEditsHistoryBetweenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSizeAndEditHistoryResponse> {
    return this._client.get(path`/crm/lists/2026-03/${listID}/size-and-edits-history/between`, {
      query,
      ...options,
    });
  }

  listBySearch(body: ListListBySearchParams, options?: RequestOptions): APIPromise<ListSearchResponse> {
    return this._client.post('/crm/lists/2026-03/search', { body, ...options });
  }

  listFolders(
    query: ListListFoldersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListFolderFetchResponse> {
    return this._client.get('/crm/lists/2026-03/folders', { query, ...options });
  }

  listMemberships(
    listID: string,
    query: ListListMembershipsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<JoinTimeAndRecordIDsPage, JoinTimeAndRecordID> {
    return this._client.getAPIList(
      path`/crm/lists/2026-03/${listID}/memberships`,
      Page<JoinTimeAndRecordID>,
      { query, ...options },
    );
  }

  moveFolder(
    newParentFolderID: string,
    params: ListMoveFolderParams,
    options?: RequestOptions,
  ): APIPromise<ListFolderFetchResponse> {
    const { folderId } = params;
    return this._client.put(path`/crm/lists/2026-03/folders/${folderId}/move/${newParentFolderID}`, options);
  }

  moveList(body: ListMoveListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/crm/lists/2026-03/folders/move-list', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  removeMemberships(
    listID: string,
    params: ListRemoveMembershipsParams,
    options?: RequestOptions,
  ): APIPromise<MembershipsUpdateResponse> {
    const { body } = params;
    return this._client.put(path`/crm/lists/2026-03/${listID}/memberships/remove`, {
      body: body,
      ...options,
    });
  }

  renameFolder(
    folderID: string,
    params: ListRenameFolderParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListFolderFetchResponse> {
    const { newFolderName } = params ?? {};
    return this._client.put(path`/crm/lists/2026-03/folders/${folderID}/rename`, {
      query: { newFolderName },
      ...options,
    });
  }

  restore(listID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/crm/lists/2026-03/${listID}/restore`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  scheduleConversion(listID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/lists/2026-03/${listID}/schedule-conversion`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateListFilters(
    listID: string,
    params: ListUpdateListFiltersParams,
    options?: RequestOptions,
  ): APIPromise<ListUpdateResponse> {
    const { enrollObjectsInWorkflows, ...body } = params;
    return this._client.put(path`/crm/lists/2026-03/${listID}/update-list-filters`, {
      query: { enrollObjectsInWorkflows },
      body,
      ...options,
    });
  }

  updateListName(
    listID: string,
    params: ListUpdateListNameParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListUpdateResponse> {
    const { includeFilters, listName } = params ?? {};
    return this._client.put(path`/crm/lists/2026-03/${listID}/update-list-name`, {
      query: { includeFilters, listName },
      ...options,
    });
  }

  updateScheduleConversion(
    listID: string,
    body: ListUpdateScheduleConversionParams,
    options?: RequestOptions,
  ): APIPromise<PublicListConversionResponse> {
    return this._client.put(path`/crm/lists/2026-03/${listID}/schedule-conversion`, { body, ...options });
  }
}

export type JoinTimeAndRecordIDsPage = Page<JoinTimeAndRecordID>;

export interface APICollectionResponseJoinTimeAndRecordID {
  results: Array<JoinTimeAndRecordID>;

  paging?: Shared.Paging;

  /**
   * The total number of records that match the query.
   */
  total?: number;
}

export interface APICollectionResponseRecordListMembership {
  results: Array<RecordListMembership>;

  paging?: Shared.Paging;

  total?: number;
}

export interface BatchInputRecordIDInput {
  inputs: Array<RecordIDInput>;
}

export interface BatchResponseRecordIDWithMemberships {
  completedAt: string;

  results: Array<RecordIDWithMemberships>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponseRecordIDWithMembershipsWithErrors {
  completedAt: string;

  results: Array<RecordIDWithMemberships>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface JoinTimeAndRecordID {
  /**
   * The date and time when the record was added to the list.
   */
  membershipTimestamp: string;

  /**
   * The unique identifier of the record.
   */
  recordId: string;
}

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

  /**
   * Filter branch object containing filtering criteria for the list
   */
  filterBranch?:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

  /**
   * The ID of the folder that the list should be created in. If left blank, then the
   * list will be created in the root of the list folder structure.
   */
  listFolderId?: number;

  listPermissions?: PublicListPermissions;

  membershipSettings?: PublicMembershipSettings;
}

export interface ListCreateResponse {
  list: PublicObjectList;
}

export interface ListFetchResponse {
  list: PublicObjectList;
}

export interface ListFilterUpdateRequest {
  /**
   * Updated filtering criteria for the list
   */
  filterBranch:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;
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
  additionalProperties: Array<string>;

  /**
   * ILS list ids to be included in search results. If not specified, all lists
   * matching other criteria will be included
   */
  listIds: Array<string>;

  /**
   * Value used to paginate through lists. The `offset` provided in the response can
   * be used in the next request to fetch the next page of results. Defaults to `0`
   * if no offset is provided.
   */
  offset: number;

  /**
   * List processing types to be included in search results. If not specified, all
   * lists with all processing types will be included.
   */
  processingTypes: Array<string>;

  /**
   * The number of lists to include in the response. Defaults to `20` if no value is
   * provided. The max `count` is `500`.
   */
  count?: number;

  objectTypeId?: string;

  /**
   * The `query` that will be used to search for lists by list name. If no `query` is
   * provided, then the results will include all lists.
   */
  query?: string;

  /**
   * Sort field and order
   */
  sort?: string;
}

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

export interface ListSizeAndEditHistoryResponse {
  editHistory: Array<string>;

  sizeHistory: Array<ListSizeDataPoint>;
}

export interface ListSizeDataPoint {
  size: number;

  timestamp: string;
}

export interface ListUpdateResponse {
  updatedList?: PublicObjectList;
}

export interface ListsByIDResponse {
  /**
   * The object list definitions.
   */
  lists: Array<PublicObjectList>;
}

export interface MembershipChangeRequest {
  recordIdsToAdd: Array<string>;

  recordIdsToRemove: Array<string>;
}

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

export interface PublicAbsoluteComparativeTimestampRefineBy {
  /**
   * Timestamp comparison options (BEFORE, AFTER)
   */
  comparison: string;

  /**
   * Timestamp to be used in refine by criteria
   */
  timestamp: number;

  /**
   * type of refine by criteria (ABSOLUTE_COMPARATIVE)
   */
  type: 'ABSOLUTE_COMPARATIVE';
}

export interface PublicAbsoluteRangedTimestampRefineBy {
  /**
   * Lower range timestamp of refinement criteria
   */
  lowerTimestamp: number;

  /**
   * Type of range of refinement critaria (BETWEEN, NOT_BETWEEN)
   */
  rangeType: string;

  /**
   * type of refine by criteria (ABSOLUTE_RANGED)
   */
  type: 'ABSOLUTE_RANGED';

  /**
   * Upper range timestamp of refinement criteria
   */
  upperTimestamp: number;
}

export interface PublicAdsSearchFilter {
  /**
   * Ad network (ADWORDS, FACEBOOK, LINKEDIN, ALL)
   */
  adNetwork: string;

  /**
   * Type of ad entity (KEYWORD, ADGROUP, AD, CAMPAIGN)
   */
  entityType: string;

  /**
   * Type of the filter (ADS_SEARCH)
   */
  filterType: 'ADS_SEARCH';

  /**
   * Operator to be applied (CONTAINS, IS_EQUAL_TO, ENDS_WITH, STARTS_WITH, IS_KNOWN)
   */
  operator: string;

  searchTerms: Array<string>;

  /**
   * Search term to match an ad
   */
  searchTermType: string;
}

export interface PublicAdsTimeFilter {
  /**
   * Filter type (ADS_TIME)
   */
  filterType: 'ADS_TIME';

  /**
   * Refinement criteria
   */
  pruningRefineBy:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicAllHistoryRefineBy {
  /**
   * Type of refine by (ALL_HISTORY)
   */
  type: 'ALL_HISTORY';
}

export interface PublicAllPropertyTypesOperation {
  /**
   * Indication of whether objects with no value should be included
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * Type of operation (ALL_PROPERTY)
   */
  operationType: 'ALL_PROPERTY';

  /**
   * Operator to be applied (IS_KNOWN, IS_UNKNOWN)
   */
  operator: string;
}

export interface PublicAndFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  /**
   * Filter branch operator (AND)
   */
  filterBranchOperator: string;

  /**
   * Type of filter branch (AND)
   */
  filterBranchType: 'AND';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;
}

export interface PublicAssociationFilterBranch {
  /**
   * Specifies the category of the association for the filter branch
   * (HUBSPOT_DEFINED, USER_DEFINED, INTEGRATOR_DEFINED, WORK).
   */
  associationCategory: string;

  /**
   * Type id of the association
   */
  associationTypeId: number;

  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  /**
   * Filter branch operator (AND)
   */
  filterBranchOperator: string;

  /**
   * Type of the filter branch (ASSOCIATION)
   */
  filterBranchType: 'ASSOCIATION';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;

  /**
   * The ID representing the type of object associated with the filter branch.
   */
  objectTypeId: string;

  /**
   * Defines the operation to be applied within the filter branch (IN_LIST,
   * NOT_IN_LIST).
   */
  operator: string;
}

export interface PublicAssociationInListFilter {
  /**
   * Defines the category of the association, such as (HUBSPOT_DEFINED, USER_DEFINED,
   * INTEGRATOR_DEFINED, WORK).
   */
  associationCategory: string;

  /**
   * The ID representing the type of association being filtered.
   */
  associationTypeId: number;

  /**
   * Specifies the criteria for refining the association filter.
   */
  coalescingRefineBy:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * Indicates the type of filter being applied, which is 'ASSOCIATION' by default.
   */
  filterType: 'ASSOCIATION';

  /**
   * The ID of the list used in the association filter.
   */
  listId: string;

  /**
   * Specifies the operation to be performed by the filter, such as 'IN_LIST' or
   * 'NOT_IN_LIST'.
   */
  operator: string;

  /**
   * The type of object that the association filter is targeting.
   */
  toObjectType?: string;

  /**
   * The ID representing the type of object that the association filter is targeting.
   */
  toObjectTypeId?: string;
}

export interface PublicBatchMigrationMapping {
  legacyListIdsToIdsMapping: Array<PublicMigrationMapping>;

  /**
   * A list of legacy list ids that were passed in but not found. It will be empty if
   * no id's are missing
   */
  missingLegacyListIds: Array<string>;
}

export interface PublicBoolPropertyOperation {
  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * Specifies the type of operation (BOOL).
   */
  operationType: 'BOOL';

  /**
   * Defines the operation to be applied in the boolean property operation
   * (IS_EQUAL_TO, IS_NOT_EQUAL_TO, HAS_EVER_BEEN_EQUAL_TO, HAS_NEVER_BEEN_EQUAL_TO).
   */
  operator: string;

  /**
   * The boolean value to be used in the operation.
   */
  value: boolean;
}

export interface PublicCalendarDatePropertyOperation {
  /**
   * Indicates whether objects with no value set for the property should be included.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * The type of operation, which is (CALENDAR_DATE).
   */
  operationType: 'CALENDAR_DATE';

  /**
   * Defines the operation to be applied to the calendar date property
   * (IN_THIS_TIME_UNIT, IN_THIS_TIME_UNIT_SO_FAR, IN_NEXT_TIME_UNIT,
   * IN_LAST_TIME_UNIT).
   */
  operator: string;

  /**
   * The unit of time to be used in the operation (DAY, WEEK, MONTH, QUARTER, YEAR).
   */
  timeUnit: string;

  /**
   * The month in which the fiscal year starts.
   */
  fiscalYearStart?:
    | 'APRIL'
    | 'AUGUST'
    | 'DECEMBER'
    | 'FEBRUARY'
    | 'JANUARY'
    | 'JULY'
    | 'JUNE'
    | 'MARCH'
    | 'MAY'
    | 'NOVEMBER'
    | 'OCTOBER'
    | 'SEPTEMBER';

  /**
   * The count of time units to be applied in the operation (1).
   */
  timeUnitCount?: number;

  /**
   * Specifies whether the fiscal year should be used in the operation.
   */
  useFiscalYear?: boolean;
}

export interface PublicCampaignInfluencedFilter {
  /**
   * The ID of the campaign that influences the filter.
   */
  campaignId: string;

  /**
   * Indicates the type of filter (CAMPAIGN_INFLUENCED).
   */
  filterType: 'CAMPAIGN_INFLUENCED';
}

export interface PublicCommunicationSubscriptionFilter {
  acceptedOptStates: Array<string>;

  /**
   * Specifies the communication channel associated with the subscription filter
   * (EMAIL, WHATSAPP, SMS).
   */
  channel: string;

  /**
   * Indicates the type of filter, which is (COMMUNICATION_SUBSCRIPTION)
   */
  filterType: 'COMMUNICATION_SUBSCRIPTION';

  subscriptionIds: Array<string>;

  /**
   * Defines the type of subscription related to the filter (PORTAL_WIDE,
   * BUSINESS_UNIT_WIDE, INDIVIDUAL_SUBSCRIPTION)
   */
  subscriptionType: string;

  /**
   * The ID of the business unit associated with the subscription filter.
   */
  businessUnitId?: string;
}

export interface PublicComparativeDatePropertyOperation {
  /**
   * The name of the property to compare against in the operation.
   */
  comparisonPropertyName: string;

  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * The type of operation (COMPARATIVE_DATE).
   */
  operationType: 'COMPARATIVE_DATE';

  /**
   * Defines the operation to be applied in the comparative date property operation
   * (IS_BEFORE, IS_AFTER).
   */
  operator: string;

  /**
   * The default value used for comparison if the actual comparison property value is
   * not set.
   */
  defaultComparisonValue?: string;
}

export interface PublicComparativePropertyUpdatedOperation {
  /**
   * The name of the property to compare against in the operation.
   */
  comparisonPropertyName: string;

  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * Specifies the type of operation (COMPARATIVE_PROPERTY_UPDATED).
   */
  operationType: 'COMPARATIVE_PROPERTY_UPDATED';

  /**
   * Defines the operation to be applied, such as comparison operators (IS_BEFORE,
   * IS_AFTER).
   */
  operator: string;

  /**
   * The default value used for comparison if the actual comparison property value is
   * not set.
   */
  defaultComparisonValue?: string;
}

export interface PublicConstantFilter {
  /**
   * Specifies the type of filter, which is (CONSTANT).
   */
  filterType: 'CONSTANT';

  /**
   * Indicates whether the filter should accept the condition.
   */
  shouldAccept: boolean;

  /**
   * Defines the source of the constant filter.
   */
  source?: string;
}

export interface PublicCtaAnalyticsFilter {
  /**
   * The name of the Call-to-Action (CTA) to be used in the filter.
   */
  ctaName: string;

  /**
   * Indicates the type of filter being applied, which is (CTA).
   */
  filterType: 'CTA';

  /**
   * Defines the operation to be applied within the filter (HAS_CLICKED_CTA,
   * HAS_NOT_CLICKED_CTA, HAS_OPENED_CTA, HAS_NOT_OPENED_CTA,
   * HAS_CLICKED_CTA_PLACEMENT, HAS_NOT_CLICKED_CTA_PLACEMENT,
   * HAS_OPENED_CTA_PLACEMENT, HAS_NOT_OPENED_CTA_PLACEMENT).
   */
  operator: string;

  /**
   * Specifies the criteria for refining the filter by coalescing.
   */
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * Specifies the criteria for refining the filter by pruning.
   */
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicDatePoint {
  /**
   * The day component of the date.
   */
  day: number;

  /**
   * The month component of the date.
   */
  month: number;

  /**
   * Specifies the type of time (DATE).
   */
  timeType: 'DATE';

  /**
   * The year component of the date.
   */
  year: number;

  /**
   * The identifier for the time zone.
   */
  zoneId: string;

  /**
   * The hour component of the time.
   */
  hour?: number;

  /**
   * The millisecond component of the time.
   */
  millisecond?: number;

  /**
   * The minute component of the time.
   */
  minute?: number;

  /**
   * The second component of the time.
   */
  second?: number;

  /**
   * The source of the time zone information.
   */
  timezoneSource?: string;
}

export interface PublicDatePropertyOperation {
  /**
   * The day of the month for the date operation.
   */
  day: number;

  /**
   * Indicates whether objects with no value set for the property should be included.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * The month for the date operation.
   */
  month: string;

  /**
   * Specifies the type of operation (DATE).
   */
  operationType: 'DATE';

  /**
   * Defines the operation to be applied in the date property operation
   * (IS_LESS_THAN_X_DAYS_AGO, IS_MORE_THAN_X_DAYS_AGO, IS_LESS_THAN_X_DAYS_FROM_NOW,
   * IS_MORE_THAN_X_DAYS_FROM_NOW).
   */
  operator: string;

  /**
   * The year for the date operation.
   */
  year: number;
}

export interface PublicDateTimePropertyOperation {
  /**
   * Specifies whether objects without a set value should be included in the
   * operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * The type of operation (DATETIME).
   */
  operationType: 'DATETIME';

  /**
   * Defines the operation to be applied, such as comparison operators (IS_BEFORE,
   * IS_AFTER).
   */
  operator: string;

  /**
   * Indicates whether the timestamp requires conversion to a different time zone.
   */
  requiresTimeZoneConversion: boolean;

  /**
   * The specific point in time used in the operation.
   */
  timestamp: number;
}

export interface PublicEmailEventFilter {
  /**
   * The ID of the application associated with the email event filter.
   */
  appId: string;

  /**
   * The ID of the email associated with the event filter.
   */
  emailId: string;

  /**
   * Indicates the type of filter (EMAIL_EVENT).
   */
  filterType: 'EMAIL_EVENT';

  /**
   * Specifies the level of the email event, such as EMAIL_API_CAMPAIGN_GROUP.
   */
  level: string;

  /**
   * Defines the operation to be applied within the filter (BOUNCED, LINK_CLICKED,
   * MARKED_SPAM, OPENED, OPENED_BUT_LINK_NOT_CLICKED, OPENED_BUT_NOT_REPLIED,
   * RECEIVED, RECEIVED_BUT_NOT_OPENED, REPLIED, SENT, SENT_BUT_LINK_NOT_CLICKED,
   * SENT_BUT_NOT_RECEIVED, UNSUBSCRIBED).
   */
  operator:
    | 'BOUNCED'
    | 'LINK_CLICKED'
    | 'MARKED_SPAM'
    | 'OPENED'
    | 'OPENED_BUT_LINK_NOT_CLICKED'
    | 'OPENED_BUT_NOT_REPLIED'
    | 'RECEIVED'
    | 'RECEIVED_BUT_NOT_OPENED'
    | 'REPLIED'
    | 'SENT'
    | 'SENT_BUT_LINK_NOT_CLICKED'
    | 'SENT_BUT_NOT_RECEIVED'
    | 'UNSUBSCRIBED';

  /**
   * The URL that was clicked in the email event.
   */
  clickUrl?: string;

  /**
   * Specifies the criteria for refining the filter by pruning.
   */
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicEmailSubscriptionFilter {
  acceptedStatuses: Array<string>;

  /**
   * Indicates the type of filter (EMAIL_SUBSCRIPTION).
   */
  filterType: 'EMAIL_SUBSCRIPTION';

  subscriptionIds: Array<string>;

  /**
   * The type of subscription related to the filter (PORTAL, BRAND, SUBSCRIPTION,
   * HARDBOUNCE, SPAMREPORT).
   */
  subscriptionType?: string;
}

export interface PublicEnumerationPropertyOperation {
  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * Specifies the type of operation (ENUMERATION).
   */
  operationType: 'ENUMERATION';

  /**
   * Defines the operation to be applied in the enumeration property operation
   * (IS_ANY_OF, IS_NONE_OF, IS_EXACTLY, IS_NOT_EXACTLY, CONTAINS_ALL,
   * DOES_NOT_CONTAIN_ALL, HAS_EVER_BEEN_ANY_OF, HAS_NEVER_BEEN_ANY_OF,
   * HAS_EVER_BEEN_EXACTLY, HAS_NEVER_BEEN_EXACTLY, HAS_EVER_CONTAINED_ALL,
   * HAS_NEVER_CONTAINED_ALL).
   */
  operator: string;

  values: Array<string>;
}

export interface PublicEventAnalyticsFilter {
  /**
   * The ID of the event to be used in the filter.
   */
  eventId: string;

  /**
   * Indicates the type of filter being applied (EVENT).
   */
  filterType: 'EVENT';

  /**
   * Defines the operation to be applied within the event filter (HAS_EVENT,
   * NOT_HAS_EVENT).
   */
  operator: string;

  /**
   * Specifies the criteria for refining the event filter by coalescing.
   */
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * Specifies the criteria for refining the event filter by pruning.
   */
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicEventFilterMetadata {
  /**
   * Defines the operation to be performed on the property
   */
  operation:
    | PublicBoolPropertyOperation
    | PublicNumberPropertyOperation
    | PublicStringPropertyOperation
    | PublicDateTimePropertyOperation
    | PublicRangedDatePropertyOperation
    | PublicComparativePropertyUpdatedOperation
    | PublicComparativeDatePropertyOperation
    | PublicRollingDateRangePropertyOperation
    | PublicRollingPropertyUpdatedOperation
    | PublicEnumerationPropertyOperation
    | PublicAllPropertyTypesOperation
    | PublicRangedNumberPropertyOperation
    | PublicMultiStringPropertyOperation
    | PublicDatePropertyOperation
    | PublicCalendarDatePropertyOperation
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * Specifies the property on which the operation is to be applied.
   */
  property: string;
}

export interface PublicFiscalQuarterReference {
  /**
   * The day component of the fiscal quarter reference.
   */
  day: number;

  /**
   * The month component of the fiscal quarter reference.
   */
  month: number;

  /**
   * Indicates the type of reference (FISCAL_QUARTER).
   */
  referenceType: 'FISCAL_QUARTER';

  /**
   * The hour component of the fiscal quarter reference.
   */
  hour?: number;

  /**
   * The millisecond component of the fiscal quarter reference.
   */
  millisecond?: number;

  /**
   * The minute component of the fiscal quarter reference.
   */
  minute?: number;

  /**
   * The second component of the fiscal quarter reference.
   */
  second?: number;
}

export interface PublicFiscalYearReference {
  /**
   * The day component of the fiscal year reference.
   */
  day: number;

  /**
   * The month component of the fiscal year reference.
   */
  month: number;

  /**
   * Indicates the type of reference (FISCAL_YEAR).
   */
  referenceType: 'FISCAL_YEAR';

  /**
   * The hour component of the fiscal year reference.
   */
  hour?: number;

  /**
   * The millisecond component of the fiscal year reference.
   */
  millisecond?: number;

  /**
   * The minute component of the fiscal year reference.
   */
  minute?: number;

  /**
   * The second component of the fiscal year reference.
   */
  second?: number;
}

export interface PublicFormSubmissionFilter {
  /**
   * Indicates the type of filter (FORM_SUBMISSION).
   */
  filterType: 'FORM_SUBMISSION';

  /**
   * Specifies the operation to be performed (FILLED_OUT, NOT_FILLED_OUT).
   */
  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT';

  /**
   * Specifies the criteria for refining the filter by coalescing.
   */
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * The ID of the form used in the filter.
   */
  formId?: string;

  /**
   * Specifies the criteria for refining the filter by pruning.
   */
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicFormSubmissionOnPageFilter {
  /**
   * Indicates the type of filter (FORM_SUBMISSION_ON_PAGE).
   */
  filterType: 'FORM_SUBMISSION_ON_PAGE';

  /**
   * Specifies the operation to be applied (FILLED_OUT, NOT_FILLED_OUT).
   */
  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT';

  /**
   * The ID of the page where the form submission occurred.
   */
  pageId: string;

  /**
   * Defines the criteria for refining the filter by coalescing.
   */
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * The ID of the form associated with the submission filter.
   */
  formId?: string;

  /**
   * Specifies the criteria for refining the filter by pruning.
   */
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicInListFilter {
  /**
   * Indicates the type of filter being applied (IN_LIST).
   */
  filterType: 'IN_LIST';

  /**
   * The ID of the list used in the association filter.
   */
  listId: string;

  /**
   * Specifies the operation to be performed by the filter (IN_LIST, NOT_IN_LIST).
   */
  operator: string;

  metadata?: PublicInListFilterMetadata;
}

export interface PublicInListFilterMetadata {
  /**
   * The identifier for the filter metadata.
   */
  id: string;

  /**
   * Specifies the type of list for the filter (WORKFLOWS_ENROLLMENT,
   * WORKFLOWS_ACTIVE, WORKFLOWS_GOAL, WORKFLOWS_COMPLETED, IMPORT, DATASET,
   * DATASETS).
   */
  inListType: string;
}

export interface PublicIndexOffset {
  /**
   * The number of days to offset.
   */
  days?: number;

  /**
   * The number of hours to offset.
   */
  hours?: number;

  /**
   * The number of milliseconds to offset.
   */
  milliseconds?: number;

  /**
   * The number of minutes to offset.
   */
  minutes?: number;

  /**
   * The number of months to offset.
   */
  months?: number;

  /**
   * The number of quarters to offset.
   */
  quarters?: number;

  /**
   * The number of seconds to offset.
   */
  seconds?: number;

  /**
   * The number of weeks to offset.
   */
  weeks?: number;

  /**
   * The number of years to offset.
   */
  years?: number;
}

export interface PublicIndexedTimePoint {
  /**
   * Specifies the reference point in time for the indexed time point.
   */
  indexReference:
    | PublicNowReference
    | PublicTodayReference
    | PublicWeekReference
    | PublicFiscalQuarterReference
    | PublicFiscalYearReference
    | PublicYearReference
    | PublicQuarterReference
    | PublicMonthReference;

  /**
   * Defines the type of time (INDEXED).
   */
  timeType: 'INDEXED';

  /**
   * Indicates the identifier for the time zone associated with the indexed time
   * point.
   */
  zoneId: string;

  offset?: PublicIndexOffset;

  /**
   * Specifies the source of the time zone information for the indexed time point
   * (CUSTOM, USER, PORTAL).
   */
  timezoneSource?: string;
}

export interface PublicIntegrationEventFilter {
  /**
   * The ID representing the type of event for the integration event filter.
   */
  eventTypeId: number;

  filterLines: Array<PublicEventFilterMetadata>;

  /**
   * Indicates the type of filter (INTEGRATION_EVENT).
   */
  filterType: 'INTEGRATION_EVENT';
}

export interface PublicListConversionDate {
  /**
   * Specifies the type of conversion (CONVERSION_DATE).
   */
  conversionType: 'CONVERSION_DATE';

  /**
   * The day component of the conversion date.
   */
  day: number;

  /**
   * The month component of the conversion date.
   */
  month: number;

  /**
   * The year component of the conversion date.
   */
  year: number;
}

export interface PublicListConversionInactivity {
  /**
   * Specifies the type of conversion (INACTIVITY).
   */
  conversionType: 'INACTIVITY';

  /**
   * Value used to paginate through lists. The `offset` provided in the response can
   * be used in the next request to fetch the next page of results. Defaults to `0`
   * if no offset is provided.
   */
  offset: number;

  /**
   * The unit of time for the inactivity period, such as (DAY, MONTH, WEEK).
   */
  timeUnit: 'DAY' | 'MONTH' | 'WEEK';
}

export interface PublicListConversionResponse {
  /**
   * The unique identifier of the list for which the conversion details are provided.
   */
  listId: string;

  /**
   * The date and time when the list was converted.
   */
  convertedAt?: string;

  /**
   * The scheduled time for the list conversion, which can be based on a specific
   * date or inactivity period.
   */
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
  /**
   * Indicates whether unassigned memberships should be included.
   */
  includeUnassigned?: boolean;

  /**
   * The ID of the team associated with the membership.
   */
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

export interface PublicMonthReference {
  /**
   * The day component of the month reference.
   */
  day: number;

  /**
   * Indicates the type of reference, (MONTH).
   */
  referenceType: 'MONTH';

  /**
   * The hour component of the month reference.
   */
  hour?: number;

  /**
   * The millisecond component of the month reference.
   */
  millisecond?: number;

  /**
   * The minute component of the month reference.
   */
  minute?: number;

  /**
   * The second component of the month reference.
   */
  second?: number;
}

export interface PublicMultiStringPropertyOperation {
  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * Specifies the type of operation (MULTISTRING).
   */
  operationType: 'MULTISTRING';

  /**
   * Defines the operation to be applied in the multi-string property operation
   * (IS_EQUAL_TO, IS_NOT_EQUAL_TO, CONTAINS, CONTAINS_EXACTLY, DOES_NOT_CONTAIN,
   * DOES_NOT_CONTAIN_EXACTLY, STARTS_WITH, ENDS_WITH).
   */
  operator: string;

  values: Array<string>;
}

export interface PublicNotAllFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  /**
   * The operator used to combine filters within the branch (NOT_ALL).
   */
  filterBranchOperator: string;

  /**
   * The type of the filter branch (NOT_ALL).
   */
  filterBranchType: 'NOT_ALL';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;
}

export interface PublicNotAnyFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  /**
   * Specifies the logical operator used to combine filters within the branch
   * (NOT_ANY).
   */
  filterBranchOperator: string;

  /**
   * Indicates the type of filter branch (NOT_ANY).
   */
  filterBranchType: 'NOT_ANY';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;
}

export interface PublicNowReference {
  /**
   * Indicates the type of reference (NOW).
   */
  referenceType: 'NOW';

  /**
   * The hour component of the current time reference.
   */
  hour?: number;

  /**
   * The millisecond component of the current time reference.
   */
  millisecond?: number;

  /**
   * The minute component of the current time reference.
   */
  minute?: number;

  /**
   * The second component of the current time reference.
   */
  second?: number;
}

export interface PublicNumAssociationsFilter {
  /**
   * Defines the category of the association (HUBSPOT_DEFINED, USER_DEFINED,
   * INTEGRATOR_DEFINED, WORK).
   */
  associationCategory: string;

  /**
   * The ID representing the type of association being filtered.
   */
  associationTypeId: number;

  /**
   * Specifies the criteria for refining the association filter.
   */
  coalescingRefineBy:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * Indicates the type of filter being applied (NUM_ASSOCIATIONS).
   */
  filterType: 'NUM_ASSOCIATIONS';
}

export interface PublicNumOccurrencesRefineBy {
  /**
   * The type of refinement (NUM_OCCURRENCES).
   */
  type: 'NUM_OCCURRENCES';

  /**
   * The maximum number of occurrences allowed.
   */
  maxOccurrences?: number;

  /**
   * The minimum number of occurrences required.
   */
  minOccurrences?: number;
}

export interface PublicNumberPropertyOperation {
  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * Specifies the type of operation (NUMBER).
   */
  operationType: 'NUMBER';

  /**
   * Defines the operation to be applied in the number property operation
   * (IS_EQUAL_TO, IS_NOT_EQUAL_TO, IS_GREATER_THAN, IS_GREATER_THAN_OR_EQUAL_TO,
   * IS_LESS_THAN, IS_LESS_THAN_OR_EQUAL_TO, HAS_EVER_BEEN_EQUAL_TO,
   * HAS_NEVER_BEEN_EQUAL_TO).
   */
  operator: string;

  /**
   * The numeric value to be used in the operation.
   */
  value: number;
}

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

  /**
   * Defines the filter criteria for the list, allowing for complex logical
   * operations and nested filter branches to determine list membership.
   */
  filterBranch?:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

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

export interface PublicOrFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  /**
   * The logical operator used to combine the filters within the branch (OR).
   */
  filterBranchOperator: string;

  /**
   * The type of the filter branch (OR).
   */
  filterBranchType: 'OR';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;
}

export interface PublicPageViewAnalyticsFilter {
  /**
   * Indicates the type of filter being applied (PAGE_VIEW).
   */
  filterType: 'PAGE_VIEW';

  /**
   * Defines the operation to be applied within the filter (HAS_PAGEVIEW_EQ,
   * HAS_PAGEVIEW_CONTAINS, HAS_PAGEVIEW_MATCHES_REGEX, NOT_HAS_PAGEVIEW_EQ,
   * NOT_HAS_PAGEVIEW_CONTAINS).
   */
  operator: string;

  /**
   * The URL of the page to be used in the filter.
   */
  pageUrl: string;

  /**
   * Specifies the criteria for refining the filter by coalescing.
   */
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * Indicates whether tracking is enabled for the page view.
   */
  enableTracking?: boolean;

  /**
   * Specifies the criteria for refining the filter by pruning.
   */
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicPrivacyAnalyticsFilter {
  /**
   * Specifies the type of filter (PRIVACY).
   */
  filterType: 'PRIVACY';

  /**
   * Defines the operation to be applied within the filter (PRIVACY_CONSENT_GRANTED,
   * PRIVACY_CONSENT_NOT_GRANTED).
   */
  operator: string;

  /**
   * The name of the privacy setting used in the filter.
   */
  privacyName: string;
}

export interface PublicPropertyAssociationFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  /**
   * The logical operator used to combine filters within the branch.
   */
  filterBranchOperator: string;

  /**
   * The type of the filter branch (PROPERTY_ASSOCIATION).
   */
  filterBranchType: 'PROPERTY_ASSOCIATION';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;

  /**
   * The ID representing the type of object associated with the filter branch.
   */
  objectTypeId: string;

  /**
   * Defines the operation to be applied within the filter branch (IN_LIST,
   * NOT_IN_LIST).
   */
  operator: string;

  /**
   * The property that is associated with the object ID in the filter branch.
   */
  propertyWithObjectId: string;
}

export interface PublicPropertyAssociationInListFilter {
  /**
   * Specifies the criteria for refining the filter by coalescing.
   */
  coalescingRefineBy:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * Indicates the type of filter being applied (PROPERTY_ASSOCIATION).
   */
  filterType: 'PROPERTY_ASSOCIATION';

  /**
   * The ID of the list used in the property association filter.
   */
  listId: string;

  /**
   * Defines the operation to be applied by the filter (IN_LIST, NOT_IN_LIST).
   */
  operator: string;

  /**
   * The property associated with the object ID in the filter.
   */
  propertyWithObjectId: string;

  /**
   * The ID representing the type of object that the property association filter is
   * targeting.
   */
  toObjectTypeId?: string;
}

export interface PublicPropertyFilter {
  /**
   * Indicates that the filter (PROPERTY).
   */
  filterType: 'PROPERTY';

  /**
   * Defines the operation to be performed on the property, such as comparison or
   * value matching.
   */
  operation:
    | PublicBoolPropertyOperation
    | PublicNumberPropertyOperation
    | PublicStringPropertyOperation
    | PublicDateTimePropertyOperation
    | PublicRangedDatePropertyOperation
    | PublicComparativePropertyUpdatedOperation
    | PublicComparativeDatePropertyOperation
    | PublicRollingDateRangePropertyOperation
    | PublicRollingPropertyUpdatedOperation
    | PublicEnumerationPropertyOperation
    | PublicAllPropertyTypesOperation
    | PublicRangedNumberPropertyOperation
    | PublicMultiStringPropertyOperation
    | PublicDatePropertyOperation
    | PublicCalendarDatePropertyOperation
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * Specifies the name of the property that the filter is applied to.
   */
  property: string;
}

export interface PublicPropertyReferencedTime {
  /**
   * Specifies the name of the property that the time reference is applied to.
   */
  property: string;

  /**
   * Specifies the type of reference for the property (VALUE, UPDATED_AT,
   * ANNIVERSARY, VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION,
   * ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION).
   */
  referenceType: string;

  /**
   * Defines the type of time (PROPERTY_REFERENCED).
   */
  timeType: 'PROPERTY_REFERENCED';

  /**
   * Indicates the identifier for the time zone associated with the property.
   */
  zoneId: string;

  /**
   * Specifies the source of the time zone information for the property (CUSTOM,
   * USER, PORTAL).
   */
  timezoneSource?: string;
}

export interface PublicQuarterReference {
  /**
   * The day component of the quarter reference.
   */
  day: number;

  /**
   * The month component of the quarter reference.
   */
  month: number;

  /**
   * Indicates the type of reference (QUARTER).
   */
  referenceType: 'QUARTER';

  /**
   * The hour component of the quarter reference.
   */
  hour?: number;

  /**
   * The millisecond component of the quarter reference.
   */
  millisecond?: number;

  /**
   * The minute component of the quarter reference.
   */
  minute?: number;

  /**
   * The second component of the quarter reference.
   */
  second?: number;
}

export interface PublicRangedDatePropertyOperation {
  /**
   * Specifies whether objects without a set value should be included in the
   * operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * The lower limit of the date range for the operation.
   */
  lowerBound: number;

  /**
   * Specifies the type of operation (RANGED_DATE).
   */
  operationType: 'RANGED_DATE';

  /**
   * Defines the operation to be applied in the ranged date property operation
   * (IS_BETWEEN, IS_NOT_BETWEEN).
   */
  operator: string;

  /**
   * Indicates whether the operation requires conversion to a different time zone.
   */
  requiresTimeZoneConversion: boolean;

  /**
   * The upper limit of the date range for the operation.
   */
  upperBound: number;
}

export interface PublicRangedNumberPropertyOperation {
  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * The lower limit of the number range for the operation.
   */
  lowerBound: number;

  /**
   * Specifies the type of operation (NUMBER_RANGED).
   */
  operationType: 'NUMBER_RANGED';

  /**
   * Defines the operation to be applied in the ranged number property operation
   * (IS_BETWEEN, IS_NOT_BETWEEN).
   */
  operator: string;

  /**
   * The upper limit of the number range for the operation.
   */
  upperBound: number;
}

export interface PublicRangedTimeOperation {
  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * Defines the lower bound time point for the operation.
   */
  lowerBoundTimePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime;

  /**
   * Specifies the type of operation (TIME_RANGED).
   */
  operationType: string;

  /**
   * Defines the operation to be applied within the time range (IS_BETWEEN,
   * IS_NOT_BETWEEN).
   */
  operator: string;

  /**
   * Specifies the type of operation (TIME_RANGED).
   */
  type: 'TIME_RANGED';

  /**
   * Defines the upper bound time point for the operation.
   */
  upperBoundTimePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime;

  /**
   * Describes the behavior at the lower bound endpoint of the time range.
   */
  lowerBoundEndpointBehavior?: string;

  /**
   * Specifies the parser used for the property in the operation.
   */
  propertyParser?: string;

  /**
   * Describes the behavior at the upper bound endpoint of the time range.
   */
  upperBoundEndpointBehavior?: string;
}

export interface PublicRelativeComparativeTimestampRefineBy {
  /**
   * Defines the comparison operation to be used in the refinement (BEFORE, AFTER).
   */
  comparison: string;

  timeOffset: PublicTimeOffset;

  /**
   * Specifies the type of refinement, (RELATIVE_COMPARATIVE).
   */
  type: 'RELATIVE_COMPARATIVE';
}

export interface PublicRelativeRangedTimestampRefineBy {
  lowerBoundOffset: PublicTimeOffset;

  /**
   * Specifies the type of range for the refinement criteria (BETWEEN, NOT_BETWEEN).
   */
  rangeType: string;

  /**
   * Indicates the type of refinement (RELATIVE_RANGED).
   */
  type: 'RELATIVE_RANGED';

  upperBoundOffset: PublicTimeOffset;
}

export interface PublicRestrictedFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  /**
   * The logical operator used to combine filters within the restricted filter
   * branch.
   */
  filterBranchOperator: string;

  /**
   * Specifies the type of the filter branch (RESTRICTED).
   */
  filterBranchType: 'RESTRICTED';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;
}

export interface PublicRollingDateRangePropertyOperation {
  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * The number of days to be considered in the rolling date range operation.
   */
  numberOfDays: number;

  /**
   * Specifies the type of operation (ROLLING_DATE_RANGE).
   */
  operationType: 'ROLLING_DATE_RANGE';

  /**
   * Defines the operation to be applied within the rolling date range property
   * operation (IS_LESS_THAN_X_DAYS_AGO, IS_MORE_THAN_X_DAYS_AGO,
   * IS_LESS_THAN_X_DAYS_FROM_NOW, IS_MORE_THAN_X_DAYS_FROM_NOW).
   */
  operator: string;

  /**
   * Specifies whether the operation requires conversion to a different time zone.
   */
  requiresTimeZoneConversion: boolean;
}

export interface PublicRollingPropertyUpdatedOperation {
  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * The number of days to be considered in the rolling property updated operation.
   */
  numberOfDays: number;

  /**
   * Specifies the type of operation (ROLLING_PROPERTY_UPDATED).
   */
  operationType: 'ROLLING_PROPERTY_UPDATED';

  /**
   * Defines the operation to be applied within the rolling property updated
   * operation (UPDATED_IN_LAST_X_DAYS, NOT_UPDATED_IN_LAST_X_DAYS).
   */
  operator: string;
}

export interface PublicSetOccurrencesRefineBy {
  /**
   * Indicates the specific set type used in the refinement (ALL, ALL_INCLUDE_EMPTY,
   * ANY, NONE, NONE_EXCLUDE_EMPTY, ANY_INCLUDE_EMPTY).
   */
  setType: string;

  /**
   * Specifies the type of refinement (SET_OCCURRENCES).
   */
  type: 'SET_OCCURRENCES';
}

export interface PublicStringPropertyOperation {
  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * Specifies the type of operation (STRING).
   */
  operationType: 'STRING';

  /**
   * Defines the operation to be applied in the string property operation
   * ()IS_EQUAL_TO, IS_NOT_EQUAL_TO, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH,
   * ENDS_WITH, HAS_EVER_BEEN_EQUAL_TO, HAS_NEVER_BEEN_EQUAL_TO, HAS_EVER_CONTAINED,
   * HAS_NEVER_CONTAINED).
   */
  operator: string;

  /**
   * The string value to be used in the operation.
   */
  value: string;
}

export interface PublicSurveyMonkeyFilter {
  /**
   * Indicates the type of filter being applied (SURVEY_MONKEY).
   */
  filterType: 'SURVEY_MONKEY';

  /**
   * Specifies the operation to be performed by the filter (HAS_RESPONDED_TO_SURVEY,
   * HAS_NOT_RESPONDED_TO_SURVEY).
   */
  operator: string;

  /**
   * The ID of the survey associated with the filter.
   */
  surveyId: string;
}

export interface PublicSurveyMonkeyValueFilter {
  /**
   * Defines the type of filter (SURVEY_MONKEY_VALUE).
   */
  filterType: 'SURVEY_MONKEY_VALUE';

  /**
   * Defines the operation to be applied within the filter
   * (HAS_ANSWERED_SURVEY_QUESTION_WITH_VALUE).
   */
  operator: string;

  /**
   * The ID of the survey used in the filter.
   */
  surveyId: string;

  /**
   * The question from the survey used in the filter.
   */
  surveyQuestion: string;

  /**
   * Specifies the operation used to compare the survey answer value.
   */
  valueComparison:
    | PublicBoolPropertyOperation
    | PublicNumberPropertyOperation
    | PublicStringPropertyOperation
    | PublicDateTimePropertyOperation
    | PublicRangedDatePropertyOperation
    | PublicComparativePropertyUpdatedOperation
    | PublicComparativeDatePropertyOperation
    | PublicRollingDateRangePropertyOperation
    | PublicRollingPropertyUpdatedOperation
    | PublicEnumerationPropertyOperation
    | PublicAllPropertyTypesOperation
    | PublicRangedNumberPropertyOperation
    | PublicMultiStringPropertyOperation
    | PublicDatePropertyOperation
    | PublicCalendarDatePropertyOperation
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * The column ID of the survey answer used in the filter.
   */
  surveyAnswerColId?: string;

  /**
   * The row ID of the survey answer used in the filter.
   */
  surveyAnswerRowId?: string;
}

export interface PublicTimeOffset {
  /**
   * The numerical value representing the quantity of the time offset.
   */
  amount: number;

  /**
   * Indicates the direction of the time offset, such as forward or backward.
   */
  offsetDirection: string;

  /**
   * Specifies the unit of time for the offset, such as days, hours, or minutes.
   */
  timeUnit: string;
}

export interface PublicTimePointOperation {
  /**
   * Indicates whether objects with no value set for the property should be included
   * in the operation.
   */
  includeObjectsWithNoValueSet: boolean;

  /**
   * Specifies the type of operation (TIME_POINT).
   */
  operationType: 'TIME_POINT';

  /**
   * Specifies the operation to be applied within the time point operation
   * (IS_BEFORE, IS_AFTER).
   */
  operator: string;

  /**
   * Defines the specific point in time for the operation, which can be a date,
   * indexed time, or property-referenced time.
   */
  timePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime;

  /**
   * Defines the type of operation being performed.
   */
  type: string;

  /**
   * Describes the behavior at the endpoint of the time point operation.
   */
  endpointBehavior?: string;

  /**
   * Specifies the parser used for interpreting the property in the operation.
   */
  propertyParser?: string;
}

export interface PublicTodayReference {
  /**
   * Indicates the type of reference (TODAY).
   */
  referenceType: 'TODAY';

  /**
   * The hour component of the current day reference.
   */
  hour?: number;

  /**
   * The millisecond component of the current day reference.
   */
  millisecond?: number;

  /**
   * The minute component of the current day reference.
   */
  minute?: number;

  /**
   * The second component of the current day reference.
   */
  second?: number;
}

export interface PublicUnifiedEventsFilter {
  filterLines: Array<PublicEventFilterMetadata>;

  /**
   * Indicates the type of filter being applied (UNIFIED_EVENTS).
   */
  filterType: 'UNIFIED_EVENTS';

  /**
   * Specifies the criteria for refining the filter by coalescing.
   */
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  /**
   * The identifier for the type of event in the unified events filter.
   */
  eventTypeId?: string;

  /**
   * Specifies the criteria for refining the filter by pruning.
   */
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicUnifiedEventsFilterBranch {
  /**
   * The identifier for the type of event associated with the filter branch.
   */
  eventTypeId: string;

  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  /**
   * The logical operator used to combine filters within the branch (AND).
   */
  filterBranchOperator: string;

  /**
   * The type of the filter branch (UNIFIED_EVENTS).
   */
  filterBranchType: 'UNIFIED_EVENTS';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;

  /**
   * Defines the operation to be applied within the filter branch (HAS_COMPLETED,
   * HAS_NOT_COMPLETED).
   */
  operator: 'HAS_COMPLETED' | 'HAS_NOT_COMPLETED';

  /**
   * Specifies the criteria for refining the filter by coalescing.
   */
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicWebinarFilter {
  /**
   * Indicates the type of filter, (WEBINAR).
   */
  filterType: 'WEBINAR';

  /**
   * Specifies the operation to be performed by the filter (HAS_WEBINAR_REGISTRATION,
   * NOT_HAS_WEBINAR_REGISTRATION, HAS_WEBINAR_ATTENDANCE,
   * NOT_HAS_WEBINAR_ATTENDANCE).
   */
  operator: string;

  /**
   * The ID of the webinar associated with the filter.
   */
  webinarId?: string;
}

export interface PublicWeekReference {
  /**
   * The day of the week (SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY,
   * SATURDAY).
   */
  dayOfWeek: 'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY';

  /**
   * Indicates the type of reference (WEEK).
   */
  referenceType: 'WEEK';

  /**
   * The hour component of the week reference.
   */
  hour?: number;

  /**
   * The millisecond component of the week reference.
   */
  millisecond?: number;

  /**
   * The minute component of the week reference.
   */
  minute?: number;

  /**
   * The second component of the week reference.
   */
  second?: number;
}

export interface PublicYearReference {
  /**
   * The day component of the year reference.
   */
  day: number;

  /**
   * The month component of the year reference.
   */
  month: number;

  /**
   * Indicates the type of reference (YEAR).
   */
  referenceType: 'YEAR';

  /**
   * The hour component of the year reference.
   */
  hour?: number;

  /**
   * The millisecond component of the year reference.
   */
  millisecond?: number;

  /**
   * The minute component of the year reference.
   */
  minute?: number;

  /**
   * The second component of the year reference.
   */
  second?: number;
}

export interface RecordIDInput {
  objectTypeId: string;

  recordId: string;
}

export interface RecordIDWithMemberships {
  objectTypeId: string;

  recordId: string;

  recordListMemberships: Array<RecordListMembership>;
}

export interface RecordListMembership {
  /**
   * The timestamp when the record was first added to the list.
   */
  firstAddedTimestamp: string;

  /**
   * The timestamp when the record was last added to the list.
   */
  lastAddedTimestamp: string;

  /**
   * The unique identifier of the list.
   */
  listId: string;

  /**
   * The version number of the list.
   */
  listVersion: number;

  /**
   * Indicates whether the list is public.
   */
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

  /**
   * Filter branch object containing filtering criteria for the list
   */
  filterBranch?:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

  /**
   * The ID of the folder that the list should be created in. If left blank, then the
   * list will be created in the root of the list folder structure.
   */
  listFolderId?: number;

  listPermissions?: PublicListPermissions;

  membershipSettings?: PublicMembershipSettings;
}

export interface ListListParams {
  includeFilters?: boolean;

  listIds?: Array<string>;
}

export interface ListAddAndRemoveMembershipsParams {
  recordIdsToAdd: Array<string>;

  recordIdsToRemove: Array<string>;
}

export interface ListAddMembershipsParams {
  body: Array<string>;
}

export interface ListAddMembershipsFromParams {
  listId: string;
}

export interface ListBatchReadMembershipsParams {
  inputs: Array<RecordIDInput>;
}

export interface ListCreateFolderParams {
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

export interface ListCreateIDMappingParams {
  body: Array<string>;
}

export interface ListGetParams {
  includeFilters?: boolean;
}

export interface ListGetByObjectTypeAndNameParams {
  /**
   * Path param
   */
  objectTypeId: string;

  /**
   * Query param
   */
  includeFilters?: boolean;
}

export interface ListGetIDMappingParams {
  legacyListId?: string;
}

export interface ListGetMembershipsJoinOrderParams extends PageParams {
  before?: string;
}

export interface ListGetRecordMembershipsParams {
  objectTypeId: string;
}

export interface ListGetSizeAndEditsHistoryBetweenParams {
  endDate?: string;

  startDate?: string;
}

export interface ListListBySearchParams {
  /**
   * The property names of any additional list properties to include in the response.
   * Properties that do not exist or that are empty for a particular list are not
   * included in the response.
   *
   * By default, all requests will fetch the following properties for each list:
   * `hs_list_size`, `hs_last_record_added_at`, `hs_last_record_removed_at`,
   * `hs_folder_name`, and `hs_list_reference_count`.
   */
  additionalProperties: Array<string>;

  /**
   * ILS list ids to be included in search results. If not specified, all lists
   * matching other criteria will be included
   */
  listIds: Array<string>;

  /**
   * Value used to paginate through lists. The `offset` provided in the response can
   * be used in the next request to fetch the next page of results. Defaults to `0`
   * if no offset is provided.
   */
  offset: number;

  /**
   * List processing types to be included in search results. If not specified, all
   * lists with all processing types will be included.
   */
  processingTypes: Array<string>;

  /**
   * The number of lists to include in the response. Defaults to `20` if no value is
   * provided. The max `count` is `500`.
   */
  count?: number;

  objectTypeId?: string;

  /**
   * The `query` that will be used to search for lists by list name. If no `query` is
   * provided, then the results will include all lists.
   */
  query?: string;

  /**
   * Sort field and order
   */
  sort?: string;
}

export interface ListListFoldersParams {
  folderId?: string;
}

export interface ListListMembershipsParams extends PageParams {
  before?: string;
}

export interface ListMoveFolderParams {
  folderId: string;
}

export interface ListMoveListParams {
  /**
   * The Id of the list to move.
   */
  listId: string;

  /**
   * The Id of folder to move the list to, the root folder is Id 0.
   */
  newFolderId: string;
}

export interface ListRemoveMembershipsParams {
  body: Array<string>;
}

export interface ListRenameFolderParams {
  newFolderName?: string;
}

export interface ListUpdateListFiltersParams {
  /**
   * Body param: Updated filtering criteria for the list
   */
  filterBranch:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

  /**
   * Query param
   */
  enrollObjectsInWorkflows?: boolean;
}

export interface ListUpdateListNameParams {
  includeFilters?: boolean;

  listName?: string;
}

export type ListUpdateScheduleConversionParams =
  | ListUpdateScheduleConversionParams.PublicListConversionDate
  | ListUpdateScheduleConversionParams.PublicListConversionInactivity;

export declare namespace ListUpdateScheduleConversionParams {
  export interface PublicListConversionDate {
    /**
     * Specifies the type of conversion (CONVERSION_DATE).
     */
    conversionType: 'CONVERSION_DATE';

    /**
     * The day component of the conversion date.
     */
    day: number;

    /**
     * The month component of the conversion date.
     */
    month: number;

    /**
     * The year component of the conversion date.
     */
    year: number;
  }

  export interface PublicListConversionInactivity {
    /**
     * Specifies the type of conversion (INACTIVITY).
     */
    conversionType: 'INACTIVITY';

    /**
     * Value used to paginate through lists. The `offset` provided in the response can
     * be used in the next request to fetch the next page of results. Defaults to `0`
     * if no offset is provided.
     */
    offset: number;

    /**
     * The unit of time for the inactivity period, such as (DAY, MONTH, WEEK).
     */
    timeUnit: 'DAY' | 'MONTH' | 'WEEK';
  }
}

export declare namespace Lists {
  export {
    type APICollectionResponseJoinTimeAndRecordID as APICollectionResponseJoinTimeAndRecordID,
    type APICollectionResponseRecordListMembership as APICollectionResponseRecordListMembership,
    type BatchInputRecordIDInput as BatchInputRecordIDInput,
    type BatchResponseRecordIDWithMemberships as BatchResponseRecordIDWithMemberships,
    type BatchResponseRecordIDWithMembershipsWithErrors as BatchResponseRecordIDWithMembershipsWithErrors,
    type JoinTimeAndRecordID as JoinTimeAndRecordID,
    type ListCreateRequest as ListCreateRequest,
    type ListCreateResponse as ListCreateResponse,
    type ListFetchResponse as ListFetchResponse,
    type ListFilterUpdateRequest as ListFilterUpdateRequest,
    type ListFolderCreateRequest as ListFolderCreateRequest,
    type ListFolderCreateResponse as ListFolderCreateResponse,
    type ListFolderFetchResponse as ListFolderFetchResponse,
    type ListMoveRequest as ListMoveRequest,
    type ListSearchRequest as ListSearchRequest,
    type ListSearchResponse as ListSearchResponse,
    type ListSizeAndEditHistoryResponse as ListSizeAndEditHistoryResponse,
    type ListSizeDataPoint as ListSizeDataPoint,
    type ListUpdateResponse as ListUpdateResponse,
    type ListsByIDResponse as ListsByIDResponse,
    type MembershipChangeRequest as MembershipChangeRequest,
    type MembershipsUpdateResponse as MembershipsUpdateResponse,
    type PublicAbsoluteComparativeTimestampRefineBy as PublicAbsoluteComparativeTimestampRefineBy,
    type PublicAbsoluteRangedTimestampRefineBy as PublicAbsoluteRangedTimestampRefineBy,
    type PublicAdsSearchFilter as PublicAdsSearchFilter,
    type PublicAdsTimeFilter as PublicAdsTimeFilter,
    type PublicAllHistoryRefineBy as PublicAllHistoryRefineBy,
    type PublicAllPropertyTypesOperation as PublicAllPropertyTypesOperation,
    type PublicAndFilterBranch as PublicAndFilterBranch,
    type PublicAssociationFilterBranch as PublicAssociationFilterBranch,
    type PublicAssociationInListFilter as PublicAssociationInListFilter,
    type PublicBatchMigrationMapping as PublicBatchMigrationMapping,
    type PublicBoolPropertyOperation as PublicBoolPropertyOperation,
    type PublicCalendarDatePropertyOperation as PublicCalendarDatePropertyOperation,
    type PublicCampaignInfluencedFilter as PublicCampaignInfluencedFilter,
    type PublicCommunicationSubscriptionFilter as PublicCommunicationSubscriptionFilter,
    type PublicComparativeDatePropertyOperation as PublicComparativeDatePropertyOperation,
    type PublicComparativePropertyUpdatedOperation as PublicComparativePropertyUpdatedOperation,
    type PublicConstantFilter as PublicConstantFilter,
    type PublicCtaAnalyticsFilter as PublicCtaAnalyticsFilter,
    type PublicDatePoint as PublicDatePoint,
    type PublicDatePropertyOperation as PublicDatePropertyOperation,
    type PublicDateTimePropertyOperation as PublicDateTimePropertyOperation,
    type PublicEmailEventFilter as PublicEmailEventFilter,
    type PublicEmailSubscriptionFilter as PublicEmailSubscriptionFilter,
    type PublicEnumerationPropertyOperation as PublicEnumerationPropertyOperation,
    type PublicEventAnalyticsFilter as PublicEventAnalyticsFilter,
    type PublicEventFilterMetadata as PublicEventFilterMetadata,
    type PublicFiscalQuarterReference as PublicFiscalQuarterReference,
    type PublicFiscalYearReference as PublicFiscalYearReference,
    type PublicFormSubmissionFilter as PublicFormSubmissionFilter,
    type PublicFormSubmissionOnPageFilter as PublicFormSubmissionOnPageFilter,
    type PublicInListFilter as PublicInListFilter,
    type PublicInListFilterMetadata as PublicInListFilterMetadata,
    type PublicIndexOffset as PublicIndexOffset,
    type PublicIndexedTimePoint as PublicIndexedTimePoint,
    type PublicIntegrationEventFilter as PublicIntegrationEventFilter,
    type PublicListConversionDate as PublicListConversionDate,
    type PublicListConversionInactivity as PublicListConversionInactivity,
    type PublicListConversionResponse as PublicListConversionResponse,
    type PublicListConversionTime as PublicListConversionTime,
    type PublicListFolder as PublicListFolder,
    type PublicListPermissions as PublicListPermissions,
    type PublicMembershipSettings as PublicMembershipSettings,
    type PublicMigrationMapping as PublicMigrationMapping,
    type PublicMonthReference as PublicMonthReference,
    type PublicMultiStringPropertyOperation as PublicMultiStringPropertyOperation,
    type PublicNotAllFilterBranch as PublicNotAllFilterBranch,
    type PublicNotAnyFilterBranch as PublicNotAnyFilterBranch,
    type PublicNowReference as PublicNowReference,
    type PublicNumAssociationsFilter as PublicNumAssociationsFilter,
    type PublicNumOccurrencesRefineBy as PublicNumOccurrencesRefineBy,
    type PublicNumberPropertyOperation as PublicNumberPropertyOperation,
    type PublicObjectList as PublicObjectList,
    type PublicObjectListSearchResult as PublicObjectListSearchResult,
    type PublicOrFilterBranch as PublicOrFilterBranch,
    type PublicPageViewAnalyticsFilter as PublicPageViewAnalyticsFilter,
    type PublicPrivacyAnalyticsFilter as PublicPrivacyAnalyticsFilter,
    type PublicPropertyAssociationFilterBranch as PublicPropertyAssociationFilterBranch,
    type PublicPropertyAssociationInListFilter as PublicPropertyAssociationInListFilter,
    type PublicPropertyFilter as PublicPropertyFilter,
    type PublicPropertyReferencedTime as PublicPropertyReferencedTime,
    type PublicQuarterReference as PublicQuarterReference,
    type PublicRangedDatePropertyOperation as PublicRangedDatePropertyOperation,
    type PublicRangedNumberPropertyOperation as PublicRangedNumberPropertyOperation,
    type PublicRangedTimeOperation as PublicRangedTimeOperation,
    type PublicRelativeComparativeTimestampRefineBy as PublicRelativeComparativeTimestampRefineBy,
    type PublicRelativeRangedTimestampRefineBy as PublicRelativeRangedTimestampRefineBy,
    type PublicRestrictedFilterBranch as PublicRestrictedFilterBranch,
    type PublicRollingDateRangePropertyOperation as PublicRollingDateRangePropertyOperation,
    type PublicRollingPropertyUpdatedOperation as PublicRollingPropertyUpdatedOperation,
    type PublicSetOccurrencesRefineBy as PublicSetOccurrencesRefineBy,
    type PublicStringPropertyOperation as PublicStringPropertyOperation,
    type PublicSurveyMonkeyFilter as PublicSurveyMonkeyFilter,
    type PublicSurveyMonkeyValueFilter as PublicSurveyMonkeyValueFilter,
    type PublicTimeOffset as PublicTimeOffset,
    type PublicTimePointOperation as PublicTimePointOperation,
    type PublicTodayReference as PublicTodayReference,
    type PublicUnifiedEventsFilter as PublicUnifiedEventsFilter,
    type PublicUnifiedEventsFilterBranch as PublicUnifiedEventsFilterBranch,
    type PublicWebinarFilter as PublicWebinarFilter,
    type PublicWeekReference as PublicWeekReference,
    type PublicYearReference as PublicYearReference,
    type RecordIDInput as RecordIDInput,
    type RecordIDWithMemberships as RecordIDWithMemberships,
    type RecordListMembership as RecordListMembership,
    type JoinTimeAndRecordIDsPage as JoinTimeAndRecordIDsPage,
    type ListCreateParams as ListCreateParams,
    type ListListParams as ListListParams,
    type ListAddAndRemoveMembershipsParams as ListAddAndRemoveMembershipsParams,
    type ListAddMembershipsParams as ListAddMembershipsParams,
    type ListAddMembershipsFromParams as ListAddMembershipsFromParams,
    type ListBatchReadMembershipsParams as ListBatchReadMembershipsParams,
    type ListCreateFolderParams as ListCreateFolderParams,
    type ListCreateIDMappingParams as ListCreateIDMappingParams,
    type ListGetParams as ListGetParams,
    type ListGetByObjectTypeAndNameParams as ListGetByObjectTypeAndNameParams,
    type ListGetIDMappingParams as ListGetIDMappingParams,
    type ListGetMembershipsJoinOrderParams as ListGetMembershipsJoinOrderParams,
    type ListGetRecordMembershipsParams as ListGetRecordMembershipsParams,
    type ListGetSizeAndEditsHistoryBetweenParams as ListGetSizeAndEditsHistoryBetweenParams,
    type ListListBySearchParams as ListListBySearchParams,
    type ListListFoldersParams as ListListFoldersParams,
    type ListListMembershipsParams as ListListMembershipsParams,
    type ListMoveFolderParams as ListMoveFolderParams,
    type ListMoveListParams as ListMoveListParams,
    type ListRemoveMembershipsParams as ListRemoveMembershipsParams,
    type ListRenameFolderParams as ListRenameFolderParams,
    type ListUpdateListFiltersParams as ListUpdateListFiltersParams,
    type ListUpdateListNameParams as ListUpdateListNameParams,
    type ListUpdateScheduleConversionParams as ListUpdateScheduleConversionParams,
  };
}
