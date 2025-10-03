# Shared

Types:

- <code><a href="./src/resources/shared.ts">BatchInputString</a></code>
- <code><a href="./src/resources/shared.ts">Error</a></code>
- <code><a href="./src/resources/shared.ts">ErrorDetail</a></code>
- <code><a href="./src/resources/shared.ts">ForwardPaging</a></code>
- <code><a href="./src/resources/shared.ts">NextPage</a></code>
- <code><a href="./src/resources/shared.ts">Paging</a></code>
- <code><a href="./src/resources/shared.ts">PreviousPage</a></code>
- <code><a href="./src/resources/shared.ts">StandardError</a></code>

# Account

Types:

- <code><a href="./src/resources/account/account.ts">AccountActingUser</a></code>
- <code><a href="./src/resources/account/account.ts">AccountCollectionResponseHydratedCriticalActionForwardPaging</a></code>
- <code><a href="./src/resources/account/account.ts">AccountCollectionResponsePublicAPIUserActionEventForwardPaging</a></code>
- <code><a href="./src/resources/account/account.ts">AccountCollectionResponsePublicLoginAuditForwardPaging</a></code>
- <code><a href="./src/resources/account/account.ts">AccountHydratedCriticalAction</a></code>
- <code><a href="./src/resources/account/account.ts">AccountPublicAPIUserActionEvent</a></code>
- <code><a href="./src/resources/account/account.ts">AccountPublicLoginAudit</a></code>

## Info

Types:

- <code><a href="./src/resources/account/info.ts">AccountInfoAPIUsage</a></code>
- <code><a href="./src/resources/account/info.ts">AccountInfoCollectionResponseAPIUsage</a></code>
- <code><a href="./src/resources/account/info.ts">AccountInfoPortalInformationResponse</a></code>

# Auth

## OAuth

Types:

- <code><a href="./src/resources/auth/oauth.ts">AuthOAuthAccessTokenInfoResponse</a></code>
- <code><a href="./src/resources/auth/oauth.ts">AuthOAuthRefreshTokenInfoResponse</a></code>
- <code><a href="./src/resources/auth/oauth.ts">AuthOAuthTokenResponseIf</a></code>

Methods:

- <code title="post /oauth/v1/token">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">create</a>({ ...params }) -> AuthOAuthTokenResponseIf</code>
- <code title="delete /oauth/v1/refresh-tokens/{token}">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">delete</a>(token) -> void</code>
- <code title="get /oauth/v1/refresh-tokens/{token}">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">get</a>(token) -> AuthOAuthRefreshTokenInfoResponse</code>

# Automation

Types:

- <code><a href="./src/resources/automation/automation.ts">AutomationAPIAbTestBranchAction</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIActionDataValue</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIAppendObjectPropertyValue</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIAssociationDataSource</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIAssociationTimestampDataSource</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIAuthKeyWebhookAuthSettings</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIBlockedDate</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIConnection</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIContactFlow</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIContactFlowCreateRequest</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIContactFlowPutRequest</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIContactPropertyAnchor</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPICustomCodeAction</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIDailyEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIDatasetFieldPropertyFilterDataSource</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIEnrolledArgumentPropertyFilterDataSource</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIEnrolledRecordPropertyFilterDataSource</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIEnrollmentEventPropertyValue</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIEnumerationOutputField</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIEventBasedEnrollmentCriteria</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFetchedObjectPropertyValue</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFlow</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFlowBatchFetchFlowIDCoordinate</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFlowBatchFetchMigrationFlowIDCoordinate</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFlowBatchFetchMigrationWorkflowIDCoordinate</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFlowBatchInput</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFlowBatchMigrationInput</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFlowCreateRequest</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFlowEmailCampaign</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFlowListing</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIFlowPutRequest</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIIncrementValue</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIInputVariable</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIListBasedEnrollmentCriteria</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIListBranch</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIListBranchAction</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIManualEnrollmentCriteria</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIMonthlyRelativeDaysEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIMonthlySpecificDaysEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIObjectPropertyValue</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIPlatformFlow</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIPlatformFlowCreateRequest</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIPlatformFlowPutRequest</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIPropertyBasedEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIRelativeDateTimeValue</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPISignatureWebhookAuthSettings</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPISingleConnectionAction</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPISort</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIStaticAppendValue</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIStaticBranch</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIStaticBranchAction</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIStaticDateAnchor</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIStaticPropertyFilterDataSource</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIStaticTimeZoneStrategy</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIStaticValue</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPITimeDelay</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPITimeOfDay</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPITimestampValue</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPITimeWindow</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIUnEnrollmentSetting</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIWebhookAction</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIWeeklyEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationAPIYearlyEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationBatchResponseAPIFlow</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationBatchResponseAPIFlowWithErrors</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationBatchResponseFlowIDWorkflowIDMappingResponse</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationBatchResponseFlowIDWorkflowIDMappingResponseWithErrors</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationCollectionResponseAPIFlowEmailCampaign</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationCollectionResponseAPIFlowListingForwardPaging</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationFlowIDWorkflowIDMappingResponse</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicAbsoluteComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicAbsoluteRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicAdsSearchFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicAdsTimeFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicAllHistoryRefineBy</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicAllPropertyTypesOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicAndFilterBranch</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicAssociationFilterBranch</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicAssociationInListFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicBoolPropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicCalendarDatePropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicCampaignInfluencedFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicCommunicationSubscriptionFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicComparativeDatePropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicComparativePropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicConstantFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicCtaAnalyticsFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicDatePoint</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicDatePropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicDateTimePropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicEmailEventFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicEmailSubscriptionFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicEnumerationPropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicEventAnalyticsFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicEventFilterMetadata</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicFiscalQuarterReference</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicFiscalYearReference</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicFormSubmissionFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicFormSubmissionOnPageFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicIndexedTimePoint</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicIndexOffset</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicInListFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicInListFilterMetadata</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicIntegrationEventFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicMonthReference</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicMultiStringPropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicNotAllFilterBranch</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicNotAnyFilterBranch</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicNowReference</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicNumAssociationsFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicNumberPropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicNumOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicOrFilterBranch</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicPageViewAnalyticsFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicPrivacyAnalyticsFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicPropertyAssociationFilterBranch</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicPropertyAssociationInListFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicPropertyFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicPropertyReferencedTime</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicQuarterReference</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicRangedDatePropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicRangedNumberPropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicRangedTimeOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicRelativeComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicRelativeRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicRestrictedFilterBranch</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicRollingDateRangePropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicRollingPropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicSetOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicStringPropertyOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicSurveyMonkeyFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicSurveyMonkeyValueFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicTimeOffset</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicTimePointOperation</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicTodayReference</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicUnifiedEventsFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicUnifiedEventsFilterBranch</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicWebinarFilter</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicWeekReference</a></code>
- <code><a href="./src/resources/automation/automation.ts">AutomationPublicYearReference</a></code>

