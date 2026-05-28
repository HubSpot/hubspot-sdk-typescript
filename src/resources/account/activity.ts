// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class BaseActivity extends APIResource {
  static override readonly _key: readonly ['account', 'activity'] = Object.freeze([
    'account',
    'activity',
  ] as const);

  /**
   * Retrieve activity history for user actions related to approvals, content
   * updates, CRM object updates, security activity, and more (Enterprise only).
   * Learn more about
   * [activities included in audit log exports](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history-in-a-centralized-audit-log?hubs_content=knowledge.hubspot.com/account-management/view-and-export-account-activity-history&hubs_content-cta=centralized%20audit%20log#data-included-in-the-centralized-audit-log).
   */
  listAuditLogs(
    query: ActivityListAuditLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicAPIUserActionEventsPage, PublicAPIUserActionEvent> {
    return this._client.getAPIList(
      '/account-info/2026-03/activity/audit-logs',
      Page<PublicAPIUserActionEvent>,
      { query, ...options },
    );
  }

  /**
   * Retrieve logs of user actions related to
   * [login activity](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history#account-login-history).
   */
  listLoginActivities(
    query: ActivityListLoginActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicLoginAuditsPage, PublicLoginAudit> {
    return this._client.getAPIList('/account-info/2026-03/activity/login', Page<PublicLoginAudit>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve logs of user actions related to
   * [security activity](https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history#security-activity-history).
   */
  listSecurityActivities(
    query: ActivityListSecurityActivitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HydratedCriticalActionsPage, HydratedCriticalAction> {
    return this._client.getAPIList('/account-info/2026-03/activity/security', Page<HydratedCriticalAction>, {
      query,
      ...options,
    });
  }
}
export class Activity extends BaseActivity {}

export type PublicAPIUserActionEventsPage = Page<PublicAPIUserActionEvent>;

export type PublicLoginAuditsPage = Page<PublicLoginAudit>;

export type HydratedCriticalActionsPage = Page<HydratedCriticalAction>;

export interface ActingUser {
  /**
   * The user's unique ID.
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

export interface HydratedCriticalAction {
  /**
   * The activity's unique ID.
   */
  id: string;

  /**
   * The time the activity took place.
   */
  createdAt: string;

  /**
   * The type of activity.
   */
  type:
    | 'ACCEPTANCE_TEST'
    | 'ACCOUNT_ADDED_TO_MULTI_ACCOUNT_ORGANIZATION'
    | 'ACCOUNT_REMOVED_FROM_MULTI_ACCOUNT_ORGANIZATION'
    | 'ADD_ADMIN_PERMISSIONS'
    | 'ADD_ADMIN_USER'
    | 'ADD_SINGLE_SIGN_ON'
    | 'ADD_TWO_FACTOR_AUTHENTICATION'
    | 'ADD_USER'
    | 'ADD_WEBHOOK_IN_WORKFLOW'
    | 'ALLOWED_GEOLOCATIONS_DISABLED'
    | 'ALLOWED_GEOLOCATIONS_ENABLED'
    | 'ALLOWED_LOGIN_METHODS_DELETE'
    | 'ALLOWED_LOGIN_METHODS_UPDATE'
    | 'ATTACHMENT_LOGGING_DISABLED'
    | 'ATTACHMENT_LOGGING_ENABLED'
    | 'AUTOMATED_INACTIVE_USER_DEACTIVATION_DISABLED'
    | 'AUTOMATED_INACTIVE_USER_DEACTIVATION_ENABLED'
    | 'BOTS_WEBHOOK_POST'
    | 'BOTS_WEBHOOK_UPDATE'
    | 'BOTS_WEBHOOK_VIEWED'
    | 'BULK_EMAIL_DOMAIN_CHANGE'
    | 'CHANGE_AD_EVENT_CONSENT_SETTING'
    | 'CHANGE_AD_EVENT_DATA_SHARING_SETTING'
    | 'CHANGE_PASSWORD'
    | 'CONTACT_DATA_EXPORT'
    | 'DATA_ACCESS_REQUEST_SUBMITTED'
    | 'DATA_BACKUP_CREATED'
    | 'DATA_BACKUP_DOWNLOADED'
    | 'DATA_BACKUP_SCHEDULE_CREATED'
    | 'DATA_BACKUP_SCHEDULE_DELETED'
    | 'DATA_BACKUP_SCHEDULE_UPDATED'
    | 'DATA_RESTORE_COMPLETED'
    | 'DATA_SHARING_CONNECTION_ADDED'
    | 'DATA_SHARING_CONNECTION_REMOVED'
    | 'DATASET_SYNC'
    | 'DEACTIVATE_USER'
    | 'DOMAIN_BASED_INVITE_CREATED'
    | 'DOMAIN_BASED_INVITE_REMOVED'
    | 'DOMAIN_BASED_INVITES_DISABLED'
    | 'DOMAIN_BASED_INVITES_ENABLED'
    | 'EMAIL_TRACKING_DISABLED'
    | 'EMAIL_TRACKING_ENABLED'
    | 'EXPORT'
    | 'EXPORT_APPROVAL'
    | 'EXPORT_DOWNLOAD'
    | 'EXPORT_USERS'
    | 'FORM_SUBMISSIONS_EXPORT'
    | 'GDPR_DELETE'
    | 'GDPR_TOGGLE_DISABLED'
    | 'GDPR_TOGGLE_ENABLED'
    | 'HAPIKEY_CREATE'
    | 'HAPIKEY_DEACTIVATE'
    | 'HAPIKEY_VIEW'
    | 'HUBSPOT_EMPLOYEE_ACCESS_DISABLED'
    | 'HUBSPOT_EMPLOYEE_ACCESS_ENABLED'
    | 'IMPERSONATE_USER'
    | 'IMPORT'
    | 'INSTALL_INTEGRATION'
    | 'IP_RESTRICTIONS_DISABLED'
    | 'IP_RESTRICTIONS_ENABLED'
    | 'JOINED_PORTAL_VIA_DOMAIN_BASED_INVITE'
    | 'LEGAL_BASIS_REQUIREMENT_DISABLED'
    | 'LEGAL_BASIS_REQUIREMENT_ENABLED'
    | 'MANUAL_PASSWORD_RESET_EMAIL_SEND'
    | 'MANUAL_REGISTRATION_EMAIL_SEND'
    | 'MARKETING_CONTACTS_APP_SETTINGS_DISABLED'
    | 'MARKETING_CONTACTS_APP_SETTINGS_ENABLED'
    | 'MERGE_REVERT'
    | 'MODIFY_WEBHOOK_IN_WORKFLOW'
    | 'MULTI_ACCOUNT_REPORTING_CONNECTION_ADDED'
    | 'MULTI_ACCOUNT_REPORTING_CONNECTION_REMOVED'
    | 'MULTI_ACCOUNT_WORKFLOWS_CONNECTION_ADDED'
    | 'MULTI_ACCOUNT_WORKFLOWS_CONNECTION_REMOVED'
    | 'NEVER_LOG_FOR_PORTAL_ADDITION'
    | 'NEVER_LOG_FOR_PORTAL_DELETION'
    | 'NEVER_LOG_FOR_USER_ADDITION'
    | 'NEVER_LOG_FOR_USER_DELETION'
    | 'PASSKEY_ADDED'
    | 'PASSKEY_DELETED'
    | 'PAYMENT_ACCOUNT_CREATION'
    | 'PAYMENT_ACCOUNT_INFO_UPDATE'
    | 'PAYMENT_BANK_ACCOUNT_CHANGE'
    | 'PAYMENT_ONBOARDING_LINK_SEND'
    | 'PERSONAL_ACCESS_KEY_CREATE'
    | 'PERSONAL_ACCESS_KEY_DEACTIVATE'
    | 'PERSONAL_ACCESS_KEY_ROTATE'
    | 'PERSONAL_ACCESS_KEY_VIEW'
    | 'PRIVATE_APP_ACCESS_TOKEN_CREATE'
    | 'PRIVATE_APP_ACCESS_TOKEN_DEACTIVATE'
    | 'PRIVATE_APP_ACCESS_TOKEN_ROTATE'
    | 'PRIVATE_APP_ACCESS_TOKEN_VIEW'
    | 'PRIVATE_APP_CLIENT_SECRET_VIEW'
    | 'PRIVATE_APP_CLIENT_SECRET_WRITE'
    | 'PRIVATE_APP_SCOPE_GROUPS_UPDATE'
    | 'PRODUCTION_DEPLOYMENT'
    | 'PROPERTY_HISTORY_REVISION'
    | 'PUBLIC_APP_CLIENT_SECRET_VIEW'
    | 'PUBLIC_APP_CLIENT_SECRET_WRITE'
    | 'REACTIVATE_USER'
    | 'REMOVE_ADMIN_PERMISSIONS'
    | 'REMOVE_ADMIN_USER'
    | 'REMOVE_SINGLE_SIGN_ON'
    | 'REMOVE_TWO_FACTOR_AUTHENTICATION'
    | 'REMOVE_USER'
    | 'REQUIRE_SINGLE_SIGN_ON'
    | 'RESTRICTED_LIST_ADDED_TO_CONTENT'
    | 'SANDBOX_CREATION'
    | 'SANDBOX_DELETION'
    | 'SANDBOX_SYNC'
    | 'SANDBOX_SYNC_TO_PRODUCTION'
    | 'SECRET_ADDED_TO_SERVERLESS_FUNCTION'
    | 'SENSITIVE_DATA_DISABLED'
    | 'SENSITIVE_DATA_ENABLED'
    | 'SEQUENCE_CLONED'
    | 'SEQUENCE_CREATED'
    | 'SEQUENCE_ENROLLMENT_INITIATED'
    | 'SEQUENCE_ENROLLMENT_STATE_CHANGED'
    | 'SEQUENCE_MODIFIED'
    | 'SERVICE_KEY_CREATE'
    | 'SERVICE_KEY_DEACTIVATE'
    | 'SERVICE_KEY_PERMISSIONS_UPDATE'
    | 'SERVICE_KEY_REVEAL'
    | 'SERVICE_KEY_ROTATE'
    | 'SMTP_TOKEN_CREATED'
    | 'SMTP_TOKEN_DELETED'
    | 'SMTP_TOKEN_PASSWORD_RESET'
    | 'SMTP_TOKEN_RETRIEVED'
    | 'TEAM_ADDED'
    | 'TEAM_DELETED'
    | 'TEAM_USER_ADDED'
    | 'TEAM_USER_DELETED'
    | 'TEMPLATE_DELETED'
    | 'TEMPLATE_MODIFIED'
    | 'TOUCHLESS_PURCHASE'
    | 'UNIFIED_RESTORE_UNDO_EXECUTION'
    | 'UNINSTALL_INTEGRATION'
    | 'UNREQUIRE_SINGLE_SIGN_ON'
    | 'WEBHOOK_SETTINGS_UPDATE'
    | 'WEBHOOK_SUBSCRIPTION_CREATE'
    | 'WEBHOOK_SUBSCRIPTION_UPDATE';

  /**
   * The user's unique ID.
   */
  userId: number;

  /**
   * Email address of the user associated with the activity.
   */
  actingUser?: string;

  /**
   * The approximate country code
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

  /**
   * The approximate location where the activity took place.
   */
  location?: string;

  /**
   * The ID of the affected object.
   */
  objectId?: string;

  /**
   * The approximate region code
   */
  regionCode?: string;
}

export interface PublicAPIUserActionEvent {
  /**
   * The login activity's unique ID.
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
   * The approximate country code of the login
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

  /**
   * The approximate location where the login activity originated.
   */
  location?: string;

  /**
   * The approximate region code of the login
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

export interface ActivityListAuditLogsParams extends PageParams {
  actingUserId?: Array<number>;

  fillFinalTimestamp?: boolean;

  occurredAfter?: string;

  occurredBefore?: string;

  sort?: Array<string>;
}

export interface ActivityListLoginActivitiesParams extends PageParams {
  userId?: number;
}

export interface ActivityListSecurityActivitiesParams extends PageParams {
  fromTimestamp?: number;

  toTimestamp?: number;

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
    type PublicAPIUserActionEventsPage as PublicAPIUserActionEventsPage,
    type PublicLoginAuditsPage as PublicLoginAuditsPage,
    type HydratedCriticalActionsPage as HydratedCriticalActionsPage,
    type ActivityListAuditLogsParams as ActivityListAuditLogsParams,
    type ActivityListLoginActivitiesParams as ActivityListLoginActivitiesParams,
    type ActivityListSecurityActivitiesParams as ActivityListSecurityActivitiesParams,
  };
}
