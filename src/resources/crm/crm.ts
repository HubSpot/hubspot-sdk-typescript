// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as AppUninstallsAPI from './app-uninstalls';
import { AppUninstalls } from './app-uninstalls';
import * as ExportsAPI from './exports';
import {
  ActionResponseWithSingleResultUri,
  ExportCreateAsyncParams,
  Exports,
  PublicCrmSearchRequest,
  PublicExportListRequest,
  PublicExportRequest,
  PublicExportResponse,
  PublicExportViewRequest,
} from './exports';
import * as ImportsAPI from './imports';
import {
  CollectionResponsePublicImportErrorForwardPaging,
  CollectionResponsePublicImportResponseForwardPaging,
  ImportCreateParams,
  ImportListErrorsParams,
  ImportListParams,
  ImportRowCore,
  ImportTemplate,
  Imports,
  PublicImportError,
  PublicImportErrorsPage,
  PublicImportMetadata,
  PublicImportResponse,
  PublicImportResponsesPage,
  PublicObjectListRecord,
} from './imports';
import * as LimitsAPI from './limits';
import {
  AssociationLabelLimitResponse,
  AssociationRecordLimitResponse,
  AtLimitRecordSample,
  CalculatedPropertyLimitResponse,
  CollectionResponseAssociationLabelLimitResponseNoPaging,
  CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging,
  CustomObjectLimitResponse,
  CustomObjectRecordLimitResponse,
  CustomPropertyLimitResponse,
  LimitAndUsageForObjectType,
  LimitGetAssociationLabelLimitsParams,
  LimitGetAssociationRecordsLimitsByObjectTypeParams,
  Limits,
  NearLimitRecordSample,
  ObjectTypeDefinition,
  ObjectTypeNearOrAtAssociationLimit,
  PipelineLimitResponse,
  RecordLimitResponse,
  UsageForObjectType,
} from './limits';
import * as ListsAPI from './lists';
import {
  APICollectionResponseJoinTimeAndRecordID,
  APICollectionResponseRecordListMembership,
  BatchInputRecordIDInput,
  BatchResponseRecordIDWithMemberships,
  BatchResponseRecordIDWithMembershipsWithErrors,
  JoinTimeAndRecordID,
  JoinTimeAndRecordIDsPage,
  ListAddAndRemoveMembershipsParams,
  ListAddMembershipsFromParams,
  ListAddMembershipsParams,
  ListBatchReadMembershipsParams,
  ListCreateFolderParams,
  ListCreateIDMappingParams,
  ListCreateParams,
  ListCreateRequest,
  ListCreateResponse,
  ListFetchResponse,
  ListFilterUpdateRequest,
  ListFolderCreateRequest,
  ListFolderCreateResponse,
  ListFolderFetchResponse,
  ListGetByObjectTypeAndNameParams,
  ListGetIDMappingParams,
  ListGetMembershipsJoinOrderParams,
  ListGetParams,
  ListGetRecordMembershipsParams,
  ListGetSizeAndEditsHistoryBetweenParams,
  ListListBySearchParams,
  ListListFoldersParams,
  ListListMembershipsParams,
  ListListParams,
  ListMoveFolderParams,
  ListMoveListParams,
  ListMoveRequest,
  ListRemoveMembershipsParams,
  ListRenameFolderParams,
  ListSearchRequest,
  ListSearchResponse,
  ListSizeAndEditHistoryResponse,
  ListSizeDataPoint,
  ListUpdateListFiltersParams,
  ListUpdateListNameParams,
  ListUpdateResponse,
  ListUpdateScheduleConversionParams,
  Lists,
  ListsByIDResponse,
  MembershipChangeRequest,
  MembershipsUpdateResponse,
  PublicAbsoluteComparativeTimestampRefineBy,
  PublicAbsoluteRangedTimestampRefineBy,
  PublicAdsSearchFilter,
  PublicAdsTimeFilter,
  PublicAllHistoryRefineBy,
  PublicAllPropertyTypesOperation,
  PublicAndFilterBranch,
  PublicAssociationFilterBranch,
  PublicAssociationInListFilter,
  PublicBatchMigrationMapping,
  PublicBoolPropertyOperation,
  PublicCalendarDatePropertyOperation,
  PublicCampaignInfluencedFilter,
  PublicCommunicationSubscriptionFilter,
  PublicComparativeDatePropertyOperation,
  PublicComparativePropertyUpdatedOperation,
  PublicConstantFilter,
  PublicCtaAnalyticsFilter,
  PublicDatePoint,
  PublicDatePropertyOperation,
  PublicDateTimePropertyOperation,
  PublicEmailEventFilter,
  PublicEmailSubscriptionFilter,
  PublicEnumerationPropertyOperation,
  PublicEventAnalyticsFilter,
  PublicEventFilterMetadata,
  PublicFiscalQuarterReference,
  PublicFiscalYearReference,
  PublicFormSubmissionFilter,
  PublicFormSubmissionOnPageFilter,
  PublicInListFilter,
  PublicInListFilterMetadata,
  PublicIndexOffset,
  PublicIndexedTimePoint,
  PublicIntegrationEventFilter,
  PublicListConversionDate,
  PublicListConversionInactivity,
  PublicListConversionResponse,
  PublicListConversionTime,
  PublicListFolder,
  PublicListPermissions,
  PublicMembershipSettings,
  PublicMigrationMapping,
  PublicMonthReference,
  PublicMultiStringPropertyOperation,
  PublicNotAllFilterBranch,
  PublicNotAnyFilterBranch,
  PublicNowReference,
  PublicNumAssociationsFilter,
  PublicNumOccurrencesRefineBy,
  PublicNumberPropertyOperation,
  PublicObjectList,
  PublicObjectListSearchResult,
  PublicOrFilterBranch,
  PublicPageViewAnalyticsFilter,
  PublicPrivacyAnalyticsFilter,
  PublicPropertyAssociationFilterBranch,
  PublicPropertyAssociationInListFilter,
  PublicPropertyFilter,
  PublicPropertyReferencedTime,
  PublicQuarterReference,
  PublicRangedDatePropertyOperation,
  PublicRangedNumberPropertyOperation,
  PublicRangedTimeOperation,
  PublicRelativeComparativeTimestampRefineBy,
  PublicRelativeRangedTimestampRefineBy,
  PublicRestrictedFilterBranch,
  PublicRollingDateRangePropertyOperation,
  PublicRollingPropertyUpdatedOperation,
  PublicSetOccurrencesRefineBy,
  PublicStringPropertyOperation,
  PublicSurveyMonkeyFilter,
  PublicSurveyMonkeyValueFilter,
  PublicTimeOffset,
  PublicTimePointOperation,
  PublicTodayReference,
  PublicUnifiedEventsFilter,
  PublicUnifiedEventsFilterBranch,
  PublicWebinarFilter,
  PublicWeekReference,
  PublicYearReference,
  RecordIDInput,
  RecordIDWithMemberships,
  RecordListMembership,
} from './lists';
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
  PipelineCreateStageParams,
  PipelineDeleteParams,
  PipelineDeleteStageParams,
  PipelineGetParams,
  PipelineGetStageParams,
  PipelineInput,
  PipelineListAuditParams,
  PipelineListStageAuditParams,
  PipelineListStagesParams,
  PipelinePatchInput,
  PipelineReplaceInput,
  PipelineStage,
  PipelineStageInput,
  PipelineStagePatchInput,
  PipelineStageReplaceInput,
  PipelineUpdateAllPropertiesParams,
  PipelineUpdateParams,
  PipelineUpdateStageAllPropertiesParams,
  PipelineUpdateStageParams,
  Pipelines,
  PublicAuditInfo,
} from './pipelines';
import * as PropertiesValidationsAPI from './properties-validations';
import {
  CollectionResponsePublicPropertyValidationRuleMapNoPaging,
  CollectionResponsePublicPropertyValidationRuleNoPaging,
  PropertiesValidationGetByObjectTypeIDAndPropertyNameParams,
  PropertiesValidationGetByObjectTypeIDPropertyNameAndRuleTypeParams,
  PropertiesValidationUpdateByObjectTypeIDPropertyNameAndRuleTypeParams,
  PropertiesValidations,
  PublicPropertyValidationRule,
  PublicPropertyValidationRuleMap,
  PublicPropertyValidationRuleUpdate,
} from './properties-validations';
import * as AssociationsSchemaAPI from './associations-schema/associations-schema';
import {
  AssociationsSchema,
  BatchInputPublicAssociationDefinitionConfigurationCreateRequest,
  BatchInputPublicAssociationDefinitionConfigurationUpdateRequest,
  BatchInputPublicAssociationSpec,
  BatchResponsePublicAssociationDefinitionConfigurationUpdateResult,
  BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors,
  BatchResponsePublicAssociationDefinitionUserConfiguration,
  BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors,
  CollectionResponseAssociationSpecWithLabelNoPaging,
  CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging,
  PublicAssociationDefinitionConfigurationCreateRequest,
  PublicAssociationDefinitionConfigurationUpdateRequest,
  PublicAssociationDefinitionConfigurationUpdateResult,
  PublicAssociationDefinitionCreateRequest,
  PublicAssociationDefinitionUpdateRequest,
  PublicAssociationDefinitionUserConfiguration,
  PublicAssociationSpec,
} from './associations-schema/associations-schema';
import * as AssociationsAPI from './associations/associations';
import {
  AssociationDeleteParams,
  AssociationListParams,
  AssociationSearchParams,
  AssociationUpdateAssociationLabelsParams,
  Associations,
  BatchInputPublicAssociationMultiArchive,
  BatchInputPublicAssociationMultiPost,
  BatchInputPublicDefaultAssociationMultiPost,
  BatchInputPublicFetchAssociationsBatchRequest,
  BatchResponseLabelsBetweenObjectPair,
  BatchResponseLabelsBetweenObjectPairWithErrors,
  BatchResponsePublicAssociationMultiWithLabel,
  BatchResponsePublicAssociationMultiWithLabelWithErrors,
  DateTime,
  PublicAssociationMultiArchive,
  PublicAssociationMultiPost,
  PublicAssociationMultiWithLabel,
  PublicDefaultAssociationMultiPost,
  PublicFetchAssociationsBatchRequest,
  ReportCreationResponse,
} from './associations/associations';
import * as DealSplitsAPI from './deal-splits/deal-splits';
import {
  BatchResponseDealToDealSplits,
  BatchResponseDealToDealSplitsWithErrors,
  DealSplits,
  DealToDealSplits,
  PublicDealSplitInput,
  PublicDealSplitsBatchCreateRequest,
  PublicDealSplitsCreateRequest,
} from './deal-splits/deal-splits';
import * as ExtensionsAPI from './extensions/extensions';
import { Extensions } from './extensions/extensions';
import * as FeatureFlagsAPI from './feature-flags/feature-flags';
import {
  BatchPortalEntry,
  FeatureFlagDeleteParams,
  FeatureFlagDeletePortalStateParams,
  FeatureFlagGetParams,
  FeatureFlagGetPortalStateParams,
  FeatureFlagListPortalsParams,
  FeatureFlagUpdateParams,
  FeatureFlagUpdatePortalStateParams,
  FeatureFlags,
  FlagPutRequest,
  FlagResponse,
  FlagsForAppResponse,
  PortalFlagStateBatchDeleteRequest,
  PortalFlagStateBatchPutRequest,
  PortalFlagStateBatchResponse,
  PortalFlagStatePutRequest,
  PortalFlagStateResponse,
} from './feature-flags/feature-flags';
import * as ObjectLibraryAPI from './object-library/object-library';
import { ObjectLibrary } from './object-library/object-library';
import * as ObjectSchemasAPI from './object-schemas/object-schemas';
import {
  CollectionResponseObjectSchemaNoPaging,
  ObjectSchema,
  ObjectSchemaBatchReadRequest,
  ObjectSchemaCreateAssociationParams,
  ObjectSchemaCreateParams,
  ObjectSchemaDeleteAssociationParams,
  ObjectSchemaDeleteParams,
  ObjectSchemaEgg,
  ObjectSchemaGetParams,
  ObjectSchemaListParams,
  ObjectSchemaUpdateParams,
  ObjectSchemas,
  ObjectTypePropertyCreate,
} from './object-schemas/object-schemas';
import * as ObjectsAPI from './objects/objects';
import {
  AssociatedID,
  BatchInputSimplePublicObjectBatchInput,
  BatchInputSimplePublicObjectBatchInputForCreate,
  BatchInputSimplePublicObjectBatchInputUpsert,
  BatchInputSimplePublicObjectID,
  BatchReadInputSimplePublicObjectID,
  BatchResponseSimplePublicObject,
  BatchResponseSimplePublicObjectWithErrors,
  BatchResponseSimplePublicUpsertObject,
  BatchResponseSimplePublicUpsertObjectWithErrors,
  CollectionResponseAssociatedID,
  CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
  Objects,
  PublicAssociationsForObject,
  PublicMergeInput,
  SimplePublicObjectBatchInput,
  SimplePublicObjectBatchInputForCreate,
  SimplePublicObjectBatchInputUpsert,
  SimplePublicObjectID,
  SimplePublicObjectInput,
  SimplePublicObjectInputForCreate,
  SimplePublicObjectWithAssociations,
  SimplePublicUpsertObject,
} from './objects/objects';
import * as PropertiesAPI from './properties/properties';
import {
  BatchInputPropertyCreate,
  BatchResponseProperty,
  BatchResponsePropertyWithErrors,
  CollectionResponsePropertyNoPaging,
  Properties,
  PropertyCreate,
  PropertyCreateParams,
  PropertyDeleteParams,
  PropertyGetParams,
  PropertyListParams,
  PropertyUpdate,
  PropertyUpdateParams,
} from './properties/properties';
import * as TimelineAPI from './timeline/timeline';
import {
  AppEventOccurrence,
  AppEventResolutionResponse,
  BatchInputAppEventOccurrence,
  BatchResponseAppEventOccurrence,
  DeveloperQualifiedSymbol,
  ExternalAppEventResolutionRequest,
  Timeline,
  TimelineCreateEventParams,
  TimelineCreateProjectTypeParams,
  TimelineEventIFrame,
} from './timeline/timeline';
import { Page } from '../../core/pagination';