## Actions

Types:

- <code><a href="./src/resources/automation/actions.ts">AutomationActionsBatchInputCallbackCompletionBatchRequest</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsCallbackCompletionBatchRequest</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsCallbackCompletionRequest</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsCollectionResponsePublicActionDefinitionForwardPaging</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsCollectionResponsePublicActionFunctionIdentifierNoPaging</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsCollectionResponsePublicActionRevisionForwardPaging</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsFieldTypeDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsInputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsOption</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsOutputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicActionDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicActionDefinitionEgg</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicActionDefinitionPatch</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicActionFunction</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicActionFunctionIdentifier</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicActionLabels</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicActionRevision</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicConditionalSingleFieldDependency</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicExecutionTranslationRule</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicObjectRequestOptions</a></code>
- <code><a href="./src/resources/automation/actions.ts">AutomationActionsPublicSingleFieldDependency</a></code>

Methods:

- <code title="post /automation/v4/actions/{appId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">create</a>(appID, { ...params }) -> AutomationActionsPublicActionDefinition</code>
- <code title="patch /automation/v4/actions/{appId}/{definitionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">update</a>(definitionID, { ...params }) -> AutomationActionsPublicActionDefinition</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/revisions">client.automation.actions.<a href="./src/resources/automation/actions.ts">list</a>(definitionID, { ...params }) -> AutomationActionsCollectionResponsePublicActionRevisionForwardPaging</code>
- <code title="delete /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">delete</a>(functionID, { ...params }) -> void</code>
- <code title="delete /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.<a href="./src/resources/automation/actions.ts">archiveByFunctionType</a>(functionType, { ...params }) -> void</code>
- <code title="post /automation/v4/actions/callbacks/{callbackId}/complete">client.automation.actions.<a href="./src/resources/automation/actions.ts">complete</a>(callbackID, { ...params }) -> void</code>
- <code title="post /automation/v4/actions/callbacks/complete">client.automation.actions.<a href="./src/resources/automation/actions.ts">completeBatch</a>({ ...params }) -> void</code>
- <code title="put /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">createOrReplace</a>(functionID, { ...params }) -> AutomationActionsPublicActionFunctionIdentifier</code>
- <code title="put /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.<a href="./src/resources/automation/actions.ts">createOrReplaceByFunctionType</a>(functionType, { ...params }) -> AutomationActionsPublicActionFunctionIdentifier</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.<a href="./src/resources/automation/actions.ts">getByFunctionType</a>(functionType, { ...params }) -> AutomationActionsPublicActionFunction</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">read</a>(functionID, { ...params }) -> AutomationActionsPublicActionFunction</code>

# Cms

Types:

- <code><a href="./src/resources/cms/cms.ts">CmsCollectionResponseWithTotalURLMappingForwardPaging</a></code>
- <code><a href="./src/resources/cms/cms.ts">CmsURLMapping</a></code>
- <code><a href="./src/resources/cms/cms.ts">CmsURLMappingCreateRequestBody</a></code>

## Blogs

### Tags

Types:

- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsAttachToLangPrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsBatchInputJsonNode</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsBatchInputTag</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsBatchResponseTag</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsBatchResponseTagWithErrors</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsCollectionResponseWithTotalTagForwardPaging</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsDetachFromLangGroupRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsSetNewLanguagePrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsTag</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsTagCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CmsBlogsTagsUpdateLanguagesRequestVNext</a></code>

Methods:

- <code title="post /cms/v3/blogs/tags">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">create</a>({ ...params }) -> CmsBlogsTagsTag</code>
- <code title="patch /cms/v3/blogs/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">update</a>(objectID, { ...params }) -> CmsBlogsTagsTag</code>
- <code title="get /cms/v3/blogs/tags">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">list</a>({ ...params }) -> CmsBlogsTagsCollectionResponseWithTotalTagForwardPaging</code>
- <code title="delete /cms/v3/blogs/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/batch/archive">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">archiveBatch</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/multi-language/attach-to-lang-group">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">attachToLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/batch/create">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">createBatch</a>({ ...params }) -> CmsBlogsTagsBatchResponseTag</code>
- <code title="post /cms/v3/blogs/tags/multi-language/create-language-variation">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">createLangVariation</a>({ ...params }) -> CmsBlogsTagsTag</code>
- <code title="post /cms/v3/blogs/tags/multi-language/detach-from-lang-group">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">detachFromLangGroup</a>({ ...params }) -> void</code>
- <code title="get /cms/v3/blogs/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">read</a>(objectID, { ...params }) -> CmsBlogsTagsTag</code>
- <code title="post /cms/v3/blogs/tags/batch/read">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">readBatch</a>({ ...params }) -> CmsBlogsTagsBatchResponseTag</code>
- <code title="put /cms/v3/blogs/tags/multi-language/set-new-lang-primary">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">setLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/batch/update">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">updateBatch</a>({ ...params }) -> CmsBlogsTagsBatchResponseTag</code>
- <code title="post /cms/v3/blogs/tags/multi-language/update-languages">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">updateLangs</a>({ ...params }) -> void</code>

