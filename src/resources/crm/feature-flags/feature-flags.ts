// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppsAPI from './apps';
import { AppDeleteParams, AppGetParams, AppListPortalsParams, AppUpdateParams, Apps } from './apps';
import * as PortalsAPI from './portals';
import {
  PortalBatchDeleteParams,
  PortalBatchUpsertParams,
  PortalDeleteParams,
  PortalGetParams,
  PortalUpdateParams,
  Portals,
} from './portals';

export class FeatureFlags extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  portals: PortalsAPI.Portals = new PortalsAPI.Portals(this._client);
}

export interface BatchPortalEntry {
  flagState: 'OFF' | 'ON' | 'ABSENT';

  portalId: number;
}

export interface FlagPutRequest {
  defaultState: 'OFF' | 'ON' | 'ABSENT';

  overrideState?: 'OFF' | 'ON' | 'ABSENT';
}

export interface FlagResponse {
  appId: number;

  defaultState: 'OFF' | 'ON' | 'ABSENT';

  flagName: string;

  overrideState?: 'OFF' | 'ON' | 'ABSENT';
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
  flagState: 'OFF' | 'ON' | 'ABSENT';
}

export interface PortalFlagStateResponse {
  appId: number;

  flagName: string;

  flagState: 'OFF' | 'ON' | 'ABSENT';

  portalId: number;
}

FeatureFlags.Apps = Apps;
FeatureFlags.Portals = Portals;

export declare namespace FeatureFlags {
  export {
    type BatchPortalEntry as BatchPortalEntry,
    type FlagPutRequest as FlagPutRequest,
    type FlagResponse as FlagResponse,
    type PortalFlagStateBatchDeleteRequest as PortalFlagStateBatchDeleteRequest,
    type PortalFlagStateBatchPutRequest as PortalFlagStateBatchPutRequest,
    type PortalFlagStateBatchResponse as PortalFlagStateBatchResponse,
    type PortalFlagStatePutRequest as PortalFlagStatePutRequest,
    type PortalFlagStateResponse as PortalFlagStateResponse,
  };

  export {
    Apps as Apps,
    type AppUpdateParams as AppUpdateParams,
    type AppDeleteParams as AppDeleteParams,
    type AppGetParams as AppGetParams,
    type AppListPortalsParams as AppListPortalsParams,
  };

  export {
    Portals as Portals,
    type PortalUpdateParams as PortalUpdateParams,
    type PortalDeleteParams as PortalDeleteParams,
    type PortalBatchDeleteParams as PortalBatchDeleteParams,
    type PortalBatchUpsertParams as PortalBatchUpsertParams,
    type PortalGetParams as PortalGetParams,
  };
}
