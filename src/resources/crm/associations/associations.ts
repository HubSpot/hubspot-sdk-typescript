// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../crm';
import * as EmailsAPI from '../../marketing/emails';
import * as V4API from './v4';
import {
  CRMAssociationsV4AssociationSpec1,
  CRMAssociationsV4AssociationSpecWithLabel1,
  CRMAssociationsV4BatchInputPublicAssociationMultiArchive,
  CRMAssociationsV4BatchInputPublicAssociationMultiPost,
  CRMAssociationsV4BatchInputPublicDefaultAssociationMultiPost,
  CRMAssociationsV4BatchInputPublicFetchAssociationsBatchRequest,
  CRMAssociationsV4BatchResponseLabelsBetweenObjectPair,
  CRMAssociationsV4BatchResponsePublicAssociationMultiWithLabel,
  CRMAssociationsV4BatchResponseVoid,
  CRMAssociationsV4DateTime,
  CRMAssociationsV4NextPage1,
  CRMAssociationsV4PreviousPage1,
  CRMAssociationsV4PublicAssociationMultiArchive,
  CRMAssociationsV4PublicAssociationMultiPost,
  CRMAssociationsV4PublicAssociationMultiWithLabel,
  CRMAssociationsV4PublicDefaultAssociationMultiPost,
  CRMAssociationsV4PublicFetchAssociationsBatchRequest,
  CRMAssociationsV4ReportCreationResponse,
  CRMAssociationsV4StandardError1,
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
  ): APIPromise<CRMAssociationsBatchResponsePublicAssociation> {
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
  ): APIPromise<CRMAssociationsBatchResponsePublicAssociationMulti> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/read`, {
      body,
      ...options,
    });
  }
}

export interface CRMAssociationsBatchInputPublicAssociation {
  inputs: Array<CRMAssociationsPublicAssociation>;
}

export interface CRMAssociationsBatchInputPublicObjectID {
  inputs: Array<CRMAPI.CRMPublicObjectID>;
}

export interface CRMAssociationsBatchResponsePublicAssociation {
  completedAt: string;

  results: Array<CRMAssociationsPublicAssociation>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMAssociationsBatchResponsePublicAssociationMulti {
  completedAt: string;

  results: Array<CRMAssociationsPublicAssociationMulti>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMAssociationsPublicAssociation {
  from: CRMAPI.CRMPublicObjectID;

  to: CRMAPI.CRMPublicObjectID;

  type: string;
}

export interface CRMAssociationsPublicAssociationMulti {
  from: CRMAPI.CRMPublicObjectID;

  to: Array<CRMAPI.CRMAssociatedID>;

  paging?: EmailsAPI.MarketingEmailsPaging;
}

export interface AssociationCreateParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<CRMAssociationsPublicAssociation>;
}

export interface AssociationDeleteParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<CRMAssociationsPublicAssociation>;
}

export interface AssociationReadParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<CRMAPI.CRMPublicObjectID>;
}

Associations.V4 = V4;

export declare namespace Associations {
  export {
    type CRMAssociationsBatchInputPublicAssociation as CRMAssociationsBatchInputPublicAssociation,
    type CRMAssociationsBatchInputPublicObjectID as CRMAssociationsBatchInputPublicObjectID,
    type CRMAssociationsBatchResponsePublicAssociation as CRMAssociationsBatchResponsePublicAssociation,
    type CRMAssociationsBatchResponsePublicAssociationMulti as CRMAssociationsBatchResponsePublicAssociationMulti,
    type CRMAssociationsPublicAssociation as CRMAssociationsPublicAssociation,
    type CRMAssociationsPublicAssociationMulti as CRMAssociationsPublicAssociationMulti,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationReadParams as AssociationReadParams,
  };

  export {
    V4 as V4,
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
