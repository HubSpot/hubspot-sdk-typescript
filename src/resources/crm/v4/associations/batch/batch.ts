// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as BatchBatchAPI from './batch';
import * as DailyAPI from '../../../../account-info/v3/api-usage/daily';
import * as BatchAPI from '../../../v3/associations/batch';
import * as AssociationsAPI from '../../objects/associations';
import * as AssociateAPI from './associate';
import { Associate, AssociateCreateDefaultParams } from './associate';
import * as LabelsAPI from './labels';
import { LabelDeleteParams, Labels } from './labels';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Batch extends APIResource {
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);
  associate: AssociateAPI.Associate = new AssociateAPI.Associate(this._client);

  /**
   * Create
   */
  create(
    toObjectType: string,
    params: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<BatchCreateResponse> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * Delete
   */
  delete(
    toObjectType: string,
    params: BatchDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponseVoid> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/archive`, {
      body,
      ...options,
    });
  }

  /**
   * Read
   */
  read(
    toObjectType: string,
    params: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<BatchReadResponse> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/read`, {
      body,
      ...options,
    });
  }
}

export interface AssociationSpec {
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  associationTypeId: number;
}

export interface BatchInputPublicAssociationMultiPost {
  inputs: Array<BatchInputPublicAssociationMultiPost.Input>;
}

export namespace BatchInputPublicAssociationMultiPost {
  export interface Input {
    from: BatchAPI.CRMPublicObjectID;

    to: BatchAPI.CRMPublicObjectID;

    types: Array<BatchBatchAPI.AssociationSpec>;
  }
}

export interface BatchResponseVoid {
  completedAt: string;

  results: Array<unknown>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchCreateResponse {
  completedAt: string;

  results: Array<AssociationsAPI.LabelsBetweenObjectPair>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchReadResponse {
  completedAt: string;

  results: Array<BatchReadResponse.Result>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export namespace BatchReadResponse {
  export interface Result {
    from: BatchAPI.CRMPublicObjectID;

    to: Array<AssociationsAPI.MultiAssociatedObjectWithLabel>;

    paging?: DailyAPI.Paging;
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
  inputs: Array<BatchCreateParams.Input>;
}

export namespace BatchCreateParams {
  export interface Input {
    from: BatchAPI.CRMPublicObjectID;

    to: BatchAPI.CRMPublicObjectID;

    types: Array<BatchBatchAPI.AssociationSpec>;
  }
}

export interface BatchDeleteParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<BatchDeleteParams.Input>;
}

export namespace BatchDeleteParams {
  export interface Input {
    from: BatchAPI.CRMPublicObjectID;

    to: Array<BatchAPI.CRMPublicObjectID>;
  }
}

export interface BatchReadParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<BatchReadParams.Input>;
}

export namespace BatchReadParams {
  export interface Input {
    id: string;

    after?: string;
  }
}

Batch.Labels = Labels;
Batch.Associate = Associate;

export declare namespace Batch {
  export {
    type AssociationSpec as AssociationSpec,
    type BatchInputPublicAssociationMultiPost as BatchInputPublicAssociationMultiPost,
    type BatchResponseVoid as BatchResponseVoid,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchReadResponse as BatchReadResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchReadParams as BatchReadParams,
  };

  export { Labels as Labels, type LabelDeleteParams as LabelDeleteParams };

  export { Associate as Associate, type AssociateCreateDefaultParams as AssociateCreateDefaultParams };
}
