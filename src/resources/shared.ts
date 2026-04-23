// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  /**
   * The timestamp indicating when the action was completed.
   */
  completedAt: string;

  /**
   * The timestamp indicating when the action was started.
   */
  startedAt: string;

  /**
   * The current status of the action, with possible values: CANCELED, COMPLETE,
   * PENDING, PROCESSING.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * A map of link names to associated URIs containing documentation about the error
   * or recommended remediation steps
   */
  links?: { [key: string]: string };

  /**
   * The timestamp indicating when the action was requested.
   */
  requestedAt?: string;
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
  associationCategory: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK';

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

  /**
   * A numerical value associated with the option.
   */
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

/**
 * The definition of an association
 */
export interface BaseAssociationDefinition {
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

export interface BaseError {
  /**
   * The error category
   */
  category: string;

  /**
   * A unique identifier for the request. Include this value with any error reports
   * or support tickets
   */
  correlationId: string;

  /**
   * A human readable message describing the error along with remediation steps where
   * appropriate
   */
  message: string;

  /**
   * Context about the error condition
   */
  context?: { [key: string]: Array<string> };

  /**
   * further information about the error
   */
  errors?: Array<ErrorDetail>;

  /**
   * A map of link names to associated URIs containing documentation about the error
   * or recommended remediation steps
   */
  links?: { [key: string]: string };

  /**
   * A specific category that contains more specific detail about the error
   */
  subCategory?: string;
}

export interface BaseObjectTypeDefinition {
  id: string;

  allowsSensitiveProperties: boolean;

  archived: boolean;

  fullyQualifiedName: string;

  labels: ObjectTypeDefinitionLabels;

  name: string;

  objectTypeId: string;

  requiredProperties: Array<string>;

  searchableProperties: Array<string>;

  secondaryDisplayProperties: Array<string>;

  createdAt?: string;

  description?: string;

  portalId?: number;

  primaryDisplayProperty?: string;

  updatedAt?: string;
}

/**
 * A HubSpot property option
 */
export interface BaseOption {
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
 * A HubSpot property
 */
export interface BaseProperty {
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
  options: Array<BaseOption>;

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

  modificationMetadata?: PropertyModificationMetadata;

  /**
   * Hint for how a number property is displayed and validated in HubSpot's UI. Can
   * be: "unformatted", "formatted", "currency", "percentage", "duration", or
   * "probability".
   */
  numberDisplayHint?: 'currency' | 'duration' | 'formatted' | 'percentage' | 'probability' | 'unformatted';

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

export interface BatchInputPropertyCreate {
  inputs: Array<PropertyCreate>;
}

export interface BatchInputPropertyName {
  inputs: Array<PropertyName>;
}

export interface BatchInputPublicObjectID {
  /**
   * An array of deal split inputs
   */
  inputs: Array<PublicObjectID>;
}

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

export interface CollectionResponsePropertyGroupNoPaging {
  results: Array<PropertyGroup>;
}

export interface ErrorDetail {
  /**
   * A human readable message describing the error along with remediation steps where
   * appropriate
   */
  message: string;

  /**
   * The status code associated with the error detail
   */
  code?: string;

  /**
   * Context about the error condition
   */
  context?: { [key: string]: Array<string> };

  /**
   * The name of the field or parameter in which the error was found.
   */
  in?: string;

  /**
   * A specific category that contains more specific detail about the error
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

export interface ObjectTypeDefinitionPatch {
  clearDescription: boolean;

  allowsSensitiveProperties?: boolean;

  description?: string;

  labels?: ObjectTypeDefinitionLabels;

  primaryDisplayProperty?: string;

  requiredProperties?: Array<string>;

  restorable?: boolean;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
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
   * A string token used to identify the position before the current page in the
   * pagination sequence.
   */
  before: string;

  /**
   * A URL string that provides a direct link to the previous page of results.
   */
  link?: string;
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

  currencyPropertyName?: string;

  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  description?: string;

  displayOrder?: number;

  externalOptions?: boolean;

