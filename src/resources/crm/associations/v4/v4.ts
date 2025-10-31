// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as CRMAPI from '../../crm';
import { MultiAssociatedObjectWithLabelsPage } from '../../crm';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCreateDefaultParams,
  BatchCreateParams,
  BatchDeleteLabelsParams,
  BatchDeleteParams,
  BatchGetParams,
} from './batch';
import * as ReportAPI from './report';
import { Report } from './report';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class V4 extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  report: ReportAPI.Report = new ReportAPI.Report(this._client);

  /**
   * Create the default (most generic) association type between two object types
   *
   * @example
   * ```ts
   * const batchResponsePublicDefaultAssociation =
   *   await client.crm.associations.v4.create('toObjectId', {
   *     fromObjectType: 'fromObjectType',
   *     fromObjectId: 'fromObjectId',
   *     toObjectType: 'toObjectType',
   *   });
   * ```
   */
  create(
    toObjectID: string,
    params: V4CreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponsePublicDefaultAssociation> {
    const { fromObjectType, fromObjectId, toObjectType } = params;
    return this._client.put(
      path`/crm/v4/objects/${fromObjectType}/${fromObjectId}/associations/default/${toObjectType}/${toObjectID}`,
      options,
    );
  }

  /**
   * Set association labels between two records.
   *
   * @example
   * ```ts
   * const createdResponseLabelsBetweenObjectPair =
   *   await client.crm.associations.v4.update('toObjectId', {
   *     objectType: 'objectType',
   *     objectId: 'objectId',
   *     toObjectType: 'toObjectType',
   *     body: [
   *       {
   *         associationCategory: 'HUBSPOT_DEFINED',
   *         associationTypeId: 0,
   *       },
   *     ],
   *   });
   * ```
   */
  update(
    toObjectID: string,
    params: V4UpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CreatedResponseLabelsBetweenObjectPair> {
    const { objectType, objectId, toObjectType, body } = params;
    return this._client.put(
      path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { body: body, ...options },
    );
  }

  /**
   * List all associations of an object by object type. Limit 500 per call.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const multiAssociatedObjectWithLabel of client.crm.associations.v4.list(
   *   'toObjectType',
   *   { objectType: 'objectType', objectId: 'objectId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    toObjectType: string,
    params: V4ListParams,
    options?: RequestOptions,
  ): PagePromise<MultiAssociatedObjectWithLabelsPage, CRMAPI.MultiAssociatedObjectWithLabel> {
    const { objectType, objectId, ...query } = params;
    return this._client.getAPIList(
      path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}`,
      Page<CRMAPI.MultiAssociatedObjectWithLabel>,
      { query, ...options },
    );
  }

  /**
   * deletes all associations between two records.
   *
   * @example
   * ```ts
   * await client.crm.associations.v4.delete('toObjectId', {
   *   objectType: 'objectType',
   *   objectId: 'objectId',
   *   toObjectType: 'toObjectType',
   * });
   * ```
   */
  delete(toObjectID: string, params: V4DeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType, objectId, toObjectType } = params;
    return this._client.delete(
      path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

/**
 * Defines the type, direction, and details of the relationship between two CRM
 * objects.
 */
export interface AssociationSpec1 {
  /**
   * The category of the association, such as "HUBSPOT_DEFINED".
   */
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  /**
   * The ID representing the specific type of association.
   */
  associationTypeId: number;
}

/**
 * Specifies the paging information needed to retrieve the next set of results in a
 * paginated API response
 */
export interface NextPage1 {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after: string;

  /**
   * A URL that can be used to retrieve the next page results.
   */
  link?: string;
}

/**
 * specifies the paging information needed to retrieve the previous set of results
 * in a paginated API response
 */
export interface PreviousPage1 {
  /**
   * A paging cursor token for retrieving previous pages.
   */
  before: string;

  /**
   * A URL that can be used to retrieve the previous pages' results.
   */
  link?: string;
}

/**
 * Ye olde error
 */
export interface StandardError1 {
  /**
   * The main category of the error.
   */
  category: string;

  /**
   * Additional context-specific information related to the error.
   */
  context: { [key: string]: Array<string> };

  /**
   * The detailed error objects.
   */
  errors: Array<Shared.ErrorDetail>;

  /**
   * URLs linking to documentation or resources associated with the error.
   */
  links: { [key: string]: string };

  /**
   * A human-readable string describing the error and possible remediation steps.
   */
  message: string;

  /**
   * The HTTP status code associated with the error.
   */
  status: string;

  /**
   * A unique ID for the error instance.
   */
  id?: string;

  /**
   * A more specific error category within each main category.
   */
  subCategory?: unknown;
}

export interface V4CreateParams {
  fromObjectType: string;

  fromObjectId: string;

  toObjectType: string;
}

export interface V4UpdateParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Path param:
   */
  objectId: string;

  /**
   * Path param:
   */
  toObjectType: string;

  /**
   * Body param:
   */
  body: Array<AssociationSpec1>;
}

export interface V4ListParams extends PageParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Path param:
   */
  objectId: string;
}

export interface V4DeleteParams {
  objectType: string;

  objectId: string;

  toObjectType: string;
}

V4.Batch = Batch;
V4.Report = Report;

export declare namespace V4 {
  export {
    type AssociationSpec1 as AssociationSpec1,
    type NextPage1 as NextPage1,
    type PreviousPage1 as PreviousPage1,
    type StandardError1 as StandardError1,
    type V4CreateParams as V4CreateParams,
    type V4UpdateParams as V4UpdateParams,
    type V4ListParams as V4ListParams,
    type V4DeleteParams as V4DeleteParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchCreateDefaultParams as BatchCreateDefaultParams,
    type BatchDeleteLabelsParams as BatchDeleteLabelsParams,
    type BatchGetParams as BatchGetParams,
  };

  export { Report as Report };
}

export { type MultiAssociatedObjectWithLabelsPage };
