// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CrmAPI from '../crm';
import * as AssociationsSchemaAPI from './associations-schema';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Limits extends APIResource {
  /**
   * Fetch all limits for CRM associations, which include details about cardinality
   * limits (i.e., one-to-many vs one-to-one).
   */
  list(
    options?: RequestOptions,
  ): APIPromise<AssociationsSchemaAPI.CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
    return this._client.get('/crm/associations/2026-03/definitions/configurations/all', options);
  }

  /**
   * Batch delete limits defined for associations between two specified CRM object
   * types.
   */
  batchDelete(
    toObjectType: string,
    params: LimitBatchDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.BatchResponseVoid> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/2026-03/definitions/configurations/${fromObjectType}/${toObjectType}/batch/purge`,
      { body, ...options },
    );
  }

  /**
   * Update multiple association configurations between two specified CRM object
   * types in a single batch operation. This defines details about cardinality limits
   * (i.e., one-to-many vs one-to-one).
   */
  batchUpdate(
    toObjectType: string,
    params: LimitBatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsSchemaAPI.BatchResponsePublicAssociationDefinitionConfigurationUpdateResult> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/2026-03/definitions/configurations/${fromObjectType}/${toObjectType}/batch/update`,
      { body, ...options },
    );
  }

  /**
   * Retrieve the cardinality limits for associations between two specified CRM
   * object types (i.e., one-to-many vs one-to-one).
   */
  getByObjectTypes(
    toObjectType: string,
    params: LimitGetByObjectTypesParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsSchemaAPI.CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
    const { fromObjectType } = params;
    return this._client.get(
      path`/crm/associations/2026-03/definitions/configurations/${fromObjectType}/${toObjectType}`,
      options,
    );
  }
}

export interface LimitBatchDeleteParams {
  /**
   * Path param: The type of the source object in the association.
   */
  fromObjectType: string;

  /**
   * Body param
   */
  inputs: Array<AssociationsSchemaAPI.PublicAssociationSpec>;
}

export interface LimitBatchUpdateParams {
  /**
   * Path param: The type of the source object in the association.
   */
  fromObjectType: string;

  /**
   * Body param
   */
  inputs: Array<AssociationsSchemaAPI.PublicAssociationDefinitionConfigurationUpdateRequest>;
}

export interface LimitGetByObjectTypesParams {
  /**
   * The type of the source object in the association.
   */
  fromObjectType: string;
}

export declare namespace Limits {
  export {
    type LimitBatchDeleteParams as LimitBatchDeleteParams,
    type LimitBatchUpdateParams as LimitBatchUpdateParams,
    type LimitGetByObjectTypesParams as LimitGetByObjectTypesParams,
  };
}
