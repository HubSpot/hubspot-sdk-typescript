# Conversations

## CustomChannels

Types:

- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ChannelIntegrationMessageEgg</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ChannelIntegrationParticipant</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">CollectionResponseWithTotalPublicChannelAccount</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">CollectionResponseWithTotalPublicChannelIntegrationChannel</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ContactAddress</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ContactAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ContactEmail</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ContactName</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ContactOrg</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ContactPhone</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ContactProfile</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">ContactURL</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">FileAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">LocationAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">MessageHeaderAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PreResolvedContact</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PreResolvedContacts</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelAccount</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelAccountEgg</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelAccountStagingToken</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelAccountStagingTokenUpdateRequest</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelAccountUpdateRequest</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelIntegrationChannel</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelIntegrationChannelCreate</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelIntegrationChannelPatch</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicChannelIntegrationMessageUpdateRequest</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicClient</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicContact</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicConversationsMessage</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicDeliveryIdentifier</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicFile</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicLocation</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicMessageFailureDetails</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicMessageHeader</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicMessageStatus</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicQuickReplies</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicRecipient</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicSender</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicSocialMetadataAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicUnsupportedContent</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">PublicWhatsAppTemplateMetadata</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">QuickRepliesAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">QuickReply</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">SocialMetadata</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">SocialMetadataIntegrationAttachment</a></code>
- <code><a href="./src/resources/conversations/custom-channels/custom-channels.ts">UnsupportedContentAttachment</a></code>

Methods:

- <code title="post /conversations/custom-channels/2026-03">client.conversations.customChannels.<a href="./src/resources/conversations/custom-channels/custom-channels.ts">create</a>({ ...params }) -> PublicChannelIntegrationChannel</code>
- <code title="patch /conversations/custom-channels/2026-03/{channelId}">client.conversations.customChannels.<a href="./src/resources/conversations/custom-channels/custom-channels.ts">update</a>(channelID, { ...params }) -> PublicChannelIntegrationChannel</code>
- <code title="get /conversations/custom-channels/2026-03">client.conversations.customChannels.<a href="./src/resources/conversations/custom-channels/custom-channels.ts">list</a>({ ...params }) -> PublicChannelIntegrationChannelsPage</code>
- <code title="delete /conversations/custom-channels/2026-03/{channelId}">client.conversations.customChannels.<a href="./src/resources/conversations/custom-channels/custom-channels.ts">delete</a>(channelID) -> void</code>
- <code title="get /conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}">client.conversations.customChannels.<a href="./src/resources/conversations/custom-channels/custom-channels.ts">get</a>(channelAccountID, { ...params }) -> PublicChannelAccount</code>

### ChannelAccounts

Methods:

- <code title="post /conversations/custom-channels/2026-03/{channelId}/channel-accounts">client.conversations.customChannels.channelAccounts.<a href="./src/resources/conversations/custom-channels/channel-accounts.ts">create</a>(channelID, { ...params }) -> PublicChannelAccount</code>
- <code title="patch /conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}">client.conversations.customChannels.channelAccounts.<a href="./src/resources/conversations/custom-channels/channel-accounts.ts">update</a>(channelAccountID, { ...params }) -> PublicChannelAccount</code>
- <code title="get /conversations/custom-channels/2026-03/{channelId}/channel-accounts">client.conversations.customChannels.channelAccounts.<a href="./src/resources/conversations/custom-channels/channel-accounts.ts">list</a>(channelID, { ...params }) -> PublicChannelAccountsPage</code>
- <code title="patch /conversations/custom-channels/2026-03/{channelId}/channel-account-staging-tokens/{accountToken}">client.conversations.customChannels.channelAccounts.<a href="./src/resources/conversations/custom-channels/channel-accounts.ts">updateStagingToken</a>(accountToken, { ...params }) -> PublicChannelAccountStagingToken</code>

### Messages

Methods:

- <code title="post /conversations/custom-channels/2026-03/{channelId}/messages">client.conversations.customChannels.messages.<a href="./src/resources/conversations/custom-channels/messages.ts">create</a>(channelID, { ...params }) -> PublicConversationsMessage</code>
- <code title="patch /conversations/custom-channels/2026-03/{channelId}/messages/{messageId}">client.conversations.customChannels.messages.<a href="./src/resources/conversations/custom-channels/messages.ts">update</a>(messageID, { ...params }) -> PublicConversationsMessage</code>
- <code title="get /conversations/custom-channels/2026-03/{channelId}/messages/{messageId}">client.conversations.customChannels.messages.<a href="./src/resources/conversations/custom-channels/messages.ts">get</a>(messageID, { ...params }) -> PublicConversationsMessage</code>

## VisitorIdentification

Types:

- <code><a href="./src/resources/conversations/visitor-identification.ts">IdentificationTokenGenerationRequest</a></code>
- <code><a href="./src/resources/conversations/visitor-identification.ts">IdentificationTokenResponse</a></code>

Methods:

- <code title="post /visitor-identification/2026-03/tokens/create">client.conversations.visitorIdentification.<a href="./src/resources/conversations/visitor-identification.ts">generateToken</a>({ ...params }) -> IdentificationTokenResponse</code>