## Domains

Types:

- <code><a href="./src/resources/cms/domains.ts">CmsDomainsCollectionResponseWithTotalDomainForwardPaging</a></code>
- <code><a href="./src/resources/cms/domains.ts">CmsDomainsDomain</a></code>

Methods:

- <code title="get /cms/v3/domains/">client.cms.domains.<a href="./src/resources/cms/domains.ts">list</a>({ ...params }) -> CmsDomainsCollectionResponseWithTotalDomainForwardPaging</code>
- <code title="get /cms/v3/domains/{domainId}">client.cms.domains.<a href="./src/resources/cms/domains.ts">read</a>(domainID) -> CmsDomainsDomain</code>

## Hubdb

Types:

- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbBatchInputHubDBTableRowBatchCloneRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbBatchInputHubDBTableRowV3BatchUpdateRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbBatchInputHubDBTableRowV3Request</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbBatchResponseHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbBatchResponseHubDBTableRowV3WithErrors</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbBoundedNextPage</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbBoundedPaging</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbCollectionResponseWithTotalHubDBTableV3ForwardPaging</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbColumn</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbColumnRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbForeignID</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbHubDBTableCloneRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbHubDBTableRowBatchCloneRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbHubDBTableRowV3BatchUpdateRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbHubDBTableRowV3Request</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbHubDBTableV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbHubDBTableV3Request</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbImportResult</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbOption</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbRandomAccessCollectionResponseWithTotalHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbSimpleUser</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbStandardError</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbStreamingCollectionResponseWithTotalHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbUnifiedCollectionResponseWithTotalBaseHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CmsHubdbVariant</a></code>

Methods:

- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">archiveTable</a>(tableIDOrName) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/clone">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">cloneDraftTable</a>(tableIDOrName, { ...params }) -> CmsHubdbHubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft/clone">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">cloneDraftTableRow</a>(rowID, { ...params }) -> CmsHubdbHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/clone">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">cloneDraftTableRows</a>(tableIDOrName, { ...params }) -> CmsHubdbBatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/create">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">createDraftTableRows</a>(tableIDOrName, { ...params }) -> CmsHubdbBatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">createTable</a>({ ...params }) -> CmsHubdbHubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">createTableRow</a>(tableIDOrName, { ...params }) -> CmsHubdbHubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/draft/export">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">exportDraftTable</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/export">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">exportTable</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="get /cms/v3/hubdb/tables/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getAllDraftTables</a>({ ...params }) -> CmsHubdbCollectionResponseWithTotalHubDBTableV3ForwardPaging</code>
- <code title="get /cms/v3/hubdb/tables">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getAllTables</a>({ ...params }) -> CmsHubdbCollectionResponseWithTotalHubDBTableV3ForwardPaging</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getDraftTableDetailsByID</a>(tableIDOrName, { ...params }) -> CmsHubdbHubDBTableV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getDraftTableRowByID</a>(rowID, { ...params }) -> CmsHubdbHubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getTableDetails</a>(tableIDOrName, { ...params }) -> CmsHubdbHubDBTableV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getTableRow</a>(rowID, { ...params }) -> CmsHubdbHubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getTableRows</a>(tableIDOrName, { ...params }) -> CmsHubdbUnifiedCollectionResponseWithTotalBaseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/import">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">importDraftTable</a>(tableIDOrName, { ...params }) -> CmsHubdbImportResult</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/publish">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">publishDraftTable</a>(tableIDOrName, { ...params }) -> CmsHubdbHubDBTableV3</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">purgeDraftTableRow</a>(rowID, { ...params }) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/purge">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">purgeDraftTableRows</a>(tableIDOrName, { ...params }) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/read">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">readDraftTableRows</a>(tableIDOrName, { ...params }) -> CmsHubdbBatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/batch/read">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">readTableRows</a>(tableIDOrName, { ...params }) -> CmsHubdbBatchResponseHubDBTableRowV3</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}/versions/{versionId}">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">removeTableVersion</a>(versionID, { ...params }) -> void</code>
- <code title="put /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">replaceDraftTableRow</a>(rowID, { ...params }) -> CmsHubdbHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/replace">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">replaceDraftTableRows</a>(tableIDOrName, { ...params }) -> CmsHubdbBatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/reset">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">resetDraftTable</a>(tableIDOrName, { ...params }) -> CmsHubdbHubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/unpublish">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">unpublishTable</a>(tableIDOrName, { ...params }) -> CmsHubdbHubDBTableV3</code>
- <code title="patch /cms/v3/hubdb/tables/{tableIdOrName}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">updateDraftTable</a>(tableIDOrName, { ...params }) -> CmsHubdbHubDBTableV3</code>
- <code title="patch /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">updateDraftTableRow</a>(rowID, { ...params }) -> CmsHubdbHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/update">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">updateDraftTableRows</a>(tableIDOrName, { ...params }) -> CmsHubdbBatchResponseHubDBTableRowV3</code>

### Rows

#### Batch

Methods:

- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/replace">client.cms.hubdb.rows.batch.<a href="./src/resources/cms/hubdb/rows/batch.ts">replace</a>(tableIDOrName, { ...params }) -> CmsHubdbBatchResponseHubDBTableRowV3</code>

## URLRedirects

Methods:

