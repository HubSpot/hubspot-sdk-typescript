# Cms

Types:

- <code><a href="./src/resources/cms/cms.ts">Angle</a></code>
- <code><a href="./src/resources/cms/cms.ts">AttachToLangPrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/cms.ts">BackgroundImage</a></code>
- <code><a href="./src/resources/cms/cms.ts">BatchInputJsonNode</a></code>
- <code><a href="./src/resources/cms/cms.ts">BreakpointStyles</a></code>
- <code><a href="./src/resources/cms/cms.ts">ColorStop</a></code>
- <code><a href="./src/resources/cms/cms.ts">ContentCloneRequestVNext</a></code>
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
- <code><a href="./src/resources/cms/cms.ts">Styles</a></code>
- <code><a href="./src/resources/cms/cms.ts">UpdateLanguagesRequestVNext</a></code>

## AuditLogs

Types:

- <code><a href="./src/resources/cms/audit-logs.ts">CollectionResponsePublicAuditLog</a></code>
- <code><a href="./src/resources/cms/audit-logs.ts">PublicAuditLog</a></code>

Methods:

- <code title="get /cms/v3/audit-logs/">client.cms.auditLogs.<a href="./src/resources/cms/audit-logs.ts">list</a>({ ...params }) -> PublicAuditLogsPage</code>

## Blogs

### Authors

Types:

- <code><a href="./src/resources/cms/blogs/authors.ts">BatchInputBlogAuthor</a></code>
- <code><a href="./src/resources/cms/blogs/authors.ts">BatchResponseBlogAuthor</a></code>
- <code><a href="./src/resources/cms/blogs/authors.ts">BatchResponseBlogAuthorWithErrors</a></code>
- <code><a href="./src/resources/cms/blogs/authors.ts">BlogAuthor</a></code>
- <code><a href="./src/resources/cms/blogs/authors.ts">BlogAuthorCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/authors.ts">CollectionResponseWithTotalBlogAuthorForwardPaging</a></code>

Methods:

- <code title="post /cms/v3/blogs/authors">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">create</a>({ ...params }) -> BlogAuthor</code>
- <code title="patch /cms/v3/blogs/authors/{objectId}">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">update</a>(objectID, { ...params }) -> BlogAuthor</code>
- <code title="get /cms/v3/blogs/authors">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">list</a>({ ...params }) -> BlogAuthorsPage</code>
- <code title="delete /cms/v3/blogs/authors/{objectId}">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/v3/blogs/authors/multi-language/attach-to-lang-group">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">attachToLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/authors/batch/create">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">createBatch</a>({ ...params }) -> BatchResponseBlogAuthor</code>
- <code title="post /cms/v3/blogs/authors/multi-language/create-language-variation">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">createLanguageVariation</a>({ ...params }) -> BlogAuthor</code>
- <code title="post /cms/v3/blogs/authors/batch/archive">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">deleteBatch</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/authors/multi-language/detach-from-lang-group">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">detachFromLangGroup</a>({ ...params }) -> void</code>
- <code title="get /cms/v3/blogs/authors/{objectId}">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">get</a>(objectID, { ...params }) -> BlogAuthor</code>
- <code title="post /cms/v3/blogs/authors/batch/read">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">getBatch</a>({ ...params }) -> BatchResponseBlogAuthor</code>
- <code title="put /cms/v3/blogs/authors/multi-language/set-new-lang-primary">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">setNewLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/authors/batch/update">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">updateBatch</a>({ ...params }) -> BatchResponseBlogAuthor</code>
- <code title="post /cms/v3/blogs/authors/multi-language/update-languages">client.cms.blogs.authors.<a href="./src/resources/cms/blogs/authors.ts">updateLanguages</a>({ ...params }) -> void</code>

### Posts

Types:

- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchInputBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchResponseBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchResponseBlogPostWithErrors</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BlogPostLanguageCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">CollectionResponseWithTotalBlogPostForwardPaging</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">CollectionResponseWithTotalVersionBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">ContentLanguageVariation</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">VersionBlogPost</a></code>

Methods:

- <code title="post /cms/v3/blogs/posts">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">create</a>({ ...params }) -> BlogPost</code>
- <code title="patch /cms/v3/blogs/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">update</a>(objectID, { ...params }) -> BlogPost</code>
- <code title="get /cms/v3/blogs/posts">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">list</a>({ ...params }) -> BlogPostsPage</code>
- <code title="delete /cms/v3/blogs/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/v3/blogs/posts/multi-language/attach-to-lang-group">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">attachToLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/posts/clone">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">clone</a>({ ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/multi-language/create-language-variation">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">createLangVariation</a>({ ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/multi-language/detach-from-lang-group">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">detachFromLangGroup</a>({ ...params }) -> void</code>
- <code title="get /cms/v3/blogs/posts/{objectId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">get</a>(objectID, { ...params }) -> BlogPost</code>
- <code title="get /cms/v3/blogs/posts/{objectId}/draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">getDraftByID</a>(objectID) -> BlogPost</code>
- <code title="get /cms/v3/blogs/posts/{objectId}/revisions/{revisionId}">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">getPreviousVersion</a>(revisionID, { ...params }) -> VersionBlogPost</code>
- <code title="get /cms/v3/blogs/posts/{objectId}/revisions">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">getPreviousVersions</a>(objectID, { ...params }) -> VersionBlogPostsPage</code>
- <code title="post /cms/v3/blogs/posts/{objectId}/draft/push-live">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">pushLive</a>(objectID) -> void</code>
- <code title="post /cms/v3/blogs/posts/{objectId}/draft/reset">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">resetDraft</a>(objectID) -> void</code>
- <code title="post /cms/v3/blogs/posts/{objectId}/revisions/{revisionId}/restore">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">restorePreviousVersion</a>(revisionID, { ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/{objectId}/revisions/{revisionId}/restore-to-draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">restorePreviousVersionToDraft</a>(revisionID, { ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/schedule">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">schedule</a>({ ...params }) -> void</code>
- <code title="put /cms/v3/blogs/posts/multi-language/set-new-lang-primary">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">setLangPrimary</a>({ ...params }) -> void</code>
- <code title="patch /cms/v3/blogs/posts/{objectId}/draft">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">updateDraft</a>(objectID, { ...params }) -> BlogPost</code>
- <code title="post /cms/v3/blogs/posts/multi-language/update-languages">client.cms.blogs.posts.<a href="./src/resources/cms/blogs/posts/posts.ts">updateLangs</a>({ ...params }) -> void</code>

#### Batch

Methods:

- <code title="post /cms/v3/blogs/posts/batch/create">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">create</a>({ ...params }) -> BatchResponseBlogPost</code>
- <code title="post /cms/v3/blogs/posts/batch/update">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">update</a>({ ...params }) -> BatchResponseBlogPost</code>
- <code title="post /cms/v3/blogs/posts/batch/archive">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/posts/batch/read">client.cms.blogs.posts.batch.<a href="./src/resources/cms/blogs/posts/batch.ts">get</a>({ ...params }) -> BatchResponseBlogPost</code>

### Settings

Types:

- <code><a href="./src/resources/cms/blogs/settings.ts">Blog</a></code>
- <code><a href="./src/resources/cms/blogs/settings.ts">BlogLanguageCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/settings.ts">CollectionResponseWithTotalBlogForwardPaging</a></code>
- <code><a href="./src/resources/cms/blogs/settings.ts">CollectionResponseWithTotalVersionBlog</a></code>
- <code><a href="./src/resources/cms/blogs/settings.ts">VersionBlog</a></code>

Methods:

- <code title="get /cms/v3/blog-settings/settings">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings.ts">list</a>({ ...params }) -> BlogsPage</code>
- <code title="post /cms/v3/blog-settings/settings/multi-language/attach-to-lang-group">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings.ts">attachToLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blog-settings/settings/multi-language/create-language-variation">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings.ts">createLanguageVariation</a>({ ...params }) -> Blog</code>
- <code title="post /cms/v3/blog-settings/settings/multi-language/detach-from-lang-group">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings.ts">detachFromLangGroup</a>({ ...params }) -> void</code>
- <code title="get /cms/v3/blog-settings/settings/{blogId}">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings.ts">get</a>(blogID) -> Blog</code>
- <code title="get /cms/v3/blog-settings/settings/{blogId}/revisions/{revisionId}">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings.ts">getRevision</a>(revisionID, { ...params }) -> VersionBlog</code>
- <code title="get /cms/v3/blog-settings/settings/{blogId}/revisions">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings.ts">listRevisions</a>(blogID, { ...params }) -> VersionBlogsPage</code>
- <code title="put /cms/v3/blog-settings/settings/multi-language/set-new-lang-primary">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings.ts">setNewLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blog-settings/settings/multi-language/update-languages">client.cms.blogs.settings.<a href="./src/resources/cms/blogs/settings.ts">updateLanguages</a>({ ...params }) -> void</code>

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
- <code title="post /cms/v3/blogs/tags/multi-language/attach-to-lang-group">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">attachToLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/batch/create">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">createBatch</a>({ ...params }) -> BatchResponseTag</code>
- <code title="post /cms/v3/blogs/tags/multi-language/create-language-variation">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">createLangVariation</a>({ ...params }) -> Tag</code>
- <code title="post /cms/v3/blogs/tags/batch/archive">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">deleteBatch</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/multi-language/detach-from-lang-group">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">detachFromLangGroup</a>({ ...params }) -> void</code>
- <code title="get /cms/v3/blogs/tags/{objectId}">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">get</a>(objectID, { ...params }) -> Tag</code>
- <code title="post /cms/v3/blogs/tags/batch/read">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">getBatch</a>({ ...params }) -> BatchResponseTag</code>
- <code title="put /cms/v3/blogs/tags/multi-language/set-new-lang-primary">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">setLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/blogs/tags/batch/update">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">updateBatch</a>({ ...params }) -> BatchResponseTag</code>
- <code title="post /cms/v3/blogs/tags/multi-language/update-languages">client.cms.blogs.tags.<a href="./src/resources/cms/blogs/tags.ts">updateLangs</a>({ ...params }) -> void</code>

## Domains

Types:

- <code><a href="./src/resources/cms/domains.ts">CollectionResponseWithTotalDomainForwardPaging</a></code>
- <code><a href="./src/resources/cms/domains.ts">Domain</a></code>

Methods:

- <code title="get /cms/v3/domains/">client.cms.domains.<a href="./src/resources/cms/domains.ts">list</a>({ ...params }) -> DomainsPage</code>
- <code title="get /cms/v3/domains/{domainId}">client.cms.domains.<a href="./src/resources/cms/domains.ts">get</a>(domainID) -> Domain</code>

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
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">StreamingCollectionResponseWithTotalHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">UnifiedCollectionResponseWithTotalBaseHubDBTableRowV3</a></code>
- <code><a href="./src/resources/cms/hubdb/hubdb.ts">Variant</a></code>

### Rows

Methods:

- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">create</a>(tableIDOrName, { ...params }) -> HubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">list</a>(tableIDOrName, { ...params }) -> HubDBTableRowV3WrappersPage</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft/clone">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">cloneDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">deleteDraft</a>(rowID, { ...params }) -> void</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">get</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">getDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">listDraft</a>(tableIDOrName, { ...params }) -> HubDBTableRowV3WrappersPage</code>
- <code title="put /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">replaceDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>
- <code title="patch /cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft">client.cms.hubdb.rows.<a href="./src/resources/cms/hubdb/rows/rows.ts">updateDraft</a>(rowID, { ...params }) -> HubDBTableRowV3</code>

#### Batch

Methods:

- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/clone">client.cms.hubdb.rows.batch.<a href="./src/resources/cms/hubdb/rows/batch.ts">cloneBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/create">client.cms.hubdb.rows.batch.<a href="./src/resources/cms/hubdb/rows/batch.ts">createBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/batch/read">client.cms.hubdb.rows.batch.<a href="./src/resources/cms/hubdb/rows/batch.ts">getBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/read">client.cms.hubdb.rows.batch.<a href="./src/resources/cms/hubdb/rows/batch.ts">getDraftBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/purge">client.cms.hubdb.rows.batch.<a href="./src/resources/cms/hubdb/rows/batch.ts">purgeBatch</a>(tableIDOrName, { ...params }) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/replace">client.cms.hubdb.rows.batch.<a href="./src/resources/cms/hubdb/rows/batch.ts">replaceBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/update">client.cms.hubdb.rows.batch.<a href="./src/resources/cms/hubdb/rows/batch.ts">updateBatch</a>(tableIDOrName, { ...params }) -> BatchResponseHubDBTableRowV3</code>

### Tables

Methods:

- <code title="post /cms/v3/hubdb/tables">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">create</a>({ ...params }) -> HubDBTableV3</code>
- <code title="get /cms/v3/hubdb/tables">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">list</a>({ ...params }) -> HubDBTableV3sPage</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">delete</a>(tableIDOrName) -> void</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/clone">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">cloneDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="delete /cms/v3/hubdb/tables/{tableIdOrName}/versions/{versionId}">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">deleteVersion</a>(versionID, { ...params }) -> void</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/export">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">export</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/draft/export">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">exportDraft</a>(tableIDOrName, { ...params }) -> Response</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">get</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="get /cms/v3/hubdb/tables/{tableIdOrName}/draft">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">getDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/import">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">importDraft</a>(tableIDOrName, { ...params }) -> ImportResult</code>
- <code title="get /cms/v3/hubdb/tables/draft">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">listDraft</a>({ ...params }) -> HubDBTableV3sPage</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/publish">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">publishDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/draft/reset">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">resetDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="post /cms/v3/hubdb/tables/{tableIdOrName}/unpublish">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">unpublish</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>
- <code title="patch /cms/v3/hubdb/tables/{tableIdOrName}/draft">client.cms.hubdb.tables.<a href="./src/resources/cms/hubdb/tables.ts">updateDraft</a>(tableIDOrName, { ...params }) -> HubDBTableV3</code>

## MediaBridge

Types:

- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AbsoluteValue</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AddNumbers</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AddTime</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">And</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AttentionSpanCalculatedValues</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AttentionSpanEvent</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">AttentionSpanEventRequest</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BatchResponsePropertyWithErrors</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BeginsWith</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BooleanPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BooleanTargetPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">BulkIntegratorObjectCreationResponse</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CaseChangeTestExtensionData</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">CollectionResponsePropertyGroupNoPaging</a></code>
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
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Expression</a></code>
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
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ObjectTypeDefinition</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">ObjectTypeDefinitionPatch</a></code>
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
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">PropertyGroup</a></code>
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
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">TimestampOfPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">TimestampOfTargetPropertyVariable</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">UpperCase</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Xor</a></code>
- <code><a href="./src/resources/cms/media-bridge/media-bridge.ts">Year</a></code>

### Events

Methods:

- <code title="post /media-bridge/v1/events/attention-span">client.cms.mediaBridge.events.<a href="./src/resources/cms/media-bridge/events.ts">createAttentionSpanEvent</a>({ ...params }) -> AttentionSpanEvent</code>
- <code title="post /media-bridge/v1/events/media-played">client.cms.mediaBridge.events.<a href="./src/resources/cms/media-bridge/events.ts">createMediaPlayedEvent</a>({ ...params }) -> MediaPlayedEvent</code>
- <code title="post /media-bridge/v1/events/media-played-percent">client.cms.mediaBridge.events.<a href="./src/resources/cms/media-bridge/events.ts">createMediaPlayedPercentEvent</a>({ ...params }) -> MediaPlayedPercentageEvent</code>

### Groups

Methods:

- <code title="post /media-bridge/v1/{appId}/properties/{objectType}/groups">client.cms.mediaBridge.groups.<a href="./src/resources/cms/media-bridge/groups.ts">create</a>(objectType, { ...params }) -> PropertyGroup</code>
- <code title="get /media-bridge/v1/{appId}/properties/{objectType}/groups">client.cms.mediaBridge.groups.<a href="./src/resources/cms/media-bridge/groups.ts">list</a>(objectType, { ...params }) -> CollectionResponsePropertyGroupNoPaging</code>
- <code title="delete /media-bridge/v1/{appId}/properties/{objectType}/groups/{groupName}">client.cms.mediaBridge.groups.<a href="./src/resources/cms/media-bridge/groups.ts">deleteByName</a>(groupName, { ...params }) -> void</code>
- <code title="get /media-bridge/v1/{appId}/properties/{objectType}/groups/{groupName}">client.cms.mediaBridge.groups.<a href="./src/resources/cms/media-bridge/groups.ts">getByName</a>(groupName, { ...params }) -> PropertyGroup</code>
- <code title="patch /media-bridge/v1/{appId}/properties/{objectType}/groups/{groupName}">client.cms.mediaBridge.groups.<a href="./src/resources/cms/media-bridge/groups.ts">updateByName</a>(groupName, { ...params }) -> PropertyGroup</code>

### IntegratorSettings

Methods:

- <code title="post /media-bridge/v1/{appId}/settings/object-definitions">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">createObjectDefinition</a>(appID, { ...params }) -> BulkIntegratorObjectCreationResponse</code>
- <code title="post /media-bridge/v1/{appId}/settings/oembed-domains">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">createOembedDomain</a>(appID, { ...params }) -> IntegratorOEmbedDomainModel</code>
- <code title="delete /media-bridge/v1/{appId}/settings/oembed-domains">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">deleteOembedDomain</a>(appID, { ...params }) -> void</code>
- <code title="get /media-bridge/v1/{appId}/settings/event-visibility">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">getEventVisibilitySettings</a>(appID) -> EventVisibilityResponse</code>
- <code title="get /media-bridge/v1/{appId}/settings/object-definitions/{mediaType}">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">getObjectDefinitionsByMediaType</a>(mediaType, { ...params }) -> ObjectDefinitionResponse</code>
- <code title="get /media-bridge/v1/{appId}/settings/oembed-domains/{oEmbedDomainId}">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">getOembedDomain</a>(oEmbedDomainID, { ...params }) -> IntegratorOEmbedDomainModel</code>
- <code title="get /media-bridge/v1/{appId}/settings/oembed-domains">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">listOembedDomains</a>(appID, { ...params }) -> OEmbedDomainsCollectionResponse</code>
- <code title="post /media-bridge/v1/{appId}/settings/register">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">registerAppName</a>(appID, { ...params }) -> MediaBridgeProviderRegistrationResponse</code>
- <code title="put /media-bridge/v1/{appId}/settings">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">updateAppName</a>(appID, { ...params }) -> MediaBridgeProviderRegistrationResponse</code>
- <code title="patch /media-bridge/v1/{appId}/settings/event-visibility">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">updateEventVisibilitySettings</a>(appID, { ...params }) -> EventVisibilityChange</code>
- <code title="patch /media-bridge/v1/{appId}/settings/oembed-domains/{oEmbedDomainId}">client.cms.mediaBridge.integratorSettings.<a href="./src/resources/cms/media-bridge/integrator-settings.ts">updateOembedDomain</a>(oEmbedDomainID, { ...params }) -> IntegratorOEmbedDomainModel</code>

### Properties

Methods:

- <code title="post /media-bridge/v1/{appId}/properties/{objectType}">client.cms.mediaBridge.properties.<a href="./src/resources/cms/media-bridge/properties.ts">create</a>(objectType, { ...params }) -> Property</code>
- <code title="patch /media-bridge/v1/{appId}/properties/{objectType}/{propertyName}">client.cms.mediaBridge.properties.<a href="./src/resources/cms/media-bridge/properties.ts">update</a>(propertyName, { ...params }) -> Property</code>
- <code title="get /media-bridge/v1/{appId}/properties/{objectType}">client.cms.mediaBridge.properties.<a href="./src/resources/cms/media-bridge/properties.ts">list</a>(objectType, { ...params }) -> CollectionResponsePropertyNoPaging</code>
- <code title="delete /media-bridge/v1/{appId}/properties/{objectType}/{propertyName}">client.cms.mediaBridge.properties.<a href="./src/resources/cms/media-bridge/properties.ts">delete</a>(propertyName, { ...params }) -> void</code>
- <code title="post /media-bridge/v1/{appId}/properties/{objectType}/batch/create">client.cms.mediaBridge.properties.<a href="./src/resources/cms/media-bridge/properties.ts">createBatch</a>(objectType, { ...params }) -> BatchResponseProperty</code>
- <code title="post /media-bridge/v1/{appId}/properties/{objectType}/batch/archive">client.cms.mediaBridge.properties.<a href="./src/resources/cms/media-bridge/properties.ts">deleteBatch</a>(objectType, { ...params }) -> void</code>
- <code title="get /media-bridge/v1/{appId}/properties/{objectType}/{propertyName}">client.cms.mediaBridge.properties.<a href="./src/resources/cms/media-bridge/properties.ts">get</a>(propertyName, { ...params }) -> Property</code>
- <code title="post /media-bridge/v1/{appId}/properties/{objectType}/batch/read">client.cms.mediaBridge.properties.<a href="./src/resources/cms/media-bridge/properties.ts">getBatch</a>(objectType, { ...params }) -> BatchResponseProperty</code>

### Schemas

Types:

- <code><a href="./src/resources/cms/media-bridge/schemas.ts">SchemaListResponse</a></code>

Methods:

- <code title="patch /media-bridge/v1/{appId}/schemas/{objectType}">client.cms.mediaBridge.schemas.<a href="./src/resources/cms/media-bridge/schemas.ts">update</a>(objectType, { ...params }) -> ObjectsSchemasObjectTypeDefinition</code>
- <code title="get /media-bridge/v1/{appId}/schemas">client.cms.mediaBridge.schemas.<a href="./src/resources/cms/media-bridge/schemas.ts">list</a>(appID, { ...params }) -> SchemaListResponse</code>
- <code title="post /media-bridge/v1/{appId}/schemas/{objectType}/associations">client.cms.mediaBridge.schemas.<a href="./src/resources/cms/media-bridge/schemas.ts">createAssociation</a>(objectType, { ...params }) -> AssociationDefinition</code>
- <code title="delete /media-bridge/v1/{appId}/schemas/{objectType}/associations/{associationId}">client.cms.mediaBridge.schemas.<a href="./src/resources/cms/media-bridge/schemas.ts">deleteAssociation</a>(associationID, { ...params }) -> void</code>
- <code title="get /media-bridge/v1/{appId}/schemas/{objectType}">client.cms.mediaBridge.schemas.<a href="./src/resources/cms/media-bridge/schemas.ts">get</a>(objectType, { ...params }) -> ObjectSchema</code>

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
- <code><a href="./src/resources/cms/pages/pages.ts">CollectionResponseWithTotalPageForwardPaging</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">CollectionResponseWithTotalVersionContentFolder</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">CollectionResponseWithTotalVersionPage</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">ContentFolder</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">ContentLanguageCloneRequestVNext</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">Page</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">PagesContentLanguageVariation</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">VersionContentFolder</a></code>
- <code><a href="./src/resources/cms/pages/pages.ts">VersionPage</a></code>

### LandingPages

Methods:

- <code title="post /cms/v3/pages/landing-pages">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">create</a>({ ...params }) -> void</code>
- <code title="patch /cms/v3/pages/landing-pages/{objectId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">update</a>(objectID, { ...params }) -> Page</code>
- <code title="get /cms/v3/pages/landing-pages">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">list</a>({ ...params }) -> PagesPage</code>
- <code title="delete /cms/v3/pages/landing-pages/{objectId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/v3/pages/landing-pages/multi-language/attach-to-lang-group">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">attachToLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/pages/landing-pages/clone">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">clone</a>({ ...params }) -> Page</code>
- <code title="post /cms/v3/pages/landing-pages/ab-test/create-variation">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">createAbTestVariation</a>({ ...params }) -> Page</code>
- <code title="post /cms/v3/pages/landing-pages/batch/create">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">createBatch</a>({ ...params }) -> BatchResponsePage</code>
- <code title="post /cms/v3/pages/landing-pages/folders">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">createFolder</a>({ ...params }) -> ContentFolder</code>
- <code title="post /cms/v3/pages/landing-pages/folders/batch/create">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">createFoldersBatch</a>({ ...params }) -> BatchResponseContentFolder</code>
- <code title="post /cms/v3/pages/landing-pages/multi-language/create-language-variation">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">createLanguageVariation</a>({ ...params }) -> Page</code>
- <code title="post /cms/v3/pages/landing-pages/batch/archive">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">deleteBatch</a>({ ...params }) -> void</code>
- <code title="delete /cms/v3/pages/landing-pages/folders/{objectId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">deleteFolder</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/v3/pages/landing-pages/folders/batch/archive">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">deleteFoldersBatch</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/pages/landing-pages/multi-language/detach-from-lang-group">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">detachFromLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/pages/landing-pages/ab-test/end">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">endAbTest</a>({ ...params }) -> void</code>
- <code title="get /cms/v3/pages/landing-pages/{objectId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">get</a>(objectID, { ...params }) -> Page</code>
- <code title="post /cms/v3/pages/landing-pages/batch/read">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">getBatch</a>({ ...params }) -> BatchResponsePage</code>
- <code title="get /cms/v3/pages/landing-pages/{objectId}/draft">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">getDraft</a>(objectID) -> Page</code>
- <code title="get /cms/v3/pages/landing-pages/folders/{objectId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">getFolder</a>(objectID, { ...params }) -> ContentFolder</code>
- <code title="get /cms/v3/pages/landing-pages/folders/{objectId}/revisions/{revisionId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">getFolderRevision</a>(revisionID, { ...params }) -> VersionContentFolder</code>
- <code title="post /cms/v3/pages/landing-pages/folders/batch/read">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">getFoldersBatch</a>({ ...params }) -> BatchResponseContentFolder</code>
- <code title="get /cms/v3/pages/landing-pages/{objectId}/revisions/{revisionId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">getRevision</a>(revisionID, { ...params }) -> VersionPage</code>
- <code title="get /cms/v3/pages/landing-pages/folders/{objectId}/revisions">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">listFolderRevisions</a>(objectID, { ...params }) -> VersionContentFoldersPage</code>
- <code title="get /cms/v3/pages/landing-pages/folders">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">listFolders</a>({ ...params }) -> ContentFoldersPage</code>
- <code title="get /cms/v3/pages/landing-pages/{objectId}/revisions">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">listRevisions</a>(objectID, { ...params }) -> VersionPagesPage</code>
- <code title="post /cms/v3/pages/landing-pages/{objectId}/draft/push-live">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">publishDraft</a>(objectID) -> void</code>
- <code title="post /cms/v3/pages/landing-pages/ab-test/rerun">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">rerunAbTest</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/pages/landing-pages/{objectId}/draft/reset">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">resetDraft</a>(objectID) -> void</code>
- <code title="post /cms/v3/pages/landing-pages/folders/{objectId}/revisions/{revisionId}/restore">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">restoreFolderRevision</a>(revisionID, { ...params }) -> ContentFolder</code>
- <code title="post /cms/v3/pages/landing-pages/{objectId}/revisions/{revisionId}/restore">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">restoreRevision</a>(revisionID, { ...params }) -> Page</code>
- <code title="post /cms/v3/pages/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">restoreRevisionToDraft</a>(revisionID, { ...params }) -> Page</code>
- <code title="post /cms/v3/pages/landing-pages/schedule">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">schedule</a>({ ...params }) -> void</code>
- <code title="put /cms/v3/pages/landing-pages/multi-language/set-new-lang-primary">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">setNewLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/pages/landing-pages/batch/update">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">updateBatch</a>({ ...params }) -> BatchResponsePage</code>
- <code title="patch /cms/v3/pages/landing-pages/{objectId}/draft">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">updateDraft</a>(objectID, { ...params }) -> Page</code>
- <code title="patch /cms/v3/pages/landing-pages/folders/{objectId}">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">updateFolder</a>(objectID, { ...params }) -> ContentFolder</code>
- <code title="post /cms/v3/pages/landing-pages/folders/batch/update">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">updateFoldersBatch</a>({ ...params }) -> BatchResponseContentFolder</code>
- <code title="post /cms/v3/pages/landing-pages/multi-language/update-languages">client.cms.pages.landingPages.<a href="./src/resources/cms/pages/landing-pages.ts">updateLanguages</a>({ ...params }) -> void</code>

### SitePages

Methods:

- <code title="post /cms/v3/pages/site-pages">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">create</a>({ ...params }) -> void</code>
- <code title="patch /cms/v3/pages/site-pages/{objectId}">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">update</a>(objectID, { ...params }) -> Page</code>
- <code title="get /cms/v3/pages/site-pages">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">list</a>({ ...params }) -> PagesPage</code>
- <code title="delete /cms/v3/pages/site-pages/{objectId}">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /cms/v3/pages/site-pages/multi-language/attach-to-lang-group">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">attachToLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/pages/site-pages/clone">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">clone</a>({ ...params }) -> Page</code>
- <code title="post /cms/v3/pages/site-pages/ab-test/create-variation">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">createAbTestVariation</a>({ ...params }) -> Page</code>
- <code title="post /cms/v3/pages/site-pages/batch/create">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">createBatch</a>({ ...params }) -> BatchResponsePage</code>
- <code title="post /cms/v3/pages/site-pages/multi-language/create-language-variation">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">createLanguageVariation</a>({ ...params }) -> Page</code>
- <code title="post /cms/v3/pages/site-pages/batch/archive">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">deleteBatch</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/pages/site-pages/multi-language/detach-from-lang-group">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">detachFromLangGroup</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/pages/site-pages/ab-test/end">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">endAbTest</a>({ ...params }) -> void</code>
- <code title="get /cms/v3/pages/site-pages/{objectId}">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">get</a>(objectID, { ...params }) -> Page</code>
- <code title="post /cms/v3/pages/site-pages/batch/read">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">getBatch</a>({ ...params }) -> BatchResponsePage</code>
- <code title="get /cms/v3/pages/site-pages/{objectId}/draft">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">getDraft</a>(objectID) -> Page</code>
- <code title="get /cms/v3/pages/site-pages/{objectId}/revisions/{revisionId}">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">getRevision</a>(revisionID, { ...params }) -> VersionPage</code>
- <code title="get /cms/v3/pages/site-pages/{objectId}/revisions">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">listRevisions</a>(objectID, { ...params }) -> VersionPagesPage</code>
- <code title="post /cms/v3/pages/site-pages/{objectId}/draft/push-live">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">publishDraft</a>(objectID) -> void</code>
- <code title="post /cms/v3/pages/site-pages/ab-test/rerun">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">rerunAbTest</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/pages/site-pages/{objectId}/draft/reset">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">resetDraft</a>(objectID) -> void</code>
- <code title="post /cms/v3/pages/site-pages/{objectId}/revisions/{revisionId}/restore">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">restoreRevision</a>(revisionID, { ...params }) -> Page</code>
- <code title="post /cms/v3/pages/site-pages/{objectId}/revisions/{revisionId}/restore-to-draft">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">restoreRevisionToDraft</a>(revisionID, { ...params }) -> Page</code>
- <code title="post /cms/v3/pages/site-pages/schedule">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">schedule</a>({ ...params }) -> void</code>
- <code title="put /cms/v3/pages/site-pages/multi-language/set-new-lang-primary">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">setNewLangPrimary</a>({ ...params }) -> void</code>
- <code title="post /cms/v3/pages/site-pages/batch/update">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">updateBatch</a>({ ...params }) -> BatchResponsePage</code>
- <code title="patch /cms/v3/pages/site-pages/{objectId}/draft">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">updateDraft</a>(objectID, { ...params }) -> Page</code>
- <code title="post /cms/v3/pages/site-pages/multi-language/update-languages">client.cms.pages.sitePages.<a href="./src/resources/cms/pages/site-pages.ts">updateLanguages</a>({ ...params }) -> void</code>

## SiteSearch

Types:

- <code><a href="./src/resources/cms/site-search.ts">ContentSearchResult</a></code>
- <code><a href="./src/resources/cms/site-search.ts">IndexedData</a></code>
- <code><a href="./src/resources/cms/site-search.ts">IndexedField</a></code>
- <code><a href="./src/resources/cms/site-search.ts">PublicSearchResults</a></code>

Methods:

- <code title="get /cms/v3/site-search/indexed-data/{contentId}">client.cms.siteSearch.<a href="./src/resources/cms/site-search.ts">getIndexedData</a>(contentID, { ...params }) -> IndexedData</code>
- <code title="get /cms/v3/site-search/search">client.cms.siteSearch.<a href="./src/resources/cms/site-search.ts">search</a>({ ...params }) -> PublicSearchResults</code>

## SourceCode

Types:

- <code><a href="./src/resources/cms/source-code.ts">AssetFileMetadata</a></code>
- <code><a href="./src/resources/cms/source-code.ts">FileExtractRequest</a></code>

Methods:

- <code title="post /cms/v3/source-code/{environment}/content/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">create</a>(filePath, { ...params }) -> AssetFileMetadata</code>
- <code title="delete /cms/v3/source-code/{environment}/content/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">delete</a>(filePath, { ...params }) -> void</code>
- <code title="post /cms/v3/source-code/extract/async">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">extractAsync</a>({ ...params }) -> TaskLocator</code>
- <code title="get /cms/v3/source-code/{environment}/content/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">get</a>(filePath, { ...params }) -> Response</code>
- <code title="get /cms/v3/source-code/extract/async/tasks/{taskId}/status">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">getExtractionStatus</a>(taskID) -> ActionResponse</code>
- <code title="get /cms/v3/source-code/{environment}/metadata/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">getMetadata</a>(filePath, { ...params }) -> AssetFileMetadata</code>
- <code title="put /cms/v3/source-code/{environment}/content/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">upsert</a>(filePath, { ...params }) -> AssetFileMetadata</code>
- <code title="post /cms/v3/source-code/{environment}/validate/{path}">client.cms.sourceCode.<a href="./src/resources/cms/source-code.ts">validate</a>(filePath, { ...params }) -> Response</code>

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
- <code title="get /cms/v3/url-redirects/{urlRedirectId}">client.cms.urlRedirects.<a href="./src/resources/cms/url-redirects.ts">get</a>(urlRedirectID) -> URLMapping</code>
