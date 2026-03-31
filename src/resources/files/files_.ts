// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import { FilesPage } from './files';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Creates a folder.
   */
  create(body: FileCreateParams, options?: RequestOptions): APIPromise<FilesAPI.Folder> {
    return this._client.post('/files/2026-03/folders', { body, ...options });
  }

  /**
   * Update properties of file by ID.
   */
  update(fileID: string, body: FileUpdateParams, options?: RequestOptions): APIPromise<FilesAPI.File> {
    return this._client.patch(path`/files/2026-03/files/${fileID}`, { body, ...options });
  }

  /**
   * Delete a file by ID
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/2026-03/files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a file in accordance with GDPR regulations.
   */
  gdprDelete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/2026-03/files/${fileID}/gdpr-delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a file by its ID.
   */
  get(
    fileID: string,
    query: FileGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.File> {
    return this._client.get(path`/files/2026-03/files/${fileID}`, { query, ...options });
  }

  /**
   * Retrieve a file by its path.
   */
  getByPath(
    path_: string,
    query: FileGetByPathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FileStat> {
    return this._client.get(path`/files/2026-03/files/stat/${path_}`, { query, ...options });
  }

  /**
   * Check the status of requested import.
   */
  getImportTaskStatus(taskID: string, options?: RequestOptions): APIPromise<FilesAPI.FileActionResponse> {
    return this._client.get(path`/files/2026-03/files/import-from-url/async/tasks/${taskID}/status`, options);
  }

  /**
   * Generates signed URL that allows temporary access to a private file.
   */
  getSignedURL(
    fileID: string,
    query: FileGetSignedURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.SignedURL> {
    return this._client.get(path`/files/2026-03/files/${fileID}/signed-url`, { query, ...options });
  }

  /**
   * Asynchronously imports the file at the given URL into the file manager.
   */
  importFromURLAsync(
    body: FileImportFromURLAsyncParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.ImportFromURLTaskLocator> {
    return this._client.post('/files/2026-03/files/import-from-url/async', { body, ...options });
  }

  /**
   * Replace existing file data with new file data. Can be used to change image
   * content without having to upload a new file and update all references.
   */
  replace(
    fileID: string,
    body: FileReplaceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.File> {
    return this._client.put(
      path`/files/2026-03/files/${fileID}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Search through files in the file manager. Does not display hidden or archived
   * files.
   */
  search(
    query: FileSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FilesPage, FilesAPI.File> {
    return this._client.getAPIList('/files/2026-03/files/search', Page<FilesAPI.File>, { query, ...options });
  }

  /**
   * Upload a single file with content specified in request body.
   */
  upload(
    body: FileUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.File> {
    return this._client.post(
      '/files/2026-03/files',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface FileCreateParams {
  /**
   * Desired name for the folder.
   */
  name: string;

  /**
   * FolderId of the parent of the created folder. If not specified, the folder will
   * be created at the root level. parentFolderId and parentFolderPath cannot be set
   * at the same time.
   */
  parentFolderId?: string;

  /**
   * Path of the parent of the created folder. If not specified the folder will be
   * created at the root level. parentFolderPath and parentFolderId cannot be set at
   * the same time.
   */
  parentPath?: string;
}

export interface FileUpdateParams {
  clearExpires: boolean;

  /**
   * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a
   * duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload
   * a new file and return the found duplicate instead.
   */
  access?:
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'PRIVATE'
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'SENSITIVE';

  expiresAt?: string;

  /**
   * Mark whether the file should be used in new content or not.
   */
  isUsableInContent?: boolean;

  /**
   * New name for the file.
   */
  name?: string;

  /**
   * FolderId where the file should be moved to. folderId and folderPath parameters
   * cannot be set at the same time.
   */
  parentFolderId?: string;

  /**
   * Folder path where the file should be moved to. folderId and folderPath
   * parameters cannot be set at the same time.
   */
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

  size?: 'icon' | 'medium' | 'preview' | 'thumb';

  upscale?: boolean;
}

export interface FileImportFromURLAsyncParams {
  /**
   * PUBLIC_INDEXABLE: File is publicly accessible by anyone who has the URL. Search
   * engines can index the file. PUBLIC_NOT_INDEXABLE: File is publicly accessible by
   * anyone who has the URL. Search engines _can't_ index the file. PRIVATE: File is
   * NOT publicly accessible. Requires a signed URL to see content. Search engines
   * _can't_ index the file.
   */
  access:
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'PRIVATE'
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'SENSITIVE';

  /**
   * ENTIRE_PORTAL: Look for a duplicate file in the entire account. EXACT_FOLDER:
   * Look for a duplicate file in the provided folder.
   */
  duplicateValidationScope: 'ENTIRE_PORTAL' | 'EXACT_FOLDER';

  /**
   * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a
   * duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload
   * a new file and return the found duplicate instead.
   */
  duplicateValidationStrategy: 'NONE' | 'REJECT' | 'RETURN_EXISTING';

  /**
   * If true, will overwrite existing file if one with the same name and extension
   * exists in the given folder. The overwritten file will be deleted and the
   * uploaded file will take its place with a new ID. If unset or set as false, the
   * new file's name will be updated to prevent colliding with existing file if one
   * exists with the same path, name, and extension
   */
  overwrite: boolean;

  /**
   * Specifies the date and time when the file will expire.
   */
  expiresAt?: string;

  /**
   * One of folderId or folderPath is required. Destination folderId for the uploaded
   * file.
   */
  folderId?: string;

  /**
   * One of folderPath or folderId is required. Destination folder path for the
   * uploaded file. If the folder path does not exist, there will be an attempt to
   * create the folder path.
   */
  folderPath?: string;

  /**
   * Name to give the resulting file in the file manager.
   */
  name?: string;

  /**
   * Time to live. If specified the file will be deleted after the given time frame.
   * If left unset, the file will exist indefinitely
   */
  ttl?: string;

  /**
   * URL to download the new file from.
   */
  url?: string;
}

export interface FileReplaceParams {
  charsetHunch?: string;

  file?: Uploadable;

  options?: string;
}

export interface FileSearchParams extends PageParams {
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
    type FileCreateParams as FileCreateParams,
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

export { type FilesPage };
