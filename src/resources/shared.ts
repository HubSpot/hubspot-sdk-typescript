// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Page } from '../core/pagination';

/**
 * Request body object for creating A/B tests.
 */
export interface AbTestCreateRequestVNext {
  /**
   * ID of the object to test.
   */
  contentId: string;

  /**
   * Name of A/B test variation.
   */
  variationName: string;
}

export interface ActionResponse {
  completedAt: string;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface APIError {
  /**
   * The error category.
   */
  category: string;

  /**
   * A unique identifier for the request. Include this value with any error reports
   * or support tickets.
   */
  correlationId: string;

  /**
   * A human readable message describing the error along with remediation steps where
   * appropriate.
   */
  message: string;

  /**
   * Context about the error condition.
   */
  context?: { [key: string]: Array<string> };

  /**
   * further information about the error
   */
  errors?: Array<ErrorDetail>;

  /**
   * A map of link names to associated URIs containing documentation about the error
   * or recommended remediation steps.
   */
  links?: { [key: string]: string };

  /**
   * A specific category that contains more specific detail about the error.
   */
  subCategory?: string;
}

/**
 * The definition of an association
 */
export interface AssociationDefinition {
  /**
   * The unique ID of the associated object (e.g., a contact ID).
   */
  id: string;

  /**
   * The ID of the source object type (e.g., 0-1 for contacts).
   */
  fromObjectTypeId: string;

  /**
   * The ID of the destination object type (e.g., 0-3 for deals).
   */
  toObjectTypeId: string;

  /**
   * The timestamp when the association was created, in ISO 8601 format.
   */
  createdAt?: string;

  /**
   * For labeled association types, the internal name of the association.
   */
  name?: string;

  /**
   * The timestamp when the last update was made to an association, in ISO 8601
   * format.
   */
  updatedAt?: string;
}

export interface AssociationDefinitionEgg {
  fromObjectTypeId: string;

  toObjectTypeId: string;

  name?: string;
}

/**
 * Defines the type, direction, and details of the relationship between two CRM
 * objects.
 */
export interface AssociationSpec {
  /**
   * The category of the association, such as "HUBSPOT_DEFINED".
   */
  associationCategory: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED';

  /**
   * The ID representing the specific type of association.
   */
  associationTypeId: number;
}

/**
 * A HubSpot property option
 */
export interface AutomationActionsOption {
  /**
   * A description of the option.
   */
  description: string;

  /**
   * The position of the item relative to others in the list.
   */
  displayOrder: number;

  doubleData: number;

  /**
   * Whether the option is displayed in HubSpot's UI.
   */
  hidden: boolean;

  /**
   * A user-friendly label that identifies the option.
   */
  label: string;

  /**
   * Whether the option is read-only.
   */
  readOnly: boolean;

  /**
   * The actual value of the option.
   */
  value: string;
}

export interface BatchInputPropertyCreate {
  inputs: Array<PropertyCreate>;
}

export interface BatchInputPropertyName {
  inputs: Array<PropertyName>;
}

export interface BatchInputPublicObjectID {
  inputs: Array<PublicObjectID>;
}

/**
 * Wrapper for providing an array of strings as inputs.
 */
export interface BatchInputString {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface BatchReadInputPropertyName {
  archived: boolean;

  dataSensitivity: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  inputs: Array<PropertyName>;
}

export interface BatchResponseProperty {
  completedAt: string;

  results: Array<Property>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface ErrorDetail {
  /**
   * A human readable message describing the error along with remediation steps where
   * appropriate.
   */
  message: string;

  /**
   * The status code associated with the error detail.
   */
  code?: string;

  /**
   * Context about the error condition.
   */
  context?: { [key: string]: Array<string> };

  /**
   * The name of the field or parameter in which the error was found.
   */
  in?: string;

  /**
   * A specific category that contains more specific detail about the error.
   */
  subCategory?: string;
}

export interface ForwardPaging {
  /**
   * Specifies the paging information needed to retrieve the next set of results in a
   * paginated API response
   */
  next?: NextPage;
}

/**
 * HubDbTableRowV3Wrapper
 */
export type HubDBTableRowV3Wrapper = unknown;

/**
 * Specifies the paging information needed to retrieve the next set of results in a
 * paginated API response
 */
export interface NextPage {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after: string;

