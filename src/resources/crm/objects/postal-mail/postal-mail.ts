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

export class PostalMail extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a postal mail object with the given properties and return a copy of the
   * object, including the ID.
   *
   * @example
   * ```ts
   * const createdResponseSimplePublicObject =
   *   await client.crm.objects.postalMail.create({
   *     properties: { foo: 'string' },
   *   });
   * ```
   */
  create(
    body: PostalMailCreateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CreatedResponseSimplePublicObject> {
    return this._client.post('/crm/v3/objects/postal_mail', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.postalMail.update(
   *     'postalMailId',
   *     { properties: { foo: 'string' } },
   *   );
   * ```
   */
  update(
    postalMailID: string,
    params: PostalMailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/postal_mail/${postalMailID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.postalMail.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PostalMailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, CrmAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/v3/objects/postal_mail',
      Page<CrmAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Move the postal mail object with the ID `{postalMailId}` to the recycling bin.
   *
   * @example
   * ```ts
   * await client.crm.objects.postalMail.delete('postalMailId');
   * ```
   */
  delete(postalMailID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/objects/postal_mail/${postalMailID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.postalMail.get('postalMailId');
   * ```
   */
  get(
    postalMailID: string,
    query: PostalMailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/postal_mail/${postalMailID}`, { query, ...options });
  }

  /**
   * Search for postal mail objects using specific criteria in the request.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.postalMail.search();
   * ```
   */
  search(
    body: PostalMailSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/postal_mail/search', { body, ...options });
  }
}

export interface PostalMailCreateParams {
  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };

  associations?: Array<CrmAPI.PublicAssociationsForObject>;
}

export interface PostalMailUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param:
   */
  idProperty?: string;
}

export interface PostalMailListParams extends PageParams {
  archived?: boolean;

  associations?: Array<string>;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface PostalMailGetParams {
  archived?: boolean;

  associations?: Array<string>;

  idProperty?: string;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface PostalMailSearchParams {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after?: string;

  /**
   * Up to 6 groups of filters defining additional query criteria.
   */
  filterGroups?: Array<CrmAPI.FilterGroup>;

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

PostalMail.Batch = Batch;

export declare namespace PostalMail {
  export {
    type PostalMailCreateParams as PostalMailCreateParams,
    type PostalMailUpdateParams as PostalMailUpdateParams,
    type PostalMailListParams as PostalMailListParams,
    type PostalMailGetParams as PostalMailGetParams,
    type PostalMailSearchParams as PostalMailSearchParams,
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
