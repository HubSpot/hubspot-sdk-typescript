// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { PublicActionRevisionsPage } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Revisions extends APIResource {
  /**
   * Retrieve the versions of a definition by ID.
   */
  list(
    definitionID: string,
    params: RevisionListParams,
    options?: RequestOptions,
  ): PagePromise<PublicActionRevisionsPage, ActionsAPI.PublicActionRevision> {
    const { appId, ...query } = params;
    return this._client.getAPIList(
      path`/automation/v4/actions/${appId}/${definitionID}/revisions`,
      Page<ActionsAPI.PublicActionRevision>,
      { query, ...options },
    );
  }

  /**
   * Retrieve a specific revision of a definition by revision ID.
   */
  get(
    revisionID: string,
    params: RevisionGetParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionRevision> {
    const { appId, definitionId } = params;
    return this._client.get(
      path`/automation/v4/actions/${appId}/${definitionId}/revisions/${revisionID}`,
      options,
    );
  }
}

export interface RevisionListParams extends PageParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;
}

export interface RevisionGetParams {
  /**
   * The ID of the app.
   */
  appId: number;

  /**
   * The ID of the definition.
   */
  definitionId: string;
}

export declare namespace Revisions {
  export { type RevisionListParams as RevisionListParams, type RevisionGetParams as RevisionGetParams };
}

export { type PublicActionRevisionsPage };
