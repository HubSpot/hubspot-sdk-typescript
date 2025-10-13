// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';

export class AuditLogs extends APIResource {}

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

export declare namespace AuditLogs {
  export {
    type ActingUser as ActingUser,
    type CollectionResponseHydratedCriticalActionForwardPaging as CollectionResponseHydratedCriticalActionForwardPaging,
    type CollectionResponsePublicAPIUserActionEventForwardPaging as CollectionResponsePublicAPIUserActionEventForwardPaging,
    type CollectionResponsePublicLoginAuditForwardPaging as CollectionResponsePublicLoginAuditForwardPaging,
    type HydratedCriticalAction as HydratedCriticalAction,
    type PublicAPIUserActionEvent as PublicAPIUserActionEvent,
    type PublicLoginAudit as PublicLoginAudit,
  };
}
