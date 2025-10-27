// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as CRMAPI from '../../crm';
import * as EmailsAPI from '../../../marketing/emails/emails';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchBatchAssociateDefaultParams,
  BatchBatchCreateParams,
  BatchBatchDeleteLabelsParams,
  BatchBatchDeleteParams,
  BatchBatchReadParams,
} from './batch';
import * as ReportAPI from './report';
import { Report } from './report';
import { APIPromise } from '../../../../core/api-promise';
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
   *   await client.crm.associations.v4.createDefaultAssociation(
   *     'toObjectId',
   *     {
   *       fromObjectType: 'fromObjectType',
   *       fromObjectId: 'fromObjectId',
   *       toObjectType: 'toObjectType',
   *     },
   *   );
   * ```
   */
  createDefaultAssociation(
    toObjectID: string,
    params: V4CreateDefaultAssociationParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponsePublicDefaultAssociation> {
    const { fromObjectType, fromObjectId, toObjectType } = params;
    return this._client.put(
      path`/crm/v4/objects/${fromObjectType}/${fromObjectId}/associations/default/${toObjectType}/${toObjectID}`,
      options,
    );
  }

  /**
   * deletes all associations between two records.
   *
   * @example
   * ```ts
   * await client.crm.associations.v4.deleteAssociation(
   *   'toObjectId',
   *   {
   *     objectType: 'objectType',
   *     objectId: 'objectId',
   *     toObjectType: 'toObjectType',
   *   },
   * );
   * ```
   */
  deleteAssociation(
    toObjectID: string,
    params: V4DeleteAssociationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { objectType, objectId, toObjectType } = params;
    return this._client.delete(
      path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * List all associations of an object by object type. Limit 500 per call.
   *
   * @example
   * ```ts
   * const collectionResponseMultiAssociatedObjectWithLabel =
   *   await client.crm.associations.v4.listAssociationsByType(
   *     'toObjectType',
   *     { objectType: 'objectType', objectId: 'objectId' },
   *   );
   * ```
   */
  listAssociationsByType(
    toObjectType: string,
    params: V4ListAssociationsByTypeParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CollectionResponseMultiAssociatedObjectWithLabel> {
    const { objectType, objectId, ...query } = params;
    return this._client.get(path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}`, {
      query,
      ...options,
    });
  }

  /**
   * Set association labels between two records.
   *
   * @example
   * ```ts
   * const createdResponseLabelsBetweenObjectPair =
   *   await client.crm.associations.v4.updateAssociationLabels(
   *     'toObjectId',
   *     {
   *       objectType: 'objectType',
   *       objectId: 'objectId',
   *       toObjectType: 'toObjectType',
   *       body: [
   *         {
   *           associationCategory: 'HUBSPOT_DEFINED',
   *           associationTypeId: 0,
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  updateAssociationLabels(
    toObjectID: string,
    params: V4UpdateAssociationLabelsParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CreatedResponseLabelsBetweenObjectPair> {
    const { objectType, objectId, toObjectType, body } = params;
    return this._client.put(
      path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { body: body, ...options },
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

export interface AssociationSpecWithLabel1 {
  category: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  typeId: number;

  label?: string;
}

export interface BatchInputPublicAssociationMultiArchive {
  inputs: Array<PublicAssociationMultiArchive>;
}

export interface BatchInputPublicAssociationMultiPost {
  inputs: Array<PublicAssociationMultiPost>;
}

export interface BatchInputPublicDefaultAssociationMultiPost {
  inputs: Array<PublicDefaultAssociationMultiPost>;
}

export interface BatchInputPublicFetchAssociationsBatchRequest {
  inputs: Array<PublicFetchAssociationsBatchRequest>;
}

export interface BatchResponseLabelsBetweenObjectPair {
  completedAt: string;

  results: Array<CRMAPI.LabelsBetweenObjectPair>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<StandardError1>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponsePublicAssociationMultiWithLabel {
  completedAt: string;

  results: Array<PublicAssociationMultiWithLabel>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<StandardError1>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseVoid {
  completedAt: string;

  results: Array<unknown>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<StandardError1>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface DateTime {
  dateOnly: boolean;

  timeZoneShift: number;

  value: number;
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

export interface PublicAssociationMultiArchive {
  from: Shared.PublicObjectID;

  to: Array<Shared.PublicObjectID>;
}

export interface PublicAssociationMultiPost {
  from: Shared.PublicObjectID;

  to: Shared.PublicObjectID;

  types: Array<AssociationSpec1>;
}

export interface PublicAssociationMultiWithLabel {
  from: Shared.PublicObjectID;

  to: Array<CRMAPI.MultiAssociatedObjectWithLabel>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface PublicDefaultAssociationMultiPost {
  from: Shared.PublicObjectID;

  to: Shared.PublicObjectID;
}

export interface PublicFetchAssociationsBatchRequest {
  id: string;

  after?: string;
}

export interface ReportCreationResponse {
  enqueueTime: DateTime;

  userEmail: string;

  userId: number;
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

export interface V4CreateDefaultAssociationParams {
  /**
   * The type of the source object for the default association.
   */
  fromObjectType: string;

  /**
   * The unique identifier of the source object for the default association.
   */
  fromObjectId: string;

  /**
   * The type of the target object for the default association.
   */
  toObjectType: string;
}

