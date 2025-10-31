// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EventDefinitions extends APIResource {
  /**
   * Create a custom event definition.
   *
   * @example
   * ```ts
   * const externalBehavioralEventTypeDefinition =
   *   await client.events.eventDefinitions.create({
   *     label: 'label',
   *     propertyDefinitions: [{ label: 'label', type: 'type' }],
   *   });
   * ```
   */
  create(
    body: EventDefinitionCreateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalBehavioralEventTypeDefinition> {
    return this._client.post('/events/v3/event-definitions', { body, ...options });
  }

  /**
   * Update a specific custom event definition by name.
   *
   * @example
   * ```ts
   * const externalBehavioralEventTypeDefinition =
   *   await client.events.eventDefinitions.update('eventName');
   * ```
   */
  update(
    eventName: string,
    body: EventDefinitionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalBehavioralEventTypeDefinition> {
    return this._client.patch(path`/events/v3/event-definitions/${eventName}`, { body, ...options });
  }

  /**
   * Retrieve existing custom event definitions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const externalBehavioralEventTypeDefinition of client.events.eventDefinitions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventDefinitionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExternalBehavioralEventTypeDefinitionsPage, ExternalBehavioralEventTypeDefinition> {
    return this._client.getAPIList(
      '/events/v3/event-definitions',
      Page<ExternalBehavioralEventTypeDefinition>,
      { query, ...options },
    );
  }

  /**
   * Delete a custom event definition by name.
   *
   * @example
   * ```ts
   * await client.events.eventDefinitions.delete('eventName');
   * ```
   */
  delete(eventName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/events/v3/event-definitions/${eventName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new property for an existing event definition.
   *
   * @example
   * ```ts
   * const property =
   *   await client.events.eventDefinitions.createProperty(
   *     'eventName',
   *     { label: 'label', type: 'type' },
   *   );
   * ```
   */
  createProperty(
    eventName: string,
    body: EventDefinitionCreatePropertyParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    return this._client.post(path`/events/v3/event-definitions/${eventName}/property`, { body, ...options });
  }

  /**
   * Delete an existing property from a custom event definition.
   *
   * @example
   * ```ts
   * await client.events.eventDefinitions.deleteProperty(
   *   'propertyName',
   *   { eventName: 'eventName' },
   * );
   * ```
   */
  deleteProperty(
    propertyName: string,
    params: EventDefinitionDeletePropertyParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { eventName } = params;
    return this._client.delete(path`/events/v3/event-definitions/${eventName}/property/${propertyName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch a single custom event definition by name.
   *
   * @example
   * ```ts
   * const externalBehavioralEventTypeDefinition =
   *   await client.events.eventDefinitions.get('eventName');
   * ```
   */
  get(eventName: string, options?: RequestOptions): APIPromise<ExternalBehavioralEventTypeDefinition> {
    return this._client.get(path`/events/v3/event-definitions/${eventName}`, options);
  }

  /**
   * Update an existing property in a custom event definition.
   *
   * @example
   * ```ts
   * const property =
   *   await client.events.eventDefinitions.updateProperty(
   *     'propertyName',
   *     { eventName: 'eventName' },
   *   );
   * ```
   */
  updateProperty(
    propertyName: string,
    params: EventDefinitionUpdatePropertyParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { eventName, ...body } = params;
    return this._client.patch(path`/events/v3/event-definitions/${eventName}/property/${propertyName}`, {
      body,
      ...options,
    });
  }
}

export type ExternalBehavioralEventTypeDefinitionsPage = Page<ExternalBehavioralEventTypeDefinition>;

export interface AbsoluteComparativeTimestampRefineBy {
  comparison: 'BEFORE' | 'AFTER';

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

  operator: 'IS_KNOWN' | 'IS_UNKNOWN' | 'IS_BLANK' | 'IS_NOT_BLANK';

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
}

/**
 * The definition of an association
 */
export interface AssociationDefinition {
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
  cardinality: 'ONE_TO_ONE' | 'ONE_TO_MANY';

  /**
   * The category of the association. Can be: "HUBSPOT_DEFINED", "USER_DEFINED", or
   * "INTEGRATOR_DEFINED"
   */
  category: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

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
  inverseCardinality: 'ONE_TO_ONE' | 'ONE_TO_MANY';

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

  /**
   * The ID of the destination object type (e.g., 0-3 for deals).
   */
  toObjectTypeId: string;

  /**
   * The name of the source object type (e.g,. "DEAL" or "QUOTE").
   */
  fromObjectType?:
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
    | 'UNKNOWN';

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
    | 'UNKNOWN';
}

export interface BehavioralEventTypeDefinitionLabels {
  singular: string;

  plural?: string;
}

export interface BoolPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO' | 'HAS_EVER_BEEN_EQUAL_TO' | 'HAS_NEVER_BEEN_EQUAL_TO';

  operatorName: string;

  propertyType: 'bool';

  value: boolean;

  defaultValue?: string;
}

export interface CalendarDatePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IN_THIS_TIME_UNIT' | 'IN_THIS_TIME_UNIT_SO_FAR' | 'IN_NEXT_TIME_UNIT' | 'IN_LAST_TIME_UNIT';

  operatorName: string;

  propertyType: 'calendar-date';

  timeUnit: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR';

  timeUnitCount: number;

  useFiscalYear: boolean;

  defaultValue?: string;

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
}

export interface CollectionResponseWithTotalExternalBehavioralEventTypeDefinitionForwardPaging {
  results: Array<ExternalBehavioralEventTypeDefinition>;

  total: number;

  paging?: Shared.ForwardPaging;
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

export interface ComparativeDatePropertyOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_BEFORE' | 'IS_AFTER';

  operatorName: string;

  propertyType: 'datetime-comparative';

  defaultComparisonValue?: string;

  defaultValue?: string;
}

export interface ComparativePropertyUpdatedOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_BEFORE' | 'IS_AFTER';

  operatorName: string;

  propertyType: 'property-updated-comparative';

  defaultComparisonValue?: string;

  defaultValue?: string;
}

export interface DatePoint {
  day: number;

  month: number;

  timeType: 'DATE';

  timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

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

  month: 'JAN' | 'FEB' | 'MAR' | 'APR' | 'MAY' | 'JUN' | 'JUL' | 'AUG' | 'SEP' | 'OCT' | 'NOV' | 'DEC';

  operationType: string;

  operator: 'EQUAL' | 'BEFORE' | 'AFTER';

  operatorName: string;

  propertyType: 'date';

  year: number;

  defaultValue?: string;
}

export interface DateTimePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_BEFORE' | 'IS_AFTER' | 'IS_EQUAL_TO' | 'IS_BEFORE_DATE' | 'IS_AFTER_DATE';

  operatorName: string;

  propertyType: 'datetime';

  requiresTimeZoneConversion: boolean;

  timestamp: number;

  defaultValue?: string;
}

export interface EnumerationPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator:
    | 'IS_ANY_OF'
    | 'IS_NONE_OF'
    | 'IS_EXACTLY'
    | 'IS_NOT_EXACTLY'
    | 'CONTAINS_ALL'
    | 'DOES_NOT_CONTAIN_ALL'
    | 'HAS_EVER_BEEN_ANY_OF'
    | 'HAS_NEVER_BEEN_ANY_OF'
    | 'HAS_EVER_BEEN_EXACTLY'
    | 'HAS_NEVER_BEEN_EXACTLY'
    | 'HAS_EVER_CONTAINED_ALL'
    | 'HAS_NEVER_CONTAINED_ALL';

  operatorName: string;

  propertyType: 'enumeration';

  values: Array<string>;

  defaultValue?: string;
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

  associations: Array<AssociationDefinition>;

  fullyQualifiedName: string;

  labels: BehavioralEventTypeDefinitionLabels;

  name: string;

  objectTypeId: string;

  properties: Array<Shared.Property>;

  comboEventRules?: ComboEventRuleBranch;

  createdAt?: string;

  createdUserId?: number;

  description?: string;

  primaryObject?: string;

  primaryObjectId?: string;

  trackingType?:
    | 'VISITED_URL'
    | 'CLICKED_ELEMENT'
    | 'CUSTOM_SCRIPT'
    | 'MANUAL'
    | 'IMPORT'
    | 'PROPERTY_CHANGE'
    | 'COMBO_EVENT'
    | 'WEBHOOK';
}

export interface ExternalBehavioralEventTypeDefinitionEgg {
  /**
   * Human readable label for the event. Used in HubSpot UI
   */
  label: string;

  /**
   * List of custom properties on event
   */
  propertyDefinitions: Array<ExternalBehavioralEventPropertyCreate>;

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

  timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

  zoneId: string;

  offset?: IndexOffset;
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

  operator: 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO' | 'CONTAINS' | 'DOES_NOT_CONTAIN' | 'STARTS_WITH' | 'ENDS_WITH';

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
}

export interface NowReference {
  referenceType: 'NOW';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface NumberPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator:
    | 'IS_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO'
    | 'IS_GREATER_THAN'
    | 'IS_GREATER_THAN_OR_EQUAL_TO'
    | 'IS_LESS_THAN'
    | 'IS_LESS_THAN_OR_EQUAL_TO'
    | 'HAS_EVER_BEEN_EQUAL_TO'
    | 'HAS_NEVER_BEEN_EQUAL_TO';

  operatorName: string;

  propertyType: 'number';

  value: number;

  defaultValue?: string;
}

export interface NumOccurrencesRefineBy {
  type: 'NumOccurrencesRefineBy';

  maxOccurrences?: number;

  minOccurrences?: number;
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
    | RangedTimeOperation;

  property: string;

  frameworkFilterId?: number;
}

export interface PropertyReferencedTime {
  property: string;

  referenceType:
    | 'VALUE'
    | 'UPDATED_AT'
    | 'ANNIVERSARY'
    | 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION'
    | 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION';

  timeType: 'PROPERTY_REFERENCED';

  timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

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
}

export interface RangedTimeOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

  lowerBoundTimePoint: DatePoint | IndexedTimePoint | PropertyReferencedTime;

  operationType: string;

  operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN';

  operatorName: string;

  propertyParser:
    | 'VALUE'
    | 'UPDATED_AT'
    | 'ANNIVERSARY'
    | 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION'
    | 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION';

  propertyType: 'rangedtime';

  type: string;

  upperBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

  upperBoundTimePoint: DatePoint | IndexedTimePoint | PropertyReferencedTime;

  defaultValue?: string;
}

export interface RelativeComparativeTimestampRefineBy {
  comparison: 'BEFORE' | 'AFTER';

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
    | 'IS_MORE_THAN_X_DAYS_AGO'
    | 'IS_LESS_THAN_X_DAYS_FROM_NOW'
    | 'IS_MORE_THAN_X_DAYS_FROM_NOW';

  operatorName: string;

  propertyType: 'datetime-rolling';

  requiresTimeZoneConversion: boolean;

  defaultValue?: string;
}

export interface RollingPropertyUpdatedOperation {
  includeObjectsWithNoValueSet: boolean;

  numberOfDays: number;

  operationType: string;

  operator: 'UPDATED_IN_LAST_X_DAYS' | 'NOT_UPDATED_IN_LAST_X_DAYS';

  operatorName: string;

  propertyType: 'rolling-property-updated';

  defaultValue?: string;
}

export interface SetOccurrencesRefineBy {
  setType: 'ALL' | 'ALL_INCLUDE_EMPTY' | 'ANY' | 'NONE' | 'NONE_EXCLUDE_EMPTY' | 'ANY_INCLUDE_EMPTY';

  type: 'SetOccurrencesRefineBy';
}

export interface StringPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator:
    | 'IS_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO'
    | 'CONTAINS'
    | 'DOES_NOT_CONTAIN'
    | 'STARTS_WITH'
    | 'ENDS_WITH'
    | 'HAS_EVER_BEEN_EQUAL_TO'
    | 'HAS_NEVER_BEEN_EQUAL_TO'
    | 'HAS_EVER_CONTAINED'
    | 'HAS_NEVER_CONTAINED';

  operatorName: string;

  propertyType: 'string';

  value: string;

  defaultValue?: string;
}

export interface TimeOffset {
  amount: number;

  offsetDirection: 'PAST' | 'FUTURE';

  timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
}

export interface TimePointOperation {
  endpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

  includeObjectsWithNoValueSet: boolean;

  operationType: string;

  operator: 'IS_BEFORE' | 'IS_AFTER';

  operatorName: string;

  propertyParser:
    | 'VALUE'
    | 'UPDATED_AT'
    | 'ANNIVERSARY'
    | 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION'
    | 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION';

  propertyType: 'timepoint';

  timePoint: DatePoint | IndexedTimePoint | PropertyReferencedTime;

  type: string;

  defaultValue?: string;
}

export interface TodayReference {
  referenceType: 'TODAY';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface WeekReference {
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

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

export interface EventDefinitionCreateParams {
  /**
   * Human readable label for the event. Used in HubSpot UI
   */
  label: string;

  /**
   * List of custom properties on event
   */
  propertyDefinitions: Array<ExternalBehavioralEventPropertyCreate>;

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

export interface EventDefinitionUpdateParams {
  /**
   * A description of the event that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Human readable label for the event. Used in HubSpot UI
   */
  label?: string;
}

export interface EventDefinitionListParams extends PageParams {
  includeProperties?: boolean;

  /**
   * Characters in the event name that the user is searching for. This search is a
   * naive “contains” search, no fuzzy matching is done.
   */
  searchString?: string;

  sortOrder?: string;
}

export interface EventDefinitionCreatePropertyParams {
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

export interface EventDefinitionDeletePropertyParams {
  /**
   * The internal name of the custom event.
   */
  eventName: string;
}

export interface EventDefinitionUpdatePropertyParams {
  /**
   * Path param: The internal name of the custom event.
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

export declare namespace EventDefinitions {
  export {
    type AbsoluteComparativeTimestampRefineBy as AbsoluteComparativeTimestampRefineBy,
    type AbsoluteRangedTimestampRefineBy as AbsoluteRangedTimestampRefineBy,
    type AllHistoryRefineBy as AllHistoryRefineBy,
    type AllPropertyTypesOperation as AllPropertyTypesOperation,
    type AssociationDefinition as AssociationDefinition,
    type BehavioralEventTypeDefinitionLabels as BehavioralEventTypeDefinitionLabels,
    type BoolPropertyOperation as BoolPropertyOperation,
    type CalendarDatePropertyOperation as CalendarDatePropertyOperation,
    type CollectionResponseWithTotalExternalBehavioralEventTypeDefinitionForwardPaging as CollectionResponseWithTotalExternalBehavioralEventTypeDefinitionForwardPaging,
    type ComboEventRule as ComboEventRule,
    type ComboEventRuleBranch as ComboEventRuleBranch,
    type ComparativeDatePropertyOperation as ComparativeDatePropertyOperation,
    type ComparativePropertyUpdatedOperation as ComparativePropertyUpdatedOperation,
    type DatePoint as DatePoint,
    type DatePropertyOperation as DatePropertyOperation,
    type DateTimePropertyOperation as DateTimePropertyOperation,
    type EnumerationPropertyOperation as EnumerationPropertyOperation,
    type ExternalBehavioralEventPropertyCreate as ExternalBehavioralEventPropertyCreate,
    type ExternalBehavioralEventPropertyDefinitionPatch as ExternalBehavioralEventPropertyDefinitionPatch,
    type ExternalBehavioralEventTypeDefinition as ExternalBehavioralEventTypeDefinition,
    type ExternalBehavioralEventTypeDefinitionEgg as ExternalBehavioralEventTypeDefinitionEgg,
    type ExternalBehavioralEventTypeDefinitionPatch as ExternalBehavioralEventTypeDefinitionPatch,
    type FiscalQuarter as FiscalQuarter,
    type FiscalYear as FiscalYear,
    type IndexedTimePoint as IndexedTimePoint,
    type IndexOffset as IndexOffset,
    type MonthReference as MonthReference,
    type MultiStringPropertyOperation as MultiStringPropertyOperation,
    type NowReference as NowReference,
    type NumberPropertyOperation as NumberPropertyOperation,
    type NumOccurrencesRefineBy as NumOccurrencesRefineBy,
    type PropertyFilter as PropertyFilter,
    type PropertyReferencedTime as PropertyReferencedTime,
    type QuarterReference as QuarterReference,
    type RangedDatePropertyOperation as RangedDatePropertyOperation,
    type RangedNumberPropertyOperation as RangedNumberPropertyOperation,
    type RangedTimeOperation as RangedTimeOperation,
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
    type EventDefinitionCreateParams as EventDefinitionCreateParams,
    type EventDefinitionUpdateParams as EventDefinitionUpdateParams,
    type EventDefinitionListParams as EventDefinitionListParams,
    type EventDefinitionCreatePropertyParams as EventDefinitionCreatePropertyParams,
    type EventDefinitionDeletePropertyParams as EventDefinitionDeletePropertyParams,
    type EventDefinitionUpdatePropertyParams as EventDefinitionUpdatePropertyParams,
  };
}
