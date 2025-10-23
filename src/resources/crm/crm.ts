// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as AppUninstallsAPI from './app-uninstalls';
import { AppUninstalls } from './app-uninstalls';
import * as ExportsAPI from './exports';
import {
  ActionResponseWithSingleResultUri,
  ExportCreateParams,
  Exports,
  PublicCRMSearchRequest,
  PublicExportListRequest,
  PublicExportRequest,
  PublicExportViewRequest,
} from './exports';
import * as ImportsAPI from './imports';
import {
  CollectionResponsePublicImportErrorForwardPaging,
  CollectionResponsePublicImportResponse,
  ImportCreateParams,
  ImportListErrorsParams,
  ImportListParams,
  ImportRowCore,
  ImportTemplate,
  Imports,
  PropertyValue,
  PublicImportError,
  PublicImportMetadata,
  PublicImportResponse,
  PublicImportResponsesPage,
  PublicObjectListRecord,
} from './imports';
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
import * as EmailsAPI from '../marketing/emails';
import * as AssociationsAPI from './associations/associations';
import {
  AssociationCreateParams,
  AssociationDeleteParams,
  AssociationReadParams,
  Associations,
  BatchInputPublicAssociation,
  BatchResponsePublicAssociation,
  BatchResponsePublicAssociationMulti,
  PublicAssociation,
  PublicAssociationMulti,
} from './associations/associations';
import * as ExtensionsAPI from './extensions/extensions';
import { Extensions } from './extensions/extensions';
import * as ListsAPI from './lists/lists';
import {
  APICollectionResponseJoinTimeAndRecordID,
  APICollectionResponseRecordListMembershipNoPaging,
  JoinTimeAndRecordID,
  ListCreateParams,
  ListCreateRequest,
  ListCreateResponse,
  ListFetchResponse,
  ListFilterUpdateRequest,
  ListFolderCreateRequest,
  ListFolderCreateResponse,
  ListFolderFetchResponse,
  ListGetByObjectTypeIDAndNameParams,
  ListGetParams,
  ListListParams,
  ListMoveRequest,
  ListScheduleConversionParams,
  ListSearchParams,
  ListSearchRequest,
  ListSearchResponse,
  ListUpdateFiltersParams,
  ListUpdateNameParams,
  ListUpdateResponse,
  Lists,
  ListsByIDResponse,
  MembershipChangeRequest,
  MembershipsUpdateResponse,
  PublicBatchMigrationMapping,
  PublicListConversionDate,
  PublicListConversionInactivity,
  PublicListConversionResponse,
  PublicListConversionTime,
  PublicListFolder,
  PublicListPermissions,
  PublicMembershipSettings,
  PublicMigrationMapping,
  PublicObjectList,
  PublicObjectListSearchResult,
  RecordListMembership,
} from './lists/lists';
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
import * as PipelinesAPI from './pipelines/pipelines';
import {
  CollectionResponsePipelineNoPaging,
  CollectionResponsePipelineStageNoPaging,
  CollectionResponsePublicAuditInfoNoPaging,
  Pipeline,
  PipelineCreateParams,
  PipelineDeleteParams,
  PipelineGetAuditParams,
  PipelineGetParams,
  PipelineInput,
  PipelinePatchInput,
  PipelineReplaceParams,
  PipelineStage,
  PipelineStageInput,
  PipelineStagePatchInput,
  PipelineUpdateParams,
  Pipelines,
  PublicAuditInfo,
} from './pipelines/pipelines';
import * as PropertiesAPI from './properties/properties';
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
  PropertyGetParams,
  PropertyGroup,
  PropertyGroupCreate,
  PropertyGroupUpdate,
  PropertyListParams,
  PropertyName,
  PropertyUpdate,
  PropertyUpdateParams,
} from './properties/properties';
import * as TimelineAPI from './timeline/timeline';
import {
  BatchInputTimelineEvent,
  BatchResponseTimelineEventResponse,
  BatchResponseTimelineEventResponseWithErrors,
  CollectionResponseTimelineEventTemplateNoPaging,
  EventDetail,
  Timeline,
  TimelineEvent,
  TimelineEventIFrame,
  TimelineEventResponse,
  TimelineEventTemplate,
  TimelineEventTemplateCreateRequest,
  TimelineEventTemplateToken,
  TimelineEventTemplateTokenOption,
  TimelineEventTemplateTokenUpdateRequest,
  TimelineEventTemplateUpdateRequest,
} from './timeline/timeline';
import * as V4API from './associations/v4/v4';

