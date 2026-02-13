# Marketing

Types:

- <code><a href="./src/resources/marketing/marketing.ts">EmailSendStatusView</a></code>
- <code><a href="./src/resources/marketing/marketing.ts">EventIDView</a></code>
- <code><a href="./src/resources/marketing/marketing.ts">PublicSingleSendEmail</a></code>
- <code><a href="./src/resources/marketing/marketing.ts">PublicSingleSendRequestEgg</a></code>

## Campaigns

Types:

- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchInputPublicCampaignBatchUpdateItem</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchInputPublicCampaignDeleteInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchInputPublicCampaignInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchInputPublicCampaignReadInput</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchResponsePublicCampaign</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchResponsePublicCampaignWithAssets</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchResponsePublicCampaignWithAssetsWithErrors</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">BatchResponsePublicCampaignWithErrors</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">CollectionResponseContactReferenceForwardPaging</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">CollectionResponsePublicCampaignAsset</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">CollectionResponsePublicCampaignAssetForwardPaging</a></code>
- <code><a href="./src/resources/marketing/campaigns/campaigns.ts">CollectionResponseWithTotalPublicCampaignForwardPaging</a></code>
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

- <code title="post /marketing/v3/campaigns/">client.marketing.campaigns.<a href="./src/resources/marketing/campaigns/campaigns.ts">create</a>({ ...params }) -> PublicCampaign</code>
- <code title="patch /marketing/v3/campaigns/{campaignGuid}">client.marketing.campaigns.<a href="./src/resources/marketing/campaigns/campaigns.ts">update</a>(campaignGuid, { ...params }) -> PublicCampaign</code>
- <code title="get /marketing/v3/campaigns/">client.marketing.campaigns.<a href="./src/resources/marketing/campaigns/campaigns.ts">list</a>({ ...params }) -> PublicCampaignsPage</code>
- <code title="delete /marketing/v3/campaigns/{campaignGuid}">client.marketing.campaigns.<a href="./src/resources/marketing/campaigns/campaigns.ts">delete</a>(campaignGuid) -> void</code>
- <code title="get /marketing/v3/campaigns/{campaignGuid}">client.marketing.campaigns.<a href="./src/resources/marketing/campaigns/campaigns.ts">get</a>(campaignGuid, { ...params }) -> PublicCampaignWithAssets</code>

### Assets

Methods:

- <code title="put /marketing/v3/campaigns/{campaignGuid}/assets/{assetType}/{assetId}">client.marketing.campaigns.assets.<a href="./src/resources/marketing/campaigns/assets.ts">update</a>(assetID, { ...params }) -> void</code>
- <code title="get /marketing/v3/campaigns/{campaignGuid}/assets/{assetType}">client.marketing.campaigns.assets.<a href="./src/resources/marketing/campaigns/assets.ts">list</a>(assetType, { ...params }) -> CollectionResponsePublicCampaignAssetForwardPaging</code>
- <code title="delete /marketing/v3/campaigns/{campaignGuid}/assets/{assetType}/{assetId}">client.marketing.campaigns.assets.<a href="./src/resources/marketing/campaigns/assets.ts">delete</a>(assetID, { ...params }) -> void</code>

### Batch

Methods:

- <code title="post /marketing/v3/campaigns/batch/create">client.marketing.campaigns.batch.<a href="./src/resources/marketing/campaigns/batch.ts">create</a>({ ...params }) -> BatchResponsePublicCampaign</code>
- <code title="post /marketing/v3/campaigns/batch/update">client.marketing.campaigns.batch.<a href="./src/resources/marketing/campaigns/batch.ts">update</a>({ ...params }) -> BatchResponsePublicCampaign</code>
- <code title="post /marketing/v3/campaigns/batch/archive">client.marketing.campaigns.batch.<a href="./src/resources/marketing/campaigns/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /marketing/v3/campaigns/batch/read">client.marketing.campaigns.batch.<a href="./src/resources/marketing/campaigns/batch.ts">get</a>({ ...params }) -> BatchResponsePublicCampaignWithAssets</code>

### Budget

Methods:

- <code title="post /marketing/v3/campaigns/{campaignGuid}/budget">client.marketing.campaigns.budget.<a href="./src/resources/marketing/campaigns/budget.ts">create</a>(campaignGuid, { ...params }) -> PublicBudgetItem</code>
- <code title="put /marketing/v3/campaigns/{campaignGuid}/budget/{budgetId}">client.marketing.campaigns.budget.<a href="./src/resources/marketing/campaigns/budget.ts">update</a>(budgetID, { ...params }) -> PublicBudgetItem</code>
- <code title="delete /marketing/v3/campaigns/{campaignGuid}/budget/{budgetId}">client.marketing.campaigns.budget.<a href="./src/resources/marketing/campaigns/budget.ts">delete</a>(budgetID, { ...params }) -> void</code>
- <code title="get /marketing/v3/campaigns/{campaignGuid}/budget/{budgetId}">client.marketing.campaigns.budget.<a href="./src/resources/marketing/campaigns/budget.ts">get</a>(budgetID, { ...params }) -> PublicBudgetItem</code>
- <code title="get /marketing/v3/campaigns/{campaignGuid}/budget/totals">client.marketing.campaigns.budget.<a href="./src/resources/marketing/campaigns/budget.ts">getTotals</a>(campaignGuid) -> PublicBudgetTotals</code>

### Reports

Methods:

- <code title="get /marketing/v3/campaigns/{campaignGuid}/reports/metrics">client.marketing.campaigns.reports.<a href="./src/resources/marketing/campaigns/reports.ts">getAttributionMetrics</a>(campaignGuid, { ...params }) -> MetricsCounters</code>
- <code title="get /marketing/v3/campaigns/{campaignGuid}/reports/revenue">client.marketing.campaigns.reports.<a href="./src/resources/marketing/campaigns/reports.ts">getRevenueAttribution</a>(campaignGuid, { ...params }) -> RevenueAttributionAggregate</code>
- <code title="get /marketing/v3/campaigns/{campaignGuid}/reports/contacts/{contactType}">client.marketing.campaigns.reports.<a href="./src/resources/marketing/campaigns/reports.ts">listContactIDsByType</a>(contactType, { ...params }) -> ContactReferencesPage</code>

### Spend

Methods:

- <code title="post /marketing/v3/campaigns/{campaignGuid}/spend">client.marketing.campaigns.spend.<a href="./src/resources/marketing/campaigns/spend.ts">create</a>(campaignGuid, { ...params }) -> PublicSpendItem</code>
- <code title="put /marketing/v3/campaigns/{campaignGuid}/spend/{spendId}">client.marketing.campaigns.spend.<a href="./src/resources/marketing/campaigns/spend.ts">update</a>(spendID, { ...params }) -> PublicSpendItem</code>
- <code title="delete /marketing/v3/campaigns/{campaignGuid}/spend/{spendId}">client.marketing.campaigns.spend.<a href="./src/resources/marketing/campaigns/spend.ts">delete</a>(spendID, { ...params }) -> void</code>
- <code title="get /marketing/v3/campaigns/{campaignGuid}/spend/{spendId}">client.marketing.campaigns.spend.<a href="./src/resources/marketing/campaigns/spend.ts">get</a>(spendID, { ...params }) -> PublicSpendItem</code>

## Emails

Types:

- <code><a href="./src/resources/marketing/emails/emails.ts">AggregateEmailStatistics</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">CollectionResponseWithTotalEmailStatisticIntervalNoPaging</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">CollectionResponseWithTotalPublicEmailForwardPaging</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">CollectionResponseWithTotalVersionPublicEmail</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">EmailCloneRequestVNext</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">EmailCreateRequest</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">EmailStatisticInterval</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">EmailStatisticsData</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">EmailUpdateRequest</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">Interval</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicButtonStyleSettings</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicDividerStyleSettings</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicEmail</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicEmailContent</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicEmailFromDetails</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicEmailRecipients</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicEmailStyleSettings</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicEmailSubscriptionDetails</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicEmailTestingDetails</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicEmailToDetails</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicFontStyle</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicRssEmailDetails</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">PublicWebversionDetails</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">SmartEmailField</a></code>
- <code><a href="./src/resources/marketing/emails/emails.ts">VersionPublicEmail</a></code>

Methods:

- <code title="post /marketing/v3/emails/">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">create</a>({ ...params }) -> PublicEmail</code>
- <code title="patch /marketing/v3/emails/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">update</a>(emailID, { ...params }) -> PublicEmail</code>
- <code title="get /marketing/v3/emails/">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">list</a>({ ...params }) -> PublicEmailsPage</code>
- <code title="delete /marketing/v3/emails/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">delete</a>(emailID, { ...params }) -> void</code>
- <code title="post /marketing/v3/emails/clone">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">clone</a>({ ...params }) -> PublicEmail</code>
- <code title="post /marketing/v3/emails/ab-test/create-variation">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">createAbTestVariation</a>({ ...params }) -> PublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">get</a>(emailID, { ...params }) -> PublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}/ab-test/get-variation">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">getAbTestVariation</a>(emailID, { ...params }) -> PublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}/draft">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">getDraft</a>(emailID) -> PublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}/revisions/{revisionId}">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">getRevision</a>(revisionID, { ...params }) -> VersionPublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}/revisions">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">listRevisions</a>(emailID, { ...params }) -> VersionPublicEmailsPage</code>
- <code title="post /marketing/v3/emails/{emailId}/publish">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">publish</a>(emailID) -> void</code>
- <code title="post /marketing/v3/emails/{emailId}/draft/reset">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">resetDraft</a>(emailID) -> void</code>
- <code title="post /marketing/v3/emails/{emailId}/revisions/{revisionId}/restore">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">restoreRevision</a>(revisionID, { ...params }) -> void</code>
- <code title="post /marketing/v3/emails/{emailId}/revisions/{revisionId}/restore-to-draft">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">restoreRevisionToDraft</a>(revisionID, { ...params }) -> PublicEmail</code>
- <code title="post /marketing/v3/emails/{emailId}/unpublish">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">unpublish</a>(emailID) -> void</code>
- <code title="patch /marketing/v3/emails/{emailId}/draft">client.marketing.emails.<a href="./src/resources/marketing/emails/emails.ts">updateDraft</a>(emailID, { ...params }) -> PublicEmail</code>

### Statistics

Methods:

- <code title="get /marketing/v3/emails/statistics/list">client.marketing.emails.statistics.<a href="./src/resources/marketing/emails/statistics.ts">get</a>({ ...params }) -> AggregateEmailStatistics</code>
- <code title="get /marketing/v3/emails/statistics/histogram">client.marketing.emails.statistics.<a href="./src/resources/marketing/emails/statistics.ts">getHistogram</a>({ ...params }) -> CollectionResponseWithTotalEmailStatisticIntervalNoPaging</code>

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
- <code><a href="./src/resources/marketing/events/events.ts">BatchResponseMarketingEventPublicDefaultResponseV2WithErrors</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchResponseSubscriberEmailResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">BatchResponseSubscriberVidResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CollectionResponseSearchPublicResponseWrapperNoPaging</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CollectionResponseWithTotalParticipationBreakdownForwardPaging</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">CollectionResponseWithTotalPublicListNoPaging</a></code>
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
- <code><a href="./src/resources/marketing/events/events.ts">PropertyValue</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">PublicList</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">SearchPublicResponseWrapper</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">SubscriberEmailResponse</a></code>
- <code><a href="./src/resources/marketing/events/events.ts">SubscriberVidResponse</a></code>

Methods:

