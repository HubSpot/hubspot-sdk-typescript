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

## FileOperations

Methods:

- <code title="patch /files/v3/files/{fileId}">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">update</a>(fileID, { ...params }) -> File</code>
- <code title="delete /files/v3/files/{fileId}">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">delete</a>(fileID) -> void</code>
- <code title="delete /files/v3/files/{fileId}/gdpr-delete">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">gdprDelete</a>(fileID) -> void</code>
- <code title="get /files/v3/files/{fileId}">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">get</a>(fileID, { ...params }) -> File</code>
- <code title="get /files/v3/files/stat/{path}">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">getByPath</a>(filePath, { ...params }) -> FileStat</code>
- <code title="get /files/v3/files/import-from-url/async/tasks/{taskId}/status">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">getImportTaskStatus</a>(taskID) -> FileActionResponse</code>
- <code title="get /files/v3/files/{fileId}/signed-url">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">getSignedURL</a>(fileID, { ...params }) -> SignedURL</code>
- <code title="post /files/v3/files/import-from-url/async">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">importFromURLAsync</a>({ ...params }) -> ImportFromURLTaskLocator</code>
- <code title="put /files/v3/files/{fileId}">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">replace</a>(fileID, { ...params }) -> File</code>
- <code title="get /files/v3/files/search">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">search</a>({ ...params }) -> FilesPage</code>
- <code title="post /files/v3/files">client.files.fileOperations.<a href="./src/resources/files/file-operations.ts">upload</a>({ ...params }) -> File</code>

## Folders

Methods:

- <code title="post /files/v3/folders">client.files.folders.<a href="./src/resources/files/folders.ts">create</a>({ ...params }) -> Folder</code>
- <code title="delete /files/v3/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">deleteByID</a>(folderID) -> void</code>
- <code title="delete /files/v3/folders/{folderPath}">client.files.folders.<a href="./src/resources/files/folders.ts">deleteByPath</a>(folderPath) -> void</code>
- <code title="get /files/v3/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">getByID</a>(folderID, { ...params }) -> Folder</code>
- <code title="get /files/v3/folders/{folderPath}">client.files.folders.<a href="./src/resources/files/folders.ts">getByPath</a>(folderPath, { ...params }) -> Folder</code>
- <code title="get /files/v3/folders/update/async/tasks/{taskId}/status">client.files.folders.<a href="./src/resources/files/folders.ts">getUpdateAsyncStatus</a>(taskID) -> FolderActionResponse</code>
- <code title="get /files/v3/folders/search">client.files.folders.<a href="./src/resources/files/folders.ts">search</a>({ ...params }) -> FoldersPage</code>
- <code title="post /files/v3/folders/update/async">client.files.folders.<a href="./src/resources/files/folders.ts">updateAsyncByID</a>({ ...params }) -> FolderUpdateTaskLocator</code>
- <code title="patch /files/v3/folders/{folderId}">client.files.folders.<a href="./src/resources/files/folders.ts">updateByID</a>(folderID, { ...params }) -> Folder</code>
