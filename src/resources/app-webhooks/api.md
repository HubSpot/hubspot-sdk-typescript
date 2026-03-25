# AppWebhooks

Types:

- <code><a href="./src/resources/app-webhooks.ts">BatchInputSubscriptionBatchUpdateRequest</a></code>
- <code><a href="./src/resources/app-webhooks.ts">BatchResponseSubscriptionResponse</a></code>
- <code><a href="./src/resources/app-webhooks.ts">SettingsChangeRequest</a></code>
- <code><a href="./src/resources/app-webhooks.ts">SettingsResponse</a></code>
- <code><a href="./src/resources/app-webhooks.ts">SubscriptionBatchUpdateRequest</a></code>
- <code><a href="./src/resources/app-webhooks.ts">SubscriptionCreateRequest</a></code>
- <code><a href="./src/resources/app-webhooks.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/app-webhooks.ts">SubscriptionPatchRequest</a></code>
- <code><a href="./src/resources/app-webhooks.ts">SubscriptionResponse</a></code>
- <code><a href="./src/resources/app-webhooks.ts">ThrottlingSettings</a></code>

Methods:

- <code title="post /app-webhooks/2026-03/{appId}/subscriptions/batch/update">client.appWebhooks.<a href="./src/resources/app-webhooks.ts">batchUpdateSubscriptions</a>(appID, { ...params }) -> BatchResponseSubscriptionResponse</code>
- <code title="post /app-webhooks/2026-03/{appId}/subscriptions">client.appWebhooks.<a href="./src/resources/app-webhooks.ts">createSubscription</a>(appID, { ...params }) -> SubscriptionResponse</code>
- <code title="delete /app-webhooks/2026-03/{appId}/settings">client.appWebhooks.<a href="./src/resources/app-webhooks.ts">deleteSettings</a>(appID) -> void</code>
- <code title="delete /app-webhooks/2026-03/{appId}/subscriptions/{subscriptionId}">client.appWebhooks.<a href="./src/resources/app-webhooks.ts">deleteSubscription</a>(subscriptionID, { ...params }) -> void</code>
- <code title="get /app-webhooks/2026-03/{appId}/settings">client.appWebhooks.<a href="./src/resources/app-webhooks.ts">getSettings</a>(appID) -> SettingsResponse</code>
- <code title="get /app-webhooks/2026-03/{appId}/subscriptions/{subscriptionId}">client.appWebhooks.<a href="./src/resources/app-webhooks.ts">getSubscription</a>(subscriptionID, { ...params }) -> SubscriptionResponse</code>
- <code title="get /app-webhooks/2026-03/{appId}/subscriptions">client.appWebhooks.<a href="./src/resources/app-webhooks.ts">listSubscriptions</a>(appID) -> SubscriptionListResponse</code>
- <code title="put /app-webhooks/2026-03/{appId}/settings">client.appWebhooks.<a href="./src/resources/app-webhooks.ts">updateSettings</a>(appID, { ...params }) -> SettingsResponse</code>
- <code title="patch /app-webhooks/2026-03/{appId}/subscriptions/{subscriptionId}">client.appWebhooks.<a href="./src/resources/app-webhooks.ts">updateSubscription</a>(subscriptionID, { ...params }) -> SubscriptionResponse</code>
