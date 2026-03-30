// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Functions extends APIResource {
  /**
   * Retrieve all functions included in a definition.
   */
  list(
    definitionID: string,
    params: FunctionListParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.CollectionResponsePublicActionFunctionIdentifierNoPaging> {
    const { appId } = params;
    return this._client.get(path`/automation/actions/2026-03/${appId}/${definitionID}/functions`, options);
  }

  /**
   * Archive a function for a specific definition.
   */
  delete(functionID: string, params: FunctionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId, definitionId, functionType } = params;
    return this._client.delete(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Update a function for a given definition by ID.
   */
  createOrReplace(
    functionID: string,
    params: FunctionCreateOrReplaceParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionFunctionIdentifier> {
    const { appId, definitionId, functionType, body } = params;
    return this._client.put(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      { body: body, ...options, headers: buildHeaders([{ 'Content-Type': 'text/plain' }, options?.headers]) },
    );
  }

  /**
   * Add a function for a given definition.
   */
  createOrReplaceByFunctionType(
    functionType:
      | 'POST_ACTION_EXECUTION'
      | 'POST_FETCH_OPTIONS'
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS',
    params: FunctionCreateOrReplaceByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionFunctionIdentifier> {
    const { appId, definitionId, body } = params;
    return this._client.put(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}`,
      { body: body, ...options, headers: buildHeaders([{ 'Content-Type': 'text/plain' }, options?.headers]) },
    );
  }

  /**
   * Delete a function within a given definition.
   */
  deleteByFunctionType(
    functionType:
      | 'POST_ACTION_EXECUTION'
      | 'POST_FETCH_OPTIONS'
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS',
    params: FunctionDeleteByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, definitionId } = params;
    return this._client.delete(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Retrieve a specific function from a given definition.
   */
  get(
    functionID: string,
    params: FunctionGetParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionFunction> {
    const { appId, definitionId, functionType } = params;
    return this._client.get(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      options,
    );
  }

  /**
   * Retrieve functions of a specific type for a given definition.
   */
  getByFunctionType(
    functionType:
      | 'POST_ACTION_EXECUTION'
      | 'POST_FETCH_OPTIONS'
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS',
    params: FunctionGetByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionFunction> {
    const { appId, definitionId } = params;
    return this._client.get(
      path`/automation/actions/2026-03/${appId}/${definitionId}/functions/${functionType}`,
      options,
    );
  }
}

export interface FunctionListParams {
  appId: number;
}

export interface FunctionDeleteParams {
  appId: number;

  definitionId: string;

  functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS';
}

export interface FunctionCreateOrReplaceParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Path param
   */
  definitionId: string;

  /**
   * Path param
   */
  functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS';

  /**
   * Body param
   */
  body: string;
}

export interface FunctionCreateOrReplaceByFunctionTypeParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Path param
   */
  definitionId: string;

  /**
   * Body param
   */
  body: string;
}

export interface FunctionDeleteByFunctionTypeParams {
  appId: number;

  definitionId: string;
}

export interface FunctionGetParams {
  appId: number;

  definitionId: string;

  functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS';
}

export interface FunctionGetByFunctionTypeParams {
  appId: number;

  definitionId: string;
}

export declare namespace Functions {
  export {
    type FunctionListParams as FunctionListParams,
    type FunctionDeleteParams as FunctionDeleteParams,
    type FunctionCreateOrReplaceParams as FunctionCreateOrReplaceParams,
    type FunctionCreateOrReplaceByFunctionTypeParams as FunctionCreateOrReplaceByFunctionTypeParams,
    type FunctionDeleteByFunctionTypeParams as FunctionDeleteByFunctionTypeParams,
    type FunctionGetParams as FunctionGetParams,
    type FunctionGetByFunctionTypeParams as FunctionGetByFunctionTypeParams,
  };
}
