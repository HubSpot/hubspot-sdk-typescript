// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BatchAPI from './batch';
import {
  BaseBatch,
  Batch,
  BatchGetUnsubscribeAllStatusesParams,
  BatchReadParams,
  BatchUnsubscribeAllParams,
  BatchUpdateStatusesParams,
} from './batch';

export class BaseStatuses extends APIResource {
  static override readonly _key: readonly ['communicationPreferences', 'statuses'] = Object.freeze([
    'communicationPreferences',
    'statuses',
  ] as const);
}
export class Statuses extends BaseStatuses {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

Statuses.Batch = Batch;
Statuses.BaseBatch = BaseBatch;

export declare namespace Statuses {
  export {
    Batch as Batch,
    BaseBatch as BaseBatch,
    type BatchGetUnsubscribeAllStatusesParams as BatchGetUnsubscribeAllStatusesParams,
    type BatchReadParams as BatchReadParams,
    type BatchUnsubscribeAllParams as BatchUnsubscribeAllParams,
    type BatchUpdateStatusesParams as BatchUpdateStatusesParams,
  };
}