  formField?: boolean;

  hasUniqueValue?: boolean;

  hidden?: boolean;

  numberDisplayHint?: 'currency' | 'duration' | 'formatted' | 'percentage' | 'probability' | 'unformatted';

  options?: Array<OptionInput>;

  referencedObjectType?: string;

  showCurrencySymbol?: boolean;
}

export interface PropertyGroup {
  archived: boolean;

  label: string;

  name: string;

  displayOrder?: number;
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

/**
 * Represents a single custom property of a marketing event, storing its name,
 * value, metadata (like source, timestamp, and sensitivity), and related audit
 * information for tracking changes.
 */
export interface PropertyValue {
  /**
   * The sensitivity level of the property, such as "non_sensitive", "sensitive", and
   * "highly_sensitive".
   */
  dataSensitivity: 'high' | 'none' | 'standard';

  /**
   * Whether the property value is encrypted.
   */
  isEncrypted: boolean;

  /**
   * Indicates if the value exceeds normal size limits.
   */
  isLargeValue: boolean;

  /**
   * The unique property name.
   */
  name: string;

  /**
   * When the value was persisted to database, in epoch milliseconds.
   */
  persistenceTimestamp: number;

  /**
   * A unique ID associated with this request.
   */
  requestId: string;

  /**
   * Whether the value was selected by a user.
   */
  selectedByUser: boolean;

  /**
   * The timestamp when the value was selected by a user, if applicable.
   */
  selectedByUserTimestamp: number;

  /**
   * The origin of the property value, such as "IMPORT" or "API".
   */
  source:
    | 'ACADEMY'
    | 'ACCEPTANCE_TEST'
    | 'ACTIVITY_AUTO_ASSOCIATE'
    | 'ACTIVITY_LOG_REVERT'
    | 'ADS'
    | 'AI_GROUP'
    | 'ANALYTICS'
    | 'API'
    | 'APPROVALS'
    | 'ASSISTS'
    | 'ASSOCIATIONS'
    | 'AUTO_ASSOCIATE_BY_DOMAIN'
    | 'AUTOMATION_JOURNEY'
    | 'AUTOMATION_PLATFORM'
    | 'AVATARS_SERVICE'
    | 'BATCH_UPDATE'
    | 'BCC_TO_CRM'
    | 'BEHAVIORAL_EVENTS'
    | 'BET_ASSIGNMENT'
    | 'BET_CRM_CONNECTOR'
    | 'BIDEN'
    | 'BILLING'
    | 'BOT'
    | 'CALCULATED'
    | 'CENTRAL_EXCHANGE_RATES'
    | 'CHATSPOT'
    | 'CLONE_OBJECTS'
    | 'COMMUNICATOR'
    | 'COMPANIES'
    | 'COMPANY_FAMILIES'
    | 'COMPANY_INSIGHTS'
    | 'CONNECTED_ACCOUNT'
    | 'CONTACTS'
    | 'CONTACTS_WEB'
    | 'CONTENT_MEMBERSHIP'
    | 'CONVERSATIONAL_ENRICHMENT'
    | 'CONVERSATIONS'
    | 'CRM_PROCESSES_PLATFORM'
    | 'CRM_UI'
    | 'CRM_UI_BULK_ACTION'
    | 'CUSTOMER_AGENT'
    | 'DATA_ENRICHMENT'
    | 'DATA_QUALITY'
    | 'DATASET'
    | 'DEALS'
    | 'DEFAULT'
    | 'DELETE_OBJECTS'
    | 'EMAIL'
    | 'EMAIL_INBOX_IMPORT'
    | 'EMAIL_INTEGRATION'
    | 'ENGAGEMENTS'
    | 'EXTENSION'
    | 'FILE_MANAGER'
    | 'FLYWHEEL_PRODUCT_DATA_SYNC'
    | 'FORECASTING'
    | 'FORM'
    | 'FORWARD_TO_CRM'
    | 'GMAIL_INTEGRATION'
    | 'GOALS'
    | 'HEISENBERG'
    | 'HELP_DESK'
    | 'HELP_DESK_AI'
    | 'IMPORT'
    | 'INTEGRATION'
    | 'INTEGRATIONS_PLATFORM'
    | 'INTEGRATIONS_SYNC'
    | 'INTENT'
    | 'INTERNAL_PROCESSING'
    | 'LEADIN'
    | 'LEGAL_BASIS_REMEDIATION'
    | 'MARKET_SOURCING'
    | 'MARKETPLACE'
    | 'MARKETS'
    | 'MEETINGS'
    | 'MERGE_COMPANIES'
    | 'MERGE_CONTACTS'
    | 'MERGE_OBJECTS'
    | 'MERGE_REVERT_OBJECTS'
    | 'MICROAPPS'
    | 'MIGRATION'
    | 'MOBILE_ANDROID'
    | 'MOBILE_IOS'
    | 'PAYMENTS'
    | 'PIPELINE_SETTINGS'
    | 'PLAYBOOKS'
    | 'PORTAL_OBJECT_SYNC'
    | 'PORTAL_USER_ASSOCIATOR'
    | 'PRESENTATIONS'
    | 'PRIMARY_AUTOMATION'
    | 'PROPERTY_DEFAULT_VALUE'
    | 'PROPERTY_RESTORE'
    | 'PROPERTY_SETTINGS'
    | 'PROSPECTING_AGENT'
    | 'QUOTAS'
    | 'QUOTES'
    | 'RECYCLING_BIN'
    | 'RESTORE_OBJECTS'
    | 'REVENUE_PLATFORM'
    | 'SALES'
    | 'SALES_MESSAGES'
    | 'SALESFORCE'
    | 'SEQUENCES'
    | 'SETTINGS'
    | 'SIDEKICK'
    | 'SIGNALS'
    | 'SLACK_INTEGRATION'
    | 'SMART_DATA_CAPTURE'
    | 'SOCIAL'
    | 'SUCCESS'
    | 'TALLY'
    | 'TASK'
    | 'UNKNOWN'
    | 'WAL_INCREMENTAL'
    | 'WORK_UI'
    | 'WORKFLOW_CONTACT_DELETE_ACTION'
    | 'WORKFLOWS';

