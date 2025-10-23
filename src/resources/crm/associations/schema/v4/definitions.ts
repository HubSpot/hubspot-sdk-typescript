// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as V4API from './v4';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Definitions extends APIResource {
  /**
   * Create a user defined association definition
   *
   * @example
   * ```ts
   * const collectionResponseAssociationSpecWithLabelNoPaging =
   *   await client.crm.associations.schema.v4.definitions.create(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       label: 'label',
   *       name: 'name',
   *     },
   *   );
   * ```
   */
  create(
    toObjectType: string,
    params: DefinitionCreateParams,
    options?: RequestOptions,
  ): APIPromise<V4API.CollectionResponseAssociationSpecWithLabelNoPaging> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v4/associations/${fromObjectType}/${toObjectType}/labels`, {
      body,
      ...options,
    });
  }

  /**
   * Update a user defined association definition
   *
   * @example
   * ```ts
   * await client.crm.associations.schema.v4.definitions.update(
   *   'toObjectType',
   *   {
   *     fromObjectType: 'fromObjectType',
   *     associationTypeId: 0,
   *     label: 'label',
   *   },
   * );
   * ```
   */
  update(toObjectType: string, params: DefinitionUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { fromObjectType, ...body } = params;
    return this._client.put(path`/crm/v4/associations/${fromObjectType}/${toObjectType}/labels`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns all association types between two object types
   *
   * @example
   * ```ts
   * const collectionResponseAssociationSpecWithLabelNoPaging =
   *   await client.crm.associations.schema.v4.definitions.list(
   *     'toObjectType',
   *     { fromObjectType: 'fromObjectType' },
   *   );
   * ```
   */
  list(
    toObjectType: string,
    params: DefinitionListParams,
    options?: RequestOptions,
  ): APIPromise<V4API.CollectionResponseAssociationSpecWithLabelNoPaging> {
    const { fromObjectType } = params;
    return this._client.get(path`/crm/v4/associations/${fromObjectType}/${toObjectType}/labels`, options);
  }

  /**
   * Deletes an association definition
   *
   * @example
   * ```ts
   * await client.crm.associations.schema.v4.definitions.delete(
   *   0,
   *   {
   *     fromObjectType: 'fromObjectType',
   *     toObjectType: 'toObjectType',
   *   },
   * );
   * ```
   */
  delete(
    associationTypeID: number,
    params: DefinitionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { fromObjectType, toObjectType } = params;
    return this._client.delete(
      path`/crm/v4/associations/${fromObjectType}/${toObjectType}/labels/${associationTypeID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface DefinitionCreateParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  label: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  inverseLabel?: string;
}

export interface DefinitionUpdateParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  associationTypeId: number;

  /**
   * Body param:
   */
  label: string;

  /**
   * Body param:
   */
  inverseLabel?: string;
}

export interface DefinitionListParams {
  fromObjectType: string;
}

export interface DefinitionDeleteParams {
  fromObjectType: string;

  toObjectType: string;
}

export declare namespace Definitions {
  export {
    type DefinitionCreateParams as DefinitionCreateParams,
    type DefinitionUpdateParams as DefinitionUpdateParams,
    type DefinitionListParams as DefinitionListParams,
    type DefinitionDeleteParams as DefinitionDeleteParams,
  };
}
