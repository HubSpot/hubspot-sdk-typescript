# Files

Types:

- <code><a href="./src/resources/files/files.ts">CollectionResponseFile</a></code>
- <code><a href="./src/resources/files/files.ts">CollectionResponseFolder</a></code>
- <code><a href="./src/resources/files/files.ts">File</a></code>
- <code><a href="./src/resources/files/files.ts">FileActionResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FileStat</a></code>
- <code><a href="./src/resources/files/files.ts">FileUpdateInput</a></code>
- <code><a href="./src/resources/files/files.ts">Folder</a></code>
- <code><a href="./src/resources/files/files.ts">FolderActionResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FolderInput</a></code>
- <code><a href="./src/resources/files/files.ts">FolderUpdateInput</a></code>
- <code><a href="./src/resources/files/files.ts">FolderUpdateInputWithID</a></code>
- <code><a href="./src/resources/files/files.ts">FolderUpdateTaskLocator</a></code>
- <code><a href="./src/resources/files/files.ts">ImportFromURLInput</a></code>
- <code><a href="./src/resources/files/files.ts">ImportFromURLTaskLocator</a></code>
- <code><a href="./src/resources/files/files.ts">SignedURL</a></code>

## FileAssets

Methods:

- <code title="post /files/2026-03/folders">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">create</a>({ ...params }) -> Folder</code>
- <code title="patch /files/2026-03/files/{fileId}">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">update</a>(fileID, { ...params }) -> File</code>
- <code title="delete /files/2026-03/files/{fileId}">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">delete</a>(fileID) -> void</code>
- <code title="delete /files/2026-03/files/{fileId}/gdpr-delete">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">gdprDelete</a>(fileID) -> void</code>
- <code title="get /files/2026-03/files/{fileId}">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">get</a>(fileID, { ...params }) -> File</code>
- <code title="get /files/2026-03/files/stat/{path}">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">getByPath</a>(path\_, { ...params }) -> FileStat</code>
- <code title="get /files/2026-03/files/import-from-url/async/tasks/{taskId}/status">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">getImportTaskStatus</a>(taskID) -> FileActionResponse</code>
- <code title="get /files/2026-03/files/{fileId}/signed-url">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">getSignedURL</a>(fileID, { ...params }) -> SignedURL</code>
- <code title="post /files/2026-03/files/import-from-url/async">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">importFromURLAsync</a>({ ...params }) -> ImportFromURLTaskLocator</code>
- <code title="put /files/2026-03/files/{fileId}">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">replace</a>(fileID, { ...params }) -> File</code>
- <code title="get /files/2026-03/files/search">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">search</a>({ ...params }) -> FilesPage</code>
- <code title="post /files/2026-03/files">client.files.fileAssets.<a href="./src/resources/files/file-assets.ts">upload</a>({ ...params }) -> File</code>

## Folders

Methods:

- <code title="delete /files/2026-03/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">deleteByID</a>(folderID) -> void</code>
- <code title="delete /files/2026-03/folders/{folderPath}">client.files.folders.<a href="./src/resources/files/folders.ts">deleteByPath</a>(folderPath) -> void</code>
- <code title="get /files/2026-03/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">getByID</a>(folderID, { ...params }) -> Folder</code>
- <code title="get /files/2026-03/folders/{folderPath}">client.files.folders.<a href="./src/resources/files/folders.ts">getByPath</a>(folderPath, { ...params }) -> Folder</code>
- <code title="get /files/2026-03/folders/update/async/tasks/{taskId}/status">client.files.folders.<a href="./src/resources/files/folders.ts">getUpdateAsyncStatus</a>(taskID) -> FolderActionResponse</code>
- <code title="get /files/2026-03/folders/search">client.files.folders.<a href="./src/resources/files/folders.ts">search</a>({ ...params }) -> FoldersPage</code>
- <code title="post /files/2026-03/folders/update/async">client.files.folders.<a href="./src/resources/files/folders.ts">updateAsyncByID</a>({ ...params }) -> FolderUpdateTaskLocator</code>
- <code title="patch /files/2026-03/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">updateByID</a>(folderID, { ...params }) -> Folder</code>
