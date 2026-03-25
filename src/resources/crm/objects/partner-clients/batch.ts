// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Update a batch of Partner Clients by ID (`objectId`) or unique property value
   * (`idProperty`). Provided property values will be overwritten. Read-only and
   * non-existent properties will result in an error. Properties values can be
   * cleared by passing an empty string.
   */
  update(
    body: BatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/partner_clients/batch/update', { body, ...options });
  }
}

export interface BatchUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export declare namespace Batch {
  export { type BatchUpdateParams as BatchUpdateParams };
}
