// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DailyAPI from '../../../account-info/v3/api-usage/daily';
import * as FoldersAPI from '../folders/folders';
import * as ImportFromURLAPI from './import-from-url/import-from-url';
import { ImportFromURL } from './import-from-url/import-from-url';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Files extends APIResource {
  importFromURL: ImportFromURLAPI.ImportFromURL = new ImportFromURLAPI.ImportFromURL(this._client);

  /**
   * Retrieve file by ID
   */
  retrieve(
    fileID: string,
    query: FileRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesFile> {
    return this._client.get(path`/files/v3/files/${fileID}`, { query, ...options });
  }

  /**
   * Update file properties
   */
  update(fileID: string, body: FileUpdateParams, options?: RequestOptions): APIPromise<FilesFile> {
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
   * Get signed URL to access private file
   */
  getSignedURL(
    fileID: string,
    query: FileGetSignedURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileGetSignedURLResponse> {
    return this._client.get(path`/files/v3/files/${fileID}/signed-url`, { query, ...options });
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
   * Retrieve file by path
   */
  retrieveByPath(
    path_: string,
    query: FileRetrieveByPathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileRetrieveByPathResponse> {
    return this._client.get(path`/files/v3/files/stat/${path_}`, { query, ...options });
  }

  /**
   * Search files
   */
  search(
    query: FileSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileSearchResponse> {
    return this._client.get('/files/v3/files/search', { query, ...options });
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

export interface FileGetSignedURLResponse {
  expiresAt: string;

  extension: string;

  name: string;

  size: number;

  type: string;

  url: string;

  height?: number;

  width?: number;
}

export interface FileRetrieveByPathResponse {
  file?: FilesFile;

  folder?: FoldersAPI.FilesFolder;
}

export interface FileSearchResponse {
  results: Array<FilesFile>;

  paging?: DailyAPI.Paging;
}

export interface FileRetrieveParams {
  properties?: Array<string>;
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

export interface FileGetSignedURLParams {
  expirationSeconds?: number;

  size?: 'thumb' | 'icon' | 'medium' | 'preview';

  upscale?: boolean;
}

export interface FileReplaceParams {
  charsetHunch?: string;

  file?: Uploadable;

  options?: string;
}

export interface FileRetrieveByPathParams {
  properties?: Array<string>;
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

Files.ImportFromURL = ImportFromURL;

export declare namespace Files {
  export {
    type FilesFile as FilesFile,
    type FileGetSignedURLResponse as FileGetSignedURLResponse,
    type FileRetrieveByPathResponse as FileRetrieveByPathResponse,
    type FileSearchResponse as FileSearchResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileGetSignedURLParams as FileGetSignedURLParams,
    type FileReplaceParams as FileReplaceParams,
    type FileRetrieveByPathParams as FileRetrieveByPathParams,
    type FileSearchParams as FileSearchParams,
    type FileUploadParams as FileUploadParams,
  };

  export { ImportFromURL as ImportFromURL };
}
