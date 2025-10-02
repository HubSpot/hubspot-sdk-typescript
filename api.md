# AccountInfo

## V3

Types:

- <code><a href="./src/resources/account-info/v3/v3.ts">V3RetrieveAccountDetailsResponse</a></code>

Methods:

- <code title="get /account-info/v3/details">client.accountInfo.v3.<a href="./src/resources/account-info/v3/v3.ts">retrieveAccountDetails</a>() -> V3RetrieveAccountDetailsResponse</code>

### Activity

Types:

- <code><a href="./src/resources/account-info/v3/activity.ts">ForwardPaging</a></code>
- <code><a href="./src/resources/account-info/v3/activity.ts">NextPage</a></code>
- <code><a href="./src/resources/account-info/v3/activity.ts">ActivityRetrieveAuditLogsResponse</a></code>
- <code><a href="./src/resources/account-info/v3/activity.ts">ActivityRetrieveLoginActivityResponse</a></code>
- <code><a href="./src/resources/account-info/v3/activity.ts">ActivityRetrieveSecurityHistoryResponse</a></code>

Methods:

- <code title="get /account-info/v3/activity/audit-logs">client.accountInfo.v3.activity.<a href="./src/resources/account-info/v3/activity.ts">retrieveAuditLogs</a>({ ...params }) -> ActivityRetrieveAuditLogsResponse</code>
- <code title="get /account-info/v3/activity/login">client.accountInfo.v3.activity.<a href="./src/resources/account-info/v3/activity.ts">retrieveLoginActivity</a>({ ...params }) -> ActivityRetrieveLoginActivityResponse</code>
- <code title="get /account-info/v3/activity/security">client.accountInfo.v3.activity.<a href="./src/resources/account-info/v3/activity.ts">retrieveSecurityHistory</a>({ ...params }) -> ActivityRetrieveSecurityHistoryResponse</code>

### APIUsage

#### Daily

Types:

- <code><a href="./src/resources/account-info/v3/api-usage/daily.ts">Paging</a></code>
- <code><a href="./src/resources/account-info/v3/api-usage/daily.ts">DailyRetrievePrivateAppDailyUsageResponse</a></code>

Methods:

- <code title="get /account-info/v3/api-usage/daily/private-apps">client.accountInfo.v3.apiUsage.daily.<a href="./src/resources/account-info/v3/api-usage/daily.ts">retrievePrivateAppDailyUsage</a>() -> DailyRetrievePrivateAppDailyUsageResponse</code>

# OAuth

## V1

Types:

- <code><a href="./src/resources/oauth/v1/v1.ts">V1RefreshAccessTokenResponse</a></code>
- <code><a href="./src/resources/oauth/v1/v1.ts">V1RetrieveAccessTokenResponse</a></code>

Methods:

- <code title="post /oauth/v1/token">client.oauth.v1.<a href="./src/resources/oauth/v1/v1.ts">refreshAccessToken</a>({ ...params }) -> V1RefreshAccessTokenResponse</code>
- <code title="get /oauth/v1/access-tokens/{token}">client.oauth.v1.<a href="./src/resources/oauth/v1/v1.ts">retrieveAccessToken</a>(token) -> V1RetrieveAccessTokenResponse</code>

### RefreshTokens

Types:

- <code><a href="./src/resources/oauth/v1/refresh-tokens.ts">RefreshTokenRetrieveRefreshTokenResponse</a></code>

Methods:

- <code title="delete /oauth/v1/refresh-tokens/{token}">client.oauth.v1.refreshTokens.<a href="./src/resources/oauth/v1/refresh-tokens.ts">deleteRefreshToken</a>(token) -> void</code>
- <code title="get /oauth/v1/refresh-tokens/{token}">client.oauth.v1.refreshTokens.<a href="./src/resources/oauth/v1/refresh-tokens.ts">retrieveRefreshToken</a>(token) -> RefreshTokenRetrieveRefreshTokenResponse</code>

# Automation

## V4

### Actions

Types:

- <code><a href="./src/resources/automation/v4/actions/actions.ts">AutomationActionDefinition</a></code>
- <code><a href="./src/resources/automation/v4/actions/actions.ts">ConditionalSingleFieldDependency</a></code>
- <code><a href="./src/resources/automation/v4/actions/actions.ts">ExecutionTranslationRule</a></code>
- <code><a href="./src/resources/automation/v4/actions/actions.ts">FieldTypeDefinition</a></code>
- <code><a href="./src/resources/automation/v4/actions/actions.ts">InputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/v4/actions/actions.ts">ObjectRequestOptions</a></code>
- <code><a href="./src/resources/automation/v4/actions/actions.ts">OutputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/v4/actions/actions.ts">SingleFieldDependency</a></code>

Methods:

- <code title="get /automation/v4/actions/{appId}/{definitionId}">client.automation.v4.actions.<a href="./src/resources/automation/v4/actions/actions.ts">retrieve</a>(definitionID, { ...params }) -> AutomationActionDefinition</code>
- <code title="patch /automation/v4/actions/{appId}/{definitionId}">client.automation.v4.actions.<a href="./src/resources/automation/v4/actions/actions.ts">update</a>(definitionID, { ...params }) -> AutomationActionDefinition</code>
- <code title="delete /automation/v4/actions/{appId}/{definitionId}">client.automation.v4.actions.<a href="./src/resources/automation/v4/actions/actions.ts">delete</a>(definitionID, { ...params }) -> void</code>

#### Callbacks

##### Complete

Methods:

- <code title="post /automation/v4/actions/callbacks/complete">client.automation.v4.actions.callbacks.complete.<a href="./src/resources/automation/v4/actions/callbacks/complete.ts">create</a>({ ...params }) -> void</code>

#### Functions

Types:

- <code><a href="./src/resources/automation/v4/actions/functions.ts">ActionFunctionIdentifier</a></code>
- <code><a href="./src/resources/automation/v4/actions/functions.ts">AutomationActionFunction</a></code>
- <code><a href="./src/resources/automation/v4/actions/functions.ts">FunctionListResponse</a></code>

Methods:

- <code title="get /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.v4.actions.functions.<a href="./src/resources/automation/v4/actions/functions.ts">retrieve</a>(functionID, { ...params }) -> AutomationActionFunction</code>
- <code title="put /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.v4.actions.functions.<a href="./src/resources/automation/v4/actions/functions.ts">update</a>(functionID, { ...params }) -> ActionFunctionIdentifier</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/functions">client.automation.v4.actions.functions.<a href="./src/resources/automation/v4/actions/functions.ts">list</a>(definitionID, { ...params }) -> FunctionListResponse</code>
- <code title="delete /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.v4.actions.functions.<a href="./src/resources/automation/v4/actions/functions.ts">delete</a>(functionID, { ...params }) -> void</code>

#### Revisions

Types:

- <code><a href="./src/resources/automation/v4/actions/revisions.ts">ActionRevision</a></code>
- <code><a href="./src/resources/automation/v4/actions/revisions.ts">RevisionListResponse</a></code>

Methods:

- <code title="get /automation/v4/actions/{appId}/{definitionId}/revisions/{revisionId}">client.automation.v4.actions.revisions.<a href="./src/resources/automation/v4/actions/revisions.ts">retrieve</a>(revisionID, { ...params }) -> ActionRevision</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/revisions">client.automation.v4.actions.revisions.<a href="./src/resources/automation/v4/actions/revisions.ts">list</a>(definitionID, { ...params }) -> RevisionListResponse</code>

### Flows

Types:

- <code><a href="./src/resources/automation/v4/flows/flows.ts">AndFilterBranch</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">AssociationFilterBranch</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">ContactFlow</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">ContactFlowCreateRequest</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">ContactFlowPutRequest</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">Flow</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">FlowCreateRequest</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">FlowPutRequest</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">NotAllFilterBranch</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">NotAnyFilterBranch</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">OrFilterBranch</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">PlatformFlow</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">PlatformFlowCreateRequest</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">PlatformFlowPutRequest</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">PropertyAssociationFilterBranch</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">RestrictedFilterBranch</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">UnifiedEventsFilterBranch</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">FlowListResponse</a></code>
- <code><a href="./src/resources/automation/v4/flows/flows.ts">FlowRetrieveEmailCampaignsResponse</a></code>

