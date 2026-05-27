// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CallbacksAPI from './callbacks';
import { BaseCallbacks, CallbackCompleteBatchParams, CallbackCompleteParams, Callbacks } from './callbacks';
import * as DefinitionsAPI from './definitions';
import {
  BaseDefinitions,
  DefinitionCreateParams,
  DefinitionCreateRequiresObjectParams,
  DefinitionDeleteParams,
  DefinitionGetParams,
  DefinitionGetRequiresObjectParams,
  DefinitionListParams,
  DefinitionUpdateParams,
  Definitions,
} from './definitions';
import * as FunctionsAPI from './functions';
import {
  BaseFunctions,
  FunctionCreateOrReplaceByFunctionTypeParams,
  FunctionCreateOrReplaceParams,
  FunctionDeleteByFunctionTypeParams,
  FunctionDeleteParams,
  FunctionGetByFunctionTypeParams,
  FunctionGetParams,
  FunctionListParams,
  Functions,
} from './functions';
import * as RevisionsAPI from './revisions';
import { BaseRevisions, RevisionGetParams, RevisionListParams, Revisions } from './revisions';
import { Page } from '../../../core/pagination';

export class BaseActions extends APIResource {
  static override readonly _key: readonly ['automation', 'actions'] = Object.freeze([
    'automation',
    'actions',
  ] as const);
}
export class Actions extends BaseActions {
  callbacks: CallbacksAPI.Callbacks = new CallbacksAPI.Callbacks(this._client);
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  revisions: RevisionsAPI.Revisions = new RevisionsAPI.Revisions(this._client);
}

export type PublicActionDefinitionsPage = Page<PublicActionDefinition>;

export type PublicActionRevisionsPage = Page<PublicActionRevision>;

export interface ActionExecutionIndexIdentifier {
  /**
   * The index number representing the execution order of the action.
   */
  actionExecutionIndex: number;

  /**
   * The ID associated with the enrollment process.
   */
  enrollmentId: number;
}

export interface AgentRequestContext {
  /**
   * The unique identifier for the agent making the request.
   */
  agentId: number;

  chirpAiContextObject: ChirpAIContextObject;

  /**
   * Indicates the source of the request, with the default value being 'AGENTS'.
   */
  source: 'AGENTS';

  /**
   * The unique identifier for the trajectory associated with the agent request.
   */
  trajectoryId?: string;
}

export interface ArrayFieldSchema {
  items: unknown;

  /**
   * Specifies that the field is of type 'ARRAY'.
   */
  type: 'ARRAY';
}

export interface BatchInputCallbackCompletionBatchRequest {
  inputs: Array<CallbackCompletionBatchRequest>;
}

export interface BooleanFieldSchema {
  /**
   * Specifies the field type as BOOLEAN, indicating that the field can hold a true
   * or false value.
   */
  type: 'BOOLEAN';
}

export interface CallbackCompletionBatchRequest {
  /**
   * The unique identifier for the callback.
   */
  callbackId: string;

  /**
   * Holds the output fields for the callback completion.
   */
  outputFields: { [key: string]: string };

  /**
   * Contains the typed outputs for the callback completion.
   */
  typedOutputs: unknown;

  /**
   * Specifies the type of failure reason for the callback completion.
   */
  failureReasonType?: string;

  /**
   * Defines the context of the request, which can be one of several predefined
   * types.
   */
  requestContext?:
    | WorkflowsRequestContext
    | AgentRequestContext
    | CopilotRequestContext
    | StandaloneRequestContext
    | TestRequestContext;
}

export interface CallbackCompletionRequest {
  /**
   * Contains the output fields associated with the callback, with each field
   * represented as a key-value pair.
   */
  outputFields: { [key: string]: string };

  /**
   * Holds the typed outputs related to the callback, structured as an object.
   */
  typedOutputs: unknown;

  /**
   * Indicates the reason for the failure of a callback completion.
   */
  failureReasonType?: string;

  /**
   * Specifies the context in which the request is made, which can be one of several
   * predefined contexts.
   */
  requestContext?:
    | WorkflowsRequestContext
    | AgentRequestContext
    | CopilotRequestContext
    | StandaloneRequestContext
    | TestRequestContext;
}

export interface ChirpAIContextObject {
  /**
   * The group to which the application belongs.
   */
  applicationGroup: string;

  /**
   * The identifier for the application associated with the context.
   */
  applicationId: string;

  isPrivate: boolean;

