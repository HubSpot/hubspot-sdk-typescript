// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as CrmAPI from '../../crm';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCreateDefaultParams,
  BatchCreateParams,
  BatchDeleteLabelsParams,
  BatchDeleteParams,
  BatchGetParams,
  BatchUpsertParams,
} from './batch';
import * as ReportAPI from './report';
import { Report } from './report';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class V4 extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  report: ReportAPI.Report = new ReportAPI.Report(this._client);

  /**
   * Merge two CRM objects of the specified type into one.
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.associations.v4.merge('objectType', {
   *     objectIdToMerge: 'objectIdToMerge',
   *     primaryObjectId: 'primaryObjectId',
   *   });
   * ```
   */
  merge(
    objectType: string,
    body: V4MergeParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post(path`/crm/v4/objects/${objectType}/merge`, { body, ...options });
  }
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
  /**
   * The timestamp when the batch processing was completed, in ISO 8601 format.
   */
  completedAt: string;

  results: Array<CrmAPI.LabelsBetweenObjectPair>;

  /**
   * The timestamp when the batch processing began, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request: "PENDING", "PROCESSING",
   * "CANCELLED", or "COMPLETE".
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch processing.
   */
  numErrors?: number;

  /**
   * The timestamp when the batch request was initially made, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicAssociationMultiWithLabel {
  /**
   * The timestamp when the batch processing was completed, in ISO 8601 format.
   */
  completedAt: string;

  results: Array<PublicAssociationMultiWithLabel>;

  /**
   * The timestamp when the batch processing began, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request: "PENDING", "PROCESSING", "CANCELED",
   * or "COMPLETE".
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch processing.
   */
  numErrors?: number;

  /**
   * The timestamp when the batch request was initially made, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface DateTime {
  /**
   * Indicates whether the DateTime value represents only a date without a time
   * component.
   */
  dateOnly: boolean;

  /**
   * The integer value representing the shift in minutes from UTC for the DateTime
   * value.
   */
  timeZoneShift: number;

  /**
   * The integer value representing a specific point in time.
   */
  value: number;
}

export interface PublicAssociationMultiArchive {
  from: Shared.PublicObjectID;

  to: Array<Shared.PublicObjectID>;
}

export interface PublicAssociationMultiPost {
  from: Shared.PublicObjectID;

  to: Shared.PublicObjectID;

  types: Array<Shared.AssociationSpec>;
}

export interface PublicAssociationMultiWithLabel {
  from: Shared.PublicObjectID;

  to: Array<CrmAPI.MultiAssociatedObjectWithLabel>;

  paging?: Shared.Paging;
}

export interface PublicDefaultAssociationMultiPost {
  from: Shared.PublicObjectID;

  to: Shared.PublicObjectID;
}

export interface PublicFetchAssociationsBatchRequest {
  /**
   * The unique identifier for the object whose associations are being fetched.
   */
  id: string;

  /**
   * A paging cursor token used to retrieve the next set of results in a paginated
   * response.
   */
  after?: string;
}

export interface ReportCreationResponse {
  enqueueTime: DateTime;

  /**
   * Email of the user
   */
  userEmail: string;

  /**
   * ID of the user
   */
  userId: number;
}

export interface V4MergeParams {
  /**
   * The unique identifier of the CRM object that will be merged into the primary
   * object.
   */
  objectIdToMerge: string;

  /**
   * The unique identifier of the CRM object that will remain after the merge.
   */
  primaryObjectId: string;
}

V4.Batch = Batch;
V4.Report = Report;

export declare namespace V4 {
  export {
    type BatchInputPublicAssociationMultiArchive as BatchInputPublicAssociationMultiArchive,
    type BatchInputPublicAssociationMultiPost as BatchInputPublicAssociationMultiPost,
    type BatchInputPublicDefaultAssociationMultiPost as BatchInputPublicDefaultAssociationMultiPost,
    type BatchInputPublicFetchAssociationsBatchRequest as BatchInputPublicFetchAssociationsBatchRequest,
    type BatchResponseLabelsBetweenObjectPair as BatchResponseLabelsBetweenObjectPair,
    type BatchResponsePublicAssociationMultiWithLabel as BatchResponsePublicAssociationMultiWithLabel,
    type DateTime as DateTime,
    type PublicAssociationMultiArchive as PublicAssociationMultiArchive,
    type PublicAssociationMultiPost as PublicAssociationMultiPost,
    type PublicAssociationMultiWithLabel as PublicAssociationMultiWithLabel,
    type PublicDefaultAssociationMultiPost as PublicDefaultAssociationMultiPost,
    type PublicFetchAssociationsBatchRequest as PublicFetchAssociationsBatchRequest,
    type ReportCreationResponse as ReportCreationResponse,
    type V4MergeParams as V4MergeParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchCreateDefaultParams as BatchCreateDefaultParams,
    type BatchDeleteLabelsParams as BatchDeleteLabelsParams,
    type BatchGetParams as BatchGetParams,
    type BatchUpsertParams as BatchUpsertParams,
  };

  export { Report as Report };
}
