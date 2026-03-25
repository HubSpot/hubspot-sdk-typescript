// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ObjectsAPI from './objects';
import { SimplePublicObjectWithAssociationsPage } from './objects';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Custom extends APIResource {
  /**
   * Create multiple CRM objects in a single request by specifying the object type
   * and providing the necessary properties and associations for each object.
   */
  create(
    objectType: string,
    body: CustomCreateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/batch/create`, { body, ...options });
  }

  /**
   * Update a batch of CRM objects by their internal IDs or unique property values,
   * allowing for efficient modifications of multiple records in a single request.
   */
  update(
    objectType: string,
    body: CustomUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/batch/update`, { body, ...options });
  }

  /**
   * Read a page of objects. Control what is returned via the `properties` query
   * param.
   */
  list(
    objectType: string,
    query: CustomListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      path`/crm/objects/2026-03/${objectType}`,
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Archive a batch of objects by their unique IDs. This operation moves the
   * specified objects to the recycling bin, effectively marking them as archived.
   */
  delete(objectType: string, body: CustomDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/batch/archive`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve records by record ID or include the `idProperty` parameter to retrieve
   * records by a custom unique value property.
   */
  get(
    objectType: string,
    params: CustomGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post(path`/crm/objects/2026-03/${objectType}/batch/read`, {
      query: { archived },
      body,
      ...options,
    });
  }

  /**
   * Merge two CRM objects of the same type by specifying one as the primary object
   * and the other as the object to be merged into it.
   */
  merge(
    objectType: string,
    body: CustomMergeParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/merge`, { body, ...options });
  }

  /**
   * Execute a search query to find CRM objects of a given type, using specified
   * filters and properties. The search can be customized with filters, sorting, and
   * pagination options.
   */
  search(
    objectType: string,
    body: CustomSearchParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/search`, { body, ...options });
  }

  /**
   * Create or update records identified by a unique property value as specified by
   * the `idProperty` query param. `idProperty` query param refers to a property
   * whose values are unique for the object.
   */
  upsert(
    objectType: string,
    body: CustomUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicUpsertObject> {
    return this._client.post(path`/crm/objects/2026-03/${objectType}/batch/upsert`, { body, ...options });
  }
}

/**
 * The response returned after performing a batch operation on associations.
 */
export interface BatchResponsePublicDefaultAssociation {
  /**
   * The timestamp when the batch process was completed, in ISO 8601 format.
   */
  completedAt: string;

  results: Array<PublicDefaultAssociation>;

  /**
   * The timestamp when the batch process began execution, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request. Can be: "PENDING", "PROCESSING",
   * "CANCELED", or "COMPLETE".
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  /**
   * The total number of errors that occurred during the operation.
   */
  numErrors?: number;

  /**
   * The timestamp when the batch process was initiated, in ISO 8601 format.
   */
  requestedAt?: string;
}

/**
 * The relationship descriptors applicable between two object types.
 */
export interface LabelsBetweenObjectPair {
  /**
   * Source unique ID of the object.
   */
  fromObjectId: string;

  /**
   * Source object type.
   */
  fromObjectTypeId: string;

  labels: Array<string>;

  /**
   * Target unique ID of the object.
   */
  toObjectId: string;

  /**
   * Target object type.
   */
  toObjectTypeId: string;
}

export interface PublicDefaultAssociation {
  /**
   * Defines the type, direction, and details of the relationship between two CRM
   * objects.
   */
  associationSpec: Shared.AssociationSpec;

  /**
   * Contains the Id of a Public Object
   */
  from: Shared.PublicObjectID;

  /**
   * Contains the Id of a Public Object
   */
  to: Shared.PublicObjectID;
}

export interface CustomCreateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputForCreate>;
}

export interface CustomUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface CustomListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * A comma separated list of object types to retrieve associated IDs for. If any of
   * the specified associations do not exist, they will be ignored.
   */
  associations?: Array<string>;

  /**
   * A comma separated list of the properties to be returned in the response. If any
   * of the specified properties are not present on the requested object(s), they
   * will be ignored.
   */
  properties?: Array<string>;

  /**
   * A comma separated list of the properties to be returned along with their history
   * of previous values. If any of the specified properties are not present on the
   * requested object(s), they will be ignored. Usage of this parameter will reduce
   * the maximum number of objects that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface CustomDeleteParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;
}

export interface CustomGetParams {
  /**
   * Body param
   */
  inputs: Array<ObjectsAPI.SimplePublicObjectID>;

  /**
   * Body param: Key-value pairs for setting properties for the new object.
   */
  properties: Array<string>;

  /**
   * Body param: Key-value pairs for setting properties for the new object and their
   * histories.
   */
  propertiesWithHistory: Array<string>;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Body param: When using a custom unique value property to retrieve records, the
   * name of the property. Do not include this parameter if retrieving by record ID.
   */
  idProperty?: string;
}

export interface CustomMergeParams {
  /**
   * The object ID of the record that the merge will not set as the current value
   * after the merge.
   */
  objectIdToMerge: string;

  /**
   * The object ID of the record that the merge will generally set as the current
   * value after the merge.
   */
  primaryObjectId: string;
}

export interface CustomSearchParams {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups: Array<ObjectsAPI.FilterGroup>;

  /**
   * The maximum results to return, up to 200 objects.
   */
  limit: number;

  /**
   * A list of property names to include in the response.
   */
  properties: Array<string>;

  /**
   * Specifies sorting order based on object properties.
   */
  sorts: Array<string>;

  /**
   * The search query string, up to 3000 characters.
   */
  query?: string;
}

export interface CustomUpsertParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInputUpsert>;
}

export declare namespace Custom {
  export {
    type BatchResponsePublicDefaultAssociation as BatchResponsePublicDefaultAssociation,
    type LabelsBetweenObjectPair as LabelsBetweenObjectPair,
    type PublicDefaultAssociation as PublicDefaultAssociation,
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomListParams as CustomListParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
    type CustomMergeParams as CustomMergeParams,
    type CustomSearchParams as CustomSearchParams,
    type CustomUpsertParams as CustomUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
