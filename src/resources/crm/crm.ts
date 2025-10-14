// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as OwnersAPI from './owners';
import {
  CollectionResponsePublicOwnerForwardPaging,
  OwnerGetParams,
  OwnerListParams,
  Owners,
  PublicOwner,
  PublicOwnersPage,
  PublicTeam,
} from './owners';
import * as PipelinesAPI from './pipelines';
import {
  CollectionResponsePipelineNoPaging,
  CollectionResponsePipelineStageNoPaging,
  CollectionResponsePublicAuditInfoNoPaging,
  Pipeline,
  PipelineCreateParams,
  PipelineDeleteParams,
  PipelineGetAuditParams,
  PipelineInput,
  PipelinePatchInput,
  PipelineReadParams,
  PipelineReplaceParams,
  PipelineStage,
  PipelineStageInput,
  PipelineStagePatchInput,
  PipelineUpdateParams,
  Pipelines,
  PublicAuditInfo,
} from './pipelines';
import * as PropertiesAPI from './properties';
import {
  BatchInputPropertyCreate,
  BatchInputPropertyName,
  BatchReadInputPropertyName,
  BatchResponseProperty,
  CollectionResponseProperty,
  CollectionResponsePropertyGroup,
  CreatedResponseProperty,
  CreatedResponsePropertyGroup,
  OptionInput,
  Properties,
  PropertyCreate,
  PropertyCreateParams,
  PropertyDeleteParams,
  PropertyGetByNameParams,
  PropertyGroup,
  PropertyGroupCreate,
  PropertyGroupUpdate,
  PropertyName,
  PropertyReadParams,
  PropertyUpdate,
  PropertyUpdateParams,
} from './properties';
import * as EmailsAPI from '../marketing/emails';
import * as AssociationsAPI from './associations/associations';
import {
  AssociationCreateParams,
  AssociationDeleteParams,
  AssociationReadParams,
  Associations,
  BatchInputPublicAssociation,
  BatchInputPublicObjectID,
  BatchResponsePublicAssociation,
  BatchResponsePublicAssociationMulti,
  PublicAssociation,
  PublicAssociationMulti,
} from './associations/associations';
import * as V4API from './associations/v4';
import * as ExtensionsAPI from './extensions/extensions';
import { Extensions } from './extensions/extensions';
import * as ObjectsAPI from './objects/objects';
import {
  BatchInputSimplePublicObjectBatchInput,
  BatchInputSimplePublicObjectBatchInputForCreate,
  BatchInputSimplePublicObjectBatchInputUpsert,
  BatchInputSimplePublicObjectID,
  BatchReadInputSimplePublicObjectID,
  BatchResponseSimplePublicObject,
  BatchResponseSimplePublicUpsertObject,
  CollectionResponseAssociatedID,
  CollectionResponseSimplePublicObjectWithAssociations,
  CollectionResponseWithTotalSimplePublicObject,
  CreatedResponseSimplePublicObject,
  Filter,
  FilterGroup,
  Objects,
  PublicAssociationsForObject,
  PublicGdprDeleteInput,
  PublicMergeInput,
  PublicObjectSearchRequest,
  SimplePublicObject,
  SimplePublicObjectBatchInput,
  SimplePublicObjectBatchInputForCreate,
  SimplePublicObjectBatchInputUpsert,
  SimplePublicObjectID,
  SimplePublicObjectInput,
  SimplePublicObjectInputForCreate,
  SimplePublicObjectWithAssociations,
  SimplePublicUpsertObject,
  ValueWithTimestamp,
} from './objects/objects';
import { Page } from '../../core/pagination';

export class CRM extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  owners: OwnersAPI.Owners = new OwnersAPI.Owners(this._client);
  pipelines: PipelinesAPI.Pipelines = new PipelinesAPI.Pipelines(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
}

export type MultiAssociatedObjectWithLabelsPage = Page<MultiAssociatedObjectWithLabel>;

/**
 * Contains the id and type of an association
 */
export interface AssociatedID {
  /**
   * The ID for the association type.
   */
  id: string;

  /**
   * The type of association.
   */
  type: string;
}

export interface AssociationSpecWithLabel {
  category: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  typeId: number;

  label?: string;
}

export interface BatchResponsePublicDefaultAssociation {
  completedAt: string;

