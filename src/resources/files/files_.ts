// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Update file properties
   */
  update(fileID: string, body: FileUpdateParams, options?: RequestOptions): APIPromise<FilesAPI.FilesFile> {
    return this._client.patch(path`/files/v3/files/${fileID}`, { body, ...options });
  }

  /**
   * Delete file by ID
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GDPR-delete file
   */
  gdprDelete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/files/${fileID}/gdpr-delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve file by ID
   */
  get(
    fileID: string,
    query: FileGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FilesFile> {
    return this._client.get(path`/files/v3/files/${fileID}`, { query, ...options });
  }

  /**
   * Retrieve file by path
   */
  getByPath(
    path_: string,
    query: FileGetByPathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FilesFileStat> {
    return this._client.get(path`/files/v3/files/stat/${path_}`, { query, ...options });
  }

  /**
   * Check import status
   */
  getImportFromURLAsyncStatus(
    taskID: string,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FilesFileActionResponse> {
    return this._client.get(path`/files/v3/files/import-from-url/async/tasks/${taskID}/status`, options);
  }

  /**
   * Get signed URL to access private file
   */
  getSignedURL(
    fileID: string,
    query: FileGetSignedURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FilesSignedURL> {
    return this._client.get(path`/files/v3/files/${fileID}/signed-url`, { query, ...options });
  }

  /**
   * Import file from URL
   */
  importFromURLAsync(
    body: FileImportFromURLAsyncParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FilesImportFromURLTaskLocator> {
    return this._client.post('/files/v3/files/import-from-url/async', { body, ...options });
  }

  /**
   * Replace file
   */
  replace(
    fileID: string,
    body: FileReplaceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FilesFile> {
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
  ): APIPromise<FilesAPI.FilesCollectionResponseFile> {
    return this._client.get('/files/v3/files/search', { query, ...options });
  }

  /**
   * Upload file
   */
  upload(
    body: FileUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FilesFile> {
    return this._client.post(
      '/files/v3/files',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface FileUpdateParams {
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

export interface FileGetParams {
  properties?: Array<string>;
}

export interface FileGetByPathParams {
  properties?: Array<string>;
}

export interface FileGetSignedURLParams {
  expirationSeconds?: number;

  size?: 'thumb' | 'icon' | 'medium' | 'preview';

  upscale?: boolean;
}

export interface FileImportFromURLAsyncParams {
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
    type FileUpdateParams as FileUpdateParams,
    type FileGetParams as FileGetParams,
    type FileGetByPathParams as FileGetByPathParams,
    type FileGetSignedURLParams as FileGetSignedURLParams,
    type FileImportFromURLAsyncParams as FileImportFromURLAsyncParams,
    type FileReplaceParams as FileReplaceParams,
    type FileSearchParams as FileSearchParams,
    type FileUploadParams as FileUploadParams,
  };
}