Methods:

- <code title="post /automation/v4/flows">client.automation.v4.flows.<a href="./src/resources/automation/v4/flows/flows.ts">create</a>() -> Flow</code>
- <code title="get /automation/v4/flows/{flowId}">client.automation.v4.flows.<a href="./src/resources/automation/v4/flows/flows.ts">retrieve</a>(flowID) -> Flow</code>
- <code title="put /automation/v4/flows/{flowId}">client.automation.v4.flows.<a href="./src/resources/automation/v4/flows/flows.ts">update</a>(flowID) -> Flow</code>
- <code title="get /automation/v4/flows">client.automation.v4.flows.<a href="./src/resources/automation/v4/flows/flows.ts">list</a>({ ...params }) -> FlowListResponse</code>
- <code title="delete /automation/v4/flows/{flowId}">client.automation.v4.flows.<a href="./src/resources/automation/v4/flows/flows.ts">delete</a>(flowID) -> void</code>
- <code title="get /automation/v4/flows/email-campaigns">client.automation.v4.flows.<a href="./src/resources/automation/v4/flows/flows.ts">retrieveEmailCampaigns</a>({ ...params }) -> FlowRetrieveEmailCampaignsResponse</code>

#### Batch

Types:

- <code><a href="./src/resources/automation/v4/flows/batch.ts">BatchReadResponse</a></code>

Methods:

- <code title="post /automation/v4/flows/batch/read">client.automation.v4.flows.batch.<a href="./src/resources/automation/v4/flows/batch.ts">read</a>({ ...params }) -> BatchReadResponse</code>

### WorkflowIDMappings

#### Batch

Types:

- <code><a href="./src/resources/automation/v4/workflow-id-mappings/batch.ts">BatchReadResponse</a></code>

Methods:

- <code title="post /automation/v4/workflow-id-mappings/batch/read">client.automation.v4.workflowIDMappings.batch.<a href="./src/resources/automation/v4/workflow-id-mappings/batch.ts">read</a>({ ...params }) -> BatchReadResponse</code>

# Cms

## V3

### Blogs

#### Tags

Types:

- <code><a href="./src/resources/cms/v3/blogs/tags/tags.ts">BlogsTagsTag</a></code>
- <code><a href="./src/resources/cms/v3/blogs/tags/tags.ts">TagListResponse</a></code>

Methods:

- <code title="post /cms/v3/blogs/tags">client.cms.v3.blogs.tags.<a href="./src/resources/cms/v3/blogs/tags/tags.ts">create</a>({ ...params }) -> BlogsTagsTag</code>
- <code title="get /cms/v3/blogs/tags/{objectId}">client.cms.v3.blogs.tags.<a href="./src/resources/cms/v3/blogs/tags/tags.ts">retrieve</a>(objectID, { ...params }) -> BlogsTagsTag</code>
- <code title="patch /cms/v3/blogs/tags/{objectId}">client.cms.v3.blogs.tags.<a href="./src/resources/cms/v3/blogs/tags/tags.ts">update</a>(objectID, { ...params }) -> BlogsTagsTag</code>
- <code title="get /cms/v3/blogs/tags">client.cms.v3.blogs.tags.<a href="./src/resources/cms/v3/blogs/tags/tags.ts">list</a>({ ...params }) -> TagListResponse</code>
- <code title="delete /cms/v3/blogs/tags/{objectId}">client.cms.v3.blogs.tags.<a href="./src/resources/cms/v3/blogs/tags/tags.ts">delete</a>(objectID, { ...params }) -> void</code>

##### MultiLanguage

Methods:

- <code title="post /cms/v3/blogs/tags/multi-language/attach-to-lang-group">client.cms.v3.blogs.tags.multiLanguage.<a href="./src/resources/cms/v3/blogs/tags/multi-language.ts">attachToLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/multi-language/create-language-variation">client.cms.v3.blogs.tags.multiLanguage.<a href="./src/resources/cms/v3/blogs/tags/multi-language.ts">createLanguageVariation</a>({ ...params }) -> BlogsTagsTag</code>
- <code title="post /cms/v3/blogs/tags/multi-language/detach-from-lang-group">client.cms.v3.blogs.tags.multiLanguage.<a href="./src/resources/cms/v3/blogs/tags/multi-language.ts">detachFromLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/multi-language/update-languages">client.cms.v3.blogs.tags.multiLanguage.<a href="./src/resources/cms/v3/blogs/tags/multi-language.ts">updateLanguages</a>({ ...params }) -> void</code>
- <code title="put /cms/v3/blogs/tags/multi-language/set-new-lang-primary">client.cms.v3.blogs.tags.multiLanguage.<a href="./src/resources/cms/v3/blogs/tags/multi-language.ts">updateSetNewLangPrimary</a>({ ...params }) -> void</code>

##### Batch

Types:

- <code><a href="./src/resources/cms/v3/blogs/tags/batch.ts">BatchInputString</a></code>
- <code><a href="./src/resources/cms/v3/blogs/tags/batch.ts">BlogsTagsBatchResponseTag</a></code>

Methods:

- <code title="post /cms/v3/blogs/tags/batch/create">client.cms.v3.blogs.tags.batch.<a href="./src/resources/cms/v3/blogs/tags/batch.ts">create</a>({ ...params }) -> BlogsTagsBatchResponseTag</code>
- <code title="post /cms/v3/blogs/tags/batch/update">client.cms.v3.blogs.tags.batch.<a href="./src/resources/cms/v3/blogs/tags/batch.ts">update</a>({ ...params }) -> BlogsTagsBatchResponseTag</code>
- <code title="post /cms/v3/blogs/tags/batch/archive">client.cms.v3.blogs.tags.batch.<a href="./src/resources/cms/v3/blogs/tags/batch.ts">archive</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/batch/read">client.cms.v3.blogs.tags.batch.<a href="./src/resources/cms/v3/blogs/tags/batch.ts">read</a>({ ...params }) -> BlogsTagsBatchResponseTag</code>

### Domains

Types:

- <code><a href="./src/resources/cms/v3/domains.ts">DomainsDomain</a></code>
- <code><a href="./src/resources/cms/v3/domains.ts">DomainRetrieveResponse</a></code>

Methods:

- <code title="get /cms/v3/domains/{domainId}">client.cms.v3.domains.<a href="./src/resources/cms/v3/domains.ts">retrieve</a>(domainID) -> DomainsDomain</code>
- <code title="get /cms/v3/domains/">client.cms.v3.domains.<a href="./src/resources/cms/v3/domains.ts">retrieve</a>({ ...params }) -> DomainRetrieveResponse</code>

### Hubdb

#### Tables

Types:

- <code><a href="./src/resources/cms/v3/hubdb/tables/tables.ts">HubdbTableV3Request</a></code>

Methods:

- <code title="post /cms/v3/hubdb/tables">client.cms.v3.hubdb.tables.<a href="./src/resources/cms/v3/hubdb/tables/tables.ts">create</a>({ ...params }) -> HubdbTableV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}">client.cms.v3.hubdb.tables.<a href="./src/resources/cms/v3/hubdb/tables/tables.ts">retrieve</a>(tableIDOrName, { ...params }) -> HubdbTableV3</code>
- <code title="get /cms/v3/hubdb/tables">client.cms.v3.hubdb.tables.<a href="./src/resources/cms/v3/hubdb/tables/tables.ts">list</a>({ ...params }) -> HubdbCollectionResponseWithTotal</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}/versions/{versionId}">client.cms.v3.hubdb.tables.<a href="./src/resources/cms/v3/hubdb/tables/tables.ts">delete</a>(versionID, { ...params }) -> void</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/export">client.cms.v3.hubdb.tables.<a href="./src/resources/cms/v3/hubdb/tables/tables.ts">retrieveExport</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/unpublish">client.cms.v3.hubdb.tables.<a href="./src/resources/cms/v3/hubdb/tables/tables.ts">unpublish</a>(tableIDOrName, { ...params }) -> HubdbTableV3</code>

