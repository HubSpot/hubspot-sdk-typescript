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
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.projects.associations.update(
   *     'associationType',
   *     {
   *       projectId: 'projectId',
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
    const { projectId, toObjectType, toObjectId } = params;
    return this._client.put(
      path`/crm/objects/v3/projects/${projectId}/associations/${toObjectType}/${toObjectId}/${associationType}`,
      options,
    );
  }

  /**
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const associatedID of client.crm.objects.projects.associations.list(
   *   'toObjectType',
   *   { projectId: 'projectId' },
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
    const { projectId, ...query } = params;
    return this._client.getAPIList(
      path`/crm/objects/v3/projects/${projectId}/associations/${toObjectType}`,
      Page<CrmAPI.AssociatedID>,
      { query, ...options },
    );
  }

  /**
   * @example
   * ```ts
   * await client.crm.objects.projects.associations.delete(
   *   'associationType',
   *   {
   *     projectId: 'projectId',
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
    const { projectId, toObjectType, toObjectId } = params;
    return this._client.delete(
      path`/crm/objects/v3/projects/${projectId}/associations/${toObjectType}/${toObjectId}/${associationType}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface AssociationUpdateParams {
  projectId: string;

  toObjectType: string;

  toObjectId: string;
}

export interface AssociationListParams extends PageParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Query param:
   */
  includeFA?: boolean;
}

export interface AssociationDeleteParams {
  projectId: string;

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
