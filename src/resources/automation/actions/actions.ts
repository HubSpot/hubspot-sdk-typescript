// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CallbacksAPI from './callbacks';
import { CallbackCompleteBatchParams, CallbackCompleteParams, Callbacks } from './callbacks';
import * as DefinitionsAPI from './definitions';
import {
  DefinitionCreateParams,
  DefinitionDeleteParams,
  DefinitionListParams,
  DefinitionReadParams,
  DefinitionUpdateParams,
  Definitions,
} from './definitions';
import * as FunctionsAPI from './functions';
import {
  FunctionArchiveByFunctionTypeParams,
  FunctionCreateOrReplaceByFunctionTypeParams,
  FunctionCreateOrReplaceParams,
  FunctionDeleteParams,
  FunctionGetByFunctionTypeParams,
  FunctionListParams,
  FunctionReadParams,
  Functions,
} from './functions';
import * as RevisionsAPI from './revisions';
import { RevisionListParams, RevisionReadParams, Revisions } from './revisions';
import { Page } from '../../../core/pagination';

export class Actions extends APIResource {
  callbacks: CallbacksAPI.Callbacks = new CallbacksAPI.Callbacks(this._client);
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  revisions: RevisionsAPI.Revisions = new RevisionsAPI.Revisions(this._client);
}

export type PublicActionDefinitionsPage = Page<PublicActionDefinition>;

export type PublicActionRevisionsPage = Page<PublicActionRevision>;

export interface BatchInputCallbackCompletionBatchRequest {
  inputs: Array<CallbackCompletionBatchRequest>;
}

export interface CallbackCompletionBatchRequest {
  callbackId: string;

  outputFields: { [key: string]: string };
}

export interface CallbackCompletionRequest {
  outputFields: { [key: string]: string };
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

export interface FieldTypeDefinition {
  externalOptions: boolean;

  name: string;

  options: Array<Shared.Option>;

  type:
    | 'string'
    | 'number'
    | 'bool'
    | 'datetime'
    | 'enumeration'
    | 'date'
    | 'phone_number'
    | 'currency_number'
    | 'json'
    | 'object_coordinates';

  description?: string;

  externalOptionsReferenceType?: string;

  fieldType?:
    | 'booleancheckbox'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea'
    | 'calculation_equation'
    | 'calculation_rollup'
    | 'calculation_score'
    | 'calculation_read_time'
    | 'unknown'
    | 'html';

  helpText?: string;

  label?: string;

  optionsUrl?: string;

