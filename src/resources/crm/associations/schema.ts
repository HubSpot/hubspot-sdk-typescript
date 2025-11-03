// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Schema extends APIResource {
  /**
   * @example
   * ```ts
   * const collectionResponsePublicAssociationDefinitionNoPaging =
   *   await client.crm.associations.schema.list(
   *     'toObjectType',
   *     { fromObjectType: 'fromObjectType' },
   *   );
   * ```
   */
  list(
    toObjectType: string,
    params: SchemaListParams,
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicAssociationDefinitionNoPaging> {
    const { fromObjectType } = params;
    return this._client.get(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/types`, options);
  }
}

export interface CollectionResponsePublicAssociationDefinitionNoPaging {
  results: Array<PublicAssociationDefinition>;
}

export interface PublicAssociationDefinition {
  id: string;

  name: string;
}

export interface SchemaListParams {
  fromObjectType: string;
}

export declare namespace Schema {
  export {
    type CollectionResponsePublicAssociationDefinitionNoPaging as CollectionResponsePublicAssociationDefinitionNoPaging,
    type PublicAssociationDefinition as PublicAssociationDefinition,
    type SchemaListParams as SchemaListParams,
  };
}
