// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EventDefinitionsAPI from './event-definitions';
import {
  AbsoluteComparativeTimestampRefineBy,
  AbsoluteRangedTimestampRefineBy,
  AllHistoryRefineBy,
  AllPropertyTypesOperation,
  AssociationDefinition,
  BehavioralEventTypeDefinitionLabels,
  BoolPropertyOperation,
  CalendarDatePropertyOperation,
  CollectionResponseWithTotalExternalBehavioralEventTypeDefinitionForwardPaging,
  ComboEventRule,
  ComboEventRuleBranch,
  ComparativeDatePropertyOperation,
  ComparativePropertyUpdatedOperation,
  DatePoint,
  DatePropertyOperation,
  DateTimePropertyOperation,
  EnumerationPropertyOperation,
  EventDefinitionCreateParams,
  EventDefinitionCreatePropertyParams,
  EventDefinitionDeletePropertyParams,
  EventDefinitionListParams,
  EventDefinitionUpdateParams,
  EventDefinitionUpdatePropertyParams,
  EventDefinitions,
  ExternalBehavioralEventPropertyCreate,
  ExternalBehavioralEventPropertyDefinitionPatch,
  ExternalBehavioralEventTypeDefinition,
  ExternalBehavioralEventTypeDefinitionEgg,
  ExternalBehavioralEventTypeDefinitionPatch,
  ExternalBehavioralEventTypeDefinitionsPage,
  FiscalQuarter,
  FiscalYear,
  IndexOffset,
  IndexedTimePoint,
  MonthReference,
  MultiStringPropertyOperation,
  NowReference,
  NumOccurrencesRefineBy,
  NumberPropertyOperation,
  PropertyFilter,
  PropertyReferencedTime,
  QuarterReference,
  RangedDatePropertyOperation,
  RangedNumberPropertyOperation,
  RangedTimeOperation,
  RelativeComparativeTimestampRefineBy,
  RelativeRangedTimestampRefineBy,
  RollingDateRangePropertyOperation,
  RollingPropertyUpdatedOperation,
  SetOccurrencesRefineBy,
  StringPropertyOperation,
  TimeOffset,
  TimePointOperation,
  TodayReference,
  WeekReference,
  YearReference,
} from './event-definitions';
import * as SendAPI from './send';
import {
  BatchedBehavioralEventHTTPCompletionRequest,
  BehavioralEventHTTPCompletionRequest,
  Send,
  SendSendBatchParams,
  SendSendParams,
} from './send';
import * as EmailsAPI from '../marketing/emails';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Events extends APIResource {
  eventDefinitions: EventDefinitionsAPI.EventDefinitions = new EventDefinitionsAPI.EventDefinitions(
    this._client,
  );
  send: SendAPI.Send = new SendAPI.Send(this._client);

  /**
   * Retrieve instances of event completion data. For example, retrieve all event
   * completions associated with a specific contact.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const externalUnifiedEvent of client.events.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExternalUnifiedEventsPage, ExternalUnifiedEvent> {
    return this._client.getAPIList('/events/v3/events/', Page<ExternalUnifiedEvent>, { query, ...options });
  }

  /**
   * This endpoint returns a list of event type names which are visible to you. You
   * may use these event type names to query the API for specific event instances of
   * a desired type.
   *
   * Note: the `get_types` method is only supported in the Python SDK version
   * `12.0.0-beta.1` or later.
   *
   * @example
   * ```ts
   * const visibleExternalEventTypeNames =
   *   await client.events.listEventTypes();
   * ```
   */
  listEventTypes(options?: RequestOptions): APIPromise<VisibleExternalEventTypeNames> {
    return this._client.get('/events/v3/events/event-types', options);
  }
}

export type ExternalUnifiedEventsPage = Page<ExternalUnifiedEvent>;

export interface CollectionResponseExternalUnifiedEvent {
  results: Array<ExternalUnifiedEvent>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
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
  properties?: { [key: string]: string };
}

export interface VisibleExternalEventTypeNames {
  /**
   * List of event type names.
   */
  eventTypes: Array<string>;
}

export interface EventListParams extends PageParams {
  /**
   * ID of an event instance. IDs are 1:1 with event instances. If you provide this
   * filter and additional filters, the other filters must match the values on the
   * event instance to yield results.
   */
  id?: Array<string>;

  /**
   * Pagination cursor for backward navigation. Retrieves events occurring before the
   * specified cursor position. Note: Currently only forward pagination with after is
   * supported.
   */
  before?: string;

  /**
   * The event type name. You can retrieve available event types using the
   * [event types endpoint](#get-%2Fevents%2Fv3%2Fevents%2Fevent-types).
   */
  eventType?: string;

  /**
   * The ID of the CRM Object to filter event instances on. When including this
   * parameter, you must also include the `objectType` parameter.
   */
  objectId?: number;

  objectProperty?: EventListParams.ObjectProperty;

  /**
   * The type of CRM object to filter event instances on (e.g., `contact`). To
   * retrieve event data for a specific CRM record, include the additional `objectId`
   * query parameter (below).
   */
  objectType?: string;

  /**
   * Filter for event data that occurred after a specific datetime.
   */
  occurredAfter?: string;

  /**
   * Filter for event data that occurred before a specific datetime.
   */
  occurredBefore?: string;

  property?: EventListParams.Property;

  /**
   * Sort direction based on the timestamp of the event instance, `ASCENDING` or
   * `DESCENDING`.
   */
  sort?: Array<string>;
}

