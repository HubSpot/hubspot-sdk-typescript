// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Schemas extends APIResource {
  /**
   * Define a new object schema, along with custom properties and associations. The
   * entire object schema, including its object type ID, properties, and associations
   * will be returned in the response.
   *
   * @example
   * ```ts
   * const objectSchema =
   *   await client.crm.objects.schemas.create({
   *     associatedObjects: ['CONTACT'],
   *     labels: {},
   *     name: 'my_object',
   *     properties: [
   *       {
   *         fieldType: 'select',
   *         label: 'My object property',
   *         name: 'my_object_property',
   *         type: 'enumeration',
   *       },
   *     ],
   *     requiredProperties: ['my_object_property'],
   *   });
   * ```
   */
  create(body: SchemaCreateParams, options?: RequestOptions): APIPromise<ObjectSchema> {
    return this._client.post('/crm-object-schemas/v3/schemas', { body, ...options });
  }

  /**
   * Update the details for an existing object schema.
   *
   * @example
   * ```ts
   * const objectTypeDefinition =
   *   await client.crm.objects.schemas.update('objectType');
   * ```
   */
  update(
    objectType: string,
    body: SchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectTypeDefinition> {
    return this._client.patch(path`/crm-object-schemas/v3/schemas/${objectType}`, { body, ...options });
  }

  /**
   * Returns all object schemas that have been defined for your account.
   *
   * @example
   * ```ts
   * const collectionResponseObjectSchemaNoPaging =
   *   await client.crm.objects.schemas.list();
   * ```
   */
  list(
    query: SchemaListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.CollectionResponseObjectSchemaNoPaging> {
    return this._client.get('/crm-object-schemas/v3/schemas', { query, ...options });
  }

  /**
   * Deletes a schema. Any existing records of this schema must be deleted **first**.
   * Otherwise this call will fail.
   *
   * @example
   * ```ts
   * await client.crm.objects.schemas.delete('objectType');
   * ```
   */
  delete(
    objectType: string,
    params: SchemaDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/crm-object-schemas/v3/schemas/${objectType}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Defines a new association between the primary schema's object type and other
   * object types.
   *
   * @example
   * ```ts
   * const response =
   *   await client.crm.objects.schemas.createAssociation(
   *     'objectType',
   *     {
   *       fromObjectTypeId: 'fromObjectTypeId',
   *       toObjectTypeId: 'toObjectTypeId',
   *     },
   *   );
   * ```
   */
  createAssociation(
    objectType: string,
    body: SchemaCreateAssociationParams,
    options?: RequestOptions,
  ): APIPromise<SchemaCreateAssociationResponse> {
    return this._client.post(path`/crm-object-schemas/v3/schemas/${objectType}/associations`, {
      body,
      ...options,
    });
  }

  /**
   * Removes an existing association from a schema.
   *
   * @example
   * ```ts
   * await client.crm.objects.schemas.deleteAssociation(
   *   'associationIdentifier',
   *   { objectType: 'objectType' },
   * );
   * ```
   */
  deleteAssociation(
    associationIdentifier: string,
    params: SchemaDeleteAssociationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(
      path`/crm-object-schemas/v3/schemas/${objectType}/associations/${associationIdentifier}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Returns an existing object schema.
   *
   * @example
   * ```ts
   * const objectSchema = await client.crm.objects.schemas.get(
   *   'objectType',
   * );
   * ```
   */
  get(objectType: string, options?: RequestOptions): APIPromise<ObjectSchema> {
    return this._client.get(path`/crm-object-schemas/v3/schemas/${objectType}`, options);
  }
}

/**
 * Defines an object schema, including its properties and associations.
 */
export interface ObjectSchema {
  /**
   * A unique ID for this schema's object type. Will be defined as
   * {meta-type}-{unique ID}.
   */
  id: string;

  /**
   * Associations defined for a given object type.
   */
  associations: Array<ObjectSchema.Association>;

  labels: Shared.ObjectTypeDefinitionLabels;

  /**
   * A unique name for the schema's object type.
   */
  name: string;

  /**
   * Properties defined for this object type.
   */
  properties: Array<Shared.Property>;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties: Array<string>;

  archived?: boolean;

  /**
   * When the object schema was created.
   */
  createdAt?: string;

  createdByUserId?: number;

  description?: string;

  /**
   * An assigned unique ID for the object, including portal ID and object name.
   */
  fullyQualifiedName?: string;

  objectTypeId?: string;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;

  /**
   * When the object schema was last updated.
   */
  updatedAt?: string;

  updatedByUserId?: number;
}

export namespace ObjectSchema {
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
}

/**
 * Defines a new object type, its properties, and associations.
 */
export interface ObjectSchemaEgg {
  /**
   * Associations defined for this object type.
   */
  associatedObjects: Array<string>;

  labels: Shared.ObjectTypeDefinitionLabels;

  /**
   * A unique name for this object. For internal use only.
   */
  name: string;

  /**
   * Properties defined for this object type.
   */
  properties: Array<ObjectTypePropertyCreate>;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties: Array<string>;

  description?: string;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;
}

/**
 * Defines an object type.
 */
export interface ObjectTypeDefinition {
  /**
   * A unique ID for this object type. Will be defined as {meta-type}-{unique ID}.
   */
  id: string;

  labels: Shared.ObjectTypeDefinitionLabels;

  /**
   * A unique name for this object. For internal use only.
   */
  name: string;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties: Array<string>;

  archived?: boolean;

  /**
   * When the object type was created.
   */
  createdAt?: string;

  description?: string;

  fullyQualifiedName?: string;

  objectTypeId?: string;

  /**
   * The ID of the account that this object type is specific to.
   */
  portalId?: number;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;

  /**
   * When the object type was last updated.
   */
  updatedAt?: string;
}

/**
 * Defines attributes to update on an object type.
 */
export interface ObjectTypeDefinitionPatch {
  clearDescription?: boolean;

  description?: string;

  labels?: Shared.ObjectTypeDefinitionLabels;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties?: Array<string>;

  restorable?: boolean;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;
}

/**
 * Defines a property to create.
 */
export interface ObjectTypePropertyCreate {
  /**
   * Controls how the property appears in HubSpot.
   */
  fieldType: string;

  /**
   * A human-readable property label that will be shown in HubSpot.
   */
  label: string;

  /**
   * The internal property name, which must be used when referencing the property
   * from the API.
   */
  name: string;

  /**
   * The data type of the property.
   */
  type: 'string' | 'number' | 'date' | 'datetime' | 'enumeration' | 'bool';

  /**
   * A description of the property that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * The order that this property should be displayed in the HubSpot UI relative to
   * other properties for this object type. Properties are displayed in order
   * starting with the lowest positive integer value. A value of -1 will cause the
   * property to be displayed **after** any positive values.
   */
  displayOrder?: number;

  /**
   * Whether the property can be used in a HubSpot form.
   */
  formField?: boolean;

  /**
   * The name of the group this property belongs to.
   */
  groupName?: string;

  /**
   * Whether or not the property's value must be unique. Once set, this can't be
   * changed.
   */
  hasUniqueValue?: boolean;

  hidden?: boolean;

  /**
   * Controls how numeric properties are formatted in the HubSpot UI
   */
  numberDisplayHint?: 'unformatted' | 'formatted' | 'currency' | 'percentage' | 'duration' | 'probability';

  /**
   * A list of available options for the property. This field is only required for
   * enumerated properties.
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Controls how the property options will be sorted in the HubSpot UI.
   */
  optionSortStrategy?: 'DISPLAY_ORDER' | 'ALPHABETICAL';

  /**
   * Defines the options this property will return, e.g. OWNER would return name of
   * users on the portal.
   */
  referencedObjectType?: string;

  /**
   * Allow users to search for information entered to this field (limited to 3
   * properties)
   */
  searchableInGlobalSearch?: boolean;

  /**
   * Whether the property will display the currency symbol in the HubSpot UI.
   */
  showCurrencySymbol?: boolean;

  /**
   * Controls how text properties are formatted in the HubSpot UI
   */
  textDisplayHint?:
    | 'unformatted_single_line'
    | 'multi_line'
    | 'email'
    | 'phone_number'
    | 'domain_name'
    | 'ip_address'
    | 'physical_address'
    | 'postal_code';
}

/**
 * The definition of an association
 */
export interface SchemaCreateAssociationResponse {
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

export interface SchemaCreateParams {
  /**
   * Associations defined for this object type.
   */
  associatedObjects: Array<string>;

  labels: Shared.ObjectTypeDefinitionLabels;

  /**
   * A unique name for this object. For internal use only.
   */
  name: string;

  /**
   * Properties defined for this object type.
   */
  properties: Array<ObjectTypePropertyCreate>;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties: Array<string>;

  description?: string;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;
}

export interface SchemaUpdateParams {
  clearDescription?: boolean;

  description?: string;

  labels?: Shared.ObjectTypeDefinitionLabels;

  /**
   * The name of the primary property for this object. This will be displayed as
   * primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * The names of properties that should be **required** when creating an object of
   * this type.
   */
  requiredProperties?: Array<string>;

  restorable?: boolean;

  /**
   * Names of properties that will be indexed for this object type in by HubSpot's
   * product search.
   */
  searchableProperties?: Array<string>;

  /**
   * The names of secondary properties for this object. These will be displayed as
   * secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;
}

export interface SchemaListParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface SchemaDeleteParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface SchemaCreateAssociationParams {
  fromObjectTypeId: string;

  toObjectTypeId: string;

  name?: string;
}

export interface SchemaDeleteAssociationParams {
  /**
   * Fully qualified name or object type ID of your schema.
   */
  objectType: string;
}

export declare namespace Schemas {
  export {
    type ObjectSchema as ObjectSchema,
    type ObjectSchemaEgg as ObjectSchemaEgg,
    type ObjectTypeDefinition as ObjectTypeDefinition,
    type ObjectTypeDefinitionPatch as ObjectTypeDefinitionPatch,
    type ObjectTypePropertyCreate as ObjectTypePropertyCreate,
    type SchemaCreateAssociationResponse as SchemaCreateAssociationResponse,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
    type SchemaCreateAssociationParams as SchemaCreateAssociationParams,
    type SchemaDeleteAssociationParams as SchemaDeleteAssociationParams,
  };
}
