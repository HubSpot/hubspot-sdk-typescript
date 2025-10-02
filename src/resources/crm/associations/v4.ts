// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../crm';
import { APIPromise } from '../../../core/api-promise';
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
  ): APIPromise<CRMAPI.CRMCreatedResponseLabelsBetweenObjectPair> {
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
  ): APIPromise<CRMAPI.CRMCollectionResponseMultiAssociatedObjectWithLabel> {
    const { objectType, objectId, ...query } = params;
    return this._client.get(path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}`, {
      query,
      ...options,
    });
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
  ): APIPromise<CRMAssociationsV4BatchResponseVoid> {
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
  ): APIPromise<CRMAPI.CRMBatchResponsePublicDefaultAssociation> {
    const { fromObjectType, fromObjectId, toObjectType } = params;
    return this._client.put(
      path`/crm/v4/objects/${fromObjectType}/${fromObjectId}/associations/default/${toObjectType}/${toObjectID}`,
      options,
    );
  }

  /**
   * Report
   */
  request(userID: number, options?: RequestOptions): APIPromise<CRMAssociationsV4ReportCreationResponse> {
    return this._client.post(path`/crm/v4/associations/usage/high-usage-report/${userID}`, options);
  }
}

export interface CRMAssociationsV4AssociationSpec1 {
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  associationTypeId: number;
}

export interface CRMAssociationsV4AssociationSpecWithLabel1 {
  category: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  typeId: number;

  label?: string;
}

export interface CRMAssociationsV4BatchInputPublicAssociationMultiArchive {
  inputs: Array<CRMAssociationsV4PublicAssociationMultiArchive>;
}

export interface CRMAssociationsV4BatchInputPublicAssociationMultiPost {
  inputs: Array<CRMAssociationsV4PublicAssociationMultiPost>;
}

export interface CRMAssociationsV4BatchInputPublicDefaultAssociationMultiPost {
  inputs: Array<CRMAssociationsV4PublicDefaultAssociationMultiPost>;
}

export interface CRMAssociationsV4BatchInputPublicFetchAssociationsBatchRequest {
  inputs: Array<CRMAssociationsV4PublicFetchAssociationsBatchRequest>;
}

export interface CRMAssociationsV4BatchResponseLabelsBetweenObjectPair {
  completedAt: string;

  results: Array<CRMAPI.CRMLabelsBetweenObjectPair>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMAssociationsV4BatchResponsePublicAssociationMultiWithLabel {
  completedAt: string;

  results: Array<CRMAssociationsV4PublicAssociationMultiWithLabel>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMAssociationsV4BatchResponseVoid {
  completedAt: string;

  results: Array<unknown>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMAssociationsV4DateTime {
  dateOnly: boolean;

  timeZoneShift: number;

  value: number;
}

export interface CRMAssociationsV4NextPage1 {
  after: string;

  link?: string;
}

export interface CRMAssociationsV4PreviousPage1 {
  before: string;

  link?: string;
}

export interface CRMAssociationsV4PublicAssociationMultiArchive {
  from: CRMAPI.CRMPublicObjectID;

  to: Array<CRMAPI.CRMPublicObjectID>;
}

export interface CRMAssociationsV4PublicAssociationMultiPost {
  from: CRMAPI.CRMPublicObjectID;

  to: CRMAPI.CRMPublicObjectID;

  types: Array<CRMAPI.CRMAssociationSpec>;
}

export interface CRMAssociationsV4PublicAssociationMultiWithLabel {
  from: CRMAPI.CRMPublicObjectID;

  to: Array<CRMAPI.CRMMultiAssociatedObjectWithLabel>;

  paging?: Shared.Paging;
}

export interface CRMAssociationsV4PublicDefaultAssociationMultiPost {
  from: CRMAPI.CRMPublicObjectID;

  to: CRMAPI.CRMPublicObjectID;
}

export interface CRMAssociationsV4PublicFetchAssociationsBatchRequest {
  id: string;

  after?: string;
}

export interface CRMAssociationsV4ReportCreationResponse {
  enqueueTime: CRMAssociationsV4DateTime;

  userEmail: string;

  userId: number;
}

export interface CRMAssociationsV4StandardError1 {
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
  body: Array<CRMAssociationsV4AssociationSpec1>;
}

export interface V4ListParams {
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

  /**
   * Query param:
   */
  limit?: number;
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
  inputs: Array<CRMAssociationsV4PublicAssociationMultiPost>;
}

export interface V4CreateDefaultParams {
  fromObjectType: string;

  fromObjectId: string;

  toObjectType: string;
}

export declare namespace V4 {
  export {
    type CRMAssociationsV4AssociationSpec1 as CRMAssociationsV4AssociationSpec1,
    type CRMAssociationsV4AssociationSpecWithLabel1 as CRMAssociationsV4AssociationSpecWithLabel1,
    type CRMAssociationsV4BatchInputPublicAssociationMultiArchive as CRMAssociationsV4BatchInputPublicAssociationMultiArchive,
    type CRMAssociationsV4BatchInputPublicAssociationMultiPost as CRMAssociationsV4BatchInputPublicAssociationMultiPost,
    type CRMAssociationsV4BatchInputPublicDefaultAssociationMultiPost as CRMAssociationsV4BatchInputPublicDefaultAssociationMultiPost,
    type CRMAssociationsV4BatchInputPublicFetchAssociationsBatchRequest as CRMAssociationsV4BatchInputPublicFetchAssociationsBatchRequest,
    type CRMAssociationsV4BatchResponseLabelsBetweenObjectPair as CRMAssociationsV4BatchResponseLabelsBetweenObjectPair,
    type CRMAssociationsV4BatchResponsePublicAssociationMultiWithLabel as CRMAssociationsV4BatchResponsePublicAssociationMultiWithLabel,
    type CRMAssociationsV4BatchResponseVoid as CRMAssociationsV4BatchResponseVoid,
    type CRMAssociationsV4DateTime as CRMAssociationsV4DateTime,
    type CRMAssociationsV4NextPage1 as CRMAssociationsV4NextPage1,
    type CRMAssociationsV4PreviousPage1 as CRMAssociationsV4PreviousPage1,
    type CRMAssociationsV4PublicAssociationMultiArchive as CRMAssociationsV4PublicAssociationMultiArchive,
    type CRMAssociationsV4PublicAssociationMultiPost as CRMAssociationsV4PublicAssociationMultiPost,
    type CRMAssociationsV4PublicAssociationMultiWithLabel as CRMAssociationsV4PublicAssociationMultiWithLabel,
    type CRMAssociationsV4PublicDefaultAssociationMultiPost as CRMAssociationsV4PublicDefaultAssociationMultiPost,
    type CRMAssociationsV4PublicFetchAssociationsBatchRequest as CRMAssociationsV4PublicFetchAssociationsBatchRequest,
    type CRMAssociationsV4ReportCreationResponse as CRMAssociationsV4ReportCreationResponse,
    type CRMAssociationsV4StandardError1 as CRMAssociationsV4StandardError1,
    type V4CreateParams as V4CreateParams,
    type V4ListParams as V4ListParams,
    type V4DeleteParams as V4DeleteParams,
    type V4ArchiveLabelsParams as V4ArchiveLabelsParams,
    type V4CreateDefaultParams as V4CreateDefaultParams,
  };
}
