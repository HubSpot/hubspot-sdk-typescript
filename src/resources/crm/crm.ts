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
  PublicOwnersCursorURLPage,
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
import { CursorURLPage } from '../../core/pagination';

export class CRM extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  owners: OwnersAPI.Owners = new OwnersAPI.Owners(this._client);
  pipelines: PipelinesAPI.Pipelines = new PipelinesAPI.Pipelines(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
}

export type MultiAssociatedObjectWithLabelsCursorURLPage = CursorURLPage<MultiAssociatedObjectWithLabel>;

export interface AssociatedID {
  id: string;

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

export interface Option {
  hidden: boolean;

  label: string;

  value: string;

  displayOrder?: number;
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
    type PublicOwnersCursorURLPage as PublicOwnersCursorURLPage,
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
