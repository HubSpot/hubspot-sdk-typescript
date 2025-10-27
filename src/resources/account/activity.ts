// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
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
  ): APIPromise<CollectionResponsePublicAPIUserActionEventForwardPaging> {
    return this._client.get('/account-info/v3/activity/audit-logs', { query, ...options });
  }

  /**
   * Retrieve logs of user actions related to
   * [login activity](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history#account-login-history).
   */
  listLoginActivities(
    query: ActivityListLoginActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicLoginAuditForwardPaging> {
    return this._client.get('/account-info/v3/activity/login', { query, ...options });
  }

  /**
   * Retrieve logs of user actions related to
   * [security activity](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history#security-activity-history).
   */
  listSecurityActivities(
    query: ActivityListSecurityActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseHydratedCriticalActionForwardPaging> {
    return this._client.get('/account-info/v3/activity/security', { query, ...options });
  }
}

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

export interface ActivityListAuditLogsParams {
  /**
   * The ID of a user, for retrieving user-specific logs.
   */
  actingUserId?: Array<number>;

  /**
   * The paging cursor token of the last successfully read resource will be returned
   * as the `paging.next.after` JSON property of a paged response containing more
   * results.
   */
  after?: string;

  /**
   * The maximum number of results to display per page.
   */
  limit?: number;

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

export interface ActivityListLoginActivitiesParams {
  /**
   * The cursor token value to get the next set of results. You can get this from the
   * `paging.next.after` JSON property of a paged response containing more results.
   */
  after?: string;

  /**
   * The maximum number of results to display per page. Max value of limit is 200.
   */
  limit?: number;

  /**
   * The ID of a user, for retrieving user-specific logs.
   */
  userId?: number;
}

export interface ActivityListSecurityActivitiesParams {
  /**
   * The cursor token value to get the next set of results. You can get this from the
   * `paging.next.after` JSON property of a paged response containing more results.
   */
  after?: string;

  /**
   * The start time, for retrieving logs within a specific timeframe.
   */
  fromTimestamp?: number;

  /**
   * The maximum number of results to display per page. Max value of limit is 200.
   */
  limit?: number;

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
    type ActivityListAuditLogsParams as ActivityListAuditLogsParams,
    type ActivityListLoginActivitiesParams as ActivityListLoginActivitiesParams,
    type ActivityListSecurityActivitiesParams as ActivityListSecurityActivitiesParams,
  };
}
