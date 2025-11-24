// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { SimplePublicObjectWithAssociationsPage } from '../../crm';
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

export class Taxes extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a tax with the given properties and return a copy of the object,
   * including the ID. Documentation and examples for creating standard taxes is
   * provided.
   *
   * @example
   * ```ts
   * const createdResponseSimplePublicObject =
   *   await client.crm.objects.taxes.create({
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
    body: TaxCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/taxes', { body, ...options });
  }

  /**
   * Perform a partial update of an Object identified by `{taxId}`or optionally a
   * unique property value as specified by the `idProperty` query param. `{taxId}`
   * refers to the internal object ID by default, and the `idProperty` query param
   * refers to a property whose values are unique for the object. Provided property
   * values will be overwritten. Read-only and non-existent properties will result in
   * an error. Properties values can be cleared by passing an empty string.
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.taxes.update('taxId', {
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  update(
    taxID: string,
    params: TaxUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/taxes/${taxID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Read a page of taxes. Control what is returned via the `properties` query param.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.taxes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TaxListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, CrmAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList('/crm/v3/objects/taxes', Page<CrmAPI.SimplePublicObjectWithAssociations>, {
      query,
      ...options,
    });
  }

  /**
   * Move an Object identified by `{taxId}` to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.objects.taxes.delete('taxId');
   * ```
   */
  delete(taxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/taxes/${taxID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read an Object identified by `{taxId}`. `{taxId}` refers to the internal object
   * ID by default, or optionally any unique property value as specified by the
   * `idProperty` query param. Control what is returned via the `properties` query
   * param.
   *
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.taxes.get('taxId');
   * ```
   */
  get(
    taxID: string,
    query: TaxGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/taxes/${taxID}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.taxes.search({
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
    body: TaxSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/taxes/search', { body, ...options });
  }
}

export interface TaxCreateParams {
  associations: Array<CrmAPI.PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
}

export interface TaxUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object
   */
  idProperty?: string;
}

export interface TaxListParams extends PageParams {
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
   * the maximum number of taxes that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface TaxGetParams {
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

export interface TaxSearchParams {
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

Taxes.Batch = Batch;

export declare namespace Taxes {
  export {
    type TaxCreateParams as TaxCreateParams,
    type TaxUpdateParams as TaxUpdateParams,
    type TaxListParams as TaxListParams,
    type TaxGetParams as TaxGetParams,
    type TaxSearchParams as TaxSearchParams,
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
