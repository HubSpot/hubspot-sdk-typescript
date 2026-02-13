# Crm

Types:

- <code><a href="./src/resources/crm/crm.ts">AssociatedID</a></code>
- <code><a href="./src/resources/crm/crm.ts">AssociationSpecWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">BatchInputSimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/crm.ts">BatchInputSimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/crm.ts">BatchInputSimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/crm.ts">BatchInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/crm.ts">BatchReadInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/crm.ts">BatchResponsePublicDefaultAssociation</a></code>
- <code><a href="./src/resources/crm/crm.ts">BatchResponseSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/crm.ts">BatchResponseSimplePublicUpsertObject</a></code>
- <code><a href="./src/resources/crm/crm.ts">CollectionResponseAssociatedID</a></code>
- <code><a href="./src/resources/crm/crm.ts">CollectionResponseMultiAssociatedObjectWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">CollectionResponseSimplePublicObjectWithAssociations</a></code>
- <code><a href="./src/resources/crm/crm.ts">CollectionResponseWithTotalSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/crm.ts">CreatedResponseLabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/crm.ts">CreatedResponseSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/crm.ts">Filter</a></code>
- <code><a href="./src/resources/crm/crm.ts">FilterGroup</a></code>
- <code><a href="./src/resources/crm/crm.ts">LabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/crm.ts">MultiAssociatedObjectWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">PublicAssociationsForObject</a></code>
- <code><a href="./src/resources/crm/crm.ts">PublicDefaultAssociation</a></code>
- <code><a href="./src/resources/crm/crm.ts">PublicGdprDeleteInput</a></code>
- <code><a href="./src/resources/crm/crm.ts">PublicMergeInput</a></code>
- <code><a href="./src/resources/crm/crm.ts">PublicObjectSearchRequest</a></code>
- <code><a href="./src/resources/crm/crm.ts">SimplePublicObject</a></code>
- <code><a href="./src/resources/crm/crm.ts">SimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/crm.ts">SimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/crm.ts">SimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/crm.ts">SimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/crm.ts">SimplePublicObjectInput</a></code>
- <code><a href="./src/resources/crm/crm.ts">SimplePublicObjectInputForCreate</a></code>
- <code><a href="./src/resources/crm/crm.ts">SimplePublicObjectWithAssociations</a></code>
- <code><a href="./src/resources/crm/crm.ts">SimplePublicUpsertObject</a></code>
- <code><a href="./src/resources/crm/crm.ts">ValueWithTimestamp</a></code>

## AppUninstalls

Methods:

- <code title="delete /appinstalls/v3/external-install">client.crm.appUninstalls.<a href="./src/resources/crm/app-uninstalls.ts">uninstall</a>() -> void</code>

## Associations

Types:

- <code><a href="./src/resources/crm/associations/associations.ts">BatchInputPublicAssociation</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchResponsePublicAssociation</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchResponsePublicAssociationMulti</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchResponseVoid</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">PublicAssociation</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">PublicAssociationMulti</a></code>

### Batch

Methods:

- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/create">client.crm.associations.batch.<a href="./src/resources/crm/associations/batch.ts">create</a>(toObjectType, { ...params }) -> BatchResponsePublicAssociation</code>
- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/archive">client.crm.associations.batch.<a href="./src/resources/crm/associations/batch.ts">delete</a>(toObjectType, { ...params }) -> void</code>
- <code title="post /crm/v3/associations/{fromObjectType}/{toObjectType}/batch/read">client.crm.associations.batch.<a href="./src/resources/crm/associations/batch.ts">get</a>(toObjectType, { ...params }) -> BatchResponsePublicAssociationMulti</code>

### Schema

Types:

- <code><a href="./src/resources/crm/associations/schema/schema.ts">CollectionResponsePublicAssociationDefinitionNoPaging</a></code>
- <code><a href="./src/resources/crm/associations/schema/schema.ts">PublicAssociationDefinition</a></code>

Methods:

- <code title="get /crm/v3/associations/{fromObjectType}/{toObjectType}/types">client.crm.associations.schema.<a href="./src/resources/crm/associations/schema/schema.ts">list</a>(toObjectType, { ...params }) -> CollectionResponsePublicAssociationDefinitionNoPaging</code>

#### V4

Types:

- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">BatchInputPublicAssociationDefinitionConfigurationCreateRequest</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">BatchInputPublicAssociationDefinitionConfigurationUpdateRequest</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">BatchInputPublicAssociationSpec</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">BatchResponsePublicAssociationDefinitionConfigurationUpdateResult</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">BatchResponsePublicAssociationDefinitionUserConfiguration</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">CollectionResponseAssociationSpecWithLabel</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">CollectionResponsePublicAssociationDefinitionUserConfiguration</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">PublicAssociationDefinitionConfigurationCreateRequest</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">PublicAssociationDefinitionConfigurationUpdateRequest</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">PublicAssociationDefinitionConfigurationUpdateResult</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">PublicAssociationDefinitionCreateRequest</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">PublicAssociationDefinitionUpdateRequest</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">PublicAssociationDefinitionUserConfiguration</a></code>
- <code><a href="./src/resources/crm/associations/schema/v4/v4.ts">PublicAssociationSpec</a></code>

##### Configurations

Methods:

- <code title="get /crm/associations/v4/definitions/configurations/all">client.crm.associations.schema.v4.configurations.<a href="./src/resources/crm/associations/schema/v4/configurations.ts">list</a>() -> CollectionResponsePublicAssociationDefinitionUserConfiguration</code>
- <code title="post /crm/associations/v4/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create">client.crm.associations.schema.v4.configurations.<a href="./src/resources/crm/associations/schema/v4/configurations.ts">batchCreate</a>(toObjectType, { ...params }) -> BatchResponsePublicAssociationDefinitionUserConfiguration</code>
- <code title="post /crm/associations/v4/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge">client.crm.associations.schema.v4.configurations.<a href="./src/resources/crm/associations/schema/v4/configurations.ts">batchDelete</a>(toObjectType, { ...params }) -> BatchResponseVoid</code>
- <code title="post /crm/associations/v4/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update">client.crm.associations.schema.v4.configurations.<a href="./src/resources/crm/associations/schema/v4/configurations.ts">batchUpdate</a>(toObjectType, { ...params }) -> BatchResponsePublicAssociationDefinitionConfigurationUpdateResult</code>
- <code title="get /crm/associations/v4/definitions/configurations/{fromObjectType}/{toObjectType}">client.crm.associations.schema.v4.configurations.<a href="./src/resources/crm/associations/schema/v4/configurations.ts">getByObjectTypes</a>(toObjectType, { ...params }) -> CollectionResponsePublicAssociationDefinitionUserConfiguration</code>

##### Definitions

Methods:

- <code title="post /crm/associations/v4/{fromObjectType}/{toObjectType}/labels">client.crm.associations.schema.v4.definitions.<a href="./src/resources/crm/associations/schema/v4/definitions.ts">createLabel</a>(toObjectType, { ...params }) -> CollectionResponseAssociationSpecWithLabel</code>
- <code title="delete /crm/associations/v4/{fromObjectType}/{toObjectType}/labels/{associationTypeId}">client.crm.associations.schema.v4.definitions.<a href="./src/resources/crm/associations/schema/v4/definitions.ts">deleteLabel</a>(associationTypeID, { ...params }) -> void</code>
- <code title="get /crm/associations/v4/{fromObjectType}/{toObjectType}/labels">client.crm.associations.schema.v4.definitions.<a href="./src/resources/crm/associations/schema/v4/definitions.ts">listLabels</a>(toObjectType, { ...params }) -> CollectionResponseAssociationSpecWithLabel</code>
- <code title="put /crm/associations/v4/{fromObjectType}/{toObjectType}/labels">client.crm.associations.schema.v4.definitions.<a href="./src/resources/crm/associations/schema/v4/definitions.ts">updateLabel</a>(toObjectType, { ...params }) -> void</code>

### V4

Types:

- <code><a href="./src/resources/crm/associations/v4/v4.ts">BatchInputPublicAssociationMultiArchive</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">BatchInputPublicAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">BatchInputPublicDefaultAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">BatchInputPublicFetchAssociationsBatchRequest</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">BatchResponseLabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">BatchResponsePublicAssociationMultiWithLabel</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">DateTime</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">PublicAssociationMultiArchive</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">PublicAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">PublicAssociationMultiWithLabel</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">PublicDefaultAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">PublicFetchAssociationsBatchRequest</a></code>
- <code><a href="./src/resources/crm/associations/v4/v4.ts">ReportCreationResponse</a></code>

#### Batch

Methods:

- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/create">client.crm.associations.v4.batch.<a href="./src/resources/crm/associations/v4/batch.ts">create</a>(toObjectType, { ...params }) -> BatchResponseLabelsBetweenObjectPair</code>
- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/archive">client.crm.associations.v4.batch.<a href="./src/resources/crm/associations/v4/batch.ts">delete</a>(toObjectType, { ...params }) -> BatchResponseVoid</code>
- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/associate/default">client.crm.associations.v4.batch.<a href="./src/resources/crm/associations/v4/batch.ts">createDefault</a>(toObjectType, { ...params }) -> BatchResponsePublicDefaultAssociation</code>
- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/labels/archive">client.crm.associations.v4.batch.<a href="./src/resources/crm/associations/v4/batch.ts">deleteLabels</a>(toObjectType, { ...params }) -> BatchResponseVoid</code>
- <code title="post /crm/v4/associations/{fromObjectType}/{toObjectType}/batch/read">client.crm.associations.v4.batch.<a href="./src/resources/crm/associations/v4/batch.ts">get</a>(toObjectType, { ...params }) -> BatchResponsePublicAssociationMultiWithLabel</code>

#### Report

Methods:

- <code title="post /crm/v4/associations/usage/high-usage-report/{userId}">client.crm.associations.v4.report.<a href="./src/resources/crm/associations/v4/report.ts">requestHighUsageReport</a>(userID) -> ReportCreationResponse</code>

## Exports

Types:

- <code><a href="./src/resources/crm/exports.ts">ActionResponseWithSingleResultUri</a></code>
- <code><a href="./src/resources/crm/exports.ts">PublicCrmSearchRequest</a></code>
- <code><a href="./src/resources/crm/exports.ts">PublicExportListRequest</a></code>
- <code><a href="./src/resources/crm/exports.ts">PublicExportRequest</a></code>
- <code><a href="./src/resources/crm/exports.ts">PublicExportResponse</a></code>
- <code><a href="./src/resources/crm/exports.ts">PublicExportViewRequest</a></code>

