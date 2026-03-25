# Marketing

## Campaigns

Types:

- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchInputPublicCampaignBatchUpdateItem</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchInputPublicCampaignDeleteInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchInputPublicCampaignInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchInputPublicCampaignReadInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchResponsePublicCampaign</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchResponsePublicCampaignWithAssets</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">CollectionResponseContactReferenceForwardPaging</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">CollectionResponsePublicCampaignAsset</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">CollectionResponsePublicCampaignAssetForwardPaging</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">CollectionResponseWithTotalPublicCampaign</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">ContactReference</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">MetricsCounters</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicBudgetItem</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicBudgetItemInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicBudgetTotals</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicBusinessUnit</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicCampaign</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicCampaignAsset</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicCampaignBatchUpdateItem</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicCampaignDeleteInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicCampaignInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicCampaignReadInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicCampaignWithAssets</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicSpendItem</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">PublicSpendItemInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">RevenueAttributionAggregate</a></code>

Methods:

- <code title="patch /marketing/campaigns/2026-03/{campaignGuid}">client.marketing.campaigns.<a href="./src/resources/marketing/campaigns/campaigns.ts">update</a>(campaignGuid, { ...params }) -> PublicCampaign</code>
- <code title="delete /marketing/campaigns/2026-03/{campaignGuid}">client.marketing.campaigns.<a href="./src/resources/marketing/campaigns/campaigns.ts">delete</a>(campaignGuid) -> void</code>
- <code title="get /marketing/campaigns/2026-03/{campaignGuid}">client.marketing.campaigns.<a href="./src/resources/marketing/campaigns/campaigns.ts">get</a>(campaignGuid, { ...params }) -> PublicCampaignWithAssets</code>

### Assets

Methods:

- <code title="put /marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}">client.marketing.campaigns.assets.<a href="./src/resources/marketing/campaigns/assets.ts">update</a>(assetID, { ...params }) -> void</code>
- <code title="get /marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}">client.marketing.campaigns.assets.<a href="./src/resources/marketing/campaigns/assets.ts">list</a>(assetType, { ...params }) -> CollectionResponsePublicCampaignAssetForwardPaging</code>
- <code title="delete /marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}">client.marketing.campaigns.assets.<a href="./src/resources/marketing/campaigns/assets.ts">delete</a>(assetID, { ...params }) -> void</code>

### Batch

Methods:

- <code title="post /marketing/campaigns/2026-03/batch/create">client.marketing.campaigns.batch.<a href="./src/resources/marketing/campaigns/batch.ts">create</a>({ ...params }) -> BatchResponsePublicCampaign</code>
- <code title="post /marketing/campaigns/2026-03/batch/update">client.marketing.campaigns.batch.<a href="./src/resources/marketing/campaigns/batch.ts">update</a>({ ...params }) -> BatchResponsePublicCampaign</code>
- <code title="post /marketing/campaigns/2026-03/batch/archive">client.marketing.campaigns.batch.<a href="./src/resources/marketing/campaigns/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /marketing/campaigns/2026-03/batch/read">client.marketing.campaigns.batch.<a href="./src/resources/marketing/campaigns/batch.ts">get</a>({ ...params }) -> BatchResponsePublicCampaignWithAssets</code>

### Budget

Methods:

- <code title="post /marketing/campaigns/2026-03/{campaignGuid}/budget">client.marketing.campaigns.budget.<a href="./src/resources/marketing/campaigns/budget.ts">create</a>(campaignGuid, { ...params }) -> PublicBudgetItem</code>
- <code title="put /marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">client.marketing.campaigns.budget.<a href="./src/resources/marketing/campaigns/budget.ts">update</a>(budgetID, { ...params }) -> PublicBudgetItem</code>
- <code title="delete /marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">client.marketing.campaigns.budget.<a href="./src/resources/marketing/campaigns/budget.ts">delete</a>(budgetID, { ...params }) -> void</code>
- <code title="get /marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">client.marketing.campaigns.budget.<a href="./src/resources/marketing/campaigns/budget.ts">get</a>(budgetID, { ...params }) -> PublicBudgetItem</code>
- <code title="get /marketing/campaigns/2026-03/{campaignGuid}/budget/totals">client.marketing.campaigns.budget.<a href="./src/resources/marketing/campaigns/budget.ts">getTotals</a>(campaignGuid) -> PublicBudgetTotals</code>

