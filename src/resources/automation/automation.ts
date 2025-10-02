// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActionsAPI from './actions';
import {
  ActionArchiveByFunctionTypeParams,
  ActionCompleteBatchParams,
  ActionCompleteParams,
  ActionCreateOrReplaceByFunctionTypeParams,
  ActionCreateOrReplaceParams,
  ActionCreateParams,
  ActionDeleteParams,
  ActionGetByFunctionTypeParams,
  ActionListParams,
  ActionReadParams,
  ActionUpdateParams,
  Actions,
  AutomationActionsBatchInputCallbackCompletionBatchRequest,
  AutomationActionsCallbackCompletionBatchRequest,
  AutomationActionsCallbackCompletionRequest,
  AutomationActionsCollectionResponsePublicActionDefinitionForwardPaging,
  AutomationActionsCollectionResponsePublicActionFunctionIdentifierNoPaging,
  AutomationActionsCollectionResponsePublicActionRevisionForwardPaging,
  AutomationActionsFieldTypeDefinition,
  AutomationActionsInputFieldDefinition,
  AutomationActionsOption,
  AutomationActionsOutputFieldDefinition,
  AutomationActionsPublicActionDefinition,
  AutomationActionsPublicActionDefinitionEgg,
  AutomationActionsPublicActionDefinitionPatch,
  AutomationActionsPublicActionFunction,
  AutomationActionsPublicActionFunctionIdentifier,
  AutomationActionsPublicActionLabels,
  AutomationActionsPublicActionRevision,
  AutomationActionsPublicConditionalSingleFieldDependency,
  AutomationActionsPublicExecutionTranslationRule,
  AutomationActionsPublicObjectRequestOptions,
  AutomationActionsPublicSingleFieldDependency,
} from './actions';

export class Automation extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

export interface AutomationAPIAbTestBranchAction {
  actionId: string;

  testBranches: Array<AutomationAPIConnection>;

  type: 'AB_TEST_BRANCH';
}

export interface AutomationAPIActionDataValue {
  actionId: string;

  dataKey: string;

  type: 'FIELD_DATA';
}

export interface AutomationAPIAppendObjectPropertyValue {
  appendPropertyName: string;

  type: 'APPEND_OBJECT_PROPERTY';
}

export interface AutomationAPIAssociationDataSource {
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  associationTypeId: number;

  name: string;

  objectTypeId: string;

  type: 'ASSOCIATION';

  sortBy?: AutomationAPISort;
}

export interface AutomationAPIAssociationTimestampDataSource {
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  associationTypeId: number;

  name: string;

  objectTypeId: string;

  type: 'ASSOCIATION_TIMESTAMP';
}

export interface AutomationAPIAuthKeyWebhookAuthSettings {
  location: 'HEADER' | 'QUERY_PARAM';

  name: string;

  secretName: string;

  type: 'AUTH_KEY';
}

export interface AutomationAPIBlockedDate {
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

export interface AutomationAPIConnection {
  edgeType: string;

  nextActionId: string;
}

export interface AutomationAPIContactFlow {
  id: string;

  actions: Array<
    | AutomationAPIStaticBranchAction
    | AutomationAPIListBranchAction
    | AutomationAPIAbTestBranchAction
    | AutomationAPICustomCodeAction
    | AutomationAPIWebhookAction
    | AutomationAPISingleConnectionAction
  >;

  blockedDates: Array<AutomationAPIBlockedDate>;

  canEnrollFromSalesforce: boolean;

  createdAt: string;

  crmObjectCreationStatus: 'PENDING' | 'COMPLETE';

  customProperties: { [key: string]: string };

  dataSources: Array<
    | AutomationAPIAssociationDataSource
    | AutomationAPIAssociationTimestampDataSource
    | AutomationAPIStaticPropertyFilterDataSource
    | AutomationAPIEnrolledRecordPropertyFilterDataSource
    | AutomationAPIDatasetFieldPropertyFilterDataSource
    | AutomationAPIEnrolledArgumentPropertyFilterDataSource
  >;

  flowType: 'WORKFLOW' | 'ACTION_SET' | 'UNKNOWN';

  isEnabled: boolean;

  nextAvailableActionId: string;

  objectTypeId: string;

  revisionId: string;

  suppressionListIds: Array<number>;

  timeWindows: Array<AutomationAPITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  updatedAt: string;

  enrollmentCriteria?:
    | AutomationAPIListBasedEnrollmentCriteria
    | AutomationAPIEventBasedEnrollmentCriteria
    | AutomationAPIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | AutomationAPIDailyEnrollmentSchedule
    | AutomationAPIWeeklyEnrollmentSchedule
    | AutomationAPIMonthlySpecificDaysEnrollmentSchedule
    | AutomationAPIMonthlyRelativeDaysEnrollmentSchedule
    | AutomationAPIYearlyEnrollmentSchedule
    | AutomationAPIPropertyBasedEnrollmentSchedule;

  eventAnchor?: AutomationAPIContactPropertyAnchor | AutomationAPIStaticDateAnchor;

  goalFilterBranch?:
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch;

  name?: string;

  startActionId?: string;

  unEnrollmentSetting?: AutomationAPIUnEnrollmentSetting;

  uuid?: string;
}

export interface AutomationAPIContactFlowCreateRequest {
  actions: Array<
    | AutomationAPIStaticBranchAction
    | AutomationAPIListBranchAction
    | AutomationAPIAbTestBranchAction
    | AutomationAPICustomCodeAction
    | AutomationAPIWebhookAction
    | AutomationAPISingleConnectionAction
  >;

  blockedDates: Array<AutomationAPIBlockedDate>;

  canEnrollFromSalesforce: boolean;

  customProperties: { [key: string]: string };

  dataSources: Array<
    | AutomationAPIAssociationDataSource
    | AutomationAPIAssociationTimestampDataSource
    | AutomationAPIStaticPropertyFilterDataSource
    | AutomationAPIEnrolledRecordPropertyFilterDataSource
    | AutomationAPIDatasetFieldPropertyFilterDataSource
    | AutomationAPIEnrolledArgumentPropertyFilterDataSource
  >;

  flowType: 'WORKFLOW' | 'ACTION_SET' | 'UNKNOWN';

  isEnabled: boolean;

  objectTypeId: string;

  suppressionListIds: Array<number>;

  timeWindows: Array<AutomationAPITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  enrollmentCriteria?:
    | AutomationAPIListBasedEnrollmentCriteria
    | AutomationAPIEventBasedEnrollmentCriteria
    | AutomationAPIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | AutomationAPIDailyEnrollmentSchedule
    | AutomationAPIWeeklyEnrollmentSchedule
    | AutomationAPIMonthlySpecificDaysEnrollmentSchedule
    | AutomationAPIMonthlyRelativeDaysEnrollmentSchedule
    | AutomationAPIYearlyEnrollmentSchedule
    | AutomationAPIPropertyBasedEnrollmentSchedule;

  eventAnchor?: AutomationAPIContactPropertyAnchor | AutomationAPIStaticDateAnchor;

  goalFilterBranch?:
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch;

  name?: string;

  startActionId?: string;

  unEnrollmentSetting?: AutomationAPIUnEnrollmentSetting;

  uuid?: string;
}

export interface AutomationAPIContactFlowPutRequest {
  actions: Array<
    | AutomationAPIStaticBranchAction
    | AutomationAPIListBranchAction
    | AutomationAPIAbTestBranchAction
    | AutomationAPICustomCodeAction
    | AutomationAPIWebhookAction
    | AutomationAPISingleConnectionAction
  >;

  blockedDates: Array<AutomationAPIBlockedDate>;

  canEnrollFromSalesforce: boolean;

  customProperties: { [key: string]: string };

  isEnabled: boolean;

  revisionId: string;

  suppressionListIds: Array<number>;

  timeWindows: Array<AutomationAPITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  enrollmentCriteria?:
    | AutomationAPIListBasedEnrollmentCriteria
    | AutomationAPIEventBasedEnrollmentCriteria
    | AutomationAPIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | AutomationAPIDailyEnrollmentSchedule
    | AutomationAPIWeeklyEnrollmentSchedule
    | AutomationAPIMonthlySpecificDaysEnrollmentSchedule
    | AutomationAPIMonthlyRelativeDaysEnrollmentSchedule
    | AutomationAPIYearlyEnrollmentSchedule
    | AutomationAPIPropertyBasedEnrollmentSchedule;

