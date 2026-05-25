# WebhooksJournal

Types:

- <code><a href="./src/resources/webhooks-journal/webhooks-journal.ts">CollectionResponseSubscriptionResponseNoPaging</a></code>
- <code><a href="./src/resources/webhooks-journal/webhooks-journal.ts">SubscriptionResponse</a></code>

## Journal

Methods:

- <code title="get /webhooks-journal/journal/2026-03/earliest">client.webhooksJournal.journal.<a href="./src/resources/webhooks-journal/journal/journal.ts">getEarliest</a>({ ...params }) -> Response</code>
- <code title="get /webhooks-journal/journal/2026-03/offset/{offset}/next">client.webhooksJournal.journal.<a href="./src/resources/webhooks-journal/journal/journal.ts">getNextFromOffset</a>(offset, { ...params }) -> Response</code>
- <code title="get /webhooks-journal/journal/2026-03/status/{statusId}">client.webhooksJournal.journal.<a href="./src/resources/webhooks-journal/journal/journal.ts">getStatus</a>(statusID) -> SnapshotStatusResponse</code>

### Batch

Methods:

- <code title="post /webhooks-journal/journal/2026-03/batch/read">client.webhooksJournal.journal.batch.<a href="./src/resources/webhooks-journal/journal/batch.ts">get</a>({ ...params }) -> BatchResponseJournalFetchResponse</code>
- <code title="get /webhooks-journal/journal/2026-03/batch/earliest/{count}">client.webhooksJournal.journal.batch.<a href="./src/resources/webhooks-journal/journal/batch.ts">getEarliest</a>(count, { ...params }) -> BatchResponseJournalFetchResponse</code>
- <code title="get /webhooks-journal/journal/2026-03/batch/{offset}/next/{count}">client.webhooksJournal.journal.batch.<a href="./src/resources/webhooks-journal/journal/batch.ts">getFromOffset</a>(count, { ...params }) -> BatchResponseJournalFetchResponse</code>
- <code title="get /webhooks-journal/journal/2026-03/batch/latest/{count}">client.webhooksJournal.journal.batch.<a href="./src/resources/webhooks-journal/journal/batch.ts">getLatest</a>(count, { ...params }) -> BatchResponseJournalFetchResponse</code>

## JournalLocal

Methods:

- <code title="get /webhooks-journal/journal-local/2026-03/earliest">client.webhooksJournal.journalLocal.<a href="./src/resources/webhooks-journal/journal-local/journal-local.ts">getEarliest</a>({ ...params }) -> Response</code>
- <code title="get /webhooks-journal/journal/2026-03/latest">client.webhooksJournal.journalLocal.<a href="./src/resources/webhooks-journal/journal-local/journal-local.ts">getLatest</a>({ ...params }) -> Response</code>
- <code title="get /webhooks-journal/journal-local/2026-03/offset/{offset}/next">client.webhooksJournal.journalLocal.<a href="./src/resources/webhooks-journal/journal-local/journal-local.ts">getNextFromOffset</a>(offset, { ...params }) -> Response</code>
- <code title="get /webhooks-journal/journal-local/2026-03/status/{statusId}">client.webhooksJournal.journalLocal.<a href="./src/resources/webhooks-journal/journal-local/journal-local.ts">getStatus</a>(statusID) -> SnapshotStatusResponse</code>

### Batch

Methods:

- <code title="post /webhooks-journal/journal-local/2026-03/batch/read">client.webhooksJournal.journalLocal.batch.<a href="./src/resources/webhooks-journal/journal-local/batch.ts">get</a>({ ...params }) -> BatchResponseJournalFetchResponse</code>
- <code title="get /webhooks-journal/journal-local/2026-03/batch/earliest/{count}">client.webhooksJournal.journalLocal.batch.<a href="./src/resources/webhooks-journal/journal-local/batch.ts">getEarliest</a>(count, { ...params }) -> BatchResponseJournalFetchResponse</code>
- <code title="get /webhooks-journal/journal-local/2026-03/batch/{offset}/next/{count}">client.webhooksJournal.journalLocal.batch.<a href="./src/resources/webhooks-journal/journal-local/batch.ts">getFromOffset</a>(count, { ...params }) -> BatchResponseJournalFetchResponse</code>

## Snapshots

Methods:

- <code title="post /webhooks-journal/snapshots/2026-03/crm">client.webhooksJournal.snapshots.<a href="./src/resources/webhooks-journal/snapshots.ts">create</a>({ ...params }) -> CrmObjectSnapshotBatchResponse</code>

## Subscriptions

Methods:

- <code title="post /webhooks-journal/subscriptions/2026-03">client.webhooksJournal.subscriptions.<a href="./src/resources/webhooks-journal/subscriptions/subscriptions.ts">create</a>({ ...params }) -> SubscriptionResponse</code>
- <code title="get /webhooks-journal/subscriptions/2026-03">client.webhooksJournal.subscriptions.<a href="./src/resources/webhooks-journal/subscriptions/subscriptions.ts">list</a>() -> CollectionResponseSubscriptionResponseNoPaging</code>
- <code title="delete /webhooks-journal/subscriptions/2026-03/{subscriptionId}">client.webhooksJournal.subscriptions.<a href="./src/resources/webhooks-journal/subscriptions/subscriptions.ts">delete</a>(subscriptionID) -> void</code>
- <code title="delete /webhooks-journal/subscriptions/2026-03/portals/{portalId}">client.webhooksJournal.subscriptions.<a href="./src/resources/webhooks-journal/subscriptions/subscriptions.ts">deleteForPortal</a>(portalID) -> void</code>
- <code title="get /webhooks-journal/subscriptions/2026-03/{subscriptionId}">client.webhooksJournal.subscriptions.<a href="./src/resources/webhooks-journal/subscriptions/subscriptions.ts">get</a>(subscriptionID) -> SubscriptionResponse</code>

### Filters

Types:

- <code><a href="./src/resources/webhooks-journal/subscriptions/filters.ts">FilterListResponse</a></code>

Methods:

- <code title="post /webhooks-journal/subscriptions/2026-03/filters">client.webhooksJournal.subscriptions.filters.<a href="./src/resources/webhooks-journal/subscriptions/filters.ts">create</a>({ ...params }) -> FilterCreateResponse</code>
- <code title="get /webhooks-journal/subscriptions/2026-03/filters/subscription/{subscriptionId}">client.webhooksJournal.subscriptions.filters.<a href="./src/resources/webhooks-journal/subscriptions/filters.ts">list</a>(subscriptionID) -> FilterListResponse</code>
- <code title="delete /webhooks-journal/subscriptions/2026-03/filters/{filterId}">client.webhooksJournal.subscriptions.filters.<a href="./src/resources/webhooks-journal/subscriptions/filters.ts">delete</a>(filterID) -> void</code>
- <code title="get /webhooks-journal/subscriptions/2026-03/filters/{filterId}">client.webhooksJournal.subscriptions.filters.<a href="./src/resources/webhooks-journal/subscriptions/filters.ts">get</a>(filterID) -> FilterResponse</code>
