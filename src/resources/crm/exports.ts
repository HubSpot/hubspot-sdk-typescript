// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CRMAPI from './crm';
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

export interface PublicCRMSearchRequest {
  filters: Array<CRMAPI.Filter>;

  query: string;

  sorts: Array<string>;
}

export interface PublicExportListRequest {
  exportInternalValuesOptions: Array<'NAMES' | 'VALUES'>;

  exportName: string;

  exportType: 'LIST';

  format: 'XLS' | 'XLSX' | 'CSV';

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

  associatedObjectType?: string;
}

export type PublicExportRequest = PublicExportViewRequest | PublicExportListRequest;

export interface PublicExportViewRequest {
  exportInternalValuesOptions: Array<'NAMES' | 'VALUES'>;

  exportName: string;

  exportType: 'VIEW';

  format: 'XLS' | 'XLSX' | 'CSV';

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

  associatedObjectType?: string;

  publicCrmSearchRequest?: PublicCRMSearchRequest;
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
    type PublicCRMSearchRequest as PublicCRMSearchRequest,
    type PublicExportListRequest as PublicExportListRequest,
    type PublicExportRequest as PublicExportRequest,
    type PublicExportViewRequest as PublicExportViewRequest,
    type ExportCreateParams as ExportCreateParams,
  };
}
