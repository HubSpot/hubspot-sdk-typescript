// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Activity extends APIResource {
  /**
   * Retrieve activity history for user actions related to approvals, content
   * updates, CRM object updates, security activity, and more (Enterprise only).
   * Learn more about
   * [activities included in audit log exports](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history-in-a-centralized-audit-log?hubs_content=knowledge.hubspot.com/account-management/view-and-export-account-activity-history&hubs_content-cta=centralized%20audit%20log#data-included-in-the-centralized-audit-log).
   */
  listAuditLogs(
    query: ActivityListAuditLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicAPIUserActionEventsPage, PublicAPIUserActionEvent> {
    return this._client.getAPIList('/account-info/v3/activity/audit-logs', Page<PublicAPIUserActionEvent>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve logs of user actions related to
   * [login activity](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history#account-login-history).
   */
  listLoginActivities(
    query: ActivityListLoginActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicLoginAuditsPage, PublicLoginAudit> {
    return this._client.getAPIList('/account-info/v3/activity/login', Page<PublicLoginAudit>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve logs of user actions related to
   * [security activity](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history#security-activity-history).
   */
  listSecurityActivities(
    query: ActivityListSecurityActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HydratedCriticalActionsPage, HydratedCriticalAction> {
    return this._client.getAPIList('/account-info/v3/activity/security', Page<HydratedCriticalAction>, {
      query,
      ...options,
    });
  }
}

export type PublicAPIUserActionEventsPage = Page<PublicAPIUserActionEvent>;

export type PublicLoginAuditsPage = Page<PublicLoginAudit>;

export type HydratedCriticalActionsPage = Page<HydratedCriticalAction>;

export interface ActingUser {
  /**
   * The ID of the user who performed the action.
   */
  userId: number;

  /**
   * The email address of the user who performed the action.
   */
  userEmail?: string;
}

export interface CollectionResponseHydratedCriticalActionForwardPaging {
  results: Array<HydratedCriticalAction>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponsePublicAPIUserActionEventForwardPaging {
  results: Array<PublicAPIUserActionEvent>;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponsePublicLoginAuditForwardPaging {
  results: Array<PublicLoginAudit>;

  paging?: Shared.ForwardPaging;
}

/**
 * Details about the a particular security activity for a HubSpot account.
 */
export interface HydratedCriticalAction {
  /**
   * The unique ID of the activity.
   */
  id: string;

  /**
   * The time the activity took place.
   */
  createdAt: string;

  /**
   * The type of activity.
   */
  type: string;

  /**
   * The user's unique ID.
   */
  userId: number;

  /**
   * Email address of the user associated with the activity.
   */
  actingUser?: string;

  /**
   * The approximate country code.
   */
  countryCode?: string;

  /**
   * A link to the URL where the action was taken in the account.
   */
  infoUrl?: string;

  /**
   * IP address where the activity originated.
   */
  ipAddress?: string;

  location?: string;

  /**
   * The ID of the affected object.
   */
  objectId?: string;

  /**
   * The approximate region code.
   */
  regionCode?: string;
}

export interface PublicAPIUserActionEvent {
  /**
   * The unique ID of the activity.
   */
  id: string;

  actingUser: ActingUser;

  /**
   * The type of action taken.
   */
  action: string;

  /**
   * The category of the activity.
   */
  category: string;

  /**
   * The time that the action occurred at.
   */
  occurredAt: string;

  /**
   * The subcategory of the activity.
   */
  subCategory?: string;

  /**
   * The ID of the impacted object.
   */
  targetObjectId?: string;
}

/**
 * Details about the a particular login activity for a HubSpot account.
 */
export interface PublicLoginAudit {
  /**
   * The login activity's unique ID.
   */
  id: string;

  /**
   * The time the login took place.
   */
  loginAt: string;

  /**
   * Whether the login was successful or not.
   */
  loginSucceeded: boolean;

  /**
   * The approximate country code of the login.
   */
  countryCode?: string;

  /**
   * Email address of the user associated with the login.
   */
  email?: string;

  /**
   * IP address where the activity originated.
   */
  ipAddress?: string;

  location?: string;

  /**
   * The approximate region code of the login.
   */
  regionCode?: string;

  /**
   * Information about the device used for logging in.
   */
  userAgent?: string;

  /**
   * The user's unique ID.
   */
  userId?: number;
}

export interface ActivityListAuditLogsParams extends PageParams {
  /**
   * The ID of a user, for retrieving user-specific logs.
   */
  actingUserId?: Array<number>;

  /**
   * A timestamp, as a starting point for retrieving activity logs.
   */
  occurredAfter?: string;

  /**
   * A timestamp, as an end point for retrieving activity logs.
   */
  occurredBefore?: string;

  /**
   * Set to `occurredAt` to order results by the time of the event. By default,
   * events are ordered from oldest to newest.
   */
  sort?: Array<string>;
}

export interface ActivityListLoginActivitiesParams extends PageParams {
  /**
   * The ID of a user, for retrieving user-specific logs.
   */
  userId?: number;
}

export interface ActivityListSecurityActivitiesParams extends PageParams {
  /**
   * The start time, for retrieving logs within a specific timeframe.
   */
  fromTimestamp?: number;

  /**
   * The end time, for retrieving logs within a specific timeframe.
   */
  toTimestamp?: number;

  /**
   * The ID of a user, for retrieving user-specific logs.
   */
  userId?: number;
}

export declare namespace Activity {
  export {
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
