// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BasePipelines extends APIResource {
  static override readonly _key: readonly ['crm', 'pipelines'] = Object.freeze(['crm', 'pipelines'] as const);

  /**
   * Create a new pipeline with the provided property values. The entire pipeline
   * object, including its unique ID, will be returned in the response.
   */
  create(objectType: string, body: PipelineCreateParams, options?: RequestOptions): APIPromise<Pipeline> {
    return this._client.post(path`/crm/pipelines/2026-03/${objectType}`, { body, ...options });
  }

  /**
   * Perform a partial update of the pipeline identified by `{pipelineId}`. The
   * updated pipeline will be returned in the response.
   */
  update(pipelineID: string, params: PipelineUpdateParams, options?: RequestOptions): APIPromise<Pipeline> {
    const { objectType, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, ...body } =
      params;
    return this._client.patch(path`/crm/pipelines/2026-03/${objectType}/${pipelineID}`, {
      query: { validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete },
      body,
      ...options,
    });
  }

  /**
   * Return all pipelines for the object type specified by `{objectType}`.
   */
  list(objectType: string, options?: RequestOptions): APIPromise<CollectionResponsePipelineNoPaging> {
    return this._client.get(path`/crm/pipelines/2026-03/${objectType}`, options);
  }

  /**
   * Delete a pipeline
   */
  delete(pipelineID: string, params: PipelineDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete } = params;
    return this._client.delete(path`/crm/pipelines/2026-03/${objectType}/${pipelineID}`, {
      query: { validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a pipeline stage
   */
  createStage(
    pipelineID: string,
    params: PipelineCreateStageParams,
    options?: RequestOptions,
  ): APIPromise<PipelineStage> {
    const { objectType, ...body } = params;
    return this._client.post(path`/crm/pipelines/2026-03/${objectType}/${pipelineID}/stages`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a pipeline stage
   */
  deleteStage(
    stageID: string,
    params: PipelineDeleteStageParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { objectType, pipelineId } = params;
    return this._client.delete(path`/crm/pipelines/2026-03/${objectType}/${pipelineId}/stages/${stageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a single pipeline object identified by its unique `{pipelineId}`.
   */
  get(pipelineID: string, params: PipelineGetParams, options?: RequestOptions): APIPromise<Pipeline> {
    const { objectType } = params;
    return this._client.get(path`/crm/pipelines/2026-03/${objectType}/${pipelineID}`, options);
  }

  /**
   * Return a pipeline stage by ID
   */
  getStage(
    stageID: string,
    params: PipelineGetStageParams,
    options?: RequestOptions,
  ): APIPromise<PipelineStage> {
    const { objectType, pipelineId } = params;
    return this._client.get(
      path`/crm/pipelines/2026-03/${objectType}/${pipelineId}/stages/${stageID}`,
      options,
    );
  }

  /**
   * Return a reverse chronological list of all mutations that have occurred on the
   * pipeline identified by `{pipelineId}`.
   */
  listAudit(
    pipelineID: string,
    params: PipelineListAuditParams,
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicAuditInfoNoPaging> {
    const { objectType } = params;
    return this._client.get(path`/crm/pipelines/2026-03/${objectType}/${pipelineID}/audit`, options);
  }

  /**
   * Return a reverse chronological list of all mutations that have occurred on the
   * pipeline stage identified by `{stageId}`.
   */
  listStageAudit(
    stageID: string,
    params: PipelineListStageAuditParams,
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicAuditInfoNoPaging> {
    const { objectType, pipelineId } = params;
    return this._client.get(
      path`/crm/pipelines/2026-03/${objectType}/${pipelineId}/stages/${stageID}/audit`,
      options,
    );
  }

  /**
   * Return all the stages associated with the pipeline identified by `{pipelineId}`.
   */
  listStages(
    pipelineID: string,
    params: PipelineListStagesParams,
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePipelineStageNoPaging> {
    const { objectType } = params;
    return this._client.get(path`/crm/pipelines/2026-03/${objectType}/${pipelineID}/stages`, options);
  }

  /**
   * Replace a pipeline
   */
  updateAllProperties(
    pipelineID: string,
    params: PipelineUpdateAllPropertiesParams,
    options?: RequestOptions,
  ): APIPromise<Pipeline> {
    const { objectType, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, ...body } =
      params;
    return this._client.put(path`/crm/pipelines/2026-03/${objectType}/${pipelineID}`, {
      query: { validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete },
      body,
      ...options,
    });
  }

  updateStage(
    stageID: string,
    params: PipelineUpdateStageParams,
    options?: RequestOptions,
  ): APIPromise<PipelineStage> {
    const { objectType, pipelineId, ...body } = params;
    return this._client.patch(path`/crm/pipelines/2026-03/${objectType}/${pipelineId}/stages/${stageID}`, {
      body,
      ...options,
    });
  }

  /**
   * Replace all the properties of an existing pipeline stage with the values
   * provided. The updated stage will be returned in the response.
   */
  updateStageAllProperties(
    stageID: string,
    params: PipelineUpdateStageAllPropertiesParams,
    options?: RequestOptions,
  ): APIPromise<PipelineStage> {
    const { objectType, pipelineId, ...body } = params;
    return this._client.put(path`/crm/pipelines/2026-03/${objectType}/${pipelineId}/stages/${stageID}`, {
      body,
      ...options,
    });
  }
}
export class Pipelines extends BasePipelines {}

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

  pipelineId?: string;
}

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

export interface PipelineReplaceInput {
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
   * The stages associated with the pipeline. They can be retrieved and updated via
   * the pipeline stages endpoints.
   */
  stages: Array<PipelineStageInput>;
}

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
  metadata: { [key: string]: string };

  /**
   * The date the pipeline stage was last updated.
   */
  updatedAt: string;

  /**
   * Defines the level of write access for the pipeline stage, with possible values
   * being CRM_PERMISSIONS_ENFORCEMENT, READ_ONLY, or INTERNAL_ONLY.
   */
  writePermissions: 'CRM_PERMISSIONS_ENFORCEMENT' | 'INTERNAL_ONLY' | 'READ_ONLY';

  /**
   * The date the pipeline was archived. `archivedAt` will only be present if the
   * pipeline is archived.
   */
  archivedAt?: string;
}

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
  metadata: { [key: string]: string };

  stageId?: string;
}

export interface PipelineStagePatchInput {
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
  metadata: { [key: string]: string };

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
}

export interface PipelineStageReplaceInput {
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
  metadata: { [key: string]: string };
}

export interface PublicAuditInfo {
  /**
   * The action performed that triggered the audit event.
   */
  action: string;

  /**
   * A unique string identifier for the audit event.
   */
  identifier: string;

  /**
   * The unique identifier for the HubSpot portal where the audit event occurred.
   */
  portalId: number;

  /**
   * The ID of the user who initiated the audit event.
   */
  fromUserId?: number;

  /**
   * A descriptive message related to the audit event.
   */
  message?: string;

  /**
   * An object containing the raw data associated with the audit event.
   */
  rawObject?: unknown;

  /**
   * The date and time when the audit event took place.
   */
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

  pipelineId?: string;
}

export interface PipelineUpdateParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Query param
   */
  validateDealStageUsagesBeforeDelete?: boolean;

  /**
   * Query param
   */
  validateReferencesBeforeDelete?: boolean;

  /**
   * Body param: Whether the pipeline is archived. This property should only be
   * provided when restoring an archived pipeline. If it's provided in any other
   * call, the request will fail and a `400 Bad Request` will be returned.
   */
  archived?: boolean;

  /**
   * Body param: The order for displaying this pipeline. If two pipelines have a
   * matching `displayOrder`, they will be sorted alphabetically by label.
   */
  displayOrder?: number;

  /**
   * Body param: A unique label used to organize pipelines in HubSpot's UI
   */
  label?: string;
}

export interface PipelineDeleteParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Query param
   */
  validateDealStageUsagesBeforeDelete?: boolean;

  /**
   * Query param
   */
  validateReferencesBeforeDelete?: boolean;
}

export interface PipelineCreateStageParams {
  /**
   * Path param
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

  /**
   * Body param
   */
  stageId?: string;
}

export interface PipelineDeleteStageParams {
  objectType: string;

  pipelineId: string;
}

export interface PipelineGetParams {
  objectType: string;
}

export interface PipelineGetStageParams {
  objectType: string;

  pipelineId: string;
}

export interface PipelineListAuditParams {
  objectType: string;
}

export interface PipelineListStageAuditParams {
  objectType: string;

  pipelineId: string;
}

export interface PipelineListStagesParams {
  objectType: string;
}

export interface PipelineUpdateAllPropertiesParams {
  /**
   * Path param
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
   * Body param: The stages associated with the pipeline. They can be retrieved and
   * updated via the pipeline stages endpoints.
   */
  stages: Array<PipelineStageInput>;

  /**
   * Query param
   */
  validateDealStageUsagesBeforeDelete?: boolean;

  /**
   * Query param
   */
  validateReferencesBeforeDelete?: boolean;
}

export interface PipelineUpdateStageParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Path param
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

export interface PipelineUpdateStageAllPropertiesParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Path param
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

export declare namespace Pipelines {
  export {
    type CollectionResponsePipelineNoPaging as CollectionResponsePipelineNoPaging,
    type CollectionResponsePipelineStageNoPaging as CollectionResponsePipelineStageNoPaging,
    type CollectionResponsePublicAuditInfoNoPaging as CollectionResponsePublicAuditInfoNoPaging,
    type Pipeline as Pipeline,
    type PipelineInput as PipelineInput,
    type PipelinePatchInput as PipelinePatchInput,
    type PipelineReplaceInput as PipelineReplaceInput,
    type PipelineStage as PipelineStage,
    type PipelineStageInput as PipelineStageInput,
    type PipelineStagePatchInput as PipelineStagePatchInput,
    type PipelineStageReplaceInput as PipelineStageReplaceInput,
    type PublicAuditInfo as PublicAuditInfo,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineDeleteParams as PipelineDeleteParams,
    type PipelineCreateStageParams as PipelineCreateStageParams,
    type PipelineDeleteStageParams as PipelineDeleteStageParams,
    type PipelineGetParams as PipelineGetParams,
    type PipelineGetStageParams as PipelineGetStageParams,
    type PipelineListAuditParams as PipelineListAuditParams,
    type PipelineListStageAuditParams as PipelineListStageAuditParams,
    type PipelineListStagesParams as PipelineListStagesParams,
    type PipelineUpdateAllPropertiesParams as PipelineUpdateAllPropertiesParams,
    type PipelineUpdateStageParams as PipelineUpdateStageParams,
    type PipelineUpdateStageAllPropertiesParams as PipelineUpdateStageAllPropertiesParams,
  };
}
