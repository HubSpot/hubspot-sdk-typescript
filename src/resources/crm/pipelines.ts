// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Pipelines extends APIResource {
  /**
   * Create a pipeline
   */
  create(objectType: string, body: PipelineCreateParams, options?: RequestOptions): APIPromise<Pipeline> {
    return this._client.post(path`/crm/v3/pipelines/${objectType}`, { body, ...options });
  }

  /**
   * Update a pipeline stage
   */
  update(stageID: string, params: PipelineUpdateParams, options?: RequestOptions): APIPromise<PipelineStage> {
    const { objectType, pipelineId, ...body } = params;
    return this._client.patch(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve all pipelines
   */
  list(objectType: string, options?: RequestOptions): APIPromise<CollectionResponsePipelineNoPaging> {
    return this._client.get(path`/crm/v3/pipelines/${objectType}`, options);
  }

  /**
   * Delete a pipeline stage
   */
  delete(stageID: string, params: PipelineDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType, pipelineId } = params;
    return this._client.delete(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return an audit of all changes to the pipeline
   */
  getAudit(
    pipelineID: string,
    params: PipelineGetAuditParams,
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicAuditInfoNoPaging> {
    const { objectType } = params;
    return this._client.get(path`/crm/v3/pipelines/${objectType}/${pipelineID}/audit`, options);
  }

  /**
   * Return a pipeline stage by ID
   */
  read(stageID: string, params: PipelineReadParams, options?: RequestOptions): APIPromise<PipelineStage> {
    const { objectType, pipelineId } = params;
    return this._client.get(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, options);
  }

  /**
   * Replace a pipeline stage
   */
  replace(
    stageID: string,
    params: PipelineReplaceParams,
    options?: RequestOptions,
  ): APIPromise<PipelineStage> {
    const { objectType, pipelineId, ...body } = params;
    return this._client.put(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, {
      body,
      ...options,
    });
  }
}

export interface CollectionResponsePipelineNoPaging {
  results: Array<Pipeline>;
}

export interface CollectionResponsePipelineStageNoPaging {
  results: Array<PipelineStage>;
}

export interface CollectionResponsePublicAuditInfoNoPaging {
  results: Array<PublicAuditInfo>;
}

export interface Pipeline {
  id: string;

  archived: boolean;

  createdAt: string;

  displayOrder: number;

  label: string;

  stages: Array<PipelineStage>;

  updatedAt: string;

  archivedAt?: string;
}

export interface PipelineInput {
  displayOrder: number;

  label: string;

  stages: Array<PipelineStageInput>;
}

export interface PipelinePatchInput {
  archived?: boolean;

  displayOrder?: number;

  label?: string;
}

export interface PipelineStage {
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

export interface PipelineStageInput {
  displayOrder: number;

  label: string;

  metadata?: { [key: string]: string };
}

export interface PipelineStagePatchInput {
  archived?: boolean;

  displayOrder?: number;

  label?: string;

  metadata?: { [key: string]: string };
}

export interface PublicAuditInfo {
  action: string;

  identifier: string;

  portalId: number;

  fromUserId?: number;

  message?: string;

  rawObject?: unknown;

  timestamp?: string;
}

export interface PipelineCreateParams {
  displayOrder: number;

  label: string;

  stages: Array<PipelineStageInput>;
}

export interface PipelineUpdateParams {
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

export interface PipelineDeleteParams {
  objectType: string;

  pipelineId: string;
}

export interface PipelineGetAuditParams {
  objectType: string;
}

export interface PipelineReadParams {
  objectType: string;

  pipelineId: string;
}

export interface PipelineReplaceParams {
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

export declare namespace Pipelines {
  export {
    type CollectionResponsePipelineNoPaging as CollectionResponsePipelineNoPaging,
    type CollectionResponsePipelineStageNoPaging as CollectionResponsePipelineStageNoPaging,
    type CollectionResponsePublicAuditInfoNoPaging as CollectionResponsePublicAuditInfoNoPaging,
    type Pipeline as Pipeline,
    type PipelineInput as PipelineInput,
    type PipelinePatchInput as PipelinePatchInput,
    type PipelineStage as PipelineStage,
    type PipelineStageInput as PipelineStageInput,
    type PipelineStagePatchInput as PipelineStagePatchInput,
    type PublicAuditInfo as PublicAuditInfo,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineDeleteParams as PipelineDeleteParams,
    type PipelineGetAuditParams as PipelineGetAuditParams,
    type PipelineReadParams as PipelineReadParams,
    type PipelineReplaceParams as PipelineReplaceParams,
  };
}
