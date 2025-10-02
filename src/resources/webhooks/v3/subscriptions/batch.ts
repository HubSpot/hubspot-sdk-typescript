// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Batch create event subscriptions
   */
  create(appID: number, body: BatchCreateParams, options?: RequestOptions): APIPromise<BatchCreateResponse> {
    return this._client.post(path`/webhooks/v3/${appID}/subscriptions/batch/update`, { body, ...options });
  }
}

export interface BatchCreateResponse {
  completedAt: string;

  results: Array<SubscriptionsAPI.Subscription>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchCreateParams {
  inputs: Array<BatchCreateParams.Input>;
}

export namespace BatchCreateParams {
  export interface Input {
    id: number;

    active: boolean;
  }
}

export declare namespace Batch {
  export { type BatchCreateResponse as BatchCreateResponse, type BatchCreateParams as BatchCreateParams };
}
