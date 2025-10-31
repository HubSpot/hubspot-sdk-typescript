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
   * const eventDefinition =
   *   await client.events.eventDefinitions.create({
   *     label: 'label',
   *     propertyDefinitions: [{ label: 'label', type: 'type' }],
   *   });
   * ```
   */
  create(
    body: EventDefinitionCreateParams,
    options?: RequestOptions,
  ): APIPromise<EventDefinitionCreateResponse> {
    return this._client.post('/events/v3/event-definitions', { body, ...options });
  }

  /**
   * Update a specific custom event definition by name.
   *
   * @example
   * ```ts
   * const eventDefinition =
   *   await client.events.eventDefinitions.update('eventName');
   * ```
   */
  update(
    eventName: string,
    body: EventDefinitionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventDefinitionUpdateResponse> {
    return this._client.patch(path`/events/v3/event-definitions/${eventName}`, { body, ...options });
  }

  /**
   * Retrieve existing custom event definitions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const eventDefinitionListResponse of client.events.eventDefinitions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventDefinitionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventDefinitionListResponsesPage, EventDefinitionListResponse> {
    return this._client.getAPIList('/events/v3/event-definitions', Page<EventDefinitionListResponse>, {
      query,
      ...options,
    });
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
   * const eventDefinition =
   *   await client.events.eventDefinitions.get('eventName');
   * ```
   */
  get(eventName: string, options?: RequestOptions): APIPromise<EventDefinitionGetResponse> {
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

export type EventDefinitionListResponsesPage = Page<EventDefinitionListResponse>;

export interface EventDefinitionCreateResponse {
  id: string;

  archived: boolean;

  associations: Array<EventDefinitionCreateResponse.Association>;

  fullyQualifiedName: string;

  labels: EventDefinitionCreateResponse.Labels;

  name: string;

  objectTypeId: string;

  properties: Array<Shared.Property>;

  comboEventRules?: EventDefinitionCreateResponse.ComboEventRules;

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

export namespace EventDefinitionCreateResponse {
  /**
   * The definition of an association
   */
  export interface Association {
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

  export interface Labels {
    singular: string;

    plural?: string;
  }

  export interface ComboEventRules {
    composingRules: Array<ComboEventRules.ComposingRule>;

    operationType: 'AND' | 'OR';

    ruleBranches: Array<unknown>;
  }

  export namespace ComboEventRules {
    export interface ComposingRule {
      count: number;

      eventTypeId: string;

      propertyFilters: Array<ComposingRule.PropertyFilter>;

      lookbackWindowDays?: number;
    }

    export namespace ComposingRule {
      export interface PropertyFilter {
        filterType: 'PROPERTY';

        operation:
          | PropertyFilter.EventsEventdefinitionsBoolPropertyOperation
          | PropertyFilter.EventsEventdefinitionsNumberPropertyOperation
          | PropertyFilter.EventsEventdefinitionsStringPropertyOperation
          | PropertyFilter.EventsEventdefinitionsDateTimePropertyOperation
          | PropertyFilter.EventsEventdefinitionsRangedDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsComparativeDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsComparativePropertyUpdatedOperation
          | PropertyFilter.EventsEventdefinitionsRollingDateRangePropertyOperation
          | PropertyFilter.EventsEventdefinitionsRollingPropertyUpdatedOperation
          | PropertyFilter.EventsEventdefinitionsEnumerationPropertyOperation
          | PropertyFilter.EventsEventdefinitionsAllPropertyTypesOperation
          | PropertyFilter.EventsEventdefinitionsRangedNumberPropertyOperation
          | PropertyFilter.EventsEventdefinitionsMultiStringPropertyOperation
          | PropertyFilter.EventsEventdefinitionsDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsCalendarDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsTimePointOperation
          | PropertyFilter.EventsEventdefinitionsRangedTimeOperation;

        property: string;

        frameworkFilterId?: number;
      }

      export namespace PropertyFilter {
        export interface EventsEventdefinitionsBoolPropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO' | 'HAS_EVER_BEEN_EQUAL_TO' | 'HAS_NEVER_BEEN_EQUAL_TO';

          operatorName: string;

          propertyType: 'bool';

          value: boolean;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsNumberPropertyOperation {
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

        export interface EventsEventdefinitionsStringPropertyOperation {
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

        export interface EventsEventdefinitionsDateTimePropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER' | 'IS_EQUAL_TO' | 'IS_BEFORE_DATE' | 'IS_AFTER_DATE';

          operatorName: string;

          propertyType: 'datetime';

          requiresTimeZoneConversion: boolean;

          timestamp: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsRangedDatePropertyOperation {
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

        export interface EventsEventdefinitionsComparativeDatePropertyOperation {
          comparisonPropertyName: string;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER';

          operatorName: string;

          propertyType: 'datetime-comparative';

          defaultComparisonValue?: string;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsComparativePropertyUpdatedOperation {
          comparisonPropertyName: string;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER';

          operatorName: string;

          propertyType: 'property-updated-comparative';

          defaultComparisonValue?: string;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsRollingDateRangePropertyOperation {
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

        export interface EventsEventdefinitionsRollingPropertyUpdatedOperation {
          includeObjectsWithNoValueSet: boolean;

          numberOfDays: number;

          operationType: string;

          operator: 'UPDATED_IN_LAST_X_DAYS' | 'NOT_UPDATED_IN_LAST_X_DAYS';

          operatorName: string;

          propertyType: 'rolling-property-updated';

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsEnumerationPropertyOperation {
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

        export interface EventsEventdefinitionsAllPropertyTypesOperation {
          coalescingRefineBy:
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsNumOccurrencesRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsSetOccurrencesRefineBy;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_KNOWN' | 'IS_UNKNOWN' | 'IS_BLANK' | 'IS_NOT_BLANK';

          operatorName: string;

          propertyType: 'alltypes';

          defaultValue?: string;

          pruningRefineBy?:
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRelativeComparativeTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRelativeRangedTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAbsoluteRangedTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAllHistoryRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsTimePointOperation
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRangedTimeOperation;
        }

        export namespace EventsEventdefinitionsAllPropertyTypesOperation {
          export interface EventsEventdefinitionsNumOccurrencesRefineBy {
            type: 'NumOccurrencesRefineBy';

            maxOccurrences?: number;

            minOccurrences?: number;
          }

          export interface EventsEventdefinitionsSetOccurrencesRefineBy {
            setType:
              | 'ALL'
              | 'ALL_INCLUDE_EMPTY'
              | 'ANY'
              | 'NONE'
              | 'NONE_EXCLUDE_EMPTY'
              | 'ANY_INCLUDE_EMPTY';

            type: 'SetOccurrencesRefineBy';
          }

          export interface EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timeOffset: EventsEventdefinitionsRelativeComparativeTimestampRefineBy.TimeOffset;

            type: 'RelativeComparativeTimestampRefineBy';
          }

          export namespace EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            export interface TimeOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            lowerBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.LowerBoundOffset;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'RelativeRangedTimestampRefineBy';

            upperBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.UpperBoundOffset;
          }

          export namespace EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            export interface LowerBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }

            export interface UpperBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timestamp: number;

            type: 'AbsoluteComparativeTimestampRefineBy';
          }

          export interface EventsEventdefinitionsAbsoluteRangedTimestampRefineBy {
            lowerTimestamp: number;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'AbsoluteRangedTimestampRefineBy';

            upperTimestamp: number;
          }

          export interface EventsEventdefinitionsAllHistoryRefineBy {
            type: 'AllHistoryRefineBy';
          }

          export interface EventsEventdefinitionsTimePointOperation {
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

            timePoint:
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

            type: string;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsTimePointOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }

          export interface EventsEventdefinitionsRangedTimeOperation {
            includeObjectsWithNoValueSet: boolean;

            lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

            lowerBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

            upperBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsRangedTimeOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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

            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }
        }

        export interface EventsEventdefinitionsRangedNumberPropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          lowerBound: number;

          operationType: string;

          operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN';

          operatorName: string;

          propertyType: 'number-ranged';

          upperBound: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsMultiStringPropertyOperation {
          coalescingRefineBy:
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsNumOccurrencesRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsSetOccurrencesRefineBy;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator:
            | 'IS_EQUAL_TO'
            | 'IS_NOT_EQUAL_TO'
            | 'CONTAINS'
            | 'DOES_NOT_CONTAIN'
            | 'STARTS_WITH'
            | 'ENDS_WITH';

          operatorName: string;

          propertyType: 'multistring';

          values: Array<string>;

          defaultValue?: string;

          pruningRefineBy?:
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRelativeComparativeTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRelativeRangedTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAbsoluteRangedTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAllHistoryRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsTimePointOperation
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRangedTimeOperation;
        }

        export namespace EventsEventdefinitionsMultiStringPropertyOperation {
          export interface EventsEventdefinitionsNumOccurrencesRefineBy {
            type: 'NumOccurrencesRefineBy';

            maxOccurrences?: number;

            minOccurrences?: number;
          }

          export interface EventsEventdefinitionsSetOccurrencesRefineBy {
            setType:
              | 'ALL'
              | 'ALL_INCLUDE_EMPTY'
              | 'ANY'
              | 'NONE'
              | 'NONE_EXCLUDE_EMPTY'
              | 'ANY_INCLUDE_EMPTY';

            type: 'SetOccurrencesRefineBy';
          }

          export interface EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timeOffset: EventsEventdefinitionsRelativeComparativeTimestampRefineBy.TimeOffset;

            type: 'RelativeComparativeTimestampRefineBy';
          }

          export namespace EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            export interface TimeOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            lowerBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.LowerBoundOffset;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'RelativeRangedTimestampRefineBy';

            upperBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.UpperBoundOffset;
          }

          export namespace EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            export interface LowerBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }

            export interface UpperBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timestamp: number;

            type: 'AbsoluteComparativeTimestampRefineBy';
          }

          export interface EventsEventdefinitionsAbsoluteRangedTimestampRefineBy {
            lowerTimestamp: number;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'AbsoluteRangedTimestampRefineBy';

            upperTimestamp: number;
          }

          export interface EventsEventdefinitionsAllHistoryRefineBy {
            type: 'AllHistoryRefineBy';
          }

          export interface EventsEventdefinitionsTimePointOperation {
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

            timePoint:
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

            type: string;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsTimePointOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }

          export interface EventsEventdefinitionsRangedTimeOperation {
            includeObjectsWithNoValueSet: boolean;

            lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

            lowerBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

            upperBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsRangedTimeOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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

            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }
        }

        export interface EventsEventdefinitionsDatePropertyOperation {
          day: number;

          includeObjectsWithNoValueSet: boolean;

          month:
            | 'JAN'
            | 'FEB'
            | 'MAR'
            | 'APR'
            | 'MAY'
            | 'JUN'
            | 'JUL'
            | 'AUG'
            | 'SEP'
            | 'OCT'
            | 'NOV'
            | 'DEC';

          operationType: string;

          operator: 'EQUAL' | 'BEFORE' | 'AFTER';

          operatorName: string;

          propertyType: 'date';

          year: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsCalendarDatePropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator:
            | 'IN_THIS_TIME_UNIT'
            | 'IN_THIS_TIME_UNIT_SO_FAR'
            | 'IN_NEXT_TIME_UNIT'
            | 'IN_LAST_TIME_UNIT';

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

        export interface EventsEventdefinitionsTimePointOperation {
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

          timePoint:
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

          type: string;

          defaultValue?: string;
        }

        export namespace EventsEventdefinitionsTimePointOperation {
          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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
        }

        export interface EventsEventdefinitionsRangedTimeOperation {
          includeObjectsWithNoValueSet: boolean;

          lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

          lowerBoundTimePoint:
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

          upperBoundTimePoint:
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

          defaultValue?: string;
        }

        export namespace EventsEventdefinitionsRangedTimeOperation {
          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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

          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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
        }
      }
    }
  }
}

export interface EventDefinitionUpdateResponse {
  id: string;

  archived: boolean;

  associations: Array<EventDefinitionUpdateResponse.Association>;

  fullyQualifiedName: string;

  labels: EventDefinitionUpdateResponse.Labels;

  name: string;

  objectTypeId: string;

  properties: Array<Shared.Property>;

  comboEventRules?: EventDefinitionUpdateResponse.ComboEventRules;

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

export namespace EventDefinitionUpdateResponse {
  /**
   * The definition of an association
   */
  export interface Association {
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

  export interface Labels {
    singular: string;

    plural?: string;
  }

  export interface ComboEventRules {
    composingRules: Array<ComboEventRules.ComposingRule>;

    operationType: 'AND' | 'OR';

    ruleBranches: Array<unknown>;
  }

  export namespace ComboEventRules {
    export interface ComposingRule {
      count: number;

      eventTypeId: string;

      propertyFilters: Array<ComposingRule.PropertyFilter>;

      lookbackWindowDays?: number;
    }

    export namespace ComposingRule {
      export interface PropertyFilter {
        filterType: 'PROPERTY';

        operation:
          | PropertyFilter.EventsEventdefinitionsBoolPropertyOperation
          | PropertyFilter.EventsEventdefinitionsNumberPropertyOperation
          | PropertyFilter.EventsEventdefinitionsStringPropertyOperation
          | PropertyFilter.EventsEventdefinitionsDateTimePropertyOperation
          | PropertyFilter.EventsEventdefinitionsRangedDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsComparativeDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsComparativePropertyUpdatedOperation
          | PropertyFilter.EventsEventdefinitionsRollingDateRangePropertyOperation
          | PropertyFilter.EventsEventdefinitionsRollingPropertyUpdatedOperation
          | PropertyFilter.EventsEventdefinitionsEnumerationPropertyOperation
          | PropertyFilter.EventsEventdefinitionsAllPropertyTypesOperation
          | PropertyFilter.EventsEventdefinitionsRangedNumberPropertyOperation
          | PropertyFilter.EventsEventdefinitionsMultiStringPropertyOperation
          | PropertyFilter.EventsEventdefinitionsDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsCalendarDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsTimePointOperation
          | PropertyFilter.EventsEventdefinitionsRangedTimeOperation;

        property: string;

        frameworkFilterId?: number;
      }

      export namespace PropertyFilter {
        export interface EventsEventdefinitionsBoolPropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO' | 'HAS_EVER_BEEN_EQUAL_TO' | 'HAS_NEVER_BEEN_EQUAL_TO';

          operatorName: string;

          propertyType: 'bool';

          value: boolean;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsNumberPropertyOperation {
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

        export interface EventsEventdefinitionsStringPropertyOperation {
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

        export interface EventsEventdefinitionsDateTimePropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER' | 'IS_EQUAL_TO' | 'IS_BEFORE_DATE' | 'IS_AFTER_DATE';

          operatorName: string;

          propertyType: 'datetime';

          requiresTimeZoneConversion: boolean;

          timestamp: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsRangedDatePropertyOperation {
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

        export interface EventsEventdefinitionsComparativeDatePropertyOperation {
          comparisonPropertyName: string;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER';

          operatorName: string;

          propertyType: 'datetime-comparative';

          defaultComparisonValue?: string;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsComparativePropertyUpdatedOperation {
          comparisonPropertyName: string;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER';

          operatorName: string;

          propertyType: 'property-updated-comparative';

          defaultComparisonValue?: string;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsRollingDateRangePropertyOperation {
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

        export interface EventsEventdefinitionsRollingPropertyUpdatedOperation {
          includeObjectsWithNoValueSet: boolean;

          numberOfDays: number;

          operationType: string;

          operator: 'UPDATED_IN_LAST_X_DAYS' | 'NOT_UPDATED_IN_LAST_X_DAYS';

          operatorName: string;

          propertyType: 'rolling-property-updated';

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsEnumerationPropertyOperation {
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

        export interface EventsEventdefinitionsAllPropertyTypesOperation {
          coalescingRefineBy:
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsNumOccurrencesRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsSetOccurrencesRefineBy;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_KNOWN' | 'IS_UNKNOWN' | 'IS_BLANK' | 'IS_NOT_BLANK';

          operatorName: string;

          propertyType: 'alltypes';

          defaultValue?: string;

          pruningRefineBy?:
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRelativeComparativeTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRelativeRangedTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAbsoluteRangedTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAllHistoryRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsTimePointOperation
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRangedTimeOperation;
        }

        export namespace EventsEventdefinitionsAllPropertyTypesOperation {
          export interface EventsEventdefinitionsNumOccurrencesRefineBy {
            type: 'NumOccurrencesRefineBy';

            maxOccurrences?: number;

            minOccurrences?: number;
          }

          export interface EventsEventdefinitionsSetOccurrencesRefineBy {
            setType:
              | 'ALL'
              | 'ALL_INCLUDE_EMPTY'
              | 'ANY'
              | 'NONE'
              | 'NONE_EXCLUDE_EMPTY'
              | 'ANY_INCLUDE_EMPTY';

            type: 'SetOccurrencesRefineBy';
          }

          export interface EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timeOffset: EventsEventdefinitionsRelativeComparativeTimestampRefineBy.TimeOffset;

            type: 'RelativeComparativeTimestampRefineBy';
          }

          export namespace EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            export interface TimeOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            lowerBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.LowerBoundOffset;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'RelativeRangedTimestampRefineBy';

            upperBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.UpperBoundOffset;
          }

          export namespace EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            export interface LowerBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }

            export interface UpperBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timestamp: number;

            type: 'AbsoluteComparativeTimestampRefineBy';
          }

          export interface EventsEventdefinitionsAbsoluteRangedTimestampRefineBy {
            lowerTimestamp: number;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'AbsoluteRangedTimestampRefineBy';

            upperTimestamp: number;
          }

          export interface EventsEventdefinitionsAllHistoryRefineBy {
            type: 'AllHistoryRefineBy';
          }

          export interface EventsEventdefinitionsTimePointOperation {
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

            timePoint:
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

            type: string;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsTimePointOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }

          export interface EventsEventdefinitionsRangedTimeOperation {
            includeObjectsWithNoValueSet: boolean;

            lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

            lowerBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

            upperBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsRangedTimeOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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

            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }
        }

        export interface EventsEventdefinitionsRangedNumberPropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          lowerBound: number;

          operationType: string;

          operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN';

          operatorName: string;

          propertyType: 'number-ranged';

          upperBound: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsMultiStringPropertyOperation {
          coalescingRefineBy:
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsNumOccurrencesRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsSetOccurrencesRefineBy;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator:
            | 'IS_EQUAL_TO'
            | 'IS_NOT_EQUAL_TO'
            | 'CONTAINS'
            | 'DOES_NOT_CONTAIN'
            | 'STARTS_WITH'
            | 'ENDS_WITH';

          operatorName: string;

          propertyType: 'multistring';

          values: Array<string>;

          defaultValue?: string;

          pruningRefineBy?:
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRelativeComparativeTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRelativeRangedTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAbsoluteRangedTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAllHistoryRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsTimePointOperation
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRangedTimeOperation;
        }

        export namespace EventsEventdefinitionsMultiStringPropertyOperation {
          export interface EventsEventdefinitionsNumOccurrencesRefineBy {
            type: 'NumOccurrencesRefineBy';

            maxOccurrences?: number;

            minOccurrences?: number;
          }

          export interface EventsEventdefinitionsSetOccurrencesRefineBy {
            setType:
              | 'ALL'
              | 'ALL_INCLUDE_EMPTY'
              | 'ANY'
              | 'NONE'
              | 'NONE_EXCLUDE_EMPTY'
              | 'ANY_INCLUDE_EMPTY';

            type: 'SetOccurrencesRefineBy';
          }

          export interface EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timeOffset: EventsEventdefinitionsRelativeComparativeTimestampRefineBy.TimeOffset;

            type: 'RelativeComparativeTimestampRefineBy';
          }

          export namespace EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            export interface TimeOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            lowerBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.LowerBoundOffset;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'RelativeRangedTimestampRefineBy';

            upperBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.UpperBoundOffset;
          }

          export namespace EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            export interface LowerBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }

            export interface UpperBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timestamp: number;

            type: 'AbsoluteComparativeTimestampRefineBy';
          }

          export interface EventsEventdefinitionsAbsoluteRangedTimestampRefineBy {
            lowerTimestamp: number;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'AbsoluteRangedTimestampRefineBy';

            upperTimestamp: number;
          }

          export interface EventsEventdefinitionsAllHistoryRefineBy {
            type: 'AllHistoryRefineBy';
          }

          export interface EventsEventdefinitionsTimePointOperation {
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

            timePoint:
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

            type: string;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsTimePointOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }

          export interface EventsEventdefinitionsRangedTimeOperation {
            includeObjectsWithNoValueSet: boolean;

            lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

            lowerBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

            upperBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsRangedTimeOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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

            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }
        }

        export interface EventsEventdefinitionsDatePropertyOperation {
          day: number;

          includeObjectsWithNoValueSet: boolean;

          month:
            | 'JAN'
            | 'FEB'
            | 'MAR'
            | 'APR'
            | 'MAY'
            | 'JUN'
            | 'JUL'
            | 'AUG'
            | 'SEP'
            | 'OCT'
            | 'NOV'
            | 'DEC';

          operationType: string;

          operator: 'EQUAL' | 'BEFORE' | 'AFTER';

          operatorName: string;

          propertyType: 'date';

          year: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsCalendarDatePropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator:
            | 'IN_THIS_TIME_UNIT'
            | 'IN_THIS_TIME_UNIT_SO_FAR'
            | 'IN_NEXT_TIME_UNIT'
            | 'IN_LAST_TIME_UNIT';

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

        export interface EventsEventdefinitionsTimePointOperation {
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

          timePoint:
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

          type: string;

          defaultValue?: string;
        }

        export namespace EventsEventdefinitionsTimePointOperation {
          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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
        }

        export interface EventsEventdefinitionsRangedTimeOperation {
          includeObjectsWithNoValueSet: boolean;

          lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

          lowerBoundTimePoint:
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

          upperBoundTimePoint:
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

          defaultValue?: string;
        }

        export namespace EventsEventdefinitionsRangedTimeOperation {
          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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

          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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
        }
      }
    }
  }
}

export interface EventDefinitionListResponse {
  id: string;

  archived: boolean;

  associations: Array<EventDefinitionListResponse.Association>;

  fullyQualifiedName: string;

  labels: EventDefinitionListResponse.Labels;

  name: string;

  objectTypeId: string;

  properties: Array<Shared.Property>;

  comboEventRules?: EventDefinitionListResponse.ComboEventRules;

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

export namespace EventDefinitionListResponse {
  /**
   * The definition of an association
   */
  export interface Association {
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

  export interface Labels {
    singular: string;

    plural?: string;
  }

  export interface ComboEventRules {
    composingRules: Array<ComboEventRules.ComposingRule>;

    operationType: 'AND' | 'OR';

    ruleBranches: Array<unknown>;
  }

  export namespace ComboEventRules {
    export interface ComposingRule {
      count: number;

      eventTypeId: string;

      propertyFilters: Array<ComposingRule.PropertyFilter>;

      lookbackWindowDays?: number;
    }

    export namespace ComposingRule {
      export interface PropertyFilter {
        filterType: 'PROPERTY';

        operation:
          | PropertyFilter.EventsEventdefinitionsBoolPropertyOperation
          | PropertyFilter.EventsEventdefinitionsNumberPropertyOperation
          | PropertyFilter.EventsEventdefinitionsStringPropertyOperation
          | PropertyFilter.EventsEventdefinitionsDateTimePropertyOperation
          | PropertyFilter.EventsEventdefinitionsRangedDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsComparativeDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsComparativePropertyUpdatedOperation
          | PropertyFilter.EventsEventdefinitionsRollingDateRangePropertyOperation
          | PropertyFilter.EventsEventdefinitionsRollingPropertyUpdatedOperation
          | PropertyFilter.EventsEventdefinitionsEnumerationPropertyOperation
          | PropertyFilter.EventsEventdefinitionsAllPropertyTypesOperation
          | PropertyFilter.EventsEventdefinitionsRangedNumberPropertyOperation
          | PropertyFilter.EventsEventdefinitionsMultiStringPropertyOperation
          | PropertyFilter.EventsEventdefinitionsDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsCalendarDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsTimePointOperation
          | PropertyFilter.EventsEventdefinitionsRangedTimeOperation;

        property: string;

        frameworkFilterId?: number;
      }

      export namespace PropertyFilter {
        export interface EventsEventdefinitionsBoolPropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO' | 'HAS_EVER_BEEN_EQUAL_TO' | 'HAS_NEVER_BEEN_EQUAL_TO';

          operatorName: string;

          propertyType: 'bool';

          value: boolean;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsNumberPropertyOperation {
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

        export interface EventsEventdefinitionsStringPropertyOperation {
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

        export interface EventsEventdefinitionsDateTimePropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER' | 'IS_EQUAL_TO' | 'IS_BEFORE_DATE' | 'IS_AFTER_DATE';

          operatorName: string;

          propertyType: 'datetime';

          requiresTimeZoneConversion: boolean;

          timestamp: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsRangedDatePropertyOperation {
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

        export interface EventsEventdefinitionsComparativeDatePropertyOperation {
          comparisonPropertyName: string;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER';

          operatorName: string;

          propertyType: 'datetime-comparative';

          defaultComparisonValue?: string;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsComparativePropertyUpdatedOperation {
          comparisonPropertyName: string;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER';

          operatorName: string;

          propertyType: 'property-updated-comparative';

          defaultComparisonValue?: string;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsRollingDateRangePropertyOperation {
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

        export interface EventsEventdefinitionsRollingPropertyUpdatedOperation {
          includeObjectsWithNoValueSet: boolean;

          numberOfDays: number;

          operationType: string;

          operator: 'UPDATED_IN_LAST_X_DAYS' | 'NOT_UPDATED_IN_LAST_X_DAYS';

          operatorName: string;

          propertyType: 'rolling-property-updated';

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsEnumerationPropertyOperation {
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

        export interface EventsEventdefinitionsAllPropertyTypesOperation {
          coalescingRefineBy:
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsNumOccurrencesRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsSetOccurrencesRefineBy;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_KNOWN' | 'IS_UNKNOWN' | 'IS_BLANK' | 'IS_NOT_BLANK';

          operatorName: string;

          propertyType: 'alltypes';

          defaultValue?: string;

          pruningRefineBy?:
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRelativeComparativeTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRelativeRangedTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAbsoluteRangedTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAllHistoryRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsTimePointOperation
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRangedTimeOperation;
        }

        export namespace EventsEventdefinitionsAllPropertyTypesOperation {
          export interface EventsEventdefinitionsNumOccurrencesRefineBy {
            type: 'NumOccurrencesRefineBy';

            maxOccurrences?: number;

            minOccurrences?: number;
          }

          export interface EventsEventdefinitionsSetOccurrencesRefineBy {
            setType:
              | 'ALL'
              | 'ALL_INCLUDE_EMPTY'
              | 'ANY'
              | 'NONE'
              | 'NONE_EXCLUDE_EMPTY'
              | 'ANY_INCLUDE_EMPTY';

            type: 'SetOccurrencesRefineBy';
          }

          export interface EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timeOffset: EventsEventdefinitionsRelativeComparativeTimestampRefineBy.TimeOffset;

            type: 'RelativeComparativeTimestampRefineBy';
          }

          export namespace EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            export interface TimeOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            lowerBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.LowerBoundOffset;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'RelativeRangedTimestampRefineBy';

            upperBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.UpperBoundOffset;
          }

          export namespace EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            export interface LowerBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }

            export interface UpperBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timestamp: number;

            type: 'AbsoluteComparativeTimestampRefineBy';
          }

          export interface EventsEventdefinitionsAbsoluteRangedTimestampRefineBy {
            lowerTimestamp: number;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'AbsoluteRangedTimestampRefineBy';

            upperTimestamp: number;
          }

          export interface EventsEventdefinitionsAllHistoryRefineBy {
            type: 'AllHistoryRefineBy';
          }

          export interface EventsEventdefinitionsTimePointOperation {
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

            timePoint:
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

            type: string;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsTimePointOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }

          export interface EventsEventdefinitionsRangedTimeOperation {
            includeObjectsWithNoValueSet: boolean;

            lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

            lowerBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

            upperBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsRangedTimeOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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

            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }
        }

        export interface EventsEventdefinitionsRangedNumberPropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          lowerBound: number;

          operationType: string;

          operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN';

          operatorName: string;

          propertyType: 'number-ranged';

          upperBound: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsMultiStringPropertyOperation {
          coalescingRefineBy:
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsNumOccurrencesRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsSetOccurrencesRefineBy;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator:
            | 'IS_EQUAL_TO'
            | 'IS_NOT_EQUAL_TO'
            | 'CONTAINS'
            | 'DOES_NOT_CONTAIN'
            | 'STARTS_WITH'
            | 'ENDS_WITH';

          operatorName: string;

          propertyType: 'multistring';

          values: Array<string>;

          defaultValue?: string;

          pruningRefineBy?:
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRelativeComparativeTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRelativeRangedTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAbsoluteRangedTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAllHistoryRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsTimePointOperation
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRangedTimeOperation;
        }

        export namespace EventsEventdefinitionsMultiStringPropertyOperation {
          export interface EventsEventdefinitionsNumOccurrencesRefineBy {
            type: 'NumOccurrencesRefineBy';

            maxOccurrences?: number;

            minOccurrences?: number;
          }

          export interface EventsEventdefinitionsSetOccurrencesRefineBy {
            setType:
              | 'ALL'
              | 'ALL_INCLUDE_EMPTY'
              | 'ANY'
              | 'NONE'
              | 'NONE_EXCLUDE_EMPTY'
              | 'ANY_INCLUDE_EMPTY';

            type: 'SetOccurrencesRefineBy';
          }

          export interface EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timeOffset: EventsEventdefinitionsRelativeComparativeTimestampRefineBy.TimeOffset;

            type: 'RelativeComparativeTimestampRefineBy';
          }

          export namespace EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            export interface TimeOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            lowerBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.LowerBoundOffset;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'RelativeRangedTimestampRefineBy';

            upperBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.UpperBoundOffset;
          }

          export namespace EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            export interface LowerBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }

            export interface UpperBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timestamp: number;

            type: 'AbsoluteComparativeTimestampRefineBy';
          }

          export interface EventsEventdefinitionsAbsoluteRangedTimestampRefineBy {
            lowerTimestamp: number;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'AbsoluteRangedTimestampRefineBy';

            upperTimestamp: number;
          }

          export interface EventsEventdefinitionsAllHistoryRefineBy {
            type: 'AllHistoryRefineBy';
          }

          export interface EventsEventdefinitionsTimePointOperation {
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

            timePoint:
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

            type: string;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsTimePointOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }

          export interface EventsEventdefinitionsRangedTimeOperation {
            includeObjectsWithNoValueSet: boolean;

            lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

            lowerBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

            upperBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsRangedTimeOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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

            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }
        }

        export interface EventsEventdefinitionsDatePropertyOperation {
          day: number;

          includeObjectsWithNoValueSet: boolean;

          month:
            | 'JAN'
            | 'FEB'
            | 'MAR'
            | 'APR'
            | 'MAY'
            | 'JUN'
            | 'JUL'
            | 'AUG'
            | 'SEP'
            | 'OCT'
            | 'NOV'
            | 'DEC';

          operationType: string;

          operator: 'EQUAL' | 'BEFORE' | 'AFTER';

          operatorName: string;

          propertyType: 'date';

          year: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsCalendarDatePropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator:
            | 'IN_THIS_TIME_UNIT'
            | 'IN_THIS_TIME_UNIT_SO_FAR'
            | 'IN_NEXT_TIME_UNIT'
            | 'IN_LAST_TIME_UNIT';

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

        export interface EventsEventdefinitionsTimePointOperation {
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

          timePoint:
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

          type: string;

          defaultValue?: string;
        }

        export namespace EventsEventdefinitionsTimePointOperation {
          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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
        }

        export interface EventsEventdefinitionsRangedTimeOperation {
          includeObjectsWithNoValueSet: boolean;

          lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

          lowerBoundTimePoint:
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

          upperBoundTimePoint:
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

          defaultValue?: string;
        }

        export namespace EventsEventdefinitionsRangedTimeOperation {
          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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

          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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
        }
      }
    }
  }
}

export interface EventDefinitionGetResponse {
  id: string;

  archived: boolean;

  associations: Array<EventDefinitionGetResponse.Association>;

  fullyQualifiedName: string;

  labels: EventDefinitionGetResponse.Labels;

  name: string;

  objectTypeId: string;

  properties: Array<Shared.Property>;

  comboEventRules?: EventDefinitionGetResponse.ComboEventRules;

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

export namespace EventDefinitionGetResponse {
  /**
   * The definition of an association
   */
  export interface Association {
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

  export interface Labels {
    singular: string;

    plural?: string;
  }

  export interface ComboEventRules {
    composingRules: Array<ComboEventRules.ComposingRule>;

    operationType: 'AND' | 'OR';

    ruleBranches: Array<unknown>;
  }

  export namespace ComboEventRules {
    export interface ComposingRule {
      count: number;

      eventTypeId: string;

      propertyFilters: Array<ComposingRule.PropertyFilter>;

      lookbackWindowDays?: number;
    }

    export namespace ComposingRule {
      export interface PropertyFilter {
        filterType: 'PROPERTY';

        operation:
          | PropertyFilter.EventsEventdefinitionsBoolPropertyOperation
          | PropertyFilter.EventsEventdefinitionsNumberPropertyOperation
          | PropertyFilter.EventsEventdefinitionsStringPropertyOperation
          | PropertyFilter.EventsEventdefinitionsDateTimePropertyOperation
          | PropertyFilter.EventsEventdefinitionsRangedDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsComparativeDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsComparativePropertyUpdatedOperation
          | PropertyFilter.EventsEventdefinitionsRollingDateRangePropertyOperation
          | PropertyFilter.EventsEventdefinitionsRollingPropertyUpdatedOperation
          | PropertyFilter.EventsEventdefinitionsEnumerationPropertyOperation
          | PropertyFilter.EventsEventdefinitionsAllPropertyTypesOperation
          | PropertyFilter.EventsEventdefinitionsRangedNumberPropertyOperation
          | PropertyFilter.EventsEventdefinitionsMultiStringPropertyOperation
          | PropertyFilter.EventsEventdefinitionsDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsCalendarDatePropertyOperation
          | PropertyFilter.EventsEventdefinitionsTimePointOperation
          | PropertyFilter.EventsEventdefinitionsRangedTimeOperation;

        property: string;

        frameworkFilterId?: number;
      }

      export namespace PropertyFilter {
        export interface EventsEventdefinitionsBoolPropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO' | 'HAS_EVER_BEEN_EQUAL_TO' | 'HAS_NEVER_BEEN_EQUAL_TO';

          operatorName: string;

          propertyType: 'bool';

          value: boolean;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsNumberPropertyOperation {
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

        export interface EventsEventdefinitionsStringPropertyOperation {
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

        export interface EventsEventdefinitionsDateTimePropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER' | 'IS_EQUAL_TO' | 'IS_BEFORE_DATE' | 'IS_AFTER_DATE';

          operatorName: string;

          propertyType: 'datetime';

          requiresTimeZoneConversion: boolean;

          timestamp: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsRangedDatePropertyOperation {
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

        export interface EventsEventdefinitionsComparativeDatePropertyOperation {
          comparisonPropertyName: string;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER';

          operatorName: string;

          propertyType: 'datetime-comparative';

          defaultComparisonValue?: string;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsComparativePropertyUpdatedOperation {
          comparisonPropertyName: string;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_BEFORE' | 'IS_AFTER';

          operatorName: string;

          propertyType: 'property-updated-comparative';

          defaultComparisonValue?: string;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsRollingDateRangePropertyOperation {
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

        export interface EventsEventdefinitionsRollingPropertyUpdatedOperation {
          includeObjectsWithNoValueSet: boolean;

          numberOfDays: number;

          operationType: string;

          operator: 'UPDATED_IN_LAST_X_DAYS' | 'NOT_UPDATED_IN_LAST_X_DAYS';

          operatorName: string;

          propertyType: 'rolling-property-updated';

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsEnumerationPropertyOperation {
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

        export interface EventsEventdefinitionsAllPropertyTypesOperation {
          coalescingRefineBy:
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsNumOccurrencesRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsSetOccurrencesRefineBy;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator: 'IS_KNOWN' | 'IS_UNKNOWN' | 'IS_BLANK' | 'IS_NOT_BLANK';

          operatorName: string;

          propertyType: 'alltypes';

          defaultValue?: string;

          pruningRefineBy?:
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRelativeComparativeTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRelativeRangedTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAbsoluteRangedTimestampRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsAllHistoryRefineBy
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsTimePointOperation
            | EventsEventdefinitionsAllPropertyTypesOperation.EventsEventdefinitionsRangedTimeOperation;
        }

        export namespace EventsEventdefinitionsAllPropertyTypesOperation {
          export interface EventsEventdefinitionsNumOccurrencesRefineBy {
            type: 'NumOccurrencesRefineBy';

            maxOccurrences?: number;

            minOccurrences?: number;
          }

          export interface EventsEventdefinitionsSetOccurrencesRefineBy {
            setType:
              | 'ALL'
              | 'ALL_INCLUDE_EMPTY'
              | 'ANY'
              | 'NONE'
              | 'NONE_EXCLUDE_EMPTY'
              | 'ANY_INCLUDE_EMPTY';

            type: 'SetOccurrencesRefineBy';
          }

          export interface EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timeOffset: EventsEventdefinitionsRelativeComparativeTimestampRefineBy.TimeOffset;

            type: 'RelativeComparativeTimestampRefineBy';
          }

          export namespace EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            export interface TimeOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            lowerBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.LowerBoundOffset;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'RelativeRangedTimestampRefineBy';

            upperBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.UpperBoundOffset;
          }

          export namespace EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            export interface LowerBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }

            export interface UpperBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timestamp: number;

            type: 'AbsoluteComparativeTimestampRefineBy';
          }

          export interface EventsEventdefinitionsAbsoluteRangedTimestampRefineBy {
            lowerTimestamp: number;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'AbsoluteRangedTimestampRefineBy';

            upperTimestamp: number;
          }

          export interface EventsEventdefinitionsAllHistoryRefineBy {
            type: 'AllHistoryRefineBy';
          }

          export interface EventsEventdefinitionsTimePointOperation {
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

            timePoint:
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

            type: string;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsTimePointOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }

          export interface EventsEventdefinitionsRangedTimeOperation {
            includeObjectsWithNoValueSet: boolean;

            lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

            lowerBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

            upperBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsRangedTimeOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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

            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }
        }

        export interface EventsEventdefinitionsRangedNumberPropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          lowerBound: number;

          operationType: string;

          operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN';

          operatorName: string;

          propertyType: 'number-ranged';

          upperBound: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsMultiStringPropertyOperation {
          coalescingRefineBy:
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsNumOccurrencesRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsSetOccurrencesRefineBy;

          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator:
            | 'IS_EQUAL_TO'
            | 'IS_NOT_EQUAL_TO'
            | 'CONTAINS'
            | 'DOES_NOT_CONTAIN'
            | 'STARTS_WITH'
            | 'ENDS_WITH';

          operatorName: string;

          propertyType: 'multistring';

          values: Array<string>;

          defaultValue?: string;

          pruningRefineBy?:
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRelativeComparativeTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRelativeRangedTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAbsoluteRangedTimestampRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsAllHistoryRefineBy
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsTimePointOperation
            | EventsEventdefinitionsMultiStringPropertyOperation.EventsEventdefinitionsRangedTimeOperation;
        }

        export namespace EventsEventdefinitionsMultiStringPropertyOperation {
          export interface EventsEventdefinitionsNumOccurrencesRefineBy {
            type: 'NumOccurrencesRefineBy';

            maxOccurrences?: number;

            minOccurrences?: number;
          }

          export interface EventsEventdefinitionsSetOccurrencesRefineBy {
            setType:
              | 'ALL'
              | 'ALL_INCLUDE_EMPTY'
              | 'ANY'
              | 'NONE'
              | 'NONE_EXCLUDE_EMPTY'
              | 'ANY_INCLUDE_EMPTY';

            type: 'SetOccurrencesRefineBy';
          }

          export interface EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timeOffset: EventsEventdefinitionsRelativeComparativeTimestampRefineBy.TimeOffset;

            type: 'RelativeComparativeTimestampRefineBy';
          }

          export namespace EventsEventdefinitionsRelativeComparativeTimestampRefineBy {
            export interface TimeOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            lowerBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.LowerBoundOffset;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'RelativeRangedTimestampRefineBy';

            upperBoundOffset: EventsEventdefinitionsRelativeRangedTimestampRefineBy.UpperBoundOffset;
          }

          export namespace EventsEventdefinitionsRelativeRangedTimestampRefineBy {
            export interface LowerBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }

            export interface UpperBoundOffset {
              amount: number;

              offsetDirection: 'PAST' | 'FUTURE';

              timeUnit: 'WEEKS' | 'DAYS' | 'HOURS' | 'MINUTES';
            }
          }

          export interface EventsEventdefinitionsAbsoluteComparativeTimestampRefineBy {
            comparison: 'BEFORE' | 'AFTER';

            timestamp: number;

            type: 'AbsoluteComparativeTimestampRefineBy';
          }

          export interface EventsEventdefinitionsAbsoluteRangedTimestampRefineBy {
            lowerTimestamp: number;

            rangeType: 'BETWEEN' | 'NOT_BETWEEN';

            type: 'AbsoluteRangedTimestampRefineBy';

            upperTimestamp: number;
          }

          export interface EventsEventdefinitionsAllHistoryRefineBy {
            type: 'AllHistoryRefineBy';
          }

          export interface EventsEventdefinitionsTimePointOperation {
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

            timePoint:
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

            type: string;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsTimePointOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }

          export interface EventsEventdefinitionsRangedTimeOperation {
            includeObjectsWithNoValueSet: boolean;

            lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

            lowerBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

            upperBoundTimePoint:
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
              | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

            defaultValue?: string;
          }

          export namespace EventsEventdefinitionsRangedTimeOperation {
            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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

            export interface EventsEventdefinitionsDatePoint {
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

            export interface EventsEventdefinitionsIndexedTimePoint {
              indexReference:
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
                | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

              timeType: 'INDEXED';

              timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

              zoneId: string;

              offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
            }

            export namespace EventsEventdefinitionsIndexedTimePoint {
              export interface EventsEventdefinitionsNowReference {
                referenceType: 'NOW';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsTodayReference {
                referenceType: 'TODAY';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsWeekReference {
                dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

                referenceType: 'WEEK';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsMonthReference {
                day: number;

                referenceType: 'MONTH';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsQuarterReference {
                day: number;

                month: number;

                referenceType: 'QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalQuarter {
                day: number;

                month: number;

                referenceType: 'FISCAL_QUARTER';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsYearReference {
                day: number;

                month: number;

                referenceType: 'YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface EventsEventdefinitionsFiscalYear {
                day: number;

                month: number;

                referenceType: 'FISCAL_YEAR';

                hour?: number;

                millisecond?: number;

                minute?: number;

                second?: number;
              }

              export interface Offset {
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
            }

            export interface EventsEventdefinitionsPropertyReferencedTime {
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
          }
        }

        export interface EventsEventdefinitionsDatePropertyOperation {
          day: number;

          includeObjectsWithNoValueSet: boolean;

          month:
            | 'JAN'
            | 'FEB'
            | 'MAR'
            | 'APR'
            | 'MAY'
            | 'JUN'
            | 'JUL'
            | 'AUG'
            | 'SEP'
            | 'OCT'
            | 'NOV'
            | 'DEC';

          operationType: string;

          operator: 'EQUAL' | 'BEFORE' | 'AFTER';

          operatorName: string;

          propertyType: 'date';

          year: number;

          defaultValue?: string;
        }

        export interface EventsEventdefinitionsCalendarDatePropertyOperation {
          includeObjectsWithNoValueSet: boolean;

          operationType: string;

          operator:
            | 'IN_THIS_TIME_UNIT'
            | 'IN_THIS_TIME_UNIT_SO_FAR'
            | 'IN_NEXT_TIME_UNIT'
            | 'IN_LAST_TIME_UNIT';

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

        export interface EventsEventdefinitionsTimePointOperation {
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

          timePoint:
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsTimePointOperation.EventsEventdefinitionsPropertyReferencedTime;

          type: string;

          defaultValue?: string;
        }

        export namespace EventsEventdefinitionsTimePointOperation {
          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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
        }

        export interface EventsEventdefinitionsRangedTimeOperation {
          includeObjectsWithNoValueSet: boolean;

          lowerBoundEndpointBehavior: 'INCLUSIVE' | 'EXCLUSIVE';

          lowerBoundTimePoint:
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

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

          upperBoundTimePoint:
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsDatePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsIndexedTimePoint
            | EventsEventdefinitionsRangedTimeOperation.EventsEventdefinitionsPropertyReferencedTime;

          defaultValue?: string;
        }

        export namespace EventsEventdefinitionsRangedTimeOperation {
          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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

          export interface EventsEventdefinitionsDatePoint {
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

          export interface EventsEventdefinitionsIndexedTimePoint {
            indexReference:
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsNowReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsTodayReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsWeekReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsMonthReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsQuarterReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalQuarter
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsYearReference
              | EventsEventdefinitionsIndexedTimePoint.EventsEventdefinitionsFiscalYear;

            timeType: 'INDEXED';

            timezoneSource: 'CUSTOM' | 'USER' | 'PORTAL';

            zoneId: string;

            offset?: EventsEventdefinitionsIndexedTimePoint.Offset;
          }

          export namespace EventsEventdefinitionsIndexedTimePoint {
            export interface EventsEventdefinitionsNowReference {
              referenceType: 'NOW';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsTodayReference {
              referenceType: 'TODAY';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsWeekReference {
              dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

              referenceType: 'WEEK';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsMonthReference {
              day: number;

              referenceType: 'MONTH';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsQuarterReference {
              day: number;

              month: number;

              referenceType: 'QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalQuarter {
              day: number;

              month: number;

              referenceType: 'FISCAL_QUARTER';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsYearReference {
              day: number;

              month: number;

              referenceType: 'YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface EventsEventdefinitionsFiscalYear {
              day: number;

              month: number;

              referenceType: 'FISCAL_YEAR';

              hour?: number;

              millisecond?: number;

              minute?: number;

              second?: number;
            }

            export interface Offset {
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
          }

          export interface EventsEventdefinitionsPropertyReferencedTime {
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
        }
      }
    }
  }
}

export interface EventDefinitionCreateParams {
  /**
   * Human readable label for the event. Used in HubSpot UI
   */
  label: string;

  /**
   * List of custom properties on event
   */
  propertyDefinitions: Array<EventDefinitionCreateParams.PropertyDefinition>;

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

export namespace EventDefinitionCreateParams {
  export interface PropertyDefinition {
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
    type EventDefinitionCreateResponse as EventDefinitionCreateResponse,
    type EventDefinitionUpdateResponse as EventDefinitionUpdateResponse,
    type EventDefinitionListResponse as EventDefinitionListResponse,
    type EventDefinitionGetResponse as EventDefinitionGetResponse,
    type EventDefinitionListResponsesPage as EventDefinitionListResponsesPage,
    type EventDefinitionCreateParams as EventDefinitionCreateParams,
    type EventDefinitionUpdateParams as EventDefinitionUpdateParams,
    type EventDefinitionListParams as EventDefinitionListParams,
    type EventDefinitionCreatePropertyParams as EventDefinitionCreatePropertyParams,
    type EventDefinitionDeletePropertyParams as EventDefinitionDeletePropertyParams,
    type EventDefinitionUpdatePropertyParams as EventDefinitionUpdatePropertyParams,
  };
}
