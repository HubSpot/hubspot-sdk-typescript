// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchAPI from './batch';
import { Batch, BatchReadParams, BatchReadResponse } from './batch';

export class WorkflowIDMappings extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

WorkflowIDMappings.Batch = Batch;

export declare namespace WorkflowIDMappings {
  export {
    Batch as Batch,
    type BatchReadResponse as BatchReadResponse,
    type BatchReadParams as BatchReadParams,
  };
}
