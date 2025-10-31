// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppsAPI from './apps';
import {
  AppDeleteParams,
  AppDeleteResponse,
  AppGetParams,
  AppGetResponse,
  AppListPortalsParams,
  AppListPortalsResponse,
  AppUpdateParams,
  AppUpdateResponse,
  Apps,
} from './apps';
import * as PortalsAPI from './portals';
import {
  PortalBatchDeleteParams,
  PortalBatchDeleteResponse,
  PortalBatchUpsertParams,
  PortalBatchUpsertResponse,
  PortalDeleteParams,
  PortalDeleteResponse,
  PortalGetParams,
  PortalGetResponse,
  PortalUpdateParams,
  PortalUpdateResponse,
  Portals,
} from './portals';

export class FeatureFlags extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  portals: PortalsAPI.Portals = new PortalsAPI.Portals(this._client);
}

FeatureFlags.Apps = Apps;
FeatureFlags.Portals = Portals;

export declare namespace FeatureFlags {
  export {
    Apps as Apps,
    type AppUpdateResponse as AppUpdateResponse,
    type AppDeleteResponse as AppDeleteResponse,
    type AppGetResponse as AppGetResponse,
    type AppListPortalsResponse as AppListPortalsResponse,
    type AppUpdateParams as AppUpdateParams,
    type AppDeleteParams as AppDeleteParams,
    type AppGetParams as AppGetParams,
    type AppListPortalsParams as AppListPortalsParams,
  };

  export {
    Portals as Portals,
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