- <code title="post /cms/v3/url-redirects/">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">create</a>({ ...params }) -> CmsURLMapping</code>
- <code title="patch /cms/v3/url-redirects/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">update</a>(urlRedirectID, { ...params }) -> CmsURLMapping</code>
- <code title="get /cms/v3/url-redirects/">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">list</a>({ ...params }) -> CmsCollectionResponseWithTotalURLMappingForwardPaging</code>
- <code title="delete /cms/v3/url-redirects/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">delete</a>(urlRedirectID) -> void</code>
- <code title="get /cms/v3/url-redirects/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">read</a>(urlRedirectID) -> CmsURLMapping</code>

# CRM

Types:

- <code><a href="./src/resources/crm/crm.ts">CRMAssociatedID</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMAssociationDefinition</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMAssociationDefinitionEgg</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMAssociationSpec</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMAssociationSpecWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMBatchResponsePublicDefaultAssociation</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMCollectionResponseMultiAssociatedObjectWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMCollectionResponseObjectSchemaNoPaging</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMCreatedResponseLabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMLabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMMultiAssociatedObjectWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMObjectSchema</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMObjectSchemaEgg</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMObjectTypeDefinition</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMObjectTypeDefinitionLabels</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMObjectTypeDefinitionPatch</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMObjectTypePropertyCreate</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMOption</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMOptionInput</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMProperty</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMPropertyModificationMetadata</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMPublicDefaultAssociation</a></code>
- <code><a href="./src/resources/crm/crm.ts">CRMPublicObjectID</a></code>

## Associations

Types:

- <code><a href="./src/resources/crm/associations/associations.ts">CRMAssociationsBatchInputPublicAssociation</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">CRMAssociationsBatchInputPublicObjectID</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">CRMAssociationsBatchResponsePublicAssociation</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">CRMAssociationsBatchResponsePublicAssociationMulti</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">CRMAssociationsPublicAssociation</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">CRMAssociationsPublicAssociationMulti</a></code>

Methods:

- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/create">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">create</a>(toObjectType, { ...params }) -> CRMAssociationsBatchResponsePublicAssociation</code>
- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/archive">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">delete</a>(toObjectType, { ...params }) -> void</code>
- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/read">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">read</a>(toObjectType, { ...params }) -> CRMAssociationsBatchResponsePublicAssociationMulti</code>

### V4

Types:

- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4AssociationSpec1</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4AssociationSpecWithLabel1</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4BatchInputPublicAssociationMultiArchive</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4BatchInputPublicAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4BatchInputPublicDefaultAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4BatchInputPublicFetchAssociationsBatchRequest</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4BatchResponseLabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4BatchResponsePublicAssociationMultiWithLabel</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4BatchResponseVoid</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4DateTime</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4NextPage1</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4PreviousPage1</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4PublicAssociationMultiArchive</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4PublicAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4PublicAssociationMultiWithLabel</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4PublicDefaultAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4PublicFetchAssociationsBatchRequest</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4ReportCreationResponse</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">CRMAssociationsV4StandardError1</a></code>

Methods:

- <code title="put /crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">create</a>(toObjectID, [ ...body ]) -> CRMCreatedResponseLabelsBetweenObjectPair</code>
- <code title="get /crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">list</a>(toObjectType, { ...params }) -> CRMCollectionResponseMultiAssociatedObjectWithLabel</code>
- <code title="delete /crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">delete</a>(toObjectID, { ...params }) -> void</code>
- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/labels/archive">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">archiveLabels</a>(toObjectType, { ...params }) -> CRMAssociationsV4BatchResponseVoid</code>
- <code title="put /crm/v4/objects/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">createDefault</a>(toObjectID, { ...params }) -> CRMBatchResponsePublicDefaultAssociation</code>
- <code title="post /crm/v4/associations/usage/high-usage-report/{userId}">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">request</a>(userID) -> CRMAssociationsV4ReportCreationResponse</code>

## Extensions

### Calling

Types:

- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CRMExtensionsCallingChannelConnectionSettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CRMExtensionsCallingChannelConnectionSettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CRMExtensionsCallingChannelConnectionSettingsResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CRMExtensionsCallingMarkRecordingAsReadyRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CRMExtensionsCallingRecordingSettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CRMExtensionsCallingRecordingSettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CRMExtensionsCallingRecordingSettingsResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CRMExtensionsCallingSettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CRMExtensionsCallingSettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CRMExtensionsCallingSettingsResponse</a></code>

#### ChannelConnectionSettings

Methods:

- <code title="post /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.channelConnectionSettings.<a href="./src/resources/crm/extensions/calling/channel-connection-settings.ts">create</a>(appID, { ...params }) -> CRMExtensionsCallingChannelConnectionSettingsResponse</code>
- <code title="patch /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.channelConnectionSettings.<a href="./src/resources/crm/extensions/calling/channel-connection-settings.ts">update</a>(appID, { ...params }) -> CRMExtensionsCallingChannelConnectionSettingsResponse</code>
- <code title="delete /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.channelConnectionSettings.<a href="./src/resources/crm/extensions/calling/channel-connection-settings.ts">delete</a>(appID) -> void</code>
- <code title="get /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.channelConnectionSettings.<a href="./src/resources/crm/extensions/calling/channel-connection-settings.ts">get</a>(appID) -> CRMExtensionsCallingChannelConnectionSettingsResponse</code>

#### RecordingSettings

Methods:

- <code title="get /crm/v3/extensions/calling/{appId}/settings/recording">client.crm.extensions.calling.recordingSettings.<a href="./src/resources/crm/extensions/calling/recording-settings.ts">getURLFormat</a>(appID) -> CRMExtensionsCallingRecordingSettingsResponse</code>
- <code title="post /crm/v3/extensions/calling/recordings/ready">client.crm.extensions.calling.recordingSettings.<a href="./src/resources/crm/extensions/calling/recording-settings.ts">markAsReady</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/extensions/calling/{appId}/settings/recording">client.crm.extensions.calling.recordingSettings.<a href="./src/resources/crm/extensions/calling/recording-settings.ts">registerURLFormat</a>(appID, { ...params }) -> CRMExtensionsCallingRecordingSettingsResponse</code>
- <code title="patch /crm/v3/extensions/calling/{appId}/settings/recording">client.crm.extensions.calling.recordingSettings.<a href="./src/resources/crm/extensions/calling/recording-settings.ts">updateURLFormat</a>(appID, { ...params }) -> CRMExtensionsCallingRecordingSettingsResponse</code>

