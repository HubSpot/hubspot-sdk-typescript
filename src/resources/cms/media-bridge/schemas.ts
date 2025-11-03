// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as EventDefinitionsAPI from '../../events/event-definitions';
import * as ObjectsSchemasAPI from '../../crm/objects/schemas';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Schemas extends APIResource {
  /**
   * Update the schema for an existing object type
   *
   * @example
   * ```ts
   * const objectsSchemasObjectTypeDefinition =
   *   await client.cms.mediaBridge.schemas.update(
   *     'objectType',
   *     { appId: 'appId' },
   *   );
   * ```
   */
  update(
    objectType: string,
    params: SchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsSchemasAPI.ObjectsSchemasObjectTypeDefinition> {
    const { appId, ...body } = params;
    return this._client.patch(path`/media-bridge/v1/${appId}/schemas/${objectType}`, { body, ...options });
  }

  /**
   * Get the schemas for all object types.
   *
   * @example
   * ```ts
   * const collectionResponseObjectSchemaNoPaging =
   *   await client.cms.mediaBridge.schemas.list('appId');
   * ```
   */
  list(appID: string, options?: RequestOptions): APIPromise<Shared.CollectionResponseObjectSchemaNoPaging> {
    return this._client.get(path`/media-bridge/v1/${appID}/schemas`, options);
  }

  /**
   * Create a new association definition for the specified object type.
   *
   * @example
   * ```ts
   * const associationDefinition =
   *   await client.cms.mediaBridge.schemas.createAssociation(
   *     'objectType',
   *     {
   *       appId: 'appId',
   *       fromObjectTypeId: 'fromObjectTypeId',
   *       toObjectTypeId: 'toObjectTypeId',
   *     },
   *   );
   * ```
   */
  createAssociation(
    objectType: string,
    params: SchemaCreateAssociationParams,
    options?: RequestOptions,
  ): APIPromise<EventDefinitionsAPI.AssociationDefinition> {
    const { appId, ...body } = params;
    return this._client.post(path`/media-bridge/v1/${appId}/schemas/${objectType}/associations`, {
      body,
      ...options,
    });
  }

  /**
   * Delete an existing association definition for an object type.
   *
   * @example
   * ```ts
   * await client.cms.mediaBridge.schemas.deleteAssociation(
   *   'associationId',
   *   { appId: 'appId', objectType: 'objectType' },
   * );
   * ```
   */
  deleteAssociation(
    associationID: string,
    params: SchemaDeleteAssociationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { appId, objectType } = params;
    return this._client.delete(
      path`/media-bridge/v1/${appId}/schemas/${objectType}/associations/${associationID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Get the schema for a specified object type.
   *
   * @example
   * ```ts
   * const objectSchema =
   *   await client.cms.mediaBridge.schemas.get('objectType', {
   *     appId: 'appId',
   *   });
   * ```
   */
  get(
    objectType: string,
    params: SchemaGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsSchemasAPI.ObjectSchema> {
    const { appId } = params;
    return this._client.get(path`/media-bridge/v1/${appId}/schemas/${objectType}`, options);
  }
}

export interface SchemaUpdateParams {
  /**
   * Path param:
   */
  appId: string;

  /**
   * Body param:
   */
  clearDescription?: boolean;

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param:
   */
  labels?: Shared.ObjectTypeDefinitionLabels;

  /**
   * Body param: The name of the primary property for this object. This will be
   * displayed as primary on the HubSpot record page for this object type.
   */
  primaryDisplayProperty?: string;

  /**
   * Body param: The names of properties that should be **required** when creating an
   * object of this type.
   */
  requiredProperties?: Array<string>;

  /**
   * Body param:
   */
  restorable?: boolean;

  /**
   * Body param: Names of properties that will be indexed for this object type in by
   * HubSpot's product search.
   */
  searchableProperties?: Array<string>;

  /**
   * Body param: The names of secondary properties for this object. These will be
   * displayed as secondary on the HubSpot record page for this object type.
   */
  secondaryDisplayProperties?: Array<string>;
}

export interface SchemaCreateAssociationParams {
  /**
   * Path param:
   */
  appId: string;

  /**
   * Body param:
   */
  fromObjectTypeId: string;

  /**
   * Body param:
   */
  toObjectTypeId: string;

  /**
   * Body param:
   */
  name?: string;
}

export interface SchemaDeleteAssociationParams {
  appId: string;

  objectType: string;
}

export interface SchemaGetParams {
  appId: string;
}

export declare namespace Schemas {
  export {
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaCreateAssociationParams as SchemaCreateAssociationParams,
    type SchemaDeleteAssociationParams as SchemaDeleteAssociationParams,
    type SchemaGetParams as SchemaGetParams,
  };
}