  referencedObjectType?:
    | 'CONTACT'
    | 'COMPANY'
    | 'DEAL'
    | 'ENGAGEMENT'
    | 'TICKET'
    | 'OWNER'
    | 'PRODUCT'
    | 'LINE_ITEM'
    | 'BET_DELIVERABLE_SERVICE'
    | 'CONTENT'
    | 'CONVERSATION'
    | 'BET_ALERT'
    | 'PORTAL'
    | 'QUOTE'
    | 'FORM_SUBMISSION_INBOUNDDB'
    | 'QUOTA'
    | 'UNSUBSCRIBE'
    | 'COMMUNICATION'
    | 'FEEDBACK_SUBMISSION'
    | 'ATTRIBUTION'
    | 'SALESFORCE_SYNC_ERROR'
    | 'RESTORABLE_CRM_OBJECT'
    | 'HUB'
    | 'LANDING_PAGE'
    | 'PRODUCT_OR_FOLDER'
    | 'TASK'
    | 'FORM'
    | 'MARKETING_EMAIL'
    | 'AD_ACCOUNT'
    | 'AD_CAMPAIGN'
    | 'AD_GROUP'
    | 'AD'
    | 'KEYWORD'
    | 'CAMPAIGN'
    | 'SOCIAL_CHANNEL'
    | 'SOCIAL_POST'
    | 'SITE_PAGE'
    | 'BLOG_POST'
    | 'IMPORT'
    | 'EXPORT'
    | 'CTA'
    | 'TASK_TEMPLATE'
    | 'AUTOMATION_PLATFORM_FLOW'
    | 'OBJECT_LIST'
    | 'NOTE'
    | 'MEETING_EVENT'
    | 'CALL'
    | 'EMAIL'
    | 'PUBLISHING_TASK'
    | 'CONVERSATION_SESSION'
    | 'CONTACT_CREATE_ATTRIBUTION'
    | 'INVOICE'
    | 'MARKETING_EVENT'
    | 'CONVERSATION_INBOX'
    | 'CHATFLOW'
    | 'MEDIA_BRIDGE'
    | 'SEQUENCE'
    | 'SEQUENCE_STEP'
    | 'FORECAST'
    | 'SNIPPET'
    | 'TEMPLATE'
    | 'DEAL_CREATE_ATTRIBUTION'
    | 'QUOTE_TEMPLATE'
    | 'QUOTE_MODULE'
    | 'QUOTE_MODULE_FIELD'
    | 'QUOTE_FIELD'
    | 'SEQUENCE_ENROLLMENT'
    | 'SUBSCRIPTION'
    | 'ACCEPTANCE_TEST'
    | 'SOCIAL_BROADCAST'
    | 'DEAL_SPLIT'
    | 'DEAL_REGISTRATION'
    | 'GOAL_TARGET'
    | 'GOAL_TARGET_GROUP'
    | 'PORTAL_OBJECT_SYNC_MESSAGE'
    | 'FILE_MANAGER_FILE'
    | 'FILE_MANAGER_FOLDER'
    | 'SEQUENCE_STEP_ENROLLMENT'
    | 'APPROVAL'
    | 'APPROVAL_STEP'
    | 'CTA_VARIANT'
    | 'SALES_DOCUMENT'
    | 'DISCOUNT'
    | 'FEE'
    | 'TAX'
    | 'MARKETING_CALENDAR'
    | 'PERMISSIONS_TESTING'
    | 'PRIVACY_SCANNER_COOKIE'
    | 'DATA_SYNC_STATE'
    | 'WEB_INTERACTIVE'
    | 'PLAYBOOK'
    | 'FOLDER'
    | 'PLAYBOOK_QUESTION'
    | 'PLAYBOOK_SUBMISSION'
    | 'PLAYBOOK_SUBMISSION_ANSWER'
    | 'COMMERCE_PAYMENT'
    | 'GSC_PROPERTY'
    | 'SOX_PROTECTED_DUMMY_TYPE'
    | 'BLOG_LISTING_PAGE'
    | 'QUARANTINED_SUBMISSION'
    | 'PAYMENT_SCHEDULE'
    | 'PAYMENT_SCHEDULE_INSTALLMENT'
    | 'MARKETING_CAMPAIGN_UTM'
    | 'DISCOUNT_TEMPLATE'
    | 'DISCOUNT_CODE'
    | 'FEEDBACK_SURVEY'
    | 'CMS_URL'
    | 'SALES_TASK'
    | 'SALES_WORKLOAD'
    | 'USER'
    | 'POSTAL_MAIL'
    | 'SCHEMAS_BACKEND_TEST'
    | 'PAYMENT_LINK'
    | 'SUBMISSION_TAG'
    | 'CAMPAIGN_STEP'
    | 'SCHEDULING_PAGE'
    | 'SOX_PROTECTED_TEST_TYPE'
    | 'ORDER'
    | 'MARKETING_SMS'
    | 'PARTNER_ACCOUNT'
    | 'CAMPAIGN_TEMPLATE'
    | 'CAMPAIGN_TEMPLATE_STEP'
    | 'PLAYLIST'
    | 'CLIP'
    | 'CAMPAIGN_BUDGET_ITEM'
    | 'CAMPAIGN_SPEND_ITEM'
    | 'MIC'
    | 'CONTENT_AUDIT'
    | 'CONTENT_AUDIT_PAGE'
    | 'PLAYLIST_FOLDER'
    | 'LEAD'
    | 'ABANDONED_CART'
    | 'EXTERNAL_WEB_URL'
    | 'VIEW'
    | 'VIEW_BLOCK'
    | 'ROSTER'
    | 'CART'
    | 'AUTOMATION_PLATFORM_FLOW_ACTION'
    | 'SOCIAL_PROFILE'
    | 'PARTNER_CLIENT'
    | 'ROSTER_MEMBER'
    | 'MARKETING_EVENT_ATTENDANCE'
    | 'ALL_PAGES'
    | 'AI_FORECAST'
    | 'CRM_PIPELINES_DUMMY_TYPE'
    | 'KNOWLEDGE_ARTICLE'
    | 'PROPERTY_INFO'
    | 'DATA_PRIVACY_CONSENT'
    | 'GOAL_TEMPLATE'
    | 'SCORE_CONFIGURATION'
    | 'AUDIENCE'
    | 'PARTNER_CLIENT_REVENUE'
    | 'AUTOMATION_JOURNEY'
    | 'UNKNOWN';
}

export interface InputFieldDefinition {
  isRequired: boolean;

