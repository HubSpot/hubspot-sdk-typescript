# Cms

## AuditLogs

Types:

- <code><a href="./src/resources/cms/audit-logs.ts">CmsAuditLoggingExportFilters</a></code>
- <code><a href="./src/resources/cms/audit-logs.ts">CmsAuditLoggingExportSettings</a></code>
- <code><a href="./src/resources/cms/audit-logs.ts">CollectionResponsePublicAuditLog</a></code>
- <code><a href="./src/resources/cms/audit-logs.ts">PublicAuditLog</a></code>

Methods:

- <code title="get /cms/audit-logs/2026-03">client.cms.auditLogs.<a href="./src/resources/cms/audit-logs.ts">list</a>({ ...params }) -> PublicAuditLogsPage</code>
- <code title="post /cms/audit-logs/2026-03/export">client.cms.auditLogs.<a href="./src/resources/cms/audit-logs.ts">export</a>({ ...params }) -> void</code>

## Blogs

Types:

- <code><a href="./src/resources/cms/blogs/blogs.ts">AttachToLangPrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">BatchInputJsonNode</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">DetachFromLangGroupRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">PublicAccessRule</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">SetNewLanguagePrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">UpdateLanguagesRequestVNext</a></code>

### Authors

Types:

- <code><a href="./src/resources/cms/blogs/authors/authors.ts">BatchInputBlogAuthor</a></code>
- <code><a href="./src/resources/cms/blogs/authors/authors.ts">BatchResponseBlogAuthor</a></code>
- <code><a href="./src/resources/cms/blogs/authors/authors.ts">BatchResponseBlogAuthorWithErrors</a></code>
- <code><a href="./src/resources/cms/blogs/authors/authors.ts">BlogAuthor</a></code>
- <code><a href="./src/resources/cms/blogs/authors/authors.ts">BlogAuthorCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/authors/authors.ts">CollectionResponseWithTotalBlogAuthorForwardPaging</a></code>

Methods:

- <code title="post /cms/blogs/2026-03/authors">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">create</a>({ ...params }) -> Response</code>
- <code title="patch /cms/blogs/2026-03/authors/{objectId}">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">update</a>(objectID, { ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/authors">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /cms/blogs/2026-03/authors/{objectId}">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/authors/multi-language/attach-to-lang-group">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">attachToLangGroup</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/authors/multi-language/create-language-variation">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">createLanguageVariation</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/authors/multi-language/detach-from-lang-group">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">detachFromLangGroup</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/authors/{objectId}">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">get</a>(objectID, { ...params }) -> Response</code>
- <code title="put /cms/blogs/2026-03/authors/multi-language/set-new-lang-primary">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">setNewLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/authors/multi-language/update-languages">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">updateLanguages</a>({ ...params }) -> Response</code>

#### Batch

Methods:

- <code title="post /cms/blogs/2026-03/authors/batch/create">client.cms.blogs.authors.batch.<a href="./src/resources/cms/blogs/authors/batch.ts">create</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/authors/batch/update">client.cms.blogs.authors.batch.<a href="./src/resources/cms/blogs/authors/batch.ts">update</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/authors/batch/archive">client.cms.blogs.authors.batch.<a href="./src/resources/cms/blogs/authors/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/authors/batch/read">client.cms.blogs.authors.batch.<a href="./src/resources/cms/blogs/authors/batch.ts">get</a>({ ...params }) -> Response</code>

### Posts

Types:

- <code><a href="./src/resources/cms/blogs/posts/posts.ts">Angle</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BackgroundImage</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchInputBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchResponseBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchResponseBlogPostWithErrors</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BlogPostLanguageCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BlogPostVersion</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BreakpointStyles</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">CollectionResponseWithTotalBlogPostForwardPaging</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">CollectionResponseWithTotalBlogPostVersion</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">ColorStop</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">ContentCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">ContentLanguageVariation</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">ContentScheduleRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">Gradient</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">LayoutSection</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">Margin</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">Padding</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">RgbaColor</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">RowMetaData</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">SideOrCorner</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">Size</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">Styles</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">VersionBlogPost</a></code>

