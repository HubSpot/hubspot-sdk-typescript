// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EmailsAPI from '../marketing/emails';

export class Workflows extends APIResource {}

export interface APIAbTestBranchAction {
  /**
   * The ID for this action.
   */
  actionId: string;

  testBranches: Array<APIConnection>;

  /**
   * The type of action this is, can be: "STATIC_BRANCH", "LIST_BRANCH",
   * "AB_TEST_BRANCH", "CUSTOM_CODE", "WEBHOOK", or "SINGLE_CONNECTION"
   */
  type: 'AB_TEST_BRANCH';
}

export interface APIActionDataValue {
  /**
   * Which action to pull data from.
   */
  actionId: string;

  /**
   * The output field name for that action
   */
  dataKey: string;

  /**
   * This is the type of input value. This can be one of: "FIELD_DATA",
   * "OBJECT_PROPERTY", "STATIC_VALUE", "RELATIVE_DATETIME", "TIMESTAMP",
   * "INCREMENT", "FETCHED_OBJECT_PROPERTY", "APPEND_OBJECT_PROPERTY",
   * "STATIC_APPEND_VALUE", "ENROLLMENT_EVENT_PROPERTY"
   */
  type: 'FIELD_DATA';
}

export interface APIAppendObjectPropertyValue {
  /**
   * The name of the property to append data from
   */
  appendPropertyName: string;

  /**
   * This is the type of input value. This can be one of: "FIELD_DATA",
   * "OBJECT_PROPERTY", "STATIC_VALUE", "RELATIVE_DATETIME", "TIMESTAMP",
   * "INCREMENT", "FETCHED_OBJECT_PROPERTY", "APPEND_OBJECT_PROPERTY",
   * "STATIC_APPEND_VALUE", "ENROLLMENT_EVENT_PROPERTY"
   */
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
  /**
   * Where in the request this auth key should be located: "HEADER" or "QUERY_PARAM"
   */
  location: 'HEADER' | 'QUERY_PARAM';

  /**
   * The name to use for this auth key.
   */
  name: string;

  /**
   * The secret to pass through in this auth key.
   */
  secretName: string;

  /**
   * The type of webhook auth settings this is, can be: "AUTH_KEY" or "SIGNATURE"
   */
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
  /**
   * A date property on the contact to use as the anchor point of this workflow.
   */
  contactProperty: string;

  /**
   * The type of event anchor this is, can be: "CONTACT_PROPERTY_ANCHOR" or
   * "STATIC_DATE_ANCHOR"
   */
  type: 'CONTACT_PROPERTY_ANCHOR';
}

export interface APICustomCodeAction {
  /**
   * The ID for this action.
   */
  actionId: string;

  inputFields: Array<APIInputVariable>;

  /**
   * The list of output fields that this custom action makes available to the rest of
   * the flow.
   */
  outputFields: Array<APIEnumerationOutputField>;

  /**
   * The runtime to use to execute the source code. Supported runtimes are:
   * "NODE16X", "NODE20X", "PYTHON39"
   */
  runtime: string;

  /**
   * The names of any "secrets" setup in this portal that will be used in this
   * action.
   */
  secretNames: Array<string>;

  /**
   * The source code to execute when this action executes.
   */
  sourceCode: string;

  /**
   * The type of action this is, can be: "STATIC_BRANCH", "LIST_BRANCH",
   * "AB_TEST_BRANCH", "CUSTOM_CODE", "WEBHOOK", or "SINGLE_CONNECTION"
   */
  type: 'CUSTOM_CODE';

  connection?: APIConnection;
}

export interface APIDailyEnrollmentSchedule {
  timeOfDay: APITimeOfDay;

  /**
   * The type of enrollment schedule this is, can be: "DAILY", "WEEKLY",
   * "MONTHLY_SPECIFIC_DAYS", "MONTHLY_RELATIVE_DAYS", "YEARLY"
   */
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

  /**
   * If you want to listen to list-membership events (an object was added to a list,
   * an object was removed from a list) you need to use this
   * `listMembershipFilterBranches` property instead of `eventFilterBranches`,
   * because list membership events work differently.
   */
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

  /**
   * Whether or not the same object can enroll in this workflow twice.
   */
  shouldReEnroll: boolean;

  /**
   * The type of enrollment criteria this is, this can be "LIST_BASED",
   * "EVENT_BASED", or "MANUAL".
   */
  type: 'EVENT_BASED';

  /**
   * List-based criteria to further refine which contacts will enroll in this flow.
   */
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
  /**
   * The token to use to identify the object property to use
   */
  propertyToken: string;

