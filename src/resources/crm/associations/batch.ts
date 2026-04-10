// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CrmAPI from '../crm';
import * as AssociationsAPI from './associations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['crm', 'associations', 'batch'] = Object.freeze([
    'crm',
    'associations',
    'batch',
  ] as const);

  create(
    toObjectID: string,
    params: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponsePublicDefaultAssociation> {
    const { fromObjectType, fromObjectId, toObjectType } = params;
    return this._client.put(
      path`/crm/objects/2026-03/${fromObjectType}/${fromObjectId}/associations/default/${toObjectType}/${toObjectID}`,
      options,
    );
  }

  /**
   * Batch delete associations for objects
   */
  delete(toObjectType: string, params: BatchDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/2026-03/${fromObjectType}/${toObjectType}/batch/archive`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Create the default (most generic) association type between two object types
   */
  createDefault(
    toObjectType: string,
    params: BatchCreateDefaultParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponsePublicDefaultAssociation> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/2026-03/${fromObjectType}/${toObjectType}/batch/associate/default`,
      { body, ...options },
    );
  }

  /**
   * Batch delete specific association labels for objects. Deleting an unlabeled
   * association will also delete all labeled associations between those two objects
   */
  deleteLabels(
    toObjectType: string,
    params: BatchDeleteLabelsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/2026-03/${fromObjectType}/${toObjectType}/batch/labels/archive`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Batch read associations for objects to specific object type. The 'after' field
   * in a returned paging object can be added alongside the 'id' to retrieve the next
   * page of associations from that objectId. The 'link' field is deprecated and
   * should be ignored. Note: The 'paging' field will only be present if there are
   * more pages and absent otherwise.
   */
  get(
    toObjectType: string,
    params: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsAPI.BatchResponsePublicAssociationMultiWithLabel> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/associations/2026-03/${fromObjectType}/${toObjectType}/batch/read`, {
      body,
      ...options,
    });
  }
}
export class Batch extends BaseBatch {}

export interface BatchCreateParams {
  fromObjectType: string;

  fromObjectId: string;

  toObjectType: string;
}

export interface BatchDeleteParams {
  /**
   * Path param
   */
  fromObjectType: string;

  /**
   * Body param
   */
  inputs: Array<AssociationsAPI.PublicAssociationMultiArchive>;
}

export interface BatchCreateDefaultParams {
  /**
   * Path param
   */
  fromObjectType: string;

  /**
   * Body param
   */
  inputs: Array<AssociationsAPI.PublicDefaultAssociationMultiPost>;
}

export interface BatchDeleteLabelsParams {
  /**
   * Path param
   */
  fromObjectType: string;

  /**
   * Body param
   */
  inputs: Array<AssociationsAPI.PublicAssociationMultiPost>;
}

export interface BatchGetParams {
  /**
   * Path param
   */
  fromObjectType: string;

  /**
   * Body param
   */
  inputs: Array<AssociationsAPI.PublicFetchAssociationsBatchRequest>;
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
