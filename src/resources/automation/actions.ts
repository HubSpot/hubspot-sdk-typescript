// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CRMAPI from '../crm/crm';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Create a new custom action definition
   */
  create(
    appID: number,
    body: ActionCreateParams,
    options?: RequestOptions,
  ): APIPromise<AutomationActionsPublicActionDefinition> {
    return this._client.post(path`/automation/v4/actions/${appID}`, { body, ...options });
  }

  /**
   * Update an existing action definition
   */
  update(
    definitionID: string,
    params: ActionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AutomationActionsPublicActionDefinition> {
    const { appId, ...body } = params;
    return this._client.patch(path`/automation/v4/actions/${appId}/${definitionID}`, { body, ...options });
  }

  /**
   * Retrieve revisions for a given definition
   */
  list(
    definitionID: string,
    params: ActionListParams,
    options?: RequestOptions,
  ): APIPromise<AutomationActionsCollectionResponsePublicActionRevisionForwardPaging> {
    const { appId, ...query } = params;
    return this._client.get(path`/automation/v4/actions/${appId}/${definitionID}/revisions`, {
      query,
      ...options,
    });
  }

  /**
   * Archive a function for a definition
   */
  delete(functionID: string, params: ActionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId, definitionId, functionType } = params;
    return this._client.delete(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Delete a function for a definition
   */
  archiveByFunctionType(
    functionType:
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS'
      | 'POST_FETCH_OPTIONS'
      | 'POST_ACTION_EXECUTION',
    params: ActionArchiveByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, definitionId } = params;
    return this._client.delete(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Completes a callback
   */
  complete(callbackID: string, body: ActionCompleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/automation/v4/actions/callbacks/${callbackID}/complete`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Complete a batch of callbacks
   */
  completeBatch(body: ActionCompleteBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/automation/v4/actions/callbacks/complete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a function for a definition
   */
  createOrReplace(
    functionID: string,
    params: ActionCreateOrReplaceParams,
    options?: RequestOptions,
  ): APIPromise<AutomationActionsPublicActionFunctionIdentifier> {
    const { appId, definitionId, functionType, body } = params;
    return this._client.put(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      { body: body, ...options, headers: buildHeaders([{ 'Content-Type': 'text/plain' }, options?.headers]) },
    );
  }

  /**
   * Insert a function for a definition
   */
  createOrReplaceByFunctionType(
    functionType:
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS'
      | 'POST_FETCH_OPTIONS'
      | 'POST_ACTION_EXECUTION',
    params: ActionCreateOrReplaceByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<AutomationActionsPublicActionFunctionIdentifier> {
    const { appId, definitionId, body } = params;
    return this._client.put(path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Retrieve functions by a type for a given definition
   */
  getByFunctionType(
    functionType:
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS'
      | 'POST_FETCH_OPTIONS'
      | 'POST_ACTION_EXECUTION',
    params: ActionGetByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<AutomationActionsPublicActionFunction> {
    const { appId, definitionId } = params;
    return this._client.get(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}`,
      options,
    );
  }

  /**
   * Retrieve a function from a given definition
   */
  read(
    functionID: string,
    params: ActionReadParams,
    options?: RequestOptions,
  ): APIPromise<AutomationActionsPublicActionFunction> {
    const { appId, definitionId, functionType } = params;
    return this._client.get(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      options,
    );
  }
}

export interface AutomationActionsBatchInputCallbackCompletionBatchRequest {
  inputs: Array<AutomationActionsCallbackCompletionBatchRequest>;
}

export interface AutomationActionsCallbackCompletionBatchRequest {
  callbackId: string;

  outputFields: { [key: string]: string };
}

export interface AutomationActionsCallbackCompletionRequest {
  outputFields: { [key: string]: string };
}

export interface AutomationActionsCollectionResponsePublicActionDefinitionForwardPaging {
  results: Array<AutomationActionsPublicActionDefinition>;

  paging?: Shared.ForwardPaging;
}

export interface AutomationActionsCollectionResponsePublicActionFunctionIdentifierNoPaging {
  results: Array<AutomationActionsPublicActionFunctionIdentifier>;
}

export interface AutomationActionsCollectionResponsePublicActionRevisionForwardPaging {
  results: Array<AutomationActionsPublicActionRevision>;

  paging?: Shared.ForwardPaging;
}

export interface AutomationActionsFieldTypeDefinition {
  externalOptions: boolean;

  name: string;

  options: Array<CRMAPI.CRMOption>;

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

export interface AutomationActionsInputFieldDefinition {
  isRequired: boolean;

  typeDefinition: AutomationActionsFieldTypeDefinition;

  automationFieldType?: string;

  supportedValueTypes?: Array<
    | 'STATIC_VALUE'
    | 'OBJECT_PROPERTY'
    | 'FIELD_DATA'
    | 'FETCHED_OBJECT_PROPERTY'
    | 'ENROLLMENT_EVENT_PROPERTY'
  >;
}

export interface AutomationActionsOption {
  displayOrder: number;

  doubleData: number;

  hidden: boolean;

  label: string;

  readOnly: boolean;

  value: string;
}

export interface AutomationActionsOutputFieldDefinition {
  typeDefinition: AutomationActionsFieldTypeDefinition;
}

export interface AutomationActionsPublicActionDefinition {
  id: string;

  actionUrl: string;

  functions: Array<AutomationActionsPublicActionFunctionIdentifier>;

  inputFields: Array<AutomationActionsInputFieldDefinition>;

  labels: { [key: string]: AutomationActionsPublicActionLabels };

  objectTypes: Array<string>;

  published: boolean;

  revisionId: string;

  archivedAt?: number;

  executionRules?: Array<AutomationActionsPublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<
    AutomationActionsPublicSingleFieldDependency | AutomationActionsPublicConditionalSingleFieldDependency
  >;

  objectRequestOptions?: AutomationActionsPublicObjectRequestOptions;

  outputFields?: Array<AutomationActionsOutputFieldDefinition>;
}

export interface AutomationActionsPublicActionDefinitionEgg {
  actionUrl: string;

  functions: Array<AutomationActionsPublicActionFunction>;

  inputFields: Array<AutomationActionsInputFieldDefinition>;

  labels: { [key: string]: AutomationActionsPublicActionLabels };

  objectTypes: Array<string>;

  published: boolean;

  archivedAt?: number;

  executionRules?: Array<AutomationActionsPublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<
    AutomationActionsPublicSingleFieldDependency | AutomationActionsPublicConditionalSingleFieldDependency
  >;

  objectRequestOptions?: AutomationActionsPublicObjectRequestOptions;

  outputFields?: Array<AutomationActionsOutputFieldDefinition>;
}

export interface AutomationActionsPublicActionDefinitionPatch {
  actionUrl?: string;

  executionRules?: Array<AutomationActionsPublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<
    AutomationActionsPublicSingleFieldDependency | AutomationActionsPublicConditionalSingleFieldDependency
  >;

  inputFields?: Array<AutomationActionsInputFieldDefinition>;

  labels?: { [key: string]: AutomationActionsPublicActionLabels };

  objectRequestOptions?: AutomationActionsPublicObjectRequestOptions;

  objectTypes?: Array<string>;

  outputFields?: Array<AutomationActionsOutputFieldDefinition>;

  published?: boolean;
}

export interface AutomationActionsPublicActionFunction {
  functionSource: string;

  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';

  id?: string;
}

export interface AutomationActionsPublicActionFunctionIdentifier {
  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';

  id?: string;
}

export interface AutomationActionsPublicActionLabels {
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

export interface AutomationActionsPublicActionRevision {
  id: string;

  createdAt: string;

  definition: AutomationActionsPublicActionDefinition;

  revisionId: string;
}

export interface AutomationActionsPublicConditionalSingleFieldDependency {
  controllingFieldName: string;

  controllingFieldValue: string;

  dependencyType: 'CONDITIONAL_SINGLE_FIELD';

  dependentFieldNames: Array<string>;
}

export interface AutomationActionsPublicExecutionTranslationRule {
  conditions: { [key: string]: unknown };

  labelName: string;
}

export interface AutomationActionsPublicObjectRequestOptions {
  properties: Array<string>;
}

export interface AutomationActionsPublicSingleFieldDependency {
  controllingFieldName: string;

  dependencyType: 'SINGLE_FIELD';

  dependentFieldNames: Array<string>;
}

export interface ActionCreateParams {
  actionUrl: string;

  functions: Array<AutomationActionsPublicActionFunction>;

  inputFields: Array<AutomationActionsInputFieldDefinition>;

  labels: { [key: string]: AutomationActionsPublicActionLabels };

  objectTypes: Array<string>;

  published: boolean;

  archivedAt?: number;

  executionRules?: Array<AutomationActionsPublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<
    AutomationActionsPublicSingleFieldDependency | AutomationActionsPublicConditionalSingleFieldDependency
  >;

  objectRequestOptions?: AutomationActionsPublicObjectRequestOptions;

  outputFields?: Array<AutomationActionsOutputFieldDefinition>;
}

export interface ActionUpdateParams {
  /**
   * Path param:
   */
  appId: number;

  /**
   * Body param:
   */
  actionUrl?: string;

  /**
   * Body param:
   */
  executionRules?: Array<AutomationActionsPublicExecutionTranslationRule>;

  /**
   * Body param:
   */
  inputFieldDependencies?: Array<
    AutomationActionsPublicSingleFieldDependency | AutomationActionsPublicConditionalSingleFieldDependency
  >;

  /**
   * Body param:
   */
  inputFields?: Array<AutomationActionsInputFieldDefinition>;

  /**
   * Body param:
   */
  labels?: { [key: string]: AutomationActionsPublicActionLabels };

  /**
   * Body param:
   */
  objectRequestOptions?: AutomationActionsPublicObjectRequestOptions;

  /**
   * Body param:
   */
  objectTypes?: Array<string>;

  /**
   * Body param:
   */
  outputFields?: Array<AutomationActionsOutputFieldDefinition>;

  /**
   * Body param:
   */
  published?: boolean;
}

export interface ActionListParams {
  /**
   * Path param:
   */
  appId: number;

  /**
   * Query param:
   */
  after?: string;

  /**
   * Query param:
   */
  limit?: number;
}

export interface ActionDeleteParams {
  appId: number;

  definitionId: string;

  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
}

export interface ActionArchiveByFunctionTypeParams {
  appId: number;

  definitionId: string;
}

export interface ActionCompleteParams {
  outputFields: { [key: string]: string };
}

export interface ActionCompleteBatchParams {
  inputs: Array<AutomationActionsCallbackCompletionBatchRequest>;
}

export interface ActionCreateOrReplaceParams {
  /**
   * Path param:
   */
  appId: number;

  /**
   * Path param:
   */
  definitionId: string;

  /**
   * Path param:
   */
  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';

  /**
   * Body param:
   */
  body: string;
}

export interface ActionCreateOrReplaceByFunctionTypeParams {
  /**
   * Path param:
   */
  appId: number;

  /**
   * Path param:
   */
  definitionId: string;

  /**
   * Body param:
   */
  body: string;
}

export interface ActionGetByFunctionTypeParams {
  appId: number;

  definitionId: string;
}

export interface ActionReadParams {
  appId: number;

  definitionId: string;

  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
}

export declare namespace Actions {
  export {
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