  /**
   * Additional metadata related to the context, represented as key-value pairs.
   */
  metadata: { [key: string]: string };

  /**
   * Holds OpenTelemetry context information as key-value pairs.
   */
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

  conversationId?: string;

  /**
   * The identifier for the feature associated with the context.
   */
  featureId?: string;

  /**
   * The identifier for the inference associated with the context.
   */
  inferenceId?: string;

  /**
   * The identifier for the trajectory, formatted as a UUID.
   */
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

  /**
   * The reason why no contact ID is available.
   */
  noContactIdReason?: string;

  /**
   * The reason why no portal ID is available.
   */
  noPortalIdReason?: string;

  /**
   * The reason why no user ID is available.
   */
  noUserIdReason?: string;
}

export interface ContactID {
  /**
   * The ID of the portal associated with the contact.
   */
  portalId: number;

  /**
   * The email address of the contact.
   */
  email?: string;

  /**
   * The unique identifier for the contact.
   */
  vid?: number;
}

export interface CopilotRequestContext {
  /**
   * Indicates the source of the request, with the default value being 'COPILOT'.
   */
  source: 'COPILOT';

  /**
   * The unique identifier for the trajectory.
   */
  trajectoryId?: string;
}

export interface DoubleFieldSchema {
  /**
   * Indicates the field type as DOUBLE.
   */
  type: 'DOUBLE';

  /**
   * The maximum allowable value for the double field.
   */
  maximum?: number;

  /**
   * The minimum allowable value for the double field.
   */
  minimum?: number;
}

export interface FieldTypeDefinition {
  /**
   * Indicates whether the field's options are sourced externally.
   */
  externalOptions: boolean;

  /**
   * The unique identifier for the field.
   */
  name: string;

  options: Array<Shared.AutomationActionsOption>;

  /**
   * Defines the structure and constraints of the field.
   */
  schema:
    | IntegerFieldSchema
    | LongFieldSchema
    | DoubleFieldSchema
    | StringFieldSchema
    | BooleanFieldSchema
    | ArrayFieldSchema
    | ObjectFieldSchema;

  /**
   * Specifies the data type of the field, with accepted values like bool, date,
   * datetime, enumeration, json, number, object_coordinates, phone_number, string.
   */
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

  /**
   * Specifies whether the field uses the Chirp feature.
   */
  useChirp: boolean;

  /**
   * A detailed explanation of the field's purpose and usage.
   */
  description?: string;

  /**
   * Specifies the type of external reference for options.
   */
  externalOptionsReferenceType?: string;

  /**
   * Describes the field's type in the UI, with accepted values like booleancheckbox,
   * calculation_equation, checkbox, date, file, html, number, phonenumber, radio,
   * select, text, textarea, unknown.
   */
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

  /**
   * Additional information or guidance about the field.
   */
  helpText?: string;

  /**
   * The user-friendly label for the field.
   */
  label?: string;

  /**
   * A URL that provides options for the field.
   */
  optionsUrl?: string;

  /**
   * Indicates the type of object that the field references, with accepted values
   * like OWNER.
   */
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
  /**
   * The type of the field, which is set to INTEGER.
   */
  type: 'INTEGER';

  /**
   * The maximum value allowed for the integer field.
   */
  maximum?: number;

  /**
   * The minimum value allowed for the integer field.
   */
  minimum?: number;
}

export interface LongFieldSchema {
  /**
   * The type of the field, which is LONG by default.
   */
  type: 'LONG';

  /**
   * The maximum value allowed for the long field.
   */
  maximum?: number;

  /**
   * The minimum value allowed for the long field.
   */
  minimum?: number;
}

export interface ObjectFieldSchema {
  /**
   * Contains the properties of the object.
   */
  properties: unknown;

  /**
   * Specifies the type of the field, which is 'OBJECT' by default.
   */
  type: 'OBJECT';
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
  /**
   * The URL endpoint where the action is executed.
   */
  actionUrl: string;

  functions: Array<PublicActionFunction>;

  inputFields: Array<PublicInputFieldDefinition>;

  /**
   * Holds various labels associated with the action, including names and
   * descriptions.
   */
  labels: { [key: string]: PublicActionLabels };

  objectTypes: Array<string>;

  /**
   * Indicates whether the action is published and available for use.
   */
  published: boolean;

  /**
   * The timestamp indicating when the action was archived.
   */
  archivedAt?: number;

  executionRules?: Array<PublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<PublicSingleFieldDependency | PublicConditionalSingleFieldDependency>;

