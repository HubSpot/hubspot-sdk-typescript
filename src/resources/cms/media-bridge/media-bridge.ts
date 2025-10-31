// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as EventDefinitionsAPI from '../../events/event-definitions';
import * as EventsAPI from './events';
import {
  EventCreateAttentionSpanEventParams,
  EventCreateMediaPlayedEventParams,
  EventCreateMediaPlayedPercentEventParams,
  Events,
} from './events';
import * as GroupsAPI from './groups';
import {
  GroupCreateParams,
  GroupDeleteByNameParams,
  GroupGetByNameParams,
  GroupListParams,
  GroupUpdateByNameParams,
  Groups,
} from './groups';
import * as IntegratorSettingsAPI from './integrator-settings';
import {
  IntegratorSettingCreateObjectDefinitionParams,
  IntegratorSettingCreateOembedDomainParams,
  IntegratorSettingGetObjectDefinitionsByMediaTypeParams,
  IntegratorSettingGetOembedDomainParams,
  IntegratorSettingRegisterAppNameParams,
  IntegratorSettingUpdateAppNameParams,
  IntegratorSettingUpdateEventVisibilitySettingsParams,
  IntegratorSettingUpdateOembedDomainParams,
  IntegratorSettings,
} from './integrator-settings';
import * as PropertiesAPI from './properties';
import {
  Properties,
  PropertyArchiveBatchParams,
  PropertyCreateBatchParams,
  PropertyCreateParams,
  PropertyDeleteParams,
  PropertyGetBatchParams,
  PropertyGetParams,
  PropertyListParams,
  PropertyUpdateParams,
} from './properties';
import * as SchemasAPI from './schemas';
import {
  SchemaCreateAssociationParams,
  SchemaDeleteAssociationParams,
  SchemaGetParams,
  SchemaUpdateParams,
  Schemas,
} from './schemas';
import * as PropertiesPropertiesAPI from '../../crm/properties/properties';

export class MediaBridge extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  integratorSettings: IntegratorSettingsAPI.IntegratorSettings = new IntegratorSettingsAPI.IntegratorSettings(
    this._client,
  );
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
}

export interface AbsoluteValue {
  operator: 'ABSOLUTE_VALUE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface AddNumbers {
  enclosedInParentheses: boolean;

  operator: 'ADD_NUMBERS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface AddTime {
  operator: 'ADD_TIME';

