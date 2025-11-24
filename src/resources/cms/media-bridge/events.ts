// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MediaBridgeAPI from './media-bridge';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Events extends APIResource {
  /**
   * Create an event containing the viewers attention span details for the media.
   *
   * @example
   * ```ts
   * const attentionSpanEvent =
   *   await client.cms.mediaBridge.events.createAttentionSpanEvent(
   *     {
   *       mediaType: 'AUDIO',
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
  ): APIPromise<MediaBridgeAPI.AttentionSpanEvent> {
    return this._client.post('/media-bridge/v1/events/attention-span', { body, ...options });
  }

  /**
   * Create an event for when a user begins playing a piece of media.
   *
   * @example
   * ```ts
   * const mediaPlayedEvent =
   *   await client.cms.mediaBridge.events.createMediaPlayedEvent(
   *     {
   *       mediaType: 'AUDIO',
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
  ): APIPromise<MediaBridgeAPI.MediaPlayedEvent> {
    return this._client.post('/media-bridge/v1/events/media-played', { body, ...options });
  }

  /**
   * Create an event representing a user reaching quarterly milestones in a piece of
   * media they're viewing.
   *
   * @example
   * ```ts
   * const mediaPlayedPercentageEvent =
   *   await client.cms.mediaBridge.events.createMediaPlayedPercentEvent(
   *     {
   *       mediaType: 'AUDIO',
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
  ): APIPromise<MediaBridgeAPI.MediaPlayedPercentageEvent> {
    return this._client.post('/media-bridge/v1/events/media-played-percent', { body, ...options });
  }
}

export interface EventCreateAttentionSpanEventParams {
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';

  occurredTimestamp: number;

  rawDataMap: { [key: string]: number };

  sessionId: string;

  _hsenc?: string;

  contactId?: number;

  contactUtk?: string;

  derivedValues?: MediaBridgeAPI.AttentionSpanCalculatedValues;

  externalId?: string;

  mediaBridgeId?: number;

  mediaName?: string;

  mediaUrl?: string;

  pageId?: number;

  pageName?: string;

  pageUrl?: string;

  rawDataString?: string;
}

export interface EventCreateMediaPlayedEventParams {
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';

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
  mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO';

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
    type EventCreateAttentionSpanEventParams as EventCreateAttentionSpanEventParams,
    type EventCreateMediaPlayedEventParams as EventCreateMediaPlayedEventParams,
    type EventCreateMediaPlayedPercentEventParams as EventCreateMediaPlayedPercentEventParams,
  };
}