### Metrics

Methods:

- <code title="get /marketing/campaigns/2026-03/{campaignGuid}/reports/metrics">client.marketing.campaigns.metrics.<a href="./src/resources/marketing/campaigns/metrics.ts">getAttributionMetrics</a>(campaignGuid, { ...params }) -> MetricsCounters</code>
- <code title="get /marketing/campaigns/2026-03/{campaignGuid}/reports/revenue">client.marketing.campaigns.metrics.<a href="./src/resources/marketing/campaigns/metrics.ts">getRevenueAttribution</a>(campaignGuid, { ...params }) -> RevenueAttributionAggregate</code>
- <code title="get /marketing/campaigns/2026-03/{campaignGuid}/reports/contacts/{contactType}">client.marketing.campaigns.metrics.<a href="./src/resources/marketing/campaigns/metrics.ts">listContactIDsByType</a>(contactType, { ...params }) -> ContactReferencesPage</code>

### Spend

Methods:

- <code title="post /marketing/campaigns/2026-03/{campaignGuid}/spend">client.marketing.campaigns.spend.<a href="./src/resources/marketing/campaigns/spend.ts">create</a>(campaignGuid, { ...params }) -> PublicSpendItem</code>
- <code title="put /marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">client.marketing.campaigns.spend.<a href="./src/resources/marketing/campaigns/spend.ts">update</a>(spendID, { ...params }) -> PublicSpendItem</code>
- <code title="delete /marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">client.marketing.campaigns.spend.<a href="./src/resources/marketing/campaigns/spend.ts">delete</a>(spendID, { ...params }) -> void</code>
- <code title="get /marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">client.marketing.campaigns.spend.<a href="./src/resources/marketing/campaigns/spend.ts">get</a>(spendID, { ...params }) -> PublicSpendItem</code>

## Emails

Types:

- <code><a href="./src/resources/marketing/emails.ts">AbTestCreateRequestVNext</a></code>
- <code><a href="./src/resources/marketing/emails.ts">AggregateEmailStatistics</a></code>
- <code><a href="./src/resources/marketing/emails.ts">CollectionResponseWithTotalEmailStatisticInterval</a></code>
- <code><a href="./src/resources/marketing/emails.ts">CollectionResponseWithTotalPublicEmail</a></code>
- <code><a href="./src/resources/marketing/emails.ts">CollectionResponseWithTotalPublicEmailVersion</a></code>
- <code><a href="./src/resources/marketing/emails.ts">EmailCloneRequestVNext</a></code>
- <code><a href="./src/resources/marketing/emails.ts">EmailCreateRequest</a></code>
- <code><a href="./src/resources/marketing/emails.ts">EmailStatisticInterval</a></code>
- <code><a href="./src/resources/marketing/emails.ts">EmailStatisticsData</a></code>
- <code><a href="./src/resources/marketing/emails.ts">EmailUpdateRequest</a></code>
- <code><a href="./src/resources/marketing/emails.ts">Interval</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicButtonStyleSettings</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicDividerStyleSettings</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicEmail</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicEmailContent</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicEmailFromDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicEmailRecipients</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicEmailStyleSettings</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicEmailSubscriptionDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicEmailTestingDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicEmailToDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicEmailVersion</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicFontStyle</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicRssEmailDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicWebversionDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">SmartEmailField</a></code>
- <code><a href="./src/resources/marketing/emails.ts">VersionPublicEmail</a></code>

Methods:

- <code title="post /marketing/emails/2026-03">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">create</a>({ ...params }) -> PublicEmail</code>
- <code title="patch /marketing/emails/2026-03/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">update</a>(emailID, { ...params }) -> PublicEmail</code>
- <code title="get /marketing/emails/2026-03">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">list</a>({ ...params }) -> PublicEmailsPage</code>
- <code title="delete /marketing/emails/2026-03/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">delete</a>(emailID, { ...params }) -> void</code>
- <code title="post /marketing/emails/2026-03/clone">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">clone</a>({ ...params }) -> PublicEmail</code>
- <code title="post /marketing/emails/2026-03/ab-test/create-variation">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">createAbTestVariation</a>({ ...params }) -> PublicEmail</code>
- <code title="get /marketing/emails/2026-03/statistics/list">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">get</a>({ ...params }) -> AggregateEmailStatistics</code>
- <code title="get /marketing/emails/2026-03/{emailId}/ab-test/get-variation">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getAbTestVariation</a>(emailID, { ...params }) -> PublicEmail</code>
- <code title="get /marketing/emails/2026-03/{emailId}/draft">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getDraft</a>(emailID) -> PublicEmail</code>
- <code title="get /marketing/emails/2026-03/statistics/histogram">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getHistogram</a>({ ...params }) -> CollectionResponseWithTotalEmailStatisticInterval</code>
- <code title="get /marketing/emails/2026-03/{emailId}/revisions/{revisionId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getRevision</a>(revisionID, { ...params }) -> PublicEmailVersion</code>
- <code title="get /marketing/emails/2026-03/{emailId}/revisions">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">listRevisions</a>(emailID, { ...params }) -> VersionPublicEmailsPage</code>
- <code title="post /marketing/emails/2026-03/{emailId}/publish">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">publish</a>(emailID) -> void</code>
- <code title="post /marketing/emails/2026-03/{emailId}/draft/reset">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">resetDraft</a>(emailID) -> void</code>
- <code title="post /marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">restoreRevision</a>(revisionID, { ...params }) -> void</code>
- <code title="post /marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore-to-draft">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">restoreRevisionToDraft</a>(revisionID, { ...params }) -> PublicEmail</code>
- <code title="post /marketing/emails/2026-03/{emailId}/unpublish">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">unpublish</a>(emailID) -> void</code>
- <code title="patch /marketing/emails/2026-03/{emailId}/draft">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">updateDraft</a>(emailID, { ...params }) -> PublicEmail</code>

## Events

Types:

- <code><a href="./src/resources/marketing/events/events.ts">AppInfo</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">AttendanceCounters</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchInputMarketingEventCreateRequestParams</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchInputMarketingEventEmailSubscriber</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchInputMarketingEventExternalUniqueIdentifier</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchInputMarketingEventPublicObjectIDDeleteRequest</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchInputMarketingEventPublicUpdateRequestFullV2</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchInputMarketingEventSubscriber</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchResponseMarketingEventPublicDefaultResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchResponseMarketingEventPublicDefaultResponseV2</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchResponseSubscriberEmailResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchResponseSubscriberVidResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CollectionResponseSearchPublicResponseWrapperNoPaging</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CollectionResponseWithTotalMarketingEventIdentifiersResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CollectionResponseWithTotalParticipationBreakdown</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CollectionResponseWithTotalPublicList</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">ContactAssociation</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CrmPropertyWrapper</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">EventDetailSettings</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">EventDetailSettingsURL</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventAssociation</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventCompleteRequestParams</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventCreateRequestParams</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventDefaultResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventEmailSubscriber</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventExternalUniqueIdentifier</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventIdentifiersResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventPublicDefaultResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventPublicDefaultResponseV2</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventPublicObjectIDDeleteRequest</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventPublicReadResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventPublicReadResponseV2</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventPublicUpdateRequestFullV2</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventPublicUpdateRequestV2</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventSubscriber</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">MarketingEventUpdateRequestParams</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">ParticipationAssociations</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">ParticipationBreakdown</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">ParticipationProperties</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">PublicList</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">SearchPublicResponseWrapper</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">SubscriberEmailResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">SubscriberVidResponse</a></code>

Methods:

