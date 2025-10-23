// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as V4API from './v4';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Configurations extends APIResource {
  /**
   * Returns all user configurations available on a given portal
   *
   * @example
   * ```ts
   * const collectionResponsePublicAssociationDefinitionUserConfigurationNoPaging =
   *   await client.crm.associations.schema.v4.configurations.list();
   * ```
   */
  list(
    options?: RequestOptions,
  ): APIPromise<V4API.CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
    return this._client.get('/crm/v4/associations/definitions/configurations/all', options);
  }

  /**
   * Batch create user configurations between two object types
   *
   * @example
   * ```ts
   * const batchResponsePublicAssociationDefinitionUserConfiguration =
   *   await client.crm.associations.schema.v4.configurations.batchCreateByObjectTypes(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       inputs: [
   *         {
   *           category: 'HUBSPOT_DEFINED',
   *           maxToObjectIds: 0,
   *           typeId: 0,
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  batchCreateByObjectTypes(
    toObjectType: string,
    params: ConfigurationBatchCreateByObjectTypesParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponsePublicAssociationDefinitionUserConfiguration> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/v4/associations/definitions/configurations/${fromObjectType}/${toObjectType}/batch/create`,
      { body, ...options },
    );
  }

  /**
   * Batch delete user configurations between two object types
   *
   * @example
   * ```ts
   * await client.crm.associations.schema.v4.configurations.batchDeleteByObjectTypes(
   *   'toObjectType',
   *   {
   *     fromObjectType: 'fromObjectType',
   *     inputs: [{ category: 'category', typeId: 0 }],
   *   },
   * );
   * ```
   */
  batchDeleteByObjectTypes(
    toObjectType: string,
    params: ConfigurationBatchDeleteByObjectTypesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/v4/associations/definitions/configurations/${fromObjectType}/${toObjectType}/batch/purge`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Batch update user configurations between two object types
   *
   * @example
   * ```ts
   * const batchResponsePublicAssociationDefinitionConfigurationUpdateResult =
   *   await client.crm.associations.schema.v4.configurations.batchUpdateByObjectTypes(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       inputs: [
   *         {
   *           category: 'HUBSPOT_DEFINED',
   *           maxToObjectIds: 0,
   *           typeId: 0,
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  batchUpdateByObjectTypes(
    toObjectType: string,
    params: ConfigurationBatchUpdateByObjectTypesParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponsePublicAssociationDefinitionConfigurationUpdateResult> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/v4/associations/definitions/configurations/${fromObjectType}/${toObjectType}/batch/update`,
      { body, ...options },
    );
  }

  /**
   * Returns user configurations on all association definitions between two object
   * types
   *
   * @example
   * ```ts
   * const collectionResponsePublicAssociationDefinitionUserConfigurationNoPaging =
   *   await client.crm.associations.schema.v4.configurations.getByObjectTypes(
   *     'toObjectType',
   *     { fromObjectType: 'fromObjectType' },
   *   );
   * ```
   */
  getByObjectTypes(
    toObjectType: string,
    params: ConfigurationGetByObjectTypesParams,
    options?: RequestOptions,
  ): APIPromise<V4API.CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
    const { fromObjectType } = params;
    return this._client.get(
      path`/crm/v4/associations/definitions/configurations/${fromObjectType}/${toObjectType}`,
      options,
    );
  }
}

export interface ConfigurationBatchCreateByObjectTypesParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<V4API.PublicAssociationDefinitionConfigurationCreateRequest>;
}

export interface ConfigurationBatchDeleteByObjectTypesParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<V4API.PublicAssociationSpec>;
}

export interface ConfigurationBatchUpdateByObjectTypesParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<V4API.PublicAssociationDefinitionConfigurationUpdateRequest>;
}

export interface ConfigurationGetByObjectTypesParams {
  fromObjectType: string;
}

export declare namespace Configurations {
  export {
    type ConfigurationBatchCreateByObjectTypesParams as ConfigurationBatchCreateByObjectTypesParams,
    type ConfigurationBatchDeleteByObjectTypesParams as ConfigurationBatchDeleteByObjectTypesParams,
    type ConfigurationBatchUpdateByObjectTypesParams as ConfigurationBatchUpdateByObjectTypesParams,
    type ConfigurationGetByObjectTypesParams as ConfigurationGetByObjectTypesParams,
  };
}
