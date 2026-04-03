# Crm

Types:

- <code><a href="./src/resources/crm/crm.ts">AssociationSpecWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">BatchResponsePublicDefaultAssociation</a></code>
- <code><a href="./src/resources/crm/crm.ts">CollectionResponseMultiAssociatedObjectWithLabelForwardPaging</a></code>
- <code><a href="./src/resources/crm/crm.ts">CollectionResponseWithTotalSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/crm.ts">Filter</a></code>
- <code><a href="./src/resources/crm/crm.ts">FilterGroup</a></code>
- <code><a href="./src/resources/crm/crm.ts">LabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/crm.ts">MultiAssociatedObjectWithLabel</a></code>
- <code><a href="./src/resources/crm/crm.ts">Property</a></code>
- <code><a href="./src/resources/crm/crm.ts">PublicDefaultAssociation</a></code>
- <code><a href="./src/resources/crm/crm.ts">PublicObjectSearchRequest</a></code>
- <code><a href="./src/resources/crm/crm.ts">SimplePublicObject</a></code>
- <code><a href="./src/resources/crm/crm.ts">ValueWithTimestamp</a></code>

## AppUninstalls

Methods:

- <code title="delete /appinstalls/2026-03/external-install">client.crm.appUninstalls.<a href="./src/resources/crm/app-uninstalls.ts">uninstall</a>() -> void</code>

## Associations

Types:

- <code><a href="./src/resources/crm/associations/associations.ts">BatchInputPublicAssociationMultiArchive</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchInputPublicAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchInputPublicDefaultAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchInputPublicFetchAssociationsBatchRequest</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchResponseLabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchResponseLabelsBetweenObjectPairWithErrors</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchResponsePublicAssociationMultiWithLabel</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">BatchResponsePublicAssociationMultiWithLabelWithErrors</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">DateTime</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">PublicAssociationMultiArchive</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">PublicAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">PublicAssociationMultiWithLabel</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">PublicDefaultAssociationMultiPost</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">PublicFetchAssociationsBatchRequest</a></code>
- <code><a href="./src/resources/crm/associations/associations.ts">ReportCreationResponse</a></code>

Methods:

- <code title="get /crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">list</a>(toObjectType, { ...params }) -> MultiAssociatedObjectWithLabelsPage</code>
- <code title="delete /crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">delete</a>(toObjectID, { ...params }) -> void</code>
- <code title="post /crm/associations/2026-03/usage/high-usage-report/{userId}">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">requestHighUsageReport</a>(userID) -> ReportCreationResponse</code>
- <code title="post /crm/objects/2026-03/{objectType}/search">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">search</a>(objectType, { ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>
- <code title="put /crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">client.crm.associations.<a href="./src/resources/crm/associations/associations.ts">updateAssociationLabels</a>(toObjectID, [ ...body ]) -> LabelsBetweenObjectPair</code>

### Batch

Methods:

- <code title="put /crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">client.crm.associations.batch.<a href="./src/resources/crm/associations/batch.ts">create</a>(toObjectID, { ...params }) -> BatchResponsePublicDefaultAssociation</code>
- <code title="post /crm/associations/2026-03/{fromObjectType}/{toObjectType}/batch/archive">client.crm.associations.batch.<a href="./src/resources/crm/associations/batch.ts">delete</a>(toObjectType, { ...params }) -> void</code>
- <code title="post /crm/associations/2026-03/{fromObjectType}/{toObjectType}/batch/associate/default">client.crm.associations.batch.<a href="./src/resources/crm/associations/batch.ts">createDefault</a>(toObjectType, { ...params }) -> BatchResponsePublicDefaultAssociation</code>
- <code title="post /crm/associations/2026-03/{fromObjectType}/{toObjectType}/batch/labels/archive">client.crm.associations.batch.<a href="./src/resources/crm/associations/batch.ts">deleteLabels</a>(toObjectType, { ...params }) -> void</code>
- <code title="post /crm/associations/2026-03/{fromObjectType}/{toObjectType}/batch/read">client.crm.associations.batch.<a href="./src/resources/crm/associations/batch.ts">get</a>(toObjectType, { ...params }) -> BatchResponsePublicAssociationMultiWithLabel</code>

## AssociationsSchema

Types:

- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">BatchInputPublicAssociationDefinitionConfigurationCreateRequest</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">BatchInputPublicAssociationDefinitionConfigurationUpdateRequest</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">BatchInputPublicAssociationSpec</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">BatchResponsePublicAssociationDefinitionConfigurationUpdateResult</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">BatchResponsePublicAssociationDefinitionUserConfiguration</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">CollectionResponseAssociationSpecWithLabelNoPaging</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">PublicAssociationDefinitionConfigurationCreateRequest</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">PublicAssociationDefinitionConfigurationUpdateRequest</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">PublicAssociationDefinitionConfigurationUpdateResult</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">PublicAssociationDefinitionCreateRequest</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">PublicAssociationDefinitionUpdateRequest</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">PublicAssociationDefinitionUserConfiguration</a></code>
- <code><a href="./src/resources/crm/associations-schema/associations-schema.ts">PublicAssociationSpec</a></code>

### Labels

Methods:

- <code title="post /crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create">client.crm.associationsSchema.labels.<a href="./src/resources/crm/associations-schema/labels.ts">batchCreate</a>(toObjectType, { ...params }) -> BatchResponsePublicAssociationDefinitionUserConfiguration</code>
- <code title="post /crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels">client.crm.associationsSchema.labels.<a href="./src/resources/crm/associations-schema/labels.ts">createLabel</a>(toObjectType, { ...params }) -> CollectionResponseAssociationSpecWithLabelNoPaging</code>
- <code title="delete /crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels/{associationTypeId}">client.crm.associationsSchema.labels.<a href="./src/resources/crm/associations-schema/labels.ts">deleteLabel</a>(associationTypeID, { ...params }) -> void</code>
- <code title="get /crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels">client.crm.associationsSchema.labels.<a href="./src/resources/crm/associations-schema/labels.ts">listLabels</a>(toObjectType, { ...params }) -> CollectionResponseAssociationSpecWithLabelNoPaging</code>
- <code title="put /crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels">client.crm.associationsSchema.labels.<a href="./src/resources/crm/associations-schema/labels.ts">updateLabel</a>(toObjectType, { ...params }) -> void</code>

### Limits

Methods:

- <code title="get /crm/associations/2026-03/definitions/configurations/all">client.crm.associationsSchema.limits.<a href="./src/resources/crm/associations-schema/limits.ts">list</a>() -> CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging</code>
- <code title="post /crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge">client.crm.associationsSchema.limits.<a href="./src/resources/crm/associations-schema/limits.ts">batchDelete</a>(toObjectType, { ...params }) -> void</code>
- <code title="post /crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update">client.crm.associationsSchema.limits.<a href="./src/resources/crm/associations-schema/limits.ts">batchUpdate</a>(toObjectType, { ...params }) -> BatchResponsePublicAssociationDefinitionConfigurationUpdateResult</code>
- <code title="get /crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}">client.crm.associationsSchema.limits.<a href="./src/resources/crm/associations-schema/limits.ts">getByObjectTypes</a>(toObjectType, { ...params }) -> CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging</code>

## DealSplits

Types:

- <code><a href="./src/resources/crm/deal-splits/deal-splits.ts">BatchResponseDealToDealSplits</a></code>
- <code><a href="./src/resources/crm/deal-splits/deal-splits.ts">BatchResponseDealToDealSplitsWithErrors</a></code>
- <code><a href="./src/resources/crm/deal-splits/deal-splits.ts">DealToDealSplits</a></code>
- <code><a href="./src/resources/crm/deal-splits/deal-splits.ts">PublicDealSplitInput</a></code>
- <code><a href="./src/resources/crm/deal-splits/deal-splits.ts">PublicDealSplitsBatchCreateRequest</a></code>
- <code><a href="./src/resources/crm/deal-splits/deal-splits.ts">PublicDealSplitsCreateRequest</a></code>

### Batch

Methods:

- <code title="post /deal-splits/2026-03/batch/read">client.crm.dealSplits.batch.<a href="./src/resources/crm/deal-splits/batch.ts">read</a>({ ...params }) -> BatchResponseDealToDealSplits</code>
- <code title="post /deal-splits/2026-03/batch/upsert">client.crm.dealSplits.batch.<a href="./src/resources/crm/deal-splits/batch.ts">upsert</a>({ ...params }) -> BatchResponseDealToDealSplits</code>

## Exports

Types:

- <code><a href="./src/resources/crm/exports.ts">ActionResponseWithSingleResultUri</a></code>
- <code><a href="./src/resources/crm/exports.ts">PublicCrmSearchRequest</a></code>
- <code><a href="./src/resources/crm/exports.ts">PublicExportListRequest</a></code>
- <code><a href="./src/resources/crm/exports.ts">PublicExportRequest</a></code>
- <code><a href="./src/resources/crm/exports.ts">PublicExportResponse</a></code>
- <code><a href="./src/resources/crm/exports.ts">PublicExportViewRequest</a></code>

Methods:

- <code title="post /crm/exports/2026-03/export/async">client.crm.exports.<a href="./src/resources/crm/exports.ts">createAsync</a>() -> TaskLocator</code>
- <code title="get /crm/exports/2026-03/export/{exportId}">client.crm.exports.<a href="./src/resources/crm/exports.ts">get</a>(exportID) -> PublicExportResponse</code>
- <code title="get /crm/exports/2026-03/export/async/tasks/{taskId}/status">client.crm.exports.<a href="./src/resources/crm/exports.ts">getStatus</a>(taskID) -> ActionResponseWithSingleResultUri</code>

## Extensions

### Calling

Types:

- <code><a href="./src/resources/crm/extensions/calling/calling.ts">ChannelConnectionSettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">ChannelConnectionSettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">ChannelConnectionSettingsResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CompanyCallerID</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CompletedThirdPartyCallRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">CompletedThirdPartyCallResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">ContactCallerID</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">FormattedPhoneNumber</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">MarkRecordingAsReadyRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">ObjectCoordinates</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">RecordingSettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">RecordingSettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">RecordingSettingsResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">SettingsPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">SettingsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/calling.ts">SettingsResponse</a></code>

Methods:

