// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DailyAPI from '../../../account-info/v3/api-usage/daily';
import * as UpdateAPI from './update/update';
import { Update } from './update/update';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Folders extends APIResource {
  update: UpdateAPI.Update = new UpdateAPI.Update(this._client);

  /**
   * Create folder
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<FilesFolder> {
    return this._client.post('/files/v3/folders', { body, ...options });
  }

  /**
   * Retrieve folder by ID
   */
  retrieve(
    folderID: string,
    query: FolderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesFolder> {
    return this._client.get(path`/files/v3/folders/${folderID}`, { query, ...options });
  }

  /**
   * Delete folder by ID
   */
  delete(folderID: string, options?: RequestOptions): APIPromise<void> {
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
   * Retrieve folder by path
   */
  retrieveByPath(
    folderPath: string,
    query: FolderRetrieveByPathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesFolder> {
    return this._client.get(path`/files/v3/folders/${folderPath}`, { query, ...options });
  }

  /**
   * Search folders
   */
  search(
    query: FolderSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderSearchResponse> {
    return this._client.get('/files/v3/folders/search', { query, ...options });
  }
}

export interface FilesFolder {
  id: string;

  archived: boolean;

  createdAt: string;

  updatedAt: string;

  archivedAt?: string;

  name?: string;

  parentFolderId?: string;

  path?: string;
}

export interface FolderSearchResponse {
  results: Array<FilesFolder>;

  paging?: DailyAPI.Paging;
}

export interface FolderCreateParams {
  name: string;

  parentFolderId?: string;

  parentPath?: string;
}

export interface FolderRetrieveParams {
  properties?: Array<string>;
}

export interface FolderRetrieveByPathParams {
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

Folders.Update = Update;

export declare namespace Folders {
  export {
    type FilesFolder as FilesFolder,
    type FolderSearchResponse as FolderSearchResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderRetrieveParams as FolderRetrieveParams,
    type FolderRetrieveByPathParams as FolderRetrieveByPathParams,
    type FolderSearchParams as FolderSearchParams,
  };

  export { Update as Update };
}
