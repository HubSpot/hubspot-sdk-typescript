// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class SourceCode extends APIResource {
  /**
   * Creates a file at the specified path in the specified environment. Accepts
   * multipart/form-data content type. Throws an error if a file already exists at
   * the specified path.
   *
   * @deprecated
   */
  create(
    path_: string,
    params: SourceCodeCreateParams,
    options?: RequestOptions,
  ): APIPromise<SourceCodeCreateResponse> {
    const { environment, ...body } = params;
    return this._client.post(
      path`/cms/v3/source-code/${environment}/content/${path_}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Deletes the file at the specified path in the specified environment.
   *
   * @example
   * ```ts
   * await client.cms.sourceCode.delete('path', {
   *   environment: 'environment',
   * });
   * ```
   */
  delete(path_: string, params: SourceCodeDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { environment } = params;
    return this._client.delete(path`/cms/v3/source-code/${environment}/content/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Extract a zip file in the developer file system. Extraction status can be
   * checked with the `/extract/async/tasks/taskId/status` endpoint below.
   *
   * @example
   * ```ts
   * const taskLocator =
   *   await client.cms.sourceCode.extractAsync({
   *     path: 'path',
   *   });
   * ```
   */
  extractAsync(body: SourceCodeExtractAsyncParams, options?: RequestOptions): APIPromise<Shared.TaskLocator> {
    return this._client.post('/cms/v3/source-code/extract/async', { body, ...options });
  }

  /**
   * Downloads the byte contents of the file at the specified path in the specified
   * environment.
   *
   * @example
   * ```ts
   * const sourceCode = await client.cms.sourceCode.get('path', {
   *   environment: 'environment',
   * });
   *
   * const content = await sourceCode.blob();
   * console.log(content);
   * ```
   */
  get(path_: string, params: SourceCodeGetParams, options?: RequestOptions): APIPromise<Response> {
    const { environment } = params;
    return this._client.get(path`/cms/v3/source-code/${environment}/content/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get the status of an extraction by the `taskId` returned from the initial
   * `extract/async` request.
   *
   * @example
   * ```ts
   * const actionResponse =
   *   await client.cms.sourceCode.getExtractionStatus(0);
   * ```
   */
  getExtractionStatus(taskID: number, options?: RequestOptions): APIPromise<Shared.ActionResponse> {
    return this._client.get(path`/cms/v3/source-code/extract/async/tasks/${taskID}/status`, options);
  }

  /**
   * Gets the metadata object for the file at the specified path in the specified
   * environment.
   *
   * @example
   * ```ts
   * const response = await client.cms.sourceCode.getMetadata(
   *   'path',
   *   { environment: 'environment' },
   * );
   * ```
   */
  getMetadata(
    path_: string,
    params: SourceCodeGetMetadataParams,
    options?: RequestOptions,
  ): APIPromise<SourceCodeGetMetadataResponse> {
    const { environment, ...query } = params;
    return this._client.get(path`/cms/v3/source-code/${environment}/metadata/${path_}`, {
      query,
      ...options,
    });
  }

  /**
   * Upserts a file at the specified path in the specified environment. Accepts
   * multipart/form-data content type.
   *
   * @example
   * ```ts
   * const response = await client.cms.sourceCode.upsert(
   *   'path',
   *   { environment: 'environment' },
   * );
   * ```
   */
  upsert(
    path_: string,
    params: SourceCodeUpsertParams,
    options?: RequestOptions,
  ): APIPromise<SourceCodeUpsertResponse> {
    const { environment, ...body } = params;
    return this._client.put(
      path`/cms/v3/source-code/${environment}/content/${path_}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Validates the file contents passed to the endpoint given a specified path and
   * environment. Accepts multipart/form-data content type.
   *
   * @example
   * ```ts
   * const response = await client.cms.sourceCode.validate(
   *   'path',
   *   { environment: 'environment' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  validate(path_: string, params: SourceCodeValidateParams, options?: RequestOptions): APIPromise<Response> {
    const { environment, ...body } = params;
    return this._client.post(
      path`/cms/v3/source-code/${environment}/validate/${path_}`,
      multipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
          __binaryResponse: true,
        },
        this._client,
      ),
    );
  }
}

export interface SourceCodeCreateResponse {
  /**
   * The path of the file in the CMS Developer File System.
   */
  id: string;

  /**
   * Timestamp of when the object was first created.
   */
  createdAt: number;

  /**
   * Determines whether or not this path points to a folder.
   */
  folder: boolean;

  /**
   * The name of the file.
   */
  name: string;

  /**
   * Timestamp of when the object was last updated.
   */
  updatedAt: number;

  /**
   * Timestamp of when the object was archived (deleted).
   */
  archivedAt?: number;

  /**
   * If the object is a folder, contains the filenames of the files within the
   * folder.
   */
  children?: Array<string>;

  hash?: string;
}

export interface SourceCodeGetMetadataResponse {
  /**
   * The path of the file in the CMS Developer File System.
   */
  id: string;

  /**
   * Timestamp of when the object was first created.
   */
  createdAt: number;

  /**
   * Determines whether or not this path points to a folder.
   */
  folder: boolean;

  /**
   * The name of the file.
   */
  name: string;

  /**
   * Timestamp of when the object was last updated.
   */
  updatedAt: number;

  /**
   * Timestamp of when the object was archived (deleted).
   */
  archivedAt?: number;

  /**
   * If the object is a folder, contains the filenames of the files within the
   * folder.
   */
  children?: Array<string>;

  hash?: string;
}

export interface SourceCodeUpsertResponse {
  /**
   * The path of the file in the CMS Developer File System.
   */
  id: string;

  /**
   * Timestamp of when the object was first created.
   */
  createdAt: number;

  /**
   * Determines whether or not this path points to a folder.
   */
  folder: boolean;

  /**
   * The name of the file.
   */
  name: string;

  /**
   * Timestamp of when the object was last updated.
   */
  updatedAt: number;

  /**
   * Timestamp of when the object was archived (deleted).
   */
  archivedAt?: number;

  /**
   * If the object is a folder, contains the filenames of the files within the
   * folder.
   */
  children?: Array<string>;

  hash?: string;
}

export interface SourceCodeCreateParams {
  /**
   * Path param: The environment of the file ("draft" or "published").
   */
  environment: string;

  /**
   * Body param:
   */
  file?: Uploadable;
}

export interface SourceCodeDeleteParams {
  /**
   * The environment of the file ("draft" or "published").
   */
  environment: string;
}

export interface SourceCodeExtractAsyncParams {
  path: string;
}

export interface SourceCodeGetParams {
  /**
   * The environment of the file ("draft" or "published").
   */
  environment: string;
}

export interface SourceCodeGetMetadataParams {
  /**
   * Path param: The environment of the file ("draft" or "published").
   */
  environment: string;

  /**
   * Query param:
   */
  properties?: string;
}

export interface SourceCodeUpsertParams {
  /**
   * Path param: The environment of the file ("draft" or "published").
   */
  environment: string;

  /**
   * Body param:
   */
  file?: Uploadable;
}

export interface SourceCodeValidateParams {
  /**
   * Path param:
   */
  environment: string;

  /**
   * Body param:
   */
  file?: Uploadable;
}

export declare namespace SourceCode {
  export {
    type SourceCodeCreateResponse as SourceCodeCreateResponse,
    type SourceCodeGetMetadataResponse as SourceCodeGetMetadataResponse,
    type SourceCodeUpsertResponse as SourceCodeUpsertResponse,
    type SourceCodeCreateParams as SourceCodeCreateParams,
    type SourceCodeDeleteParams as SourceCodeDeleteParams,
    type SourceCodeExtractAsyncParams as SourceCodeExtractAsyncParams,
    type SourceCodeGetParams as SourceCodeGetParams,
    type SourceCodeGetMetadataParams as SourceCodeGetMetadataParams,
    type SourceCodeUpsertParams as SourceCodeUpsertParams,
    type SourceCodeValidateParams as SourceCodeValidateParams,
  };
}
