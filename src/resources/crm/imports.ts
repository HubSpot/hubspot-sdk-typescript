// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EventsAPI from '../marketing/events/events';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Imports extends APIResource {
  /**
   * Begins importing data from the specified file resources. This uploads the
   * corresponding file and uses the import request object to convert rows in the
   * files to objects.
   *
   * @example
   * ```ts
   * const publicImportResponse =
   *   await client.crm.imports.create();
   * ```
   */
  create(
    body: ImportCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicImportResponse> {
    return this._client.post(
      '/crm/v3/imports/',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Returns a paged list of active imports for this account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicImportResponse of client.crm.imports.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ImportListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicImportResponsesPage, PublicImportResponse> {
    return this._client.getAPIList('/crm/v3/imports/', Page<PublicImportResponse>, { query, ...options });
  }

  /**
   * This allows a developer to cancel an active import.
   *
   * @example
   * ```ts
   * const actionResponse = await client.crm.imports.cancel(0);
   * ```
   */
  cancel(importID: number, options?: RequestOptions): APIPromise<Shared.ActionResponse> {
    return this._client.post(path`/crm/v3/imports/${importID}/cancel`, options);
  }

  /**
   * A complete summary of an import record, including any updates.
   *
   * @example
   * ```ts
   * const publicImportResponse = await client.crm.imports.get(
   *   0,
   * );
   * ```
   */
  get(importID: number, options?: RequestOptions): APIPromise<PublicImportResponse> {
    return this._client.get(path`/crm/v3/imports/${importID}`, options);
  }

  /**
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicImportError of client.crm.imports.listErrors(
   *   0,
   * )) {
   *   // ...
   * }
   * ```
   */
  listErrors(
    importID: number,
    query: ImportListErrorsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicImportErrorsPage, PublicImportError> {
    return this._client.getAPIList(path`/crm/v3/imports/${importID}/errors`, Page<PublicImportError>, {
      query,
      ...options,
    });
  }
}

export type PublicImportResponsesPage = Page<PublicImportResponse>;

export type PublicImportErrorsPage = Page<PublicImportError>;

export interface CollectionResponsePublicImportErrorForwardPaging {
  results: Array<PublicImportError>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponsePublicImportResponse {
  results: Array<PublicImportResponse>;

  paging?: Shared.Paging;
}

export interface ImportRowCore {
  containsEncryptedProperties: boolean;

  fileId: number;

  lineNumber: number;

  rowData: Array<string>;

  pageName?: string;
}

export interface ImportTemplate {
  templateId: number;

  templateType: 'admin_defined' | 'previous_import' | 'user_file';
}

/**
 * Represents a single custom property of a marketing event, storing its name,
 * value, metadata (like source, timestamp, and sensitivity), and related audit
 * information for tracking changes.
 */
export interface PropertyValue {
  /**
   * The sensitivity level of the property, such as "non_sensitive", "sensitive", and
   * "highly_sensitive".
   */
  dataSensitivity: 'high' | 'none' | 'standard';

  /**
   * Whether the property value is encrypted.
   */
  isEncrypted: boolean;

  isLargeValue: boolean;

  /**
   * The unique property name.
   */
  name: string;

  persistenceTimestamp: number;

  /**
   * A unique ID associated with this request.
   */
  requestId: string;

  /**
   * Whether the value was selected by a user.
   */
  selectedByUser: boolean;

  /**
   * The timestamp when the value was selected by a user, if applicable.
   */
  selectedByUserTimestamp: number;

  /**
   * The origin of the property value, such as "IMPORT" or "API".
   */
  source:
    | 'ACADEMY'
    | 'ACCEPTANCE_TEST'
    | 'ADS'
    | 'AI_GROUP'
    | 'ANALYTICS'
    | 'API'
    | 'APPROVALS'
    | 'ASSISTS'
    | 'ASSOCIATIONS'
    | 'AUTOMATION_JOURNEY'
    | 'AUTOMATION_PLATFORM'
    | 'AVATARS_SERVICE'
    | 'BATCH_UPDATE'
    | 'BCC_TO_CRM'
    | 'BEHAVIORAL_EVENTS'
    | 'BET_ASSIGNMENT'
    | 'BET_CRM_CONNECTOR'
    | 'BIDEN'
    | 'BILLING'
    | 'BOT'
    | 'CALCULATED'
    | 'CHATSPOT'
    | 'COMMUNICATOR'
    | 'COMPANIES'
    | 'COMPANY_FAMILIES'
    | 'COMPANY_INSIGHTS'
    | 'CONTACTS'
    | 'CONTACTS_WEB'
    | 'CONTENT_MEMBERSHIP'
    | 'CONVERSATIONS'
    | 'CRM_UI'
    | 'CRM_UI_BULK_ACTION'
    | 'DATA_ENRICHMENT'
    | 'DEALS'
    | 'DEFAULT'
    | 'EMAIL'
    | 'EMAIL_INTEGRATION'
    | 'ENGAGEMENTS'
    | 'EXTENSION'
    | 'FILE_MANAGER'
    | 'FLYWHEEL_PRODUCT_DATA_SYNC'
    | 'FORECASTING'
    | 'FORM'
    | 'FORWARD_TO_CRM'
    | 'GMAIL_INTEGRATION'
    | 'GOALS'
    | 'HEISENBERG'
    | 'HELP_DESK'
    | 'IMPORT'
    | 'INTEGRATION'
    | 'INTEGRATIONS_PLATFORM'
    | 'INTEGRATIONS_SYNC'
    | 'INTENT'
    | 'INTERNAL_PROCESSING'
    | 'LEADIN'
    | 'MARKETPLACE'
    | 'MEETINGS'
    | 'MERGE_COMPANIES'
    | 'MERGE_CONTACTS'
    | 'MERGE_OBJECTS'
    | 'MICROAPPS'
    | 'MIGRATION'
    | 'MOBILE_ANDROID'
    | 'MOBILE_IOS'
    | 'PAYMENTS'
    | 'PIPELINE_SETTINGS'
    | 'PLAYBOOKS'
    | 'PORTAL_OBJECT_SYNC'
    | 'PORTAL_USER_ASSOCIATOR'
    | 'PRESENTATIONS'
    | 'PROPERTY_SETTINGS'
    | 'PROSPECTING_AGENT'
    | 'QUOTAS'
    | 'QUOTES'
    | 'RECYCLING_BIN'
    | 'SALES'
    | 'SALES_MESSAGES'
    | 'SALESFORCE'
    | 'SEQUENCES'
    | 'SETTINGS'
    | 'SIDEKICK'
    | 'SIGNALS'
    | 'SLACK_INTEGRATION'
    | 'SOCIAL'
    | 'SUCCESS'
    | 'TALLY'
    | 'TASK'
    | 'UNKNOWN'
    | 'WAL_INCREMENTAL'
    | 'WORKFLOW_CONTACT_DELETE_ACTION'
    | 'WORKFLOWS';

  /**
   * The ID of the property source indicating where it was created.
   */
  sourceId: string;

  /**
   * A human-readable label.
   */
  sourceLabel: string;

  /**
   * Metadata providing additional context about the source.
   */
  sourceMetadata: string;

  /**
   * The unique identifier associated with the source.
   */
  sourceVid: Array<number>;

  /**
   * When the value was set, as a 64-bit integer.
   */
  timestamp: number;

  /**
   * The unit of measurement or context for the value.
   */
  unit: string;

  /**
   * The ID of the user who updated the property.
   */
  updatedByUserId: number;

  useTimestampAsPersistenceTimestamp: boolean;

  /**
   * The property value.
   */
  value: string;
}

export interface PublicImportError {
  id: string;

  createdAt: number;

  errorType:
    | 'AMBIGUOUS_ENUMERATION_OPTION'
    | 'ASSOCIATION_LABEL_NOT_FOUND'
    | 'ASSOCIATION_LIMIT_EXCEEDED'
    | 'ASSOCIATION_RECORD_NOT_FOUND'
    | 'COLUMN_TOO_LARGE'
    | 'COULD_NOT_FIND_BUSINESS_UNIT'
    | 'COULD_NOT_FIND_OWNER'
    | 'COULD_NOT_PARSE_DATE'
    | 'COULD_NOT_PARSE_NUMBER'
    | 'COULD_NOT_PARSE_ROW'
    | 'COULD_NOT_PARSE_TERM'
    | 'CREATE_ONLY_IMPORT'
    | 'DUPLICATE_ALTERNATE_ID'
    | 'DUPLICATE_ASSOCIATION_ID'
    | 'DUPLICATE_EVENT'
    | 'DUPLICATE_OBJECT_ID'
    | 'DUPLICATE_RECORD_ID'
    | 'DUPLICATE_ROW_CONTENT'
    | 'DUPLICATE_UNIQUE_PROPERTY_VALUE'
    | 'FAILED_TO_CREATE_ASSOCIATION'
    | 'FAILED_TO_OPT_OUT_CONTACT'
    | 'FAILED_TO_PROCESS_OBJECT_WITH_EMPTY_PROPERTY_VALUES'
    | 'FAILED_VALIDATION'
    | 'FILE_NOT_FOUND'
    | 'GDPR_BLACKLISTED_EMAIL'
    | 'INCORRECT_NUMBER_OF_COLUMNS'
    | 'INVALID_ALTERNATE_ID'
    | 'INVALID_ASSOCIATION_IDENTIFIER'
    | 'INVALID_ASSOCIATION_KEY'
    | 'INVALID_COLUMN_CONFIGURATION'
    | 'INVALID_CUSTOM_PROPERTY_VALIDATION'
    | 'INVALID_DOMAIN'
    | 'INVALID_EMAIL'
    | 'INVALID_ENUMERATION_OPTION'
    | 'INVALID_EVENT'
    | 'INVALID_EVENT_TIMESTAMP'
    | 'INVALID_FILE_TYPE'
    | 'INVALID_NUMBER_SIZE'
    | 'INVALID_OBJECT_ID'
    | 'INVALID_RECORD_ID'
    | 'INVALID_REQUIRED_PROPERTY'
    | 'INVALID_SHEET_COUNT'
    | 'INVALID_SPREADSHEET'
    | 'LIMIT_EXCEEDED'
    | 'MANY_ERRORS_IN_ROW'
    | 'MISSING_EVENT_DEFINITION'
    | 'MISSING_EVENT_TIMESTAMP'
    | 'MISSING_OBJECT_DEFINITION'
    | 'MISSING_REQUIRED_PROPERTY'
    | 'MULTIPLE_COMPANIES_WITH_THIS_DOMAIN'
    | 'MULTIPLE_OWNERS_FOUND'
    | 'NO_OBJECT_ID_FROM_ASSOCIATION_IDENTIFIER'
    | 'OUTSIDE_VALID_TERM_RANGE'
    | 'OUTSIDE_VALID_TIME_RANGE'
    | 'PORTAL_WIDE_CUSTOM_OBJECT_LIMIT_EXCEEDED'
    | 'PROPERTY_DEFINITION_NOT_FOUND'
    | 'PROPERTY_VALUE_NOT_FOUND'
    | 'ROW_DATA_TOO_LARGE'
    | 'SECONDARY_EMAIL_WRITE_FAILURE'
    | 'UNKNOWN_ASSOCIATION_RECORD_ID'
    | 'UNKNOWN_BAD_REQUEST'
    | 'UNKNOWN_ERROR'
    | 'UPDATE_ONLY_IMPORT';

  sourceData: ImportRowCore;

  errorMessage?: string;

  extraContext?: string;

  /**
   * Represents a single custom property of a marketing event, storing its name,
   * value, metadata (like source, timestamp, and sensitivity), and related audit
   * information for tracking changes.
   */
  invalidPropertyValue?: EventsAPI.PropertyValue;

  invalidValue?: string;

  invalidValueToDisplay?: string;

  knownColumnNumber?: number;

  objectType?:
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

  objectTypeId?: string;
}

export interface PublicImportMetadata {
  /**
   * Summarized outcomes of each row a developer attempted to import into HubSpot.
   */
  counters: { [key: string]: number };

  /**
   * The IDs of files uploaded in the File Manager API.
   */
  fileIds: Array<string>;

  /**
   * The lists containing the imported objects.
   */
  objectLists: Array<PublicObjectListRecord>;
}

export interface PublicImportResponse {
  id: string;

  createdAt: string;

  mappedObjectTypeIds: Array<string>;

  metadata: PublicImportMetadata;

  /**
   * Whether or not the import is a list of people disqualified from receiving
   * emails.
   */
  optOutImport: boolean;

  /**
   * The status of the import.
   */
  state: 'CANCELED' | 'DEFERRED' | 'DONE' | 'FAILED' | 'PROCESSING' | 'REVERTED' | 'STARTED';

  updatedAt: string;

  importName?: string;

  importRequestJson?: unknown;

  importSource?: 'API' | 'CRM_UI' | 'IMPORT' | 'MOBILE_ANDROID' | 'MOBILE_IOS' | 'SALESFORCE';

  importTemplate?: ImportTemplate;
}

export interface PublicObjectListRecord {
  /**
   * The ID of the list containing the imported objects.
   */
  listId: string;

  /**
   * The type of object contained in the list.
   */
  objectType: string;
}

export interface ImportCreateParams {
  files?: Uploadable;

  importRequest?: string;
}

export interface ImportListParams extends PageParams {
  before?: string;
}

export interface ImportListErrorsParams extends PageParams {
  /**
   * Set to True to receive a message explaining the error.
   */
  includeErrorMessage?: boolean;

  /**
   * Set to True to receive the data values for the errored row.
   */
  includeRowData?: boolean;
}

export declare namespace Imports {
  export {
    type CollectionResponsePublicImportErrorForwardPaging as CollectionResponsePublicImportErrorForwardPaging,
    type CollectionResponsePublicImportResponse as CollectionResponsePublicImportResponse,
    type ImportRowCore as ImportRowCore,
    type ImportTemplate as ImportTemplate,
    type PropertyValue as PropertyValue,
    type PublicImportError as PublicImportError,
    type PublicImportMetadata as PublicImportMetadata,
    type PublicImportResponse as PublicImportResponse,
    type PublicObjectListRecord as PublicObjectListRecord,
    type PublicImportResponsesPage as PublicImportResponsesPage,
    type PublicImportErrorsPage as PublicImportErrorsPage,
    type ImportCreateParams as ImportCreateParams,
    type ImportListParams as ImportListParams,
    type ImportListErrorsParams as ImportListErrorsParams,
  };
}
