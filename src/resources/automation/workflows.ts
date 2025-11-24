// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Workflows extends APIResource {
  create(body: WorkflowCreateParams, options?: RequestOptions): APIPromise<APIFlow> {
    return this._client.post('/automation/v4/flows', { body, ...options });
  }

  update(flowID: string, body: WorkflowUpdateParams, options?: RequestOptions): APIPromise<APIFlow> {
    return this._client.put(path`/automation/v4/flows/${flowID}`, { body, ...options });
  }

  list(
    query: WorkflowListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<APIFlowListingsPage, APIFlowListing> {
    return this._client.getAPIList('/automation/v4/flows', Page<APIFlowListing>, { query, ...options });
  }

  delete(flowID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/automation/v4/flows/${flowID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  batchGet(body: WorkflowBatchGetParams, options?: RequestOptions): APIPromise<BatchResponseAPIFlow> {
    return this._client.post('/automation/v4/flows/batch/read', { body, ...options });
  }

  batchGetIDMappings(
    body: WorkflowBatchGetIDMappingsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseFlowIDWorkflowIDMappingResponse> {
    return this._client.post('/automation/v4/workflow-id-mappings/batch/read', { body, ...options });
  }

  get(flowID: string, options?: RequestOptions): APIPromise<APIFlow> {
    return this._client.get(path`/automation/v4/flows/${flowID}`, options);
  }

  listEmailCampaigns(
    query: WorkflowListEmailCampaignsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<APIFlowEmailCampaignsPage, APIFlowEmailCampaign> {
    return this._client.getAPIList('/automation/v4/flows/email-campaigns', Page<APIFlowEmailCampaign>, {
      query,
      ...options,
    });
  }
}

export type APIFlowListingsPage = Page<APIFlowListing>;

export type APIFlowEmailCampaignsPage = Page<APIFlowEmailCampaign>;

export interface APIAbTestBranchAction {
  actionId: string;

  testBranches: Array<APIConnection>;

  type: 'AB_TEST_BRANCH';
}

export interface APIActionDataValue {
  actionId: string;

  dataKey: string;

  type: 'FIELD_DATA';
}

export interface APIAppendObjectPropertyValue {
  appendPropertyName: string;

  type: 'APPEND_OBJECT_PROPERTY';
}

export interface APIAssociationDataSource {
  associationCategory: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED';

  associationTypeId: number;

  name: string;

  objectTypeId: string;

  type: 'ASSOCIATION';

  sortBy?: APISort;
}

export interface APIAssociationTimestampDataSource {
  associationCategory: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED';

  /**
   * The ID representing the type of association.
   */
  associationTypeId: number;

  name: string;

  objectTypeId: string;

  type: 'ASSOCIATION_TIMESTAMP';
}

export interface APIAuthKeyWebhookAuthSettings {
  location: 'HEADER' | 'QUERY_PARAM';

  name: string;

  secretName: string;

  type: 'AUTH_KEY';
}

export interface APIBlockedDate {
  dayOfMonth: number;

  month:
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

  year?: number;
}

export interface APIConnection {
  edgeType: string;

  nextActionId: string;
}

export interface APIContactFlow {
  id: string;

  actions: Array<
    | APIStaticBranchAction
    | APIListBranchAction
    | APIAbTestBranchAction
    | APICustomCodeAction
    | APIWebhookAction
    | APISingleConnectionAction
  >;

  blockedDates: Array<APIBlockedDate>;

  canEnrollFromSalesforce: boolean;

  createdAt: string;

  crmObjectCreationStatus: 'PENDING' | 'COMPLETE';

  customProperties: { [key: string]: string };

  dataSources: Array<
    | APIAssociationDataSource
    | APIAssociationTimestampDataSource
    | APIStaticPropertyFilterDataSource
    | APIEnrolledRecordPropertyFilterDataSource
    | APIDatasetFieldPropertyFilterDataSource
    | APIEnrolledArgumentPropertyFilterDataSource
  >;

  flowType: 'WORKFLOW' | 'ACTION_SET' | 'UNKNOWN';

  isEnabled: boolean;

  nextAvailableActionId: string;

  objectTypeId: string;

  revisionId: string;

  suppressionListIds: Array<number>;

  timeWindows: Array<APITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  updatedAt: string;

  description?: string;

  enrollmentCriteria?:
    | APIListBasedEnrollmentCriteria
    | APIEventBasedEnrollmentCriteria
    | APIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | APIDailyEnrollmentSchedule
    | APIWeeklyEnrollmentSchedule
    | APIMonthlySpecificDaysEnrollmentSchedule
    | APIMonthlyRelativeDaysEnrollmentSchedule
    | APIYearlyEnrollmentSchedule
    | APIPropertyBasedEnrollmentSchedule;

  eventAnchor?: APIContactPropertyAnchor | APIStaticDateAnchor;

  goalFilterBranch?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  name?: string;

  startActionId?: string;

  unEnrollmentSetting?: APIUnEnrollmentSetting;

  uuid?: string;
}

export interface APIContactFlowCreateRequest {
  actions: Array<
    | APIStaticBranchAction
    | APIListBranchAction
    | APIAbTestBranchAction
    | APICustomCodeAction
    | APIWebhookAction
    | APISingleConnectionAction
  >;

  blockedDates: Array<APIBlockedDate>;

  canEnrollFromSalesforce: boolean;

  customProperties: { [key: string]: string };

  dataSources: Array<
    | APIAssociationDataSource
    | APIAssociationTimestampDataSource
    | APIStaticPropertyFilterDataSource
    | APIEnrolledRecordPropertyFilterDataSource
    | APIDatasetFieldPropertyFilterDataSource
    | APIEnrolledArgumentPropertyFilterDataSource
  >;

  flowType: 'WORKFLOW' | 'ACTION_SET' | 'UNKNOWN';

  isEnabled: boolean;

  objectTypeId: string;

  suppressionListIds: Array<number>;

  timeWindows: Array<APITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  description?: string;

  enrollmentCriteria?:
    | APIListBasedEnrollmentCriteria
    | APIEventBasedEnrollmentCriteria
    | APIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | APIDailyEnrollmentSchedule
    | APIWeeklyEnrollmentSchedule
    | APIMonthlySpecificDaysEnrollmentSchedule
    | APIMonthlyRelativeDaysEnrollmentSchedule
    | APIYearlyEnrollmentSchedule
    | APIPropertyBasedEnrollmentSchedule;

  eventAnchor?: APIContactPropertyAnchor | APIStaticDateAnchor;

  goalFilterBranch?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  name?: string;

  startActionId?: string;

  unEnrollmentSetting?: APIUnEnrollmentSetting;

  uuid?: string;
}

export interface APIContactFlowPutRequest {
  actions: Array<
    | APIStaticBranchAction
    | APIListBranchAction
    | APIAbTestBranchAction
    | APICustomCodeAction
    | APIWebhookAction
    | APISingleConnectionAction
  >;

  blockedDates: Array<APIBlockedDate>;

  canEnrollFromSalesforce: boolean;

  customProperties: { [key: string]: string };

  isEnabled: boolean;

  revisionId: string;

  suppressionListIds: Array<number>;

  timeWindows: Array<APITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  description?: string;

  enrollmentCriteria?:
    | APIListBasedEnrollmentCriteria
    | APIEventBasedEnrollmentCriteria
    | APIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | APIDailyEnrollmentSchedule
    | APIWeeklyEnrollmentSchedule
    | APIMonthlySpecificDaysEnrollmentSchedule
    | APIMonthlyRelativeDaysEnrollmentSchedule
    | APIYearlyEnrollmentSchedule
    | APIPropertyBasedEnrollmentSchedule;

  eventAnchor?: APIContactPropertyAnchor | APIStaticDateAnchor;

  goalFilterBranch?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  name?: string;

  startActionId?: string;

  unEnrollmentSetting?: APIUnEnrollmentSetting;

  uuid?: string;
}

export interface APIContactPropertyAnchor {
  contactProperty: string;

  type: 'CONTACT_PROPERTY_ANCHOR';
}

export interface APICustomCodeAction {
  actionId: string;

  inputFields: Array<APIInputVariable>;

  outputFields: Array<APIEnumerationOutputField>;

  runtime: string;

  secretNames: Array<string>;

  sourceCode: string;

  type: 'CUSTOM_CODE';

  connection?: APIConnection;
}

export interface APIDailyEnrollmentSchedule {
  timeOfDay: APITimeOfDay;

  type: 'DAILY';
}

export interface APIDatasetFieldPropertyFilterDataSource {
  datasetFieldName: string;

  name: string;

  propertyName: string;

  type: 'DATASET_FIELD_PROPERTY_FILTER';

  sortBy?: APISort;
}

export interface APIEnrolledArgumentPropertyFilterDataSource {
  argumentName: string;

  name: string;

  propertyName: string;

  type: 'ENROLLED_ARGUMENT_PROPERTY_FILTER';

  sortBy?: APISort;
}

export interface APIEnrolledRecordPropertyFilterDataSource {
  name: string;

  propertyName: string;

  recordFieldName: string;

  type: 'ENROLLED_RECORD_PROPERTY_FILTER';

  sortBy?: APISort;
}

export interface APIEnrollmentEventPropertyValue {
  enrollmentEventPropertyToken: string;

  type: 'ENROLLMENT_EVENT_PROPERTY';
}

export interface APIEnumerationOutputField {
  name: string;

  options: Array<string>;

  type: 'ENUMERATION';
}

export interface APIEventBasedEnrollmentCriteria {
  eventFilterBranches: Array<Shared.PublicUnifiedEventsFilterBranch>;

  listMembershipFilterBranches: Array<
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch
  >;

  shouldReEnroll: boolean;

  type: 'EVENT_BASED';

  refinementCriteria?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;
}

export interface APIFetchedObjectPropertyValue {
  propertyToken: string;

  type: 'FETCHED_OBJECT_PROPERTY';
}

export type APIFlow = APIContactFlow | APIPlatformFlow;

export interface APIFlowBatchFetchFlowIDCoordinate {
  flowId: string;

  type: 'FLOW_ID';
}

export interface APIFlowBatchFetchMigrationFlowIDCoordinate {
  flowMigrationStatuses: string;

  type: 'FLOW_ID';
}

export interface APIFlowBatchFetchMigrationWorkflowIDCoordinate {
  flowMigrationStatusForClassicWorkflows: string;

  type: 'WORKFLOW_ID';
}

export interface APIFlowBatchInput {
  inputs: Array<APIFlowBatchFetchFlowIDCoordinate>;
}

export interface APIFlowBatchMigrationInput {
  inputs: Array<APIFlowBatchFetchMigrationFlowIDCoordinate | APIFlowBatchFetchMigrationWorkflowIDCoordinate>;
}

export type APIFlowCreateRequest = APIContactFlowCreateRequest | APIPlatformFlowCreateRequest;

export interface APIFlowEmailCampaign {
  emailCampaignId: string;

  emailContentId: string;

  flowId: string;
}

export interface APIFlowListing {
  id: string;

  createdAt: string;

  flowType: string;

  isEnabled: boolean;

  objectTypeId: string;

  revisionId: string;

  updatedAt: string;

  name?: string;

  uuid?: string;
}

export type APIFlowPutRequest = APIContactFlowPutRequest | APIPlatformFlowPutRequest;

export interface APIIncrementValue {
  incrementAmount: number;

  type: 'INCREMENT';
}

export interface APIInputVariable {
  name: string;

  value:
    | APIActionDataValue
    | APIObjectPropertyValue
    | APIStaticValue
    | APIRelativeDateTimeValue
    | APITimestampValue
    | APIIncrementValue
    | APIFetchedObjectPropertyValue
    | APIAppendObjectPropertyValue
    | APIStaticAppendValue
    | APIEnrollmentEventPropertyValue;
}

export interface APIListBasedEnrollmentCriteria {
  listFilterBranch:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  reEnrollmentTriggersFilterBranches: Array<
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch
  >;

  shouldReEnroll: boolean;

  type: 'LIST_BASED';

  unEnrollObjectsNotMeetingCriteria: boolean;
}

export interface APIListBranch {
  branchName?: string;

  connection?: APIConnection;

  filterBranch?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;
}

export interface APIListBranchAction {
  actionId: string;

  listBranches: Array<APIListBranch>;

  type: 'LIST_BRANCH';

  defaultBranch?: APIConnection;

  defaultBranchName?: string;
}

export interface APIManualEnrollmentCriteria {
  shouldReEnroll: boolean;

  type: 'MANUAL';
}

export interface APIMonthlyRelativeDaysEnrollmentSchedule {
  monthlyRelativeDays: 'FIRST_MONDAY_OF_MONTH' | 'LAST_DAY_OF_MONTH';

  timeOfDay: APITimeOfDay;

  type: 'MONTHLY_RELATIVE_DAYS';
}

export interface APIMonthlySpecificDaysEnrollmentSchedule {
  daysOfMonth: Array<number>;

  timeOfDay: APITimeOfDay;

  type: 'MONTHLY_SPECIFIC_DAYS';
}

export interface APIObjectPropertyValue {
  propertyName: string;

  type: 'OBJECT_PROPERTY';
}

export interface APIPlatformFlow {
  id: string;

  actions: Array<
    | APIStaticBranchAction
    | APIListBranchAction
    | APIAbTestBranchAction
    | APICustomCodeAction
    | APIWebhookAction
    | APISingleConnectionAction
  >;

  blockedDates: Array<APIBlockedDate>;

  createdAt: string;

  crmObjectCreationStatus: 'PENDING' | 'COMPLETE';

  customProperties: { [key: string]: string };

  dataSources: Array<
    | APIAssociationDataSource
    | APIAssociationTimestampDataSource
    | APIStaticPropertyFilterDataSource
    | APIEnrolledRecordPropertyFilterDataSource
    | APIDatasetFieldPropertyFilterDataSource
    | APIEnrolledArgumentPropertyFilterDataSource
  >;

  flowType: 'WORKFLOW' | 'ACTION_SET' | 'UNKNOWN';

  isEnabled: boolean;

  nextAvailableActionId: string;

  objectTypeId: string;

  revisionId: string;

  timeWindows: Array<APITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  updatedAt: string;

  description?: string;

  enrollmentCriteria?:
    | APIListBasedEnrollmentCriteria
    | APIEventBasedEnrollmentCriteria
    | APIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | APIDailyEnrollmentSchedule
    | APIWeeklyEnrollmentSchedule
    | APIMonthlySpecificDaysEnrollmentSchedule
    | APIMonthlyRelativeDaysEnrollmentSchedule
    | APIYearlyEnrollmentSchedule
    | APIPropertyBasedEnrollmentSchedule;

  name?: string;

  startActionId?: string;

  suppressionFilterBranch?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  uuid?: string;
}

export interface APIPlatformFlowCreateRequest {
  actions: Array<
    | APIStaticBranchAction
    | APIListBranchAction
    | APIAbTestBranchAction
    | APICustomCodeAction
    | APIWebhookAction
    | APISingleConnectionAction
  >;

  blockedDates: Array<APIBlockedDate>;

  customProperties: { [key: string]: string };

  dataSources: Array<
    | APIAssociationDataSource
    | APIAssociationTimestampDataSource
    | APIStaticPropertyFilterDataSource
    | APIEnrolledRecordPropertyFilterDataSource
    | APIDatasetFieldPropertyFilterDataSource
    | APIEnrolledArgumentPropertyFilterDataSource
  >;

  flowType: 'WORKFLOW' | 'ACTION_SET' | 'UNKNOWN';

  isEnabled: boolean;

  objectTypeId: string;

  timeWindows: Array<APITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  description?: string;

  enrollmentCriteria?:
    | APIListBasedEnrollmentCriteria
    | APIEventBasedEnrollmentCriteria
    | APIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | APIDailyEnrollmentSchedule
    | APIWeeklyEnrollmentSchedule
    | APIMonthlySpecificDaysEnrollmentSchedule
    | APIMonthlyRelativeDaysEnrollmentSchedule
    | APIYearlyEnrollmentSchedule
    | APIPropertyBasedEnrollmentSchedule;

  name?: string;

  startActionId?: string;

  suppressionFilterBranch?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  uuid?: string;
}

export interface APIPlatformFlowPutRequest {
  actions: Array<
    | APIStaticBranchAction
    | APIListBranchAction
    | APIAbTestBranchAction
    | APICustomCodeAction
    | APIWebhookAction
    | APISingleConnectionAction
  >;

  blockedDates: Array<APIBlockedDate>;

  customProperties: { [key: string]: string };

  isEnabled: boolean;

  revisionId: string;

  timeWindows: Array<APITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  description?: string;

  enrollmentCriteria?:
    | APIListBasedEnrollmentCriteria
    | APIEventBasedEnrollmentCriteria
    | APIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | APIDailyEnrollmentSchedule
    | APIWeeklyEnrollmentSchedule
    | APIMonthlySpecificDaysEnrollmentSchedule
    | APIMonthlyRelativeDaysEnrollmentSchedule
    | APIYearlyEnrollmentSchedule
    | APIPropertyBasedEnrollmentSchedule;

  name?: string;

  startActionId?: string;

  suppressionFilterBranch?:
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  uuid?: string;
}

export interface APIPropertyBasedEnrollmentSchedule {
  dateProperty: string;

  daysDelta: number;

  timeOfDay: APITimeOfDay;

  type: 'PROPERTY_BASED';

  yearly: boolean;
}

export interface APIRelativeDateTimeValue {
  timeDelay: APITimeDelay;

  type: 'RELATIVE_DATETIME';
}

export interface APISignatureWebhookAuthSettings {
  appId: number;

  type: 'SIGNATURE';
}

export interface APISingleConnectionAction {
  actionId: string;

  actionTypeId: string;

  actionTypeVersion: number;

  fields: { [key: string]: unknown };

  type: 'SINGLE_CONNECTION';

  connection?: APIConnection;
}

export interface APISort {
  order: 'ASC' | 'DESC';

  property: string;

  missing?: string;
}

export interface APIStaticAppendValue {
  staticAppendValue: string;

  type: 'STATIC_APPEND_VALUE';
}

export interface APIStaticBranch {
  branchValue: string;

  connection?: APIConnection;
}

export interface APIStaticBranchAction {
  actionId: string;

  inputValue:
    | APIActionDataValue
    | APIObjectPropertyValue
    | APIStaticValue
    | APIRelativeDateTimeValue
    | APITimestampValue
    | APIIncrementValue
    | APIFetchedObjectPropertyValue
    | APIAppendObjectPropertyValue
    | APIStaticAppendValue
    | APIEnrollmentEventPropertyValue;

  staticBranches: Array<APIStaticBranch>;

  type: 'STATIC_BRANCH';

  defaultBranch?: APIConnection;

  defaultBranchName?: string;
}

export interface APIStaticDateAnchor {
  dayOfMonth: number;

  month:
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

  type: 'STATIC_DATE_ANCHOR';

  year?: number;
}

export interface APIStaticPropertyFilterDataSource {
  name: string;

  propertyName: string;

  staticValue: string;

  type: 'STATIC_PROPERTY_FILTER';

  sortBy?: APISort;
}

export interface APIStaticTimeZoneStrategy {
  timeZoneId: string;

  type: 'STATIC_TIME_ZONE';
}

export interface APIStaticValue {
  staticValue: string;

  type: 'STATIC_VALUE';
}

export interface APITimeDelay {
  daysOfWeek: Array<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'>;

  delta: number;

  timeUnit:
    | 'CENTURIES'
    | 'DAYS'
    | 'DECADES'
    | 'ERAS'
    | 'FOREVER'
    | 'HALF_DAYS'
    | 'HOURS'
    | 'MICROS'
    | 'MILLENNIA'
    | 'MILLIS'
    | 'MINUTES'
    | 'MONTHS'
    | 'NANOS'
    | 'SECONDS'
    | 'WEEKS'
    | 'YEARS';

  timeOfDay?: APITimeOfDay;

  timeZoneStrategy?: APIStaticTimeZoneStrategy;
}

export interface APITimeOfDay {
  hour: number;

  minute: number;
}

export interface APITimeWindow {
  day: 'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY';

  endTime?: APITimeOfDay;

  startTime?: APITimeOfDay;
}

export interface APITimestampValue {
  timestampType: 'EXECUTION_TIME';

  type: 'TIMESTAMP';
}

export interface APIUnEnrollmentSetting {
  flowIds: Array<string>;

  type: 'ALL' | 'SELECTIVE';
}

export interface APIWebhookAction {
  actionId: string;

  method: 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE';

  queryParams: Array<APIInputVariable>;

  type: 'WEBHOOK';

  webhookUrl: string;

  authSettings?: APIAuthKeyWebhookAuthSettings | APISignatureWebhookAuthSettings;

  connection?: APIConnection;
}

export interface APIWeeklyEnrollmentSchedule {
  daysOfWeek: Array<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'>;

  timeOfDay: APITimeOfDay;

  type: 'WEEKLY';
}

export interface APIYearlyEnrollmentSchedule {
  dayOfMonth: number;

  month:
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

  timeOfDay: APITimeOfDay;

  type: 'YEARLY';
}

export interface BatchResponseAPIFlow {
  completedAt: string;

  results: Array<APIFlow>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponseAPIFlowWithErrors {
  completedAt: string;

  results: Array<APIFlow>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseFlowIDWorkflowIDMappingResponse {
  completedAt: string;

  results: Array<FlowIDWorkflowIDMappingResponse>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponseFlowIDWorkflowIDMappingResponseWithErrors {
  completedAt: string;

  results: Array<FlowIDWorkflowIDMappingResponse>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseAPIFlowEmailCampaign {
  results: Array<APIFlowEmailCampaign>;

  paging?: Shared.Paging;
}

export interface CollectionResponseAPIFlowListingForwardPaging {
  results: Array<APIFlowListing>;

  paging?: Shared.ForwardPaging;
}

export interface FlowIDWorkflowIDMappingResponse {
  flowId: number;

  workflowId: number;
}

export type WorkflowCreateParams =
  | WorkflowCreateParams.APIContactFlowCreateRequest
  | WorkflowCreateParams.APIPlatformFlowCreateRequest;

export declare namespace WorkflowCreateParams {
  export interface APIContactFlowCreateRequest {}

  export interface APIPlatformFlowCreateRequest {}
}

export type WorkflowUpdateParams =
  | WorkflowUpdateParams.APIContactFlowPutRequest
  | WorkflowUpdateParams.APIPlatformFlowPutRequest;

export declare namespace WorkflowUpdateParams {
  export interface APIContactFlowPutRequest {}

  export interface APIPlatformFlowPutRequest {}
}

export interface WorkflowListParams extends PageParams {}

export interface WorkflowBatchGetParams {
  inputs: Array<APIFlowBatchFetchFlowIDCoordinate>;
}

export interface WorkflowBatchGetIDMappingsParams {
  inputs: Array<APIFlowBatchFetchMigrationFlowIDCoordinate | APIFlowBatchFetchMigrationWorkflowIDCoordinate>;
}

export interface WorkflowListEmailCampaignsParams extends PageParams {
  before?: string;

  flowId?: Array<string>;
}

export declare namespace Workflows {
  export {
    type APIAbTestBranchAction as APIAbTestBranchAction,
    type APIActionDataValue as APIActionDataValue,
    type APIAppendObjectPropertyValue as APIAppendObjectPropertyValue,
    type APIAssociationDataSource as APIAssociationDataSource,
    type APIAssociationTimestampDataSource as APIAssociationTimestampDataSource,
    type APIAuthKeyWebhookAuthSettings as APIAuthKeyWebhookAuthSettings,
    type APIBlockedDate as APIBlockedDate,
    type APIConnection as APIConnection,
    type APIContactFlow as APIContactFlow,
    type APIContactFlowCreateRequest as APIContactFlowCreateRequest,
    type APIContactFlowPutRequest as APIContactFlowPutRequest,
    type APIContactPropertyAnchor as APIContactPropertyAnchor,
    type APICustomCodeAction as APICustomCodeAction,
    type APIDailyEnrollmentSchedule as APIDailyEnrollmentSchedule,
    type APIDatasetFieldPropertyFilterDataSource as APIDatasetFieldPropertyFilterDataSource,
    type APIEnrolledArgumentPropertyFilterDataSource as APIEnrolledArgumentPropertyFilterDataSource,
    type APIEnrolledRecordPropertyFilterDataSource as APIEnrolledRecordPropertyFilterDataSource,
    type APIEnrollmentEventPropertyValue as APIEnrollmentEventPropertyValue,
    type APIEnumerationOutputField as APIEnumerationOutputField,
    type APIEventBasedEnrollmentCriteria as APIEventBasedEnrollmentCriteria,
    type APIFetchedObjectPropertyValue as APIFetchedObjectPropertyValue,
    type APIFlow as APIFlow,
    type APIFlowBatchFetchFlowIDCoordinate as APIFlowBatchFetchFlowIDCoordinate,
    type APIFlowBatchFetchMigrationFlowIDCoordinate as APIFlowBatchFetchMigrationFlowIDCoordinate,
    type APIFlowBatchFetchMigrationWorkflowIDCoordinate as APIFlowBatchFetchMigrationWorkflowIDCoordinate,
    type APIFlowBatchInput as APIFlowBatchInput,
    type APIFlowBatchMigrationInput as APIFlowBatchMigrationInput,
    type APIFlowCreateRequest as APIFlowCreateRequest,
    type APIFlowEmailCampaign as APIFlowEmailCampaign,
    type APIFlowListing as APIFlowListing,
    type APIFlowPutRequest as APIFlowPutRequest,
    type APIIncrementValue as APIIncrementValue,
    type APIInputVariable as APIInputVariable,
    type APIListBasedEnrollmentCriteria as APIListBasedEnrollmentCriteria,
    type APIListBranch as APIListBranch,
    type APIListBranchAction as APIListBranchAction,
    type APIManualEnrollmentCriteria as APIManualEnrollmentCriteria,
    type APIMonthlyRelativeDaysEnrollmentSchedule as APIMonthlyRelativeDaysEnrollmentSchedule,
    type APIMonthlySpecificDaysEnrollmentSchedule as APIMonthlySpecificDaysEnrollmentSchedule,
    type APIObjectPropertyValue as APIObjectPropertyValue,
    type APIPlatformFlow as APIPlatformFlow,
    type APIPlatformFlowCreateRequest as APIPlatformFlowCreateRequest,
    type APIPlatformFlowPutRequest as APIPlatformFlowPutRequest,
    type APIPropertyBasedEnrollmentSchedule as APIPropertyBasedEnrollmentSchedule,
    type APIRelativeDateTimeValue as APIRelativeDateTimeValue,
    type APISignatureWebhookAuthSettings as APISignatureWebhookAuthSettings,
    type APISingleConnectionAction as APISingleConnectionAction,
    type APISort as APISort,
    type APIStaticAppendValue as APIStaticAppendValue,
    type APIStaticBranch as APIStaticBranch,
    type APIStaticBranchAction as APIStaticBranchAction,
    type APIStaticDateAnchor as APIStaticDateAnchor,
    type APIStaticPropertyFilterDataSource as APIStaticPropertyFilterDataSource,
    type APIStaticTimeZoneStrategy as APIStaticTimeZoneStrategy,
    type APIStaticValue as APIStaticValue,
    type APITimeDelay as APITimeDelay,
    type APITimeOfDay as APITimeOfDay,
    type APITimeWindow as APITimeWindow,
    type APITimestampValue as APITimestampValue,
    type APIUnEnrollmentSetting as APIUnEnrollmentSetting,
    type APIWebhookAction as APIWebhookAction,
    type APIWeeklyEnrollmentSchedule as APIWeeklyEnrollmentSchedule,
    type APIYearlyEnrollmentSchedule as APIYearlyEnrollmentSchedule,
    type BatchResponseAPIFlow as BatchResponseAPIFlow,
    type BatchResponseAPIFlowWithErrors as BatchResponseAPIFlowWithErrors,
    type BatchResponseFlowIDWorkflowIDMappingResponse as BatchResponseFlowIDWorkflowIDMappingResponse,
    type BatchResponseFlowIDWorkflowIDMappingResponseWithErrors as BatchResponseFlowIDWorkflowIDMappingResponseWithErrors,
    type CollectionResponseAPIFlowEmailCampaign as CollectionResponseAPIFlowEmailCampaign,
    type CollectionResponseAPIFlowListingForwardPaging as CollectionResponseAPIFlowListingForwardPaging,
    type FlowIDWorkflowIDMappingResponse as FlowIDWorkflowIDMappingResponse,
    type APIFlowListingsPage as APIFlowListingsPage,
    type APIFlowEmailCampaignsPage as APIFlowEmailCampaignsPage,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowUpdateParams as WorkflowUpdateParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowBatchGetParams as WorkflowBatchGetParams,
    type WorkflowBatchGetIDMappingsParams as WorkflowBatchGetIDMappingsParams,
    type WorkflowListEmailCampaignsParams as WorkflowListEmailCampaignsParams,
  };
}
