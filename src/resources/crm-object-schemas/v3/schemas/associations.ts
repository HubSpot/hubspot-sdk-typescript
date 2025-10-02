// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Associations extends APIResource {
  /**
   * Create an association
   */
  create(
    objectType: string,
    body: AssociationCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAssociationDefinition> {
    return this._client.post(path`/crm-object-schemas/v3/schemas/${objectType}/associations`, {
      body,
      ...options,
    });
  }

  /**
   * Remove an association
   */
  delete(
    associationIdentifier: string,
    params: AssociationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(
      path`/crm-object-schemas/v3/schemas/${objectType}/associations/${associationIdentifier}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface CRMAssociationDefinition {
  id: string;

  fromObjectTypeId: string;

  toObjectTypeId: string;

  createdAt?: string;

  name?: string;

  updatedAt?: string;
}

export interface AssociationCreateParams {
  fromObjectTypeId: string;

  toObjectTypeId: string;

  name?: string;
}

export interface AssociationDeleteParams {
  objectType: string;
}

export declare namespace Associations {
  export {
    type CRMAssociationDefinition as CRMAssociationDefinition,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationDeleteParams as AssociationDeleteParams,
  };
}
