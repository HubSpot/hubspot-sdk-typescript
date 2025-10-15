# Shared

Types:

- <code><a href="./src/resources/shared.ts">AssociationSpec</a></code>
- <code><a href="./src/resources/shared.ts">BatchInputString</a></code>
- <code><a href="./src/resources/shared.ts">Error</a></code>
- <code><a href="./src/resources/shared.ts">ErrorDetail</a></code>
- <code><a href="./src/resources/shared.ts">ForwardPaging</a></code>
- <code><a href="./src/resources/shared.ts">HubDBTableRowV3Wrapper</a></code>
- <code><a href="./src/resources/shared.ts">NextPage</a></code>
- <code><a href="./src/resources/shared.ts">Paging</a></code>
- <code><a href="./src/resources/shared.ts">PreviousPage</a></code>
- <code><a href="./src/resources/shared.ts">PublicObjectID</a></code>
- <code><a href="./src/resources/shared.ts">StandardError</a></code>
- <code><a href="./src/resources/shared.ts">VersionUser</a></code>

# Account

Types:

- <code><a href="./src/resources/account/account.ts">APIUsage</a></code>
- <code><a href="./src/resources/account/account.ts">CollectionResponseAPIUsage</a></code>
- <code><a href="./src/resources/account/account.ts">PortalInformationResponse</a></code>

## AuditLogs

Types:

- <code><a href="./src/resources/account/audit-logs.ts">ActingUser</a></code>
- <code><a href="./src/resources/account/audit-logs.ts">CollectionResponseHydratedCriticalActionForwardPaging</a></code>
- <code><a href="./src/resources/account/audit-logs.ts">CollectionResponsePublicAPIUserActionEventForwardPaging</a></code>
- <code><a href="./src/resources/account/audit-logs.ts">CollectionResponsePublicLoginAuditForwardPaging</a></code>
- <code><a href="./src/resources/account/audit-logs.ts">HydratedCriticalAction</a></code>
- <code><a href="./src/resources/account/audit-logs.ts">PublicAPIUserActionEvent</a></code>
- <code><a href="./src/resources/account/audit-logs.ts">PublicLoginAudit</a></code>

# Auth

## OAuth

Types:

- <code><a href="./src/resources/auth/oauth.ts">AccessTokenInfoResponse</a></code>
- <code><a href="./src/resources/auth/oauth.ts">RefreshTokenInfoResponse</a></code>
- <code><a href="./src/resources/auth/oauth.ts">TokenResponseIf</a></code>

Methods:

- <code title="post /oauth/v1/token">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">create</a>({ ...params }) -> TokenResponseIf</code>
- <code title="delete /oauth/v1/refresh-tokens/{token}">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">delete</a>(token) -> void</code>
- <code title="get /oauth/v1/refresh-tokens/{token}">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">get</a>(token) -> RefreshTokenInfoResponse</code>

# Automation

## Actions

Types:

- <code><a href="./src/resources/automation/actions.ts">BatchInputCallbackCompletionBatchRequest</a></code>
- <code><a href="./src/resources/automation/actions.ts">CallbackCompletionBatchRequest</a></code>
- <code><a href="./src/resources/automation/actions.ts">CallbackCompletionRequest</a></code>
- <code><a href="./src/resources/automation/actions.ts">CollectionResponsePublicActionDefinitionForwardPaging</a></code>
- <code><a href="./src/resources/automation/actions.ts">CollectionResponsePublicActionFunctionIdentifierNoPaging</a></code>
- <code><a href="./src/resources/automation/actions.ts">CollectionResponsePublicActionRevisionForwardPaging</a></code>
- <code><a href="./src/resources/automation/actions.ts">FieldTypeDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">InputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">Option</a></code>
- <code><a href="./src/resources/automation/actions.ts">OutputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionDefinitionEgg</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionDefinitionPatch</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionFunction</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionFunctionIdentifier</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionLabels</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionRevision</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicConditionalSingleFieldDependency</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicExecutionTranslationRule</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicObjectRequestOptions</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicSingleFieldDependency</a></code>

Methods:

- <code title="post /automation/v4/actions/{appId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">create</a>(appID, { ...params }) -> PublicActionDefinition</code>
- <code title="patch /automation/v4/actions/{appId}/{definitionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">update</a>(definitionID, { ...params }) -> PublicActionDefinition</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/revisions">client.automation.actions.<a href="./src/resources/automation/actions.ts">list</a>(definitionID, { ...params }) -> PublicActionRevisionsPage</code>
- <code title="delete /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">delete</a>(functionID, { ...params }) -> void</code>
- <code title="delete /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.<a href="./src/resources/automation/actions.ts">archiveByFunctionType</a>(functionType, { ...params }) -> void</code>
- <code title="post /automation/v4/actions/callbacks/{callbackId}/complete">client.automation.actions.<a href="./src/resources/automation/actions.ts">complete</a>(callbackID, { ...params }) -> void</code>
- <code title="post /automation/v4/actions/callbacks/complete">client.automation.actions.<a href="./src/resources/automation/actions.ts">completeBatch</a>({ ...params }) -> void</code>
- <code title="put /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">createOrReplace</a>(functionID, { ...params }) -> PublicActionFunctionIdentifier</code>
- <code title="put /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.<a href="./src/resources/automation/actions.ts">createOrReplaceByFunctionType</a>(functionType, { ...params }) -> PublicActionFunctionIdentifier</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.<a href="./src/resources/automation/actions.ts">getByFunctionType</a>(functionType, { ...params }) -> PublicActionFunction</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">read</a>(functionID, { ...params }) -> PublicActionFunction</code>

## Workflows

Types:

