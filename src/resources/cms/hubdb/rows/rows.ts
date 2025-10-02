// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchAPI from './batch';
import { Batch, BatchReplaceParams } from './batch';

export class Rows extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

Rows.Batch = Batch;

export declare namespace Rows {
  export { Batch as Batch, type BatchReplaceParams as BatchReplaceParams };
}
