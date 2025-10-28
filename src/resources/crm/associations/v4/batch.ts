// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CRMAPI from '../../crm';
import * as V4API from './v4';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Batch create associations for objects
   *
   * @example
   * ```ts
   * const batchResponseLabelsBetweenObjectPair =
   *   await client.crm.associations.v4.batch.create(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       inputs: [
   *         {
   *           from: { id: '37295' },
   *           to: { id: '37295' },
   *           types: [
   *             {
   *               associationCategory: 'HUBSPOT_DEFINED',
   *               associationTypeId: 0,
   *             },
   *           ],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    toObjectType: string,
    params: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponseLabelsBetweenObjectPair> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Batch delete associations for objects
   *
   * @example
   * ```ts
   * const batchResponseVoid =
   *   await client.crm.associations.v4.batch.delete(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       inputs: [
   *         { from: { id: '37295' }, to: [{ id: '37295' }] },
   *       ],
   *     },
   *   );
   * ```
   */
  delete(
    toObjectType: string,
    params: BatchDeleteParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponseVoid> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/archive`, {
      body,
      ...options,
    });
  }

  /**
   * Create the default (most generic) association type between two object types
   *
   * @example
   * ```ts
   * const batchResponsePublicDefaultAssociation =
   *   await client.crm.associations.v4.batch.createDefault(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       inputs: [
   *         { from: { id: '37295' }, to: { id: '37295' } },
   *       ],
   *     },
   *   );
   * ```
   */
  createDefault(
    toObjectType: string,
    params: BatchCreateDefaultParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponsePublicDefaultAssociation> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/associate/default`,
      { body, ...options },
    );
  }

  /**
   * Batch delete specific association labels for objects. Deleting an unlabeled
   * association will also delete all labeled associations between those two objects
   *
   * @example
   * ```ts
   * const batchResponseVoid =
   *   await client.crm.associations.v4.batch.deleteLabels(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       inputs: [
   *         {
   *           from: { id: '37295' },
   *           to: { id: '37295' },
   *           types: [
   *             {
   *               associationCategory: 'HUBSPOT_DEFINED',
   *               associationTypeId: 0,
   *             },
   *           ],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  deleteLabels(
    toObjectType: string,
    params: BatchDeleteLabelsParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponseVoid> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/labels/archive`,
      { body, ...options },
    );
  }

  /**
   * Batch read associations for objects to specific object type. The 'after' field
   * in a returned paging object can be added alongside the 'id' to retrieve the next
   * page of associations from that objectId. The 'link' field is deprecated and
   * should be ignored. Note: The 'paging' field will only be present if there are
   * more pages and absent otherwise.
   *
   * @example
   * ```ts
   * const batchResponsePublicAssociationMultiWithLabel =
   *   await client.crm.associations.v4.batch.get(
   *     'toObjectType',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       inputs: [{ id: 'id' }],
   *     },
   *   );
   * ```
   */
  get(
    toObjectType: string,
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponsePublicAssociationMultiWithLabel> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/read`, {
      body,
      ...options,
    });
  }
}

export interface BatchCreateParams {
  /**
   * Path param: Type of the toObject for this association definition (ex. "0-2")
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<V4API.PublicAssociationMultiPost>;
}

export interface BatchDeleteParams {
  /**
   * Path param: Type of the fromObject for this association definition.
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<V4API.PublicAssociationMultiArchive>;
}

export interface BatchCreateDefaultParams {
  /**
   * Path param: Type of the toObject for this association definition (ex. "0-2")
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<V4API.PublicDefaultAssociationMultiPost>;
}

export interface BatchDeleteLabelsParams {
  /**
   * Path param: Type of the fromObject for this association definition.
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<V4API.PublicAssociationMultiPost>;
}

export interface BatchGetParams {
  /**
   * Path param: Type of the fromObject for this association definition.
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<V4API.PublicFetchAssociationsBatchRequest>;
}

export declare namespace Batch {
  export {
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchCreateDefaultParams as BatchCreateDefaultParams,
    type BatchDeleteLabelsParams as BatchDeleteLabelsParams,
    type BatchGetParams as BatchGetParams,
  };
}
