// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PagesAPI from './pages';
import { ContentFolderVersionsPage, ContentFoldersPage } from './pages';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Create a new folder for landing pages.
   */
  createFolder(body: FolderCreateFolderParams, options?: RequestOptions): APIPromise<PagesAPI.ContentFolder> {
    return this._client.post('/cms/pages/2026-03/landing-pages/folders', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a landing page folder, specified by its ID.
   */
  deleteFolder(
    objectID: string,
    params: FolderDeleteFolderParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/cms/pages/2026-03/landing-pages/folders/${objectID}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a landing page folder, specified by its ID.
   */
  getFolder(
    objectID: string,
    query: FolderGetFolderParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PagesAPI.ContentFolder> {
    return this._client.get(path`/cms/pages/2026-03/landing-pages/folders/${objectID}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve a previous version of a folder, specified by the folder ID and revision
   * ID.
   */
  getFolderRevision(
    revisionID: string,
    params: FolderGetFolderRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.ContentFolderVersion> {
    const { objectId } = params;
    return this._client.get(
      path`/cms/pages/2026-03/landing-pages/folders/${objectId}/revisions/${revisionID}`,
      options,
    );
  }

  /**
   * Retrieve a batch of landing page folders as identified in the request body.
   */
  getFoldersBatch(
    params: FolderGetFoldersBatchParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponseContentFolder> {
    const { archived, ...body } = params;
    return this._client.post('/cms/pages/2026-03/landing-pages/folders/batch/read', {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all the previous versions of a landing page folder.
   */
  listFolderRevisions(
    objectID: string,
    query: FolderListFolderRevisionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ContentFolderVersionsPage, PagesAPI.ContentFolderVersion> {
    return this._client.getAPIList(
      path`/cms/pages/2026-03/landing-pages/folders/${objectID}/revisions`,
      Page<PagesAPI.ContentFolderVersion>,
      { query, ...options },
    );
  }

  /**
   * Get the list of Landing Page Folders. Supports paging and filtering. This method
   * would be useful for an integration that examined these models and used an
   * external service to suggest edits.
   */
  listFolders(
    query: FolderListFoldersParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ContentFoldersPage, PagesAPI.ContentFolder> {
    return this._client.getAPIList('/cms/pages/2026-03/landing-pages/folders', Page<PagesAPI.ContentFolder>, {
      query,
      ...options,
    });
  }

  /**
   * Takes a specified version of a landing page folder and restores it.
   */
  restoreFolderRevision(
    revisionID: string,
    params: FolderRestoreFolderRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.ContentFolder> {
    const { objectId } = params;
    return this._client.post(
      path`/cms/pages/2026-03/landing-pages/folders/${objectId}/revisions/${revisionID}/restore`,
      options,
    );
  }

  /**
   * Partially update a landing page folder, specified by the folder ID. You only
   * need to specify the details values that you are modifying.
   */
  updateFolder(
    objectID: string,
    params: FolderUpdateFolderParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.ContentFolder> {
    const { archived, ...body } = params;
    return this._client.patch(path`/cms/pages/2026-03/landing-pages/folders/${objectID}`, {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }
}

export interface FolderCreateFolderParams {
  /**
   * The unique ID of the content folder.
   */
  id: string;

  /**
   * The type of object this folder applies to. Should always be LANDING_PAGE.
   */
  category: number;

  /**
   * The timestamp indicating when the content folder was created.
   */
  created: string;

  /**
   * The timestamp (ISO8601 format) when this content folder was deleted.
   */
  deletedAt: string;

  /**
   * The name of the folder which will show up in the app dashboard
   */
  name: string;

  /**
   * The ID of the content folder this folder is nested under
   */
  parentFolderId: number;

  /**
   * The timestamp indicating when the content folder was last updated.
   */
  updated: string;
}

export interface FolderDeleteFolderParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface FolderGetFolderParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  property?: string;
}

export interface FolderGetFolderRevisionParams {
  objectId: string;
}

export interface FolderGetFoldersBatchParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface FolderListFolderRevisionsParams extends PageParams {
  before?: string;
}

export interface FolderListFoldersParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  createdAfter?: string;

  createdAt?: string;

  createdBefore?: string;

  property?: string;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface FolderRestoreFolderRevisionParams {
  objectId: string;
}

export interface FolderUpdateFolderParams {
  /**
   * Body param: The unique ID of the content folder.
   */
  id: string;

  /**
   * Body param: The type of object this folder applies to. Should always be
   * LANDING_PAGE.
   */
  category: number;

  /**
   * Body param: The timestamp indicating when the content folder was created.
   */
  created: string;

  /**
   * Body param: The timestamp (ISO8601 format) when this content folder was deleted.
   */
  deletedAt: string;

  /**
   * Body param: The name of the folder which will show up in the app dashboard
   */
  name: string;

  /**
   * Body param: The ID of the content folder this folder is nested under
   */
  parentFolderId: number;

  /**
   * Body param: The timestamp indicating when the content folder was last updated.
   */
  updated: string;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export declare namespace Folders {
  export {
    type FolderCreateFolderParams as FolderCreateFolderParams,
    type FolderDeleteFolderParams as FolderDeleteFolderParams,
    type FolderGetFolderParams as FolderGetFolderParams,
    type FolderGetFolderRevisionParams as FolderGetFolderRevisionParams,
    type FolderGetFoldersBatchParams as FolderGetFoldersBatchParams,
    type FolderListFolderRevisionsParams as FolderListFolderRevisionsParams,
    type FolderListFoldersParams as FolderListFoldersParams,
    type FolderRestoreFolderRevisionParams as FolderRestoreFolderRevisionParams,
    type FolderUpdateFolderParams as FolderUpdateFolderParams,
  };
}

export { type ContentFolderVersionsPage, type ContentFoldersPage };
