// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CrmAPI from '../crm';
import { MultiAssociatedObjectWithLabelsPage } from '../crm';
import * as ObjectsAPI from './objects';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PartnerServices extends APIResource {
  /**
   * Update multiple partner services using their internal IDs or unique property
   * values. This operation allows for batch processing of updates, ensuring
   * efficient synchronization of service data between HubSpot and other systems.
   */
  update(
    body: PartnerServiceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    return this._client.post('/crm/objects/2026-03/partner_services/batch/update', { body, ...options });
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
   * Retrieve records by record ID or include the `idProperty` parameter to retrieve
   * records by a custom unique value property.
   */
  get(
    params: PartnerServiceGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.BatchResponseSimplePublicObject> {
    const { archived, ...body } = params;
    return this._client.post('/crm/objects/2026-03/partner_services/batch/read', {
      query: { archived },
      body,
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

export interface PartnerServiceUpdateParams {
  inputs: Array<ObjectsAPI.SimplePublicObjectBatchInput>;
}

export interface PartnerServiceListParams extends PageParams {
  /**
   * Path param
   */
  partnerServiceId: string;
}

export interface PartnerServiceGetParams {
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

export declare namespace PartnerServices {
  export {
    type PartnerServiceUpdateParams as PartnerServiceUpdateParams,
    type PartnerServiceListParams as PartnerServiceListParams,
    type PartnerServiceGetParams as PartnerServiceGetParams,
    type PartnerServiceSearchParams as PartnerServiceSearchParams,
  };
}

export { type MultiAssociatedObjectWithLabelsPage };