- <code title="post /crm/extensions/calling/2026-03/{appId}/settings/channel-connection">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">createChannelConnectionSettings</a>(appID, { ...params }) -> ChannelConnectionSettingsResponse</code>
- <code title="post /crm/extensions/calling/2026-03/inbound-call">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">createInboundCall</a>({ ...params }) -> CompletedThirdPartyCallResponse</code>
- <code title="post /crm/extensions/calling/2026-03/recordings/ready">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">createRecordingReady</a>({ ...params }) -> void</code>
- <code title="post /crm/extensions/calling/2026-03/{appId}/settings/recording">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">createRecordingSettings</a>(appID, { ...params }) -> RecordingSettingsResponse</code>
- <code title="post /crm/extensions/calling/2026-03/{appId}/settings">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">createSettings</a>(appID, { ...params }) -> SettingsResponse</code>
- <code title="delete /crm/extensions/calling/2026-03/{appId}/settings/channel-connection">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">deleteChannelConnectionSettings</a>(appID) -> void</code>
- <code title="delete /crm/extensions/calling/2026-03/{appId}/settings">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">deleteSettings</a>(appID) -> void</code>
- <code title="get /crm/extensions/calling/2026-03/{appId}/settings/channel-connection">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">getChannelConnectionSettings</a>(appID) -> ChannelConnectionSettingsResponse</code>
- <code title="get /crm/extensions/calling/2026-03/{appId}/settings/recording">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">getRecordingSettings</a>(appID) -> RecordingSettingsResponse</code>
- <code title="get /crm/extensions/calling/2026-03/{appId}/settings">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">getSettings</a>(appID) -> SettingsResponse</code>
- <code title="patch /crm/extensions/calling/2026-03/{appId}/settings/channel-connection">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">updateChannelConnectionSettings</a>(appID, { ...params }) -> ChannelConnectionSettingsResponse</code>
- <code title="patch /crm/extensions/calling/2026-03/{appId}/settings/recording">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">updateRecordingSettings</a>(appID, { ...params }) -> RecordingSettingsResponse</code>
- <code title="patch /crm/extensions/calling/2026-03/{appId}/settings">client.crm.extensions.calling.<a href="./src/resources/crm/extensions/calling/calling.ts">updateSettings</a>(appID, { ...params }) -> SettingsResponse</code>

#### Transcripts

Types:

- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">Speaker</a></code>
- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">TranscriptCreateRequest</a></code>
- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">TranscriptCreateResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">TranscriptCreateUtterance</a></code>
- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">TranscriptResponse</a></code>
- <code><a href="./src/resources/crm/extensions/calling/transcripts.ts">TranscriptUtterance</a></code>

Methods:

- <code title="post /crm/extensions/calling/2026-03/transcripts">client.crm.extensions.calling.transcripts.<a href="./src/resources/crm/extensions/calling/transcripts.ts">create</a>({ ...params }) -> TranscriptCreateResponse</code>
- <code title="delete /crm/extensions/calling/2026-03/transcripts/{transcriptId}">client.crm.extensions.calling.transcripts.<a href="./src/resources/crm/extensions/calling/transcripts.ts">delete</a>(transcriptID) -> void</code>
- <code title="post /crm/extensions/calling/2026-03/inbound-call">client.crm.extensions.calling.transcripts.<a href="./src/resources/crm/extensions/calling/transcripts.ts">createInboundCall</a>({ ...params }) -> CompletedThirdPartyCallResponse</code>
- <code title="get /crm/extensions/calling/2026-03/transcripts/{transcriptId}">client.crm.extensions.calling.transcripts.<a href="./src/resources/crm/extensions/calling/transcripts.ts">get</a>(transcriptID) -> TranscriptResponse</code>

### CardsDev

Types:

- <code><a href="./src/resources/crm/extensions/cards-dev.ts">ActionConfirmationBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">ActionHookActionBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardActions</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardAuditResponse</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardCreateRequest</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardDisplayBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardDisplayProperty</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardFetchBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardFetchBodyPatch</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardMigrateViewsRequest</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardMigrateViewsResponse</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardObjectTypeBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">CardPatchRequest</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">DisplayOption</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">IFrameActionBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">IntegratorCardPayloadResponse</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">IntegratorObjectResult</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">ObjectToken</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">PublicCardFetchBody</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">PublicCardListResponse</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">PublicCardResponse</a></code>
- <code><a href="./src/resources/crm/extensions/cards-dev.ts">TopLevelActions</a></code>

Methods:

- <code title="post /crm/extensions/cards-dev/2026-03/{appId}">client.crm.extensions.cardsDev.<a href="./src/resources/crm/extensions/cards-dev.ts">create</a>(appID, { ...params }) -> PublicCardResponse</code>
- <code title="patch /crm/extensions/cards-dev/2026-03/{appId}/{cardId}">client.crm.extensions.cardsDev.<a href="./src/resources/crm/extensions/cards-dev.ts">update</a>(cardID, { ...params }) -> PublicCardResponse</code>
- <code title="delete /crm/extensions/cards-dev/2026-03/{appId}/{cardId}">client.crm.extensions.cardsDev.<a href="./src/resources/crm/extensions/cards-dev.ts">delete</a>(cardID, { ...params }) -> void</code>
- <code title="get /crm/extensions/cards-dev/2026-03/{appId}">client.crm.extensions.cardsDev.<a href="./src/resources/crm/extensions/cards-dev.ts">get</a>(appID) -> PublicCardListResponse</code>
- <code title="get /crm/extensions/cards-dev/2026-03/{appId}/{cardId}">client.crm.extensions.cardsDev.<a href="./src/resources/crm/extensions/cards-dev.ts">getByID</a>(cardID, { ...params }) -> PublicCardResponse</code>
- <code title="get /crm/extensions/cards-dev/2026-03/sample-response">client.crm.extensions.cardsDev.<a href="./src/resources/crm/extensions/cards-dev.ts">getSampleResponse</a>() -> IntegratorCardPayloadResponse</code>
- <code title="post /crm/extensions/cards-dev/2026-03/{appId}/views/migrate">client.crm.extensions.cardsDev.<a href="./src/resources/crm/extensions/cards-dev.ts">migrateViews</a>(appID, { ...params }) -> CardMigrateViewsResponse</code>

### VideoConferencing

Types:

- <code><a href="./src/resources/crm/extensions/video-conferencing.ts">ExternalSettings</a></code>

Methods:

- <code title="put /crm/extensions/videoconferencing/2026-03/settings/{appId}">client.crm.extensions.videoConferencing.<a href="./src/resources/crm/extensions/video-conferencing.ts">update</a>(appID, { ...params }) -> ExternalSettings</code>
- <code title="delete /crm/extensions/videoconferencing/2026-03/settings/{appId}">client.crm.extensions.videoConferencing.<a href="./src/resources/crm/extensions/video-conferencing.ts">delete</a>(appID) -> void</code>
- <code title="get /crm/extensions/videoconferencing/2026-03/settings/{appId}">client.crm.extensions.videoConferencing.<a href="./src/resources/crm/extensions/video-conferencing.ts">get</a>(appID) -> ExternalSettings</code>

## FeatureFlags

Types:

- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">BatchPortalEntry</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">FlagPutRequest</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">FlagResponse</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">FlagsForAppResponse</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">PortalFlagStateBatchDeleteRequest</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">PortalFlagStateBatchPutRequest</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">PortalFlagStateBatchResponse</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">PortalFlagStatePutRequest</a></code>
- <code><a href="./src/resources/crm/feature-flags/feature-flags.ts">PortalFlagStateResponse</a></code>

Methods:

- <code title="put /feature-flags/2026-03/{appId}/flags/{flagName}">client.crm.featureFlags.<a href="./src/resources/crm/feature-flags/feature-flags.ts">update</a>(flagName, { ...params }) -> FlagResponse</code>
- <code title="delete /feature-flags/2026-03/{appId}/flags/{flagName}">client.crm.featureFlags.<a href="./src/resources/crm/feature-flags/feature-flags.ts">delete</a>(flagName, { ...params }) -> FlagResponse</code>
- <code title="delete /feature-flags/2026-03/{appId}/flags/{flagName}/portals/{portalId}">client.crm.featureFlags.<a href="./src/resources/crm/feature-flags/feature-flags.ts">deletePortalState</a>(portalID, { ...params }) -> PortalFlagStateResponse</code>
- <code title="get /feature-flags/2026-03/{appId}/flags/{flagName}">client.crm.featureFlags.<a href="./src/resources/crm/feature-flags/feature-flags.ts">get</a>(flagName, { ...params }) -> FlagResponse</code>
- <code title="get /feature-flags/2026-03/{appId}/flags/{flagName}/portals/{portalId}">client.crm.featureFlags.<a href="./src/resources/crm/feature-flags/feature-flags.ts">getPortalState</a>(portalID, { ...params }) -> PortalFlagStateResponse</code>
- <code title="get /feature-flags/2026-03/{appId}/flags/all">client.crm.featureFlags.<a href="./src/resources/crm/feature-flags/feature-flags.ts">listAll</a>(appID) -> FlagsForAppResponse</code>
- <code title="get /feature-flags/2026-03/{appId}/flags/{flagName}/portals">client.crm.featureFlags.<a href="./src/resources/crm/feature-flags/feature-flags.ts">listPortals</a>(flagName, { ...params }) -> PortalFlagStateBatchResponse</code>
- <code title="put /feature-flags/2026-03/{appId}/flags/{flagName}/portals/{portalId}">client.crm.featureFlags.<a href="./src/resources/crm/feature-flags/feature-flags.ts">updatePortalState</a>(portalID, { ...params }) -> PortalFlagStateResponse</code>

### Batch

Methods:

- <code title="post /feature-flags/2026-03/{appId}/flags/{flagName}/portals/batch/delete">client.crm.featureFlags.batch.<a href="./src/resources/crm/feature-flags/batch.ts">delete</a>(flagName, { ...params }) -> PortalFlagStateBatchResponse</code>
- <code title="post /feature-flags/2026-03/{appId}/flags/{flagName}/portals/batch/upsert">client.crm.featureFlags.batch.<a href="./src/resources/crm/feature-flags/batch.ts">upsert</a>(flagName, { ...params }) -> PortalFlagStateBatchResponse</code>

## Imports

Types:

- <code><a href="./src/resources/crm/imports.ts">CollectionResponsePublicImportErrorForwardPaging</a></code>
- <code><a href="./src/resources/crm/imports.ts">CollectionResponsePublicImportResponseForwardPaging</a></code>
- <code><a href="./src/resources/crm/imports.ts">ImportRowCore</a></code>
- <code><a href="./src/resources/crm/imports.ts">ImportTemplate</a></code>
- <code><a href="./src/resources/crm/imports.ts">PublicImportError</a></code>
- <code><a href="./src/resources/crm/imports.ts">PublicImportMetadata</a></code>
- <code><a href="./src/resources/crm/imports.ts">PublicImportResponse</a></code>
- <code><a href="./src/resources/crm/imports.ts">PublicObjectListRecord</a></code>

