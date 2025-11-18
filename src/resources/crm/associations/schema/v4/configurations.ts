// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AssociationsAPI from '../../associations';
import * as V4API from './v4';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Configurations extends APIResource {
  /**
   * @example
   * ```ts
   * const collectionResponsePublicAssociationDefinitionUserConfiguration =
   *   await client.crm.associations.schema.v4.configurations.list();
   * ```
   */
  list(
    options?: RequestOptions,
  ): APIPromise<V4API.CollectionResponsePublicAssociationDefinitionUserConfiguration> {
    return this._client.get('/crm/associations/v4/definitions/configurations/all', options);
  }

  /**
   * @example
   * ```ts
   * const batchResponsePublicAssociationDefinitionUserConfiguration =
   *   await client.crm.associations.schema.v4.configurations.batchCreate(
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
  batchCreate(
    toObjectType: string,
    params: ConfigurationBatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponsePublicAssociationDefinitionUserConfiguration> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/v4/definitions/configurations/${fromObjectType}/${toObjectType}/batch/create`,
      { body, ...options },
    );
  }

  /**
   * @example
   * ```ts
   * const batchResponseVoid =
   *   await client.crm.associations.schema.v4.configurations.batchDelete(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       inputs: [{ category: 'category', typeId: 0 }],
   *     },
   *   );
   * ```
   */
  batchDelete(
    toObjectType: string,
    params: ConfigurationBatchDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsAPI.BatchResponseVoid> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/v4/definitions/configurations/${fromObjectType}/${toObjectType}/batch/purge`,
      { body, ...options },
    );
  }

  /**
   * @example
   * ```ts
   * const batchResponsePublicAssociationDefinitionConfigurationUpdateResult =
   *   await client.crm.associations.schema.v4.configurations.batchUpdate(
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
  batchUpdate(
    toObjectType: string,
    params: ConfigurationBatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponsePublicAssociationDefinitionConfigurationUpdateResult> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/v4/definitions/configurations/${fromObjectType}/${toObjectType}/batch/update`,
      { body, ...options },
    );
  }

  /**
   * @example
   * ```ts
   * const collectionResponsePublicAssociationDefinitionUserConfiguration =
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
  ): APIPromise<V4API.CollectionResponsePublicAssociationDefinitionUserConfiguration> {
    const { fromObjectType } = params;
    return this._client.get(
      path`/crm/associations/v4/definitions/configurations/${fromObjectType}/${toObjectType}`,
      options,
    );
  }
}

export interface ConfigurationBatchCreateParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<V4API.PublicAssociationDefinitionConfigurationCreateRequest>;
}

export interface ConfigurationBatchDeleteParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<V4API.PublicAssociationSpec>;
}

export interface ConfigurationBatchUpdateParams {
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
    type ConfigurationBatchCreateParams as ConfigurationBatchCreateParams,
    type ConfigurationBatchDeleteParams as ConfigurationBatchDeleteParams,
    type ConfigurationBatchUpdateParams as ConfigurationBatchUpdateParams,
    type ConfigurationGetByObjectTypesParams as ConfigurationGetByObjectTypesParams,
  };
}
