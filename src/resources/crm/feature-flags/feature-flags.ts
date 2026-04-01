// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BatchAPI from './batch';
import { Batch, BatchDeleteParams, BatchUpsertParams } from './batch';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FeatureFlags extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Set a feature flag for an app. For example, update the `hs-hide-crm-cards`
   * flag's `defaultState` to `ON` to hide classic CRM cards from new installs.
   */
  update(
    flagName: string,
    params: FeatureFlagUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FlagResponse> {
    const { appId, ...body } = params;
    return this._client.put(path`/feature-flags/2026-03/${appId}/flags/${flagName}`, { body, ...options });
  }

  /**
   * Delete a feature flag in an app. For example, delete the `hs-release-app-cards`
   * flag after all accounts have been migrated.
   */
  delete(
    flagName: string,
    params: FeatureFlagDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FlagResponse> {
    const { appId } = params;
    return this._client.delete(path`/feature-flags/2026-03/${appId}/flags/${flagName}`, options);
  }

  /**
   * Delete an account-level flag state for a specific HubSpot account. No request
   * body is included.
   */
  deletePortalState(
    portalID: number,
    params: FeatureFlagDeletePortalStateParams,
    options?: RequestOptions,
  ): APIPromise<PortalFlagStateResponse> {
    const { appId, flagName } = params;
    return this._client.delete(
      path`/feature-flags/2026-03/${appId}/flags/${flagName}/portals/${portalID}`,
      options,
    );
  }

  /**
   * Retrieve the current status of the app's feature flags. No request body is
   * included.
   */
  get(flagName: string, params: FeatureFlagGetParams, options?: RequestOptions): APIPromise<FlagResponse> {
    const { appId } = params;
    return this._client.get(path`/feature-flags/2026-03/${appId}/flags/${flagName}`, options);
  }

  /**
   * Retrieve the account-level flag state of a specific HubSpot account.
   */
  getPortalState(
    portalID: number,
    params: FeatureFlagGetPortalStateParams,
    options?: RequestOptions,
  ): APIPromise<PortalFlagStateResponse> {
    const { appId, flagName } = params;
    return this._client.get(
      path`/feature-flags/2026-03/${appId}/flags/${flagName}/portals/${portalID}`,
      options,
    );
  }

  listAll(appID: number, options?: RequestOptions): APIPromise<FlagsForAppResponse> {
    return this._client.get(path`/feature-flags/2026-03/${appID}/flags/all`, options);
  }

  /**
   * Retrieve a list of HubSpot accounts with an account-level flag setting for the
   * specified app. No request body is included.
   */
  listPortals(
    flagName: string,
    params: FeatureFlagListPortalsParams,
    options?: RequestOptions,
  ): APIPromise<PortalFlagStateBatchResponse> {
    const { appId, ...query } = params;
    return this._client.get(path`/feature-flags/2026-03/${appId}/flags/${flagName}/portals`, {
      query,
      ...options,
    });
  }

  /**
   * Specify an account-level flag state for a specific HubSpot account.
   */
  updatePortalState(
    portalID: number,
    params: FeatureFlagUpdatePortalStateParams,
    options?: RequestOptions,
  ): APIPromise<PortalFlagStateResponse> {
    const { appId, flagName, ...body } = params;
    return this._client.put(path`/feature-flags/2026-03/${appId}/flags/${flagName}/portals/${portalID}`, {
      body,
      ...options,
    });
  }
}

export interface BatchPortalEntry {
  /**
   * The flag state for this portal (e.g. ON or OFF)
   */
  flagState: 'ABSENT' | 'OFF' | 'ON';

  /**
   * The ID of the portal
   */
  portalId: number;
}

export interface FlagPutRequest {
  /**
   * The state that the flag should have if there are no overrides for a particular
   * portal
   */
  defaultState: 'ABSENT' | 'OFF' | 'ON';

  /**
   * A flag value that supercedes all other overrides, including portal-level values.
   * Mostly used for things like emergency overrides
   */
  overrideState?: 'ABSENT' | 'OFF' | 'ON';
}

export interface FlagResponse {
  /**
   * The ID of the app
   */
  appId: number;

  /**
   * The flag state for any portal that doesn't have an override value
   */
  defaultState: 'ABSENT' | 'OFF' | 'ON';

  /**
   * The name of the flag
   */
  flagName: string;

  /**
   * An optional flag value that overrides all others for this flag name and app,
   * including portal-level values
   */
  overrideState?: 'ABSENT' | 'OFF' | 'ON';
}

export interface FlagsForAppResponse {
  flagsForApp: Array<string>;
}

export interface PortalFlagStateBatchDeleteRequest {
  portalIds: Array<number>;
}

export interface PortalFlagStateBatchPutRequest {
  portalStates: Array<BatchPortalEntry>;
}

export interface PortalFlagStateBatchResponse {
  portalFlagStates: Array<PortalFlagStateResponse>;
}

export interface PortalFlagStatePutRequest {
  /**
   * The state that the given flag should be in for this portal
   */
  flagState: 'ABSENT' | 'OFF' | 'ON';
}

export interface PortalFlagStateResponse {
  /**
   * The ID of the app
   */
  appId: number;

  /**
   * The name of the flag
   */
  flagName: string;

  /**
   * The state of the flag for this portal
   */
  flagState: 'ABSENT' | 'OFF' | 'ON';

  /**
   * The ID of the portal
   */
  portalId: number;
}

export interface FeatureFlagUpdateParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param: The state that the flag should have if there are no overrides for a
   * particular portal
   */
  defaultState: 'ABSENT' | 'OFF' | 'ON';

  /**
   * Body param: A flag value that supercedes all other overrides, including
   * portal-level values. Mostly used for things like emergency overrides
   */
  overrideState?: 'ABSENT' | 'OFF' | 'ON';
}

