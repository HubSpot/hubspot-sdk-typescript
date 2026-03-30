# Automation

## Actions

Types:

- <code><a href="./src/resources/automation/actions/actions.ts">ActionExecutionIndexIdentifier</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">AgentRequestContext</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">ArrayFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">BatchInputCallbackCompletionBatchRequest</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">BooleanFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CallbackCompletionBatchRequest</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CallbackCompletionRequest</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">ChirpAIContextObject</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CollectionResponsePublicActionDefinitionForwardPaging</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CollectionResponsePublicActionFunctionIdentifierNoPaging</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CollectionResponsePublicActionRevisionForwardPaging</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">ComplianceIDs</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">ContactID</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">CopilotRequestContext</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">DoubleFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">FieldTypeDefinition</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">IntegerFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">LongFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">ObjectFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">OutputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionDefinition</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionDefinitionEgg</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionDefinitionPatch</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionDefinitionRequiresObjectRequest</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionDefinitionRequiresObjectResponse</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionFunction</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionFunctionIdentifier</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionLabels</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicActionRevision</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicConditionalSingleFieldDependency</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicExecutionTranslationRule</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicFieldTypeDefinition</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicInputFieldDefinition</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicObjectRequestOptions</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicOption</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">PublicSingleFieldDependency</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">StandaloneRequestContext</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">StringFieldSchema</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">TestRequestContext</a></code>
- <code><a href="./src/resources/automation/actions/actions.ts">WorkflowsRequestContext</a></code>

### Callbacks

Methods:

- <code title="post /automation/actions/callbacks/2026-03/{callbackId}/complete">client.automation.actions.callbacks.<a href="./src/resources/automation/actions/callbacks.ts">complete</a>(callbackID, { ...params }) -> void</code>
- <code title="post /automation/actions/callbacks/2026-03/complete">client.automation.actions.callbacks.<a href="./src/resources/automation/actions/callbacks.ts">completeBatch</a>({ ...params }) -> void</code>

### Definitions

Methods:

- <code title="post /automation/actions/2026-03/{appId}">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">create</a>(appID, { ...params }) -> PublicActionDefinition</code>
- <code title="patch /automation/actions/2026-03/{appId}/{definitionId}">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">update</a>(definitionID, { ...params }) -> PublicActionDefinition</code>
- <code title="get /automation/actions/2026-03/{appId}">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">list</a>(appID, { ...params }) -> PublicActionDefinitionsPage</code>
- <code title="delete /automation/actions/2026-03/{appId}/{definitionId}">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">delete</a>(definitionID, { ...params }) -> void</code>
- <code title="post /automation/actions/2026-03/{appId}/{definitionId}/requires-object">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">createRequiresObject</a>(definitionID, { ...params }) -> void</code>
- <code title="get /automation/actions/2026-03/{appId}/{definitionId}">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">get</a>(definitionID, { ...params }) -> PublicActionDefinition</code>
- <code title="get /automation/actions/2026-03/{appId}/{definitionId}/requires-object">client.automation.actions.definitions.<a href="./src/resources/automation/actions/definitions.ts">getRequiresObject</a>(definitionID, { ...params }) -> PublicActionDefinitionRequiresObjectResponse</code>

### Functions

Methods:

- <code title="get /automation/actions/2026-03/{appId}/{definitionId}/functions">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">list</a>(definitionID, { ...params }) -> CollectionResponsePublicActionFunctionIdentifierNoPaging</code>
- <code title="delete /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">delete</a>(functionID, { ...params }) -> void</code>
- <code title="put /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">createOrReplace</a>(functionID, { ...params }) -> PublicActionFunctionIdentifier</code>
- <code title="put /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">createOrReplaceByFunctionType</a>(functionType, { ...params }) -> PublicActionFunctionIdentifier</code>
- <code title="delete /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">deleteByFunctionType</a>(functionType, { ...params }) -> void</code>
- <code title="get /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">get</a>(functionID, { ...params }) -> PublicActionFunction</code>
- <code title="get /automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}">client.automation.actions.functions.<a href="./src/resources/automation/actions/functions.ts">getByFunctionType</a>(functionType, { ...params }) -> PublicActionFunction</code>

### Revisions

Methods:

- <code title="get /automation/actions/2026-03/{appId}/{definitionId}/revisions">client.automation.actions.revisions.<a href="./src/resources/automation/actions/revisions.ts">list</a>(definitionID, { ...params }) -> PublicActionRevisionsPage</code>
- <code title="get /automation/actions/2026-03/{appId}/{definitionId}/revisions/{revisionId}">client.automation.actions.revisions.<a href="./src/resources/automation/actions/revisions.ts">get</a>(revisionID, { ...params }) -> PublicActionRevision</code>

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
