// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Retrieve migrated workflow mappings
   */
  read(body: BatchReadParams, options?: RequestOptions): APIPromise<BatchReadResponse> {
    return this._client.post('/automation/v4/workflow-id-mappings/batch/read', { body, ...options });
  }
}

export interface BatchReadResponse {
  completedAt: string;

  results: Array<BatchReadResponse.Result>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export namespace BatchReadResponse {
  export interface Result {
    flowId: number;

    workflowId: number;
  }
}

export interface BatchReadParams {
  inputs: Array<
    | BatchReadParams.AutomationAPIFlowBatchFetchMigrationFlowIDCoordinate
    | BatchReadParams.AutomationAPIFlowBatchFetchMigrationWorkflowIDCoordinate
  >;
}

export namespace BatchReadParams {
  export interface AutomationAPIFlowBatchFetchMigrationFlowIDCoordinate {
    flowMigrationStatuses: string;

    type: 'FLOW_ID';
  }

  export interface AutomationAPIFlowBatchFetchMigrationWorkflowIDCoordinate {
    flowMigrationStatusForClassicWorkflows: string;

    type: 'WORKFLOW_ID';
  }
}

export declare namespace Batch {
  export { type BatchReadResponse as BatchReadResponse, type BatchReadParams as BatchReadParams };
}