  typeDefinition: FieldTypeDefinition;

  automationFieldType?: string;

  supportedValueTypes?: Array<
    | 'STATIC_VALUE'
    | 'OBJECT_PROPERTY'
    | 'FIELD_DATA'
    | 'FETCHED_OBJECT_PROPERTY'
    | 'ENROLLMENT_EVENT_PROPERTY'
  >;
}

export interface OutputFieldDefinition {
  typeDefinition: FieldTypeDefinition;
}

export interface PublicActionDefinition {
  id: string;

  actionUrl: string;

  functions: Array<PublicActionFunctionIdentifier>;

  inputFields: Array<InputFieldDefinition>;

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

  inputFields: Array<InputFieldDefinition>;

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

  inputFields?: Array<InputFieldDefinition>;

  labels?: { [key: string]: PublicActionLabels };

  objectRequestOptions?: PublicObjectRequestOptions;

  objectTypes?: Array<string>;

  outputFields?: Array<OutputFieldDefinition>;

  published?: boolean;
}

export interface PublicActionFunction {
  functionSource: string;

  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';

  id?: string;
}

export interface PublicActionFunctionIdentifier {
  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';

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

export interface PublicObjectRequestOptions {
  properties: Array<string>;
}

export interface PublicSingleFieldDependency {
  controllingFieldName: string;

  dependencyType: 'SINGLE_FIELD';

  dependentFieldNames: Array<string>;
}

Actions.Callbacks = Callbacks;
Actions.Definitions = Definitions;
Actions.Functions = Functions;
Actions.Revisions = Revisions;

export declare namespace Actions {
  export {
    type BatchInputCallbackCompletionBatchRequest as BatchInputCallbackCompletionBatchRequest,
    type CallbackCompletionBatchRequest as CallbackCompletionBatchRequest,
    type CallbackCompletionRequest as CallbackCompletionRequest,
    type CollectionResponsePublicActionDefinitionForwardPaging as CollectionResponsePublicActionDefinitionForwardPaging,
    type CollectionResponsePublicActionFunctionIdentifierNoPaging as CollectionResponsePublicActionFunctionIdentifierNoPaging,
    type CollectionResponsePublicActionRevisionForwardPaging as CollectionResponsePublicActionRevisionForwardPaging,
    type FieldTypeDefinition as FieldTypeDefinition,
    type InputFieldDefinition as InputFieldDefinition,
    type OutputFieldDefinition as OutputFieldDefinition,
    type PublicActionDefinition as PublicActionDefinition,
    type PublicActionDefinitionEgg as PublicActionDefinitionEgg,
    type PublicActionDefinitionPatch as PublicActionDefinitionPatch,
    type PublicActionFunction as PublicActionFunction,
    type PublicActionFunctionIdentifier as PublicActionFunctionIdentifier,
    type PublicActionLabels as PublicActionLabels,
    type PublicActionRevision as PublicActionRevision,
    type PublicConditionalSingleFieldDependency as PublicConditionalSingleFieldDependency,
    type PublicExecutionTranslationRule as PublicExecutionTranslationRule,
    type PublicObjectRequestOptions as PublicObjectRequestOptions,
    type PublicSingleFieldDependency as PublicSingleFieldDependency,
  };

  export {
    Callbacks as Callbacks,
    type CallbackCompleteParams as CallbackCompleteParams,
    type CallbackCompleteBatchParams as CallbackCompleteBatchParams,
  };

  export {
    Definitions as Definitions,
    type DefinitionCreateParams as DefinitionCreateParams,
    type DefinitionUpdateParams as DefinitionUpdateParams,
    type DefinitionListParams as DefinitionListParams,
    type DefinitionDeleteParams as DefinitionDeleteParams,
    type DefinitionReadParams as DefinitionReadParams,
  };

  export {
    Functions as Functions,
    type FunctionListParams as FunctionListParams,
    type FunctionDeleteParams as FunctionDeleteParams,
    type FunctionArchiveByFunctionTypeParams as FunctionArchiveByFunctionTypeParams,
    type FunctionCreateOrReplaceParams as FunctionCreateOrReplaceParams,
    type FunctionCreateOrReplaceByFunctionTypeParams as FunctionCreateOrReplaceByFunctionTypeParams,
    type FunctionGetByFunctionTypeParams as FunctionGetByFunctionTypeParams,
    type FunctionReadParams as FunctionReadParams,
  };

  export {
    Revisions as Revisions,
    type RevisionListParams as RevisionListParams,
    type RevisionReadParams as RevisionReadParams,
  };
}