  eventAnchor?: AutomationAPIContactPropertyAnchor | AutomationAPIStaticDateAnchor;

  goalFilterBranch?:
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch;

  name?: string;

  startActionId?: string;

  unEnrollmentSetting?: AutomationAPIUnEnrollmentSetting;

  uuid?: string;
}

export interface AutomationAPIContactPropertyAnchor {
  contactProperty: string;

  type: 'CONTACT_PROPERTY_ANCHOR';
}

export interface AutomationAPICustomCodeAction {
  actionId: string;

  inputFields: Array<AutomationAPIInputVariable>;

  outputFields: Array<AutomationAPIEnumerationOutputField>;

  runtime: string;

  secretNames: Array<string>;

  sourceCode: string;

  type: 'CUSTOM_CODE';

  connection?: AutomationAPIConnection;
}

export interface AutomationAPIDailyEnrollmentSchedule {
  timeOfDay: AutomationAPITimeOfDay;

  type: 'DAILY';
}

export interface AutomationAPIDatasetFieldPropertyFilterDataSource {
  datasetFieldName: string;

  name: string;

  propertyName: string;

  type: 'DATASET_FIELD_PROPERTY_FILTER';

  sortBy?: AutomationAPISort;
}

export interface AutomationAPIEnrolledArgumentPropertyFilterDataSource {
  argumentName: string;

  name: string;

  propertyName: string;

  type: 'ENROLLED_ARGUMENT_PROPERTY_FILTER';

  sortBy?: AutomationAPISort;
}

export interface AutomationAPIEnrolledRecordPropertyFilterDataSource {
  name: string;

  propertyName: string;

  recordFieldName: string;

  type: 'ENROLLED_RECORD_PROPERTY_FILTER';

  sortBy?: AutomationAPISort;
}

export interface AutomationAPIEnrollmentEventPropertyValue {
  enrollmentEventPropertyToken: string;

  type: 'ENROLLMENT_EVENT_PROPERTY';
}

export interface AutomationAPIEnumerationOutputField {
  name: string;

  options: Array<string>;

  type: 'ENUMERATION';
}

export interface AutomationAPIEventBasedEnrollmentCriteria {
  eventFilterBranches: Array<AutomationPublicUnifiedEventsFilterBranch>;

  listMembershipFilterBranches: Array<
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch
  >;

  shouldReEnroll: boolean;

  type: 'EVENT_BASED';

  refinementCriteria?:
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch;
}

export interface AutomationAPIFetchedObjectPropertyValue {
  propertyToken: string;

  type: 'FETCHED_OBJECT_PROPERTY';
}

export type AutomationAPIFlow = unknown;

export interface AutomationAPIFlowBatchFetchFlowIDCoordinate {
  flowId: string;

  type: 'FLOW_ID';
}

export interface AutomationAPIFlowBatchFetchMigrationFlowIDCoordinate {
  flowMigrationStatuses: string;

  type: 'FLOW_ID';
}

export interface AutomationAPIFlowBatchFetchMigrationWorkflowIDCoordinate {
  flowMigrationStatusForClassicWorkflows: string;

  type: 'WORKFLOW_ID';
}

export interface AutomationAPIFlowBatchInput {
  inputs: Array<AutomationAPIFlowBatchFetchFlowIDCoordinate>;
}

export interface AutomationAPIFlowBatchMigrationInput {
  inputs: Array<
    | AutomationAPIFlowBatchFetchMigrationFlowIDCoordinate
    | AutomationAPIFlowBatchFetchMigrationWorkflowIDCoordinate
  >;
}

export type AutomationAPIFlowCreateRequest = unknown;

export interface AutomationAPIFlowEmailCampaign {
  emailCampaignId: string;

  emailContentId: string;

  flowId: string;
}

export interface AutomationAPIFlowListing {
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

export type AutomationAPIFlowPutRequest = unknown;

export interface AutomationAPIIncrementValue {
  incrementAmount: number;

  type: 'INCREMENT';
}

export interface AutomationAPIInputVariable {
  name: string;

  value:
    | AutomationAPIActionDataValue
    | AutomationAPIObjectPropertyValue
    | AutomationAPIStaticValue
    | AutomationAPIRelativeDateTimeValue
    | AutomationAPITimestampValue
    | AutomationAPIIncrementValue
    | AutomationAPIFetchedObjectPropertyValue
    | AutomationAPIAppendObjectPropertyValue
    | AutomationAPIStaticAppendValue
    | AutomationAPIEnrollmentEventPropertyValue;
}

export interface AutomationAPIListBasedEnrollmentCriteria {
  listFilterBranch:
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch;

  reEnrollmentTriggersFilterBranches: Array<
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch
  >;

  shouldReEnroll: boolean;

  type: 'LIST_BASED';

  unEnrollObjectsNotMeetingCriteria: boolean;
}

export interface AutomationAPIListBranch {
  branchName?: string;

  connection?: AutomationAPIConnection;

  filterBranch?:
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch;
}

export interface AutomationAPIListBranchAction {
  actionId: string;

  listBranches: Array<AutomationAPIListBranch>;

  type: 'LIST_BRANCH';

  defaultBranch?: AutomationAPIConnection;

  defaultBranchName?: string;
}

export interface AutomationAPIManualEnrollmentCriteria {
  shouldReEnroll: boolean;

  type: 'MANUAL';
}

export interface AutomationAPIMonthlyRelativeDaysEnrollmentSchedule {
  monthlyRelativeDays: 'LAST_DAY_OF_MONTH' | 'FIRST_MONDAY_OF_MONTH';

  timeOfDay: AutomationAPITimeOfDay;

  type: 'MONTHLY_RELATIVE_DAYS';
}

export interface AutomationAPIMonthlySpecificDaysEnrollmentSchedule {
  daysOfMonth: Array<number>;

  timeOfDay: AutomationAPITimeOfDay;

  type: 'MONTHLY_SPECIFIC_DAYS';
}

export interface AutomationAPIObjectPropertyValue {
  propertyName: string;

  type: 'OBJECT_PROPERTY';
}

export interface AutomationAPIPlatformFlow {
  id: string;

  actions: Array<
    | AutomationAPIStaticBranchAction
    | AutomationAPIListBranchAction
    | AutomationAPIAbTestBranchAction
    | AutomationAPICustomCodeAction
    | AutomationAPIWebhookAction
    | AutomationAPISingleConnectionAction
  >;

  blockedDates: Array<AutomationAPIBlockedDate>;

  createdAt: string;

  crmObjectCreationStatus: 'PENDING' | 'COMPLETE';

  customProperties: { [key: string]: string };

  dataSources: Array<
    | AutomationAPIAssociationDataSource
    | AutomationAPIAssociationTimestampDataSource
    | AutomationAPIStaticPropertyFilterDataSource
    | AutomationAPIEnrolledRecordPropertyFilterDataSource
    | AutomationAPIDatasetFieldPropertyFilterDataSource
    | AutomationAPIEnrolledArgumentPropertyFilterDataSource
  >;

  flowType: 'WORKFLOW' | 'ACTION_SET' | 'UNKNOWN';

  isEnabled: boolean;

  nextAvailableActionId: string;

  objectTypeId: string;

  revisionId: string;

  timeWindows: Array<AutomationAPITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  updatedAt: string;

  enrollmentCriteria?:
    | AutomationAPIListBasedEnrollmentCriteria
    | AutomationAPIEventBasedEnrollmentCriteria
    | AutomationAPIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | AutomationAPIDailyEnrollmentSchedule
    | AutomationAPIWeeklyEnrollmentSchedule
    | AutomationAPIMonthlySpecificDaysEnrollmentSchedule
    | AutomationAPIMonthlyRelativeDaysEnrollmentSchedule
    | AutomationAPIYearlyEnrollmentSchedule
    | AutomationAPIPropertyBasedEnrollmentSchedule;

  name?: string;

  startActionId?: string;

  suppressionFilterBranch?:
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch;

  uuid?: string;
}

export interface AutomationAPIPlatformFlowCreateRequest {
  actions: Array<
    | AutomationAPIStaticBranchAction
    | AutomationAPIListBranchAction
    | AutomationAPIAbTestBranchAction
    | AutomationAPICustomCodeAction
    | AutomationAPIWebhookAction
    | AutomationAPISingleConnectionAction
  >;

