// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as V4API from './v4';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Definitions extends APIResource {
  /**
   * @example
   * ```ts
   * const collectionResponseAssociationSpecWithLabel =
   *   await client.crm.associations.schema.v4.definitions.createLabel(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       label: 'label',
   *       name: 'name',
   *     },
   *   );
   * ```
   */
  createLabel(
    toObjectType: string,
    params: DefinitionCreateLabelParams,
    options?: RequestOptions,
  ): APIPromise<V4API.CollectionResponseAssociationSpecWithLabel> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/associations/v4/${fromObjectType}/${toObjectType}/labels`, {
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * await client.crm.associations.schema.v4.definitions.deleteLabel(
   *   0,
   *   {
   *     fromObjectType: 'fromObjectType',
   *     toObjectType: 'toObjectType',
   *   },
   * );
   * ```
   */
  deleteLabel(
    associationTypeID: number,
    params: DefinitionDeleteLabelParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { fromObjectType, toObjectType } = params;
    return this._client.delete(
      path`/crm/associations/v4/${fromObjectType}/${toObjectType}/labels/${associationTypeID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * @example
   * ```ts
   * const collectionResponseAssociationSpecWithLabel =
   *   await client.crm.associations.schema.v4.definitions.listLabels(
   *     'toObjectType',
   *     { fromObjectType: 'fromObjectType' },
   *   );
   * ```
   */
  listLabels(
    toObjectType: string,
    params: DefinitionListLabelsParams,
    options?: RequestOptions,
  ): APIPromise<V4API.CollectionResponseAssociationSpecWithLabel> {
    const { fromObjectType } = params;
    return this._client.get(path`/crm/associations/v4/${fromObjectType}/${toObjectType}/labels`, options);
  }

  /**
   * @example
   * ```ts
   * await client.crm.associations.schema.v4.definitions.updateLabel(
   *   'toObjectType',
   *   {
   *     fromObjectType: 'fromObjectType',
   *     associationTypeId: 0,
   *     label: 'label',
   *   },
   * );
   * ```
   */
  updateLabel(
    toObjectType: string,
    params: DefinitionUpdateLabelParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { fromObjectType, ...body } = params;
    return this._client.put(path`/crm/associations/v4/${fromObjectType}/${toObjectType}/labels`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DefinitionCreateLabelParams {
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

export interface DefinitionDeleteLabelParams {
  fromObjectType: string;

  toObjectType: string;
}

export interface DefinitionListLabelsParams {
  fromObjectType: string;
}

export interface DefinitionUpdateLabelParams {
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

export declare namespace Definitions {
  export {
    type DefinitionCreateLabelParams as DefinitionCreateLabelParams,
    type DefinitionDeleteLabelParams as DefinitionDeleteLabelParams,
    type DefinitionListLabelsParams as DefinitionListLabelsParams,
    type DefinitionUpdateLabelParams as DefinitionUpdateLabelParams,
  };
}
