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
import * as InfoAPI from './info';
import { APIUsage, CollectionResponseAPIUsage, Info, PortalInformationResponse } from './info';

export class Account extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
}

Account.AuditLogs = AuditLogs;
Account.Info = Info;

export declare namespace Account {
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

  export {
    Info as Info,
    type APIUsage as APIUsage,
    type CollectionResponseAPIUsage as CollectionResponseAPIUsage,
    type PortalInformationResponse as PortalInformationResponse,
  };
}