##### Draft

Types:

- <code><a href="./src/resources/cms/v3/hubdb/tables/draft.ts">ErrorDetail</a></code>
- <code><a href="./src/resources/cms/v3/hubdb/tables/draft.ts">HubdbCollectionResponseWithTotal</a></code>
- <code><a href="./src/resources/cms/v3/hubdb/tables/draft.ts">HubdbSimpleUser</a></code>
- <code><a href="./src/resources/cms/v3/hubdb/tables/draft.ts">HubdbTableV3</a></code>
- <code><a href="./src/resources/cms/v3/hubdb/tables/draft.ts">DraftImportResponse</a></code>

Methods:

- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/draft">client.cms.v3.hubdb.tables.draft.<a href="./src/resources/cms/v3/hubdb/tables/draft.ts">list</a>(tableIDOrName, { ...params }) -> HubdbTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/clone">client.cms.v3.hubdb.tables.draft.<a href="./src/resources/cms/v3/hubdb/tables/draft.ts">clone</a>(tableIDOrName, { ...params }) -> HubdbTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/import">client.cms.v3.hubdb.tables.draft.<a href="./src/resources/cms/v3/hubdb/tables/draft.ts">import</a>(tableIDOrName, { ...params }) -> DraftImportResponse</code>
- <code title="patch /cms/v3/hubdb/tables/{tableIdOrName}/draft">client.cms.v3.hubdb.tables.draft.<a href="./src/resources/cms/v3/hubdb/tables/draft.ts">patchAll</a>(tableIDOrName, { ...params }) -> HubdbTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/publish">client.cms.v3.hubdb.tables.draft.<a href="./src/resources/cms/v3/hubdb/tables/draft.ts">publish</a>(tableIDOrName, { ...params }) -> HubdbTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/reset">client.cms.v3.hubdb.tables.draft.<a href="./src/resources/cms/v3/hubdb/tables/draft.ts">reset</a>(tableIDOrName, { ...params }) -> HubdbTableV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/draft/export">client.cms.v3.hubdb.tables.draft.<a href="./src/resources/cms/v3/hubdb/tables/draft.ts">retrieveExport</a>(tableIDOrName, { ...params }) -> Response</code>

##### Rows

Types:

- <code><a href="./src/resources/cms/v3/hubdb/tables/rows/rows.ts">HubdbTableRowV3</a></code>

Methods:

- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows">client.cms.v3.hubdb.tables.rows.<a href="./src/resources/cms/v3/hubdb/tables/rows/rows.ts">create</a>(tableIDOrName, { ...params }) -> HubdbTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}">client.cms.v3.hubdb.tables.rows.<a href="./src/resources/cms/v3/hubdb/tables/rows/rows.ts">retrieve</a>(rowID, { ...params }) -> HubdbTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows">client.cms.v3.hubdb.tables.rows.<a href="./src/resources/cms/v3/hubdb/tables/rows/rows.ts">list</a>(tableIDOrName, { ...params }) -> HubdbUnifiedCollectionResponseWithTotal</code>

###### Draft

Types:

- <code><a href="./src/resources/cms/v3/hubdb/tables/rows/draft/draft.ts">HubdbTableRowV3Request</a></code>
- <code><a href="./src/resources/cms/v3/hubdb/tables/rows/draft/draft.ts">HubdbUnifiedCollectionResponseWithTotal</a></code>

Methods:

- <code title="put /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.v3.hubdb.tables.rows.draft.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/draft.ts">create</a>(rowID, { ...params }) -> HubdbTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.v3.hubdb.tables.rows.draft.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/draft.ts">list</a>(rowID, { ...params }) -> HubdbTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft/clone">client.cms.v3.hubdb.tables.rows.draft.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/draft.ts">clone</a>(rowID, { ...params }) -> HubdbTableRowV3</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.v3.hubdb.tables.rows.draft.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/draft.ts">deleteAll</a>(rowID, { ...params }) -> void</code>
- <code title="patch /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.v3.hubdb.tables.rows.draft.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/draft.ts">patchAll</a>(rowID, { ...params }) -> HubdbTableRowV3</code>
  ####### Batch
  Types:
- <code><a href="./src/resources/cms/v3/hubdb/tables/rows/draft/batch.ts">HubdbBatchInputRowV3UpdateRequest</a></code>
- <code><a href="./src/resources/cms/v3/hubdb/tables/rows/draft/batch.ts">HubdbBatchResponseRowV3</a></code>

Methods:

- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/create">client.cms.v3.hubdb.tables.rows.draft.batch.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/batch.ts">create</a>(tableIDOrName, { ...params }) -> HubdbBatchResponseRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/update">client.cms.v3.hubdb.tables.rows.draft.batch.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/batch.ts">update</a>(tableIDOrName, { ...params }) -> HubdbBatchResponseRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/clone">client.cms.v3.hubdb.tables.rows.draft.batch.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/batch.ts">clone</a>(tableIDOrName, { ...params }) -> HubdbBatchResponseRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/purge">client.cms.v3.hubdb.tables.rows.draft.batch.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/batch.ts">purge</a>(tableIDOrName, { ...params }) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/read">client.cms.v3.hubdb.tables.rows.draft.batch.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/batch.ts">read</a>(tableIDOrName, { ...params }) -> HubdbBatchResponseRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/replace">client.cms.v3.hubdb.tables.rows.draft.batch.<a href="./src/resources/cms/v3/hubdb/tables/rows/draft/batch.ts">replace</a>(tableIDOrName, { ...params }) -> HubdbBatchResponseRowV3</code>

###### Batch

Methods:

- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/batch/read">client.cms.v3.hubdb.tables.rows.batch.<a href="./src/resources/cms/v3/hubdb/tables/rows/batch.ts">read</a>(tableIDOrName, { ...params }) -> HubdbBatchResponseRowV3</code>

### URLRedirects

Types:

- <code><a href="./src/resources/cms/v3/url-redirects.ts">URLMapping</a></code>
- <code><a href="./src/resources/cms/v3/url-redirects.ts">URLRedirectRetrieveResponse</a></code>

Methods:

- <code title="get /cms/v3/url-redirects/{urlRedirectId}">client.cms.v3.urlRedirects.<a href="./src/resources/cms/v3/url-redirects.ts">retrieve</a>(urlRedirectID) -> URLMapping</code>
- <code title="post /cms/v3/url-redirects/">client.cms.v3.urlRedirects.<a href="./src/resources/cms/v3/url-redirects.ts">update</a>({ ...params }) -> URLMapping</code>
- <code title="delete /cms/v3/url-redirects/{urlRedirectId}">client.cms.v3.urlRedirects.<a href="./src/resources/cms/v3/url-redirects.ts">delete</a>(urlRedirectID) -> void</code>
- <code title="get /cms/v3/url-redirects/">client.cms.v3.urlRedirects.<a href="./src/resources/cms/v3/url-redirects.ts">retrieve</a>({ ...params }) -> URLRedirectRetrieveResponse</code>

# CRM

## V3

### Associations

#### Batch

Types:

- <code><a href="./src/resources/crm/v3/associations/batch.ts">CRMAssociationsBatchInputPublicAssociation</a></code>
- <code><a href="./src/resources/crm/v3/associations/batch.ts">CRMAssociationsPublicAssociation</a></code>
- <code><a href="./src/resources/crm/v3/associations/batch.ts">CRMPublicObjectID</a></code>
- <code><a href="./src/resources/crm/v3/associations/batch.ts">StandardError</a></code>
- <code><a href="./src/resources/crm/v3/associations/batch.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/crm/v3/associations/batch.ts">BatchReadResponse</a></code>