  blockedDates: Array<AutomationAPIBlockedDate>;

  customProperties: { [key: string]: string };

  dataSources: Array<
    | AutomationAPIAssociationDataSource
    | AutomationAPIAssociationTimestampDataSource
    | AutomationAPIStaticPropertyFilterDataSource
    | AutomationAPIEnrolledRecordPropertyFilterDataSource
    | AutomationAPIDatasetFieldPropertyFilterDataSource
    | AutomationAPIEnrolledArgumentPropertyFilterDataSource
  >;

  flowType: 'WORKFLOW' | 'ACTION_SET' | 'UNKNOWN';

  isEnabled: boolean;

  objectTypeId: string;

  timeWindows: Array<AutomationAPITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  enrollmentCriteria?:
    | AutomationAPIListBasedEnrollmentCriteria
    | AutomationAPIEventBasedEnrollmentCriteria
    | AutomationAPIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | AutomationAPIDailyEnrollmentSchedule
    | AutomationAPIWeeklyEnrollmentSchedule
    | AutomationAPIMonthlySpecificDaysEnrollmentSchedule
    | AutomationAPIMonthlyRelativeDaysEnrollmentSchedule
    | AutomationAPIYearlyEnrollmentSchedule
    | AutomationAPIPropertyBasedEnrollmentSchedule;

  name?: string;

  startActionId?: string;

  suppressionFilterBranch?:
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch;

  uuid?: string;
}

export interface AutomationAPIPlatformFlowPutRequest {
  actions: Array<
    | AutomationAPIStaticBranchAction
    | AutomationAPIListBranchAction
    | AutomationAPIAbTestBranchAction
    | AutomationAPICustomCodeAction
    | AutomationAPIWebhookAction
    | AutomationAPISingleConnectionAction
  >;

  blockedDates: Array<AutomationAPIBlockedDate>;

  customProperties: { [key: string]: string };

  isEnabled: boolean;

  revisionId: string;

  timeWindows: Array<AutomationAPITimeWindow>;

  type: 'CONTACT_FLOW' | 'PLATFORM_FLOW';

  enrollmentCriteria?:
    | AutomationAPIListBasedEnrollmentCriteria
    | AutomationAPIEventBasedEnrollmentCriteria
    | AutomationAPIManualEnrollmentCriteria;

  enrollmentSchedule?:
    | AutomationAPIDailyEnrollmentSchedule
    | AutomationAPIWeeklyEnrollmentSchedule
    | AutomationAPIMonthlySpecificDaysEnrollmentSchedule
    | AutomationAPIMonthlyRelativeDaysEnrollmentSchedule
    | AutomationAPIYearlyEnrollmentSchedule
    | AutomationAPIPropertyBasedEnrollmentSchedule;

  name?: string;

  startActionId?: string;

  suppressionFilterBranch?:
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch;

  uuid?: string;
}

export interface AutomationAPIPropertyBasedEnrollmentSchedule {
  dateProperty: string;

  daysDelta: number;

  timeOfDay: AutomationAPITimeOfDay;

  type: 'PROPERTY_BASED';

  yearly: boolean;
}

export interface AutomationAPIRelativeDateTimeValue {
  timeDelay: AutomationAPITimeDelay;

  type: 'RELATIVE_DATETIME';
}

export interface AutomationAPISignatureWebhookAuthSettings {
  appId: number;

  type: 'SIGNATURE';
}

export interface AutomationAPISingleConnectionAction {
  actionId: string;

  actionTypeId: string;

  actionTypeVersion: number;

  fields: { [key: string]: unknown };

  type: 'SINGLE_CONNECTION';

  connection?: AutomationAPIConnection;
}

export interface AutomationAPISort {
  order: 'ASC' | 'DESC';

  property: string;

  missing?: string;
}

export interface AutomationAPIStaticAppendValue {
  staticAppendValue: string;

  type: 'STATIC_APPEND_VALUE';
}

export interface AutomationAPIStaticBranch {
  branchValue: string;

  connection?: AutomationAPIConnection;
}

export interface AutomationAPIStaticBranchAction {
  actionId: string;

  inputValue:
    | AutomationAPIActionDataValue
    | AutomationAPIObjectPropertyValue
    | AutomationAPIStaticValue
    | AutomationAPIRelativeDateTimeValue
    | AutomationAPITimestampValue
    | AutomationAPIIncrementValue
    | AutomationAPIFetchedObjectPropertyValue
    | AutomationAPIAppendObjectPropertyValue
    | AutomationAPIStaticAppendValue
    | AutomationAPIEnrollmentEventPropertyValue;

  staticBranches: Array<AutomationAPIStaticBranch>;

  type: 'STATIC_BRANCH';

  defaultBranch?: AutomationAPIConnection;

  defaultBranchName?: string;
}

export interface AutomationAPIStaticDateAnchor {
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

export interface AutomationAPIStaticPropertyFilterDataSource {
  name: string;

  propertyName: string;

  staticValue: string;

  type: 'STATIC_PROPERTY_FILTER';

  sortBy?: AutomationAPISort;
}

export interface AutomationAPIStaticTimeZoneStrategy {
  timeZoneId: string;

  type: 'STATIC_TIME_ZONE';
}

export interface AutomationAPIStaticValue {
  staticValue: string;

  type: 'STATIC_VALUE';
}

export interface AutomationAPITimeDelay {
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

  timeOfDay?: AutomationAPITimeOfDay;

  timeZoneStrategy?: AutomationAPIStaticTimeZoneStrategy;
}

export interface AutomationAPITimeOfDay {
  hour: number;

  minute: number;
}

export interface AutomationAPITimestampValue {
  timestampType: 'EXECUTION_TIME';

  type: 'TIMESTAMP';
}

export interface AutomationAPITimeWindow {
  day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

  endTime: AutomationAPITimeOfDay;

  startTime: AutomationAPITimeOfDay;
}

export interface AutomationAPIUnEnrollmentSetting {
  flowIds: Array<string>;

  type: 'ALL' | 'SELECTIVE';
}

export interface AutomationAPIWebhookAction {
  actionId: string;

  method: 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE';

  queryParams: Array<AutomationAPIInputVariable>;

  type: 'WEBHOOK';

  webhookUrl: string;

  authSettings?: AutomationAPIAuthKeyWebhookAuthSettings | AutomationAPISignatureWebhookAuthSettings;

  connection?: AutomationAPIConnection;
}

export interface AutomationAPIWeeklyEnrollmentSchedule {
  daysOfWeek: Array<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'>;

  timeOfDay: AutomationAPITimeOfDay;

  type: 'WEEKLY';
}

export interface AutomationAPIYearlyEnrollmentSchedule {
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

  timeOfDay: AutomationAPITimeOfDay;

  type: 'YEARLY';
}

export interface AutomationBatchResponseAPIFlow {
  completedAt: string;