export namespace EventListParams {
  export interface ObjectProperty {
    /**
     * Instead of retrieving event data for a specific object by its ID, you can
     * specify a unique identifier property. For contacts, you can use the `email`
     * property. (e.g., `objectProperty.email=name@domain.com`).
     */
    '{propname}'?: unknown;
  }

  export interface Property {
    /**
     * Filter for event completions that contain a specific value for an event property
     * (e.g., `property.hs_city=portland`). For properties values with spaces, replaces
     * spaces with `%20` or `+` (e.g., `property.hs_city=new+york`).
     */
    '{propname}'?: unknown;
  }
}

Events.EventDefinitions = EventDefinitions;
Events.Send = Send;

export declare namespace Events {
  export {
    type CollectionResponseExternalUnifiedEvent as CollectionResponseExternalUnifiedEvent,
    type ExternalUnifiedEvent as ExternalUnifiedEvent,
    type VisibleExternalEventTypeNames as VisibleExternalEventTypeNames,
    type ExternalUnifiedEventsPage as ExternalUnifiedEventsPage,
    type EventListParams as EventListParams,
  };

  export {
    EventDefinitions as EventDefinitions,
    type AbsoluteComparativeTimestampRefineBy as AbsoluteComparativeTimestampRefineBy,
    type AbsoluteRangedTimestampRefineBy as AbsoluteRangedTimestampRefineBy,
    type AllHistoryRefineBy as AllHistoryRefineBy,
    type AllPropertyTypesOperation as AllPropertyTypesOperation,
    type AssociationDefinition as AssociationDefinition,
    type BehavioralEventTypeDefinitionLabels as BehavioralEventTypeDefinitionLabels,
    type BoolPropertyOperation as BoolPropertyOperation,
    type CalendarDatePropertyOperation as CalendarDatePropertyOperation,
    type CollectionResponseWithTotalExternalBehavioralEventTypeDefinitionForwardPaging as CollectionResponseWithTotalExternalBehavioralEventTypeDefinitionForwardPaging,
    type ComboEventRule as ComboEventRule,
    type ComboEventRuleBranch as ComboEventRuleBranch,
    type ComparativeDatePropertyOperation as ComparativeDatePropertyOperation,
    type ComparativePropertyUpdatedOperation as ComparativePropertyUpdatedOperation,
    type DatePoint as DatePoint,
    type DatePropertyOperation as DatePropertyOperation,
    type DateTimePropertyOperation as DateTimePropertyOperation,
    type EnumerationPropertyOperation as EnumerationPropertyOperation,
    type ExternalBehavioralEventPropertyCreate as ExternalBehavioralEventPropertyCreate,
    type ExternalBehavioralEventPropertyDefinitionPatch as ExternalBehavioralEventPropertyDefinitionPatch,
    type ExternalBehavioralEventTypeDefinition as ExternalBehavioralEventTypeDefinition,
    type ExternalBehavioralEventTypeDefinitionEgg as ExternalBehavioralEventTypeDefinitionEgg,
    type ExternalBehavioralEventTypeDefinitionPatch as ExternalBehavioralEventTypeDefinitionPatch,
    type FiscalQuarter as FiscalQuarter,
    type FiscalYear as FiscalYear,
    type IndexedTimePoint as IndexedTimePoint,
    type IndexOffset as IndexOffset,
    type MonthReference as MonthReference,
    type MultiStringPropertyOperation as MultiStringPropertyOperation,
    type NowReference as NowReference,
    type NumberPropertyOperation as NumberPropertyOperation,
    type NumOccurrencesRefineBy as NumOccurrencesRefineBy,
    type PropertyFilter as PropertyFilter,
    type PropertyReferencedTime as PropertyReferencedTime,
    type QuarterReference as QuarterReference,
    type RangedDatePropertyOperation as RangedDatePropertyOperation,
    type RangedNumberPropertyOperation as RangedNumberPropertyOperation,
    type RangedTimeOperation as RangedTimeOperation,
    type RelativeComparativeTimestampRefineBy as RelativeComparativeTimestampRefineBy,
    type RelativeRangedTimestampRefineBy as RelativeRangedTimestampRefineBy,
    type RollingDateRangePropertyOperation as RollingDateRangePropertyOperation,
    type RollingPropertyUpdatedOperation as RollingPropertyUpdatedOperation,
    type SetOccurrencesRefineBy as SetOccurrencesRefineBy,
    type StringPropertyOperation as StringPropertyOperation,
    type TimeOffset as TimeOffset,
    type TimePointOperation as TimePointOperation,
    type TodayReference as TodayReference,
    type WeekReference as WeekReference,
    type YearReference as YearReference,
    type ExternalBehavioralEventTypeDefinitionsPage as ExternalBehavioralEventTypeDefinitionsPage,
    type EventDefinitionCreateParams as EventDefinitionCreateParams,
    type EventDefinitionUpdateParams as EventDefinitionUpdateParams,
    type EventDefinitionListParams as EventDefinitionListParams,
    type EventDefinitionCreatePropertyParams as EventDefinitionCreatePropertyParams,
    type EventDefinitionDeletePropertyParams as EventDefinitionDeletePropertyParams,
    type EventDefinitionUpdatePropertyParams as EventDefinitionUpdatePropertyParams,
  };

  export {
    Send as Send,
    type BatchedBehavioralEventHTTPCompletionRequest as BatchedBehavioralEventHTTPCompletionRequest,
    type BehavioralEventHTTPCompletionRequest as BehavioralEventHTTPCompletionRequest,
    type SendSendParams as SendSendParams,
    type SendSendBatchParams as SendSendBatchParams,
  };
}