Methods:

- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/create">client.crm.v3.associations.batch.<a href="./src/resources/crm/v3/associations/batch.ts">create</a>(toObjectType, { ...params }) -> BatchCreateResponse</code>
- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/archive">client.crm.v3.associations.batch.<a href="./src/resources/crm/v3/associations/batch.ts">archive</a>(toObjectType, { ...params }) -> void</code>
- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/read">client.crm.v3.associations.batch.<a href="./src/resources/crm/v3/associations/batch.ts">read</a>(toObjectType, { ...params }) -> BatchReadResponse</code>

### Objects

#### Companies

Types:

- <code><a href="./src/resources/crm/v3/objects/companies/companies.ts">CRMObjectsCollectionResponseSimplePublicObjectWithAssociations</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/companies.ts">CRMObjectsCollectionResponseWithTotalSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/companies.ts">CRMObjectsCreatedResponseSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/companies.ts">CRMObjectsPublicAssociationsForObject</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/companies.ts">CRMObjectsPublicMergeInput</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/companies.ts">CRMObjectsPublicObjectSearchRequest</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/companies.ts">CRMObjectsSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/companies.ts">CRMObjectsSimplePublicObjectInput</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/companies.ts">CRMObjectsSimplePublicObjectInputForCreate</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/companies.ts">CRMObjectsSimplePublicObjectWithAssociations</a></code>

Methods:

- <code title="post /crm/v3/objects/companies">client.crm.v3.objects.companies.<a href="./src/resources/crm/v3/objects/companies/companies.ts">create</a>({ ...params }) -> CRMObjectsCreatedResponseSimplePublicObject</code>
- <code title="get /crm/v3/objects/companies/{companyId}">client.crm.v3.objects.companies.<a href="./src/resources/crm/v3/objects/companies/companies.ts">retrieve</a>(companyID, { ...params }) -> CRMObjectsSimplePublicObjectWithAssociations</code>
- <code title="patch /crm/v3/objects/companies/{companyId}">client.crm.v3.objects.companies.<a href="./src/resources/crm/v3/objects/companies/companies.ts">update</a>(companyID, { ...params }) -> CRMObjectsSimplePublicObject</code>
- <code title="get /crm/v3/objects/companies">client.crm.v3.objects.companies.<a href="./src/resources/crm/v3/objects/companies/companies.ts">list</a>({ ...params }) -> CRMObjectsCollectionResponseSimplePublicObjectWithAssociations</code>
- <code title="delete /crm/v3/objects/companies/{companyId}">client.crm.v3.objects.companies.<a href="./src/resources/crm/v3/objects/companies/companies.ts">delete</a>(companyID) -> void</code>
- <code title="post /crm/v3/objects/companies/merge">client.crm.v3.objects.companies.<a href="./src/resources/crm/v3/objects/companies/companies.ts">merge</a>({ ...params }) -> CRMObjectsSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/search">client.crm.v3.objects.companies.<a href="./src/resources/crm/v3/objects/companies/companies.ts">search</a>({ ...params }) -> CRMObjectsCollectionResponseWithTotalSimplePublicObject</code>

##### Batch

Types:

- <code><a href="./src/resources/crm/v3/objects/companies/batch.ts">CRMObjectsBatchInputSimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/batch.ts">CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/batch.ts">CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/batch.ts">CRMObjectsBatchInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/batch.ts">CRMObjectsBatchReadInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/batch.ts">CRMObjectsBatchResponseSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/batch.ts">CRMObjectsBatchResponseSimplePublicUpsertObject</a></code>
- <code><a href="./src/resources/crm/v3/objects/companies/batch.ts">CRMObjectsSimplePublicObjectID</a></code>

Methods:

- <code title="post /crm/v3/objects/companies/batch/create">client.crm.v3.objects.companies.batch.<a href="./src/resources/crm/v3/objects/companies/batch.ts">create</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/batch/update">client.crm.v3.objects.companies.batch.<a href="./src/resources/crm/v3/objects/companies/batch.ts">update</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/batch/archive">client.crm.v3.objects.companies.batch.<a href="./src/resources/crm/v3/objects/companies/batch.ts">archive</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/companies/batch/read">client.crm.v3.objects.companies.batch.<a href="./src/resources/crm/v3/objects/companies/batch.ts">read</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/batch/upsert">client.crm.v3.objects.companies.batch.<a href="./src/resources/crm/v3/objects/companies/batch.ts">upsert</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicUpsertObject</code>

#### Contacts

Methods:

- <code title="post /crm/v3/objects/contacts">client.crm.v3.objects.contacts.<a href="./src/resources/crm/v3/objects/contacts/contacts.ts">create</a>({ ...params }) -> CRMObjectsCreatedResponseSimplePublicObject</code>
- <code title="get /crm/v3/objects/contacts/{contactId}">client.crm.v3.objects.contacts.<a href="./src/resources/crm/v3/objects/contacts/contacts.ts">retrieve</a>(contactID, { ...params }) -> CRMObjectsSimplePublicObjectWithAssociations</code>
- <code title="patch /crm/v3/objects/contacts/{contactId}">client.crm.v3.objects.contacts.<a href="./src/resources/crm/v3/objects/contacts/contacts.ts">update</a>(contactID, { ...params }) -> CRMObjectsSimplePublicObject</code>
- <code title="get /crm/v3/objects/contacts">client.crm.v3.objects.contacts.<a href="./src/resources/crm/v3/objects/contacts/contacts.ts">list</a>({ ...params }) -> CRMObjectsCollectionResponseSimplePublicObjectWithAssociations</code>
- <code title="delete /crm/v3/objects/contacts/{contactId}">client.crm.v3.objects.contacts.<a href="./src/resources/crm/v3/objects/contacts/contacts.ts">delete</a>(contactID) -> void</code>
- <code title="post /crm/v3/objects/contacts/gdpr-delete">client.crm.v3.objects.contacts.<a href="./src/resources/crm/v3/objects/contacts/contacts.ts">gdprDelete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/contacts/merge">client.crm.v3.objects.contacts.<a href="./src/resources/crm/v3/objects/contacts/contacts.ts">merge</a>({ ...params }) -> CRMObjectsSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/search">client.crm.v3.objects.contacts.<a href="./src/resources/crm/v3/objects/contacts/contacts.ts">search</a>({ ...params }) -> CRMObjectsCollectionResponseWithTotalSimplePublicObject</code>

##### Batch

Methods:

- <code title="post /crm/v3/objects/contacts/batch/create">client.crm.v3.objects.contacts.batch.<a href="./src/resources/crm/v3/objects/contacts/batch.ts">create</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/update">client.crm.v3.objects.contacts.batch.<a href="./src/resources/crm/v3/objects/contacts/batch.ts">update</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/archive">client.crm.v3.objects.contacts.batch.<a href="./src/resources/crm/v3/objects/contacts/batch.ts">archive</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/contacts/batch/read">client.crm.v3.objects.contacts.batch.<a href="./src/resources/crm/v3/objects/contacts/batch.ts">read</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/upsert">client.crm.v3.objects.contacts.batch.<a href="./src/resources/crm/v3/objects/contacts/batch.ts">upsert</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicUpsertObject</code>

#### Number0_3

Methods:

