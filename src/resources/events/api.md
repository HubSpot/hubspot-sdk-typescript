# Events

Types:

- <code><a href="./src/resources/events/events.ts">BatchedBehavioralEventHTTPCompletionRequest</a></code>
- <code><a href="./src/resources/events/events.ts">BehavioralEventHTTPCompletionRequest</a></code>

## Definitions

Types:

- <code><a href="./src/resources/events/definitions.ts">AbsoluteComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/definitions.ts">AbsoluteRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/definitions.ts">AllHistoryRefineBy</a></code>
- <code><a href="./src/resources/events/definitions.ts">AllPropertyTypesOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">BehavioralEventTypeDefinitionLabels</a></code>
- <code><a href="./src/resources/events/definitions.ts">BoolPropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">CalendarDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">CollectionResponseWithTotalExternalBehavioralEventTypeDefinition</a></code>
- <code><a href="./src/resources/events/definitions.ts">ComboEventRule</a></code>
- <code><a href="./src/resources/events/definitions.ts">ComboEventRuleBranch</a></code>
- <code><a href="./src/resources/events/definitions.ts">ComparativeBoolPropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">ComparativeDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">ComparativeNumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">ComparativePropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">ComparativeStringPropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">DatePoint</a></code>
- <code><a href="./src/resources/events/definitions.ts">DatePropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">DateTimePropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">DefinitionsAssociationDefinition</a></code>
- <code><a href="./src/resources/events/definitions.ts">EnumerationPropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">ExternalBehavioralEventPropertyCreate</a></code>
- <code><a href="./src/resources/events/definitions.ts">ExternalBehavioralEventPropertyDefinitionPatch</a></code>
- <code><a href="./src/resources/events/definitions.ts">ExternalBehavioralEventTypeDefinition</a></code>
- <code><a href="./src/resources/events/definitions.ts">ExternalBehavioralEventTypeDefinitionEgg</a></code>
- <code><a href="./src/resources/events/definitions.ts">ExternalBehavioralEventTypeDefinitionPatch</a></code>
- <code><a href="./src/resources/events/definitions.ts">ExternalObjectResolutionMappingRequest</a></code>
- <code><a href="./src/resources/events/definitions.ts">ExternalObjectResolutionMappingResponse</a></code>
- <code><a href="./src/resources/events/definitions.ts">ExternalPrimaryObjectResolutionRule</a></code>
- <code><a href="./src/resources/events/definitions.ts">FiscalQuarter</a></code>
- <code><a href="./src/resources/events/definitions.ts">FiscalYear</a></code>
- <code><a href="./src/resources/events/definitions.ts">IndexOffset</a></code>
- <code><a href="./src/resources/events/definitions.ts">IndexedTimePoint</a></code>
- <code><a href="./src/resources/events/definitions.ts">MonthReference</a></code>
- <code><a href="./src/resources/events/definitions.ts">MultiStringPropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">NowReference</a></code>
- <code><a href="./src/resources/events/definitions.ts">NumOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/events/definitions.ts">NumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">PropertyFilter</a></code>
- <code><a href="./src/resources/events/definitions.ts">PropertyFilterContext</a></code>
- <code><a href="./src/resources/events/definitions.ts">PropertyReferencedTime</a></code>
- <code><a href="./src/resources/events/definitions.ts">QuarterReference</a></code>
- <code><a href="./src/resources/events/definitions.ts">RangedDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">RangedNumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">RangedTimeOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">RegexPropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">RelativeComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/definitions.ts">RelativeRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/definitions.ts">RollingDateRangePropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">RollingPropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">SetOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/events/definitions.ts">StringPropertyOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">TimeOffset</a></code>
- <code><a href="./src/resources/events/definitions.ts">TimePointOperation</a></code>
- <code><a href="./src/resources/events/definitions.ts">TodayReference</a></code>
- <code><a href="./src/resources/events/definitions.ts">WeekReference</a></code>
- <code><a href="./src/resources/events/definitions.ts">YearReference</a></code>

Methods:

- <code title="post /events/2026-03/event-definitions">client.events.definitions.<a href="./src/resources/events/definitions.ts">create</a>({ ...params }) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="patch /events/2026-03/event-definitions/{eventName}">client.events.definitions.<a href="./src/resources/events/definitions.ts">update</a>(eventName, { ...params }) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="get /events/2026-03/event-definitions">client.events.definitions.<a href="./src/resources/events/definitions.ts">list</a>({ ...params }) -> ExternalBehavioralEventTypeDefinitionsPage</code>
- <code title="delete /events/2026-03/event-definitions/{eventName}">client.events.definitions.<a href="./src/resources/events/definitions.ts">delete</a>(eventName) -> void</code>
- <code title="post /events/2026-03/event-definitions/{eventName}/property">client.events.definitions.<a href="./src/resources/events/definitions.ts">createProperty</a>(eventName, { ...params }) -> BaseProperty</code>
- <code title="delete /events/2026-03/event-definitions/{eventName}/property/{propertyName}">client.events.definitions.<a href="./src/resources/events/definitions.ts">deleteProperty</a>(propertyName, { ...params }) -> void</code>
- <code title="get /events/2026-03/event-definitions/{eventName}">client.events.definitions.<a href="./src/resources/events/definitions.ts">get</a>(eventName) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="post /events/2026-03/send/batch">client.events.definitions.<a href="./src/resources/events/definitions.ts">sendBatch</a>({ ...params }) -> void</code>
- <code title="patch /events/2026-03/event-definitions/{eventName}/property/{propertyName}">client.events.definitions.<a href="./src/resources/events/definitions.ts">updateProperty</a>(propertyName, { ...params }) -> BaseProperty</code>

## Occurrences

Types:

- <code><a href="./src/resources/events/occurrences.ts">CollectionResponseExternalUnifiedEvent</a></code>
- <code><a href="./src/resources/events/occurrences.ts">ExternalUnifiedEvent</a></code>
- <code><a href="./src/resources/events/occurrences.ts">VisibleExternalEventTypeNames</a></code>

Methods:

- <code title="get /events/event-occurrences/2026-03">client.events.occurrences.<a href="./src/resources/events/occurrences.ts">list</a>({ ...params }) -> ExternalUnifiedEventsPage</code>
- <code title="get /events/event-occurrences/2026-03/event-types">client.events.occurrences.<a href="./src/resources/events/occurrences.ts">listEventTypes</a>() -> VisibleExternalEventTypeNames</code>

## Send

Methods:

- <code title="post /events/2026-03/send/batch">client.events.send.<a href="./src/resources/events/send.ts">batchSend</a>({ ...params }) -> void</code>
- <code title="post /events/2026-03/send">client.events.send.<a href="./src/resources/events/send.ts">send</a>({ ...params }) -> void</code>
