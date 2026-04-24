// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSourceCode extends APIResource {
  static override readonly _key: readonly ['cms', 'sourceCode'] = Object.freeze([
    'cms',
    'sourceCode',
  ] as const);

  /**
   * Extract a zip file in the developer file system. Extraction status can be
   * checked with the `/extract/async/tasks/taskId/status` endpoint below.
   */
  extractAsync(body: SourceCodeExtractAsyncParams, options?: RequestOptions): APIPromise<Shared.TaskLocator> {
    return this._client.post('/cms/source-code/2026-03/extract/async', { body, ...options });
  }

  /**
   * Get the status of an extraction by the `taskId` returned from the initial
   * `extract/async` request.
   */
  getExtractionStatus(taskID: number, options?: RequestOptions): APIPromise<Shared.ActionResponse> {
    return this._client.get(path`/cms/source-code/2026-03/extract/async/tasks/${taskID}/status`, options);
  }
}
export class SourceCode extends BaseSourceCode {}

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

export interface SourceCodeExtractAsyncParams {
  /**
   * The file system location where the zip file is to be extracted.
   */
  path: string;
}

export declare namespace SourceCode {
  export {
    type AssetFileMetadata as AssetFileMetadata,
    type FileExtractRequest as FileExtractRequest,
    type SourceCodeExtractAsyncParams as SourceCodeExtractAsyncParams,
  };
}