  results: Array<AutomationAPIFlow>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface AutomationBatchResponseAPIFlowWithErrors {
  completedAt: string;

  results: Array<AutomationAPIFlow>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface AutomationBatchResponseFlowIDWorkflowIDMappingResponse {
  completedAt: string;

  results: Array<AutomationFlowIDWorkflowIDMappingResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface AutomationBatchResponseFlowIDWorkflowIDMappingResponseWithErrors {
  completedAt: string;

  results: Array<AutomationFlowIDWorkflowIDMappingResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface AutomationCollectionResponseAPIFlowEmailCampaign {
  results: Array<AutomationAPIFlowEmailCampaign>;

  paging?: Shared.Paging;
}

export interface AutomationCollectionResponseAPIFlowListingForwardPaging {
  results: Array<AutomationAPIFlowListing>;

  paging?: Shared.ForwardPaging;
}

export interface AutomationFlowIDWorkflowIDMappingResponse {
  flowId: number;

  workflowId: number;
}

export interface AutomationPublicAbsoluteComparativeTimestampRefineBy {
  comparison: string;

  timestamp: number;

  type: 'ABSOLUTE_COMPARATIVE';
}

export interface AutomationPublicAbsoluteRangedTimestampRefineBy {
  lowerTimestamp: number;

  rangeType: string;

  type: 'ABSOLUTE_RANGED';

  upperTimestamp: number;
}

export interface AutomationPublicAdsSearchFilter {
  adNetwork: string;

  entityType: string;

  filterType: 'ADS_SEARCH';

  operator: string;

  searchTerms: Array<string>;

  searchTermType: string;
}

export interface AutomationPublicAdsTimeFilter {
  filterType: 'ADS_TIME';

  pruningRefineBy:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;
}

export interface AutomationPublicAllHistoryRefineBy {
  type: 'ALL_HISTORY';
}

export interface AutomationPublicAllPropertyTypesOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'ALL_PROPERTY';

  operator: string;
}

export interface AutomationPublicAndFilterBranch {
  filterBranches: Array<
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'AND';

  filters: Array<
    | AutomationPublicPropertyFilter
    | AutomationPublicAssociationInListFilter
    | AutomationPublicPageViewAnalyticsFilter
    | AutomationPublicCtaAnalyticsFilter
    | AutomationPublicEventAnalyticsFilter
    | AutomationPublicFormSubmissionFilter
    | AutomationPublicFormSubmissionOnPageFilter
    | AutomationPublicIntegrationEventFilter
    | AutomationPublicEmailSubscriptionFilter
    | AutomationPublicCommunicationSubscriptionFilter
    | AutomationPublicCampaignInfluencedFilter
    | AutomationPublicSurveyMonkeyFilter
    | AutomationPublicSurveyMonkeyValueFilter
    | AutomationPublicWebinarFilter
    | AutomationPublicEmailEventFilter
    | AutomationPublicPrivacyAnalyticsFilter
    | AutomationPublicAdsSearchFilter
    | AutomationPublicAdsTimeFilter
    | AutomationPublicInListFilter
    | AutomationPublicNumAssociationsFilter
    | AutomationPublicUnifiedEventsFilter
    | AutomationPublicPropertyAssociationInListFilter
    | AutomationPublicConstantFilter
  >;
}

export interface AutomationPublicAssociationFilterBranch {
  associationCategory: string;

  associationTypeId: number;

  filterBranches: Array<
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'ASSOCIATION';

  filters: Array<
    | AutomationPublicPropertyFilter
    | AutomationPublicAssociationInListFilter
    | AutomationPublicPageViewAnalyticsFilter
    | AutomationPublicCtaAnalyticsFilter
    | AutomationPublicEventAnalyticsFilter
    | AutomationPublicFormSubmissionFilter
    | AutomationPublicFormSubmissionOnPageFilter
    | AutomationPublicIntegrationEventFilter
    | AutomationPublicEmailSubscriptionFilter
    | AutomationPublicCommunicationSubscriptionFilter
    | AutomationPublicCampaignInfluencedFilter
    | AutomationPublicSurveyMonkeyFilter
    | AutomationPublicSurveyMonkeyValueFilter
    | AutomationPublicWebinarFilter
    | AutomationPublicEmailEventFilter
    | AutomationPublicPrivacyAnalyticsFilter
    | AutomationPublicAdsSearchFilter
    | AutomationPublicAdsTimeFilter
    | AutomationPublicInListFilter
    | AutomationPublicNumAssociationsFilter
    | AutomationPublicUnifiedEventsFilter
    | AutomationPublicPropertyAssociationInListFilter
    | AutomationPublicConstantFilter
  >;

  objectTypeId: string;

  operator: string;
}

export interface AutomationPublicAssociationInListFilter {
  associationCategory: string;

  associationTypeId: number;

  coalescingRefineBy:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  filterType: 'ASSOCIATION';

  listId: string;

  operator: string;

  toObjectType?: string;

  toObjectTypeId?: string;
}

export interface AutomationPublicBoolPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'BOOL';

  operator: string;

  value: boolean;
}

export interface AutomationPublicCalendarDatePropertyOperation {
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

export interface AutomationPublicCampaignInfluencedFilter {
  campaignId: string;

  filterType: 'CAMPAIGN_INFLUENCED';
}

export interface AutomationPublicCommunicationSubscriptionFilter {
  acceptedOptStates: Array<string>;

  channel: string;

  filterType: 'COMMUNICATION_SUBSCRIPTION';

  subscriptionIds: Array<string>;

  subscriptionType: string;

  businessUnitId?: string;
}

export interface AutomationPublicComparativeDatePropertyOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: 'COMPARATIVE_DATE';

  operator: string;

  defaultComparisonValue?: string;
}

export interface AutomationPublicComparativePropertyUpdatedOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: 'COMPARATIVE_PROPERTY_UPDATED';

  operator: string;

  defaultComparisonValue?: string;
}

export interface AutomationPublicConstantFilter {
  filterType: 'CONSTANT';

  shouldAccept: boolean;

  source?: string;
}

export interface AutomationPublicCtaAnalyticsFilter {
  ctaName: string;

  filterType: 'CTA';

  operator: string;

  coalescingRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  pruningRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;
}

export interface AutomationPublicDatePoint {
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

export interface AutomationPublicDatePropertyOperation {
  day: number;

  includeObjectsWithNoValueSet: boolean;

  month: string;

  operationType: 'DATE';

  operator: string;

  year: number;
}

export interface AutomationPublicDateTimePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'DATETIME';

  operator: string;

  requiresTimeZoneConversion: boolean;

  timestamp: number;
}

export interface AutomationPublicEmailEventFilter {
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
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;
}

export interface AutomationPublicEmailSubscriptionFilter {
  acceptedStatuses: Array<string>;

  filterType: 'EMAIL_SUBSCRIPTION';

  subscriptionIds: Array<string>;

  subscriptionType?: string;
}

export interface AutomationPublicEnumerationPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'ENUMERATION';

  operator: string;

  values: Array<string>;
}

export interface AutomationPublicEventAnalyticsFilter {
  eventId: string;

  filterType: 'EVENT';

  operator: string;

  coalescingRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  pruningRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;
}

export interface AutomationPublicEventFilterMetadata {
  operation:
    | AutomationPublicBoolPropertyOperation
    | AutomationPublicNumberPropertyOperation
    | AutomationPublicStringPropertyOperation
    | AutomationPublicDateTimePropertyOperation
    | AutomationPublicRangedDatePropertyOperation
    | AutomationPublicComparativePropertyUpdatedOperation
    | AutomationPublicComparativeDatePropertyOperation
    | AutomationPublicRollingDateRangePropertyOperation
    | AutomationPublicRollingPropertyUpdatedOperation
    | AutomationPublicEnumerationPropertyOperation
    | AutomationPublicAllPropertyTypesOperation
    | AutomationPublicRangedNumberPropertyOperation
    | AutomationPublicMultiStringPropertyOperation
    | AutomationPublicDatePropertyOperation
    | AutomationPublicCalendarDatePropertyOperation
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  property: string;
}

export interface AutomationPublicFiscalQuarterReference {
  day: number;

  month: number;

