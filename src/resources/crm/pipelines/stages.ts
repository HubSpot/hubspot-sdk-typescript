// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PipelinesAPI from './pipelines';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Stages extends APIResource {
  /**
   * Create a new stage within the specified pipeline.
   *
   * @example
   * ```ts
   * const pipelineStage =
   *   await client.crm.pipelines.stages.create('pipelineId', {
   *     objectType: 'objectType',
   *     displayOrder: 1,
   *     label: 'Done',
   *     metadata: { ticketState: 'CLOSED' },
   *   });
   * ```
   */
  create(
    pipelineID: string,
    params: StageCreateParams,
    options?: RequestOptions,
  ): APIPromise<PipelinesAPI.PipelineStage> {
    const { objectType, ...body } = params;
    return this._client.post(path`/crm/v3/pipelines/${objectType}/${pipelineID}/stages`, {
      body,
      ...options,
    });
  }

  /**
   * Perform a partial update on a specific stage of a pipeline.
   *
   * @example
   * ```ts
   * const pipelineStage =
   *   await client.crm.pipelines.stages.update('stageId', {
   *     objectType: 'objectType',
   *     pipelineId: 'pipelineId',
   *     metadata: { ticketState: 'CLOSED' },
   *   });
   * ```
   */
  update(
    stageID: string,
    params: StageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PipelinesAPI.PipelineStage> {
    const { objectType, pipelineId, ...body } = params;
    return this._client.patch(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, {
      body,
      ...options,
    });
  }

  /**
   * Return all the stages associated with the pipeline identified by `{pipelineId}`.
   *
   * @example
   * ```ts
   * const collectionResponsePipelineStageNoPaging =
   *   await client.crm.pipelines.stages.list('pipelineId', {
   *     objectType: 'objectType',
   *   });
   * ```
   */
  list(
    pipelineID: string,
    params: StageListParams,
    options?: RequestOptions,
  ): APIPromise<PipelinesAPI.CollectionResponsePipelineStageNoPaging> {
    const { objectType } = params;
    return this._client.get(path`/crm/v3/pipelines/${objectType}/${pipelineID}/stages`, options);
  }

  /**
   * Delete a specific stage from a pipeline.
   *
   * @example
   * ```ts
   * await client.crm.pipelines.stages.delete('stageId', {
   *   objectType: 'objectType',
   *   pipelineId: 'pipelineId',
   * });
   * ```
   */
  delete(stageID: string, params: StageDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType, pipelineId } = params;
    return this._client.delete(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific stage from a pipeline using its ID.
   *
   * @example
   * ```ts
   * const pipelineStage = await client.crm.pipelines.stages.get(
   *   'stageId',
   *   { objectType: 'objectType', pipelineId: 'pipelineId' },
   * );
   * ```
   */
  get(
    stageID: string,
    params: StageGetParams,
    options?: RequestOptions,
  ): APIPromise<PipelinesAPI.PipelineStage> {
    const { objectType, pipelineId } = params;
    return this._client.get(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, options);
  }

  /**
   * Return a reverse chronological list of all mutations that have occurred on the
   * pipeline stage identified by `{stageId}`.
   *
   * @example
   * ```ts
   * const collectionResponsePublicAuditInfoNoPaging =
   *   await client.crm.pipelines.stages.getAudit('stageId', {
   *     objectType: 'objectType',
   *     pipelineId: 'pipelineId',
   *   });
   * ```
   */
  getAudit(
    stageID: string,
    params: StageGetAuditParams,
    options?: RequestOptions,
  ): APIPromise<PipelinesAPI.CollectionResponsePublicAuditInfoNoPaging> {
    const { objectType, pipelineId } = params;
    return this._client.get(
      path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}/audit`,
      options,
    );
  }

  /**
   * Replace all the properties of an existing pipeline stage with the values
   * provided. The updated stage will be returned in the response.
   *
   * @example
   * ```ts
   * const pipelineStage =
   *   await client.crm.pipelines.stages.replace('stageId', {
   *     objectType: 'objectType',
   *     pipelineId: 'pipelineId',
   *     displayOrder: 1,
   *     label: 'Done',
   *     metadata: { ticketState: 'CLOSED' },
   *   });
   * ```
   */
  replace(
    stageID: string,
    params: StageReplaceParams,
    options?: RequestOptions,
  ): APIPromise<PipelinesAPI.PipelineStage> {
    const { objectType, pipelineId, ...body } = params;
    return this._client.put(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, {
      body,
      ...options,
    });
  }
}

export interface StageCreateParams {
  /**
   * Path param: The object type of the stage being created (ex. deals or tickets)
   */
  objectType: string;

  /**
   * Body param: The order for displaying this pipeline stage. If two pipeline stages
   * have a matching `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder: number;

  /**
   * Body param: A label used to organize pipeline stages in HubSpot's UI. Each
   * pipeline stage's label must be unique within that pipeline.
   */
  label: string;

  /**
   * Body param: A JSON object containing properties that are not present on all
   * object pipelines.
   *
   * For `deals` pipelines, the `probability` field is required
   * (`{ "probability": 0.5 }`), and represents the likelihood a deal will close.
   * Possible values are between 0.0 and 1.0 in increments of 0.1.
   *
   * For `tickets` pipelines, the `ticketState` field is optional
   * (`{ "ticketState": "OPEN" }`), and represents whether the ticket remains open or
   * has been closed by a member of your Support team. Possible values are `OPEN` or
   * `CLOSED`.
   */
  metadata: { [key: string]: string };
}

export interface StageUpdateParams {
  /**
   * Path param: The object type of the stage being updated (ex. deals or tickets)
   */
  objectType: string;

  /**
   * Path param: The unique identifier of the pipeline containing the stage to be
   * updated.
   */
  pipelineId: string;

  /**
   * Body param: A JSON object containing properties that are not present on all
   * object pipelines.
   *
   * For `deals` pipelines, the `probability` field is required
   * (`{ "probability": 0.5 }`), and represents the likelihood a deal will close.
   * Possible values are between 0.0 and 1.0 in increments of 0.1.
   *
   * For `tickets` pipelines, the `ticketState` field is optional
   * (`{ "ticketState": "OPEN" }`), and represents whether the ticket remains open or
   * has been closed by a member of your Support team. Possible values are `OPEN` or
   * `CLOSED`.
   */
  metadata: { [key: string]: string };

  /**
   * Body param: Whether the pipeline is archived.
   */
  archived?: boolean;

  /**
   * Body param: The order for displaying this pipeline stage. If two pipeline stages
   * have a matching `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder?: number;

  /**
   * Body param: A label used to organize pipeline stages in HubSpot's UI. Each
   * pipeline stage's label must be unique within that pipeline.
   */
  label?: string;
}

export interface StageListParams {
  /**
   * The object type of the stages being retrieved (ex. deals or tickets)
   */
  objectType: string;
}

export interface StageDeleteParams {
  /**
   * The object type of the stage being deleted (ex. deals or tickets)
   */
  objectType: string;

  /**
   * The unique identifier of the pipeline from which the stage will be deleted.
   */
  pipelineId: string;
}

export interface StageGetParams {
  /**
   * The object type of the stage being retrieved (ex. deals or tickets)
   */
  objectType: string;

  /**
   * The unique identifier of the pipeline containing the stage to be retrieved.
   */
  pipelineId: string;
}

export interface StageGetAuditParams {
  /**
   * The object type of the stage audit being retrieved (ex. deals or tickets)
   */
  objectType: string;

  pipelineId: string;
}

export interface StageReplaceParams {
  /**
   * Path param: The object type of the pipeline being updated (ex. deals or tickets)
   */
  objectType: string;

  /**
   * Path param: The unique identifier of the pipeline to which the stage belongs.
   */
  pipelineId: string;

  /**
   * Body param: The order for displaying this pipeline stage. If two pipeline stages
   * have a matching `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder: number;

  /**
   * Body param: A label used to organize pipeline stages in HubSpot's UI. Each
   * pipeline stage's label must be unique within that pipeline.
   */
  label: string;

  /**
   * Body param: A JSON object containing properties that are not present on all
   * object pipelines.
   *
   * For `deals` pipelines, the `probability` field is required
   * (`{ "probability": 0.5 }`), and represents the likelihood a deal will close.
   * Possible values are between 0.0 and 1.0 in increments of 0.1.
   *
   * For `tickets` pipelines, the `ticketState` field is optional
   * (`{ "ticketState": "OPEN" }`), and represents whether the ticket remains open or
   * has been closed by a member of your Support team. Possible values are `OPEN` or
   * `CLOSED`.
   */
  metadata: { [key: string]: string };
}

export declare namespace Stages {
  export {
    type StageCreateParams as StageCreateParams,
    type StageUpdateParams as StageUpdateParams,
    type StageListParams as StageListParams,
    type StageDeleteParams as StageDeleteParams,
    type StageGetParams as StageGetParams,
    type StageGetAuditParams as StageGetAuditParams,
    type StageReplaceParams as StageReplaceParams,
  };
}