- <code title="get /crm/v3/objects/0-3/{dealId}">client.crm.v3.objects.number0_3.<a href="./src/resources/crm/v3/objects/number-0-3/number-0-3.ts">retrieve</a>(dealID, { ...params }) -> CRMObjectsSimplePublicObjectWithAssociations</code>
- <code title="patch /crm/v3/objects/0-3/{dealId}">client.crm.v3.objects.number0_3.<a href="./src/resources/crm/v3/objects/number-0-3/number-0-3.ts">update</a>(dealID, { ...params }) -> CRMObjectsSimplePublicObject</code>
- <code title="delete /crm/v3/objects/0-3/{dealId}">client.crm.v3.objects.number0_3.<a href="./src/resources/crm/v3/objects/number-0-3/number-0-3.ts">delete</a>(dealID) -> void</code>
- <code title="post /crm/v3/objects/0-3">client.crm.v3.objects.number0_3.<a href="./src/resources/crm/v3/objects/number-0-3/number-0-3.ts">\_0_3</a>({ ...params }) -> CRMObjectsCreatedResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-3/merge">client.crm.v3.objects.number0_3.<a href="./src/resources/crm/v3/objects/number-0-3/number-0-3.ts">merge</a>({ ...params }) -> CRMObjectsSimplePublicObject</code>
- <code title="get /crm/v3/objects/0-3">client.crm.v3.objects.number0_3.<a href="./src/resources/crm/v3/objects/number-0-3/number-0-3.ts">retrieve0_3</a>({ ...params }) -> CRMObjectsCollectionResponseSimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/0-3/search">client.crm.v3.objects.number0_3.<a href="./src/resources/crm/v3/objects/number-0-3/number-0-3.ts">search</a>({ ...params }) -> CRMObjectsCollectionResponseWithTotalSimplePublicObject</code>

##### Batch

Methods:

- <code title="post /crm/v3/objects/0-3/batch/create">client.crm.v3.objects.number0_3.batch.<a href="./src/resources/crm/v3/objects/number-0-3/batch.ts">create</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-3/batch/update">client.crm.v3.objects.number0_3.batch.<a href="./src/resources/crm/v3/objects/number-0-3/batch.ts">update</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-3/batch/archive">client.crm.v3.objects.number0_3.batch.<a href="./src/resources/crm/v3/objects/number-0-3/batch.ts">archive</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/0-3/batch/read">client.crm.v3.objects.number0_3.batch.<a href="./src/resources/crm/v3/objects/number-0-3/batch.ts">read</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-3/batch/upsert">client.crm.v3.objects.number0_3.batch.<a href="./src/resources/crm/v3/objects/number-0-3/batch.ts">upsert</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicUpsertObject</code>

### Pipelines

Types:

- <code><a href="./src/resources/crm/v3/pipelines/pipelines.ts">CRMPipelinesPipeline</a></code>
- <code><a href="./src/resources/crm/v3/pipelines/pipelines.ts">CRMPipelinesPipelineInput</a></code>
- <code><a href="./src/resources/crm/v3/pipelines/pipelines.ts">PipelineRetrieveResponse</a></code>

Methods:

- <code title="get /crm/v3/pipelines/{objectType}">client.crm.v3.pipelines.<a href="./src/resources/crm/v3/pipelines/pipelines.ts">retrieve</a>(objectType) -> PipelineRetrieveResponse</code>
- <code title="post /crm/v3/pipelines/{objectType}">client.crm.v3.pipelines.<a href="./src/resources/crm/v3/pipelines/pipelines.ts">update</a>(objectType, { ...params }) -> CRMPipelinesPipeline</code>
- <code title="delete /crm/v3/pipelines/{objectType}/{pipelineId}">client.crm.v3.pipelines.<a href="./src/resources/crm/v3/pipelines/pipelines.ts">delete</a>(pipelineID, { ...params }) -> void</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/audit">client.crm.v3.pipelines.<a href="./src/resources/crm/v3/pipelines/pipelines.ts">retrieveAudit</a>(pipelineID, { ...params }) -> CRMPipelinesCollectionResponsePublicAuditInfoNoPaging</code>

#### Stages

Types:

- <code><a href="./src/resources/crm/v3/pipelines/stages.ts">CRMPipelinesCollectionResponsePublicAuditInfoNoPaging</a></code>
- <code><a href="./src/resources/crm/v3/pipelines/stages.ts">CRMPipelinesPipelineStage</a></code>
- <code><a href="./src/resources/crm/v3/pipelines/stages.ts">CRMPipelinesPipelineStageInput</a></code>
- <code><a href="./src/resources/crm/v3/pipelines/stages.ts">StageListResponse</a></code>

Methods:

- <code title="post /crm/v3/pipelines/{objectType}/{pipelineId}/stages">client.crm.v3.pipelines.stages.<a href="./src/resources/crm/v3/pipelines/stages.ts">create</a>(pipelineID, { ...params }) -> CRMPipelinesPipelineStage</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.v3.pipelines.stages.<a href="./src/resources/crm/v3/pipelines/stages.ts">retrieve</a>(stageID, { ...params }) -> CRMPipelinesPipelineStage</code>
- <code title="patch /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.v3.pipelines.stages.<a href="./src/resources/crm/v3/pipelines/stages.ts">update</a>(stageID, { ...params }) -> CRMPipelinesPipelineStage</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/stages">client.crm.v3.pipelines.stages.<a href="./src/resources/crm/v3/pipelines/stages.ts">list</a>(pipelineID, { ...params }) -> StageListResponse</code>
- <code title="delete /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.v3.pipelines.stages.<a href="./src/resources/crm/v3/pipelines/stages.ts">delete</a>(stageID, { ...params }) -> void</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}/audit">client.crm.v3.pipelines.stages.<a href="./src/resources/crm/v3/pipelines/stages.ts">retrieveAudit</a>(stageID, { ...params }) -> CRMPipelinesCollectionResponsePublicAuditInfoNoPaging</code>

### Properties

Types:

- <code><a href="./src/resources/crm/v3/properties/properties.ts">CRMOption</a></code>
- <code><a href="./src/resources/crm/v3/properties/properties.ts">CRMPropertiesOptionInput</a></code>
- <code><a href="./src/resources/crm/v3/properties/properties.ts">CRMPropertiesPropertyCreate</a></code>
- <code><a href="./src/resources/crm/v3/properties/properties.ts">CRMProperty</a></code>
- <code><a href="./src/resources/crm/v3/properties/properties.ts">PropertyRetrieveResponse</a></code>
- <code><a href="./src/resources/crm/v3/properties/properties.ts">PropertyUpdateResponse</a></code>

Methods:

- <code title="get /crm/v3/properties/{objectType}">client.crm.v3.properties.<a href="./src/resources/crm/v3/properties/properties.ts">retrieve</a>(objectType, { ...params }) -> PropertyRetrieveResponse</code>
- <code title="post /crm/v3/properties/{objectType}">client.crm.v3.properties.<a href="./src/resources/crm/v3/properties/properties.ts">update</a>(objectType, { ...params }) -> PropertyUpdateResponse</code>
- <code title="delete /crm/v3/properties/{objectType}/{propertyName}">client.crm.v3.properties.<a href="./src/resources/crm/v3/properties/properties.ts">delete</a>(propertyName, { ...params }) -> void</code>

#### Batch

Types:

- <code><a href="./src/resources/crm/v3/properties/batch.ts">CRMPropertiesBatchResponseProperty</a></code>
- <code><a href="./src/resources/crm/v3/properties/batch.ts">CRMPropertiesPropertyName</a></code>

Methods:

- <code title="post /crm/v3/properties/{objectType}/batch/create">client.crm.v3.properties.batch.<a href="./src/resources/crm/v3/properties/batch.ts">create</a>(objectType, { ...params }) -> CRMPropertiesBatchResponseProperty</code>
- <code title="post /crm/v3/properties/{objectType}/batch/archive">client.crm.v3.properties.batch.<a href="./src/resources/crm/v3/properties/batch.ts">archive</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm/v3/properties/{objectType}/batch/read">client.crm.v3.properties.batch.<a href="./src/resources/crm/v3/properties/batch.ts">read</a>(objectType, { ...params }) -> CRMPropertiesBatchResponseProperty</code>

#### Groups

Types:

