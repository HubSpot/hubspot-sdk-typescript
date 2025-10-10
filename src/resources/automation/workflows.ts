// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EmailsAPI from '../marketing/emails';

export class Workflows extends APIResource {}

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
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  associationTypeId: number;

  name: string;

  objectTypeId: string;

  type: 'ASSOCIATION';

  sortBy?: APISort;
}

export interface APIAssociationTimestampDataSource {
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

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
    | 'JANUARY'
    | 'FEBRUARY'
    | 'MARCH'
    | 'APRIL'
    | 'MAY'
    | 'JUNE'
    | 'JULY'
    | 'AUGUST'
    | 'SEPTEMBER'
    | 'OCTOBER'
    | 'NOVEMBER'
    | 'DECEMBER';

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
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

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
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

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
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

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
  eventFilterBranches: Array<PublicUnifiedEventsFilterBranch>;

  listMembershipFilterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  shouldReEnroll: boolean;

  type: 'EVENT_BASED';

  refinementCriteria?:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;
}

export interface APIFetchedObjectPropertyValue {
  propertyToken: string;

  type: 'FETCHED_OBJECT_PROPERTY';
}

export type APIFlow = unknown;

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

export type APIFlowCreateRequest = unknown;

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

export type APIFlowPutRequest = unknown;

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
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

  reEnrollmentTriggersFilterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  shouldReEnroll: boolean;

  type: 'LIST_BASED';

  unEnrollObjectsNotMeetingCriteria: boolean;
}

export interface APIListBranch {
  branchName?: string;

  connection?: APIConnection;

  filterBranch?:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;
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
  monthlyRelativeDays: 'LAST_DAY_OF_MONTH' | 'FIRST_MONDAY_OF_MONTH';

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
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

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
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

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
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

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
    | 'JANUARY'
    | 'FEBRUARY'
    | 'MARCH'
    | 'APRIL'
    | 'MAY'
    | 'JUNE'
    | 'JULY'
    | 'AUGUST'
    | 'SEPTEMBER'
    | 'OCTOBER'
    | 'NOVEMBER'
    | 'DECEMBER';

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
    | 'NANOS'
    | 'MICROS'
    | 'MILLIS'
    | 'SECONDS'
    | 'MINUTES'
    | 'HOURS'
    | 'HALF_DAYS'
    | 'DAYS'
    | 'WEEKS'
    | 'MONTHS'
    | 'YEARS'
    | 'DECADES'
    | 'CENTURIES'
    | 'MILLENNIA'
    | 'ERAS'
    | 'FOREVER';

  timeOfDay?: APITimeOfDay;

  timeZoneStrategy?: APIStaticTimeZoneStrategy;
}

export interface APITimeOfDay {
  hour: number;

  minute: number;
}

export interface APITimestampValue {
  timestampType: 'EXECUTION_TIME';

  type: 'TIMESTAMP';
}

export interface APITimeWindow {
  day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

  endTime: APITimeOfDay;

  startTime: APITimeOfDay;
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
    | 'JANUARY'
    | 'FEBRUARY'
    | 'MARCH'
    | 'APRIL'
    | 'MAY'
    | 'JUNE'
    | 'JULY'
    | 'AUGUST'
    | 'SEPTEMBER'
    | 'OCTOBER'
    | 'NOVEMBER'
    | 'DECEMBER';

  timeOfDay: APITimeOfDay;

  type: 'YEARLY';
}

export interface BatchResponseAPIFlow {
  completedAt: string;

