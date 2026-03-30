// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * This endpoint allows you to update several partner client records at once by
   * providing a batch of CRM object records with their respective IDs and
   * properties. It is useful for synchronizing data across systems or making bulk
   * updates efficiently.
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
