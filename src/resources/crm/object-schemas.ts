// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CRMAPI from './crm';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ObjectSchemas extends APIResource {
  /**
   * Create a new schema
   */
  create(body: ObjectSchemaCreateParams, options?: RequestOptions): APIPromise<CRMAPI.CRMObjectSchema> {
    return this._client.post('/crm-object-schemas/v3/schemas', { body, ...options });
  }

  /**
   * Update a schema
   */
  update(
    objectType: string,
    body: ObjectSchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CRMObjectTypeDefinition> {
    return this._client.patch(path`/crm-object-schemas/v3/schemas/${objectType}`, { body, ...options });
  }

  /**
   * Get all schemas
   */
  list(
    query: ObjectSchemaListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CRMCollectionResponseObjectSchemaNoPaging> {
    return this._client.get('/crm-object-schemas/v3/schemas', { query, ...options });
  }

  /**
   * Delete a schema
   */
  delete(
    objectType: string,
    params: ObjectSchemaDeleteParams | null | undefined = {},
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
    params: ObjectSchemaArchiveAssociationParams,
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
    body: ObjectSchemaCreateAssociationParams,
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

export interface ObjectSchemaCreateParams {
  associatedObjects: Array<string>;

  labels: CRMAPI.CRMObjectTypeDefinitionLabels;

  name: string;

  properties: Array<CRMAPI.CRMObjectTypePropertyCreate>;

  requiredProperties: Array<string>;

  primaryDisplayProperty?: string;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface ObjectSchemaUpdateParams {
  clearDescription?: boolean;

  labels?: CRMAPI.CRMObjectTypeDefinitionLabels;

  primaryDisplayProperty?: string;

  requiredProperties?: Array<string>;

  restorable?: boolean;

  searchableProperties?: Array<string>;

  secondaryDisplayProperties?: Array<string>;
}

export interface ObjectSchemaListParams {
  archived?: boolean;
}

export interface ObjectSchemaDeleteParams {
  archived?: boolean;
}

export interface ObjectSchemaArchiveAssociationParams {
  objectType: string;
}

export interface ObjectSchemaCreateAssociationParams {
  fromObjectTypeId: string;

  toObjectTypeId: string;

  name?: string;
}

export declare namespace ObjectSchemas {
  export {
    type ObjectSchemaCreateParams as ObjectSchemaCreateParams,
    type ObjectSchemaUpdateParams as ObjectSchemaUpdateParams,
    type ObjectSchemaListParams as ObjectSchemaListParams,
    type ObjectSchemaDeleteParams as ObjectSchemaDeleteParams,
    type ObjectSchemaArchiveAssociationParams as ObjectSchemaArchiveAssociationParams,
    type ObjectSchemaCreateAssociationParams as ObjectSchemaCreateAssociationParams,
  };
}