  /**
   * This is the type of input value. This can be one of: "FIELD_DATA",
   * "OBJECT_PROPERTY", "STATIC_VALUE", "RELATIVE_DATETIME", "TIMESTAMP",
   * "INCREMENT", "FETCHED_OBJECT_PROPERTY", "APPEND_OBJECT_PROPERTY",
   * "STATIC_APPEND_VALUE", "ENROLLMENT_EVENT_PROPERTY"
   */
  type: 'FETCHED_OBJECT_PROPERTY';
}

export type APIFlow = APIContactFlow | APIPlatformFlow;

export interface APIFlowBatchFetchFlowIDCoordinate {
  flowId: string;

  type: 'FLOW_ID';
}

export interface APIFlowBatchFetchMigrationFlowIDCoordinate {
  /**
   * The flowId from the V4 API
   */
  flowMigrationStatuses: string;

  /**
   * The type of input this is, can be FLOW_ID or WORKFLOW_ID
   */
  type: 'FLOW_ID';
}

export interface APIFlowBatchFetchMigrationWorkflowIDCoordinate {
  /**
   * The workflowId from the V3 API
   */
  flowMigrationStatusForClassicWorkflows: string;

  /**
   * The type of input this is, can be FLOW_ID or WORKFLOW_ID
   */
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
  /**
   * The unique ID for this flow. This is auto-generated when creating the flow.
   */
  id: string;

  /**
   * The timestamp this flow was created.
   */
  createdAt: string;

  /**
   * Deprecated. Will be removed.
   */
  flowType: string;

  /**
   * This controls whether or not the flow is "enabled" if it's actively listening
   * for enrollment triggers and executing actions. If this is `false` the flow is
   * not accepting any enrollments or executing any actions.
   */
  isEnabled: boolean;

  /**
   * The CRM object type for objects that can be enrolled into this flow.
   */
  objectTypeId: string;

  /**
   * Deprecated. Will be removed.
   */
  revisionId: string;

  /**
   * The timestamp this flow was last updated.
   */
  updatedAt: string;

  /**
   * The user-provided name for this flow. Names get auto-created for workflows that
   * are created without a name.
   */
  name?: string;

  /**
   * An optional unique key for this flow. This is only unique per-portal.
   */
  uuid?: string;
}

export type APIFlowPutRequest = APIContactFlowPutRequest | APIPlatformFlowPutRequest;

export interface APIIncrementValue {
  /**
   * The amount be which to increment
   */
  incrementAmount: number;

  /**
   * This is the type of input value. This can be one of: "FIELD_DATA",
   * "OBJECT_PROPERTY", "STATIC_VALUE", "RELATIVE_DATETIME", "TIMESTAMP",
   * "INCREMENT", "FETCHED_OBJECT_PROPERTY", "APPEND_OBJECT_PROPERTY",
   * "STATIC_APPEND_VALUE", "ENROLLMENT_EVENT_PROPERTY"
   */
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
  /**
   * The list filter branch that represents the enrollment trigger to this flow.
   */
  listFilterBranch:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch;

  /**
   * A list of filter branches to listen for in order to re-enroll objects into this
   * workflow.
   */
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

  /**
   * Whether or not the same object can enroll in this workflow twice.
   */
  shouldReEnroll: boolean;

  /**
   * The type of enrollment criteria this is, this can be "LIST_BASED",
   * "EVENT_BASED", or "MANUAL".
   */
  type: 'LIST_BASED';

  /**
   * Whether or not to remove objects from this workflow if they stop meeting the
   * enrollment criteria.
   */
  unEnrollObjectsNotMeetingCriteria: boolean;
}

export interface APIListBranch {
  /**
   * The name of this branch
   */
  branchName?: string;

  connection?: APIConnection;

  /**
   * The list criteria that determine when to execute this branch. The first matching
   * branch will execute.
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
}

export interface APIListBranchAction {
  /**
   * The ID for this action.
   */
  actionId: string;

  listBranches: Array<APIListBranch>;

  /**
   * The type of action this is, can be: "STATIC_BRANCH", "LIST_BRANCH",
   * "AB_TEST_BRANCH", "CUSTOM_CODE", "WEBHOOK", or "SINGLE_CONNECTION"
   */
  type: 'LIST_BRANCH';

  defaultBranch?: APIConnection;

  /**
   * The name of the default branch, the branch that gets executed if the object does
   * not match any of the `listBranch` criteria.
   */
  defaultBranchName?: string;
}