  referenceType: 'FISCAL_QUARTER';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface AutomationPublicFiscalYearReference {
  day: number;

  month: number;

  referenceType: 'FISCAL_YEAR';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface AutomationPublicFormSubmissionFilter {
  filterType: 'FORM_SUBMISSION';

  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT';

  coalescingRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  formId?: string;

  pruningRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;
}

export interface AutomationPublicFormSubmissionOnPageFilter {
  filterType: 'FORM_SUBMISSION_ON_PAGE';

  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT';

  pageId: string;

  coalescingRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  formId?: string;

  pruningRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;
}

export interface AutomationPublicIndexedTimePoint {
  indexReference:
    | AutomationPublicNowReference
    | AutomationPublicTodayReference
    | AutomationPublicWeekReference
    | AutomationPublicFiscalQuarterReference
    | AutomationPublicFiscalYearReference
    | AutomationPublicYearReference
    | AutomationPublicQuarterReference
    | AutomationPublicMonthReference;

  timeType: 'INDEXED';

  zoneId: string;

  offset?: AutomationPublicIndexOffset;

  timezoneSource?: string;
}

export interface AutomationPublicIndexOffset {
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

export interface AutomationPublicInListFilter {
  filterType: 'IN_LIST';

  listId: string;

  operator: string;

  metadata?: AutomationPublicInListFilterMetadata;
}

export interface AutomationPublicInListFilterMetadata {
  id: string;

  inListType: string;
}

export interface AutomationPublicIntegrationEventFilter {
  eventTypeId: number;

  filterLines: Array<AutomationPublicEventFilterMetadata>;

  filterType: 'INTEGRATION_EVENT';
}

export interface AutomationPublicMonthReference {
  day: number;

  referenceType: 'MONTH';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface AutomationPublicMultiStringPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'MULTISTRING';

  operator: string;

  values: Array<string>;
}

export interface AutomationPublicNotAllFilterBranch {
  filterBranches: Array<
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'NOT_ALL';

  filters: Array<
    | AutomationPublicPropertyFilter
    | AutomationPublicAssociationInListFilter
    | AutomationPublicPageViewAnalyticsFilter
    | AutomationPublicCtaAnalyticsFilter
    | AutomationPublicEventAnalyticsFilter
    | AutomationPublicFormSubmissionFilter
    | AutomationPublicFormSubmissionOnPageFilter
    | AutomationPublicIntegrationEventFilter
    | AutomationPublicEmailSubscriptionFilter
    | AutomationPublicCommunicationSubscriptionFilter
    | AutomationPublicCampaignInfluencedFilter
    | AutomationPublicSurveyMonkeyFilter
    | AutomationPublicSurveyMonkeyValueFilter
    | AutomationPublicWebinarFilter
    | AutomationPublicEmailEventFilter
    | AutomationPublicPrivacyAnalyticsFilter
    | AutomationPublicAdsSearchFilter
    | AutomationPublicAdsTimeFilter
    | AutomationPublicInListFilter
    | AutomationPublicNumAssociationsFilter
    | AutomationPublicUnifiedEventsFilter
    | AutomationPublicPropertyAssociationInListFilter
    | AutomationPublicConstantFilter
  >;
}

export interface AutomationPublicNotAnyFilterBranch {
  filterBranches: Array<
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'NOT_ANY';

  filters: Array<
    | AutomationPublicPropertyFilter
    | AutomationPublicAssociationInListFilter
    | AutomationPublicPageViewAnalyticsFilter
    | AutomationPublicCtaAnalyticsFilter
    | AutomationPublicEventAnalyticsFilter
    | AutomationPublicFormSubmissionFilter
    | AutomationPublicFormSubmissionOnPageFilter
    | AutomationPublicIntegrationEventFilter
    | AutomationPublicEmailSubscriptionFilter
    | AutomationPublicCommunicationSubscriptionFilter
    | AutomationPublicCampaignInfluencedFilter
    | AutomationPublicSurveyMonkeyFilter
    | AutomationPublicSurveyMonkeyValueFilter
    | AutomationPublicWebinarFilter
    | AutomationPublicEmailEventFilter
    | AutomationPublicPrivacyAnalyticsFilter
    | AutomationPublicAdsSearchFilter
    | AutomationPublicAdsTimeFilter
    | AutomationPublicInListFilter
    | AutomationPublicNumAssociationsFilter
    | AutomationPublicUnifiedEventsFilter
    | AutomationPublicPropertyAssociationInListFilter
    | AutomationPublicConstantFilter
  >;
}

export interface AutomationPublicNowReference {
  referenceType: 'NOW';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface AutomationPublicNumAssociationsFilter {
  associationCategory: string;

  associationTypeId: number;

  coalescingRefineBy:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  filterType: 'NUM_ASSOCIATIONS';
}

export interface AutomationPublicNumberPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'NUMBER';

  operator: string;

  value: number;
}

export interface AutomationPublicNumOccurrencesRefineBy {
  type: 'NUM_OCCURRENCES';

  maxOccurrences?: number;

  minOccurrences?: number;
}

export interface AutomationPublicOrFilterBranch {
  filterBranches: Array<
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'OR';

  filters: Array<
    | AutomationPublicPropertyFilter
    | AutomationPublicAssociationInListFilter
    | AutomationPublicPageViewAnalyticsFilter
    | AutomationPublicCtaAnalyticsFilter
    | AutomationPublicEventAnalyticsFilter
    | AutomationPublicFormSubmissionFilter
    | AutomationPublicFormSubmissionOnPageFilter
    | AutomationPublicIntegrationEventFilter
    | AutomationPublicEmailSubscriptionFilter
    | AutomationPublicCommunicationSubscriptionFilter
    | AutomationPublicCampaignInfluencedFilter
    | AutomationPublicSurveyMonkeyFilter
    | AutomationPublicSurveyMonkeyValueFilter
    | AutomationPublicWebinarFilter
    | AutomationPublicEmailEventFilter
    | AutomationPublicPrivacyAnalyticsFilter
    | AutomationPublicAdsSearchFilter
    | AutomationPublicAdsTimeFilter
    | AutomationPublicInListFilter
    | AutomationPublicNumAssociationsFilter
    | AutomationPublicUnifiedEventsFilter
    | AutomationPublicPropertyAssociationInListFilter
    | AutomationPublicConstantFilter
  >;
}

export interface AutomationPublicPageViewAnalyticsFilter {
  filterType: 'PAGE_VIEW';

  operator: string;

  pageUrl: string;

  coalescingRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  enableTracking?: boolean;

  pruningRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;
}

export interface AutomationPublicPrivacyAnalyticsFilter {
  filterType: 'PRIVACY';

  operator: string;

  privacyName: string;
}

export interface AutomationPublicPropertyAssociationFilterBranch {
  filterBranches: Array<
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'PROPERTY_ASSOCIATION';

  filters: Array<
    | AutomationPublicPropertyFilter
    | AutomationPublicAssociationInListFilter
    | AutomationPublicPageViewAnalyticsFilter
    | AutomationPublicCtaAnalyticsFilter
    | AutomationPublicEventAnalyticsFilter
    | AutomationPublicFormSubmissionFilter
    | AutomationPublicFormSubmissionOnPageFilter
    | AutomationPublicIntegrationEventFilter
    | AutomationPublicEmailSubscriptionFilter
    | AutomationPublicCommunicationSubscriptionFilter
    | AutomationPublicCampaignInfluencedFilter
    | AutomationPublicSurveyMonkeyFilter
    | AutomationPublicSurveyMonkeyValueFilter
    | AutomationPublicWebinarFilter
    | AutomationPublicEmailEventFilter
    | AutomationPublicPrivacyAnalyticsFilter
    | AutomationPublicAdsSearchFilter
    | AutomationPublicAdsTimeFilter
    | AutomationPublicInListFilter
    | AutomationPublicNumAssociationsFilter
    | AutomationPublicUnifiedEventsFilter
    | AutomationPublicPropertyAssociationInListFilter
    | AutomationPublicConstantFilter
  >;

  objectTypeId: string;

  operator: string;

  propertyWithObjectId: string;
}

export interface AutomationPublicPropertyAssociationInListFilter {
  coalescingRefineBy:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  filterType: 'PROPERTY_ASSOCIATION';

  listId: string;

  operator: string;

  propertyWithObjectId: string;

  toObjectTypeId?: string;
}

export interface AutomationPublicPropertyFilter {
  filterType: 'PROPERTY';

  operation:
    | AutomationPublicBoolPropertyOperation
    | AutomationPublicNumberPropertyOperation
    | AutomationPublicStringPropertyOperation
    | AutomationPublicDateTimePropertyOperation
    | AutomationPublicRangedDatePropertyOperation
    | AutomationPublicComparativePropertyUpdatedOperation
    | AutomationPublicComparativeDatePropertyOperation
    | AutomationPublicRollingDateRangePropertyOperation
    | AutomationPublicRollingPropertyUpdatedOperation
    | AutomationPublicEnumerationPropertyOperation
    | AutomationPublicAllPropertyTypesOperation
    | AutomationPublicRangedNumberPropertyOperation
    | AutomationPublicMultiStringPropertyOperation
    | AutomationPublicDatePropertyOperation
    | AutomationPublicCalendarDatePropertyOperation
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  property: string;
}

export interface AutomationPublicPropertyReferencedTime {
  property: string;

  referenceType: string;

  timeType: 'PROPERTY_REFERENCED';

  zoneId: string;

  timezoneSource?: string;
}

export interface AutomationPublicQuarterReference {
  day: number;

  month: number;

  referenceType: 'QUARTER';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface AutomationPublicRangedDatePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBound: number;

  operationType: 'RANGED_DATE';

  operator: string;

  requiresTimeZoneConversion: boolean;

  upperBound: number;
}

export interface AutomationPublicRangedNumberPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBound: number;

  operationType: 'NUMBER_RANGED';

  operator: string;

  upperBound: number;
}

export interface AutomationPublicRangedTimeOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBoundTimePoint:
    | AutomationPublicDatePoint
    | AutomationPublicIndexedTimePoint
    | AutomationPublicPropertyReferencedTime;

  operationType: string;

  operator: string;

  type: 'TIME_RANGED';

  upperBoundTimePoint:
    | AutomationPublicDatePoint
    | AutomationPublicIndexedTimePoint
    | AutomationPublicPropertyReferencedTime;

  lowerBoundEndpointBehavior?: string;

  propertyParser?: string;

  upperBoundEndpointBehavior?: string;
}

export interface AutomationPublicRelativeComparativeTimestampRefineBy {
  comparison: string;

