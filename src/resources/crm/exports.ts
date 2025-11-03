// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CrmAPI from './crm';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Exports extends APIResource {
  /**
   * Begins exporting CRM data for the portal as specified in the request body
   *
   * @example
   * ```ts
   * const taskLocator = await client.crm.exports.create();
   * ```
   */
  create(body: ExportCreateParams, options?: RequestOptions): APIPromise<Shared.TaskLocator> {
    return this._client.post('/crm/v3/exports/export/async', { body, ...options });
  }

  /**
   * Returns the status of the export with taskId, including the URL of the resulting
   * file if the export status is COMPLETE
   *
   * @example
   * ```ts
   * const actionResponseWithSingleResultUri =
   *   await client.crm.exports.getStatus(0);
   * ```
   */
  getStatus(taskID: number, options?: RequestOptions): APIPromise<ActionResponseWithSingleResultUri> {
    return this._client.get(path`/crm/v3/exports/export/async/tasks/${taskID}/status`, options);
  }
}

export interface ActionResponseWithSingleResultUri {
  completedAt: string;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;

  result?: string;
}

export interface PublicCrmSearchRequest {
  filterGroups: Array<CrmAPI.FilterGroup>;

  filters: Array<CrmAPI.Filter>;

  sorts: Array<string>;

  query?: string;
}

export interface PublicExportListRequest {
  associatedObjectType: Array<string>;

  exportInternalValuesOptions: Array<'NAMES' | 'VALUES'>;

  exportName: string;

  exportType: 'LIST';

  format: 'XLS' | 'XLSX' | 'CSV';

  includeLabeledAssociations: boolean;

  includePrimaryDisplayPropertyForAssociatedObjects: boolean;

  language:
    | 'EN'
    | 'DE'
    | 'ES'
    | 'FR'
    | 'JA'
    | 'NL'
    | 'PT_BR'
    | 'IT'
    | 'PL'
    | 'SV'
    | 'FI'
    | 'ZH_TW'
    | 'DA_DK'
    | 'NO';

  listId: string;

  objectProperties: Array<string>;

  objectType: string;

  overrideAssociatedObjectsPerDefinitionPerRowLimit: boolean;
}

export type PublicExportRequest = PublicExportViewRequest | PublicExportListRequest;

export interface PublicExportResponse {
  id: string;

  createdAt: string;

  exportState:
    | 'ENQUEUED'
    | 'PROCESSING'
    | 'DONE'
    | 'FAILED'
    | 'CANCELED'
    | 'CONFLICT'
    | 'DELETED'
    | 'DEFERRED'
    | 'PENDING_APPROVAL';

  exportType: 'VIEW' | 'LIST';

  objectProperties: Array<string>;

  objectType: string;

  updatedAt: string;

  exportName?: string;

  recordCount?: number;
}

export interface PublicExportViewRequest {
  associatedObjectType: Array<string>;

  exportInternalValuesOptions: Array<'NAMES' | 'VALUES'>;

  exportName: string;

  exportType: 'VIEW';

  format: 'XLS' | 'XLSX' | 'CSV';

  includeLabeledAssociations: boolean;

  includePrimaryDisplayPropertyForAssociatedObjects: boolean;

  language:
    | 'EN'
    | 'DE'
    | 'ES'
    | 'FR'
    | 'JA'
    | 'NL'
    | 'PT_BR'
    | 'IT'
    | 'PL'
    | 'SV'
    | 'FI'
    | 'ZH_TW'
    | 'DA_DK'
    | 'NO';

  objectProperties: Array<string>;

  objectType: string;

  overrideAssociatedObjectsPerDefinitionPerRowLimit: boolean;

  publicCrmSearchRequest?: PublicCrmSearchRequest;
}

export type ExportCreateParams =
  | ExportCreateParams.PublicExportViewRequest
  | ExportCreateParams.PublicExportListRequest;

export declare namespace ExportCreateParams {
  export interface PublicExportViewRequest {}

  export interface PublicExportListRequest {}
}

export declare namespace Exports {
  export {
    type ActionResponseWithSingleResultUri as ActionResponseWithSingleResultUri,
    type PublicCrmSearchRequest as PublicCrmSearchRequest,
    type PublicExportListRequest as PublicExportListRequest,
    type PublicExportRequest as PublicExportRequest,
    type PublicExportResponse as PublicExportResponse,
    type PublicExportViewRequest as PublicExportViewRequest,
    type ExportCreateParams as ExportCreateParams,
  };
}
