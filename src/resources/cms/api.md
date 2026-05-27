# Cms

Types:

- <code><a href="./src/resources/cms/cms.ts">Angle</a></code>
- <code><a href="./src/resources/cms/cms.ts">AttachToLangPrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/cms.ts">BackgroundImage</a></code>
- <code><a href="./src/resources/cms/cms.ts">BatchInputJsonNode</a></code>
- <code><a href="./src/resources/cms/cms.ts">BreakpointStyles</a></code>
- <code><a href="./src/resources/cms/cms.ts">ColorStop</a></code>
- <code><a href="./src/resources/cms/cms.ts">ContentCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/cms.ts">ContentLanguageVariation</a></code>
- <code><a href="./src/resources/cms/cms.ts">ContentScheduleRequestVNext</a></code>
- <code><a href="./src/resources/cms/cms.ts">DetachFromLangGroupRequestVNext</a></code>
- <code><a href="./src/resources/cms/cms.ts">Gradient</a></code>
- <code><a href="./src/resources/cms/cms.ts">LayoutSection</a></code>
- <code><a href="./src/resources/cms/cms.ts">Margin</a></code>
- <code><a href="./src/resources/cms/cms.ts">Padding</a></code>
- <code><a href="./src/resources/cms/cms.ts">PublicAccessRule</a></code>
- <code><a href="./src/resources/cms/cms.ts">RgbaColor</a></code>
- <code><a href="./src/resources/cms/cms.ts">RowMetaData</a></code>
- <code><a href="./src/resources/cms/cms.ts">SetNewLanguagePrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/cms.ts">SideOrCorner</a></code>
- <code><a href="./src/resources/cms/cms.ts">Size</a></code>
- <code><a href="./src/resources/cms/cms.ts">Styles</a></code>
- <code><a href="./src/resources/cms/cms.ts">UpdateLanguagesRequestVNext</a></code>

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

- <code><a href="./src/resources/cms/blogs/blogs.ts">CursorPagedResultBlogAuthorLong</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">CursorPagedResultBlogPostLong</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">CursorPagedResultTagLong</a></code>

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
- <code title="get /cms/blogs/2026-03/authors/cursor">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">getCursor</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/authors/cursor/query">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">getCursorByQuery</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/cursor">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">getPostsCursor</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/cursor/query">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">getPostsCursorByQuery</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/tags/cursor">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">getTagsCursor</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/tags/cursor/query">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors/authors.ts">getTagsCursorByQuery</a>({ ...params }) -> Response</code>
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

- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchInputBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchResponseBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchResponseBlogPostWithErrors</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BlogPostLanguageCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BlogPostVersion</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">CollectionResponseWithTotalBlogPostForwardPaging</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">CollectionResponseWithTotalBlogPostVersion</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">VersionBlogPost</a></code>

Methods:

