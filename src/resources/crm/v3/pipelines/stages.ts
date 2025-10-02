// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Stages extends APIResource {
  /**
   * Create a pipeline stage
   */
  create(
    pipelineID: string,
    params: StageCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMPipelinesPipelineStage> {
    const { objectType, ...body } = params;
    return this._client.post(path`/crm/v3/pipelines/${objectType}/${pipelineID}/stages`, {
      body,
      ...options,
    });
  }

  /**
   * Return a pipeline stage by ID
   */
  retrieve(
    stageID: string,
    params: StageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CRMPipelinesPipelineStage> {
    const { objectType, pipelineId } = params;
    return this._client.get(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, options);
  }

  /**
   * Update a pipeline stage
   */
  update(
    stageID: string,
    params: StageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMPipelinesPipelineStage> {
    const { objectType, pipelineId, ...body } = params;
    return this._client.patch(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, {
      body,
      ...options,
    });
  }

  /**
   * Return all stages of a pipeline
   */
  list(pipelineID: string, params: StageListParams, options?: RequestOptions): APIPromise<StageListResponse> {
    const { objectType } = params;
    return this._client.get(path`/crm/v3/pipelines/${objectType}/${pipelineID}/stages`, options);
  }

  /**
   * Delete a pipeline stage
   */
  delete(stageID: string, params: StageDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType, pipelineId } = params;
    return this._client.delete(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return an audit of all changes to the pipeline stage
   */
  retrieveAudit(
    stageID: string,
    params: StageRetrieveAuditParams,
    options?: RequestOptions,
  ): APIPromise<CRMPipelinesCollectionResponsePublicAuditInfoNoPaging> {
    const { objectType, pipelineId } = params;
    return this._client.get(
      path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}/audit`,
      options,
    );
  }
}

export interface CRMPipelinesCollectionResponsePublicAuditInfoNoPaging {
  results: Array<CRMPipelinesCollectionResponsePublicAuditInfoNoPaging.Result>;
}

export namespace CRMPipelinesCollectionResponsePublicAuditInfoNoPaging {
  export interface Result {
    action: string;

    identifier: string;

    portalId: number;

    fromUserId?: number;

    message?: string;

    rawObject?: unknown;

    timestamp?: string;
  }
}

export interface CRMPipelinesPipelineStage {
  id: string;

  archived: boolean;

  createdAt: string;

  displayOrder: number;

  label: string;

  updatedAt: string;

  archivedAt?: string;

  metadata?: { [key: string]: string };

  writePermissions?: 'CRM_PERMISSIONS_ENFORCEMENT' | 'READ_ONLY' | 'INTERNAL_ONLY';
}

export interface CRMPipelinesPipelineStageInput {
  displayOrder: number;

  label: string;

  metadata?: { [key: string]: string };
}

export interface StageListResponse {
  results: Array<CRMPipelinesPipelineStage>;
}

export interface StageCreateParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Body param:
   */
  displayOrder: number;

  /**
   * Body param:
   */
  label: string;

  /**
   * Body param:
   */
  metadata?: { [key: string]: string };
}

export interface StageRetrieveParams {
  objectType: string;

  pipelineId: string;
}

export interface StageUpdateParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Path param:
   */
  pipelineId: string;

  /**
   * Body param:
   */
  archived?: boolean;

  /**
   * Body param:
   */
  displayOrder?: number;

  /**
   * Body param:
   */
  label?: string;

  /**
   * Body param:
   */
  metadata?: { [key: string]: string };
}

export interface StageListParams {
  objectType: string;
}

export interface StageDeleteParams {
  objectType: string;

  pipelineId: string;
}

export interface StageRetrieveAuditParams {
  objectType: string;

  pipelineId: string;
}

export declare namespace Stages {
  export {
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
