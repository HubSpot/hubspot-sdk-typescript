// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchGetUnsubscribeAllStatusesParams,
  BatchReadParams,
  BatchUnsubscribeAllParams,
  BatchUpdateStatusesParams,
} from './batch';

export class Statuses extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

Statuses.Batch = Batch;

export declare namespace Statuses {
  export {
    Batch as Batch,
    type BatchGetUnsubscribeAllStatusesParams as BatchGetUnsubscribeAllStatusesParams,
    type BatchReadParams as BatchReadParams,
    type BatchUnsubscribeAllParams as BatchUnsubscribeAllParams,
    type BatchUpdateStatusesParams as BatchUpdateStatusesParams,
  };
}
