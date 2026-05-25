// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseSnapshots extends APIResource {
  static override readonly _key: readonly ['webhooksJournal', 'snapshots'] = Object.freeze([
    'webhooksJournal',
    'snapshots',
  ] as const);

  /**
   * Create a batch of CRM object snapshots in HubSpot. This endpoint is used to
   * capture the current state of specified CRM objects for later reference or
   * analysis. It requires a JSON payload containing the details of the CRM objects
   * to snapshot. This operation is exempt from daily and ten-secondly rate limits.
   */
  create(
    body: SnapshotCreateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CrmObjectSnapshotBatchResponse> {
    return this._client.post('/webhooks-journal/snapshots/2026-03/crm', { body, ...options });
  }
}
export class Snapshots extends BaseSnapshots {}

export interface SnapshotCreateParams {
  /**
   * An array of CrmObjectSnapshotRequest objects, each representing a request to
   * create a snapshot for a specific CRM object. This property is required.
   */
  snapshotRequests: Array<Shared.CrmObjectSnapshotRequest>;
}

export declare namespace Snapshots {
  export { type SnapshotCreateParams as SnapshotCreateParams };
}
