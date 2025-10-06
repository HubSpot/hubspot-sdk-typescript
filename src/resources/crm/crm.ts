// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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

export class CRM extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  pipelines: PipelinesAPI.Pipelines = new PipelinesAPI.Pipelines(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
}

export interface AssociatedID {
  id: string;

  type: string;
}

export interface AssociationDefinition {
  id: string;

  fromObjectTypeId: string;

  toObjectTypeId: string;

  createdAt?: string;

  name?: string;

  updatedAt?: string;
}

export interface AssociationDefinitionEgg {
  fromObjectTypeId: string;

  toObjectTypeId: string;

  name?: string;
}

export interface AssociationSpec {
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  associationTypeId: number;
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

  paging?: EmailsAPI.Paging;
}

export interface CollectionResponseObjectSchemaNoPaging {
  results: Array<ObjectSchema>;
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

export interface ObjectSchema {
  id: string;

  associations: Array<AssociationDefinition>;

  labels: ObjectTypeDefinitionLabels;

  name: string;

  properties: Array<Property>;

  requiredProperties: Array<string>;

  archived?: boolean;

  createdAt?: string;

  createdByUserId?: number;

  fullyQualifiedName?: string;

  objectTypeId?: string;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;

  updatedAt?: string;

  updatedByUserId?: number;
}

export interface ObjectSchemaEgg {
  associatedObjects: Array<string>;

  labels: ObjectTypeDefinitionLabels;

  name: string;

  properties: Array<ObjectTypePropertyCreate>;

  requiredProperties: Array<string>;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface ObjectTypeDefinition {
  id: string;

  labels: ObjectTypeDefinitionLabels;

  name: string;

  requiredProperties: Array<string>;

  archived?: boolean;

  createdAt?: string;

  fullyQualifiedName?: string;

  objectTypeId?: string;

  portalId?: number;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;

  updatedAt?: string;
}

export interface ObjectTypeDefinitionLabels {
  plural?: string;

  singular?: string;
}

export interface ObjectTypeDefinitionPatch {
  clearDescription?: boolean;

  labels?: ObjectTypeDefinitionLabels;

  primaryDisplayProperty?: string;

  requiredProperties?: Array<string>;

  restorable?: boolean;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface ObjectTypePropertyCreate {
  fieldType: string;

  label: string;

  name: string;

  type: 'string' | 'number' | 'date' | 'datetime' | 'enumeration' | 'bool';

  displayOrder?: number;

  formField?: boolean;

  groupName?: string;

  hasUniqueValue?: boolean;

  hidden?: boolean;

  numberDisplayHint?: 'unformatted' | 'formatted' | 'currency' | 'percentage' | 'duration' | 'probability';

  options?: Array<PropertiesAPI.OptionInput>;

  optionSortStrategy?: 'DISPLAY_ORDER' | 'ALPHABETICAL';

  referencedObjectType?: string;

  searchableInGlobalSearch?: boolean;

  showCurrencySymbol?: boolean;

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

export interface Option {
  hidden: boolean;

  label: string;

  value: string;

  displayOrder?: number;
}

export interface OptionInput {
  displayOrder: number;

  hidden: boolean;

  label: string;

  value: string;
}

export interface Property {
  fieldType: string;

  groupName: string;

  label: string;

  name: string;

  options: Array<Option>;

  type: string;

  archived?: boolean;

  archivedAt?: string;

  calculated?: boolean;

  calculationFormula?: string;

  createdAt?: string;

  createdUserId?: string;

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';

  displayOrder?: number;

  externalOptions?: boolean;

  formField?: boolean;

  hasUniqueValue?: boolean;

  hidden?: boolean;

  hubspotDefined?: boolean;

  modificationMetadata?: PropertyModificationMetadata;

  referencedObjectType?: string;

  sensitiveDataCategories?: Array<string>;

  showCurrencySymbol?: boolean;

  updatedAt?: string;

  updatedUserId?: string;
}

export interface PropertyModificationMetadata {
  archivable: boolean;

  readOnlyDefinition: boolean;

  readOnlyValue: boolean;

  readOnlyOptions?: boolean;
}

export interface PublicDefaultAssociation {
  associationSpec: V4API.AssociationSpec1;

  from: PublicObjectID;

  to: PublicObjectID;
}

export interface PublicObjectID {
  id: string;
}

CRM.Associations = Associations;
CRM.Extensions = Extensions;
CRM.Objects = Objects;
CRM.Pipelines = Pipelines;
CRM.Properties = Properties;

export declare namespace CRM {
  export {
    type AssociatedID as AssociatedID,
    type AssociationDefinition as AssociationDefinition,
    type AssociationDefinitionEgg as AssociationDefinitionEgg,
    type AssociationSpec as AssociationSpec,
    type AssociationSpecWithLabel as AssociationSpecWithLabel,
    type BatchResponsePublicDefaultAssociation as BatchResponsePublicDefaultAssociation,
    type CollectionResponseMultiAssociatedObjectWithLabel as CollectionResponseMultiAssociatedObjectWithLabel,
    type CollectionResponseObjectSchemaNoPaging as CollectionResponseObjectSchemaNoPaging,
    type CreatedResponseLabelsBetweenObjectPair as CreatedResponseLabelsBetweenObjectPair,
    type LabelsBetweenObjectPair as LabelsBetweenObjectPair,
    type MultiAssociatedObjectWithLabel as MultiAssociatedObjectWithLabel,
    type ObjectSchema as ObjectSchema,
    type ObjectSchemaEgg as ObjectSchemaEgg,
    type ObjectTypeDefinition as ObjectTypeDefinition,
    type ObjectTypeDefinitionLabels as ObjectTypeDefinitionLabels,
    type ObjectTypeDefinitionPatch as ObjectTypeDefinitionPatch,
    type ObjectTypePropertyCreate as ObjectTypePropertyCreate,
    type Option as Option,
    type OptionInput as OptionInput,
    type Property as Property,
    type PropertyModificationMetadata as PropertyModificationMetadata,
    type PublicDefaultAssociation as PublicDefaultAssociation,
    type PublicObjectID as PublicObjectID,
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
