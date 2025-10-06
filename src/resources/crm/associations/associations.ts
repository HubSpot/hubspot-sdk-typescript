// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../crm';
import * as EmailsAPI from '../../marketing/emails';
import * as V4API from './v4';
import {
  AssociationSpec1,
  AssociationSpecWithLabel1,
  BatchInputPublicAssociationMultiArchive,
  BatchInputPublicAssociationMultiPost,
  BatchInputPublicDefaultAssociationMultiPost,
  BatchInputPublicFetchAssociationsBatchRequest,
  BatchResponseLabelsBetweenObjectPair,
  BatchResponsePublicAssociationMultiWithLabel,
  BatchResponseVoid,
  DateTime,
  NextPage1,
  PreviousPage1,
  PublicAssociationMultiArchive,
  PublicAssociationMultiPost,
  PublicAssociationMultiWithLabel,
  PublicDefaultAssociationMultiPost,
  PublicFetchAssociationsBatchRequest,
  ReportCreationResponse,
  StandardError1,
  V4,
  V4ArchiveLabelsParams,
  V4CreateDefaultParams,
  V4CreateParams,
  V4DeleteParams,
  V4ListParams,
} from './v4';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Associations extends APIResource {
  v4: V4API.V4 = new V4API.V4(this._client);

  /**
   * Create a batch of associations
   */
  create(
    toObjectType: string,
    params: AssociationCreateParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponsePublicAssociation> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Archive a batch of associations
   */
  delete(toObjectType: string, params: AssociationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/archive`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a batch of associations
   */
  read(
    toObjectType: string,
    params: AssociationReadParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponsePublicAssociationMulti> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/read`, {
      body,
      ...options,
    });
  }
}

export interface BatchInputPublicAssociation {
  inputs: Array<PublicAssociation>;
}

export interface BatchInputPublicObjectID {
  inputs: Array<CRMAPI.PublicObjectID>;
}

export interface BatchResponsePublicAssociation {
  completedAt: string;

  results: Array<PublicAssociation>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponsePublicAssociationMulti {
  completedAt: string;

  results: Array<PublicAssociationMulti>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface PublicAssociation {
  from: CRMAPI.PublicObjectID;

  to: CRMAPI.PublicObjectID;

  type: string;
}

export interface PublicAssociationMulti {
  from: CRMAPI.PublicObjectID;

  to: Array<CRMAPI.AssociatedID>;

  paging?: EmailsAPI.Paging;
}

export interface AssociationCreateParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<PublicAssociation>;
}

export interface AssociationDeleteParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<PublicAssociation>;
}

export interface AssociationReadParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<CRMAPI.PublicObjectID>;
}

Associations.V4 = V4;

export declare namespace Associations {
  export {
    type BatchInputPublicAssociation as BatchInputPublicAssociation,
    type BatchInputPublicObjectID as BatchInputPublicObjectID,
    type BatchResponsePublicAssociation as BatchResponsePublicAssociation,
    type BatchResponsePublicAssociationMulti as BatchResponsePublicAssociationMulti,
    type PublicAssociation as PublicAssociation,
    type PublicAssociationMulti as PublicAssociationMulti,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationReadParams as AssociationReadParams,
  };

  export {
    V4 as V4,
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
