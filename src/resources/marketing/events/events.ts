// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketingEventsAPI from '../marketing-events';
import { MarketingEventPublicReadResponseV2sPage } from '../marketing-events';
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
import {
  Attendance,
  AttendanceCreateByEventIDAndContactIDParams,
  AttendanceCreateByEventIDAndEmailParams,
  AttendanceCreateByExternalEventIDAndContactIDParams,
  AttendanceCreateByExternalEventIDAndEmailParams,
} from './attendance';
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

export class Events extends APIResource {
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
   *   await client.marketing.events.create({
   *     eventName: 'eventName',
   *     eventOrganizer: 'eventOrganizer',
   *     externalAccountId: 'externalAccountId',
   *     externalEventId: 'externalEventId',
   *   });
   * ```
   */
  create(
    body: EventCreateParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.MarketingEventDefaultResponse> {
    return this._client.post('/marketing/v3/marketing-events/events', { body, ...options });
  }

  /**
   * Updates the details of an existing Marketing Event identified by its objectId,
   * if it exists.
   *
   * @example
   * ```ts
   * const marketingEventPublicDefaultResponseV2 =
   *   await client.marketing.events.update('objectId', {
   *     customProperties: [
   *       {
   *         name: '',
   *         sourceUpstreamDeployable:
   *           'sourceUpstreamDeployable',
   *         value: '',
   *       },
   *     ],
   *   });
   * ```
   */
  update(
    objectID: string,
    body: EventUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.MarketingEventPublicDefaultResponseV2> {
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
   * for await (const marketingEventPublicReadResponseV2 of client.marketing.events.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    MarketingEventPublicReadResponseV2sPage,
    MarketingEventsAPI.MarketingEventPublicReadResponseV2
  > {
    return this._client.getAPIList(
      '/marketing/v3/marketing-events/',
      Page<MarketingEventsAPI.MarketingEventPublicReadResponseV2>,
      { query, ...options },
    );
  }

  /**
   * Deletes the existing Marketing Event with the specified objectId, if it exists.
   *
   * @example
   * ```ts
   * await client.marketing.events.delete('objectId');
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
   *   await client.marketing.events.cancelByExternalEventID(
   *     'externalEventId',
   *     { externalAccountId: 'externalAccountId' },
   *   );
   * ```
   */
  cancelByExternalEventID(
    externalEventID: string,
    params: EventCancelByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.MarketingEventDefaultResponse> {
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
   *   await client.marketing.events.completeByExternalEventID(
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
    params: EventCompleteByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.MarketingEventDefaultResponse> {
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
   * await client.marketing.events.deleteBatch({
   *   inputs: [{ objectId: 'objectId' }],
   * });
   * ```
   */
  deleteBatch(body: EventDeleteBatchParams, options?: RequestOptions): APIPromise<void> {
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
   *   await client.marketing.events.deleteBatchByExternalEventID(
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
    body: EventDeleteBatchByExternalEventIDParams,
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
   * await client.marketing.events.deleteByExternalEventID(
   *   'externalEventId',
   *   { externalAccountId: 'externalAccountId' },
   * );
   * ```
   */
  deleteByExternalEventID(
    externalEventID: string,
    params: EventDeleteByExternalEventIDParams,
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
   *   await client.marketing.events.get('objectId');
   * ```
   */
  get(
    objectID: string,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.MarketingEventPublicReadResponseV2> {
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
   *   await client.marketing.events.getByExternalEventID(
   *     'externalEventId',
   *     { externalAccountId: 'externalAccountId' },
   *   );
   * ```
   */
  getByExternalEventID(
    externalEventID: string,
    query: EventGetByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.MarketingEventPublicReadResponse> {
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
   *   await client.marketing.events.searchByExternalEventID({
   *     q: 'q',
   *   });
   * ```
   */
  searchByExternalEventID(
    query: EventSearchByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.CollectionResponseSearchPublicResponseWrapperNoPaging> {
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
   *   await client.marketing.events.searchIdentifiersByExternalEventID(
   *     'externalEventId',
   *   );
   * ```
   */
  searchIdentifiersByExternalEventID(
    externalEventID: string,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging> {
    return this._client.get(path`/marketing/v3/marketing-events/${externalEventID}/identifiers`, options);
  }

  /**
   * Updates multiple Marketing Events on the portal based on their objectId, if they
   * exist.
   *
   * @example
   * ```ts
   * const batchResponseMarketingEventPublicDefaultResponseV2 =
   *   await client.marketing.events.updateBatch({
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
    body: EventUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.BatchResponseMarketingEventPublicDefaultResponseV2> {
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
   *   await client.marketing.events.updateByExternalEventID(
   *     'externalEventId',
   *     { externalAccountId: 'externalAccountId' },
   *   );
   * ```
   */
  updateByExternalEventID(
    externalEventID: string,
    params: EventUpdateByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.MarketingEventPublicDefaultResponse> {
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
   *   await client.marketing.events.upsertBatch({
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
    body: EventUpsertBatchParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.BatchResponseMarketingEventPublicDefaultResponse> {
    return this._client.post('/marketing/v3/marketing-events/events/upsert', { body, ...options });
  }

  /**
   * Upserts a marketing event If there is an existing marketing event with the
   * specified ID, it will be updated; otherwise a new event will be created.
   *
   * @example
   * ```ts
   * const marketingEventPublicDefaultResponse =
   *   await client.marketing.events.upsertByExternalEventID(
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
    body: EventUpsertByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.MarketingEventPublicDefaultResponse> {
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
   *   await client.marketing.events.upsertSubscriberStateByEmail(
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
    params: EventUpsertSubscriberStateByEmailParams,
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
   *   await client.marketing.events.upsertSubscriberStateByID(
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
    params: EventUpsertSubscriberStateByIDParams,
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

export interface EventCreateParams {
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
  customProperties?: Array<MarketingEventsAPI.PropertyValue>;

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

export interface EventUpdateParams {
  customProperties: Array<MarketingEventsAPI.PropertyValue>;

  endDateTime?: string;

  eventCancelled?: boolean;

  eventDescription?: string;

  eventName?: string;

  eventOrganizer?: string;

  eventType?: string;

  eventUrl?: string;

  startDateTime?: string;
}

export interface EventListParams extends PageParams {}

export interface EventCancelByExternalEventIDParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application
   */
  externalAccountId: string;
}

export interface EventCompleteByExternalEventIDParams {
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

export interface EventDeleteBatchParams {
  inputs: Array<MarketingEventsAPI.MarketingEventPublicObjectIDDeleteRequest>;
}

export interface EventDeleteBatchByExternalEventIDParams {
  inputs: Array<MarketingEventsAPI.MarketingEventExternalUniqueIdentifier>;
}

export interface EventDeleteByExternalEventIDParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application
   */
  externalAccountId: string;
}

export interface EventGetByExternalEventIDParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application
   */
  externalAccountId: string;
}

export interface EventSearchByExternalEventIDParams {
  /**
   * The id of the marketing event in the external event application
   * (externalEventId)
   */
  q: string;
}

export interface EventUpdateBatchParams {
  inputs: Array<MarketingEventsAPI.MarketingEventPublicUpdateRequestFullV2>;
}

export interface EventUpdateByExternalEventIDParams {
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
  customProperties?: Array<MarketingEventsAPI.PropertyValue>;

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

export interface EventUpsertBatchParams {
  inputs: Array<MarketingEventsAPI.MarketingEventCreateRequestParams>;
}

export interface EventUpsertByExternalEventIDParams {
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
  customProperties?: Array<MarketingEventsAPI.PropertyValue>;

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

export interface EventUpsertSubscriberStateByEmailParams {
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
  inputs: Array<MarketingEventsAPI.MarketingEventEmailSubscriber>;
}

export interface EventUpsertSubscriberStateByIDParams {
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
  inputs: Array<MarketingEventsAPI.MarketingEventSubscriber>;
}

Events.Associations = Associations;
Events.Attendance = Attendance;
Events.Participations = Participations;
Events.Settings = Settings;

export declare namespace Events {
  export {
    type EventCreateParams as EventCreateParams,
    type EventUpdateParams as EventUpdateParams,
    type EventListParams as EventListParams,
    type EventCancelByExternalEventIDParams as EventCancelByExternalEventIDParams,
    type EventCompleteByExternalEventIDParams as EventCompleteByExternalEventIDParams,
    type EventDeleteBatchParams as EventDeleteBatchParams,
    type EventDeleteBatchByExternalEventIDParams as EventDeleteBatchByExternalEventIDParams,
    type EventDeleteByExternalEventIDParams as EventDeleteByExternalEventIDParams,
    type EventGetByExternalEventIDParams as EventGetByExternalEventIDParams,
    type EventSearchByExternalEventIDParams as EventSearchByExternalEventIDParams,
    type EventUpdateBatchParams as EventUpdateBatchParams,
    type EventUpdateByExternalEventIDParams as EventUpdateByExternalEventIDParams,
    type EventUpsertBatchParams as EventUpsertBatchParams,
    type EventUpsertByExternalEventIDParams as EventUpsertByExternalEventIDParams,
    type EventUpsertSubscriberStateByEmailParams as EventUpsertSubscriberStateByEmailParams,
    type EventUpsertSubscriberStateByIDParams as EventUpsertSubscriberStateByIDParams,
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
    type AttendanceCreateByEventIDAndContactIDParams as AttendanceCreateByEventIDAndContactIDParams,
    type AttendanceCreateByEventIDAndEmailParams as AttendanceCreateByEventIDAndEmailParams,
    type AttendanceCreateByExternalEventIDAndContactIDParams as AttendanceCreateByExternalEventIDAndContactIDParams,
    type AttendanceCreateByExternalEventIDAndEmailParams as AttendanceCreateByExternalEventIDAndEmailParams,
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

export { type MarketingEventPublicReadResponseV2sPage };