  results: Array<APIFlow>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponseAPIFlowWithErrors {
  completedAt: string;

  results: Array<APIFlow>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseFlowIDWorkflowIDMappingResponse {
  completedAt: string;

  results: Array<FlowIDWorkflowIDMappingResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponseFlowIDWorkflowIDMappingResponseWithErrors {
  completedAt: string;

  results: Array<FlowIDWorkflowIDMappingResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseAPIFlowEmailCampaign {
  results: Array<APIFlowEmailCampaign>;

  paging?: EmailsAPI.MarketingEmailsPaging;
}

export interface CollectionResponseAPIFlowListingForwardPaging {
  results: Array<APIFlowListing>;

  paging?: Shared.ForwardPaging;
}

export interface FlowIDWorkflowIDMappingResponse {
  flowId: number;

  workflowId: number;
}

export interface PublicAbsoluteComparativeTimestampRefineBy {
  comparison: string;

  timestamp: number;

  type: 'ABSOLUTE_COMPARATIVE';
}

export interface PublicAbsoluteRangedTimestampRefineBy {
  lowerTimestamp: number;

  rangeType: string;

  type: 'ABSOLUTE_RANGED';

  upperTimestamp: number;
}

export interface PublicAdsSearchFilter {
  adNetwork: string;

  entityType: string;

  filterType: 'ADS_SEARCH';

  operator: string;

  searchTerms: Array<string>;

  searchTermType: string;
}

export interface PublicAdsTimeFilter {
  filterType: 'ADS_TIME';

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
  type: 'ALL_HISTORY';
}

export interface PublicAllPropertyTypesOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'ALL_PROPERTY';

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

  filterBranchOperator: string;

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
  associationCategory: string;

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

  filterBranchOperator: string;

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

  objectTypeId: string;

  operator: string;
}

export interface PublicAssociationInListFilter {
  associationCategory: string;

  associationTypeId: number;

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

  filterType: 'ASSOCIATION';

  listId: string;

  operator: string;

  toObjectType?: string;

  toObjectTypeId?: string;
}

export interface PublicBoolPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'BOOL';

  operator: string;

  value: boolean;
}

export interface PublicCalendarDatePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'CALENDAR_DATE';

  operator: string;

  timeUnit: string;

  fiscalYearStart?:
    | 'JANUARY'
    | 'FEBRUARY'
    | 'MARCH'
    | 'APRIL'
    | 'MAY'
    | 'JUNE'
    | 'JULY'
    | 'AUGUST'
    | 'SEPTEMBER'
    | 'OCTOBER'
    | 'NOVEMBER'
    | 'DECEMBER';

  timeUnitCount?: number;

  useFiscalYear?: boolean;
}

export interface PublicCampaignInfluencedFilter {
  campaignId: string;

  filterType: 'CAMPAIGN_INFLUENCED';
}

export interface PublicCommunicationSubscriptionFilter {
  acceptedOptStates: Array<string>;

  channel: string;

  filterType: 'COMMUNICATION_SUBSCRIPTION';

  subscriptionIds: Array<string>;

  subscriptionType: string;

  businessUnitId?: string;
}

export interface PublicComparativeDatePropertyOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: 'COMPARATIVE_DATE';

  operator: string;

  defaultComparisonValue?: string;
}

export interface PublicComparativePropertyUpdatedOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: 'COMPARATIVE_PROPERTY_UPDATED';

  operator: string;

  defaultComparisonValue?: string;
}

export interface PublicConstantFilter {
  filterType: 'CONSTANT';

  shouldAccept: boolean;

  source?: string;
}

export interface PublicCtaAnalyticsFilter {
  ctaName: string;

  filterType: 'CTA';

  operator: string;

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

export interface PublicDatePoint {
  day: number;

  month: number;

  timeType: 'DATE';

  year: number;

  zoneId: string;

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;

  timezoneSource?: string;
}

export interface PublicDatePropertyOperation {
  day: number;

  includeObjectsWithNoValueSet: boolean;

  month: string;

  operationType: 'DATE';

  operator: string;

  year: number;
}

export interface PublicDateTimePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'DATETIME';

  operator: string;

  requiresTimeZoneConversion: boolean;

  timestamp: number;
}

export interface PublicEmailEventFilter {
  appId: string;

  emailId: string;

  filterType: 'EMAIL_EVENT';

  level: string;

  operator:
    | 'LINK_CLICKED'
    | 'MARKED_SPAM'
    | 'OPENED'
    | 'OPENED_BUT_LINK_NOT_CLICKED'
    | 'OPENED_BUT_NOT_REPLIED'
    | 'REPLIED'
    | 'UNSUBSCRIBED'
    | 'BOUNCED'
    | 'RECEIVED'
    | 'RECEIVED_BUT_NOT_OPENED'
    | 'SENT'
    | 'SENT_BUT_LINK_NOT_CLICKED'
    | 'SENT_BUT_NOT_RECEIVED';

  clickUrl?: string;

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

  filterType: 'EMAIL_SUBSCRIPTION';

