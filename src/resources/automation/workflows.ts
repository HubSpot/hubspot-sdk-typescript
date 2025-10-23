// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EmailsAPI from '../marketing/emails';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Workflows extends APIResource {
  /**
   * Create a new workflow.
   */
  create(body: WorkflowCreateParams, options?: RequestOptions): APIPromise<APIFlow> {
    return this._client.post('/automation/v4/flows', { body, ...options });
  }

  /**
   * Update a workflow by ID.
   */
  update(flowID: string, body: WorkflowUpdateParams, options?: RequestOptions): APIPromise<APIFlow> {
    return this._client.put(path`/automation/v4/flows/${flowID}`, { body, ...options });
  }

  /**
   * Retrieve all workflows from an account.
   */
  list(
    query: WorkflowListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<APIFlowListingsPage, APIFlowListing> {
    return this._client.getAPIList('/automation/v4/flows', Page<APIFlowListing>, { query, ...options });
  }

  /**
   * Fully delete a workflow by ID. Deleted workflows cannot be restored via the API.
   * If you need to restore an accidentally deleted flow, you'll need to contact
   * support.
   */
  delete(flowID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/automation/v4/flows/${flowID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a batch of workflows by ID.
   */
  batchGet(body: WorkflowBatchGetParams, options?: RequestOptions): APIPromise<BatchResponseAPIFlow> {
    return this._client.post('/automation/v4/flows/batch/read', { body, ...options });
  }

  /**
   * Retrieve the IDs of v3 workflows that have been migrated to the v4 API.
   */
  batchGetIDMappings(
    body: WorkflowBatchGetIDMappingsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseFlowIDWorkflowIDMappingResponse> {
    return this._client.post('/automation/v4/workflow-id-mappings/batch/read', { body, ...options });
  }

  /**
   * Retrieve all details for a specific workflow by ID.
   */
  get(flowID: string, options?: RequestOptions): APIPromise<APIFlow> {
    return this._client.get(path`/automation/v4/flows/${flowID}`, options);
  }

  /**
   * Retrieve emails sent by a workflow by ID.
   */
  listEmailCampaigns(
    query: WorkflowListEmailCampaignsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseAPIFlowEmailCampaign> {
    return this._client.get('/automation/v4/flows/email-campaigns', { query, ...options });
  }
}

export type APIFlowListingsPage = Page<APIFlowListing>;

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
  eventFilterBranches: Array<Shared.PublicUnifiedEventsFilterBranch>;

  /**
   * If you want to listen to list-membership events (an object was added to a list,
   * an object was removed from a list) you need to use this
   * `listMembershipFilterBranches` property instead of `eventFilterBranches`,
   * because list membership events work differently.
   */
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
    | Shared.PublicOrFilterBranch
    | Shared.PublicAndFilterBranch
    | Shared.PublicNotAllFilterBranch
    | Shared.PublicNotAnyFilterBranch
    | Shared.PublicRestrictedFilterBranch
    | Shared.PublicUnifiedEventsFilterBranch
    | Shared.PublicPropertyAssociationFilterBranch
    | Shared.PublicAssociationFilterBranch;

  /**
   * A list of filter branches to listen for in order to re-enroll objects into this
   * workflow.
   */
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

export interface WorkflowListEmailCampaignsParams {
  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  before?: string;

  /**
   * The ID of the workflow.
   */
  flowId?: Array<string>;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;
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
    type APIFlowListingsPage as APIFlowListingsPage,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowUpdateParams as WorkflowUpdateParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowBatchGetParams as WorkflowBatchGetParams,
    type WorkflowBatchGetIDMappingsParams as WorkflowBatchGetIDMappingsParams,
    type WorkflowListEmailCampaignsParams as WorkflowListEmailCampaignsParams,
  };
}
