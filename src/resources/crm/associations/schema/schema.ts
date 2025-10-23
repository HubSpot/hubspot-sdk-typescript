// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as V4API from './v4/v4';
import {
  BatchInputPublicAssociationDefinitionConfigurationCreateRequest,
  BatchInputPublicAssociationDefinitionConfigurationUpdateRequest,
  BatchInputPublicAssociationSpec,
  BatchResponsePublicAssociationDefinitionConfigurationUpdateResult,
  BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors,
  BatchResponsePublicAssociationDefinitionUserConfiguration,
  BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors,
  CollectionResponseAssociationSpecWithLabelNoPaging,
  CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging,
  PublicAssociationDefinitionConfigurationCreateRequest,
  PublicAssociationDefinitionConfigurationUpdateRequest,
  PublicAssociationDefinitionConfigurationUpdateResult,
  PublicAssociationDefinitionCreateRequest,
  PublicAssociationDefinitionUpdateRequest,
  PublicAssociationDefinitionUserConfiguration,
  PublicAssociationSpec,
  V4,
} from './v4/v4';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Schema extends APIResource {
  v4: V4API.V4 = new V4API.V4(this._client);

  /**
   * List all the valid association types available between two object types
   *
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

Schema.V4 = V4;

export declare namespace Schema {
  export {
    type CollectionResponsePublicAssociationDefinitionNoPaging as CollectionResponsePublicAssociationDefinitionNoPaging,
    type PublicAssociationDefinition as PublicAssociationDefinition,
    type SchemaListParams as SchemaListParams,
  };

  export {
    V4 as V4,
    type BatchInputPublicAssociationDefinitionConfigurationCreateRequest as BatchInputPublicAssociationDefinitionConfigurationCreateRequest,
    type BatchInputPublicAssociationDefinitionConfigurationUpdateRequest as BatchInputPublicAssociationDefinitionConfigurationUpdateRequest,
    type BatchInputPublicAssociationSpec as BatchInputPublicAssociationSpec,
    type BatchResponsePublicAssociationDefinitionConfigurationUpdateResult as BatchResponsePublicAssociationDefinitionConfigurationUpdateResult,
    type BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors as BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors,
    type BatchResponsePublicAssociationDefinitionUserConfiguration as BatchResponsePublicAssociationDefinitionUserConfiguration,
    type BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors as BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors,
    type CollectionResponseAssociationSpecWithLabelNoPaging as CollectionResponseAssociationSpecWithLabelNoPaging,
    type CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging as CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging,
    type PublicAssociationDefinitionConfigurationCreateRequest as PublicAssociationDefinitionConfigurationCreateRequest,
    type PublicAssociationDefinitionConfigurationUpdateRequest as PublicAssociationDefinitionConfigurationUpdateRequest,
    type PublicAssociationDefinitionConfigurationUpdateResult as PublicAssociationDefinitionConfigurationUpdateResult,
    type PublicAssociationDefinitionCreateRequest as PublicAssociationDefinitionCreateRequest,
    type PublicAssociationDefinitionUpdateRequest as PublicAssociationDefinitionUpdateRequest,
    type PublicAssociationDefinitionUserConfiguration as PublicAssociationDefinitionUserConfiguration,
    type PublicAssociationSpec as PublicAssociationSpec,
  };
}