export interface APIManualEnrollmentCriteria {
  /**
   * Whether or not the same object can enroll in this workflow twice.
   */
  shouldReEnroll: boolean;

  /**
   * The type of enrollment criteria this is, this can be "LIST_BASED",
   * "EVENT_BASED", or "MANUAL".
   */
  type: 'MANUAL';
}

export interface APIMonthlyRelativeDaysEnrollmentSchedule {
  /**
   * Can be either "LAST_DAY_OF_MONTH" or "FIRST_MONDAY_OF_MONTH"
   */
  monthlyRelativeDays: 'LAST_DAY_OF_MONTH' | 'FIRST_MONDAY_OF_MONTH';

  timeOfDay: APITimeOfDay;

  /**
   * The type of enrollment schedule this is, can be: "DAILY", "WEEKLY",
   * "MONTHLY_SPECIFIC_DAYS", "MONTHLY_RELATIVE_DAYS", "YEARLY"
   */
  type: 'MONTHLY_RELATIVE_DAYS';
}

export interface APIMonthlySpecificDaysEnrollmentSchedule {
  /**
   * Which days of the month to run this workflow on.
   */
  daysOfMonth: Array<number>;

  timeOfDay: APITimeOfDay;

  /**
   * The type of enrollment schedule this is, can be: "DAILY", "WEEKLY",
   * "MONTHLY_SPECIFIC_DAYS", "MONTHLY_RELATIVE_DAYS", "YEARLY"
   */
  type: 'MONTHLY_SPECIFIC_DAYS';
}

export interface APIObjectPropertyValue {
  /**
   * The property name to pull data from.
   */
  propertyName: string;

  /**
   * This is the type of input value. This can be one of: "FIELD_DATA",
   * "OBJECT_PROPERTY", "STATIC_VALUE", "RELATIVE_DATETIME", "TIMESTAMP",
   * "INCREMENT", "FETCHED_OBJECT_PROPERTY", "APPEND_OBJECT_PROPERTY",
   * "STATIC_APPEND_VALUE", "ENROLLMENT_EVENT_PROPERTY"
   */
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

  /**
   * This is the type of input value. This can be one of: "FIELD_DATA",
   * "OBJECT_PROPERTY", "STATIC_VALUE", "RELATIVE_DATETIME", "TIMESTAMP",
   * "INCREMENT", "FETCHED_OBJECT_PROPERTY", "APPEND_OBJECT_PROPERTY",
   * "STATIC_APPEND_VALUE", "ENROLLMENT_EVENT_PROPERTY"
   */
  type: 'RELATIVE_DATETIME';
}

export interface APISignatureWebhookAuthSettings {
  /**
   * The appId that this signature will be generated for.
   */
  appId: number;

  /**
   * The type of webhook auth settings this is, can be: "AUTH_KEY" or "SIGNATURE"
   */
  type: 'SIGNATURE';
}

export interface APISingleConnectionAction {
  /**
   * The ID for this action.
   */
  actionId: string;

  /**
   * The ID of the actionType to use.
   */
  actionTypeId: string;

  /**
   * The version of this actionType to use.
   */
  actionTypeVersion: number;

  /**
   * The fields to pass into this action. Different action types accept different
   * fields.
   */
  fields: { [key: string]: unknown };

  /**
   * The type of action this is, can be: "STATIC_BRANCH", "LIST_BRANCH",
   * "AB_TEST_BRANCH", "CUSTOM_CODE", "WEBHOOK", or "SINGLE_CONNECTION"
   */
  type: 'SINGLE_CONNECTION';

  connection?: APIConnection;
}

export interface APISort {
  order: 'ASC' | 'DESC';

  property: string;

  missing?: string;
}

export interface APIStaticAppendValue {
  /**
   * The value to append
   */
  staticAppendValue: string;

  /**
   * This is the type of input value. This can be one of: "FIELD_DATA",
   * "OBJECT_PROPERTY", "STATIC_VALUE", "RELATIVE_DATETIME", "TIMESTAMP",
   * "INCREMENT", "FETCHED_OBJECT_PROPERTY", "APPEND_OBJECT_PROPERTY",
   * "STATIC_APPEND_VALUE", "ENROLLMENT_EVENT_PROPERTY"
   */
  type: 'STATIC_APPEND_VALUE';
}

export interface APIStaticBranch {
  /**
   * If value to check for. If the value of the `inputValue` matches this
   * `branchValue` than this `connection` will get traversed.
   */
  branchValue: string;

  connection?: APIConnection;
}