  results: Array<PublicDefaultAssociation>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<V4API.StandardError1>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseMultiAssociatedObjectWithLabel {
  results: Array<MultiAssociatedObjectWithLabel>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface CreatedResponseLabelsBetweenObjectPair {
  createdResourceId: string;

  entity: LabelsBetweenObjectPair;

  location?: string;
}

export interface LabelsBetweenObjectPair {
  fromObjectId: string;

  fromObjectTypeId: string;

  labels: Array<string>;

  toObjectId: string;

  toObjectTypeId: string;
}

export interface MultiAssociatedObjectWithLabel {
  associationTypes: Array<V4API.AssociationSpecWithLabel1>;

  toObjectId: string;
}

/**
 * The options available when a property is an enumeration
 */
export interface Option {
  /**
   * Hidden options will not be displayed in HubSpot.
   */
  hidden: boolean;

  /**
   * A human-readable option label that will be shown in HubSpot.
   */
  label: string;

  /**
   * The internal value of the option, which must be used when setting the property
   * value through the API.
   */
  value: string;

  /**
   * A description of the option.
   */
  description?: string;

  /**
   * Options are displayed in order starting with the lowest positive integer value.
   * Values of -1 will cause the option to be displayed after any positive values.
   */
  displayOrder?: number;
}

/**
 * Defines a property
 */
export interface Property {
  /**
   * A description of the property that will be shown as help text in HubSpot.
   */
  description: string;

  /**
   * Controls how the property appears in HubSpot.
   */
  fieldType: string;

  /**
   * The name of the property group the property belongs to.
   */
  groupName: string;

  /**
   * A human-readable property label that will be shown in HubSpot.
   */
  label: string;

  /**
   * The internal property name, which must be used when referencing the property via
   * the API.
   */
  name: string;

  /**
   * A list of valid options for the property. This field is required for enumerated
   * properties, but will be empty for other property types.
   */
  options: Array<Option>;

  /**
   * The property data type.
   */
  type: string;

  /**
   * Whether or not the property is archived.
   */
  archived?: boolean;

  /**
   * When the property was archived.
   */
  archivedAt?: string;

  /**
   * For default properties, true indicates that the property is calculated by a
   * HubSpot process. It has no effect for custom properties.
   */
  calculated?: boolean;

  /**
   * The formula used for calculated properties.
   */
  calculationFormula?: string;

  /**
   * When the property was created
   */
  createdAt?: string;

  /**
   * The internal ID of the user who created the property in HubSpot. This field may
   * not exist if the property was created outside of HubSpot.
   */
  createdUserId?: string;

  /**
   * Indicates the sensitivity level of the property, such as "non_sensitive",
   * "sensitive", or "highly_sensitive".
   */
  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';

  /**
   * The order that this property should be displayed in the HubSpot UI relative to
   * other properties for this object type. Properties are displayed in order
   * starting with the lowest positive integer value. A value of -1 will cause the
   * property to be displayed **after** any positive values.
   */
  displayOrder?: number;

  /**
   * For default properties, true indicates that the options are stored externally to
   * the property settings.
   */
  externalOptions?: boolean;

  /**
   * Whether or not the property can be used in a HubSpot form.
   */
  formField?: boolean;

  /**
   * Whether or not the property's value must be unique. Once set, this can't be
   * changed.
   */
  hasUniqueValue?: boolean;

  /**
   * Whether or not the property will be hidden from the HubSpot UI. It's recommended
   * that this be set to false for custom properties.
   */
  hidden?: boolean;

  /**
   * This will be true for default object properties built into HubSpot.
   */
  hubspotDefined?: boolean;

  modificationMetadata?: PropertyModificationMetadata;

  /**
   * If this property is related to other object(s), they'll be listed here.
   */
  referencedObjectType?: string;

  /**
   * When sensitiveData is true, lists the type of sensitive data contained in the
   * property (e.g., "HIPAA").
   */
  sensitiveDataCategories?: Array<string>;

  /**
   * Whether the property will display the currency symbol set in the account
   * settings.
   */
  showCurrencySymbol?: boolean;

  /**
   * The timestamp when the property was last updated, in ISO 8601 format.
   */
  updatedAt?: string;

  /**
   * The internal user ID of the user who updated the property in HubSpot. This field
   * may not exist if the property was updated outside of HubSpot.
   */
  updatedUserId?: string;
}

export interface PropertyModificationMetadata {
  archivable: boolean;

  readOnlyDefinition: boolean;

  readOnlyValue: boolean;

  readOnlyOptions?: boolean;
}

export interface PublicDefaultAssociation {
  /**
   * Defines the type, direction, and details of the relationship between two CRM
   * objects.
   */
  associationSpec: V4API.AssociationSpec1;

  from: Shared.PublicObjectID;

  to: Shared.PublicObjectID;
}

CRM.Associations = Associations;
CRM.Extensions = Extensions;
CRM.Objects = Objects;
CRM.Owners = Owners;
CRM.Pipelines = Pipelines;
CRM.Properties = Properties;

export declare namespace CRM {
  export {
    type AssociatedID as AssociatedID,
    type AssociationSpecWithLabel as AssociationSpecWithLabel,
    type BatchResponsePublicDefaultAssociation as BatchResponsePublicDefaultAssociation,
    type CollectionResponseMultiAssociatedObjectWithLabel as CollectionResponseMultiAssociatedObjectWithLabel,
    type CreatedResponseLabelsBetweenObjectPair as CreatedResponseLabelsBetweenObjectPair,
    type LabelsBetweenObjectPair as LabelsBetweenObjectPair,
    type MultiAssociatedObjectWithLabel as MultiAssociatedObjectWithLabel,
    type Option as Option,
    type Property as Property,
    type PropertyModificationMetadata as PropertyModificationMetadata,
    type PublicDefaultAssociation as PublicDefaultAssociation,
  };

  export {
    Associations as Associations,
    type BatchInputPublicAssociation as BatchInputPublicAssociation,
    type BatchInputPublicObjectID as BatchInputPublicObjectID,
    type BatchResponsePublicAssociation as BatchResponsePublicAssociation,
    type BatchResponsePublicAssociationMulti as BatchResponsePublicAssociationMulti,
    type PublicAssociation as PublicAssociation,
    type PublicAssociationMulti as PublicAssociationMulti,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationReadParams as AssociationReadParams,
  };

  export { Extensions as Extensions };

  export {
    Objects as Objects,
    type BatchInputSimplePublicObjectBatchInput as BatchInputSimplePublicObjectBatchInput,
    type BatchInputSimplePublicObjectBatchInputForCreate as BatchInputSimplePublicObjectBatchInputForCreate,
    type BatchInputSimplePublicObjectBatchInputUpsert as BatchInputSimplePublicObjectBatchInputUpsert,
    type BatchInputSimplePublicObjectID as BatchInputSimplePublicObjectID,
    type BatchReadInputSimplePublicObjectID as BatchReadInputSimplePublicObjectID,
    type BatchResponseSimplePublicObject as BatchResponseSimplePublicObject,
    type BatchResponseSimplePublicUpsertObject as BatchResponseSimplePublicUpsertObject,
    type CollectionResponseAssociatedID as CollectionResponseAssociatedID,
    type CollectionResponseSimplePublicObjectWithAssociations as CollectionResponseSimplePublicObjectWithAssociations,
    type CollectionResponseWithTotalSimplePublicObject as CollectionResponseWithTotalSimplePublicObject,
    type CreatedResponseSimplePublicObject as CreatedResponseSimplePublicObject,
    type Filter as Filter,
    type FilterGroup as FilterGroup,
    type PublicAssociationsForObject as PublicAssociationsForObject,
    type PublicGdprDeleteInput as PublicGdprDeleteInput,
    type PublicMergeInput as PublicMergeInput,
    type PublicObjectSearchRequest as PublicObjectSearchRequest,
    type SimplePublicObject as SimplePublicObject,
    type SimplePublicObjectBatchInput as SimplePublicObjectBatchInput,
    type SimplePublicObjectBatchInputForCreate as SimplePublicObjectBatchInputForCreate,
    type SimplePublicObjectBatchInputUpsert as SimplePublicObjectBatchInputUpsert,
    type SimplePublicObjectID as SimplePublicObjectID,
    type SimplePublicObjectInput as SimplePublicObjectInput,
    type SimplePublicObjectInputForCreate as SimplePublicObjectInputForCreate,
    type SimplePublicObjectWithAssociations as SimplePublicObjectWithAssociations,
    type SimplePublicUpsertObject as SimplePublicUpsertObject,
    type ValueWithTimestamp as ValueWithTimestamp,
  };

  export {
    Owners as Owners,
    type CollectionResponsePublicOwnerForwardPaging as CollectionResponsePublicOwnerForwardPaging,
    type PublicOwner as PublicOwner,
    type PublicTeam as PublicTeam,
    type PublicOwnersPage as PublicOwnersPage,
    type OwnerListParams as OwnerListParams,
    type OwnerGetParams as OwnerGetParams,
  };

  export {
    Pipelines as Pipelines,
    type CollectionResponsePipelineNoPaging as CollectionResponsePipelineNoPaging,
    type CollectionResponsePipelineStageNoPaging as CollectionResponsePipelineStageNoPaging,
    type CollectionResponsePublicAuditInfoNoPaging as CollectionResponsePublicAuditInfoNoPaging,
    type Pipeline as Pipeline,
    type PipelineInput as PipelineInput,
    type PipelinePatchInput as PipelinePatchInput,
    type PipelineStage as PipelineStage,
    type PipelineStageInput as PipelineStageInput,
    type PipelineStagePatchInput as PipelineStagePatchInput,
    type PublicAuditInfo as PublicAuditInfo,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineDeleteParams as PipelineDeleteParams,
    type PipelineGetAuditParams as PipelineGetAuditParams,
    type PipelineReadParams as PipelineReadParams,
    type PipelineReplaceParams as PipelineReplaceParams,
  };

  export {
    Properties as Properties,
    type BatchInputPropertyCreate as BatchInputPropertyCreate,
    type BatchInputPropertyName as BatchInputPropertyName,
    type BatchReadInputPropertyName as BatchReadInputPropertyName,
    type BatchResponseProperty as BatchResponseProperty,
    type CollectionResponseProperty as CollectionResponseProperty,
    type CollectionResponsePropertyGroup as CollectionResponsePropertyGroup,
    type CreatedResponseProperty as CreatedResponseProperty,
    type CreatedResponsePropertyGroup as CreatedResponsePropertyGroup,
    type OptionInput as OptionInput,
    type PropertyCreate as PropertyCreate,
    type PropertyGroup as PropertyGroup,
    type PropertyGroupCreate as PropertyGroupCreate,
    type PropertyGroupUpdate as PropertyGroupUpdate,
    type PropertyName as PropertyName,
    type PropertyUpdate as PropertyUpdate,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyGetByNameParams as PropertyGetByNameParams,
    type PropertyReadParams as PropertyReadParams,
  };
}