- <code title="post /marketing/v3/marketing-events/events">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">create</a>({ ...params }) -> MarketingEventDefaultResponse</code>
- <code title="patch /marketing/v3/marketing-events/{objectId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">update</a>(objectID, { ...params }) -> MarketingEventPublicDefaultResponseV2</code>
- <code title="get /marketing/v3/marketing-events/">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">list</a>({ ...params }) -> MarketingEventPublicReadResponseV2sPage</code>
- <code title="delete /marketing/v3/marketing-events/{objectId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">delete</a>(objectID) -> void</code>
- <code title="post /marketing/v3/marketing-events/events/{externalEventId}/cancel">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">cancelByExternalEventID</a>(externalEventID, { ...params }) -> MarketingEventDefaultResponse</code>
- <code title="post /marketing/v3/marketing-events/events/{externalEventId}/complete">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">completeByExternalEventID</a>(externalEventID, { ...params }) -> MarketingEventDefaultResponse</code>
- <code title="post /marketing/v3/marketing-events/batch/archive">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">deleteBatch</a>({ ...params }) -> void</code>
- <code title="post /marketing/v3/marketing-events/events/delete">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">deleteBatchByExternalEventID</a>({ ...params }) -> Response</code>
- <code title="delete /marketing/v3/marketing-events/events/{externalEventId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">deleteByExternalEventID</a>(externalEventID, { ...params }) -> void</code>
- <code title="get /marketing/v3/marketing-events/{objectId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">get</a>(objectID) -> MarketingEventPublicReadResponseV2</code>
- <code title="get /marketing/v3/marketing-events/events/{externalEventId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">getByExternalEventID</a>(externalEventID, { ...params }) -> MarketingEventPublicReadResponse</code>
- <code title="get /marketing/v3/marketing-events/events/search">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">searchByExternalEventID</a>({ ...params }) -> CollectionResponseSearchPublicResponseWrapperNoPaging</code>
- <code title="get /marketing/v3/marketing-events/{externalEventId}/identifiers">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">searchIdentifiersByExternalEventID</a>(externalEventID) -> CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging</code>
- <code title="post /marketing/v3/marketing-events/batch/update">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">updateBatch</a>({ ...params }) -> BatchResponseMarketingEventPublicDefaultResponseV2</code>
- <code title="patch /marketing/v3/marketing-events/events/{externalEventId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">updateByExternalEventID</a>(externalEventID, { ...params }) -> MarketingEventPublicDefaultResponse</code>
- <code title="post /marketing/v3/marketing-events/events/upsert">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">upsertBatch</a>({ ...params }) -> BatchResponseMarketingEventPublicDefaultResponse</code>
- <code title="put /marketing/v3/marketing-events/events/{externalEventId}">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">upsertByExternalEventID</a>(externalEventID, { ...params }) -> MarketingEventPublicDefaultResponse</code>
- <code title="post /marketing/v3/marketing-events/events/{externalEventId}/{subscriberState}/email-upsert">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">upsertSubscriberStateByEmail</a>(subscriberState, { ...params }) -> Response</code>
- <code title="post /marketing/v3/marketing-events/events/{externalEventId}/{subscriberState}/upsert">client.marketing.events.<a href="./src/resources/marketing/events/events.ts">upsertSubscriberStateByID</a>(subscriberState, { ...params }) -> Response</code>

### Associations

Methods:

- <code title="get /marketing/v3/marketing-events/associations/{marketingEventId}/lists">client.marketing.events.associations.<a href="./src/resources/marketing/events/associations.ts">list</a>(marketingEventID) -> CollectionResponseWithTotalPublicListNoPaging</code>
- <code title="delete /marketing/v3/marketing-events/associations/{marketingEventId}/lists/{listId}">client.marketing.events.associations.<a href="./src/resources/marketing/events/associations.ts">delete</a>(listID, { ...params }) -> void</code>
- <code title="put /marketing/v3/marketing-events/associations/{marketingEventId}/lists/{listId}">client.marketing.events.associations.<a href="./src/resources/marketing/events/associations.ts">associate</a>(listID, { ...params }) -> void</code>
- <code title="put /marketing/v3/marketing-events/associations/{externalAccountId}/{externalEventId}/lists/{listId}">client.marketing.events.associations.<a href="./src/resources/marketing/events/associations.ts">associateByExternalAccount</a>(listID, { ...params }) -> void</code>
- <code title="delete /marketing/v3/marketing-events/associations/{externalAccountId}/{externalEventId}/lists/{listId}">client.marketing.events.associations.<a href="./src/resources/marketing/events/associations.ts">deleteByExternalAccount</a>(listID, { ...params }) -> void</code>
- <code title="get /marketing/v3/marketing-events/associations/{externalAccountId}/{externalEventId}/lists">client.marketing.events.associations.<a href="./src/resources/marketing/events/associations.ts">listByExternalAccount</a>(externalEventID, { ...params }) -> CollectionResponseWithTotalPublicListNoPaging</code>

### Attendance

Methods:

- <code title="post /marketing/v3/marketing-events/{objectId}/attendance/{subscriberState}/create">client.marketing.events.attendance.<a href="./src/resources/marketing/events/attendance.ts">createByEventIDAndContactID</a>(subscriberState, { ...params }) -> BatchResponseSubscriberVidResponse</code>
- <code title="post /marketing/v3/marketing-events/{objectId}/attendance/{subscriberState}/email-create">client.marketing.events.attendance.<a href="./src/resources/marketing/events/attendance.ts">createByEventIDAndEmail</a>(subscriberState, { ...params }) -> BatchResponseSubscriberEmailResponse</code>
- <code title="post /marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/create">client.marketing.events.attendance.<a href="./src/resources/marketing/events/attendance.ts">createByExternalEventIDAndContactID</a>(subscriberState, { ...params }) -> BatchResponseSubscriberVidResponse</code>
- <code title="post /marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/email-create">client.marketing.events.attendance.<a href="./src/resources/marketing/events/attendance.ts">createByExternalEventIDAndEmail</a>(subscriberState, { ...params }) -> BatchResponseSubscriberEmailResponse</code>