#### Settings

Methods:

- <code title="post /crm/v3/extensions/calling/{appId}/settings">client.crm.extensions.calling.settings.<a href="./src/resources/crm/extensions/calling/settings.ts">create</a>(appID, { ...params }) -> WebhooksSettingsResponse</code>
- <code title="patch /crm/v3/extensions/calling/{appId}/settings">client.crm.extensions.calling.settings.<a href="./src/resources/crm/extensions/calling/settings.ts">update</a>(appID, { ...params }) -> WebhooksSettingsResponse</code>
- <code title="delete /crm/v3/extensions/calling/{appId}/settings">client.crm.extensions.calling.settings.<a href="./src/resources/crm/extensions/calling/settings.ts">delete</a>(appID) -> void</code>
- <code title="get /crm/v3/extensions/calling/{appId}/settings">client.crm.extensions.calling.settings.<a href="./src/resources/crm/extensions/calling/settings.ts">get</a>(appID) -> WebhooksSettingsResponse</code>

## Objects

Types:

- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsBatchInputSimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsBatchInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsBatchReadInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsBatchResponseSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsBatchResponseSimplePublicUpsertObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsCollectionResponseAssociatedID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsCollectionResponseSimplePublicObjectWithAssociations</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsCollectionResponseWithTotalSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsCreatedResponseSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsFilter</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsFilterGroup</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsPublicAssociationsForObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsPublicGdprDeleteInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsPublicMergeInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsPublicObjectSearchRequest</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsSimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsSimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsSimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsSimplePublicObjectInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsSimplePublicObjectInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsSimplePublicObjectWithAssociations</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsSimplePublicUpsertObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CRMObjectsValueWithTimestamp</a></code>

### Companies

Methods:

- <code title="post /crm/v3/objects/companies">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">create</a>({ ...params }) -> CRMObjectsCreatedResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/batch/update">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">update</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="get /crm/v3/objects/companies">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">list</a>({ ...params }) -> CRMObjectsCollectionResponseSimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/companies/batch/archive">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/companies/merge">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">merge</a>({ ...params }) -> CRMObjectsSimplePublicObject</code>
- <code title="get /crm/v3/objects/companies/{companyId}">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">read</a>(companyID, { ...params }) -> CRMObjectsSimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/companies/search">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">search</a>({ ...params }) -> CRMObjectsCollectionResponseWithTotalSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/batch/upsert">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">upsert</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicUpsertObject</code>

### Contacts

Methods:

- <code title="post /crm/v3/objects/contacts">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">create</a>({ ...params }) -> CRMObjectsCreatedResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/update">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">update</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicObject</code>
- <code title="get /crm/v3/objects/contacts">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">list</a>({ ...params }) -> CRMObjectsCollectionResponseSimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/contacts/batch/archive">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/contacts/merge">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">merge</a>({ ...params }) -> CRMObjectsSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/gdpr-delete">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">purge</a>({ ...params }) -> void</code>
- <code title="get /crm/v3/objects/contacts/{contactId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">read</a>(contactID, { ...params }) -> CRMObjectsSimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/contacts/search">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">search</a>({ ...params }) -> CRMObjectsCollectionResponseWithTotalSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/upsert">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">upsert</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicUpsertObject</code>

### Deals

Methods:

- <code title="post /crm/v3/objects/0-3">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">create</a>({ ...params }) -> CRMObjectsCreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">update</a>(dealID, { ...params }) -> CRMObjectsSimplePublicObject</code>
- <code title="get /crm/v3/objects/0-3">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">list</a>({ ...params }) -> CRMObjectsCollectionResponseSimplePublicObjectWithAssociations</code>
- <code title="delete /crm/v3/objects/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">delete</a>(dealID) -> void</code>
- <code title="post /crm/v3/objects/0-3/merge">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">merge</a>({ ...params }) -> CRMObjectsSimplePublicObject</code>
- <code title="get /crm/v3/objects/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">read</a>(dealID, { ...params }) -> CRMObjectsSimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/0-3/search">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">search</a>({ ...params }) -> CRMObjectsCollectionResponseWithTotalSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-3/batch/upsert">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">upsert</a>({ ...params }) -> CRMObjectsBatchResponseSimplePublicUpsertObject</code>

#### Associations

#### Batch

### Schemas

Methods:

- <code title="post /crm-object-schemas/v3/schemas">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">create</a>({ ...params }) -> CRMObjectSchema</code>
- <code title="patch /crm-object-schemas/v3/schemas/{objectType}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">update</a>(objectType, { ...params }) -> CRMObjectTypeDefinition</code>
- <code title="get /crm-object-schemas/v3/schemas">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">list</a>({ ...params }) -> CRMCollectionResponseObjectSchemaNoPaging</code>
- <code title="delete /crm-object-schemas/v3/schemas/{objectType}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="delete /crm-object-schemas/v3/schemas/{objectType}/associations/{associationIdentifier}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">archiveAssociation</a>(associationIdentifier, { ...params }) -> void</code>
- <code title="post /crm-object-schemas/v3/schemas/{objectType}/associations">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">createAssociation</a>(objectType, { ...params }) -> CRMAssociationDefinition</code>
- <code title="get /crm-object-schemas/v3/schemas/{objectType}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">read</a>(objectType) -> CRMObjectSchema</code>

## Pipelines

Types:

