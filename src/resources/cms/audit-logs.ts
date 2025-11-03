// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailsAPI from '../marketing/emails/emails';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class AuditLogs extends APIResource {
  /**
   * Returns audit logs based on filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicAuditLog of client.cms.auditLogs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AuditLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicAuditLogsPage, PublicAuditLog> {
    return this._client.getAPIList('/cms/v3/audit-logs/', Page<PublicAuditLog>, { query, ...options });
  }
}

export type PublicAuditLogsPage = Page<PublicAuditLog>;

/**
 * The collection of audit logs.
 */
export interface CollectionResponsePublicAuditLog {
  results: Array<PublicAuditLog>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.EmailsPaging;
}

export interface PublicAuditLog {
  /**
   * The type of event that took place (CREATED, UPDATED, PUBLISHED, DELETED,
   * UNPUBLISHED).
   */
  event: 'CREATED' | 'UPDATED' | 'PUBLISHED' | 'DELETED' | 'UNPUBLISHED' | 'RESTORE';

  /**
   * The name of the user who caused the event.
   */
  fullName: string;

  /**
   * The ID of the object.
   */
  objectId: string;

  /**
   * The internal name of the object in HubSpot.
   */
  objectName: string;

  /**
   * The type of the object (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)
   */
  objectType:
    | 'BLOG'
    | 'BLOG_POST'
    | 'LANDING_PAGE'
    | 'WEBSITE_PAGE'
    | 'TEMPLATE'
    | 'MODULE'
    | 'GLOBAL_MODULE'
    | 'SERVERLESS_FUNCTION'
    | 'DOMAIN'
    | 'URL_MAPPING'
    | 'EMAIL'
    | 'CONTENT_SETTINGS'
    | 'HUBDB_TABLE'
    | 'KNOWLEDGE_BASE_ARTICLE'
    | 'KNOWLEDGE_BASE'
    | 'THEME'
    | 'CSS'
    | 'JS'
    | 'CTA'
    | 'FILE';

  /**
   * The timestamp at which the event occurred.
   */
  timestamp: string;

  /**
   * The ID of the user who caused the event.
   */
  userId: string;

  meta?: unknown;
}

export interface AuditLogListParams extends PageParams {
  /**
   * Timestamp before which audit logs will be returned
   */
  before?: string;

  /**
   * Comma separated list of event types to filter by (CREATED, UPDATED, PUBLISHED,
   * DELETED, UNPUBLISHED).
   */
  eventType?: Array<string>;

  /**
   * Comma separated list of object ids to filter by.
   */
  objectId?: Array<string>;

  /**
   * Comma separated list of object types to filter by (BLOG, LANDING_PAGE, DOMAIN,
   * HUBDB_TABLE etc.)
   */
  objectType?: Array<string>;

  /**
   * The sort direction for the audit logs. (Can only sort by timestamp).
   */
  sort?: Array<string>;

  /**
   * Comma separated list of user ids to filter by.
   */
  userId?: Array<string>;
}

export declare namespace AuditLogs {
  export {
    type CollectionResponsePublicAuditLog as CollectionResponsePublicAuditLog,
    type PublicAuditLog as PublicAuditLog,
    type PublicAuditLogsPage as PublicAuditLogsPage,
    type AuditLogListParams as AuditLogListParams,
  };
}