export interface FeatureFlagDeleteParams {
  appId: number;
}

export interface FeatureFlagDeletePortalStateParams {
  appId: number;

  flagName: string;
}

export interface FeatureFlagGetParams {
  appId: number;
}

export interface FeatureFlagGetPortalStateParams {
  appId: number;

  flagName: string;
}

export interface FeatureFlagListPortalsParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Query param: The maximum number of results to display per page.
   */
  limit?: number;

  /**
   * Query param
   */
  startPortalId?: number;
}

export interface FeatureFlagUpdatePortalStateParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Path param
   */
  flagName: string;

  /**
   * Body param: The state that the given flag should be in for this portal
   */
  flagState: 'ABSENT' | 'OFF' | 'ON';
}

FeatureFlags.Batch = Batch;

export declare namespace FeatureFlags {
  export {
    type BatchPortalEntry as BatchPortalEntry,
    type FlagPutRequest as FlagPutRequest,
    type FlagResponse as FlagResponse,
    type FlagsForAppResponse as FlagsForAppResponse,
    type PortalFlagStateBatchDeleteRequest as PortalFlagStateBatchDeleteRequest,
    type PortalFlagStateBatchPutRequest as PortalFlagStateBatchPutRequest,
    type PortalFlagStateBatchResponse as PortalFlagStateBatchResponse,
    type PortalFlagStatePutRequest as PortalFlagStatePutRequest,
    type PortalFlagStateResponse as PortalFlagStateResponse,
    type FeatureFlagUpdateParams as FeatureFlagUpdateParams,
    type FeatureFlagDeleteParams as FeatureFlagDeleteParams,
    type FeatureFlagDeletePortalStateParams as FeatureFlagDeletePortalStateParams,
    type FeatureFlagGetParams as FeatureFlagGetParams,
    type FeatureFlagGetPortalStateParams as FeatureFlagGetPortalStateParams,
    type FeatureFlagListPortalsParams as FeatureFlagListPortalsParams,
    type FeatureFlagUpdatePortalStateParams as FeatureFlagUpdatePortalStateParams,
  };

  export {
    Batch as Batch,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}