- <code><a href="./src/resources/crm/pipelines.ts">CRMPipelinesCollectionResponsePipelineNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CRMPipelinesCollectionResponsePipelineStageNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CRMPipelinesCollectionResponsePublicAuditInfoNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CRMPipelinesPipeline</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CRMPipelinesPipelineInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CRMPipelinesPipelinePatchInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CRMPipelinesPipelineStage</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CRMPipelinesPipelineStageInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CRMPipelinesPipelineStagePatchInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CRMPipelinesPublicAuditInfo</a></code>

Methods:

- <code title="post /crm/v3/pipelines/{objectType}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">create</a>(objectType, { ...params }) -> CRMPipelinesPipeline</code>
- <code title="patch /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">update</a>(stageID, { ...params }) -> CRMPipelinesPipelineStage</code>
- <code title="get /crm/v3/pipelines/{objectType}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">list</a>(objectType) -> CRMPipelinesCollectionResponsePipelineNoPaging</code>
- <code title="delete /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">delete</a>(stageID, { ...params }) -> void</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/audit">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">getAudit</a>(pipelineID, { ...params }) -> CRMPipelinesCollectionResponsePublicAuditInfoNoPaging</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">read</a>(stageID, { ...params }) -> CRMPipelinesPipelineStage</code>
- <code title="put /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">replace</a>(stageID, { ...params }) -> CRMPipelinesPipelineStage</code>

## Properties

Types:

- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesBatchInputPropertyCreate</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesBatchInputPropertyName</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesBatchReadInputPropertyName</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesBatchResponseProperty</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesCollectionResponseProperty</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesCollectionResponsePropertyGroup</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesCreatedResponseProperty</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesCreatedResponsePropertyGroup</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesOptionInput</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesPropertyCreate</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesPropertyGroup</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesPropertyGroupCreate</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesPropertyGroupUpdate</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesPropertyName</a></code>
- <code><a href="./src/resources/crm/properties.ts">CRMPropertiesPropertyUpdate</a></code>

Methods:

- <code title="post /crm/v3/properties/{objectType}/groups">client.crm.properties.<a href="./src/resources/crm/properties.ts">create</a>(objectType, { ...params }) -> CRMPropertiesCreatedResponsePropertyGroup</code>
- <code title="patch /crm/v3/properties/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties.ts">update</a>(propertyName, { ...params }) -> CRMProperty</code>
- <code title="get /crm/v3/properties/{objectType}/groups">client.crm.properties.<a href="./src/resources/crm/properties.ts">list</a>(objectType) -> CRMPropertiesCollectionResponsePropertyGroup</code>
- <code title="delete /crm/v3/properties/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties.ts">delete</a>(propertyName, { ...params }) -> void</code>
- <code title="get /crm/v3/properties/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties.ts">getByName</a>(propertyName, { ...params }) -> CRMProperty</code>
- <code title="post /crm/v3/properties/{objectType}/batch/read">client.crm.properties.<a href="./src/resources/crm/properties.ts">read</a>(objectType, { ...params }) -> CRMPropertiesBatchResponseProperty</code>

# Files

Types:

- <code><a href="./src/resources/files/files.ts">FilesCollectionResponseFile</a></code>
- <code><a href="./src/resources/files/files.ts">FilesCollectionResponseFolder</a></code>
- <code><a href="./src/resources/files/files.ts">FilesFile</a></code>
- <code><a href="./src/resources/files/files.ts">FilesFileActionResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FilesFileStat</a></code>
- <code><a href="./src/resources/files/files.ts">FilesFileUpdateInput</a></code>
- <code><a href="./src/resources/files/files.ts">FilesFolder</a></code>
- <code><a href="./src/resources/files/files.ts">FilesFolderActionResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FilesFolderInput</a></code>
- <code><a href="./src/resources/files/files.ts">FilesFolderUpdateInput</a></code>
- <code><a href="./src/resources/files/files.ts">FilesFolderUpdateInputWithID</a></code>
- <code><a href="./src/resources/files/files.ts">FilesFolderUpdateTaskLocator</a></code>
- <code><a href="./src/resources/files/files.ts">FilesImportFromURLInput</a></code>
- <code><a href="./src/resources/files/files.ts">FilesImportFromURLTaskLocator</a></code>
- <code><a href="./src/resources/files/files.ts">FilesSignedURL</a></code>

## Files

Methods:

- <code title="patch /files/v3/files/{fileId}">client.files.files.<a href="./src/resources/files/files_.ts">update</a>(fileID, { ...params }) -> FilesFile</code>
- <code title="delete /files/v3/files/{fileId}">client.files.files.<a href="./src/resources/files/files_.ts">delete</a>(fileID) -> void</code>
- <code title="delete /files/v3/files/{fileId}/gdpr-delete">client.files.files.<a href="./src/resources/files/files_.ts">gdprDelete</a>(fileID) -> void</code>
- <code title="get /files/v3/files/{fileId}">client.files.files.<a href="./src/resources/files/files_.ts">get</a>(fileID, { ...params }) -> FilesFile</code>
- <code title="get /files/v3/files/stat/{path}">client.files.files.<a href="./src/resources/files/files_.ts">getByPath</a>(path\_, { ...params }) -> FilesFileStat</code>
- <code title="get /files/v3/files/import-from-url/async/tasks/{taskId}/status">client.files.files.<a href="./src/resources/files/files_.ts">getImportFromURLAsyncStatus</a>(taskID) -> FilesFileActionResponse</code>
- <code title="get /files/v3/files/{fileId}/signed-url">client.files.files.<a href="./src/resources/files/files_.ts">getSignedURL</a>(fileID, { ...params }) -> FilesSignedURL</code>
- <code title="post /files/v3/files/import-from-url/async">client.files.files.<a href="./src/resources/files/files_.ts">importFromURLAsync</a>({ ...params }) -> FilesImportFromURLTaskLocator</code>
- <code title="put /files/v3/files/{fileId}">client.files.files.<a href="./src/resources/files/files_.ts">replace</a>(fileID, { ...params }) -> FilesFile</code>
- <code title="get /files/v3/files/search">client.files.files.<a href="./src/resources/files/files_.ts">search</a>({ ...params }) -> FilesCollectionResponseFile</code>
- <code title="post /files/v3/files">client.files.files.<a href="./src/resources/files/files_.ts">upload</a>({ ...params }) -> FilesFile</code>

