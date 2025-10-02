// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as DraftBatchAPI from './draft/batch';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Get a set of rows
   */
  read(
    tableIDOrName: string,
    body: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<DraftBatchAPI.HubdbBatchResponseRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/batch/read`, {
      body,
      ...options,
    });
  }
}

export interface BatchReadParams {
  inputs: Array<string>;
}

export declare namespace Batch {
  export { type BatchReadParams as BatchReadParams };
}
