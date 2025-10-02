// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StagesAPI from './stages';
import {
  CRMPipelinesCollectionResponsePublicAuditInfoNoPaging,
  CRMPipelinesPipelineStage,
  CRMPipelinesPipelineStageInput,
  StageCreateParams,
  StageDeleteParams,
  StageListParams,
  StageListResponse,
  StageRetrieveAuditParams,
  StageRetrieveParams,
  StageUpdateParams,
  Stages,
} from './stages';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Pipelines extends APIResource {
  stages: StagesAPI.Stages = new StagesAPI.Stages(this._client);

  /**
   * Retrieve all pipelines
   */
  retrieve(objectType: string, options?: RequestOptions): APIPromise<PipelineRetrieveResponse> {
    return this._client.get(path`/crm/v3/pipelines/${objectType}`, options);
  }

  /**
   * Create a pipeline
   */
  update(
    objectType: string,
    body: PipelineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMPipelinesPipeline> {
    return this._client.post(path`/crm/v3/pipelines/${objectType}`, { body, ...options });
  }

  /**
   * Delete a pipeline
   */
  delete(pipelineID: string, params: PipelineDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete } = params;
    return this._client.delete(path`/crm/v3/pipelines/${objectType}/${pipelineID}`, {
      query: { validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return an audit of all changes to the pipeline
   */
  retrieveAudit(
    pipelineID: string,
    params: PipelineRetrieveAuditParams,
    options?: RequestOptions,
  ): APIPromise<StagesAPI.CRMPipelinesCollectionResponsePublicAuditInfoNoPaging> {
    const { objectType } = params;
    return this._client.get(path`/crm/v3/pipelines/${objectType}/${pipelineID}/audit`, options);
  }
}

export interface CRMPipelinesPipeline {
  id: string;

  archived: boolean;

  createdAt: string;

  displayOrder: number;

  label: string;

  stages: Array<StagesAPI.CRMPipelinesPipelineStage>;

  updatedAt: string;

  archivedAt?: string;
}

export interface CRMPipelinesPipelineInput {
  displayOrder: number;

  label: string;

  stages: Array<StagesAPI.CRMPipelinesPipelineStageInput>;
}

export interface PipelineRetrieveResponse {
  results: Array<CRMPipelinesPipeline>;
}

export interface PipelineUpdateParams {
  displayOrder: number;

  label: string;

  stages: Array<StagesAPI.CRMPipelinesPipelineStageInput>;
}

export interface PipelineDeleteParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Query param:
   */
  validateDealStageUsagesBeforeDelete?: boolean;

  /**
   * Query param:
   */
  validateReferencesBeforeDelete?: boolean;
}

export interface PipelineRetrieveAuditParams {
  objectType: string;
}

Pipelines.Stages = Stages;

export declare namespace Pipelines {
  export {
    type CRMPipelinesPipeline as CRMPipelinesPipeline,
    type CRMPipelinesPipelineInput as CRMPipelinesPipelineInput,
    type PipelineRetrieveResponse as PipelineRetrieveResponse,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineDeleteParams as PipelineDeleteParams,
    type PipelineRetrieveAuditParams as PipelineRetrieveAuditParams,
  };

  export {
    Stages as Stages,
    type CRMPipelinesCollectionResponsePublicAuditInfoNoPaging as CRMPipelinesCollectionResponsePublicAuditInfoNoPaging,
    type CRMPipelinesPipelineStage as CRMPipelinesPipelineStage,
    type CRMPipelinesPipelineStageInput as CRMPipelinesPipelineStageInput,
    type StageListResponse as StageListResponse,
    type StageCreateParams as StageCreateParams,
    type StageRetrieveParams as StageRetrieveParams,
    type StageUpdateParams as StageUpdateParams,
    type StageListParams as StageListParams,
    type StageDeleteParams as StageDeleteParams,
    type StageRetrieveAuditParams as StageRetrieveAuditParams,
  };
}
