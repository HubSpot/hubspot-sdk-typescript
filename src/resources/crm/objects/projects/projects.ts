// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { SimplePublicObjectWithAssociationsPage } from '../../crm';
import * as AssociationsAPI from './associations';
import {
  AssociationDeleteParams,
  AssociationListParams,
  AssociationUpdateParams,
  Associations,
} from './associations';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCreateParams,
  BatchDeleteParams,
  BatchGetParams,
  BatchUpdateParams,
  BatchUpsertParams,
} from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Projects extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a project with the given properties and return a copy of the object,
   * including the ID.
   *
   * @example
   * ```ts
   * const createdResponseSimplePublicObject =
   *   await client.crm.objects.projects.create({
   *     associations: [
   *       {
   *         to: { id: '37295' },
   *         types: [
   *           {
   *             associationCategory: 'HUBSPOT_DEFINED',
   *             associationTypeId: 0,
   *           },
   *         ],
   *       },
   *     ],
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  create(
    body: ProjectCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/objects/v3/projects', { body, ...options });
  }

  /**
   * Perform a partial update of an Object identified by `{projectId}`or optionally a
   * unique property value as specified by the `idProperty` query param.
   * `{projectId}` refers to the internal object ID by default, and the `idProperty`
   * query param refers to a property whose values are unique for the object.
   * Provided property values will be overwritten. Read-only and non-existent
   * properties will result in an error. Properties values can be cleared by passing
   * an empty string.
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.projects.update('projectId', {
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  update(
    projectID: string,
    params: ProjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/objects/v3/projects/${projectID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Read a page of projects. Control what is returned via the `properties` query
   * param.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.projects.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, CrmAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/v3/projects',
      Page<CrmAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Move an Object identified by `{projectId}` to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.objects.projects.delete('projectId');
   * ```
   */
  delete(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/objects/v3/projects/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read an Object identified by `{projectId}`. `{projectId}` refers to the internal
   * object ID by default, or optionally any unique property value as specified by
   * the `idProperty` query param. Control what is returned via the `properties`
   * query param.
   *
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.projects.get('projectId');
   * ```
   */
  get(
    projectID: string,
    query: ProjectGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/objects/v3/projects/${projectID}`, { query, ...options });
  }

  /**
   * Merge two project records. Learn more about
   * [merging records](https://knowledge.hubspot.com/records/merge-records).
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.projects.merge({
   *     objectIdToMerge: 'objectIdToMerge',
   *     primaryObjectId: 'primaryObjectId',
   *   });
   * ```
   */
  merge(body: ProjectMergeParams, options?: RequestOptions): APIPromise<CrmAPI.SimplePublicObject> {
    return this._client.post('/crm/objects/v3/projects/merge', { body, ...options });
  }

  /**
   * Search for projects by filtering on properties, searching through associations,
   * and sorting results. Learn more about
   * [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.projects.search({
   *     after: 'after',
   *     filterGroups: [
   *       {
   *         filters: [
   *           {
   *             operator: 'BETWEEN',
   *             propertyName: 'propertyName',
   *           },
   *         ],
   *       },
   *     ],
   *     limit: 0,
   *     properties: ['string'],
   *     sorts: ['string'],
   *   });
   * ```
   */
  search(
    body: ProjectSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/v3/projects/search', { body, ...options });
  }
}

export interface ProjectCreateParams {
  associations: Array<CrmAPI.PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
}

export interface ProjectUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object
   */
  idProperty?: string;
}

export interface ProjectListParams extends PageParams {
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
   * the maximum number of projects that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface ProjectGetParams {
  /**
   * Whether to include archived projects
   */
  archived?: boolean;

  /**
   * A comma separated list of object types to retrieve associated IDs for. If any of
   * the specified associations do not exist, they will be ignored.
   */
  associations?: Array<string>;

  /**
   * The name of a property whose values are unique for this object
   */
  idProperty?: string;

  /**
   * A comma separated list of the properties to be returned in the response. If any
   * of the specified properties are not present on the requested object(s), they
   * will be ignored.
   */
  properties?: Array<string>;

  /**
   * A comma separated list of the properties to be returned along with their history
   * of previous values. If any of the specified properties are not present on the
   * requested object(s), they will be ignored.
   */
  propertiesWithHistory?: Array<string>;
}

export interface ProjectMergeParams {
  /**
   * The unique identifier of the CRM object that will be merged into the primary
   * object.
   */
  objectIdToMerge: string;

  /**
   * The unique identifier of the CRM object that will remain after the merge.
   */
  primaryObjectId: string;
}

export interface ProjectSearchParams {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups: Array<CrmAPI.FilterGroup>;

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

Projects.Associations = Associations;
Projects.Batch = Batch;

export declare namespace Projects {
  export {
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectGetParams as ProjectGetParams,
    type ProjectMergeParams as ProjectMergeParams,
    type ProjectSearchParams as ProjectSearchParams,
  };

  export {
    Associations as Associations,
    type AssociationUpdateParams as AssociationUpdateParams,
    type AssociationListParams as AssociationListParams,
    type AssociationDeleteParams as AssociationDeleteParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
    type BatchUpsertParams as BatchUpsertParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
