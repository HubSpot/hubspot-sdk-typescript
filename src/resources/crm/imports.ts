// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EmailsAPI from '../marketing/emails';
import * as MarketingEventsAPI from '../marketing/marketing-events/marketing-events';
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
   * const collectionResponsePublicImportErrorForwardPaging =
   *   await client.crm.imports.listErrors(0);
   * ```
   */
  listErrors(
    importID: number,
    query: ImportListErrorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicImportErrorForwardPaging> {
    return this._client.get(path`/crm/v3/imports/${importID}/errors`, { query, ...options });
  }
}

export type PublicImportResponsesPage = Page<PublicImportResponse>;

export interface CollectionResponsePublicImportErrorForwardPaging {
  results: Array<PublicImportError>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponsePublicImportResponse {
  results: Array<PublicImportResponse>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
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
  dataSensitivity: 'none' | 'standard' | 'high';

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
    | 'UNKNOWN'
    | 'IMPORT'
    | 'API'
    | 'FORM'
    | 'ANALYTICS'
    | 'MIGRATION'
    | 'SALESFORCE'
    | 'INTEGRATION'
    | 'CONTACTS_WEB'
    | 'WAL_INCREMENTAL'
    | 'TASK'
    | 'EMAIL'
    | 'WORKFLOWS'
    | 'CALCULATED'
    | 'SOCIAL'
    | 'BATCH_UPDATE'
    | 'SIGNALS'
    | 'BIDEN'
    | 'DEFAULT'
    | 'COMPANIES'
    | 'DEALS'
    | 'ASSISTS'
    | 'PRESENTATIONS'
    | 'TALLY'
    | 'SIDEKICK'
    | 'CRM_UI'
    | 'MERGE_CONTACTS'
    | 'PORTAL_USER_ASSOCIATOR'
    | 'INTEGRATIONS_PLATFORM'
    | 'BCC_TO_CRM'
    | 'FORWARD_TO_CRM'
    | 'ENGAGEMENTS'
    | 'SALES'
    | 'HEISENBERG'
    | 'LEADIN'
    | 'GMAIL_INTEGRATION'
    | 'ACADEMY'
    | 'SALES_MESSAGES'
    | 'AVATARS_SERVICE'
    | 'MERGE_COMPANIES'
    | 'SEQUENCES'
    | 'COMPANY_FAMILIES'
    | 'MOBILE_IOS'
    | 'MOBILE_ANDROID'
    | 'CONTACTS'
    | 'ASSOCIATIONS'
    | 'EXTENSION'
    | 'SUCCESS'
    | 'BOT'
    | 'INTEGRATIONS_SYNC'
    | 'AUTOMATION_PLATFORM'
    | 'CONVERSATIONS'
    | 'EMAIL_INTEGRATION'
    | 'CONTENT_MEMBERSHIP'
    | 'QUOTES'
    | 'BET_ASSIGNMENT'
    | 'QUOTAS'
    | 'BET_CRM_CONNECTOR'
    | 'MEETINGS'
    | 'MERGE_OBJECTS'
    | 'RECYCLING_BIN'
    | 'ADS'
    | 'AI_GROUP'
    | 'COMMUNICATOR'
    | 'SETTINGS'
    | 'PROPERTY_SETTINGS'
    | 'PIPELINE_SETTINGS'
    | 'COMPANY_INSIGHTS'
    | 'BEHAVIORAL_EVENTS'
    | 'PAYMENTS'
    | 'GOALS'
    | 'PORTAL_OBJECT_SYNC'
    | 'APPROVALS'
    | 'FILE_MANAGER'
    | 'MARKETPLACE'
    | 'INTERNAL_PROCESSING'
    | 'FORECASTING'
    | 'SLACK_INTEGRATION'
    | 'CRM_UI_BULK_ACTION'
    | 'WORKFLOW_CONTACT_DELETE_ACTION'
    | 'ACCEPTANCE_TEST'
    | 'PLAYBOOKS'
    | 'CHATSPOT'
    | 'FLYWHEEL_PRODUCT_DATA_SYNC'
    | 'HELP_DESK'
    | 'BILLING'
    | 'DATA_ENRICHMENT'
    | 'AUTOMATION_JOURNEY'
    | 'MICROAPPS'
    | 'INTENT'
    | 'PROSPECTING_AGENT';

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
    | 'INCORRECT_NUMBER_OF_COLUMNS'
    | 'INVALID_OBJECT_ID'
    | 'INVALID_ASSOCIATION_IDENTIFIER'
    | 'NO_OBJECT_ID_FROM_ASSOCIATION_IDENTIFIER'
    | 'MULTIPLE_COMPANIES_WITH_THIS_DOMAIN'
    | 'PROPERTY_DEFINITION_NOT_FOUND'
    | 'PROPERTY_VALUE_NOT_FOUND'
    | 'COULD_NOT_FIND_OWNER'
    | 'MULTIPLE_OWNERS_FOUND'
    | 'COULD_NOT_FIND_BUSINESS_UNIT'
    | 'COULD_NOT_PARSE_NUMBER'
    | 'COULD_NOT_PARSE_DATE'
    | 'COULD_NOT_PARSE_TERM'
    | 'OUTSIDE_VALID_TIME_RANGE'
    | 'OUTSIDE_VALID_TERM_RANGE'
    | 'COULD_NOT_PARSE_ROW'
    | 'INVALID_ENUMERATION_OPTION'
    | 'AMBIGUOUS_ENUMERATION_OPTION'
    | 'FAILED_VALIDATION'
    | 'FAILED_TO_CREATE_ASSOCIATION'
    | 'ASSOCIATION_LIMIT_EXCEEDED'
    | 'FILE_NOT_FOUND'
    | 'INVALID_COLUMN_CONFIGURATION'
    | 'INVALID_FILE_TYPE'
    | 'INVALID_SPREADSHEET'
    | 'INVALID_SHEET_COUNT'
    | 'FAILED_TO_PROCESS_OBJECT_WITH_EMPTY_PROPERTY_VALUES'
    | 'UNKNOWN_BAD_REQUEST'
    | 'GDPR_BLACKLISTED_EMAIL'
    | 'DUPLICATE_ASSOCIATION_ID'
    | 'LIMIT_EXCEEDED'
    | 'PORTAL_WIDE_CUSTOM_OBJECT_LIMIT_EXCEEDED'
    | 'INVALID_ALTERNATE_ID'
    | 'INVALID_EMAIL'
    | 'SECONDARY_EMAIL_WRITE_FAILURE'
    | 'INVALID_DOMAIN'
    | 'DUPLICATE_ROW_CONTENT'
    | 'INVALID_NUMBER_SIZE'
    | 'UNKNOWN_ERROR'
    | 'FAILED_TO_OPT_OUT_CONTACT'
    | 'INVALID_REQUIRED_PROPERTY'
    | 'MISSING_REQUIRED_PROPERTY'
    | 'DUPLICATE_ALTERNATE_ID'
    | 'DUPLICATE_OBJECT_ID'
    | 'DUPLICATE_UNIQUE_PROPERTY_VALUE'
    | 'UNKNOWN_ASSOCIATION_RECORD_ID'
    | 'INVALID_RECORD_ID'
    | 'DUPLICATE_RECORD_ID'
    | 'INVALID_CUSTOM_PROPERTY_VALIDATION'
    | 'CREATE_ONLY_IMPORT'
    | 'UPDATE_ONLY_IMPORT'
    | 'COLUMN_TOO_LARGE'
    | 'ROW_DATA_TOO_LARGE'
    | 'MISSING_EVENT_TIMESTAMP'
    | 'INVALID_EVENT_TIMESTAMP'
    | 'INVALID_EVENT'
    | 'DUPLICATE_EVENT'
    | 'MISSING_EVENT_DEFINITION'
    | 'INVALID_ASSOCIATION_KEY'
    | 'ASSOCIATION_RECORD_NOT_FOUND'
    | 'MISSING_OBJECT_DEFINITION'
    | 'ASSOCIATION_LABEL_NOT_FOUND'
    | 'MANY_ERRORS_IN_ROW';

  sourceData: ImportRowCore;

  errorMessage?: string;

  extraContext?: string;

  /**
   * Represents a single custom property of a marketing event, storing its name,
   * value, metadata (like source, timestamp, and sensitivity), and related audit
   * information for tracking changes.
   */
  invalidPropertyValue?: MarketingEventsAPI.PropertyValue;

  invalidValue?: string;

  invalidValueToDisplay?: string;

  knownColumnNumber?: number;

  objectType?:
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
    | 'COMBO_EVENT_CONFIGURATION'
    | 'CRM_OBJECTS_DUMMY_TYPE'
    | 'CASE_STUDY'
    | 'SERVICE'
    | 'PODCAST_EPISODE'
    | 'PARTNER_SERVICE'
    | 'PROSPECTING_AGENT_CONTACT_ASSIGNMENT'
    | 'UNKNOWN';

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
  state: 'STARTED' | 'PROCESSING' | 'DONE' | 'FAILED' | 'CANCELED' | 'DEFERRED' | 'REVERTED';

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

export interface ImportListErrorsParams {
  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  /**
   * Set to True to receive a message explaining the error.
   */
  includeErrorMessage?: boolean;

  /**
   * Set to True to receive the data values for the errored row.
   */
  includeRowData?: boolean;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;
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
    type ImportCreateParams as ImportCreateParams,
    type ImportListParams as ImportListParams,
    type ImportListErrorsParams as ImportListErrorsParams,
  };
}