  stringToCheck:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface And {
  enclosedInParentheses: boolean;

  operator: 'AND';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface AttentionSpanCalculatedValues {
  totalPercentPlayed: number;

  totalSecondsPlayed: number;
}

export interface AttentionSpanEvent {
  /**
   * The ID of the contact in HubSpot’s system that consumed the media. This can be
   * fetched using HubSpot's Get contact by usertoken (utk) API. The API also
   * supports supplying a usertoken, and will handle converting this into a contact
   * ID automatically.
   */
  contactId: number;

  mediaBridgeId: number;

  mediaBridgeObjectCoordinates: string;

  mediaBridgeObjectTypeId: string;

  mediaName: string;

  mediaType: 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE';

  /**
   * The timestamp at which this event occurred, in milliseconds since the epoch.
   */
  occurredTimestamp: number;

  percentRange: string;

  /**
   * The ID of the HubSpot account.
   */
  portalId: number;

  providerId: number;

  sessionId: string;

  /**
   * The percent of the media that the user consumed. Providers may calculate this
   * differently depending on how they consider repeated views of the same portion of
   * media. For this reason, the API will not attempt to validate totalPercentWatched
   * against the attention span information for the event. If it is missing, HubSpot
   * will calculate this from the attention span map as follows: (number of spans
   * with a value of 1 or more)/(Total number of spans).
   */
  totalPercentPlayed: number;

  mediaUrl?: string;

  /**
   * The ID of the page, if hosted on HubSpot. Required for HubSpot pages.
   */
  pageId?: number;

  /**
   * The name of the page. Required if the page is not hosted on HubSpot.
   */
  pageName?: string;

  pageObjectCoordinates?: string;

  /**
   * The URL of the page that an event happened on. Required if the page is not
   * hosted on HubSpot.
   */
  pageUrl?: string;

  /**
   * This is the raw data which provides the most granular data about spans of the
   * media, and how many times each span was consumed by the user. For example, for a
   * 10 second video where each second is a span, if a visitor watches the first 5
   * seconds of the video, then restarts the video and watches the first 2 seconds
   * again, the resulting `rawDataString` would be
   * `“0=2;1=2;2=1;3=1;4=1;5=0;6=0;7=0;8=0;9=0;”`.
   */
  rawData?: string;

  /**
   * The seconds that a user spent consuming the media. The media bridge calculates
   * this as `totalPercentPlayed`\*`mediaDuration`. If a provider would like this to
   * be calculated differently, they can provide the pre-calculated value when they
   * create the event.
   */
  totalSecondsPlayed?: number;
}

export interface AttentionSpanEventRequest {
  mediaType: 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE';

  occurredTimestamp: number;

  rawDataMap: { [key: string]: number };

  sessionId: string;

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  derivedValues?: AttentionSpanCalculatedValues;

  externalId?: string;

  mediaBridgeId?: number;

  mediaName?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageUrl?: string;

  rawDataString?: string;
}

export interface BatchReadInputPropertyName {
  archived: boolean;

  dataSensitivity: 'non_sensitive' | 'sensitive' | 'highly_sensitive';

  inputs: Array<Shared.PropertyName>;
}

export interface BatchResponsePropertyWithErrors {
  completedAt: string;

  results: Array<Shared.Property>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BeginsWith {
  operator: 'BEGINS_WITH';

  stringToCheck:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface BooleanPropertyVariable {
  operator: 'BOOLEAN_PROPERTY_VARIABLE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface BooleanTargetPropertyVariable {
  operator: 'BOOLEAN_TARGET_PROPERTY_VARIABLE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface BulkIntegratorObjectCreationResponse {
  createdObjects: { [key: string]: IntegratorObjectCreationResponse };
}

export interface CaseChangeTestExtensionData {
  mood: string;
}

export interface CollectionResponsePropertyGroupNoPaging {
  results: Array<PropertiesPropertiesAPI.PropertyGroup>;
}

export interface CollectionResponsePropertyNoPaging {
  results: Array<Property1>;
}

export interface ConcatStrings {
  operator: 'CONCAT_STRINGS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface ConstantBoolean {
  operator: 'CONSTANT_BOOLEAN';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface ConstantNumber {
  operator: 'CONSTANT_NUMBER';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface ConstantString {
  operator: 'CONSTANT_STRING';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface Contains {
  operator: 'CONTAINS';

  stringToCheck:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface Date {
  operator: 'DATE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface DatedExchangeRate {
  operator: 'DATED_EXCHANGE_RATE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface DefaultRequirements {
  gates: Array<string>;

  operator: 'AND' | 'OR';

  scopeNames: Array<string>;

  settings: Array<string>;
}

export interface DefinitionSource {
  type: string;

  name?: string;
}

export interface DivideNumbers {
  enclosedInParentheses: boolean;

  operator: 'DIVIDE_NUMBERS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface Endpoints {
  discovery: boolean;

  schemes: Array<string>;

  url: string;
}

export interface Euler {
  operator: 'EULER';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface EventVisibilityChange {
  eventType: 'ALL' | 'MEDIA_PLAYS' | 'MEDIA_PLAYS_PERCENT' | 'ATTENTION_SPAN';

  updatedAt: number;

  showInReporting?: boolean;

  showInTimeline?: boolean;

  showInWorkflows?: boolean;
}

export interface EventVisibilityResponse {
  createdAt: string;

  visibilitySettings: Array<EventVisibilityChange>;
}

export interface ExtensionData {
  extensionStatusMap: { [key: string]: string };

  tags: Array<string>;

  caseChangeTestExtensionData?: CaseChangeTestExtensionData;

  optionDecoratorsExtensionData?: OptionDecoratorsExtensionData;

  requiredPropertiesExtensionData?: RequiredPropertiesExtensionData;

  softRequiredPropertiesExtensionData?: SoftRequiredPropertiesExtensionData;
}

export interface ExternalOptionsMetaData {
  filter?: FilteringMetaData;

  relatedObjectTypeId?: string;
}

export interface ExtractMostRecentEmailReplyHTML {
  operator: 'EXTRACT_MOST_RECENT_EMAIL_REPLY_HTML';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface ExtractMostRecentEmailReplyText {
  operator: 'EXTRACT_MOST_RECENT_EMAIL_REPLY_TEXT';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface ExtractMostRecentPlainTextEmailReply {
  operator: 'EXTRACT_MOST_RECENT_PLAIN_TEXT_EMAIL_REPLY';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface FetchCurrencyDecimalPlaces {
  operator: 'FETCH_CURRENCY_DECIMAL_PLACES';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface FetchExchangeRate {
  operator: 'FETCH_EXCHANGE_RATE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface FetchSingleCurrencyPortalCurrency {
  operator: 'FETCH_SINGLE_CURRENCY_PORTAL_CURRENCY';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface FieldLevelPermission {
  accessLevel: string;
}

export interface FilteringMetaData {
  includeUnconfirmedUsers: boolean;

  pipelineIds: Array<string>;
}

export interface FormatFullName {
  operator: 'FORMAT_FULL_NAME';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface Group {
  deleted: boolean;

  displayName: string;

  displayOrder: number;

  fulcrumPortalId: number;

  fulcrumTimestamp: number;

  hubspotDefined: boolean;

  name: string;

  portalId: number;
}

export interface GroupView {
  displayName: string;

  displayOrder: number;

  fulcrumPortalId: number;

  fulcrumTimestamp: number;

  hubspotDefined: boolean;

  name: string;
}

export interface HasEmailReply {
  operator: 'HAS_EMAIL_REPLY';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface HasPlainTextEmailReply {
  operator: 'HAS_PLAIN_TEXT_EMAIL_REPLY';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface IfBoolean {
  enclosedInParentheses: boolean;

  ifExpression:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  operator: 'IF_BOOLEAN';

  elseExpression?:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface IfNumber {
  enclosedInParentheses: boolean;

  ifExpression:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  operator: 'IF_NUMBER';

  elseExpression?:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface IfString {
  enclosedInParentheses: boolean;

  ifExpression:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  operator: 'IF_STRING';

  elseExpression?:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface InboundDBObjectType {
  id: number;

  allowsSensitiveProperties: boolean;

  createDatePropertyName: string;

  defaultSearchPropertyNames: Array<string>;

  deleted: boolean;

  fullyQualifiedName: string;

  hasCustomProperties: boolean;

  hasDefaultProperties: boolean;

  hasExternalObjectIds: boolean;

  hasOwners: boolean;

  hasPipelines: boolean;

  indexedForFiltersAndReports: boolean;

  lastModifiedPropertyName: string;

  metaType:
    | 'HUBSPOT'
    | 'INTEGRATION'
    | 'PORTAL_SPECIFIC'
    | 'CMS_HUBDB'
    | 'HUBSPOT_EVENT'
    | 'INTEGRATION_EVENT'
    | 'PORTAL_SPECIFIC_EVENT';

  metaTypeId: number;

  name: string;

  objectTypeId: string;

  permissioningType: string;

  pipelinePropertyName: string;

  pipelineStagePropertyName: string;

  requiredProperties: Array<string>;

  restorable: boolean;

  scopeMappings: Array<ScopeMapping>;

  secondaryDisplayLabelPropertyNames: Array<string>;

  accessScopeName?: string;

  createdAt?: number;

  description?: string;

  integrationAppId?: number;

  janusGroup?: string;

  ownerPortalId?: number;

  pipelineCloseDatePropertyName?: string;

  pipelineTimeToClosePropertyName?: string;

  pluralForm?: string;

  primaryDisplayLabelPropertyName?: string;

  readScopeName?: string;

  singularForm?: string;

  status?: string;

  visibility?: string;

  writeScopeName?: string;
}

export interface IntegratorObjectCreationRequest {
  mediaTypes: Array<'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE'>;
}

export interface IntegratorObjectCreationResponse {
  objectType: InboundDBObjectType;

  properties: Array<PropertyDefinition>;

  propertyGroups: Array<Group>;
}

export interface IntegratorOEmbedDomainModel {
  id: number;

  appId: number;

  createdAt: number;

  deletedAt: number;

  endpoints: Endpoints;

  portalId: number;

  updatedAt: number;
}

export interface IntegratorOEmbedDomainRequest {
  endpoints: Endpoints;

  portalId?: number;
}

export interface IsEngagementType {
  operator: 'IS_ENGAGEMENT_TYPE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface IsPipelineStageClosed {
  operator: 'IS_PIPELINE_STAGE_CLOSED';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface IsPresent {
  expressionToEvaluate:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  operator: 'IS_PRESENT';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface LessThan {
  operator: 'LESS_THAN';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface LessThanOrEqual {
  operator: 'LESS_THAN_OR_EQUAL';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface LowerCase {
  operator: 'LOWER_CASE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface MaxNumbers {
  operator: 'MAX_NUMBERS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface MediaBridgePropertyUpdate {
  calculationFormula?: string;

  description?: string;

  displayOrder?: number;

  fieldType?:
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

  formField?: boolean;

  groupName?: string;

  hasUniqueValue?: boolean;

  hidden?: boolean;

  label?: string;

  options?: Array<Shared.OptionInput>;

  type?: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';
}

export interface MediaBridgeProviderPartial {
  updatedAt: number;

  name?: string;
}

export interface MediaBridgeProviderRegistrationResponse {
  appId: number;

  name: string;
}

export interface MediaPlayedEvent {
  contactId: number;

  mediaBridgeId: number;

  mediaBridgeObjectCoordinates: string;

  mediaBridgeObjectTypeId: string;

  mediaName: string;

  mediaType: 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE';

  occurredTimestamp: number;

  portalId: number;

  providerId: number;

  sessionId: string;

  state: 'STARTED' | 'VIEWED';

  iframeUrl?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageObjectCoordinates?: string;

  pageUrl?: string;
}

export interface MediaPlayedEventRequest {
  mediaType: 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE';

  occurredTimestamp: number;

  sessionId: string;

  state: 'STARTED' | 'VIEWED';

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  externalId?: string;

  iframeUrl?: string;

  mediaBridgeId?: number;

  mediaName?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageUrl?: string;
}

export interface MediaPlayedPercentageEvent {
  /**
   * The ID of the contact in HubSpot’s system that consumed the media. This can be
   * fetched using HubSpot's Get contact by usertoken (utk) API. The API also
   * supports supplying a usertoken, and will handle converting this into a contact
   * ID automatically.
   */
  contactId: number;

  mediaBridgeId: number;

  mediaBridgeObjectCoordinates: string;

  mediaBridgeObjectTypeId: string;

  mediaName: string;

  mediaType: 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE';

  occurredTimestamp: number;

  playedPercent: number;

  /**
   * The ID of the HubSpot account.
   */
  portalId: number;

  providerId: number;

  sessionId: string;

  mediaUrl?: string;

  /**
   * The content ID of the page that an event happened on, for HubSpot pages.
   * Required if the page is a HubSpot page.
   */
  pageId?: number;

  /**
   * The name or title of the page that an event happened on. Required for
   * non-HubSpot pages.
   */
  pageName?: string;

  pageObjectCoordinates?: string;

  /**
   * The URL of the page that an event happened on. Required for non-HubSpot pages.
   */
  pageUrl?: string;
}

export interface MediaPlayedPercentageEventRequest {
  mediaType: 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE';

  occurredTimestamp: number;

  playedPercent: number;

  sessionId: string;

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  externalId?: string;

  mediaBridgeId?: number;

  mediaName?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageUrl?: string;
}

export interface MinNumbers {
  operator: 'MIN_NUMBERS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface Month {
  operator: 'MONTH';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface MoreThan {
  operator: 'MORE_THAN';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface MoreThanOrEqual {
  operator: 'MORE_THAN_OR_EQUAL';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface MultiplyNumbers {
  enclosedInParentheses: boolean;

  operator: 'MULTIPLY_NUMBERS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface Not {
  operator: 'NOT';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface Now {
  operator: 'NOW';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface NumberEquals {
  operator: 'NUMBER_EQUALS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface NumberPropertyVariable {
  operator: 'NUMBER_PROPERTY_VARIABLE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface NumberTargetPropertyVariable {
  operator: 'NUMBER_TARGET_PROPERTY_VARIABLE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface NumberToString {
  operator: 'NUMBER_TO_STRING';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface ObjectDefinitionResponse {
  objectTypeId: string;

  objectTypeName: string;

  properties: Array<PropertyDefinition>;

  propertyGroups: Array<GroupView>;

  schema?: InboundDBObjectType;
}

export interface ObjectSchema {
  id: string;

  allowsSensitiveProperties: boolean;

  archived: boolean;

  associations: Array<EventDefinitionsAPI.AssociationDefinition>;

  fullyQualifiedName: string;

  labels: Shared.ObjectTypeDefinitionLabels;

  name: string;

  objectTypeId: string;

  properties: Array<Property1>;

  requiredProperties: Array<string>;

  searchableProperties: Array<string>;

  secondaryDisplayProperties: Array<string>;

  createdAt?: string;

  createdByUserId?: number;

  description?: string;

  primaryDisplayProperty?: string;

  updatedAt?: string;

  updatedByUserId?: number;
}

export interface ObjectTypeDefinition {
  id: string;

  allowsSensitiveProperties: boolean;

  archived: boolean;

  fullyQualifiedName: string;

  labels: Shared.ObjectTypeDefinitionLabels;

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

export interface ObjectTypeDefinitionPatch {
  clearDescription: boolean;

  allowsSensitiveProperties?: boolean;

  description?: string;

  labels?: Shared.ObjectTypeDefinitionLabels;

  primaryDisplayProperty?: string;

  requiredProperties?: Array<string>;

  restorable?: boolean;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface ObjectTypeIDProto {
  innerId: number;

  metaTypeId: number;
}

export interface OEmbedDomainsCollectionResponse {
  results: Array<IntegratorOEmbedDomainModel>;

  totalCount?: number;
}

export interface Option1 {
  hidden: boolean;

  label: string;

  value: string;

  description?: string;

  displayOrder?: number;
}

export interface OptionDecorations {
  color: string;
}

export interface OptionDecoratorsExtensionData {
  optionDecorators: { [key: string]: OptionDecorations };

  optionDecoratorStyle: string;
}

export interface Or {
  enclosedInParentheses: boolean;

  operator: 'OR';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface ParseNumber {
  operator: 'PARSE_NUMBER';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface PeriodToMonths {
  operator: 'PERIOD_TO_MONTHS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface PeriodToWeeks {
  operator: 'PERIOD_TO_WEEKS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface PipelineProbability {
  operator: 'PIPELINE_PROBABILITY';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface Power {
  operator: 'POWER';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

/**
 * A HubSpot property
 */
export interface Property {
  /**
   * Object types permitted to use this property.
   */
  allowedObjectTypes: Array<ObjectTypeIDProto>;

  /**
   * Whether the property is a calculated field.
   */
  calculated: boolean;

  canArchive: boolean;

  canRestore: boolean;

  /**
   * The timestamp when the property was created, in ISO 8601 format.
   */
  createdAt: number;

  /**
   * The ID of the user who created the property.
   */
  createdUserId: number;

  /**
   * The name of the related currency property.
   */
  currencyPropertyName: string;

  /**
   * Indicates the sensitivity level of the property, such as "non_sensitive",
   * "sensitive", or "highly_sensitive".
   */
  dataSensitivity: 'none' | 'standard' | 'high';

  dateDisplayHint: 'absolute' | 'absolute_with_relative' | 'time_since' | 'time_until';

  /**
   * Whether the property has been deleted.
   */
  deleted: boolean;

  /**
   * A summary of the property's purpose.
   */
  description: string;

  /**
   * The mode in which the property is displayed. Can be: "current_value" or
   * "all_unique_versions".
   */
  displayMode: 'current_value' | 'all_unique_versions';

  /**
   * The position of the item relative to others in the list.
   */
  displayOrder: number;

  enforceMultivalueUniqueness: boolean;

  /**
   * Applicable only for enumeration type properties. Should be set to true with a
   * 'referencedObjectType' of 'OWNER'. Otherwise false.
   */
  externalOptions: boolean;

  /**
   * When externalOptions is true, indicates the property's option values will be
   * populated from other systems (e.g., "OWNER" for the hubspot_owner_id property).
   */
  externalOptionsReferenceType: string;

  /**
   * Deprecated. Whether the property is marked as a favorite.
   */
  favorited: boolean;

  /**
   * Deprecated. The order position when marked as favorited.
   */
  favoritedOrder: number;

  /**
   * Determines how the property will appear in HubSpot's UI or on a form. Learn more
   * in the properties API guide.
   */
  fieldType: string;

  /**
   * Whether the property can appear on forms.
   */
  formField: boolean;

  /**
   * The ID of the user who last updated the property.
   */
  fromUserId: number;

  /**
   * The name of the group to which the property is assigned.
   */
  groupName: string;

  /**
   * Whether the property is a unique identifier property.
   */
  hasUniqueValue: boolean;

  /**
   * Whether or not the property will be hidden from the HubSpot UI. It's recommended
   * that this be set to false for custom properties.
   */
  hidden: boolean;

  /**
   * A boolean value set to true for HubSpot default properties.
   */
  hubspotDefined: boolean;

  /**
   * For default properties, whether the property has been customized. Equivalent to
   * the 'isCustomizedDefault' field.
   */
  isCustomizedDefault: boolean;

  /**
   * Whether the property can contain multiple values.
   */
  isMultiValued: boolean;

  /**
   * For default properties, whether the property has been customized. Equivalent to
   * the 'isCustomizedDefault' field.
   */
  isPartial: boolean;

  /**
   * The display label for the property.
   */
  label: string;

  /**
   * Whether the property definition can be customized but not deleted.
   */
  mutableDefinitionNotDeletable: boolean;

  /**
   * The internal name for the property.
   */
  name: string;

  /**
   * Hint for how a number property is displayed and validated in HubSpot's UI. Can
   * be: "unformatted", "formatted", "currency", "percentage", "duration", or
   * "probability".
   */
  numberDisplayHint: 'unformatted' | 'formatted' | 'currency' | 'percentage' | 'duration' | 'probability';

  /**
   * A list of valid options for the property. This field is required for enumerated
   * properties.
   */
  options: Array<Shared.Option>;

  /**
   * Whether options can be modified after creation.
   */
  optionsAreMutable: boolean;

  /**
   * Specifies how to sort property options. Can be either "DISPLAY_ORDER" to defer
   * to the displayOrder field, or "ALPHABETICAL".
   */
  optionSortStrategy: 'DISPLAY_ORDER' | 'ALPHABETICAL';

  owningAppId: number;

  /**
   * The ID of the HubSpot account where the property is defined.
   */
  portalId: number;

  /**
   * Whether the property's description is read-only.
   */
  readOnlyDefinition: boolean;

  /**
   * Indicates if the property's value is read-only.
   */
  readOnlyValue: boolean;

  /**
   * Deprecated. Use externalOptionsReferenceType instead.
   */
  referencedObjectType:
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
    | 'PROSPECTING_AGENT_CONTACT_ASSIGNMENT'
    | 'UNKNOWN';

  /**
   * Whether the property is searchable globaly.
   */
  searchableInGlobalSearch: boolean;

  searchTextAnalysisMode: 'NONE' | 'NOT_ANALYZED_TEXT';

  /**
   * When sensitiveData is true, lists the type of sensitive data contained in the
   * property (e.g., "HIPAA").
   */
  sensitiveDataCategories: Array<string>;

  /**
   * Whether to show the currency symbol in HubSpot's UI.
   */
  showCurrencySymbol: boolean;

  /**
   * Hint for how the text is displayed and validated in HubSpot's UI. Can be:
   * "unformatted_single_line", "multi_line", "email", "phone_number", "domain_name",
   * "ip_address", "physical_address", or "postal_code".
   */
  textDisplayHint:
    | 'unformatted_single_line'
    | 'multi_line'
    | 'email'
    | 'phone_number'
    | 'domain_name'
    | 'ip_address'
    | 'physical_address'
    | 'postal_code';

  /**
   * The data type of the property, such as string or number.
   */
  type:
    | 'string'
    | 'number'
    | 'bool'
    | 'datetime'
    | 'enumeration'
    | 'date'
    | 'phone_number'
    | 'currency_number'
    | 'json'
    | 'object_coordinates';

  /**
   * The timestamp when the property was last updated, in ISO 8601 format.
   */
  updatedAt: number;
}

export interface Property1 {
  description: string;

  fieldType: string;

  groupName: string;

  label: string;

  name: string;

  options: Array<Option1>;

  type: string;

  archived?: boolean;

  archivedAt?: string;

  calculated?: boolean;

  calculationFormula?: string;

  createdAt?: string;

  createdUserId?: string;

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';

  dateDisplayHint?: 'absolute' | 'absolute_with_relative' | 'time_since' | 'time_until';

  displayOrder?: number;

  externalOptions?: boolean;

  formField?: boolean;

  hasUniqueValue?: boolean;

  hidden?: boolean;

  hubspotDefined?: boolean;

  modificationMetadata?: Shared.PropertyModificationMetadata;

  referencedObjectType?: string;

  sensitiveDataCategories?: Array<string>;

  showCurrencySymbol?: boolean;

  updatedAt?: string;

  updatedUserId?: string;
}

export interface PropertyDefinition {
  objectTypeId: string;

  /**
   * Defines a property
   */
  property: Shared.Property;

  calculationExpression?:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  calculationFormula?: string;

  definitionSource?: PropertyDefinitionSource;

  extensionData?: ExtensionData;

  externalOptionsMetaData?: ExternalOptionsMetaData;

  fulcrumPortalId?: number;

  fulcrumTimestamp?: number;

  janusGroup?: string;

  permission?: FieldLevelPermission;

  propertyDefinitionSource?: DefinitionSource;

  propertyRequirements?: DefaultRequirements;

  rollupExpression?: RollupExpression;
}

export interface PropertyDefinitionSource {
  type: 'GLOBAL' | 'OBJECT_TYPE' | 'HAVEN_BRANCH' | 'PORTAL';

  name?: string;
}

export interface PropertyGroup {
  archived: boolean;

  label: string;

  name: string;

  displayOrder?: number;
}

export interface RequiredPropertiesExtensionData {
  isRequiredProperty: boolean;
}

export interface RollupExpression {
  associationTypes: Array<Shared.AssociationSpec>;

  rollupOperator: string;

  sourceObjectTypeId: string;

  sourcePropertyName: string;

  conditionalExpression?:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  conditionalFormula?: string;

  emptyRollupValue?: string;

  sourceCompareByPropertyName?: string;
}

export interface RoundDownNumbers {
  operator: 'ROUND_DOWN';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface RoundNearestNumbers {
  operator: 'ROUND_NEAREST';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface RoundUpNumbers {
  operator: 'ROUND_UP';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface ScopeMapping {
  accessLevel: string;

  requestAction: string;

  scopeName: string;
}

export interface SetContainsString {
  operator: 'SET_CONTAINS_STRING';

  stringToCheck:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface SoftRequiredPropertiesExtensionData {
  isSoftRequiredProperty: boolean;
}

export interface SquareRoot {
  operator: 'SQUARE_ROOT';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface StringEquals {
  operator: 'STRING_EQUALS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface StringLength {
  operator: 'STRING_LENGTH';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface StringPropertyVariable {
  operator: 'STRING_PROPERTY_VARIABLE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface StringTargetPropertyVariable {
  operator: 'STRING_TARGET_PROPERTY_VARIABLE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface Substring {
  operator: 'SUBSTRING';

  stringToCheck:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface SubtractNumbers {
  enclosedInParentheses: boolean;

  operator: 'SUBTRACT_NUMBERS';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface SubtractTime {
  operator: 'SUBTRACT_TIME';

  stringToCheck:
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface TimeBetween {
  operator: 'TIME_BETWEEN';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

export interface TimestampOfPropertyVariable {
  operator: 'TIMESTAMP_OF_PROPERTY_VARIABLE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface TimestampOfTargetPropertyVariable {
  operator: 'TIMESTAMP_OF_TARGET_PROPERTY_VARIABLE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface UpperCase {
  operator: 'UPPER_CASE';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: string;
}

export interface Xor {
  enclosedInParentheses: boolean;

  operator: 'XOR';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: boolean;
}

export interface Year {
  operator: 'YEAR';

  inputs?: Array<
    | ConstantBoolean
    | ConstantNumber
    | ConstantString
    | BooleanPropertyVariable
    | StringPropertyVariable
    | NumberPropertyVariable
    | TimestampOfPropertyVariable
    | BooleanTargetPropertyVariable
    | StringTargetPropertyVariable
    | NumberTargetPropertyVariable
    | TimestampOfTargetPropertyVariable
    | AddNumbers
    | SubtractNumbers
    | MultiplyNumbers
    | DivideNumbers
    | RoundDownNumbers
    | RoundUpNumbers
    | RoundNearestNumbers
    | UpperCase
    | LowerCase
    | ConcatStrings
    | Contains
    | BeginsWith
    | NumberToString
    | ParseNumber
    | FetchExchangeRate
    | FetchCurrencyDecimalPlaces
    | FetchSingleCurrencyPortalCurrency
    | DatedExchangeRate
    | PipelineProbability
    | MaxNumbers
    | MinNumbers
    | LessThan
    | LessThanOrEqual
    | MoreThan
    | MoreThanOrEqual
    | NumberEquals
    | StringEquals
    | IsPipelineStageClosed
    | Not
    | Date
    | Month
    | Year
    | Now
    | TimeBetween
    | PeriodToMonths
    | PeriodToWeeks
    | And
    | Or
    | Xor
    | IfString
    | IfNumber
    | IfBoolean
    | IsPresent
    | HasEmailReply
    | HasPlainTextEmailReply
    | ExtractMostRecentEmailReplyHTML
    | ExtractMostRecentEmailReplyText
    | ExtractMostRecentPlainTextEmailReply
    | SetContainsString
    | IsEngagementType
    | FormatFullName
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime
  >;

  propertyName?: string;

  value?: number;
}

MediaBridge.Events = Events;
MediaBridge.Groups = Groups;
MediaBridge.IntegratorSettings = IntegratorSettings;
MediaBridge.Properties = Properties;
MediaBridge.Schemas = Schemas;

export declare namespace MediaBridge {
  export {
    type AbsoluteValue as AbsoluteValue,
    type AddNumbers as AddNumbers,
    type AddTime as AddTime,
    type And as And,
    type AttentionSpanCalculatedValues as AttentionSpanCalculatedValues,
    type AttentionSpanEvent as AttentionSpanEvent,
    type AttentionSpanEventRequest as AttentionSpanEventRequest,
    type BatchReadInputPropertyName as BatchReadInputPropertyName,
    type BatchResponsePropertyWithErrors as BatchResponsePropertyWithErrors,
    type BeginsWith as BeginsWith,
    type BooleanPropertyVariable as BooleanPropertyVariable,
    type BooleanTargetPropertyVariable as BooleanTargetPropertyVariable,
    type BulkIntegratorObjectCreationResponse as BulkIntegratorObjectCreationResponse,
    type CaseChangeTestExtensionData as CaseChangeTestExtensionData,
    type CollectionResponsePropertyGroupNoPaging as CollectionResponsePropertyGroupNoPaging,
    type CollectionResponsePropertyNoPaging as CollectionResponsePropertyNoPaging,
    type ConcatStrings as ConcatStrings,
    type ConstantBoolean as ConstantBoolean,
    type ConstantNumber as ConstantNumber,
    type ConstantString as ConstantString,
    type Contains as Contains,
    type Date as Date,
    type DatedExchangeRate as DatedExchangeRate,
    type DefaultRequirements as DefaultRequirements,
    type DefinitionSource as DefinitionSource,
    type DivideNumbers as DivideNumbers,
    type Endpoints as Endpoints,
    type Euler as Euler,
    type EventVisibilityChange as EventVisibilityChange,
    type EventVisibilityResponse as EventVisibilityResponse,
    type ExtensionData as ExtensionData,
    type ExternalOptionsMetaData as ExternalOptionsMetaData,
    type ExtractMostRecentEmailReplyHTML as ExtractMostRecentEmailReplyHTML,
    type ExtractMostRecentEmailReplyText as ExtractMostRecentEmailReplyText,
    type ExtractMostRecentPlainTextEmailReply as ExtractMostRecentPlainTextEmailReply,
    type FetchCurrencyDecimalPlaces as FetchCurrencyDecimalPlaces,
    type FetchExchangeRate as FetchExchangeRate,
    type FetchSingleCurrencyPortalCurrency as FetchSingleCurrencyPortalCurrency,
    type FieldLevelPermission as FieldLevelPermission,
    type FilteringMetaData as FilteringMetaData,
    type FormatFullName as FormatFullName,
    type Group as Group,
    type GroupView as GroupView,
    type HasEmailReply as HasEmailReply,
    type HasPlainTextEmailReply as HasPlainTextEmailReply,
    type IfBoolean as IfBoolean,
    type IfNumber as IfNumber,
    type IfString as IfString,
    type InboundDBObjectType as InboundDBObjectType,
    type IntegratorObjectCreationRequest as IntegratorObjectCreationRequest,
    type IntegratorObjectCreationResponse as IntegratorObjectCreationResponse,
    type IntegratorOEmbedDomainModel as IntegratorOEmbedDomainModel,
    type IntegratorOEmbedDomainRequest as IntegratorOEmbedDomainRequest,
    type IsEngagementType as IsEngagementType,
    type IsPipelineStageClosed as IsPipelineStageClosed,
    type IsPresent as IsPresent,
    type LessThan as LessThan,
    type LessThanOrEqual as LessThanOrEqual,
    type LowerCase as LowerCase,
    type MaxNumbers as MaxNumbers,
    type MediaBridgePropertyUpdate as MediaBridgePropertyUpdate,
    type MediaBridgeProviderPartial as MediaBridgeProviderPartial,
    type MediaBridgeProviderRegistrationResponse as MediaBridgeProviderRegistrationResponse,
    type MediaPlayedEvent as MediaPlayedEvent,
    type MediaPlayedEventRequest as MediaPlayedEventRequest,
    type MediaPlayedPercentageEvent as MediaPlayedPercentageEvent,
    type MediaPlayedPercentageEventRequest as MediaPlayedPercentageEventRequest,
    type MinNumbers as MinNumbers,
    type Month as Month,
    type MoreThan as MoreThan,
    type MoreThanOrEqual as MoreThanOrEqual,
    type MultiplyNumbers as MultiplyNumbers,
    type Not as Not,
    type Now as Now,
    type NumberEquals as NumberEquals,
    type NumberPropertyVariable as NumberPropertyVariable,
    type NumberTargetPropertyVariable as NumberTargetPropertyVariable,
    type NumberToString as NumberToString,
    type ObjectDefinitionResponse as ObjectDefinitionResponse,
    type ObjectSchema as ObjectSchema,
    type ObjectTypeDefinition as ObjectTypeDefinition,
    type ObjectTypeDefinitionPatch as ObjectTypeDefinitionPatch,
    type ObjectTypeIDProto as ObjectTypeIDProto,
    type OEmbedDomainsCollectionResponse as OEmbedDomainsCollectionResponse,
    type Option1 as Option1,
    type OptionDecorations as OptionDecorations,
    type OptionDecoratorsExtensionData as OptionDecoratorsExtensionData,
    type Or as Or,
    type ParseNumber as ParseNumber,
    type PeriodToMonths as PeriodToMonths,
    type PeriodToWeeks as PeriodToWeeks,
    type PipelineProbability as PipelineProbability,
    type Power as Power,
    type Property as Property,
    type Property1 as Property1,
    type PropertyDefinition as PropertyDefinition,
    type PropertyDefinitionSource as PropertyDefinitionSource,
    type PropertyGroup as PropertyGroup,
    type RequiredPropertiesExtensionData as RequiredPropertiesExtensionData,
    type RollupExpression as RollupExpression,
    type RoundDownNumbers as RoundDownNumbers,
    type RoundNearestNumbers as RoundNearestNumbers,
    type RoundUpNumbers as RoundUpNumbers,
    type ScopeMapping as ScopeMapping,
    type SetContainsString as SetContainsString,
    type SoftRequiredPropertiesExtensionData as SoftRequiredPropertiesExtensionData,
    type SquareRoot as SquareRoot,
    type StringEquals as StringEquals,
    type StringLength as StringLength,
    type StringPropertyVariable as StringPropertyVariable,
    type StringTargetPropertyVariable as StringTargetPropertyVariable,
    type Substring as Substring,
    type SubtractNumbers as SubtractNumbers,
    type SubtractTime as SubtractTime,
    type TimeBetween as TimeBetween,
    type TimestampOfPropertyVariable as TimestampOfPropertyVariable,
    type TimestampOfTargetPropertyVariable as TimestampOfTargetPropertyVariable,
    type UpperCase as UpperCase,
    type Xor as Xor,
    type Year as Year,
  };

  export {
    Events as Events,
    type EventCreateAttentionSpanEventParams as EventCreateAttentionSpanEventParams,
    type EventCreateMediaPlayedEventParams as EventCreateMediaPlayedEventParams,
    type EventCreateMediaPlayedPercentEventParams as EventCreateMediaPlayedPercentEventParams,
  };

  export {
    Groups as Groups,
    type GroupCreateParams as GroupCreateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteByNameParams as GroupDeleteByNameParams,
    type GroupGetByNameParams as GroupGetByNameParams,
    type GroupUpdateByNameParams as GroupUpdateByNameParams,
  };

  export {
    IntegratorSettings as IntegratorSettings,
    type IntegratorSettingCreateObjectDefinitionParams as IntegratorSettingCreateObjectDefinitionParams,
    type IntegratorSettingCreateOembedDomainParams as IntegratorSettingCreateOembedDomainParams,
    type IntegratorSettingGetObjectDefinitionsByMediaTypeParams as IntegratorSettingGetObjectDefinitionsByMediaTypeParams,
    type IntegratorSettingGetOembedDomainParams as IntegratorSettingGetOembedDomainParams,
    type IntegratorSettingRegisterAppNameParams as IntegratorSettingRegisterAppNameParams,
    type IntegratorSettingUpdateAppNameParams as IntegratorSettingUpdateAppNameParams,
    type IntegratorSettingUpdateEventVisibilitySettingsParams as IntegratorSettingUpdateEventVisibilitySettingsParams,
    type IntegratorSettingUpdateOembedDomainParams as IntegratorSettingUpdateOembedDomainParams,
  };

  export {
    Properties as Properties,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyArchiveBatchParams as PropertyArchiveBatchParams,
    type PropertyCreateBatchParams as PropertyCreateBatchParams,
    type PropertyGetParams as PropertyGetParams,
    type PropertyGetBatchParams as PropertyGetBatchParams,
  };

  export {
    Schemas as Schemas,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaCreateAssociationParams as SchemaCreateAssociationParams,
    type SchemaDeleteAssociationParams as SchemaDeleteAssociationParams,
    type SchemaGetParams as SchemaGetParams,
  };
}
