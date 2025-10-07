// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../crm';
import { MultiAssociatedObjectWithLabelsCursorURLPage } from '../crm';
import * as EmailsAPI from '../../marketing/emails';
import { APIPromise } from '../../../core/api-promise';
import { CursorURLPage, type CursorURLPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class V4 extends APIResource {
  /**
   * Create
   */
  create(
    toObjectID: string,
    params: V4CreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CreatedResponseLabelsBetweenObjectPair> {
    const { objectType, objectId, toObjectType, body } = params;
    return this._client.put(
      path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { body: body, ...options },
    );
  }

  /**
   * List
   */
  list(
    toObjectType: string,
    params: V4ListParams,
    options?: RequestOptions,
  ): PagePromise<MultiAssociatedObjectWithLabelsCursorURLPage, CRMAPI.MultiAssociatedObjectWithLabel> {
    const { objectType, objectId, ...query } = params;
    return this._client.getAPIList(
      path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}`,
      CursorURLPage<CRMAPI.MultiAssociatedObjectWithLabel>,
      { query, ...options },
    );
  }

  /**
   * Delete
   */
  delete(toObjectID: string, params: V4DeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType, objectId, toObjectType } = params;
    return this._client.delete(
      path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Delete Specific Labels
   */
  archiveLabels(
    toObjectType: string,
    params: V4ArchiveLabelsParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseVoid> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/labels/archive`,
      { body, ...options },
    );
  }

  /**
   * Create Default
   */
  createDefault(
    toObjectID: string,
    params: V4CreateDefaultParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.BatchResponsePublicDefaultAssociation> {
    const { fromObjectType, fromObjectId, toObjectType } = params;
    return this._client.put(
      path`/crm/v4/objects/${fromObjectType}/${fromObjectId}/associations/default/${toObjectType}/${toObjectID}`,
      options,
    );
  }

  /**
   * Report
   */
  request(userID: number, options?: RequestOptions): APIPromise<ReportCreationResponse> {
    return this._client.post(path`/crm/v4/associations/usage/high-usage-report/${userID}`, options);
  }
}

export interface AssociationSpec1 {
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

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

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponsePublicAssociationMultiWithLabel {
  completedAt: string;

  results: Array<PublicAssociationMultiWithLabel>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseVoid {
  completedAt: string;

  results: Array<unknown>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface DateTime {
  dateOnly: boolean;

  timeZoneShift: number;

  value: number;
}

export interface NextPage1 {
  after: string;

  link?: string;
}

export interface PreviousPage1 {
  before: string;

  link?: string;
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

  to: Array<CRMAPI.MultiAssociatedObjectWithLabel>;

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

export interface StandardError1 {
  category: string;

  context: { [key: string]: Array<string> };

  errors: Array<Shared.ErrorDetail>;

  links: { [key: string]: string };

  message: string;

  status: string;

  id?: string;

  subCategory?: unknown;
}

export interface V4CreateParams {
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

export interface V4ListParams extends CursorURLPageParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Path param:
   */
  objectId: string;

  /**
   * Query param:
   */
  after?: string;
}

export interface V4DeleteParams {
  objectType: string;

  objectId: string;

  toObjectType: string;
}

export interface V4ArchiveLabelsParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<PublicAssociationMultiPost>;
}

export interface V4CreateDefaultParams {
  fromObjectType: string;

  fromObjectId: string;

  toObjectType: string;
}

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
    type V4CreateParams as V4CreateParams,
    type V4ListParams as V4ListParams,
    type V4DeleteParams as V4DeleteParams,
    type V4ArchiveLabelsParams as V4ArchiveLabelsParams,
    type V4CreateDefaultParams as V4CreateDefaultParams,
  };
}

export { type MultiAssociatedObjectWithLabelsCursorURLPage };