- <code><a href="./src/resources/crm/v3/properties/groups.ts">CRMPropertiesPropertyGroup</a></code>
- <code><a href="./src/resources/crm/v3/properties/groups.ts">GroupCreateResponse</a></code>
- <code><a href="./src/resources/crm/v3/properties/groups.ts">GroupListResponse</a></code>

Methods:

- <code title="post /crm/v3/properties/{objectType}/groups">client.crm.v3.properties.groups.<a href="./src/resources/crm/v3/properties/groups.ts">create</a>(objectType, { ...params }) -> GroupCreateResponse</code>
- <code title="get /crm/v3/properties/{objectType}/groups/{groupName}">client.crm.v3.properties.groups.<a href="./src/resources/crm/v3/properties/groups.ts">retrieve</a>(groupName, { ...params }) -> CRMPropertiesPropertyGroup</code>
- <code title="patch /crm/v3/properties/{objectType}/groups/{groupName}">client.crm.v3.properties.groups.<a href="./src/resources/crm/v3/properties/groups.ts">update</a>(groupName, { ...params }) -> CRMPropertiesPropertyGroup</code>
- <code title="get /crm/v3/properties/{objectType}/groups">client.crm.v3.properties.groups.<a href="./src/resources/crm/v3/properties/groups.ts">list</a>(objectType) -> GroupListResponse</code>
- <code title="delete /crm/v3/properties/{objectType}/groups/{groupName}">client.crm.v3.properties.groups.<a href="./src/resources/crm/v3/properties/groups.ts">delete</a>(groupName, { ...params }) -> void</code>

## V4

### Objects

#### Associations

Types:

- <code><a href="./src/resources/crm/v4/objects/associations.ts">AssociationSpecV4</a></code>
- <code><a href="./src/resources/crm/v4/objects/associations.ts">BatchResponsePublicDefaultAssociation</a></code>
- <code><a href="./src/resources/crm/v4/objects/associations.ts">LabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/v4/objects/associations.ts">MultiAssociatedObjectWithLabel</a></code>
- <code><a href="./src/resources/crm/v4/objects/associations.ts">AssociationCreateResponse</a></code>
- <code><a href="./src/resources/crm/v4/objects/associations.ts">AssociationListResponse</a></code>

Methods:

- <code title="put /crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">client.crm.v4.objects.associations.<a href="./src/resources/crm/v4/objects/associations.ts">create</a>(toObjectID, [ ...body ]) -> AssociationCreateResponse</code>
- <code title="get /crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}">client.crm.v4.objects.associations.<a href="./src/resources/crm/v4/objects/associations.ts">list</a>(toObjectType, { ...params }) -> AssociationListResponse</code>
- <code title="delete /crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">client.crm.v4.objects.associations.<a href="./src/resources/crm/v4/objects/associations.ts">delete</a>(toObjectID, { ...params }) -> void</code>
- <code title="put /crm/v4/objects/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">client.crm.v4.objects.associations.<a href="./src/resources/crm/v4/objects/associations.ts">createDefault</a>(toObjectID, { ...params }) -> BatchResponsePublicDefaultAssociation</code>

### Associations

#### Batch

Types:

- <code><a href="./src/resources/crm/v4/associations/batch/batch.ts">AssociationSpec</a></code>
- <code><a href="./src/resources/crm/v4/associations/batch/batch.ts">BatchInputPublicAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/v4/associations/batch/batch.ts">BatchResponseVoid</a></code>
- <code><a href="./src/resources/crm/v4/associations/batch/batch.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/crm/v4/associations/batch/batch.ts">BatchReadResponse</a></code>

Methods:

- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/create">client.crm.v4.associations.batch.<a href="./src/resources/crm/v4/associations/batch/batch.ts">create</a>(toObjectType, { ...params }) -> BatchCreateResponse</code>
- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/archive">client.crm.v4.associations.batch.<a href="./src/resources/crm/v4/associations/batch/batch.ts">delete</a>(toObjectType, { ...params }) -> BatchResponseVoid</code>
- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/read">client.crm.v4.associations.batch.<a href="./src/resources/crm/v4/associations/batch/batch.ts">read</a>(toObjectType, { ...params }) -> BatchReadResponse</code>

##### Labels

Methods:

- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/labels/archive">client.crm.v4.associations.batch.labels.<a href="./src/resources/crm/v4/associations/batch/labels.ts">delete</a>(toObjectType, { ...params }) -> BatchResponseVoid</code>

##### Associate

Methods:

- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/associate/default">client.crm.v4.associations.batch.associate.<a href="./src/resources/crm/v4/associations/batch/associate.ts">createDefault</a>(toObjectType, { ...params }) -> BatchResponsePublicDefaultAssociation</code>

#### Usage

Types:

- <code><a href="./src/resources/crm/v4/associations/usage.ts">UsageReportResponse</a></code>

Methods:

- <code title="post /crm/v4/associations/usage/high-usage-report/{userId}">client.crm.v4.associations.usage.<a href="./src/resources/crm/v4/associations/usage.ts">report</a>(userID) -> UsageReportResponse</code>

# CRMObjectSchemas

## V3

### Schemas

Types:

- <code><a href="./src/resources/crm-object-schemas/v3/schemas/schemas.ts">CRMObjectSchema</a></code>
- <code><a href="./src/resources/crm-object-schemas/v3/schemas/schemas.ts">CRMObjectTypeDefinitionLabels</a></code>
- <code><a href="./src/resources/crm-object-schemas/v3/schemas/schemas.ts">SchemaUpdateResponse</a></code>
- <code><a href="./src/resources/crm-object-schemas/v3/schemas/schemas.ts">SchemaListResponse</a></code>

Methods:

- <code title="post /crm-object-schemas/v3/schemas">client.crmObjectSchemas.v3.schemas.<a href="./src/resources/crm-object-schemas/v3/schemas/schemas.ts">create</a>({ ...params }) -> CRMObjectSchema</code>
- <code title="get /crm-object-schemas/v3/schemas/{objectType}">client.crmObjectSchemas.v3.schemas.<a href="./src/resources/crm-object-schemas/v3/schemas/schemas.ts">retrieve</a>(objectType) -> CRMObjectSchema</code>
- <code title="patch /crm-object-schemas/v3/schemas/{objectType}">client.crmObjectSchemas.v3.schemas.<a href="./src/resources/crm-object-schemas/v3/schemas/schemas.ts">update</a>(objectType, { ...params }) -> SchemaUpdateResponse</code>
- <code title="get /crm-object-schemas/v3/schemas">client.crmObjectSchemas.v3.schemas.<a href="./src/resources/crm-object-schemas/v3/schemas/schemas.ts">list</a>({ ...params }) -> SchemaListResponse</code>
- <code title="delete /crm-object-schemas/v3/schemas/{objectType}">client.crmObjectSchemas.v3.schemas.<a href="./src/resources/crm-object-schemas/v3/schemas/schemas.ts">delete</a>(objectType, { ...params }) -> void</code>

#### Associations

Types:

- <code><a href="./src/resources/crm-object-schemas/v3/schemas/associations.ts">CRMAssociationDefinition</a></code>

Methods:

- <code title="post /crm-object-schemas/v3/schemas/{objectType}/associations">client.crmObjectSchemas.v3.schemas.associations.<a href="./src/resources/crm-object-schemas/v3/schemas/associations.ts">create</a>(objectType, { ...params }) -> CRMAssociationDefinition</code>
- <code title="delete /crm-object-schemas/v3/schemas/{objectType}/associations/{associationIdentifier}">client.crmObjectSchemas.v3.schemas.associations.<a href="./src/resources/crm-object-schemas/v3/schemas/associations.ts">delete</a>(associationIdentifier, { ...params }) -> void</code>

# Files

## V3

### Files

Types:

- <code><a href="./src/resources/files/v3/files/files.ts">FilesFile</a></code>
- <code><a href="./src/resources/files/v3/files/files.ts">FileGetSignedURLResponse</a></code>
- <code><a href="./src/resources/files/v3/files/files.ts">FileRetrieveByPathResponse</a></code>
- <code><a href="./src/resources/files/v3/files/files.ts">FileSearchResponse</a></code>

