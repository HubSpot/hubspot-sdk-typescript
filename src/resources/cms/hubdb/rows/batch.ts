// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HubdbAPI from '../hubdb';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Replace rows in batch in draft table
   */
  replace(
    tableIDOrName: string,
    body: BatchReplaceParams,
    options?: RequestOptions,
  ): APIPromise<HubdbAPI.BatchResponseHubDBTableRowV3> {
    return this._client.post(path`/cms/v3/hubdb/tables/${tableIDOrName}/rows/draft/batch/replace`, {
      body,
      ...options,
    });
  }
}

export interface BatchReplaceParams {
  inputs: Array<HubdbAPI.HubDBTableRowV3BatchUpdateRequest>;
}

export declare namespace Batch {
  export { type BatchReplaceParams as BatchReplaceParams };
}
