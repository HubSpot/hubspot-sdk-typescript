# Files

Types:

- <code><a href="./src/resources/files/files.ts">CollectionResponseFile</a></code>
- <code><a href="./src/resources/files/files.ts">CollectionResponseFolder</a></code>
- <code><a href="./src/resources/files/files.ts">File</a></code>
- <code><a href="./src/resources/files/files.ts">FileActionResponse</a></code>
- <code><a href="./src/resources/files/files.ts">Folder</a></code>
- <code><a href="./src/resources/files/files.ts">FolderActionResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FolderUpdateInput</a></code>
- <code><a href="./src/resources/files/files.ts">FolderUpdateInputWithID</a></code>
- <code><a href="./src/resources/files/files.ts">FolderUpdateTaskLocator</a></code>
- <code><a href="./src/resources/files/files.ts">ImportFromURLInput</a></code>
- <code><a href="./src/resources/files/files.ts">ImportFromURLTaskLocator</a></code>

## Files

Methods:

- <code title="get /files/2026-03/files/import-from-url/async/tasks/{taskId}/status">client.files.files.<a href="./src/resources/files/files_.ts">getImportTaskStatus</a>(taskID) -> FileActionResponse</code>
- <code title="post /files/2026-03/files/import-from-url/async">client.files.files.<a href="./src/resources/files/files_.ts">importFromURLAsync</a>({ ...params }) -> ImportFromURLTaskLocator</code>
- <code title="get /files/2026-03/files/search">client.files.files.<a href="./src/resources/files/files_.ts">search</a>({ ...params }) -> FilesPage</code>

## Folders

Methods:

- <code title="get /files/2026-03/folders/update/async/tasks/{taskId}/status">client.files.folders.<a href="./src/resources/files/folders.ts">getUpdateAsyncStatus</a>(taskID) -> FolderActionResponse</code>
- <code title="get /files/2026-03/folders/search">client.files.folders.<a href="./src/resources/files/folders.ts">search</a>({ ...params }) -> FoldersPage</code>
- <code title="post /files/2026-03/folders/update/async">client.files.folders.<a href="./src/resources/files/folders.ts">updateAsyncByID</a>({ ...params }) -> FolderUpdateTaskLocator</code>
- <code title="patch /files/2026-03/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">updateByID</a>(folderID, { ...params }) -> Folder</code>
