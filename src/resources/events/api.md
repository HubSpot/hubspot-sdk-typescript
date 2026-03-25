# Events

Types:

- <code><a href="./src/resources/events/events.ts">AbsoluteComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/events.ts">AbsoluteRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/events.ts">AllHistoryRefineBy</a></code>
- <code><a href="./src/resources/events/events.ts">AllPropertyTypesOperation</a></code>
- <code><a href="./src/resources/events/events.ts">AssociationDefinition</a></code>
- <code><a href="./src/resources/events/events.ts">BatchedBehavioralEventHTTPCompletionRequest</a></code>
- <code><a href="./src/resources/events/events.ts">BehavioralEventHTTPCompletionRequest</a></code>
- <code><a href="./src/resources/events/events.ts">BehavioralEventTypeDefinitionLabels</a></code>
- <code><a href="./src/resources/events/events.ts">BoolPropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">CalendarDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">CollectionResponseWithTotalExternalBehavioralEventTypeDefinition</a></code>
- <code><a href="./src/resources/events/events.ts">ComboEventRule</a></code>
- <code><a href="./src/resources/events/events.ts">ComboEventRuleBranch</a></code>
- <code><a href="./src/resources/events/events.ts">ComparativeBoolPropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">ComparativeDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">ComparativeNumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">ComparativePropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/events/events.ts">ComparativeStringPropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">DatePoint</a></code>
- <code><a href="./src/resources/events/events.ts">DatePropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">DateTimePropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">EnumerationPropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">ExternalBehavioralEventPropertyCreate</a></code>
- <code><a href="./src/resources/events/events.ts">ExternalBehavioralEventPropertyDefinitionPatch</a></code>
- <code><a href="./src/resources/events/events.ts">ExternalBehavioralEventTypeDefinition</a></code>
- <code><a href="./src/resources/events/events.ts">ExternalBehavioralEventTypeDefinitionEgg</a></code>
- <code><a href="./src/resources/events/events.ts">ExternalBehavioralEventTypeDefinitionPatch</a></code>
- <code><a href="./src/resources/events/events.ts">ExternalObjectResolutionMappingRequest</a></code>
- <code><a href="./src/resources/events/events.ts">ExternalObjectResolutionMappingResponse</a></code>
- <code><a href="./src/resources/events/events.ts">ExternalPrimaryObjectResolutionRule</a></code>
- <code><a href="./src/resources/events/events.ts">FiscalQuarter</a></code>
- <code><a href="./src/resources/events/events.ts">FiscalYear</a></code>
- <code><a href="./src/resources/events/events.ts">IndexOffset</a></code>
- <code><a href="./src/resources/events/events.ts">IndexedTimePoint</a></code>
- <code><a href="./src/resources/events/events.ts">MonthReference</a></code>
- <code><a href="./src/resources/events/events.ts">MultiStringPropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">NowReference</a></code>
- <code><a href="./src/resources/events/events.ts">NumOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/events/events.ts">NumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">PropertyFilter</a></code>
- <code><a href="./src/resources/events/events.ts">PropertyFilterContext</a></code>
- <code><a href="./src/resources/events/events.ts">PropertyReferencedTime</a></code>
- <code><a href="./src/resources/events/events.ts">QuarterReference</a></code>
- <code><a href="./src/resources/events/events.ts">RangedDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">RangedNumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">RangedTimeOperation</a></code>
- <code><a href="./src/resources/events/events.ts">RegexPropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">RelativeComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/events.ts">RelativeRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/events.ts">RollingDateRangePropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">RollingPropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/events/events.ts">SetOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/events/events.ts">StringPropertyOperation</a></code>
- <code><a href="./src/resources/events/events.ts">TimeOffset</a></code>
- <code><a href="./src/resources/events/events.ts">TimePointOperation</a></code>
- <code><a href="./src/resources/events/events.ts">TodayReference</a></code>
- <code><a href="./src/resources/events/events.ts">WeekReference</a></code>
- <code><a href="./src/resources/events/events.ts">YearReference</a></code>