- <code title="post /marketing/marketing-events/2026-03/events">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">create</a>({ ...params }) -> MarketingEventDefaultResponse</code>
- <code title="patch /marketing/marketing-events/2026-03/{objectId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">update</a>(objectID, { ...params }) -> MarketingEventPublicDefaultResponseV2</code>
- <code title="delete /marketing/marketing-events/2026-03/{objectId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">delete</a>(objectID) -> void</code>
- <code title="post /marketing/marketing-events/2026-03/batch/archive">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">deleteBatch</a>({ ...params }) -> Response</code>
- <code title="post /marketing/marketing-events/2026-03/events/delete">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">deleteBatchByExternalEventID</a>({ ...params }) -> Response</code>
- <code title="delete /marketing/marketing-events/2026-03/events/{externalEventId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">deleteByExternalEventID</a>(externalEventID, { ...params }) -> void</code>
- <code title="get /marketing/marketing-events/2026-03/{objectId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">get</a>(objectID) -> MarketingEventPublicReadResponseV2</code>
- <code title="get /marketing/marketing-events/2026-03/events/{externalEventId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">getByExternalEventID</a>(externalEventID, { ...params }) -> MarketingEventPublicReadResponse</code>
- <code title="get /marketing/marketing-events/2026-03/events/search">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">searchByExternalEventID</a>({ ...params }) -> CollectionResponseSearchPublicResponseWrapperNoPaging</code>
- <code title="get /marketing/marketing-events/2026-03/{externalEventId}/identifiers">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">searchIdentifiersByExternalEventID</a>(externalEventID) -> CollectionResponseWithTotalMarketingEventIdentifiersResponse</code>
- <code title="post /marketing/marketing-events/2026-03/batch/update">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">updateBatch</a>({ ...params }) -> BatchResponseMarketingEventPublicDefaultResponseV2</code>
- <code title="patch /marketing/marketing-events/2026-03/events/{externalEventId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">updateByExternalEventID</a>(externalEventID, { ...params }) -> MarketingEventPublicDefaultResponse</code>
- <code title="post /marketing/marketing-events/2026-03/events/upsert">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">upsertBatch</a>({ ...params }) -> BatchResponseMarketingEventPublicDefaultResponse</code>
- <code title="put /marketing/marketing-events/2026-03/events/{externalEventId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">upsertByExternalEventID</a>(externalEventID, { ...params }) -> MarketingEventPublicDefaultResponse</code>
- <code title="post /marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/email-upsert">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">upsertSubscriberStateByEmail</a>(subscriberState, { ...params }) -> Response</code>
- <code title="post /marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/upsert">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">upsertSubscriberStateByID</a>(subscriberState, { ...params }) -> Response</code>

### Attendance

Methods:

- <code title="post /marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/create">client.marketing.events.attendance.<a href="./src/resources/marketing/events/attendance.ts">createByEventIDAndContactID</a>(subscriberState, { ...params }) -> BatchResponseSubscriberVidResponse</code>
- <code title="post /marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/email-create">client.marketing.events.attendance.<a href="./src/resources/marketing/events/attendance.ts">createByEventIDAndEmail</a>(subscriberState, { ...params }) -> BatchResponseSubscriberEmailResponse</code>
- <code title="post /marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/create">client.marketing.events.attendance.<a href="./src/resources/marketing/events/attendance.ts">createByExternalEventIDAndContactID</a>(subscriberState, { ...params }) -> BatchResponseSubscriberVidResponse</code>
- <code title="post /marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/email-create">client.marketing.events.attendance.<a href="./src/resources/marketing/events/attendance.ts">createByExternalEventIDAndEmail</a>(subscriberState, { ...params }) -> BatchResponseSubscriberEmailResponse</code>

### Events

Methods:

- <code title="post /marketing/marketing-events/2026-03/events/{externalEventId}/cancel">client.marketing.events.events.<a href="./src/resources/marketing/events/events_.ts">cancelByExternalEventID</a>(externalEventID, { ...params }) -> MarketingEventDefaultResponse</code>
- <code title="post /marketing/marketing-events/2026-03/events/{externalEventId}/complete">client.marketing.events.events.<a href="./src/resources/marketing/events/events_.ts">completeByExternalEventID</a>(externalEventID, { ...params }) -> MarketingEventDefaultResponse</code>

