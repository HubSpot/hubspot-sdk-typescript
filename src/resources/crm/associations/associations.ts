// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CrmAPI from '../crm';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCreateDefaultParams,
  BatchCreateParams,
  BatchDeleteLabelsParams,
  BatchDeleteParams,
  BatchGetParams,
} from './batch';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Associations extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  deleteAssociations(
    toObjectID: string,
    params: AssociationDeleteAssociationsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
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
  requestHighUsageReport(userID: number, options?: RequestOptions): APIPromise<ReportCreationResponse> {
    return this._client.post(path`/crm/associations/2026-03/usage/high-usage-report/${userID}`, options);
  }

  updateAssociationLabels(
    toObjectID: string,
    params: AssociationUpdateAssociationLabelsParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.LabelsBetweenObjectPair> {
    const { objectType, objectId, toObjectType, body } = params;
    return this._client.put(
      path`/crm/objects/2026-03/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { body: body, ...options },
    );
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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

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
  /**
   * Contains the Id of a Public Object
   */
  from: Shared.PublicObjectID;

  to: Array<Shared.PublicObjectID>;
}

export interface PublicAssociationMultiPost {
  /**
   * Contains the Id of a Public Object
   */
  from: Shared.PublicObjectID;

  /**
   * Contains the Id of a Public Object
   */
  to: Shared.PublicObjectID;

  types: Array<Shared.AssociationSpec>;
}

export interface PublicAssociationMultiWithLabel {
  /**
   * Contains the Id of a Public Object
   */
  from: Shared.PublicObjectID;

  to: Array<CrmAPI.MultiAssociatedObjectWithLabel>;

  paging?: Shared.Paging;
}

export interface PublicDefaultAssociationMultiPost {
  /**
   * Contains the Id of a Public Object
   */
  from: Shared.PublicObjectID;

  /**
   * Contains the Id of a Public Object
   */
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

export interface AssociationDeleteAssociationsParams {
  objectType: string;

  objectId: string;

  toObjectType: string;
}

export interface AssociationUpdateAssociationLabelsParams {
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

export declare namespace Associations {
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
    type AssociationDeleteAssociationsParams as AssociationDeleteAssociationsParams,
    type AssociationUpdateAssociationLabelsParams as AssociationUpdateAssociationLabelsParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchCreateDefaultParams as BatchCreateDefaultParams,
    type BatchDeleteLabelsParams as BatchDeleteLabelsParams,
    type BatchGetParams as BatchGetParams,
  };
}
