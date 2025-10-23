// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ListsAPI from './lists';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Mapping extends APIResource {
  /**
   * This API allows translation of a batch of legacy list id's to list id's. This
   * allows for a maximum of 10,000 id's. This is a temporary API allowed for mapping
   * old id's to new id's and will expire on May 30th, 2025.
   *
   * @example
   * ```ts
   * const publicBatchMigrationMapping =
   *   await client.crm.lists.mapping.batchCreateIDMapping({
   *     body: ['string'],
   *   });
   * ```
   */
  batchCreateIDMapping(
    params: MappingBatchCreateIDMappingParams,
    options?: RequestOptions,
  ): APIPromise<ListsAPI.PublicBatchMigrationMapping> {
    const { body } = params;
    return this._client.post('/crm/v3/lists/idmapping', { body: body, ...options });
  }

  /**
   * This API allows translation of legacy list id to list id. This is a temporary
   * API allowed for mapping old id's to new id's and will expire on May 30th, 2025.
   *
   * @example
   * ```ts
   * const publicMigrationMapping =
   *   await client.crm.lists.mapping.getIDMapping();
   * ```
   */
  getIDMapping(
    query: MappingGetIDMappingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListsAPI.PublicMigrationMapping> {
    return this._client.get('/crm/v3/lists/idmapping', { query, ...options });
  }
}

export interface MappingBatchCreateIDMappingParams {
  body: Array<string>;
}

export interface MappingGetIDMappingParams {
  /**
   * The legacy list id from lists v1 API.
   */
  legacyListId?: string;
}

export declare namespace Mapping {
  export {
    type MappingBatchCreateIDMappingParams as MappingBatchCreateIDMappingParams,
    type MappingGetIDMappingParams as MappingGetIDMappingParams,
  };
}