  timeOffset: AutomationPublicTimeOffset;

  type: 'RELATIVE_COMPARATIVE';
}

export interface AutomationPublicRelativeRangedTimestampRefineBy {
  lowerBoundOffset: AutomationPublicTimeOffset;

  rangeType: string;

  type: 'RELATIVE_RANGED';

  upperBoundOffset: AutomationPublicTimeOffset;
}

export interface AutomationPublicRestrictedFilterBranch {
  filterBranches: Array<
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'RESTRICTED';

  filters: Array<
    | AutomationPublicPropertyFilter
    | AutomationPublicAssociationInListFilter
    | AutomationPublicPageViewAnalyticsFilter
    | AutomationPublicCtaAnalyticsFilter
    | AutomationPublicEventAnalyticsFilter
    | AutomationPublicFormSubmissionFilter
    | AutomationPublicFormSubmissionOnPageFilter
    | AutomationPublicIntegrationEventFilter
    | AutomationPublicEmailSubscriptionFilter
    | AutomationPublicCommunicationSubscriptionFilter
    | AutomationPublicCampaignInfluencedFilter
    | AutomationPublicSurveyMonkeyFilter
    | AutomationPublicSurveyMonkeyValueFilter
    | AutomationPublicWebinarFilter
    | AutomationPublicEmailEventFilter
    | AutomationPublicPrivacyAnalyticsFilter
    | AutomationPublicAdsSearchFilter
    | AutomationPublicAdsTimeFilter
    | AutomationPublicInListFilter
    | AutomationPublicNumAssociationsFilter
    | AutomationPublicUnifiedEventsFilter
    | AutomationPublicPropertyAssociationInListFilter
    | AutomationPublicConstantFilter
  >;
}

export interface AutomationPublicRollingDateRangePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  numberOfDays: number;

  operationType: 'ROLLING_DATE_RANGE';

  operator: string;

  requiresTimeZoneConversion: boolean;
}

export interface AutomationPublicRollingPropertyUpdatedOperation {
  includeObjectsWithNoValueSet: boolean;

  numberOfDays: number;

  operationType: 'ROLLING_PROPERTY_UPDATED';

  operator: string;
}

export interface AutomationPublicSetOccurrencesRefineBy {
  setType: string;

  type: 'SET_OCCURRENCES';
}

export interface AutomationPublicStringPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'STRING';

  operator: string;

  value: string;
}

export interface AutomationPublicSurveyMonkeyFilter {
  filterType: 'SURVEY_MONKEY';

  operator: string;

  surveyId: string;
}

export interface AutomationPublicSurveyMonkeyValueFilter {
  filterType: 'SURVEY_MONKEY_VALUE';

  operator: string;

  surveyId: string;

  surveyQuestion: string;

  valueComparison:
    | AutomationPublicBoolPropertyOperation
    | AutomationPublicNumberPropertyOperation
    | AutomationPublicStringPropertyOperation
    | AutomationPublicDateTimePropertyOperation
    | AutomationPublicRangedDatePropertyOperation
    | AutomationPublicComparativePropertyUpdatedOperation
    | AutomationPublicComparativeDatePropertyOperation
    | AutomationPublicRollingDateRangePropertyOperation
    | AutomationPublicRollingPropertyUpdatedOperation
    | AutomationPublicEnumerationPropertyOperation
    | AutomationPublicAllPropertyTypesOperation
    | AutomationPublicRangedNumberPropertyOperation
    | AutomationPublicMultiStringPropertyOperation
    | AutomationPublicDatePropertyOperation
    | AutomationPublicCalendarDatePropertyOperation
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  surveyAnswerColId?: string;

  surveyAnswerRowId?: string;
}

export interface AutomationPublicTimeOffset {
  amount: number;

  offsetDirection: string;

  timeUnit: string;
}

export interface AutomationPublicTimePointOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'TIME_POINT';

  operator: string;

  timePoint:
    | AutomationPublicDatePoint
    | AutomationPublicIndexedTimePoint
    | AutomationPublicPropertyReferencedTime;

  type: string;

  endpointBehavior?: string;

  propertyParser?: string;
}

export interface AutomationPublicTodayReference {
  referenceType: 'TODAY';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface AutomationPublicUnifiedEventsFilter {
  filterLines: Array<AutomationPublicEventFilterMetadata>;

  filterType: 'UNIFIED_EVENTS';

  coalescingRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;

  eventTypeId?: string;

  pruningRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;
}

export interface AutomationPublicUnifiedEventsFilterBranch {
  eventTypeId: string;

  filterBranches: Array<
    | AutomationPublicOrFilterBranch
    | AutomationPublicAndFilterBranch
    | AutomationPublicNotAllFilterBranch
    | AutomationPublicNotAnyFilterBranch
    | AutomationPublicRestrictedFilterBranch
    | AutomationPublicUnifiedEventsFilterBranch
    | AutomationPublicPropertyAssociationFilterBranch
    | AutomationPublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'UNIFIED_EVENTS';

  filters: Array<
    | AutomationPublicPropertyFilter
    | AutomationPublicAssociationInListFilter
    | AutomationPublicPageViewAnalyticsFilter
    | AutomationPublicCtaAnalyticsFilter
    | AutomationPublicEventAnalyticsFilter
    | AutomationPublicFormSubmissionFilter
    | AutomationPublicFormSubmissionOnPageFilter
    | AutomationPublicIntegrationEventFilter
    | AutomationPublicEmailSubscriptionFilter
    | AutomationPublicCommunicationSubscriptionFilter
    | AutomationPublicCampaignInfluencedFilter
    | AutomationPublicSurveyMonkeyFilter
    | AutomationPublicSurveyMonkeyValueFilter
    | AutomationPublicWebinarFilter
    | AutomationPublicEmailEventFilter
    | AutomationPublicPrivacyAnalyticsFilter
    | AutomationPublicAdsSearchFilter
    | AutomationPublicAdsTimeFilter
    | AutomationPublicInListFilter
    | AutomationPublicNumAssociationsFilter
    | AutomationPublicUnifiedEventsFilter
    | AutomationPublicPropertyAssociationInListFilter
    | AutomationPublicConstantFilter
  >;

  operator: 'HAS_COMPLETED' | 'HAS_NOT_COMPLETED';

  coalescingRefineBy?:
    | AutomationPublicNumOccurrencesRefineBy
    | AutomationPublicSetOccurrencesRefineBy
    | AutomationPublicRelativeComparativeTimestampRefineBy
    | AutomationPublicRelativeRangedTimestampRefineBy
    | AutomationPublicAbsoluteComparativeTimestampRefineBy
    | AutomationPublicAbsoluteRangedTimestampRefineBy
    | AutomationPublicAllHistoryRefineBy
    | AutomationPublicTimePointOperation
    | AutomationPublicRangedTimeOperation;
}

export interface AutomationPublicWebinarFilter {
  filterType: 'WEBINAR';

  operator: string;

  webinarId?: string;
}

export interface AutomationPublicWeekReference {
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

