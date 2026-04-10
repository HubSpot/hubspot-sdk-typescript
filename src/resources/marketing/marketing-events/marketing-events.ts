// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AttendanceAPI from './attendance';
import {
  Attendance,
  AttendanceCreateByEventIDAndContactIDParams,
  AttendanceCreateByEventIDAndEmailParams,
  AttendanceCreateByExternalEventIDAndContactIDParams,
  AttendanceCreateByExternalEventIDAndEmailParams,
  BaseAttendance,
} from './attendance';
import * as EventsAPI from './events';
import {
  BaseEvents,
  EventCancelByExternalEventIDParams,
  EventCompleteByExternalEventIDParams,
  Events,
} from './events';
import * as ListAssociationsAPI from './list-associations';
import {
  BaseListAssociations,
  ListAssociationAssociateByExternalAccountParams,
  ListAssociationAssociateParams,
  ListAssociationDeleteByExternalAccountParams,
  ListAssociationDeleteParams,
  ListAssociationListByExternalAccountParams,
  ListAssociations,
} from './list-associations';
import * as ParticipationsAPI from './participations';
import {
  BaseParticipations,
  ParticipationGetByExternalAccountAndEventIDParams,
  ParticipationListBreakdownByContactParams,
  ParticipationListBreakdownByExternalAccountAndEventIDParams,
  ParticipationListBreakdownByIDParams,
  Participations,
} from './participations';
import * as SettingsAPI from './settings';
import { BaseSettings, SettingCreateOrUpdateParams, Settings } from './settings';
import * as SubscriberStateAPI from './subscriber-state';
import {
  BaseSubscriberState,
  SubscriberState,
  SubscriberStateRecordByEmailParams,
  SubscriberStateRecordByIDParams,
} from './subscriber-state';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseMarketingEvents extends APIResource {
  static override readonly _key: readonly ['marketing', 'marketingEvents'] = Object.freeze([
    'marketing',
    'marketingEvents',
  ] as const);

  /**
   * Creates a new marketing event in HubSpot
   */
  create(
    body: MarketingEventCreateParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventDefaultResponse> {
    return this._client.post('/marketing/marketing-events/2026-03/events', { body, ...options });
  }

  /**
   * Updates the details of an existing Marketing Event identified by its objectId,
   * if it exists.
   */
  update(
    objectID: string,
    body: MarketingEventUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventPublicDefaultResponseV2> {
    return this._client.patch(path`/marketing/marketing-events/2026-03/${objectID}`, { body, ...options });
  }

  list(
    query: MarketingEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MarketingEventPublicReadResponseV2sPage, MarketingEventPublicReadResponseV2> {
    return this._client.getAPIList(
      '/marketing/marketing-events/2026-03',
      Page<MarketingEventPublicReadResponseV2>,
      { query, ...options },
    );
  }

  /**
   * Deletes the existing Marketing Event with the specified objectId, if it exists.
   */
  delete(objectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/marketing/marketing-events/2026-03/${objectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes multiple Marketing Events from the portal based on their objectId, if
   * they exist.
   *
   * Responses: 204: Returned if all specified Marketing Events were successfully
   * deleted. 207: Returned if some objectIds did not correspond to any existing
   * Marketing Events.
   */
  deleteBatch(body: MarketingEventDeleteBatchParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/marketing/marketing-events/2026-03/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Deletes multiple Marketing Events based on externalAccountId, externalEventId,
   * and appId.
   *
   * Only Marketing Events created by the same apps will be deleted; events from
   * other apps cannot be removed by this endpoint.
   */
  deleteBatchByExternalEventID(
    body: MarketingEventDeleteBatchByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post('/marketing/marketing-events/2026-03/events/delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Deletes the existing Marketing Event with the specified externalAccountId,
   * externalEventId, if it exists.
   *
   * Only Marketing Events created by the same app can be deleted.
   */
  deleteByExternalEventID(
    externalEventID: string,
    params: MarketingEventDeleteByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { externalAccountId } = params;
    return this._client.delete(path`/marketing/marketing-events/2026-03/events/${externalEventID}`, {
      query: { externalAccountId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the details of a Marketing Event with the specified objectId, if it
   * exists.
   */
  get(objectID: string, options?: RequestOptions): APIPromise<MarketingEventPublicReadResponseV2> {
    return this._client.get(path`/marketing/marketing-events/2026-03/${objectID}`, options);
  }

  /**
   * Returns the details of a Marketing Event with the specified externalAccountId,
   * externalEventId, if it exists.
   *
   * Only Marketing Events created by the same app making the request can be
   * retrieved.
   */
  getByExternalEventID(
    externalEventID: string,
    query: MarketingEventGetByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventPublicReadResponse> {
    return this._client.get(path`/marketing/marketing-events/2026-03/events/${externalEventID}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves Marketing Events where the externalEventId matches the value provided
   * in the request, limited to events created by the app making the request.
   *
   * Marketing Events created by other apps will not be included in the results.
   */
  searchByExternalEventID(
    query: MarketingEventSearchByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<CollectionResponseSearchPublicResponseWrapperNoPaging> {
    return this._client.get('/marketing/marketing-events/2026-03/events/search', { query, ...options });
  }

  /**
   * This endpoint searches the portal for all Marketing Events whose externalEventId
   * matches the value provided in the request.
   *
   * It retrieves the objectId and additional event details for each matching
   * Marketing Event.
   *
   * Since multiple Marketing Events can have the same externalEventId, the endpoint
   * returns all matching results.
   *
   * Note: Marketing Events become searchable by externalEventId a few minutes after
   * creation.
   */
  searchIdentifiersByExternalEventID(
    externalEventID: string,
    options?: RequestOptions,
  ): APIPromise<CollectionResponseWithTotalMarketingEventIdentifiersResponse> {
    return this._client.get(
      path`/marketing/marketing-events/2026-03/${externalEventID}/identifiers`,
      options,
    );
  }

  /**
   * Updates multiple Marketing Events on the portal based on their objectId, if they
   * exist.
   */
  updateBatch(
    body: MarketingEventUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseMarketingEventPublicDefaultResponseV2> {
    return this._client.post('/marketing/marketing-events/2026-03/batch/update', { body, ...options });
  }

  /**
   * Updates the details of an existing Marketing Event identified by its
   * externalAccountId, externalEventId if it exists.
   *
   * Only Marketing Events created by the same app can be updated.
   */
  updateByExternalEventID(
    externalEventID: string,
    params: MarketingEventUpdateByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventPublicDefaultResponse> {
    const { externalAccountId, ...body } = params;
    return this._client.patch(path`/marketing/marketing-events/2026-03/events/${externalEventID}`, {
      query: { externalAccountId },
      body,
      ...options,
    });
  }

  /**
   * Upserts multiple Marketing Events. If a Marketing Event with the specified ID
   * already exists, it will be updated; otherwise, a new event will be created.
   *
   * Only Marketing Events originally created by the same app can be updated.
   */
  upsertBatch(
    body: MarketingEventUpsertBatchParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseMarketingEventPublicDefaultResponse> {
    return this._client.post('/marketing/marketing-events/2026-03/events/upsert', { body, ...options });
  }

  /**
   * Upserts a marketing event If there is an existing marketing event with the
   * specified ID, it will be updated; otherwise a new event will be created.
   */
  upsertByExternalEventID(
    externalEventID: string,
    body: MarketingEventUpsertByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventPublicDefaultResponse> {
    return this._client.put(path`/marketing/marketing-events/2026-03/events/${externalEventID}`, {
      body,
      ...options,
    });
  }
}
export class MarketingEvents extends BaseMarketingEvents {
  attendance: AttendanceAPI.Attendance = new AttendanceAPI.Attendance(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  listAssociations: ListAssociationsAPI.ListAssociations = new ListAssociationsAPI.ListAssociations(
    this._client,
  );
  participations: ParticipationsAPI.Participations = new ParticipationsAPI.Participations(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  subscriberState: SubscriberStateAPI.SubscriberState = new SubscriberStateAPI.SubscriberState(this._client);
}

export type MarketingEventPublicReadResponseV2sPage = Page<MarketingEventPublicReadResponseV2>;

export type ParticipationBreakdownsPage = Page<ParticipationBreakdown>;

export interface AppInfo {
  /**
   * The ID of the application
   */
  id: string;

  /**
   * The name of the application
   */
  name: string;
}

export interface AttendanceCounters {
  /**
   * Number of attended contact records of a marketing event
   */
  attended: number;

  /**
   * Number of cancelled contact records of a marketing event
   */
  cancelled: number;

  /**
   * Number of no-show contact records of a marketing event
   */
  noShows: number;

  /**
   * Number of registered contact records of a marketing event
   */
  registered: number;
}

export interface BatchInputMarketingEventCreateRequestParams {
  inputs: Array<MarketingEventCreateRequestParams>;
}

export interface BatchInputMarketingEventEmailSubscriber {
  /**
   * List of marketing event details to create or update
   */
  inputs: Array<MarketingEventEmailSubscriber>;
}

export interface BatchInputMarketingEventExternalUniqueIdentifier {
  inputs: Array<MarketingEventExternalUniqueIdentifier>;
}

export interface BatchInputMarketingEventPublicObjectIDDeleteRequest {
  inputs: Array<MarketingEventPublicObjectIDDeleteRequest>;
}

export interface BatchInputMarketingEventPublicUpdateRequestFullV2 {
  inputs: Array<MarketingEventPublicUpdateRequestFullV2>;
}

export interface BatchInputMarketingEventSubscriber {
  /**
   * List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<MarketingEventSubscriber>;
}

export interface BatchResponseMarketingEventPublicDefaultResponse {
  /**
   * Timestamp of when the request was completed.
   */
  completedAt: string;

  results: Array<MarketingEventPublicDefaultResponse>;

  /**
   * Timestamp of when the request started processing.
   */
  startedAt: string;

  /**
   * Status of the response.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * Result of the request.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the request.
   */
  numErrors?: number;

  /**
   * Timestamp of when the request was sent.
   */
  requestedAt?: string;
}

export interface BatchResponseMarketingEventPublicDefaultResponseV2 {
  /**
   * Timestamp of when the request was processed.
   */
  completedAt: string;

  results: Array<MarketingEventPublicDefaultResponseV2>;

  /**
   * Timestamp of when the request started processing.
   */
  startedAt: string;

  /**
   * The status of the response.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * Result object of the request.
   */
  links?: { [key: string]: string };

  /**
   * Timestamp of when the request was sent.
   */
  requestedAt?: string;
}

export interface BatchResponseMarketingEventPublicDefaultResponseV2WithErrors {
  /**
   * Timestamp that represents when the request finished processing
   */
  completedAt: string;

  results: Array<MarketingEventPublicDefaultResponseV2>;

  /**
   * Timestamp that represents when the request started processing
   */
  startedAt: string;

  /**
   * The status of the request processing
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * Result of the request
   */
  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the processing
   */
  numErrors?: number;

  /**
   * Timestamp that represents when the request was made
   */
  requestedAt?: string;
}

export interface BatchResponseSubscriberEmailResponse {
  /**
   * Timestamp that represents when the request finished processing
   */
  completedAt: string;

  results: Array<SubscriberEmailResponse>;

  /**
   * Timestamp that represents when the request started processing
   */
  startedAt: string;

  /**
   * The status of the request processing
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * Result of the request
   */
  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the processing
   */
  numErrors?: number;

  /**
   * Timestamp that represents when the request was made
   */
  requestedAt?: string;
}

export interface BatchResponseSubscriberVidResponse {
  /**
   * Timestamp that represents when the request finished processing
   */
  completedAt: string;

  results: Array<SubscriberVidResponse>;

  /**
   * Timestamp that represents when the request started processing
   */
  startedAt: string;

  /**
   * The status of the request processing
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * Result of the request
   */
  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the processing
   */
  numErrors?: number;

  /**
   * Timestamp that represents when the request was made
   */
  requestedAt?: string;
}

export interface CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging {
  results: Array<MarketingEventPublicReadResponseV2>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseSearchPublicResponseWrapperNoPaging {
  results: Array<SearchPublicResponseWrapper>;
}

export interface CollectionResponseWithTotalMarketingEventIdentifiersResponse {
  results: Array<MarketingEventIdentifiersResponse>;

  total: number;

  paging?: Shared.Paging;
}

export interface CollectionResponseWithTotalParticipationBreakdown {
  results: Array<ParticipationBreakdown>;

  total: number;

  paging?: Shared.Paging;
}

export interface CollectionResponseWithTotalPublicList {
  results: Array<PublicList>;

  total: number;

  paging?: Shared.Paging;
}

export interface ContactAssociation {
  /**
   * The internal ID of the contact in HubSpot
   */
  contactId: string;

  /**
   * The email of the contact in HubSpot
   */
  email: string;

  /**
   * The first name of the contact in HubSpot
   */
  firstname?: string;

  /**
   * The last name of the contact in HubSpot
   */
  lastname?: string;
}

export interface CrmPropertyWrapper {
  /**
   * The name of the property in the CRM
   */
  name: string;

  /**
   * The value of the property in the CRM
   */
  value: string;
}

export interface EventDetailSettings {
  /**
   * The id of the application the settings are for
   */
  appId: number;

  /**
   * The url that will be used to fetch marketing event details by id
   */
  eventDetailsUrl: string;
}

export interface EventDetailSettingsURL {
  /**
   * The url that will be used to fetch marketing event details by id. Must contain a
   * `%s` character sequence that will be substituted with the event id. For example:
   * `https://my.event.app/events/%s`
   */
  eventDetailsUrl: string;
}

export interface MarketingEventAssociation {
  /**
   * The internal ID of the marketing event in HubSpot
   */
  marketingEventId: string;

  /**
   * The name of the marketing event in HubSpot
   */
  name: string;

  /**
   * The account ID that is associated with this marketing event in the external
   * event application
   */
  externalAccountId?: string;

  /**
   * The event ID that is associated with this marketing event in the external event
   * application
   */
  externalEventId?: string;
}

export interface MarketingEventCompleteRequestParams {
  /**
   * The end date and time of the marketing event in ISO 8601 format
   */
  endDateTime: string;

  /**
   * The start date and time of the marketing event in ISO 8601 format
   */
  startDateTime: string;
}

export interface MarketingEventCreateRequestParams {
  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties: Array<Shared.PropertyValue>;

  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;

  /**
   * The id of the marketing event in the external event application.
   */
  externalEventId: string;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled. Defaults to `false`
   */
  eventCancelled?: boolean;

  /**
   * Indicates if the marketing event has been completed. Defaults to `false`
   */
  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * Describes what type of event this is. For example: `WEBINAR`, `CONFERENCE`,
   * `WORKSHOP`
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventDefaultResponse {
  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties: Array<Shared.PropertyValue>;

  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled.
   */
  eventCancelled?: boolean;

  /**
   * Indicates if the marketing event has been completed.
   */
  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * The type of the marketing event.
   */
  eventType?: string;

  /**
   * The URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  /**
   * The ID of the marketing event CRM object
   */
  objectId?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventEmailSubscriber {
  /**
   * The key-value set that contains properties of the contact.
   */
  contactProperties: { [key: string]: string };

  /**
   * The email address of the contact in HubSpot to associate with the event.
   */
  email: string;

  /**
   * Timestamp in milliseconds at which the contact subscribed to the event.
   */
  interactionDateTime: number;

  /**
   * The key-value set that contains properties of the marketing event.
   */
  properties: { [key: string]: string };
}

export interface MarketingEventExternalUniqueIdentifier {
  /**
   * The id of the application that created the marketing event in HubSpot.
   */
  appId: number;

  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;

  /**
   * The id of the marketing event in the external event application.
   */
  externalEventId: string;
}

export interface MarketingEventIdentifiersResponse {
  /**
   * The ID that is associated with this marketing event in the external event
   * application
   */
  externalEventId: string;

  /**
   * The name of the marketing event
   */
  marketingEventName: string;

  /**
   * The internal ID of the marketing event in HubSpot CRM
   */
  objectId: string;

  appInfo?: AppInfo;

  /**
   * The accountId that is associated with this marketing event in the external event
   * application
   */
  externalAccountId?: string;
}

export interface MarketingEventPublicDefaultResponse {
  /**
   * The ID of the marketing event CRM object.
   */
  id: string;

  /**
   * The creation date and time of the marketing event.
   */
  createdAt: string;

  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties: Array<Shared.PropertyValue>;

  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  /**
   * The update date and time of the marketing event.
   */
  updatedAt: string;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled.
   */
  eventCancelled?: boolean;

  /**
   * Indicates if the marketing event has been completed.
   */
  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * The type of the marketing event.
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  /**
   * The ID of the marketing event CRM object.
   */
  objectId?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventPublicDefaultResponseV2 {
  /**
   * The creation date and time of the marketing event
   */
  createdAt: string;

  customProperties: Array<CrmPropertyWrapper>;

  /**
   * The name of the marketing event
   */
  eventName: string;

  /**
   * The internal ID of the marketing event in HubSpot
   */
  objectId: string;

  /**
   * The update date and time of the marketing event
   */
  updatedAt: string;

  appInfo?: AppInfo;

  /**
   * The end date and time of the marketing event
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled
   */
  eventCancelled?: boolean;

  /**
   * Indicates if the marketing event has been completed
   */
  eventCompleted?: boolean;

  /**
   * The description of the marketing event
   */
  eventDescription?: string;

  /**
   * The name of the organizer of the marketing event
   */
  eventOrganizer?: string;

  /**
   * The type of the marketing event
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be managed
   */
  eventUrl?: string;

  /**
   * The start date and time of the marketing event
   */
  startDateTime?: string;
}

export interface MarketingEventPublicObjectIDDeleteRequest {
  /**
   * The internal ID of the marketing event in HubSpot
   */
  objectId: string;
}

export interface MarketingEventPublicReadResponse {
  /**
   * The ID of the marketing event CRM object.
   */
  id: string;

  /**
   * The number of HubSpot contacts that attended this marketing event.
   */
  attendees: number;

  /**
   * The number of HubSpot contacts that registered for this marketing event, but
   * later cancelled their registration.
   */
  cancellations: number;

  /**
   * The creation date and time of the marketing event.
   */
  createdAt: string;

  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties: Array<Shared.PropertyValue>;

  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  /**
   * The id of the marketing event in the external event application.
   */
  externalEventId: string;

  /**
   * The number of HubSpot contacts that registered for this marketing event, but did
   * not attend. This field only had a value when the event is over.
   */
  noShows: number;

  /**
   * The number of HubSpot contacts that registered for this marketing event.
   */
  registrants: number;

  /**
   * The update date and time of the marketing event.
   */
  updatedAt: string;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled.
   */
  eventCancelled?: boolean;

  /**
   * Indicates if the marketing event has been completed.
   */
  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * The type of the marketing event.
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  /**
   * The ID of the marketing event CRM object.
   */
  objectId?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventPublicReadResponseV2 {
  /**
   * The creation date and time of the marketing event
   */
  createdAt: string;

  customProperties: Array<CrmPropertyWrapper>;

  /**
   * The name of the marketing event
   */
  eventName: string;

  /**
   * The internal ID of the marketing event in HubSpot
   */
  objectId: string;

  /**
   * The update date and time of the marketing event
   */
  updatedAt: string;

  appInfo?: AppInfo;

  /**
   * Number of attended contact records of a marketing event
   */
  attendees?: number;

  /**
   * Number of cancelled contact records of a marketing event
   */
  cancellations?: number;

  /**
   * The end date and time of the marketing event
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled
   */
  eventCancelled?: boolean;

  /**
   * Indicates if the marketing event has been completed
   */
  eventCompleted?: boolean;

  /**
   * The description of the marketing event
   */
  eventDescription?: string;

  /**
   * The name of the organizer of the marketing event
   */
  eventOrganizer?: string;

  /**
   * The status of the marketing event
   */
  eventStatus?: string;

  eventStatusV2?: string;

  /**
   * The type of the marketing event
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be managed
   */
  eventUrl?: string;

  /**
   * The ID that is associated with this marketing event in the external event
   * application
   */
  externalEventId?: string;

  /**
   * Number of no-show contact records of a marketing event
   */
  noShows?: number;

  /**
   * Number of registered contact records of a marketing event
   */
  registrants?: number;

  /**
   * The start date and time of the marketing event
   */
  startDateTime?: string;
}

export interface MarketingEventPublicUpdateRequestFullV2 {
  customProperties: Array<Shared.PropertyValue>;

  /**
   * The internal ID of the marketing event in HubSpot
   */
  objectId: string;

  /**
   * The end date and time of the marketing event
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled
   */
  eventCancelled?: boolean;

  /**
   * The description of the marketing event
   */
  eventDescription?: string;

  /**
   * The name of the marketing event
   */
  eventName?: string;

  /**
   * The name of the organizer of the marketing event
   */
  eventOrganizer?: string;

  /**
   * The type of the marketing event
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be managed
   */
  eventUrl?: string;

  /**
   * The start date and time of the marketing event
   */
  startDateTime?: string;
}

export interface MarketingEventPublicUpdateRequestV2 {
  customProperties: Array<Shared.PropertyValue>;

  /**
   * The end date and time of the marketing event
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled
   */
  eventCancelled?: boolean;

  /**
   * The description of the marketing event
   */
  eventDescription?: string;

  /**
   * The name of the marketing event
   */
  eventName?: string;

  /**
   * The name of the organizer of the marketing event
   */
  eventOrganizer?: string;

  /**
   * The type of the marketing event
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be managed
   */
  eventUrl?: string;

  /**
   * The start date and time of the marketing event
   */
  startDateTime?: string;
}

export interface MarketingEventSubscriber {
  /**
   * Timestamp in milliseconds at which the contact subscribed to the event.
   */
  interactionDateTime: number;

  /**
   * The key-value set of the properties of the contact
   */
  properties: { [key: string]: string };

  /**
   * The ID of the contact in HubSpot
   */
  vid: number;
}

export interface MarketingEventUpdateRequestParams {
  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties: Array<Shared.PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled. Defaults to `false`
   */
  eventCancelled?: boolean;

  /**
   * Indicates if the marketing event has been completed. Defaults to `false`
   */
  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * The name of the marketing event.
   */
  eventName?: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer?: string;

  /**
   * Describes what type of event this is. For example: `WEBINAR`, `CONFERENCE`,
   * `WORKSHOP`
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface ParticipationAssociations {
  contact: ContactAssociation;

  marketingEvent: MarketingEventAssociation;
}

export interface ParticipationBreakdown {
  /**
   * The internal ID of the target marketing event
   */
  id: string;

  associations: ParticipationAssociations;

  /**
   * The creation time and date of the target marketing event
   */
  createdAt: string;

  properties: ParticipationProperties;
}

export interface ParticipationProperties {
  /**
   * The state of the participation
   */
  attendanceState: 'ATTENDED' | 'CANCELLED' | 'EMPTY' | 'NO_SHOW' | 'REGISTERED';

  /**
   * Timestamp of when the participation occurred
   */
  occurredAt: number;

  /**
   * The number of seconds the participation lasted
   */
  attendanceDurationSeconds?: number;

  /**
   * Percentage of the participation duration relative to the event duration
   */
  attendancePercentage?: string;
}

export interface PublicList {
  /**
   * An internal ID of the list
   */
  listId: string;

  /**
   * A number that represents a version of the list
   */
  listVersion: number;

  /**
   * The name of the list
   */
  name: string;

  /**
   * The internal ID of the object type of the list
   */
  objectTypeId: string;

  /**
   * Represents the current processing status of the list
   */
  processingStatus: string;

  /**
   * Processing type of the list
   */
  processingType: string;

  /**
   * Timestamp of the creation of the list
   */
  createdAt?: string;

  /**
   * The ID of the user who created the list
   */
  createdById?: string;

  /**
   * Timestamp of the deletion of the list
   */
  deletedAt?: string;

  /**
   * Timestamp of the last update of the list filters
   */
  filtersUpdatedAt?: string;

  /**
   * The size of the result list
   */
  size?: number;

  /**
   * Timestamp of the last update of the list
   */
  updatedAt?: string;

  /**
   * The ID of the user who last updated the list
   */
  updatedById?: string;
}

export interface SearchPublicResponseWrapper {
  /**
   * The ID of the source application of the marketing event
   */
  appId: number;

  /**
   * The account ID associated with this marketing event in the external application
   */
  externalAccountId: string;

  /**
   * The ID of the marketing event in the external event application
   */
  externalEventId: string;

  /**
   * The internal ID of the marketing event in HubSpot
   */
  objectId: string;
}

export interface SubscriberEmailResponse {
  /**
   * The email of the contact
   */
  email: string;

  /**
   * The internal ID of the contact
   */
  vid: number;
}

export interface SubscriberVidResponse {
  /**
   * The internal ID of the contact
   */
  vid: number;
}

export interface MarketingEventCreateParams {
  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties: Array<Shared.PropertyValue>;

  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;

  /**
   * The id of the marketing event in the external event application.
   */
  externalEventId: string;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled. Defaults to `false`
   */
  eventCancelled?: boolean;

  /**
   * Indicates if the marketing event has been completed. Defaults to `false`
   */
  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * Describes what type of event this is. For example: `WEBINAR`, `CONFERENCE`,
   * `WORKSHOP`
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventUpdateParams {
  customProperties: Array<Shared.PropertyValue>;

  /**
   * The end date and time of the marketing event
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled
   */
  eventCancelled?: boolean;

  /**
   * The description of the marketing event
   */
  eventDescription?: string;

  /**
   * The name of the marketing event
   */
  eventName?: string;

  /**
   * The name of the organizer of the marketing event
   */
  eventOrganizer?: string;

  /**
   * The type of the marketing event
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be managed
   */
  eventUrl?: string;

  /**
   * The start date and time of the marketing event
   */
  startDateTime?: string;
}

export interface MarketingEventListParams extends PageParams {}

export interface MarketingEventDeleteBatchParams {
  inputs: Array<MarketingEventPublicObjectIDDeleteRequest>;
}

export interface MarketingEventDeleteBatchByExternalEventIDParams {
  inputs: Array<MarketingEventExternalUniqueIdentifier>;
}

export interface MarketingEventDeleteByExternalEventIDParams {
  externalAccountId: string;
}

export interface MarketingEventGetByExternalEventIDParams {
  externalAccountId: string;
}

export interface MarketingEventSearchByExternalEventIDParams {
  q: string;
}

export interface MarketingEventUpdateBatchParams {
  inputs: Array<MarketingEventPublicUpdateRequestFullV2>;
}

export interface MarketingEventUpdateByExternalEventIDParams {
  /**
   * Query param
   */
  externalAccountId: string;

  /**
   * Body param: A list of PropertyValues. These can be whatever kind of property
   * names and values you want. However, they must already exist on the HubSpot
   * account's definition of the MarketingEvent Object. If they don't they will be
   * filtered out and not set. In order to do this you'll need to create a new
   * PropertyGroup on the HubSpot account's MarketingEvent object for your specific
   * app and create the Custom Property you want to track on that HubSpot account. Do
   * not create any new default properties on the MarketingEvent object as that will
   * apply to all HubSpot accounts.
   */
  customProperties: Array<Shared.PropertyValue>;

  /**
   * Body param: The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Body param: Indicates if the marketing event has been cancelled. Defaults to
   * `false`
   */
  eventCancelled?: boolean;

  /**
   * Body param: Indicates if the marketing event has been completed. Defaults to
   * `false`
   */
  eventCompleted?: boolean;

  /**
   * Body param: The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * Body param: The name of the marketing event.
   */
  eventName?: string;

  /**
   * Body param: The name of the organizer of the marketing event.
   */
  eventOrganizer?: string;

  /**
   * Body param: Describes what type of event this is. For example: `WEBINAR`,
   * `CONFERENCE`, `WORKSHOP`
   */
  eventType?: string;

  /**
   * Body param: A URL in the external event application where the marketing event
   * can be managed.
   */
  eventUrl?: string;

  /**
   * Body param: The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventUpsertBatchParams {
  inputs: Array<MarketingEventCreateRequestParams>;
}

export interface MarketingEventUpsertByExternalEventIDParams {
  /**
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties: Array<Shared.PropertyValue>;

  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;

  /**
   * The id of the marketing event in the external event application.
   */
  externalEventId: string;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled. Defaults to `false`
   */
  eventCancelled?: boolean;

  /**
   * Indicates if the marketing event has been completed. Defaults to `false`
   */
  eventCompleted?: boolean;

  /**
   * The description of the marketing event.
   */
  eventDescription?: string;

  /**
   * Describes what type of event this is. For example: `WEBINAR`, `CONFERENCE`,
   * `WORKSHOP`
   */
  eventType?: string;

  /**
   * A URL in the external event application where the marketing event can be
   * managed.
   */
  eventUrl?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

MarketingEvents.Attendance = Attendance;
MarketingEvents.BaseAttendance = BaseAttendance;
MarketingEvents.Events = Events;
MarketingEvents.BaseEvents = BaseEvents;
MarketingEvents.ListAssociations = ListAssociations;
MarketingEvents.BaseListAssociations = BaseListAssociations;
MarketingEvents.Participations = Participations;
MarketingEvents.BaseParticipations = BaseParticipations;
MarketingEvents.Settings = Settings;
MarketingEvents.BaseSettings = BaseSettings;
MarketingEvents.SubscriberState = SubscriberState;
MarketingEvents.BaseSubscriberState = BaseSubscriberState;

export declare namespace MarketingEvents {
  export {
    type AppInfo as AppInfo,
    type AttendanceCounters as AttendanceCounters,
    type BatchInputMarketingEventCreateRequestParams as BatchInputMarketingEventCreateRequestParams,
    type BatchInputMarketingEventEmailSubscriber as BatchInputMarketingEventEmailSubscriber,
    type BatchInputMarketingEventExternalUniqueIdentifier as BatchInputMarketingEventExternalUniqueIdentifier,
    type BatchInputMarketingEventPublicObjectIDDeleteRequest as BatchInputMarketingEventPublicObjectIDDeleteRequest,
    type BatchInputMarketingEventPublicUpdateRequestFullV2 as BatchInputMarketingEventPublicUpdateRequestFullV2,
    type BatchInputMarketingEventSubscriber as BatchInputMarketingEventSubscriber,
    type BatchResponseMarketingEventPublicDefaultResponse as BatchResponseMarketingEventPublicDefaultResponse,
    type BatchResponseMarketingEventPublicDefaultResponseV2 as BatchResponseMarketingEventPublicDefaultResponseV2,
    type BatchResponseMarketingEventPublicDefaultResponseV2WithErrors as BatchResponseMarketingEventPublicDefaultResponseV2WithErrors,
    type BatchResponseSubscriberEmailResponse as BatchResponseSubscriberEmailResponse,
    type BatchResponseSubscriberVidResponse as BatchResponseSubscriberVidResponse,
    type CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging as CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging,
    type CollectionResponseSearchPublicResponseWrapperNoPaging as CollectionResponseSearchPublicResponseWrapperNoPaging,
    type CollectionResponseWithTotalMarketingEventIdentifiersResponse as CollectionResponseWithTotalMarketingEventIdentifiersResponse,
    type CollectionResponseWithTotalParticipationBreakdown as CollectionResponseWithTotalParticipationBreakdown,
    type CollectionResponseWithTotalPublicList as CollectionResponseWithTotalPublicList,
    type ContactAssociation as ContactAssociation,
    type CrmPropertyWrapper as CrmPropertyWrapper,
    type EventDetailSettings as EventDetailSettings,
    type EventDetailSettingsURL as EventDetailSettingsURL,
    type MarketingEventAssociation as MarketingEventAssociation,
    type MarketingEventCompleteRequestParams as MarketingEventCompleteRequestParams,
    type MarketingEventCreateRequestParams as MarketingEventCreateRequestParams,
    type MarketingEventDefaultResponse as MarketingEventDefaultResponse,
    type MarketingEventEmailSubscriber as MarketingEventEmailSubscriber,
    type MarketingEventExternalUniqueIdentifier as MarketingEventExternalUniqueIdentifier,
    type MarketingEventIdentifiersResponse as MarketingEventIdentifiersResponse,
    type MarketingEventPublicDefaultResponse as MarketingEventPublicDefaultResponse,
    type MarketingEventPublicDefaultResponseV2 as MarketingEventPublicDefaultResponseV2,
    type MarketingEventPublicObjectIDDeleteRequest as MarketingEventPublicObjectIDDeleteRequest,
    type MarketingEventPublicReadResponse as MarketingEventPublicReadResponse,
    type MarketingEventPublicReadResponseV2 as MarketingEventPublicReadResponseV2,
    type MarketingEventPublicUpdateRequestFullV2 as MarketingEventPublicUpdateRequestFullV2,
    type MarketingEventPublicUpdateRequestV2 as MarketingEventPublicUpdateRequestV2,
    type MarketingEventSubscriber as MarketingEventSubscriber,
    type MarketingEventUpdateRequestParams as MarketingEventUpdateRequestParams,
    type ParticipationAssociations as ParticipationAssociations,
    type ParticipationBreakdown as ParticipationBreakdown,
    type ParticipationProperties as ParticipationProperties,
    type PublicList as PublicList,
    type SearchPublicResponseWrapper as SearchPublicResponseWrapper,
    type SubscriberEmailResponse as SubscriberEmailResponse,
    type SubscriberVidResponse as SubscriberVidResponse,
    type MarketingEventPublicReadResponseV2sPage as MarketingEventPublicReadResponseV2sPage,
    type MarketingEventCreateParams as MarketingEventCreateParams,
    type MarketingEventUpdateParams as MarketingEventUpdateParams,
    type MarketingEventListParams as MarketingEventListParams,
    type MarketingEventDeleteBatchParams as MarketingEventDeleteBatchParams,
    type MarketingEventDeleteBatchByExternalEventIDParams as MarketingEventDeleteBatchByExternalEventIDParams,
    type MarketingEventDeleteByExternalEventIDParams as MarketingEventDeleteByExternalEventIDParams,
    type MarketingEventGetByExternalEventIDParams as MarketingEventGetByExternalEventIDParams,
    type MarketingEventSearchByExternalEventIDParams as MarketingEventSearchByExternalEventIDParams,
    type MarketingEventUpdateBatchParams as MarketingEventUpdateBatchParams,
    type MarketingEventUpdateByExternalEventIDParams as MarketingEventUpdateByExternalEventIDParams,
    type MarketingEventUpsertBatchParams as MarketingEventUpsertBatchParams,
    type MarketingEventUpsertByExternalEventIDParams as MarketingEventUpsertByExternalEventIDParams,
  };

  export {
    Attendance as Attendance,
    BaseAttendance as BaseAttendance,
    type AttendanceCreateByEventIDAndContactIDParams as AttendanceCreateByEventIDAndContactIDParams,
    type AttendanceCreateByEventIDAndEmailParams as AttendanceCreateByEventIDAndEmailParams,
    type AttendanceCreateByExternalEventIDAndContactIDParams as AttendanceCreateByExternalEventIDAndContactIDParams,
    type AttendanceCreateByExternalEventIDAndEmailParams as AttendanceCreateByExternalEventIDAndEmailParams,
  };

  export {
    Events as Events,
    BaseEvents as BaseEvents,
    type EventCancelByExternalEventIDParams as EventCancelByExternalEventIDParams,
    type EventCompleteByExternalEventIDParams as EventCompleteByExternalEventIDParams,
  };

  export {
    ListAssociations as ListAssociations,
    BaseListAssociations as BaseListAssociations,
    type ListAssociationDeleteParams as ListAssociationDeleteParams,
    type ListAssociationAssociateParams as ListAssociationAssociateParams,
    type ListAssociationAssociateByExternalAccountParams as ListAssociationAssociateByExternalAccountParams,
    type ListAssociationDeleteByExternalAccountParams as ListAssociationDeleteByExternalAccountParams,
    type ListAssociationListByExternalAccountParams as ListAssociationListByExternalAccountParams,
  };

  export {
    Participations as Participations,
    BaseParticipations as BaseParticipations,
    type ParticipationGetByExternalAccountAndEventIDParams as ParticipationGetByExternalAccountAndEventIDParams,
    type ParticipationListBreakdownByContactParams as ParticipationListBreakdownByContactParams,
    type ParticipationListBreakdownByExternalAccountAndEventIDParams as ParticipationListBreakdownByExternalAccountAndEventIDParams,
    type ParticipationListBreakdownByIDParams as ParticipationListBreakdownByIDParams,
  };

  export {
    Settings as Settings,
    BaseSettings as BaseSettings,
    type SettingCreateOrUpdateParams as SettingCreateOrUpdateParams,
  };

  export {
    SubscriberState as SubscriberState,
    BaseSubscriberState as BaseSubscriberState,
    type SubscriberStateRecordByEmailParams as SubscriberStateRecordByEmailParams,
    type SubscriberStateRecordByIDParams as SubscriberStateRecordByIDParams,
  };
}