Methods:

- <code title="post /crm/imports/2026-03">client.crm.imports.<a href="./src/resources/crm/imports.ts">create</a>({ ...params }) -> PublicImportResponse</code>
- <code title="get /crm/imports/2026-03">client.crm.imports.<a href="./src/resources/crm/imports.ts">list</a>({ ...params }) -> PublicImportResponsesPage</code>
- <code title="post /crm/imports/2026-03/{importId}/cancel">client.crm.imports.<a href="./src/resources/crm/imports.ts">cancel</a>(importID) -> ActionResponse</code>
- <code title="get /crm/imports/2026-03/{importId}">client.crm.imports.<a href="./src/resources/crm/imports.ts">get</a>(importID) -> PublicImportResponse</code>
- <code title="get /crm/imports/2026-03/{importId}/errors">client.crm.imports.<a href="./src/resources/crm/imports.ts">listErrors</a>(importID, { ...params }) -> PublicImportErrorsPage</code>

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

- <code title="get /crm/limits/2026-03/associations/labels">client.crm.limits.<a href="./src/resources/crm/limits.ts">getAssociationLabelLimits</a>({ ...params }) -> CollectionResponseAssociationLabelLimitResponseNoPaging</code>
- <code title="get /crm/limits/2026-03/associations/records/{fromObjectTypeId}/{toObjectTypeId}">client.crm.limits.<a href="./src/resources/crm/limits.ts">getAssociationRecordsLimitsByObjectType</a>(toObjectTypeID, { ...params }) -> AssociationRecordLimitResponse</code>
- <code title="get /crm/limits/2026-03/associations/records/from">client.crm.limits.<a href="./src/resources/crm/limits.ts">getAssociationRecordsLimitsFromObjects</a>() -> CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging</code>
- <code title="get /crm/limits/2026-03/associations/records/{fromObjectTypeId}/to">client.crm.limits.<a href="./src/resources/crm/limits.ts">getAssociationRecordsLimitsToObjects</a>(fromObjectTypeID) -> CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging</code>
- <code title="get /crm/limits/2026-03/calculated-properties">client.crm.limits.<a href="./src/resources/crm/limits.ts">getCalculatedPropertyLimits</a>() -> CalculatedPropertyLimitResponse</code>
- <code title="get /crm/limits/2026-03/custom-object-types">client.crm.limits.<a href="./src/resources/crm/limits.ts">getCustomObjectTypeLimits</a>() -> CustomObjectLimitResponse</code>
- <code title="get /crm/limits/2026-03/custom-properties">client.crm.limits.<a href="./src/resources/crm/limits.ts">getCustomPropertyLimits</a>() -> CustomPropertyLimitResponse</code>
- <code title="get /crm/limits/2026-03/pipelines">client.crm.limits.<a href="./src/resources/crm/limits.ts">getPipelineLimits</a>() -> PipelineLimitResponse</code>
- <code title="get /crm/limits/2026-03/records">client.crm.limits.<a href="./src/resources/crm/limits.ts">getRecordLimits</a>() -> RecordLimitResponse</code>

## Lists

Types:

- <code><a href="./src/resources/crm/lists.ts">APICollectionResponseJoinTimeAndRecordID</a></code>
- <code><a href="./src/resources/crm/lists.ts">APICollectionResponseRecordListMembership</a></code>
- <code><a href="./src/resources/crm/lists.ts">BatchInputRecordIDInput</a></code>
- <code><a href="./src/resources/crm/lists.ts">BatchResponseRecordIDWithMemberships</a></code>
- <code><a href="./src/resources/crm/lists.ts">BatchResponseRecordIDWithMembershipsWithErrors</a></code>
- <code><a href="./src/resources/crm/lists.ts">JoinTimeAndRecordID</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListCreateRequest</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListFetchResponse</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListFilterUpdateRequest</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListFolderCreateRequest</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListFolderCreateResponse</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListFolderFetchResponse</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListMoveRequest</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListSearchRequest</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListSearchResponse</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListSizeAndEditHistoryResponse</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListSizeDataPoint</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/crm/lists.ts">ListsByIDResponse</a></code>
- <code><a href="./src/resources/crm/lists.ts">MembershipChangeRequest</a></code>
- <code><a href="./src/resources/crm/lists.ts">MembershipsUpdateResponse</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicAbsoluteComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicAbsoluteRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicAdsSearchFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicAdsTimeFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicAllHistoryRefineBy</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicAllPropertyTypesOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicAndFilterBranch</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicAssociationFilterBranch</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicAssociationInListFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicBatchMigrationMapping</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicBoolPropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicCalendarDatePropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicCampaignInfluencedFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicCommunicationSubscriptionFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicComparativeDatePropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicComparativePropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicConstantFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicCtaAnalyticsFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicDatePoint</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicDatePropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicDateTimePropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicEmailEventFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicEmailSubscriptionFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicEnumerationPropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicEventAnalyticsFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicEventFilterMetadata</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicFiscalQuarterReference</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicFiscalYearReference</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicFormSubmissionFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicFormSubmissionOnPageFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicInListFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicInListFilterMetadata</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicIndexOffset</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicIndexedTimePoint</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicIntegrationEventFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicListConversionDate</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicListConversionInactivity</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicListConversionResponse</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicListConversionTime</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicListFolder</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicListPermissions</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicMembershipSettings</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicMigrationMapping</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicMonthReference</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicMultiStringPropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicNotAllFilterBranch</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicNotAnyFilterBranch</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicNowReference</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicNumAssociationsFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicNumOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicNumberPropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicObjectList</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicObjectListSearchResult</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicOrFilterBranch</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicPageViewAnalyticsFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicPrivacyAnalyticsFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicPropertyAssociationFilterBranch</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicPropertyAssociationInListFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicPropertyFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicPropertyReferencedTime</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicQuarterReference</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicRangedDatePropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicRangedNumberPropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicRangedTimeOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicRelativeComparativeTimestampRefineBy</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicRelativeRangedTimestampRefineBy</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicRestrictedFilterBranch</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicRollingDateRangePropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicRollingPropertyUpdatedOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicSetOccurrencesRefineBy</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicStringPropertyOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicSurveyMonkeyFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicSurveyMonkeyValueFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicTimeOffset</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicTimePointOperation</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicTodayReference</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicUnifiedEventsFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicUnifiedEventsFilterBranch</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicWebinarFilter</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicWeekReference</a></code>
- <code><a href="./src/resources/crm/lists.ts">PublicYearReference</a></code>
- <code><a href="./src/resources/crm/lists.ts">RecordIDInput</a></code>
- <code><a href="./src/resources/crm/lists.ts">RecordIDWithMemberships</a></code>
- <code><a href="./src/resources/crm/lists.ts">RecordListMembership</a></code>

Methods:

- <code title="post /crm/lists/2026-03">client.crm.lists.<a href="./src/resources/crm/lists.ts">create</a>({ ...params }) -> ListCreateResponse</code>
- <code title="get /crm/lists/2026-03">client.crm.lists.<a href="./src/resources/crm/lists.ts">list</a>({ ...params }) -> ListsByIDResponse</code>
- <code title="delete /crm/lists/2026-03/{listId}">client.crm.lists.<a href="./src/resources/crm/lists.ts">delete</a>(listID) -> void</code>
- <code title="put /crm/lists/2026-03/{listId}/memberships/add-and-remove">client.crm.lists.<a href="./src/resources/crm/lists.ts">addAndRemoveMemberships</a>(listID, { ...params }) -> MembershipsUpdateResponse</code>
- <code title="put /crm/lists/2026-03/{listId}/memberships/add">client.crm.lists.<a href="./src/resources/crm/lists.ts">addMemberships</a>(listID, [ ...body ]) -> MembershipsUpdateResponse</code>
- <code title="put /crm/lists/2026-03/{listId}/memberships/add-from/{sourceListId}">client.crm.lists.<a href="./src/resources/crm/lists.ts">addMembershipsFrom</a>(sourceListID, { ...params }) -> void</code>
- <code title="post /crm/lists/2026-03/records/memberships/batch/read">client.crm.lists.<a href="./src/resources/crm/lists.ts">batchReadMemberships</a>({ ...params }) -> BatchResponseRecordIDWithMemberships</code>
- <code title="post /crm/lists/2026-03/folders">client.crm.lists.<a href="./src/resources/crm/lists.ts">createFolder</a>({ ...params }) -> ListFolderCreateResponse</code>
- <code title="post /crm/lists/2026-03/idmapping">client.crm.lists.<a href="./src/resources/crm/lists.ts">createIDMapping</a>([ ...body ]) -> PublicBatchMigrationMapping</code>
- <code title="delete /crm/lists/2026-03/folders/{folderId}">client.crm.lists.<a href="./src/resources/crm/lists.ts">deleteFolder</a>(folderID) -> void</code>
- <code title="delete /crm/lists/2026-03/{listId}/memberships">client.crm.lists.<a href="./src/resources/crm/lists.ts">deleteMemberships</a>(listID) -> void</code>
- <code title="get /crm/lists/2026-03/{listId}">client.crm.lists.<a href="./src/resources/crm/lists.ts">get</a>(listID, { ...params }) -> ListFetchResponse</code>
- <code title="get /crm/lists/2026-03/object-type-id/{objectTypeId}/name/{listName}">client.crm.lists.<a href="./src/resources/crm/lists.ts">getByObjectTypeAndName</a>(listName, { ...params }) -> ListFetchResponse</code>
- <code title="get /crm/lists/2026-03/idmapping">client.crm.lists.<a href="./src/resources/crm/lists.ts">getIDMapping</a>({ ...params }) -> PublicMigrationMapping</code>
- <code title="get /crm/lists/2026-03/{listId}/memberships/join-order">client.crm.lists.<a href="./src/resources/crm/lists.ts">getMembershipsJoinOrder</a>(listID, { ...params }) -> JoinTimeAndRecordIDsPage</code>
- <code title="get /crm/lists/2026-03/records/{objectTypeId}/{recordId}/memberships">client.crm.lists.<a href="./src/resources/crm/lists.ts">getRecordMemberships</a>(recordID, { ...params }) -> APICollectionResponseRecordListMembership</code>
- <code title="get /crm/lists/2026-03/{listId}/schedule-conversion">client.crm.lists.<a href="./src/resources/crm/lists.ts">getScheduleConversion</a>(listID) -> PublicListConversionResponse</code>
- <code title="get /crm/lists/2026-03/{listId}/size-and-edits-history/between">client.crm.lists.<a href="./src/resources/crm/lists.ts">getSizeAndEditsHistoryBetween</a>(listID, { ...params }) -> ListSizeAndEditHistoryResponse</code>
- <code title="post /crm/lists/2026-03/search">client.crm.lists.<a href="./src/resources/crm/lists.ts">listBySearch</a>({ ...params }) -> ListSearchResponse</code>
- <code title="get /crm/lists/2026-03/folders">client.crm.lists.<a href="./src/resources/crm/lists.ts">listFolders</a>({ ...params }) -> ListFolderFetchResponse</code>
- <code title="get /crm/lists/2026-03/{listId}/memberships">client.crm.lists.<a href="./src/resources/crm/lists.ts">listMemberships</a>(listID, { ...params }) -> JoinTimeAndRecordIDsPage</code>
- <code title="put /crm/lists/2026-03/folders/{folderId}/move/{newParentFolderId}">client.crm.lists.<a href="./src/resources/crm/lists.ts">moveFolder</a>(newParentFolderID, { ...params }) -> ListFolderFetchResponse</code>
- <code title="put /crm/lists/2026-03/folders/move-list">client.crm.lists.<a href="./src/resources/crm/lists.ts">moveList</a>({ ...params }) -> void</code>
- <code title="put /crm/lists/2026-03/{listId}/memberships/remove">client.crm.lists.<a href="./src/resources/crm/lists.ts">removeMemberships</a>(listID, [ ...body ]) -> MembershipsUpdateResponse</code>
- <code title="put /crm/lists/2026-03/folders/{folderId}/rename">client.crm.lists.<a href="./src/resources/crm/lists.ts">renameFolder</a>(folderID, { ...params }) -> ListFolderFetchResponse</code>
- <code title="put /crm/lists/2026-03/{listId}/restore">client.crm.lists.<a href="./src/resources/crm/lists.ts">restore</a>(listID) -> void</code>
- <code title="delete /crm/lists/2026-03/{listId}/schedule-conversion">client.crm.lists.<a href="./src/resources/crm/lists.ts">scheduleConversion</a>(listID) -> void</code>
- <code title="put /crm/lists/2026-03/{listId}/update-list-filters">client.crm.lists.<a href="./src/resources/crm/lists.ts">updateListFilters</a>(listID, { ...params }) -> ListUpdateResponse</code>
- <code title="put /crm/lists/2026-03/{listId}/update-list-name">client.crm.lists.<a href="./src/resources/crm/lists.ts">updateListName</a>(listID, { ...params }) -> ListUpdateResponse</code>
- <code title="put /crm/lists/2026-03/{listId}/schedule-conversion">client.crm.lists.<a href="./src/resources/crm/lists.ts">updateScheduleConversion</a>(listID, { ...params }) -> PublicListConversionResponse</code>