  referenceType: 'WEEK';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface AutomationPublicYearReference {
  day: number;

  month: number;

  referenceType: 'YEAR';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

Automation.Actions = Actions;

export declare namespace Automation {
  export {
    type AutomationAPIAbTestBranchAction as AutomationAPIAbTestBranchAction,
    type AutomationAPIActionDataValue as AutomationAPIActionDataValue,
    type AutomationAPIAppendObjectPropertyValue as AutomationAPIAppendObjectPropertyValue,
    type AutomationAPIAssociationDataSource as AutomationAPIAssociationDataSource,
    type AutomationAPIAssociationTimestampDataSource as AutomationAPIAssociationTimestampDataSource,
    type AutomationAPIAuthKeyWebhookAuthSettings as AutomationAPIAuthKeyWebhookAuthSettings,
    type AutomationAPIBlockedDate as AutomationAPIBlockedDate,
    type AutomationAPIConnection as AutomationAPIConnection,
    type AutomationAPIContactFlow as AutomationAPIContactFlow,
    type AutomationAPIContactFlowCreateRequest as AutomationAPIContactFlowCreateRequest,
    type AutomationAPIContactFlowPutRequest as AutomationAPIContactFlowPutRequest,
    type AutomationAPIContactPropertyAnchor as AutomationAPIContactPropertyAnchor,
    type AutomationAPICustomCodeAction as AutomationAPICustomCodeAction,
    type AutomationAPIDailyEnrollmentSchedule as AutomationAPIDailyEnrollmentSchedule,
    type AutomationAPIDatasetFieldPropertyFilterDataSource as AutomationAPIDatasetFieldPropertyFilterDataSource,
    type AutomationAPIEnrolledArgumentPropertyFilterDataSource as AutomationAPIEnrolledArgumentPropertyFilterDataSource,
    type AutomationAPIEnrolledRecordPropertyFilterDataSource as AutomationAPIEnrolledRecordPropertyFilterDataSource,
    type AutomationAPIEnrollmentEventPropertyValue as AutomationAPIEnrollmentEventPropertyValue,
    type AutomationAPIEnumerationOutputField as AutomationAPIEnumerationOutputField,
    type AutomationAPIEventBasedEnrollmentCriteria as AutomationAPIEventBasedEnrollmentCriteria,
    type AutomationAPIFetchedObjectPropertyValue as AutomationAPIFetchedObjectPropertyValue,
    type AutomationAPIFlow as AutomationAPIFlow,
    type AutomationAPIFlowBatchFetchFlowIDCoordinate as AutomationAPIFlowBatchFetchFlowIDCoordinate,
    type AutomationAPIFlowBatchFetchMigrationFlowIDCoordinate as AutomationAPIFlowBatchFetchMigrationFlowIDCoordinate,
    type AutomationAPIFlowBatchFetchMigrationWorkflowIDCoordinate as AutomationAPIFlowBatchFetchMigrationWorkflowIDCoordinate,
    type AutomationAPIFlowBatchInput as AutomationAPIFlowBatchInput,
    type AutomationAPIFlowBatchMigrationInput as AutomationAPIFlowBatchMigrationInput,
    type AutomationAPIFlowCreateRequest as AutomationAPIFlowCreateRequest,
    type AutomationAPIFlowEmailCampaign as AutomationAPIFlowEmailCampaign,
    type AutomationAPIFlowListing as AutomationAPIFlowListing,
    type AutomationAPIFlowPutRequest as AutomationAPIFlowPutRequest,
    type AutomationAPIIncrementValue as AutomationAPIIncrementValue,
    type AutomationAPIInputVariable as AutomationAPIInputVariable,
    type AutomationAPIListBasedEnrollmentCriteria as AutomationAPIListBasedEnrollmentCriteria,
    type AutomationAPIListBranch as AutomationAPIListBranch,
    type AutomationAPIListBranchAction as AutomationAPIListBranchAction,
    type AutomationAPIManualEnrollmentCriteria as AutomationAPIManualEnrollmentCriteria,
    type AutomationAPIMonthlyRelativeDaysEnrollmentSchedule as AutomationAPIMonthlyRelativeDaysEnrollmentSchedule,
    type AutomationAPIMonthlySpecificDaysEnrollmentSchedule as AutomationAPIMonthlySpecificDaysEnrollmentSchedule,
    type AutomationAPIObjectPropertyValue as AutomationAPIObjectPropertyValue,
    type AutomationAPIPlatformFlow as AutomationAPIPlatformFlow,
    type AutomationAPIPlatformFlowCreateRequest as AutomationAPIPlatformFlowCreateRequest,
    type AutomationAPIPlatformFlowPutRequest as AutomationAPIPlatformFlowPutRequest,
    type AutomationAPIPropertyBasedEnrollmentSchedule as AutomationAPIPropertyBasedEnrollmentSchedule,
    type AutomationAPIRelativeDateTimeValue as AutomationAPIRelativeDateTimeValue,
    type AutomationAPISignatureWebhookAuthSettings as AutomationAPISignatureWebhookAuthSettings,
    type AutomationAPISingleConnectionAction as AutomationAPISingleConnectionAction,
    type AutomationAPISort as AutomationAPISort,
    type AutomationAPIStaticAppendValue as AutomationAPIStaticAppendValue,
    type AutomationAPIStaticBranch as AutomationAPIStaticBranch,
    type AutomationAPIStaticBranchAction as AutomationAPIStaticBranchAction,
    type AutomationAPIStaticDateAnchor as AutomationAPIStaticDateAnchor,
    type AutomationAPIStaticPropertyFilterDataSource as AutomationAPIStaticPropertyFilterDataSource,
    type AutomationAPIStaticTimeZoneStrategy as AutomationAPIStaticTimeZoneStrategy,
    type AutomationAPIStaticValue as AutomationAPIStaticValue,
    type AutomationAPITimeDelay as AutomationAPITimeDelay,
    type AutomationAPITimeOfDay as AutomationAPITimeOfDay,
    type AutomationAPITimestampValue as AutomationAPITimestampValue,
    type AutomationAPITimeWindow as AutomationAPITimeWindow,
    type AutomationAPIUnEnrollmentSetting as AutomationAPIUnEnrollmentSetting,
    type AutomationAPIWebhookAction as AutomationAPIWebhookAction,
    type AutomationAPIWeeklyEnrollmentSchedule as AutomationAPIWeeklyEnrollmentSchedule,
    type AutomationAPIYearlyEnrollmentSchedule as AutomationAPIYearlyEnrollmentSchedule,
    type AutomationBatchResponseAPIFlow as AutomationBatchResponseAPIFlow,
    type AutomationBatchResponseAPIFlowWithErrors as AutomationBatchResponseAPIFlowWithErrors,
    type AutomationBatchResponseFlowIDWorkflowIDMappingResponse as AutomationBatchResponseFlowIDWorkflowIDMappingResponse,
    type AutomationBatchResponseFlowIDWorkflowIDMappingResponseWithErrors as AutomationBatchResponseFlowIDWorkflowIDMappingResponseWithErrors,
    type AutomationCollectionResponseAPIFlowEmailCampaign as AutomationCollectionResponseAPIFlowEmailCampaign,
    type AutomationCollectionResponseAPIFlowListingForwardPaging as AutomationCollectionResponseAPIFlowListingForwardPaging,
    type AutomationFlowIDWorkflowIDMappingResponse as AutomationFlowIDWorkflowIDMappingResponse,
    type AutomationPublicAbsoluteComparativeTimestampRefineBy as AutomationPublicAbsoluteComparativeTimestampRefineBy,
    type AutomationPublicAbsoluteRangedTimestampRefineBy as AutomationPublicAbsoluteRangedTimestampRefineBy,
    type AutomationPublicAdsSearchFilter as AutomationPublicAdsSearchFilter,
    type AutomationPublicAdsTimeFilter as AutomationPublicAdsTimeFilter,
    type AutomationPublicAllHistoryRefineBy as AutomationPublicAllHistoryRefineBy,
    type AutomationPublicAllPropertyTypesOperation as AutomationPublicAllPropertyTypesOperation,
    type AutomationPublicAndFilterBranch as AutomationPublicAndFilterBranch,
    type AutomationPublicAssociationFilterBranch as AutomationPublicAssociationFilterBranch,
    type AutomationPublicAssociationInListFilter as AutomationPublicAssociationInListFilter,
    type AutomationPublicBoolPropertyOperation as AutomationPublicBoolPropertyOperation,
    type AutomationPublicCalendarDatePropertyOperation as AutomationPublicCalendarDatePropertyOperation,
    type AutomationPublicCampaignInfluencedFilter as AutomationPublicCampaignInfluencedFilter,
    type AutomationPublicCommunicationSubscriptionFilter as AutomationPublicCommunicationSubscriptionFilter,
    type AutomationPublicComparativeDatePropertyOperation as AutomationPublicComparativeDatePropertyOperation,
    type AutomationPublicComparativePropertyUpdatedOperation as AutomationPublicComparativePropertyUpdatedOperation,
    type AutomationPublicConstantFilter as AutomationPublicConstantFilter,
    type AutomationPublicCtaAnalyticsFilter as AutomationPublicCtaAnalyticsFilter,
    type AutomationPublicDatePoint as AutomationPublicDatePoint,
    type AutomationPublicDatePropertyOperation as AutomationPublicDatePropertyOperation,
    type AutomationPublicDateTimePropertyOperation as AutomationPublicDateTimePropertyOperation,
    type AutomationPublicEmailEventFilter as AutomationPublicEmailEventFilter,
    type AutomationPublicEmailSubscriptionFilter as AutomationPublicEmailSubscriptionFilter,
    type AutomationPublicEnumerationPropertyOperation as AutomationPublicEnumerationPropertyOperation,
    type AutomationPublicEventAnalyticsFilter as AutomationPublicEventAnalyticsFilter,
    type AutomationPublicEventFilterMetadata as AutomationPublicEventFilterMetadata,
    type AutomationPublicFiscalQuarterReference as AutomationPublicFiscalQuarterReference,
    type AutomationPublicFiscalYearReference as AutomationPublicFiscalYearReference,
    type AutomationPublicFormSubmissionFilter as AutomationPublicFormSubmissionFilter,
    type AutomationPublicFormSubmissionOnPageFilter as AutomationPublicFormSubmissionOnPageFilter,
    type AutomationPublicIndexedTimePoint as AutomationPublicIndexedTimePoint,
    type AutomationPublicIndexOffset as AutomationPublicIndexOffset,
    type AutomationPublicInListFilter as AutomationPublicInListFilter,
    type AutomationPublicInListFilterMetadata as AutomationPublicInListFilterMetadata,
    type AutomationPublicIntegrationEventFilter as AutomationPublicIntegrationEventFilter,
    type AutomationPublicMonthReference as AutomationPublicMonthReference,
    type AutomationPublicMultiStringPropertyOperation as AutomationPublicMultiStringPropertyOperation,
    type AutomationPublicNotAllFilterBranch as AutomationPublicNotAllFilterBranch,
    type AutomationPublicNotAnyFilterBranch as AutomationPublicNotAnyFilterBranch,
    type AutomationPublicNowReference as AutomationPublicNowReference,
    type AutomationPublicNumAssociationsFilter as AutomationPublicNumAssociationsFilter,
    type AutomationPublicNumberPropertyOperation as AutomationPublicNumberPropertyOperation,
    type AutomationPublicNumOccurrencesRefineBy as AutomationPublicNumOccurrencesRefineBy,
    type AutomationPublicOrFilterBranch as AutomationPublicOrFilterBranch,
    type AutomationPublicPageViewAnalyticsFilter as AutomationPublicPageViewAnalyticsFilter,
    type AutomationPublicPrivacyAnalyticsFilter as AutomationPublicPrivacyAnalyticsFilter,
    type AutomationPublicPropertyAssociationFilterBranch as AutomationPublicPropertyAssociationFilterBranch,
    type AutomationPublicPropertyAssociationInListFilter as AutomationPublicPropertyAssociationInListFilter,
    type AutomationPublicPropertyFilter as AutomationPublicPropertyFilter,
    type AutomationPublicPropertyReferencedTime as AutomationPublicPropertyReferencedTime,
    type AutomationPublicQuarterReference as AutomationPublicQuarterReference,
    type AutomationPublicRangedDatePropertyOperation as AutomationPublicRangedDatePropertyOperation,
    type AutomationPublicRangedNumberPropertyOperation as AutomationPublicRangedNumberPropertyOperation,
    type AutomationPublicRangedTimeOperation as AutomationPublicRangedTimeOperation,
    type AutomationPublicRelativeComparativeTimestampRefineBy as AutomationPublicRelativeComparativeTimestampRefineBy,
    type AutomationPublicRelativeRangedTimestampRefineBy as AutomationPublicRelativeRangedTimestampRefineBy,
    type AutomationPublicRestrictedFilterBranch as AutomationPublicRestrictedFilterBranch,
    type AutomationPublicRollingDateRangePropertyOperation as AutomationPublicRollingDateRangePropertyOperation,
    type AutomationPublicRollingPropertyUpdatedOperation as AutomationPublicRollingPropertyUpdatedOperation,
    type AutomationPublicSetOccurrencesRefineBy as AutomationPublicSetOccurrencesRefineBy,
    type AutomationPublicStringPropertyOperation as AutomationPublicStringPropertyOperation,
    type AutomationPublicSurveyMonkeyFilter as AutomationPublicSurveyMonkeyFilter,
    type AutomationPublicSurveyMonkeyValueFilter as AutomationPublicSurveyMonkeyValueFilter,
    type AutomationPublicTimeOffset as AutomationPublicTimeOffset,
    type AutomationPublicTimePointOperation as AutomationPublicTimePointOperation,
    type AutomationPublicTodayReference as AutomationPublicTodayReference,
    type AutomationPublicUnifiedEventsFilter as AutomationPublicUnifiedEventsFilter,
    type AutomationPublicUnifiedEventsFilterBranch as AutomationPublicUnifiedEventsFilterBranch,
    type AutomationPublicWebinarFilter as AutomationPublicWebinarFilter,
    type AutomationPublicWeekReference as AutomationPublicWeekReference,
    type AutomationPublicYearReference as AutomationPublicYearReference,
  };

  export {
    Actions as Actions,
    type AutomationActionsBatchInputCallbackCompletionBatchRequest as AutomationActionsBatchInputCallbackCompletionBatchRequest,
    type AutomationActionsCallbackCompletionBatchRequest as AutomationActionsCallbackCompletionBatchRequest,
    type AutomationActionsCallbackCompletionRequest as AutomationActionsCallbackCompletionRequest,
    type AutomationActionsCollectionResponsePublicActionDefinitionForwardPaging as AutomationActionsCollectionResponsePublicActionDefinitionForwardPaging,
    type AutomationActionsCollectionResponsePublicActionFunctionIdentifierNoPaging as AutomationActionsCollectionResponsePublicActionFunctionIdentifierNoPaging,
    type AutomationActionsCollectionResponsePublicActionRevisionForwardPaging as AutomationActionsCollectionResponsePublicActionRevisionForwardPaging,
    type AutomationActionsFieldTypeDefinition as AutomationActionsFieldTypeDefinition,
    type AutomationActionsInputFieldDefinition as AutomationActionsInputFieldDefinition,
    type AutomationActionsOption as AutomationActionsOption,
    type AutomationActionsOutputFieldDefinition as AutomationActionsOutputFieldDefinition,
    type AutomationActionsPublicActionDefinition as AutomationActionsPublicActionDefinition,
    type AutomationActionsPublicActionDefinitionEgg as AutomationActionsPublicActionDefinitionEgg,
    type AutomationActionsPublicActionDefinitionPatch as AutomationActionsPublicActionDefinitionPatch,
    type AutomationActionsPublicActionFunction as AutomationActionsPublicActionFunction,
    type AutomationActionsPublicActionFunctionIdentifier as AutomationActionsPublicActionFunctionIdentifier,
    type AutomationActionsPublicActionLabels as AutomationActionsPublicActionLabels,
    type AutomationActionsPublicActionRevision as AutomationActionsPublicActionRevision,
    type AutomationActionsPublicConditionalSingleFieldDependency as AutomationActionsPublicConditionalSingleFieldDependency,
    type AutomationActionsPublicExecutionTranslationRule as AutomationActionsPublicExecutionTranslationRule,
    type AutomationActionsPublicObjectRequestOptions as AutomationActionsPublicObjectRequestOptions,
    type AutomationActionsPublicSingleFieldDependency as AutomationActionsPublicSingleFieldDependency,
    type ActionCreateParams as ActionCreateParams,
    type ActionUpdateParams as ActionUpdateParams,
    type ActionListParams as ActionListParams,
    type ActionDeleteParams as ActionDeleteParams,
    type ActionArchiveByFunctionTypeParams as ActionArchiveByFunctionTypeParams,
    type ActionCompleteParams as ActionCompleteParams,
    type ActionCompleteBatchParams as ActionCompleteBatchParams,
    type ActionCreateOrReplaceParams as ActionCreateOrReplaceParams,
    type ActionCreateOrReplaceByFunctionTypeParams as ActionCreateOrReplaceByFunctionTypeParams,
    type ActionGetByFunctionTypeParams as ActionGetByFunctionTypeParams,
    type ActionReadParams as ActionReadParams,
  };
}
