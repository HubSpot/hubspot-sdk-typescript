// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';

export class AuditLogs extends APIResource {}

export interface ActingUser {
  userId: number;

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

export interface HydratedCriticalAction {
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

export interface PublicAPIUserActionEvent {
  id: string;

  actingUser: ActingUser;

  action: string;

  category: string;

  occurredAt: string;

  subCategory?: string;

  targetObjectId?: string;
}

export interface PublicLoginAudit {
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
