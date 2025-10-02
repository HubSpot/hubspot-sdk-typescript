// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';

export class Complete extends APIResource {
  /**
   * Complete a batch of callbacks
   */
  create(body: CompleteCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/automation/v4/actions/callbacks/complete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CompleteCreateParams {
  inputs: Array<CompleteCreateParams.Input>;
}

export namespace CompleteCreateParams {
  export interface Input {
    callbackId: string;

    outputFields: { [key: string]: string };
  }
}

export declare namespace Complete {
  export { type CompleteCreateParams as CompleteCreateParams };
}