  /**
   * A URL that can be used to retrieve the next page results.
   */
  link?: string;
}

export interface ObjectTypeDefinitionLabels {
  plural?: string;

  singular?: string;
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

export interface OptionInput {
  displayOrder: number;

  hidden: boolean;

  label: string;

  value: string;

  description?: string;
}

export interface Paging {
  /**
   * Specifies the paging information needed to retrieve the next set of results in a
   * paginated API response
   */
  next?: NextPage;

  /**
   * specifies the paging information needed to retrieve the previous set of results
   * in a paginated API response
   */
  prev?: PreviousPage;
}

/**
 * specifies the paging information needed to retrieve the previous set of results
 * in a paginated API response
 */
export interface PreviousPage {
  /**
   * A paging cursor token for retrieving previous pages.
   */
  before: string;

  /**
   * A URL that can be used to retrieve the previous pages' results.
   */
  link?: string;
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
  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

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

export interface PropertyCreate {
  fieldType:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea';

  groupName: string;

  label: string;

  name: string;

  type: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';

  calculationFormula?: string;

  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  description?: string;

  displayOrder?: number;

  externalOptions?: boolean;

  formField?: boolean;

  hasUniqueValue?: boolean;

  hidden?: boolean;

  options?: Array<OptionInput>;

  referencedObjectType?: string;
}

export interface PropertyGroupCreate {
  label: string;

  name: string;

  displayOrder?: number;
}

export interface PropertyGroupUpdate {
  displayOrder?: number;

  label?: string;
}

export interface PropertyModificationMetadata {
  archivable: boolean;

  readOnlyDefinition: boolean;

  readOnlyValue: boolean;

  readOnlyOptions?: boolean;
}

export interface PropertyName {
  name: string;
}

export interface PublicAbsoluteComparativeTimestampRefineBy {
  comparison: string;

  timestamp: number;

  type: 'ABSOLUTE_COMPARATIVE';
}

export interface PublicAbsoluteRangedTimestampRefineBy {
  lowerTimestamp: number;

  rangeType: string;

  type: 'ABSOLUTE_RANGED';

  upperTimestamp: number;
}

export interface PublicAdsSearchFilter {
  adNetwork: string;

  entityType: string;

  filterType: 'ADS_SEARCH';

  operator: string;

  searchTerms: Array<string>;

  searchTermType: string;
}

export interface PublicAdsTimeFilter {
  filterType: 'ADS_TIME';

  pruningRefineBy:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicAllHistoryRefineBy {
  type: 'ALL_HISTORY';
}

export interface PublicAllPropertyTypesOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'ALL_PROPERTY';

  operator: string;
}

export interface PublicAndFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'AND';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;
}

export interface PublicAssociationFilterBranch {
  associationCategory: string;

  associationTypeId: number;

  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'ASSOCIATION';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;

  objectTypeId: string;

  operator: string;
}

export interface PublicAssociationInListFilter {
  associationCategory: string;

  associationTypeId: number;

  coalescingRefineBy:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  filterType: 'ASSOCIATION';

  listId: string;

  operator: string;

  toObjectType?: string;

  toObjectTypeId?: string;
}

export interface PublicBoolPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'BOOL';

  operator: string;

  value: boolean;
}

export interface PublicCalendarDatePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'CALENDAR_DATE';

  operator: string;

  timeUnit: string;

  fiscalYearStart?:
    | 'APRIL'
    | 'AUGUST'
    | 'DECEMBER'
    | 'FEBRUARY'
    | 'JANUARY'
    | 'JULY'
    | 'JUNE'
    | 'MARCH'
    | 'MAY'
    | 'NOVEMBER'
    | 'OCTOBER'
    | 'SEPTEMBER';

  timeUnitCount?: number;

  useFiscalYear?: boolean;
}

export interface PublicCampaignInfluencedFilter {
  campaignId: string;

  filterType: 'CAMPAIGN_INFLUENCED';
}

export interface PublicCommunicationSubscriptionFilter {
  acceptedOptStates: Array<string>;

  channel: string;

  filterType: 'COMMUNICATION_SUBSCRIPTION';

  subscriptionIds: Array<string>;

  subscriptionType: string;

  businessUnitId?: string;
}

export interface PublicComparativeDatePropertyOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: 'COMPARATIVE_DATE';

  operator: string;