- <code><a href="./src/resources/automation/workflows.ts">APIAbTestBranchAction</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIActionDataValue</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIAppendObjectPropertyValue</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIAssociationDataSource</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIAssociationTimestampDataSource</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIAuthKeyWebhookAuthSettings</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIBlockedDate</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIConnection</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIContactFlow</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIContactFlowCreateRequest</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIContactFlowPutRequest</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIContactPropertyAnchor</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APICustomCodeAction</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIDailyEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIDatasetFieldPropertyFilterDataSource</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIEnrolledArgumentPropertyFilterDataSource</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIEnrolledRecordPropertyFilterDataSource</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIEnrollmentEventPropertyValue</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIEnumerationOutputField</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIEventBasedEnrollmentCriteria</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFetchedObjectPropertyValue</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFlow</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFlowBatchFetchFlowIDCoordinate</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFlowBatchFetchMigrationFlowIDCoordinate</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFlowBatchFetchMigrationWorkflowIDCoordinate</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFlowBatchInput</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFlowBatchMigrationInput</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFlowCreateRequest</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFlowEmailCampaign</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFlowListing</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIFlowPutRequest</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIIncrementValue</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIInputVariable</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIListBasedEnrollmentCriteria</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIListBranch</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIListBranchAction</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIManualEnrollmentCriteria</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIMonthlyRelativeDaysEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIMonthlySpecificDaysEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIObjectPropertyValue</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIPlatformFlow</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIPlatformFlowCreateRequest</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIPlatformFlowPutRequest</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIPropertyBasedEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIRelativeDateTimeValue</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APISignatureWebhookAuthSettings</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APISingleConnectionAction</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APISort</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIStaticAppendValue</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIStaticBranch</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIStaticBranchAction</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIStaticDateAnchor</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIStaticPropertyFilterDataSource</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIStaticTimeZoneStrategy</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIStaticValue</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APITimeDelay</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APITimeOfDay</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APITimestampValue</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APITimeWindow</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIUnEnrollmentSetting</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIWebhookAction</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIWeeklyEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APIYearlyEnrollmentSchedule</a></code>
- <code><a href="./src/resources/automation/workflows.ts">BatchResponseAPIFlow</a></code>
- <code><a href="./src/resources/automation/workflows.ts">BatchResponseAPIFlowWithErrors</a></code>
- <code><a href="./src/resources/automation/workflows.ts">BatchResponseFlowIDWorkflowIDMappingResponse</a></code>
- <code><a href="./src/resources/automation/workflows.ts">BatchResponseFlowIDWorkflowIDMappingResponseWithErrors</a></code>
- <code><a href="./src/resources/automation/workflows.ts">CollectionResponseAPIFlowEmailCampaign</a></code>
- <code><a href="./src/resources/automation/workflows.ts">CollectionResponseAPIFlowListingForwardPaging</a></code>
- <code><a href="./src/resources/automation/workflows.ts">FlowIDWorkflowIDMappingResponse</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicAbsoluteComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicAbsoluteRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicAdsSearchFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicAdsTimeFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicAllHistoryRefineBy</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicAllPropertyTypesOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicAndFilterBranch</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicAssociationFilterBranch</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicAssociationInListFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicBoolPropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicCalendarDatePropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicCampaignInfluencedFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicCommunicationSubscriptionFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicComparativeDatePropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicComparativePropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicConstantFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicCtaAnalyticsFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicDatePoint</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicDatePropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicDateTimePropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicEmailEventFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicEmailSubscriptionFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicEnumerationPropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicEventAnalyticsFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicEventFilterMetadata</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicFiscalQuarterReference</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicFiscalYearReference</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicFormSubmissionFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicFormSubmissionOnPageFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicIndexedTimePoint</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicIndexOffset</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicInListFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicInListFilterMetadata</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicIntegrationEventFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicMonthReference</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicMultiStringPropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicNotAllFilterBranch</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicNotAnyFilterBranch</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicNowReference</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicNumAssociationsFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicNumberPropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicNumOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicOrFilterBranch</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicPageViewAnalyticsFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicPrivacyAnalyticsFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicPropertyAssociationFilterBranch</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicPropertyAssociationInListFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicPropertyFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicPropertyReferencedTime</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicQuarterReference</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicRangedDatePropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicRangedNumberPropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicRangedTimeOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicRelativeComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicRelativeRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicRestrictedFilterBranch</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicRollingDateRangePropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicRollingPropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicSetOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicStringPropertyOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicSurveyMonkeyFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicSurveyMonkeyValueFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicTimeOffset</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicTimePointOperation</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicTodayReference</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicUnifiedEventsFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicUnifiedEventsFilterBranch</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicWebinarFilter</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicWeekReference</a></code>
- <code><a href="./src/resources/automation/workflows.ts">PublicYearReference</a></code>

# Cms

## Blogs

Types:

- <code><a href="./src/resources/cms/blogs/blogs.ts">AttachToLangPrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">BatchInputJsonNode</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">DetachFromLangGroupRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">SetNewLanguagePrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">UpdateLanguagesRequestVNext</a></code>

### Posts

Types:

- <code><a href="./src/resources/cms/blogs/posts.ts">Angle</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">BackgroundImage</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">BatchInputBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">BatchResponseBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">BatchResponseBlogPostWithErrors</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">BlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">BlogPostLanguageCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">BreakpointStyles</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">CollectionResponseWithTotalBlogPostForwardPaging</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">CollectionResponseWithTotalVersionBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">ColorStop</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">ContentCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">ContentLanguageVariation</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">ContentScheduleRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">Gradient</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">LayoutSection</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">Margin</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">Padding</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">PublicAccessRule</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">RgbaColor</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">RowMetaData</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">SideOrCorner</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">Styles</a></code>
- <code><a href="./src/resources/cms/blogs/posts.ts">VersionBlogPost</a></code>

Methods:

