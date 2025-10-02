// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Functions extends APIResource {
  /**
   * Retrieve a function from a given definition
   */
  retrieve(
    functionID: string,
    params: FunctionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AutomationActionFunction> {
    const { appId, definitionId, functionType } = params;
    return this._client.get(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      options,
    );
  }

  /**
   * Update a function for a definition
   */
  update(
    functionID: string,
    params: FunctionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ActionFunctionIdentifier> {
    const { appId, definitionId, functionType, body } = params;
    return this._client.put(
      path`/automation/v4/actions/${appId}/${definitionId}/functions/${functionType}/${functionID}`,
      { body: body, ...options, headers: buildHeaders([{ 'Content-Type': 'text/plain' }, options?.headers]) },
    );
  }

  /**
   * Retrieve functions for a given definition
   */
  list(
    definitionID: string,
    params: FunctionListParams,
    options?: RequestOptions,
  ): APIPromise<FunctionListResponse> {
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
}

export interface ActionFunctionIdentifier {
  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';

  id?: string;
}

export interface AutomationActionFunction {
  functionSource: string;

  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';

  id?: string;
}

export interface FunctionListResponse {
  results: Array<ActionFunctionIdentifier>;
}

export interface FunctionRetrieveParams {
  appId: number;

  definitionId: string;

  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
}

export interface FunctionUpdateParams {
  /**
   * Path param:
   */
  appId: number;

  /**
   * Path param:
   */
  definitionId: string;

  /**
   * Path param:
   */
  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';

  /**
   * Body param:
   */
  body: string;
}

export interface FunctionListParams {
  appId: number;
}

export interface FunctionDeleteParams {
  appId: number;

  definitionId: string;

  functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
}

export declare namespace Functions {
  export {
    type ActionFunctionIdentifier as ActionFunctionIdentifier,
    type AutomationActionFunction as AutomationActionFunction,
    type FunctionListResponse as FunctionListResponse,
    type FunctionRetrieveParams as FunctionRetrieveParams,
    type FunctionUpdateParams as FunctionUpdateParams,
    type FunctionListParams as FunctionListParams,
    type FunctionDeleteParams as FunctionDeleteParams,
  };
}
