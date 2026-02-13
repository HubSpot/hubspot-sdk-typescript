# Webhooks

Types:

- <code><a href="./src/resources/webhooks/webhooks.ts">BatchInputSubscriptionBatchUpdateRequest</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">BatchResponseSubscriptionResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">BatchResponseSubscriptionResponseWithErrors</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">SettingsChangeRequest</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">SettingsResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">SubscriptionBatchUpdateRequest</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">SubscriptionCreateRequest</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">SubscriptionPatchRequest</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">SubscriptionResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">ThrottlingSettings</a></code>

## Settings

Methods:

- <code title="put /webhooks/v3/{appId}/settings">client.webhooks.settings.<a href="./src/resources/webhooks/settings.ts">update</a>(appID, { ...params }) -> SettingsResponse</code>
- <code title="get /webhooks/v3/{appId}/settings">client.webhooks.settings.<a href="./src/resources/webhooks/settings.ts">list</a>(appID) -> SettingsResponse</code>
- <code title="delete /webhooks/v3/{appId}/settings">client.webhooks.settings.<a href="./src/resources/webhooks/settings.ts">delete</a>(appID) -> void</code>

## Subscriptions

Methods:

- <code title="post /webhooks/v3/{appId}/subscriptions">client.webhooks.subscriptions.<a href="./src/resources/webhooks/subscriptions.ts">create</a>(appID, { ...params }) -> SubscriptionResponse</code>
- <code title="patch /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.subscriptions.<a href="./src/resources/webhooks/subscriptions.ts">update</a>(subscriptionID, { ...params }) -> SubscriptionResponse</code>
- <code title="get /webhooks/v3/{appId}/subscriptions">client.webhooks.subscriptions.<a href="./src/resources/webhooks/subscriptions.ts">list</a>(appID) -> SubscriptionListResponse</code>
- <code title="delete /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.subscriptions.<a href="./src/resources/webhooks/subscriptions.ts">delete</a>(subscriptionID, { ...params }) -> void</code>
- <code title="get /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.subscriptions.<a href="./src/resources/webhooks/subscriptions.ts">get</a>(subscriptionID, { ...params }) -> SubscriptionResponse</code>
- <code title="post /webhooks/v3/{appId}/subscriptions/batch/update">client.webhooks.subscriptions.<a href="./src/resources/webhooks/subscriptions.ts">updateBatch</a>(appID, { ...params }) -> BatchResponseSubscriptionResponse</code>
