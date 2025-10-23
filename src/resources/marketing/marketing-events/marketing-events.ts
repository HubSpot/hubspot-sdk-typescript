// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AssociationsAPI from './associations';
import {
  AssociationAssociateByExternalAccountParams,
  AssociationAssociateParams,
  AssociationDeleteByExternalAccountParams,
  AssociationDeleteParams,
  AssociationListByExternalAccountParams,
  Associations,
} from './associations';
import * as AttendanceAPI from './attendance';
import { Attendance, AttendanceCreateByContactIDParams, AttendanceCreateByEmailParams } from './attendance';
import * as ParticipationsAPI from './participations';
import {
  ParticipationGetByExternalAccountAndEventIDParams,
  ParticipationListBreakdownByContactParams,
  ParticipationListBreakdownByExternalAccountAndEventIDParams,
  ParticipationListBreakdownByIDParams,
  Participations,
} from './participations';
import * as SettingsAPI from './settings';
import { SettingCreateOrUpdateParams, Settings } from './settings';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class MarketingEvents extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  attendance: AttendanceAPI.Attendance = new AttendanceAPI.Attendance(this._client);
  participations: ParticipationsAPI.Participations = new ParticipationsAPI.Participations(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Creates a new marketing event in HubSpot
   *
   * @example
   * ```ts
   * const marketingEventDefaultResponse =
   *   await client.marketing.marketingEvents.create({
   *     eventName: 'eventName',
   *     eventOrganizer: 'eventOrganizer',
   *     externalAccountId: 'externalAccountId',
   *     externalEventId: 'externalEventId',
   *   });
   * ```
   */
  create(
    body: MarketingEventCreateParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventDefaultResponse> {
    return this._client.post('/marketing/v3/marketing-events/events', { body, ...options });
  }

  /**
   * Updates the details of an existing Marketing Event identified by its objectId,
   * if it exists.
   *
   * @example
   * ```ts
   * const marketingEventPublicDefaultResponseV2 =
   *   await client.marketing.marketingEvents.update(
   *     'objectId',
   *     {
   *       customProperties: [
   *         {
   *           name: '',
   *           sourceUpstreamDeployable:
   *             'sourceUpstreamDeployable',
   *           value: '',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    objectID: string,
    body: MarketingEventUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventPublicDefaultResponseV2> {
    return this._client.patch(path`/marketing/v3/marketing-events/${objectID}`, { body, ...options });
  }

  /**
   * Returns all Marketing Events available on the portal, along with their
   * properties, regardless of whether they were created manually or through the
   * application.
   *
   * The marketing events returned by this endpoint are sorted by objectId.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const marketingEventPublicReadResponseV2 of client.marketing.marketingEvents.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MarketingEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MarketingEventPublicReadResponseV2sPage, MarketingEventPublicReadResponseV2> {
    return this._client.getAPIList(
      '/marketing/v3/marketing-events/',
      Page<MarketingEventPublicReadResponseV2>,
      { query, ...options },
    );
  }

  /**
   * Deletes the existing Marketing Event with the specified objectId, if it exists.
   *
   * @example
   * ```ts
   * await client.marketing.marketingEvents.delete('objectId');
   * ```
   */
  delete(objectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/marketing/v3/marketing-events/${objectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Mark a marketing event as cancelled.
   *
   * @example
   * ```ts
   * const marketingEventDefaultResponse =
   *   await client.marketing.marketingEvents.cancelByExternalEventID(
   *     'externalEventId',
   *     { externalAccountId: 'externalAccountId' },
   *   );
   * ```
   */
  cancelByExternalEventID(
    externalEventID: string,
    params: MarketingEventCancelByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventDefaultResponse> {
    const { externalAccountId } = params;
    return this._client.post(path`/marketing/v3/marketing-events/events/${externalEventID}/cancel`, {
      query: { externalAccountId },
      ...options,
    });
  }

  /**
   * Mark a marketing event as completed
   *
   * @example
   * ```ts
   * const marketingEventDefaultResponse =
   *   await client.marketing.marketingEvents.completeByExternalEventID(
   *     'externalEventId',
   *     {
   *       externalAccountId: 'externalAccountId',
   *       endDateTime: '2019-12-27T18:11:19.117Z',
   *       startDateTime: '2019-12-27T18:11:19.117Z',
   *     },
   *   );
   * ```
   */
  completeByExternalEventID(
    externalEventID: string,
    params: MarketingEventCompleteByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventDefaultResponse> {
    const { externalAccountId, ...body } = params;
    return this._client.post(path`/marketing/v3/marketing-events/events/${externalEventID}/complete`, {
      query: { externalAccountId },
      body,
      ...options,
    });
  }

  /**
   * Deletes multiple Marketing Events from the portal based on their objectId, if
   * they exist.
   *
   * Responses: 204: Returned if all specified Marketing Events were successfully
   * deleted. 207: Returned if some objectIds did not correspond to any existing
   * Marketing Events.
   *
   * @example
   * ```ts
   * await client.marketing.marketingEvents.deleteBatch({
   *   inputs: [{ objectId: 'objectId' }],
   * });
   * ```
   */
  deleteBatch(body: MarketingEventDeleteBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/marketing/v3/marketing-events/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes multiple Marketing Events based on externalAccountId, externalEventId,
   * and appId.
   *
   * Only Marketing Events created by the same apps will be deleted; events from
   * other apps cannot be removed by this endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.marketing.marketingEvents.deleteBatchByExternalEventID(
   *     {
   *       inputs: [
   *         {
   *           appId: 0,
   *           externalAccountId: 'externalAccountId',
   *           externalEventId: 'externalEventId',
   *         },
   *       ],
   *     },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  deleteBatchByExternalEventID(
    body: MarketingEventDeleteBatchByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post('/marketing/v3/marketing-events/events/delete', {
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
   *
   * @example
   * ```ts
   * await client.marketing.marketingEvents.deleteByExternalEventID(
   *   'externalEventId',
   *   { externalAccountId: 'externalAccountId' },
   * );
   * ```
   */
  deleteByExternalEventID(
    externalEventID: string,
    params: MarketingEventDeleteByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { externalAccountId } = params;
    return this._client.delete(path`/marketing/v3/marketing-events/events/${externalEventID}`, {
      query: { externalAccountId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the details of a Marketing Event with the specified objectId, if it
   * exists.
   *
   * @example
   * ```ts
   * const marketingEventPublicReadResponseV2 =
   *   await client.marketing.marketingEvents.get('objectId');
   * ```
   */
  get(objectID: string, options?: RequestOptions): APIPromise<MarketingEventPublicReadResponseV2> {
    return this._client.get(path`/marketing/v3/marketing-events/${objectID}`, options);
  }

  /**
   * Returns the details of a Marketing Event with the specified externalAccountId,
   * externalEventId, if it exists.
   *
   * Only Marketing Events created by the same app making the request can be
   * retrieved.
   *
   * @example
   * ```ts
   * const marketingEventPublicReadResponse =
   *   await client.marketing.marketingEvents.getByExternalEventID(
   *     'externalEventId',
   *     { externalAccountId: 'externalAccountId' },
   *   );
   * ```
   */
  getByExternalEventID(
    externalEventID: string,
    query: MarketingEventGetByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventPublicReadResponse> {
    return this._client.get(path`/marketing/v3/marketing-events/events/${externalEventID}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves Marketing Events where the externalEventId matches the value provided
   * in the request, limited to events created by the app making the request.
   *
   * Marketing Events created by other apps will not be included in the results.
   *
   * @example
   * ```ts
   * const collectionResponseSearchPublicResponseWrapperNoPaging =
   *   await client.marketing.marketingEvents.searchByExternalEventID(
   *     { q: 'q' },
   *   );
   * ```
   */
  searchByExternalEventID(
    query: MarketingEventSearchByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<CollectionResponseSearchPublicResponseWrapperNoPaging> {
    return this._client.get('/marketing/v3/marketing-events/events/search', { query, ...options });
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
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging =
   *   await client.marketing.marketingEvents.searchIdentifiersByExternalEventID(
   *     'externalEventId',
   *   );
   * ```
   */
  searchIdentifiersByExternalEventID(
    externalEventID: string,
    options?: RequestOptions,
  ): APIPromise<CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging> {
    return this._client.get(path`/marketing/v3/marketing-events/${externalEventID}/identifiers`, options);
  }

  /**
   * Updates multiple Marketing Events on the portal based on their objectId, if they
   * exist.
   *
   * @example
   * ```ts
   * const batchResponseMarketingEventPublicDefaultResponseV2 =
   *   await client.marketing.marketingEvents.updateBatch({
   *     inputs: [
   *       {
   *         customProperties: [
   *           {
   *             name: '',
   *             sourceUpstreamDeployable:
   *               'sourceUpstreamDeployable',
   *             value: '',
   *           },
   *         ],
   *         objectId: 'objectId',
   *       },
   *     ],
   *   });
   * ```
   */
  updateBatch(
    body: MarketingEventUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseMarketingEventPublicDefaultResponseV2> {
    return this._client.post('/marketing/v3/marketing-events/batch/update', { body, ...options });
  }

  /**
   * Updates the details of an existing Marketing Event identified by its
   * externalAccountId, externalEventId if it exists.
   *
   * Only Marketing Events created by the same app can be updated.
   *
   * @example
   * ```ts
   * const marketingEventPublicDefaultResponse =
   *   await client.marketing.marketingEvents.updateByExternalEventID(
   *     'externalEventId',
   *     { externalAccountId: 'externalAccountId' },
   *   );
   * ```
   */
  updateByExternalEventID(
    externalEventID: string,
    params: MarketingEventUpdateByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventPublicDefaultResponse> {
    const { externalAccountId, ...body } = params;
    return this._client.patch(path`/marketing/v3/marketing-events/events/${externalEventID}`, {
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
   *
   * @example
   * ```ts
   * const batchResponseMarketingEventPublicDefaultResponse =
   *   await client.marketing.marketingEvents.upsertBatch({
   *     inputs: [
   *       {
   *         eventName: 'eventName',
   *         eventOrganizer: 'eventOrganizer',
   *         externalAccountId: 'externalAccountId',
   *         externalEventId: 'externalEventId',
   *       },
   *     ],
   *   });
   * ```
   */
  upsertBatch(
    body: MarketingEventUpsertBatchParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseMarketingEventPublicDefaultResponse> {
    return this._client.post('/marketing/v3/marketing-events/events/upsert', { body, ...options });
  }

  /**
   * Upserts a marketing event If there is an existing marketing event with the
   * specified ID, it will be updated; otherwise a new event will be created.
   *
   * @example
   * ```ts
   * const marketingEventPublicDefaultResponse =
   *   await client.marketing.marketingEvents.upsertByExternalEventID(
   *     'externalEventId',
   *     {
   *       eventName: 'eventName',
   *       eventOrganizer: 'eventOrganizer',
   *       externalAccountId: 'externalAccountId',
   *       body_externalEventId: 'externalEventId',
   *     },
   *   );
   * ```
   */
  upsertByExternalEventID(
    externalEventID: string,
    body: MarketingEventUpsertByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventPublicDefaultResponse> {
    return this._client.put(path`/marketing/v3/marketing-events/events/${externalEventID}`, {
      body,
      ...options,
    });
  }

  /**
   * Record a subscriber state between multiple HubSpot contacts and a marketing
   * event, using contact email addresses. Note that the contact must already exist
   * in HubSpot; a contact will not be created. The contactProperties field is used
   * only when creating a new contact. These properties will not update existing
   * contacts.
   *
   * @example
   * ```ts
   * const response =
   *   await client.marketing.marketingEvents.upsertSubscriberStateByEmail(
   *     'subscriberState',
   *     {
   *       externalEventId: 'externalEventId',
   *       externalAccountId: 'externalAccountId',
   *       inputs: [{ email: 'email', interactionDateTime: 0 }],
   *     },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  upsertSubscriberStateByEmail(
    subscriberState: string,
    params: MarketingEventUpsertSubscriberStateByEmailParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/v3/marketing-events/events/${externalEventId}/${subscriberState}/email-upsert`,
      {
        query: { externalAccountId },
        body,
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }

  /**
   * Record a subscriber state between multiple HubSpot contacts and a marketing
   * event, using HubSpot contact IDs. Note that the contact must already exist in
   * HubSpot; a contact will not be created.
   *
   * @example
   * ```ts
   * const response =
   *   await client.marketing.marketingEvents.upsertSubscriberStateByID(
   *     'subscriberState',
   *     {
   *       externalEventId: 'externalEventId',
   *       externalAccountId: 'externalAccountId',
   *       inputs: [{ interactionDateTime: 0 }],
   *     },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  upsertSubscriberStateByID(
    subscriberState: string,
    params: MarketingEventUpsertSubscriberStateByIDParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { externalEventId, externalAccountId, ...body } = params;
    return this._client.post(
      path`/marketing/v3/marketing-events/events/${externalEventId}/${subscriberState}/upsert`,
      {
        query: { externalAccountId },
        body,
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }
}

export type MarketingEventPublicReadResponseV2sPage = Page<MarketingEventPublicReadResponseV2>;

export interface AppInfo {
  id: string;

  name: string;
}

export interface AttendanceCounters {
  attended: number;

  cancelled: number;

  noShows: number;

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
  completedAt: string;

  results: Array<MarketingEventPublicDefaultResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseMarketingEventPublicDefaultResponseV2 {
  completedAt: string;

  results: Array<MarketingEventPublicDefaultResponseV2>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponseMarketingEventPublicDefaultResponseV2WithErrors {
  completedAt: string;

  results: Array<MarketingEventPublicDefaultResponseV2>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseSubscriberEmailResponse {
  completedAt: string;

  results: Array<SubscriberEmailResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseSubscriberVidResponse {
  completedAt: string;

  results: Array<SubscriberVidResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging {
  results: Array<MarketingEventPublicReadResponseV2>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseSearchPublicResponseWrapperNoPaging {
  results: Array<SearchPublicResponseWrapper>;
}

export interface CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging {
  results: Array<MarketingEventIdentifiersResponse>;

  total: number;
}

export interface CollectionResponseWithTotalParticipationBreakdownForwardPaging {
  results: Array<ParticipationBreakdown>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalPublicListNoPaging {
  results: Array<PublicList>;

  total: number;
}

export interface ContactAssociation {
  contactId: string;

  email: string;

  firstname?: string;

  lastname?: string;
}

export interface CRMPropertyWrapper {
  name: string;

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
  marketingEventId: string;

  name: string;

  externalAccountId?: string;

  externalEventId?: string;
}

export interface MarketingEventCompleteRequestParams {
  endDateTime: string;

  startDateTime: string;
}

export interface MarketingEventCreateRequestParams {
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
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled. Defaults to `false`
   */
  eventCancelled?: boolean;

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
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

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
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled.
   */
  eventCancelled?: boolean;

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

  objectId?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventEmailSubscriber {
  /**
   * The email address of the contact in HubSpot to associate with the event.
   */
  email: string;

  /**
   * Timestamp in milliseconds at which the contact subscribed to the event.
   */
  interactionDateTime: number;

  contactProperties?: { [key: string]: string };

  properties?: { [key: string]: string };
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
  externalEventId: string;

  marketingEventName: string;

  objectId: string;

  appInfo?: AppInfo;

  externalAccountId?: string;
}

export interface MarketingEventPublicDefaultResponse {
  id: string;

  createdAt: string;

  /**
   * The name of the marketing event.
   */
  eventName: string;

  /**
   * The name of the organizer of the marketing event.
   */
  eventOrganizer: string;

  updatedAt: string;

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
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled.
   */
  eventCancelled?: boolean;

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

  objectId?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventPublicDefaultResponseV2 {
  createdAt: string;

  customProperties: Array<CRMPropertyWrapper>;

  eventName: string;

  objectId: string;

  updatedAt: string;

  appInfo?: AppInfo;

  endDateTime?: string;

  eventCancelled?: boolean;

  eventCompleted?: boolean;

  eventDescription?: string;

  eventOrganizer?: string;

  eventType?: string;

  eventUrl?: string;

  startDateTime?: string;
}

export interface MarketingEventPublicObjectIDDeleteRequest {
  objectId: string;
}

export interface MarketingEventPublicReadResponse {
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

  createdAt: string;

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

  updatedAt: string;

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
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled.
   */
  eventCancelled?: boolean;

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

  objectId?: string;

  /**
   * The start date and time of the marketing event.
   */
  startDateTime?: string;
}

export interface MarketingEventPublicReadResponseV2 {
  createdAt: string;

  customProperties: Array<CRMPropertyWrapper>;

  eventName: string;

  objectId: string;

  updatedAt: string;

  appInfo?: AppInfo;

  attendees?: number;

  cancellations?: number;

  endDateTime?: string;

  eventCancelled?: boolean;

  eventCompleted?: boolean;

  eventDescription?: string;

  eventOrganizer?: string;

  eventStatus?: string;

  eventType?: string;

  eventUrl?: string;

  externalEventId?: string;

  noShows?: number;

  registrants?: number;

  startDateTime?: string;
}

export interface MarketingEventPublicUpdateRequestFullV2 {
  customProperties: Array<PropertyValue>;

  objectId: string;

  endDateTime?: string;

  eventCancelled?: boolean;

  eventDescription?: string;

  eventName?: string;

  eventOrganizer?: string;

  eventType?: string;

  eventUrl?: string;

  startDateTime?: string;
}

export interface MarketingEventPublicUpdateRequestV2 {
  customProperties: Array<PropertyValue>;

  endDateTime?: string;

  eventCancelled?: boolean;

  eventDescription?: string;

  eventName?: string;

  eventOrganizer?: string;

  eventType?: string;

  eventUrl?: string;

  startDateTime?: string;
}

export interface MarketingEventSubscriber {
  /**
   * Timestamp in milliseconds at which the contact subscribed to the event.
   */
  interactionDateTime: number;

  properties?: { [key: string]: string };

  vid?: number;
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
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled. Defaults to `false`
   */
  eventCancelled?: boolean;

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
  id: string;

  associations: ParticipationAssociations;

  createdAt: string;

  properties: ParticipationProperties;
}

export interface ParticipationProperties {
  attendanceState: 'REGISTERED' | 'ATTENDED' | 'CANCELLED' | 'EMPTY' | 'NO_SHOW';

  occurredAt: number;

  attendanceDurationSeconds?: number;

  attendancePercentage?: string;
}

/**
 * Represents a single custom property of a marketing event, storing its name,
 * value, metadata (like source, timestamp, and sensitivity), and related audit
 * information for tracking changes.
 */
export interface PropertyValue {
  /**
   * Name of custom property
   */
  name: string;

  sourceUpstreamDeployable: string;

  /**
   * Custom property value
   */
  value: string;

  /**
   * The sensitivity level of the property, such as "non_sensitive", "sensitive", and
   * "highly_sensitive".
   */
  dataSensitivity?: 'none' | 'standard' | 'high';

  /**
   * Whether the property value is encrypted.
   */
  isEncrypted?: boolean;

  isLargeValue?: boolean;

  persistenceTimestamp?: number;

  /**
   * A unique ID associated with this request.
   */
  requestId?: string;

  /**
   * Whether the value was selected by a user.
   */
  selectedByUser?: boolean;

  /**
   * The timestamp when the value was selected by a user, if applicable.
   */
  selectedByUserTimestamp?: number;

  /**
   * The origin of the property value, such as "IMPORT" or "API".
   */
  source?:
    | 'UNKNOWN'
    | 'IMPORT'
    | 'API'
    | 'FORM'
    | 'ANALYTICS'
    | 'MIGRATION'
    | 'SALESFORCE'
    | 'INTEGRATION'
    | 'CONTACTS_WEB'
    | 'WAL_INCREMENTAL'
    | 'TASK'
    | 'EMAIL'
    | 'WORKFLOWS'
    | 'CALCULATED'
    | 'SOCIAL'
    | 'BATCH_UPDATE'
    | 'SIGNALS'
    | 'BIDEN'
    | 'DEFAULT'
    | 'COMPANIES'
    | 'DEALS'
    | 'ASSISTS'
    | 'PRESENTATIONS'
    | 'TALLY'
    | 'SIDEKICK'
    | 'CRM_UI'
    | 'MERGE_CONTACTS'
    | 'PORTAL_USER_ASSOCIATOR'
    | 'INTEGRATIONS_PLATFORM'
    | 'BCC_TO_CRM'
    | 'FORWARD_TO_CRM'
    | 'ENGAGEMENTS'
    | 'SALES'
    | 'HEISENBERG'
    | 'LEADIN'
    | 'GMAIL_INTEGRATION'
    | 'ACADEMY'
    | 'SALES_MESSAGES'
    | 'AVATARS_SERVICE'
    | 'MERGE_COMPANIES'
    | 'SEQUENCES'
    | 'COMPANY_FAMILIES'
    | 'MOBILE_IOS'
    | 'MOBILE_ANDROID'
    | 'CONTACTS'
    | 'ASSOCIATIONS'
    | 'EXTENSION'
    | 'SUCCESS'
    | 'BOT'
    | 'INTEGRATIONS_SYNC'
    | 'AUTOMATION_PLATFORM'
    | 'CONVERSATIONS'
    | 'EMAIL_INTEGRATION'
    | 'CONTENT_MEMBERSHIP'
    | 'QUOTES'
    | 'BET_ASSIGNMENT'
    | 'QUOTAS'
    | 'BET_CRM_CONNECTOR'
    | 'MEETINGS'
    | 'MERGE_OBJECTS'
    | 'RECYCLING_BIN'
    | 'ADS'
    | 'AI_GROUP'
    | 'COMMUNICATOR'
    | 'SETTINGS'
    | 'PROPERTY_SETTINGS'
    | 'PIPELINE_SETTINGS'
    | 'COMPANY_INSIGHTS'
    | 'BEHAVIORAL_EVENTS'
    | 'PAYMENTS'
    | 'GOALS'
    | 'PORTAL_OBJECT_SYNC'
    | 'APPROVALS'
    | 'FILE_MANAGER'
    | 'MARKETPLACE'
    | 'INTERNAL_PROCESSING'
    | 'FORECASTING'
    | 'SLACK_INTEGRATION'
    | 'CRM_UI_BULK_ACTION'
    | 'WORKFLOW_CONTACT_DELETE_ACTION'
    | 'ACCEPTANCE_TEST'
    | 'PLAYBOOKS'
    | 'CHATSPOT'
    | 'FLYWHEEL_PRODUCT_DATA_SYNC'
    | 'HELP_DESK'
    | 'BILLING'
    | 'DATA_ENRICHMENT'
    | 'AUTOMATION_JOURNEY'
    | 'MICROAPPS'
    | 'INTENT'
    | 'PROSPECTING_AGENT'
    | 'CENTRAL_EXCHANGE_RATES'
    | 'HELP_DESK_AI'
    | 'CONVERSATIONAL_ENRICHMENT'
    | 'CRM_PROCESSES_PLATFORM'
    | 'CLONE_OBJECTS'
    | 'MARKET_SOURCING'
    | 'DATASET'
    | 'PROPERTY_RESTORE';

  /**
   * The ID of the property source indicating where it was created.
   */
  sourceId?: string;

  /**
   * A human-readable label.
   */
  sourceLabel?: string;

  /**
   * Source metadata encoded as a base64 string. For example: `ZXhhbXBsZSBzdHJpbmc=`
   */
  sourceMetadata?: string;

  /**
   * The unique identifier associated with the source.
   */
  sourceVid?: Array<number>;

  /**
   * When the value was set, as a 64-bit integer.
   */
  timestamp?: number;

  /**
   * The unit of measurement or context for the value.
   */
  unit?: string;

  /**
   * The ID of the user who updated the property.
   */
  updatedByUserId?: number;

  useTimestampAsPersistenceTimestamp?: boolean;
}

export interface PublicList {
  listId: string;

  listVersion: number;

  name: string;

  objectTypeId: string;

  processingStatus: string;

  processingType: string;

  createdAt?: string;

  createdById?: string;

  deletedAt?: string;

  filtersUpdatedAt?: string;

  size?: number;

  updatedAt?: string;

  updatedById?: string;
}

export interface SearchPublicResponseWrapper {
  appId: number;

  externalAccountId: string;

  externalEventId: string;

  objectId: string;
}

export interface SubscriberEmailResponse {
  email: string;

  vid: number;
}

export interface SubscriberVidResponse {
  vid: number;
}

export interface MarketingEventCreateParams {
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
   * A list of PropertyValues. These can be whatever kind of property names and
   * values you want. However, they must already exist on the HubSpot account's
   * definition of the MarketingEvent Object. If they don't they will be filtered out
   * and not set. In order to do this you'll need to create a new PropertyGroup on
   * the HubSpot account's MarketingEvent object for your specific app and create the
   * Custom Property you want to track on that HubSpot account. Do not create any new
   * default properties on the MarketingEvent object as that will apply to all
   * HubSpot accounts.
   */
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled. Defaults to `false`
   */
  eventCancelled?: boolean;

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
  customProperties: Array<PropertyValue>;

  endDateTime?: string;

  eventCancelled?: boolean;

  eventDescription?: string;

  eventName?: string;

  eventOrganizer?: string;

  eventType?: string;

  eventUrl?: string;

  startDateTime?: string;
}

export interface MarketingEventListParams extends PageParams {}

export interface MarketingEventCancelByExternalEventIDParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application
   */
  externalAccountId: string;
}

export interface MarketingEventCompleteByExternalEventIDParams {
  /**
   * Query param: The accountId that is associated with this marketing event in the
   * external event application.
   */
  externalAccountId: string;

  /**
   * Body param:
   */
  endDateTime: string;

  /**
   * Body param:
   */
  startDateTime: string;
}

export interface MarketingEventDeleteBatchParams {
  inputs: Array<MarketingEventPublicObjectIDDeleteRequest>;
}

export interface MarketingEventDeleteBatchByExternalEventIDParams {
  inputs: Array<MarketingEventExternalUniqueIdentifier>;
}

export interface MarketingEventDeleteByExternalEventIDParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application
   */
  externalAccountId: string;
}

export interface MarketingEventGetByExternalEventIDParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application
   */
  externalAccountId: string;
}

export interface MarketingEventSearchByExternalEventIDParams {
  /**
   * The id of the marketing event in the external event application
   * (externalEventId)
   */
  q: string;
}

export interface MarketingEventUpdateBatchParams {
  inputs: Array<MarketingEventPublicUpdateRequestFullV2>;
}

export interface MarketingEventUpdateByExternalEventIDParams {
  /**
   * Query param: The accountId that is associated with this marketing event in the
   * external event application
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
  customProperties?: Array<PropertyValue>;

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
   * Body param:
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
  body_externalEventId: string;

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
  customProperties?: Array<PropertyValue>;

  /**
   * The end date and time of the marketing event.
   */
  endDateTime?: string;

  /**
   * Indicates if the marketing event has been cancelled. Defaults to `false`
   */
  eventCancelled?: boolean;

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

export interface MarketingEventUpsertSubscriberStateByEmailParams {
  /**
   * Path param: The id of the marketing event in the external event application
   */
  externalEventId: string;

  /**
   * Query param: The accountId that is associated with this marketing event in the
   * external event application
   */
  externalAccountId: string;

  /**
   * Body param: List of marketing event details to create or update
   */
  inputs: Array<MarketingEventEmailSubscriber>;
}

export interface MarketingEventUpsertSubscriberStateByIDParams {
  /**
   * Path param: The id of the marketing event in the external event application
   */
  externalEventId: string;

  /**
   * Query param: The accountId that is associated with this marketing event in the
   * external event application
   */
  externalAccountId: string;

  /**
   * Body param: List of HubSpot contacts to subscribe to the marketing event
   */
  inputs: Array<MarketingEventSubscriber>;
}

MarketingEvents.Associations = Associations;
MarketingEvents.Attendance = Attendance;
MarketingEvents.Participations = Participations;
MarketingEvents.Settings = Settings;

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
    type CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging as CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging,
    type CollectionResponseWithTotalParticipationBreakdownForwardPaging as CollectionResponseWithTotalParticipationBreakdownForwardPaging,
    type CollectionResponseWithTotalPublicListNoPaging as CollectionResponseWithTotalPublicListNoPaging,
    type ContactAssociation as ContactAssociation,
    type CRMPropertyWrapper as CRMPropertyWrapper,
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
    type PropertyValue as PropertyValue,
    type PublicList as PublicList,
    type SearchPublicResponseWrapper as SearchPublicResponseWrapper,
    type SubscriberEmailResponse as SubscriberEmailResponse,
    type SubscriberVidResponse as SubscriberVidResponse,
    type MarketingEventPublicReadResponseV2sPage as MarketingEventPublicReadResponseV2sPage,
    type MarketingEventCreateParams as MarketingEventCreateParams,
    type MarketingEventUpdateParams as MarketingEventUpdateParams,
    type MarketingEventListParams as MarketingEventListParams,
    type MarketingEventCancelByExternalEventIDParams as MarketingEventCancelByExternalEventIDParams,
    type MarketingEventCompleteByExternalEventIDParams as MarketingEventCompleteByExternalEventIDParams,
    type MarketingEventDeleteBatchParams as MarketingEventDeleteBatchParams,
    type MarketingEventDeleteBatchByExternalEventIDParams as MarketingEventDeleteBatchByExternalEventIDParams,
    type MarketingEventDeleteByExternalEventIDParams as MarketingEventDeleteByExternalEventIDParams,
    type MarketingEventGetByExternalEventIDParams as MarketingEventGetByExternalEventIDParams,
    type MarketingEventSearchByExternalEventIDParams as MarketingEventSearchByExternalEventIDParams,
    type MarketingEventUpdateBatchParams as MarketingEventUpdateBatchParams,
    type MarketingEventUpdateByExternalEventIDParams as MarketingEventUpdateByExternalEventIDParams,
    type MarketingEventUpsertBatchParams as MarketingEventUpsertBatchParams,
    type MarketingEventUpsertByExternalEventIDParams as MarketingEventUpsertByExternalEventIDParams,
    type MarketingEventUpsertSubscriberStateByEmailParams as MarketingEventUpsertSubscriberStateByEmailParams,
    type MarketingEventUpsertSubscriberStateByIDParams as MarketingEventUpsertSubscriberStateByIDParams,
  };

  export {
    Associations as Associations,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationAssociateParams as AssociationAssociateParams,
    type AssociationAssociateByExternalAccountParams as AssociationAssociateByExternalAccountParams,
    type AssociationDeleteByExternalAccountParams as AssociationDeleteByExternalAccountParams,
    type AssociationListByExternalAccountParams as AssociationListByExternalAccountParams,
  };

  export {
    Attendance as Attendance,
    type AttendanceCreateByContactIDParams as AttendanceCreateByContactIDParams,
    type AttendanceCreateByEmailParams as AttendanceCreateByEmailParams,
  };

  export {
    Participations as Participations,
    type ParticipationGetByExternalAccountAndEventIDParams as ParticipationGetByExternalAccountAndEventIDParams,
    type ParticipationListBreakdownByContactParams as ParticipationListBreakdownByContactParams,
    type ParticipationListBreakdownByExternalAccountAndEventIDParams as ParticipationListBreakdownByExternalAccountAndEventIDParams,
    type ParticipationListBreakdownByIDParams as ParticipationListBreakdownByIDParams,
  };

  export { Settings as Settings, type SettingCreateOrUpdateParams as SettingCreateOrUpdateParams };
}
