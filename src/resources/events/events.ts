// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DefinitionsAPI from './definitions';
import {
  AbsoluteComparativeTimestampRefineBy,
  AbsoluteRangedTimestampRefineBy,
  AllHistoryRefineBy,
  AllPropertyTypesOperation,
  AssociationDefinition,
  BaseDefinitions,
  BehavioralEventTypeDefinitionLabels,
  BoolPropertyOperation,
  CalendarDatePropertyOperation,
  CollectionResponseWithTotalExternalBehavioralEventTypeDefinition,
  ComboEventRule,
  ComboEventRuleBranch,
  ComparativeBoolPropertyOperation,
  ComparativeDatePropertyOperation,
  ComparativeNumberPropertyOperation,
  ComparativePropertyUpdatedOperation,
  ComparativeStringPropertyOperation,
  DatePoint,
  DatePropertyOperation,
  DateTimePropertyOperation,
  DefinitionCreateParams,
  DefinitionCreatePropertyParams,
  DefinitionDeletePropertyParams,
  DefinitionListParams,
  DefinitionSendBatchParams,
  DefinitionUpdateParams,
  DefinitionUpdatePropertyParams,
  Definitions,
  EnumerationPropertyOperation,
  ExternalBehavioralEventPropertyCreate,
  ExternalBehavioralEventPropertyDefinitionPatch,
  ExternalBehavioralEventTypeDefinition,
  ExternalBehavioralEventTypeDefinitionEgg,
  ExternalBehavioralEventTypeDefinitionPatch,
  ExternalBehavioralEventTypeDefinitionsPage,
  ExternalObjectResolutionMappingRequest,
  ExternalObjectResolutionMappingResponse,
  ExternalPrimaryObjectResolutionRule,
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
  PropertyFilterContext,
  PropertyReferencedTime,
  QuarterReference,
  RangedDatePropertyOperation,
  RangedNumberPropertyOperation,
  RangedTimeOperation,
  RegexPropertyOperation,
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
} from './definitions';
import * as OccurrencesAPI from './occurrences';
import {
  BaseOccurrences,
  CollectionResponseExternalUnifiedEvent,
  ExternalUnifiedEvent,
  ExternalUnifiedEventsPage,
  OccurrenceListParams,
  Occurrences,
  VisibleExternalEventTypeNames,
} from './occurrences';
import * as SendAPI from './send';
import { BaseSend, Send, SendBatchSendParams, SendSendParams } from './send';

export class BaseEvents extends APIResource {
  static override readonly _key: readonly ['events'] = Object.freeze(['events'] as const);
}
export class Events extends BaseEvents {
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
  occurrences: OccurrencesAPI.Occurrences = new OccurrencesAPI.Occurrences(this._client);
  send: SendAPI.Send = new SendAPI.Send(this._client);
}

export interface BatchedBehavioralEventHTTPCompletionRequest {
  inputs: Array<BehavioralEventHTTPCompletionRequest>;
}

export interface BehavioralEventHTTPCompletionRequest {
  /**
   * Internal name of the event-type to trigger
   */
  eventName: string;

  /**
   * Map of properties for the event in the format property internal name - property
   * value
   */
  properties: { [key: string]: string };

  /**
   * Email of visitor
   */
  email?: string;

  /**
   * The object id that this event occurred on. Could be a contact id or a visitor
   * id.
   */
  objectId?: string;

  /**
   * The time when this event occurred (if any). If this isn't set, the current time
   * will be used
   */
  occurredAt?: string;

  /**
   * User token
   */
  utk?: string;

  uuid?: string;
}

Events.Definitions = Definitions;
Events.BaseDefinitions = BaseDefinitions;
Events.Occurrences = Occurrences;
Events.BaseOccurrences = BaseOccurrences;
Events.Send = Send;
Events.BaseSend = BaseSend;

export declare namespace Events {
  export {
    type BatchedBehavioralEventHTTPCompletionRequest as BatchedBehavioralEventHTTPCompletionRequest,
    type BehavioralEventHTTPCompletionRequest as BehavioralEventHTTPCompletionRequest,
  };

