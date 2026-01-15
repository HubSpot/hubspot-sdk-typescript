// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { AssociatedIDsPage } from '../../crm';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Associations extends APIResource {
  /**
   * Associate a partner service with another object
   *
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.partnerServices.associations.update(
   *     'associationType',
   *     {
   *       partnerServiceId: 'partnerServiceId',
   *       toObjectType: 'toObjectType',
   *       toObjectId: 'toObjectId',
   *     },
   *   );
   * ```
   */
  update(
    associationType: string,
    params: AssociationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObjectWithAssociations> {
    const { partnerServiceId, toObjectType, toObjectId } = params;
    return this._client.put(
      path`/crm/v3/objects/partner_services/${partnerServiceId}/associations/${toObjectType}/${toObjectId}/${associationType}`,
      options,
    );
  }

  /**
   * List associations of a partner service by type
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const associatedID of client.crm.objects.partnerServices.associations.list(
   *   'toObjectType',
   *   { partnerServiceId: 'partnerServiceId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    toObjectType: string,
    params: AssociationListParams,
    options?: RequestOptions,
  ): PagePromise<AssociatedIDsPage, CrmAPI.AssociatedID> {
    const { partnerServiceId, ...query } = params;
    return this._client.getAPIList(
      path`/crm/v3/objects/partner_services/${partnerServiceId}/associations/${toObjectType}`,
      Page<CrmAPI.AssociatedID>,
      { query, ...options },
    );
  }

  /**
   * Remove an association between two partner services
   *
   * @example
   * ```ts
   * await client.crm.objects.partnerServices.associations.delete(
   *   'associationType',
   *   {
   *     partnerServiceId: 'partnerServiceId',
   *     toObjectType: 'toObjectType',
   *     toObjectId: 'toObjectId',
   *   },
   * );
   * ```
   */
  delete(
    associationType: string,
    params: AssociationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { partnerServiceId, toObjectType, toObjectId } = params;
    return this._client.delete(
      path`/crm/v3/objects/partner_services/${partnerServiceId}/associations/${toObjectType}/${toObjectId}/${associationType}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface AssociationUpdateParams {
  partnerServiceId: string;

  toObjectType: string;

  toObjectId: string;
}

export interface AssociationListParams extends PageParams {
  /**
   * Path param
   */
  partnerServiceId: string;

  /**
   * Query param
   */
  includeFA?: boolean;
}

export interface AssociationDeleteParams {
  partnerServiceId: string;

  toObjectType: string;

  toObjectId: string;
}

export declare namespace Associations {
  export {
    type AssociationUpdateParams as AssociationUpdateParams,
    type AssociationListParams as AssociationListParams,
    type AssociationDeleteParams as AssociationDeleteParams,
  };
}

export { type AssociatedIDsPage };
