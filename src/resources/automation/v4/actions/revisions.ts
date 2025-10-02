// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ActivityAPI from '../../../account-info/v3/activity';
import * as ActionsAPI from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Revisions extends APIResource {
  /**
   * Retrieve a specific revision of a definition
   */
  retrieve(
    revisionID: string,
    params: RevisionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ActionRevision> {
    const { appId, definitionId } = params;
    return this._client.get(
      path`/automation/v4/actions/${appId}/${definitionId}/revisions/${revisionID}`,
      options,
    );
  }

  /**
   * Retrieve revisions for a given definition
   */
  list(
    definitionID: string,
    params: RevisionListParams,
    options?: RequestOptions,
  ): APIPromise<RevisionListResponse> {
    const { appId, ...query } = params;
    return this._client.get(path`/automation/v4/actions/${appId}/${definitionID}/revisions`, {
      query,
      ...options,
    });
  }
}

export interface ActionRevision {
  id: string;

  createdAt: string;

  definition: ActionsAPI.AutomationActionDefinition;

  revisionId: string;
}

export interface RevisionListResponse {
  results: Array<ActionRevision>;

  paging?: ActivityAPI.ForwardPaging;
}

export interface RevisionRetrieveParams {
  appId: number;

  definitionId: string;
}

export interface RevisionListParams {
  /**
   * Path param:
   */
  appId: number;

  /**
   * Query param:
   */
  after?: string;

  /**
   * Query param:
   */
  limit?: number;
}

export declare namespace Revisions {
  export {
    type ActionRevision as ActionRevision,
    type RevisionListResponse as RevisionListResponse,
    type RevisionRetrieveParams as RevisionRetrieveParams,
    type RevisionListParams as RevisionListParams,
  };
}
