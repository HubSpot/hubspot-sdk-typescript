// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ListsAPI from './lists';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Creates a folder with the given information.
   *
   * @example
   * ```ts
   * const listFolderCreateResponse =
   *   await client.crm.lists.folders.create({ name: 'name' });
   * ```
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<ListsAPI.ListFolderCreateResponse> {
    return this._client.post('/crm/v3/lists/folders', { body, ...options });
  }

  /**
   * Deletes the folder with the given Id.
   *
   * @example
   * ```ts
   * await client.crm.lists.folders.delete('folderId');
   * ```
   */
  delete(folderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/lists/folders/${folderID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a folder and recursively includes all folders via the childNodes
   * attribute. The child lists field will be empty in all child nodes. Only the
   * folder retrieved will include the child lists in that folder.
   *
   * @example
   * ```ts
   * const listFolderFetchResponse =
   *   await client.crm.lists.folders.get();
   * ```
   */
  get(
    query: FolderGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListsAPI.ListFolderFetchResponse> {
    return this._client.get('/crm/v3/lists/folders', { query, ...options });
  }

  /**
   * This moves the folder from its current location to a new location. It updates
   * the parent of this folder to the new Id given.
   *
   * @example
   * ```ts
   * const listFolderFetchResponse =
   *   await client.crm.lists.folders.move('newParentFolderId', {
   *     folderId: 'folderId',
   *   });
   * ```
   */
  move(
    newParentFolderID: string,
    params: FolderMoveParams,
    options?: RequestOptions,
  ): APIPromise<ListsAPI.ListFolderFetchResponse> {
    const { folderId } = params;
    return this._client.put(path`/crm/v3/lists/folders/${folderId}/move/${newParentFolderID}`, options);
  }

  /**
   * Given a list and a folder, the list will be moved to that folder.
   *
   * @example
   * ```ts
   * await client.crm.lists.folders.moveList({
   *   listId: 'listId',
   *   newFolderId: 'newFolderId',
   * });
   * ```
   */
  moveList(body: FolderMoveListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/crm/v3/lists/folders/move-list', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Renames the given folderId with a new name.
   *
   * @example
   * ```ts
   * const listFolderFetchResponse =
   *   await client.crm.lists.folders.rename('folderId');
   * ```
   */
  rename(
    folderID: string,
    params: FolderRenameParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListsAPI.ListFolderFetchResponse> {
    const { newFolderName } = params ?? {};
    return this._client.put(path`/crm/v3/lists/folders/${folderID}/rename`, {
      query: { newFolderName },
      ...options,
    });
  }
}

export interface FolderCreateParams {
  /**
   * The name of the folder to be created.
   */
  name: string;

  /**
   * The folder this should be created in, if not specified will be created in the
   * root folder 0.
   */
  parentFolderId?: string;
}

export interface FolderGetParams {
  /**
   * The Id of the folder to retrieve.
   */
  folderId?: string;
}

export interface FolderMoveParams {
  /**
   * The ID of the folder to move
   */
  folderId: string;
}

export interface FolderMoveListParams {
  /**
   * The Id of the list to move.
   */
  listId: string;

  /**
   * The Id of folder to move the list to, the root folder is Id 0.
   */
  newFolderId: string;
}

export interface FolderRenameParams {
  /**
   * The new name of the folder.
   */
  newFolderName?: string;
}

export declare namespace Folders {
  export {
    type FolderCreateParams as FolderCreateParams,
    type FolderGetParams as FolderGetParams,
    type FolderMoveParams as FolderMoveParams,
    type FolderMoveListParams as FolderMoveListParams,
    type FolderRenameParams as FolderRenameParams,
  };
}
