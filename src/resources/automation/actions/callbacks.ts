// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Callbacks extends APIResource {
  /**
   * Complete a specific blocked action execution by ID.
   */
  complete(callbackID: string, body: CallbackCompleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/automation/v4/actions/callbacks/${callbackID}/complete`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Complete a batch of blocked action executions.
   */
  completeBatch(body: CallbackCompleteBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/automation/v4/actions/callbacks/complete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CallbackCompleteParams {
  outputFields: { [key: string]: string };
}

export interface CallbackCompleteBatchParams {
  inputs: Array<ActionsAPI.CallbackCompletionBatchRequest>;
}

export declare namespace Callbacks {
  export {
    type CallbackCompleteParams as CallbackCompleteParams,
    type CallbackCompleteBatchParams as CallbackCompleteBatchParams,
  };
}
