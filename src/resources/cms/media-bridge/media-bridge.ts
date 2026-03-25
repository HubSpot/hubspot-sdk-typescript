// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as EventsAPI from '../../events/events';
import * as BatchAPI from './batch';
import { Batch, BatchCreateParams, BatchDeleteParams, BatchGetParams } from './batch';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class MediaBridge extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  create(body: MediaBridgeCreateParams, options?: RequestOptions): APIPromise<MediaBridgeObject> {
    return this._client.post('/media-bridge/2026-03/objects', { body, ...options });
  }

  update(
    objectID: number,
    body: MediaBridgeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeObject> {
    return this._client.patch(path`/media-bridge/2026-03/objects/${objectID}`, { body, ...options });
  }

  list(
    mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO',
    query: MediaBridgeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MediaBridgeObjectsPage, MediaBridgeObject> {
    return this._client.getAPIList(
      path`/media-bridge/2026-03/objects/${mediaType}`,
      Page<MediaBridgeObject>,
      { query, ...options },
    );
  }

  delete(objectID: number, params: MediaBridgeDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { mediaType } = params;
    return this._client.delete(path`/media-bridge/2026-03/objects/${mediaType}/${objectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new association definition for the specified object type.
   */
  createAssociation(
    objectType: string,
    params: MediaBridgeCreateAssociationParams,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.AssociationDefinition> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/2026-03/${appId}/schemas/${objectType}/associations`, {
      body,
      ...options,
    });
  }

  /**
   * Create an event containing the viewers attention span details for the media.
   */
  createAttentionSpanEvent(
    body: MediaBridgeCreateAttentionSpanEventParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post('/media-bridge/2026-03/events/attention-span', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Create an event for when a user begins playing a piece of media.
   */
  createMediaPlayedEvent(
    body: MediaBridgeCreateMediaPlayedEventParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post('/media-bridge/2026-03/events/media-played', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Create an event representing a user reaching quarterly milestones in a piece of
   * media they're viewing.
   */
  createMediaPlayedPercentEvent(
    body: MediaBridgeCreateMediaPlayedPercentEventParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post('/media-bridge/2026-03/events/media-played-percent', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Create a new media object type
   */
  createObjectType(
    appID: string,
    body: MediaBridgeCreateObjectTypeParams,
    options?: RequestOptions,
  ): APIPromise<BulkIntegratorObjectCreationResponse> {
    return this._client.post(path`/media-bridge/2026-03/${appID}/settings/object-definitions`, {
      body,
      ...options,
    });
  }

  /**
   * Set up a new oEmbed domain for your media bridge app.
   */
  createOembedDomain(
    appID: string,
    body: MediaBridgeCreateOembedDomainParams,
    options?: RequestOptions,
  ): APIPromise<IntegratorOEmbedDomainModel> {
    return this._client.post(path`/media-bridge/2026-03/${appID}/settings/oembed-domains`, {
      body,
      ...options,
    });
  }

  /**
   * Create a new property for the specified media type
   */
  createProperty(
    objectType: string,
    params: MediaBridgeCreatePropertyParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/2026-03/${appId}/properties/${objectType}`, {
      body,
      ...options,
    });
  }

  /**
   * Create a new property group for the specified object type.
   */
  createPropertyGroup(
    objectType: string,
    params: MediaBridgeCreatePropertyGroupParams,
    options?: RequestOptions,
  ): APIPromise<Shared.PropertyGroup> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/2026-03/${appId}/properties/${objectType}/groups`, {
      body,
      ...options,
    });
  }

  createVideoAssociationDefinition(
    appID: string,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.AssociationDefinition> {
    return this._client.post(
      path`/media-bridge/2026-03/${appID}/settings/video-association-definition`,
      options,
    );
  }

  /**
   * Delete an existing association definition for an object type.
   */
  deleteAssociation(
    associationID: string,
    params: MediaBridgeDeleteAssociationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, objectType } = params;
    return this._client.delete(
      path`/media-bridge/2026-03/${appId}/schemas/${objectType}/associations/${associationID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Delete an existing oEmbed domain.
   */
  deleteOembedDomain(
    appID: string,
    params: MediaBridgeDeleteOembedDomainParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id, domainPortalId } = params ?? {};
    return this._client.delete(path`/media-bridge/2026-03/${appID}/settings/oembed-domains`, {
      query: { id, domainPortalId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete an existing property for an object type.
   */
  deleteProperty(
    propertyName: string,
    params: MediaBridgeDeletePropertyParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, objectType } = params;
    return this._client.delete(
      path`/media-bridge/2026-03/${appId}/properties/${objectType}/${propertyName}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Delete an existing property group by name
   */
  deletePropertyGroup(
    groupName: string,
    params: MediaBridgeDeletePropertyGroupParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, objectType } = params;
    return this._client.delete(
      path`/media-bridge/2026-03/${appId}/properties/${objectType}/groups/${groupName}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  get(
    objectID: number,
    params: MediaBridgeGetParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeObject> {
    const { mediaType } = params;
    return this._client.get(path`/media-bridge/2026-03/objects/${mediaType}/${objectID}`, options);
  }

  /**
   * Get the visibility settings for media bridge events for your apps.
   */
  getEventVisibilitySettings(appID: string, options?: RequestOptions): APIPromise<EventVisibilityResponse> {
    return this._client.get(path`/media-bridge/2026-03/${appID}/settings/event-visibility`, options);
  }

  /**
   * Get the details for an existing oEmbed domain.
   */
  getOembedDomain(
    oEmbedDomainID: string,
    params: MediaBridgeGetOembedDomainParams,
    options?: RequestOptions,
  ): APIPromise<IntegratorOEmbedDomainModel> {
    const { appId } = params;
    return this._client.get(
      path`/media-bridge/2026-03/${appId}/settings/oembed-domains/${oEmbedDomainID}`,
      options,
    );
  }

  /**
   * Get the details for an existing property by name.
   */
  getProperty(
    propertyName: string,
    params: MediaBridgeGetPropertyParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { appId, objectType, ...query } = params;
    return this._client.get(path`/media-bridge/2026-03/${appId}/properties/${objectType}/${propertyName}`, {
      query,
      ...options,
    });
  }

  /**
   * Get the details of an existing property group by name.
   */
  getPropertyGroup(
    groupName: string,
    params: MediaBridgeGetPropertyGroupParams,
    options?: RequestOptions,
  ): APIPromise<Shared.PropertyGroup> {
    const { appId, objectType } = params;
    return this._client.get(
      path`/media-bridge/2026-03/${appId}/properties/${objectType}/groups/${groupName}`,
      options,
    );
  }

  /**
   * Get the schema for a specified object type.
   */
  getSchema(
    objectType: string,
    params: MediaBridgeGetSchemaParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ObjectSchema> {
    const { appId } = params;
    return this._client.get(path`/media-bridge/2026-03/${appId}/schemas/${objectType}`, options);
  }

  /**
   * Get the existing objects types that belong to the specified media type.
   */
  listObjectTypesByMediaType(
    mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO',
    params: MediaBridgeListObjectTypesByMediaTypeParams,
    options?: RequestOptions,
  ): APIPromise<ObjectDefinitionResponse> {
    const { appId, ...query } = params;
    return this._client.get(path`/media-bridge/2026-03/${appId}/settings/object-definitions/${mediaType}`, {
      query,
      ...options,
    });
  }

  /**
   * Get the details for existing oEmbed domains for your app
   */
  listOembedDomains(
    appID: string,
    query: MediaBridgeListOembedDomainsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OEmbedDomainsCollectionResponse> {
    return this._client.get(path`/media-bridge/2026-03/${appID}/settings/oembed-domains`, {
      query,
      ...options,
    });
  }

  /**
   * Get the existing properties defined for a media object type.
   */
  listProperties(
    objectType: string,
    params: MediaBridgeListPropertiesParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CollectionResponsePropertyNoPaging> {
    const { appId, ...query } = params;
    return this._client.get(path`/media-bridge/2026-03/${appId}/properties/${objectType}`, {
      query,
      ...options,
    });
  }

  /**
   * Get the property groups for a specified object type.
   */
  listPropertyGroups(
    objectType: string,
    params: MediaBridgeListPropertyGroupsParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CollectionResponsePropertyGroupNoPaging> {
    const { appId } = params;
    return this._client.get(path`/media-bridge/2026-03/${appId}/properties/${objectType}/groups`, options);
  }

  /**
   * Get the schemas for all object types.
   */
  listSchemas(
    appID: string,
    query: MediaBridgeListSchemasParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.CollectionResponseObjectSchemaNoPaging> {
    return this._client.get(path`/media-bridge/2026-03/${appID}/schemas`, { query, ...options });
  }

  /**
   * Register the name that your app will display when a user is selecting media
   * bridge items.
   *
   * @deprecated
   */
  registerAppName(
    appID: string,
    body: MediaBridgeRegisterAppNameParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeProviderRegistrationResponse> {
    return this._client.post(path`/media-bridge/2026-03/${appID}/settings/register`, { body, ...options });
  }

  /**
   * Set the visibility settings for media bridge events created by your app.
   */
  updateEventVisibilitySettings(
    appID: string,
    body: MediaBridgeUpdateEventVisibilitySettingsParams,
    options?: RequestOptions,
  ): APIPromise<EventVisibilityChange> {
    return this._client.patch(path`/media-bridge/2026-03/${appID}/settings/event-visibility`, {
      body,
      ...options,
    });
  }

  /**
   * Update an existing oEmbed domain.
   */
  updateOembedDomain(
    oEmbedDomainID: string,
    params: MediaBridgeUpdateOembedDomainParams,
    options?: RequestOptions,
  ): APIPromise<IntegratorOEmbedDomainModel> {
    const { appId, ...body } = params;
    return this._client.patch(
      path`/media-bridge/2026-03/${appId}/settings/oembed-domains/${oEmbedDomainID}`,
      { body, ...options },
    );
  }

  /**
   * Update an existing property for an object type.
   */
  updateProperty(
    propertyName: string,
    params: MediaBridgeUpdatePropertyParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { appId, objectType, ...body } = params;
    return this._client.patch(path`/media-bridge/2026-03/${appId}/properties/${objectType}/${propertyName}`, {
      body,
      ...options,
    });
  }

  /**
   * Update an existing property group by name.
   */
  updatePropertyGroup(
    groupName: string,
    params: MediaBridgeUpdatePropertyGroupParams,
    options?: RequestOptions,
  ): APIPromise<Shared.PropertyGroup> {
    const { appId, objectType, ...body } = params;
    return this._client.patch(
      path`/media-bridge/2026-03/${appId}/properties/${objectType}/groups/${groupName}`,
      { body, ...options },
    );
  }

  /**
   * Update the schema for an existing object type
   */
  updateSchema(
    objectType: string,
    params: MediaBridgeUpdateSchemaParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ObjectTypeDefinition> {
    const { appId, ...body } = params;
    return this._client.patch(path`/media-bridge/2026-03/${appId}/schemas/${objectType}`, {
      body,
      ...options,
    });
  }

  /**
   * Update the name that your app will display when a user is selecting media bridge
   * items.
   */
  updateSettings(
    appID: string,
    body: MediaBridgeUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeProviderRegistrationResponse> {
    return this._client.put(path`/media-bridge/2026-03/${appID}/settings`, { body, ...options });
  }
}

export type MediaBridgeObjectsPage = Page<MediaBridgeObject>;

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

export interface AttentionSpanEventRequest {
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';

  occurredTimestamp: number;

  rawDataMap: { [key: string]: number };

  sessionId: string;

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  derivedValues?: AttentionSpanCalculatedValues;

  externalId?: string;

  externalPlayContext?: 'EMAIL' | 'EXTERNAL_PAGE';

  mediaBridgeId?: number;

  mediaName?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageUrl?: string;

  rawDataString?: string;
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

  propertyName?: string;

  value?: boolean;
}

export interface BooleanTargetPropertyVariable {
  operator: 'BOOLEAN_TARGET_PROPERTY_VARIABLE';

  propertyName?: string;

  value?: boolean;
}

export interface BulkIntegratorObjectCreationResponse {
  createdObjects: { [key: string]: IntegratorObjectCreationResponse };
}

export interface CaseChangeTestExtensionData {
  mood: 'ANGRY' | 'HAPPY' | 'SAD' | 'SARCASTIC';
}

export interface CollectionResponseMediaBridgeObjectForwardPaging {
  results: Array<MediaBridgeObject>;

  paging?: Shared.ForwardPaging;
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

  propertyName?: string;

  value?: boolean;
}

export interface ConstantNumber {
  operator: 'CONSTANT_NUMBER';

  propertyName?: string;

  value?: number;
}

export interface ConstantString {
  operator: 'CONSTANT_STRING';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

export interface CreateAudioObjectRequest {
  mediaType: 'AUDIO';

  title: string;

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;
}

export interface CreateDocumentObjectRequest {
  mediaType: 'DOCUMENT';

  title: string;

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;
}

export interface CreateImageObjectRequest {
  mediaType: 'IMAGE';

  title: string;

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;
}

export type CreateMBObjectRequest =
  | CreateVideoObjectRequest
  | CreateOtherObjectRequest
  | CreateAudioObjectRequest
  | CreateImageObjectRequest
  | CreateDocumentObjectRequest;

export interface CreateOtherObjectRequest {
  mediaType: 'OTHER';

  title: string;

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;
}

export interface CreateVideoObjectRequest {
  mediaType: 'VIDEO';

  title: string;

  bearerToken?: string;

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;

  transcriptUrl?: string;
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
  type: 'GLOBAL' | 'HAVEN_BRANCH' | 'OBJECT_TYPE' | 'PORTAL';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

  propertyName?: string;

  value?: number;
}

export interface EventVisibilityChange {
  eventType: 'ALL' | 'ATTENTION_SPAN' | 'MEDIA_PLAYS' | 'MEDIA_PLAYS_PERCENT';

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
  extensionStatusMap: { [key: string]: 'OK' | 'ERROR' | 'TIMEOUT' };

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

  propertyName?: string;

  value?: string;
}

export interface FieldLevelPermission {
  accessLevel: string;
}

export interface FilteringMetaData {
  includeHelpdeskRoutableTeamsOnly: boolean;

  includeUnconfirmedUsers: boolean;

  listProcessingTypes: Array<string>;

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

export interface FormatPhoneNumber {
  operator: 'FORMAT_PHONE_NUMBER';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

export interface FormatSearchablePhoneNumber {
  operator: 'FORMAT_SEARCHABLE_PHONE_NUMBER';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | 'CMS_HUBDB'
    | 'HUBSPOT'
    | 'HUBSPOT_EVENT'
    | 'INTEGRATION'
    | 'INTEGRATION_EVENT'
    | 'PORTAL_SPECIFIC'
    | 'PORTAL_SPECIFIC_EVENT'
    | 'WORK'
    | 'WORK_SUB';

  metaTypeId: number;

  name: string;

  objectTypeId: string;

  permissioningType: 'ALL_OR_NONE' | 'DO_NOT_CHECK_PERMISSIONS' | 'EXPLICIT' | 'OWNER_BASED' | 'TEAM_BASED';

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

  status?: 'Deprecated' | 'In development' | 'Live';

  visibility?: 'Customer-facing' | 'Customer-facing public API' | 'Customer-facing UI' | 'Internal only';

  writeScopeName?: string;
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

export interface IntegratorObjectCreationRequest {
  mediaTypes: Array<'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE'>;
}

export interface IntegratorObjectCreationResponse {
  objectType: InboundDBObjectType;

  properties: Array<PropertyDefinition>;

  propertyGroups: Array<Group>;
}

export interface IsEngagementType {
  operator: 'IS_ENGAGEMENT_TYPE';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
    | AbsoluteValue
    | SquareRoot
    | Power
    | Substring
    | Euler
    | StringLength
    | AddTime
    | SubtractTime;

  operator: 'IS_PRESENT';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

export interface MediaBridgeObject {
  id: string;

  createdAt: string;

  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';

  title: string;

  updatedAt: string;

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;

  video?: VideoObject;
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

  allowImportOnDisconnect?: boolean;

  moduleName?: string;

  name?: string;
}

export interface MediaBridgeProviderRegistrationResponse {
  appId: number;

  name: string;
}

export interface MediaPlayedEventRequest {
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';

  occurredTimestamp: number;

  sessionId: string;

  state: 'STARTED' | 'VIEWED';

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  externalId?: string;

  externalPlayContext?: 'EMAIL' | 'EXTERNAL_PAGE';

  iframeUrl?: string;

  mediaBridgeId?: number;

  mediaName?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageUrl?: string;
}

export interface MediaPlayedPercentageEventRequest {
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';

  occurredTimestamp: number;

  playedPercent: number;

  sessionId: string;

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  externalId?: string;

  externalPlayContext?: 'EMAIL' | 'EXTERNAL_PAGE';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

  propertyName?: string;

  value?: number;
}

export interface NumberTargetPropertyVariable {
  operator: 'NUMBER_TARGET_PROPERTY_VARIABLE';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

export interface OEmbedDomainsCollectionResponse {
  results: Array<IntegratorOEmbedDomainModel>;

  totalCount?: number;
}

export interface ObjectDefinitionResponse {
  objectTypeId: string;

  objectTypeName: string;

  properties: Array<PropertyDefinition>;

  propertyGroups: Array<GroupView>;

  schema?: InboundDBObjectType;
}

export interface ObjectTypeIDProto {
  innerId: number;

  metaTypeId: number;
}

export interface Option1 {
  hidden: boolean;

  label: string;

  value: string;

  description?: string;

  displayOrder?: number;
}

export interface OptionDecorations {
  color:
    | 'BLACK'
    | 'BLUE'
    | 'BLUE_LIGHT'
    | 'GRAY'
    | 'GREEN'
    | 'GREEN_LIGHT'
    | 'ORANGE'
    | 'ORANGE_LIGHT'
    | 'PINK'
    | 'PINK_LIGHT'
    | 'PURPLE'
    | 'PURPLE_LIGHT'
    | 'RED'
    | 'RED_LIGHT'
    | 'TEAL'
    | 'TEAL_LIGHT'
    | 'YELLOW'
    | 'YELLOW_LIGHT';
}

export interface OptionDecoratorsExtensionData {
  optionDecorators: { [key: string]: OptionDecorations };

  optionDecoratorStyle: 'LABEL_ONLY' | 'LABEL_WITH_BADGE' | 'LABEL_WITH_COLOR';
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
  dataSensitivity: 'high' | 'none' | 'standard';

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
  displayMode: 'all_unique_versions' | 'current_value';

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
  numberDisplayHint: 'currency' | 'duration' | 'formatted' | 'percentage' | 'probability' | 'unformatted';

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
  optionSortStrategy: 'ALPHABETICAL' | 'DISPLAY_ORDER';

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
    | 'ABANDONED_CART'
    | 'ACCEPTANCE_TEST'
    | 'AD'
    | 'AD_ACCOUNT'
    | 'AD_CAMPAIGN'
    | 'AD_GROUP'
    | 'AI_FORECAST'
    | 'ALL_PAGES'
    | 'APPROVAL'
    | 'APPROVAL_STEP'
    | 'ATTRIBUTION'
    | 'AUDIENCE'
    | 'AUTOMATION_JOURNEY'
    | 'AUTOMATION_PLATFORM_FLOW'
    | 'AUTOMATION_PLATFORM_FLOW_ACTION'
    | 'BET_ALERT'
    | 'BET_DELIVERABLE_SERVICE'
    | 'BLOG_LISTING_PAGE'
    | 'BLOG_POST'
    | 'CALL'
    | 'CAMPAIGN'
    | 'CAMPAIGN_BUDGET_ITEM'
    | 'CAMPAIGN_SPEND_ITEM'
    | 'CAMPAIGN_STEP'
    | 'CAMPAIGN_TEMPLATE'
    | 'CAMPAIGN_TEMPLATE_STEP'
    | 'CART'
    | 'CASE_STUDY'
    | 'CHATFLOW'
    | 'CLIP'
    | 'CMS_URL'
    | 'COMBO_EVENT_CONFIGURATION'
    | 'COMMERCE_PAYMENT'
    | 'COMMUNICATION'
    | 'COMPANY'
    | 'CONTACT'
    | 'CONTACT_CREATE_ATTRIBUTION'
    | 'CONTENT'
    | 'CONTENT_AUDIT'
    | 'CONTENT_AUDIT_PAGE'
    | 'CONVERSATION'
    | 'CONVERSATION_INBOX'
    | 'CONVERSATION_SESSION'
    | 'CRM_OBJECTS_DUMMY_TYPE'
    | 'CRM_PIPELINES_DUMMY_TYPE'
    | 'CTA'
    | 'CTA_VARIANT'
    | 'DATA_PRIVACY_CONSENT'
    | 'DATA_SYNC_STATE'
    | 'DEAL'
    | 'DEAL_CREATE_ATTRIBUTION'
    | 'DEAL_REGISTRATION'
    | 'DEAL_SPLIT'
    | 'DISCOUNT'
    | 'DISCOUNT_CODE'
    | 'DISCOUNT_TEMPLATE'
    | 'EMAIL'
    | 'ENGAGEMENT'
    | 'EXPORT'
    | 'EXTERNAL_WEB_URL'
    | 'FEE'
    | 'FEEDBACK_SUBMISSION'
    | 'FEEDBACK_SURVEY'
    | 'FILE_MANAGER_FILE'
    | 'FILE_MANAGER_FOLDER'
    | 'FOLDER'
    | 'FORECAST'
    | 'FORM'
    | 'FORM_SUBMISSION_INBOUNDDB'
    | 'GOAL_TARGET'
    | 'GOAL_TARGET_GROUP'
    | 'GOAL_TEMPLATE'
    | 'GSC_PROPERTY'
    | 'HUB'
    | 'IMPORT'
    | 'INVOICE'
    | 'KEYWORD'
    | 'KNOWLEDGE_ARTICLE'
    | 'LANDING_PAGE'
    | 'LEAD'
    | 'LINE_ITEM'
    | 'MARKETING_CALENDAR'
    | 'MARKETING_CAMPAIGN_UTM'
    | 'MARKETING_EMAIL'
    | 'MARKETING_EVENT'
    | 'MARKETING_EVENT_ATTENDANCE'
    | 'MARKETING_SMS'
    | 'MEDIA_BRIDGE'
    | 'MEETING_EVENT'
    | 'MIC'
    | 'NOTE'
    | 'OBJECT_LIST'
    | 'ORDER'
    | 'OWNER'
    | 'PARTNER_ACCOUNT'
    | 'PARTNER_CLIENT'
    | 'PARTNER_CLIENT_REVENUE'
    | 'PARTNER_SERVICE'
    | 'PAYMENT_LINK'
    | 'PAYMENT_SCHEDULE'
    | 'PAYMENT_SCHEDULE_INSTALLMENT'
    | 'PERMISSIONS_TESTING'
    | 'PLAYBOOK'
    | 'PLAYBOOK_QUESTION'
    | 'PLAYBOOK_SUBMISSION'
    | 'PLAYBOOK_SUBMISSION_ANSWER'
    | 'PLAYLIST'
    | 'PLAYLIST_FOLDER'
    | 'PODCAST_EPISODE'
    | 'PORTAL'
    | 'PORTAL_OBJECT_SYNC_MESSAGE'
    | 'POSTAL_MAIL'
    | 'PRIVACY_SCANNER_COOKIE'
    | 'PRODUCT'
    | 'PRODUCT_OR_FOLDER'
    | 'PROPERTY_INFO'
    | 'PROSPECTING_AGENT_CONTACT_ASSIGNMENT'
    | 'PUBLISHING_TASK'
    | 'QUARANTINED_SUBMISSION'
    | 'QUOTA'
    | 'QUOTE'
    | 'QUOTE_FIELD'
    | 'QUOTE_MODULE'
    | 'QUOTE_MODULE_FIELD'
    | 'QUOTE_TEMPLATE'
    | 'RESTORABLE_CRM_OBJECT'
    | 'ROSTER'
    | 'ROSTER_MEMBER'
    | 'SALES_DOCUMENT'
    | 'SALES_TASK'
    | 'SALES_WORKLOAD'
    | 'SALESFORCE_SYNC_ERROR'
    | 'SCHEDULING_PAGE'
    | 'SCHEMAS_BACKEND_TEST'
    | 'SCORE_CONFIGURATION'
    | 'SEQUENCE'
    | 'SEQUENCE_ENROLLMENT'
    | 'SEQUENCE_STEP'
    | 'SEQUENCE_STEP_ENROLLMENT'
    | 'SERVICE'
    | 'SITE_PAGE'
    | 'SNIPPET'
    | 'SOCIAL_BROADCAST'
    | 'SOCIAL_CHANNEL'
    | 'SOCIAL_POST'
    | 'SOCIAL_PROFILE'
    | 'SOX_PROTECTED_DUMMY_TYPE'
    | 'SOX_PROTECTED_TEST_TYPE'
    | 'SUBMISSION_TAG'
    | 'SUBSCRIPTION'
    | 'TASK'
    | 'TASK_TEMPLATE'
    | 'TAX'
    | 'TEMPLATE'
    | 'TICKET'
    | 'UNKNOWN'
    | 'UNSUBSCRIBE'
    | 'USER'
    | 'VIEW'
    | 'VIEW_BLOCK'
    | 'WEB_INTERACTIVE';

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
    | 'domain_name'
    | 'email'
    | 'ip_address'
    | 'multi_line'
    | 'phone_number'
    | 'physical_address'
    | 'postal_code'
    | 'unformatted_single_line';

  /**
   * The data type of the property, such as string or number.
   */
  type:
    | 'bool'
    | 'currency_number'
    | 'date'
    | 'datetime'
    | 'enumeration'
    | 'json'
    | 'number'
    | 'object_coordinates'
    | 'phone_number'
    | 'string';

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

  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

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
   * A HubSpot property
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
  type: 'GLOBAL' | 'HAVEN_BRANCH' | 'OBJECT_TYPE' | 'PORTAL';

  name?: string;
}

export interface RequiredPropertiesExtensionData {
  isRequiredProperty: boolean;
}

export interface RollupExpression {
  associationTypes: Array<Shared.AssociationSpec>;

  rollupOperator:
    | 'AVERAGE'
    | 'COUNT'
    | 'EARLIEST_VALUE'
    | 'LATEST_VALUE'
    | 'MAX'
    | 'MAX_BY'
    | 'MIN'
    | 'MIN_BY'
    | 'REFERENCED_ID_SET'
    | 'REFERENCED_STRING_SET'
    | 'REFERENCED_STRING_SET_INTERSECTION'
    | 'SUM'
    | 'SYNC_MAX_BY'
    | 'SYNC_MIN_BY'
    | 'SYNC_VALUE'
    | 'UNKNOWN_ROLLUP_OPERATOR';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
  accessLevel: 'ALL' | 'OWNED' | 'TEAM_OWNED' | 'UNASSIGNED';

  requestAction: 'COMMUNICATE' | 'DELETE' | 'EDIT' | 'EDIT_ASSOCIATION' | 'MERGE' | 'VIEW';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

  propertyName?: string;

  value?: string;
}

export interface StringTargetPropertyVariable {
  operator: 'STRING_TARGET_PROPERTY_VARIABLE';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

export interface TimeBetweenSkipWeekends {
  operator: 'TIME_BETWEEN_SKIP_WEEKENDS';

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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

  propertyName?: string;

  value?: string;
}

export interface TimestampOfTargetPropertyVariable {
  operator: 'TIMESTAMP_OF_TARGET_PROPERTY_VARIABLE';

  propertyName?: string;

  value?: string;
}

export interface UpdateAudioObjectRequest {
  mediaType: 'AUDIO';

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;

  title?: string;
}

export interface UpdateDocumentObjectRequest {
  mediaType: 'DOCUMENT';

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;

  title?: string;
}

export interface UpdateImageObjectRequest {
  mediaType: 'IMAGE';

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;

  title?: string;
}

export type UpdateMBObjectRequest =
  | UpdateVideoObjectRequest
  | UpdateOtherObjectRequest
  | UpdateAudioObjectRequest
  | UpdateImageObjectRequest
  | UpdateDocumentObjectRequest;

export interface UpdateOtherObjectRequest {
  mediaType: 'OTHER';

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;

  title?: string;
}

export interface UpdateVideoObjectRequest {
  mediaType: 'VIDEO';

  bearerToken?: string;

  detailsPageLink?: string;

  duration?: number;

  externalId?: string;

  fileUrl?: string;

  oembedUrl?: string;

  posterUrl?: string;

  thumbnailUrl?: string;

  title?: string;

  transcriptUrl?: string;
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

export interface VideoObject {
  id: number;

  deeplinkUrl: string;

  fileId: number;
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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
    | TimeBetweenSkipWeekends
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
    | FormatPhoneNumber
    | FormatSearchablePhoneNumber
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

export type MediaBridgeCreateParams =
  | MediaBridgeCreateParams.CreateVideoObjectRequest
  | MediaBridgeCreateParams.CreateOtherObjectRequest
  | MediaBridgeCreateParams.CreateAudioObjectRequest
  | MediaBridgeCreateParams.CreateImageObjectRequest
  | MediaBridgeCreateParams.CreateDocumentObjectRequest;

export declare namespace MediaBridgeCreateParams {
  export interface CreateVideoObjectRequest {}

  export interface CreateOtherObjectRequest {}

  export interface CreateAudioObjectRequest {}

  export interface CreateImageObjectRequest {}

  export interface CreateDocumentObjectRequest {}
}

export type MediaBridgeUpdateParams =
  | MediaBridgeUpdateParams.UpdateVideoObjectRequest
  | MediaBridgeUpdateParams.UpdateOtherObjectRequest
  | MediaBridgeUpdateParams.UpdateAudioObjectRequest
  | MediaBridgeUpdateParams.UpdateImageObjectRequest
  | MediaBridgeUpdateParams.UpdateDocumentObjectRequest;

export declare namespace MediaBridgeUpdateParams {
  export interface UpdateVideoObjectRequest {}

  export interface UpdateOtherObjectRequest {}

  export interface UpdateAudioObjectRequest {}

  export interface UpdateImageObjectRequest {}

  export interface UpdateDocumentObjectRequest {}
}

export interface MediaBridgeListParams extends PageParams {}

export interface MediaBridgeDeleteParams {
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';
}

export interface MediaBridgeCreateAssociationParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Body param
   */
  fromObjectTypeId: string;

  /**
   * Body param
   */
  toObjectTypeId: string;

  /**
   * Body param
   */
  name?: string;
}

export interface MediaBridgeCreateAttentionSpanEventParams {
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';

  occurredTimestamp: number;

  rawDataMap: { [key: string]: number };

  sessionId: string;

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  derivedValues?: AttentionSpanCalculatedValues;

  externalId?: string;

  externalPlayContext?: 'EMAIL' | 'EXTERNAL_PAGE';

  mediaBridgeId?: number;

  mediaName?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageUrl?: string;

  rawDataString?: string;
}

export interface MediaBridgeCreateMediaPlayedEventParams {
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';

  occurredTimestamp: number;

  sessionId: string;

  state: 'STARTED' | 'VIEWED';

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  externalId?: string;

  externalPlayContext?: 'EMAIL' | 'EXTERNAL_PAGE';

  iframeUrl?: string;

  mediaBridgeId?: number;

  mediaName?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageUrl?: string;
}

export interface MediaBridgeCreateMediaPlayedPercentEventParams {
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';

  occurredTimestamp: number;

  playedPercent: number;

  sessionId: string;

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  externalId?: string;

  externalPlayContext?: 'EMAIL' | 'EXTERNAL_PAGE';

  mediaBridgeId?: number;

  mediaName?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageUrl?: string;
}

export interface MediaBridgeCreateObjectTypeParams {
  mediaTypes: Array<'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE'>;
}

export interface MediaBridgeCreateOembedDomainParams {
  endpoints: Endpoints;

  portalId?: number;
}

export interface MediaBridgeCreatePropertyParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Body param
   */
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

  /**
   * Body param
   */
  groupName: string;

  /**
   * Body param
   */
  label: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  type: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';

  /**
   * Body param
   */
  calculationFormula?: string;

  /**
   * Body param
   */
  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive';

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  displayOrder?: number;

  /**
   * Body param
   */
  externalOptions?: boolean;

  /**
   * Body param
   */
  formField?: boolean;

  /**
   * Body param
   */
  hasUniqueValue?: boolean;

  /**
   * Body param
   */
  hidden?: boolean;

  /**
   * Body param
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Body param
   */
  referencedObjectType?: string;
}

export interface MediaBridgeCreatePropertyGroupParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Body param
   */
  label: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  displayOrder?: number;
}

export interface MediaBridgeDeleteAssociationParams {
  appId: string;

  objectType: string;
}

export interface MediaBridgeDeleteOembedDomainParams {
  id?: number;

  domainPortalId?: number;
}

export interface MediaBridgeDeletePropertyParams {
  appId: string;

  objectType: string;
}

export interface MediaBridgeDeletePropertyGroupParams {
  appId: string;

  objectType: string;
}

export interface MediaBridgeGetParams {
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';
}

export interface MediaBridgeGetOembedDomainParams {
  appId: string;
}

export interface MediaBridgeGetPropertyParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Path param
   */
  objectType: string;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Query param
   */
  properties?: string;
}

export interface MediaBridgeGetPropertyGroupParams {
  appId: string;

  objectType: string;
}

export interface MediaBridgeGetSchemaParams {
  appId: string;
}

export interface MediaBridgeListObjectTypesByMediaTypeParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Query param
   */
  includeFullDefinition?: boolean;
}

export interface MediaBridgeListOembedDomainsParams {
  domainPortalId?: number;
}

export interface MediaBridgeListPropertiesParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Query param
   */
  properties?: string;
}

export interface MediaBridgeListPropertyGroupsParams {
  appId: string;
}

export interface MediaBridgeListSchemasParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface MediaBridgeRegisterAppNameParams {
  updatedAt: number;

  allowImportOnDisconnect?: boolean;

  moduleName?: string;

  name?: string;
}

export interface MediaBridgeUpdateEventVisibilitySettingsParams {
  eventType: 'ALL' | 'ATTENTION_SPAN' | 'MEDIA_PLAYS' | 'MEDIA_PLAYS_PERCENT';

  updatedAt: number;

  showInReporting?: boolean;

  showInTimeline?: boolean;

  showInWorkflows?: boolean;
}

export interface MediaBridgeUpdateOembedDomainParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Body param
   */
  endpoints: Endpoints;

  /**
   * Body param
   */
  portalId?: number;
}

export interface MediaBridgeUpdatePropertyParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Path param
   */
  objectType: string;

  /**
   * Body param
   */
  calculationFormula?: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  displayOrder?: number;

  /**
   * Body param
   */
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

  /**
   * Body param
   */
  formField?: boolean;

  /**
   * Body param
   */
  groupName?: string;

  /**
   * Body param
   */
  hasUniqueValue?: boolean;

  /**
   * Body param
   */
  hidden?: boolean;

  /**
   * Body param
   */
  label?: string;

  /**
   * Body param
   */
  options?: Array<Shared.OptionInput>;

  /**
   * Body param
   */
  type?: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string';
}

export interface MediaBridgeUpdatePropertyGroupParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Path param
   */
  objectType: string;

  /**
   * Body param
   */
  displayOrder?: number;

  /**
   * Body param
   */
  label?: string;
}

export interface MediaBridgeUpdateSchemaParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Body param
   */
  clearDescription: boolean;

  /**
   * Body param
   */
  allowsSensitiveProperties?: boolean;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  labels?: Shared.ObjectTypeDefinitionLabels;

  /**
   * Body param
   */
  primaryDisplayProperty?: string;

  /**
   * Body param
   */
  requiredProperties?: Array<string>;

  /**
   * Body param
   */
  restorable?: boolean;

  /**
   * Body param
   */
  searchableProperties?: Array<string>;

  /**
   * Body param
   */
  secondaryDisplayProperties?: Array<string>;
}

export interface MediaBridgeUpdateSettingsParams {
  updatedAt: number;

  allowImportOnDisconnect?: boolean;

  moduleName?: string;

  name?: string;
}

MediaBridge.Batch = Batch;

export declare namespace MediaBridge {
  export {
    type AbsoluteValue as AbsoluteValue,
    type AddNumbers as AddNumbers,
    type AddTime as AddTime,
    type And as And,
    type AttentionSpanCalculatedValues as AttentionSpanCalculatedValues,
    type AttentionSpanEventRequest as AttentionSpanEventRequest,
    type BeginsWith as BeginsWith,
    type BooleanPropertyVariable as BooleanPropertyVariable,
    type BooleanTargetPropertyVariable as BooleanTargetPropertyVariable,
    type BulkIntegratorObjectCreationResponse as BulkIntegratorObjectCreationResponse,
    type CaseChangeTestExtensionData as CaseChangeTestExtensionData,
    type CollectionResponseMediaBridgeObjectForwardPaging as CollectionResponseMediaBridgeObjectForwardPaging,
    type ConcatStrings as ConcatStrings,
    type ConstantBoolean as ConstantBoolean,
    type ConstantNumber as ConstantNumber,
    type ConstantString as ConstantString,
    type Contains as Contains,
    type CreateAudioObjectRequest as CreateAudioObjectRequest,
    type CreateDocumentObjectRequest as CreateDocumentObjectRequest,
    type CreateImageObjectRequest as CreateImageObjectRequest,
    type CreateMBObjectRequest as CreateMBObjectRequest,
    type CreateOtherObjectRequest as CreateOtherObjectRequest,
    type CreateVideoObjectRequest as CreateVideoObjectRequest,
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
    type FormatPhoneNumber as FormatPhoneNumber,
    type FormatSearchablePhoneNumber as FormatSearchablePhoneNumber,
    type Group as Group,
    type GroupView as GroupView,
    type HasEmailReply as HasEmailReply,
    type HasPlainTextEmailReply as HasPlainTextEmailReply,
    type IfBoolean as IfBoolean,
    type IfNumber as IfNumber,
    type IfString as IfString,
    type InboundDBObjectType as InboundDBObjectType,
    type IntegratorOEmbedDomainModel as IntegratorOEmbedDomainModel,
    type IntegratorOEmbedDomainRequest as IntegratorOEmbedDomainRequest,
    type IntegratorObjectCreationRequest as IntegratorObjectCreationRequest,
    type IntegratorObjectCreationResponse as IntegratorObjectCreationResponse,
    type IsEngagementType as IsEngagementType,
    type IsPipelineStageClosed as IsPipelineStageClosed,
    type IsPresent as IsPresent,
    type LessThan as LessThan,
    type LessThanOrEqual as LessThanOrEqual,
    type LowerCase as LowerCase,
    type MaxNumbers as MaxNumbers,
    type MediaBridgeObject as MediaBridgeObject,
    type MediaBridgePropertyUpdate as MediaBridgePropertyUpdate,
    type MediaBridgeProviderPartial as MediaBridgeProviderPartial,
    type MediaBridgeProviderRegistrationResponse as MediaBridgeProviderRegistrationResponse,
    type MediaPlayedEventRequest as MediaPlayedEventRequest,
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
    type OEmbedDomainsCollectionResponse as OEmbedDomainsCollectionResponse,
    type ObjectDefinitionResponse as ObjectDefinitionResponse,
    type ObjectTypeIDProto as ObjectTypeIDProto,
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
    type TimeBetweenSkipWeekends as TimeBetweenSkipWeekends,
    type TimestampOfPropertyVariable as TimestampOfPropertyVariable,
    type TimestampOfTargetPropertyVariable as TimestampOfTargetPropertyVariable,
    type UpdateAudioObjectRequest as UpdateAudioObjectRequest,
    type UpdateDocumentObjectRequest as UpdateDocumentObjectRequest,
    type UpdateImageObjectRequest as UpdateImageObjectRequest,
    type UpdateMBObjectRequest as UpdateMBObjectRequest,
    type UpdateOtherObjectRequest as UpdateOtherObjectRequest,
    type UpdateVideoObjectRequest as UpdateVideoObjectRequest,
    type UpperCase as UpperCase,
    type VideoObject as VideoObject,
    type Xor as Xor,
    type Year as Year,
    type MediaBridgeObjectsPage as MediaBridgeObjectsPage,
    type MediaBridgeCreateParams as MediaBridgeCreateParams,
    type MediaBridgeUpdateParams as MediaBridgeUpdateParams,
    type MediaBridgeListParams as MediaBridgeListParams,
    type MediaBridgeDeleteParams as MediaBridgeDeleteParams,
    type MediaBridgeCreateAssociationParams as MediaBridgeCreateAssociationParams,
    type MediaBridgeCreateAttentionSpanEventParams as MediaBridgeCreateAttentionSpanEventParams,
    type MediaBridgeCreateMediaPlayedEventParams as MediaBridgeCreateMediaPlayedEventParams,
    type MediaBridgeCreateMediaPlayedPercentEventParams as MediaBridgeCreateMediaPlayedPercentEventParams,
    type MediaBridgeCreateObjectTypeParams as MediaBridgeCreateObjectTypeParams,
    type MediaBridgeCreateOembedDomainParams as MediaBridgeCreateOembedDomainParams,
    type MediaBridgeCreatePropertyParams as MediaBridgeCreatePropertyParams,
    type MediaBridgeCreatePropertyGroupParams as MediaBridgeCreatePropertyGroupParams,
    type MediaBridgeDeleteAssociationParams as MediaBridgeDeleteAssociationParams,
    type MediaBridgeDeleteOembedDomainParams as MediaBridgeDeleteOembedDomainParams,
    type MediaBridgeDeletePropertyParams as MediaBridgeDeletePropertyParams,
    type MediaBridgeDeletePropertyGroupParams as MediaBridgeDeletePropertyGroupParams,
    type MediaBridgeGetParams as MediaBridgeGetParams,
    type MediaBridgeGetOembedDomainParams as MediaBridgeGetOembedDomainParams,
    type MediaBridgeGetPropertyParams as MediaBridgeGetPropertyParams,
    type MediaBridgeGetPropertyGroupParams as MediaBridgeGetPropertyGroupParams,
    type MediaBridgeGetSchemaParams as MediaBridgeGetSchemaParams,
    type MediaBridgeListObjectTypesByMediaTypeParams as MediaBridgeListObjectTypesByMediaTypeParams,
    type MediaBridgeListOembedDomainsParams as MediaBridgeListOembedDomainsParams,
    type MediaBridgeListPropertiesParams as MediaBridgeListPropertiesParams,
    type MediaBridgeListPropertyGroupsParams as MediaBridgeListPropertyGroupsParams,
    type MediaBridgeListSchemasParams as MediaBridgeListSchemasParams,
    type MediaBridgeRegisterAppNameParams as MediaBridgeRegisterAppNameParams,
    type MediaBridgeUpdateEventVisibilitySettingsParams as MediaBridgeUpdateEventVisibilitySettingsParams,
    type MediaBridgeUpdateOembedDomainParams as MediaBridgeUpdateOembedDomainParams,
    type MediaBridgeUpdatePropertyParams as MediaBridgeUpdatePropertyParams,
    type MediaBridgeUpdatePropertyGroupParams as MediaBridgeUpdatePropertyGroupParams,
    type MediaBridgeUpdateSchemaParams as MediaBridgeUpdateSchemaParams,
    type MediaBridgeUpdateSettingsParams as MediaBridgeUpdateSettingsParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };
}
