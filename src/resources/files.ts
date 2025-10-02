// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Create folder
   */
  create(body: FileCreateParams, options?: RequestOptions): APIPromise<FilesFolder> {
    return this._client.post('/files/v3/folders', { body, ...options });
  }

  /**
   * Delete folder by ID
   */
  delete(folderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/folders/${folderID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete folder by path
   */
  archiveByPath(folderPath: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/folders/${folderPath}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Check import status
   */
  checkImport(taskID: string, options?: RequestOptions): APIPromise<FilesFileActionResponse> {
    return this._client.get(path`/files/v3/files/import-from-url/async/tasks/${taskID}/status`, options);
  }

  /**
   * Check folder update status
   */
  checkUpdateStatus(taskID: string, options?: RequestOptions): APIPromise<FilesFolderActionResponse> {
    return this._client.get(path`/files/v3/folders/update/async/tasks/${taskID}/status`, options);
  }

  /**
   * Retrieve folder by path
   */
  getByPath(
    folderPath: string,
    query: FileGetByPathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesFolder> {
    return this._client.get(path`/files/v3/folders/${folderPath}`, { query, ...options });
  }

  /**
   * Retrieve file by path
   */
  getMetadata(
    path_: string,
    query: FileGetMetadataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesFileStat> {
    return this._client.get(path`/files/v3/files/stat/${path_}`, { query, ...options });
  }

  /**
   * Get signed URL to access private file
   */
  getSignedURL(
    fileID: string,
    query: FileGetSignedURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesSignedURL> {
    return this._client.get(path`/files/v3/files/${fileID}/signed-url`, { query, ...options });
  }

  /**
   * Import file from URL
   */
  importFromURL(
    body: FileImportFromURLParams,
    options?: RequestOptions,
  ): APIPromise<FilesImportFromURLTaskLocator> {
    return this._client.post('/files/v3/files/import-from-url/async', { body, ...options });
  }

  /**
   * GDPR-delete file
   */
  purge(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/files/${fileID}/gdpr-delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve folder by ID
   */
  read(
    folderID: string,
    query: FileReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesFolder> {
    return this._client.get(path`/files/v3/folders/${folderID}`, { query, ...options });
  }

  /**
   * Replace file
   */
  replace(
    fileID: string,
    body: FileReplaceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesFile> {
    return this._client.put(
      path`/files/v3/files/${fileID}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Search files
   */
  search(
    query: FileSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesCollectionResponseFile> {
    return this._client.get('/files/v3/files/search', { query, ...options });
  }

  /**
   * Update folder properties by folder ID
   */
  updateProperties(
    folderID: string,
    body: FileUpdatePropertiesParams,
    options?: RequestOptions,
  ): APIPromise<FilesFolder> {
    return this._client.patch(path`/files/v3/folders/${folderID}`, { body, ...options });
  }

  /**
   * Update folder properties
   */
  updatePropertiesRecursively(
    body: FileUpdatePropertiesRecursivelyParams,
    options?: RequestOptions,
  ): APIPromise<FilesFolderUpdateTaskLocator> {
    return this._client.post('/files/v3/folders/update/async', { body, ...options });
  }

  /**
   * Upload file
   */
  upload(body: FileUploadParams | null | undefined = {}, options?: RequestOptions): APIPromise<FilesFile> {
    return this._client.post(
      '/files/v3/files',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface FilesCollectionResponseFile {
  results: Array<FilesFile>;

  paging?: Shared.Paging;
}

export interface FilesCollectionResponseFolder {
  results: Array<FilesFolder>;

  paging?: Shared.Paging;
}

export interface FilesFile {
  id: string;

  access:
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'SENSITIVE';

  archived: boolean;

  createdAt: string;

  updatedAt: string;

  archivedAt?: string;

  defaultHostingUrl?: string;

  encoding?: string;

  expiresAt?: number;

  extension?: string;

  fileMd5?: string;

  height?: number;

  isUsableInContent?: boolean;

  name?: string;

  parentFolderId?: string;

  path?: string;

  size?: number;

  sourceGroup?: string;

  type?: string;

  url?: string;

  width?: number;
}

export interface FilesFileActionResponse {
  completedAt: string;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  taskId: string;

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;

  result?: FilesFile;
}

export interface FilesFileStat {
  file?: FilesFile;

  folder?: FilesFolder;
}

export interface FilesFileUpdateInput {
  access?:
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'SENSITIVE';

  clearExpires?: boolean;

  expiresAt?: string;

  isUsableInContent?: boolean;

  name?: string;

  parentFolderId?: string;

  parentFolderPath?: string;
}

export interface FilesFolder {
  id: string;

  archived: boolean;

  createdAt: string;

  updatedAt: string;

  archivedAt?: string;

  name?: string;

  parentFolderId?: string;

  path?: string;
}

export interface FilesFolderActionResponse {
  completedAt: string;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  taskId: string;

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;

  result?: FilesFolder;
}

export interface FilesFolderInput {
  name: string;

  parentFolderId?: string;

  parentPath?: string;
}

export interface FilesFolderUpdateInput {
  name?: string;

  parentFolderId?: number;
}

export interface FilesFolderUpdateInputWithID {
  id: string;

  name?: string;

  parentFolderId?: number;
}

export interface FilesFolderUpdateTaskLocator {
  id: string;

  links: { [key: string]: string };
}

export interface FilesImportFromURLInput {
  access:
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'SENSITIVE';

  url: string;

  duplicateValidationScope?: 'ENTIRE_PORTAL' | 'EXACT_FOLDER';

  duplicateValidationStrategy?: 'NONE' | 'REJECT' | 'RETURN_EXISTING';

  expiresAt?: string;

  folderId?: string;

  folderPath?: string;

  name?: string;

  overwrite?: boolean;

  ttl?: string;
}

export interface FilesImportFromURLTaskLocator {
  id: string;

  links: { [key: string]: string };
}

export interface FilesSignedURL {
  expiresAt: string;

  extension: string;

  name: string;

  size: number;

  type: string;

  url: string;

  height?: number;

  width?: number;
}

export interface FileCreateParams {
  name: string;

  parentFolderId?: string;

  parentPath?: string;
}

export interface FileGetByPathParams {
  properties?: Array<string>;
}

export interface FileGetMetadataParams {
  properties?: Array<string>;
}

export interface FileGetSignedURLParams {
  expirationSeconds?: number;

  size?: 'thumb' | 'icon' | 'medium' | 'preview';

  upscale?: boolean;
}

export interface FileImportFromURLParams {
  access:
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'SENSITIVE';

  url: string;

  duplicateValidationScope?: 'ENTIRE_PORTAL' | 'EXACT_FOLDER';

  duplicateValidationStrategy?: 'NONE' | 'REJECT' | 'RETURN_EXISTING';

  expiresAt?: string;

  folderId?: string;

  folderPath?: string;

  name?: string;

  overwrite?: boolean;

  ttl?: string;
}

export interface FileReadParams {
  properties?: Array<string>;
}

export interface FileReplaceParams {
  charsetHunch?: string;

  file?: Uploadable;

  options?: string;
}

export interface FileSearchParams {
  after?: string;

  allowsAnonymousAccess?: boolean;

  before?: string;

  createdAt?: string;

  createdAtGte?: string;

  createdAtLte?: string;

  encoding?: string;

  expiresAt?: string;

  expiresAtGte?: string;

  expiresAtLte?: string;

  extension?: string;

  fileMd5?: string;

  height?: number;

  heightGte?: number;

  heightLte?: number;

  idGte?: number;

  idLte?: number;

  ids?: Array<number>;

  isUsableInContent?: boolean;

  limit?: number;

  name?: string;

  parentFolderIds?: Array<number>;

  path?: string;

  properties?: Array<string>;

  size?: number;

  sizeGte?: number;

  sizeLte?: number;

  sort?: Array<string>;

  type?: string;

  updatedAt?: string;

  updatedAtGte?: string;

  updatedAtLte?: string;

  url?: string;

  width?: number;

  widthGte?: number;

  widthLte?: number;
}

export interface FileUpdatePropertiesParams {
  name?: string;

  parentFolderId?: number;
}

export interface FileUpdatePropertiesRecursivelyParams {
  id: string;

  name?: string;

  parentFolderId?: number;
}

export interface FileUploadParams {
  charsetHunch?: string;

  file?: Uploadable;

  fileName?: string;

  folderId?: string;

  folderPath?: string;

  options?: string;
}

export declare namespace Files {
  export {
    type FilesCollectionResponseFile as FilesCollectionResponseFile,
    type FilesCollectionResponseFolder as FilesCollectionResponseFolder,
    type FilesFile as FilesFile,
    type FilesFileActionResponse as FilesFileActionResponse,
    type FilesFileStat as FilesFileStat,
    type FilesFileUpdateInput as FilesFileUpdateInput,
    type FilesFolder as FilesFolder,
    type FilesFolderActionResponse as FilesFolderActionResponse,
    type FilesFolderInput as FilesFolderInput,
    type FilesFolderUpdateInput as FilesFolderUpdateInput,
    type FilesFolderUpdateInputWithID as FilesFolderUpdateInputWithID,
    type FilesFolderUpdateTaskLocator as FilesFolderUpdateTaskLocator,
    type FilesImportFromURLInput as FilesImportFromURLInput,
    type FilesImportFromURLTaskLocator as FilesImportFromURLTaskLocator,
    type FilesSignedURL as FilesSignedURL,
    type FileCreateParams as FileCreateParams,
    type FileGetByPathParams as FileGetByPathParams,
    type FileGetMetadataParams as FileGetMetadataParams,
    type FileGetSignedURLParams as FileGetSignedURLParams,
    type FileImportFromURLParams as FileImportFromURLParams,
    type FileReadParams as FileReadParams,
    type FileReplaceParams as FileReplaceParams,
    type FileSearchParams as FileSearchParams,
    type FileUpdatePropertiesParams as FileUpdatePropertiesParams,
    type FileUpdatePropertiesRecursivelyParams as FileUpdatePropertiesRecursivelyParams,
    type FileUploadParams as FileUploadParams,
  };
}
