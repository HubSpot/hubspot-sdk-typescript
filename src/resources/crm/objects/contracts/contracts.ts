// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CRMAPI from '../../crm';
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

export class Contracts extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a contract with the given properties and return a copy of the object,
   * including the ID. Documentation and examples for creating standard contracts is
   * provided.
   *
   * @example
   * ```ts
   * const createdResponseSimplePublicObject =
   *   await client.crm.objects.contracts.create({
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  create(
    body: ContractCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contracts', { body, ...options });
  }

  /**
   * Perform a partial update of an Object identified by `{contractId}`or optionally
   * a unique property value as specified by the `idProperty` query param.
   * `{contractId}` refers to the internal object ID by default, and the `idProperty`
   * query param refers to a property whose values are unique for the object.
   * Provided property values will be overwritten. Read-only and non-existent
   * properties will result in an error. Properties values can be cleared by passing
   * an empty string.
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.contracts.update('contractId', {
   *     properties: {
   *       property_checkbox: 'false',
   *       property_date: '1572480000000',
   *       property_dropdown: 'choice_b',
   *       property_multiple_checkboxes: 'chocolate;strawberry',
   *       property_number: '17',
   *       property_radio: 'option_1',
   *       property_string: 'value',
   *     },
   *   });
   * ```
   */
  update(
    contractID: string,
    params: ContractUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/contracts/${contractID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Read a page of contracts. Control what is returned via the `properties` query
   * param.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.contracts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ContractListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, CRMAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/v3/objects/contracts',
      Page<CRMAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Move an Object identified by `{contractId}` to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.objects.contracts.delete('contractId');
   * ```
   */
  delete(contractID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/contracts/${contractID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read an Object identified by `{contractId}`. `{contractId}` refers to the
   * internal object ID by default, or optionally any unique property value as
   * specified by the `idProperty` query param. Control what is returned via the
   * `properties` query param.
   *
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.contracts.get('contractId');
   * ```
   */
  get(
    contractID: string,
    query: ContractGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CRMAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/contracts/${contractID}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.contracts.search();
   * ```
   */
  search(
    body: ContractSearchParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/contracts/search', { body, ...options });
  }
}

export interface ContractCreateParams {
  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };

  associations?: Array<CRMAPI.PublicAssociationsForObject>;
}

export interface ContractUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object
   */
  idProperty?: string;
}

export interface ContractListParams extends PageParams {
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
   * the maximum number of contracts that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface ContractGetParams {
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

export interface ContractSearchParams {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after?: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups?: Array<CRMAPI.FilterGroup>;

  /**
   * The maximum results to return, up to 200 objects.
   */
  limit?: number;

  /**
   * A list of property names to include in the response.
   */
  properties?: Array<string>;

  /**
   * The search query string, up to 3000 characters.
   */
  query?: string;

  /**
   * Specifies sorting order based on object properties.
   */
  sorts?: Array<string>;
}

Contracts.Batch = Batch;

export declare namespace Contracts {
  export {
    type ContractCreateParams as ContractCreateParams,
    type ContractUpdateParams as ContractUpdateParams,
    type ContractListParams as ContractListParams,
    type ContractGetParams as ContractGetParams,
    type ContractSearchParams as ContractSearchParams,
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