  objectRequestOptions?: PublicObjectRequestOptions;

  outputFields?: Array<OutputFieldDefinition>;
}

export interface PublicActionDefinitionPatch {
  /**
   * The URL endpoint where the action is executed.
   */
  actionUrl?: string;

  executionRules?: Array<PublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<PublicSingleFieldDependency | PublicConditionalSingleFieldDependency>;

  inputFields?: Array<PublicInputFieldDefinition>;

  /**
   * Contains labels for the action, including names and descriptions.
   */
  labels?: { [key: string]: PublicActionLabels };

  objectRequestOptions?: PublicObjectRequestOptions;

  objectTypes?: Array<string>;

  outputFields?: Array<OutputFieldDefinition>;

  /**
   * Indicates whether the action is published and available for use.
   */
  published?: boolean;
}

export interface PublicActionDefinitionRequiresObjectRequest {
  /**
   * Indicates whether a custom action definition requires an associated object.
   */
  requiresObject: boolean;
}

export interface PublicActionDefinitionRequiresObjectResponse {
  /**
   * Indicates whether a custom action definition requires an object.
   */
  requiresObject: boolean;
}

export interface PublicActionFunction {
  /**
   * The source code or script that defines the function's behavior.
   */
  functionSource: string;

  /**
   * The type of function, with accepted values: POST_ACTION_EXECUTION,
   * POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
   */
  functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS';

  /**
   * The unique identifier for the action function.
   */
  id?: string;
}

export interface PublicActionFunctionIdentifier {
  /**
   * The type of function, with accepted values: POST_ACTION_EXECUTION,
   * POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
   */
  functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS';

  /**
   * The unique identifier for the function.
   */
  id?: string;
}

export interface PublicActionLabels {
  /**
   * The name of the action.
   */
  actionName: string;

  /**
   * Content displayed on the action card.
   */
  actionCardContent?: string;

  /**
   * A description of what the action does.
   */
  actionDescription?: string;

  /**
   * The display name of the application associated with the action.
   */
  appDisplayName?: string;

  /**
   * Rules that govern the execution of the action.
   */
  executionRules?: { [key: string]: string };

  /**
   * Descriptions for each input field.
   */
  inputFieldDescriptions?: { [key: string]: string };

  /**
   * Labels for the input fields.
   */
  inputFieldLabels?: { [key: string]: string };

  /**
   * Labels for the options available in input fields.
   */
  inputFieldOptionLabels?: { [key: string]: { [key: string]: string } };

  /**
   * Labels for the output fields.
   */
  outputFieldLabels?: { [key: string]: string };
}

export interface PublicActionRevision {
  /**
   * The unique identifier for the action revision.
   */
  id: string;

  /**
   * The date and time when the action revision was created.
   */
  createdAt: string;

  definition: PublicActionDefinition;

  /**
   * The unique identifier for the specific revision of the action.
   */
  revisionId: string;
}

export interface PublicConditionalSingleFieldDependency {
  /**
   * The name of the field that determines the dependency.
   */
  controllingFieldName: string;

  /**
   * The value of the controlling field that triggers the dependency.
   */
  controllingFieldValue: string;

  /**
   * The type of dependency, with the default value being CONDITIONAL_SINGLE_FIELD.
   */
  dependencyType: 'CONDITIONAL_SINGLE_FIELD';

  dependentFieldNames: Array<string>;
}

export interface PublicExecutionTranslationRule {
  /**
   * Defines the conditions that must be met for the execution rule to apply.
   */
  conditions: { [key: string]: unknown };

  /**
   * Specifies the name of the label associated with the execution rule.
   */
  labelName: string;
}

export interface PublicFieldTypeDefinition {
  /**
   * The internal name used to identify the field.
   */
  name: string;

  options: Array<PublicOption>;

  /**
   * The data type of the field, with accepted values including bool, date, datetime,
   * enumeration, json, number, object_coordinates, phone_number, and string.
   */
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

  /**
   * A detailed explanation of the field's purpose.
   */
  description?: string;

  /**
   * The type of field, with accepted values including booleancheckbox,
   * calculation_equation, checkbox, date, file, html, number, phonenumber, radio,
   * select, text, and textarea.
   */
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

  /**
   * Additional information or guidance about the field.
   */
  helpText?: string;

  /**
   * A user-friendly name for the field.
   */
  label?: string;

  /**
   * A URL that provides options for the field.
   */
  optionsUrl?: string;

  /**
   * The type of object that the field references, with accepted values including
   * OWNER.
   */
  referencedObjectType?: 'OWNER';
}