export interface V4DeleteAssociationParams {
  objectType: string;

  objectId: string;

  toObjectType: string;
}

export interface V4ListAssociationsByTypeParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Path param:
   */
  objectId: string;

  /**
   * Query param: The paging cursor token of the last successfully read resource will
   * be returned as the `paging.next.after` JSON property of a paged response
   * containing more results.
   */
  after?: string;

  /**
   * Query param: The maximum number of results to display per page.
   */
  limit?: number;
}

export interface V4UpdateAssociationLabelsParams {
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
  body: Array<Shared.AssociationSpec>;
}

V4.Batch = Batch;
V4.Report = Report;

export declare namespace V4 {
  export {
    type AssociationSpec1 as AssociationSpec1,
    type AssociationSpecWithLabel1 as AssociationSpecWithLabel1,
    type BatchInputPublicAssociationMultiArchive as BatchInputPublicAssociationMultiArchive,
    type BatchInputPublicAssociationMultiPost as BatchInputPublicAssociationMultiPost,
    type BatchInputPublicDefaultAssociationMultiPost as BatchInputPublicDefaultAssociationMultiPost,
    type BatchInputPublicFetchAssociationsBatchRequest as BatchInputPublicFetchAssociationsBatchRequest,
    type BatchResponseLabelsBetweenObjectPair as BatchResponseLabelsBetweenObjectPair,
    type BatchResponsePublicAssociationMultiWithLabel as BatchResponsePublicAssociationMultiWithLabel,
    type BatchResponseVoid as BatchResponseVoid,
    type DateTime as DateTime,
    type NextPage1 as NextPage1,
    type PreviousPage1 as PreviousPage1,
    type PublicAssociationMultiArchive as PublicAssociationMultiArchive,
    type PublicAssociationMultiPost as PublicAssociationMultiPost,
    type PublicAssociationMultiWithLabel as PublicAssociationMultiWithLabel,
    type PublicDefaultAssociationMultiPost as PublicDefaultAssociationMultiPost,
    type PublicFetchAssociationsBatchRequest as PublicFetchAssociationsBatchRequest,
    type ReportCreationResponse as ReportCreationResponse,
    type StandardError1 as StandardError1,
    type V4CreateDefaultAssociationParams as V4CreateDefaultAssociationParams,
    type V4DeleteAssociationParams as V4DeleteAssociationParams,
    type V4ListAssociationsByTypeParams as V4ListAssociationsByTypeParams,
    type V4UpdateAssociationLabelsParams as V4UpdateAssociationLabelsParams,
  };

  export {
    Batch as Batch,
    type BatchBatchAssociateDefaultParams as BatchBatchAssociateDefaultParams,
    type BatchBatchCreateParams as BatchBatchCreateParams,
    type BatchBatchDeleteParams as BatchBatchDeleteParams,
    type BatchBatchDeleteLabelsParams as BatchBatchDeleteLabelsParams,
    type BatchBatchReadParams as BatchBatchReadParams,
  };

  export { Report as Report };
}