- <code title="post /cms/v3/blogs/posts">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">create</a>({ ...params }) -> BlogPost</code>
- <code title="patch /cms/v3/blogs/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">update</a>(objectID, { ...params }) -> BlogPost</code>
- <code title="get /cms/v3/blogs/posts">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">list</a>({ ...params }) -> BlogPostsPage</code>
- <code title="delete /cms/v3/blogs/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/v3/blogs/posts/multi-language/attach-to-lang-group">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">attachToLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/posts/clone">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">clone</a>({ ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/multi-language/create-language-variation">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">createLangVariation</a>({ ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/multi-language/detach-from-lang-group">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">detachFromLangGroup</a>({ ...params }) -> void</code>
- <code title="get /cms/v3/blogs/posts/{objectId}/draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">getDraftByID</a>(objectID) -> BlogPost</code>
- <code title="get /cms/v3/blogs/posts/{objectId}/revisions/{revisionId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">getPreviousVersion</a>(revisionID, { ...params }) -> VersionBlogPost</code>
- <code title="get /cms/v3/blogs/posts/{objectId}/revisions">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">getPreviousVersions</a>(objectID, { ...params }) -> VersionBlogPostsPage</code>
- <code title="post /cms/v3/blogs/posts/{objectId}/draft/push-live">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">pushLive</a>(objectID) -> void</code>
- <code title="get /cms/v3/blogs/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">read</a>(objectID, { ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/{objectId}/draft/reset">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">resetDraft</a>(objectID) -> void</code>
- <code title="post /cms/v3/blogs/posts/{objectId}/revisions/{revisionId}/restore">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">restorePreviousVersion</a>(revisionID, { ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/{objectId}/revisions/{revisionId}/restore-to-draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">restorePreviousVersionToDraft</a>(revisionID, { ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/schedule">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">schedule</a>({ ...params }) -> void</code>
- <code title="put /cms/v3/blogs/posts/multi-language/set-new-lang-primary">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">setLangPrimary</a>({ ...params }) -> void</code>
- <code title="patch /cms/v3/blogs/posts/{objectId}/draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">updateDraft</a>(objectID, { ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/multi-language/update-languages">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts.ts">updateLangs</a>({ ...params }) -> void</code>

### Tags

Types:

- <code><a href="./src/resources/cms/blogs/tags.ts">BatchInputTag</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">BatchResponseTag</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">BatchResponseTagWithErrors</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CollectionResponseWithTotalTagForwardPaging</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">Tag</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">TagCloneRequestVNext</a></code>

Methods:

- <code title="post /cms/v3/blogs/tags">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">create</a>({ ...params }) -> Tag</code>
- <code title="patch /cms/v3/blogs/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">update</a>(objectID, { ...params }) -> Tag</code>
- <code title="get /cms/v3/blogs/tags">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">list</a>({ ...params }) -> TagsPage</code>
- <code title="delete /cms/v3/blogs/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/batch/archive">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">archiveBatch</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/multi-language/attach-to-lang-group">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">attachToLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/batch/create">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">createBatch</a>({ ...params }) -> BatchResponseTag</code>
- <code title="post /cms/v3/blogs/tags/multi-language/create-language-variation">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">createLangVariation</a>({ ...params }) -> Tag</code>
- <code title="post /cms/v3/blogs/tags/multi-language/detach-from-lang-group">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">detachFromLangGroup</a>({ ...params }) -> void</code>
- <code title="get /cms/v3/blogs/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">read</a>(objectID, { ...params }) -> Tag</code>
- <code title="post /cms/v3/blogs/tags/batch/read">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">readBatch</a>({ ...params }) -> BatchResponseTag</code>
- <code title="put /cms/v3/blogs/tags/multi-language/set-new-lang-primary">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">setLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/batch/update">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">updateBatch</a>({ ...params }) -> BatchResponseTag</code>
- <code title="post /cms/v3/blogs/tags/multi-language/update-languages">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">updateLangs</a>({ ...params }) -> void</code>

## Domains

Types:

- <code><a href="./src/resources/cms/domains.ts">CollectionResponseWithTotalDomainForwardPaging</a></code>
- <code><a href="./src/resources/cms/domains.ts">Domain</a></code>

Methods:

- <code title="get /cms/v3/domains/">client.cms.domains.<a href="./src/resources/cms/domains.ts">list</a>({ ...params }) -> DomainsPage</code>
- <code title="get /cms/v3/domains/{domainId}">client.cms.domains.<a href="./src/resources/cms/domains.ts">read</a>(domainID) -> Domain</code>

## Hubdb

Types:

- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BatchInputHubDBTableRowBatchCloneRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BatchInputHubDBTableRowV3BatchUpdateRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BatchInputHubDBTableRowV3Request</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BatchResponseHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BatchResponseHubDBTableRowV3WithErrors</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BoundedNextPage</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BoundedPaging</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CollectionResponseWithTotalHubDBTableV3ForwardPaging</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">Column</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">ColumnRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">ForeignID</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableCloneRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableRowBatchCloneRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableRowV3BatchUpdateRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableRowV3Request</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableV3Request</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">ImportResult</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">Option</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">RandomAccessCollectionResponseWithTotalHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">SimpleUser</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">StandardError</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">StreamingCollectionResponseWithTotalHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">Variant</a></code>

Methods:

- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">archiveTable</a>(tableIDOrName) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/clone">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">cloneDraftTable</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft/clone">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">cloneDraftTableRow</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/clone">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">cloneDraftTableRows</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/create">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">createDraftTableRows</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">createTable</a>({ ...params }) -> HubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">createTableRow</a>(tableIDOrName, { ...params }) -> HubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/draft/export">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">exportDraftTable</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/export">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">exportTable</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="get /cms/v3/hubdb/tables/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getAllDraftTables</a>({ ...params }) -> HubDBTableV3sPage</code>
- <code title="get /cms/v3/hubdb/tables">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getAllTables</a>({ ...params }) -> HubDBTableV3sPage</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getDraftTableDetailsByID</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getDraftTableRowByID</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getTableDetails</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getTableRow</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">getTableRows</a>(tableIDOrName, { ...params }) -> HubDBTableRowV3WrappersPage</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/import">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">importDraftTable</a>(tableIDOrName, { ...params }) -> ImportResult</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/publish">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">publishDraftTable</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">purgeDraftTableRow</a>(rowID, { ...params }) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/purge">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">purgeDraftTableRows</a>(tableIDOrName, { ...params }) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/read">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">readDraftTableRows</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/batch/read">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">readTableRows</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}/versions/{versionId}">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">removeTableVersion</a>(versionID, { ...params }) -> void</code>
- <code title="put /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">replaceDraftTableRow</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/replace">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">replaceDraftTableRows</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/reset">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">resetDraftTable</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/unpublish">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">unpublishTable</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="patch /cms/v3/hubdb/tables/{tableIdOrName}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">updateDraftTable</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="patch /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">updateDraftTableRow</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/update">client.cms.hubdb.<a href="./src/resources/cms/hubdb/hubdb.ts">updateDraftTableRows</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>

### Rows

Methods:

- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">create</a>(tableIDOrName, { ...params }) -> HubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">list</a>(tableIDOrName, { ...params }) -> UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft/clone">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">cloneDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">deleteDraft</a>(rowID, { ...params }) -> void</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">get</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">getDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">listDrafts</a>(tableIDOrName, { ...params }) -> UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3</code>
- <code title="put /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">replaceDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="patch /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">updateDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>

#### Draft

##### Batch

Methods:

- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/clone">client.cms.hubdb.rows.draft.batch.<a href="./src/resources/cms/hubdb/rows/draft/batch.ts">cloneBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/create">client.cms.hubdb.rows.draft.batch.<a href="./src/resources/cms/hubdb/rows/draft/batch.ts">createBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/purge">client.cms.hubdb.rows.draft.batch.<a href="./src/resources/cms/hubdb/rows/draft/batch.ts">purgeBatch</a>(tableIDOrName, { ...params }) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/batch/read">client.cms.hubdb.rows.draft.batch.<a href="./src/resources/cms/hubdb/rows/draft/batch.ts">readBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/read">client.cms.hubdb.rows.draft.batch.<a href="./src/resources/cms/hubdb/rows/draft/batch.ts">readDraftBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/replace">client.cms.hubdb.rows.draft.batch.<a href="./src/resources/cms/hubdb/rows/draft/batch.ts">replaceBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/update">client.cms.hubdb.rows.draft.batch.<a href="./src/resources/cms/hubdb/rows/draft/batch.ts">updateBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>

### Tables

Methods:

- <code title="post /cms/v3/hubdb/tables">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">create</a>({ ...params }) -> HubDBTableV3</code>
- <code title="get /cms/v3/hubdb/tables">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">list</a>({ ...params }) -> CollectionResponseWithTotalHubDBTableV3ForwardPaging</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">archive</a>(tableIDOrName) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/clone">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">cloneDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}/versions/{versionId}">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">deleteVersion</a>(versionID, { ...params }) -> void</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/export">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">export</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/draft/export">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">exportDraft</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">get</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/draft">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">getDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/import">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">importDraft</a>(tableIDOrName, { ...params }) -> ImportResult</code>
- <code title="get /cms/v3/hubdb/tables/draft">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">listDrafts</a>({ ...params }) -> CollectionResponseWithTotalHubDBTableV3ForwardPaging</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/publish">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">publishDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/reset">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">resetDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/unpublish">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">unpublish</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="patch /cms/v3/hubdb/tables/{tableIdOrName}/draft">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">updateDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>

## URLRedirects

Types:

- <code><a href="./src/resources/cms/url-redirects.ts">CollectionResponseWithTotalURLMappingForwardPaging</a></code>
- <code><a href="./src/resources/cms/url-redirects.ts">URLMapping</a></code>
- <code><a href="./src/resources/cms/url-redirects.ts">URLMappingCreateRequestBody</a></code>

Methods:

- <code title="post /cms/v3/url-redirects/">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">create</a>({ ...params }) -> URLMapping</code>
- <code title="patch /cms/v3/url-redirects/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">update</a>(urlRedirectID, { ...params }) -> URLMapping</code>
- <code title="get /cms/v3/url-redirects/">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">list</a>({ ...params }) -> URLMappingsPage</code>
- <code title="delete /cms/v3/url-redirects/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">delete</a>(urlRedirectID) -> void</code>
- <code title="get /cms/v3/url-redirects/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">read</a>(urlRedirectID) -> URLMapping</code>

# Conversations

## CustomChannels

Types:

- <code><a href="./src/resources/conversations/custom-channels.ts">ChannelIntegrationMessageEgg</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">ChannelIntegrationParticipant</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">CollectionResponseWithTotalPublicChannelAccountForwardPaging</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">ContactAddress</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">ContactAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">ContactEmail</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">ContactName</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">ContactOrg</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">ContactPhone</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">ContactProfile</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">ContactURL</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">FileAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">LocationAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">MessageHeaderAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PreResolvedContact</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PreResolvedContacts</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicChannelAccount</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicChannelAccountEgg</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicChannelAccountStagingToken</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicChannelAccountStagingTokenUpdateRequest</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicChannelAccountUpdateRequest</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicChannelIntegrationChannel</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicChannelIntegrationChannelCreate</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicChannelIntegrationChannelPatch</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicChannelIntegrationMessageUpdateRequest</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicClient</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicContact</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicConversationsMessage</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicDeliveryIdentifier</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicFile</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicLocation</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicMessageFailureDetails</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicMessageHeader</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicMessageStatus</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicQuickReplies</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicRecipient</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicSender</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicSocialMetadataAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicUnsupportedContent</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">PublicWhatsAppTemplateMetadata</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">QuickRepliesAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">QuickReply</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">SocialMetadata</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">SocialMetadataIntegrationAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels.ts">UnsupportedContentAttachment</a></code>

# CRM

Types:

- <code><a href="./src/resources/crm/crm.ts">AssociatedID</a></code>
- <code><a href="./src/resources/crm/crm.ts">AssociationSpecWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">BatchResponsePublicDefaultAssociation</a></code>
- <code><a href="./src/resources/crm/crm.ts">CollectionResponseMultiAssociatedObjectWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">CreatedResponseLabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/crm.ts">LabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/crm.ts">MultiAssociatedObjectWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">Option</a></code>
- <code><a href="./src/resources/crm/crm.ts">Property</a></code>
- <code><a href="./src/resources/crm/crm.ts">PropertyModificationMetadata</a></code>
- <code><a href="./src/resources/crm/crm.ts">PublicDefaultAssociation</a></code>

## Associations

Types:

- <code><a href="./src/resources/crm/associations/associations.ts">BatchInputPublicAssociation</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchInputPublicObjectID</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchResponsePublicAssociation</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchResponsePublicAssociationMulti</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">PublicAssociation</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">PublicAssociationMulti</a></code>

Methods:

- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/create">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">create</a>(toObjectType, { ...params }) -> BatchResponsePublicAssociation</code>
- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/archive">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">delete</a>(toObjectType, { ...params }) -> void</code>
- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/read">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">read</a>(toObjectType, { ...params }) -> BatchResponsePublicAssociationMulti</code>

### V4

Types:

- <code><a href="./src/resources/crm/associations/v4.ts">AssociationSpec1</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">AssociationSpecWithLabel1</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">BatchInputPublicAssociationMultiArchive</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">BatchInputPublicAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">BatchInputPublicDefaultAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">BatchInputPublicFetchAssociationsBatchRequest</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">BatchResponseLabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">BatchResponsePublicAssociationMultiWithLabel</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">BatchResponseVoid</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">DateTime</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">NextPage1</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">PreviousPage1</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">PublicAssociationMultiArchive</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">PublicAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">PublicAssociationMultiWithLabel</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">PublicDefaultAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">PublicFetchAssociationsBatchRequest</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">ReportCreationResponse</a></code>
- <code><a href="./src/resources/crm/associations/v4.ts">StandardError1</a></code>

Methods:

- <code title="put /crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">create</a>(toObjectID, [ ...body ]) -> CreatedResponseLabelsBetweenObjectPair</code>
- <code title="get /crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">list</a>(toObjectType, { ...params }) -> MultiAssociatedObjectWithLabelsPage</code>
- <code title="delete /crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">delete</a>(toObjectID, { ...params }) -> void</code>
- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/labels/archive">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">archiveLabels</a>(toObjectType, { ...params }) -> BatchResponseVoid</code>
- <code title="put /crm/v4/objects/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">createDefault</a>(toObjectID, { ...params }) -> BatchResponsePublicDefaultAssociation</code>
- <code title="post /crm/v4/associations/usage/high-usage-report/{userId}">client.crm.associations.v4.<a href="./src/resources/crm/associations/v4.ts">request</a>(userID) -> ReportCreationResponse</code>

## Extensions

### Calling

Types:

- <code><a href="./src/resources/crm/extensions/calling.ts">ChannelConnectionSettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling.ts">ChannelConnectionSettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling.ts">ChannelConnectionSettingsResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling.ts">MarkRecordingAsReadyRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling.ts">RecordingSettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling.ts">RecordingSettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling.ts">RecordingSettingsResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling.ts">SettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling.ts">SettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling.ts">SettingsResponse</a></code>

Methods:

- <code title="post /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling.ts">create</a>(appID, { ...params }) -> ChannelConnectionSettingsResponse</code>
- <code title="patch /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling.ts">update</a>(appID, { ...params }) -> ChannelConnectionSettingsResponse</code>
- <code title="delete /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling.ts">delete</a>(appID) -> void</code>
- <code title="get /crm/v3/extensions/calling/{appId}/settings/recording">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling.ts">getURLFormat</a>(appID) -> RecordingSettingsResponse</code>
- <code title="post /crm/v3/extensions/calling/recordings/ready">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling.ts">markAsReady</a>({ ...params }) -> void</code>
- <code title="get /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling.ts">read</a>(appID) -> ChannelConnectionSettingsResponse</code>
- <code title="post /crm/v3/extensions/calling/{appId}/settings/recording">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling.ts">registerURLFormat</a>(appID, { ...params }) -> RecordingSettingsResponse</code>
- <code title="patch /crm/v3/extensions/calling/{appId}/settings/recording">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling.ts">updateURLFormat</a>(appID, { ...params }) -> RecordingSettingsResponse</code>

## Objects

Types:

- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchReadInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchResponseSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchResponseSimplePublicUpsertObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CollectionResponseAssociatedID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CollectionResponseSimplePublicObjectWithAssociations</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CollectionResponseWithTotalSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CreatedResponseSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">Filter</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">FilterGroup</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicAssociationsForObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicGdprDeleteInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicMergeInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicObjectSearchRequest</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectWithAssociations</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicUpsertObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">ValueWithTimestamp</a></code>

### Companies

Methods:

- <code title="post /crm/v3/objects/companies">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/batch/update">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="get /crm/v3/objects/companies">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="post /crm/v3/objects/companies/batch/archive">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/companies/merge">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/companies/{companyId}">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">read</a>(companyID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/companies/search">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/batch/upsert">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Contacts

Methods:

- <code title="post /crm/v3/objects/contacts">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/contacts/{contactId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">update</a>(contactID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/contacts">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/contacts/{contactId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">delete</a>(contactID) -> void</code>
- <code title="post /crm/v3/objects/contacts/merge">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/gdpr-delete">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">purge</a>({ ...params }) -> void</code>
- <code title="get /crm/v3/objects/contacts/{contactId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">read</a>(contactID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/contacts/search">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/contacts/batch/create">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/update">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/archive">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/contacts/batch/read">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">read</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/upsert">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Deals

Methods:

- <code title="post /crm/v3/objects/0-3">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">update</a>(dealID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/0-3">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">delete</a>(dealID) -> void</code>
- <code title="post /crm/v3/objects/0-3/merge">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">read</a>(dealID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/0-3/search">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-3/batch/upsert">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

#### Associations

#### Batch

### Schemas

Types:

- <code><a href="./src/resources/crm/objects/schemas.ts">AssociationDefinition</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">AssociationDefinitionEgg</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">CollectionResponseObjectSchemaNoPaging</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectSchema</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectSchemaEgg</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectTypeDefinition</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectTypeDefinitionLabels</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectTypeDefinitionPatch</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectTypePropertyCreate</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">OptionInput</a></code>

Methods:

- <code title="post /crm-object-schemas/v3/schemas">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">create</a>({ ...params }) -> ObjectSchema</code>
- <code title="patch /crm-object-schemas/v3/schemas/{objectType}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">update</a>(objectType, { ...params }) -> ObjectTypeDefinition</code>
- <code title="get /crm-object-schemas/v3/schemas">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">list</a>({ ...params }) -> CollectionResponseObjectSchemaNoPaging</code>
- <code title="delete /crm-object-schemas/v3/schemas/{objectType}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="delete /crm-object-schemas/v3/schemas/{objectType}/associations/{associationIdentifier}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">archiveAssociation</a>(associationIdentifier, { ...params }) -> void</code>
- <code title="post /crm-object-schemas/v3/schemas/{objectType}/associations">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">createAssociation</a>(objectType, { ...params }) -> AssociationDefinition</code>
- <code title="get /crm-object-schemas/v3/schemas/{objectType}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">read</a>(objectType) -> ObjectSchema</code>

## Owners

Types:

- <code><a href="./src/resources/crm/owners.ts">CollectionResponsePublicOwnerForwardPaging</a></code>
- <code><a href="./src/resources/crm/owners.ts">PublicOwner</a></code>
- <code><a href="./src/resources/crm/owners.ts">PublicTeam</a></code>

Methods:

- <code title="get /crm/v3/owners/">client.crm.owners.<a href="./src/resources/crm/owners.ts">list</a>({ ...params }) -> PublicOwnersPage</code>
- <code title="get /crm/v3/owners/{ownerId}">client.crm.owners.<a href="./src/resources/crm/owners.ts">get</a>(ownerID, { ...params }) -> PublicOwner</code>

## Pipelines

Types:

- <code><a href="./src/resources/crm/pipelines.ts">CollectionResponsePipelineNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CollectionResponsePipelineStageNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CollectionResponsePublicAuditInfoNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">Pipeline</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelineInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelinePatchInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelineStage</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelineStageInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelineStagePatchInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PublicAuditInfo</a></code>

Methods:

- <code title="post /crm/v3/pipelines/{objectType}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">create</a>(objectType, { ...params }) -> Pipeline</code>
- <code title="patch /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">update</a>(stageID, { ...params }) -> PipelineStage</code>
- <code title="get /crm/v3/pipelines/{objectType}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">list</a>(objectType) -> CollectionResponsePipelineNoPaging</code>
- <code title="delete /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">delete</a>(stageID, { ...params }) -> void</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/audit">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">getAudit</a>(pipelineID, { ...params }) -> CollectionResponsePublicAuditInfoNoPaging</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">read</a>(stageID, { ...params }) -> PipelineStage</code>
- <code title="put /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">replace</a>(stageID, { ...params }) -> PipelineStage</code>

## Properties

Types:

- <code><a href="./src/resources/crm/properties.ts">BatchInputPropertyCreate</a></code>
- <code><a href="./src/resources/crm/properties.ts">BatchInputPropertyName</a></code>
- <code><a href="./src/resources/crm/properties.ts">BatchReadInputPropertyName</a></code>
- <code><a href="./src/resources/crm/properties.ts">BatchResponseProperty</a></code>
- <code><a href="./src/resources/crm/properties.ts">CollectionResponseProperty</a></code>
- <code><a href="./src/resources/crm/properties.ts">CollectionResponsePropertyGroup</a></code>
- <code><a href="./src/resources/crm/properties.ts">CreatedResponseProperty</a></code>
- <code><a href="./src/resources/crm/properties.ts">CreatedResponsePropertyGroup</a></code>
- <code><a href="./src/resources/crm/properties.ts">OptionInput</a></code>
- <code><a href="./src/resources/crm/properties.ts">PropertyCreate</a></code>
- <code><a href="./src/resources/crm/properties.ts">PropertyGroup</a></code>
- <code><a href="./src/resources/crm/properties.ts">PropertyGroupCreate</a></code>
- <code><a href="./src/resources/crm/properties.ts">PropertyGroupUpdate</a></code>
- <code><a href="./src/resources/crm/properties.ts">PropertyName</a></code>
- <code><a href="./src/resources/crm/properties.ts">PropertyUpdate</a></code>

Methods:

- <code title="post /crm/v3/properties/{objectType}/groups">client.crm.properties.<a href="./src/resources/crm/properties.ts">create</a>(objectType, { ...params }) -> CreatedResponsePropertyGroup</code>
- <code title="patch /crm/v3/properties/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties.ts">update</a>(propertyName, { ...params }) -> Property</code>
- <code title="get /crm/v3/properties/{objectType}/groups">client.crm.properties.<a href="./src/resources/crm/properties.ts">list</a>(objectType) -> CollectionResponsePropertyGroup</code>
- <code title="delete /crm/v3/properties/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties.ts">delete</a>(propertyName, { ...params }) -> void</code>
- <code title="get /crm/v3/properties/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties.ts">getByName</a>(propertyName, { ...params }) -> Property</code>
- <code title="post /crm/v3/properties/{objectType}/batch/read">client.crm.properties.<a href="./src/resources/crm/properties.ts">read</a>(objectType, { ...params }) -> BatchResponseProperty</code>

# Files

Types:

- <code><a href="./src/resources/files/files.ts">CollectionResponseFile</a></code>
- <code><a href="./src/resources/files/files.ts">CollectionResponseFolder</a></code>
- <code><a href="./src/resources/files/files.ts">File</a></code>
- <code><a href="./src/resources/files/files.ts">FileActionResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FileStat</a></code>
- <code><a href="./src/resources/files/files.ts">FileUpdateInput</a></code>
- <code><a href="./src/resources/files/files.ts">Folder</a></code>
- <code><a href="./src/resources/files/files.ts">FolderActionResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FolderInput</a></code>
- <code><a href="./src/resources/files/files.ts">FolderUpdateInput</a></code>
- <code><a href="./src/resources/files/files.ts">FolderUpdateInputWithID</a></code>
- <code><a href="./src/resources/files/files.ts">FolderUpdateTaskLocator</a></code>
- <code><a href="./src/resources/files/files.ts">ImportFromURLInput</a></code>
- <code><a href="./src/resources/files/files.ts">ImportFromURLTaskLocator</a></code>
- <code><a href="./src/resources/files/files.ts">SignedURL</a></code>

## Files

Methods:

- <code title="patch /files/v3/files/{fileId}">client.files.files.<a href="./src/resources/files/files_.ts">update</a>(fileID, { ...params }) -> File</code>
- <code title="delete /files/v3/files/{fileId}">client.files.files.<a href="./src/resources/files/files_.ts">delete</a>(fileID) -> void</code>
- <code title="delete /files/v3/files/{fileId}/gdpr-delete">client.files.files.<a href="./src/resources/files/files_.ts">gdprDelete</a>(fileID) -> void</code>
- <code title="get /files/v3/files/{fileId}">client.files.files.<a href="./src/resources/files/files_.ts">get</a>(fileID, { ...params }) -> File</code>
- <code title="get /files/v3/files/stat/{path}">client.files.files.<a href="./src/resources/files/files_.ts">getByPath</a>(path\_, { ...params }) -> FileStat</code>
- <code title="get /files/v3/files/import-from-url/async/tasks/{taskId}/status">client.files.files.<a href="./src/resources/files/files_.ts">getImportFromURLAsyncStatus</a>(taskID) -> FileActionResponse</code>
- <code title="get /files/v3/files/{fileId}/signed-url">client.files.files.<a href="./src/resources/files/files_.ts">getSignedURL</a>(fileID, { ...params }) -> SignedURL</code>
- <code title="post /files/v3/files/import-from-url/async">client.files.files.<a href="./src/resources/files/files_.ts">importFromURLAsync</a>({ ...params }) -> ImportFromURLTaskLocator</code>
- <code title="put /files/v3/files/{fileId}">client.files.files.<a href="./src/resources/files/files_.ts">replace</a>(fileID, { ...params }) -> File</code>
- <code title="get /files/v3/files/search">client.files.files.<a href="./src/resources/files/files_.ts">search</a>({ ...params }) -> FilesPage</code>
- <code title="post /files/v3/files">client.files.files.<a href="./src/resources/files/files_.ts">upload</a>({ ...params }) -> File</code>

## Folders

Methods:

- <code title="post /files/v3/folders">client.files.folders.<a href="./src/resources/files/folders.ts">create</a>({ ...params }) -> Folder</code>
- <code title="delete /files/v3/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">deleteByID</a>(folderID) -> void</code>
- <code title="delete /files/v3/folders/{folderPath}">client.files.folders.<a href="./src/resources/files/folders.ts">deleteByPath</a>(folderPath) -> void</code>
- <code title="get /files/v3/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">getByID</a>(folderID, { ...params }) -> Folder</code>
- <code title="get /files/v3/folders/{folderPath}">client.files.folders.<a href="./src/resources/files/folders.ts">getByPath</a>(folderPath, { ...params }) -> Folder</code>
- <code title="get /files/v3/folders/update/async/tasks/{taskId}/status">client.files.folders.<a href="./src/resources/files/folders.ts">getUpdateAsyncStatus</a>(taskID) -> FolderActionResponse</code>
- <code title="get /files/v3/folders/search">client.files.folders.<a href="./src/resources/files/folders.ts">search</a>({ ...params }) -> FoldersPage</code>
- <code title="post /files/v3/folders/update/async">client.files.folders.<a href="./src/resources/files/folders.ts">updateAsync</a>({ ...params }) -> FolderUpdateTaskLocator</code>
- <code title="patch /files/v3/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">updateByID</a>(folderID, { ...params }) -> Folder</code>

# Marketing

## Emails

Types:

- <code><a href="./src/resources/marketing/emails.ts">AbTestCreateRequestVNext</a></code>
- <code><a href="./src/resources/marketing/emails.ts">AggregateEmailStatistics</a></code>
- <code><a href="./src/resources/marketing/emails.ts">CollectionResponseWithTotalEmailStatisticIntervalNoPaging</a></code>
- <code><a href="./src/resources/marketing/emails.ts">CollectionResponseWithTotalPublicEmailForwardPaging</a></code>
- <code><a href="./src/resources/marketing/emails.ts">CollectionResponseWithTotalVersionPublicEmail</a></code>
- <code><a href="./src/resources/marketing/emails.ts">EmailCloneRequestVNext</a></code>
- <code><a href="./src/resources/marketing/emails.ts">EmailCreateRequest</a></code>
- <code><a href="./src/resources/marketing/emails.ts">EmailStatisticInterval</a></code>
- <code><a href="./src/resources/marketing/emails.ts">EmailStatisticsData</a></code>
- <code><a href="./src/resources/marketing/emails.ts">EmailUpdateRequest</a></code>
- <code><a href="./src/resources/marketing/emails.ts">Interval</a></code>
- <code><a href="./src/resources/marketing/emails.ts">Paging</a></code>
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
- <code><a href="./src/resources/marketing/emails.ts">PublicFontStyle</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicRssEmailDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">PublicWebversionDetails</a></code>
- <code><a href="./src/resources/marketing/emails.ts">SmartEmailField</a></code>
- <code><a href="./src/resources/marketing/emails.ts">VersionPublicEmail</a></code>

Methods:

- <code title="post /marketing/v3/emails/">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">create</a>({ ...params }) -> PublicEmail</code>
- <code title="patch /marketing/v3/emails/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">update</a>(emailID, { ...params }) -> PublicEmail</code>
- <code title="get /marketing/v3/emails/">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">list</a>({ ...params }) -> PublicEmailsPage</code>
- <code title="delete /marketing/v3/emails/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">delete</a>(emailID, { ...params }) -> void</code>
- <code title="post /marketing/v3/emails/clone">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">clone</a>({ ...params }) -> PublicEmail</code>
- <code title="post /marketing/v3/emails/ab-test/create-variation">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">createAbTestVariation</a>({ ...params }) -> PublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}/ab-test/get-variation">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getAbTestVariation</a>(emailID) -> PublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}/draft">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getDraft</a>(emailID) -> PublicEmail</code>
- <code title="get /marketing/v3/emails/statistics/list">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getEmailsList</a>({ ...params }) -> AggregateEmailStatistics</code>
- <code title="get /marketing/v3/emails/statistics/histogram">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getHistogram</a>({ ...params }) -> CollectionResponseWithTotalEmailStatisticIntervalNoPaging</code>
- <code title="get /marketing/v3/emails/{emailId}/revisions/{revisionId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getRevisionByID</a>(revisionID, { ...params }) -> VersionPublicEmail</code>
- <code title="get /marketing/v3/emails/{emailId}/revisions">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">getRevisions</a>(emailID, { ...params }) -> VersionPublicEmailsPage</code>
- <code title="get /marketing/v3/emails/statistics/list">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">listFull</a>({ ...params }) -> AggregateEmailStatistics</code>
- <code title="post /marketing/v3/emails/{emailId}/publish">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">publishOrSend</a>(emailID) -> void</code>
- <code title="get /marketing/v3/emails/{emailId}">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">read</a>(emailID, { ...params }) -> PublicEmail</code>
- <code title="post /marketing/v3/emails/{emailId}/draft/reset">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">resetDraft</a>(emailID) -> void</code>
- <code title="post /marketing/v3/emails/{emailId}/revisions/{revisionId}/restore-to-draft">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">restoreDraftRevision</a>(revisionID, { ...params }) -> PublicEmail</code>
- <code title="post /marketing/v3/emails/{emailId}/revisions/{revisionId}/restore">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">restoreRevision</a>(revisionID, { ...params }) -> void</code>
- <code title="post /marketing/v3/emails/{emailId}/unpublish">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">unpublishOrCancel</a>(emailID) -> void</code>
- <code title="patch /marketing/v3/emails/{emailId}/draft">client.marketing.emails.<a href="./src/resources/marketing/emails.ts">upsertDraft</a>(emailID, { ...params }) -> PublicEmail</code>

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
- <code title="get /marketing/v3/forms/{formId}">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">read</a>(formID, { ...params }) -> FormDefinitionBase</code>
- <code title="put /marketing/v3/forms/{formId}">client.marketing.forms.<a href="./src/resources/marketing/forms.ts">replace</a>(formID) -> FormDefinitionBase</code>

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

- <code><a href="./src/resources/marketing/subscriptions/v4.ts">ActionResponseWithResultsPublicStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">ActionResponseWithResultsPublicWideStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">ActionResponseWithResultsSubscriptionDefinition</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">BatchInputPublicStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">BatchResponsePublicBulkOptOutFromAllResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">BatchResponsePublicStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">BatchResponsePublicStatusBulkResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">BatchResponsePublicStatusBulkResponseWithErrors</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">BatchResponsePublicWideStatusBulkResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">BatchResponsePublicWideStatusBulkResponseWithErrors</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">LinkGenerationRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">LinkGenerationResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">PartialPublicStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">PublicBulkOptOutFromAllResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">PublicStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">PublicStatusBulkResponse</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">PublicStatusRequest</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">PublicSubscriptionTranslation</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">PublicWideStatus</a></code>
- <code><a href="./src/resources/marketing/subscriptions/v4.ts">PublicWideStatusBulkResponse</a></code>

# Scheduler

## Meetings

Types:

- <code><a href="./src/resources/scheduler/meetings.ts">CollectionResponseWithTotalExternalLinkMetadataForwardPaging</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalAssociationCreateRequest</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalBookingFormField</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalBookingInfo</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalBrandingMetadata</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalCalendarMeetingEventCreateProperties</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalCalendarMeetingEventCreateRequest</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalCalendarMeetingEventResponseProperties</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalCalenderMeetingEventResponse</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalClosedRange</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalCommunicationConsentCheckbox</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalEmailReminderSchedule</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalGuestSettings</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalLegalConsentOptions</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalLegalConsentResponse</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalLinkAvailability</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalLinkAvailabilityAndBusyTimes</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalLinkAvailabilityForDuration</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalLinkDisplayInfo</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalLinkFormField</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalLinkMetadata</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalMeetingAvailability</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalMeetingBooking</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalMeetingBookingResponse</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalMeetingsLinkSettings</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalMeetingsUser</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalMeetingsWelcomeScreenInfo</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalOption</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalReminder</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalTimeRange</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalUserBusyTimes</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalUserProfile</a></code>
- <code><a href="./src/resources/scheduler/meetings.ts">ExternalValidatedFormField</a></code>

# Settings

## Users

Types:

- <code><a href="./src/resources/settings/users.ts">CollectionResponsePublicPermissionSetNoPaging</a></code>
- <code><a href="./src/resources/settings/users.ts">CollectionResponsePublicTeamNoPaging</a></code>
- <code><a href="./src/resources/settings/users.ts">CollectionResponsePublicUserForwardPaging</a></code>
- <code><a href="./src/resources/settings/users.ts">PublicPermissionSet</a></code>
- <code><a href="./src/resources/settings/users.ts">PublicTeam</a></code>
- <code><a href="./src/resources/settings/users.ts">PublicUser</a></code>
- <code><a href="./src/resources/settings/users.ts">PublicUserUpdate</a></code>
- <code><a href="./src/resources/settings/users.ts">UserProvisionRequest</a></code>

Methods:

- <code title="post /settings/v3/users/">client.settings.users.<a href="./src/resources/settings/users.ts">create</a>({ ...params }) -> PublicUser</code>
- <code title="get /settings/v3/users/">client.settings.users.<a href="./src/resources/settings/users.ts">list</a>({ ...params }) -> PublicUsersPage</code>
- <code title="delete /settings/v3/users/{userId}">client.settings.users.<a href="./src/resources/settings/users.ts">delete</a>(userID, { ...params }) -> void</code>
- <code title="get /settings/v3/users/{userId}">client.settings.users.<a href="./src/resources/settings/users.ts">read</a>(userID, { ...params }) -> PublicUser</code>
- <code title="put /settings/v3/users/{userId}">client.settings.users.<a href="./src/resources/settings/users.ts">replace</a>(userID, { ...params }) -> PublicUser</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">BatchInputSubscriptionBatchUpdateRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">BatchResponseSubscriptionResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">BatchResponseSubscriptionResponseWithErrors</a></code>
- <code><a href="./src/resources/webhooks.ts">SettingsChangeRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">SettingsResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">SubscriptionBatchUpdateRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">SubscriptionCreateRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">SubscriptionPatchRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">SubscriptionResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">ThrottlingSettings</a></code>

Methods:

- <code title="post /webhooks/v3/{appId}/subscriptions">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>(appID, { ...params }) -> SubscriptionResponse</code>
- <code title="patch /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(subscriptionID, { ...params }) -> SubscriptionResponse</code>
- <code title="get /webhooks/v3/{appId}/subscriptions">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>(appID) -> SubscriptionListResponse</code>
- <code title="delete /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(subscriptionID, { ...params }) -> void</code>
- <code title="delete /webhooks/v3/{appId}/settings">client.webhooks.<a href="./src/resources/webhooks.ts">clear</a>(appID) -> void</code>
- <code title="put /webhooks/v3/{appId}/settings">client.webhooks.<a href="./src/resources/webhooks.ts">configure</a>(appID, { ...params }) -> SettingsResponse</code>
- <code title="get /webhooks/v3/{appId}/subscriptions/{subscriptionId}">client.webhooks.<a href="./src/resources/webhooks.ts">read</a>(subscriptionID, { ...params }) -> SubscriptionResponse</code>
- <code title="post /webhooks/v3/{appId}/subscriptions/batch/update">client.webhooks.<a href="./src/resources/webhooks.ts">updateBatch</a>(appID, { ...params }) -> BatchResponseSubscriptionResponse</code>
