// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CrmAPI from '../crm';
import { MultiAssociatedObjectWithLabelsPage } from '../crm';
import * as BatchAPI from './batch';
import {
  BaseBatch,
  Batch,
  BatchCreateDefaultParams,
  BatchCreateParams,
  BatchDeleteLabelsParams,
  BatchDeleteParams,
  BatchGetParams,
} from './batch';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAssociations extends APIResource {
  static override readonly _key: readonly ['crm', 'associations'] = Object.freeze([
    'crm',
    'associations',
  ] as const);

  /**
   * Create the default (most generic) association type between two object types
   */
  create(
    toObjectID: string,
    params: AssociationCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponsePublicDefaultAssociation> {
    const { fromObjectType, fromObjectId, toObjectType } = params;
    return this._client.put(
      path`/crm/objects/2026-03/${fromObjectType}/${fromObjectId}/associations/default/${toObjectType}/${toObjectID}`,
      options,
    );
  }

  /**
   * Retrieve all associations between a specific record and an object type. Limit
   * 500 per call.
   */
  list(
    toObjectType: string,
    params: AssociationListParams,
    options?: RequestOptions,
  ): PagePromise<MultiAssociatedObjectWithLabelsPage, CrmAPI.MultiAssociatedObjectWithLabel> {
    const { objectType, objectId, ...query } = params;
    return this._client.getAPIList(
      path`/crm/objects/2026-03/${objectType}/${objectId}/associations/${toObjectType}`,
      Page<CrmAPI.MultiAssociatedObjectWithLabel>,
      { query, ...options },
    );
  }

  /**
   * deletes all associations between two records.
   */
  delete(toObjectID: string, params: AssociationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType, objectId, toObjectType } = params;
    return this._client.delete(
      path`/crm/objects/2026-03/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Requests a report of all objects in the portal which have a high usage of
   * associations
   */
  requestHighUsageReport(
    userID: number,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.ReportCreationResponse> {
    return this._client.post(path`/crm/associations/2026-03/usage/high-usage-report/${userID}`, options);
  }

  search(
    objectType: string,
    body: AssociationSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/search`, { body, ...options });
  }

  /**
   * Set association labels between two records.
   */
  updateLabels(
    toObjectID: string,
    params: AssociationUpdateLabelsParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.LabelsBetweenObjectPair> {
    const { objectType, objectId, toObjectType, body } = params;
    return this._client.put(
      path`/crm/objects/2026-03/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { body: body, ...options },
    );
  }
}
export class Associations extends BaseAssociations {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

export interface AssociationCreateParams {
  fromObjectType: string;

  fromObjectId: string;

  toObjectType: string;
}

export interface AssociationListParams extends PageParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Path param
   */
  objectId: string;
}

export interface AssociationDeleteParams {
  objectType: string;

  objectId: string;

  toObjectType: string;
}

export interface AssociationSearchParams {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups: Array<CrmAPI.FilterGroup>;

  /**
   * The maximum results to return, up to 200 objects.
   */
  limit: number;

  /**
   * A list of property names to include in the response.
   */
  properties: Array<string>;

  /**
   * Specifies sorting order based on object properties.
   */
  sorts: Array<string>;

  /**
   * The search query string, up to 3000 characters.
   */
  query?: string;
}

export interface AssociationUpdateLabelsParams {
  /**
   * Path param
   */
  objectType: string;

  /**
   * Path param
   */
  objectId: string;

  /**
   * Path param
   */
  toObjectType: string;

  /**
   * Body param
   */
  body: Array<Shared.AssociationSpec>;
}

Associations.Batch = Batch;
Associations.BaseBatch = BaseBatch;

export declare namespace Associations {
  export {
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationListParams as AssociationListParams,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationSearchParams as AssociationSearchParams,
    type AssociationUpdateLabelsParams as AssociationUpdateLabelsParams,
  };

  export {
    Batch as Batch,
    BaseBatch as BaseBatch,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchCreateDefaultParams as BatchCreateDefaultParams,
    type BatchDeleteLabelsParams as BatchDeleteLabelsParams,
    type BatchGetParams as BatchGetParams,
  };
}

export { type MultiAssociatedObjectWithLabelsPage };