  subscriptionIds: Array<string>;

  subscriptionType?: string;
}

export interface PublicEnumerationPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'ENUMERATION';

  operator: string;

  values: Array<string>;
}

export interface PublicEventAnalyticsFilter {
  eventId: string;

  filterType: 'EVENT';

  operator: string;

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

export interface PublicEventFilterMetadata {
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

  property: string;
}

export interface PublicFiscalQuarterReference {
  day: number;

  month: number;

  referenceType: 'FISCAL_QUARTER';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicFiscalYearReference {
  day: number;

  month: number;

  referenceType: 'FISCAL_YEAR';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicFormSubmissionFilter {
  filterType: 'FORM_SUBMISSION';

  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT';

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

  formId?: string;

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
  filterType: 'FORM_SUBMISSION_ON_PAGE';

  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT';

  pageId: string;

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

  formId?: string;

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

export interface PublicIndexedTimePoint {
  indexReference:
    | PublicNowReference
    | PublicTodayReference
    | PublicWeekReference
    | PublicFiscalQuarterReference
    | PublicFiscalYearReference
    | PublicYearReference
    | PublicQuarterReference
    | PublicMonthReference;

  timeType: 'INDEXED';

  zoneId: string;

  offset?: PublicIndexOffset;

  timezoneSource?: string;
}

export interface PublicIndexOffset {
  days?: number;

  hours?: number;

  milliseconds?: number;

  minutes?: number;

  months?: number;

  quarters?: number;

  seconds?: number;

  weeks?: number;

  years?: number;
}

export interface PublicInListFilter {
  filterType: 'IN_LIST';

  listId: string;

  operator: string;

  metadata?: PublicInListFilterMetadata;
}

export interface PublicInListFilterMetadata {
  id: string;

  inListType: string;
}

export interface PublicIntegrationEventFilter {
  eventTypeId: number;

  filterLines: Array<PublicEventFilterMetadata>;

  filterType: 'INTEGRATION_EVENT';
}

export interface PublicMonthReference {
  day: number;

  referenceType: 'MONTH';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicMultiStringPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'MULTISTRING';

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

  filterBranchOperator: string;

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

  filterBranchOperator: string;

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
  referenceType: 'NOW';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicNumAssociationsFilter {
  associationCategory: string;

  associationTypeId: number;

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

  filterType: 'NUM_ASSOCIATIONS';
}

export interface PublicNumberPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'NUMBER';

  operator: string;

  value: number;
}

export interface PublicNumOccurrencesRefineBy {
  type: 'NUM_OCCURRENCES';

  maxOccurrences?: number;

  minOccurrences?: number;
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

  filterBranchOperator: string;

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
  filterType: 'PAGE_VIEW';

  operator: string;

  pageUrl: string;

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

  enableTracking?: boolean;

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
  filterType: 'PRIVACY';

  operator: string;

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

  filterBranchOperator: string;

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

  objectTypeId: string;

  operator: string;

  propertyWithObjectId: string;
}

export interface PublicPropertyAssociationInListFilter {
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

  filterType: 'PROPERTY_ASSOCIATION';

  listId: string;

  operator: string;

  propertyWithObjectId: string;

  toObjectTypeId?: string;
}

export interface PublicPropertyFilter {
  filterType: 'PROPERTY';

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

  property: string;
}

export interface PublicPropertyReferencedTime {
  property: string;

  referenceType: string;

  timeType: 'PROPERTY_REFERENCED';

  zoneId: string;

  timezoneSource?: string;
}

export interface PublicQuarterReference {
  day: number;

  month: number;

  referenceType: 'QUARTER';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicRangedDatePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBound: number;

  operationType: 'RANGED_DATE';

  operator: string;

  requiresTimeZoneConversion: boolean;

  upperBound: number;
}

export interface PublicRangedNumberPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBound: number;

  operationType: 'NUMBER_RANGED';

  operator: string;

  upperBound: number;
}

export interface PublicRangedTimeOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBoundTimePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime;

  operationType: string;

  operator: string;

  type: 'TIME_RANGED';

  upperBoundTimePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime;

  lowerBoundEndpointBehavior?: string;

  propertyParser?: string;

  upperBoundEndpointBehavior?: string;
}

export interface PublicRelativeComparativeTimestampRefineBy {
  comparison: string;

