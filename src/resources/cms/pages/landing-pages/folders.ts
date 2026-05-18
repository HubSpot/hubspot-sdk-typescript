// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PagesAPI from '../pages';
import { ContentFolderVersionsPage, ContentFoldersPage } from '../pages';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseFolders extends APIResource {
  static override readonly _key: readonly ['cms', 'pages', 'landingPages', 'folders'] = Object.freeze([
    'cms',
    'pages',
    'landingPages',
    'folders',
  ] as const);

  /**
   * Create a new folder for landing pages.
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<PagesAPI.ContentFolder> {
    return this._client.post('/cms/pages/2026-03/landing-pages/folders', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Partially update a landing page folder, specified by the folder ID. You only
   * need to specify the details values that you are modifying.
   */
  update(
    objectID: string,
    params: FolderUpdateParams,
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

  /**
   * Get the list of Landing Page Folders. Supports paging and filtering. This method
   * would be useful for an integration that examined these models and used an
   * external service to suggest edits.
   */
  list(
    query: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ContentFoldersPage, PagesAPI.ContentFolder> {
    return this._client.getAPIList('/cms/pages/2026-03/landing-pages/folders', Page<PagesAPI.ContentFolder>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a landing page folder, specified by its ID.
   */
  delete(
    objectID: string,
    params: FolderDeleteParams | null | undefined = {},
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
   * Retrieve a batch of landing page folders as identified in the request body.
   */
  batchGet(
    params: FolderBatchGetParams,
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
   * Create a batch of folders as detailed in the request body.
   */
  createFolders(
    body: FolderCreateFoldersParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponseContentFolder> {
    return this._client.post('/cms/pages/2026-03/landing-pages/folders/batch/create', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a batch of folders as specified in the request body.
   */
  deleteFolders(body: FolderDeleteFoldersParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/landing-pages/folders/batch/archive', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a landing page folder, specified by its ID.
   */
  get(
    objectID: string,
    query: FolderGetParams | null | undefined = {},
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
  getRevision(
    revisionID: string,
    params: FolderGetRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.ContentFolderVersion> {
    const { objectId } = params;
    return this._client.get(
      path`/cms/pages/2026-03/landing-pages/folders/${objectId}/revisions/${revisionID}`,
      options,
    );
  }

  /**
   * Retrieves all the previous versions of a landing page folder.
   */
  listRevisions(
    objectID: string,
    query: FolderListRevisionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ContentFolderVersionsPage, PagesAPI.ContentFolderVersion> {
    return this._client.getAPIList(
      path`/cms/pages/2026-03/landing-pages/folders/${objectID}/revisions`,
      Page<PagesAPI.ContentFolderVersion>,
      { query, ...options },
    );
  }

  /**
   * Takes a specified version of a landing page folder and restores it.
   */
  restoreRevision(
    revisionID: string,
    params: FolderRestoreRevisionParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.ContentFolder> {
    const { objectId } = params;
    return this._client.post(
      path`/cms/pages/2026-03/landing-pages/folders/${objectId}/revisions/${revisionID}/restore`,
      options,
    );
  }

  /**
   * Update a batch of landing page folders as specified in the request body.
   */
  updateFolders(
    params: FolderUpdateFoldersParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.BatchResponseContentFolder> {
    const { archived, ...body } = params;
    return this._client.post('/cms/pages/2026-03/landing-pages/folders/batch/update', {
      query: { archived },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }
}
export class Folders extends BaseFolders {}

export interface FolderCreateParams {
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

export interface FolderUpdateParams {
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

export interface FolderListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Filter folders created after the specified date and time.
   */
  createdAfter?: string;

  /**
   * Filter folders by their exact creation date and time.
   */
  createdAt?: string;

  createdBefore?: string;

  /**
   * Specify a property to include in the response.
   */
  property?: string;

  sort?: Array<string>;

  updatedAfter?: string;

  updatedAt?: string;

  updatedBefore?: string;
}

export interface FolderDeleteParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface FolderBatchGetParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface FolderCreateFoldersParams {
  /**
   * Content folders to input.
   */
  inputs: Array<PagesAPI.ContentFolder>;
}

export interface FolderDeleteFoldersParams {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface FolderGetParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  property?: string;
}

export interface FolderGetRevisionParams {
  objectId: string;
}

export interface FolderListRevisionsParams extends PageParams {
  before?: string;
}

export interface FolderRestoreRevisionParams {
  objectId: string;
}

export interface FolderUpdateFoldersParams {
  /**
   * Body param: JSON nodes to input.
   */
  inputs: Array<unknown>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export declare namespace Folders {
  export {
    type FolderCreateParams as FolderCreateParams,
    type FolderUpdateParams as FolderUpdateParams,
    type FolderListParams as FolderListParams,
    type FolderDeleteParams as FolderDeleteParams,
    type FolderBatchGetParams as FolderBatchGetParams,
    type FolderCreateFoldersParams as FolderCreateFoldersParams,
    type FolderDeleteFoldersParams as FolderDeleteFoldersParams,
    type FolderGetParams as FolderGetParams,
    type FolderGetRevisionParams as FolderGetRevisionParams,
    type FolderListRevisionsParams as FolderListRevisionsParams,
    type FolderRestoreRevisionParams as FolderRestoreRevisionParams,
    type FolderUpdateFoldersParams as FolderUpdateFoldersParams,
  };
}

export { type ContentFoldersPage, type ContentFolderVersionsPage };
