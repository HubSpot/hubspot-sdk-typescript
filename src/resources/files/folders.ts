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
  /**
   * Properties to set on returned folder.
   */
  properties?: Array<string>;
}

export interface FolderGetByPathParams {
  /**
   * Properties to set on returned folder.
   */
  properties?: Array<string>;
}

export interface FolderSearchParams extends PageParams {
  /**
   * Search folders updated before this timestamp. Time must be epoch time in
   * milliseconds.
   */
  before?: string;

  /**
   * Search folders by exact time of creation. Time must be epoch time in
   * milliseconds.
   */
  createdAt?: string;

  /**
   * Search folders by greater than or equal to time of creation. Can be used with
   * createdAtLte to create a range.
   */
  createdAtGte?: string;

  /**
   * Search folders by less than or equal to time of creation. Can be used with
   * createdAtGte to create a range.
   */
  createdAtLte?: string;

  /**
   * Search folders by greater than or equal to ID. Can be used with idLte to create
   * a range.
   */
  idGte?: number;

  /**
   * Search folders by less than or equal to ID. Can be used with idGte to create a
   * range.
   */
  idLte?: number;

  /**
   * Search folders by multiple IDs. Comma-separated list of folder IDs.
   */
  ids?: Array<number>;

  /**
   * Search for folders containing the specified name.
   */
  name?: string;

  parentFolderIds?: Array<number>;

  /**
   * Search folders by path.
   */
  path?: string;

  /**
   * Properties that should be included in the returned folders.
   */
  properties?: Array<string>;

  /**
   * Sort results by given property. For example -name sorts by name field
   * descending, name sorts by name field ascending.
   */
  sort?: Array<string>;

  /**
   * Search folders by exact time of latest updated. Time must be epoch time in
   * milliseconds.
   */
  updatedAt?: string;

  /**
   * Search folders by greater than or equal to time of latest update. Can be used
   * with updatedAtLte to create a range.
   */
  updatedAtGte?: string;

  /**
   * Search folders by less than or equal to time of latest update. Can be used with
   * updatedAtGte to create a range.
   */
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
