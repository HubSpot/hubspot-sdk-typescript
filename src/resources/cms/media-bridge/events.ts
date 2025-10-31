// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Events extends APIResource {
  /**
   * Create an event containing the viewers attention span details for the media.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cms.mediaBridge.events.createAttentionSpanEvent(
   *     {
   *       mediaType: 'VIDEO',
   *       occurredTimestamp: 0,
   *       rawDataMap: { foo: 0 },
   *       sessionId: 'sessionId',
   *     },
   *   );
   * ```
   */
  createAttentionSpanEvent(
    body: EventCreateAttentionSpanEventParams,
    options?: RequestOptions,
  ): APIPromise<EventCreateAttentionSpanEventResponse> {
    return this._client.post('/media-bridge/v1/events/attention-span', { body, ...options });
  }

  /**
   * Create an event for when a user begins playing a piece of media.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cms.mediaBridge.events.createMediaPlayedEvent(
   *     {
   *       mediaType: 'VIDEO',
   *       occurredTimestamp: 0,
   *       sessionId: 'sessionId',
   *       state: 'STARTED',
   *     },
   *   );
   * ```
   */
  createMediaPlayedEvent(
    body: EventCreateMediaPlayedEventParams,
    options?: RequestOptions,
  ): APIPromise<EventCreateMediaPlayedEventResponse> {
    return this._client.post('/media-bridge/v1/events/media-played', { body, ...options });
  }

  /**
   * Create an event representing a user reaching quarterly milestones in a piece of
   * media they're viewing.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cms.mediaBridge.events.createMediaPlayedPercentEvent(
   *     {
   *       mediaType: 'VIDEO',
   *       occurredTimestamp: 0,
   *       playedPercent: 0,
   *       sessionId: 'sessionId',
   *     },
   *   );
   * ```
   */
  createMediaPlayedPercentEvent(
    body: EventCreateMediaPlayedPercentEventParams,
    options?: RequestOptions,
  ): APIPromise<EventCreateMediaPlayedPercentEventResponse> {
    return this._client.post('/media-bridge/v1/events/media-played-percent', { body, ...options });
  }
}

export interface EventCreateAttentionSpanEventResponse {
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

export interface EventCreateMediaPlayedEventResponse {
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

export interface EventCreateMediaPlayedPercentEventResponse {
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

export interface EventCreateAttentionSpanEventParams {
  mediaType: 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE';

  occurredTimestamp: number;

  rawDataMap: { [key: string]: number };

  sessionId: string;

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  derivedValues?: EventCreateAttentionSpanEventParams.DerivedValues;

  externalId?: string;

  mediaBridgeId?: number;

  mediaName?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageUrl?: string;

  rawDataString?: string;
}

export namespace EventCreateAttentionSpanEventParams {
  export interface DerivedValues {
    totalPercentPlayed: number;

    totalSecondsPlayed: number;
  }
}

export interface EventCreateMediaPlayedEventParams {
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

export interface EventCreateMediaPlayedPercentEventParams {
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

export declare namespace Events {
  export {
    type EventCreateAttentionSpanEventResponse as EventCreateAttentionSpanEventResponse,
    type EventCreateMediaPlayedEventResponse as EventCreateMediaPlayedEventResponse,
    type EventCreateMediaPlayedPercentEventResponse as EventCreateMediaPlayedPercentEventResponse,
    type EventCreateAttentionSpanEventParams as EventCreateAttentionSpanEventParams,
    type EventCreateMediaPlayedEventParams as EventCreateMediaPlayedEventParams,
    type EventCreateMediaPlayedPercentEventParams as EventCreateMediaPlayedPercentEventParams,
  };
}
