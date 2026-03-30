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
    return this._client.post(path`/automation/actions/callbacks/2026-03/${callbackID}/complete`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Complete a batch of blocked action executions.
   */
  completeBatch(body: CallbackCompleteBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/automation/actions/callbacks/2026-03/complete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CallbackCompleteParams {
  /**
   * Contains the output fields associated with the callback, with each field
   * represented as a key-value pair.
   */
  outputFields: { [key: string]: string };

  /**
   * Holds the typed outputs related to the callback, structured as an object.
   */
  typedOutputs: unknown;

  /**
   * Indicates the reason for the failure of a callback completion.
   */
  failureReasonType?: string;

  /**
   * Specifies the context in which the request is made, which can be one of several
   * predefined contexts.
   */
  requestContext?:
    | ActionsAPI.WorkflowsRequestContext
    | ActionsAPI.AgentRequestContext
    | ActionsAPI.CopilotRequestContext
    | ActionsAPI.StandaloneRequestContext
    | ActionsAPI.TestRequestContext;
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