Methods:

- <code title="post /crm/v3/exports/export/async">client.crm.exports.<a href="./src/resources/crm/exports.ts">createAsync</a>() -> TaskLocator</code>
- <code title="get /crm/v3/exports/export/{exportId}">client.crm.exports.<a href="./src/resources/crm/exports.ts">get</a>(exportID) -> PublicExportResponse</code>
- <code title="get /crm/v3/exports/export/async/tasks/{taskId}/status">client.crm.exports.<a href="./src/resources/crm/exports.ts">getStatus</a>(taskID) -> ActionResponseWithSingleResultUri</code>

## Extensions

### Calling

Types:

- <code><a href="./src/resources/crm/extensions/calling/calling.ts">ChannelConnectionSettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">ChannelConnectionSettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">ChannelConnectionSettingsResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">MarkRecordingAsReadyRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">RecordingSettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">RecordingSettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">RecordingSettingsResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">SettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">SettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">SettingsResponse</a></code>

#### ChannelConnectionSettings

Methods:

- <code title="post /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.channelConnectionSettings.<a href="./src/resources/crm/extensions/calling/channel-connection-settings.ts">create</a>(appID, { ...params }) -> ChannelConnectionSettingsResponse</code>
- <code title="patch /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.channelConnectionSettings.<a href="./src/resources/crm/extensions/calling/channel-connection-settings.ts">update</a>(appID, { ...params }) -> ChannelConnectionSettingsResponse</code>
- <code title="delete /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.channelConnectionSettings.<a href="./src/resources/crm/extensions/calling/channel-connection-settings.ts">delete</a>(appID) -> void</code>
- <code title="get /crm/v3/extensions/calling/{appId}/settings/channel-connection">client.crm.extensions.calling.channelConnectionSettings.<a href="./src/resources/crm/extensions/calling/channel-connection-settings.ts">get</a>(appID) -> ChannelConnectionSettingsResponse</code>

#### RecordingSettings

Methods:

- <code title="post /crm/v3/extensions/calling/{appId}/settings/recording">client.crm.extensions.calling.recordingSettings.<a href="./src/resources/crm/extensions/calling/recording-settings.ts">create</a>(appID, { ...params }) -> RecordingSettingsResponse</code>
- <code title="patch /crm/v3/extensions/calling/{appId}/settings/recording">client.crm.extensions.calling.recordingSettings.<a href="./src/resources/crm/extensions/calling/recording-settings.ts">update</a>(appID, { ...params }) -> RecordingSettingsResponse</code>
- <code title="get /crm/v3/extensions/calling/{appId}/settings/recording">client.crm.extensions.calling.recordingSettings.<a href="./src/resources/crm/extensions/calling/recording-settings.ts">get</a>(appID) -> RecordingSettingsResponse</code>
- <code title="post /crm/v3/extensions/calling/recordings/ready">client.crm.extensions.calling.recordingSettings.<a href="./src/resources/crm/extensions/calling/recording-settings.ts">markReady</a>({ ...params }) -> void</code>

#### Settings

Methods:

- <code title="post /crm/v3/extensions/calling/{appId}/settings">client.crm.extensions.calling.settings.<a href="./src/resources/crm/extensions/calling/settings.ts">create</a>(appID, { ...params }) -> SettingsResponse</code>
- <code title="patch /crm/v3/extensions/calling/{appId}/settings">client.crm.extensions.calling.settings.<a href="./src/resources/crm/extensions/calling/settings.ts">update</a>(appID, { ...params }) -> SettingsResponse</code>
- <code title="delete /crm/v3/extensions/calling/{appId}/settings">client.crm.extensions.calling.settings.<a href="./src/resources/crm/extensions/calling/settings.ts">delete</a>(appID) -> void</code>
- <code title="get /crm/v3/extensions/calling/{appId}/settings">client.crm.extensions.calling.settings.<a href="./src/resources/crm/extensions/calling/settings.ts">get</a>(appID) -> SettingsResponse</code>

#### Transcripts

Types:

- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">Speaker</a></code>
- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">TranscriptCreateRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">TranscriptCreateResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">TranscriptCreateUtterance</a></code>
- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">TranscriptResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">TranscriptUtterance</a></code>

Methods:

- <code title="post /crm/v3/extensions/calling/transcripts">client.crm.extensions.calling.transcripts.<a href="./src/resources/crm/extensions/calling/transcripts.ts">create</a>({ ...params }) -> TranscriptCreateResponse</code>
- <code title="delete /crm/v3/extensions/calling/transcripts/{transcriptId}">client.crm.extensions.calling.transcripts.<a href="./src/resources/crm/extensions/calling/transcripts.ts">delete</a>(transcriptID) -> void</code>
- <code title="get /crm/v3/extensions/calling/transcripts/{transcriptId}">client.crm.extensions.calling.transcripts.<a href="./src/resources/crm/extensions/calling/transcripts.ts">get</a>(transcriptID) -> TranscriptResponse</code>

### Cards

Types:

- <code><a href="./src/resources/crm/extensions/cards.ts">ActionConfirmationBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">ActionHookActionBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">CardActions</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">CardAuditResponse</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">CardCreateRequest</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">CardDisplayBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">CardDisplayProperty</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">CardFetchBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">CardFetchBodyPatch</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">CardObjectTypeBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">CardPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">DisplayOption</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">IFrameActionBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">IntegratorCardPayloadResponse</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">IntegratorObjectResult</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">ObjectToken</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">PublicCardFetchBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">PublicCardListResponse</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">PublicCardResponse</a></code>
- <code><a href="./src/resources/crm/extensions/cards.ts">TopLevelActions</a></code>

Methods:

- <code title="post /crm/v3/extensions/cards-dev/{appId}">client.crm.extensions.cards.<a href="./src/resources/crm/extensions/cards.ts">create</a>(appID, { ...params }) -> PublicCardResponse</code>
- <code title="patch /crm/v3/extensions/cards-dev/{appId}/{cardId}">client.crm.extensions.cards.<a href="./src/resources/crm/extensions/cards.ts">update</a>(cardID, { ...params }) -> PublicCardResponse</code>
- <code title="get /crm/v3/extensions/cards-dev/{appId}">client.crm.extensions.cards.<a href="./src/resources/crm/extensions/cards.ts">list</a>(appID) -> PublicCardListResponse</code>
- <code title="delete /crm/v3/extensions/cards-dev/{appId}/{cardId}">client.crm.extensions.cards.<a href="./src/resources/crm/extensions/cards.ts">delete</a>(cardID, { ...params }) -> void</code>
- <code title="get /crm/v3/extensions/cards-dev/{appId}/{cardId}">client.crm.extensions.cards.<a href="./src/resources/crm/extensions/cards.ts">get</a>(cardID, { ...params }) -> PublicCardResponse</code>
- <code title="get /crm/v3/extensions/cards-dev/sample-response">client.crm.extensions.cards.<a href="./src/resources/crm/extensions/cards.ts">getSampleResponse</a>() -> IntegratorCardPayloadResponse</code>

### VideoConferencing

Types:

- <code><a href="./src/resources/crm/extensions/video-conferencing/video-conferencing.ts">ExternalSettings</a></code>

#### Settings

Methods:

- <code title="put /crm/v3/extensions/videoconferencing/settings/{appId}">client.crm.extensions.videoConferencing.settings.<a href="./src/resources/crm/extensions/video-conferencing/settings.ts">update</a>(appID, { ...params }) -> ExternalSettings</code>
- <code title="delete /crm/v3/extensions/videoconferencing/settings/{appId}">client.crm.extensions.videoConferencing.settings.<a href="./src/resources/crm/extensions/video-conferencing/settings.ts">delete</a>(appID) -> void</code>
- <code title="get /crm/v3/extensions/videoconferencing/settings/{appId}">client.crm.extensions.videoConferencing.settings.<a href="./src/resources/crm/extensions/video-conferencing/settings.ts">get</a>(appID) -> ExternalSettings</code>

## FeatureFlags

Types:

- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">BatchPortalEntry</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">FlagPutRequest</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">FlagResponse</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">PortalFlagStateBatchDeleteRequest</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">PortalFlagStateBatchPutRequest</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">PortalFlagStateBatchResponse</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">PortalFlagStatePutRequest</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">PortalFlagStateResponse</a></code>

### Apps

Methods:

- <code title="put /feature-flags/v3/{appId}/flags/{flagName}">client.crm.featureFlags.apps.<a href="./src/resources/crm/feature-flags/apps.ts">update</a>(flagName, { ...params }) -> FlagResponse</code>
- <code title="delete /feature-flags/v3/{appId}/flags/{flagName}">client.crm.featureFlags.apps.<a href="./src/resources/crm/feature-flags/apps.ts">delete</a>(flagName, { ...params }) -> FlagResponse</code>
- <code title="get /feature-flags/v3/{appId}/flags/{flagName}">client.crm.featureFlags.apps.<a href="./src/resources/crm/feature-flags/apps.ts">get</a>(flagName, { ...params }) -> FlagResponse</code>
- <code title="get /feature-flags/v3/{appId}/flags/{flagName}/portals">client.crm.featureFlags.apps.<a href="./src/resources/crm/feature-flags/apps.ts">listPortals</a>(flagName, { ...params }) -> PortalFlagStateBatchResponse</code>

### Portals

Methods:

- <code title="put /feature-flags/v3/{appId}/flags/{flagName}/portals/{portalId}">client.crm.featureFlags.portals.<a href="./src/resources/crm/feature-flags/portals.ts">update</a>(portalID, { ...params }) -> PortalFlagStateResponse</code>
- <code title="delete /feature-flags/v3/{appId}/flags/{flagName}/portals/{portalId}">client.crm.featureFlags.portals.<a href="./src/resources/crm/feature-flags/portals.ts">delete</a>(portalID, { ...params }) -> PortalFlagStateResponse</code>
- <code title="post /feature-flags/v3/{appId}/flags/{flagName}/portals/batch/delete">client.crm.featureFlags.portals.<a href="./src/resources/crm/feature-flags/portals.ts">batchDelete</a>(flagName, { ...params }) -> PortalFlagStateBatchResponse</code>
- <code title="post /feature-flags/v3/{appId}/flags/{flagName}/portals/batch/upsert">client.crm.featureFlags.portals.<a href="./src/resources/crm/feature-flags/portals.ts">batchUpsert</a>(flagName, { ...params }) -> PortalFlagStateBatchResponse</code>
- <code title="get /feature-flags/v3/{appId}/flags/{flagName}/portals/{portalId}">client.crm.featureFlags.portals.<a href="./src/resources/crm/feature-flags/portals.ts">get</a>(portalID, { ...params }) -> PortalFlagStateResponse</code>

