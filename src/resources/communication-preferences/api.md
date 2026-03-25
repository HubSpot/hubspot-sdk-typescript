# CommunicationPreferences

Types:

- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">ActionResponseWithResultsPublicStatus</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">ActionResponseWithResultsPublicWideStatus</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">ActionResponseWithResultsSubscriptionDefinition</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">BatchInputPublicStatusRequest</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">BatchResponsePublicBulkOptOutFromAllResponse</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">BatchResponsePublicStatus</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">BatchResponsePublicStatusBulkResponse</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">BatchResponsePublicWideStatusBulkResponse</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">LinkGenerationRequest</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">LinkGenerationResponse</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PartialPublicStatusRequest</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PublicBulkOptOutFromAllResponse</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PublicStatus</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PublicStatusBulkResponse</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PublicStatusRequest</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PublicSubscriptionStatus</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PublicSubscriptionStatusesResponse</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PublicSubscriptionTranslation</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PublicUpdateSubscriptionStatusRequest</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PublicWideStatus</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">PublicWideStatusBulkResponse</a></code>
- <code><a href="./src/resources/communication-preferences/communication-preferences.ts">SubscriptionDefinition</a></code>

Methods:

- <code title="post /communication-preferences/2026-03/links/generate">client.communicationPreferences.<a href="./src/resources/communication-preferences/communication-preferences.ts">generateLinks</a>({ ...params }) -> LinkGenerationResponse</code>
- <code title="get /communication-preferences/2026-03/status/email/{emailAddress}">client.communicationPreferences.<a href="./src/resources/communication-preferences/communication-preferences.ts">getStatusByEmail</a>(emailAddress) -> PublicSubscriptionStatusesResponse</code>
- <code title="get /communication-preferences/2026-03/statuses/{subscriberIdString}">client.communicationPreferences.<a href="./src/resources/communication-preferences/communication-preferences.ts">getStatuses</a>(subscriberIDString, { ...params }) -> ActionResponseWithResultsPublicStatus</code>
- <code title="get /communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all">client.communicationPreferences.<a href="./src/resources/communication-preferences/communication-preferences.ts">getUnsubscribeAllStatus</a>(subscriberIDString, { ...params }) -> ActionResponseWithResultsPublicWideStatus</code>
- <code title="post /communication-preferences/2026-03/subscribe">client.communicationPreferences.<a href="./src/resources/communication-preferences/communication-preferences.ts">subscribe</a>({ ...params }) -> PublicSubscriptionStatus</code>
- <code title="post /communication-preferences/2026-03/unsubscribe">client.communicationPreferences.<a href="./src/resources/communication-preferences/communication-preferences.ts">unsubscribe</a>({ ...params }) -> PublicSubscriptionStatus</code>
- <code title="post /communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all">client.communicationPreferences.<a href="./src/resources/communication-preferences/communication-preferences.ts">unsubscribeAll</a>(subscriberIDString, { ...params }) -> ActionResponseWithResultsPublicStatus</code>
- <code title="post /communication-preferences/2026-03/statuses/{subscriberIdString}">client.communicationPreferences.<a href="./src/resources/communication-preferences/communication-preferences.ts">updateStatus</a>(subscriberIDString, { ...params }) -> ActionResponseWithResultsPublicStatus</code>

## Definitions

Methods:

- <code title="get /communication-preferences/2026-03/definitions">client.communicationPreferences.definitions.<a href="./src/resources/communication-preferences/definitions.ts">list</a>({ ...params }) -> ActionResponseWithResultsSubscriptionDefinition</code>

## Statuses

### Batch

Methods:

- <code title="post /communication-preferences/2026-03/statuses/batch/unsubscribe-all/read">client.communicationPreferences.statuses.batch.<a href="./src/resources/communication-preferences/statuses/batch.ts">getUnsubscribeAllStatuses</a>({ ...params }) -> BatchResponsePublicWideStatusBulkResponse</code>
- <code title="post /communication-preferences/2026-03/statuses/batch/read">client.communicationPreferences.statuses.batch.<a href="./src/resources/communication-preferences/statuses/batch.ts">read</a>({ ...params }) -> BatchResponsePublicStatusBulkResponse</code>
- <code title="post /communication-preferences/2026-03/statuses/batch/unsubscribe-all">client.communicationPreferences.statuses.batch.<a href="./src/resources/communication-preferences/statuses/batch.ts">unsubscribeAll</a>({ ...params }) -> BatchResponsePublicBulkOptOutFromAllResponse</code>
- <code title="post /communication-preferences/2026-03/statuses/batch/write">client.communicationPreferences.statuses.batch.<a href="./src/resources/communication-preferences/statuses/batch.ts">updateStatuses</a>({ ...params }) -> BatchResponsePublicStatus</code>
