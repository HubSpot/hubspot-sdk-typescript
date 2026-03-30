// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FeatureFlagsAPI from './feature-flags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Delete an account-level flag state for multiple HubSpot accounts at once. Use
   * this endpoint to manage flag exposure for groups of HubSpot accounts.
   */
  delete(
    flagName: string,
    params: BatchDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.PortalFlagStateBatchResponse> {
    const { appId, ...body } = params;
    return this._client.post(path`/feature-flags/2026-03/${appId}/flags/${flagName}/portals/batch/delete`, {
      body,
      ...options,
    });
  }

  /**
   * Set the portal flag state for multiple HubSpot accounts at once. Use this
   * endpoint to manage flag exposure for groups of HubSpot accounts.
   */
  upsert(
    flagName: string,
    params: BatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.PortalFlagStateBatchResponse> {
    const { appId, ...body } = params;
    return this._client.post(path`/feature-flags/2026-03/${appId}/flags/${flagName}/portals/batch/upsert`, {
      body,
      ...options,
    });
  }
}

export interface BatchDeleteParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param
   */
  portalIds: Array<number>;
}

export interface BatchUpsertParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param
   */
  portalStates: Array<FeatureFlagsAPI.BatchPortalEntry>;
}

export declare namespace Batch {
  export { type BatchDeleteParams as BatchDeleteParams, type BatchUpsertParams as BatchUpsertParams };
}
