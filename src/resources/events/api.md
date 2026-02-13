# Events

Types:

- <code><a href="./src/resources/events/events.ts">CollectionResponseExternalUnifiedEvent</a></code>
- <code><a href="./src/resources/events/events.ts">ExternalUnifiedEvent</a></code>
- <code><a href="./src/resources/events/events.ts">VisibleExternalEventTypeNames</a></code>

Methods:

- <code title="get /events/v3/events/">client.events.<a href="./src/resources/events/events.ts">list</a>({ ...params }) -> ExternalUnifiedEventsPage</code>
- <code title="get /events/v3/events/event-types">client.events.<a href="./src/resources/events/events.ts">listEventTypes</a>() -> VisibleExternalEventTypeNames</code>

## EventDefinitions

Types:

- <code><a href="./src/resources/events/event-definitions.ts">AbsoluteComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">AbsoluteRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">AllHistoryRefineBy</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">AllPropertyTypesOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">AssociationDefinition</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">BehavioralEventTypeDefinitionLabels</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">BoolPropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">CalendarDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">CollectionResponseWithTotalExternalBehavioralEventTypeDefinitionForwardPaging</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">ComboEventRule</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">ComboEventRuleBranch</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">ComparativeDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">ComparativePropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">DatePoint</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">DatePropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">DateTimePropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">EnumerationPropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">ExternalBehavioralEventPropertyCreate</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">ExternalBehavioralEventPropertyDefinitionPatch</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">ExternalBehavioralEventTypeDefinition</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">ExternalBehavioralEventTypeDefinitionEgg</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">ExternalBehavioralEventTypeDefinitionPatch</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">FiscalQuarter</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">FiscalYear</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">IndexOffset</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">IndexedTimePoint</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">MonthReference</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">MultiStringPropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">NowReference</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">NumOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">NumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">PropertyFilter</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">PropertyReferencedTime</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">QuarterReference</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">RangedDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">RangedNumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">RangedTimeOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">RelativeComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">RelativeRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">RollingDateRangePropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">RollingPropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">SetOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">StringPropertyOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">TimeOffset</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">TimePointOperation</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">TodayReference</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">WeekReference</a></code>
- <code><a href="./src/resources/events/event-definitions.ts">YearReference</a></code>

Methods:

- <code title="post /events/v3/event-definitions">client.events.eventDefinitions.<a href="./src/resources/events/event-definitions.ts">create</a>({ ...params }) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="patch /events/v3/event-definitions/{eventName}">client.events.eventDefinitions.<a href="./src/resources/events/event-definitions.ts">update</a>(eventName, { ...params }) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="get /events/v3/event-definitions">client.events.eventDefinitions.<a href="./src/resources/events/event-definitions.ts">list</a>({ ...params }) -> ExternalBehavioralEventTypeDefinitionsPage</code>
- <code title="delete /events/v3/event-definitions/{eventName}">client.events.eventDefinitions.<a href="./src/resources/events/event-definitions.ts">delete</a>(eventName) -> void</code>
- <code title="post /events/v3/event-definitions/{eventName}/property">client.events.eventDefinitions.<a href="./src/resources/events/event-definitions.ts">createProperty</a>(eventName, { ...params }) -> Property</code>
- <code title="delete /events/v3/event-definitions/{eventName}/property/{propertyName}">client.events.eventDefinitions.<a href="./src/resources/events/event-definitions.ts">deleteProperty</a>(propertyName, { ...params }) -> void</code>
- <code title="get /events/v3/event-definitions/{eventName}">client.events.eventDefinitions.<a href="./src/resources/events/event-definitions.ts">get</a>(eventName) -> ExternalBehavioralEventTypeDefinition</code>
- <code title="patch /events/v3/event-definitions/{eventName}/property/{propertyName}">client.events.eventDefinitions.<a href="./src/resources/events/event-definitions.ts">updateProperty</a>(propertyName, { ...params }) -> Property</code>

## Send

Types:

- <code><a href="./src/resources/events/send.ts">BatchedBehavioralEventHTTPCompletionRequest</a></code>
- <code><a href="./src/resources/events/send.ts">BehavioralEventHTTPCompletionRequest</a></code>

Methods:

- <code title="post /events/v3/send">client.events.send.<a href="./src/resources/events/send.ts">send</a>({ ...params }) -> void</code>
- <code title="post /events/v3/send/batch">client.events.send.<a href="./src/resources/events/send.ts">sendBatch</a>({ ...params }) -> void</code>
