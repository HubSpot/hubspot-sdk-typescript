// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import { FilesPage } from './files';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Check the status of requested import.
   */
  getImportTaskStatus(taskID: string, options?: RequestOptions): APIPromise<FilesAPI.FileActionResponse> {
    return this._client.get(path`/files/2026-03/files/import-from-url/async/tasks/${taskID}/status`, options);
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
   * Search through files in the file manager. Does not display hidden or archived
   * files.
   */
  search(
    query: FileSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FilesPage, FilesAPI.File> {
    return this._client.getAPIList('/files/2026-03/files/search', Page<FilesAPI.File>, { query, ...options });
  }
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

export declare namespace Files {
  export {
    type FileImportFromURLAsyncParams as FileImportFromURLAsyncParams,
    type FileSearchParams as FileSearchParams,
  };
}

export { type FilesPage };