export class CRM extends APIResource {
  appUninstalls: AppUninstallsAPI.AppUninstalls = new AppUninstallsAPI.AppUninstalls(this._client);
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
  imports: ImportsAPI.Imports = new ImportsAPI.Imports(this._client);
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  owners: OwnersAPI.Owners = new OwnersAPI.Owners(this._client);
  pipelines: PipelinesAPI.Pipelines = new PipelinesAPI.Pipelines(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  timeline: TimelineAPI.Timeline = new TimelineAPI.Timeline(this._client);
}

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

export interface BatchInputPublicObjectID {
  inputs: Array<Shared.PublicObjectID>;
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

/**
 * Defines a single condition for searching CRM objects, specifying the property to
 * filter on, the operator to use (such as equals, greater than, or contains), and
 * the value(s) to compare against.
 */
export interface Filter {
  /**
   * The comparison operator used in the filter, such as "EQ" or "GT".
   */
  operator:
    | 'EQ'
    | 'NEQ'
    | 'LT'
    | 'LTE'
    | 'GT'
    | 'GTE'
    | 'BETWEEN'
    | 'IN'
    | 'NOT_IN'
    | 'HAS_PROPERTY'
    | 'NOT_HAS_PROPERTY';

  /**
   * The name of the property to apply the filter to.
   */
  propertyName: string;

  /**
   * The upper boundary value when using ranged-based filters.
   */
  highValue?: string;

  /**
   * The value to match against the property.
   */
  value?: string;

  /**
   * The values to match against the property.
   */
  values?: Array<string>;
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

export interface PublicDefaultAssociation {
  /**
   * Defines the type, direction, and details of the relationship between two CRM
   * objects.
   */
  associationSpec: V4API.AssociationSpec1;

  from: Shared.PublicObjectID;

  to: Shared.PublicObjectID;
}

CRM.AppUninstalls = AppUninstalls;
CRM.Associations = Associations;
CRM.Exports = Exports;
CRM.Extensions = Extensions;
CRM.Imports = Imports;
CRM.Lists = Lists;
CRM.Objects = Objects;
CRM.Owners = Owners;
CRM.Pipelines = Pipelines;
CRM.Properties = Properties;
CRM.Timeline = Timeline;

export declare namespace CRM {
  export {
    type AssociatedID as AssociatedID,
    type AssociationSpecWithLabel as AssociationSpecWithLabel,
    type BatchInputPublicObjectID as BatchInputPublicObjectID,
    type BatchResponsePublicDefaultAssociation as BatchResponsePublicDefaultAssociation,
    type CollectionResponseMultiAssociatedObjectWithLabel as CollectionResponseMultiAssociatedObjectWithLabel,
    type CreatedResponseLabelsBetweenObjectPair as CreatedResponseLabelsBetweenObjectPair,
    type Filter as Filter,
    type LabelsBetweenObjectPair as LabelsBetweenObjectPair,
    type MultiAssociatedObjectWithLabel as MultiAssociatedObjectWithLabel,
    type PublicDefaultAssociation as PublicDefaultAssociation,
  };

  export { AppUninstalls as AppUninstalls };

  export {
    Associations as Associations,
    type BatchInputPublicAssociation as BatchInputPublicAssociation,
    type BatchResponsePublicAssociation as BatchResponsePublicAssociation,
    type BatchResponsePublicAssociationMulti as BatchResponsePublicAssociationMulti,
    type PublicAssociation as PublicAssociation,
    type PublicAssociationMulti as PublicAssociationMulti,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationReadParams as AssociationReadParams,
  };

