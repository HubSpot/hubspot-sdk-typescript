# Automation

## Actions

Types:

- <code><a href="./src/resources/automation/actions/actions.ts">BatchInputCallbackCompletionBatchRequest</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CallbackCompletionBatchRequest</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CallbackCompletionRequest</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CollectionResponsePublicActionDefinitionForwardPaging</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CollectionResponsePublicActionFunctionIdentifierNoPaging</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CollectionResponsePublicActionRevisionForwardPaging</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">FieldTypeDefinition</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">InputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">OutputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionDefinition</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionDefinitionEgg</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionDefinitionPatch</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionFunction</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionFunctionIdentifier</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionLabels</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionRevision</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicConditionalSingleFieldDependency</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicExecutionTranslationRule</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicObjectRequestOptions</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicSingleFieldDependency</a></code>

### Callbacks

Methods:

- <code title="post /automation/v4/actions/callbacks/{callbackId}/complete">client.automation.actions.callbacks.<a href="./src/resources/automation/actions/callbacks.ts">complete</a>(callbackID, { ...params }) -> void</code>
- <code title="post /automation/v4/actions/callbacks/complete">client.automation.actions.callbacks.<a href="./src/resources/automation/actions/callbacks.ts">completeBatch</a>({ ...params }) -> void</code>

### Definitions

Methods:

- <code title="post /automation/v4/actions/{appId}">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">create</a>(appID, { ...params }) -> PublicActionDefinition</code>
- <code title="patch /automation/v4/actions/{appId}/{definitionId}">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">update</a>(definitionID, { ...params }) -> PublicActionDefinition</code>
- <code title="get /automation/v4/actions/{appId}">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">list</a>(appID, { ...params }) -> PublicActionDefinitionsPage</code>
- <code title="delete /automation/v4/actions/{appId}/{definitionId}">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">delete</a>(definitionID, { ...params }) -> void</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">get</a>(definitionID, { ...params }) -> PublicActionDefinition</code>

### Functions

Methods:

- <code title="get /automation/v4/actions/{appId}/{definitionId}/functions">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">list</a>(definitionID, { ...params }) -> CollectionResponsePublicActionFunctionIdentifierNoPaging</code>
- <code title="delete /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">delete</a>(functionID, { ...params }) -> void</code>
- <code title="put /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">createOrReplace</a>(functionID, { ...params }) -> PublicActionFunctionIdentifier</code>
- <code title="put /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">createOrReplaceByFunctionType</a>(functionType, { ...params }) -> PublicActionFunctionIdentifier</code>
- <code title="delete /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">deleteByFunctionType</a>(functionType, { ...params }) -> void</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">get</a>(functionID, { ...params }) -> PublicActionFunction</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">getByFunctionType</a>(functionType, { ...params }) -> PublicActionFunction</code>

### Revisions

Methods:

- <code title="get /automation/v4/actions/{appId}/{definitionId}/revisions">client.automation.actions.revisions.<a href="./src/resources/automation/actions/revisions.ts">list</a>(definitionID, { ...params }) -> PublicActionRevisionsPage</code>
- <code title="get /automation/v4/actions/{appId}/{definitionId}/revisions/{revisionId}">client.automation.actions.revisions.<a href="./src/resources/automation/actions/revisions.ts">get</a>(revisionID, { ...params }) -> PublicActionRevision</code>

## Sequences

Types:

- <code><a href="./src/resources/automation/sequences/sequences.ts">CollectionResponseWithTotalPublicSequenceLiteResponseForwardPaging</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">EmailSettingsResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">MeetingSettingsResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">PublicEmailPatternResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">PublicSequenceEnrollmentLiteResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">PublicSequenceEnrollmentRequest</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">PublicSequenceEnrollmentResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">PublicSequenceLiteResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">PublicSequenceResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">PublicSequenceSettingsResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">PublicSequenceStepDependencyResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">PublicSequenceStepResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">PublicTaskPatternResponse</a></code>
- <code><a href="./src/resources/automation/sequences/sequences.ts">UnenrollmentSettingsResponse</a></code>

Methods:

- <code title="get /automation/v4/sequences/">client.automation.sequences.<a href="./src/resources/automation/sequences/sequences.ts">list</a>({ ...params }) -> PublicSequenceLiteResponsesPage</code>
- <code title="get /automation/v4/sequences/{sequenceId}">client.automation.sequences.<a href="./src/resources/automation/sequences/sequences.ts">get</a>(sequenceID, { ...params }) -> PublicSequenceResponse</code>

### Enrollments

Methods:

- <code title="post /automation/v4/sequences/enrollments">client.automation.sequences.enrollments.<a href="./src/resources/automation/sequences/enrollments.ts">enroll</a>({ ...params }) -> PublicSequenceEnrollmentLiteResponse</code>
- <code title="get /automation/v4/sequences/enrollments/contact/{contactId}">client.automation.sequences.enrollments.<a href="./src/resources/automation/sequences/enrollments.ts">getByContactID</a>(contactID) -> PublicSequenceEnrollmentResponse</code>

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
- <code><a href="./src/resources/automation/workflows.ts">APITimeWindow</a></code>
- <code><a href="./src/resources/automation/workflows.ts">APITimestampValue</a></code>
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

Methods:

- <code title="post /automation/v4/flows">client.automation.workflows.<a href="./src/resources/automation/workflows.ts">create</a>() -> APIFlow</code>
- <code title="put /automation/v4/flows/{flowId}">client.automation.workflows.<a href="./src/resources/automation/workflows.ts">update</a>(flowID) -> APIFlow</code>
- <code title="get /automation/v4/flows">client.automation.workflows.<a href="./src/resources/automation/workflows.ts">list</a>({ ...params }) -> APIFlowListingsPage</code>
- <code title="delete /automation/v4/flows/{flowId}">client.automation.workflows.<a href="./src/resources/automation/workflows.ts">delete</a>(flowID) -> void</code>
- <code title="post /automation/v4/flows/batch/read">client.automation.workflows.<a href="./src/resources/automation/workflows.ts">batchGet</a>({ ...params }) -> BatchResponseAPIFlow</code>
- <code title="post /automation/v4/workflow-id-mappings/batch/read">client.automation.workflows.<a href="./src/resources/automation/workflows.ts">batchGetIDMappings</a>({ ...params }) -> BatchResponseFlowIDWorkflowIDMappingResponse</code>
- <code title="get /automation/v4/flows/{flowId}">client.automation.workflows.<a href="./src/resources/automation/workflows.ts">get</a>(flowID) -> APIFlow</code>
- <code title="get /automation/v4/flows/email-campaigns">client.automation.workflows.<a href="./src/resources/automation/workflows.ts">listEmailCampaigns</a>({ ...params }) -> APIFlowEmailCampaignsPage</code>
