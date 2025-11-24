// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FeatureFlagsAPI from './feature-flags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Portals extends APIResource {
  /**
   * Specify an account-level flag state for a specific HubSpot account.
   *
   * @example
   * ```ts
   * const portalFlagStateResponse =
   *   await client.crm.featureFlags.portals.update(0, {
   *     appId: 0,
   *     flagName: 'flagName',
   *     flagState: 'ABSENT',
   *   });
   * ```
   */
  update(
    portalID: number,
    params: PortalUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.PortalFlagStateResponse> {
    const { appId, flagName, ...body } = params;
    return this._client.put(path`/feature-flags/v3/${appId}/flags/${flagName}/portals/${portalID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete an account-level flag state for a specific HubSpot account. No request
   * body is included.
   *
   * @example
   * ```ts
   * const portalFlagStateResponse =
   *   await client.crm.featureFlags.portals.delete(0, {
   *     appId: 0,
   *     flagName: 'flagName',
   *   });
   * ```
   */
  delete(
    portalID: number,
    params: PortalDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.PortalFlagStateResponse> {
    const { appId, flagName } = params;
    return this._client.delete(
      path`/feature-flags/v3/${appId}/flags/${flagName}/portals/${portalID}`,
      options,
    );
  }

  /**
   * Delete an account-level flag state for multiple HubSpot accounts at once. Use
   * this endpoint to manage flag exposure for groups of HubSpot accounts.
   *
   * @example
   * ```ts
   * const portalFlagStateBatchResponse =
   *   await client.crm.featureFlags.portals.batchDelete(
   *     'flagName',
   *     { appId: 0, portalIds: [0] },
   *   );
   * ```
   */
  batchDelete(
    flagName: string,
    params: PortalBatchDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.PortalFlagStateBatchResponse> {
    const { appId, ...body } = params;
    return this._client.post(path`/feature-flags/v3/${appId}/flags/${flagName}/portals/batch/delete`, {
      body,
      ...options,
    });
  }

  /**
   * Set the portal flag state for multiple HubSpot accounts at once. Use this
   * endpoint to manage flag exposure for groups of HubSpot accounts.
   *
   * @example
   * ```ts
   * const portalFlagStateBatchResponse =
   *   await client.crm.featureFlags.portals.batchUpsert(
   *     'flagName',
   *     {
   *       appId: 0,
   *       portalStates: [{ flagState: 'ABSENT', portalId: 0 }],
   *     },
   *   );
   * ```
   */
  batchUpsert(
    flagName: string,
    params: PortalBatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.PortalFlagStateBatchResponse> {
    const { appId, ...body } = params;
    return this._client.post(path`/feature-flags/v3/${appId}/flags/${flagName}/portals/batch/upsert`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the account-level flag state of a specific HubSpot account.
   *
   * @example
   * ```ts
   * const portalFlagStateResponse =
   *   await client.crm.featureFlags.portals.get(0, {
   *     appId: 0,
   *     flagName: 'flagName',
   *   });
   * ```
   */
  get(
    portalID: number,
    params: PortalGetParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.PortalFlagStateResponse> {
    const { appId, flagName } = params;
    return this._client.get(path`/feature-flags/v3/${appId}/flags/${flagName}/portals/${portalID}`, options);
  }
}

export interface PortalUpdateParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Path param: The name of the flag, either `hs-release-app-cards` or
   * `hs-hide-crm-cards`.
   */
  flagName: string;

  /**
   * Body param:
   */
  flagState: 'ABSENT' | 'OFF' | 'ON';
}

export interface PortalDeleteParams {
  /**
   * The ID of the app.
   */
  appId: number;

  /**
   * The name of the flag, either `hs-release-app-cards` or `hs-hide-crm-cards`.
   */
  flagName: string;
}

export interface PortalBatchDeleteParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Body param:
   */
  portalIds: Array<number>;
}

export interface PortalBatchUpsertParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Body param:
   */
  portalStates: Array<FeatureFlagsAPI.BatchPortalEntry>;
}

export interface PortalGetParams {
  /**
   * The ID of the app.
   */
  appId: number;

  /**
   * The name of the flag, either `hs-release-app-cards` or `hs-hide-crm-cards`.
   */
  flagName: string;
}

export declare namespace Portals {
  export {
    type PortalUpdateParams as PortalUpdateParams,
    type PortalDeleteParams as PortalDeleteParams,
    type PortalBatchDeleteParams as PortalBatchDeleteParams,
    type PortalBatchUpsertParams as PortalBatchUpsertParams,
    type PortalGetParams as PortalGetParams,
  };
}
