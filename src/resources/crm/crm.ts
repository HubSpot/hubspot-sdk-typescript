// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ObjectSchemasAPI from './object-schemas';
import {
  ObjectSchemaArchiveAssociationParams,
  ObjectSchemaCreateAssociationParams,
  ObjectSchemaCreateParams,
  ObjectSchemaDeleteParams,
  ObjectSchemaListParams,
  ObjectSchemaUpdateParams,
  ObjectSchemas,
} from './object-schemas';
import * as PipelinesAPI from './pipelines';
import {
  CRMPipelinesCollectionResponsePipelineNoPaging,
  CRMPipelinesCollectionResponsePipelineStageNoPaging,
  CRMPipelinesCollectionResponsePublicAuditInfoNoPaging,
  CRMPipelinesPipeline,
  CRMPipelinesPipelineInput,
  CRMPipelinesPipelinePatchInput,
  CRMPipelinesPipelineStage,
  CRMPipelinesPipelineStageInput,
  CRMPipelinesPipelineStagePatchInput,
  CRMPipelinesPublicAuditInfo,
  PipelineCreateParams,
  PipelineDeleteParams,
  PipelineGetAuditParams,
  PipelineReadParams,
  PipelineReplaceParams,
  PipelineUpdateParams,
  Pipelines,
} from './pipelines';
import * as PropertiesAPI from './properties';
import {
  CRMPropertiesBatchInputPropertyCreate,
  CRMPropertiesBatchInputPropertyName,
  CRMPropertiesBatchReadInputPropertyName,
  CRMPropertiesBatchResponseProperty,
  CRMPropertiesCollectionResponseProperty,
  CRMPropertiesCollectionResponsePropertyGroup,
  CRMPropertiesCreatedResponseProperty,
  CRMPropertiesCreatedResponsePropertyGroup,
  CRMPropertiesOptionInput,
  CRMPropertiesPropertyCreate,
  CRMPropertiesPropertyGroup,
  CRMPropertiesPropertyGroupCreate,
  CRMPropertiesPropertyGroupUpdate,
  CRMPropertiesPropertyName,
  CRMPropertiesPropertyUpdate,
  Properties,
  PropertyCreateParams,
  PropertyDeleteParams,
  PropertyGetByNameParams,
  PropertyReadParams,
  PropertyUpdateParams,
} from './properties';
import * as AssociationsAPI from './associations/associations';
import {
  AssociationCreateParams,
  AssociationDeleteParams,
  AssociationReadParams,
  Associations,
  CRMAssociationsBatchInputPublicAssociation,
  CRMAssociationsBatchInputPublicObjectID,
  CRMAssociationsBatchResponsePublicAssociation,
  CRMAssociationsBatchResponsePublicAssociationMulti,
  CRMAssociationsPublicAssociation,
  CRMAssociationsPublicAssociationMulti,
} from './associations/associations';
import * as V4API from './associations/v4';
import * as ObjectsAPI from './objects/objects';
import {
  CRMObjectsBatchInputSimplePublicObjectBatchInput,
  CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate,
  CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert,
  CRMObjectsBatchInputSimplePublicObjectID,
  CRMObjectsBatchReadInputSimplePublicObjectID,
  CRMObjectsBatchResponseSimplePublicObject,
  CRMObjectsBatchResponseSimplePublicUpsertObject,
  CRMObjectsCollectionResponseAssociatedID,
  CRMObjectsCollectionResponseSimplePublicObjectWithAssociations,
  CRMObjectsCollectionResponseWithTotalSimplePublicObject,
  CRMObjectsCreatedResponseSimplePublicObject,
  CRMObjectsFilter,
  CRMObjectsFilterGroup,
  CRMObjectsPublicAssociationsForObject,
  CRMObjectsPublicGdprDeleteInput,
  CRMObjectsPublicMergeInput,
  CRMObjectsPublicObjectSearchRequest,
  CRMObjectsSimplePublicObject,
  CRMObjectsSimplePublicObjectBatchInput,
  CRMObjectsSimplePublicObjectBatchInputForCreate,
  CRMObjectsSimplePublicObjectBatchInputUpsert,
  CRMObjectsSimplePublicObjectID,
  CRMObjectsSimplePublicObjectInput,
  CRMObjectsSimplePublicObjectInputForCreate,
  CRMObjectsSimplePublicObjectWithAssociations,
  CRMObjectsSimplePublicUpsertObject,
  CRMObjectsValueWithTimestamp,
  Objects,
} from './objects/objects';