### Participations

Methods:

- <code title="get /marketing/v3/marketing-events/participations/{externalAccountId}/{externalEventId}">client.marketing.events.participations.<a href="./src/resources/marketing/events/participations.ts">getByExternalAccountAndEventID</a>(externalEventID, { ...params }) -> AttendanceCounters</code>
- <code title="get /marketing/v3/marketing-events/participations/{marketingEventId}">client.marketing.events.participations.<a href="./src/resources/marketing/events/participations.ts">getByID</a>(marketingEventID) -> AttendanceCounters</code>
- <code title="get /marketing/v3/marketing-events/participations/contacts/{contactIdentifier}/breakdown">client.marketing.events.participations.<a href="./src/resources/marketing/events/participations.ts">listBreakdownByContact</a>(contactIdentifier, { ...params }) -> ParticipationBreakdownsPage</code>
- <code title="get /marketing/v3/marketing-events/participations/{externalAccountId}/{externalEventId}/breakdown">client.marketing.events.participations.<a href="./src/resources/marketing/events/participations.ts">listBreakdownByExternalAccountAndEventID</a>(externalEventID, { ...params }) -> ParticipationBreakdownsPage</code>
- <code title="get /marketing/v3/marketing-events/participations/{marketingEventId}/breakdown">client.marketing.events.participations.<a href="./src/resources/marketing/events/participations.ts">listBreakdownByID</a>(marketingEventID, { ...params }) -> ParticipationBreakdownsPage</code>

### Settings

Methods:

- <code title="post /marketing/v3/marketing-events/{appId}/settings">client.marketing.events.settings.<a href="./src/resources/marketing/events/settings.ts">createOrUpdate</a>(appID, { ...params }) -> EventDetailSettings</code>
- <code title="get /marketing/v3/marketing-events/{appId}/settings">client.marketing.events.settings.<a href="./src/resources/marketing/events/settings.ts">get</a>(appID) -> EventDetailSettings</code>

## Forms

Types:

- <code><a href="./src/resources/marketing/forms.ts">CollectionResponseFormDefinitionBaseForwardPaging</a></code>
- <code><a href="./src/resources/marketing/forms.ts">DatepickerField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">DependentField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">DependentFieldFilter</a></code>
- <code><a href="./src/resources/marketing/forms.ts">DropdownField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">EmailField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">EmailFieldValidation</a></code>
- <code><a href="./src/resources/marketing/forms.ts">EnumeratedFieldOption</a></code>
- <code><a href="./src/resources/marketing/forms.ts">FieldGroup</a></code>
- <code><a href="./src/resources/marketing/forms.ts">FileField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">FormDefinitionBase</a></code>
- <code><a href="./src/resources/marketing/forms.ts">FormDefinitionCreateRequestBase</a></code>
- <code><a href="./src/resources/marketing/forms.ts">FormDisplayOptions</a></code>
- <code><a href="./src/resources/marketing/forms.ts">FormPostSubmitAction</a></code>
- <code><a href="./src/resources/marketing/forms.ts">FormStyle</a></code>
- <code><a href="./src/resources/marketing/forms.ts">HubSpotFormConfiguration</a></code>
- <code><a href="./src/resources/marketing/forms.ts">HubSpotFormDefinition</a></code>
- <code><a href="./src/resources/marketing/forms.ts">HubSpotFormDefinitionCreateRequest</a></code>
- <code><a href="./src/resources/marketing/forms.ts">HubSpotFormDefinitionPatchRequest</a></code>
- <code><a href="./src/resources/marketing/forms.ts">LegalConsentCheckbox</a></code>
- <code><a href="./src/resources/marketing/forms.ts">LegalConsentOptionsExplicitConsentToProcess</a></code>
- <code><a href="./src/resources/marketing/forms.ts">LegalConsentOptionsImplicitConsentToProcess</a></code>
- <code><a href="./src/resources/marketing/forms.ts">LegalConsentOptionsLegitimateInterest</a></code>
- <code><a href="./src/resources/marketing/forms.ts">LegalConsentOptionsNone</a></code>
- <code><a href="./src/resources/marketing/forms.ts">LifecycleStage</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MobilePhoneField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MultiLineTextField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MultipleCheckboxesField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">NumberField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">NumberFieldValidation</a></code>
- <code><a href="./src/resources/marketing/forms.ts">PaymentLinkRadioField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">PhoneField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">PhoneFieldValidation</a></code>
- <code><a href="./src/resources/marketing/forms.ts">RadioField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">SingleCheckboxField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">SingleLineTextField</a></code>