- <code title="post /cms/blogs/2026-03/posts">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">create</a>({ ...params }) -> Response</code>
- <code title="patch /cms/blogs/2026-03/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">update</a>(objectID, { ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/cursor">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /cms/blogs/2026-03/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/posts/clone">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">clone</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">get</a>(objectID, { ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/{objectId}/draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">getDraftByID</a>(objectID) -> Response</code>
- <code title="get /cms/blogs/2026-03/authors/cursor">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">listAuthors</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/tags/cursor">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">listTags</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/{objectId}/draft/push-live">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">pushLive</a>(objectID) -> void</code>
- <code title="get /cms/blogs/2026-03/posts/cursor/query">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">query</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/authors/cursor/query">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">queryAuthors</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/tags/cursor/query">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">queryTags</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/{objectId}/draft/reset">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">resetDraft</a>(objectID) -> void</code>
- <code title="post /cms/blogs/2026-03/posts/schedule">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">schedule</a>({ ...params }) -> void</code>
- <code title="patch /cms/blogs/2026-03/posts/{objectId}/draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">updateDraft</a>(objectID, { ...params }) -> Response</code>

#### Batch

Methods:

- <code title="post /cms/blogs/2026-03/posts/batch/create">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">create</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/batch/update">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">update</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/batch/archive">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/posts/batch/read">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">get</a>({ ...params }) -> Response</code>

#### MultiLanguage

Methods:

- <code title="post /cms/blogs/2026-03/posts/multi-language/attach-to-lang-group">client.cms.blogs.posts.multiLanguage.<a href="./src/resources/cms/blogs/posts/multi-language.ts">attachToLangGroup</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/multi-language/create-language-variation">client.cms.blogs.posts.multiLanguage.<a href="./src/resources/cms/blogs/posts/multi-language.ts">createLangVariation</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/multi-language/detach-from-lang-group">client.cms.blogs.posts.multiLanguage.<a href="./src/resources/cms/blogs/posts/multi-language.ts">detachFromLangGroup</a>({ ...params }) -> Response</code>
- <code title="put /cms/blogs/2026-03/posts/multi-language/set-new-lang-primary">client.cms.blogs.posts.multiLanguage.<a href="./src/resources/cms/blogs/posts/multi-language.ts">setLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/posts/multi-language/update-languages">client.cms.blogs.posts.multiLanguage.<a href="./src/resources/cms/blogs/posts/multi-language.ts">updateLangs</a>({ ...params }) -> Response</code>

#### Revisions

Methods:

- <code title="get /cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}">client.cms.blogs.posts.revisions.<a href="./src/resources/cms/blogs/posts/revisions.ts">getPreviousVersion</a>(revisionID, { ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/{objectId}/revisions">client.cms.blogs.posts.revisions.<a href="./src/resources/cms/blogs/posts/revisions.ts">getPreviousVersions</a>(objectID, { ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore">client.cms.blogs.posts.revisions.<a href="./src/resources/cms/blogs/posts/revisions.ts">restorePreviousVersion</a>(revisionID, { ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore-to-draft">client.cms.blogs.posts.revisions.<a href="./src/resources/cms/blogs/posts/revisions.ts">restorePreviousVersionToDraft</a>(revisionID, { ...params }) -> Response</code>

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

- <code><a href="./src/resources/cms/blogs/tags/tags.ts">BatchInputTag</a></code>
- <code><a href="./src/resources/cms/blogs/tags/tags.ts">BatchResponseTag</a></code>
- <code><a href="./src/resources/cms/blogs/tags/tags.ts">BatchResponseTagWithErrors</a></code>
- <code><a href="./src/resources/cms/blogs/tags/tags.ts">CollectionResponseWithTotalTagForwardPaging</a></code>
- <code><a href="./src/resources/cms/blogs/tags/tags.ts">Tag</a></code>
- <code><a href="./src/resources/cms/blogs/tags/tags.ts">TagCloneRequestVNext</a></code>

Methods:

- <code title="post /cms/blogs/2026-03/tags">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">create</a>({ ...params }) -> Response</code>
- <code title="patch /cms/blogs/2026-03/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">update</a>(objectID, { ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/tags">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /cms/blogs/2026-03/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/tags/multi-language/attach-to-lang-group">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">attachToLangGroup</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/tags/multi-language/create-language-variation">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">createLangVariation</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/tags/multi-language/detach-from-lang-group">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">detachFromLangGroup</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">get</a>(objectID, { ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/authors/cursor">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">listAuthorsCursor</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/authors/cursor/query">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">listAuthorsCursorByQuery</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/tags/cursor">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">listCursor</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/tags/cursor/query">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">listCursorByQuery</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/cursor">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">listPostsCursor</a>({ ...params }) -> Response</code>
- <code title="get /cms/blogs/2026-03/posts/cursor/query">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">listPostsCursorByQuery</a>({ ...params }) -> Response</code>
- <code title="put /cms/blogs/2026-03/tags/multi-language/set-new-lang-primary">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">setLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/tags/multi-language/update-languages">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags/tags.ts">updateLangs</a>({ ...params }) -> Response</code>

#### Batch

Methods:

- <code title="post /cms/blogs/2026-03/tags/batch/archive">client.cms.blogs.tags.batch.<a href="./src/resources/cms/blogs/tags/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /cms/blogs/2026-03/tags/batch/create">client.cms.blogs.tags.batch.<a href="./src/resources/cms/blogs/tags/batch.ts">createBatch</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/tags/batch/read">client.cms.blogs.tags.batch.<a href="./src/resources/cms/blogs/tags/batch.ts">getBatch</a>({ ...params }) -> Response</code>
- <code title="post /cms/blogs/2026-03/tags/batch/update">client.cms.blogs.tags.batch.<a href="./src/resources/cms/blogs/tags/batch.ts">updateBatch</a>({ ...params }) -> Response</code>

## Domains

Types:

- <code><a href="./src/resources/cms/domains.ts">CollectionResponseWithTotalDomain</a></code>
- <code><a href="./src/resources/cms/domains.ts">Domain</a></code>

Methods:

- <code title="get /cms/domains/2026-03">client.cms.domains.<a href="./src/resources/cms/domains.ts">list</a>({ ...params }) -> DomainsPage</code>
- <code title="get /cms/domains/2026-03/{domainId}">client.cms.domains.<a href="./src/resources/cms/domains.ts">get</a>(domainID) -> Domain</code>

## Hubdb

Types:

- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BatchInputHubDBTableRowBatchCloneRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BatchInputHubDBTableRowV3BatchUpdateRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BatchInputHubDBTableRowV3Request</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BatchResponseHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BatchResponseHubDBTableRowV3WithErrors</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BoundedNextPage</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">BoundedPaging</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">CollectionResponseWithTotalHubDBTableV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">Column</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">ColumnRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">ForeignID</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableCloneRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableRowBatchCloneRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableRowV3BatchUpdateRequest</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableRowV3Request</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableRowV3Wrapper</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubDBTableV3Request</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">HubdbOption</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">ImportResult</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">RandomAccessCollectionResponseWithTotalHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">SimpleUser</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">StreamingCollectionResponseWithTotalHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">Variant</a></code>

### Rows

Methods:

- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/rows">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">create</a>(tableIDOrName, { ...params }) -> HubDBTableRowV3</code>
- <code title="get /cms/hubdb/2026-03/tables/{tableIdOrName}/rows">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">list</a>(tableIDOrName, { ...params }) -> UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/clone">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">cloneBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft/clone">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">cloneDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/create">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">createBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="delete /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">deleteDraft</a>(rowID, { ...params }) -> void</code>
- <code title="get /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">get</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/batch/read">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">getBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="get /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">getDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/read">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">getDraftBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/purge">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">purgeBatch</a>(tableIDOrName, { ...params }) -> void</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/replace">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">replaceBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="put /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">replaceDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/update">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">updateBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="patch /cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows.ts">updateDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>

### Tables

Methods:

- <code title="post /cms/hubdb/2026-03/tables">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">create</a>({ ...params }) -> HubDBTableV3</code>
- <code title="get /cms/hubdb/2026-03/tables">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">list</a>({ ...params }) -> HubDBTableV3sPage</code>
- <code title="delete /cms/hubdb/2026-03/tables/{tableIdOrName}">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">delete</a>(tableIDOrName) -> void</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/draft/clone">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">cloneDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="delete /cms/hubdb/2026-03/tables/{tableIdOrName}/versions/{versionId}">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">deleteVersion</a>(versionID, { ...params }) -> void</code>
- <code title="get /cms/hubdb/2026-03/tables/{tableIdOrName}/export">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">export</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="get /cms/hubdb/2026-03/tables/{tableIdOrName}/draft/export">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">exportDraft</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="get /cms/hubdb/2026-03/tables/{tableIdOrName}">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">get</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="get /cms/hubdb/2026-03/tables/{tableIdOrName}/draft">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">getDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/draft/import">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">importDraft</a>(tableIDOrName, { ...params }) -> ImportResult</code>
- <code title="get /cms/hubdb/2026-03/tables/draft">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">listDraft</a>({ ...params }) -> HubDBTableV3sPage</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/draft/publish">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">publishDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/draft/reset">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">resetDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/hubdb/2026-03/tables/{tableIdOrName}/unpublish">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">unpublish</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="patch /cms/hubdb/2026-03/tables/{tableIdOrName}/draft">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">updateDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>

## MediaBridge

Types:

- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AbsoluteValue</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AddNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AddTime</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">And</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AttentionSpanCalculatedValues</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AttentionSpanEvent</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AttentionSpanEventRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BatchResponseProperty</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BatchResponsePropertyWithErrors</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BeginsWith</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BooleanPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BooleanTargetPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BulkIntegratorObjectCreationResponse</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CaseChangeTestExtensionData</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CollectionResponseObjectSchemaNoPaging</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CollectionResponsePropertyNoPaging</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ConcatStrings</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ConstantBoolean</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ConstantNumber</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ConstantString</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Contains</a></code>
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
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">FetchPortalHomeCurrency</a></code>
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
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsBlank</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsDayBasedISOPeriod</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsEngagementType</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsMonthBasedISOPeriod</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsMultipleOf</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsPipelineStageClosed</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsPortalEnabledCurrency</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsPortalMulticurrencyEnabled</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsPresent</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">IsValidISOPeriod</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">LessThan</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">LessThanOrEqual</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">LookupAssociationSpec</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">LowerCase</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MaxNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaBridgeProperty</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaBridgePropertyUpdate</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaBridgeProviderPartial</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaBridgeProviderRegistrationResponse</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaPlayedEvent</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaPlayedEventRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">MediaPlayedPercentageEvent</a></code>
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
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ObjectSchema</a></code>
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
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Property1</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">PropertyDefinition</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">PropertyDefinitionSource</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">RegexMatches</a></code>
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
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">UpperCase</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Xor</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Year</a></code>

Methods:

- <code title="post /media-bridge/2026-03/{appId}/schemas/{objectType}/associations">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createAssociation</a>(objectType, { ...params }) -> AssociationDefinition</code>
- <code title="post /media-bridge/2026-03/events/attention-span">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createAttentionSpanEvent</a>({ ...params }) -> AttentionSpanEvent</code>
- <code title="post /media-bridge/2026-03/events/media-played">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createMediaPlayedEvent</a>({ ...params }) -> MediaPlayedEvent</code>
- <code title="post /media-bridge/2026-03/events/media-played-percent">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createMediaPlayedPercentEvent</a>({ ...params }) -> MediaPlayedPercentageEvent</code>
- <code title="post /media-bridge/2026-03/{appId}/settings/object-definitions">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createObjectType</a>(appID, { ...params }) -> BulkIntegratorObjectCreationResponse</code>
- <code title="post /media-bridge/2026-03/{appId}/settings/oembed-domains">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createOembedDomain</a>(appID, { ...params }) -> IntegratorOEmbedDomainModel</code>
- <code title="post /media-bridge/2026-03/{appId}/properties/{objectType}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createProperty</a>(objectType, { ...params }) -> MediaBridgeProperty</code>
- <code title="post /media-bridge/2026-03/{appId}/properties/{objectType}/groups">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createPropertyGroup</a>(objectType, { ...params }) -> PropertyGroup</code>
- <code title="post /media-bridge/2026-03/{appId}/settings/video-association-definition">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">createVideoAssociationDefinition</a>(appID) -> AssociationDefinition</code>
- <code title="delete /media-bridge/2026-03/{appId}/schemas/{objectType}/associations/{associationId}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">deleteAssociation</a>(associationID, { ...params }) -> void</code>
- <code title="delete /media-bridge/2026-03/{appId}/settings/oembed-domains">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">deleteOembedDomain</a>(appID, { ...params }) -> void</code>
- <code title="delete /media-bridge/2026-03/{appId}/properties/{objectType}/{propertyName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">deleteProperty</a>(propertyName, { ...params }) -> void</code>
- <code title="delete /media-bridge/2026-03/{appId}/properties/{objectType}/groups/{groupName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">deletePropertyGroup</a>(groupName, { ...params }) -> void</code>
- <code title="get /media-bridge/2026-03/{appId}/settings/event-visibility">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">getEventVisibilitySettings</a>(appID) -> EventVisibilityResponse</code>
- <code title="get /media-bridge/2026-03/{appId}/settings/oembed-domains/{oEmbedDomainId}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">getOembedDomain</a>(oEmbedDomainID, { ...params }) -> IntegratorOEmbedDomainModel</code>
- <code title="get /media-bridge/2026-03/{appId}/properties/{objectType}/{propertyName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">getProperty</a>(propertyName, { ...params }) -> MediaBridgeProperty</code>
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
- <code title="patch /media-bridge/2026-03/{appId}/properties/{objectType}/{propertyName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">updateProperty</a>(propertyName, { ...params }) -> MediaBridgeProperty</code>
- <code title="patch /media-bridge/2026-03/{appId}/properties/{objectType}/groups/{groupName}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">updatePropertyGroup</a>(groupName, { ...params }) -> PropertyGroup</code>
- <code title="patch /media-bridge/2026-03/{appId}/schemas/{objectType}">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">updateSchema</a>(objectType, { ...params }) -> ObjectTypeDefinition</code>
- <code title="put /media-bridge/2026-03/{appId}/settings">client.cms.mediaBridge.<a href="./src/resources/cms/media-bridge/media-bridge.ts">updateSettings</a>(appID, { ...params }) -> MediaBridgeProviderRegistrationResponse</code>

### Batch

Methods:

- <code title="post /media-bridge/2026-03/{appId}/properties/{objectType}/batch/create">client.cms.mediaBridge.batch.<a href="./src/resources/cms/media-bridge/batch.ts">create</a>(objectType, { ...params }) -> BatchResponseProperty</code>
- <code title="post /media-bridge/2026-03/{appId}/properties/{objectType}/batch/archive">client.cms.mediaBridge.batch.<a href="./src/resources/cms/media-bridge/batch.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /media-bridge/2026-03/{appId}/properties/{objectType}/batch/read">client.cms.mediaBridge.batch.<a href="./src/resources/cms/media-bridge/batch.ts">get</a>(objectType, { ...params }) -> BatchResponseProperty</code>

## Pages

Types:

- <code><a href="./src/resources/cms/pages/pages.ts">AbTestEndRequestVNext</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">AbTestRerunRequestVNext</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">BatchInputContentFolder</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">BatchInputPage</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">BatchResponseContentFolder</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">BatchResponseContentFolderWithErrors</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">BatchResponsePage</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">BatchResponsePageWithErrors</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">CollectionResponseWithTotalContentFolderForwardPaging</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">CollectionResponseWithTotalContentFolderVersion</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">CollectionResponseWithTotalPageForwardPaging</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">CollectionResponseWithTotalPageVersion</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">ContentFolder</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">ContentFolderVersion</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">ContentLanguageCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">PageVersion</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">PagesPage</a></code>

### LandingPages

Methods:

- <code title="post /cms/pages/2026-03/landing-pages">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages/landing-pages.ts">create</a>({ ...params }) -> PagesPage</code>
- <code title="patch /cms/pages/2026-03/landing-pages/{objectId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages/landing-pages.ts">update</a>(objectID, { ...params }) -> PagesPage</code>
- <code title="get /cms/pages/2026-03/landing-pages">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages/landing-pages.ts">list</a>({ ...params }) -> PagesPagesPage</code>
- <code title="delete /cms/pages/2026-03/landing-pages/{objectId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages/landing-pages.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/pages/2026-03/landing-pages/clone">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages/landing-pages.ts">clone</a>({ ...params }) -> PagesPage</code>
- <code title="get /cms/pages/2026-03/landing-pages/{objectId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages/landing-pages.ts">get</a>(objectID, { ...params }) -> PagesPage</code>
- <code title="post /cms/pages/2026-03/landing-pages/schedule">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages/landing-pages.ts">schedule</a>({ ...params }) -> void</code>

#### AbTest

Methods:

- <code title="post /cms/pages/2026-03/landing-pages/ab-test/create-variation">client.cms.pages.landingPages.abTest.<a href="./src/resources/cms/pages/landing-pages/ab-test.ts">createLandingPageVariation</a>({ ...params }) -> PagesPage</code>
- <code title="post /cms/pages/2026-03/landing-pages/ab-test/end">client.cms.pages.landingPages.abTest.<a href="./src/resources/cms/pages/landing-pages/ab-test.ts">endLandingPageTest</a>({ ...params }) -> void</code>
- <code title="post /cms/pages/2026-03/landing-pages/ab-test/rerun">client.cms.pages.landingPages.abTest.<a href="./src/resources/cms/pages/landing-pages/ab-test.ts">rerunLandingPageTest</a>({ ...params }) -> void</code>

#### Batch

Methods:

- <code title="post /cms/pages/2026-03/landing-pages/batch/create">client.cms.pages.landingPages.batch.<a href="./src/resources/cms/pages/landing-pages/batch.ts">createLandingPages</a>({ ...params }) -> BatchResponsePage</code>
- <code title="post /cms/pages/2026-03/landing-pages/batch/archive">client.cms.pages.landingPages.batch.<a href="./src/resources/cms/pages/landing-pages/batch.ts">deleteLandingPages</a>({ ...params }) -> void</code>
- <code title="post /cms/pages/2026-03/landing-pages/batch/read">client.cms.pages.landingPages.batch.<a href="./src/resources/cms/pages/landing-pages/batch.ts">getLandingPages</a>({ ...params }) -> BatchResponsePage</code>
- <code title="post /cms/pages/2026-03/landing-pages/batch/update">client.cms.pages.landingPages.batch.<a href="./src/resources/cms/pages/landing-pages/batch.ts">updateLandingPages</a>({ ...params }) -> BatchResponsePage</code>

#### Draft

Methods:

- <code title="patch /cms/pages/2026-03/landing-pages/{objectId}/draft">client.cms.pages.landingPages.draft.<a href="./src/resources/cms/pages/landing-pages/draft.ts">update</a>(objectID, { ...params }) -> PagesPage</code>
- <code title="get /cms/pages/2026-03/landing-pages/{objectId}/draft">client.cms.pages.landingPages.draft.<a href="./src/resources/cms/pages/landing-pages/draft.ts">get</a>(objectID) -> PagesPage</code>
- <code title="post /cms/pages/2026-03/landing-pages/{objectId}/draft/push-live">client.cms.pages.landingPages.draft.<a href="./src/resources/cms/pages/landing-pages/draft.ts">pushLive</a>(objectID) -> void</code>
- <code title="post /cms/pages/2026-03/landing-pages/{objectId}/draft/reset">client.cms.pages.landingPages.draft.<a href="./src/resources/cms/pages/landing-pages/draft.ts">reset</a>(objectID) -> void</code>

#### Folders

Methods:

- <code title="post /cms/pages/2026-03/landing-pages/folders">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">create</a>({ ...params }) -> ContentFolder</code>
- <code title="patch /cms/pages/2026-03/landing-pages/folders/{objectId}">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">update</a>(objectID, { ...params }) -> ContentFolder</code>
- <code title="get /cms/pages/2026-03/landing-pages/folders">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">list</a>({ ...params }) -> ContentFoldersPage</code>
- <code title="delete /cms/pages/2026-03/landing-pages/folders/{objectId}">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/pages/2026-03/landing-pages/folders/batch/read">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">batchGet</a>({ ...params }) -> BatchResponseContentFolder</code>
- <code title="post /cms/pages/2026-03/landing-pages/folders/batch/create">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">createFolders</a>({ ...params }) -> BatchResponseContentFolder</code>
- <code title="post /cms/pages/2026-03/landing-pages/folders/batch/archive">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">deleteFolders</a>({ ...params }) -> void</code>
- <code title="get /cms/pages/2026-03/landing-pages/folders/{objectId}">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">get</a>(objectID, { ...params }) -> ContentFolder</code>
- <code title="get /cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">getRevision</a>(revisionID, { ...params }) -> ContentFolderVersion</code>
- <code title="get /cms/pages/2026-03/landing-pages/folders/{objectId}/revisions">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">listRevisions</a>(objectID, { ...params }) -> ContentFolderVersionsPage</code>
- <code title="post /cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}/restore">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">restoreRevision</a>(revisionID, { ...params }) -> ContentFolder</code>
- <code title="post /cms/pages/2026-03/landing-pages/folders/batch/update">client.cms.pages.landingPages.folders.<a href="./src/resources/cms/pages/landing-pages/folders.ts">updateFolders</a>({ ...params }) -> BatchResponseContentFolder</code>

#### MultiLanguage

Methods:

- <code title="post /cms/pages/2026-03/landing-pages/multi-language/attach-to-lang-group">client.cms.pages.landingPages.multiLanguage.<a href="./src/resources/cms/pages/landing-pages/multi-language.ts">attachToLangGroup</a>({ ...params }) -> Response</code>
- <code title="post /cms/pages/2026-03/landing-pages/multi-language/create-language-variation">client.cms.pages.landingPages.multiLanguage.<a href="./src/resources/cms/pages/landing-pages/multi-language.ts">createLanguageVariation</a>({ ...params }) -> PagesPage</code>
- <code title="post /cms/pages/2026-03/landing-pages/multi-language/detach-from-lang-group">client.cms.pages.landingPages.multiLanguage.<a href="./src/resources/cms/pages/landing-pages/multi-language.ts">detachFromLangGroup</a>({ ...params }) -> Response</code>
- <code title="put /cms/pages/2026-03/landing-pages/multi-language/set-new-lang-primary">client.cms.pages.landingPages.multiLanguage.<a href="./src/resources/cms/pages/landing-pages/multi-language.ts">setNewLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/pages/2026-03/landing-pages/multi-language/update-languages">client.cms.pages.landingPages.multiLanguage.<a href="./src/resources/cms/pages/landing-pages/multi-language.ts">updateLanguages</a>({ ...params }) -> Response</code>

#### Revisions

Methods:

- <code title="get /cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}">client.cms.pages.landingPages.revisions.<a href="./src/resources/cms/pages/landing-pages/revisions.ts">getLandingPageRevision</a>(revisionID, { ...params }) -> PageVersion</code>
- <code title="get /cms/pages/2026-03/landing-pages/{objectId}/revisions">client.cms.pages.landingPages.revisions.<a href="./src/resources/cms/pages/landing-pages/revisions.ts">listLandingPageRevisions</a>(objectID, { ...params }) -> PageVersionsPage</code>
- <code title="post /cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore">client.cms.pages.landingPages.revisions.<a href="./src/resources/cms/pages/landing-pages/revisions.ts">restoreLandingPageRevision</a>(revisionID, { ...params }) -> PagesPage</code>
- <code title="post /cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft">client.cms.pages.landingPages.revisions.<a href="./src/resources/cms/pages/landing-pages/revisions.ts">restoreLandingPageRevisionToDraft</a>(revisionID, { ...params }) -> PagesPage</code>

### SitePages

Methods:

- <code title="post /cms/pages/2026-03/site-pages">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages/site-pages.ts">create</a>({ ...params }) -> PagesPage</code>
- <code title="patch /cms/pages/2026-03/site-pages/{objectId}">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages/site-pages.ts">update</a>(objectID, { ...params }) -> PagesPage</code>
- <code title="get /cms/pages/2026-03/site-pages">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages/site-pages.ts">list</a>({ ...params }) -> PagesPagesPage</code>
- <code title="delete /cms/pages/2026-03/site-pages/{objectId}">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages/site-pages.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/pages/2026-03/site-pages/clone">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages/site-pages.ts">clone</a>({ ...params }) -> PagesPage</code>
- <code title="get /cms/pages/2026-03/site-pages/{objectId}">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages/site-pages.ts">get</a>(objectID, { ...params }) -> PagesPage</code>
- <code title="post /cms/pages/2026-03/site-pages/schedule">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages/site-pages.ts">schedule</a>({ ...params }) -> void</code>

#### AbTest

Methods:

- <code title="post /cms/pages/2026-03/site-pages/ab-test/create-variation">client.cms.pages.sitePages.abTest.<a href="./src/resources/cms/pages/site-pages/ab-test.ts">createSitePageVariation</a>({ ...params }) -> PagesPage</code>
- <code title="post /cms/pages/2026-03/site-pages/ab-test/end">client.cms.pages.sitePages.abTest.<a href="./src/resources/cms/pages/site-pages/ab-test.ts">endSitePageTest</a>({ ...params }) -> void</code>
- <code title="post /cms/pages/2026-03/site-pages/ab-test/rerun">client.cms.pages.sitePages.abTest.<a href="./src/resources/cms/pages/site-pages/ab-test.ts">rerunSitePageTest</a>({ ...params }) -> void</code>

#### Batch

Methods:

- <code title="post /cms/pages/2026-03/site-pages/batch/create">client.cms.pages.sitePages.batch.<a href="./src/resources/cms/pages/site-pages/batch.ts">createSitePages</a>({ ...params }) -> BatchResponsePage</code>
- <code title="post /cms/pages/2026-03/site-pages/batch/archive">client.cms.pages.sitePages.batch.<a href="./src/resources/cms/pages/site-pages/batch.ts">deleteSitePages</a>({ ...params }) -> void</code>
- <code title="post /cms/pages/2026-03/site-pages/batch/read">client.cms.pages.sitePages.batch.<a href="./src/resources/cms/pages/site-pages/batch.ts">getSitePages</a>({ ...params }) -> BatchResponsePage</code>
- <code title="post /cms/pages/2026-03/site-pages/batch/update">client.cms.pages.sitePages.batch.<a href="./src/resources/cms/pages/site-pages/batch.ts">updateSitePages</a>({ ...params }) -> BatchResponsePage</code>

#### Draft

Methods:

- <code title="get /cms/pages/2026-03/site-pages/{objectId}/draft">client.cms.pages.sitePages.draft.<a href="./src/resources/cms/pages/site-pages/draft.ts">getDraft</a>(objectID) -> PagesPage</code>
- <code title="post /cms/pages/2026-03/site-pages/{objectId}/draft/push-live">client.cms.pages.sitePages.draft.<a href="./src/resources/cms/pages/site-pages/draft.ts">publishDraft</a>(objectID) -> void</code>
- <code title="post /cms/pages/2026-03/site-pages/{objectId}/draft/reset">client.cms.pages.sitePages.draft.<a href="./src/resources/cms/pages/site-pages/draft.ts">resetSitePageDraft</a>(objectID) -> void</code>
- <code title="patch /cms/pages/2026-03/site-pages/{objectId}/draft">client.cms.pages.sitePages.draft.<a href="./src/resources/cms/pages/site-pages/draft.ts">updateDraft</a>(objectID, { ...params }) -> PagesPage</code>

#### MultiLanguage

Methods:

- <code title="post /cms/pages/2026-03/site-pages/multi-language/attach-to-lang-group">client.cms.pages.sitePages.multiLanguage.<a href="./src/resources/cms/pages/site-pages/multi-language.ts">attachToLangGroup</a>({ ...params }) -> Response</code>
- <code title="post /cms/pages/2026-03/site-pages/multi-language/create-language-variation">client.cms.pages.sitePages.multiLanguage.<a href="./src/resources/cms/pages/site-pages/multi-language.ts">createLanguageVariation</a>({ ...params }) -> PagesPage</code>
- <code title="post /cms/pages/2026-03/site-pages/multi-language/detach-from-lang-group">client.cms.pages.sitePages.multiLanguage.<a href="./src/resources/cms/pages/site-pages/multi-language.ts">detachFromLangGroup</a>({ ...params }) -> Response</code>
- <code title="put /cms/pages/2026-03/site-pages/multi-language/set-new-lang-primary">client.cms.pages.sitePages.multiLanguage.<a href="./src/resources/cms/pages/site-pages/multi-language.ts">setNewLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/pages/2026-03/site-pages/multi-language/update-languages">client.cms.pages.sitePages.multiLanguage.<a href="./src/resources/cms/pages/site-pages/multi-language.ts">updateLanguages</a>({ ...params }) -> Response</code>

#### Revisions

Methods:

- <code title="get /cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}">client.cms.pages.sitePages.revisions.<a href="./src/resources/cms/pages/site-pages/revisions.ts">getSitePageRevision</a>(revisionID, { ...params }) -> PageVersion</code>
- <code title="get /cms/pages/2026-03/site-pages/{objectId}/revisions">client.cms.pages.sitePages.revisions.<a href="./src/resources/cms/pages/site-pages/revisions.ts">listSitePageRevisions</a>(objectID, { ...params }) -> PageVersionsPage</code>
- <code title="post /cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}/restore">client.cms.pages.sitePages.revisions.<a href="./src/resources/cms/pages/site-pages/revisions.ts">restoreSitePageRevision</a>(revisionID, { ...params }) -> PagesPage</code>
- <code title="post /cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}/restore-to-draft">client.cms.pages.sitePages.revisions.<a href="./src/resources/cms/pages/site-pages/revisions.ts">restoreSitePageRevisionToDraft</a>(revisionID, { ...params }) -> PagesPage</code>

## SiteSearch

Types:

- <code><a href="./src/resources/cms/site-search.ts">IndexedData</a></code>
- <code><a href="./src/resources/cms/site-search.ts">IndexedField</a></code>

Methods:

- <code title="get /cms/site-search/2026-03/indexed-data/{contentId}">client.cms.siteSearch.<a href="./src/resources/cms/site-search.ts">getIndexedData</a>(contentID, { ...params }) -> IndexedData</code>

## SourceCode

Types:

- <code><a href="./src/resources/cms/source-code.ts">AssetFileMetadata</a></code>
- <code><a href="./src/resources/cms/source-code.ts">FileExtractRequest</a></code>

Methods:

- <code title="post /cms/source-code/2026-03/extract/async">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">extractAsync</a>({ ...params }) -> TaskLocator</code>
- <code title="get /cms/source-code/2026-03/extract/async/tasks/{taskId}/status">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">getExtractionStatus</a>(taskID) -> ActionResponse</code>

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
- <code title="post /cms/url-redirects/2026-03/url-mappings">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">createURLMapping</a>({ ...params }) -> Response</code>
- <code title="delete /cms/url-redirects/2026-03/url-mappings/{id}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">deleteURLMapping</a>(id) -> void</code>
- <code title="get /cms/url-redirects/2026-03/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">get</a>(urlRedirectID) -> URLMapping</code>
- <code title="get /cms/url-redirects/2026-03/url-mappings/{id}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">getURLMapping</a>(id) -> Response</code>
- <code title="get /cms/url-redirects/2026-03/url-mappings">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">listURLMappings</a>() -> Response</code>
