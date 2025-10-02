// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as TasksAPI from './tasks';
import { TaskGetStatusResponse, Tasks } from './tasks';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';

export class Async extends APIResource {
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

  /**
   * Update folder properties
   */
  create(body: AsyncCreateParams, options?: RequestOptions): APIPromise<AsyncCreateResponse> {
    return this._client.post('/files/v3/folders/update/async', { body, ...options });
  }
}

export interface AsyncCreateResponse {
  id: string;

  links: { [key: string]: string };
}

export interface AsyncCreateParams {
  id: string;

  name?: string;

  parentFolderId?: number;
}

Async.Tasks = Tasks;

export declare namespace Async {
  export { type AsyncCreateResponse as AsyncCreateResponse, type AsyncCreateParams as AsyncCreateParams };

  export { Tasks as Tasks, type TaskGetStatusResponse as TaskGetStatusResponse };
}
