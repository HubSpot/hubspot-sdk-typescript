// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TimelineAPI from './timeline';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Batch extends APIResource {
  create(
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<TimelineAPI.BatchResponseAppEventOccurrence> {
    return this._client.post('/integrators/timeline/2026-03/events/batch', { body, ...options });
  }
}

export interface BatchCreateParams {
  inputs: Array<TimelineAPI.AppEventOccurrence>;
}

export declare namespace Batch {
  export { type BatchCreateParams as BatchCreateParams };
}
