// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Portals extends APIResource {
  /**
   * Specify an account-level flag state for a specific HubSpot account.
   *
   * @example
   * ```ts
   * const portal = await client.crm.featureFlags.portals.update(
   *   0,
   *   { appId: 0, flagName: 'flagName', flagState: 'OFF' },
   * );
   * ```
   */
  update(
    portalID: number,
    params: PortalUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PortalUpdateResponse> {
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
   * const portal = await client.crm.featureFlags.portals.delete(
   *   0,
   *   { appId: 0, flagName: 'flagName' },
   * );
   * ```
   */
  delete(
    portalID: number,
    params: PortalDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PortalDeleteResponse> {
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
   * const response =
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
  ): APIPromise<PortalBatchDeleteResponse> {
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
   * const response =
   *   await client.crm.featureFlags.portals.batchUpsert(
   *     'flagName',
   *     {
   *       appId: 0,
   *       portalStates: [{ flagState: 'OFF', portalId: 0 }],
   *     },
   *   );
   * ```
   */
  batchUpsert(
    flagName: string,
    params: PortalBatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<PortalBatchUpsertResponse> {
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
   * const portal = await client.crm.featureFlags.portals.get(
   *   0,
   *   { appId: 0, flagName: 'flagName' },
   * );
   * ```
   */
  get(portalID: number, params: PortalGetParams, options?: RequestOptions): APIPromise<PortalGetResponse> {
    const { appId, flagName } = params;
    return this._client.get(path`/feature-flags/v3/${appId}/flags/${flagName}/portals/${portalID}`, options);
  }
}

export interface PortalUpdateResponse {
  appId: number;

  flagName: string;

  flagState: 'OFF' | 'ON' | 'ABSENT';

  portalId: number;
}

export interface PortalDeleteResponse {
  appId: number;

  flagName: string;

  flagState: 'OFF' | 'ON' | 'ABSENT';

  portalId: number;
}

export interface PortalBatchDeleteResponse {
  portalFlagStates: Array<PortalBatchDeleteResponse.PortalFlagState>;
}

export namespace PortalBatchDeleteResponse {
  export interface PortalFlagState {
    appId: number;

    flagName: string;

    flagState: 'OFF' | 'ON' | 'ABSENT';

    portalId: number;
  }
}

export interface PortalBatchUpsertResponse {
  portalFlagStates: Array<PortalBatchUpsertResponse.PortalFlagState>;
}

export namespace PortalBatchUpsertResponse {
  export interface PortalFlagState {
    appId: number;

    flagName: string;

    flagState: 'OFF' | 'ON' | 'ABSENT';

    portalId: number;
  }
}

export interface PortalGetResponse {
  appId: number;

  flagName: string;

  flagState: 'OFF' | 'ON' | 'ABSENT';

  portalId: number;
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
  flagState: 'OFF' | 'ON' | 'ABSENT';
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
  portalStates: Array<PortalBatchUpsertParams.PortalState>;
}

export namespace PortalBatchUpsertParams {
  export interface PortalState {
    flagState: 'OFF' | 'ON' | 'ABSENT';

    portalId: number;
  }
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
    type PortalUpdateResponse as PortalUpdateResponse,
    type PortalDeleteResponse as PortalDeleteResponse,
    type PortalBatchDeleteResponse as PortalBatchDeleteResponse,
    type PortalBatchUpsertResponse as PortalBatchUpsertResponse,
    type PortalGetResponse as PortalGetResponse,
    type PortalUpdateParams as PortalUpdateParams,
    type PortalDeleteParams as PortalDeleteParams,
    type PortalBatchDeleteParams as PortalBatchDeleteParams,
    type PortalBatchUpsertParams as PortalBatchUpsertParams,
    type PortalGetParams as PortalGetParams,
  };
}