## Imports

Types:

- <code><a href="./src/resources/crm/imports.ts">CollectionResponsePublicImportErrorForwardPaging</a></code>
- <code><a href="./src/resources/crm/imports.ts">CollectionResponsePublicImportResponse</a></code>
- <code><a href="./src/resources/crm/imports.ts">ImportRowCore</a></code>
- <code><a href="./src/resources/crm/imports.ts">ImportTemplate</a></code>
- <code><a href="./src/resources/crm/imports.ts">PropertyValue</a></code>
- <code><a href="./src/resources/crm/imports.ts">PublicImportError</a></code>
- <code><a href="./src/resources/crm/imports.ts">PublicImportMetadata</a></code>
- <code><a href="./src/resources/crm/imports.ts">PublicImportResponse</a></code>
- <code><a href="./src/resources/crm/imports.ts">PublicObjectListRecord</a></code>

Methods:

- <code title="post /crm/v3/imports/">client.crm.imports.<a href="./src/resources/crm/imports.ts">create</a>({ ...params }) -> PublicImportResponse</code>
- <code title="get /crm/v3/imports/">client.crm.imports.<a href="./src/resources/crm/imports.ts">list</a>({ ...params }) -> PublicImportResponsesPage</code>
- <code title="post /crm/v3/imports/{importId}/cancel">client.crm.imports.<a href="./src/resources/crm/imports.ts">cancel</a>(importID) -> ActionResponse</code>
- <code title="get /crm/v3/imports/{importId}">client.crm.imports.<a href="./src/resources/crm/imports.ts">get</a>(importID) -> PublicImportResponse</code>
- <code title="get /crm/v3/imports/{importId}/errors">client.crm.imports.<a href="./src/resources/crm/imports.ts">listErrors</a>(importID, { ...params }) -> PublicImportErrorsPage</code>

## Limits

Types:

- <code><a href="./src/resources/crm/limits.ts">AssociationLabelLimitResponse</a></code>
- <code><a href="./src/resources/crm/limits.ts">AssociationRecordLimitResponse</a></code>
- <code><a href="./src/resources/crm/limits.ts">AtLimitRecordSample</a></code>
- <code><a href="./src/resources/crm/limits.ts">CalculatedPropertyLimitResponse</a></code>
- <code><a href="./src/resources/crm/limits.ts">CollectionResponseAssociationLabelLimitResponseNoPaging</a></code>
- <code><a href="./src/resources/crm/limits.ts">CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging</a></code>
- <code><a href="./src/resources/crm/limits.ts">CustomObjectLimitResponse</a></code>
- <code><a href="./src/resources/crm/limits.ts">CustomObjectRecordLimitResponse</a></code>
- <code><a href="./src/resources/crm/limits.ts">CustomPropertyLimitResponse</a></code>
- <code><a href="./src/resources/crm/limits.ts">LimitAndUsageForObjectType</a></code>
- <code><a href="./src/resources/crm/limits.ts">NearLimitRecordSample</a></code>
- <code><a href="./src/resources/crm/limits.ts">ObjectTypeDefinition</a></code>
- <code><a href="./src/resources/crm/limits.ts">ObjectTypeNearOrAtAssociationLimit</a></code>
- <code><a href="./src/resources/crm/limits.ts">PipelineLimitResponse</a></code>
- <code><a href="./src/resources/crm/limits.ts">RecordLimitResponse</a></code>
- <code><a href="./src/resources/crm/limits.ts">UsageForObjectType</a></code>

Methods:

- <code title="get /crm/v3/limits/associations/labels">client.crm.limits.<a href="./src/resources/crm/limits.ts">getAssociationLabelLimits</a>({ ...params }) -> CollectionResponseAssociationLabelLimitResponseNoPaging</code>
- <code title="get /crm/v3/limits/associations/records/{fromObjectTypeId}/{toObjectTypeId}">client.crm.limits.<a href="./src/resources/crm/limits.ts">getAssociationRecordsLimitsByObjectType</a>(toObjectTypeID, { ...params }) -> AssociationRecordLimitResponse</code>
- <code title="get /crm/v3/limits/associations/records/from">client.crm.limits.<a href="./src/resources/crm/limits.ts">getAssociationRecordsLimitsFromObjects</a>() -> CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging</code>
- <code title="get /crm/v3/limits/associations/records/{fromObjectTypeId}/to">client.crm.limits.<a href="./src/resources/crm/limits.ts">getAssociationRecordsLimitsToObjects</a>(fromObjectTypeID) -> CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging</code>
- <code title="get /crm/v3/limits/calculated-properties">client.crm.limits.<a href="./src/resources/crm/limits.ts">getCalculatedPropertyLimits</a>() -> CalculatedPropertyLimitResponse</code>
- <code title="get /crm/v3/limits/custom-object-types">client.crm.limits.<a href="./src/resources/crm/limits.ts">getCustomObjectTypeLimits</a>() -> CustomObjectLimitResponse</code>
- <code title="get /crm/v3/limits/custom-properties">client.crm.limits.<a href="./src/resources/crm/limits.ts">getCustomPropertyLimits</a>() -> CustomPropertyLimitResponse</code>
- <code title="get /crm/v3/limits/pipelines">client.crm.limits.<a href="./src/resources/crm/limits.ts">getPipelineLimits</a>() -> PipelineLimitResponse</code>
- <code title="get /crm/v3/limits/records">client.crm.limits.<a href="./src/resources/crm/limits.ts">getRecordLimits</a>() -> RecordLimitResponse</code>

## Lists

Types:

- <code><a href="./src/resources/crm/lists/lists.ts">APICollectionResponseJoinTimeAndRecordID</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">APICollectionResponseRecordListMembershipNoPaging</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">JoinTimeAndRecordID</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListCreateRequest</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListFetchResponse</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListFilterUpdateRequest</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListFolderCreateRequest</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListFolderCreateResponse</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListFolderFetchResponse</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListMoveRequest</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListSearchRequest</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListSearchResponse</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">ListsByIDResponse</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">MembershipChangeRequest</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">MembershipsUpdateResponse</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicBatchMigrationMapping</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicListConversionDate</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicListConversionInactivity</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicListConversionResponse</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicListConversionTime</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicListFolder</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicListPermissions</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicMembershipSettings</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicMigrationMapping</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicObjectList</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">PublicObjectListSearchResult</a></code>
- <code><a href="./src/resources/crm/lists/lists.ts">RecordListMembership</a></code>

Methods:

- <code title="post /crm/v3/lists/">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">create</a>({ ...params }) -> ListCreateResponse</code>
- <code title="get /crm/v3/lists/">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">list</a>({ ...params }) -> ListsByIDResponse</code>
- <code title="delete /crm/v3/lists/{listId}">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">delete</a>(listID) -> void</code>
- <code title="delete /crm/v3/lists/{listId}/schedule-conversion">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">deleteScheduleConversion</a>(listID) -> void</code>
- <code title="get /crm/v3/lists/{listId}">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">get</a>(listID, { ...params }) -> ListFetchResponse</code>
- <code title="get /crm/v3/lists/object-type-id/{objectTypeId}/name/{listName}">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">getByObjectTypeIDAndName</a>(listName, { ...params }) -> ListFetchResponse</code>
- <code title="get /crm/v3/lists/{listId}/schedule-conversion">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">getScheduleConversion</a>(listID) -> PublicListConversionResponse</code>
- <code title="put /crm/v3/lists/{listId}/restore">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">restore</a>(listID) -> void</code>
- <code title="put /crm/v3/lists/{listId}/schedule-conversion">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">scheduleConversion</a>(listID, { ...params }) -> PublicListConversionResponse</code>
- <code title="post /crm/v3/lists/search">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">search</a>({ ...params }) -> ListSearchResponse</code>
- <code title="put /crm/v3/lists/{listId}/update-list-filters">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">updateFilters</a>(listID, { ...params }) -> ListUpdateResponse</code>
- <code title="put /crm/v3/lists/{listId}/update-list-name">client.crm.lists.<a href="./src/resources/crm/lists/lists.ts">updateName</a>(listID, { ...params }) -> ListUpdateResponse</code>

### Folders

Methods:

- <code title="post /crm/v3/lists/folders">client.crm.lists.folders.<a href="./src/resources/crm/lists/folders.ts">create</a>({ ...params }) -> ListFolderCreateResponse</code>
- <code title="delete /crm/v3/lists/folders/{folderId}">client.crm.lists.folders.<a href="./src/resources/crm/lists/folders.ts">delete</a>(folderID) -> void</code>
- <code title="get /crm/v3/lists/folders">client.crm.lists.folders.<a href="./src/resources/crm/lists/folders.ts">get</a>({ ...params }) -> ListFolderFetchResponse</code>
- <code title="put /crm/v3/lists/folders/{folderId}/move/{newParentFolderId}">client.crm.lists.folders.<a href="./src/resources/crm/lists/folders.ts">move</a>(newParentFolderID, { ...params }) -> ListFolderFetchResponse</code>
- <code title="put /crm/v3/lists/folders/move-list">client.crm.lists.folders.<a href="./src/resources/crm/lists/folders.ts">moveList</a>({ ...params }) -> void</code>
- <code title="put /crm/v3/lists/folders/{folderId}/rename">client.crm.lists.folders.<a href="./src/resources/crm/lists/folders.ts">rename</a>(folderID, { ...params }) -> ListFolderFetchResponse</code>

### Mapping

Methods:

- <code title="post /crm/v3/lists/idmapping">client.crm.lists.mapping.<a href="./src/resources/crm/lists/mapping.ts">batchCreateIDMapping</a>([ ...body ]) -> PublicBatchMigrationMapping</code>
- <code title="get /crm/v3/lists/idmapping">client.crm.lists.mapping.<a href="./src/resources/crm/lists/mapping.ts">getIDMapping</a>({ ...params }) -> PublicMigrationMapping</code>

### Memberships

Methods:

- <code title="get /crm/v3/lists/{listId}/memberships">client.crm.lists.memberships.<a href="./src/resources/crm/lists/memberships.ts">list</a>(listID, { ...params }) -> JoinTimeAndRecordIDsPage</code>
- <code title="put /crm/v3/lists/{listId}/memberships/add">client.crm.lists.memberships.<a href="./src/resources/crm/lists/memberships.ts">add</a>(listID, [ ...body ]) -> MembershipsUpdateResponse</code>
- <code title="put /crm/v3/lists/{listId}/memberships/add-from/{sourceListId}">client.crm.lists.memberships.<a href="./src/resources/crm/lists/memberships.ts">addAllFromList</a>(sourceListID, { ...params }) -> void</code>
- <code title="put /crm/v3/lists/{listId}/memberships/add-and-remove">client.crm.lists.memberships.<a href="./src/resources/crm/lists/memberships.ts">addAndRemove</a>(listID, { ...params }) -> MembershipsUpdateResponse</code>
- <code title="get /crm/v3/lists/records/{objectTypeId}/{recordId}/memberships">client.crm.lists.memberships.<a href="./src/resources/crm/lists/memberships.ts">getLists</a>(recordID, { ...params }) -> APICollectionResponseRecordListMembershipNoPaging</code>
- <code title="get /crm/v3/lists/{listId}/memberships/join-order">client.crm.lists.memberships.<a href="./src/resources/crm/lists/memberships.ts">getPageOrderedByAddedToListDate</a>(listID, { ...params }) -> JoinTimeAndRecordIDsPage</code>
- <code title="put /crm/v3/lists/{listId}/memberships/remove">client.crm.lists.memberships.<a href="./src/resources/crm/lists/memberships.ts">remove</a>(listID, [ ...body ]) -> MembershipsUpdateResponse</code>
- <code title="delete /crm/v3/lists/{listId}/memberships">client.crm.lists.memberships.<a href="./src/resources/crm/lists/memberships.ts">removeAll</a>(listID) -> void</code>

## ObjectLibrary

Types:

- <code><a href="./src/resources/crm/object-library/object-library.ts">ObjectTypeEnablementPublicResponse</a></code>
- <code><a href="./src/resources/crm/object-library/object-library.ts">PortalObjectTypeEnablementPublicResponse</a></code>

### Enablement

Methods:

- <code title="get /crm/v3/object-library/enablement">client.crm.objectLibrary.enablement.<a href="./src/resources/crm/object-library/enablement.ts">list</a>() -> PortalObjectTypeEnablementPublicResponse</code>
- <code title="get /crm/v3/object-library/enablement/{objectTypeId}">client.crm.objectLibrary.enablement.<a href="./src/resources/crm/object-library/enablement.ts">get</a>(objectTypeID) -> ObjectTypeEnablementPublicResponse</code>

## Objects

### Calls

Methods:

- <code title="post /crm/v3/objects/calls">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/calls/{callId}">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">update</a>(callID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/calls">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/calls/{callId}">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">delete</a>(callID) -> void</code>
- <code title="get /crm/v3/objects/calls/{callId}">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">get</a>(callID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/calls/search">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/calls/batch/create">client.crm.objects.calls.batch.<a href="./src/resources/crm/objects/calls/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/calls/batch/update">client.crm.objects.calls.batch.<a href="./src/resources/crm/objects/calls/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/calls/batch/archive">client.crm.objects.calls.batch.<a href="./src/resources/crm/objects/calls/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/calls/batch/read">client.crm.objects.calls.batch.<a href="./src/resources/crm/objects/calls/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/calls/batch/upsert">client.crm.objects.calls.batch.<a href="./src/resources/crm/objects/calls/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Carts

Methods:

- <code title="post /crm/v3/objects/carts">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/carts/{cartId}">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">update</a>(cartID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/carts">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/carts/{cartId}">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">delete</a>(cartID) -> void</code>
- <code title="get /crm/v3/objects/carts/{cartId}">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">get</a>(cartID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/carts/search">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/carts/batch/create">client.crm.objects.carts.batch.<a href="./src/resources/crm/objects/carts/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/carts/batch/update">client.crm.objects.carts.batch.<a href="./src/resources/crm/objects/carts/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/carts/batch/archive">client.crm.objects.carts.batch.<a href="./src/resources/crm/objects/carts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/carts/batch/read">client.crm.objects.carts.batch.<a href="./src/resources/crm/objects/carts/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/carts/batch/upsert">client.crm.objects.carts.batch.<a href="./src/resources/crm/objects/carts/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### CommercePayments

Methods:

- <code title="post /crm/v3/objects/commerce_payments">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/commerce_payments/{commercePaymentId}">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">update</a>(commercePaymentID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/commerce_payments">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/commerce_payments/{commercePaymentId}">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">delete</a>(commercePaymentID) -> void</code>
- <code title="get /crm/v3/objects/commerce_payments/{commercePaymentId}">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">get</a>(commercePaymentID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/commerce_payments/search">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/commerce_payments/batch/create">client.crm.objects.commercePayments.batch.<a href="./src/resources/crm/objects/commerce-payments/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/commerce_payments/batch/update">client.crm.objects.commercePayments.batch.<a href="./src/resources/crm/objects/commerce-payments/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/commerce_payments/batch/archive">client.crm.objects.commercePayments.batch.<a href="./src/resources/crm/objects/commerce-payments/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/commerce_payments/batch/read">client.crm.objects.commercePayments.batch.<a href="./src/resources/crm/objects/commerce-payments/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/commerce_payments/batch/upsert">client.crm.objects.commercePayments.batch.<a href="./src/resources/crm/objects/commerce-payments/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Communications

Methods:

- <code title="post /crm/v3/objects/communications">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/communications/{communicationId}">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">update</a>(communicationID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/communications">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/communications/{communicationId}">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">delete</a>(communicationID) -> void</code>
- <code title="get /crm/v3/objects/communications/{communicationId}">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">get</a>(communicationID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/communications/search">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/communications/batch/create">client.crm.objects.communications.batch.<a href="./src/resources/crm/objects/communications/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/communications/batch/update">client.crm.objects.communications.batch.<a href="./src/resources/crm/objects/communications/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/communications/batch/archive">client.crm.objects.communications.batch.<a href="./src/resources/crm/objects/communications/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/communications/batch/read">client.crm.objects.communications.batch.<a href="./src/resources/crm/objects/communications/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/communications/batch/upsert">client.crm.objects.communications.batch.<a href="./src/resources/crm/objects/communications/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Companies

Methods:

- <code title="post /crm/v3/objects/companies">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/companies/{companyId}">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">update</a>(companyID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/companies">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/companies/{companyId}">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">delete</a>(companyID) -> void</code>
- <code title="get /crm/v3/objects/companies/{companyId}">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">get</a>(companyID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/companies/merge">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/search">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/companies/batch/create">client.crm.objects.companies.batch.<a href="./src/resources/crm/objects/companies/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/batch/update">client.crm.objects.companies.batch.<a href="./src/resources/crm/objects/companies/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/batch/archive">client.crm.objects.companies.batch.<a href="./src/resources/crm/objects/companies/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/companies/batch/read">client.crm.objects.companies.batch.<a href="./src/resources/crm/objects/companies/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/companies/batch/upsert">client.crm.objects.companies.batch.<a href="./src/resources/crm/objects/companies/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Contacts

Methods:

- <code title="post /crm/v3/objects/contacts">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/contacts/{contactId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">update</a>(contactID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/contacts">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/contacts/{contactId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">delete</a>(contactID) -> void</code>
- <code title="post /crm/v3/objects/contacts/gdpr-delete">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">gdprDelete</a>({ ...params }) -> void</code>
- <code title="get /crm/v3/objects/contacts/{contactId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">get</a>(contactID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/contacts/merge">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/search">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/contacts/batch/create">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/update">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/archive">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/contacts/batch/read">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contacts/batch/upsert">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Contracts

Methods:

- <code title="post /crm/v3/objects/contracts">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/contracts/{contractId}">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">update</a>(contractID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/contracts">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/contracts/{contractId}">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">delete</a>(contractID) -> void</code>
- <code title="get /crm/v3/objects/contracts/{contractId}">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">get</a>(contractID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/contracts/search">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/contracts/batch/create">client.crm.objects.contracts.batch.<a href="./src/resources/crm/objects/contracts/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contracts/batch/update">client.crm.objects.contracts.batch.<a href="./src/resources/crm/objects/contracts/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contracts/batch/archive">client.crm.objects.contracts.batch.<a href="./src/resources/crm/objects/contracts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/contracts/batch/read">client.crm.objects.contracts.batch.<a href="./src/resources/crm/objects/contracts/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/contracts/batch/upsert">client.crm.objects.contracts.batch.<a href="./src/resources/crm/objects/contracts/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Courses

Methods:

- <code title="post /crm/v3/objects/0-410">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/0-410/{courseId}">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">update</a>(courseID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/0-410">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/0-410/{courseId}">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">delete</a>(courseID) -> void</code>
- <code title="get /crm/v3/objects/0-410/{courseId}">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">get</a>(courseID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/0-410/search">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/0-410/batch/create">client.crm.objects.courses.batch.<a href="./src/resources/crm/objects/courses/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-410/batch/update">client.crm.objects.courses.batch.<a href="./src/resources/crm/objects/courses/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-410/batch/archive">client.crm.objects.courses.batch.<a href="./src/resources/crm/objects/courses/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/0-410/batch/read">client.crm.objects.courses.batch.<a href="./src/resources/crm/objects/courses/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-410/batch/upsert">client.crm.objects.courses.batch.<a href="./src/resources/crm/objects/courses/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Custom

Methods:

- <code title="post /crm/v3/objects/{objectType}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">create</a>(objectType, { ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/{objectType}/{objectId}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">update</a>(objectID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/{objectType}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">list</a>(objectType, { ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/{objectType}/{objectId}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="get /crm/v3/objects/{objectType}/{objectId}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">get</a>(objectID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/{objectType}/merge">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">merge</a>(objectType, { ...params }) -> SimplePublicObject</code>
- <code title="post /crm/v3/objects/{objectType}/search">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">search</a>(objectType, { ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/{objectType}/batch/create">client.crm.objects.custom.batch.<a href="./src/resources/crm/objects/custom/batch.ts">create</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/{objectType}/batch/update">client.crm.objects.custom.batch.<a href="./src/resources/crm/objects/custom/batch.ts">update</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/{objectType}/batch/archive">client.crm.objects.custom.batch.<a href="./src/resources/crm/objects/custom/batch.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm/v3/objects/{objectType}/batch/read">client.crm.objects.custom.batch.<a href="./src/resources/crm/objects/custom/batch.ts">get</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/{objectType}/batch/upsert">client.crm.objects.custom.batch.<a href="./src/resources/crm/objects/custom/batch.ts">upsert</a>(objectType, { ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### DealSplits

Types:

- <code><a href="./src/resources/crm/objects/deal-splits.ts">BatchResponseDealToDealSplits</a></code>
- <code><a href="./src/resources/crm/objects/deal-splits.ts">BatchResponseDealToDealSplitsWithErrors</a></code>
- <code><a href="./src/resources/crm/objects/deal-splits.ts">DealToDealSplits</a></code>
- <code><a href="./src/resources/crm/objects/deal-splits.ts">ObjectsDealSplitsSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/deal-splits.ts">PublicDealSplitInput</a></code>
- <code><a href="./src/resources/crm/objects/deal-splits.ts">PublicDealSplitsBatchCreateRequest</a></code>
- <code><a href="./src/resources/crm/objects/deal-splits.ts">PublicDealSplitsCreateRequest</a></code>

Methods:

- <code title="post /crm/v3/objects/deals/splits/batch/read">client.crm.objects.dealSplits.<a href="./src/resources/crm/objects/deal-splits.ts">batchRead</a>({ ...params }) -> BatchResponseDealToDealSplits</code>
- <code title="post /crm/v3/objects/deals/splits/batch/upsert">client.crm.objects.dealSplits.<a href="./src/resources/crm/objects/deal-splits.ts">batchUpsert</a>({ ...params }) -> BatchResponseDealToDealSplits</code>

### Deals

Methods:

- <code title="post /crm/v3/objects/0-3">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">update</a>(dealID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/0-3">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">delete</a>(dealID) -> void</code>
- <code title="get /crm/v3/objects/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">get</a>(dealID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/0-3/merge">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/v3/objects/0-3/search">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/0-3/batch/create">client.crm.objects.deals.batch.<a href="./src/resources/crm/objects/deals/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-3/batch/update">client.crm.objects.deals.batch.<a href="./src/resources/crm/objects/deals/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-3/batch/archive">client.crm.objects.deals.batch.<a href="./src/resources/crm/objects/deals/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/0-3/batch/read">client.crm.objects.deals.batch.<a href="./src/resources/crm/objects/deals/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-3/batch/upsert">client.crm.objects.deals.batch.<a href="./src/resources/crm/objects/deals/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Discounts

Methods:

- <code title="post /crm/v3/objects/discounts">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/discounts/{discountId}">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">update</a>(discountID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/discounts">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/discounts/{discountId}">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">delete</a>(discountID) -> void</code>
- <code title="get /crm/v3/objects/discounts/{discountId}">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">get</a>(discountID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/discounts/search">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/discounts/batch/create">client.crm.objects.discounts.batch.<a href="./src/resources/crm/objects/discounts/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/discounts/batch/update">client.crm.objects.discounts.batch.<a href="./src/resources/crm/objects/discounts/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/discounts/batch/archive">client.crm.objects.discounts.batch.<a href="./src/resources/crm/objects/discounts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/discounts/batch/read">client.crm.objects.discounts.batch.<a href="./src/resources/crm/objects/discounts/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/discounts/batch/upsert">client.crm.objects.discounts.batch.<a href="./src/resources/crm/objects/discounts/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Emails

Methods:

- <code title="post /crm/v3/objects/emails">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/emails/{emailId}">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">update</a>(emailID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/emails">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/emails/{emailId}">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">delete</a>(emailID) -> void</code>
- <code title="get /crm/v3/objects/emails/{emailId}">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">get</a>(emailID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/emails/search">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/emails/batch/create">client.crm.objects.emails.batch.<a href="./src/resources/crm/objects/emails/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/emails/batch/update">client.crm.objects.emails.batch.<a href="./src/resources/crm/objects/emails/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/emails/batch/archive">client.crm.objects.emails.batch.<a href="./src/resources/crm/objects/emails/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/emails/batch/read">client.crm.objects.emails.batch.<a href="./src/resources/crm/objects/emails/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/emails/batch/upsert">client.crm.objects.emails.batch.<a href="./src/resources/crm/objects/emails/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### FeedbackSubmissions

Methods:

- <code title="get /crm/v3/objects/feedback_submissions">client.crm.objects.feedbackSubmissions.<a href="./src/resources/crm/objects/feedback-submissions/feedback-submissions.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="get /crm/v3/objects/feedback_submissions/{feedbackSubmissionId}">client.crm.objects.feedbackSubmissions.<a href="./src/resources/crm/objects/feedback-submissions/feedback-submissions.ts">get</a>(feedbackSubmissionID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/feedback_submissions/search">client.crm.objects.feedbackSubmissions.<a href="./src/resources/crm/objects/feedback-submissions/feedback-submissions.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/feedback_submissions/batch/read">client.crm.objects.feedbackSubmissions.batch.<a href="./src/resources/crm/objects/feedback-submissions/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>

### Fees

Methods:

- <code title="post /crm/v3/objects/fees">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/fees/{feeId}">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">update</a>(feeID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/fees">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/fees/{feeId}">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">delete</a>(feeID) -> void</code>
- <code title="get /crm/v3/objects/fees/{feeId}">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">get</a>(feeID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/fees/search">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/fees/batch/create">client.crm.objects.fees.batch.<a href="./src/resources/crm/objects/fees/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/fees/batch/update">client.crm.objects.fees.batch.<a href="./src/resources/crm/objects/fees/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/fees/batch/archive">client.crm.objects.fees.batch.<a href="./src/resources/crm/objects/fees/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/fees/batch/read">client.crm.objects.fees.batch.<a href="./src/resources/crm/objects/fees/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/fees/batch/upsert">client.crm.objects.fees.batch.<a href="./src/resources/crm/objects/fees/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### GoalTargets

Methods:

- <code title="post /crm/v3/objects/goal_targets">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/goal_targets/{goalTargetId}">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">update</a>(goalTargetID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/goal_targets">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/goal_targets/{goalTargetId}">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">delete</a>(goalTargetID) -> void</code>
- <code title="get /crm/v3/objects/goal_targets/{goalTargetId}">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">get</a>(goalTargetID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/goal_targets/search">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/goal_targets/batch/create">client.crm.objects.goalTargets.batch.<a href="./src/resources/crm/objects/goal-targets/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/goal_targets/batch/update">client.crm.objects.goalTargets.batch.<a href="./src/resources/crm/objects/goal-targets/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/goal_targets/batch/archive">client.crm.objects.goalTargets.batch.<a href="./src/resources/crm/objects/goal-targets/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/goal_targets/batch/read">client.crm.objects.goalTargets.batch.<a href="./src/resources/crm/objects/goal-targets/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/goal_targets/batch/upsert">client.crm.objects.goalTargets.batch.<a href="./src/resources/crm/objects/goal-targets/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Invoices

Methods:

- <code title="post /crm/v3/objects/invoices">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/invoices/{invoiceId}">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">update</a>(invoiceID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/invoices">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/invoices/{invoiceId}">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">delete</a>(invoiceID) -> void</code>
- <code title="get /crm/v3/objects/invoices/{invoiceId}">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">get</a>(invoiceID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/invoices/search">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/invoices/batch/create">client.crm.objects.invoices.batch.<a href="./src/resources/crm/objects/invoices/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/invoices/batch/update">client.crm.objects.invoices.batch.<a href="./src/resources/crm/objects/invoices/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/invoices/batch/archive">client.crm.objects.invoices.batch.<a href="./src/resources/crm/objects/invoices/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/invoices/batch/read">client.crm.objects.invoices.batch.<a href="./src/resources/crm/objects/invoices/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/invoices/batch/upsert">client.crm.objects.invoices.batch.<a href="./src/resources/crm/objects/invoices/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Leads

Methods:

- <code title="post /crm/v3/objects/leads">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/leads/{leadsId}">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">update</a>(leadsID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/leads">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/leads/{leadsId}">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">delete</a>(leadsID) -> void</code>
- <code title="get /crm/v3/objects/leads/{leadsId}">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">get</a>(leadsID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/leads/search">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/leads/batch/create">client.crm.objects.leads.batch.<a href="./src/resources/crm/objects/leads/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/leads/batch/update">client.crm.objects.leads.batch.<a href="./src/resources/crm/objects/leads/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/leads/batch/archive">client.crm.objects.leads.batch.<a href="./src/resources/crm/objects/leads/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/leads/batch/read">client.crm.objects.leads.batch.<a href="./src/resources/crm/objects/leads/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>

### LineItems

Methods:

- <code title="post /crm/v3/objects/line_items">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/line_items/{lineItemId}">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">update</a>(lineItemID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/line_items">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/line_items/{lineItemId}">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">delete</a>(lineItemID) -> void</code>
- <code title="get /crm/v3/objects/line_items/{lineItemId}">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">get</a>(lineItemID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/line_items/search">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/line_items/batch/create">client.crm.objects.lineItems.batch.<a href="./src/resources/crm/objects/line-items/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/line_items/batch/update">client.crm.objects.lineItems.batch.<a href="./src/resources/crm/objects/line-items/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/line_items/batch/archive">client.crm.objects.lineItems.batch.<a href="./src/resources/crm/objects/line-items/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/line_items/batch/read">client.crm.objects.lineItems.batch.<a href="./src/resources/crm/objects/line-items/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/line_items/batch/upsert">client.crm.objects.lineItems.batch.<a href="./src/resources/crm/objects/line-items/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Listings

Methods:

- <code title="post /crm/v3/objects/0-420">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/0-420/{listingId}">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">update</a>(listingID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/0-420">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/0-420/{listingId}">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">delete</a>(listingID) -> void</code>
- <code title="get /crm/v3/objects/0-420/{listingId}">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">get</a>(listingID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/0-420/search">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/0-420/batch/create">client.crm.objects.listings.batch.<a href="./src/resources/crm/objects/listings/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-420/batch/update">client.crm.objects.listings.batch.<a href="./src/resources/crm/objects/listings/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-420/batch/archive">client.crm.objects.listings.batch.<a href="./src/resources/crm/objects/listings/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/0-420/batch/read">client.crm.objects.listings.batch.<a href="./src/resources/crm/objects/listings/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-420/batch/upsert">client.crm.objects.listings.batch.<a href="./src/resources/crm/objects/listings/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Meetings

Methods:

- <code title="post /crm/v3/objects/meetings">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/meetings/{meetingId}">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">update</a>(meetingID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/meetings">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/meetings/{meetingId}">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">delete</a>(meetingID) -> void</code>
- <code title="get /crm/v3/objects/meetings/{meetingId}">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">get</a>(meetingID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/meetings/search">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/meetings/batch/create">client.crm.objects.meetings.batch.<a href="./src/resources/crm/objects/meetings/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/meetings/batch/update">client.crm.objects.meetings.batch.<a href="./src/resources/crm/objects/meetings/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/meetings/batch/archive">client.crm.objects.meetings.batch.<a href="./src/resources/crm/objects/meetings/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/meetings/batch/read">client.crm.objects.meetings.batch.<a href="./src/resources/crm/objects/meetings/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/meetings/batch/upsert">client.crm.objects.meetings.batch.<a href="./src/resources/crm/objects/meetings/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Notes

Methods:

- <code title="post /crm/v3/objects/notes">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/notes/{noteId}">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">update</a>(noteID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/notes">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/notes/{noteId}">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">delete</a>(noteID) -> void</code>
- <code title="get /crm/v3/objects/notes/{noteId}">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">get</a>(noteID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/notes/search">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/notes/batch/create">client.crm.objects.notes.batch.<a href="./src/resources/crm/objects/notes/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/notes/batch/update">client.crm.objects.notes.batch.<a href="./src/resources/crm/objects/notes/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/notes/batch/archive">client.crm.objects.notes.batch.<a href="./src/resources/crm/objects/notes/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/notes/batch/read">client.crm.objects.notes.batch.<a href="./src/resources/crm/objects/notes/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/notes/batch/upsert">client.crm.objects.notes.batch.<a href="./src/resources/crm/objects/notes/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Objects

Methods:

- <code title="post /crm/v3/objects/{objectType}">client.crm.objects.objects.<a href="./src/resources/crm/objects/objects_/objects_.ts">create</a>(objectType, { ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/{objectType}/{objectId}">client.crm.objects.objects.<a href="./src/resources/crm/objects/objects_/objects_.ts">update</a>(objectID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/{objectType}">client.crm.objects.objects.<a href="./src/resources/crm/objects/objects_/objects_.ts">list</a>(objectType, { ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/{objectType}/{objectId}">client.crm.objects.objects.<a href="./src/resources/crm/objects/objects_/objects_.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="get /crm/v3/objects/{objectType}/{objectId}">client.crm.objects.objects.<a href="./src/resources/crm/objects/objects_/objects_.ts">get</a>(objectID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/{objectType}/search">client.crm.objects.objects.<a href="./src/resources/crm/objects/objects_/objects_.ts">search</a>(objectType, { ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/{objectType}/batch/create">client.crm.objects.objects.batch.<a href="./src/resources/crm/objects/objects_/batch.ts">create</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/{objectType}/batch/update">client.crm.objects.objects.batch.<a href="./src/resources/crm/objects/objects_/batch.ts">update</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/{objectType}/batch/archive">client.crm.objects.objects.batch.<a href="./src/resources/crm/objects/objects_/batch.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm/v3/objects/{objectType}/batch/read">client.crm.objects.objects.batch.<a href="./src/resources/crm/objects/objects_/batch.ts">get</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/{objectType}/batch/upsert">client.crm.objects.objects.batch.<a href="./src/resources/crm/objects/objects_/batch.ts">upsert</a>(objectType, { ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Orders

Methods:

- <code title="post /crm/v3/objects/orders">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/orders/{orderId}">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">update</a>(orderID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/orders">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/orders/{orderId}">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">delete</a>(orderID) -> void</code>
- <code title="get /crm/v3/objects/orders/{orderId}">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">get</a>(orderID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/orders/search">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/orders/batch/create">client.crm.objects.orders.batch.<a href="./src/resources/crm/objects/orders/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/orders/batch/update">client.crm.objects.orders.batch.<a href="./src/resources/crm/objects/orders/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/orders/batch/archive">client.crm.objects.orders.batch.<a href="./src/resources/crm/objects/orders/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/orders/batch/read">client.crm.objects.orders.batch.<a href="./src/resources/crm/objects/orders/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/orders/batch/upsert">client.crm.objects.orders.batch.<a href="./src/resources/crm/objects/orders/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### PartnerClients

Methods:

- <code title="patch /crm/v3/objects/partner_clients/{partnerClientId}">client.crm.objects.partnerClients.<a href="./src/resources/crm/objects/partner-clients/partner-clients.ts">update</a>(partnerClientID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/partner_clients">client.crm.objects.partnerClients.<a href="./src/resources/crm/objects/partner-clients/partner-clients.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="get /crm/v3/objects/partner_clients/{partnerClientId}">client.crm.objects.partnerClients.<a href="./src/resources/crm/objects/partner-clients/partner-clients.ts">get</a>(partnerClientID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/partner_clients/search">client.crm.objects.partnerClients.<a href="./src/resources/crm/objects/partner-clients/partner-clients.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Associations

Methods:

- <code title="put /crm/v3/objects/partner_clients/{partnerClientId}/associations/{toObjectType}/{toObjectId}/{associationType}">client.crm.objects.partnerClients.associations.<a href="./src/resources/crm/objects/partner-clients/associations.ts">update</a>(associationType, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="get /crm/v3/objects/partner_clients/{partnerClientId}/associations/{toObjectType}">client.crm.objects.partnerClients.associations.<a href="./src/resources/crm/objects/partner-clients/associations.ts">list</a>(toObjectType, { ...params }) -> AssociatedIDsPage</code>
- <code title="delete /crm/v3/objects/partner_clients/{partnerClientId}/associations/{toObjectType}/{toObjectId}/{associationType}">client.crm.objects.partnerClients.associations.<a href="./src/resources/crm/objects/partner-clients/associations.ts">delete</a>(associationType, { ...params }) -> void</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/partner_clients/batch/read">client.crm.objects.partnerClients.batch.<a href="./src/resources/crm/objects/partner-clients/batch.ts">batchGet</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/partner_clients/batch/update">client.crm.objects.partnerClients.batch.<a href="./src/resources/crm/objects/partner-clients/batch.ts">batchUpdate</a>({ ...params }) -> BatchResponseSimplePublicObject</code>

### PartnerServices

Methods:

- <code title="patch /crm/v3/objects/partner_services/{partnerServiceId}">client.crm.objects.partnerServices.<a href="./src/resources/crm/objects/partner-services/partner-services.ts">update</a>(partnerServiceID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/partner_services">client.crm.objects.partnerServices.<a href="./src/resources/crm/objects/partner-services/partner-services.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="get /crm/v3/objects/partner_services/{partnerServiceId}">client.crm.objects.partnerServices.<a href="./src/resources/crm/objects/partner-services/partner-services.ts">get</a>(partnerServiceID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/partner_services/search">client.crm.objects.partnerServices.<a href="./src/resources/crm/objects/partner-services/partner-services.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Associations

Methods:

- <code title="put /crm/v3/objects/partner_services/{partnerServiceId}/associations/{toObjectType}/{toObjectId}/{associationType}">client.crm.objects.partnerServices.associations.<a href="./src/resources/crm/objects/partner-services/associations.ts">update</a>(associationType, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="get /crm/v3/objects/partner_services/{partnerServiceId}/associations/{toObjectType}">client.crm.objects.partnerServices.associations.<a href="./src/resources/crm/objects/partner-services/associations.ts">list</a>(toObjectType, { ...params }) -> AssociatedIDsPage</code>
- <code title="delete /crm/v3/objects/partner_services/{partnerServiceId}/associations/{toObjectType}/{toObjectId}/{associationType}">client.crm.objects.partnerServices.associations.<a href="./src/resources/crm/objects/partner-services/associations.ts">delete</a>(associationType, { ...params }) -> void</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/partner_services/batch/update">client.crm.objects.partnerServices.batch.<a href="./src/resources/crm/objects/partner-services/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/partner_services/batch/read">client.crm.objects.partnerServices.batch.<a href="./src/resources/crm/objects/partner-services/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>

### PostalMail

Methods:

- <code title="post /crm/v3/objects/postal_mail">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/postal_mail/{postalMailId}">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">update</a>(postalMailID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/postal_mail">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/postal_mail/{postalMailId}">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">delete</a>(postalMailID) -> void</code>
- <code title="get /crm/v3/objects/postal_mail/{postalMailId}">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">get</a>(postalMailID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/postal_mail/search">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/postal_mail/batch/create">client.crm.objects.postalMail.batch.<a href="./src/resources/crm/objects/postal-mail/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/postal_mail/batch/update">client.crm.objects.postalMail.batch.<a href="./src/resources/crm/objects/postal-mail/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/postal_mail/batch/archive">client.crm.objects.postalMail.batch.<a href="./src/resources/crm/objects/postal-mail/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/postal_mail/batch/read">client.crm.objects.postalMail.batch.<a href="./src/resources/crm/objects/postal-mail/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/postal_mail/batch/upsert">client.crm.objects.postalMail.batch.<a href="./src/resources/crm/objects/postal-mail/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Products

Methods:

- <code title="post /crm/v3/objects/products">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/products/{productId}">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">update</a>(productID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/products">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/products/{productId}">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">delete</a>(productID) -> void</code>
- <code title="get /crm/v3/objects/products/{productId}">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">get</a>(productID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/products/search">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/products/batch/create">client.crm.objects.products.batch.<a href="./src/resources/crm/objects/products/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/products/batch/update">client.crm.objects.products.batch.<a href="./src/resources/crm/objects/products/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/products/batch/archive">client.crm.objects.products.batch.<a href="./src/resources/crm/objects/products/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/products/batch/read">client.crm.objects.products.batch.<a href="./src/resources/crm/objects/products/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/products/batch/upsert">client.crm.objects.products.batch.<a href="./src/resources/crm/objects/products/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Projects

Methods:

- <code title="post /crm/objects/v3/projects">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/objects/v3/projects/{projectId}">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">update</a>(projectID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/v3/projects">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/v3/projects/{projectId}">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">delete</a>(projectID) -> void</code>
- <code title="get /crm/objects/v3/projects/{projectId}">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">get</a>(projectID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/v3/projects/merge">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/objects/v3/projects/search">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Associations

Methods:

- <code title="put /crm/objects/v3/projects/{projectId}/associations/{toObjectType}/{toObjectId}/{associationType}">client.crm.objects.projects.associations.<a href="./src/resources/crm/objects/projects/associations.ts">update</a>(associationType, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="get /crm/objects/v3/projects/{projectId}/associations/{toObjectType}">client.crm.objects.projects.associations.<a href="./src/resources/crm/objects/projects/associations.ts">list</a>(toObjectType, { ...params }) -> AssociatedIDsPage</code>
- <code title="delete /crm/objects/v3/projects/{projectId}/associations/{toObjectType}/{toObjectId}/{associationType}">client.crm.objects.projects.associations.<a href="./src/resources/crm/objects/projects/associations.ts">delete</a>(associationType, { ...params }) -> void</code>

#### Batch

Methods:

- <code title="post /crm/objects/v3/projects/batch/create">client.crm.objects.projects.batch.<a href="./src/resources/crm/objects/projects/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/v3/projects/batch/update">client.crm.objects.projects.batch.<a href="./src/resources/crm/objects/projects/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/v3/projects/batch/archive">client.crm.objects.projects.batch.<a href="./src/resources/crm/objects/projects/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/v3/projects/batch/read">client.crm.objects.projects.batch.<a href="./src/resources/crm/objects/projects/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/v3/projects/batch/upsert">client.crm.objects.projects.batch.<a href="./src/resources/crm/objects/projects/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Quotes

Methods:

- <code title="post /crm/v3/objects/quotes">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/quotes/{quoteId}">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">update</a>(quoteID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/quotes">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/quotes/{quoteId}">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">delete</a>(quoteID) -> void</code>
- <code title="get /crm/v3/objects/quotes/{quoteId}">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">get</a>(quoteID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/quotes/search">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/quotes/batch/create">client.crm.objects.quotes.batch.<a href="./src/resources/crm/objects/quotes/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/quotes/batch/update">client.crm.objects.quotes.batch.<a href="./src/resources/crm/objects/quotes/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/quotes/batch/archive">client.crm.objects.quotes.batch.<a href="./src/resources/crm/objects/quotes/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/quotes/batch/read">client.crm.objects.quotes.batch.<a href="./src/resources/crm/objects/quotes/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/quotes/batch/upsert">client.crm.objects.quotes.batch.<a href="./src/resources/crm/objects/quotes/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Schemas

Types:

- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectSchema</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectSchemaEgg</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectTypeDefinitionPatch</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectTypePropertyCreate</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">ObjectsSchemasObjectTypeDefinition</a></code>
- <code><a href="./src/resources/crm/objects/schemas.ts">SchemaListResponse</a></code>

Methods:

- <code title="post /crm-object-schemas/v3/schemas">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">create</a>({ ...params }) -> ObjectSchema</code>
- <code title="patch /crm-object-schemas/v3/schemas/{objectType}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">update</a>(objectType, { ...params }) -> ObjectsSchemasObjectTypeDefinition</code>
- <code title="get /crm-object-schemas/v3/schemas">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">list</a>({ ...params }) -> SchemaListResponse</code>
- <code title="delete /crm-object-schemas/v3/schemas/{objectType}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm-object-schemas/v3/schemas/{objectType}/associations">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">createAssociation</a>(objectType, { ...params }) -> AssociationDefinition</code>
- <code title="delete /crm-object-schemas/v3/schemas/{objectType}/associations/{associationIdentifier}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">deleteAssociation</a>(associationIdentifier, { ...params }) -> void</code>
- <code title="get /crm-object-schemas/v3/schemas/{objectType}">client.crm.objects.schemas.<a href="./src/resources/crm/objects/schemas.ts">get</a>(objectType) -> ObjectSchema</code>

### Services

Methods:

- <code title="post /crm/v3/objects/0-162">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/0-162/{serviceId}">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">update</a>(serviceID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/0-162">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/0-162/{serviceId}">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">delete</a>(serviceID) -> void</code>
- <code title="get /crm/v3/objects/0-162/{serviceId}">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">get</a>(serviceID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/0-162/search">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/0-162/batch/create">client.crm.objects.services.batch.<a href="./src/resources/crm/objects/services/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-162/batch/update">client.crm.objects.services.batch.<a href="./src/resources/crm/objects/services/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-162/batch/archive">client.crm.objects.services.batch.<a href="./src/resources/crm/objects/services/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/0-162/batch/read">client.crm.objects.services.batch.<a href="./src/resources/crm/objects/services/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/0-162/batch/upsert">client.crm.objects.services.batch.<a href="./src/resources/crm/objects/services/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Tasks

Methods:

- <code title="post /crm/v3/objects/tasks">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/tasks/{taskId}">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">update</a>(taskID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/tasks">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/tasks/{taskId}">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">delete</a>(taskID) -> void</code>
- <code title="get /crm/v3/objects/tasks/{taskId}">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">get</a>(taskID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/tasks/search">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/tasks/batch/create">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/tasks/batch/update">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/tasks/batch/archive">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/tasks/batch/read">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/tasks/batch/upsert">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Taxes

Methods:

- <code title="post /crm/v3/objects/taxes">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/taxes/{taxId}">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">update</a>(taxID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/taxes">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/taxes/{taxId}">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">delete</a>(taxID) -> void</code>
- <code title="get /crm/v3/objects/taxes/{taxId}">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">get</a>(taxID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/taxes/search">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/taxes/batch/create">client.crm.objects.taxes.batch.<a href="./src/resources/crm/objects/taxes/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/taxes/batch/update">client.crm.objects.taxes.batch.<a href="./src/resources/crm/objects/taxes/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/taxes/batch/archive">client.crm.objects.taxes.batch.<a href="./src/resources/crm/objects/taxes/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/taxes/batch/read">client.crm.objects.taxes.batch.<a href="./src/resources/crm/objects/taxes/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/taxes/batch/upsert">client.crm.objects.taxes.batch.<a href="./src/resources/crm/objects/taxes/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Tickets

Methods:

- <code title="post /crm/v3/objects/tickets">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/tickets/{ticketId}">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">update</a>(ticketID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/tickets">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/tickets/{ticketId}">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">delete</a>(ticketID) -> void</code>
- <code title="get /crm/v3/objects/tickets/{ticketId}">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">get</a>(ticketID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/tickets/merge">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/v3/objects/tickets/search">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/v3/objects/tickets/batch/create">client.crm.objects.tickets.batch.<a href="./src/resources/crm/objects/tickets/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/tickets/batch/update">client.crm.objects.tickets.batch.<a href="./src/resources/crm/objects/tickets/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/tickets/batch/archive">client.crm.objects.tickets.batch.<a href="./src/resources/crm/objects/tickets/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/tickets/batch/read">client.crm.objects.tickets.batch.<a href="./src/resources/crm/objects/tickets/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/tickets/batch/upsert">client.crm.objects.tickets.batch.<a href="./src/resources/crm/objects/tickets/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

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

- <code><a href="./src/resources/crm/pipelines/pipelines.ts">CollectionResponsePipelineNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines/pipelines.ts">CollectionResponsePipelineStageNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines/pipelines.ts">CollectionResponsePublicAuditInfoNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines/pipelines.ts">Pipeline</a></code>
- <code><a href="./src/resources/crm/pipelines/pipelines.ts">PipelineInput</a></code>
- <code><a href="./src/resources/crm/pipelines/pipelines.ts">PipelinePatchInput</a></code>
- <code><a href="./src/resources/crm/pipelines/pipelines.ts">PipelineStage</a></code>
- <code><a href="./src/resources/crm/pipelines/pipelines.ts">PipelineStageInput</a></code>
- <code><a href="./src/resources/crm/pipelines/pipelines.ts">PipelineStagePatchInput</a></code>
- <code><a href="./src/resources/crm/pipelines/pipelines.ts">PublicAuditInfo</a></code>

Methods:

- <code title="post /crm/v3/pipelines/{objectType}">client.crm.pipelines.<a href="./src/resources/crm/pipelines/pipelines.ts">create</a>(objectType, { ...params }) -> Pipeline</code>
- <code title="patch /crm/v3/pipelines/{objectType}/{pipelineId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines/pipelines.ts">update</a>(pipelineID, { ...params }) -> Pipeline</code>
- <code title="get /crm/v3/pipelines/{objectType}">client.crm.pipelines.<a href="./src/resources/crm/pipelines/pipelines.ts">list</a>(objectType) -> CollectionResponsePipelineNoPaging</code>
- <code title="delete /crm/v3/pipelines/{objectType}/{pipelineId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines/pipelines.ts">delete</a>(pipelineID, { ...params }) -> void</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines/pipelines.ts">get</a>(pipelineID, { ...params }) -> Pipeline</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/audit">client.crm.pipelines.<a href="./src/resources/crm/pipelines/pipelines.ts">getAudit</a>(pipelineID, { ...params }) -> CollectionResponsePublicAuditInfoNoPaging</code>
- <code title="put /crm/v3/pipelines/{objectType}/{pipelineId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines/pipelines.ts">replace</a>(pipelineID, { ...params }) -> Pipeline</code>

### Stages

Methods:

- <code title="post /crm/v3/pipelines/{objectType}/{pipelineId}/stages">client.crm.pipelines.stages.<a href="./src/resources/crm/pipelines/stages.ts">create</a>(pipelineID, { ...params }) -> PipelineStage</code>
- <code title="patch /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.stages.<a href="./src/resources/crm/pipelines/stages.ts">update</a>(stageID, { ...params }) -> PipelineStage</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/stages">client.crm.pipelines.stages.<a href="./src/resources/crm/pipelines/stages.ts">list</a>(pipelineID, { ...params }) -> CollectionResponsePipelineStageNoPaging</code>
- <code title="delete /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.stages.<a href="./src/resources/crm/pipelines/stages.ts">delete</a>(stageID, { ...params }) -> void</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.stages.<a href="./src/resources/crm/pipelines/stages.ts">get</a>(stageID, { ...params }) -> PipelineStage</code>
- <code title="get /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}/audit">client.crm.pipelines.stages.<a href="./src/resources/crm/pipelines/stages.ts">getAudit</a>(stageID, { ...params }) -> CollectionResponsePublicAuditInfoNoPaging</code>
- <code title="put /crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.stages.<a href="./src/resources/crm/pipelines/stages.ts">replace</a>(stageID, { ...params }) -> PipelineStage</code>

## Properties

Types:

- <code><a href="./src/resources/crm/properties/properties.ts">CollectionResponseProperty</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">CollectionResponsePropertyGroup</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">CreatedResponseProperty</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">CreatedResponsePropertyGroup</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">PropertiesOptionInput</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">PropertyGroup</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">PropertyUpdate</a></code>

Methods:

- <code title="post /crm/v3/properties/{objectType}">client.crm.properties.<a href="./src/resources/crm/properties/properties.ts">create</a>(objectType, { ...params }) -> CreatedResponseProperty</code>
- <code title="patch /crm/v3/properties/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties/properties.ts">update</a>(propertyName, { ...params }) -> Property</code>
- <code title="get /crm/v3/properties/{objectType}">client.crm.properties.<a href="./src/resources/crm/properties/properties.ts">list</a>(objectType, { ...params }) -> CollectionResponseProperty</code>
- <code title="delete /crm/v3/properties/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties/properties.ts">delete</a>(propertyName, { ...params }) -> void</code>
- <code title="get /crm/v3/properties/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties/properties.ts">get</a>(propertyName, { ...params }) -> Property</code>

### Batch

Methods:

- <code title="post /crm/v3/properties/{objectType}/batch/create">client.crm.properties.batch.<a href="./src/resources/crm/properties/batch.ts">create</a>(objectType, { ...params }) -> BatchResponseProperty</code>
- <code title="post /crm/v3/properties/{objectType}/batch/archive">client.crm.properties.batch.<a href="./src/resources/crm/properties/batch.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm/v3/properties/{objectType}/batch/read">client.crm.properties.batch.<a href="./src/resources/crm/properties/batch.ts">get</a>(objectType, { ...params }) -> BatchResponseProperty</code>

### Groups

Methods:

- <code title="post /crm/v3/properties/{objectType}/groups">client.crm.properties.groups.<a href="./src/resources/crm/properties/groups.ts">create</a>(objectType, { ...params }) -> CreatedResponsePropertyGroup</code>
- <code title="patch /crm/v3/properties/{objectType}/groups/{groupName}">client.crm.properties.groups.<a href="./src/resources/crm/properties/groups.ts">update</a>(groupName, { ...params }) -> PropertyGroup</code>
- <code title="get /crm/v3/properties/{objectType}/groups">client.crm.properties.groups.<a href="./src/resources/crm/properties/groups.ts">list</a>(objectType, { ...params }) -> CollectionResponsePropertyGroup</code>
- <code title="delete /crm/v3/properties/{objectType}/groups/{groupName}">client.crm.properties.groups.<a href="./src/resources/crm/properties/groups.ts">delete</a>(groupName, { ...params }) -> void</code>
- <code title="get /crm/v3/properties/{objectType}/groups/{groupName}">client.crm.properties.groups.<a href="./src/resources/crm/properties/groups.ts">get</a>(groupName, { ...params }) -> PropertyGroup</code>

## PropertyValidations

Types:

- <code><a href="./src/resources/crm/property-validations.ts">CollectionResponsePublicPropertyValidationRuleMapNoPaging</a></code>
- <code><a href="./src/resources/crm/property-validations.ts">CollectionResponsePublicPropertyValidationRuleNoPaging</a></code>
- <code><a href="./src/resources/crm/property-validations.ts">PublicPropertyValidationRule</a></code>
- <code><a href="./src/resources/crm/property-validations.ts">PublicPropertyValidationRuleMap</a></code>
- <code><a href="./src/resources/crm/property-validations.ts">PublicPropertyValidationRuleUpdate</a></code>

Methods:

- <code title="get /crm/v3/property-validations/{objectTypeId}">client.crm.propertyValidations.<a href="./src/resources/crm/property-validations.ts">list</a>(objectTypeID) -> CollectionResponsePublicPropertyValidationRuleMapNoPaging</code>
- <code title="put /crm/v3/property-validations/{objectTypeId}/{propertyName}/rule-type/{ruleType}">client.crm.propertyValidations.<a href="./src/resources/crm/property-validations.ts">crmV3PropertyValidationsObjectTypeIDPropertyNameRuleTypeRuleType</a>(ruleType, { ...params }) -> void</code>
- <code title="get /crm/v3/property-validations/{objectTypeId}/{propertyName}">client.crm.propertyValidations.<a href="./src/resources/crm/property-validations.ts">get</a>(propertyName, { ...params }) -> CollectionResponsePublicPropertyValidationRuleNoPaging</code>

## Subscriptions

Types:

- <code><a href="./src/resources/crm/subscriptions.ts">PauseSubscriptionRequest</a></code>
- <code><a href="./src/resources/crm/subscriptions.ts">UnpauseRequest</a></code>

Methods:

- <code title="post /payments-subscriptions/v1/subscriptions/crm/{objectId}/cancel">client.crm.subscriptions.<a href="./src/resources/crm/subscriptions.ts">cancel</a>(objectID) -> Response</code>
- <code title="post /payments-subscriptions/v1/subscriptions/crm/{objectId}/pause">client.crm.subscriptions.<a href="./src/resources/crm/subscriptions.ts">pause</a>(objectID, { ...params }) -> Response</code>
- <code title="post /payments-subscriptions/v1/subscriptions/crm/{objectId}/unpause">client.crm.subscriptions.<a href="./src/resources/crm/subscriptions.ts">unpause</a>(objectID, { ...params }) -> Response</code>

## Timeline

Types:

- <code><a href="./src/resources/crm/timeline/timeline.ts">BatchInputTimelineEvent</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">BatchResponseTimelineEventResponse</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">BatchResponseTimelineEventResponseWithErrors</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">CollectionResponseTimelineEventTemplateNoPaging</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">EventDetail</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">TimelineEvent</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">TimelineEventIFrame</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">TimelineEventResponse</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">TimelineEventTemplate</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">TimelineEventTemplateCreateRequest</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">TimelineEventTemplateToken</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">TimelineEventTemplateTokenOption</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">TimelineEventTemplateTokenUpdateRequest</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">TimelineEventTemplateUpdateRequest</a></code>

### Events

Methods:

- <code title="post /integrators/timeline/v3/events">client.crm.timeline.events.<a href="./src/resources/crm/timeline/events.ts">create</a>({ ...params }) -> TimelineEventResponse</code>
- <code title="post /integrators/timeline/v3/events/batch/create">client.crm.timeline.events.<a href="./src/resources/crm/timeline/events.ts">batchCreate</a>({ ...params }) -> void</code>
- <code title="get /integrators/timeline/v3/events/{eventTemplateId}/{eventId}">client.crm.timeline.events.<a href="./src/resources/crm/timeline/events.ts">get</a>(eventID, { ...params }) -> TimelineEventResponse</code>
- <code title="get /integrators/timeline/v3/events/{eventTemplateId}/{eventId}/detail">client.crm.timeline.events.<a href="./src/resources/crm/timeline/events.ts">getDetail</a>(eventID, { ...params }) -> EventDetail</code>

### Templates

Methods:

- <code title="post /integrators/timeline/v3/{appId}/event-templates">client.crm.timeline.templates.<a href="./src/resources/crm/timeline/templates.ts">create</a>(appID, { ...params }) -> TimelineEventTemplate</code>
- <code title="put /integrators/timeline/v3/{appId}/event-templates/{eventTemplateId}">client.crm.timeline.templates.<a href="./src/resources/crm/timeline/templates.ts">update</a>(eventTemplateID, { ...params }) -> TimelineEventTemplate</code>
- <code title="get /integrators/timeline/v3/{appId}/event-templates">client.crm.timeline.templates.<a href="./src/resources/crm/timeline/templates.ts">list</a>(appID) -> CollectionResponseTimelineEventTemplateNoPaging</code>
- <code title="delete /integrators/timeline/v3/{appId}/event-templates/{eventTemplateId}">client.crm.timeline.templates.<a href="./src/resources/crm/timeline/templates.ts">delete</a>(eventTemplateID, { ...params }) -> void</code>
- <code title="get /integrators/timeline/v3/{appId}/event-templates/{eventTemplateId}">client.crm.timeline.templates.<a href="./src/resources/crm/timeline/templates.ts">get</a>(eventTemplateID, { ...params }) -> TimelineEventTemplate</code>

### Tokens

Methods:

- <code title="post /integrators/timeline/v3/{appId}/event-templates/{eventTemplateId}/tokens">client.crm.timeline.tokens.<a href="./src/resources/crm/timeline/tokens.ts">create</a>(eventTemplateID, { ...params }) -> TimelineEventTemplateToken</code>
- <code title="put /integrators/timeline/v3/{appId}/event-templates/{eventTemplateId}/tokens/{tokenName}">client.crm.timeline.tokens.<a href="./src/resources/crm/timeline/tokens.ts">update</a>(tokenName, { ...params }) -> TimelineEventTemplateToken</code>
- <code title="delete /integrators/timeline/v3/{appId}/event-templates/{eventTemplateId}/tokens/{tokenName}">client.crm.timeline.tokens.<a href="./src/resources/crm/timeline/tokens.ts">delete</a>(tokenName, { ...params }) -> void</code>

## Users

Methods:

- <code title="post /crm/v3/objects/users">client.crm.users.<a href="./src/resources/crm/users/users.ts">create</a>({ ...params }) -> CreatedResponseSimplePublicObject</code>
- <code title="patch /crm/v3/objects/users/{userId}">client.crm.users.<a href="./src/resources/crm/users/users.ts">update</a>(userID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/v3/objects/users">client.crm.users.<a href="./src/resources/crm/users/users.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/v3/objects/users/{userId}">client.crm.users.<a href="./src/resources/crm/users/users.ts">delete</a>(userID) -> void</code>
- <code title="get /crm/v3/objects/users/{userId}">client.crm.users.<a href="./src/resources/crm/users/users.ts">get</a>(userID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/v3/objects/users/search">client.crm.users.<a href="./src/resources/crm/users/users.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

### Batch

Methods:

- <code title="post /crm/v3/objects/users/batch/create">client.crm.users.batch.<a href="./src/resources/crm/users/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/users/batch/update">client.crm.users.batch.<a href="./src/resources/crm/users/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/users/batch/archive">client.crm.users.batch.<a href="./src/resources/crm/users/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/v3/objects/users/batch/read">client.crm.users.batch.<a href="./src/resources/crm/users/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/v3/objects/users/batch/upsert">client.crm.users.batch.<a href="./src/resources/crm/users/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>