  defaultComparisonValue?: string;
}

export interface PublicComparativePropertyUpdatedOperation {
  comparisonPropertyName: string;

  includeObjectsWithNoValueSet: boolean;

  operationType: 'COMPARATIVE_PROPERTY_UPDATED';

  operator: string;

  defaultComparisonValue?: string;
}

export interface PublicConstantFilter {
  filterType: 'CONSTANT';

  shouldAccept: boolean;

  source?: string;
}

export interface PublicCtaAnalyticsFilter {
  ctaName: string;

  filterType: 'CTA';

  operator: string;

  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicDatePoint {
  day: number;

  month: number;

  timeType: 'DATE';

  year: number;

  zoneId: string;

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;

  timezoneSource?: string;
}

export interface PublicDatePropertyOperation {
  day: number;

  includeObjectsWithNoValueSet: boolean;

  month: string;

  operationType: 'DATE';

  operator: string;

  year: number;
}

export interface PublicDateTimePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'DATETIME';

  operator: string;

  requiresTimeZoneConversion: boolean;

  timestamp: number;
}

export interface PublicEmailEventFilter {
  appId: string;

  emailId: string;

  filterType: 'EMAIL_EVENT';

  level: string;

  operator:
    | 'BOUNCED'
    | 'LINK_CLICKED'
    | 'MARKED_SPAM'
    | 'OPENED'
    | 'OPENED_BUT_LINK_NOT_CLICKED'
    | 'OPENED_BUT_NOT_REPLIED'
    | 'RECEIVED'
    | 'RECEIVED_BUT_NOT_OPENED'
    | 'REPLIED'
    | 'SENT'
    | 'SENT_BUT_LINK_NOT_CLICKED'
    | 'SENT_BUT_NOT_RECEIVED'
    | 'UNSUBSCRIBED';

  clickUrl?: string;

  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicEmailSubscriptionFilter {
  acceptedStatuses: Array<string>;

  filterType: 'EMAIL_SUBSCRIPTION';

  subscriptionIds: Array<string>;

  subscriptionType?: string;
}

export interface PublicEnumerationPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'ENUMERATION';

  operator: string;

  values: Array<string>;
}

export interface PublicEventAnalyticsFilter {
  eventId: string;

  filterType: 'EVENT';

  operator: string;

  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicEventFilterMetadata {
  operation:
    | PublicBoolPropertyOperation
    | PublicNumberPropertyOperation
    | PublicStringPropertyOperation
    | PublicDateTimePropertyOperation
    | PublicRangedDatePropertyOperation
    | PublicComparativePropertyUpdatedOperation
    | PublicComparativeDatePropertyOperation
    | PublicRollingDateRangePropertyOperation
    | PublicRollingPropertyUpdatedOperation
    | PublicEnumerationPropertyOperation
    | PublicAllPropertyTypesOperation
    | PublicRangedNumberPropertyOperation
    | PublicMultiStringPropertyOperation
    | PublicDatePropertyOperation
    | PublicCalendarDatePropertyOperation
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  property: string;
}

export interface PublicFiscalQuarterReference {
  day: number;

  month: number;