  export {
    Exports as Exports,
    type ActionResponseWithSingleResultUri as ActionResponseWithSingleResultUri,
    type PublicCRMSearchRequest as PublicCRMSearchRequest,
    type PublicExportListRequest as PublicExportListRequest,
    type PublicExportRequest as PublicExportRequest,
    type PublicExportViewRequest as PublicExportViewRequest,
    type ExportCreateParams as ExportCreateParams,
  };

  export { Extensions as Extensions };

  export {
    Imports as Imports,
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

  export {
    Lists as Lists,
    type APICollectionResponseJoinTimeAndRecordID as APICollectionResponseJoinTimeAndRecordID,
    type APICollectionResponseRecordListMembershipNoPaging as APICollectionResponseRecordListMembershipNoPaging,
    type JoinTimeAndRecordID as JoinTimeAndRecordID,
    type ListCreateRequest as ListCreateRequest,
    type ListCreateResponse as ListCreateResponse,
    type ListFetchResponse as ListFetchResponse,
    type ListFilterUpdateRequest as ListFilterUpdateRequest,
    type ListFolderCreateRequest as ListFolderCreateRequest,
    type ListFolderCreateResponse as ListFolderCreateResponse,
    type ListFolderFetchResponse as ListFolderFetchResponse,
    type ListMoveRequest as ListMoveRequest,
    type ListsByIDResponse as ListsByIDResponse,
    type ListSearchRequest as ListSearchRequest,
    type ListSearchResponse as ListSearchResponse,
    type ListUpdateResponse as ListUpdateResponse,
    type MembershipChangeRequest as MembershipChangeRequest,
    type MembershipsUpdateResponse as MembershipsUpdateResponse,
    type PublicBatchMigrationMapping as PublicBatchMigrationMapping,
    type PublicListConversionDate as PublicListConversionDate,
    type PublicListConversionInactivity as PublicListConversionInactivity,
    type PublicListConversionResponse as PublicListConversionResponse,
    type PublicListConversionTime as PublicListConversionTime,
    type PublicListFolder as PublicListFolder,
    type PublicListPermissions as PublicListPermissions,
    type PublicMembershipSettings as PublicMembershipSettings,
    type PublicMigrationMapping as PublicMigrationMapping,
    type PublicObjectList as PublicObjectList,
    type PublicObjectListSearchResult as PublicObjectListSearchResult,
    type RecordListMembership as RecordListMembership,
    type ListCreateParams as ListCreateParams,
    type ListListParams as ListListParams,
    type ListGetParams as ListGetParams,
    type ListGetByObjectTypeIDAndNameParams as ListGetByObjectTypeIDAndNameParams,
    type ListScheduleConversionParams as ListScheduleConversionParams,
    type ListSearchParams as ListSearchParams,
    type ListUpdateFiltersParams as ListUpdateFiltersParams,
    type ListUpdateNameParams as ListUpdateNameParams,
  };

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
    type PipelineGetParams as PipelineGetParams,
    type PipelineGetAuditParams as PipelineGetAuditParams,
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
    type PropertyListParams as PropertyListParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyGetParams as PropertyGetParams,
  };

  export {
    Timeline as Timeline,
    type BatchInputTimelineEvent as BatchInputTimelineEvent,
    type BatchResponseTimelineEventResponse as BatchResponseTimelineEventResponse,
    type BatchResponseTimelineEventResponseWithErrors as BatchResponseTimelineEventResponseWithErrors,
    type CollectionResponseTimelineEventTemplateNoPaging as CollectionResponseTimelineEventTemplateNoPaging,
    type EventDetail as EventDetail,
    type TimelineEvent as TimelineEvent,
    type TimelineEventIFrame as TimelineEventIFrame,
    type TimelineEventResponse as TimelineEventResponse,
    type TimelineEventTemplate as TimelineEventTemplate,
    type TimelineEventTemplateCreateRequest as TimelineEventTemplateCreateRequest,
    type TimelineEventTemplateToken as TimelineEventTemplateToken,
    type TimelineEventTemplateTokenOption as TimelineEventTemplateTokenOption,
    type TimelineEventTemplateTokenUpdateRequest as TimelineEventTemplateTokenUpdateRequest,
    type TimelineEventTemplateUpdateRequest as TimelineEventTemplateUpdateRequest,
  };
}