## Folders

Methods:

- <code title="post /files/v3/folders">client.files.folders.<a href="./src/resources/files/folders.ts">create</a>({ ...params }) -> FilesFolder</code>
- <code title="delete /files/v3/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">deleteByID</a>(folderID) -> void</code>
- <code title="delete /files/v3/folders/{folderPath}">client.files.folders.<a href="./src/resources/files/folders.ts">deleteByPath</a>(folderPath) -> void</code>
- <code title="get /files/v3/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">getByID</a>(folderID, { ...params }) -> FilesFolder</code>
- <code title="get /files/v3/folders/{folderPath}">client.files.folders.<a href="./src/resources/files/folders.ts">getByPath</a>(folderPath, { ...params }) -> FilesFolder</code>
- <code title="get /files/v3/folders/update/async/tasks/{taskId}/status">client.files.folders.<a href="./src/resources/files/folders.ts">getUpdateAsyncStatus</a>(taskID) -> FilesFolderActionResponse</code>
- <code title="get /files/v3/folders/search">client.files.folders.<a href="./src/resources/files/folders.ts">search</a>({ ...params }) -> FilesCollectionResponseFolder</code>
- <code title="post /files/v3/folders/update/async">client.files.folders.<a href="./src/resources/files/folders.ts">updateAsync</a>({ ...params }) -> FilesFolderUpdateTaskLocator</code>
- <code title="patch /files/v3/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">updateByID</a>(folderID, { ...params }) -> FilesFolder</code>

# Marketing

## Emails

Types:

- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsAbTestCreateRequestVNext</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsAggregateEmailStatistics</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsCollectionResponseWithTotalEmailStatisticIntervalNoPaging</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsCollectionResponseWithTotalPublicEmailForwardPaging</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsCollectionResponseWithTotalVersionPublicEmail</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsEmailCloneRequestVNext</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsEmailCreateRequest</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsEmailStatisticInterval</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsEmailStatisticsData</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsEmailUpdateRequest</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsInterval</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPaging</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicButtonStyleSettings</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicDividerStyleSettings</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicEmail</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicEmailContent</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicEmailFromDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicEmailRecipients</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicEmailStyleSettings</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicEmailSubscriptionDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicEmailTestingDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicEmailToDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicFontStyle</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicRssEmailDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsPublicWebversionDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsSmartEmailField</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsVersionPublicEmail</a></code>
- <code><a href="./src/resources/marketing/emails.ts">MarketingEmailsVersionUser</a></code>

Methods:

- <code title="post /marketing/v3/emails/">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">create</a>({ ...params }) -> MarketingEmailsPublicEmail</code>
- <code title="patch /marketing/v3/emails/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">update</a>(emailID, { ...params }) -> MarketingEmailsPublicEmail</code>
- <code title="get /marketing/v3/emails/">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">list</a>({ ...params }) -> MarketingEmailsCollectionResponseWithTotalPublicEmailForwardPaging</code>
- <code title="delete /marketing/v3/emails/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">delete</a>(emailID, { ...params }) -> void</code>
- <code title="post /marketing/v3/emails/clone">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">clone</a>({ ...params }) -> MarketingEmailsPublicEmail</code>
- <code title="post /marketing/v3/emails/ab-test/create-variation">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">createAbTestVariation</a>({ ...params }) -> MarketingEmailsPublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}/ab-test/get-variation">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getAbTestVariation</a>(emailID) -> MarketingEmailsPublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}/draft">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getDraft</a>(emailID) -> MarketingEmailsPublicEmail</code>
- <code title="get /marketing/v3/emails/statistics/list">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getEmailsList</a>({ ...params }) -> MarketingEmailsAggregateEmailStatistics</code>
- <code title="get /marketing/v3/emails/statistics/histogram">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getHistogram</a>({ ...params }) -> MarketingEmailsCollectionResponseWithTotalEmailStatisticIntervalNoPaging</code>
- <code title="get /marketing/v3/emails/{emailId}/revisions/{revisionId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getRevisionByID</a>(revisionID, { ...params }) -> MarketingEmailsVersionPublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}/revisions">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getRevisions</a>(emailID, { ...params }) -> MarketingEmailsCollectionResponseWithTotalVersionPublicEmail</code>
- <code title="post /marketing/v3/emails/{emailId}/publish">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">publishOrSend</a>(emailID) -> void</code>
- <code title="get /marketing/v3/emails/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">read</a>(emailID, { ...params }) -> MarketingEmailsPublicEmail</code>
- <code title="post /marketing/v3/emails/{emailId}/draft/reset">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">resetDraft</a>(emailID) -> void</code>
- <code title="post /marketing/v3/emails/{emailId}/revisions/{revisionId}/restore-to-draft">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">restoreDraftRevision</a>(revisionID, { ...params }) -> MarketingEmailsPublicEmail</code>
- <code title="post /marketing/v3/emails/{emailId}/revisions/{revisionId}/restore">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">restoreRevision</a>(revisionID, { ...params }) -> void</code>
- <code title="post /marketing/v3/emails/{emailId}/unpublish">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">unpublishOrCancel</a>(emailID) -> void</code>
- <code title="patch /marketing/v3/emails/{emailId}/draft">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">upsertDraft</a>(emailID, { ...params }) -> MarketingEmailsPublicEmail</code>

## Forms

Types:

- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsCollectionResponseFormDefinitionBaseForwardPaging</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsDatepickerField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsDependentField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsDependentFieldFilter</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsDropdownField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsEmailField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsEmailFieldValidation</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsEnumeratedFieldOption</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsFieldGroup</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsFileField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsFormDefinitionBase</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsFormDefinitionCreateRequestBase</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsFormDisplayOptions</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsFormPostSubmitAction</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsFormStyle</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsHubSpotFormConfiguration</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsHubSpotFormDefinition</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsHubSpotFormDefinitionCreateRequest</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsHubSpotFormDefinitionPatchRequest</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsLegalConsentCheckbox</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsLegalConsentOptionsExplicitConsentToProcess</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsLegalConsentOptionsImplicitConsentToProcess</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsLegalConsentOptionsLegitimateInterest</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsLegalConsentOptionsNone</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsLifecycleStage</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsMobilePhoneField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsMultiLineTextField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsMultipleCheckboxesField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsNumberField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsNumberFieldValidation</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsPaymentLinkRadioField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsPhoneField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsPhoneFieldValidation</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsRadioField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsSingleCheckboxField</a></code>
- <code><a href="./src/resources/marketing/forms.ts">MarketingFormsSingleLineTextField</a></code>

Methods:

- <code title="post /marketing/v3/forms/">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">create</a>() -> unknown</code>
- <code title="patch /marketing/v3/forms/{formId}">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">update</a>(formID, { ...params }) -> unknown</code>
- <code title="get /marketing/v3/forms/">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">list</a>({ ...params }) -> MarketingFormsCollectionResponseFormDefinitionBaseForwardPaging</code>
- <code title="delete /marketing/v3/forms/{formId}">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">delete</a>(formID) -> void</code>
- <code title="get /marketing/v3/forms/{formId}">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">read</a>(formID, { ...params }) -> unknown</code>
- <code title="put /marketing/v3/forms/{formId}">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">replace</a>(formID, { ...params }) -> unknown</code>

## Subscriptions

Types:

- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsActionResponseWithResultsPublicStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsActionResponseWithResultsPublicWideStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsActionResponseWithResultsSubscriptionDefinition</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsBatchInputPublicStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsBatchResponsePublicBulkOptOutFromAllResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsBatchResponsePublicStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsBatchResponsePublicStatusBulkResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsBatchResponsePublicStatusBulkResponseWithErrors</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponseWithErrors</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsPartialPublicStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsPublicBulkOptOutFromAllResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsPublicStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsPublicStatusBulkResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsPublicStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsPublicSubscriptionTranslation</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsPublicWideStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsPublicWideStatusBulkResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/subscriptions.ts">MarketingSubscriptionsSubscriptionDefinition</a></code>

Methods:

- <code title="get /communication-preferences/v3/definitions">client.marketing.subscriptions.<a href="./src/resources/marketing/subscriptions/subscriptions.ts">list</a>() -> MarketingSubscriptionsV3SubscriptionDefinitionsResponse</code>
- <code title="get /communication-preferences/v3/status/email/{emailAddress}">client.marketing.subscriptions.<a href="./src/resources/marketing/subscriptions/subscriptions.ts">getEmailStatus</a>(emailAddress) -> MarketingSubscriptionsV3PublicSubscriptionStatusesResponse</code>
- <code title="post /communication-preferences/v3/subscribe">client.marketing.subscriptions.<a href="./src/resources/marketing/subscriptions/subscriptions.ts">subscribe</a>({ ...params }) -> MarketingSubscriptionsV3PublicSubscriptionStatus</code>
- <code title="post /communication-preferences/v3/unsubscribe">client.marketing.subscriptions.<a href="./src/resources/marketing/subscriptions/subscriptions.ts">unsubscribe</a>({ ...params }) -> MarketingSubscriptionsV3PublicSubscriptionStatus</code>

### V3

Types:

- <code><a href="./src/resources/marketing/subscriptions/v3.ts">MarketingSubscriptionsV3PublicSubscriptionStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v3.ts">MarketingSubscriptionsV3PublicSubscriptionStatusesResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v3.ts">MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v3.ts">MarketingSubscriptionsV3SubscriptionDefinitionsResponse</a></code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhooksBatchInputSubscriptionBatchUpdateRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhooksBatchResponseSubscriptionResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhooksBatchResponseSubscriptionResponseWithErrors</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhooksSettingsChangeRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhooksSettingsResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhooksSubscriptionBatchUpdateRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhooksSubscriptionCreateRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhooksSubscriptionListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhooksSubscriptionPatchRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhooksSubscriptionResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhooksThrottlingSettings</a></code>

Methods:

- <code title="post /webhooks/v3/{appId}/subscriptions">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>(appID, { ...params }) -> WebhooksSubscriptionResponse</code>
- <code title="patch /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(subscriptionID, { ...params }) -> WebhooksSubscriptionResponse</code>
- <code title="get /webhooks/v3/{appId}/subscriptions">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>(appID) -> WebhooksSubscriptionListResponse</code>
- <code title="delete /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(subscriptionID, { ...params }) -> void</code>
- <code title="delete /webhooks/v3/{appId}/settings">client.webhooks.<a href="./src/resources/webhooks.ts">clear</a>(appID) -> void</code>
- <code title="put /webhooks/v3/{appId}/settings">client.webhooks.<a href="./src/resources/webhooks.ts">configure</a>(appID, { ...params }) -> WebhooksSettingsResponse</code>
- <code title="get /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.<a href="./src/resources/webhooks.ts">read</a>(subscriptionID, { ...params }) -> WebhooksSubscriptionResponse</code>
- <code title="post /webhooks/v3/{appId}/subscriptions/batch/update">client.webhooks.<a href="./src/resources/webhooks.ts">updateBatch</a>(appID, { ...params }) -> WebhooksBatchResponseSubscriptionResponse</code>
