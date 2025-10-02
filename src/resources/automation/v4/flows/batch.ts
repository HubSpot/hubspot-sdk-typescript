// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FlowsAPI from './flows';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Retrieve a batch of workflows
   */
  read(body: BatchReadParams, options?: RequestOptions): APIPromise<BatchReadResponse> {
    return this._client.post('/automation/v4/flows/batch/read', { body, ...options });
  }
}

export interface BatchReadResponse {
  completedAt: string;

  results: Array<FlowsAPI.Flow>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchReadParams {
  inputs: Array<BatchReadParams.Input>;
}

export namespace BatchReadParams {
  export interface Input {
    flowId: string;

    type: 'FLOW_ID';
  }
}

export declare namespace Batch {
  export { type BatchReadResponse as BatchReadResponse, type BatchReadParams as BatchReadParams };
}