export class Crm extends APIResource {
  appUninstalls: AppUninstallsAPI.AppUninstalls = new AppUninstallsAPI.AppUninstalls(this._client);
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  associationsSchema: AssociationsSchemaAPI.AssociationsSchema = new AssociationsSchemaAPI.AssociationsSchema(
    this._client,
  );
  dealSplits: DealSplitsAPI.DealSplits = new DealSplitsAPI.DealSplits(this._client);
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
  featureFlags: FeatureFlagsAPI.FeatureFlags = new FeatureFlagsAPI.FeatureFlags(this._client);
  imports: ImportsAPI.Imports = new ImportsAPI.Imports(this._client);
  limits: LimitsAPI.Limits = new LimitsAPI.Limits(this._client);
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  objectLibrary: ObjectLibraryAPI.ObjectLibrary = new ObjectLibraryAPI.ObjectLibrary(this._client);
  objectSchemas: ObjectSchemasAPI.ObjectSchemas = new ObjectSchemasAPI.ObjectSchemas(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  owners: OwnersAPI.Owners = new OwnersAPI.Owners(this._client);
  pipelines: PipelinesAPI.Pipelines = new PipelinesAPI.Pipelines(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  propertiesValidations: PropertiesValidationsAPI.PropertiesValidations =
    new PropertiesValidationsAPI.PropertiesValidations(this._client);
  timeline: TimelineAPI.Timeline = new TimelineAPI.Timeline(this._client);
}

export type MultiAssociatedObjectWithLabelsPage = Page<MultiAssociatedObjectWithLabel>;

/**
 * Defines the type, direction, and details of the relationship between two CRM
 * objects.
 */
export interface AssociationSpecWithLabel {
  /**
   * The category of the association, such as HUBSPOT_DEFINED, USER_DEFINED, or
   * INTEGRATOR_DEFINED.
   */
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK';

  /**
   * The unique identifier for the type of association.
   */
  typeId: number;

  /**
   * A label describing the association between two objects.
   */
  label?: string;
}

/**
 * The response returned after performing a batch operation on associations.
 */
export interface BatchResponsePublicDefaultAssociation {
  /**
   * The timestamp when the batch process was completed, in ISO 8601 format.
   */
  completedAt: string;

  results: Array<PublicDefaultAssociation>;

  /**
   * The timestamp when the batch process began execution, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request: "PENDING", "PROCESSING",
   * "CANCELLED", or "COMPLETE".
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch processing.
   */
  numErrors?: number;

  /**
   * The timestamp when the batch process was initiated, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface CollectionResponseMultiAssociatedObjectWithLabelForwardPaging {
  results: Array<MultiAssociatedObjectWithLabel>;

  paging?: Shared.ForwardPaging;
}

/**
 * Represents a list of simple objects returned from an API request, along with the
 * total count of objects available.
 */
export interface CollectionResponseWithTotalSimplePublicObject {
  results: Array<SimplePublicObject>;

  /**
   * The total number of objects in the collection.
   */
  total: number;

  paging?: Shared.Paging;
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
    | 'BETWEEN'
    | 'CONTAINS_TOKEN'
    | 'EQ'
    | 'GT'
    | 'GTE'
    | 'HAS_PROPERTY'
    | 'IN'
    | 'LT'
    | 'LTE'
    | 'NEQ'
    | 'NOT_CONTAINS_TOKEN'
    | 'NOT_HAS_PROPERTY'
    | 'NOT_IN';

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

/**
 * The relationship descriptors applicable between two object types.
 */
export interface LabelsBetweenObjectPair {
  /**
   * The ID of the source object in the association.
   */
  fromObjectId: string;

  /**
   * The type ID of the source object in the association.
   */
  fromObjectTypeId: string;

  /**
   * An array of labels associated with the relationship between the objects.
   */
  labels: Array<string>;

  /**
   * The ID of the target object in the association.
   */
  toObjectId: string;

  /**
   * The type ID of the target object in the association.
   */
  toObjectTypeId: string;
}

/**
 * Represents an object that is associated with multiple other objects, with
 * optional context.
 */
export interface MultiAssociatedObjectWithLabel {
  associationTypes: Array<AssociationSpecWithLabel>;

  /**
   * The unique identifier for the target object in the association.
   */
  toObjectId: string;
}

/**
 * A HubSpot property
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
  options: Array<Shared.Option>;

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
   * The name of the related currency property.
   */
  currencyPropertyName?: string;

  /**
   * Indicates the sensitivity level of the property, such as "non_sensitive",
   * "sensitive", or "highly_sensitive".
   */
  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  /**
   * Controls how date properties are displayed in the HubSpot UI, with options such
   * as 'absolute', 'absolute_with_relative', 'time_since', and 'time_until'.
   */
  dateDisplayHint?: 'absolute' | 'absolute_with_relative' | 'time_since' | 'time_until';

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
   * Hidden options won't be shown in HubSpot.
   */
  hidden?: boolean;

  /**
   * This will be true for default object properties built into HubSpot.
   */
  hubspotDefined?: boolean;

  modificationMetadata?: Shared.PropertyModificationMetadata;

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
   * When the object type was last updated.
   */
  updatedAt?: string;

  /**
   * The internal user ID of the user who updated the property in HubSpot. This field
   * may not exist if the property was updated outside of HubSpot.
   */
  updatedUserId?: string;
}

export interface PublicDefaultAssociation {
  /**
   * Defines the type, direction, and details of the relationship between two CRM
   * objects.
   */
  associationSpec: Shared.AssociationSpec;

  /**
   * Contains the Id of a Public Object
   */
  from: Shared.PublicObjectID;

  /**
   * Contains the Id of a Public Object
   */
  to: Shared.PublicObjectID;
}

/**
 * Describes a search request
 */
export interface PublicObjectSearchRequest {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups: Array<FilterGroup>;

  /**
   * The maximum results to return, up to 200 objects.
   */
  limit: number;

  /**
   * A list of property names to include in the response.
   */
  properties: Array<string>;

  /**
   * Specifies sorting order based on object properties.
   */
  sorts: Array<string>;

  /**
   * The search query string, up to 3000 characters.
   */
  query?: string;
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
   * Whether the object is archived.
   */
  archived: boolean;

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
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  /**
   * A unique identifier for tracing the creation request.
   */
  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };

  /**
   * The URL associated with the object.
   */
  url?: string;
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

Crm.AppUninstalls = AppUninstalls;
Crm.Associations = Associations;
Crm.AssociationsSchema = AssociationsSchema;
Crm.DealSplits = DealSplits;
Crm.Exports = Exports;
Crm.Extensions = Extensions;
Crm.FeatureFlags = FeatureFlags;
Crm.Imports = Imports;
Crm.Limits = Limits;
Crm.Lists = Lists;
Crm.ObjectLibrary = ObjectLibrary;
Crm.ObjectSchemas = ObjectSchemas;
Crm.Objects = Objects;
Crm.Owners = Owners;
Crm.Pipelines = Pipelines;
Crm.Properties = Properties;
Crm.PropertiesValidations = PropertiesValidations;
Crm.Timeline = Timeline;

export declare namespace Crm {
  export {
    type AssociationSpecWithLabel as AssociationSpecWithLabel,
    type BatchResponsePublicDefaultAssociation as BatchResponsePublicDefaultAssociation,
    type CollectionResponseMultiAssociatedObjectWithLabelForwardPaging as CollectionResponseMultiAssociatedObjectWithLabelForwardPaging,
    type CollectionResponseWithTotalSimplePublicObject as CollectionResponseWithTotalSimplePublicObject,
    type Filter as Filter,
    type FilterGroup as FilterGroup,
    type LabelsBetweenObjectPair as LabelsBetweenObjectPair,
    type MultiAssociatedObjectWithLabel as MultiAssociatedObjectWithLabel,
    type Property as Property,
    type PublicDefaultAssociation as PublicDefaultAssociation,
    type PublicObjectSearchRequest as PublicObjectSearchRequest,
    type SimplePublicObject as SimplePublicObject,
    type ValueWithTimestamp as ValueWithTimestamp,
  };

  export { AppUninstalls as AppUninstalls };

  export {
    Associations as Associations,
    type BatchInputPublicAssociationMultiArchive as BatchInputPublicAssociationMultiArchive,
    type BatchInputPublicAssociationMultiPost as BatchInputPublicAssociationMultiPost,
    type BatchInputPublicDefaultAssociationMultiPost as BatchInputPublicDefaultAssociationMultiPost,
    type BatchInputPublicFetchAssociationsBatchRequest as BatchInputPublicFetchAssociationsBatchRequest,
    type BatchResponseLabelsBetweenObjectPair as BatchResponseLabelsBetweenObjectPair,
    type BatchResponseLabelsBetweenObjectPairWithErrors as BatchResponseLabelsBetweenObjectPairWithErrors,
    type BatchResponsePublicAssociationMultiWithLabel as BatchResponsePublicAssociationMultiWithLabel,
    type BatchResponsePublicAssociationMultiWithLabelWithErrors as BatchResponsePublicAssociationMultiWithLabelWithErrors,
    type DateTime as DateTime,
    type PublicAssociationMultiArchive as PublicAssociationMultiArchive,
    type PublicAssociationMultiPost as PublicAssociationMultiPost,
    type PublicAssociationMultiWithLabel as PublicAssociationMultiWithLabel,
    type PublicDefaultAssociationMultiPost as PublicDefaultAssociationMultiPost,
    type PublicFetchAssociationsBatchRequest as PublicFetchAssociationsBatchRequest,
    type ReportCreationResponse as ReportCreationResponse,
    type AssociationListParams as AssociationListParams,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationSearchParams as AssociationSearchParams,
    type AssociationUpdateAssociationLabelsParams as AssociationUpdateAssociationLabelsParams,
  };

  export {
    AssociationsSchema as AssociationsSchema,
    type BatchInputPublicAssociationDefinitionConfigurationCreateRequest as BatchInputPublicAssociationDefinitionConfigurationCreateRequest,
    type BatchInputPublicAssociationDefinitionConfigurationUpdateRequest as BatchInputPublicAssociationDefinitionConfigurationUpdateRequest,
    type BatchInputPublicAssociationSpec as BatchInputPublicAssociationSpec,
    type BatchResponsePublicAssociationDefinitionConfigurationUpdateResult as BatchResponsePublicAssociationDefinitionConfigurationUpdateResult,
    type BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors as BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors,
    type BatchResponsePublicAssociationDefinitionUserConfiguration as BatchResponsePublicAssociationDefinitionUserConfiguration,
    type BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors as BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors,
    type CollectionResponseAssociationSpecWithLabelNoPaging as CollectionResponseAssociationSpecWithLabelNoPaging,
    type CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging as CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging,
    type PublicAssociationDefinitionConfigurationCreateRequest as PublicAssociationDefinitionConfigurationCreateRequest,
    type PublicAssociationDefinitionConfigurationUpdateRequest as PublicAssociationDefinitionConfigurationUpdateRequest,
    type PublicAssociationDefinitionConfigurationUpdateResult as PublicAssociationDefinitionConfigurationUpdateResult,
    type PublicAssociationDefinitionCreateRequest as PublicAssociationDefinitionCreateRequest,
    type PublicAssociationDefinitionUpdateRequest as PublicAssociationDefinitionUpdateRequest,
    type PublicAssociationDefinitionUserConfiguration as PublicAssociationDefinitionUserConfiguration,
    type PublicAssociationSpec as PublicAssociationSpec,
  };

  export {
    DealSplits as DealSplits,
    type BatchResponseDealToDealSplits as BatchResponseDealToDealSplits,
    type BatchResponseDealToDealSplitsWithErrors as BatchResponseDealToDealSplitsWithErrors,
    type DealToDealSplits as DealToDealSplits,
    type PublicDealSplitInput as PublicDealSplitInput,
    type PublicDealSplitsBatchCreateRequest as PublicDealSplitsBatchCreateRequest,
    type PublicDealSplitsCreateRequest as PublicDealSplitsCreateRequest,
  };

  export {
    Exports as Exports,
    type ActionResponseWithSingleResultUri as ActionResponseWithSingleResultUri,
    type PublicCrmSearchRequest as PublicCrmSearchRequest,
    type PublicExportListRequest as PublicExportListRequest,
    type PublicExportRequest as PublicExportRequest,
    type PublicExportResponse as PublicExportResponse,
    type PublicExportViewRequest as PublicExportViewRequest,
    type ExportCreateAsyncParams as ExportCreateAsyncParams,
  };

  export { Extensions as Extensions };

  export {
    FeatureFlags as FeatureFlags,
    type BatchPortalEntry as BatchPortalEntry,
    type FlagPutRequest as FlagPutRequest,
    type FlagResponse as FlagResponse,
    type FlagsForAppResponse as FlagsForAppResponse,
    type PortalFlagStateBatchDeleteRequest as PortalFlagStateBatchDeleteRequest,
    type PortalFlagStateBatchPutRequest as PortalFlagStateBatchPutRequest,
    type PortalFlagStateBatchResponse as PortalFlagStateBatchResponse,
    type PortalFlagStatePutRequest as PortalFlagStatePutRequest,
    type PortalFlagStateResponse as PortalFlagStateResponse,
    type FeatureFlagUpdateParams as FeatureFlagUpdateParams,
    type FeatureFlagDeleteParams as FeatureFlagDeleteParams,
    type FeatureFlagDeletePortalStateParams as FeatureFlagDeletePortalStateParams,
    type FeatureFlagGetParams as FeatureFlagGetParams,
    type FeatureFlagGetPortalStateParams as FeatureFlagGetPortalStateParams,
    type FeatureFlagListPortalsParams as FeatureFlagListPortalsParams,
    type FeatureFlagUpdatePortalStateParams as FeatureFlagUpdatePortalStateParams,
  };

  export {
    Imports as Imports,
    type CollectionResponsePublicImportErrorForwardPaging as CollectionResponsePublicImportErrorForwardPaging,
    type CollectionResponsePublicImportResponseForwardPaging as CollectionResponsePublicImportResponseForwardPaging,
    type ImportRowCore as ImportRowCore,
    type ImportTemplate as ImportTemplate,
    type PublicImportError as PublicImportError,
    type PublicImportMetadata as PublicImportMetadata,
    type PublicImportResponse as PublicImportResponse,
    type PublicObjectListRecord as PublicObjectListRecord,
    type PublicImportResponsesPage as PublicImportResponsesPage,
    type PublicImportErrorsPage as PublicImportErrorsPage,
    type ImportCreateParams as ImportCreateParams,
    type ImportListParams as ImportListParams,
    type ImportListErrorsParams as ImportListErrorsParams,
  };

  export {
    Limits as Limits,
    type AssociationLabelLimitResponse as AssociationLabelLimitResponse,
    type AssociationRecordLimitResponse as AssociationRecordLimitResponse,
    type AtLimitRecordSample as AtLimitRecordSample,
    type CalculatedPropertyLimitResponse as CalculatedPropertyLimitResponse,
    type CollectionResponseAssociationLabelLimitResponseNoPaging as CollectionResponseAssociationLabelLimitResponseNoPaging,
    type CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging as CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging,
    type CustomObjectLimitResponse as CustomObjectLimitResponse,
    type CustomObjectRecordLimitResponse as CustomObjectRecordLimitResponse,
    type CustomPropertyLimitResponse as CustomPropertyLimitResponse,
    type LimitAndUsageForObjectType as LimitAndUsageForObjectType,
    type NearLimitRecordSample as NearLimitRecordSample,
    type ObjectTypeDefinition as ObjectTypeDefinition,
    type ObjectTypeNearOrAtAssociationLimit as ObjectTypeNearOrAtAssociationLimit,
    type PipelineLimitResponse as PipelineLimitResponse,
    type RecordLimitResponse as RecordLimitResponse,
    type UsageForObjectType as UsageForObjectType,
    type LimitGetAssociationLabelLimitsParams as LimitGetAssociationLabelLimitsParams,
    type LimitGetAssociationRecordsLimitsByObjectTypeParams as LimitGetAssociationRecordsLimitsByObjectTypeParams,
  };

  export {
    Lists as Lists,
    type APICollectionResponseJoinTimeAndRecordID as APICollectionResponseJoinTimeAndRecordID,
    type APICollectionResponseRecordListMembership as APICollectionResponseRecordListMembership,
    type BatchInputRecordIDInput as BatchInputRecordIDInput,
    type BatchResponseRecordIDWithMemberships as BatchResponseRecordIDWithMemberships,
    type BatchResponseRecordIDWithMembershipsWithErrors as BatchResponseRecordIDWithMembershipsWithErrors,
    type JoinTimeAndRecordID as JoinTimeAndRecordID,
    type ListCreateRequest as ListCreateRequest,
    type ListCreateResponse as ListCreateResponse,
    type ListFetchResponse as ListFetchResponse,
    type ListFilterUpdateRequest as ListFilterUpdateRequest,
    type ListFolderCreateRequest as ListFolderCreateRequest,
    type ListFolderCreateResponse as ListFolderCreateResponse,
    type ListFolderFetchResponse as ListFolderFetchResponse,
    type ListMoveRequest as ListMoveRequest,
    type ListSearchRequest as ListSearchRequest,
    type ListSearchResponse as ListSearchResponse,
    type ListSizeAndEditHistoryResponse as ListSizeAndEditHistoryResponse,
    type ListSizeDataPoint as ListSizeDataPoint,
    type ListUpdateResponse as ListUpdateResponse,
    type ListsByIDResponse as ListsByIDResponse,
    type MembershipChangeRequest as MembershipChangeRequest,
    type MembershipsUpdateResponse as MembershipsUpdateResponse,
    type PublicAbsoluteComparativeTimestampRefineBy as PublicAbsoluteComparativeTimestampRefineBy,
    type PublicAbsoluteRangedTimestampRefineBy as PublicAbsoluteRangedTimestampRefineBy,
    type PublicAdsSearchFilter as PublicAdsSearchFilter,
    type PublicAdsTimeFilter as PublicAdsTimeFilter,
    type PublicAllHistoryRefineBy as PublicAllHistoryRefineBy,
    type PublicAllPropertyTypesOperation as PublicAllPropertyTypesOperation,
    type PublicAndFilterBranch as PublicAndFilterBranch,
    type PublicAssociationFilterBranch as PublicAssociationFilterBranch,
    type PublicAssociationInListFilter as PublicAssociationInListFilter,
    type PublicBatchMigrationMapping as PublicBatchMigrationMapping,
    type PublicBoolPropertyOperation as PublicBoolPropertyOperation,
    type PublicCalendarDatePropertyOperation as PublicCalendarDatePropertyOperation,
    type PublicCampaignInfluencedFilter as PublicCampaignInfluencedFilter,
    type PublicCommunicationSubscriptionFilter as PublicCommunicationSubscriptionFilter,
    type PublicComparativeDatePropertyOperation as PublicComparativeDatePropertyOperation,
    type PublicComparativePropertyUpdatedOperation as PublicComparativePropertyUpdatedOperation,
    type PublicConstantFilter as PublicConstantFilter,
    type PublicCtaAnalyticsFilter as PublicCtaAnalyticsFilter,
    type PublicDatePoint as PublicDatePoint,
    type PublicDatePropertyOperation as PublicDatePropertyOperation,
    type PublicDateTimePropertyOperation as PublicDateTimePropertyOperation,
    type PublicEmailEventFilter as PublicEmailEventFilter,
    type PublicEmailSubscriptionFilter as PublicEmailSubscriptionFilter,
    type PublicEnumerationPropertyOperation as PublicEnumerationPropertyOperation,
    type PublicEventAnalyticsFilter as PublicEventAnalyticsFilter,
    type PublicEventFilterMetadata as PublicEventFilterMetadata,
    type PublicFiscalQuarterReference as PublicFiscalQuarterReference,
    type PublicFiscalYearReference as PublicFiscalYearReference,
    type PublicFormSubmissionFilter as PublicFormSubmissionFilter,
    type PublicFormSubmissionOnPageFilter as PublicFormSubmissionOnPageFilter,
    type PublicInListFilter as PublicInListFilter,
    type PublicInListFilterMetadata as PublicInListFilterMetadata,
    type PublicIndexOffset as PublicIndexOffset,
    type PublicIndexedTimePoint as PublicIndexedTimePoint,
    type PublicIntegrationEventFilter as PublicIntegrationEventFilter,
    type PublicListConversionDate as PublicListConversionDate,
    type PublicListConversionInactivity as PublicListConversionInactivity,
    type PublicListConversionResponse as PublicListConversionResponse,
    type PublicListConversionTime as PublicListConversionTime,
    type PublicListFolder as PublicListFolder,
    type PublicListPermissions as PublicListPermissions,
    type PublicMembershipSettings as PublicMembershipSettings,
    type PublicMigrationMapping as PublicMigrationMapping,
    type PublicMonthReference as PublicMonthReference,
    type PublicMultiStringPropertyOperation as PublicMultiStringPropertyOperation,
    type PublicNotAllFilterBranch as PublicNotAllFilterBranch,
    type PublicNotAnyFilterBranch as PublicNotAnyFilterBranch,
    type PublicNowReference as PublicNowReference,
    type PublicNumAssociationsFilter as PublicNumAssociationsFilter,
    type PublicNumOccurrencesRefineBy as PublicNumOccurrencesRefineBy,
    type PublicNumberPropertyOperation as PublicNumberPropertyOperation,
    type PublicObjectList as PublicObjectList,
    type PublicObjectListSearchResult as PublicObjectListSearchResult,
    type PublicOrFilterBranch as PublicOrFilterBranch,
    type PublicPageViewAnalyticsFilter as PublicPageViewAnalyticsFilter,
    type PublicPrivacyAnalyticsFilter as PublicPrivacyAnalyticsFilter,
    type PublicPropertyAssociationFilterBranch as PublicPropertyAssociationFilterBranch,
    type PublicPropertyAssociationInListFilter as PublicPropertyAssociationInListFilter,
    type PublicPropertyFilter as PublicPropertyFilter,
    type PublicPropertyReferencedTime as PublicPropertyReferencedTime,
    type PublicQuarterReference as PublicQuarterReference,
    type PublicRangedDatePropertyOperation as PublicRangedDatePropertyOperation,
    type PublicRangedNumberPropertyOperation as PublicRangedNumberPropertyOperation,
    type PublicRangedTimeOperation as PublicRangedTimeOperation,
    type PublicRelativeComparativeTimestampRefineBy as PublicRelativeComparativeTimestampRefineBy,
    type PublicRelativeRangedTimestampRefineBy as PublicRelativeRangedTimestampRefineBy,
    type PublicRestrictedFilterBranch as PublicRestrictedFilterBranch,
    type PublicRollingDateRangePropertyOperation as PublicRollingDateRangePropertyOperation,
    type PublicRollingPropertyUpdatedOperation as PublicRollingPropertyUpdatedOperation,
    type PublicSetOccurrencesRefineBy as PublicSetOccurrencesRefineBy,
    type PublicStringPropertyOperation as PublicStringPropertyOperation,
    type PublicSurveyMonkeyFilter as PublicSurveyMonkeyFilter,
    type PublicSurveyMonkeyValueFilter as PublicSurveyMonkeyValueFilter,
    type PublicTimeOffset as PublicTimeOffset,
    type PublicTimePointOperation as PublicTimePointOperation,
    type PublicTodayReference as PublicTodayReference,
    type PublicUnifiedEventsFilter as PublicUnifiedEventsFilter,
    type PublicUnifiedEventsFilterBranch as PublicUnifiedEventsFilterBranch,
    type PublicWebinarFilter as PublicWebinarFilter,
    type PublicWeekReference as PublicWeekReference,
    type PublicYearReference as PublicYearReference,
    type RecordIDInput as RecordIDInput,
    type RecordIDWithMemberships as RecordIDWithMemberships,
    type RecordListMembership as RecordListMembership,
    type JoinTimeAndRecordIDsPage as JoinTimeAndRecordIDsPage,
    type ListCreateParams as ListCreateParams,
    type ListListParams as ListListParams,
    type ListAddAndRemoveMembershipsParams as ListAddAndRemoveMembershipsParams,
    type ListAddMembershipsParams as ListAddMembershipsParams,
    type ListAddMembershipsFromParams as ListAddMembershipsFromParams,
    type ListBatchReadMembershipsParams as ListBatchReadMembershipsParams,
    type ListCreateFolderParams as ListCreateFolderParams,
    type ListCreateIDMappingParams as ListCreateIDMappingParams,
    type ListGetParams as ListGetParams,
    type ListGetByObjectTypeAndNameParams as ListGetByObjectTypeAndNameParams,
    type ListGetIDMappingParams as ListGetIDMappingParams,
    type ListGetMembershipsJoinOrderParams as ListGetMembershipsJoinOrderParams,
    type ListGetRecordMembershipsParams as ListGetRecordMembershipsParams,
    type ListGetSizeAndEditsHistoryBetweenParams as ListGetSizeAndEditsHistoryBetweenParams,
    type ListListBySearchParams as ListListBySearchParams,
    type ListListFoldersParams as ListListFoldersParams,
    type ListListMembershipsParams as ListListMembershipsParams,
    type ListMoveFolderParams as ListMoveFolderParams,
    type ListMoveListParams as ListMoveListParams,
    type ListRemoveMembershipsParams as ListRemoveMembershipsParams,
    type ListRenameFolderParams as ListRenameFolderParams,
    type ListUpdateListFiltersParams as ListUpdateListFiltersParams,
    type ListUpdateListNameParams as ListUpdateListNameParams,
    type ListUpdateScheduleConversionParams as ListUpdateScheduleConversionParams,
  };

  export { ObjectLibrary as ObjectLibrary };

  export {
    ObjectSchemas as ObjectSchemas,
    type CollectionResponseObjectSchemaNoPaging as CollectionResponseObjectSchemaNoPaging,
    type ObjectSchema as ObjectSchema,
    type ObjectSchemaBatchReadRequest as ObjectSchemaBatchReadRequest,
    type ObjectSchemaEgg as ObjectSchemaEgg,
    type ObjectTypePropertyCreate as ObjectTypePropertyCreate,
    type ObjectSchemaCreateParams as ObjectSchemaCreateParams,
    type ObjectSchemaUpdateParams as ObjectSchemaUpdateParams,
    type ObjectSchemaListParams as ObjectSchemaListParams,
    type ObjectSchemaDeleteParams as ObjectSchemaDeleteParams,
    type ObjectSchemaCreateAssociationParams as ObjectSchemaCreateAssociationParams,
    type ObjectSchemaDeleteAssociationParams as ObjectSchemaDeleteAssociationParams,
    type ObjectSchemaGetParams as ObjectSchemaGetParams,
  };

  export {
    Objects as Objects,
    type AssociatedID as AssociatedID,
    type BatchInputSimplePublicObjectBatchInput as BatchInputSimplePublicObjectBatchInput,
    type BatchInputSimplePublicObjectBatchInputForCreate as BatchInputSimplePublicObjectBatchInputForCreate,
    type BatchInputSimplePublicObjectBatchInputUpsert as BatchInputSimplePublicObjectBatchInputUpsert,
    type BatchInputSimplePublicObjectID as BatchInputSimplePublicObjectID,
    type BatchReadInputSimplePublicObjectID as BatchReadInputSimplePublicObjectID,
    type BatchResponseSimplePublicObject as BatchResponseSimplePublicObject,
    type BatchResponseSimplePublicObjectWithErrors as BatchResponseSimplePublicObjectWithErrors,
    type BatchResponseSimplePublicUpsertObject as BatchResponseSimplePublicUpsertObject,
    type BatchResponseSimplePublicUpsertObjectWithErrors as BatchResponseSimplePublicUpsertObjectWithErrors,
    type CollectionResponseAssociatedID as CollectionResponseAssociatedID,
    type CollectionResponseSimplePublicObjectWithAssociationsForwardPaging as CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
    type PublicAssociationsForObject as PublicAssociationsForObject,
    type PublicMergeInput as PublicMergeInput,
    type SimplePublicObjectBatchInput as SimplePublicObjectBatchInput,
    type SimplePublicObjectBatchInputForCreate as SimplePublicObjectBatchInputForCreate,
    type SimplePublicObjectBatchInputUpsert as SimplePublicObjectBatchInputUpsert,
    type SimplePublicObjectID as SimplePublicObjectID,
    type SimplePublicObjectInput as SimplePublicObjectInput,
    type SimplePublicObjectInputForCreate as SimplePublicObjectInputForCreate,
    type SimplePublicObjectWithAssociations as SimplePublicObjectWithAssociations,
    type SimplePublicUpsertObject as SimplePublicUpsertObject,
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
    type PipelineReplaceInput as PipelineReplaceInput,
    type PipelineStage as PipelineStage,
    type PipelineStageInput as PipelineStageInput,
    type PipelineStagePatchInput as PipelineStagePatchInput,
    type PipelineStageReplaceInput as PipelineStageReplaceInput,
    type PublicAuditInfo as PublicAuditInfo,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineDeleteParams as PipelineDeleteParams,
    type PipelineCreateStageParams as PipelineCreateStageParams,
    type PipelineDeleteStageParams as PipelineDeleteStageParams,
    type PipelineGetParams as PipelineGetParams,
    type PipelineGetStageParams as PipelineGetStageParams,
    type PipelineListAuditParams as PipelineListAuditParams,
    type PipelineListStageAuditParams as PipelineListStageAuditParams,
    type PipelineListStagesParams as PipelineListStagesParams,
    type PipelineUpdateAllPropertiesParams as PipelineUpdateAllPropertiesParams,
    type PipelineUpdateStageParams as PipelineUpdateStageParams,
    type PipelineUpdateStageAllPropertiesParams as PipelineUpdateStageAllPropertiesParams,
  };

  export {
    Properties as Properties,
    type BatchInputPropertyCreate as BatchInputPropertyCreate,
    type BatchResponseProperty as BatchResponseProperty,
    type BatchResponsePropertyWithErrors as BatchResponsePropertyWithErrors,
    type CollectionResponsePropertyNoPaging as CollectionResponsePropertyNoPaging,
    type PropertyCreate as PropertyCreate,
    type PropertyUpdate as PropertyUpdate,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyGetParams as PropertyGetParams,
  };

  export {
    PropertiesValidations as PropertiesValidations,
    type CollectionResponsePublicPropertyValidationRuleMapNoPaging as CollectionResponsePublicPropertyValidationRuleMapNoPaging,
    type CollectionResponsePublicPropertyValidationRuleNoPaging as CollectionResponsePublicPropertyValidationRuleNoPaging,
    type PublicPropertyValidationRule as PublicPropertyValidationRule,
    type PublicPropertyValidationRuleMap as PublicPropertyValidationRuleMap,
    type PublicPropertyValidationRuleUpdate as PublicPropertyValidationRuleUpdate,
    type PropertiesValidationGetByObjectTypeIDAndPropertyNameParams as PropertiesValidationGetByObjectTypeIDAndPropertyNameParams,
    type PropertiesValidationGetByObjectTypeIDPropertyNameAndRuleTypeParams as PropertiesValidationGetByObjectTypeIDPropertyNameAndRuleTypeParams,
    type PropertiesValidationUpdateByObjectTypeIDPropertyNameAndRuleTypeParams as PropertiesValidationUpdateByObjectTypeIDPropertyNameAndRuleTypeParams,
  };

  export {
    Timeline as Timeline,
    type AppEventOccurrence as AppEventOccurrence,
    type AppEventResolutionResponse as AppEventResolutionResponse,
    type BatchInputAppEventOccurrence as BatchInputAppEventOccurrence,
    type BatchResponseAppEventOccurrence as BatchResponseAppEventOccurrence,
    type DeveloperQualifiedSymbol as DeveloperQualifiedSymbol,
    type ExternalAppEventResolutionRequest as ExternalAppEventResolutionRequest,
    type TimelineEventIFrame as TimelineEventIFrame,
    type TimelineCreateEventParams as TimelineCreateEventParams,
    type TimelineCreateProjectTypeParams as TimelineCreateProjectTypeParams,
  };
}
