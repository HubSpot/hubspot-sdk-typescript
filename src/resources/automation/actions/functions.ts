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
    return this._client.get(path`/automation/v4/actions/${appId}/${definitionID}/functions`, options);
  }

  /**
   * Archive a function for a definition
   */
  delete(functionID: string, params: FunctionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId, definitionId, functionType } = params;
    return this._client.delete(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Delete a function within a given definition.
   */
  archiveByFunctionType(
    functionType:
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS'
      | 'POST_FETCH_OPTIONS'
      | 'POST_ACTION_EXECUTION',
    params: FunctionArchiveByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, definitionId } = params;
    return this._client.delete(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}`,
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
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      { body: body, ...options, headers: buildHeaders([{ 'Content-Type': 'text/plain' }, options?.headers]) },
    );
  }

  /**
   * Add a function for a given definition.
   */
  createOrReplaceByFunctionType(
    functionType:
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS'
      | 'POST_FETCH_OPTIONS'
      | 'POST_ACTION_EXECUTION',
    params: FunctionCreateOrReplaceByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionFunctionIdentifier> {
    const { appId, definitionId, body } = params;
    return this._client.put(path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Retrieve functions by a type for a given definition
   */
  getByFunctionType(
    functionType:
      | 'PRE_ACTION_EXECUTION'
      | 'PRE_FETCH_OPTIONS'
      | 'POST_FETCH_OPTIONS'
      | 'POST_ACTION_EXECUTION',
    params: FunctionGetByFunctionTypeParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionFunction> {
    const { appId, definitionId } = params;
    return this._client.get(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}`,
      options,
    );
  }

  /**
   * Retrieve a specific function from a given definition.
   */
  read(
    functionID: string,
    params: FunctionReadParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.PublicActionFunction> {
    const { appId, definitionId, functionType } = params;
    return this._client.get(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      options,
    );
  }
}

export interface FunctionListParams {
  /**
   * The ID of the app.
   */
  appId: number;
}

export interface FunctionDeleteParams {
  appId: number;

  definitionId: string;

  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
}

export interface FunctionArchiveByFunctionTypeParams {
  /**
   * The ID of the app.
   */
  appId: number;

  /**
   * The ID of the definition.
   */
  definitionId: string;
}

export interface FunctionCreateOrReplaceParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Path param: The ID of the definition.
   */
  definitionId: string;

  /**
   * Path param: The type of function. Can be `PRE_ACTION_EXECUTION`,
   * `PRE_FETCH_OPTIONS`, `POST_FETCH_OPTIONS`, `POST_ACTION_EXECUTION`.
   */
  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';

  /**
   * Body param:
   */
  body: string;
}

export interface FunctionCreateOrReplaceByFunctionTypeParams {
  /**
   * Path param: The ID of the app.
   */
  appId: number;

  /**
   * Path param: The ID of the definition.
   */
  definitionId: string;

  /**
   * Body param:
   */
  body: string;
}

export interface FunctionGetByFunctionTypeParams {
  /**
   * The ID of the app.
   */
  appId: number;

  /**
   * The ID of the definition.
   */
  definitionId: string;
}

export interface FunctionReadParams {
  /**
   * The ID of the app.
   */
  appId: number;

  /**
   * The ID of the definition.
   */
  definitionId: string;

  /**
   * The type of function. Can be `PRE_ACTION_EXECUTION`, `PRE_FETCH_OPTIONS`,
   * `POST_FETCH_OPTIONS`, `POST_ACTION_EXECUTION`.
   */
  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
}

export declare namespace Functions {
  export {
    type FunctionListParams as FunctionListParams,
    type FunctionDeleteParams as FunctionDeleteParams,
    type FunctionArchiveByFunctionTypeParams as FunctionArchiveByFunctionTypeParams,
    type FunctionCreateOrReplaceParams as FunctionCreateOrReplaceParams,
    type FunctionCreateOrReplaceByFunctionTypeParams as FunctionCreateOrReplaceByFunctionTypeParams,
    type FunctionGetByFunctionTypeParams as FunctionGetByFunctionTypeParams,
    type FunctionReadParams as FunctionReadParams,
  };
}