Methods:

- <code title="get /files/v3/files/{fileId}">client.files.v3.files.<a href="./src/resources/files/v3/files/files.ts">retrieve</a>(fileID, { ...params }) -> FilesFile</code>
- <code title="patch /files/v3/files/{fileId}">client.files.v3.files.<a href="./src/resources/files/v3/files/files.ts">update</a>(fileID, { ...params }) -> FilesFile</code>
- <code title="delete /files/v3/files/{fileId}">client.files.v3.files.<a href="./src/resources/files/v3/files/files.ts">delete</a>(fileID) -> void</code>
- <code title="delete /files/v3/files/{fileId}/gdpr-delete">client.files.v3.files.<a href="./src/resources/files/v3/files/files.ts">gdprDelete</a>(fileID) -> void</code>
- <code title="get /files/v3/files/{fileId}/signed-url">client.files.v3.files.<a href="./src/resources/files/v3/files/files.ts">getSignedURL</a>(fileID, { ...params }) -> FileGetSignedURLResponse</code>
- <code title="put /files/v3/files/{fileId}">client.files.v3.files.<a href="./src/resources/files/v3/files/files.ts">replace</a>(fileID, { ...params }) -> FilesFile</code>
- <code title="get /files/v3/files/stat/{path}">client.files.v3.files.<a href="./src/resources/files/v3/files/files.ts">retrieveByPath</a>(path\_, { ...params }) -> FileRetrieveByPathResponse</code>
- <code title="get /files/v3/files/search">client.files.v3.files.<a href="./src/resources/files/v3/files/files.ts">search</a>({ ...params }) -> FileSearchResponse</code>
- <code title="post /files/v3/files">client.files.v3.files.<a href="./src/resources/files/v3/files/files.ts">upload</a>({ ...params }) -> FilesFile</code>

#### ImportFromURL

##### Async

Types:

- <code><a href="./src/resources/files/v3/files/import-from-url/async/async.ts">AsyncCreateResponse</a></code>

Methods:

- <code title="post /files/v3/files/import-from-url/async">client.files.v3.files.importFromURL.async.<a href="./src/resources/files/v3/files/import-from-url/async/async.ts">create</a>({ ...params }) -> AsyncCreateResponse</code>

###### Tasks

Types:

- <code><a href="./src/resources/files/v3/files/import-from-url/async/tasks.ts">TaskGetStatusResponse</a></code>

Methods:

- <code title="get /files/v3/files/import-from-url/async/tasks/{taskId}/status">client.files.v3.files.importFromURL.async.tasks.<a href="./src/resources/files/v3/files/import-from-url/async/tasks.ts">getStatus</a>(taskID) -> TaskGetStatusResponse</code>

### Folders

Types:

- <code><a href="./src/resources/files/v3/folders/folders.ts">FilesFolder</a></code>
- <code><a href="./src/resources/files/v3/folders/folders.ts">FolderSearchResponse</a></code>

Methods:

- <code title="post /files/v3/folders">client.files.v3.folders.<a href="./src/resources/files/v3/folders/folders.ts">create</a>({ ...params }) -> FilesFolder</code>
- <code title="get /files/v3/folders/{folderId}">client.files.v3.folders.<a href="./src/resources/files/v3/folders/folders.ts">retrieve</a>(folderID, { ...params }) -> FilesFolder</code>
- <code title="delete /files/v3/folders/{folderId}">client.files.v3.folders.<a href="./src/resources/files/v3/folders/folders.ts">delete</a>(folderID) -> void</code>
- <code title="delete /files/v3/folders/{folderPath}">client.files.v3.folders.<a href="./src/resources/files/v3/folders/folders.ts">deleteByPath</a>(folderPath) -> void</code>
- <code title="get /files/v3/folders/{folderPath}">client.files.v3.folders.<a href="./src/resources/files/v3/folders/folders.ts">retrieveByPath</a>(folderPath, { ...params }) -> FilesFolder</code>
- <code title="get /files/v3/folders/search">client.files.v3.folders.<a href="./src/resources/files/v3/folders/folders.ts">search</a>({ ...params }) -> FolderSearchResponse</code>

#### Update

##### Async

Types:

- <code><a href="./src/resources/files/v3/folders/update/async/async.ts">AsyncCreateResponse</a></code>

Methods:

- <code title="post /files/v3/folders/update/async">client.files.v3.folders.update.async.<a href="./src/resources/files/v3/folders/update/async/async.ts">create</a>({ ...params }) -> AsyncCreateResponse</code>

###### Tasks

Types:

- <code><a href="./src/resources/files/v3/folders/update/async/tasks.ts">TaskGetStatusResponse</a></code>

Methods:

- <code title="get /files/v3/folders/update/async/tasks/{taskId}/status">client.files.v3.folders.update.async.tasks.<a href="./src/resources/files/v3/folders/update/async/tasks.ts">getStatus</a>(taskID) -> TaskGetStatusResponse</code>

# Marketing

## V3

### Forms

Types:

- <code><a href="./src/resources/marketing/v3/forms.ts">DatepickerField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">DependentField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">DropdownField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">EmailField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">FileField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">FormDefinitionBase</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">FormDefinitionCreateBase</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">HubspotFormDefinition</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">HubspotFormDefinitionCreate</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">LegalConsentCheckbox</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">MobilePhoneField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">MultiLineTextField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">MultipleCheckboxesField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">NumberField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">PaymentLinkRadioField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">PhoneField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">RadioField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">SingleCheckboxField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">SingleLineTextField</a></code>
- <code><a href="./src/resources/marketing/v3/forms.ts">FormListResponse</a></code>

Methods:

- <code title="post /marketing/v3/forms/">client.marketing.v3.forms.<a href="./src/resources/marketing/v3/forms.ts">create</a>() -> unknown</code>
- <code title="get /marketing/v3/forms/{formId}">client.marketing.v3.forms.<a href="./src/resources/marketing/v3/forms.ts">retrieve</a>(formID, { ...params }) -> unknown</code>
- <code title="put /marketing/v3/forms/{formId}">client.marketing.v3.forms.<a href="./src/resources/marketing/v3/forms.ts">update</a>(formID) -> unknown</code>
- <code title="get /marketing/v3/forms/">client.marketing.v3.forms.<a href="./src/resources/marketing/v3/forms.ts">list</a>({ ...params }) -> FormListResponse</code>
- <code title="delete /marketing/v3/forms/{formId}">client.marketing.v3.forms.<a href="./src/resources/marketing/v3/forms.ts">archive</a>(formID) -> void</code>
- <code title="patch /marketing/v3/forms/{formId}">client.marketing.v3.forms.<a href="./src/resources/marketing/v3/forms.ts">partialUpdate</a>(formID, { ...params }) -> unknown</code>

# CommunicationPreferences

## V4

Types:

- <code><a href="./src/resources/communication-preferences/v4/v4.ts">MarketingSubscriptionsSubscriptionDefinition</a></code>
- <code><a href="./src/resources/communication-preferences/v4/v4.ts">V4RetrieveDefinitionsResponse</a></code>

Methods:

- <code title="get /communication-preferences/v4/definitions">client.communicationPreferences.v4.<a href="./src/resources/communication-preferences/v4/v4.ts">retrieveDefinitions</a>({ ...params }) -> V4RetrieveDefinitionsResponse</code>

### Statuses

Methods:

- <code title="get /communication-preferences/v4/statuses/{subscriberIdString}">client.communicationPreferences.v4.statuses.<a href="./src/resources/communication-preferences/v4/statuses/statuses.ts">retrieve</a>(subscriberIDString, { ...params }) -> MarketingSubscriptionsActionResponseWithResultsPublicStatus</code>
- <code title="post /communication-preferences/v4/statuses/{subscriberIdString}">client.communicationPreferences.v4.statuses.<a href="./src/resources/communication-preferences/v4/statuses/statuses.ts">update</a>(subscriberIDString, { ...params }) -> MarketingSubscriptionsActionResponseWithResultsPublicStatus</code>