  referenceType: 'FISCAL_QUARTER';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicFiscalYearReference {
  day: number;

  month: number;

  referenceType: 'FISCAL_YEAR';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicFormSubmissionFilter {
  filterType: 'FORM_SUBMISSION';

  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT';

  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  formId?: string;

  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicFormSubmissionOnPageFilter {
  filterType: 'FORM_SUBMISSION_ON_PAGE';

  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT';

  pageId: string;

  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  formId?: string;

  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicInListFilter {
  filterType: 'IN_LIST';

  listId: string;

  operator: string;

  metadata?: PublicInListFilterMetadata;
}

export interface PublicInListFilterMetadata {
  id: string;

  inListType: string;
}

export interface PublicIndexOffset {
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

export interface PublicIndexedTimePoint {
  indexReference:
    | PublicNowReference
    | PublicTodayReference
    | PublicWeekReference
    | PublicFiscalQuarterReference
    | PublicFiscalYearReference
    | PublicYearReference
    | PublicQuarterReference
    | PublicMonthReference;

  timeType: 'INDEXED';

  zoneId: string;

  offset?: PublicIndexOffset;

  timezoneSource?: string;
}

export interface PublicIntegrationEventFilter {
  eventTypeId: number;

  filterLines: Array<PublicEventFilterMetadata>;

  filterType: 'INTEGRATION_EVENT';
}

export interface PublicMonthReference {
  day: number;

  referenceType: 'MONTH';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicMultiStringPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'MULTISTRING';

  operator: string;

  values: Array<string>;
}

export interface PublicNotAllFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'NOT_ALL';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;
}

export interface PublicNotAnyFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'NOT_ANY';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;
}

export interface PublicNowReference {
  referenceType: 'NOW';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicNumAssociationsFilter {
  associationCategory: string;

  associationTypeId: number;

  coalescingRefineBy:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  filterType: 'NUM_ASSOCIATIONS';
}

export interface PublicNumOccurrencesRefineBy {
  type: 'NUM_OCCURRENCES';

  maxOccurrences?: number;

  minOccurrences?: number;
}

export interface PublicNumberPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'NUMBER';

  operator: string;

  value: number;
}

export interface PublicObjectID {
  /**
   * The unique ID that identifies an object.
   */
  id: string;
}

export interface PublicOrFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'OR';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;
}

export interface PublicPageViewAnalyticsFilter {
  filterType: 'PAGE_VIEW';

  operator: string;

  pageUrl: string;

  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  enableTracking?: boolean;

  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicPrivacyAnalyticsFilter {
  filterType: 'PRIVACY';

  operator: string;

  privacyName: string;
}

export interface PublicPropertyAssociationFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'PROPERTY_ASSOCIATION';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;

  objectTypeId: string;

  operator: string;

  propertyWithObjectId: string;
}

export interface PublicPropertyAssociationInListFilter {
  coalescingRefineBy:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  filterType: 'PROPERTY_ASSOCIATION';

  listId: string;

  operator: string;

  propertyWithObjectId: string;

  toObjectTypeId?: string;
}

export interface PublicPropertyFilter {
  filterType: 'PROPERTY';

  operation:
    | PublicBoolPropertyOperation
    | PublicNumberPropertyOperation
    | PublicStringPropertyOperation
    | PublicDateTimePropertyOperation
    | PublicRangedDatePropertyOperation
    | PublicComparativePropertyUpdatedOperation
    | PublicComparativeDatePropertyOperation
    | PublicRollingDateRangePropertyOperation
    | PublicRollingPropertyUpdatedOperation
    | PublicEnumerationPropertyOperation
    | PublicAllPropertyTypesOperation
    | PublicRangedNumberPropertyOperation
    | PublicMultiStringPropertyOperation
    | PublicDatePropertyOperation
    | PublicCalendarDatePropertyOperation
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  property: string;
}

export interface PublicPropertyReferencedTime {
  property: string;

  referenceType: string;

  timeType: 'PROPERTY_REFERENCED';

  zoneId: string;

  timezoneSource?: string;
}

export interface PublicQuarterReference {
  day: number;

  month: number;

  referenceType: 'QUARTER';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicRangedDatePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBound: number;

  operationType: 'RANGED_DATE';

  operator: string;

  requiresTimeZoneConversion: boolean;

  upperBound: number;
}

export interface PublicRangedNumberPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBound: number;

  operationType: 'NUMBER_RANGED';

  operator: string;

  upperBound: number;
}

export interface PublicRangedTimeOperation {
  includeObjectsWithNoValueSet: boolean;

  lowerBoundTimePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime;

  operationType: string;

  operator: string;

  type: 'TIME_RANGED';

  upperBoundTimePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime;

  lowerBoundEndpointBehavior?: string;

  propertyParser?: string;

  upperBoundEndpointBehavior?: string;
}

export interface PublicRelativeComparativeTimestampRefineBy {
  comparison: string;

  timeOffset: PublicTimeOffset;

  type: 'RELATIVE_COMPARATIVE';
}

export interface PublicRelativeRangedTimestampRefineBy {
  lowerBoundOffset: PublicTimeOffset;

  rangeType: string;

  type: 'RELATIVE_RANGED';

  upperBoundOffset: PublicTimeOffset;
}

export interface PublicRestrictedFilterBranch {
  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'RESTRICTED';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;
}

export interface PublicRollingDateRangePropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  numberOfDays: number;

  operationType: 'ROLLING_DATE_RANGE';

  operator: string;

