// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuditLogsAPI from './audit-logs';
import {
  ActingUser,
  AuditLogs,
  CollectionResponseHydratedCriticalActionForwardPaging,
  CollectionResponsePublicAPIUserActionEventForwardPaging,
  CollectionResponsePublicLoginAuditForwardPaging,
  HydratedCriticalAction,
  PublicAPIUserActionEvent,
  PublicLoginAudit,
} from './audit-logs';
import * as EmailsAPI from '../marketing/emails';

export class Account extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
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

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
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

Account.AuditLogs = AuditLogs;

export declare namespace Account {
  export {
    type APIUsage as APIUsage,
    type CollectionResponseAPIUsage as CollectionResponseAPIUsage,
    type PortalInformationResponse as PortalInformationResponse,
  };

  export {
    AuditLogs as AuditLogs,
    type ActingUser as ActingUser,
    type CollectionResponseHydratedCriticalActionForwardPaging as CollectionResponseHydratedCriticalActionForwardPaging,
    type CollectionResponsePublicAPIUserActionEventForwardPaging as CollectionResponsePublicAPIUserActionEventForwardPaging,
    type CollectionResponsePublicLoginAuditForwardPaging as CollectionResponsePublicLoginAuditForwardPaging,
    type HydratedCriticalAction as HydratedCriticalAction,
    type PublicAPIUserActionEvent as PublicAPIUserActionEvent,
    type PublicLoginAudit as PublicLoginAudit,
  };
}