  export {
    Definitions as Definitions,
    BaseDefinitions as BaseDefinitions,
    type AbsoluteComparativeTimestampRefineBy as AbsoluteComparativeTimestampRefineBy,
    type AbsoluteRangedTimestampRefineBy as AbsoluteRangedTimestampRefineBy,
    type AllHistoryRefineBy as AllHistoryRefineBy,
    type AllPropertyTypesOperation as AllPropertyTypesOperation,
    type AssociationDefinition as AssociationDefinition,
    type BehavioralEventTypeDefinitionLabels as BehavioralEventTypeDefinitionLabels,
    type BoolPropertyOperation as BoolPropertyOperation,
    type CalendarDatePropertyOperation as CalendarDatePropertyOperation,
    type CollectionResponseWithTotalExternalBehavioralEventTypeDefinition as CollectionResponseWithTotalExternalBehavioralEventTypeDefinition,
    type ComboEventRule as ComboEventRule,
    type ComboEventRuleBranch as ComboEventRuleBranch,
    type ComparativeBoolPropertyOperation as ComparativeBoolPropertyOperation,
    type ComparativeDatePropertyOperation as ComparativeDatePropertyOperation,
    type ComparativeNumberPropertyOperation as ComparativeNumberPropertyOperation,
    type ComparativePropertyUpdatedOperation as ComparativePropertyUpdatedOperation,
    type ComparativeStringPropertyOperation as ComparativeStringPropertyOperation,
    type DatePoint as DatePoint,
    type DatePropertyOperation as DatePropertyOperation,
    type DateTimePropertyOperation as DateTimePropertyOperation,
    type EnumerationPropertyOperation as EnumerationPropertyOperation,
    type ExternalBehavioralEventPropertyCreate as ExternalBehavioralEventPropertyCreate,
    type ExternalBehavioralEventPropertyDefinitionPatch as ExternalBehavioralEventPropertyDefinitionPatch,
    type ExternalBehavioralEventTypeDefinition as ExternalBehavioralEventTypeDefinition,
    type ExternalBehavioralEventTypeDefinitionEgg as ExternalBehavioralEventTypeDefinitionEgg,
    type ExternalBehavioralEventTypeDefinitionPatch as ExternalBehavioralEventTypeDefinitionPatch,
    type ExternalObjectResolutionMappingRequest as ExternalObjectResolutionMappingRequest,
    type ExternalObjectResolutionMappingResponse as ExternalObjectResolutionMappingResponse,
    type ExternalPrimaryObjectResolutionRule as ExternalPrimaryObjectResolutionRule,
    type FiscalQuarter as FiscalQuarter,
    type FiscalYear as FiscalYear,
    type IndexOffset as IndexOffset,
    type IndexedTimePoint as IndexedTimePoint,
    type MonthReference as MonthReference,
    type MultiStringPropertyOperation as MultiStringPropertyOperation,
    type NowReference as NowReference,
    type NumOccurrencesRefineBy as NumOccurrencesRefineBy,
    type NumberPropertyOperation as NumberPropertyOperation,
    type PropertyFilter as PropertyFilter,
    type PropertyFilterContext as PropertyFilterContext,
    type PropertyReferencedTime as PropertyReferencedTime,
    type QuarterReference as QuarterReference,
    type RangedDatePropertyOperation as RangedDatePropertyOperation,
    type RangedNumberPropertyOperation as RangedNumberPropertyOperation,
    type RangedTimeOperation as RangedTimeOperation,
    type RegexPropertyOperation as RegexPropertyOperation,
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
    type DefinitionCreateParams as DefinitionCreateParams,
    type DefinitionUpdateParams as DefinitionUpdateParams,
    type DefinitionListParams as DefinitionListParams,
    type DefinitionCreatePropertyParams as DefinitionCreatePropertyParams,
    type DefinitionDeletePropertyParams as DefinitionDeletePropertyParams,
    type DefinitionSendBatchParams as DefinitionSendBatchParams,
    type DefinitionUpdatePropertyParams as DefinitionUpdatePropertyParams,
  };

  export {
    Occurrences as Occurrences,
    BaseOccurrences as BaseOccurrences,
    type CollectionResponseExternalUnifiedEvent as CollectionResponseExternalUnifiedEvent,
    type ExternalUnifiedEvent as ExternalUnifiedEvent,
    type VisibleExternalEventTypeNames as VisibleExternalEventTypeNames,
    type ExternalUnifiedEventsPage as ExternalUnifiedEventsPage,
    type OccurrenceListParams as OccurrenceListParams,
  };

  export {
    Send as Send,
    BaseSend as BaseSend,
    type SendBatchSendParams as SendBatchSendParams,
    type SendSendParams as SendSendParams,
  };
}
