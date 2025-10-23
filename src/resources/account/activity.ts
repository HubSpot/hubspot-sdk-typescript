// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountAPI from './account';
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
  ): APIPromise<AccountAPI.CollectionResponsePublicAPIUserActionEventForwardPaging> {
    return this._client.get('/account-info/v3/activity/audit-logs', { query, ...options });
  }

  /**
   * Retrieve logs of user actions related to
   * [login activity](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history#account-login-history).
   */
  listLoginActivities(
    query: ActivityListLoginActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountAPI.CollectionResponsePublicLoginAuditForwardPaging> {
    return this._client.get('/account-info/v3/activity/login', { query, ...options });
  }

  /**
   * Retrieve logs of user actions related to
   * [security activity](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history#security-activity-history).
   */
  listSecurityActivities(
    query: ActivityListSecurityActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountAPI.CollectionResponseHydratedCriticalActionForwardPaging> {
    return this._client.get('/account-info/v3/activity/security', { query, ...options });
  }
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
    type ActivityListAuditLogsParams as ActivityListAuditLogsParams,
    type ActivityListLoginActivitiesParams as ActivityListLoginActivitiesParams,
    type ActivityListSecurityActivitiesParams as ActivityListSecurityActivitiesParams,
  };
}
