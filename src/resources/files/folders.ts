// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Create folder
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<FilesAPI.Folder> {
    return this._client.post('/files/v3/folders', { body, ...options });
  }

  /**
   * Delete folder by ID
   */
  deleteByID(folderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/folders/${folderID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete folder by path
   */
  deleteByPath(folderPath: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/folders/${folderPath}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve folder by ID
   */
  getByID(
    folderID: string,
    query: FolderGetByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.Folder> {
    return this._client.get(path`/files/v3/folders/${folderID}`, { query, ...options });
  }

  /**
   * Retrieve folder by path
   */
  getByPath(
    folderPath: string,
    query: FolderGetByPathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.Folder> {
    return this._client.get(path`/files/v3/folders/${folderPath}`, { query, ...options });
  }

  /**
   * Check folder update status
   */
  getUpdateAsyncStatus(taskID: string, options?: RequestOptions): APIPromise<FilesAPI.FolderActionResponse> {
    return this._client.get(path`/files/v3/folders/update/async/tasks/${taskID}/status`, options);
  }

  /**
   * Search folders
   */
  search(
    query: FolderSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.CollectionResponseFolder> {
    return this._client.get('/files/v3/folders/search', { query, ...options });
  }

  /**
   * Update folder properties
   */
  updateAsync(
    body: FolderUpdateAsyncParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FolderUpdateTaskLocator> {
    return this._client.post('/files/v3/folders/update/async', { body, ...options });
  }

  /**
   * Update folder properties by folder ID
   */
  updateByID(
    folderID: string,
    body: FolderUpdateByIDParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.Folder> {
    return this._client.patch(path`/files/v3/folders/${folderID}`, { body, ...options });
  }
}

export interface FolderCreateParams {
  name: string;

  parentFolderId?: string;

  parentPath?: string;
}

export interface FolderGetByIDParams {
  properties?: Array<string>;
}

export interface FolderGetByPathParams {
  properties?: Array<string>;
}

export interface FolderSearchParams {
  after?: string;

  before?: string;

  createdAt?: string;

  createdAtGte?: string;

  createdAtLte?: string;

  idGte?: number;

  idLte?: number;

  ids?: Array<number>;

  limit?: number;

  name?: string;

  parentFolderIds?: Array<number>;

  path?: string;

  properties?: Array<string>;

  sort?: Array<string>;

  updatedAt?: string;

  updatedAtGte?: string;

  updatedAtLte?: string;
}

export interface FolderUpdateAsyncParams {
  id: string;

  name?: string;

  parentFolderId?: number;
}

export interface FolderUpdateByIDParams {
  name?: string;

  parentFolderId?: number;
}

export declare namespace Folders {
  export {
    type FolderCreateParams as FolderCreateParams,
    type FolderGetByIDParams as FolderGetByIDParams,
    type FolderGetByPathParams as FolderGetByPathParams,
    type FolderSearchParams as FolderSearchParams,
    type FolderUpdateAsyncParams as FolderUpdateAsyncParams,
    type FolderUpdateByIDParams as FolderUpdateByIDParams,
  };
}