#### UnsubscribeAll

Types:

- <code><a href="./src/resources/communication-preferences/v4/statuses/unsubscribe-all.ts">MarketingSubscriptionsActionResponseWithResultsPublicStatus</a></code>
- <code><a href="./src/resources/communication-preferences/v4/statuses/unsubscribe-all.ts">MarketingSubscriptionsPublicStatus</a></code>
- <code><a href="./src/resources/communication-preferences/v4/statuses/unsubscribe-all.ts">MarketingSubscriptionsPublicWideStatus</a></code>
- <code><a href="./src/resources/communication-preferences/v4/statuses/unsubscribe-all.ts">UnsubscribeAllRetrieveResponse</a></code>

Methods:

- <code title="get /communication-preferences/v4/statuses/{subscriberIdString}/unsubscribe-all">client.communicationPreferences.v4.statuses.unsubscribeAll.<a href="./src/resources/communication-preferences/v4/statuses/unsubscribe-all.ts">retrieve</a>(subscriberIDString, { ...params }) -> UnsubscribeAllRetrieveResponse</code>
- <code title="post /communication-preferences/v4/statuses/{subscriberIdString}/unsubscribe-all">client.communicationPreferences.v4.statuses.unsubscribeAll.<a href="./src/resources/communication-preferences/v4/statuses/unsubscribe-all.ts">unsubscribe</a>(subscriberIDString, { ...params }) -> MarketingSubscriptionsActionResponseWithResultsPublicStatus</code>

#### Batch

Types:

- <code><a href="./src/resources/communication-preferences/v4/statuses/batch/batch.ts">BatchRetrieveResponse</a></code>
- <code><a href="./src/resources/communication-preferences/v4/statuses/batch/batch.ts">BatchUpdateResponse</a></code>

Methods:

- <code title="post /communication-preferences/v4/statuses/batch/read">client.communicationPreferences.v4.statuses.batch.<a href="./src/resources/communication-preferences/v4/statuses/batch/batch.ts">retrieve</a>({ ...params }) -> BatchRetrieveResponse</code>
- <code title="post /communication-preferences/v4/statuses/batch/write">client.communicationPreferences.v4.statuses.batch.<a href="./src/resources/communication-preferences/v4/statuses/batch/batch.ts">update</a>({ ...params }) -> BatchUpdateResponse</code>

##### UnsubscribeAll

Types:

- <code><a href="./src/resources/communication-preferences/v4/statuses/batch/unsubscribe-all.ts">UnsubscribeAllRetrieveResponse</a></code>
- <code><a href="./src/resources/communication-preferences/v4/statuses/batch/unsubscribe-all.ts">UnsubscribeAllUnsubscribeAllResponse</a></code>

Methods:

- <code title="post /communication-preferences/v4/statuses/batch/unsubscribe-all/read">client.communicationPreferences.v4.statuses.batch.unsubscribeAll.<a href="./src/resources/communication-preferences/v4/statuses/batch/unsubscribe-all.ts">retrieve</a>({ ...params }) -> UnsubscribeAllRetrieveResponse</code>
- <code title="post /communication-preferences/v4/statuses/batch/unsubscribe-all">client.communicationPreferences.v4.statuses.batch.unsubscribeAll.<a href="./src/resources/communication-preferences/v4/statuses/batch/unsubscribe-all.ts">unsubscribeAll</a>({ ...params }) -> UnsubscribeAllUnsubscribeAllResponse</code>

## V3

Types:

- <code><a href="./src/resources/communication-preferences/v3/v3.ts">MarketingSubscriptionsV3PublicSubscriptionStatus</a></code>
- <code><a href="./src/resources/communication-preferences/v3/v3.ts">MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest</a></code>
- <code><a href="./src/resources/communication-preferences/v3/v3.ts">V3RetrieveDefinitionsResponse</a></code>

Methods:

- <code title="get /communication-preferences/v3/definitions">client.communicationPreferences.v3.<a href="./src/resources/communication-preferences/v3/v3.ts">retrieveDefinitions</a>() -> V3RetrieveDefinitionsResponse</code>
- <code title="post /communication-preferences/v3/subscribe">client.communicationPreferences.v3.<a href="./src/resources/communication-preferences/v3/v3.ts">subscribe</a>({ ...params }) -> MarketingSubscriptionsV3PublicSubscriptionStatus</code>
- <code title="post /communication-preferences/v3/unsubscribe">client.communicationPreferences.v3.<a href="./src/resources/communication-preferences/v3/v3.ts">unsubscribe</a>({ ...params }) -> MarketingSubscriptionsV3PublicSubscriptionStatus</code>

### Status

Types:

- <code><a href="./src/resources/communication-preferences/v3/status.ts">StatusRetrieveResponse</a></code>

Methods:

- <code title="get /communication-preferences/v3/status/email/{emailAddress}">client.communicationPreferences.v3.status.<a href="./src/resources/communication-preferences/v3/status.ts">retrieve</a>(emailAddress) -> StatusRetrieveResponse</code>

# Webhooks

## V3

### Settings

Types:

- <code><a href="./src/resources/webhooks/v3/settings.ts">Settings</a></code>
- <code><a href="./src/resources/webhooks/v3/settings.ts">ThrottlingSettings</a></code>

Methods:

- <code title="get /webhooks/v3/{appId}/settings">client.webhooks.v3.settings.<a href="./src/resources/webhooks/v3/settings.ts">retrieve</a>(appID) -> Settings</code>
- <code title="put /webhooks/v3/{appId}/settings">client.webhooks.v3.settings.<a href="./src/resources/webhooks/v3/settings.ts">update</a>(appID, { ...params }) -> Settings</code>
- <code title="delete /webhooks/v3/{appId}/settings">client.webhooks.v3.settings.<a href="./src/resources/webhooks/v3/settings.ts">delete</a>(appID) -> void</code>

### Subscriptions

Types:

- <code><a href="./src/resources/webhooks/v3/subscriptions/subscriptions.ts">Subscription</a></code>
- <code><a href="./src/resources/webhooks/v3/subscriptions/subscriptions.ts">SubscriptionListResponse</a></code>

Methods:

- <code title="post /webhooks/v3/{appId}/subscriptions">client.webhooks.v3.subscriptions.<a href="./src/resources/webhooks/v3/subscriptions/subscriptions.ts">create</a>(appID, { ...params }) -> Subscription</code>
- <code title="get /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.v3.subscriptions.<a href="./src/resources/webhooks/v3/subscriptions/subscriptions.ts">retrieve</a>(subscriptionID, { ...params }) -> Subscription</code>
- <code title="patch /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.v3.subscriptions.<a href="./src/resources/webhooks/v3/subscriptions/subscriptions.ts">update</a>(subscriptionID, { ...params }) -> Subscription</code>
- <code title="get /webhooks/v3/{appId}/subscriptions">client.webhooks.v3.subscriptions.<a href="./src/resources/webhooks/v3/subscriptions/subscriptions.ts">list</a>(appID) -> SubscriptionListResponse</code>
- <code title="delete /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.v3.subscriptions.<a href="./src/resources/webhooks/v3/subscriptions/subscriptions.ts">delete</a>(subscriptionID, { ...params }) -> void</code>

#### Batch

Types:

- <code><a href="./src/resources/webhooks/v3/subscriptions/batch.ts">BatchCreateResponse</a></code>

Methods:

- <code title="post /webhooks/v3/{appId}/subscriptions/batch/update">client.webhooks.v3.subscriptions.batch.<a href="./src/resources/webhooks/v3/subscriptions/batch.ts">create</a>(appID, { ...params }) -> BatchCreateResponse</code>
