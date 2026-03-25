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