  timeOffset: PublicTimeOffset;

  type: 'RELATIVE_COMPARATIVE';
}

export interface PublicRelativeRangedTimestampRefineBy {
  lowerBoundOffset: PublicTimeOffset;

  rangeType: string;

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

  filterBranchOperator: string;

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
  includeObjectsWithNoValueSet: boolean;

  numberOfDays: number;

  operationType: 'ROLLING_DATE_RANGE';

  operator: string;

  requiresTimeZoneConversion: boolean;
}

export interface PublicRollingPropertyUpdatedOperation {
  includeObjectsWithNoValueSet: boolean;

  numberOfDays: number;

  operationType: 'ROLLING_PROPERTY_UPDATED';

  operator: string;
}

export interface PublicSetOccurrencesRefineBy {
  setType: string;

  type: 'SET_OCCURRENCES';
}

export interface PublicStringPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'STRING';

  operator: string;

  value: string;
}

export interface PublicSurveyMonkeyFilter {
  filterType: 'SURVEY_MONKEY';

  operator: string;

  surveyId: string;
}

export interface PublicSurveyMonkeyValueFilter {
  filterType: 'SURVEY_MONKEY_VALUE';

  operator: string;

  surveyId: string;

  surveyQuestion: string;

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

  surveyAnswerColId?: string;

  surveyAnswerRowId?: string;
}

export interface PublicTimeOffset {
  amount: number;

  offsetDirection: string;

  timeUnit: string;
}

export interface PublicTimePointOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'TIME_POINT';

  operator: string;

  timePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime;

  type: string;

  endpointBehavior?: string;

  propertyParser?: string;
}

export interface PublicTodayReference {
  referenceType: 'TODAY';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicUnifiedEventsFilter {
  filterLines: Array<PublicEventFilterMetadata>;

  filterType: 'UNIFIED_EVENTS';

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

  eventTypeId?: string;

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

  filterBranchOperator: string;

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

  operator: 'HAS_COMPLETED' | 'HAS_NOT_COMPLETED';

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
}

export interface PublicWebinarFilter {
  filterType: 'WEBINAR';

  operator: string;

  webinarId?: string;
}

export interface PublicWeekReference {
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

  referenceType: 'WEEK';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicYearReference {
  day: number;

  month: number;

  referenceType: 'YEAR';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
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
    type APITimestampValue as APITimestampValue,
    type APITimeWindow as APITimeWindow,
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
    type PublicAbsoluteComparativeTimestampRefineBy as PublicAbsoluteComparativeTimestampRefineBy,
    type PublicAbsoluteRangedTimestampRefineBy as PublicAbsoluteRangedTimestampRefineBy,
    type PublicAdsSearchFilter as PublicAdsSearchFilter,
    type PublicAdsTimeFilter as PublicAdsTimeFilter,
    type PublicAllHistoryRefineBy as PublicAllHistoryRefineBy,
    type PublicAllPropertyTypesOperation as PublicAllPropertyTypesOperation,
    type PublicAndFilterBranch as PublicAndFilterBranch,
    type PublicAssociationFilterBranch as PublicAssociationFilterBranch,
    type PublicAssociationInListFilter as PublicAssociationInListFilter,
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
    type PublicIndexedTimePoint as PublicIndexedTimePoint,
    type PublicIndexOffset as PublicIndexOffset,
    type PublicInListFilter as PublicInListFilter,
    type PublicInListFilterMetadata as PublicInListFilterMetadata,
    type PublicIntegrationEventFilter as PublicIntegrationEventFilter,
    type PublicMonthReference as PublicMonthReference,
    type PublicMultiStringPropertyOperation as PublicMultiStringPropertyOperation,
    type PublicNotAllFilterBranch as PublicNotAllFilterBranch,
    type PublicNotAnyFilterBranch as PublicNotAnyFilterBranch,
    type PublicNowReference as PublicNowReference,
    type PublicNumAssociationsFilter as PublicNumAssociationsFilter,
    type PublicNumberPropertyOperation as PublicNumberPropertyOperation,
    type PublicNumOccurrencesRefineBy as PublicNumOccurrencesRefineBy,
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
  };
}
