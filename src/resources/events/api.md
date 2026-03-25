# Events

## Send

Types:

- <code><a href="./src/resources/events/send.ts">AbsoluteComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/send.ts">AbsoluteRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/send.ts">AllHistoryRefineBy</a></code>
- <code><a href="./src/resources/events/send.ts">AllPropertyTypesOperation</a></code>
- <code><a href="./src/resources/events/send.ts">AssociationDefinition</a></code>
- <code><a href="./src/resources/events/send.ts">BatchedBehavioralEventHTTPCompletionRequest</a></code>
- <code><a href="./src/resources/events/send.ts">BehavioralEventHTTPCompletionRequest</a></code>
- <code><a href="./src/resources/events/send.ts">BehavioralEventTypeDefinitionLabels</a></code>
- <code><a href="./src/resources/events/send.ts">BoolPropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">CalendarDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">CollectionResponseWithTotalExternalBehavioralEventTypeDefinition</a></code>
- <code><a href="./src/resources/events/send.ts">ComboEventRule</a></code>
- <code><a href="./src/resources/events/send.ts">ComboEventRuleBranch</a></code>
- <code><a href="./src/resources/events/send.ts">ComparativeBoolPropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">ComparativeDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">ComparativeNumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">ComparativePropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/events/send.ts">ComparativeStringPropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">DatePoint</a></code>
- <code><a href="./src/resources/events/send.ts">DatePropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">DateTimePropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">EnumerationPropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">ExternalBehavioralEventPropertyCreate</a></code>
- <code><a href="./src/resources/events/send.ts">ExternalBehavioralEventPropertyDefinitionPatch</a></code>
- <code><a href="./src/resources/events/send.ts">ExternalBehavioralEventTypeDefinition</a></code>
- <code><a href="./src/resources/events/send.ts">ExternalBehavioralEventTypeDefinitionEgg</a></code>
- <code><a href="./src/resources/events/send.ts">ExternalBehavioralEventTypeDefinitionPatch</a></code>
- <code><a href="./src/resources/events/send.ts">ExternalObjectResolutionMappingRequest</a></code>
- <code><a href="./src/resources/events/send.ts">ExternalObjectResolutionMappingResponse</a></code>
- <code><a href="./src/resources/events/send.ts">ExternalPrimaryObjectResolutionRule</a></code>
- <code><a href="./src/resources/events/send.ts">FiscalQuarter</a></code>
- <code><a href="./src/resources/events/send.ts">FiscalYear</a></code>
- <code><a href="./src/resources/events/send.ts">IndexOffset</a></code>
- <code><a href="./src/resources/events/send.ts">IndexedTimePoint</a></code>
- <code><a href="./src/resources/events/send.ts">MonthReference</a></code>
- <code><a href="./src/resources/events/send.ts">MultiStringPropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">NowReference</a></code>
- <code><a href="./src/resources/events/send.ts">NumOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/events/send.ts">NumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">Option</a></code>
- <code><a href="./src/resources/events/send.ts">OptionInput</a></code>
- <code><a href="./src/resources/events/send.ts">Property</a></code>
- <code><a href="./src/resources/events/send.ts">PropertyFilter</a></code>
- <code><a href="./src/resources/events/send.ts">PropertyFilterContext</a></code>
- <code><a href="./src/resources/events/send.ts">PropertyModificationMetadata</a></code>
- <code><a href="./src/resources/events/send.ts">PropertyReferencedTime</a></code>
- <code><a href="./src/resources/events/send.ts">QuarterReference</a></code>
- <code><a href="./src/resources/events/send.ts">RangedDatePropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">RangedNumberPropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">RangedTimeOperation</a></code>
- <code><a href="./src/resources/events/send.ts">RegexPropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">RelativeComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/send.ts">RelativeRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/events/send.ts">RollingDateRangePropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">RollingPropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/events/send.ts">SetOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/events/send.ts">StringPropertyOperation</a></code>
- <code><a href="./src/resources/events/send.ts">TimeOffset</a></code>
- <code><a href="./src/resources/events/send.ts">TimePointOperation</a></code>
- <code><a href="./src/resources/events/send.ts">TodayReference</a></code>
- <code><a href="./src/resources/events/send.ts">WeekReference</a></code>
- <code><a href="./src/resources/events/send.ts">YearReference</a></code>

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
