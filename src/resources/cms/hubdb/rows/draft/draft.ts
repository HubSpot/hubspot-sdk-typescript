// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCloneBatchParams,
  BatchCreateBatchParams,
  BatchPurgeBatchParams,
  BatchReadBatchParams,
  BatchReadDraftBatchParams,
  BatchReplaceBatchParams,
  BatchUpdateBatchParams,
} from './batch';

export class Draft extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

Draft.Batch = Batch;

export declare namespace Draft {
  export {
    Batch as Batch,
    type BatchCloneBatchParams as BatchCloneBatchParams,
    type BatchCreateBatchParams as BatchCreateBatchParams,
    type BatchPurgeBatchParams as BatchPurgeBatchParams,
    type BatchReadBatchParams as BatchReadBatchParams,
    type BatchReadDraftBatchParams as BatchReadDraftBatchParams,
    type BatchReplaceBatchParams as BatchReplaceBatchParams,
    type BatchUpdateBatchParams as BatchUpdateBatchParams,
  };
}