## ObjectLibrary

### Enablement

Types:

- <code><a href="./src/resources/crm/object-library/enablement.ts">ObjectTypeEnablementPublicResponse</a></code>
- <code><a href="./src/resources/crm/object-library/enablement.ts">PortalObjectTypeEnablementPublicResponse</a></code>

Methods:

- <code title="get /crm/object-library/2026-03/enablement">client.crm.objectLibrary.enablement.<a href="./src/resources/crm/object-library/enablement.ts">getAll</a>() -> PortalObjectTypeEnablementPublicResponse</code>
- <code title="get /crm/object-library/2026-03/enablement/{objectTypeId}">client.crm.objectLibrary.enablement.<a href="./src/resources/crm/object-library/enablement.ts">getByObjectTypeID</a>(objectTypeID) -> ObjectTypeEnablementPublicResponse</code>

## ObjectSchemas

Types:

- <code><a href="./src/resources/crm/object-schemas/object-schemas.ts">CollectionResponseObjectSchemaNoPaging</a></code>
- <code><a href="./src/resources/crm/object-schemas/object-schemas.ts">ObjectSchema</a></code>
- <code><a href="./src/resources/crm/object-schemas/object-schemas.ts">ObjectSchemaBatchReadRequest</a></code>
- <code><a href="./src/resources/crm/object-schemas/object-schemas.ts">ObjectSchemaEgg</a></code>
- <code><a href="./src/resources/crm/object-schemas/object-schemas.ts">ObjectTypePropertyCreate</a></code>

Methods:

- <code title="post /crm-object-schemas/2026-03/schemas">client.crm.objectSchemas.<a href="./src/resources/crm/object-schemas/object-schemas.ts">create</a>({ ...params }) -> ObjectSchema</code>
- <code title="patch /crm-object-schemas/2026-03/schemas/{objectType}">client.crm.objectSchemas.<a href="./src/resources/crm/object-schemas/object-schemas.ts">update</a>(objectType, { ...params }) -> ObjectTypeDefinition</code>
- <code title="get /crm-object-schemas/2026-03/schemas">client.crm.objectSchemas.<a href="./src/resources/crm/object-schemas/object-schemas.ts">list</a>({ ...params }) -> CollectionResponseObjectSchemaNoPaging</code>
- <code title="delete /crm-object-schemas/2026-03/schemas/{objectType}">client.crm.objectSchemas.<a href="./src/resources/crm/object-schemas/object-schemas.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm-object-schemas/2026-03/schemas/{objectType}/associations">client.crm.objectSchemas.<a href="./src/resources/crm/object-schemas/object-schemas.ts">createAssociation</a>(objectType, { ...params }) -> AssociationDefinition</code>
- <code title="delete /crm-object-schemas/2026-03/schemas/{objectType}/associations/{associationIdentifier}">client.crm.objectSchemas.<a href="./src/resources/crm/object-schemas/object-schemas.ts">deleteAssociation</a>(associationIdentifier, { ...params }) -> void</code>
- <code title="get /crm-object-schemas/2026-03/schemas/{objectType}">client.crm.objectSchemas.<a href="./src/resources/crm/object-schemas/object-schemas.ts">get</a>(objectType, { ...params }) -> ObjectSchema</code>

### Batch

Methods:

- <code title="post /crm-object-schemas/2026-03/schemas/batch/read">client.crm.objectSchemas.batch.<a href="./src/resources/crm/object-schemas/batch.ts">get</a>({ ...params }) -> CollectionResponseObjectSchemaNoPaging</code>

## Objects

Types:

- <code><a href="./src/resources/crm/objects/objects.ts">AssociatedID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchReadInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchResponseSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchResponseSimplePublicObjectWithErrors</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchResponseSimplePublicUpsertObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchResponseSimplePublicUpsertObjectWithErrors</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CollectionResponseAssociatedID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CollectionResponseSimplePublicObjectWithAssociationsForwardPaging</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicAssociationsForObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicMergeInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectWithAssociations</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicUpsertObject</a></code>

### Calls

Methods:

- <code title="post /crm/objects/2026-03/calls">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/calls/{callId}">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">update</a>(callID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/calls">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/calls/{callId}">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">delete</a>(callID) -> void</code>
- <code title="get /crm/objects/2026-03/calls/{callId}">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">get</a>(callID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/calls/search">client.crm.objects.calls.<a href="./src/resources/crm/objects/calls/calls.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/calls/batch/create">client.crm.objects.calls.batch.<a href="./src/resources/crm/objects/calls/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/calls/batch/update">client.crm.objects.calls.batch.<a href="./src/resources/crm/objects/calls/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/calls/batch/archive">client.crm.objects.calls.batch.<a href="./src/resources/crm/objects/calls/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/calls/batch/read">client.crm.objects.calls.batch.<a href="./src/resources/crm/objects/calls/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/calls/batch/upsert">client.crm.objects.calls.batch.<a href="./src/resources/crm/objects/calls/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Carts

Methods:

- <code title="post /crm/objects/2026-03/carts">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/carts/{cartId}">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">update</a>(cartID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/carts">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/carts/{cartId}">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">delete</a>(cartID) -> void</code>
- <code title="get /crm/objects/2026-03/carts/{cartId}">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">get</a>(cartID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/carts/search">client.crm.objects.carts.<a href="./src/resources/crm/objects/carts/carts.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/carts/batch/create">client.crm.objects.carts.batch.<a href="./src/resources/crm/objects/carts/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/carts/batch/update">client.crm.objects.carts.batch.<a href="./src/resources/crm/objects/carts/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/carts/batch/archive">client.crm.objects.carts.batch.<a href="./src/resources/crm/objects/carts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/carts/batch/read">client.crm.objects.carts.batch.<a href="./src/resources/crm/objects/carts/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/carts/batch/upsert">client.crm.objects.carts.batch.<a href="./src/resources/crm/objects/carts/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### CommercePayments

Methods:

- <code title="post /crm/objects/2026-03/commerce_payments">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/commerce_payments/{commercePaymentId}">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">update</a>(commercePaymentID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/commerce_payments">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/commerce_payments/{commercePaymentId}">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">delete</a>(commercePaymentID) -> void</code>
- <code title="get /crm/objects/2026-03/commerce_payments/{commercePaymentId}">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">get</a>(commercePaymentID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/commerce_payments/search">client.crm.objects.commercePayments.<a href="./src/resources/crm/objects/commerce-payments/commerce-payments.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/commerce_payments/batch/create">client.crm.objects.commercePayments.batch.<a href="./src/resources/crm/objects/commerce-payments/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/commerce_payments/batch/update">client.crm.objects.commercePayments.batch.<a href="./src/resources/crm/objects/commerce-payments/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/commerce_payments/batch/archive">client.crm.objects.commercePayments.batch.<a href="./src/resources/crm/objects/commerce-payments/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/commerce_payments/batch/read">client.crm.objects.commercePayments.batch.<a href="./src/resources/crm/objects/commerce-payments/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/commerce_payments/batch/upsert">client.crm.objects.commercePayments.batch.<a href="./src/resources/crm/objects/commerce-payments/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Communications

Methods:

- <code title="post /crm/objects/2026-03/communications">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/communications/{communicationId}">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">update</a>(communicationID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/communications">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/communications/{communicationId}">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">delete</a>(communicationID) -> void</code>
- <code title="get /crm/objects/2026-03/communications/{communicationId}">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">get</a>(communicationID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/communications/search">client.crm.objects.communications.<a href="./src/resources/crm/objects/communications/communications.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/communications/batch/create">client.crm.objects.communications.batch.<a href="./src/resources/crm/objects/communications/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/communications/batch/update">client.crm.objects.communications.batch.<a href="./src/resources/crm/objects/communications/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/communications/batch/archive">client.crm.objects.communications.batch.<a href="./src/resources/crm/objects/communications/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/communications/batch/read">client.crm.objects.communications.batch.<a href="./src/resources/crm/objects/communications/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/communications/batch/upsert">client.crm.objects.communications.batch.<a href="./src/resources/crm/objects/communications/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Companies

Methods:

- <code title="post /crm/objects/2026-03/companies">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/companies/{companyId}">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">update</a>(companyID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/companies">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/companies/{companyId}">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">delete</a>(companyID) -> void</code>
- <code title="get /crm/objects/2026-03/companies/{companyId}">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">get</a>(companyID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/companies/merge">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/objects/2026-03/companies/search">client.crm.objects.companies.<a href="./src/resources/crm/objects/companies/companies.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/companies/batch/create">client.crm.objects.companies.batch.<a href="./src/resources/crm/objects/companies/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/companies/batch/update">client.crm.objects.companies.batch.<a href="./src/resources/crm/objects/companies/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/companies/batch/archive">client.crm.objects.companies.batch.<a href="./src/resources/crm/objects/companies/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/companies/batch/read">client.crm.objects.companies.batch.<a href="./src/resources/crm/objects/companies/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/companies/batch/upsert">client.crm.objects.companies.batch.<a href="./src/resources/crm/objects/companies/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Contacts

Types:

- <code><a href="./src/resources/crm/objects/contacts/contacts.ts">PublicGdprDeleteInput</a></code>

Methods:

- <code title="post /crm/objects/2026-03/contacts">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/contacts/{contactId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">update</a>(contactID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/contacts">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/contacts/{contactId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">delete</a>(contactID) -> void</code>
- <code title="post /crm/objects/2026-03/contacts/gdpr-delete">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">gdprDelete</a>({ ...params }) -> void</code>
- <code title="get /crm/objects/2026-03/contacts/{contactId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">get</a>(contactID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/contacts/merge">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/objects/2026-03/contacts/search">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts/contacts.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/contacts/batch/create">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/contacts/batch/update">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/contacts/batch/archive">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/contacts/batch/read">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/contacts/batch/upsert">client.crm.objects.contacts.batch.<a href="./src/resources/crm/objects/contacts/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Contracts

Methods:

- <code title="post /crm/objects/2026-03/contracts">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/contracts/{contractId}">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">update</a>(contractID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/contracts">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/contracts/{contractId}">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">delete</a>(contractID) -> void</code>
- <code title="get /crm/objects/2026-03/contracts/{contractId}">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">get</a>(contractID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/contracts/search">client.crm.objects.contracts.<a href="./src/resources/crm/objects/contracts/contracts.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/contracts/batch/create">client.crm.objects.contracts.batch.<a href="./src/resources/crm/objects/contracts/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/contracts/batch/update">client.crm.objects.contracts.batch.<a href="./src/resources/crm/objects/contracts/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/contracts/batch/archive">client.crm.objects.contracts.batch.<a href="./src/resources/crm/objects/contracts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/contracts/batch/read">client.crm.objects.contracts.batch.<a href="./src/resources/crm/objects/contracts/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/contracts/batch/upsert">client.crm.objects.contracts.batch.<a href="./src/resources/crm/objects/contracts/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Courses

Methods:

- <code title="post /crm/objects/2026-03/0-410">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/0-410/{courseId}">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">update</a>(courseID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/0-410">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/0-410/{courseId}">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">delete</a>(courseID) -> void</code>
- <code title="get /crm/objects/2026-03/0-410/{courseId}">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">get</a>(courseID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/0-410/search">client.crm.objects.courses.<a href="./src/resources/crm/objects/courses/courses.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/0-410/batch/create">client.crm.objects.courses.batch.<a href="./src/resources/crm/objects/courses/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-410/batch/update">client.crm.objects.courses.batch.<a href="./src/resources/crm/objects/courses/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-410/batch/archive">client.crm.objects.courses.batch.<a href="./src/resources/crm/objects/courses/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/0-410/batch/read">client.crm.objects.courses.batch.<a href="./src/resources/crm/objects/courses/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-410/batch/upsert">client.crm.objects.courses.batch.<a href="./src/resources/crm/objects/courses/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Custom

Methods:

- <code title="post /crm/objects/2026-03/{objectType}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">create</a>(objectType, { ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/{objectType}/{objectId}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">update</a>(objectID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/{objectType}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">list</a>(objectType, { ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/{objectType}/{objectId}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="get /crm/objects/2026-03/{objectType}/{objectId}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">get</a>(objectID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/{objectType}/merge">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">merge</a>(objectType, { ...params }) -> SimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/search">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom/custom.ts">search</a>(objectType, { ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/{objectType}/batch/create">client.crm.objects.custom.batch.<a href="./src/resources/crm/objects/custom/batch.ts">create</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/update">client.crm.objects.custom.batch.<a href="./src/resources/crm/objects/custom/batch.ts">update</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/archive">client.crm.objects.custom.batch.<a href="./src/resources/crm/objects/custom/batch.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/read">client.crm.objects.custom.batch.<a href="./src/resources/crm/objects/custom/batch.ts">get</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/upsert">client.crm.objects.custom.batch.<a href="./src/resources/crm/objects/custom/batch.ts">upsert</a>(objectType, { ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Deals

Methods:

- <code title="post /crm/objects/2026-03/0-3">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">update</a>(dealID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/0-3">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">delete</a>(dealID) -> void</code>
- <code title="get /crm/objects/2026-03/0-3/{dealId}">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">get</a>(dealID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/0-3/merge">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-3/search">client.crm.objects.deals.<a href="./src/resources/crm/objects/deals/deals.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/0-3/batch/create">client.crm.objects.deals.batch.<a href="./src/resources/crm/objects/deals/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-3/batch/update">client.crm.objects.deals.batch.<a href="./src/resources/crm/objects/deals/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-3/batch/archive">client.crm.objects.deals.batch.<a href="./src/resources/crm/objects/deals/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/0-3/batch/read">client.crm.objects.deals.batch.<a href="./src/resources/crm/objects/deals/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-3/batch/upsert">client.crm.objects.deals.batch.<a href="./src/resources/crm/objects/deals/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Discounts

Methods:

- <code title="post /crm/objects/2026-03/discounts">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/discounts/{discountId}">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">update</a>(discountID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/discounts">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/discounts/{discountId}">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">delete</a>(discountID) -> void</code>
- <code title="get /crm/objects/2026-03/discounts/{discountId}">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">get</a>(discountID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/discounts/search">client.crm.objects.discounts.<a href="./src/resources/crm/objects/discounts/discounts.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/discounts/batch/create">client.crm.objects.discounts.batch.<a href="./src/resources/crm/objects/discounts/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/discounts/batch/update">client.crm.objects.discounts.batch.<a href="./src/resources/crm/objects/discounts/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/discounts/batch/archive">client.crm.objects.discounts.batch.<a href="./src/resources/crm/objects/discounts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/discounts/batch/read">client.crm.objects.discounts.batch.<a href="./src/resources/crm/objects/discounts/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/discounts/batch/upsert">client.crm.objects.discounts.batch.<a href="./src/resources/crm/objects/discounts/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Emails

Methods:

- <code title="post /crm/objects/2026-03/emails">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/emails/{emailId}">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">update</a>(emailID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/emails">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/emails/{emailId}">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">delete</a>(emailID) -> void</code>
- <code title="get /crm/objects/2026-03/emails/{emailId}">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">get</a>(emailID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/emails/search">client.crm.objects.emails.<a href="./src/resources/crm/objects/emails/emails.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/emails/batch/create">client.crm.objects.emails.batch.<a href="./src/resources/crm/objects/emails/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/emails/batch/update">client.crm.objects.emails.batch.<a href="./src/resources/crm/objects/emails/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/emails/batch/archive">client.crm.objects.emails.batch.<a href="./src/resources/crm/objects/emails/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/emails/batch/read">client.crm.objects.emails.batch.<a href="./src/resources/crm/objects/emails/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/emails/batch/upsert">client.crm.objects.emails.batch.<a href="./src/resources/crm/objects/emails/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### FeedbackSubmissions

Methods:

- <code title="get /crm/objects/2026-03/feedback_submissions">client.crm.objects.feedbackSubmissions.<a href="./src/resources/crm/objects/feedback-submissions/feedback-submissions.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="get /crm/objects/2026-03/feedback_submissions/{feedbackSubmissionId}">client.crm.objects.feedbackSubmissions.<a href="./src/resources/crm/objects/feedback-submissions/feedback-submissions.ts">get</a>(feedbackSubmissionID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/feedback_submissions/search">client.crm.objects.feedbackSubmissions.<a href="./src/resources/crm/objects/feedback-submissions/feedback-submissions.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/feedback_submissions/batch/read">client.crm.objects.feedbackSubmissions.batch.<a href="./src/resources/crm/objects/feedback-submissions/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>

### Fees

Methods:

- <code title="post /crm/objects/2026-03/fees">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/fees/{feeId}">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">update</a>(feeID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/fees">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/fees/{feeId}">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">delete</a>(feeID) -> void</code>
- <code title="get /crm/objects/2026-03/fees/{feeId}">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">get</a>(feeID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/fees/search">client.crm.objects.fees.<a href="./src/resources/crm/objects/fees/fees.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/fees/batch/create">client.crm.objects.fees.batch.<a href="./src/resources/crm/objects/fees/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/fees/batch/update">client.crm.objects.fees.batch.<a href="./src/resources/crm/objects/fees/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/fees/batch/archive">client.crm.objects.fees.batch.<a href="./src/resources/crm/objects/fees/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/fees/batch/read">client.crm.objects.fees.batch.<a href="./src/resources/crm/objects/fees/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/fees/batch/upsert">client.crm.objects.fees.batch.<a href="./src/resources/crm/objects/fees/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### GoalTargets

Methods:

- <code title="post /crm/objects/2026-03/goal_targets">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/goal_targets/{goalTargetId}">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">update</a>(goalTargetID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/goal_targets">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/goal_targets/{goalTargetId}">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">delete</a>(goalTargetID) -> void</code>
- <code title="get /crm/objects/2026-03/goal_targets/{goalTargetId}">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">get</a>(goalTargetID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/goal_targets/search">client.crm.objects.goalTargets.<a href="./src/resources/crm/objects/goal-targets/goal-targets.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/goal_targets/batch/create">client.crm.objects.goalTargets.batch.<a href="./src/resources/crm/objects/goal-targets/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/goal_targets/batch/update">client.crm.objects.goalTargets.batch.<a href="./src/resources/crm/objects/goal-targets/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/goal_targets/batch/archive">client.crm.objects.goalTargets.batch.<a href="./src/resources/crm/objects/goal-targets/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/goal_targets/batch/read">client.crm.objects.goalTargets.batch.<a href="./src/resources/crm/objects/goal-targets/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/goal_targets/batch/upsert">client.crm.objects.goalTargets.batch.<a href="./src/resources/crm/objects/goal-targets/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Invoices

Methods:

- <code title="post /crm/objects/2026-03/invoices">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/invoices/{invoiceId}">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">update</a>(invoiceID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/invoices">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/invoices/{invoiceId}">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">delete</a>(invoiceID) -> void</code>
- <code title="get /crm/objects/2026-03/invoices/{invoiceId}">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">get</a>(invoiceID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/invoices/search">client.crm.objects.invoices.<a href="./src/resources/crm/objects/invoices/invoices.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/invoices/batch/create">client.crm.objects.invoices.batch.<a href="./src/resources/crm/objects/invoices/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/invoices/batch/update">client.crm.objects.invoices.batch.<a href="./src/resources/crm/objects/invoices/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/invoices/batch/archive">client.crm.objects.invoices.batch.<a href="./src/resources/crm/objects/invoices/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/invoices/batch/read">client.crm.objects.invoices.batch.<a href="./src/resources/crm/objects/invoices/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/invoices/batch/upsert">client.crm.objects.invoices.batch.<a href="./src/resources/crm/objects/invoices/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Leads

Methods:

- <code title="post /crm/objects/2026-03/leads">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/leads/{leadsId}">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">update</a>(leadsID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/leads">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/leads/{leadsId}">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">delete</a>(leadsID) -> void</code>
- <code title="get /crm/objects/2026-03/leads/{leadsId}">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">get</a>(leadsID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/leads/search">client.crm.objects.leads.<a href="./src/resources/crm/objects/leads/leads.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/leads/batch/create">client.crm.objects.leads.batch.<a href="./src/resources/crm/objects/leads/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/leads/batch/update">client.crm.objects.leads.batch.<a href="./src/resources/crm/objects/leads/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/leads/batch/archive">client.crm.objects.leads.batch.<a href="./src/resources/crm/objects/leads/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/leads/batch/read">client.crm.objects.leads.batch.<a href="./src/resources/crm/objects/leads/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/leads/batch/upsert">client.crm.objects.leads.batch.<a href="./src/resources/crm/objects/leads/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### LineItems

Methods:

- <code title="post /crm/objects/2026-03/line_items">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/line_items/{lineItemId}">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">update</a>(lineItemID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/line_items">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/line_items/{lineItemId}">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">delete</a>(lineItemID) -> void</code>
- <code title="get /crm/objects/2026-03/line_items/{lineItemId}">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">get</a>(lineItemID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/line_items/search">client.crm.objects.lineItems.<a href="./src/resources/crm/objects/line-items/line-items.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/line_items/batch/create">client.crm.objects.lineItems.batch.<a href="./src/resources/crm/objects/line-items/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/line_items/batch/update">client.crm.objects.lineItems.batch.<a href="./src/resources/crm/objects/line-items/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/line_items/batch/archive">client.crm.objects.lineItems.batch.<a href="./src/resources/crm/objects/line-items/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/line_items/batch/read">client.crm.objects.lineItems.batch.<a href="./src/resources/crm/objects/line-items/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/line_items/batch/upsert">client.crm.objects.lineItems.batch.<a href="./src/resources/crm/objects/line-items/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Listings

Methods:

- <code title="post /crm/objects/2026-03/0-420">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/0-420/{listingId}">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">update</a>(listingID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/0-420">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/0-420/{listingId}">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">delete</a>(listingID) -> void</code>
- <code title="get /crm/objects/2026-03/0-420/{listingId}">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">get</a>(listingID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/0-420/search">client.crm.objects.listings.<a href="./src/resources/crm/objects/listings/listings.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/0-420/batch/create">client.crm.objects.listings.batch.<a href="./src/resources/crm/objects/listings/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-420/batch/update">client.crm.objects.listings.batch.<a href="./src/resources/crm/objects/listings/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-420/batch/archive">client.crm.objects.listings.batch.<a href="./src/resources/crm/objects/listings/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/0-420/batch/read">client.crm.objects.listings.batch.<a href="./src/resources/crm/objects/listings/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-420/batch/upsert">client.crm.objects.listings.batch.<a href="./src/resources/crm/objects/listings/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Meetings

Methods:

- <code title="post /crm/objects/2026-03/meetings">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/meetings/{meetingId}">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">update</a>(meetingID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/meetings">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/meetings/{meetingId}">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">delete</a>(meetingID) -> void</code>
- <code title="get /crm/objects/2026-03/meetings/{meetingId}">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">get</a>(meetingID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/meetings/search">client.crm.objects.meetings.<a href="./src/resources/crm/objects/meetings/meetings.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/meetings/batch/create">client.crm.objects.meetings.batch.<a href="./src/resources/crm/objects/meetings/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/meetings/batch/update">client.crm.objects.meetings.batch.<a href="./src/resources/crm/objects/meetings/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/meetings/batch/archive">client.crm.objects.meetings.batch.<a href="./src/resources/crm/objects/meetings/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/meetings/batch/read">client.crm.objects.meetings.batch.<a href="./src/resources/crm/objects/meetings/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/meetings/batch/upsert">client.crm.objects.meetings.batch.<a href="./src/resources/crm/objects/meetings/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Notes

Methods:

- <code title="post /crm/objects/2026-03/notes">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/notes/{noteId}">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">update</a>(noteID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/notes">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/notes/{noteId}">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">delete</a>(noteID) -> void</code>
- <code title="get /crm/objects/2026-03/notes/{noteId}">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">get</a>(noteID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/notes/search">client.crm.objects.notes.<a href="./src/resources/crm/objects/notes/notes.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/notes/batch/create">client.crm.objects.notes.batch.<a href="./src/resources/crm/objects/notes/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/notes/batch/update">client.crm.objects.notes.batch.<a href="./src/resources/crm/objects/notes/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/notes/batch/archive">client.crm.objects.notes.batch.<a href="./src/resources/crm/objects/notes/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/notes/batch/read">client.crm.objects.notes.batch.<a href="./src/resources/crm/objects/notes/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/notes/batch/upsert">client.crm.objects.notes.batch.<a href="./src/resources/crm/objects/notes/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### GenericObjects

Methods:

- <code title="post /crm/objects/2026-03/{objectType}">client.crm.objects.genericObjects.<a href="./src/resources/crm/objects/generic-objects/generic-objects.ts">create</a>(objectType, { ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/{objectType}/{objectId}">client.crm.objects.genericObjects.<a href="./src/resources/crm/objects/generic-objects/generic-objects.ts">update</a>(objectID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/{objectType}">client.crm.objects.genericObjects.<a href="./src/resources/crm/objects/generic-objects/generic-objects.ts">list</a>(objectType, { ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/{objectType}/{objectId}">client.crm.objects.genericObjects.<a href="./src/resources/crm/objects/generic-objects/generic-objects.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="get /crm/objects/2026-03/{objectType}/{objectId}">client.crm.objects.genericObjects.<a href="./src/resources/crm/objects/generic-objects/generic-objects.ts">get</a>(objectID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/{objectType}/search">client.crm.objects.genericObjects.<a href="./src/resources/crm/objects/generic-objects/generic-objects.ts">search</a>(objectType, { ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/{objectType}/batch/create">client.crm.objects.genericObjects.batch.<a href="./src/resources/crm/objects/generic-objects/batch.ts">create</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/update">client.crm.objects.genericObjects.batch.<a href="./src/resources/crm/objects/generic-objects/batch.ts">update</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/archive">client.crm.objects.genericObjects.batch.<a href="./src/resources/crm/objects/generic-objects/batch.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/read">client.crm.objects.genericObjects.batch.<a href="./src/resources/crm/objects/generic-objects/batch.ts">get</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/upsert">client.crm.objects.genericObjects.batch.<a href="./src/resources/crm/objects/generic-objects/batch.ts">upsert</a>(objectType, { ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Orders

Methods:

- <code title="post /crm/objects/2026-03/orders">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/orders/{orderId}">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">update</a>(orderID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/orders">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/orders/{orderId}">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">delete</a>(orderID) -> void</code>
- <code title="get /crm/objects/2026-03/orders/{orderId}">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">get</a>(orderID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/orders/search">client.crm.objects.orders.<a href="./src/resources/crm/objects/orders/orders.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/orders/batch/create">client.crm.objects.orders.batch.<a href="./src/resources/crm/objects/orders/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/orders/batch/update">client.crm.objects.orders.batch.<a href="./src/resources/crm/objects/orders/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/orders/batch/archive">client.crm.objects.orders.batch.<a href="./src/resources/crm/objects/orders/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/orders/batch/read">client.crm.objects.orders.batch.<a href="./src/resources/crm/objects/orders/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/orders/batch/upsert">client.crm.objects.orders.batch.<a href="./src/resources/crm/objects/orders/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### PartnerClients

Methods:

- <code title="patch /crm/objects/2026-03/partner_clients/{partnerClientId}">client.crm.objects.partnerClients.<a href="./src/resources/crm/objects/partner-clients/partner-clients.ts">update</a>(partnerClientID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/partner_clients">client.crm.objects.partnerClients.<a href="./src/resources/crm/objects/partner-clients/partner-clients.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="get /crm/objects/2026-03/partner_clients/{partnerClientId}">client.crm.objects.partnerClients.<a href="./src/resources/crm/objects/partner-clients/partner-clients.ts">get</a>(partnerClientID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="get /crm/objects/2026-03/partner_clients/{partnerClientId}/associations/{toObjectType}">client.crm.objects.partnerClients.<a href="./src/resources/crm/objects/partner-clients/partner-clients.ts">listAssociations</a>(toObjectType, { ...params }) -> MultiAssociatedObjectWithLabelsPage</code>
- <code title="post /crm/objects/2026-03/partner_clients/search">client.crm.objects.partnerClients.<a href="./src/resources/crm/objects/partner-clients/partner-clients.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/partner_clients/batch/update">client.crm.objects.partnerClients.batch.<a href="./src/resources/crm/objects/partner-clients/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="put /crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">client.crm.objects.partnerClients.batch.<a href="./src/resources/crm/objects/partner-clients/batch.ts">createDefaultAssociation</a>(toObjectID, { ...params }) -> BatchResponsePublicDefaultAssociation</code>
- <code title="post /crm/objects/2026-03/partner_clients/batch/read">client.crm.objects.partnerClients.batch.<a href="./src/resources/crm/objects/partner-clients/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>

### PartnerServices

Methods:

- <code title="patch /crm/objects/2026-03/partner_services/{partnerServiceId}">client.crm.objects.partnerServices.<a href="./src/resources/crm/objects/partner-services/partner-services.ts">update</a>(partnerServiceID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/partner_services/{partnerServiceId}/associations/{toObjectType}">client.crm.objects.partnerServices.<a href="./src/resources/crm/objects/partner-services/partner-services.ts">list</a>(toObjectType, { ...params }) -> MultiAssociatedObjectWithLabelsPage</code>
- <code title="get /crm/objects/2026-03/partner_services/{partnerServiceId}">client.crm.objects.partnerServices.<a href="./src/resources/crm/objects/partner-services/partner-services.ts">get</a>(partnerServiceID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/partner_services/search">client.crm.objects.partnerServices.<a href="./src/resources/crm/objects/partner-services/partner-services.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/partner_services/batch/update">client.crm.objects.partnerServices.batch.<a href="./src/resources/crm/objects/partner-services/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/partner_services/batch/read">client.crm.objects.partnerServices.batch.<a href="./src/resources/crm/objects/partner-services/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>

### PostalMail

Methods:

- <code title="post /crm/objects/2026-03/postal_mail">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/postal_mail/{postalMailId}">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">update</a>(postalMailID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/postal_mail">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/postal_mail/{postalMailId}">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">delete</a>(postalMailID) -> void</code>
- <code title="get /crm/objects/2026-03/postal_mail/{postalMailId}">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">get</a>(postalMailID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/postal_mail/search">client.crm.objects.postalMail.<a href="./src/resources/crm/objects/postal-mail/postal-mail.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/postal_mail/batch/create">client.crm.objects.postalMail.batch.<a href="./src/resources/crm/objects/postal-mail/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/postal_mail/batch/update">client.crm.objects.postalMail.batch.<a href="./src/resources/crm/objects/postal-mail/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/postal_mail/batch/archive">client.crm.objects.postalMail.batch.<a href="./src/resources/crm/objects/postal-mail/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/postal_mail/batch/read">client.crm.objects.postalMail.batch.<a href="./src/resources/crm/objects/postal-mail/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/postal_mail/batch/upsert">client.crm.objects.postalMail.batch.<a href="./src/resources/crm/objects/postal-mail/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Products

Methods:

- <code title="post /crm/objects/2026-03/products">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/products/{productId}">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">update</a>(productID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/products">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/products/{productId}">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">delete</a>(productID) -> void</code>
- <code title="get /crm/objects/2026-03/products/{productId}">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">get</a>(productID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/products/search">client.crm.objects.products.<a href="./src/resources/crm/objects/products/products.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/products/batch/create">client.crm.objects.products.batch.<a href="./src/resources/crm/objects/products/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/products/batch/update">client.crm.objects.products.batch.<a href="./src/resources/crm/objects/products/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/products/batch/archive">client.crm.objects.products.batch.<a href="./src/resources/crm/objects/products/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/products/batch/read">client.crm.objects.products.batch.<a href="./src/resources/crm/objects/products/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/products/batch/upsert">client.crm.objects.products.batch.<a href="./src/resources/crm/objects/products/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Projects

Methods:

- <code title="post /crm/objects/2026-03/projects">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/projects/{projectId}">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">update</a>(projectID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/projects">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/projects/{projectId}">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">delete</a>(projectID) -> void</code>
- <code title="get /crm/objects/2026-03/projects/{projectId}">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">get</a>(projectID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/projects/merge">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/objects/2026-03/projects/search">client.crm.objects.projects.<a href="./src/resources/crm/objects/projects/projects.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/projects/batch/create">client.crm.objects.projects.batch.<a href="./src/resources/crm/objects/projects/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/projects/batch/update">client.crm.objects.projects.batch.<a href="./src/resources/crm/objects/projects/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/projects/batch/archive">client.crm.objects.projects.batch.<a href="./src/resources/crm/objects/projects/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/projects/batch/read">client.crm.objects.projects.batch.<a href="./src/resources/crm/objects/projects/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/projects/batch/upsert">client.crm.objects.projects.batch.<a href="./src/resources/crm/objects/projects/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Quotes

Methods:

- <code title="post /crm/objects/2026-03/quotes">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/quotes/{quoteId}">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">update</a>(quoteID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/quotes">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/quotes/{quoteId}">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">delete</a>(quoteID) -> void</code>
- <code title="get /crm/objects/2026-03/quotes/{quoteId}">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">get</a>(quoteID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/quotes/search">client.crm.objects.quotes.<a href="./src/resources/crm/objects/quotes/quotes.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/quotes/batch/create">client.crm.objects.quotes.batch.<a href="./src/resources/crm/objects/quotes/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/quotes/batch/update">client.crm.objects.quotes.batch.<a href="./src/resources/crm/objects/quotes/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/quotes/batch/archive">client.crm.objects.quotes.batch.<a href="./src/resources/crm/objects/quotes/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/quotes/batch/read">client.crm.objects.quotes.batch.<a href="./src/resources/crm/objects/quotes/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/quotes/batch/upsert">client.crm.objects.quotes.batch.<a href="./src/resources/crm/objects/quotes/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Services

Methods:

- <code title="post /crm/objects/2026-03/0-162">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/0-162/{serviceId}">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">update</a>(serviceID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/0-162">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/0-162/{serviceId}">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">delete</a>(serviceID) -> void</code>
- <code title="get /crm/objects/2026-03/0-162/{serviceId}">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">get</a>(serviceID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/0-162/search">client.crm.objects.services.<a href="./src/resources/crm/objects/services/services.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/0-162/batch/create">client.crm.objects.services.batch.<a href="./src/resources/crm/objects/services/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-162/batch/update">client.crm.objects.services.batch.<a href="./src/resources/crm/objects/services/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-162/batch/archive">client.crm.objects.services.batch.<a href="./src/resources/crm/objects/services/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/0-162/batch/read">client.crm.objects.services.batch.<a href="./src/resources/crm/objects/services/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/0-162/batch/upsert">client.crm.objects.services.batch.<a href="./src/resources/crm/objects/services/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Subscriptions

Methods:

- <code title="post /crm/objects/2026-03/subscriptions">client.crm.objects.subscriptions.<a href="./src/resources/crm/objects/subscriptions/subscriptions.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/subscriptions/{subscriptionId}">client.crm.objects.subscriptions.<a href="./src/resources/crm/objects/subscriptions/subscriptions.ts">update</a>(subscriptionID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/subscriptions">client.crm.objects.subscriptions.<a href="./src/resources/crm/objects/subscriptions/subscriptions.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/subscriptions/{subscriptionId}">client.crm.objects.subscriptions.<a href="./src/resources/crm/objects/subscriptions/subscriptions.ts">delete</a>(subscriptionID) -> void</code>
- <code title="get /crm/objects/2026-03/subscriptions/{subscriptionId}">client.crm.objects.subscriptions.<a href="./src/resources/crm/objects/subscriptions/subscriptions.ts">get</a>(subscriptionID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/subscriptions/search">client.crm.objects.subscriptions.<a href="./src/resources/crm/objects/subscriptions/subscriptions.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/subscriptions/batch/create">client.crm.objects.subscriptions.batch.<a href="./src/resources/crm/objects/subscriptions/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/subscriptions/batch/update">client.crm.objects.subscriptions.batch.<a href="./src/resources/crm/objects/subscriptions/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/subscriptions/batch/archive">client.crm.objects.subscriptions.batch.<a href="./src/resources/crm/objects/subscriptions/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/subscriptions/batch/read">client.crm.objects.subscriptions.batch.<a href="./src/resources/crm/objects/subscriptions/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/subscriptions/batch/upsert">client.crm.objects.subscriptions.batch.<a href="./src/resources/crm/objects/subscriptions/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Tasks

Methods:

- <code title="post /crm/objects/2026-03/tasks">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/tasks/{taskId}">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">update</a>(taskID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/tasks">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/tasks/{taskId}">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">delete</a>(taskID) -> void</code>
- <code title="get /crm/objects/2026-03/tasks/{taskId}">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">get</a>(taskID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/tasks/search">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/tasks/batch/create">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/tasks/batch/update">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/tasks/batch/archive">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/tasks/batch/read">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/tasks/batch/upsert">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Taxes

Methods:

- <code title="post /crm/objects/2026-03/taxes">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/taxes/{taxId}">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">update</a>(taxID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/taxes">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/taxes/{taxId}">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">delete</a>(taxID) -> void</code>
- <code title="get /crm/objects/2026-03/taxes/{taxId}">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">get</a>(taxID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/taxes/search">client.crm.objects.taxes.<a href="./src/resources/crm/objects/taxes/taxes.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/taxes/batch/create">client.crm.objects.taxes.batch.<a href="./src/resources/crm/objects/taxes/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/taxes/batch/update">client.crm.objects.taxes.batch.<a href="./src/resources/crm/objects/taxes/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/taxes/batch/archive">client.crm.objects.taxes.batch.<a href="./src/resources/crm/objects/taxes/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/taxes/batch/read">client.crm.objects.taxes.batch.<a href="./src/resources/crm/objects/taxes/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/taxes/batch/upsert">client.crm.objects.taxes.batch.<a href="./src/resources/crm/objects/taxes/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Tickets

Methods:

- <code title="post /crm/objects/2026-03/tickets">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/tickets/{ticketId}">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">update</a>(ticketID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/tickets">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/tickets/{ticketId}">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">delete</a>(ticketID) -> void</code>
- <code title="get /crm/objects/2026-03/tickets/{ticketId}">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">get</a>(ticketID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/tickets/merge">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">merge</a>({ ...params }) -> SimplePublicObject</code>
- <code title="post /crm/objects/2026-03/tickets/search">client.crm.objects.tickets.<a href="./src/resources/crm/objects/tickets/tickets.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/tickets/batch/create">client.crm.objects.tickets.batch.<a href="./src/resources/crm/objects/tickets/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/tickets/batch/update">client.crm.objects.tickets.batch.<a href="./src/resources/crm/objects/tickets/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/tickets/batch/archive">client.crm.objects.tickets.batch.<a href="./src/resources/crm/objects/tickets/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/tickets/batch/read">client.crm.objects.tickets.batch.<a href="./src/resources/crm/objects/tickets/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/tickets/batch/upsert">client.crm.objects.tickets.batch.<a href="./src/resources/crm/objects/tickets/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Users

Methods:

- <code title="post /crm/objects/2026-03/users">client.crm.objects.users.<a href="./src/resources/crm/objects/users/users.ts">create</a>({ ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/users/{userId}">client.crm.objects.users.<a href="./src/resources/crm/objects/users/users.ts">update</a>(userID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/users">client.crm.objects.users.<a href="./src/resources/crm/objects/users/users.ts">list</a>({ ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/users/{userId}">client.crm.objects.users.<a href="./src/resources/crm/objects/users/users.ts">delete</a>(userID) -> void</code>
- <code title="get /crm/objects/2026-03/users/{userId}">client.crm.objects.users.<a href="./src/resources/crm/objects/users/users.ts">get</a>(userID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/users/search">client.crm.objects.users.<a href="./src/resources/crm/objects/users/users.ts">search</a>({ ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/users/batch/create">client.crm.objects.users.batch.<a href="./src/resources/crm/objects/users/batch.ts">create</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/users/batch/update">client.crm.objects.users.batch.<a href="./src/resources/crm/objects/users/batch.ts">update</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/users/batch/archive">client.crm.objects.users.batch.<a href="./src/resources/crm/objects/users/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/users/batch/read">client.crm.objects.users.batch.<a href="./src/resources/crm/objects/users/batch.ts">get</a>({ ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/users/batch/upsert">client.crm.objects.users.batch.<a href="./src/resources/crm/objects/users/batch.ts">upsert</a>({ ...params }) -> BatchResponseSimplePublicUpsertObject</code>

## Owners

Types:

- <code><a href="./src/resources/crm/owners.ts">CollectionResponsePublicOwnerForwardPaging</a></code>
- <code><a href="./src/resources/crm/owners.ts">PublicOwner</a></code>
- <code><a href="./src/resources/crm/owners.ts">PublicTeam</a></code>

Methods:

- <code title="get /crm/owners/2026-03">client.crm.owners.<a href="./src/resources/crm/owners.ts">list</a>({ ...params }) -> PublicOwnersPage</code>
- <code title="get /crm/owners/2026-03/{ownerId}">client.crm.owners.<a href="./src/resources/crm/owners.ts">get</a>(ownerID, { ...params }) -> PublicOwner</code>

## Pipelines

Types:

- <code><a href="./src/resources/crm/pipelines.ts">CollectionResponsePipelineNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CollectionResponsePipelineStageNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">CollectionResponsePublicAuditInfoNoPaging</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">Pipeline</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelineInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelinePatchInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelineReplaceInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelineStage</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelineStageInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelineStagePatchInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PipelineStageReplaceInput</a></code>
- <code><a href="./src/resources/crm/pipelines.ts">PublicAuditInfo</a></code>

Methods:

- <code title="post /crm/pipelines/2026-03/{objectType}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">create</a>(objectType, { ...params }) -> Pipeline</code>
- <code title="patch /crm/pipelines/2026-03/{objectType}/{pipelineId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">update</a>(pipelineID, { ...params }) -> Pipeline</code>
- <code title="get /crm/pipelines/2026-03/{objectType}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">list</a>(objectType) -> CollectionResponsePipelineNoPaging</code>
- <code title="delete /crm/pipelines/2026-03/{objectType}/{pipelineId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">delete</a>(pipelineID, { ...params }) -> void</code>
- <code title="post /crm/pipelines/2026-03/{objectType}/{pipelineId}/stages">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">createStage</a>(pipelineID, { ...params }) -> PipelineStage</code>
- <code title="delete /crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">deleteStage</a>(stageID, { ...params }) -> void</code>
- <code title="get /crm/pipelines/2026-03/{objectType}/{pipelineId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">get</a>(pipelineID, { ...params }) -> Pipeline</code>
- <code title="get /crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">getStage</a>(stageID, { ...params }) -> PipelineStage</code>
- <code title="get /crm/pipelines/2026-03/{objectType}/{pipelineId}/audit">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">listAudit</a>(pipelineID, { ...params }) -> CollectionResponsePublicAuditInfoNoPaging</code>
- <code title="get /crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}/audit">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">listStageAudit</a>(stageID, { ...params }) -> CollectionResponsePublicAuditInfoNoPaging</code>
- <code title="get /crm/pipelines/2026-03/{objectType}/{pipelineId}/stages">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">listStages</a>(pipelineID, { ...params }) -> CollectionResponsePipelineStageNoPaging</code>
- <code title="put /crm/pipelines/2026-03/{objectType}/{pipelineId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">updateAllProperties</a>(pipelineID, { ...params }) -> Pipeline</code>
- <code title="patch /crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">updateStage</a>(stageID, { ...params }) -> PipelineStage</code>
- <code title="put /crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}">client.crm.pipelines.<a href="./src/resources/crm/pipelines.ts">updateStageAllProperties</a>(stageID, { ...params }) -> PipelineStage</code>

## Properties

Types:

- <code><a href="./src/resources/crm/properties/properties.ts">BatchInputPropertyCreate</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">BatchResponseProperty</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">BatchResponsePropertyWithErrors</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">CollectionResponsePropertyNoPaging</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">PropertyCreate</a></code>
- <code><a href="./src/resources/crm/properties/properties.ts">PropertyUpdate</a></code>

Methods:

- <code title="post /crm/properties/2026-03/{objectType}">client.crm.properties.<a href="./src/resources/crm/properties/properties.ts">create</a>(objectType, { ...params }) -> Property</code>
- <code title="patch /crm/properties/2026-03/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties/properties.ts">update</a>(propertyName, { ...params }) -> Property</code>
- <code title="get /crm/properties/2026-03/{objectType}">client.crm.properties.<a href="./src/resources/crm/properties/properties.ts">list</a>(objectType, { ...params }) -> CollectionResponsePropertyNoPaging</code>
- <code title="delete /crm/properties/2026-03/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties/properties.ts">delete</a>(propertyName, { ...params }) -> void</code>
- <code title="get /crm/properties/2026-03/{objectType}/{propertyName}">client.crm.properties.<a href="./src/resources/crm/properties/properties.ts">get</a>(propertyName, { ...params }) -> Property</code>

### Batch

Methods:

- <code title="post /crm/properties/2026-03/{objectType}/batch/create">client.crm.properties.batch.<a href="./src/resources/crm/properties/batch.ts">create</a>(objectType, { ...params }) -> BatchResponseProperty</code>
- <code title="post /crm/properties/2026-03/{objectType}/batch/archive">client.crm.properties.batch.<a href="./src/resources/crm/properties/batch.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm/properties/2026-03/{objectType}/batch/read">client.crm.properties.batch.<a href="./src/resources/crm/properties/batch.ts">get</a>(objectType, { ...params }) -> BatchResponseProperty</code>

### Groups

Methods:

- <code title="post /crm/properties/2026-03/{objectType}/groups">client.crm.properties.groups.<a href="./src/resources/crm/properties/groups.ts">create</a>(objectType, { ...params }) -> PropertyGroup</code>
- <code title="patch /crm/properties/2026-03/{objectType}/groups/{groupName}">client.crm.properties.groups.<a href="./src/resources/crm/properties/groups.ts">update</a>(groupName, { ...params }) -> PropertyGroup</code>
- <code title="get /crm/properties/2026-03/{objectType}/groups">client.crm.properties.groups.<a href="./src/resources/crm/properties/groups.ts">list</a>(objectType, { ...params }) -> CollectionResponsePropertyGroupNoPaging</code>
- <code title="delete /crm/properties/2026-03/{objectType}/groups/{groupName}">client.crm.properties.groups.<a href="./src/resources/crm/properties/groups.ts">delete</a>(groupName, { ...params }) -> void</code>
- <code title="get /crm/properties/2026-03/{objectType}/groups/{groupName}">client.crm.properties.groups.<a href="./src/resources/crm/properties/groups.ts">get</a>(groupName, { ...params }) -> PropertyGroup</code>

## PropertiesValidations

Types:

- <code><a href="./src/resources/crm/properties-validations.ts">CollectionResponsePublicPropertyValidationRuleMapNoPaging</a></code>
- <code><a href="./src/resources/crm/properties-validations.ts">CollectionResponsePublicPropertyValidationRuleNoPaging</a></code>
- <code><a href="./src/resources/crm/properties-validations.ts">PublicPropertyValidationRule</a></code>
- <code><a href="./src/resources/crm/properties-validations.ts">PublicPropertyValidationRuleMap</a></code>
- <code><a href="./src/resources/crm/properties-validations.ts">PublicPropertyValidationRuleUpdate</a></code>

Methods:

- <code title="get /crm/property-validations/2026-03/{objectTypeId}">client.crm.propertiesValidations.<a href="./src/resources/crm/properties-validations.ts">getByObjectTypeID</a>(objectTypeID) -> CollectionResponsePublicPropertyValidationRuleMapNoPaging</code>
- <code title="get /crm/property-validations/2026-03/{objectTypeId}/{propertyName}">client.crm.propertiesValidations.<a href="./src/resources/crm/properties-validations.ts">getByObjectTypeIDAndPropertyName</a>(propertyName, { ...params }) -> CollectionResponsePublicPropertyValidationRuleNoPaging</code>
- <code title="get /crm/property-validations/2026-03/{objectTypeId}/{propertyName}/rule-type/{ruleType}">client.crm.propertiesValidations.<a href="./src/resources/crm/properties-validations.ts">getByObjectTypeIDPropertyNameAndRuleType</a>(ruleType, { ...params }) -> PublicPropertyValidationRule</code>
- <code title="put /crm/property-validations/2026-03/{objectTypeId}/{propertyName}/rule-type/{ruleType}">client.crm.propertiesValidations.<a href="./src/resources/crm/properties-validations.ts">updateByObjectTypeIDPropertyNameAndRuleType</a>(ruleType, { ...params }) -> void</code>

## Timeline

Types:

- <code><a href="./src/resources/crm/timeline/timeline.ts">AppEventOccurrence</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">AppEventResolutionResponse</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">BatchInputAppEventOccurrence</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">BatchResponseAppEventOccurrence</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">DeveloperQualifiedSymbol</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">ExternalAppEventResolutionRequest</a></code>
- <code><a href="./src/resources/crm/timeline/timeline.ts">TimelineEventIFrame</a></code>

Methods:

- <code title="post /integrators/timeline/2026-03/events">client.crm.timeline.<a href="./src/resources/crm/timeline/timeline.ts">createEvent</a>({ ...params }) -> void</code>
- <code title="post /integrators/timeline/2026-03/types/projects">client.crm.timeline.<a href="./src/resources/crm/timeline/timeline.ts">createProjectType</a>({ ...params }) -> AppEventResolutionResponse</code>

### Batch

Methods:

- <code title="post /integrators/timeline/2026-03/events/batch">client.crm.timeline.batch.<a href="./src/resources/crm/timeline/batch.ts">create</a>({ ...params }) -> BatchResponseAppEventOccurrence</code>
