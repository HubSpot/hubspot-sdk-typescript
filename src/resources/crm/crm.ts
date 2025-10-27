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
import * as ObjectLibraryAPI from './object-library/object-library';
import {
  ObjectLibrary,
  ObjectTypeEnablementPublicResponse,
  PortalObjectTypeEnablementPublicResponse,
} from './object-library/object-library';
import * as ObjectsAPI from './objects/objects';
import { Objects } from './objects/objects';
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
  BatchReadInputPropertyName,
  CollectionResponseProperty,
  CollectionResponsePropertyGroup,
  CreatedResponseProperty,
  CreatedResponsePropertyGroup,
  OptionInput,
  Properties,
  PropertyCreateParams,
  PropertyDeleteParams,
  PropertyGetParams,
  PropertyGroup,
  PropertyListParams,
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
import * as UsersAPI from './users/users';
import {
  UserCreateParams,
  UserGetParams,
  UserListParams,
  UserSearchParams,
  UserUpdateParams,
  Users,
} from './users/users';
import * as EmailsAPI from '../marketing/emails/emails';
import * as V4API from './associations/v4/v4';
import { Page } from '../../core/pagination';

export class CRM extends APIResource {
  appUninstalls: AppUninstallsAPI.AppUninstalls = new AppUninstallsAPI.AppUninstalls(this._client);
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
  imports: ImportsAPI.Imports = new ImportsAPI.Imports(this._client);
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  objectLibrary: ObjectLibraryAPI.ObjectLibrary = new ObjectLibraryAPI.ObjectLibrary(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  owners: OwnersAPI.Owners = new OwnersAPI.Owners(this._client);
  pipelines: PipelinesAPI.Pipelines = new PipelinesAPI.Pipelines(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  timeline: TimelineAPI.Timeline = new TimelineAPI.Timeline(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

export type SimplePublicObjectWithAssociationsPage = Page<SimplePublicObjectWithAssociations>;

export type AssociatedIDsPage = Page<AssociatedID>;

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

export interface BatchInputSimplePublicObjectBatchInput {
  inputs: Array<SimplePublicObjectBatchInput>;
}

export interface BatchInputSimplePublicObjectBatchInputForCreate {
  inputs: Array<SimplePublicObjectBatchInputForCreate>;
}

export interface BatchInputSimplePublicObjectBatchInputUpsert {
  inputs: Array<SimplePublicObjectBatchInputUpsert>;
}

export interface BatchInputSimplePublicObjectID {
  inputs: Array<SimplePublicObjectID>;
}

/**
 * Specifies the input for reading a batch of CRM objects, including arrays of
 * object IDs, requested property names (with optional history), and an optional
 * unique identifying property.
 */
export interface BatchReadInputSimplePublicObjectID {
  inputs: Array<SimplePublicObjectID>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: Array<string>;

  /**
   * Key-value pairs for setting properties for the new object and their histories.
   */
  propertiesWithHistory: Array<string>;

  /**
   * When using a custom unique value property to retrieve records, the name of the
   * property. Do not include this parameter if retrieving by record ID.
   */
  idProperty?: string;
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

/**
 * A public object batch response object
 */
export interface BatchResponseSimplePublicObject {
  /**
   * The timestamp when the batch processing was completed, in ISO 8601 format.
   */
  completedAt: string;

  results: Array<SimplePublicObject>;

  /**
   * The timestamp when the batch processing began, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request: "PENDING", "PROCESSING",
   * "CANCELLED", or "COMPLETE"
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  numErrors?: number;

  /**
   * The timestamp when the batch request was initially made, in ISO 8601 format.
   */
  requestedAt?: string;
}

/**
 * Represents the result of a batch upsert operation, including the operation’s
 * status, timestamps, and a list of successfully created or updated objects.
 */
export interface BatchResponseSimplePublicUpsertObject {
  /**
   * The timestamp when the batch process was completed, in ISO 8601 format.
   */
  completedAt: string;

  results: Array<SimplePublicUpsertObject>;

  /**
   * The timestamp when the batch process began execution, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request. Can be: "PENDING", "PROCESSING",
   * "CANCELED", or "COMPLETE".
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  numErrors?: number;

  /**
   * The timestamp when the batch process was initiated, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface CollectionResponseAssociatedID {
  results: Array<AssociatedID>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface CollectionResponseMultiAssociatedObjectWithLabel {
  results: Array<MultiAssociatedObjectWithLabel>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface CollectionResponseSimplePublicObjectWithAssociations {
  results: Array<SimplePublicObjectWithAssociations>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface CollectionResponseWithTotalSimplePublicObject {
  results: Array<SimplePublicObject>;

  /**
   * The number of available results
   */
  total: number;

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

export interface CreatedResponseSimplePublicObject {
  createdResourceId: string;

  /**
   * A simple public object.
   */
  entity: SimplePublicObject;

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

export interface FilterGroup {
  filters: Array<Filter>;
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

export interface PublicAssociationsForObject {
  to: Shared.PublicObjectID;

  types: Array<Shared.AssociationSpec>;
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

export interface PublicGdprDeleteInput {
  objectId: string;

  /**
   * The name of a property whose values are unique for this object
   */
  idProperty?: string;
}

export interface PublicMergeInput {
  objectIdToMerge: string;

  primaryObjectId: string;
}

/**
 * Describes a search request
 */
export interface PublicObjectSearchRequest {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after?: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups?: Array<FilterGroup>;

  /**
   * The maximum results to return, up to 200 objects.
   */
  limit?: number;

  /**
   * A list of property names to include in the response.
   */
  properties?: Array<string>;

  /**
   * The search query string, up to 3000 characters.
   */
  query?: string;

  /**
   * Specifies sorting order based on object properties.
   */
  sorts?: Array<string>;
}

/**
 * A simple public object.
 */
export interface SimplePublicObject {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * The timestamp when the object was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * Key-value pairs representing the properties of the object.
   */
  properties: { [key: string]: string | null };

  /**
   * The timestamp when the object was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * Whether the object is archived.
   */
  archived?: boolean;

  /**
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };
}

/**
 * Contains an array of CRM object records to be processed in a batch operation,
 * each defined by their ID and properties.
 */
export interface SimplePublicObjectBatchInput {
  /**
   * The id to be updated. This can be the object id, or the unique property value of
   * the idProperty property
   */
  id: string;

  /**
   * Key-value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * The name of a property whose values are unique for this object
   */
  idProperty?: string;

  /**
   * A unique identifier for tracing the request.
   */
  objectWriteTraceId?: string;
}

export interface SimplePublicObjectBatchInputForCreate {
  properties: { [key: string]: string };

  associations?: Array<PublicAssociationsForObject>;

  objectWriteTraceId?: string;
}

/**
 * Represents an object used in batch upsert operations, containing an object’s
 * unique identifier, its properties, and optionally the unique property name and a
 * write trace ID.
 */
export interface SimplePublicObjectBatchInputUpsert {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * The name of a property whose values are unique for this object
   */
  idProperty?: string;

  /**
   * An identifier for tracing the creation request.
   */
  objectWriteTraceId?: string;
}

export interface SimplePublicObjectID {
  id: string;
}

/**
 * Represents the input required to create or update a CRM object, containing an
 * object with property names and their corresponding values.
 */
export interface SimplePublicObjectInput {
  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };
}

/**
 * Is the input object used to create a new CRM object, containing the properties
 * to be set and optional associations to link the new record with other CRM
 * objects.
 */
export interface SimplePublicObjectInputForCreate {
  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };

  associations?: Array<PublicAssociationsForObject>;
}

/**
 * Represents a CRM object along with its properties, timestamps, and a set of
 * associated object IDs grouped by association type.
 */
export interface SimplePublicObjectWithAssociations {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * The timestamp when the object was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string | null };

  /**
   * The timestamp when the object was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * Whether the object is archived.
   */
  archived?: boolean;

  /**
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  /**
   * A list defining relationships with other objects.
   */
  associations?: { [key: string]: CollectionResponseAssociatedID };

  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };
}

/**
 * Represents a CRM object that has either been created or updated (upserted)
 */
export interface SimplePublicUpsertObject {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * The timestamp when the object was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * Whether the property is new.
   */
  new: boolean;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * The timestamp when the object was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * Whether the object is archived.
   */
  archived?: boolean;

  /**
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };
}

/**
 * Property model that includes timestamp.
 */
export interface ValueWithTimestamp {
  /**
   * The property type.
   */
  sourceType: string;

  /**
   * The timestamp when the property was updated, in ISO 8601 format.
   */
  timestamp: string;

  /**
   * The property value.
   */
  value: string;

  /**
   * The unique ID of the property.
   */
  sourceId?: string;

  /**
   * A human-readable label.
   */
  sourceLabel?: string;

  /**
   * The ID of the user who last updated the property.
   */
  updatedByUserId?: number;
}

CRM.AppUninstalls = AppUninstalls;
CRM.Associations = Associations;
CRM.Exports = Exports;
CRM.Extensions = Extensions;
CRM.Imports = Imports;
CRM.Lists = Lists;
CRM.ObjectLibrary = ObjectLibrary;
CRM.Objects = Objects;
CRM.Owners = Owners;
CRM.Pipelines = Pipelines;
CRM.Properties = Properties;
CRM.Timeline = Timeline;
CRM.Users = Users;

export declare namespace CRM {
  export {
    type AssociatedID as AssociatedID,
    type AssociationSpecWithLabel as AssociationSpecWithLabel,
    type BatchInputSimplePublicObjectBatchInput as BatchInputSimplePublicObjectBatchInput,
    type BatchInputSimplePublicObjectBatchInputForCreate as BatchInputSimplePublicObjectBatchInputForCreate,
    type BatchInputSimplePublicObjectBatchInputUpsert as BatchInputSimplePublicObjectBatchInputUpsert,
    type BatchInputSimplePublicObjectID as BatchInputSimplePublicObjectID,
    type BatchReadInputSimplePublicObjectID as BatchReadInputSimplePublicObjectID,
    type BatchResponsePublicDefaultAssociation as BatchResponsePublicDefaultAssociation,
    type BatchResponseSimplePublicObject as BatchResponseSimplePublicObject,
    type BatchResponseSimplePublicUpsertObject as BatchResponseSimplePublicUpsertObject,
    type CollectionResponseAssociatedID as CollectionResponseAssociatedID,
    type CollectionResponseMultiAssociatedObjectWithLabel as CollectionResponseMultiAssociatedObjectWithLabel,
    type CollectionResponseSimplePublicObjectWithAssociations as CollectionResponseSimplePublicObjectWithAssociations,
    type CollectionResponseWithTotalSimplePublicObject as CollectionResponseWithTotalSimplePublicObject,
    type CreatedResponseLabelsBetweenObjectPair as CreatedResponseLabelsBetweenObjectPair,
    type CreatedResponseSimplePublicObject as CreatedResponseSimplePublicObject,
    type Filter as Filter,
    type FilterGroup as FilterGroup,
    type LabelsBetweenObjectPair as LabelsBetweenObjectPair,
    type MultiAssociatedObjectWithLabel as MultiAssociatedObjectWithLabel,
    type PublicAssociationsForObject as PublicAssociationsForObject,
    type PublicDefaultAssociation as PublicDefaultAssociation,
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
    ObjectLibrary as ObjectLibrary,
    type ObjectTypeEnablementPublicResponse as ObjectTypeEnablementPublicResponse,
    type PortalObjectTypeEnablementPublicResponse as PortalObjectTypeEnablementPublicResponse,
  };

  export { Objects as Objects };

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
    type BatchReadInputPropertyName as BatchReadInputPropertyName,
    type CollectionResponseProperty as CollectionResponseProperty,
    type CollectionResponsePropertyGroup as CollectionResponsePropertyGroup,
    type CreatedResponseProperty as CreatedResponseProperty,
    type CreatedResponsePropertyGroup as CreatedResponsePropertyGroup,
    type OptionInput as OptionInput,
    type PropertyGroup as PropertyGroup,
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

  export {
    Users as Users,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetParams as UserGetParams,
    type UserSearchParams as UserSearchParams,
  };
}
