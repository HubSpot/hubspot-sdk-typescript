// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FeatureFlagsAPI from './feature-flags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Set a feature flag for an app. For example, update the `hs-hide-crm-cards`
   * flag's `defaultState` to `ON` to hide classic CRM cards from new installs.
   *
   * @example
   * ```ts
   * const flagResponse =
   *   await client.crm.featureFlags.apps.update('flagName', {
   *     appId: 0,
   *     defaultState: 'ABSENT',
   *   });
   * ```
   */
  update(
    flagName: string,
    params: AppUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.FlagResponse> {
    const { appId, ...body } = params;
    return this._client.put(path`/feature-flags/v3/${appId}/flags/${flagName}`, { body, ...options });
  }

  /**
   * Delete a feature flag in an app. For example, delete the `hs-release-app-cards`
   * flag after all accounts have been migrated.
   *
   * @example
   * ```ts
   * const flagResponse =
   *   await client.crm.featureFlags.apps.delete('flagName', {
   *     appId: 0,
   *   });
   * ```
   */
  delete(
    flagName: string,
    params: AppDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.FlagResponse> {
    const { appId } = params;
    return this._client.delete(path`/feature-flags/v3/${appId}/flags/${flagName}`, options);
  }

  /**
   * Retrieve the current status of the app's feature flags. No request body is
   * included.
   *
   * @example
   * ```ts
   * const flagResponse = await client.crm.featureFlags.apps.get(
   *   'flagName',
   *   { appId: 0 },
   * );
   * ```
   */
  get(
    flagName: string,
    params: AppGetParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.FlagResponse> {
    const { appId } = params;
    return this._client.get(path`/feature-flags/v3/${appId}/flags/${flagName}`, options);
  }

  /**
   * Retrieve a list of HubSpot accounts with an account-level flag setting for the
   * specified app. No request body is included.
   *
   * @example
   * ```ts
   * const portalFlagStateBatchResponse =
   *   await client.crm.featureFlags.apps.listPortals(
   *     'flagName',
   *     { appId: 0 },
   *   );
   * ```
   */
  listPortals(
    flagName: string,
    params: AppListPortalsParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagsAPI.PortalFlagStateBatchResponse> {
    const { appId, ...query } = params;
    return this._client.get(path`/feature-flags/v3/${appId}/flags/${flagName}/portals`, {
      query,
      ...options,
    });
  }
}

export interface AppUpdateParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Body param
   */
  defaultState: 'ABSENT' | 'OFF' | 'ON';

  /**
   * Body param
   */
  overrideState?: 'ABSENT' | 'OFF' | 'ON';
}

export interface AppDeleteParams {
  /**
   * The ID of the app.
   */
  appId: number;
}

export interface AppGetParams {
  /**
   * The ID of the app.
   */
  appId: number;
}

export interface AppListPortalsParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Query param: The maximum number of results to return in a single request.
   */
  limit?: number;

  /**
   * Query param: The initial account ID for listing, enabling pagination.
   */
  startPortalId?: number;
}

export declare namespace Apps {
  export {
    type AppUpdateParams as AppUpdateParams,
    type AppDeleteParams as AppDeleteParams,
    type AppGetParams as AppGetParams,
    type AppListPortalsParams as AppListPortalsParams,
  };
}
