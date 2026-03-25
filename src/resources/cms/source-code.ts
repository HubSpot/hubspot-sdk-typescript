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
   * Upload a content file to a specified environment and path in the HubSpot CMS.
   * This endpoint allows you to add new content files to your HubSpot account by
   * specifying the environment and path where the file should be stored. The request
   * must include a file in binary format.
   *
   * @deprecated
   */
  create(
    path_: string,
    params: SourceCodeCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssetFileMetadata> {
    const { environment, ...body } = params;
    return this._client.post(
      path`/cms/source-code/2026-03/${environment}/content/${path_}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Delete a specific content file from the specified environment in your HubSpot
   * CMS. This operation is useful for removing outdated or unnecessary files from
   * your source code repository. Ensure you have the necessary permissions to
   * perform this action.
   */
  delete(path_: string, params: SourceCodeDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { environment } = params;
    return this._client.delete(path`/cms/source-code/2026-03/${environment}/content/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Initiate an asynchronous extraction of source code files in the HubSpot CMS.
   * This endpoint is useful for handling large file extractions without blocking the
   * client application. Upon acceptance, it returns a task locator that can be used
   * to check the status of the extraction process.
   */
  extractAsync(body: SourceCodeExtractAsyncParams, options?: RequestOptions): APIPromise<Shared.TaskLocator> {
    return this._client.post('/cms/source-code/2026-03/extract/async', { body, ...options });
  }

  /**
   * Retrieve content from the specified environment and path in your HubSpot CMS.
   * This endpoint allows you to access specific content files based on the
   * environment and path parameters, which can be useful for managing and displaying
   * content in different environments.
   */
  get(path_: string, params: SourceCodeGetParams, options?: RequestOptions): APIPromise<Response> {
    const { environment } = params;
    return this._client.get(path`/cms/source-code/2026-03/${environment}/content/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the status of an asynchronous task related to source code extraction.
   * This endpoint is useful for checking the progress or completion of a task
   * initiated through the asynchronous file extraction process.
   */
  getExtractionStatus(taskID: number, options?: RequestOptions): APIPromise<Shared.ActionResponse> {
    return this._client.get(path`/cms/source-code/2026-03/extract/async/tasks/${taskID}/status`, options);
  }

  /**
   * Retrieve metadata for a specific file or folder within a specified environment
   * in the HubSpot CMS. This endpoint is useful for obtaining detailed information
   * about content files, such as their creation and update timestamps, and other
   * metadata attributes.
   */
  getMetadata(
    path_: string,
    params: SourceCodeGetMetadataParams,
    options?: RequestOptions,
  ): APIPromise<AssetFileMetadata> {
    const { environment, ...query } = params;
    return this._client.get(path`/cms/source-code/2026-03/${environment}/metadata/${path_}`, {
      query,
      ...options,
    });
  }

  /**
   * Update the content file in the specified environment and path within the HubSpot
   * CMS. This operation allows you to upload a new file to replace the existing
   * content at the given path. It is useful for managing and updating your website's
   * source code files directly through the API.
   */
  upsert(
    path_: string,
    params: SourceCodeUpsertParams,
    options?: RequestOptions,
  ): APIPromise<AssetFileMetadata> {
    const { environment, ...body } = params;
    return this._client.put(
      path`/cms/source-code/2026-03/${environment}/content/${path_}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Validate a source code file within a specified environment in your HubSpot
   * account. This endpoint is useful for checking the correctness of code files
   * before deployment or further processing. The validation process requires the
   * file to be uploaded in a multipart/form-data request.
   */
  validate(path_: string, params: SourceCodeValidateParams, options?: RequestOptions): APIPromise<Response> {
    const { environment, ...body } = params;
    return this._client.post(
      path`/cms/source-code/2026-03/${environment}/validate/${path_}`,
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

export interface AssetFileMetadata {
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

  /**
   * A unique identifier for the file's content, used to verify data integrity.
   */
  hash?: string;
}

export interface FileExtractRequest {
  /**
   * The file system location where the zip file is to be extracted.
   */
  path: string;
}

export interface SourceCodeCreateParams {
  /**
   * Path param: The environment in which the content file will be uploaded.
   * Typically represents different stages like 'staging' or 'production'.
   */
  environment: string;

  /**
   * Body param
   */
  file?: Uploadable;
}

export interface SourceCodeDeleteParams {
  /**
   * The environment from which the content file will be deleted. This could refer to
   * different stages such as development, staging, or production.
   */
  environment: string;
}

export interface SourceCodeExtractAsyncParams {
  /**
   * The file system location where the zip file is to be extracted.
   */
  path: string;
}

export interface SourceCodeGetParams {
  /**
   * The environment from which to retrieve the content. This identifies the specific
   * context or stage of the content, such as 'staging' or 'production'.
   */
  environment: string;
}

export interface SourceCodeGetMetadataParams {
  /**
   * Path param: The environment in which the file or directory is located, such as
   * 'staging' or 'production'.
   */
  environment: string;

  /**
   * Query param: A comma-separated list of specific metadata properties to include
   * in the response.
   */
  properties?: string;
}

export interface SourceCodeUpsertParams {
  /**
   * Path param: The environment in which the content file is located, such as
   * 'staging' or 'production'.
   */
  environment: string;

  /**
   * Body param
   */
  file?: Uploadable;
}

export interface SourceCodeValidateParams {
  /**
   * Path param
   */
  environment: string;

  /**
   * Body param
   */
  file?: Uploadable;
}

export declare namespace SourceCode {
  export {
    type AssetFileMetadata as AssetFileMetadata,
    type FileExtractRequest as FileExtractRequest,
    type SourceCodeCreateParams as SourceCodeCreateParams,
    type SourceCodeDeleteParams as SourceCodeDeleteParams,
    type SourceCodeExtractAsyncParams as SourceCodeExtractAsyncParams,
    type SourceCodeGetParams as SourceCodeGetParams,
    type SourceCodeGetMetadataParams as SourceCodeGetMetadataParams,
    type SourceCodeUpsertParams as SourceCodeUpsertParams,
    type SourceCodeValidateParams as SourceCodeValidateParams,
  };
}
