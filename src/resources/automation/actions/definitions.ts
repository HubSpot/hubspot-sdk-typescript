// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { PublicActionDefinitionsPage } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Definitions extends APIResource {
  /**
   * Create a new custom workflow action.
   */
  create(
    appID: number,
    body: DefinitionCreateParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionDefinition> {
    return this._client.post(path`/automation/v4/actions/${appID}`, { body, ...options });
  }

  /**
   * Update an existing action definition by ID.
   */
  update(
    definitionID: string,
    params: DefinitionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionDefinition> {
    const { appId, ...body } = params;
    return this._client.patch(path`/automation/v4/actions/${appId}/${definitionID}`, { body, ...options });
  }

  /**
   * Retrieve custom workflow action definitions by app ID.
   */
  list(
    appID: number,
    query: DefinitionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicActionDefinitionsPage, ActionsAPI.PublicActionDefinition> {
    return this._client.getAPIList(
      path`/automation/v4/actions/${appID}`,
      Page<ActionsAPI.PublicActionDefinition>,
      { query, ...options },
    );
  }

  /**
   * Delete an action definition by ID.
   */
  delete(definitionID: string, params: DefinitionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/automation/v4/actions/${appId}/${definitionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a custom workflow action definition by ID.
   */
  get(
    definitionID: string,
    params: DefinitionGetParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionDefinition> {
    const { appId, ...query } = params;
    return this._client.get(path`/automation/v4/actions/${appId}/${definitionID}`, { query, ...options });
  }
}

export interface DefinitionCreateParams {
  actionUrl: string;

  functions: Array<ActionsAPI.PublicActionFunction>;

  inputFields: Array<ActionsAPI.InputFieldDefinition>;

  labels: { [key: string]: ActionsAPI.PublicActionLabels };

  objectTypes: Array<string>;

  published: boolean;

  archivedAt?: number;

  executionRules?: Array<ActionsAPI.PublicExecutionTranslationRule>;

  inputFieldDependencies?: Array<
    ActionsAPI.PublicSingleFieldDependency | ActionsAPI.PublicConditionalSingleFieldDependency
  >;

  objectRequestOptions?: ActionsAPI.PublicObjectRequestOptions;

  outputFields?: Array<ActionsAPI.OutputFieldDefinition>;
}

export interface DefinitionUpdateParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Body param:
   */
  actionUrl?: string;

  /**
   * Body param:
   */
  executionRules?: Array<ActionsAPI.PublicExecutionTranslationRule>;

  /**
   * Body param:
   */
  inputFieldDependencies?: Array<
    ActionsAPI.PublicSingleFieldDependency | ActionsAPI.PublicConditionalSingleFieldDependency
  >;

  /**
   * Body param:
   */
  inputFields?: Array<ActionsAPI.InputFieldDefinition>;

  /**
   * Body param:
   */
  labels?: { [key: string]: ActionsAPI.PublicActionLabels };

  /**
   * Body param:
   */
  objectRequestOptions?: ActionsAPI.PublicObjectRequestOptions;

  /**
   * Body param:
   */
  objectTypes?: Array<string>;

  /**
   * Body param:
   */
  outputFields?: Array<ActionsAPI.OutputFieldDefinition>;

  /**
   * Body param:
   */
  published?: boolean;
}

export interface DefinitionListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface DefinitionDeleteParams {
  /**
   * The ID of the app.
   */
  appId: number;
}

export interface DefinitionGetParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export declare namespace Definitions {
  export {
    type DefinitionCreateParams as DefinitionCreateParams,
    type DefinitionUpdateParams as DefinitionUpdateParams,
    type DefinitionListParams as DefinitionListParams,
    type DefinitionDeleteParams as DefinitionDeleteParams,
    type DefinitionGetParams as DefinitionGetParams,
  };
}

export { type PublicActionDefinitionsPage };
