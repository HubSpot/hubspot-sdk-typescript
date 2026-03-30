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
    return this._client.post(path`/automation/actions/2026-03/${appID}`, { body, ...options });
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
    return this._client.patch(path`/automation/actions/2026-03/${appId}/${definitionID}`, {
      body,
      ...options,
    });
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
      path`/automation/actions/2026-03/${appID}`,
      Page<ActionsAPI.PublicActionDefinition>,
      { query, ...options },
    );
  }

  /**
   * Delete an action definition by ID.
   */
  delete(definitionID: string, params: DefinitionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/automation/actions/2026-03/${appId}/${definitionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set whether a custom action definition requires an object.
   */
  createRequiresObject(
    definitionID: string,
    params: DefinitionCreateRequiresObjectParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, ...body } = params;
    return this._client.post(path`/automation/actions/2026-03/${appId}/${definitionID}/requires-object`, {
      body,
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
    return this._client.get(path`/automation/actions/2026-03/${appId}/${definitionID}`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve whether a custom action definition requires an object.
   */
  getRequiresObject(
    definitionID: string,
    params: DefinitionGetRequiresObjectParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionDefinitionRequiresObjectResponse> {
    const { appId } = params;
    return this._client.get(
      path`/automation/actions/2026-03/${appId}/${definitionID}/requires-object`,
      options,
    );
  }
}

export interface DefinitionCreateParams {
  /**
   * The URL endpoint where the action is executed.
   */
  actionUrl: string;

  functions: Array<ActionsAPI.PublicActionFunction>;

  inputFields: Array<ActionsAPI.PublicInputFieldDefinition>;

  /**
   * Holds various labels associated with the action, including names and
   * descriptions.
   */
  labels: { [key: string]: ActionsAPI.PublicActionLabels };

  objectTypes: Array<string>;

  /**
   * Indicates whether the action is published and available for use.
   */
  published: boolean;

  /**
   * The timestamp indicating when the action was archived.
   */
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
   * Path param
   */
  appId: number;

  /**
   * Body param: The URL endpoint where the action is executed.
   */
  actionUrl?: string;

  /**
   * Body param
   */
  executionRules?: Array<ActionsAPI.PublicExecutionTranslationRule>;

  /**
   * Body param
   */
  inputFieldDependencies?: Array<
    ActionsAPI.PublicSingleFieldDependency | ActionsAPI.PublicConditionalSingleFieldDependency
  >;

  /**
   * Body param
   */
  inputFields?: Array<ActionsAPI.PublicInputFieldDefinition>;

  /**
   * Body param: Contains labels for the action, including names and descriptions.
   */
  labels?: { [key: string]: ActionsAPI.PublicActionLabels };

  /**
   * Body param
   */
  objectRequestOptions?: ActionsAPI.PublicObjectRequestOptions;

  /**
   * Body param
   */
  objectTypes?: Array<string>;

  /**
   * Body param
   */
  outputFields?: Array<ActionsAPI.OutputFieldDefinition>;

  /**
   * Body param: Indicates whether the action is published and available for use.
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
  appId: number;
}

export interface DefinitionCreateRequiresObjectParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param: Indicates whether a custom action definition requires an associated
   * object.
   */
  requiresObject: boolean;
}

export interface DefinitionGetParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface DefinitionGetRequiresObjectParams {
  appId: number;
}

export declare namespace Definitions {
  export {
    type DefinitionCreateParams as DefinitionCreateParams,
    type DefinitionUpdateParams as DefinitionUpdateParams,
    type DefinitionListParams as DefinitionListParams,
    type DefinitionDeleteParams as DefinitionDeleteParams,
    type DefinitionCreateRequiresObjectParams as DefinitionCreateRequiresObjectParams,
    type DefinitionGetParams as DefinitionGetParams,
    type DefinitionGetRequiresObjectParams as DefinitionGetRequiresObjectParams,
  };
}

export { type PublicActionDefinitionsPage };
