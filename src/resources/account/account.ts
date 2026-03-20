// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActivityAPI from './activity';
import {
  APIUsage,
  ActingUser,
  Activity,
  ActivityListAuditLogsParams,
  ActivityListLoginActivitiesParams,
  ActivityListSecurityActivitiesParams,
  CollectionResponseAPIUsageNoPaging,
  CollectionResponseHydratedCriticalActionForwardPaging,
  CollectionResponsePublicAPIUserActionEventForwardPaging,
  CollectionResponsePublicLoginAuditForwardPaging,
  HydratedCriticalAction,
  HydratedCriticalActionsPage,
  PortalInformationResponse,
  PublicAPIUserActionEvent,
  PublicAPIUserActionEventsPage,
  PublicLoginAudit,
  PublicLoginAuditsPage,
} from './activity';

export class Account extends APIResource {
  activity: ActivityAPI.Activity = new ActivityAPI.Activity(this._client);
}

Account.Activity = Activity;

export declare namespace Account {
  export {
    Activity as Activity,
    type ActingUser as ActingUser,
    type APIUsage as APIUsage,
    type CollectionResponseAPIUsageNoPaging as CollectionResponseAPIUsageNoPaging,
    type CollectionResponseHydratedCriticalActionForwardPaging as CollectionResponseHydratedCriticalActionForwardPaging,
    type CollectionResponsePublicAPIUserActionEventForwardPaging as CollectionResponsePublicAPIUserActionEventForwardPaging,
    type CollectionResponsePublicLoginAuditForwardPaging as CollectionResponsePublicLoginAuditForwardPaging,
    type HydratedCriticalAction as HydratedCriticalAction,
    type PortalInformationResponse as PortalInformationResponse,
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
