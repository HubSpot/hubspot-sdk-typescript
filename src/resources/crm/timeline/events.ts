// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TimelineAPI from './timeline';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Events extends APIResource {
  /**
   * Send a single instance of event data to a specified event type.
   *
   * @example
   * ```ts
   * const timelineEventResponse =
   *   await client.crm.timeline.events.create({
   *     eventTemplateId: '1001298',
   *     tokens: {
   *       petAge: 'string',
   *       petColor: 'black',
   *       petName: 'Art3mis',
   *     },
   *   });
   * ```
   */
  create(body: EventCreateParams, options?: RequestOptions): APIPromise<TimelineAPI.TimelineEventResponse> {
    return this._client.post('/integrators/timeline/v3/events', { body, ...options });
  }

  /**
   * Batch create multiple instances of timeline events based on an event template.
   * Once created, these event are immutable on the object timeline and cannot be
   * modified. If the event template was configured to update object properties via
   * `objectPropertyName`, this call will also attempt to updates those properties,
   * or add them if they don't exist.
   *
   * @example
   * ```ts
   * await client.crm.timeline.events.batchCreate({
   *   inputs: [
   *     {
   *       eventTemplateId: '1001298',
   *       tokens: {
   *         petAge: 'string',
   *         petColor: 'black',
   *         petName: 'Art3mis',
   *       },
   *     },
   *     {
   *       eventTemplateId: '1001298',
   *       tokens: {
   *         petAge: 'string',
   *         petColor: 'yellow',
   *         petName: 'Pocket',
   *       },
   *     },
   *   ],
   * });
   * ```
   */
  batchCreate(body: EventBatchCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/integrators/timeline/v3/events/batch/create', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve an event instance, specified by template ID and event ID.
   *
   * @example
   * ```ts
   * const timelineEventResponse =
   *   await client.crm.timeline.events.get('eventId', {
   *     eventTemplateId: 'eventTemplateId',
   *   });
   * ```
   */
  get(
    eventID: string,
    params: EventGetParams,
    options?: RequestOptions,
  ): APIPromise<TimelineAPI.TimelineEventResponse> {
    const { eventTemplateId } = params;
    return this._client.get(path`/integrators/timeline/v3/events/${eventTemplateId}/${eventID}`, options);
  }

  /**
   * Retrieve details for a specific event, specified by template ID and event ID.
   *
   * @example
   * ```ts
   * const eventDetail =
   *   await client.crm.timeline.events.getDetail('eventId', {
   *     eventTemplateId: 'eventTemplateId',
   *   });
   * ```
   */
  getDetail(
    eventID: string,
    params: EventGetDetailParams,
    options?: RequestOptions,
  ): APIPromise<TimelineAPI.EventDetail> {
    const { eventTemplateId } = params;
    return this._client.get(
      path`/integrators/timeline/v3/events/${eventTemplateId}/${eventID}/detail`,
      options,
    );
  }
}

export interface EventCreateParams {
  /**
   * The event template ID.
   */
  eventTemplateId: string;

  /**
   * A collection of token keys and values associated with the template tokens.
   */
  tokens: { [key: string]: string };

  /**
   * Identifier for the event. This is optional, and we recommend you do not pass
   * this in. We will create one for you if you omit this. You can also use
   * `{{uuid}}` anywhere in the ID to generate a unique string, guaranteeing
   * uniqueness.
   */
  id?: string;

  /**
   * The event domain (often paired with utk).
   */
  domain?: string;

  /**
   * The email address used for contact-specific events. This can be used to identify
   * existing contacts, create new ones, or change the email for an existing contact
   * (if paired with the `objectId`).
   */
  email?: string;

  /**
   * Additional event-specific data that can be interpreted by the template's
   * markdown.
   */
  extraData?: unknown;

  /**
   * The CRM object identifier. This is required for every event other than contacts
   * (where utk or email can be used).
   */
  objectId?: string;

  timelineIFrame?: TimelineAPI.TimelineEventIFrame;

  /**
   * The time the event occurred. If not passed in, the curren time will be assumed.
   * This is used to determine where an event is shown on a CRM object's timeline.
   */
  timestamp?: string;

  /**
   * Use the `utk` parameter to associate an event with a contact by `usertoken`.
   * This is recommended if you don't know a user's email, but have an identifying
   * user token in your cookie.
   */
  utk?: string;
}

export interface EventBatchCreateParams {
  /**
   * A collection of timeline events we want to create.
   */
  inputs: Array<TimelineAPI.TimelineEvent>;
}

export interface EventGetParams {
  /**
   * The event template ID.
   */
  eventTemplateId: string;
}

export interface EventGetDetailParams {
  /**
   * The event template ID.
   */
  eventTemplateId: string;
}

export declare namespace Events {
  export {
    type EventCreateParams as EventCreateParams,
    type EventBatchCreateParams as EventBatchCreateParams,
    type EventGetParams as EventGetParams,
    type EventGetDetailParams as EventGetDetailParams,
  };
}
