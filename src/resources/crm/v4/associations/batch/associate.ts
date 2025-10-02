// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as BatchAPI from '../../../v3/associations/batch';
import * as AssociationsAPI from '../../objects/associations';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Associate extends APIResource {
  /**
   * Create Default Associations
   */
  createDefault(
    toObjectType: string,
    params: AssociateCreateDefaultParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsAPI.BatchResponsePublicDefaultAssociation> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/associate/default`,
      { body, ...options },
    );
  }
}

export interface AssociateCreateDefaultParams {
  /**
   * Path param:
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<AssociateCreateDefaultParams.Input>;
}

export namespace AssociateCreateDefaultParams {
  export interface Input {
    from: BatchAPI.CRMPublicObjectID;

    to: BatchAPI.CRMPublicObjectID;
  }
}

export declare namespace Associate {
  export { type AssociateCreateDefaultParams as AssociateCreateDefaultParams };
}
