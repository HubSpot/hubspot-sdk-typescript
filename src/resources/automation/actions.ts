// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as SendAPI from '../events/send';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  create(
    appID: number,
    body: ActionCreateParams,
    options?: RequestOptions,
  ): APIPromise<PublicActionDefinition> {
    return this._client.post(path`/automation/actions/2026-03/${appID}`, { body, ...options });
  }

  update(
    definitionID: string,
    params: ActionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PublicActionDefinition> {
    const { appId, ...body } = params;
    return this._client.patch(path`/automation/actions/2026-03/${appId}/${definitionID}`, {
      body,
      ...options,
    });
  }

  list(
    definitionID: string,
    params: ActionListParams,
    options?: RequestOptions,
  ): PagePromise<PublicActionRevisionsPage, PublicActionRevision> {
    const { appId, ...query } = params;
    return this._client.getAPIList(
      path`/automation/actions/2026-03/${appId}/${definitionID}/revisions`,
      Page<PublicActionRevision>,
      { query, ...options },
    );
  }

  delete(functionID: string, params: ActionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId, definitionId, functionType } = params;
    return this._client.delete(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  complete(callbackID: string, body: ActionCompleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/automation/actions/callbacks/2026-03/${callbackID}/complete`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  completeBatch(body: ActionCompleteBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/automation/actions/callbacks/2026-03/complete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  createOrReplace(
    functionID: string,
    params: ActionCreateOrReplaceParams,
    options?: RequestOptions,
  ): APIPromise<PublicActionFunctionIdentifier> {
    const { appId, definitionId, functionType, body } = params;
    return this._client.put(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      { body: body, ...options, headers: buildHeaders([{ 'Content-Type': 'text/plain' }, options?.headers]) },
    );
  }

  createOrReplaceByFunctionType(
    functionType:
      | 'POST_ACTION_EXECUTION'
      | 'POST_FETCH_OPTIONS'
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS',
    params: ActionCreateOrReplaceByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<PublicActionFunctionIdentifier> {
    const { appId, definitionId, body } = params;
    return this._client.put(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}`,
      { body: body, ...options, headers: buildHeaders([{ 'Content-Type': 'text/plain' }, options?.headers]) },
    );
  }

  createRequiresObject(
    definitionID: string,
    params: ActionCreateRequiresObjectParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, ...body } = params;
    return this._client.post(path`/automation/actions/2026-03/${appId}/${definitionID}/requires-object`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteByFunctionType(
    functionType:
      | 'POST_ACTION_EXECUTION'
      | 'POST_FETCH_OPTIONS'
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS',
    params: ActionDeleteByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, definitionId } = params;
    return this._client.delete(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  get(
    revisionID: string,
    params: ActionGetParams,
    options?: RequestOptions,
  ): APIPromise<PublicActionRevision> {
    const { appId, definitionId } = params;
    return this._client.get(
      path`/automation/actions/2026-03/${appId}/${definitionId}/revisions/${revisionID}`,
      options,
    );
  }

  getByFunctionType(
    functionType:
      | 'POST_ACTION_EXECUTION'
      | 'POST_FETCH_OPTIONS'
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS',
    params: ActionGetByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<PublicActionFunction> {
    const { appId, definitionId } = params;
    return this._client.get(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}`,
      options,
    );
  }

  getRequiresObject(
    definitionID: string,
    params: ActionGetRequiresObjectParams,
    options?: RequestOptions,
  ): APIPromise<PublicActionDefinitionRequiresObjectResponse> {
    const { appId } = params;
    return this._client.get(
      path`/automation/actions/2026-03/${appId}/${definitionID}/requires-object`,
      options,
    );
  }
}

export type PublicActionRevisionsPage = Page<PublicActionRevision>;

export interface ActionExecutionIndexIdentifier {
  actionExecutionIndex: number;

  enrollmentId: number;
}

export interface AgentRequestContext {
  agentId: number;

  chirpAiContextObject: ChirpAIContextObject;

  source: 'AGENTS';

  trajectoryId?: string;
}

export interface ArrayFieldSchema {
  items:
    | IntegerFieldSchema
    | LongFieldSchema
    | DoubleFieldSchema
    | StringFieldSchema
    | BooleanFieldSchema
    | ArrayFieldSchema
    | ObjectFieldSchema;

  type: 'ARRAY';
}

export interface BatchInputCallbackCompletionBatchRequest {
  inputs: Array<CallbackCompletionBatchRequest>;
}

export interface BooleanFieldSchema {
  type: 'BOOLEAN';
}

export interface CallbackCompletionBatchRequest {
  callbackId: string;

  outputFields: { [key: string]: string };

  typedOutputs: unknown;

  failureReasonType?: string;

  requestContext?:
    | WorkflowsRequestContext
    | AgentRequestContext
    | CopilotRequestContext
    | StandaloneRequestContext
    | TestRequestContext;
}

export interface CallbackCompletionRequest {
  outputFields: { [key: string]: string };

  typedOutputs: unknown;

  failureReasonType?: string;

  requestContext?:
    | WorkflowsRequestContext
    | AgentRequestContext
    | CopilotRequestContext
    | StandaloneRequestContext
    | TestRequestContext;
}

export interface ChirpAIContextObject {
  applicationGroup: string;

  applicationId: string;

  metadata: { [key: string]: string };

  otelContextHolder: { [key: string]: string };

  unstructuredSources: Array<
    | 'NONE'
    | 'USER_INPUT'
    | 'LOGGED_EMAIL'
    | 'VIDEO_CALL'
    | 'AUDIO_CALL'
    | 'CALL_TRANSCRIPT'
    | 'MEETING_TRANSCRIPT'
    | 'FORMS'
    | 'FEEDBACK_SURVEY'
    | 'PDF'
    | 'QUOTE'
    | 'INVOICE'
    | 'OTHER_ATTACHMENT_DOC'
    | 'WHATSAPP'
    | 'SMS'
    | 'CHAT'
    | 'FACEBOOK_MESSENGER'
    | 'CUSTOM_CHANNEL_OR_API'
    | 'MANY'
    | 'NOTE'
    | 'DERIVED'
  >;

  complianceIds?: ComplianceIDs;

  featureId?: string;

  inferenceId?: string;

  trajectoryId?: string;
}

export interface CollectionResponsePublicActionDefinitionForwardPaging {
  results: Array<PublicActionDefinition>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponsePublicActionFunctionIdentifierNoPaging {
  results: Array<PublicActionFunctionIdentifier>;
}

export interface CollectionResponsePublicActionRevisionForwardPaging {
  results: Array<PublicActionRevision>;

  paging?: Shared.ForwardPaging;
}

export interface ComplianceIDs {
  contactIds: Array<ContactID>;

  portalIds: Array<number>;

  userIds: Array<number>;

  noContactIdReason?: string;

  noPortalIdReason?: string;

  noUserIdReason?: string;
}

export interface ContactID {
  portalId: number;

  email?: string;

  vid?: number;
}

export interface CopilotRequestContext {
  source: 'COPILOT';

  trajectoryId?: string;
}

export interface DoubleFieldSchema {
  type: 'DOUBLE';

  maximum?: number;

  minimum?: number;
}

export interface FieldTypeDefinition {
  externalOptions: boolean;

  name: string;

  options: Array<SendAPI.Option>;

  schema:
    | IntegerFieldSchema
    | LongFieldSchema
    | DoubleFieldSchema
    | StringFieldSchema
    | BooleanFieldSchema
    | ArrayFieldSchema
    | ObjectFieldSchema;

  type:
    | 'bool'
    | 'currency_number'
    | 'date'
    | 'datetime'
    | 'enumeration'
    | 'json'
    | 'number'
    | 'object_coordinates'
    | 'phone_number'
    | 'string';

  useChirp: boolean;

  description?: string;

  externalOptionsReferenceType?: string;

  fieldType?:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'calculation_read_time'
    | 'calculation_rollup'
    | 'calculation_score'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea'
    | 'unknown';

  helpText?: string;

  label?: string;

  optionsUrl?: string;

  referencedObjectType?:
    | 'ABANDONED_CART'
    | 'ACCEPTANCE_TEST'
    | 'AD'
    | 'AD_ACCOUNT'
    | 'AD_CAMPAIGN'
    | 'AD_GROUP'
    | 'AI_FORECAST'
    | 'ALL_PAGES'
    | 'APPROVAL'
    | 'APPROVAL_STEP'
    | 'ATTRIBUTION'
    | 'AUDIENCE'
    | 'AUTOMATION_JOURNEY'
    | 'AUTOMATION_PLATFORM_FLOW'
    | 'AUTOMATION_PLATFORM_FLOW_ACTION'
    | 'BET_ALERT'
    | 'BET_DELIVERABLE_SERVICE'
    | 'BLOG_LISTING_PAGE'
    | 'BLOG_POST'
    | 'CALL'
    | 'CAMPAIGN'
    | 'CAMPAIGN_BUDGET_ITEM'
    | 'CAMPAIGN_SPEND_ITEM'
    | 'CAMPAIGN_STEP'
    | 'CAMPAIGN_TEMPLATE'
    | 'CAMPAIGN_TEMPLATE_STEP'
    | 'CART'
    | 'CASE_STUDY'
    | 'CHATFLOW'
    | 'CLIP'
    | 'CMS_URL'
    | 'COMBO_EVENT_CONFIGURATION'
    | 'COMMERCE_PAYMENT'
    | 'COMMUNICATION'
    | 'COMPANY'
    | 'CONTACT'
    | 'CONTACT_CREATE_ATTRIBUTION'
    | 'CONTENT'
    | 'CONTENT_AUDIT'
    | 'CONTENT_AUDIT_PAGE'
    | 'CONVERSATION'
    | 'CONVERSATION_INBOX'
    | 'CONVERSATION_SESSION'
    | 'CRM_OBJECTS_DUMMY_TYPE'
    | 'CRM_PIPELINES_DUMMY_TYPE'
    | 'CTA'
    | 'CTA_VARIANT'
    | 'DATA_PRIVACY_CONSENT'
    | 'DATA_SYNC_STATE'
    | 'DEAL'
    | 'DEAL_CREATE_ATTRIBUTION'
    | 'DEAL_REGISTRATION'
    | 'DEAL_SPLIT'
    | 'DISCOUNT'
    | 'DISCOUNT_CODE'
    | 'DISCOUNT_TEMPLATE'
    | 'EMAIL'
    | 'ENGAGEMENT'
    | 'EXPORT'
    | 'EXTERNAL_WEB_URL'
    | 'FEE'
    | 'FEEDBACK_SUBMISSION'
    | 'FEEDBACK_SURVEY'
    | 'FILE_MANAGER_FILE'
    | 'FILE_MANAGER_FOLDER'
    | 'FOLDER'
    | 'FORECAST'
    | 'FORM'
    | 'FORM_SUBMISSION_INBOUNDDB'
    | 'GOAL_TARGET'
    | 'GOAL_TARGET_GROUP'
    | 'GOAL_TEMPLATE'
    | 'GSC_PROPERTY'
    | 'HUB'
    | 'IMPORT'
    | 'INVOICE'
    | 'KEYWORD'
    | 'KNOWLEDGE_ARTICLE'
    | 'LANDING_PAGE'
    | 'LEAD'
    | 'LINE_ITEM'
    | 'MARKETING_CALENDAR'
    | 'MARKETING_CAMPAIGN_UTM'
    | 'MARKETING_EMAIL'
    | 'MARKETING_EVENT'
    | 'MARKETING_EVENT_ATTENDANCE'
    | 'MARKETING_SMS'
    | 'MEDIA_BRIDGE'
    | 'MEETING_EVENT'
    | 'MIC'
    | 'NOTE'
    | 'OBJECT_LIST'
    | 'ORDER'
    | 'OWNER'
    | 'PARTNER_ACCOUNT'
    | 'PARTNER_CLIENT'
    | 'PARTNER_CLIENT_REVENUE'
    | 'PARTNER_SERVICE'
    | 'PAYMENT_LINK'
    | 'PAYMENT_SCHEDULE'
    | 'PAYMENT_SCHEDULE_INSTALLMENT'
    | 'PERMISSIONS_TESTING'
    | 'PLAYBOOK'
    | 'PLAYBOOK_QUESTION'
    | 'PLAYBOOK_SUBMISSION'
    | 'PLAYBOOK_SUBMISSION_ANSWER'
    | 'PLAYLIST'
    | 'PLAYLIST_FOLDER'
    | 'PODCAST_EPISODE'
    | 'PORTAL'
    | 'PORTAL_OBJECT_SYNC_MESSAGE'
    | 'POSTAL_MAIL'
    | 'PRIVACY_SCANNER_COOKIE'
    | 'PRODUCT'
    | 'PRODUCT_OR_FOLDER'
    | 'PROPERTY_INFO'
    | 'PROSPECTING_AGENT_CONTACT_ASSIGNMENT'
    | 'PUBLISHING_TASK'
    | 'QUARANTINED_SUBMISSION'
    | 'QUOTA'
    | 'QUOTE'
    | 'QUOTE_FIELD'
    | 'QUOTE_MODULE'
    | 'QUOTE_MODULE_FIELD'
    | 'QUOTE_TEMPLATE'
    | 'RESTORABLE_CRM_OBJECT'
    | 'ROSTER'
    | 'ROSTER_MEMBER'
    | 'SALES_DOCUMENT'
    | 'SALES_TASK'
    | 'SALES_WORKLOAD'
    | 'SALESFORCE_SYNC_ERROR'
    | 'SCHEDULING_PAGE'
    | 'SCHEMAS_BACKEND_TEST'
    | 'SCORE_CONFIGURATION'
    | 'SEQUENCE'
    | 'SEQUENCE_ENROLLMENT'
    | 'SEQUENCE_STEP'
    | 'SEQUENCE_STEP_ENROLLMENT'
    | 'SERVICE'
    | 'SITE_PAGE'
    | 'SNIPPET'
    | 'SOCIAL_BROADCAST'
    | 'SOCIAL_CHANNEL'
    | 'SOCIAL_POST'
    | 'SOCIAL_PROFILE'
    | 'SOX_PROTECTED_DUMMY_TYPE'
    | 'SOX_PROTECTED_TEST_TYPE'
    | 'SUBMISSION_TAG'
    | 'SUBSCRIPTION'
    | 'TASK'
    | 'TASK_TEMPLATE'
    | 'TAX'
    | 'TEMPLATE'
    | 'TICKET'
    | 'UNKNOWN'
    | 'UNSUBSCRIBE'
    | 'USER'
    | 'VIEW'
    | 'VIEW_BLOCK'
    | 'WEB_INTERACTIVE';
}

export interface IntegerFieldSchema {
  type: 'INTEGER';

  maximum?: number;

  minimum?: number;
}

export interface LongFieldSchema {
  type: 'LONG';

  maximum?: number;

  minimum?: number;
}

export interface ObjectFieldSchema {
  properties: unknown;

  type: 'OBJECT';
}

/**
 * A HubSpot property option
 */
export interface Option {
  /**
   * A description of the option.
   */
  description: string;

  /**
   * The position of the item relative to others in the list.
   */
  displayOrder: number;

  doubleData: number;

  /**
   * Whether the option is displayed in HubSpot's UI.
   */
  hidden: boolean;

  /**
   * A user-friendly label that identifies the option.
   */
  label: string;

  /**
   * Whether the option is read-only.
   */
  readOnly: boolean;

  /**
   * The actual value of the option.
   */
  value: string;
}

export interface OutputFieldDefinition {
  typeDefinition: FieldTypeDefinition;
}

export interface PublicActionDefinition {
  id: string;

  actionUrl: string;

  functions: Array<PublicActionFunctionIdentifier>;

  inputFields: Array<PublicInputFieldDefinition>;

  labels: { [key: string]: PublicActionLabels };

  objectTypes: Array<string>;

  published: boolean;

  revisionId: string;

  archivedAt?: number;

  executionRules?: Array<PublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<PublicSingleFieldDependency | PublicConditionalSingleFieldDependency>;

  objectRequestOptions?: PublicObjectRequestOptions;

  outputFields?: Array<OutputFieldDefinition>;
}

export interface PublicActionDefinitionEgg {
  actionUrl: string;

  functions: Array<PublicActionFunction>;

  inputFields: Array<PublicInputFieldDefinition>;

  labels: { [key: string]: PublicActionLabels };

  objectTypes: Array<string>;

  published: boolean;

  archivedAt?: number;

  executionRules?: Array<PublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<PublicSingleFieldDependency | PublicConditionalSingleFieldDependency>;

  objectRequestOptions?: PublicObjectRequestOptions;

  outputFields?: Array<OutputFieldDefinition>;
}

export interface PublicActionDefinitionPatch {
  actionUrl?: string;

  executionRules?: Array<PublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<PublicSingleFieldDependency | PublicConditionalSingleFieldDependency>;

  inputFields?: Array<PublicInputFieldDefinition>;

  labels?: { [key: string]: PublicActionLabels };

  objectRequestOptions?: PublicObjectRequestOptions;

  objectTypes?: Array<string>;

  outputFields?: Array<OutputFieldDefinition>;

  published?: boolean;
}

export interface PublicActionDefinitionRequiresObjectRequest {
  requiresObject: boolean;
}

export interface PublicActionDefinitionRequiresObjectResponse {
  requiresObject: boolean;
}

export interface PublicActionFunction {
  functionSource: string;

  functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS';

  id?: string;
}

export interface PublicActionFunctionIdentifier {
  functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS';

  id?: string;
}

export interface PublicActionLabels {
  actionName: string;

  actionCardContent?: string;

  actionDescription?: string;

  appDisplayName?: string;

  executionRules?: { [key: string]: string };

  inputFieldDescriptions?: { [key: string]: string };

  inputFieldLabels?: { [key: string]: string };

  inputFieldOptionLabels?: { [key: string]: { [key: string]: string } };

  outputFieldLabels?: { [key: string]: string };
}

export interface PublicActionRevision {
  id: string;

  createdAt: string;

  definition: PublicActionDefinition;

  revisionId: string;
}

export interface PublicConditionalSingleFieldDependency {
  controllingFieldName: string;

  controllingFieldValue: string;

  dependencyType: 'CONDITIONAL_SINGLE_FIELD';

  dependentFieldNames: Array<string>;
}

export interface PublicExecutionTranslationRule {
  conditions: { [key: string]: unknown };

  labelName: string;
}

export interface PublicFieldTypeDefinition {
  name: string;

  options: Array<PublicOption>;

  type:
    | 'bool'
    | 'date'
    | 'datetime'
    | 'enumeration'
    | 'json'
    | 'number'
    | 'object_coordinates'
    | 'phone_number'
    | 'string';

  description?: string;

  fieldType?:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea';

  helpText?: string;

  label?: string;

  optionsUrl?: string;

  referencedObjectType?: 'OWNER';
}

export interface PublicInputFieldDefinition {
  isRequired: boolean;

  typeDefinition: PublicFieldTypeDefinition;

  supportedValueTypes?: Array<'STATIC_VALUE' | 'OBJECT_PROPERTY'>;
}

export interface PublicObjectRequestOptions {
  properties: Array<string>;
}

export interface PublicOption {
  label: string;

  value: string;

  description?: string;

  displayOrder?: number;
}

export interface PublicSingleFieldDependency {
  controllingFieldName: string;

  dependencyType: 'SINGLE_FIELD';

  dependentFieldNames: Array<string>;
}

export interface StandaloneRequestContext {
  chirpAiContextObject: ChirpAIContextObject;

  source: 'STANDALONE';

  trajectoryId?: string;
}

export interface StringFieldSchema {
  type: 'STRING';

  format?: 'DATE' | 'DATE_TIME' | 'OBJECT_COORDINATE' | 'TIME' | 'URI';
}

export interface TestRequestContext {
  source: 'TEST';
}

export interface WorkflowsRequestContext {
  source: 'WORKFLOWS';

  workflowId: number;

  actionExecutionIndexIdentifier?: ActionExecutionIndexIdentifier;

  actionId?: number;
}

export interface ActionCreateParams {
  actionUrl: string;

  functions: Array<PublicActionFunction>;

  inputFields: Array<PublicInputFieldDefinition>;

  labels: { [key: string]: PublicActionLabels };

  objectTypes: Array<string>;

  published: boolean;

  archivedAt?: number;

  executionRules?: Array<PublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<PublicSingleFieldDependency | PublicConditionalSingleFieldDependency>;

  objectRequestOptions?: PublicObjectRequestOptions;

  outputFields?: Array<OutputFieldDefinition>;
}

export interface ActionUpdateParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param
   */
  actionUrl?: string;

  /**
   * Body param
   */
  executionRules?: Array<PublicExecutionTranslationRule>;

  /**
   * Body param
   */
  inputFieldDependencies?: Array<PublicSingleFieldDependency | PublicConditionalSingleFieldDependency>;

  /**
   * Body param
   */
  inputFields?: Array<PublicInputFieldDefinition>;

  /**
   * Body param
   */
  labels?: { [key: string]: PublicActionLabels };

  /**
   * Body param
   */
  objectRequestOptions?: PublicObjectRequestOptions;

  /**
   * Body param
   */
  objectTypes?: Array<string>;

  /**
   * Body param
   */
  outputFields?: Array<OutputFieldDefinition>;

  /**
   * Body param
   */
  published?: boolean;
}

export interface ActionListParams extends PageParams {
  /**
   * Path param
   */
  appId: number;
}

export interface ActionDeleteParams {
  appId: number;

  definitionId: string;

  functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS';
}

export interface ActionCompleteParams {
  outputFields: { [key: string]: string };

  typedOutputs: unknown;

  failureReasonType?: string;

  requestContext?:
    | WorkflowsRequestContext
    | AgentRequestContext
    | CopilotRequestContext
    | StandaloneRequestContext
    | TestRequestContext;
}

export interface ActionCompleteBatchParams {
  inputs: Array<CallbackCompletionBatchRequest>;
}

export interface ActionCreateOrReplaceParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Path param
   */
  definitionId: string;

  /**
   * Path param
   */
  functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS';

  /**
   * Body param
   */
  body: string;
}

export interface ActionCreateOrReplaceByFunctionTypeParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Path param
   */
  definitionId: string;

  /**
   * Body param
   */
  body: string;
}

export interface ActionCreateRequiresObjectParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param
   */
  requiresObject: boolean;
}

export interface ActionDeleteByFunctionTypeParams {
  appId: number;

  definitionId: string;
}

export interface ActionGetParams {
  appId: number;

  definitionId: string;
}

export interface ActionGetByFunctionTypeParams {
  appId: number;

  definitionId: string;
}

export interface ActionGetRequiresObjectParams {
  appId: number;
}

export declare namespace Actions {
  export {
    type ActionExecutionIndexIdentifier as ActionExecutionIndexIdentifier,
    type AgentRequestContext as AgentRequestContext,
    type ArrayFieldSchema as ArrayFieldSchema,
    type BatchInputCallbackCompletionBatchRequest as BatchInputCallbackCompletionBatchRequest,
    type BooleanFieldSchema as BooleanFieldSchema,
    type CallbackCompletionBatchRequest as CallbackCompletionBatchRequest,
    type CallbackCompletionRequest as CallbackCompletionRequest,
    type ChirpAIContextObject as ChirpAIContextObject,
    type CollectionResponsePublicActionDefinitionForwardPaging as CollectionResponsePublicActionDefinitionForwardPaging,
    type CollectionResponsePublicActionFunctionIdentifierNoPaging as CollectionResponsePublicActionFunctionIdentifierNoPaging,
    type CollectionResponsePublicActionRevisionForwardPaging as CollectionResponsePublicActionRevisionForwardPaging,
    type ComplianceIDs as ComplianceIDs,
    type ContactID as ContactID,
    type CopilotRequestContext as CopilotRequestContext,
    type DoubleFieldSchema as DoubleFieldSchema,
    type FieldTypeDefinition as FieldTypeDefinition,
    type IntegerFieldSchema as IntegerFieldSchema,
    type LongFieldSchema as LongFieldSchema,
    type ObjectFieldSchema as ObjectFieldSchema,
    type Option as Option,
    type OutputFieldDefinition as OutputFieldDefinition,
    type PublicActionDefinition as PublicActionDefinition,
    type PublicActionDefinitionEgg as PublicActionDefinitionEgg,
    type PublicActionDefinitionPatch as PublicActionDefinitionPatch,
    type PublicActionDefinitionRequiresObjectRequest as PublicActionDefinitionRequiresObjectRequest,
    type PublicActionDefinitionRequiresObjectResponse as PublicActionDefinitionRequiresObjectResponse,
    type PublicActionFunction as PublicActionFunction,
    type PublicActionFunctionIdentifier as PublicActionFunctionIdentifier,
    type PublicActionLabels as PublicActionLabels,
    type PublicActionRevision as PublicActionRevision,
    type PublicConditionalSingleFieldDependency as PublicConditionalSingleFieldDependency,
    type PublicExecutionTranslationRule as PublicExecutionTranslationRule,
    type PublicFieldTypeDefinition as PublicFieldTypeDefinition,
    type PublicInputFieldDefinition as PublicInputFieldDefinition,
    type PublicObjectRequestOptions as PublicObjectRequestOptions,
    type PublicOption as PublicOption,
    type PublicSingleFieldDependency as PublicSingleFieldDependency,
    type StandaloneRequestContext as StandaloneRequestContext,
    type StringFieldSchema as StringFieldSchema,
    type TestRequestContext as TestRequestContext,
    type WorkflowsRequestContext as WorkflowsRequestContext,
    type PublicActionRevisionsPage as PublicActionRevisionsPage,
    type ActionCreateParams as ActionCreateParams,
    type ActionUpdateParams as ActionUpdateParams,
    type ActionListParams as ActionListParams,
    type ActionDeleteParams as ActionDeleteParams,
    type ActionCompleteParams as ActionCompleteParams,
    type ActionCompleteBatchParams as ActionCompleteBatchParams,
    type ActionCreateOrReplaceParams as ActionCreateOrReplaceParams,
    type ActionCreateOrReplaceByFunctionTypeParams as ActionCreateOrReplaceByFunctionTypeParams,
    type ActionCreateRequiresObjectParams as ActionCreateRequiresObjectParams,
    type ActionDeleteByFunctionTypeParams as ActionDeleteByFunctionTypeParams,
    type ActionGetParams as ActionGetParams,
    type ActionGetByFunctionTypeParams as ActionGetByFunctionTypeParams,
    type ActionGetRequiresObjectParams as ActionGetRequiresObjectParams,
  };
}
