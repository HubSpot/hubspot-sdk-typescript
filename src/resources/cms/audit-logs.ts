// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class AuditLogs extends APIResource {
  list(
    query: AuditLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicAuditLogsPage, PublicAuditLog> {
    return this._client.getAPIList('/cms/audit-logs/2026-03', Page<PublicAuditLog>, { query, ...options });
  }

  export(body: AuditLogExportParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/audit-logs/2026-03/export', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PublicAuditLogsPage = Page<PublicAuditLog>;

export interface CmsAuditLoggingExportFilters {
  objectType: Array<string>;
}

export interface CmsAuditLoggingExportSettings {
  email: string;

  format: 'CSV' | 'XLS' | 'XLSX';

  portalId: number;

  recipientUserIds: Array<number>;

  shouldMarkExportFileAsSensitive: boolean;

  type: string;

  filters?: CmsAuditLoggingExportFilters;

  partition?: number;

  userId?: number;

  userTimeZone?: string;
}

export interface CollectionResponsePublicAuditLog {
  results: Array<PublicAuditLog>;

  paging?: Shared.Paging;
}

export interface PublicAuditLog {
  /**
   * The type of event that took place (CREATED, UPDATED, PUBLISHED, DELETED,
   * UNPUBLISHED).
   */
  event: 'CREATED' | 'DELETED' | 'PUBLISHED' | 'RESTORE' | 'UNPUBLISHED' | 'UPDATED';

  /**
   * The name of the user who caused the event.
   */
  fullName: string;

  /**
   * Supplementary metadata associated with the audit log entry. It provides
   * additional context about the audited event (ex: rows deleted/updated for a HubDB
   * event, the specific fields that were changed for a Content Settings event).
   */
  meta: unknown;

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
    | 'CASE_STUDY'
    | 'CONTENT_SETTINGS'
    | 'CSS'
    | 'CTA'
    | 'DOMAIN'
    | 'EMAIL'
    | 'FILE'
    | 'GLOBAL_MODULE'
    | 'HUBDB_TABLE'
    | 'JS'
    | 'KNOWLEDGE_BASE'
    | 'KNOWLEDGE_BASE_ARTICLE'
    | 'LANDING_PAGE'
    | 'MODULE'
    | 'PODCAST'
    | 'QUOTE'
    | 'SERVERLESS_FUNCTION'
    | 'TEMPLATE'
    | 'THEME'
    | 'URL_MAPPING'
    | 'WEB_INTERACTIVE'
    | 'WEBSITE_PAGE';

  /**
   * The timestamp at which the event occurred.
   */
  timestamp: string;

  /**
   * The ID of the user who caused the event.
   */
  userId: string;
}

export interface AuditLogListParams extends PageParams {
  before?: string;

  eventType?: Array<string>;

  objectId?: Array<string>;

  objectType?: Array<string>;

  sort?: Array<string>;

  userId?: Array<string>;
}

export interface AuditLogExportParams {
  email: string;

  format: 'CSV' | 'XLS' | 'XLSX';

  portalId: number;

  recipientUserIds: Array<number>;

  shouldMarkExportFileAsSensitive: boolean;

  type: string;

  filters?: CmsAuditLoggingExportFilters;

  partition?: number;

  userId?: number;

  userTimeZone?: string;
}

export declare namespace AuditLogs {
  export {
    type CmsAuditLoggingExportFilters as CmsAuditLoggingExportFilters,
    type CmsAuditLoggingExportSettings as CmsAuditLoggingExportSettings,
    type CollectionResponsePublicAuditLog as CollectionResponsePublicAuditLog,
    type PublicAuditLog as PublicAuditLog,
    type PublicAuditLogsPage as PublicAuditLogsPage,
    type AuditLogListParams as AuditLogListParams,
    type AuditLogExportParams as AuditLogExportParams,
  };
}