export class CRM extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  objectSchemas: ObjectSchemasAPI.ObjectSchemas = new ObjectSchemasAPI.ObjectSchemas(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  pipelines: PipelinesAPI.Pipelines = new PipelinesAPI.Pipelines(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
}

export interface CRMAssociatedID {
  id: string;

  type: string;
}

export interface CRMAssociationDefinition {
  id: string;

  fromObjectTypeId: string;

  toObjectTypeId: string;

  createdAt?: string;

  name?: string;

  updatedAt?: string;
}

export interface CRMAssociationDefinitionEgg {
  fromObjectTypeId: string;

  toObjectTypeId: string;

  name?: string;
}

export interface CRMAssociationSpec {
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  associationTypeId: number;
}

export interface CRMAssociationSpecWithLabel {
  category: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  typeId: number;

  label?: string;
}

export interface CRMBatchResponsePublicDefaultAssociation {
  completedAt: string;

  results: Array<CRMPublicDefaultAssociation>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<V4API.CRMAssociationsV4StandardError1>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMCollectionResponseMultiAssociatedObjectWithLabel {
  results: Array<CRMMultiAssociatedObjectWithLabel>;

  paging?: Shared.Paging;
}

export interface CRMCollectionResponseObjectSchemaNoPaging {
  results: Array<CRMObjectSchema>;
}

export interface CRMCreatedResponseLabelsBetweenObjectPair {
  createdResourceId: string;

  entity: CRMLabelsBetweenObjectPair;

  location?: string;
}

export interface CRMLabelsBetweenObjectPair {
  fromObjectId: string;

  fromObjectTypeId: string;

  labels: Array<string>;

  toObjectId: string;

  toObjectTypeId: string;
}

export interface CRMMultiAssociatedObjectWithLabel {
  associationTypes: Array<V4API.CRMAssociationsV4AssociationSpecWithLabel1>;

  toObjectId: string;
}

export interface CRMObjectSchema {
  id: string;

  associations: Array<CRMAssociationDefinition>;

  labels: CRMObjectTypeDefinitionLabels;

  name: string;

  properties: Array<CRMProperty>;

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

export interface CRMObjectSchemaEgg {
  associatedObjects: Array<string>;

  labels: CRMObjectTypeDefinitionLabels;

  name: string;

  properties: Array<CRMObjectTypePropertyCreate>;

  requiredProperties: Array<string>;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface CRMObjectTypeDefinition {
  id: string;

  labels: CRMObjectTypeDefinitionLabels;

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

export interface CRMObjectTypeDefinitionLabels {
  plural?: string;

  singular?: string;
}

export interface CRMObjectTypeDefinitionPatch {
  clearDescription?: boolean;

  labels?: CRMObjectTypeDefinitionLabels;

  primaryDisplayProperty?: string;

  requiredProperties?: Array<string>;

  restorable?: boolean;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface CRMObjectTypePropertyCreate {
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

  options?: Array<PropertiesAPI.CRMPropertiesOptionInput>;

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

export interface CRMOption {
  hidden: boolean;

  label: string;

  value: string;

  displayOrder?: number;
}

export interface CRMOptionInput {
  displayOrder: number;

  hidden: boolean;

  label: string;

  value: string;
}

export interface CRMProperty {
  fieldType: string;

  groupName: string;

  label: string;

  name: string;

  options: Array<CRMOption>;

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

  modificationMetadata?: CRMPropertyModificationMetadata;

  referencedObjectType?: string;

  sensitiveDataCategories?: Array<string>;

  showCurrencySymbol?: boolean;

  updatedAt?: string;

  updatedUserId?: string;
}

export interface CRMPropertyModificationMetadata {
  archivable: boolean;

  readOnlyDefinition: boolean;

  readOnlyValue: boolean;

  readOnlyOptions?: boolean;
}

export interface CRMPublicDefaultAssociation {
  associationSpec: V4API.CRMAssociationsV4AssociationSpec1;

  from: CRMPublicObjectID;

  to: CRMPublicObjectID;
}

export interface CRMPublicObjectID {
  id: string;
}

CRM.Associations = Associations;
CRM.ObjectSchemas = ObjectSchemas;
CRM.Objects = Objects;
CRM.Pipelines = Pipelines;
CRM.Properties = Properties;

export declare namespace CRM {
  export {
    type CRMAssociatedID as CRMAssociatedID,
    type CRMAssociationDefinition as CRMAssociationDefinition,
    type CRMAssociationDefinitionEgg as CRMAssociationDefinitionEgg,
    type CRMAssociationSpec as CRMAssociationSpec,
    type CRMAssociationSpecWithLabel as CRMAssociationSpecWithLabel,
    type CRMBatchResponsePublicDefaultAssociation as CRMBatchResponsePublicDefaultAssociation,
    type CRMCollectionResponseMultiAssociatedObjectWithLabel as CRMCollectionResponseMultiAssociatedObjectWithLabel,
    type CRMCollectionResponseObjectSchemaNoPaging as CRMCollectionResponseObjectSchemaNoPaging,
    type CRMCreatedResponseLabelsBetweenObjectPair as CRMCreatedResponseLabelsBetweenObjectPair,
    type CRMLabelsBetweenObjectPair as CRMLabelsBetweenObjectPair,
    type CRMMultiAssociatedObjectWithLabel as CRMMultiAssociatedObjectWithLabel,
    type CRMObjectSchema as CRMObjectSchema,
    type CRMObjectSchemaEgg as CRMObjectSchemaEgg,
    type CRMObjectTypeDefinition as CRMObjectTypeDefinition,
    type CRMObjectTypeDefinitionLabels as CRMObjectTypeDefinitionLabels,
    type CRMObjectTypeDefinitionPatch as CRMObjectTypeDefinitionPatch,
    type CRMObjectTypePropertyCreate as CRMObjectTypePropertyCreate,
    type CRMOption as CRMOption,
    type CRMOptionInput as CRMOptionInput,
    type CRMProperty as CRMProperty,
    type CRMPropertyModificationMetadata as CRMPropertyModificationMetadata,
    type CRMPublicDefaultAssociation as CRMPublicDefaultAssociation,
    type CRMPublicObjectID as CRMPublicObjectID,
  };

  export {
    Associations as Associations,
    type CRMAssociationsBatchInputPublicAssociation as CRMAssociationsBatchInputPublicAssociation,
    type CRMAssociationsBatchInputPublicObjectID as CRMAssociationsBatchInputPublicObjectID,
    type CRMAssociationsBatchResponsePublicAssociation as CRMAssociationsBatchResponsePublicAssociation,
    type CRMAssociationsBatchResponsePublicAssociationMulti as CRMAssociationsBatchResponsePublicAssociationMulti,
    type CRMAssociationsPublicAssociation as CRMAssociationsPublicAssociation,
    type CRMAssociationsPublicAssociationMulti as CRMAssociationsPublicAssociationMulti,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationReadParams as AssociationReadParams,
  };

  export {
    ObjectSchemas as ObjectSchemas,
    type ObjectSchemaCreateParams as ObjectSchemaCreateParams,
    type ObjectSchemaUpdateParams as ObjectSchemaUpdateParams,
    type ObjectSchemaListParams as ObjectSchemaListParams,
    type ObjectSchemaDeleteParams as ObjectSchemaDeleteParams,
    type ObjectSchemaArchiveAssociationParams as ObjectSchemaArchiveAssociationParams,
    type ObjectSchemaCreateAssociationParams as ObjectSchemaCreateAssociationParams,
  };

  export {
    Objects as Objects,
    type CRMObjectsBatchInputSimplePublicObjectBatchInput as CRMObjectsBatchInputSimplePublicObjectBatchInput,
    type CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate as CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate,
    type CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert as CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert,
    type CRMObjectsBatchInputSimplePublicObjectID as CRMObjectsBatchInputSimplePublicObjectID,
    type CRMObjectsBatchReadInputSimplePublicObjectID as CRMObjectsBatchReadInputSimplePublicObjectID,
    type CRMObjectsBatchResponseSimplePublicObject as CRMObjectsBatchResponseSimplePublicObject,
    type CRMObjectsBatchResponseSimplePublicUpsertObject as CRMObjectsBatchResponseSimplePublicUpsertObject,
    type CRMObjectsCollectionResponseAssociatedID as CRMObjectsCollectionResponseAssociatedID,
    type CRMObjectsCollectionResponseSimplePublicObjectWithAssociations as CRMObjectsCollectionResponseSimplePublicObjectWithAssociations,
    type CRMObjectsCollectionResponseWithTotalSimplePublicObject as CRMObjectsCollectionResponseWithTotalSimplePublicObject,
    type CRMObjectsCreatedResponseSimplePublicObject as CRMObjectsCreatedResponseSimplePublicObject,
    type CRMObjectsFilter as CRMObjectsFilter,
    type CRMObjectsFilterGroup as CRMObjectsFilterGroup,
    type CRMObjectsPublicAssociationsForObject as CRMObjectsPublicAssociationsForObject,
    type CRMObjectsPublicGdprDeleteInput as CRMObjectsPublicGdprDeleteInput,
    type CRMObjectsPublicMergeInput as CRMObjectsPublicMergeInput,
    type CRMObjectsPublicObjectSearchRequest as CRMObjectsPublicObjectSearchRequest,
    type CRMObjectsSimplePublicObject as CRMObjectsSimplePublicObject,
    type CRMObjectsSimplePublicObjectBatchInput as CRMObjectsSimplePublicObjectBatchInput,
    type CRMObjectsSimplePublicObjectBatchInputForCreate as CRMObjectsSimplePublicObjectBatchInputForCreate,
    type CRMObjectsSimplePublicObjectBatchInputUpsert as CRMObjectsSimplePublicObjectBatchInputUpsert,
    type CRMObjectsSimplePublicObjectID as CRMObjectsSimplePublicObjectID,
    type CRMObjectsSimplePublicObjectInput as CRMObjectsSimplePublicObjectInput,
    type CRMObjectsSimplePublicObjectInputForCreate as CRMObjectsSimplePublicObjectInputForCreate,
    type CRMObjectsSimplePublicObjectWithAssociations as CRMObjectsSimplePublicObjectWithAssociations,
    type CRMObjectsSimplePublicUpsertObject as CRMObjectsSimplePublicUpsertObject,
    type CRMObjectsValueWithTimestamp as CRMObjectsValueWithTimestamp,
  };

  export {
    Pipelines as Pipelines,
    type CRMPipelinesCollectionResponsePipelineNoPaging as CRMPipelinesCollectionResponsePipelineNoPaging,
    type CRMPipelinesCollectionResponsePipelineStageNoPaging as CRMPipelinesCollectionResponsePipelineStageNoPaging,
    type CRMPipelinesCollectionResponsePublicAuditInfoNoPaging as CRMPipelinesCollectionResponsePublicAuditInfoNoPaging,
    type CRMPipelinesPipeline as CRMPipelinesPipeline,
    type CRMPipelinesPipelineInput as CRMPipelinesPipelineInput,
    type CRMPipelinesPipelinePatchInput as CRMPipelinesPipelinePatchInput,
    type CRMPipelinesPipelineStage as CRMPipelinesPipelineStage,
    type CRMPipelinesPipelineStageInput as CRMPipelinesPipelineStageInput,
    type CRMPipelinesPipelineStagePatchInput as CRMPipelinesPipelineStagePatchInput,
    type CRMPipelinesPublicAuditInfo as CRMPipelinesPublicAuditInfo,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineDeleteParams as PipelineDeleteParams,
    type PipelineGetAuditParams as PipelineGetAuditParams,
    type PipelineReadParams as PipelineReadParams,
    type PipelineReplaceParams as PipelineReplaceParams,
  };

  export {
    Properties as Properties,
    type CRMPropertiesBatchInputPropertyCreate as CRMPropertiesBatchInputPropertyCreate,
    type CRMPropertiesBatchInputPropertyName as CRMPropertiesBatchInputPropertyName,
    type CRMPropertiesBatchReadInputPropertyName as CRMPropertiesBatchReadInputPropertyName,
    type CRMPropertiesBatchResponseProperty as CRMPropertiesBatchResponseProperty,
    type CRMPropertiesCollectionResponseProperty as CRMPropertiesCollectionResponseProperty,
    type CRMPropertiesCollectionResponsePropertyGroup as CRMPropertiesCollectionResponsePropertyGroup,
    type CRMPropertiesCreatedResponseProperty as CRMPropertiesCreatedResponseProperty,
    type CRMPropertiesCreatedResponsePropertyGroup as CRMPropertiesCreatedResponsePropertyGroup,
    type CRMPropertiesOptionInput as CRMPropertiesOptionInput,
    type CRMPropertiesPropertyCreate as CRMPropertiesPropertyCreate,
    type CRMPropertiesPropertyGroup as CRMPropertiesPropertyGroup,
    type CRMPropertiesPropertyGroupCreate as CRMPropertiesPropertyGroupCreate,
    type CRMPropertiesPropertyGroupUpdate as CRMPropertiesPropertyGroupUpdate,
    type CRMPropertiesPropertyName as CRMPropertiesPropertyName,
    type CRMPropertiesPropertyUpdate as CRMPropertiesPropertyUpdate,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyGetByNameParams as PropertyGetByNameParams,
    type PropertyReadParams as PropertyReadParams,
  };
}
