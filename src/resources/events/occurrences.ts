// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Occurrences extends APIResource {
  /**
   * Retrieve event occurrences for the specified time frame. This endpoint allows
   * filtering by various parameters such as object type, event type, and occurrence
   * time. It supports pagination and sorting of results.
   */
  list(
    query: OccurrenceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExternalUnifiedEventsPage, ExternalUnifiedEvent> {
    return this._client.getAPIList('/events/event-occurrences/2026-03', Page<ExternalUnifiedEvent>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve a list of visible external event type names for the specified event
   * occurrences in March 2026. This endpoint is useful for identifying the types of
   * events that are available for analysis or reporting within your HubSpot account.
   */
  listEventTypes(options?: RequestOptions): APIPromise<VisibleExternalEventTypeNames> {
    return this._client.get('/events/event-occurrences/2026-03/event-types', options);
  }
}

export type ExternalUnifiedEventsPage = Page<ExternalUnifiedEvent>;

export interface CollectionResponseExternalUnifiedEvent {
  /**
   * An array of ExternalUnifiedEvent objects, each representing an individual event
   * occurrence.
   */
  results: Array<ExternalUnifiedEvent>;

  paging?: Shared.Paging;
}

export interface ExternalUnifiedEvent {
  /**
   * A unique identifier for the event.
   */
  id: string;

  /**
   * The format of the `eventType` string is `ae{appId}_{eventTypeLabel}`,
   * `pe{portalId}_{eventTypeLabel}`, or just `e_{eventTypeLabel}` for HubSpot
   * events.
   */
  eventType: string;

  /**
   * The objectId of the object which did the event.
   */
  objectId: string;

  /**
   * The objectType for the object which did the event.
   */
  objectType: string;

  /**
   * An ISO 8601 timestamp when the event occurred.
   */
  occurredAt: string;

  /**
   * A key-value map of event-specific properties. The available properties depend on
   * the event type definition.
   */
  properties: { [key: string]: string };
}

export interface VisibleExternalEventTypeNames {
  /**
   * List of event type names.
   */
  eventTypes: Array<string>;
}

export interface OccurrenceListParams extends PageParams {
  /**
   * An array of event IDs to filter by.
   */
  id?: Array<string>;

  /**
   * A cursor token to retrieve results before a specific point.
   */
  before?: string;

  /**
   * The type of event to filter by.
   */
  eventType?: string;

  /**
   * The unique identifier of the object associated with the events.
   */
  objectId?: number;

  objectProperty?: OccurrenceListParams.ObjectProperty;

  /**
   * The type of object associated with the events.
   */
  objectType?: string;

  /**
   * Filter events that occurred after this date-time.
   */
  occurredAfter?: string;

  /**
   * Filter events that occurred before this date-time.
   */
  occurredBefore?: string;

  /**
   * An array of property names to include in the response.
   */
  properties?: Array<string>;

  property?: OccurrenceListParams.Property;

  /**
   * An array of fields to sort the results by.
   */
  sort?: Array<string>;
}

export namespace OccurrenceListParams {
  export interface ObjectProperty {
    /**
     * Filter events by specific object properties.
     */
    '{propname}'?: unknown;
  }

  export interface Property {
    /**
     * Filter events by specific event properties.
     */
    '{propname}'?: unknown;
  }
}

export declare namespace Occurrences {
  export {
    type CollectionResponseExternalUnifiedEvent as CollectionResponseExternalUnifiedEvent,
    type ExternalUnifiedEvent as ExternalUnifiedEvent,
    type VisibleExternalEventTypeNames as VisibleExternalEventTypeNames,
    type ExternalUnifiedEventsPage as ExternalUnifiedEventsPage,
    type OccurrenceListParams as OccurrenceListParams,
  };
}
