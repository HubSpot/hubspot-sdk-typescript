// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssociationsSchemaAPI from './associations-schema';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseLimits extends APIResource {
  static override readonly _key: readonly ['crm', 'associationsSchema', 'limits'] = Object.freeze([
    'crm',
    'associationsSchema',
    'limits',
  ] as const);

  /**
   * Retrieve all configured association limits between objects, which include
   * details about how different CRM object types are associated with each other.
   */
  list(
    options?: RequestOptions,
  ): APIPromise<AssociationsSchemaAPI.CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
    return this._client.get('/crm/associations/2026-03/definitions/configurations/all', options);
  }

  /**
   * Batch delete limits that have been defined for association types between two
   * object types.
   */
  batchDelete(
    toObjectType: string,
    params: LimitBatchDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/2026-03/definitions/configurations/${fromObjectType}/${toObjectType}/batch/purge`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Batch update association limits that have been configured between two object
   * types.
   */
  batchUpdate(
    toObjectType: string,
    params: LimitBatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsSchemaAPI.BatchResponsePublicAssociationDefinitionConfigurationUpdateResult> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/2026-03/definitions/configurations/${fromObjectType}/${toObjectType}/batch/update`,
      { body, ...options },
    );
  }

  /**
   * Retrieve the configuration details for associations between two specified CRM
   * object types. Use this endpoint to understand limits that have been set for
   * specific association types.
   */
  getByObjectTypes(
    toObjectType: string,
    params: LimitGetByObjectTypesParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsSchemaAPI.CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
    const { fromObjectType } = params;
    return this._client.get(
      path`/crm/associations/2026-03/definitions/configurations/${fromObjectType}/${toObjectType}`,
      options,
    );
  }
}
export class Limits extends BaseLimits {}

export interface LimitBatchDeleteParams {
  /**
   * Path param
   */
  fromObjectType: string;

  /**
   * Body param
   */
  inputs: Array<AssociationsSchemaAPI.PublicAssociationSpec>;
}

export interface LimitBatchUpdateParams {
  /**
   * Path param
   */
  fromObjectType: string;

  /**
   * Body param
   */
  inputs: Array<AssociationsSchemaAPI.PublicAssociationDefinitionConfigurationUpdateRequest>;
}

export interface LimitGetByObjectTypesParams {
  fromObjectType: string;
}

export declare namespace Limits {
  export {
    type LimitBatchDeleteParams as LimitBatchDeleteParams,
    type LimitBatchUpdateParams as LimitBatchUpdateParams,
    type LimitGetByObjectTypesParams as LimitGetByObjectTypesParams,
  };
}
