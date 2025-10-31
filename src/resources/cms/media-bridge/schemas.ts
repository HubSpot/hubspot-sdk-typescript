// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ObjectsSchemasAPI from '../../crm/objects/schemas';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Schemas extends APIResource {
  /**
   * Update the schema for an existing object type
   *
   * @example
   * ```ts
   * const objectTypeDefinition =
   *   await client.cms.mediaBridge.schemas.update(
   *     'objectType',
   *     { appId: 'appId' },
   *   );
   * ```
   */
  update(
    objectType: string,
    params: SchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsSchemasAPI.ObjectTypeDefinition> {
    const { appId, ...body } = params;
    return this._client.patch(path`/media-bridge/v1/${appId}/schemas/${objectType}`, { body, ...options });
  }

  /**
   * Get the schemas for all object types.
   *
   * @example
   * ```ts
   * const collectionResponseObjectSchemaNoPaging =
   *   await client.cms.mediaBridge.schemas.list('appId');
   * ```
   */
  list(appID: string, options?: RequestOptions): APIPromise<Shared.CollectionResponseObjectSchemaNoPaging> {
    return this._client.get(path`/media-bridge/v1/${appID}/schemas`, options);
  }

  /**
   * Create a new association definition for the specified object type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cms.mediaBridge.schemas.createAssociation(
   *     'objectType',
   *     {
   *       appId: 'appId',
   *       fromObjectTypeId: 'fromObjectTypeId',
   *       toObjectTypeId: 'toObjectTypeId',
   *     },
   *   );
   * ```
   */
  createAssociation(
    objectType: string,
    params: SchemaCreateAssociationParams,
    options?: RequestOptions,
  ): APIPromise<SchemaCreateAssociationResponse> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/v1/${appId}/schemas/${objectType}/associations`, {
      body,
      ...options,
    });
  }

  /**
   * Delete an existing association definition for an object type.
   *
   * @example
   * ```ts
   * await client.cms.mediaBridge.schemas.deleteAssociation(
   *   'associationId',
   *   { appId: 'appId', objectType: 'objectType' },
   * );
   * ```
   */
  deleteAssociation(
    associationID: string,
    params: SchemaDeleteAssociationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, objectType } = params;
    return this._client.delete(
      path`/media-bridge/v1/${appId}/schemas/${objectType}/associations/${associationID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Get the schema for a specified object type.
   *
   * @example
   * ```ts
   * const objectSchema =
   *   await client.cms.mediaBridge.schemas.get('objectType', {
   *     appId: 'appId',
   *   });
   * ```
   */
  get(
    objectType: string,
    params: SchemaGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsSchemasAPI.ObjectSchema> {
    const { appId } = params;
    return this._client.get(path`/media-bridge/v1/${appId}/schemas/${objectType}`, options);
  }
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

export interface SchemaUpdateParams {
  /**
   * Path param:
   */
  appId: string;

  /**
   * Body param:
   */
  clearDescription?: boolean;

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param:
   */
  labels?: Shared.ObjectTypeDefinitionLabels;

  /**
   * Body param: The name of the primary property for this object. This will be
   * displayed as primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * Body param: The names of properties that should be **required** when creating an
   * object of this type.
   */
  requiredProperties?: Array<string>;

  /**
   * Body param:
   */
  restorable?: boolean;

  /**
   * Body param: Names of properties that will be indexed for this object type in by
   * HubSpot's product search.
   */
  searchableProperties?: Array<string>;

  /**
   * Body param: The names of secondary properties for this object. These will be
   * displayed as secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;
}

export interface SchemaCreateAssociationParams {
  /**
   * Path param:
   */
  appId: string;

  /**
   * Body param:
   */
  fromObjectTypeId: string;

  /**
   * Body param:
   */
  toObjectTypeId: string;

  /**
   * Body param:
   */
  name?: string;
}

export interface SchemaDeleteAssociationParams {
  appId: string;

  objectType: string;
}

export interface SchemaGetParams {
  appId: string;
}

export declare namespace Schemas {
  export {
    type SchemaCreateAssociationResponse as SchemaCreateAssociationResponse,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaCreateAssociationParams as SchemaCreateAssociationParams,
    type SchemaDeleteAssociationParams as SchemaDeleteAssociationParams,
    type SchemaGetParams as SchemaGetParams,
  };
}
