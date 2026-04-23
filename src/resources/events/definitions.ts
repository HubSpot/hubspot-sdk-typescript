// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EventsAPI from './events';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseDefinitions extends APIResource {
  static override readonly _key: readonly ['events', 'definitions'] = Object.freeze([
    'events',
    'definitions',
  ] as const);

  /**
   * Create a custom event definition.
   */
  create(
    body: DefinitionCreateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalBehavioralEventTypeDefinition> {
    return this._client.post('/events/2026-03/event-definitions', { body, ...options });
  }

  /**
   * Update a specific custom event definition by name.
   */
  update(
    eventName: string,
    body: DefinitionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalBehavioralEventTypeDefinition> {
    return this._client.patch(path`/events/2026-03/event-definitions/${eventName}`, { body, ...options });
  }

  /**
   * Retrieve existing custom event definitions.
   */
  list(
    query: DefinitionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExternalBehavioralEventTypeDefinitionsPage, ExternalBehavioralEventTypeDefinition> {
    return this._client.getAPIList(
      '/events/2026-03/event-definitions',
      Page<ExternalBehavioralEventTypeDefinition>,
      { query, ...options },
    );
  }

  /**
   * Delete a custom event definition by name.
   */
  delete(eventName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/events/2026-03/event-definitions/${eventName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new property for an existing event definition.
   */
  createProperty(
    eventName: string,
    body: DefinitionCreatePropertyParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BaseProperty> {
    return this._client.post(path`/events/2026-03/event-definitions/${eventName}/property`, {
      body,
      ...options,
    });
  }

  /**
   * Delete an existing property from a custom event definition.
   */
  deleteProperty(
    propertyName: string,
    params: DefinitionDeletePropertyParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { eventName } = params;
    return this._client.delete(
      path`/events/2026-03/event-definitions/${eventName}/property/${propertyName}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Fetch a single custom event definition by name.
   */
  get(eventName: string, options?: RequestOptions): APIPromise<ExternalBehavioralEventTypeDefinition> {
    return this._client.get(path`/events/2026-03/event-definitions/${eventName}`, options);
  }

  /**
   * Send multiple event occurrences at once.
   */
  sendBatch(body: DefinitionSendBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/events/2026-03/send/batch', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update an existing property in a custom event definition.
   */
  updateProperty(
    propertyName: string,
    params: DefinitionUpdatePropertyParams,
    options?: RequestOptions,
  ): APIPromise<Shared.BaseProperty> {
    const { eventName, ...body } = params;
    return this._client.patch(path`/events/2026-03/event-definitions/${eventName}/property/${propertyName}`, {
      body,
      ...options,
    });
  }
}
export class Definitions extends BaseDefinitions {}

export type ExternalBehavioralEventTypeDefinitionsPage = Page<ExternalBehavioralEventTypeDefinition>;

export interface AbsoluteComparativeTimestampRefineBy {
  comparison: 'AFTER' | 'BEFORE';

  timestamp: number;

  type: 'AbsoluteComparativeTimestampRefineBy';
}

export interface AbsoluteRangedTimestampRefineBy {
  lowerTimestamp: number;

  rangeType: 'BETWEEN' | 'NOT_BETWEEN';

  type: 'AbsoluteRangedTimestampRefineBy';

  upperTimestamp: number;
}

export interface AllHistoryRefineBy {
  type: 'AllHistoryRefineBy';
}

export interface AllPropertyTypesOperation {
  coalescingRefineBy: NumOccurrencesRefineBy | SetOccurrencesRefineBy;

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_BLANK' | 'IS_KNOWN' | 'IS_NOT_BLANK' | 'IS_UNKNOWN';

  operatorName: string;

  propertyType: 'alltypes';

  defaultValue?: string;

  pruningRefineBy?:
    | RelativeComparativeTimestampRefineBy
    | RelativeRangedTimestampRefineBy
    | AbsoluteComparativeTimestampRefineBy
    | AbsoluteRangedTimestampRefineBy
    | AllHistoryRefineBy
    | TimePointOperation
    | RangedTimeOperation;

  renderSpec?: string;
}

export interface BehavioralEventTypeDefinitionLabels {
  singular: string;

  plural?: string;
}

export interface BoolPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'HAS_EVER_BEEN_EQUAL_TO' | 'HAS_NEVER_BEEN_EQUAL_TO' | 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO';

  operatorName: string;

  propertyType: 'bool';

  value: boolean;

  defaultValue?: string;

  renderSpec?: string;
}

export interface CalendarDatePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IN_LAST_TIME_UNIT' | 'IN_NEXT_TIME_UNIT' | 'IN_THIS_TIME_UNIT' | 'IN_THIS_TIME_UNIT_SO_FAR';

  operatorName: string;

  propertyType: 'calendar-date';

  timeUnit: 'DAY' | 'MONTH' | 'QUARTER' | 'WEEK' | 'YEAR';

  timeUnitCount: number;

  useFiscalYear: boolean;

  defaultValue?: string;

  fiscalYearStart?:
    | 'APRIL'
    | 'AUGUST'
    | 'DECEMBER'
    | 'FEBRUARY'
    | 'JANUARY'
    | 'JULY'
    | 'JUNE'
    | 'MARCH'
    | 'MAY'
    | 'NOVEMBER'
    | 'OCTOBER'
    | 'SEPTEMBER';

  renderSpec?: string;
}

export interface CollectionResponseWithTotalExternalBehavioralEventTypeDefinition {
  results: Array<ExternalBehavioralEventTypeDefinition>;

  total: number;

  paging?: Shared.Paging;
}

export interface ComboEventRule {
  count: number;

  eventTypeId: string;

  propertyFilters: Array<PropertyFilter>;

  lookbackWindowDays?: number;
}

export interface ComboEventRuleBranch {
  composingRules: Array<ComboEventRule>;

  operationType: 'AND' | 'OR';

  ruleBranches: Array<ComboEventRuleBranch>;
}

export interface ComparativeBoolPropertyOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO';

  operatorName: string;

  propertyType: 'bool-comparative';

  defaultValue?: string;

  renderSpec?: string;
}

export interface ComparativeDatePropertyOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_AFTER' | 'IS_BEFORE';

  operatorName: string;

  propertyType: 'datetime-comparative';

  defaultComparisonValue?: string;

  defaultValue?: string;

  renderSpec?: string;
}

export interface ComparativeNumberPropertyOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator:
    | 'IS_EQUAL_TO'
    | 'IS_GREATER_THAN'
    | 'IS_GREATER_THAN_OR_EQUAL_TO'
    | 'IS_LESS_THAN'
    | 'IS_LESS_THAN_OR_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO';

  operatorName: string;

  propertyType: 'number-comparative';

  defaultValue?: string;

  renderSpec?: string;
}

export interface ComparativePropertyUpdatedOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_AFTER' | 'IS_BEFORE';

  operatorName: string;

  propertyType: 'property-updated-comparative';

  defaultComparisonValue?: string;

  defaultValue?: string;

  renderSpec?: string;
}

export interface ComparativeStringPropertyOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'CONTAINS' | 'DOES_NOT_CONTAIN' | 'ENDS_WITH' | 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO' | 'STARTS_WITH';

  operatorName: string;

  propertyType: 'string-comparative';

  defaultValue?: string;

  renderSpec?: string;
}

export interface DatePoint {
  day: number;

  month: number;

  timeType: 'DATE';

  timezoneSource: 'CUSTOM' | 'PORTAL' | 'USER';

  year: number;

  zoneId: string;

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface DatePropertyOperation {
  day: number;

  includeObjectsWithNoValueSet: boolean;

  month: 'APR' | 'AUG' | 'DEC' | 'FEB' | 'JAN' | 'JUL' | 'JUN' | 'MAR' | 'MAY' | 'NOV' | 'OCT' | 'SEP';

  operationType: string;

  operator: 'AFTER' | 'BEFORE' | 'EQUAL';

  operatorName: string;

  propertyType: 'date';

  year: number;

  defaultValue?: string;

  renderSpec?: string;
}

export interface DateTimePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_AFTER' | 'IS_AFTER_DATE' | 'IS_BEFORE' | 'IS_BEFORE_DATE' | 'IS_EQUAL_TO';

  operatorName: string;

  propertyType: 'datetime';

  requiresTimeZoneConversion: boolean;

  timestamp: number;

  defaultValue?: string;

  renderSpec?: string;
}

/**
 * The definition of an association
 */
export interface DefinitionsAssociationDefinition {
  /**
   * The unique ID of the associated object (e.g., a contact ID).
   */
  id: number;

  /**
   * Whether custom labels can be used in the association.
   */
  allowsCustomLabels: boolean;

  /**
   * The cardinality from the source object's perspective, either "ONE_TO_ONE" or
   * "ONE_TO_MANY".
   */
  cardinality: 'ONE_TO_MANY' | 'ONE_TO_ONE';

  /**
   * The error category
   */
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK';

  /**
   * The ID of the source object type (e.g., 0-1 for contacts).
   */
  fromObjectTypeId: string;

  /**
   * Whether all potential linked objects are included in the association
   */
  hasAllAssociatedObjects: boolean;

  /**
   * Whether deletions in the association should cause cascading deletes to linked
   * objects.
   */
  hasCascadingDeletes: boolean;

  /**
   * Whether a user has set a limit for the number of source objects.
   */
  hasUserEnforcedMaxFromObjectIds: boolean;

  /**
   * Whether a user has set a limit for the number of destination objects.
   */
  hasUserEnforcedMaxToObjectIds: boolean;

  /**
   * Whether the association is hidden or not.
   */
  hidden: boolean;

  /**
   * Whether the reverse association can also support custom labels.
   */
  inverseAllowsCustomLabels: boolean;

  /**
   * The cardinality from the destination object's perspective, either "ONE_TO_ONE"
   * or "ONE_TO_MANY".
   */
  inverseCardinality: 'ONE_TO_MANY' | 'ONE_TO_ONE';

  /**
   * Whether all potential reverse linked objects are included in the association.
   */
  inverseHasAllAssociatedObjects: boolean;

  /**
   * The unique ID for the inverse side of the association.
   */
  inverseId: number;

  /**
   * The name used to describe the inverse relationship in this association
   */
  inverseName: string;

  isDefault: boolean;

  /**
   * Whether the inverse association is considered primary.
   */
  isInversePrimary: boolean;

  /**
   * Whether the association is the primary link between the entities involved.
   */
  isPrimary: boolean;

  /**
   * The maximum number of source object IDs allowed in the association.
   */
  maxFromObjectIds: number;

  /**
   * The maximum number of destination object IDs allowed in the association.
   */
  maxToObjectIds: number;

  /**
   * For labeled association types, the internal name of the association.
   */
  name: string;

  /**
   * A unique across-portal ID applied to the association.
   */
  portalUniqueIdentifier: string;

  readOnly: boolean;

  /**
   * The ID of the destination object type (e.g., 0-3 for deals).
   */
  toObjectTypeId: string;

  /**
   * The name of the source object type (e.g,. "DEAL" or "QUOTE").
   */
  fromObjectType?:
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

  hiddenReason?: 'DEFAULT' | 'INTERNAL' | 'USER_CONFIGURED';

  /**
   * The label used to describe the reverse relationship in an association.
   */
  inverseLabel?: string;

  /**
   * The label given to an association.
   */
  label?: string;

  /**
   * The name of the destination object type (e.g,. "DEAL" or "QUOTE").
   */
  toObjectType?:
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

export interface EnumerationPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator:
    | 'CONTAINS_ALL'
    | 'DOES_NOT_CONTAIN_ALL'
    | 'HAS_EVER_BEEN_ANY_OF'
    | 'HAS_EVER_BEEN_EXACTLY'
    | 'HAS_EVER_CONTAINED_ALL'
    | 'HAS_NEVER_BEEN_ANY_OF'
    | 'HAS_NEVER_BEEN_EXACTLY'
    | 'HAS_NEVER_CONTAINED_ALL'
    | 'IS_ANY_OF'
    | 'IS_EXACTLY'
    | 'IS_NONE_OF'
    | 'IS_NOT_EXACTLY';

  operatorName: string;

  propertyType: 'enumeration';

  values: Array<string>;

  defaultValue?: string;

  renderSpec?: string;
}

export interface ExternalBehavioralEventPropertyCreate {
  /**
   * Human readable label for the property. Used in HubSpot UI
   */
  label: string;

  /**
   * The data type of the property. Can be one of the following: [string, number,
   * enumeration, datetime]
   */
  type: string;

  /**
   * A description of the property that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Internal property name, which must be used when referencing the property from
   * the API
   */
  name?: string;

  /**
   * A list of available options for the property if it is an enumeration. NOTE: This
   * field is only applicable for enumerated properties.
   */
  options?: Array<Shared.OptionInput>;
}

export interface ExternalBehavioralEventPropertyDefinitionPatch {
  /**
   * A description of the property that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Human readable label for the property. Used in HubSpot UI
   */
  label?: string;

  /**
   * A list of available options for the property if it is an enumeration. NOTE: This
   * field is only applicable for enumerated properties.
   */
  options?: Array<Shared.OptionInput>;
}

export interface ExternalBehavioralEventTypeDefinition {
  id: string;

  archived: boolean;

  associations: Array<DefinitionsAssociationDefinition>;

  fullyQualifiedName: string;

  labels: BehavioralEventTypeDefinitionLabels;

  name: string;

  objectTypeId: string;

  properties: Array<Shared.BaseProperty>;

  comboEventRules?: ComboEventRuleBranch;

  createdAt?: string;

  createdUserId?: number;

  customMatchingId?: ExternalObjectResolutionMappingResponse;

  description?: string;

  detailTemplate?: string;

  headerTemplate?: string;

  primaryObject?: string;

  primaryObjectId?: string;

  trackingType?:
    | 'APP_EVENT'
    | 'AUTOCAPTURE_EVENT'
    | 'CLICKED_ELEMENT'
    | 'COMBO_EVENT'
    | 'CUSTOM_SCRIPT'
    | 'CUSTOM_SIGNAL'
    | 'IMPORT'
    | 'MANUAL'
    | 'PROPERTY_CHANGE'
    | 'VISITED_URL'
    | 'WEBHOOK';

  updatedAt?: string;

  updatedUserId?: number;
}

export interface ExternalBehavioralEventTypeDefinitionEgg {
  includeDefaultProperties: boolean;

  /**
   * Human readable label for the event. Used in HubSpot UI
   */
  label: string;

  /**
   * List of custom properties on event
   */
  propertyDefinitions: Array<ExternalBehavioralEventPropertyCreate>;

  customMatchingId?: ExternalObjectResolutionMappingRequest;

  /**
   * A description of the event that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Internal event name, which must be used when referencing the event from this
   * event definitions API. If a name is not supplied, one will be generated based on
   * the label. The `name` value will also be used to automatically generate a
   * `fullyQualifiedName` for the event definition, which you'll use when sending
   * event completions to this event.
   */
  name?: string;

  /**
   * The object type to associate this event to. Can be one of CONTACT, COMPANY,
   * DEAL, TICKET. If no primaryObject is supplied, we will default to associating
   * the event to CONTACT objects.
   */
  primaryObject?: string;
}

export interface ExternalBehavioralEventTypeDefinitionPatch {
  /**
   * A description of the event that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Human readable label for the event. Used in HubSpot UI
   */
  label?: string;
}

export interface ExternalObjectResolutionMappingRequest {
  primaryObjectRule: ExternalPrimaryObjectResolutionRule;
}

export interface ExternalObjectResolutionMappingResponse {
  primaryObjectRule: ExternalPrimaryObjectResolutionRule;
}

export interface ExternalPrimaryObjectResolutionRule {
  eventPropertyName: string;

  targetObjectPropertyName: string;
}

export interface FiscalQuarter {
  day: number;

  month: number;

  referenceType: 'FISCAL_QUARTER';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface FiscalYear {
  day: number;

  month: number;

  referenceType: 'FISCAL_YEAR';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface IndexOffset {
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

export interface IndexedTimePoint {
  indexReference:
    | NowReference
    | TodayReference
    | WeekReference
    | MonthReference
    | QuarterReference
    | FiscalQuarter
    | YearReference
    | FiscalYear;

  timeType: 'INDEXED';

  timezoneSource: 'CUSTOM' | 'PORTAL' | 'USER';

  zoneId: string;

  offset?: IndexOffset;

  shouldGenerateRefreshTime?: boolean;
}

export interface MonthReference {
  day: number;

  referenceType: 'MONTH';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface MultiStringPropertyOperation {
  coalescingRefineBy: NumOccurrencesRefineBy | SetOccurrencesRefineBy;

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator:
    | 'CONTAINS'
    | 'CONTAINS_EXACTLY'
    | 'DOES_NOT_CONTAIN'
    | 'DOES_NOT_CONTAIN_EXACTLY'
    | 'ENDS_WITH'
    | 'IS_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO'
    | 'STARTS_WITH';

  operatorName: string;

  propertyType: 'multistring';

  values: Array<string>;

  defaultValue?: string;

  pruningRefineBy?:
    | RelativeComparativeTimestampRefineBy
    | RelativeRangedTimestampRefineBy
    | AbsoluteComparativeTimestampRefineBy
    | AbsoluteRangedTimestampRefineBy
    | AllHistoryRefineBy
    | TimePointOperation
    | RangedTimeOperation;

  renderSpec?: string;
}

export interface NowReference {
  referenceType: 'NOW';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface NumOccurrencesRefineBy {
  type: 'NumOccurrencesRefineBy';

  maxOccurrences?: number;

  minOccurrences?: number;
}

export interface NumberPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator:
    | 'HAS_EVER_BEEN_EQUAL_TO'
    | 'HAS_NEVER_BEEN_EQUAL_TO'
    | 'IS_EQUAL_TO'
    | 'IS_GREATER_THAN'
    | 'IS_GREATER_THAN_OR_EQUAL_TO'
    | 'IS_LESS_THAN'
    | 'IS_LESS_THAN_OR_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO';

  operatorName: string;

  propertyType: 'number';

  value: number;

  defaultValue?: string;

  renderSpec?: string;
}

export interface PropertyFilter {
  filterType: 'PROPERTY';

  operation:
    | BoolPropertyOperation
    | NumberPropertyOperation
    | StringPropertyOperation
    | DateTimePropertyOperation
    | RangedDatePropertyOperation
    | ComparativeDatePropertyOperation
    | ComparativeBoolPropertyOperation
    | ComparativeNumberPropertyOperation
    | ComparativeStringPropertyOperation
    | ComparativePropertyUpdatedOperation
    | RollingDateRangePropertyOperation
    | RollingPropertyUpdatedOperation
    | EnumerationPropertyOperation
    | AllPropertyTypesOperation
    | RangedNumberPropertyOperation
    | MultiStringPropertyOperation
    | DatePropertyOperation
    | CalendarDatePropertyOperation
    | TimePointOperation
    | RangedTimeOperation
    | RegexPropertyOperation;

  property: string;

  context?: PropertyFilterContext;

  filterInsightsId?: number;

  frameworkFilterId?: number;
}

export interface PropertyFilterContext {
  objectTypeId: string;
}

export interface PropertyReferencedTime {
  property: string;

  referenceType:
    | 'ANNIVERSARY'
    | 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'
    | 'UPDATED_AT'
    | 'VALUE'
    | 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION';

  timeType: 'PROPERTY_REFERENCED';

  timezoneSource: 'CUSTOM' | 'PORTAL' | 'USER';

  zoneId: string;
}

export interface QuarterReference {
  day: number;

  month: number;

  referenceType: 'QUARTER';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface RangedDatePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBoundTimestamp: number;

  operationType: string;

  operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN';

  operatorName: string;

  propertyType: 'datetime-ranged';

  requiresTimeZoneConversion: boolean;

  upperBoundTimestamp: number;

  defaultValue?: string;

  renderSpec?: string;
}

export interface RangedNumberPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBound: number;

  operationType: string;

  operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN';

  operatorName: string;

  propertyType: 'number-ranged';

  upperBound: number;

  defaultValue?: string;

  renderSpec?: string;
}

export interface RangedTimeOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBoundEndpointBehavior: 'EXCLUSIVE' | 'INCLUSIVE';

  lowerBoundTimePoint: DatePoint | IndexedTimePoint | PropertyReferencedTime;

  operationType: string;

  operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN';

  operatorName: string;

  propertyParser:
    | 'ANNIVERSARY'
    | 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'
    | 'UPDATED_AT'
    | 'VALUE'
    | 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION';

  propertyType: 'rangedtime';

  type: string;

  upperBoundEndpointBehavior: 'EXCLUSIVE' | 'INCLUSIVE';

  upperBoundTimePoint: DatePoint | IndexedTimePoint | PropertyReferencedTime;

  defaultValue?: string;

  renderSpec?: string;
}

export interface RegexPropertyOperation {
  caseSensitive: boolean;

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'DOES_NOT_MATCH_REGEX' | 'MATCHES_REGEX';

  operatorName: string;

  pattern: string;

  propertyType: 'regex';

  defaultValue?: string;

  renderSpec?: string;
}

export interface RelativeComparativeTimestampRefineBy {
  comparison: 'AFTER' | 'BEFORE';

  timeOffset: TimeOffset;

  type: 'RelativeComparativeTimestampRefineBy';
}

export interface RelativeRangedTimestampRefineBy {
  lowerBoundOffset: TimeOffset;

  rangeType: 'BETWEEN' | 'NOT_BETWEEN';

  type: 'RelativeRangedTimestampRefineBy';

  upperBoundOffset: TimeOffset;
}

export interface RollingDateRangePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  numberOfDays: number;

  operationType: string;

  operator:
    | 'IS_LESS_THAN_X_DAYS_AGO'
    | 'IS_LESS_THAN_X_DAYS_FROM_NOW'
    | 'IS_MORE_THAN_X_DAYS_AGO'
    | 'IS_MORE_THAN_X_DAYS_FROM_NOW';

  operatorName: string;

  propertyType: 'datetime-rolling';

  requiresTimeZoneConversion: boolean;

  defaultValue?: string;

  renderSpec?: string;
}

export interface RollingPropertyUpdatedOperation {
  includeObjectsWithNoValueSet: boolean;

  numberOfDays: number;

  operationType: string;

  operator: 'NOT_UPDATED_IN_LAST_X_DAYS' | 'UPDATED_IN_LAST_X_DAYS';

  operatorName: string;

  propertyType: 'rolling-property-updated';

  defaultValue?: string;

  renderSpec?: string;
}

export interface SetOccurrencesRefineBy {
  setType: 'ALL' | 'ALL_INCLUDE_EMPTY' | 'ANY' | 'ANY_INCLUDE_EMPTY' | 'NONE' | 'NONE_EXCLUDE_EMPTY';

  type: 'SetOccurrencesRefineBy';
}

export interface StringPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator:
    | 'CONTAINS'
    | 'DOES_NOT_CONTAIN'
    | 'ENDS_WITH'
    | 'HAS_EVER_BEEN_EQUAL_TO'
    | 'HAS_EVER_CONTAINED'
    | 'HAS_NEVER_BEEN_EQUAL_TO'
    | 'HAS_NEVER_CONTAINED'
    | 'IS_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO'
    | 'STARTS_WITH';

  operatorName: string;

  propertyType: 'string';

  value: string;

  defaultValue?: string;

  renderSpec?: string;
}

export interface TimeOffset {
  amount: number;

  offsetDirection: 'FUTURE' | 'PAST';

  timeUnit: 'DAYS' | 'HOURS' | 'MINUTES' | 'WEEKS';
}

export interface TimePointOperation {
  endpointBehavior: 'EXCLUSIVE' | 'INCLUSIVE';

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_AFTER' | 'IS_BEFORE';

  operatorName: string;

  propertyParser:
    | 'ANNIVERSARY'
    | 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'
    | 'UPDATED_AT'
    | 'VALUE'
    | 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION';

  propertyType: 'timepoint';

  timePoint: DatePoint | IndexedTimePoint | PropertyReferencedTime;

  type: string;

  defaultValue?: string;

  renderSpec?: string;
}

export interface TodayReference {
  referenceType: 'TODAY';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface WeekReference {
  dayOfWeek: 'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY';

  referenceType: 'WEEK';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface YearReference {
  day: number;

  month: number;

  referenceType: 'YEAR';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface DefinitionCreateParams {
  includeDefaultProperties: boolean;

  /**
   * Human readable label for the event. Used in HubSpot UI
   */
  label: string;

  /**
   * List of custom properties on event
   */
  propertyDefinitions: Array<ExternalBehavioralEventPropertyCreate>;

  customMatchingId?: ExternalObjectResolutionMappingRequest;

  /**
   * A description of the event that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Internal event name, which must be used when referencing the event from this
   * event definitions API. If a name is not supplied, one will be generated based on
   * the label. The `name` value will also be used to automatically generate a
   * `fullyQualifiedName` for the event definition, which you'll use when sending
   * event completions to this event.
   */
  name?: string;

  /**
   * The object type to associate this event to. Can be one of CONTACT, COMPANY,
   * DEAL, TICKET. If no primaryObject is supplied, we will default to associating
   * the event to CONTACT objects.
   */
  primaryObject?: string;
}

export interface DefinitionUpdateParams {
  /**
   * A description of the event that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Human readable label for the event. Used in HubSpot UI
   */
  label?: string;
}

export interface DefinitionListParams extends PageParams {
  includeProperties?: boolean;

  searchString?: string;

  sortOrder?: string;
}

export interface DefinitionCreatePropertyParams {
  /**
   * Human readable label for the property. Used in HubSpot UI
   */
  label: string;

  /**
   * The data type of the property. Can be one of the following: [string, number,
   * enumeration, datetime]
   */
  type: string;

  /**
   * A description of the property that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Internal property name, which must be used when referencing the property from
   * the API
   */
  name?: string;

  /**
   * A list of available options for the property if it is an enumeration. NOTE: This
   * field is only applicable for enumerated properties.
   */
  options?: Array<Shared.OptionInput>;
}

export interface DefinitionDeletePropertyParams {
  eventName: string;
}

export interface DefinitionSendBatchParams {
  inputs: Array<EventsAPI.BehavioralEventHTTPCompletionRequest>;
}

export interface DefinitionUpdatePropertyParams {
  /**
   * Path param
   */
  eventName: string;

  /**
   * Body param: A description of the property that will be shown as help text in
   * HubSpot.
   */
  description?: string;

  /**
   * Body param: Human readable label for the property. Used in HubSpot UI
   */
  label?: string;

  /**
   * Body param: A list of available options for the property if it is an
   * enumeration. NOTE: This field is only applicable for enumerated properties.
   */
  options?: Array<Shared.OptionInput>;
}

export declare namespace Definitions {
  export {
    type AbsoluteComparativeTimestampRefineBy as AbsoluteComparativeTimestampRefineBy,
    type AbsoluteRangedTimestampRefineBy as AbsoluteRangedTimestampRefineBy,
    type AllHistoryRefineBy as AllHistoryRefineBy,
    type AllPropertyTypesOperation as AllPropertyTypesOperation,
    type BehavioralEventTypeDefinitionLabels as BehavioralEventTypeDefinitionLabels,
    type BoolPropertyOperation as BoolPropertyOperation,
    type CalendarDatePropertyOperation as CalendarDatePropertyOperation,
    type CollectionResponseWithTotalExternalBehavioralEventTypeDefinition as CollectionResponseWithTotalExternalBehavioralEventTypeDefinition,
    type ComboEventRule as ComboEventRule,
    type ComboEventRuleBranch as ComboEventRuleBranch,
    type ComparativeBoolPropertyOperation as ComparativeBoolPropertyOperation,
    type ComparativeDatePropertyOperation as ComparativeDatePropertyOperation,
    type ComparativeNumberPropertyOperation as ComparativeNumberPropertyOperation,
    type ComparativePropertyUpdatedOperation as ComparativePropertyUpdatedOperation,
    type ComparativeStringPropertyOperation as ComparativeStringPropertyOperation,
    type DatePoint as DatePoint,
    type DatePropertyOperation as DatePropertyOperation,
    type DateTimePropertyOperation as DateTimePropertyOperation,
    type DefinitionsAssociationDefinition as DefinitionsAssociationDefinition,
    type EnumerationPropertyOperation as EnumerationPropertyOperation,
    type ExternalBehavioralEventPropertyCreate as ExternalBehavioralEventPropertyCreate,
    type ExternalBehavioralEventPropertyDefinitionPatch as ExternalBehavioralEventPropertyDefinitionPatch,
    type ExternalBehavioralEventTypeDefinition as ExternalBehavioralEventTypeDefinition,
    type ExternalBehavioralEventTypeDefinitionEgg as ExternalBehavioralEventTypeDefinitionEgg,
    type ExternalBehavioralEventTypeDefinitionPatch as ExternalBehavioralEventTypeDefinitionPatch,
    type ExternalObjectResolutionMappingRequest as ExternalObjectResolutionMappingRequest,
    type ExternalObjectResolutionMappingResponse as ExternalObjectResolutionMappingResponse,
    type ExternalPrimaryObjectResolutionRule as ExternalPrimaryObjectResolutionRule,
    type FiscalQuarter as FiscalQuarter,
    type FiscalYear as FiscalYear,
    type IndexOffset as IndexOffset,
    type IndexedTimePoint as IndexedTimePoint,
    type MonthReference as MonthReference,
    type MultiStringPropertyOperation as MultiStringPropertyOperation,
    type NowReference as NowReference,
    type NumOccurrencesRefineBy as NumOccurrencesRefineBy,
    type NumberPropertyOperation as NumberPropertyOperation,
    type PropertyFilter as PropertyFilter,
    type PropertyFilterContext as PropertyFilterContext,
    type PropertyReferencedTime as PropertyReferencedTime,
    type QuarterReference as QuarterReference,
    type RangedDatePropertyOperation as RangedDatePropertyOperation,
    type RangedNumberPropertyOperation as RangedNumberPropertyOperation,
    type RangedTimeOperation as RangedTimeOperation,
    type RegexPropertyOperation as RegexPropertyOperation,
    type RelativeComparativeTimestampRefineBy as RelativeComparativeTimestampRefineBy,
    type RelativeRangedTimestampRefineBy as RelativeRangedTimestampRefineBy,
    type RollingDateRangePropertyOperation as RollingDateRangePropertyOperation,
    type RollingPropertyUpdatedOperation as RollingPropertyUpdatedOperation,
    type SetOccurrencesRefineBy as SetOccurrencesRefineBy,
    type StringPropertyOperation as StringPropertyOperation,
    type TimeOffset as TimeOffset,
    type TimePointOperation as TimePointOperation,
    type TodayReference as TodayReference,
    type WeekReference as WeekReference,
    type YearReference as YearReference,
    type ExternalBehavioralEventTypeDefinitionsPage as ExternalBehavioralEventTypeDefinitionsPage,
    type DefinitionCreateParams as DefinitionCreateParams,
    type DefinitionUpdateParams as DefinitionUpdateParams,
    type DefinitionListParams as DefinitionListParams,
    type DefinitionCreatePropertyParams as DefinitionCreatePropertyParams,
    type DefinitionDeletePropertyParams as DefinitionDeletePropertyParams,
    type DefinitionSendBatchParams as DefinitionSendBatchParams,
    type DefinitionUpdatePropertyParams as DefinitionUpdatePropertyParams,
  };
}
