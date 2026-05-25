// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CrmAPI from './crm';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseExports extends APIResource {
  static override readonly _key: readonly ['crm', 'exports'] = Object.freeze(['crm', 'exports'] as const);

  /**
   * Begins exporting CRM data for the portal as specified in the request body
   */
  createAsync(body: ExportCreateAsyncParams, options?: RequestOptions): APIPromise<Shared.TaskLocator> {
    return this._client.post('/crm/exports/2026-03/export/async', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific CRM export, including its current
   * state and properties.
   */
  get(exportID: number, options?: RequestOptions): APIPromise<PublicExportResponse> {
    return this._client.get(path`/crm/exports/2026-03/export/${exportID}`, options);
  }

  /**
   * Returns the status of the export with taskId, including the URL of the resulting
   * file if the export status is COMPLETE
   */
  getStatus(taskID: number, options?: RequestOptions): APIPromise<ActionResponseWithSingleResultUri> {
    return this._client.get(path`/crm/exports/2026-03/export/async/tasks/${taskID}/status`, options);
  }
}
export class Exports extends BaseExports {}

export interface ActionResponseWithSingleResultUri {
  /**
   * The timestamp when the export was completed, in ISO 8601 format.
   */
  completedAt: string;

  /**
   * The timestamp when the export process started, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The current status of the export, which can be PENDING, PROCESSING, COMPLETE or
   * CANCELED.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * A collection of related links associated with the export.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the export process.
   */
  numErrors?: number;

  /**
   * The timestamp when the export request was made, in ISO 8601 format.
   */
  requestedAt?: string;

  /**
   * The URL of the resulting file if the export status is COMPLETE.
   */
  result?: string;
}

export interface PublicCrmSearchRequest {
  filterGroups: Array<CrmAPI.FilterGroup>;

  filters: Array<CrmAPI.CrmFilter>;

  /**
   * Defines the order in which the CRM records should be returned.
   */
  sorts: Array<string>;

  /**
   * The search query string, to filter CRM records.
   */
  query?: string;
}

export interface PublicExportListRequest {
  associatedObjectType: Array<string>;

  exportInternalValuesOptions: Array<'NAMES' | 'VALUES'>;

  exportName: string;

  exportType: 'LIST';

  format: 'CSV' | 'XLS' | 'XLSX';

  includeLabeledAssociations: boolean;

  includePrimaryDisplayPropertyForAssociatedObjects: boolean;

  language:
    | 'AF_ZA'
    | 'AR_EG'
    | 'BG'
    | 'BN'
    | 'CA_ES'
    | 'CS'
    | 'DA_DK'
    | 'DE'
    | 'EL_GR'
    | 'EN'
    | 'EN_GB'
    | 'ES'
    | 'ES_MX'
    | 'ET_EE'
    | 'FI'
    | 'FR'
    | 'FR_CA'
    | 'HE_IL'
    | 'HI_IN'
    | 'HR'
    | 'HU'
    | 'ID'
    | 'IT'
    | 'JA'
    | 'KO_KR'
    | 'LT_LT'
    | 'MS'
    | 'NL'
    | 'NO'
    | 'PL'
    | 'PT_BR'
    | 'PT_PT'
    | 'RO'
    | 'RU'
    | 'SK_SK'
    | 'SL'
    | 'SV'
    | 'TH'
    | 'TL'
    | 'TR'
    | 'UK'
    | 'VI_VN'
    | 'ZH_CN'
    | 'ZH_HK'
    | 'ZH_TW';

  listId: string;

  objectProperties: Array<string>;

  objectType: string;

  overrideAssociatedObjectsPerDefinitionPerRowLimit: boolean;
}

export type PublicExportRequest = PublicExportViewRequest | PublicExportListRequest;

export interface PublicExportResponse {
  /**
   * The unique ID of the export.
   */
  id: string;

  /**
   * The timestamp when the export was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * The current state of the export process.
   */
  exportState:
    | 'CANCELED'
    | 'CONFLICT'
    | 'DEFERRED'
    | 'DELETED'
    | 'DONE'
    | 'ENQUEUED'
    | 'FAILED'
    | 'PENDING_APPROVAL'
    | 'PROCESSING';

  /**
   * The type of export, which can be either VIEW or LIST.
   */
  exportType: 'LIST' | 'VIEW';

  /**
   * The list of properties exported for the associated object.
   */
  objectProperties: Array<string>;

  /**
   * The associated CRM object being exported.
   */
  objectType: string;

  /**
   * The timestamp when the export was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * The name assigned to the export.
   */
  exportName?: string;

  /**
   * The total number of records included in the export.
   */
  recordCount?: number;
}

export interface PublicExportViewRequest {
  associatedObjectType: Array<string>;

  exportInternalValuesOptions: Array<'NAMES' | 'VALUES'>;

  exportName: string;

  exportType: 'VIEW';

  format: 'CSV' | 'XLS' | 'XLSX';

  includeLabeledAssociations: boolean;

  includePrimaryDisplayPropertyForAssociatedObjects: boolean;

  language:
    | 'AF_ZA'
    | 'AR_EG'
    | 'BG'
    | 'BN'
    | 'CA_ES'
    | 'CS'
    | 'DA_DK'
    | 'DE'
    | 'EL_GR'
    | 'EN'
    | 'EN_GB'
    | 'ES'
    | 'ES_MX'
    | 'ET_EE'
    | 'FI'
    | 'FR'
    | 'FR_CA'
    | 'HE_IL'
    | 'HI_IN'
    | 'HR'
    | 'HU'
    | 'ID'
    | 'IT'
    | 'JA'
    | 'KO_KR'
    | 'LT_LT'
    | 'MS'
    | 'NL'
    | 'NO'
    | 'PL'
    | 'PT_BR'
    | 'PT_PT'
    | 'RO'
    | 'RU'
    | 'SK_SK'
    | 'SL'
    | 'SV'
    | 'TH'
    | 'TL'
    | 'TR'
    | 'UK'
    | 'VI_VN'
    | 'ZH_CN'
    | 'ZH_HK'
    | 'ZH_TW';

  objectProperties: Array<string>;

  objectType: string;

  overrideAssociatedObjectsPerDefinitionPerRowLimit: boolean;

  publicCrmSearchRequest?: PublicCrmSearchRequest;
}

export type ExportCreateAsyncParams =
  | ExportCreateAsyncParams.PublicExportViewRequest
  | ExportCreateAsyncParams.PublicExportListRequest;

export declare namespace ExportCreateAsyncParams {
  export interface PublicExportViewRequest {
    associatedObjectType: Array<string>;

    exportInternalValuesOptions: Array<'NAMES' | 'VALUES'>;

    exportName: string;

    exportType: 'VIEW';

    format: 'CSV' | 'XLS' | 'XLSX';

    includeLabeledAssociations: boolean;

    includePrimaryDisplayPropertyForAssociatedObjects: boolean;

    language:
      | 'AF_ZA'
      | 'AR_EG'
      | 'BG'
      | 'BN'
      | 'CA_ES'
      | 'CS'
      | 'DA_DK'
      | 'DE'
      | 'EL_GR'
      | 'EN'
      | 'EN_GB'
      | 'ES'
      | 'ES_MX'
      | 'ET_EE'
      | 'FI'
      | 'FR'
      | 'FR_CA'
      | 'HE_IL'
      | 'HI_IN'
      | 'HR'
      | 'HU'
      | 'ID'
      | 'IT'
      | 'JA'
      | 'KO_KR'
      | 'LT_LT'
      | 'MS'
      | 'NL'
      | 'NO'
      | 'PL'
      | 'PT_BR'
      | 'PT_PT'
      | 'RO'
      | 'RU'
      | 'SK_SK'
      | 'SL'
      | 'SV'
      | 'TH'
      | 'TL'
      | 'TR'
      | 'UK'
      | 'VI_VN'
      | 'ZH_CN'
      | 'ZH_HK'
      | 'ZH_TW';

    objectProperties: Array<string>;

    objectType: string;

    overrideAssociatedObjectsPerDefinitionPerRowLimit: boolean;

    publicCrmSearchRequest?: PublicCrmSearchRequest;
  }

  export interface PublicExportListRequest {
    associatedObjectType: Array<string>;

    exportInternalValuesOptions: Array<'NAMES' | 'VALUES'>;

    exportName: string;

    exportType: 'LIST';

    format: 'CSV' | 'XLS' | 'XLSX';

    includeLabeledAssociations: boolean;

    includePrimaryDisplayPropertyForAssociatedObjects: boolean;

    language:
      | 'AF_ZA'
      | 'AR_EG'
      | 'BG'
      | 'BN'
      | 'CA_ES'
      | 'CS'
      | 'DA_DK'
      | 'DE'
      | 'EL_GR'
      | 'EN'
      | 'EN_GB'
      | 'ES'
      | 'ES_MX'
      | 'ET_EE'
      | 'FI'
      | 'FR'
      | 'FR_CA'
      | 'HE_IL'
      | 'HI_IN'
      | 'HR'
      | 'HU'
      | 'ID'
      | 'IT'
      | 'JA'
      | 'KO_KR'
      | 'LT_LT'
      | 'MS'
      | 'NL'
      | 'NO'
      | 'PL'
      | 'PT_BR'
      | 'PT_PT'
      | 'RO'
      | 'RU'
      | 'SK_SK'
      | 'SL'
      | 'SV'
      | 'TH'
      | 'TL'
      | 'TR'
      | 'UK'
      | 'VI_VN'
      | 'ZH_CN'
      | 'ZH_HK'
      | 'ZH_TW';

    listId: string;

    objectProperties: Array<string>;

    objectType: string;

    overrideAssociatedObjectsPerDefinitionPerRowLimit: boolean;
  }
}

export declare namespace Exports {
  export {
    type ActionResponseWithSingleResultUri as ActionResponseWithSingleResultUri,
    type PublicCrmSearchRequest as PublicCrmSearchRequest,
    type PublicExportListRequest as PublicExportListRequest,
    type PublicExportRequest as PublicExportRequest,
    type PublicExportResponse as PublicExportResponse,
    type PublicExportViewRequest as PublicExportViewRequest,
    type ExportCreateAsyncParams as ExportCreateAsyncParams,
  };
}
