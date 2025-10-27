// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CRMAPI from '../../crm';
import { AssociatedIDsPage } from '../../crm';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Associations extends APIResource {
  /**
   * Associate a partner client with another object
   *
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.partnerClients.associations.update(
   *     'associationType',
   *     {
   *       partnerClientId: 'partnerClientId',
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
  ): APIPromise<CRMAPI.SimplePublicObjectWithAssociations> {
    const { partnerClientId, toObjectType, toObjectId } = params;
    return this._client.put(
      path`/crm/v3/objects/partner_clients/${partnerClientId}/associations/${toObjectType}/${toObjectId}/${associationType}`,
      options,
    );
  }

  /**
   * List associations of a partner client by type
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const associatedID of client.crm.objects.partnerClients.associations.list(
   *   'toObjectType',
   *   { partnerClientId: 'partnerClientId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    toObjectType: string,
    params: AssociationListParams,
    options?: RequestOptions,
  ): PagePromise<AssociatedIDsPage, CRMAPI.AssociatedID> {
    const { partnerClientId, ...query } = params;
    return this._client.getAPIList(
      path`/crm/v3/objects/partner_clients/${partnerClientId}/associations/${toObjectType}`,
      Page<CRMAPI.AssociatedID>,
      { query, ...options },
    );
  }

  /**
   * Remove an association between two partner clients
   *
   * @example
   * ```ts
   * await client.crm.objects.partnerClients.associations.delete(
   *   'associationType',
   *   {
   *     partnerClientId: 'partnerClientId',
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
    const { partnerClientId, toObjectType, toObjectId } = params;
    return this._client.delete(
      path`/crm/v3/objects/partner_clients/${partnerClientId}/associations/${toObjectType}/${toObjectId}/${associationType}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface AssociationUpdateParams {
  partnerClientId: string;

  toObjectType: string;

  toObjectId: string;
}

export interface AssociationListParams extends PageParams {
  /**
   * Path param:
   */
  partnerClientId: string;

  /**
   * Query param:
   */
  includeFA?: boolean;
}

export interface AssociationDeleteParams {
  partnerClientId: string;

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