  /**
   * The ID of the property source indicating where it was created.
   */
  sourceId: string;

  /**
   * A human-readable label.
   */
  sourceLabel: string;

  /**
   * Metadata providing additional context about the source.
   */
  sourceMetadata: string;

  sourceUpstreamDeployable: string;

  /**
   * The unique identifier associated with the source.
   */
  sourceVid: Array<number>;

  /**
   * When the value was set, as a 64-bit integer.
   */
  timestamp: number;

  /**
   * The unit of measurement or context for the value.
   */
  unit: string;

  /**
   * The ID of the user who updated the property.
   */
  updatedByUserId: number;

  /**
   * Flag indicating whether to use the timestamp field as the persistence timestamp.
   */
  useTimestampAsPersistenceTimestamp: boolean;

  /**
   * The property value.
   */
  value: string;
}

/**
 * Contains the Id of a Public Object
 */
export interface PublicObjectID {
  /**
   * ID of the object
   */
  id: string;
}

/**
 * Ye olde error
 */
export interface StandardError {
  /**
   * Error category.
   */
  category: string;

  /**
   * Error context.
   */
  context: { [key: string]: Array<string> };

  /**
   * List of error details.
   */
  errors: Array<ErrorDetail>;

  /**
   * Error links.
   */
  links: { [key: string]: string };

  /**
   * Error message.
   */
  message: string;

  /**
   * Error status.
   */
  status: string;

  /**
   * Error ID.
   */
  id?: string;

  /**
   * Error subcategory.
   */
  subCategory?: unknown;
}

export interface TaskLocator {
  /**
   * The unique identifier for the task.
   */
  id: string;

  /**
   * A map of link names to associated URIs containing documentation about the error
   * or recommended remediation steps
   */
  links?: { [key: string]: string };
}

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
