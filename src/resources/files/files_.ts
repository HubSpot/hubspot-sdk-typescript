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
  /**
   * How long in seconds the link will provide access to the file.
   */
  expirationSeconds?: number;

  /**
   * For image files. This will resize the image to the desired size before sharing.
   * Does not affect the original file, just the file served by this signed URL.
   */
  size?: 'icon' | 'medium' | 'preview' | 'thumb';

  /**
   * If size is provided, this will upscale the image to fit the size dimensions.
   */
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
  /**
   * Search files by access. If 'true' will show only public files; if 'false' will
   * show only private files
   */
  allowsAnonymousAccess?: boolean;

  /**
   * Search files updated before this timestamp. Time must be epoch time in
   * milliseconds.
   */
  before?: string;

  /**
   * Search files by exact time of creation. Time must be epoch time in milliseconds.
   */
  createdAt?: string;

  /**
   * Search files by greater than or equal to time of creation. Can be used with
   * createdAtLte to create a range.
   */
  createdAtGte?: string;

  /**
   * Search files by less than or equal to time of creation. Can be used with
   * createdAtGte to create a range.
   */
  createdAtLte?: string;

  /**
   * Search files by specified encoding.
   */
  encoding?: string;

  /**
   * Search files by exact expires time. Time must be epoch time in milliseconds.
   */
  expiresAt?: string;

  /**
   * Search files by greater than or equal to expires time. Can be used with
   * expiresAtLte to create a range.
   */
  expiresAtGte?: string;

  /**
   * Search files by less than or equal to expires time. Can be used with
   * expiresAtGte to create a range.
   */
  expiresAtLte?: string;

  /**
   * Search files by given extension.
   */
  extension?: string;

  /**
   * Search files by specific md5 hash.
   */
  fileMd5?: string;

  /**
   * Search files by height of image or video.
   */
  height?: number;

  /**
   * Search files by greater than or equal to height of image or video. Can be used
   * with heightLte to create a range.
   */
  heightGte?: number;

  /**
   * Search files by less than or equal to height of image or video. Can be used with
   * heightGte to create a range.
   */
  heightLte?: number;

  /**
   * Search files by greater than or equal to ID. Can be used with idLte to create a
   * range.
   */
  idGte?: number;

  /**
   * Search files by less than or equal to ID. Can be used with idGte to create a
   * range.
   */
  idLte?: number;

  ids?: Array<number>;

  /**
   * If true shows files that have been marked to be used in new content. It false
   * shows files that should not be used in new content.
   */
  isUsableInContent?: boolean;

  /**
   * Search for files containing the given name.
   */
  name?: string;

  parentFolderIds?: Array<number>;

  /**
   * Search files by path.
   */
  path?: string;

  /**
   * Desired file properties in the return object.
   */
  properties?: Array<string>;

  /**
   * Search files by exact file size in bytes.
   */
  size?: number;

  /**
   * Search files by greater than or equal to file size. Can be used with sizeLte to
   * create a range.
   */
  sizeGte?: number;

  /**
   * Search files by less than or equal to file size. Can be used with sizeGte to
   * create a range.
   */
  sizeLte?: number;

  /**
   * Sort files by a given field.
   */
  sort?: Array<string>;

  /**
   * Search files by file type.
   */
  type?: string;

  /**
   * Search files by exact time of latest updated. Time must be epoch time in
   * milliseconds.
   */
  updatedAt?: string;

  /**
   * Search files by greater than or equal to time of latest update. Can be used with
   * updatedAtLte to create a range.
   */
  updatedAtGte?: string;

  /**
   * Search files by less than or equal to time of latest update. Can be used with
   * updatedAtGte to create a range.
   */
  updatedAtLte?: string;

  /**
   * Search for given URL
   */
  url?: string;

  /**
   * Search files by width of image or video.
   */
  width?: number;

  /**
   * Search files by greater than or equal to width of image or video. Can be used
   * with widthLte to create a range.
   */
  widthGte?: number;

  /**
   * Search files by less than or equal to width of image or video. Can be used with
   * widthGte to create a range.
   */
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