## Definitions

Methods:

- <code title="post /events/custom/2026-03/event-definitions">client.events.definitions.<a href="./src/resources/events/definitions.ts">create</a>({ ...params }) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="patch /events/custom/2026-03/event-definitions/{eventName}">client.events.definitions.<a href="./src/resources/events/definitions.ts">update</a>(eventName, { ...params }) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="get /events/custom/2026-03/event-definitions">client.events.definitions.<a href="./src/resources/events/definitions.ts">list</a>({ ...params }) -> ExternalBehavioralEventTypeDefinitionsPage</code>
- <code title="delete /events/custom/2026-03/event-definitions/{eventName}">client.events.definitions.<a href="./src/resources/events/definitions.ts">delete</a>(eventName) -> void</code>
- <code title="post /events/custom/2026-03/event-definitions/{eventName}/property">client.events.definitions.<a href="./src/resources/events/definitions.ts">createProperty</a>(eventName, { ...params }) -> Property</code>
- <code title="delete /events/custom/2026-03/event-definitions/{eventName}/property/{propertyName}">client.events.definitions.<a href="./src/resources/events/definitions.ts">deleteProperty</a>(propertyName, { ...params }) -> void</code>
- <code title="get /events/custom/2026-03/event-definitions/{eventName}">client.events.definitions.<a href="./src/resources/events/definitions.ts">get</a>(eventName) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="post /events/custom/2026-03/send">client.events.definitions.<a href="./src/resources/events/definitions.ts">send</a>({ ...params }) -> void</code>
- <code title="post /events/custom/2026-03/send/batch">client.events.definitions.<a href="./src/resources/events/definitions.ts">sendBatch</a>({ ...params }) -> void</code>
- <code title="patch /events/custom/2026-03/event-definitions/{eventName}/property/{propertyName}">client.events.definitions.<a href="./src/resources/events/definitions.ts">updateProperty</a>(propertyName, { ...params }) -> Property</code>

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

- <code title="post /events/custom/2026-03/event-definitions">client.events.send.<a href="./src/resources/events/send.ts">createEventDefinition</a>({ ...params }) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="post /events/custom/2026-03/event-definitions/{eventName}/property">client.events.send.<a href="./src/resources/events/send.ts">createEventDefinitionProperty</a>(eventName, { ...params }) -> Property</code>
- <code title="delete /events/custom/2026-03/event-definitions/{eventName}">client.events.send.<a href="./src/resources/events/send.ts">deleteEventDefinition</a>(eventName) -> void</code>
- <code title="delete /events/custom/2026-03/event-definitions/{eventName}/property/{propertyName}">client.events.send.<a href="./src/resources/events/send.ts">deleteEventDefinitionProperty</a>(propertyName, { ...params }) -> void</code>
- <code title="get /events/custom/2026-03/event-definitions/{eventName}">client.events.send.<a href="./src/resources/events/send.ts">getEventDefinition</a>(eventName) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="get /events/custom/2026-03/event-definitions">client.events.send.<a href="./src/resources/events/send.ts">listEventDefinitions</a>({ ...params }) -> ExternalBehavioralEventTypeDefinitionsPage</code>
- <code title="post /events/custom/2026-03/send">client.events.send.<a href="./src/resources/events/send.ts">sendEvent</a>({ ...params }) -> void</code>
- <code title="post /events/custom/2026-03/send/batch">client.events.send.<a href="./src/resources/events/send.ts">sendEventBatch</a>({ ...params }) -> void</code>
- <code title="patch /events/custom/2026-03/event-definitions/{eventName}">client.events.send.<a href="./src/resources/events/send.ts">updateEventDefinition</a>(eventName, { ...params }) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="patch /events/custom/2026-03/event-definitions/{eventName}/property/{propertyName}">client.events.send.<a href="./src/resources/events/send.ts">updateEventDefinitionProperty</a>(propertyName, { ...params }) -> Property</code>
