// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CRMAPI from '../crm';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Schemas extends APIResource {
  /**
   * Create a new schema
   */
  create(body: SchemaCreateParams, options?: RequestOptions): APIPromise<CRMAPI.CRMObjectSchema> {
    return this._client.post('/crm-object-schemas/v3/schemas', { body, ...options });
  }

  /**
   * Update a schema
   */
  update(
    objectType: string,
    body: SchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CRMObjectTypeDefinition> {
    return this._client.patch(path`/crm-object-schemas/v3/schemas/${objectType}`, { body, ...options });
  }

  /**
   * Get all schemas
   */
  list(
    query: SchemaListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CRMCollectionResponseObjectSchemaNoPaging> {
    return this._client.get('/crm-object-schemas/v3/schemas', { query, ...options });
  }

  /**
   * Delete a schema
   */
  delete(
    objectType: string,
    params: SchemaDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archived } = params ?? {};
    return this._client.delete(path`/crm-object-schemas/v3/schemas/${objectType}`, {
      query: { archived },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove an association
   */
  archiveAssociation(
    associationIdentifier: string,
    params: SchemaArchiveAssociationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { objectType } = params;
    return this._client.delete(
      path`/crm-object-schemas/v3/schemas/${objectType}/associations/${associationIdentifier}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Create an association
   */
  createAssociation(
    objectType: string,
    body: SchemaCreateAssociationParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CRMAssociationDefinition> {
    return this._client.post(path`/crm-object-schemas/v3/schemas/${objectType}/associations`, {
      body,
      ...options,
    });
  }

  /**
   * Get an existing schema
   */
  read(objectType: string, options?: RequestOptions): APIPromise<CRMAPI.CRMObjectSchema> {
    return this._client.get(path`/crm-object-schemas/v3/schemas/${objectType}`, options);
  }
}

export interface SchemaCreateParams {
  associatedObjects: Array<string>;

  labels: CRMAPI.CRMObjectTypeDefinitionLabels;

  name: string;

  properties: Array<CRMAPI.CRMObjectTypePropertyCreate>;

  requiredProperties: Array<string>;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface SchemaUpdateParams {
  clearDescription?: boolean;

  labels?: CRMAPI.CRMObjectTypeDefinitionLabels;

  primaryDisplayProperty?: string;

  requiredProperties?: Array<string>;

  restorable?: boolean;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface SchemaListParams {
  archived?: boolean;
}

export interface SchemaDeleteParams {
  archived?: boolean;
}

export interface SchemaArchiveAssociationParams {
  objectType: string;
}

export interface SchemaCreateAssociationParams {
  fromObjectTypeId: string;

  toObjectTypeId: string;

  name?: string;
}

export declare namespace Schemas {
  export {
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
    type SchemaArchiveAssociationParams as SchemaArchiveAssociationParams,
    type SchemaCreateAssociationParams as SchemaCreateAssociationParams,
  };
}
