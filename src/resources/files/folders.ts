// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import { FoldersPage } from './files';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Delete folder by ID.
   */
  deleteByID(folderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/2026-03/folders/${folderID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a folder, identified by its path.
   */
  deleteByPath(folderPath: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/2026-03/folders/${folderPath}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a folder by its ID.
   */
  getByID(
    folderID: string,
    query: FolderGetByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.Folder> {
    return this._client.get(path`/files/2026-03/folders/${folderID}`, { query, ...options });
  }

  /**
   * Retrieve a folder, identified by its path.
   */
  getByPath(
    folderPath: string,
    query: FolderGetByPathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.Folder> {
    return this._client.get(path`/files/2026-03/folders/${folderPath}`, { query, ...options });
  }

  /**
   * Check status of folder update. Folder updates happen asynchronously.
   */
  getUpdateAsyncStatus(taskID: string, options?: RequestOptions): APIPromise<FilesAPI.FolderActionResponse> {
    return this._client.get(path`/files/2026-03/folders/update/async/tasks/${taskID}/status`, options);
  }

  /**
   * Search for folders. Does not contain hidden or archived folders.
   */
  search(
    query: FolderSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FoldersPage, FilesAPI.Folder> {
    return this._client.getAPIList('/files/2026-03/folders/search', Page<FilesAPI.Folder>, {
      query,
      ...options,
    });
  }

  /**
   * Update properties of folder by given ID. This action happens asynchronously and
   * will update all of the folder's children as well.
   */
  updateAsyncByID(
    body: FolderUpdateAsyncByIDParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FolderUpdateTaskLocator> {
    return this._client.post('/files/2026-03/folders/update/async', { body, ...options });
  }

  /**
   * Update a folder's properties, identified by folder ID.
   */
  updateByID(
    folderID: string,
    body: FolderUpdateByIDParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.Folder> {
    return this._client.patch(path`/files/2026-03/folders/${folderID}`, { body, ...options });
  }
}

export interface FolderGetByIDParams {
  properties?: Array<string>;
}

export interface FolderGetByPathParams {
  properties?: Array<string>;
}

export interface FolderSearchParams extends PageParams {
  before?: string;

  createdAt?: string;

  createdAtGte?: string;

  createdAtLte?: string;

  idGte?: number;

  idLte?: number;

  ids?: Array<number>;

  name?: string;

  parentFolderIds?: Array<number>;

  path?: string;

  properties?: Array<string>;

  sort?: Array<string>;

  updatedAt?: string;

  updatedAtGte?: string;

  updatedAtLte?: string;
}

export interface FolderUpdateAsyncByIDParams {
  /**
   * The unique identifier of the folder to be updated.
   */
  id: string;

  /**
   * New name. If specified the folder's name and fullPath will change. All children
   * of the folder will be updated accordingly.
   */
  name?: string;

  /**
   * New parent folderId. If changed, the folder and all it's children will be moved
   * into the specified folder. parentFolderId and parentFolderPath cannot be
   * specified at the same time.
   */
  parentFolderId?: number;
}

export interface FolderUpdateByIDParams {
  /**
   * New name. If specified the folder's name and fullPath will change. All children
   * of the folder will be updated accordingly.
   */
  name?: string;

  /**
   * New parent folderId. If changed, the folder and all it's children will be moved
   * into the specified folder. parentFolderId and parentFolderPath cannot be
   * specified at the same time.
   */
  parentFolderId?: number;
}

export declare namespace Folders {
  export {
    type FolderGetByIDParams as FolderGetByIDParams,
    type FolderGetByPathParams as FolderGetByPathParams,
    type FolderSearchParams as FolderSearchParams,
    type FolderUpdateAsyncByIDParams as FolderUpdateAsyncByIDParams,
    type FolderUpdateByIDParams as FolderUpdateByIDParams,
  };
}

export { type FoldersPage };
