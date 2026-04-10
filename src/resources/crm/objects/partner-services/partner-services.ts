// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CrmAPI from '../../crm';
import { MultiAssociatedObjectWithLabelsPage } from '../../crm';
import * as ObjectsAPI from '../objects';
import * as BatchAPI from './batch';
import { BaseBatch, Batch, BatchGetParams, BatchUpdateParams } from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BasePartnerServices extends APIResource {
  static override readonly _key: readonly ['crm', 'objects', 'partnerServices'] = Object.freeze([
    'crm',
    'objects',
    'partnerServices',
  ] as const);

  /**
   * Perform a partial update of an Object identified by `{partnerServiceId}`or
   * optionally a unique property value as specified by the `idProperty` query param.
   * `{partnerServiceId}` refers to the internal object ID by default, and the
   * `idProperty` query param refers to a property whose values are unique for the
   * object. Provided property values will be overwritten. Read-only and non-existent
   * properties will result in an error. Properties values can be cleared by passing
   * an empty string.
   */
  update(
    partnerServiceID: string,
    params: PartnerServiceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/objects/2026-03/partner_services/${partnerServiceID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a list of associations for a specific partner service, filtered by the
   * type of associated object.
   */
  list(
    toObjectType: string,
    params: PartnerServiceListParams,
    options?: RequestOptions,
  ): PagePromise<MultiAssociatedObjectWithLabelsPage, CrmAPI.MultiAssociatedObjectWithLabel> {
    const { partnerServiceId, ...query } = params;
    return this._client.getAPIList(
      path`/crm/objects/2026-03/partner_services/${partnerServiceId}/associations/${toObjectType}`,
      Page<CrmAPI.MultiAssociatedObjectWithLabel>,
      { query, ...options },
    );
  }

  /**
   * Read an Object identified by `{partnerServiceId}`. `{partnerServiceId}` refers
   * to the internal object ID by default, or optionally any unique property value as
   * specified by the `idProperty` query param. Control what is returned via the
   * `properties` query param.
   */
  get(
    partnerServiceID: string,
    query: PartnerServiceGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/objects/2026-03/partner_services/${partnerServiceID}`, {
      query,
      ...options,
    });
  }

  /**
   * Execute a search query to find partner services based on defined filters,
   * properties, and sorting options. This endpoint allows you to retrieve a
   * collection of partner services that match the specified search criteria.
   */
  search(
    body: PartnerServiceSearchParams,
    options?: RequestOptions,
  ): APIPromise<CrmAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/partner_services/search', { body, ...options });
  }
}
export class PartnerServices extends BasePartnerServices {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

export interface PartnerServiceUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param: The name of a property whose values are unique for this object type
   */
  idProperty?: string;
}

export interface PartnerServiceListParams extends PageParams {
  /**
   * Path param
   */
  partnerServiceId: string;
}

export interface PartnerServiceGetParams {
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
   * The name of a property whose values are unique for this object type
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

export interface PartnerServiceSearchParams {
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

PartnerServices.Batch = Batch;
PartnerServices.BaseBatch = BaseBatch;

export declare namespace PartnerServices {
  export {
    type PartnerServiceUpdateParams as PartnerServiceUpdateParams,
    type PartnerServiceListParams as PartnerServiceListParams,
    type PartnerServiceGetParams as PartnerServiceGetParams,
    type PartnerServiceSearchParams as PartnerServiceSearchParams,
  };

  export {
    Batch as Batch,
    BaseBatch as BaseBatch,
    type BatchUpdateParams as BatchUpdateParams,
    type BatchGetParams as BatchGetParams,
  };
}

export { type MultiAssociatedObjectWithLabelsPage };
