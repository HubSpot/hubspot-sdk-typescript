// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Pipelines extends APIResource {
  /**
   * Create a new pipeline with the provided property values. The entire pipeline
   * object, including its unique ID, will be returned in the response.
   *
   * @example
   * ```ts
   * const pipeline = await client.crm.pipelines.create(
   *   'objectType',
   *   {
   *     displayOrder: 0,
   *     label: 'My replaced pipeline',
   *     stages: [
   *       { displayOrder: 0, label: 'In Progress' },
   *       { displayOrder: 1, label: 'Done' },
   *     ],
   *   },
   * );
   * ```
   */
  create(objectType: string, body: PipelineCreateParams, options?: RequestOptions): APIPromise<Pipeline> {
    return this._client.post(path`/crm/v3/pipelines/${objectType}`, { body, ...options });
  }

  /**
   * Perform a partial update of the pipeline stage identified by `{stageId}`
   * associated with the pipeline identified by `{pipelineId}`. Any properties not
   * included in this update will keep their existing values. The updated stage will
   * be returned in the response.
   *
   * @example
   * ```ts
   * const pipelineStage = await client.crm.pipelines.update(
   *   'stageId',
   *   { objectType: 'objectType', pipelineId: 'pipelineId' },
   * );
   * ```
   */
  update(stageID: string, params: PipelineUpdateParams, options?: RequestOptions): APIPromise<PipelineStage> {
    const { objectType, pipelineId, ...body } = params;
    return this._client.patch(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, {
      body,
      ...options,
    });
  }

  /**
   * Return all pipelines for the object type specified by `{objectType}`.
   *
   * @example
   * ```ts
   * const collectionResponsePipelineNoPaging =
   *   await client.crm.pipelines.list('objectType');
   * ```
   */
  list(objectType: string, options?: RequestOptions): APIPromise<CollectionResponsePipelineNoPaging> {
    return this._client.get(path`/crm/v3/pipelines/${objectType}`, options);
  }

  /**
   * Delete the pipeline stage identified by `{stageId}` associated with the pipeline
   * identified by `{pipelineId}`.
   *
   * @example
   * ```ts
   * await client.crm.pipelines.delete('stageId', {
   *   objectType: 'objectType',
   *   pipelineId: 'pipelineId',
   * });
   * ```
   */
  delete(stageID: string, params: PipelineDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType, pipelineId } = params;
    return this._client.delete(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a reverse chronological list of all mutations that have occurred on the
   * pipeline identified by `{pipelineId}`.
   *
   * @example
   * ```ts
   * const collectionResponsePublicAuditInfoNoPaging =
   *   await client.crm.pipelines.getAudit('pipelineId', {
   *     objectType: 'objectType',
   *   });
   * ```
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
   * Return the stage identified by `{stageId}` associated with the pipeline
   * identified by `{pipelineId}`.
   *
   * @example
   * ```ts
   * const pipelineStage = await client.crm.pipelines.read(
   *   'stageId',
   *   { objectType: 'objectType', pipelineId: 'pipelineId' },
   * );
   * ```
   */
  read(stageID: string, params: PipelineReadParams, options?: RequestOptions): APIPromise<PipelineStage> {
    const { objectType, pipelineId } = params;
    return this._client.get(path`/crm/v3/pipelines/${objectType}/${pipelineId}/stages/${stageID}`, options);
  }

  /**
   * Replace all the properties of an existing pipeline stage with the values
   * provided. The updated stage will be returned in the response.
   *
   * @example
   * ```ts
   * const pipelineStage = await client.crm.pipelines.replace(
   *   'stageId',
   *   {
   *     objectType: 'objectType',
   *     pipelineId: 'pipelineId',
   *     displayOrder: 1,
   *     label: 'Done',
   *   },
   * );
   * ```
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

/**
 * A pipeline definition.
 */
export interface Pipeline {
  /**
   * A unique identifier generated by HubSpot that can be used to retrieve and update
   * the pipeline.
   */
  id: string;

  /**
   * Whether the pipeline is archived.
   */
  archived: boolean;

  /**
   * The date the pipeline was created. The default pipelines will have createdAt
   * = 0.
   */
  createdAt: string;

  /**
   * The order for displaying this pipeline. If two pipelines have a matching
   * `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder: number;

  /**
   * A unique label used to organize pipelines in HubSpot's UI
   */
  label: string;

  /**
   * The stages associated with the pipeline. They can be retrieved and updated via
   * the pipeline stages endpoints.
   */
  stages: Array<PipelineStage>;

  /**
   * The date the pipeline was last updated.
   */
  updatedAt: string;

  /**
   * The date the pipeline was archived. `archivedAt` will only be present if the
   * pipeline is archived.
   */
  archivedAt?: string;
}

/**
 * An input used to create or replace a pipeline's definition.
 */
export interface PipelineInput {
  /**
   * The order for displaying this pipeline. If two pipelines have a matching
   * `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder: number;

  /**
   * A unique label used to organize pipelines in HubSpot's UI
   */
  label: string;

  /**
   * Pipeline stage inputs used to create the new or replacement pipeline.
   */
  stages: Array<PipelineStageInput>;
}

/**
 * An input used to update some properties on a pipeline definition.
 */
export interface PipelinePatchInput {
  /**
   * Whether the pipeline is archived. This property should only be provided when
   * restoring an archived pipeline. If it's provided in any other call, the request
   * will fail and a `400 Bad Request` will be returned.
   */
  archived?: boolean;

  /**
   * The order for displaying this pipeline. If two pipelines have a matching
   * `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder?: number;

  /**
   * A unique label used to organize pipelines in HubSpot's UI
   */
  label?: string;
}

/**
 * A pipeline stage definition.
 */
export interface PipelineStage {
  /**
   * A unique identifier generated by HubSpot that can be used to retrieve and update
   * the pipeline stage.
   */
  id: string;

  /**
   * Whether the pipeline is archived.
   */
  archived: boolean;

  /**
   * The date the pipeline stage was created. The stages on default pipelines will
   * have createdAt = 0.
   */
  createdAt: string;

  /**
   * The order for displaying this pipeline stage. If two pipeline stages have a
   * matching `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder: number;

  /**
   * A label used to organize pipeline stages in HubSpot's UI. Each pipeline stage's
   * label must be unique within that pipeline.
   */
  label: string;

  /**
   * The date the pipeline stage was last updated.
   */
  updatedAt: string;

  /**
   * The date the pipeline was archived. `archivedAt` will only be present if the
   * pipeline is archived.
   */
  archivedAt?: string;

  /**
   * A JSON object containing properties that are not present on all object
   * pipelines.
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
  metadata?: { [key: string]: string };

  writePermissions?: 'CRM_PERMISSIONS_ENFORCEMENT' | 'READ_ONLY' | 'INTERNAL_ONLY';
}

/**
 * An input used to create or replace a pipeline stage's definition.
 */
export interface PipelineStageInput {
  /**
   * The order for displaying this pipeline stage. If two pipeline stages have a
   * matching `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder: number;

  /**
   * A label used to organize pipeline stages in HubSpot's UI. Each pipeline stage's
   * label must be unique within that pipeline.
   */
  label: string;

  /**
   * A JSON object containing properties that are not present on all object
   * pipelines.
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
  metadata?: { [key: string]: string };
}

/**
 * An input used to update some properties on a pipeline definition.
 */
export interface PipelineStagePatchInput {
  /**
   * Whether the pipeline is archived.
   */
  archived?: boolean;

  /**
   * The order for displaying this pipeline stage. If two pipeline stages have a
   * matching `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder?: number;

  /**
   * A label used to organize pipeline stages in HubSpot's UI. Each pipeline stage's
   * label must be unique within that pipeline.
   */
  label?: string;

  /**
   * A JSON object containing properties that are not present on all object
   * pipelines.
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
  /**
   * The order for displaying this pipeline. If two pipelines have a matching
   * `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder: number;

  /**
   * A unique label used to organize pipelines in HubSpot's UI
   */
  label: string;

  /**
   * Pipeline stage inputs used to create the new or replacement pipeline.
   */
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
