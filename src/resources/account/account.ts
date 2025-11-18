// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActivityAPI from './activity';
import {
  ActingUser,
  Activity,
  ActivityListAuditLogsParams,
  ActivityListLoginActivitiesParams,
  ActivityListSecurityActivitiesParams,
  CollectionResponseHydratedCriticalActionForwardPaging,
  CollectionResponsePublicAPIUserActionEventForwardPaging,
  CollectionResponsePublicLoginAuditForwardPaging,
  HydratedCriticalAction,
  HydratedCriticalActionsPage,
  PublicAPIUserActionEvent,
  PublicAPIUserActionEventsPage,
  PublicLoginAudit,
  PublicLoginAuditsPage,
} from './activity';
import * as DetailsAPI from './details';
import { Details } from './details';
import * as UsageAPI from './usage';
import { Usage } from './usage';

export class Account extends APIResource {
  activity: ActivityAPI.Activity = new ActivityAPI.Activity(this._client);
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

/**
 * API usage and limits information for a HubSpot account.
 */
export interface APIUsage {
  /**
   * Indicates when the cache was last updated.
   */
  collectedAt: string;

  /**
   * How many API calls an account has made for the current day.
   */
  currentUsage: number;

  /**
   * Status of fetching the information, including if the data came from the cache.
   */
  fetchStatus: 'SUCCESS' | 'TIMEOUT' | 'FAILURE' | 'CACHED' | 'NOTFOUND';

  /**
   * Name of the limit type.
   */
  name: string;

  /**
   * Limits by which a single integration can consume the HubSpot public APIs.
   */
  usageLimit: number;

  /**
   * Time that the limit will reset.
   */
  resetsAt?: string;
}

export interface CollectionResponseAPIUsage {
  results: Array<APIUsage>;

  paging?: Shared.Paging;
}

export interface PortalInformationResponse {
  accountType: 'STANDARD' | 'DEVELOPER_TEST' | 'SANDBOX' | 'APP_DEVELOPER';

  additionalCurrencies: Array<string>;

  companyCurrency: string;

  dataHostingLocation: string;

  portalId: number;

  timeZone: string;

  uiDomain: string;

  utcOffset: string;

  utcOffsetMilliseconds: number;
}

Account.Activity = Activity;
Account.Details = Details;
Account.Usage = Usage;

export declare namespace Account {
  export {
    type APIUsage as APIUsage,
    type CollectionResponseAPIUsage as CollectionResponseAPIUsage,
    type PortalInformationResponse as PortalInformationResponse,
  };

  export {
    Activity as Activity,
    type ActingUser as ActingUser,
    type CollectionResponseHydratedCriticalActionForwardPaging as CollectionResponseHydratedCriticalActionForwardPaging,
    type CollectionResponsePublicAPIUserActionEventForwardPaging as CollectionResponsePublicAPIUserActionEventForwardPaging,
    type CollectionResponsePublicLoginAuditForwardPaging as CollectionResponsePublicLoginAuditForwardPaging,
    type HydratedCriticalAction as HydratedCriticalAction,
    type PublicAPIUserActionEvent as PublicAPIUserActionEvent,
    type PublicLoginAudit as PublicLoginAudit,
    type PublicAPIUserActionEventsPage as PublicAPIUserActionEventsPage,
    type PublicLoginAuditsPage as PublicLoginAuditsPage,
    type HydratedCriticalActionsPage as HydratedCriticalActionsPage,
    type ActivityListAuditLogsParams as ActivityListAuditLogsParams,
    type ActivityListLoginActivitiesParams as ActivityListLoginActivitiesParams,
    type ActivityListSecurityActivitiesParams as ActivityListSecurityActivitiesParams,
  };

  export { Details as Details };

  export { Usage as Usage };
}
