// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as BatchAPI from '../../../../../crm/v3/associations/batch';
import * as FilesAPI from '../../files';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Check import status
   */
  getStatus(taskID: string, options?: RequestOptions): APIPromise<TaskGetStatusResponse> {
    return this._client.get(path`/files/v3/files/import-from-url/async/tasks/${taskID}/status`, options);
  }
}

export interface TaskGetStatusResponse {
  completedAt: string;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  taskId: string;

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;

  result?: FilesAPI.FilesFile;
}

export declare namespace Tasks {
  export { type TaskGetStatusResponse as TaskGetStatusResponse };
}
