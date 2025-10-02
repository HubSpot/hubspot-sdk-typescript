// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as BatchAPI from '../../../v3/associations/batch';
import * as BatchBatchAPI from './batch';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Labels extends APIResource {
  /**
   * Delete Specific Labels
   */
  delete(
    toObjectType: string,
    params: LabelDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BatchBatchAPI.BatchResponseVoid> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/labels/archive`,
      { body, ...options },
    );
  }
}

export interface LabelDeleteParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<LabelDeleteParams.Input>;
}

export namespace LabelDeleteParams {
  export interface Input {
    from: BatchAPI.CRMPublicObjectID;

    to: BatchAPI.CRMPublicObjectID;

    types: Array<BatchBatchAPI.AssociationSpec>;
  }
}

export declare namespace Labels {
  export { type LabelDeleteParams as LabelDeleteParams };
}
