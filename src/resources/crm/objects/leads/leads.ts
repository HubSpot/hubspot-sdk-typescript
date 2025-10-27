// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CRMAPI from '../../crm';
import { SimplePublicObjectWithAssociationsPage } from '../../crm';
import * as BatchAPI from './batch';
import { Batch, BatchArchiveParams, BatchCreateParams, BatchGetParams, BatchUpdateParams } from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Leads extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a lead with the given properties and return a copy of the object,
   * including the ID. Documentation and examples for creating standard leads is
   * provided.
   *
   * @example
   * ```ts
   * const createdResponseSimplePublicObject =
   *   await client.crm.objects.leads.create({
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  create(
    body: LeadCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/leads', { body, ...options });
  }

  /**
   * Perform a partial update of an Object identified by `{leadsId}`or optionally a
   * unique property value as specified by the `idProperty` query param. `{leadsId}`
   * refers to the internal object ID by default, and the `idProperty` query param
   * refers to a property whose values are unique for the object. Provided property
   * values will be overwritten. Read-only and non-existent properties will result in
   * an error. Properties values can be cleared by passing an empty string.
   *
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.leads.update('leadsId', {
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
    leadsID: string,
    params: LeadUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/leads/${leadsID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Read a page of leads. Control what is returned via the `properties` query param.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.leads.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LeadListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, CRMAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList('/crm/v3/objects/leads', Page<CRMAPI.SimplePublicObjectWithAssociations>, {
      query,
      ...options,
    });
  }

  /**
   * Move an Object identified by `{leadsId}` to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.objects.leads.delete('leadsId');
   * ```
   */
  delete(leadsID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/leads/${leadsID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read an Object identified by `{leadsId}`. `{leadsId}` refers to the internal
   * object ID by default, or optionally any unique property value as specified by
   * the `idProperty` query param. Control what is returned via the `properties`
   * query param.
   *
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.leads.get('leadsId');
   * ```
   */
  get(
    leadsID: string,
    query: LeadGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CRMAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/leads/${leadsID}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.leads.search();
   * ```
   */
  search(
    body: LeadSearchParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/leads/search', { body, ...options });
  }
}

export interface LeadCreateParams {
  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };

  associations?: Array<CRMAPI.PublicAssociationsForObject>;
}

export interface LeadUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object
   */
  idProperty?: string;
}

export interface LeadListParams extends PageParams {
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
   * the maximum number of leads that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface LeadGetParams {
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

export interface LeadSearchParams {
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

Leads.Batch = Batch;

export declare namespace Leads {
  export {
    type LeadCreateParams as LeadCreateParams,
    type LeadUpdateParams as LeadUpdateParams,
    type LeadListParams as LeadListParams,
    type LeadGetParams as LeadGetParams,
    type LeadSearchParams as LeadSearchParams,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchGetParams as BatchGetParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
