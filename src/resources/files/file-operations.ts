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

export class FileOperations extends APIResource {
  /**
   * Update properties of file by ID.
   *
   * @example
   * ```ts
   * const file = await client.files.fileOperations.update(
   *   '321669910225',
   * );
   * ```
   */
  update(
    fileID: string,
    body: FileOperationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.File> {
    return this._client.patch(path`/files/v3/files/${fileID}`, { body, ...options });
  }

  /**
   * Delete a file by ID
   *
   * @example
   * ```ts
   * await client.files.fileOperations.delete('321669910225');
   * ```
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a file in accordance with GDPR regulations.
   *
   * @example
   * ```ts
   * await client.files.fileOperations.gdprDelete(
   *   '321669910225',
   * );
   * ```
   */
  gdprDelete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/files/${fileID}/gdpr-delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a file by its ID.
   *
   * @example
   * ```ts
   * const file = await client.files.fileOperations.get(
   *   '321669910225',
   * );
   * ```
   */
  get(
    fileID: string,
    query: FileOperationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.File> {
    return this._client.get(path`/files/v3/files/${fileID}`, { query, ...options });
  }

  /**
   * Retrieve a file by its path.
   *
   * @example
   * ```ts
   * const fileStat =
   *   await client.files.fileOperations.getByPath('path');
   * ```
   */
  getByPath(
    path_: string,
    query: FileOperationGetByPathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FileStat> {
    return this._client.get(path`/files/v3/files/stat/${path_}`, { query, ...options });
  }

  /**
   * Check the status of requested import.
   *
   * @example
   * ```ts
   * const fileActionResponse =
   *   await client.files.fileOperations.getImportTaskStatus(
   *     'taskId',
   *   );
   * ```
   */
  getImportTaskStatus(taskID: string, options?: RequestOptions): APIPromise<FilesAPI.FileActionResponse> {
    return this._client.get(path`/files/v3/files/import-from-url/async/tasks/${taskID}/status`, options);
  }

  /**
   * Generates signed URL that allows temporary access to a private file.
   *
   * @example
   * ```ts
   * const signedURL =
   *   await client.files.fileOperations.getSignedURL(
   *     '321669910225',
   *   );
   * ```
   */
  getSignedURL(
    fileID: string,
    query: FileOperationGetSignedURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.SignedURL> {
    return this._client.get(path`/files/v3/files/${fileID}/signed-url`, { query, ...options });
  }

  /**
   * Asynchronously imports the file at the given URL into the file manager.
   *
   * @example
   * ```ts
   * const importFromURLTaskLocator =
   *   await client.files.fileOperations.importFromURLAsync({
   *     access: 'HIDDEN_INDEXABLE',
   *     url: 'url',
   *   });
   * ```
   */
  importFromURLAsync(
    body: FileOperationImportFromURLAsyncParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.ImportFromURLTaskLocator> {
    return this._client.post('/files/v3/files/import-from-url/async', { body, ...options });
  }

  /**
   * Replace existing file data with new file data. Can be used to change image
   * content without having to upload a new file and update all references.
   *
   * @example
   * ```ts
   * const file = await client.files.fileOperations.replace(
   *   '321669910225',
   * );
   * ```
   */
  replace(
    fileID: string,
    body: FileOperationReplaceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.File> {
    return this._client.put(
      path`/files/v3/files/${fileID}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Search through files in the file manager. Does not display hidden or archived
   * files.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const file of client.files.fileOperations.search()) {
   *   // ...
   * }
   * ```
   */
  search(
    query: FileOperationSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FilesPage, FilesAPI.File> {
    return this._client.getAPIList('/files/v3/files/search', Page<FilesAPI.File>, { query, ...options });
  }

  /**
   * Upload a single file with content specified in request body.
   *
   * @example
   * ```ts
   * const file = await client.files.fileOperations.upload();
   * ```
   */
  upload(
    body: FileOperationUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.File> {
    return this._client.post(
      '/files/v3/files',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface FileOperationUpdateParams {
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

  clearExpires?: boolean;

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

export interface FileOperationGetParams {
  properties?: Array<string>;
}

export interface FileOperationGetByPathParams {
  /**
   * Properties to return in the response.
   */
  properties?: Array<string>;
}

export interface FileOperationGetSignedURLParams {
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

export interface FileOperationImportFromURLAsyncParams {
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
   * URL to download the new file from.
   */
  url: string;

  /**
   * ENTIRE_PORTAL: Look for a duplicate file in the entire account. EXACT_FOLDER:
   * Look for a duplicate file in the provided folder.
   */
  duplicateValidationScope?: 'ENTIRE_PORTAL' | 'EXACT_FOLDER';

  /**
   * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a
   * duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload
   * a new file and return the found duplicate instead.
   */
  duplicateValidationStrategy?: 'NONE' | 'REJECT' | 'RETURN_EXISTING';

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
   * If true, will overwrite existing file if one with the same name and extension
   * exists in the given folder. The overwritten file will be deleted and the
   * uploaded file will take its place with a new ID. If unset or set as false, the
   * new file's name will be updated to prevent colliding with existing file if one
   * exists with the same path, name, and extension
   */
  overwrite?: boolean;

  /**
   * Time to live. If specified the file will be deleted after the given time frame.
   * If left unset, the file will exist indefinitely
   */
  ttl?: string;
}

export interface FileOperationReplaceParams {
  /**
   * Character set of given file data.
   */
  charsetHunch?: string;

  /**
   * File data that will replace existing file in the file manager.
   */
  file?: Uploadable;

  /**
   * JSON string representing FileReplaceOptions. Includes options to set the access
   * and expiresAt properties, which will automatically update when the file is
   * replaced.
   */
  options?: string;
}

export interface FileOperationSearchParams extends PageParams {
  /**
   * Search files by access. If `true`, will show only public files. If `false`, will
   * show only private files.
   */
  allowsAnonymousAccess?: boolean;

  before?: string;

  /**
   * Search files by time of creation.
   */
  createdAt?: string;

  /**
   * Search files by greater than or equal to time of creation. Can be used with
   * `createdAtLte` to create a range.
   */
  createdAtGte?: string;

  /**
   * Search files by less than or equal to time of creation. Can be used with
   * `createdAtGte` to create a range.
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
   * `expiresAtLte` to create a range.
   */
  expiresAtGte?: string;

  /**
   * Search files by less than or equal to expires time. Can be used with
   * `expiresAtGte` to create a range.
   */
  expiresAtLte?: string;

  /**
   * Search files by given extension.
   */
  extension?: string;

  /**
   * Search files by a specific md5 hash.
   */
  fileMd5?: string;

  /**
   * Search files by height of image or video.
   */
  height?: number;

  /**
   * Search files by greater than or equal to height of image or video. Can be used
   * with `heightLte` to create a range.
   */
  heightGte?: number;

  /**
   * Search files by less than or equal to height of image or video. Can be used with
   * `heightGte` to create a range.
   */
  heightLte?: number;

  idGte?: number;

  idLte?: number;

  /**
   * Search by a list of file IDs.
   */
  ids?: Array<number>;

  /**
   * If `true`, shows files that have been marked to be used in new content. If
   * `false`, shows files that should not be used in new content.
   */
  isUsableInContent?: boolean;

  /**
   * Search for files containing the given name.
   */
  name?: string;

  /**
   * Search files within given `folderId`.
   */
  parentFolderIds?: Array<number>;

  /**
   * Search files by path.
   */
  path?: string;

  /**
   * A list of file properties to return.
   */
  properties?: Array<string>;

  /**
   * Search files by exact file size in bytes.
   */
  size?: number;

  /**
   * Search files by greater than or equal to file size. Can be used with `sizeLte`
   * to create a range.
   */
  sizeGte?: number;

  /**
   * Search files by less than or equal to file size. Can be used with `sizeGte` to
   * create a range.
   */
  sizeLte?: number;

  /**
   * Sort files by a given field.
   */
  sort?: Array<string>;

  /**
   * Filter by provided file type.
   */
  type?: string;

  /**
   * Search files by time of latest updated.
   */
  updatedAt?: string;

  /**
   * Search files by greater than or equal to time of latest update. Can be used with
   * `updatedAtLte` to create a range.
   */
  updatedAtGte?: string;

  /**
   * Search files by less than or equal to time of latest update. Can be used with
   * `updatedAtGte` to create a range.
   */
  updatedAtLte?: string;

  /**
   * Search by file URL.
   */
  url?: string;

  /**
   * Search files by width of image or video.
   */
  width?: number;

  /**
   * Search files by greater than or equal to width of image or video. Can be used
   * with `widthLte` to create a range.
   */
  widthGte?: number;

  /**
   * Search files by less than or equal to width of image or video. Can be used with
   * `widthGte` to create a range.
   */
  widthLte?: number;
}

export interface FileOperationUploadParams {
  /**
   * Character set of the uploaded file.
   */
  charsetHunch?: string;

  /**
   * File to be uploaded.
   */
  file?: Uploadable;

  /**
   * Desired name for the uploaded file.
   */
  fileName?: string;

  /**
   * Either 'folderId' or 'folderPath' is required. folderId is the ID of the folder
   * the file will be uploaded to.
   */
  folderId?: string;

  /**
   * Either 'folderPath' or 'folderId' is required. This field represents the
   * destination folder path for the uploaded file. If a path doesn't exist, the
   * system will try to create one.
   */
  folderPath?: string;

  /**
   * JSON string representing FileUploadOptions.
   */
  options?: string;
}

export declare namespace FileOperations {
  export {
    type FileOperationUpdateParams as FileOperationUpdateParams,
    type FileOperationGetParams as FileOperationGetParams,
    type FileOperationGetByPathParams as FileOperationGetByPathParams,
    type FileOperationGetSignedURLParams as FileOperationGetSignedURLParams,
    type FileOperationImportFromURLAsyncParams as FileOperationImportFromURLAsyncParams,
    type FileOperationReplaceParams as FileOperationReplaceParams,
    type FileOperationSearchParams as FileOperationSearchParams,
    type FileOperationUploadParams as FileOperationUploadParams,
  };
}

export { type FilesPage };
