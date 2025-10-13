// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Creates a folder.
   *
   * @example
   * ```ts
   * const folder = await client.files.folders.create({
   *   name: 'name',
   * });
   * ```
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<FilesAPI.Folder> {
    return this._client.post('/files/v3/folders', { body, ...options });
  }

  /**
   * Delete folder by ID.
   *
   * @example
   * ```ts
   * await client.files.folders.deleteByID('321669910225');
   * ```
   */
  deleteByID(folderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/folders/${folderID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a folder, identified by its path.
   *
   * @example
   * ```ts
   * await client.files.folders.deleteByPath('folderPath');
   * ```
   */
  deleteByPath(folderPath: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/v3/folders/${folderPath}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a folder by its ID.
   *
   * @example
   * ```ts
   * const folder = await client.files.folders.getByID(
   *   '321669910225',
   * );
   * ```
   */
  getByID(
    folderID: string,
    query: FolderGetByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.Folder> {
    return this._client.get(path`/files/v3/folders/${folderID}`, { query, ...options });
  }

  /**
   * Retrieve a folder, identified by its path.
   *
   * @example
   * ```ts
   * const folder = await client.files.folders.getByPath(
   *   'folderPath',
   * );
   * ```
   */
  getByPath(
    folderPath: string,
    query: FolderGetByPathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.Folder> {
    return this._client.get(path`/files/v3/folders/${folderPath}`, { query, ...options });
  }

  /**
   * Check status of folder update. Folder updates happen asynchronously.
   *
   * @example
   * ```ts
   * const folderActionResponse =
   *   await client.files.folders.getUpdateAsyncStatus('taskId');
   * ```
   */
  getUpdateAsyncStatus(taskID: string, options?: RequestOptions): APIPromise<FilesAPI.FolderActionResponse> {
    return this._client.get(path`/files/v3/folders/update/async/tasks/${taskID}/status`, options);
  }

  /**
   * Search for folders. Does not contain hidden or archived folders.
   *
   * @example
   * ```ts
   * const collectionResponseFolder =
   *   await client.files.folders.search();
   * ```
   */
  search(
    query: FolderSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.CollectionResponseFolder> {
    return this._client.get('/files/v3/folders/search', { query, ...options });
  }

  /**
   * Update properties of folder by given ID. This action happens asynchronously and
   * will update all of the folder's children as well.
   *
   * @example
   * ```ts
   * const folderUpdateTaskLocator =
   *   await client.files.folders.updateAsync({ id: 'id' });
   * ```
   */
  updateAsync(
    body: FolderUpdateAsyncParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FolderUpdateTaskLocator> {
    return this._client.post('/files/v3/folders/update/async', { body, ...options });
  }

  /**
   * Update a folder's properties, identified by folder ID.
   *
   * @example
   * ```ts
   * const folder = await client.files.folders.updateByID(
   *   '321669910225',
   * );
   * ```
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

export interface FolderSearchParams {
  /**
   * Offset search results by this value. The default offset is 0 and the maximum
   * offset of items for a given search is 10,000. Narrow your search down if you are
   * reaching this limit.
   */
  after?: string;

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

  idGte?: number;

  idLte?: number;

  ids?: Array<number>;

  /**
   * Number of items to return. Default limit is 10, maximum limit is 100.
   */
  limit?: number;

  /**
   * Search for folders containing the specified name.
   */
  name?: string;

  /**
   * Search folders with the given parent folderId.
   */
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

export interface FolderUpdateAsyncParams {
  /**
   * The unique identifier of the folder to be updated.
   */
  id: string;

  /**
   * The new name for the folder, which will also update the fullPath and all
   * children of the folder.
   */
  name?: string;

  /**
   * The ID of the new parent folder, which will move the folder and its children
   * into the specified folder.
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
    type FolderCreateParams as FolderCreateParams,
    type FolderGetByIDParams as FolderGetByIDParams,
    type FolderGetByPathParams as FolderGetByPathParams,
    type FolderSearchParams as FolderSearchParams,
    type FolderUpdateAsyncParams as FolderUpdateAsyncParams,
    type FolderUpdateByIDParams as FolderUpdateByIDParams,
  };
}
