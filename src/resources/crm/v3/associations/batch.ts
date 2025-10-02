// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchAPI from './batch';
import * as DailyAPI from '../../../account-info/v3/api-usage/daily';
import * as DraftAPI from '../../../cms/v3/hubdb/tables/draft';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Create a batch of associations
   */
  create(
    toObjectType: string,
    params: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<BatchCreateResponse> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Archive a batch of associations
   */
  archive(toObjectType: string, params: BatchArchiveParams, options?: RequestOptions): APIPromise<void> {
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
    params: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<BatchReadResponse> {
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

export interface CRMAssociationsPublicAssociation {
  from: CRMPublicObjectID;

  to: CRMPublicObjectID;

  type: string;
}

export interface CRMPublicObjectID {
  id: string;
}

export interface StandardError {
  category: string;

  context: { [key: string]: Array<string> };

  errors: Array<DraftAPI.ErrorDetail>;

  links: { [key: string]: string };

  message: string;

  status: string;

  id?: string;

  subCategory?: unknown;
}

export interface BatchCreateResponse {
  completedAt: string;

  results: Array<CRMAssociationsPublicAssociation>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchReadResponse {
  completedAt: string;

  results: Array<BatchReadResponse.Result>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export namespace BatchReadResponse {
  export interface Result {
    from: BatchAPI.CRMPublicObjectID;

    to: Array<Result.To>;

    paging?: DailyAPI.Paging;
  }

  export namespace Result {
    export interface To {
      id: string;

      type: string;
    }
  }
}

export interface BatchCreateParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<CRMAssociationsPublicAssociation>;
}

export interface BatchArchiveParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<CRMAssociationsPublicAssociation>;
}

export interface BatchReadParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<CRMPublicObjectID>;
}

export declare namespace Batch {
  export {
    type CRMAssociationsBatchInputPublicAssociation as CRMAssociationsBatchInputPublicAssociation,
    type CRMAssociationsPublicAssociation as CRMAssociationsPublicAssociation,
    type CRMPublicObjectID as CRMPublicObjectID,
    type StandardError as StandardError,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchReadResponse as BatchReadResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchReadParams as BatchReadParams,
  };
}