Methods:

- <code title="post /cms/blogs/2026-03/posts">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">create</a>({ ...params }) -> Response</code>
- <code title="patch /cms/blogs/2026-03/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">update</a>(objectID, { ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /cms/blogs/2026-03/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/posts/multi-language/attach-to-lang-group">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">attachToLangGroup</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/clone">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">clone</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/multi-language/create-language-variation">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">createLangVariation</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/multi-language/detach-from-lang-group">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">detachFromLangGroup</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">get</a>(objectID, { ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/{objectId}/draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">getDraftByID</a>(objectID) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">getPreviousVersion</a>(revisionID, { ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/{objectId}/revisions">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">getPreviousVersions</a>(objectID, { ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/{objectId}/draft/push-live">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">pushLive</a>(objectID) -> void</code>
- <code title="post /cms/blogs/2026-03/posts/{objectId}/draft/reset">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">resetDraft</a>(objectID) -> void</code>
- <code title="post /cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">restorePreviousVersion</a>(revisionID, { ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore-to-draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">restorePreviousVersionToDraft</a>(revisionID, { ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/schedule">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">schedule</a>({ ...params }) -> void</code>
- <code title="put /cms/blogs/2026-03/posts/multi-language/set-new-lang-primary">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">setLangPrimary</a>({ ...params }) -> void</code>
- <code title="patch /cms/blogs/2026-03/posts/{objectId}/draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">updateDraft</a>(objectID, { ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/multi-language/update-languages">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">updateLangs</a>({ ...params }) -> Response</code>

#### Batch

Methods:

- <code title="post /cms/blogs/2026-03/posts/batch/create">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">create</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/batch/update">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">update</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/batch/archive">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/posts/batch/read">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">get</a>({ ...params }) -> Response</code>

### Settings

Types:

- <code><a href="./src/resources/cms/blogs/settings/settings.ts">Blog</a></code>
- <code><a href="./src/resources/cms/blogs/settings/settings.ts">BlogLanguageCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/settings/settings.ts">BlogVersion</a></code>
- <code><a href="./src/resources/cms/blogs/settings/settings.ts">CollectionResponseWithTotalBlog</a></code>
- <code><a href="./src/resources/cms/blogs/settings/settings.ts">CollectionResponseWithTotalBlogVersion</a></code>
- <code><a href="./src/resources/cms/blogs/settings/settings.ts">VersionBlog</a></code>

Methods:

- <code title="get /cms/blog-settings/2026-03/settings">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings/settings.ts">list</a>({ ...params }) -> BlogsPage</code>
- <code title="get /cms/blog-settings/2026-03/settings/{blogId}">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings/settings.ts">get</a>(blogID) -> Blog</code>
- <code title="get /cms/blog-settings/2026-03/settings/{blogId}/revisions/{revisionId}">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings/settings.ts">getRevision</a>(revisionID, { ...params }) -> BlogVersion</code>
- <code title="get /cms/blog-settings/2026-03/settings/{blogId}/revisions">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings/settings.ts">listRevisions</a>(blogID, { ...params }) -> VersionBlogsPage</code>

#### MultiLanguage

Methods:

- <code title="post /cms/blog-settings/2026-03/settings/multi-language/attach-to-lang-group">client.cms.blogs.settings.multiLanguage.<a href="./src/resources/cms/blogs/settings/multi-language.ts">attachToLangGroup</a>({ ...params }) -> Response</code>
- <code title="post /cms/blog-settings/2026-03/settings/multi-language/create-language-variation">client.cms.blogs.settings.multiLanguage.<a href="./src/resources/cms/blogs/settings/multi-language.ts">createLanguageVariation</a>({ ...params }) -> Blog</code>
- <code title="post /cms/blog-settings/2026-03/settings/multi-language/detach-from-lang-group">client.cms.blogs.settings.multiLanguage.<a href="./src/resources/cms/blogs/settings/multi-language.ts">detachFromLangGroup</a>({ ...params }) -> Response</code>
- <code title="put /cms/blog-settings/2026-03/settings/multi-language/set-new-lang-primary">client.cms.blogs.settings.multiLanguage.<a href="./src/resources/cms/blogs/settings/multi-language.ts">setNewLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/blog-settings/2026-03/settings/multi-language/update-languages">client.cms.blogs.settings.multiLanguage.<a href="./src/resources/cms/blogs/settings/multi-language.ts">updateLanguages</a>({ ...params }) -> Response</code>

### Tags

Types:

- <code><a href="./src/resources/cms/blogs/tags.ts">BatchInputTag</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">BatchResponseTag</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">BatchResponseTagWithErrors</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">CollectionResponseWithTotalTagForwardPaging</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">Tag</a></code>
- <code><a href="./src/resources/cms/blogs/tags.ts">TagCloneRequestVNext</a></code>

Methods:

- <code title="post /cms/blogs/2026-03/tags">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">create</a>({ ...params }) -> Response</code>
- <code title="patch /cms/blogs/2026-03/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">update</a>(objectID, { ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/tags">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /cms/blogs/2026-03/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/tags/multi-language/attach-to-lang-group">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">attachToLangGroup</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/tags/batch/create">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">createBatch</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/tags/multi-language/create-language-variation">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">createLangVariation</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/tags/batch/archive">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">deleteBatch</a>({ ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/tags/multi-language/detach-from-lang-group">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">detachFromLangGroup</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">get</a>(objectID, { ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/tags/batch/read">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">getBatch</a>({ ...params }) -> Response</code>
- <code title="put /cms/blogs/2026-03/tags/multi-language/set-new-lang-primary">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">setLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/tags/batch/update">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">updateBatch</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/tags/multi-language/update-languages">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">updateLangs</a>({ ...params }) -> Response</code>

## Domains

Types:

- <code><a href="./src/resources/cms/domains.ts">CollectionResponseWithTotalDomain</a></code>
- <code><a href="./src/resources/cms/domains.ts">Domain</a></code>

Methods:

- <code title="get /cms/domains/2026-03">client.cms.domains.<a href="./src/resources/cms/domains.ts">list</a>({ ...params }) -> DomainsPage</code>
- <code title="get /cms/domains/2026-03/{domainId}">client.cms.domains.<a href="./src/resources/cms/domains.ts">get</a>(domainID) -> Domain</code>

## MediaBridge

Types:

- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AbsoluteValue</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AddNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AddTime</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">And</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AttentionSpanCalculatedValues</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AttentionSpanEventRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BeginsWith</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BooleanPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BooleanTargetPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BulkIntegratorObjectCreationResponse</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CaseChangeTestExtensionData</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CollectionResponseMediaBridgeObjectForwardPaging</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ConcatStrings</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ConstantBoolean</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ConstantNumber</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ConstantString</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Contains</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CreateAudioObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CreateDocumentObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CreateImageObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CreateMBObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CreateOtherObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CreateVideoObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Date</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">DatedExchangeRate</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">DefaultRequirements</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">DefinitionSource</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">DivideNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Endpoints</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Euler</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">EventVisibilityChange</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">EventVisibilityResponse</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ExtensionData</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ExternalOptionsMetaData</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ExtractMostRecentEmailReplyHTML</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ExtractMostRecentEmailReplyText</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ExtractMostRecentPlainTextEmailReply</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">FetchCurrencyDecimalPlaces</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">FetchExchangeRate</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">FetchSingleCurrencyPortalCurrency</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">FieldLevelPermission</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">FilteringMetaData</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">FormatFullName</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">FormatPhoneNumber</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">FormatSearchablePhoneNumber</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Group</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">GroupView</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">HasEmailReply</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">HasPlainTextEmailReply</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IfBoolean</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IfNumber</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IfString</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">InboundDBObjectType</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IntegratorOEmbedDomainModel</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IntegratorOEmbedDomainRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IntegratorObjectCreationRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IntegratorObjectCreationResponse</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsEngagementType</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsPipelineStageClosed</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsPresent</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">LessThan</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">LessThanOrEqual</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">LowerCase</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MaxNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaBridgeObject</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaBridgePropertyUpdate</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaBridgeProviderPartial</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaBridgeProviderRegistrationResponse</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaPlayedEventRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaPlayedPercentageEventRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MinNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Month</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MoreThan</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MoreThanOrEqual</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MultiplyNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Not</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Now</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">NumberEquals</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">NumberPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">NumberTargetPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">NumberToString</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">OEmbedDomainsCollectionResponse</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ObjectDefinitionResponse</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ObjectTypeIDProto</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Option1</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">OptionDecorations</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">OptionDecoratorsExtensionData</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Or</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ParseNumber</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">PeriodToMonths</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">PeriodToWeeks</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">PipelineProbability</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Power</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Property</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Property1</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">PropertyDefinition</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">PropertyDefinitionSource</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">RequiredPropertiesExtensionData</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">RollupExpression</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">RoundDownNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">RoundNearestNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">RoundUpNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ScopeMapping</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">SetContainsString</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">SoftRequiredPropertiesExtensionData</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">SquareRoot</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">StringEquals</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">StringLength</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">StringPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">StringTargetPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Substring</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">SubtractNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">SubtractTime</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">TimeBetween</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">TimeBetweenSkipWeekends</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">TimestampOfPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">TimestampOfTargetPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">UpdateAudioObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">UpdateDocumentObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">UpdateImageObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">UpdateMBObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">UpdateOtherObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">UpdateVideoObjectRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">UpperCase</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">VideoObject</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Xor</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Year</a></code>

Methods:

- <code title="post /media-bridge/2026-03/objects">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">create</a>() -> MediaBridgeObject</code>
- <code title="patch /media-bridge/2026-03/objects/{objectId}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">update</a>(objectID) -> MediaBridgeObject</code>
- <code title="get /media-bridge/2026-03/objects/{mediaType}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">list</a>(mediaType, { ...params }) -> MediaBridgeObjectsPage</code>
- <code title="delete /media-bridge/2026-03/objects/{mediaType}/{objectId}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /media-bridge/2026-03/{appId}/schemas/{objectType}/associations">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createAssociation</a>(objectType, { ...params }) -> AssociationDefinition</code>
- <code title="post /media-bridge/2026-03/events/attention-span">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createAttentionSpanEvent</a>({ ...params }) -> Response</code>
- <code title="post /media-bridge/2026-03/events/media-played">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createMediaPlayedEvent</a>({ ...params }) -> Response</code>
- <code title="post /media-bridge/2026-03/events/media-played-percent">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createMediaPlayedPercentEvent</a>({ ...params }) -> Response</code>
- <code title="post /media-bridge/2026-03/{appId}/settings/object-definitions">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createObjectType</a>(appID, { ...params }) -> BulkIntegratorObjectCreationResponse</code>
- <code title="post /media-bridge/2026-03/{appId}/settings/oembed-domains">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createOembedDomain</a>(appID, { ...params }) -> IntegratorOEmbedDomainModel</code>
- <code title="post /media-bridge/2026-03/{appId}/properties/{objectType}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createProperty</a>(objectType, { ...params }) -> Property</code>
- <code title="post /media-bridge/2026-03/{appId}/properties/{objectType}/groups">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createPropertyGroup</a>(objectType, { ...params }) -> PropertyGroup</code>
- <code title="post /media-bridge/2026-03/{appId}/settings/video-association-definition">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createVideoAssociationDefinition</a>(appID) -> AssociationDefinition</code>
- <code title="delete /media-bridge/2026-03/{appId}/schemas/{objectType}/associations/{associationId}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">deleteAssociation</a>(associationID, { ...params }) -> void</code>
- <code title="delete /media-bridge/2026-03/{appId}/settings/oembed-domains">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">deleteOembedDomain</a>(appID, { ...params }) -> void</code>
- <code title="delete /media-bridge/2026-03/{appId}/properties/{objectType}/{propertyName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">deleteProperty</a>(propertyName, { ...params }) -> void</code>
- <code title="delete /media-bridge/2026-03/{appId}/properties/{objectType}/groups/{groupName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">deletePropertyGroup</a>(groupName, { ...params }) -> void</code>
- <code title="get /media-bridge/2026-03/objects/{mediaType}/{objectId}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">get</a>(objectID, { ...params }) -> MediaBridgeObject</code>
- <code title="get /media-bridge/2026-03/{appId}/settings/event-visibility">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">getEventVisibilitySettings</a>(appID) -> EventVisibilityResponse</code>
- <code title="get /media-bridge/2026-03/{appId}/settings/oembed-domains/{oEmbedDomainId}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">getOembedDomain</a>(oEmbedDomainID, { ...params }) -> IntegratorOEmbedDomainModel</code>
- <code title="get /media-bridge/2026-03/{appId}/properties/{objectType}/{propertyName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">getProperty</a>(propertyName, { ...params }) -> Property</code>
- <code title="get /media-bridge/2026-03/{appId}/properties/{objectType}/groups/{groupName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">getPropertyGroup</a>(groupName, { ...params }) -> PropertyGroup</code>
- <code title="get /media-bridge/2026-03/{appId}/schemas/{objectType}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">getSchema</a>(objectType, { ...params }) -> ObjectSchema</code>
- <code title="get /media-bridge/2026-03/{appId}/settings/object-definitions/{mediaType}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">listObjectTypesByMediaType</a>(mediaType, { ...params }) -> ObjectDefinitionResponse</code>
- <code title="get /media-bridge/2026-03/{appId}/settings/oembed-domains">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">listOembedDomains</a>(appID, { ...params }) -> OEmbedDomainsCollectionResponse</code>
- <code title="get /media-bridge/2026-03/{appId}/properties/{objectType}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">listProperties</a>(objectType, { ...params }) -> CollectionResponsePropertyNoPaging</code>
- <code title="get /media-bridge/2026-03/{appId}/properties/{objectType}/groups">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">listPropertyGroups</a>(objectType, { ...params }) -> CollectionResponsePropertyGroupNoPaging</code>
- <code title="get /media-bridge/2026-03/{appId}/schemas">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">listSchemas</a>(appID, { ...params }) -> CollectionResponseObjectSchemaNoPaging</code>
- <code title="post /media-bridge/2026-03/{appId}/settings/register">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">registerAppName</a>(appID, { ...params }) -> MediaBridgeProviderRegistrationResponse</code>
- <code title="patch /media-bridge/2026-03/{appId}/settings/event-visibility">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">updateEventVisibilitySettings</a>(appID, { ...params }) -> EventVisibilityChange</code>
- <code title="patch /media-bridge/2026-03/{appId}/settings/oembed-domains/{oEmbedDomainId}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">updateOembedDomain</a>(oEmbedDomainID, { ...params }) -> IntegratorOEmbedDomainModel</code>
- <code title="patch /media-bridge/2026-03/{appId}/properties/{objectType}/{propertyName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">updateProperty</a>(propertyName, { ...params }) -> Property</code>
- <code title="patch /media-bridge/2026-03/{appId}/properties/{objectType}/groups/{groupName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">updatePropertyGroup</a>(groupName, { ...params }) -> PropertyGroup</code>
- <code title="patch /media-bridge/2026-03/{appId}/schemas/{objectType}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">updateSchema</a>(objectType, { ...params }) -> ObjectTypeDefinition</code>
- <code title="put /media-bridge/2026-03/{appId}/settings">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">updateSettings</a>(appID, { ...params }) -> MediaBridgeProviderRegistrationResponse</code>

### Batch

Methods:

- <code title="post /media-bridge/2026-03/{appId}/properties/{objectType}/batch/create">client.cms.mediaBridge.batch.<a href="./src/resources/cms/media-bridge/batch.ts">create</a>(objectType, { ...params }) -> BatchResponseProperty</code>
- <code title="post /media-bridge/2026-03/{appId}/properties/{objectType}/batch/archive">client.cms.mediaBridge.batch.<a href="./src/resources/cms/media-bridge/batch.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /media-bridge/2026-03/{appId}/properties/{objectType}/batch/read">client.cms.mediaBridge.batch.<a href="./src/resources/cms/media-bridge/batch.ts">get</a>(objectType, { ...params }) -> BatchResponseProperty</code>

## SiteSearch

Types:

- <code><a href="./src/resources/cms/site-search.ts">ContentSearchResult</a></code>
- <code><a href="./src/resources/cms/site-search.ts">IndexedData</a></code>
- <code><a href="./src/resources/cms/site-search.ts">IndexedField</a></code>
- <code><a href="./src/resources/cms/site-search.ts">PublicSearchResults</a></code>

Methods:

- <code title="get /cms/site-search/2026-03/indexed-data/{contentId}">client.cms.siteSearch.<a href="./src/resources/cms/site-search.ts">getIndexedData</a>(contentID, { ...params }) -> IndexedData</code>
- <code title="get /cms/site-search/2026-03/search">client.cms.siteSearch.<a href="./src/resources/cms/site-search.ts">search</a>({ ...params }) -> PublicSearchResults</code>

## SourceCode

Types:

- <code><a href="./src/resources/cms/source-code.ts">AssetFileMetadata</a></code>
- <code><a href="./src/resources/cms/source-code.ts">FileExtractRequest</a></code>

Methods:

- <code title="post /cms/source-code/2026-03/{environment}/content/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">create</a>(path\_, { ...params }) -> AssetFileMetadata</code>
- <code title="delete /cms/source-code/2026-03/{environment}/content/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">delete</a>(path\_, { ...params }) -> void</code>
- <code title="post /cms/source-code/2026-03/extract/async">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">extractAsync</a>({ ...params }) -> TaskLocator</code>
- <code title="get /cms/source-code/2026-03/{environment}/content/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">get</a>(path\_, { ...params }) -> Response</code>
- <code title="get /cms/source-code/2026-03/extract/async/tasks/{taskId}/status">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">getExtractionStatus</a>(taskID) -> ActionResponse</code>
- <code title="get /cms/source-code/2026-03/{environment}/metadata/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">getMetadata</a>(path\_, { ...params }) -> AssetFileMetadata</code>
- <code title="put /cms/source-code/2026-03/{environment}/content/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">upsert</a>(path\_, { ...params }) -> AssetFileMetadata</code>
- <code title="post /cms/source-code/2026-03/{environment}/validate/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">validate</a>(path\_, { ...params }) -> Response</code>

## URLMappings

Types:

- <code><a href="./src/resources/cms/url-mappings.ts">URLMappingsURLMapping</a></code>

Methods:

- <code title="post /url-mappings/2026-03/url-mappings">client.cms.urlMappings.<a href="./src/resources/cms/url-mappings.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /url-mappings/2026-03/url-mappings">client.cms.urlMappings.<a href="./src/resources/cms/url-mappings.ts">list</a>() -> Response</code>
- <code title="delete /url-mappings/2026-03/url-mappings/{id}">client.cms.urlMappings.<a href="./src/resources/cms/url-mappings.ts">delete</a>(id) -> void</code>
- <code title="get /url-mappings/2026-03/url-mappings/{id}">client.cms.urlMappings.<a href="./src/resources/cms/url-mappings.ts">get</a>(id) -> Response</code>

## URLRedirects

Types:

- <code><a href="./src/resources/cms/url-redirects.ts">CollectionResponseWithTotalURLMappingForwardPaging</a></code>
- <code><a href="./src/resources/cms/url-redirects.ts">URLMapping</a></code>
- <code><a href="./src/resources/cms/url-redirects.ts">URLMappingCreateRequestBody</a></code>

Methods:

- <code title="post /cms/url-redirects/2026-03">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">create</a>({ ...params }) -> URLMapping</code>
- <code title="patch /cms/url-redirects/2026-03/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">update</a>(urlRedirectID, { ...params }) -> URLMapping</code>
- <code title="get /cms/url-redirects/2026-03">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">list</a>({ ...params }) -> URLMappingsPage</code>
- <code title="delete /cms/url-redirects/2026-03/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">delete</a>(urlRedirectID) -> void</code>
- <code title="get /cms/url-redirects/2026-03/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">get</a>(urlRedirectID) -> URLMapping</code>