### ListAssociations

Methods:

- <code title="get /marketing/marketing-events/2026-03/associations/{marketingEventId}/lists">client.marketing.events.listAssociations.<a href="./src/resources/marketing/events/list-associations.ts">list</a>(marketingEventID) -> CollectionResponseWithTotalPublicList</code>
- <code title="delete /marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}">client.marketing.events.listAssociations.<a href="./src/resources/marketing/events/list-associations.ts">delete</a>(listID, { ...params }) -> void</code>
- <code title="put /marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}">client.marketing.events.listAssociations.<a href="./src/resources/marketing/events/list-associations.ts">associate</a>(listID, { ...params }) -> void</code>
- <code title="put /marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}">client.marketing.events.listAssociations.<a href="./src/resources/marketing/events/list-associations.ts">associateByExternalAccount</a>(listID, { ...params }) -> void</code>
- <code title="delete /marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}">client.marketing.events.listAssociations.<a href="./src/resources/marketing/events/list-associations.ts">deleteByExternalAccount</a>(listID, { ...params }) -> void</code>
- <code title="get /marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists">client.marketing.events.listAssociations.<a href="./src/resources/marketing/events/list-associations.ts">listByExternalAccount</a>(externalEventID, { ...params }) -> CollectionResponseWithTotalPublicList</code>

### Participations

Methods:

- <code title="get /marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}">client.marketing.events.participations.<a href="./src/resources/marketing/events/participations.ts">getByExternalAccountAndEventID</a>(externalEventID, { ...params }) -> AttendanceCounters</code>
- <code title="get /marketing/marketing-events/2026-03/participations/{marketingEventId}">client.marketing.events.participations.<a href="./src/resources/marketing/events/participations.ts">getByID</a>(marketingEventID) -> AttendanceCounters</code>
- <code title="get /marketing/marketing-events/2026-03/participations/contacts/{contactIdentifier}/breakdown">client.marketing.events.participations.<a href="./src/resources/marketing/events/participations.ts">listBreakdownByContact</a>(contactIdentifier, { ...params }) -> ParticipationBreakdownsPage</code>
- <code title="get /marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}/breakdown">client.marketing.events.participations.<a href="./src/resources/marketing/events/participations.ts">listBreakdownByExternalAccountAndEventID</a>(externalEventID, { ...params }) -> ParticipationBreakdownsPage</code>
- <code title="get /marketing/marketing-events/2026-03/participations/{marketingEventId}/breakdown">client.marketing.events.participations.<a href="./src/resources/marketing/events/participations.ts">listBreakdownByID</a>(marketingEventID, { ...params }) -> ParticipationBreakdownsPage</code>

### Settings

Methods:

- <code title="post /marketing/marketing-events/2026-03/{appId}/settings">client.marketing.events.settings.<a href="./src/resources/marketing/events/settings.ts">createOrUpdate</a>(appID, { ...params }) -> EventDetailSettings</code>
- <code title="get /marketing/marketing-events/2026-03/{appId}/settings">client.marketing.events.settings.<a href="./src/resources/marketing/events/settings.ts">get</a>(appID) -> EventDetailSettings</code>

## Transactional

Types:

- <code><a href="./src/resources/marketing/transactional.ts">EmailSendStatusView</a></code>
- <code><a href="./src/resources/marketing/transactional.ts">EventIDView</a></code>
- <code><a href="./src/resources/marketing/transactional.ts">PublicSingleSendEmail</a></code>
- <code><a href="./src/resources/marketing/transactional.ts">PublicSingleSendRequestEgg</a></code>

Methods:

- <code title="post /marketing/transactional/2026-03/single-email/send">client.marketing.transactional.<a href="./src/resources/marketing/transactional.ts">send</a>({ ...params }) -> EmailSendStatusView</code>
