# Automation

## Actions

Types:

- <code><a href="./src/resources/automation/actions.ts">ActionExecutionIndexIdentifier</a></code>
- <code><a href="./src/resources/automation/actions.ts">AgentRequestContext</a></code>
- <code><a href="./src/resources/automation/actions.ts">ArrayFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions.ts">BatchInputCallbackCompletionBatchRequest</a></code>
- <code><a href="./src/resources/automation/actions.ts">BooleanFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions.ts">CallbackCompletionBatchRequest</a></code>
- <code><a href="./src/resources/automation/actions.ts">CallbackCompletionRequest</a></code>
- <code><a href="./src/resources/automation/actions.ts">ChirpAIContextObject</a></code>
- <code><a href="./src/resources/automation/actions.ts">CollectionResponsePublicActionDefinitionForwardPaging</a></code>
- <code><a href="./src/resources/automation/actions.ts">CollectionResponsePublicActionFunctionIdentifierNoPaging</a></code>
- <code><a href="./src/resources/automation/actions.ts">CollectionResponsePublicActionRevisionForwardPaging</a></code>
- <code><a href="./src/resources/automation/actions.ts">ComplianceIDs</a></code>
- <code><a href="./src/resources/automation/actions.ts">ContactID</a></code>
- <code><a href="./src/resources/automation/actions.ts">CopilotRequestContext</a></code>
- <code><a href="./src/resources/automation/actions.ts">DoubleFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions.ts">FieldTypeDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">IntegerFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions.ts">LongFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions.ts">ObjectFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions.ts">OutputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionDefinitionEgg</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionDefinitionPatch</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionDefinitionRequiresObjectRequest</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionDefinitionRequiresObjectResponse</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionFunction</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionFunctionIdentifier</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionLabels</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicActionRevision</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicConditionalSingleFieldDependency</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicExecutionTranslationRule</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicFieldTypeDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicInputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicObjectRequestOptions</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicOption</a></code>
- <code><a href="./src/resources/automation/actions.ts">PublicSingleFieldDependency</a></code>
- <code><a href="./src/resources/automation/actions.ts">StandaloneRequestContext</a></code>
- <code><a href="./src/resources/automation/actions.ts">StringFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions.ts">TestRequestContext</a></code>
- <code><a href="./src/resources/automation/actions.ts">WorkflowsRequestContext</a></code>

Methods:

- <code title="post /automation/actions/2026-03/{appId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">create</a>(appID, { ...params }) -> PublicActionDefinition</code>
- <code title="patch /automation/actions/2026-03/{appId}/{definitionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">update</a>(definitionID, { ...params }) -> PublicActionDefinition</code>
- <code title="get /automation/actions/2026-03/{appId}/{definitionId}/revisions">client.automation.actions.<a href="./src/resources/automation/actions.ts">list</a>(definitionID, { ...params }) -> PublicActionRevisionsPage</code>
- <code title="delete /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">delete</a>(functionID, { ...params }) -> void</code>
- <code title="post /automation/actions/callbacks/2026-03/{callbackId}/complete">client.automation.actions.<a href="./src/resources/automation/actions.ts">complete</a>(callbackID, { ...params }) -> void</code>
- <code title="post /automation/actions/callbacks/2026-03/complete">client.automation.actions.<a href="./src/resources/automation/actions.ts">completeBatch</a>({ ...params }) -> void</code>
- <code title="put /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">createOrReplace</a>(functionID, { ...params }) -> PublicActionFunctionIdentifier</code>
- <code title="put /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.<a href="./src/resources/automation/actions.ts">createOrReplaceByFunctionType</a>(functionType, { ...params }) -> PublicActionFunctionIdentifier</code>
- <code title="post /automation/actions/2026-03/{appId}/{definitionId}/requires-object">client.automation.actions.<a href="./src/resources/automation/actions.ts">createRequiresObject</a>(definitionID, { ...params }) -> void</code>
- <code title="delete /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.<a href="./src/resources/automation/actions.ts">deleteByFunctionType</a>(functionType, { ...params }) -> void</code>
- <code title="get /automation/actions/2026-03/{appId}/{definitionId}/revisions/{revisionId}">client.automation.actions.<a href="./src/resources/automation/actions.ts">get</a>(revisionID, { ...params }) -> PublicActionRevision</code>
- <code title="get /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.<a href="./src/resources/automation/actions.ts">getByFunctionType</a>(functionType, { ...params }) -> PublicActionFunction</code>
- <code title="get /automation/actions/2026-03/{appId}/{definitionId}/requires-object">client.automation.actions.<a href="./src/resources/automation/actions.ts">getRequiresObject</a>(definitionID, { ...params }) -> PublicActionDefinitionRequiresObjectResponse</code>

## Sequences

Types:

- <code><a href="./src/resources/automation/sequences.ts">CollectionResponseWithTotalPublicSequenceLiteResponse</a></code>
- <code><a href="./src/resources/automation/sequences.ts">PublicEmailPatternResponse</a></code>
- <code><a href="./src/resources/automation/sequences.ts">PublicSequenceEnrollmentLiteResponse</a></code>
- <code><a href="./src/resources/automation/sequences.ts">PublicSequenceEnrollmentRequest</a></code>
- <code><a href="./src/resources/automation/sequences.ts">PublicSequenceEnrollmentResponse</a></code>
- <code><a href="./src/resources/automation/sequences.ts">PublicSequenceLiteResponse</a></code>
- <code><a href="./src/resources/automation/sequences.ts">PublicSequenceResponse</a></code>
- <code><a href="./src/resources/automation/sequences.ts">PublicSequenceSettingsResponse</a></code>
- <code><a href="./src/resources/automation/sequences.ts">PublicSequenceStepDependencyResponse</a></code>
- <code><a href="./src/resources/automation/sequences.ts">PublicSequenceStepResponse</a></code>
- <code><a href="./src/resources/automation/sequences.ts">PublicTaskPatternResponse</a></code>

Methods:

- <code title="get /automation/sequences/2026-03">client.automation.sequences.<a href="./src/resources/automation/sequences.ts">list</a>({ ...params }) -> PublicSequenceLiteResponsesPage</code>
- <code title="post /automation/sequences/2026-03/enrollments">client.automation.sequences.<a href="./src/resources/automation/sequences.ts">createEnrollment</a>({ ...params }) -> PublicSequenceEnrollmentLiteResponse</code>
- <code title="get /automation/sequences/2026-03/{sequenceId}">client.automation.sequences.<a href="./src/resources/automation/sequences.ts">get</a>(sequenceID, { ...params }) -> PublicSequenceResponse</code>
- <code title="get /automation/sequences/2026-03/enrollments/contact/{contactId}">client.automation.sequences.<a href="./src/resources/automation/sequences.ts">getEnrollmentByContactID</a>(contactID) -> PublicSequenceEnrollmentResponse</code>