Methods:

- <code title="post /marketing/v3/forms/">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">create</a>() -> FormDefinitionBase</code>
- <code title="patch /marketing/v3/forms/{formId}">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">update</a>(formID, { ...params }) -> FormDefinitionBase</code>
- <code title="get /marketing/v3/forms/">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">list</a>({ ...params }) -> HubSpotFormDefinitionsPage</code>
- <code title="delete /marketing/v3/forms/{formId}">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">delete</a>(formID) -> void</code>
- <code title="get /marketing/v3/forms/{formId}">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">get</a>(formID, { ...params }) -> FormDefinitionBase</code>
- <code title="put /marketing/v3/forms/{formId}">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">replace</a>(formID) -> FormDefinitionBase</code>

## SingleSend

Methods:

- <code title="post /marketing/v4/email/single-send">client.marketing.singleSend.<a href="./src/resources/marketing/single-send.ts">send</a>({ ...params }) -> EmailSendStatusView</code>

## Subscriptions

Types:

- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">PublicSubscriptionStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">PublicSubscriptionStatusesResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">PublicUpdateSubscriptionStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">SubscriptionDefinition</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">SubscriptionDefinitionsResponse</a></code>

Methods:

- <code title="get /communication-preferences/v3/definitions">client.marketing.subscriptions.<a href="./src/resources/marketing/subscriptions/subscriptions.ts">list</a>() -> SubscriptionDefinitionsResponse</code>
- <code title="get /communication-preferences/v3/status/email/{emailAddress}">client.marketing.subscriptions.<a href="./src/resources/marketing/subscriptions/subscriptions.ts">getEmailStatus</a>(emailAddress) -> PublicSubscriptionStatusesResponse</code>
- <code title="post /communication-preferences/v3/subscribe">client.marketing.subscriptions.<a href="./src/resources/marketing/subscriptions/subscriptions.ts">subscribe</a>({ ...params }) -> PublicSubscriptionStatus</code>
- <code title="post /communication-preferences/v3/unsubscribe">client.marketing.subscriptions.<a href="./src/resources/marketing/subscriptions/subscriptions.ts">unsubscribe</a>({ ...params }) -> PublicSubscriptionStatus</code>

### V4

Types:

- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">ActionResponseWithResultsPublicStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">ActionResponseWithResultsPublicWideStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">ActionResponseWithResultsSubscriptionDefinition</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">BatchInputPublicStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">BatchResponsePublicBulkOptOutFromAllResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">BatchResponsePublicStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">BatchResponsePublicStatusBulkResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">BatchResponsePublicStatusBulkResponseWithErrors</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">BatchResponsePublicWideStatusBulkResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">BatchResponsePublicWideStatusBulkResponseWithErrors</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">LinkGenerationRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">LinkGenerationResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">PartialPublicStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">PublicBulkOptOutFromAllResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">PublicStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">PublicStatusBulkResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">PublicStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">PublicSubscriptionTranslation</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">PublicWideStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4/v4.ts">PublicWideStatusBulkResponse</a></code>

#### Definitions

Methods:

- <code title="get /communication-preferences/v4/definitions">client.marketing.subscriptions.v4.definitions.<a href="./src/resources/marketing/subscriptions/v4/definitions.ts">list</a>({ ...params }) -> ActionResponseWithResultsSubscriptionDefinition</code>

#### Links

Methods:

- <code title="post /communication-preferences/v4/links/generate">client.marketing.subscriptions.v4.links.<a href="./src/resources/marketing/subscriptions/v4/links.ts">create</a>({ ...params }) -> LinkGenerationResponse</code>

#### Statuses

Methods:

- <code title="post /communication-preferences/v4/statuses/{subscriberIdString}">client.marketing.subscriptions.v4.statuses.<a href="./src/resources/marketing/subscriptions/v4/statuses.ts">update</a>(subscriberIDString, { ...params }) -> ActionResponseWithResultsPublicStatus</code>
- <code title="post /communication-preferences/v4/statuses/batch/read">client.marketing.subscriptions.v4.statuses.<a href="./src/resources/marketing/subscriptions/v4/statuses.ts">batchGet</a>({ ...params }) -> BatchResponsePublicStatusBulkResponse</code>
- <code title="post /communication-preferences/v4/statuses/batch/unsubscribe-all/read">client.marketing.subscriptions.v4.statuses.<a href="./src/resources/marketing/subscriptions/v4/statuses.ts">batchGetUnsubscribeAllStatus</a>({ ...params }) -> BatchResponsePublicWideStatusBulkResponse</code>
- <code title="post /communication-preferences/v4/statuses/batch/unsubscribe-all">client.marketing.subscriptions.v4.statuses.<a href="./src/resources/marketing/subscriptions/v4/statuses.ts">batchUnsubscribeAll</a>({ ...params }) -> BatchResponsePublicBulkOptOutFromAllResponse</code>
- <code title="post /communication-preferences/v4/statuses/batch/write">client.marketing.subscriptions.v4.statuses.<a href="./src/resources/marketing/subscriptions/v4/statuses.ts">batchUpdate</a>({ ...params }) -> BatchResponsePublicStatus</code>
- <code title="get /communication-preferences/v4/statuses/{subscriberIdString}">client.marketing.subscriptions.v4.statuses.<a href="./src/resources/marketing/subscriptions/v4/statuses.ts">get</a>(subscriberIDString, { ...params }) -> ActionResponseWithResultsPublicStatus</code>
- <code title="get /communication-preferences/v4/statuses/{subscriberIdString}/unsubscribe-all">client.marketing.subscriptions.v4.statuses.<a href="./src/resources/marketing/subscriptions/v4/statuses.ts">getUnsubscribeAllStatus</a>(subscriberIDString, { ...params }) -> ActionResponseWithResultsPublicWideStatus</code>
- <code title="post /communication-preferences/v4/statuses/{subscriberIdString}/unsubscribe-all">client.marketing.subscriptions.v4.statuses.<a href="./src/resources/marketing/subscriptions/v4/statuses.ts">unsubscribeAll</a>(subscriberIDString, { ...params }) -> ActionResponseWithResultsPublicStatus</code>

## Transactional

Types:

- <code><a href="./src/resources/marketing/transactional/transactional.ts">CollectionResponseSmtpAPITokenViewForwardPaging</a></code>
- <code><a href="./src/resources/marketing/transactional/transactional.ts">SmtpAPITokenRequestEgg</a></code>
- <code><a href="./src/resources/marketing/transactional/transactional.ts">SmtpAPITokenView</a></code>

### SingleEmail

Methods:

- <code title="post /marketing/v3/transactional/single-email/send">client.marketing.transactional.singleEmail.<a href="./src/resources/marketing/transactional/single-email.ts">send</a>({ ...params }) -> EmailSendStatusView</code>

### SmtpTokens

Methods:

- <code title="post /marketing/v3/transactional/smtp-tokens">client.marketing.transactional.smtpTokens.<a href="./src/resources/marketing/transactional/smtp-tokens.ts">create</a>({ ...params }) -> SmtpAPITokenView</code>
- <code title="get /marketing/v3/transactional/smtp-tokens">client.marketing.transactional.smtpTokens.<a href="./src/resources/marketing/transactional/smtp-tokens.ts">list</a>({ ...params }) -> SmtpAPITokenViewsPage</code>
- <code title="delete /marketing/v3/transactional/smtp-tokens/{tokenId}">client.marketing.transactional.smtpTokens.<a href="./src/resources/marketing/transactional/smtp-tokens.ts">delete</a>(tokenID) -> void</code>
- <code title="get /marketing/v3/transactional/smtp-tokens/{tokenId}">client.marketing.transactional.smtpTokens.<a href="./src/resources/marketing/transactional/smtp-tokens.ts">get</a>(tokenID) -> SmtpAPITokenView</code>
- <code title="post /marketing/v3/transactional/smtp-tokens/{tokenId}/password-reset">client.marketing.transactional.smtpTokens.<a href="./src/resources/marketing/transactional/smtp-tokens.ts">resetPassword</a>(tokenID) -> SmtpAPITokenView</code>
