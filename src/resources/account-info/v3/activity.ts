// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Activity extends APIResource {
  /**
   * Retrieve audit logs
   */
  retrieveAuditLogs(
    query: ActivityRetrieveAuditLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActivityRetrieveAuditLogsResponse> {
    return this._client.get('/account-info/v3/activity/audit-logs', { query, ...options });
  }

  /**
   * Retrieve login activity
   */
  retrieveLoginActivity(
    query: ActivityRetrieveLoginActivityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActivityRetrieveLoginActivityResponse> {
    return this._client.get('/account-info/v3/activity/login', { query, ...options });
  }

  /**
   * Retrieve security history
   */
  retrieveSecurityHistory(
    query: ActivityRetrieveSecurityHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActivityRetrieveSecurityHistoryResponse> {
    return this._client.get('/account-info/v3/activity/security', { query, ...options });
  }
}

export interface ForwardPaging {
  next?: NextPage;
}

export interface NextPage {
  after: string;

  link?: string;
}

export interface ActivityRetrieveAuditLogsResponse {
  results: Array<ActivityRetrieveAuditLogsResponse.Result>;

  paging?: ForwardPaging;
}

export namespace ActivityRetrieveAuditLogsResponse {
  export interface Result {
    id: string;

    actingUser: Result.ActingUser;

    action: string;

    category: string;

    occurredAt: string;

    subCategory?: string;

    targetObjectId?: string;
  }

  export namespace Result {
    export interface ActingUser {
      userId: number;

      userEmail?: string;
    }
  }
}

export interface ActivityRetrieveLoginActivityResponse {
  results: Array<ActivityRetrieveLoginActivityResponse.Result>;

  paging?: ForwardPaging;
}

export namespace ActivityRetrieveLoginActivityResponse {
  export interface Result {
    id: string;

    loginAt: string;

    loginSucceeded: boolean;

    countryCode?: string;

    email?: string;

    ipAddress?: string;

    location?: string;

    regionCode?: string;

    userAgent?: string;

    userId?: number;
  }
}

export interface ActivityRetrieveSecurityHistoryResponse {
  results: Array<ActivityRetrieveSecurityHistoryResponse.Result>;

  paging?: ForwardPaging;
}

export namespace ActivityRetrieveSecurityHistoryResponse {
  export interface Result {
    id: string;

    createdAt: string;

    type: string;

    userId: number;

    actingUser?: string;

    countryCode?: string;

    infoUrl?: string;

    ipAddress?: string;

    location?: string;

    objectId?: string;

    regionCode?: string;
  }
}

export interface ActivityRetrieveAuditLogsParams {
  actingUserId?: Array<number>;

  after?: string;

  limit?: number;

  occurredAfter?: string;

  occurredBefore?: string;

  sort?: Array<string>;
}

export interface ActivityRetrieveLoginActivityParams {
  after?: string;

  limit?: number;

  userId?: number;
}

export interface ActivityRetrieveSecurityHistoryParams {
  after?: string;

  fromTimestamp?: number;

  limit?: number;

  toTimestamp?: number;

  userId?: number;
}

export declare namespace Activity {
  export {
    type ForwardPaging as ForwardPaging,
    type NextPage as NextPage,
    type ActivityRetrieveAuditLogsResponse as ActivityRetrieveAuditLogsResponse,
    type ActivityRetrieveLoginActivityResponse as ActivityRetrieveLoginActivityResponse,
    type ActivityRetrieveSecurityHistoryResponse as ActivityRetrieveSecurityHistoryResponse,
    type ActivityRetrieveAuditLogsParams as ActivityRetrieveAuditLogsParams,
    type ActivityRetrieveLoginActivityParams as ActivityRetrieveLoginActivityParams,
    type ActivityRetrieveSecurityHistoryParams as ActivityRetrieveSecurityHistoryParams,
  };
}
