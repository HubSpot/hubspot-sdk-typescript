// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as InfoAPI from './info';
import {
  AccountInfoAPIUsage,
  AccountInfoCollectionResponseAPIUsage,
  AccountInfoPortalInformationResponse,
  Info,
} from './info';

export class Account extends APIResource {
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
}

export interface AccountActingUser {
  userId: number;

  userEmail?: string;
}

export interface AccountCollectionResponseHydratedCriticalActionForwardPaging {
  results: Array<AccountHydratedCriticalAction>;

  paging?: Shared.ForwardPaging;
}

export interface AccountCollectionResponsePublicAPIUserActionEventForwardPaging {
  results: Array<AccountPublicAPIUserActionEvent>;

  paging?: Shared.ForwardPaging;
}

export interface AccountCollectionResponsePublicLoginAuditForwardPaging {
  results: Array<AccountPublicLoginAudit>;

  paging?: Shared.ForwardPaging;
}

export interface AccountHydratedCriticalAction {
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

export interface AccountPublicAPIUserActionEvent {
  id: string;

  actingUser: AccountActingUser;

  action: string;

  category: string;

  occurredAt: string;

  subCategory?: string;

  targetObjectId?: string;
}

export interface AccountPublicLoginAudit {
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

Account.Info = Info;

export declare namespace Account {
  export {
    type AccountActingUser as AccountActingUser,
    type AccountCollectionResponseHydratedCriticalActionForwardPaging as AccountCollectionResponseHydratedCriticalActionForwardPaging,
    type AccountCollectionResponsePublicAPIUserActionEventForwardPaging as AccountCollectionResponsePublicAPIUserActionEventForwardPaging,
    type AccountCollectionResponsePublicLoginAuditForwardPaging as AccountCollectionResponsePublicLoginAuditForwardPaging,
    type AccountHydratedCriticalAction as AccountHydratedCriticalAction,
    type AccountPublicAPIUserActionEvent as AccountPublicAPIUserActionEvent,
    type AccountPublicLoginAudit as AccountPublicLoginAudit,
  };

  export {
    Info as Info,
    type AccountInfoAPIUsage as AccountInfoAPIUsage,
    type AccountInfoCollectionResponseAPIUsage as AccountInfoCollectionResponseAPIUsage,
    type AccountInfoPortalInformationResponse as AccountInfoPortalInformationResponse,
  };
}