export interface PublicInputFieldDefinition {
  /**
   * Indicates whether the input field is mandatory.
   */
  isRequired: boolean;

  typeDefinition: PublicFieldTypeDefinition;

  supportedValueTypes?: Array<'STATIC_VALUE' | 'OBJECT_PROPERTY'>;
}

export interface PublicObjectRequestOptions {
  properties: Array<string>;
}

export interface PublicOption {
  /**
   * A user-friendly label that identifies the option.
   */
  label: string;

  /**
   * The actual value of the option.
   */
  value: string;

  /**
   * A description of the option.
   */
  description?: string;

  /**
   * The position of the option relative to others in the list.
   */
  displayOrder?: number;
}

export interface PublicSingleFieldDependency {
  /**
   * The name of the field that controls the dependency.
   */
  controllingFieldName: string;

  /**
   * The type of dependency, with the default value being 'SINGLE_FIELD'.
   */
  dependencyType: 'SINGLE_FIELD';

  dependentFieldNames: Array<string>;
}

export interface StandaloneRequestContext {
  chirpAiContextObject: ChirpAIContextObject;

  /**
   * Indicates the source of the request, with the default value being 'STANDALONE'.
   */
  source: 'STANDALONE';

  /**
   * A unique identifier for tracking the trajectory of the request.
   */
  trajectoryId?: string;
}

export interface StringFieldSchema {
  /**
   * Indicates that the type is a string, with the default value being STRING.
   */
  type: 'STRING';

  /**
   * Specifies the format of the string, with accepted values: DATE, DATE_TIME,
   * OBJECT_COORDINATE, TIME, URI.
   */
  format?: 'DATE' | 'DATE_TIME' | 'OBJECT_COORDINATE' | 'TIME' | 'URI';
}

export interface TestRequestContext {
  /**
   * Indicates the source of the test request, with the only accepted value being
   * 'TEST'.
   */
  source: 'TEST';
}

export interface WorkflowsRequestContext {
  /**
   * Indicates the source of the request, with the default value being WORKFLOWS.
   */
  source: 'WORKFLOWS';

  /**
   * The ID of the workflow associated with the request context.
   */
  workflowId: number;

  actionExecutionIndexIdentifier?: ActionExecutionIndexIdentifier;

  /**
   * The ID of the action within the workflow context.
   */
  actionId?: number;
}

Actions.Callbacks = Callbacks;
Actions.BaseCallbacks = BaseCallbacks;
Actions.Definitions = Definitions;
Actions.BaseDefinitions = BaseDefinitions;
Actions.Functions = Functions;
Actions.BaseFunctions = BaseFunctions;
Actions.Revisions = Revisions;
Actions.BaseRevisions = BaseRevisions;

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
  };

  export {
    Callbacks as Callbacks,
    BaseCallbacks as BaseCallbacks,
    type CallbackCompleteParams as CallbackCompleteParams,
    type CallbackCompleteBatchParams as CallbackCompleteBatchParams,
  };

  export {
    Definitions as Definitions,
    BaseDefinitions as BaseDefinitions,
    type DefinitionCreateParams as DefinitionCreateParams,
    type DefinitionUpdateParams as DefinitionUpdateParams,
    type DefinitionListParams as DefinitionListParams,
    type DefinitionDeleteParams as DefinitionDeleteParams,
    type DefinitionCreateRequiresObjectParams as DefinitionCreateRequiresObjectParams,
    type DefinitionGetParams as DefinitionGetParams,
    type DefinitionGetRequiresObjectParams as DefinitionGetRequiresObjectParams,
  };

  export {
    Functions as Functions,
    BaseFunctions as BaseFunctions,
    type FunctionListParams as FunctionListParams,
    type FunctionDeleteParams as FunctionDeleteParams,
    type FunctionCreateOrReplaceParams as FunctionCreateOrReplaceParams,
    type FunctionCreateOrReplaceByFunctionTypeParams as FunctionCreateOrReplaceByFunctionTypeParams,
    type FunctionDeleteByFunctionTypeParams as FunctionDeleteByFunctionTypeParams,
    type FunctionGetParams as FunctionGetParams,
    type FunctionGetByFunctionTypeParams as FunctionGetByFunctionTypeParams,
  };

  export {
    Revisions as Revisions,
    BaseRevisions as BaseRevisions,
    type RevisionListParams as RevisionListParams,
    type RevisionGetParams as RevisionGetParams,
  };
}