export interface APIStaticBranchAction {
  /**
   * The ID for this action.
   */
  actionId: string;

  /**
   * The input value to branch off of.
   */
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

  /**
   * The type of action this is, can be: "STATIC_BRANCH", "LIST_BRANCH",
   * "AB_TEST_BRANCH", "CUSTOM_CODE", "WEBHOOK", or "SINGLE_CONNECTION"
   */
  type: 'STATIC_BRANCH';

  defaultBranch?: APIConnection;

  /**
   * The name of the default branch, the branch that gets executed if `inputValue`
   * does not match any of the `staticBranches`.
   */
  defaultBranchName?: string;
}

export interface APIStaticDateAnchor {
  /**
   * The day of the date to anchor on
   */
  dayOfMonth: number;

  /**
   * The month of the date to anchor on
   */
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

  /**
   * The type of event anchor this is, can be: "CONTACT_PROPERTY_ANCHOR" or
   * "STATIC_DATE_ANCHOR"
   */
  type: 'STATIC_DATE_ANCHOR';

  /**
   * The year of the date to anchor on. If this is not provided then this flow will
   * re-run each year.
   */
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
  /**
   * A static value to use as the input
   */
  staticValue: string;

  /**
   * This is the type of input value. This can be one of: "FIELD_DATA",
   * "OBJECT_PROPERTY", "STATIC_VALUE", "RELATIVE_DATETIME", "TIMESTAMP",
   * "INCREMENT", "FETCHED_OBJECT_PROPERTY", "APPEND_OBJECT_PROPERTY",
   * "STATIC_APPEND_VALUE", "ENROLLMENT_EVENT_PROPERTY"
   */
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
  /**
   * Currently only EXECUTION_TIME is supported.
   */
  timestampType: 'EXECUTION_TIME';

  /**
   * This is the type of input value. This can be one of: "FIELD_DATA",
   * "OBJECT_PROPERTY", "STATIC_VALUE", "RELATIVE_DATETIME", "TIMESTAMP",
   * "INCREMENT", "FETCHED_OBJECT_PROPERTY", "APPEND_OBJECT_PROPERTY",
   * "STATIC_APPEND_VALUE", "ENROLLMENT_EVENT_PROPERTY"
   */
  type: 'TIMESTAMP';
}

export interface APITimeWindow {
  day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

  endTime: APITimeOfDay;

  startTime: APITimeOfDay;
}

export interface APIUnEnrollmentSetting {
  /**
   * The IDs of the flows to unenroll an object in if it's enrolled in this flow.
   */
  flowIds: Array<string>;

  /**
   * The type of unenrollment to perform:
   *
   * "ALL" - unenroll the object from all other flows
   *
   * "SELECTIVE" - only unenroll the object from the flows specified in `flowIds`
   */
  type: 'ALL' | 'SELECTIVE';
}

export interface APIWebhookAction {
  /**
   * The ID for this action.
   */
  actionId: string;

  /**
   * The HTTP method to use when calling the webhook URL
   */
  method: 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE';

  queryParams: Array<APIInputVariable>;

  /**
   * The type of action this is, can be: "STATIC_BRANCH", "LIST_BRANCH",
   * "AB_TEST_BRANCH", "CUSTOM_CODE", "WEBHOOK", or "SINGLE_CONNECTION"
   */
  type: 'WEBHOOK';

  /**
   * The URL to call each time this action is executed.
   */
  webhookUrl: string;

  /**
   * The type of auth to use when calling the webhook endpoint.
   */
  authSettings?: APIAuthKeyWebhookAuthSettings | APISignatureWebhookAuthSettings;

  connection?: APIConnection;
}

export interface APIWeeklyEnrollmentSchedule {
  /**
   * Which days of the week to allow enrollments.
   */
  daysOfWeek: Array<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'>;

  timeOfDay: APITimeOfDay;

  /**
   * The type of enrollment schedule this is, can be: "DAILY", "WEEKLY",
   * "MONTHLY_SPECIFIC_DAYS", "MONTHLY_RELATIVE_DAYS", "YEARLY"
   */
  type: 'WEEKLY';
}

export interface APIYearlyEnrollmentSchedule {
  /**
   * The day of the date each year to run this flow.
   */
  dayOfMonth: number;

  /**
   * The month of the date each year to run this flow.
   */
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

  /**
   * The type of enrollment schedule this is, can be: "DAILY", "WEEKLY",
   * "MONTHLY_SPECIFIC_DAYS", "MONTHLY_RELATIVE_DAYS", "YEARLY"
   */
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

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
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