  requiresTimeZoneConversion: boolean;
}

export interface PublicRollingPropertyUpdatedOperation {
  includeObjectsWithNoValueSet: boolean;

  numberOfDays: number;

  operationType: 'ROLLING_PROPERTY_UPDATED';

  operator: string;
}

export interface PublicSetOccurrencesRefineBy {
  setType: string;

  type: 'SET_OCCURRENCES';
}

export interface PublicStringPropertyOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'STRING';

  operator: string;

  value: string;
}

export interface PublicSurveyMonkeyFilter {
  filterType: 'SURVEY_MONKEY';

  operator: string;

  surveyId: string;
}

export interface PublicSurveyMonkeyValueFilter {
  filterType: 'SURVEY_MONKEY_VALUE';

  operator: string;

  surveyId: string;

  surveyQuestion: string;

  valueComparison:
    | PublicBoolPropertyOperation
    | PublicNumberPropertyOperation
    | PublicStringPropertyOperation
    | PublicDateTimePropertyOperation
    | PublicRangedDatePropertyOperation
    | PublicComparativePropertyUpdatedOperation
    | PublicComparativeDatePropertyOperation
    | PublicRollingDateRangePropertyOperation
    | PublicRollingPropertyUpdatedOperation
    | PublicEnumerationPropertyOperation
    | PublicAllPropertyTypesOperation
    | PublicRangedNumberPropertyOperation
    | PublicMultiStringPropertyOperation
    | PublicDatePropertyOperation
    | PublicCalendarDatePropertyOperation
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  surveyAnswerColId?: string;

  surveyAnswerRowId?: string;
}

export interface PublicTimeOffset {
  amount: number;

  offsetDirection: string;

  timeUnit: string;
}

export interface PublicTimePointOperation {
  includeObjectsWithNoValueSet: boolean;

  operationType: 'TIME_POINT';

  operator: string;

  timePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime;

  type: string;

  endpointBehavior?: string;

  propertyParser?: string;
}

export interface PublicTodayReference {
  referenceType: 'TODAY';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicUnifiedEventsFilter {
  filterLines: Array<PublicEventFilterMetadata>;

  filterType: 'UNIFIED_EVENTS';

  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;

  eventTypeId?: string;

  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicUnifiedEventsFilterBranch {
  eventTypeId: string;

  filterBranches: Array<
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicPropertyAssociationFilterBranch
    | PublicAssociationFilterBranch
  >;

  filterBranchOperator: string;

  filterBranchType: 'UNIFIED_EVENTS';

  filters: Array<
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicCampaignInfluencedFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicNumAssociationsFilter
    | PublicUnifiedEventsFilter
    | PublicPropertyAssociationInListFilter
    | PublicConstantFilter
  >;

  operator: 'HAS_COMPLETED' | 'HAS_NOT_COMPLETED';

  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation;
}

export interface PublicWebinarFilter {
  filterType: 'WEBINAR';

  operator: string;

  webinarId?: string;
}

export interface PublicWeekReference {
  dayOfWeek: 'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY';

  referenceType: 'WEEK';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

export interface PublicYearReference {
  day: number;

  month: number;

  referenceType: 'YEAR';

  hour?: number;

  millisecond?: number;

  minute?: number;

  second?: number;
}

/**
 * Ye olde error
 */
export interface StandardError {
  /**
   * The main category of the error.
   */
  category: string;

  /**
   * Additional context-specific information related to the error.
   */
  context: { [key: string]: Array<string> };

  /**
   * The detailed error objects.
   */
  errors: Array<ErrorDetail>;

  /**
   * URLs linking to documentation or resources associated with the error.
   */
  links: { [key: string]: string };

  /**
   * A human-readable string describing the error and possible remediation steps.
   */
  message: string;

  /**
   * The HTTP status code associated with the error.
   */
  status: string;

  /**
   * A unique ID for the error instance.
   */
  id?: string;

  /**
   * A more specific error category within each main category.
   */
  subCategory?: unknown;
}

export interface TaskLocator {
  id: string;

  links?: { [key: string]: string };
}

/**
 * Model definition for a version user. Contains addition information about the
 * user who created a version.
 */
export interface VersionUser {
  /**
   * The unique ID of the User.
   */
  id: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The first and last name of the User.
   */
  fullName: string;
}

export type HubDBTableRowV3WrappersPage = Page<HubDBTableRowV3Wrapper>;
