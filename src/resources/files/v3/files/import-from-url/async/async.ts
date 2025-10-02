// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as TasksAPI from './tasks';
import { TaskGetStatusResponse, Tasks } from './tasks';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';

export class Async extends APIResource {
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

  /**
   * Import file from URL
   */
  create(body: AsyncCreateParams, options?: RequestOptions): APIPromise<AsyncCreateResponse> {
    return this._client.post('/files/v3/files/import-from-url/async', { body, ...options });
  }
}

export interface AsyncCreateResponse {
  id: string;

  links: { [key: string]: string };
}

export interface AsyncCreateParams {
  access:
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'SENSITIVE';

  url: string;

  duplicateValidationScope?: 'ENTIRE_PORTAL' | 'EXACT_FOLDER';

  duplicateValidationStrategy?: 'NONE' | 'REJECT' | 'RETURN_EXISTING';

  expiresAt?: string;

  folderId?: string;

  folderPath?: string;

  name?: string;

  overwrite?: boolean;

  ttl?: string;
}

Async.Tasks = Tasks;

export declare namespace Async {
  export { type AsyncCreateResponse as AsyncCreateResponse, type AsyncCreateParams as AsyncCreateParams };

  export { Tasks as Tasks, type TaskGetStatusResponse as TaskGetStatusResponse };
}
