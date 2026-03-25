# Cms

## Blogs

Types:

- <code><a href="./src/resources/cms/blogs/blogs.ts">AttachToLangPrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">DetachFromLangGroupRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">PublicAccessRule</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">SetNewLanguagePrimaryRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">UpdateLanguagesRequestVNext</a></code>
- <code><a href="./src/resources/cms/blogs/blogs.ts">VersionUser</a></code>

### Posts

Types:

- <code><a href="./src/resources/cms/blogs/posts/posts.ts">Angle</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BackgroundImage</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchInputBlogPost</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchInputJsonNode</a></code>
- <code><a href="./src/resources/cms/blogs/posts/posts.ts">BatchInputString</a></code>
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
