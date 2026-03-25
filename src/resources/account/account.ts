// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Account extends APIResource {
  activity: ActivityAPI.Activity = new ActivityAPI.Activity(this._client);

  /**
   * Retrieve account details such as the account type, time zone, currencies, and
   * data hosting location.
   */
  get(options?: RequestOptions): APIPromise<PortalInformationResponse> {
    return this._client.get('/account-info/2026-03/details', options);
  }

  /**
   * Retrieve the daily API usage for private apps in the account, along with
   * information about usage limits.
   */
  getDailyPrivateAppsUsage(options?: RequestOptions): APIPromise<CollectionResponseAPIUsageNoPaging> {
    return this._client.get('/account-info/2026-03/api-usage/daily/private-apps', options);
  }
}

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
  fetchStatus: 'CACHED' | 'FAILURE' | 'NOTFOUND' | 'SUCCESS' | 'TIMEOUT';

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

export interface CollectionResponseAPIUsageNoPaging {
  results: Array<APIUsage>;
}

export interface PortalInformationResponse {
  /**
   * The type of account, such as APP_DEVELOPER, DEVELOPER_TEST, SANDBOX, or
   * STANDARD.
   */
  accountType: 'APP_DEVELOPER' | 'DEVELOPER_TEST' | 'SANDBOX' | 'STANDARD';

  additionalCurrencies: Array<string>;

  /**
   * The primary currency used by the company.
   */
  companyCurrency: string;

  /**
   * The location where the account's data is hosted.
   */
  dataHostingLocation: string;

  /**
   * The unique identifier for the HubSpot account.
   */
  portalId: number;

  /**
   * The time zone in which the account operates.
   */
  timeZone: string;

  /**
   * The domain used for accessing the HubSpot user interface.
   */
  uiDomain: string;

  /**
   * The time zone offset from UTC in hours and minutes.
   */
  utcOffset: string;

  /**
   * The time zone offset from UTC in milliseconds.
   */
  utcOffsetMilliseconds: number;
}

Account.Activity = Activity;

export declare namespace Account {
  export {
    type APIUsage as APIUsage,
    type CollectionResponseAPIUsageNoPaging as CollectionResponseAPIUsageNoPaging,
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
}
