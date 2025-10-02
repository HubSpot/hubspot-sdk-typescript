// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FunctionsAPI from './functions';
import {
  ActionFunctionIdentifier,
  AutomationActionFunction,
  FunctionDeleteParams,
  FunctionListParams,
  FunctionListResponse,
  FunctionRetrieveParams,
  FunctionUpdateParams,
  Functions,
} from './functions';
import * as RevisionsAPI from './revisions';
import {
  ActionRevision,
  RevisionListParams,
  RevisionListResponse,
  RevisionRetrieveParams,
  Revisions,
} from './revisions';
import * as PropertiesAPI from '../../../crm/v3/properties/properties';
import * as CallbacksAPI from './callbacks/callbacks';
import { Callbacks } from './callbacks/callbacks';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Actions extends APIResource {
  callbacks: CallbacksAPI.Callbacks = new CallbacksAPI.Callbacks(this._client);
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  revisions: RevisionsAPI.Revisions = new RevisionsAPI.Revisions(this._client);

  /**
   * Retrieve a custom action definition
   */
  retrieve(
    definitionID: string,
    params: ActionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AutomationActionDefinition> {
    const { appId, ...query } = params;
    return this._client.get(path`/automation/v4/actions/${appId}/${definitionID}`, { query, ...options });
  }

  /**
   * Update an existing action definition
   */
  update(
    definitionID: string,
    params: ActionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AutomationActionDefinition> {
    const { appId, ...body } = params;
    return this._client.patch(path`/automation/v4/actions/${appId}/${definitionID}`, { body, ...options });
  }

  /**
   * Delete an action definition
   */
  delete(definitionID: string, params: ActionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/automation/v4/actions/${appId}/${definitionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AutomationActionDefinition {
  id: string;

  actionUrl: string;

  functions: Array<FunctionsAPI.ActionFunctionIdentifier>;

  inputFields: Array<InputFieldDefinition>;

  labels: { [key: string]: AutomationActionDefinition.Labels };

  objectTypes: Array<string>;

  published: boolean;

  revisionId: string;

  archivedAt?: number;

  executionRules?: Array<ExecutionTranslationRule>;

  inputFieldDependencies?: Array<SingleFieldDependency | ConditionalSingleFieldDependency>;

  objectRequestOptions?: ObjectRequestOptions;

  outputFields?: Array<OutputFieldDefinition>;
}

export namespace AutomationActionDefinition {
  export interface Labels {
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
}

export interface ConditionalSingleFieldDependency {
  controllingFieldName: string;

  controllingFieldValue: string;

  dependencyType: 'CONDITIONAL_SINGLE_FIELD';

  dependentFieldNames: Array<string>;
}

export interface ExecutionTranslationRule {
  conditions: { [key: string]: unknown };

  labelName: string;
}

export interface FieldTypeDefinition {
  externalOptions: boolean;

  name: string;

  options: Array<PropertiesAPI.CRMOption>;

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

export interface ObjectRequestOptions {
  properties: Array<string>;
}

export interface OutputFieldDefinition {
  typeDefinition: FieldTypeDefinition;
}

export interface SingleFieldDependency {
  controllingFieldName: string;

  dependencyType: 'SINGLE_FIELD';

  dependentFieldNames: Array<string>;
}

export interface ActionRetrieveParams {
  /**
   * Path param:
   */
  appId: number;

  /**
   * Query param:
   */
  archived?: boolean;
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
  executionRules?: Array<ExecutionTranslationRule>;

  /**
   * Body param:
   */
  inputFieldDependencies?: Array<SingleFieldDependency | ConditionalSingleFieldDependency>;

  /**
   * Body param:
   */
  inputFields?: Array<InputFieldDefinition>;

  /**
   * Body param:
   */
  labels?: { [key: string]: ActionUpdateParams.Labels };

  /**
   * Body param:
   */
  objectRequestOptions?: ObjectRequestOptions;

  /**
   * Body param:
   */
  objectTypes?: Array<string>;

  /**
   * Body param:
   */
  outputFields?: Array<OutputFieldDefinition>;

  /**
   * Body param:
   */
  published?: boolean;
}

export namespace ActionUpdateParams {
  export interface Labels {
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
}

export interface ActionDeleteParams {
  appId: number;
}

Actions.Callbacks = Callbacks;
Actions.Functions = Functions;
Actions.Revisions = Revisions;

export declare namespace Actions {
  export {
    type AutomationActionDefinition as AutomationActionDefinition,
    type ConditionalSingleFieldDependency as ConditionalSingleFieldDependency,
    type ExecutionTranslationRule as ExecutionTranslationRule,
    type FieldTypeDefinition as FieldTypeDefinition,
    type InputFieldDefinition as InputFieldDefinition,
    type ObjectRequestOptions as ObjectRequestOptions,
    type OutputFieldDefinition as OutputFieldDefinition,
    type SingleFieldDependency as SingleFieldDependency,
    type ActionRetrieveParams as ActionRetrieveParams,
    type ActionUpdateParams as ActionUpdateParams,
    type ActionDeleteParams as ActionDeleteParams,
  };

  export { Callbacks as Callbacks };

  export {
    Functions as Functions,
    type ActionFunctionIdentifier as ActionFunctionIdentifier,
    type AutomationActionFunction as AutomationActionFunction,
    type FunctionListResponse as FunctionListResponse,
    type FunctionRetrieveParams as FunctionRetrieveParams,
    type FunctionUpdateParams as FunctionUpdateParams,
    type FunctionListParams as FunctionListParams,
    type FunctionDeleteParams as FunctionDeleteParams,
  };

  export {
    Revisions as Revisions,
    type ActionRevision as ActionRevision,
    type RevisionListResponse as RevisionListResponse,
    type RevisionRetrieveParams as RevisionRetrieveParams,
    type RevisionListParams as RevisionListParams,
  };
}
