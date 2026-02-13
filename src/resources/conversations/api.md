# Conversations

Types:

- <code><a href="./src/resources/conversations/conversations.ts">AgentActor</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">BatchResponsePublicActor</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">BatchResponsePublicActorWithErrors</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">BotActor</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">CollectionResponsePublicMessageForwardPaging</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">CollectionResponsePublicThreadForwardPaging</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">CollectionResponseWithTotalPublicChannelAccountForwardPaging</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">CollectionResponseWithTotalPublicChannelForwardPaging</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">CollectionResponseWithTotalPublicInboxForwardPaging</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ContactAddress</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ContactEmail</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ContactName</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ContactOrg</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ContactPhone</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ContactProfile</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ContactURL</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationsPublicConversationsMessage</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">EmailActor</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">IntegratorActor</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">LlmActor</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicActor</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicAssignmentMessage</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicChannel</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicChannelAccount</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicClient</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicComment</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicCommentEgg</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicContact</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicConversationsMessageEgg</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicDeliveryIdentifier</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicFile</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicFileEgg</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicInbox</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicLocation</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicMessage</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicMessageContent</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicMessageEgg</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicMessageFailureDetails</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicMessageHeader</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicMessageStatus</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicQuickReplies</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicQuickRepliesEgg</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicRecipient</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicRecipientEgg</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicSender</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicSocialMediaEgg</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicSocialMetadataAttachment</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicThread</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicThreadAssociations</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicThreadInboxChange</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicThreadStatusChange</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicThreadUpdateRequest</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicUnsupportedContent</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicWelcomeMessage</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PublicWhatsAppTemplateMetadata</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">QuickReply</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">SocialMetadata</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">SystemActor</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">VisitorActor</a></code>

## Actors

Methods:

- <code title="post /conversations/v3/conversations/actors/batch/read">client.conversations.actors.<a href="./src/resources/conversations/actors.ts">batchRead</a>({ ...params }) -> BatchResponsePublicActor</code>
- <code title="get /conversations/v3/conversations/actors/{actorId}">client.conversations.actors.<a href="./src/resources/conversations/actors.ts">get</a>(actorID, { ...params }) -> PublicActor</code>

## ChannelAccounts

Methods:

- <code title="get /conversations/v3/conversations/channel-accounts">client.conversations.channelAccounts.<a href="./src/resources/conversations/channel-accounts.ts">list</a>({ ...params }) -> PublicChannelAccountsPage</code>
- <code title="get /conversations/v3/conversations/channel-accounts/{channelAccountId}">client.conversations.channelAccounts.<a href="./src/resources/conversations/channel-accounts.ts">get</a>(channelAccountID, { ...params }) -> PublicChannelAccount</code>

## Channels

Methods:

- <code title="get /conversations/v3/conversations/channels">client.conversations.channels.<a href="./src/resources/conversations/channels.ts">list</a>({ ...params }) -> PublicChannelsPage</code>
- <code title="get /conversations/v3/conversations/channels/{channelId}">client.conversations.channels.<a href="./src/resources/conversations/channels.ts">get</a>(channelID) -> PublicChannel</code>

## CustomChannels

Types:

- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ChannelIntegrationMessageEgg</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ChannelIntegrationParticipant</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ContactAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">FileAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">LocationAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">MessageHeaderAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PreResolvedContact</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PreResolvedContacts</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelAccountEgg</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelAccountStagingToken</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelAccountStagingTokenUpdateRequest</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelAccountUpdateRequest</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelIntegrationChannel</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelIntegrationChannelCreate</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelIntegrationChannelPatch</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelIntegrationMessageUpdateRequest</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicConversationsMessage</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">QuickRepliesAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">SocialMetadataIntegrationAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">UnsupportedContentAttachment</a></code>

Methods:

- <code title="post /conversations/v3/custom-channels/">client.conversations.customChannels.<a href="./src/resources/conversations/custom-channels/custom-channels.ts">create</a>({ ...params }) -> PublicChannelIntegrationChannel</code>
- <code title="patch /conversations/v3/custom-channels/{channelId}">client.conversations.customChannels.<a href="./src/resources/conversations/custom-channels/custom-channels.ts">update</a>(channelID, { ...params }) -> PublicChannelIntegrationChannel</code>
- <code title="get /conversations/v3/custom-channels/">client.conversations.customChannels.<a href="./src/resources/conversations/custom-channels/custom-channels.ts">list</a>({ ...params }) -> PublicChannelIntegrationChannelsPage</code>
- <code title="delete /conversations/v3/custom-channels/{channelId}">client.conversations.customChannels.<a href="./src/resources/conversations/custom-channels/custom-channels.ts">delete</a>(channelID) -> void</code>
- <code title="get /conversations/v3/custom-channels/{channelId}">client.conversations.customChannels.<a href="./src/resources/conversations/custom-channels/custom-channels.ts">get</a>(channelID) -> PublicChannelIntegrationChannel</code>

### ChannelAccountStagingTokens

Methods:

- <code title="patch /conversations/v3/custom-channels/{channelId}/channel-account-staging-tokens/{accountToken}">client.conversations.customChannels.channelAccountStagingTokens.<a href="./src/resources/conversations/custom-channels/channel-account-staging-tokens.ts">update</a>(accountToken, { ...params }) -> PublicChannelAccountStagingToken</code>

### ChannelAccounts

Methods:

- <code title="post /conversations/v3/custom-channels/{channelId}/channel-accounts">client.conversations.customChannels.channelAccounts.<a href="./src/resources/conversations/custom-channels/channel-accounts.ts">create</a>(channelID, { ...params }) -> PublicChannelAccount</code>
- <code title="patch /conversations/v3/custom-channels/{channelId}/channel-accounts/{channelAccountId}">client.conversations.customChannels.channelAccounts.<a href="./src/resources/conversations/custom-channels/channel-accounts.ts">update</a>(channelAccountID, { ...params }) -> PublicChannelAccount</code>
- <code title="get /conversations/v3/custom-channels/{channelId}/channel-accounts">client.conversations.customChannels.channelAccounts.<a href="./src/resources/conversations/custom-channels/channel-accounts.ts">list</a>(channelID, { ...params }) -> PublicChannelAccountsPage</code>
- <code title="get /conversations/v3/custom-channels/{channelId}/channel-accounts/{channelAccountId}">client.conversations.customChannels.channelAccounts.<a href="./src/resources/conversations/custom-channels/channel-accounts.ts">get</a>(channelAccountID, { ...params }) -> PublicChannelAccount</code>

### Messages

Methods:

- <code title="post /conversations/v3/custom-channels/{channelId}/messages">client.conversations.customChannels.messages.<a href="./src/resources/conversations/custom-channels/messages.ts">create</a>(channelID, { ...params }) -> ConversationsPublicConversationsMessage</code>
- <code title="patch /conversations/v3/custom-channels/{channelId}/messages/{messageId}">client.conversations.customChannels.messages.<a href="./src/resources/conversations/custom-channels/messages.ts">update</a>(messageID, { ...params }) -> ConversationsPublicConversationsMessage</code>
- <code title="get /conversations/v3/custom-channels/{channelId}/messages/{messageId}">client.conversations.customChannels.messages.<a href="./src/resources/conversations/custom-channels/messages.ts">get</a>(messageID, { ...params }) -> ConversationsPublicConversationsMessage</code>

## Inboxes

Methods:

- <code title="get /conversations/v3/conversations/inboxes">client.conversations.inboxes.<a href="./src/resources/conversations/inboxes.ts">list</a>({ ...params }) -> PublicInboxesPage</code>
- <code title="get /conversations/v3/conversations/inboxes/{inboxId}">client.conversations.inboxes.<a href="./src/resources/conversations/inboxes.ts">get</a>(inboxID, { ...params }) -> PublicInbox</code>

## Messages

Methods:

- <code title="post /conversations/v3/conversations/threads/{threadId}/messages">client.conversations.messages.<a href="./src/resources/conversations/messages.ts">create</a>(threadID) -> PublicMessage</code>
- <code title="get /conversations/v3/conversations/threads/{threadId}/messages">client.conversations.messages.<a href="./src/resources/conversations/messages.ts">list</a>(threadID, { ...params }) -> PublicMessagesPage</code>
- <code title="get /conversations/v3/conversations/threads/{threadId}/messages/{messageId}">client.conversations.messages.<a href="./src/resources/conversations/messages.ts">get</a>(messageID, { ...params }) -> PublicMessage</code>
- <code title="get /conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content">client.conversations.messages.<a href="./src/resources/conversations/messages.ts">getOriginalContent</a>(messageID, { ...params }) -> PublicMessageContent</code>

## Threads

Methods:

- <code title="patch /conversations/v3/conversations/threads/{threadId}">client.conversations.threads.<a href="./src/resources/conversations/threads.ts">update</a>(threadID, { ...params }) -> PublicThread</code>
- <code title="get /conversations/v3/conversations/threads">client.conversations.threads.<a href="./src/resources/conversations/threads.ts">list</a>({ ...params }) -> PublicThreadsPage</code>
- <code title="delete /conversations/v3/conversations/threads/{threadId}">client.conversations.threads.<a href="./src/resources/conversations/threads.ts">delete</a>(threadID) -> void</code>
- <code title="get /conversations/v3/conversations/threads/{threadId}">client.conversations.threads.<a href="./src/resources/conversations/threads.ts">get</a>(threadID, { ...params }) -> PublicThread</code>

## VisitorIdentification

Types:

- <code><a href="./src/resources/conversations/visitor-identification.ts">IdentificationTokenGenerationRequest</a></code>
- <code><a href="./src/resources/conversations/visitor-identification.ts">IdentificationTokenResponse</a></code>

Methods:

- <code title="post /visitor-identification/v3/tokens/create">client.conversations.visitorIdentification.<a href="./src/resources/conversations/visitor-identification.ts">generateToken</a>({ ...params }) -> IdentificationTokenResponse</code>
