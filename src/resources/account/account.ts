// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActivityAPI from './activity';
import {
  Activity,
  ActivityListAuditLogsParams,
  ActivityListLoginActivitiesParams,
  ActivityListSecurityActivitiesParams,
} from './activity';
import * as DetailsAPI from './details';
import { Details } from './details';
import * as UsageAPI from './usage';
import { Usage } from './usage';
import * as EmailsAPI from '../marketing/emails/emails';

export class Account extends APIResource {
  activity: ActivityAPI.Activity = new ActivityAPI.Activity(this._client);
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
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

Account.Activity = Activity;
Account.Details = Details;
Account.Usage = Usage;

export declare namespace Account {
  export {
    type ActingUser as ActingUser,
    type APIUsage as APIUsage,
    type CollectionResponseAPIUsage as CollectionResponseAPIUsage,
    type CollectionResponseHydratedCriticalActionForwardPaging as CollectionResponseHydratedCriticalActionForwardPaging,
    type CollectionResponsePublicAPIUserActionEventForwardPaging as CollectionResponsePublicAPIUserActionEventForwardPaging,
    type CollectionResponsePublicLoginAuditForwardPaging as CollectionResponsePublicLoginAuditForwardPaging,
    type HydratedCriticalAction as HydratedCriticalAction,
    type PortalInformationResponse as PortalInformationResponse,
    type PublicAPIUserActionEvent as PublicAPIUserActionEvent,
    type PublicLoginAudit as PublicLoginAudit,
  };

  export {
    Activity as Activity,
    type ActivityListAuditLogsParams as ActivityListAuditLogsParams,
    type ActivityListLoginActivitiesParams as ActivityListLoginActivitiesParams,
    type ActivityListSecurityActivitiesParams as ActivityListSecurityActivitiesParams,
  };

  export { Details as Details };

  export { Usage as Usage };
}
