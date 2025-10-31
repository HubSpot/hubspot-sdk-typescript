// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CRMAPI from '../../crm';
import { SimplePublicObjectWithAssociationsPage } from '../../crm';
import * as AssociationsAPI from './associations';
import {
  AssociationDeleteParams,
  AssociationListParams,
  AssociationUpdateParams,
  Associations,
} from './associations';
import * as BatchAPI from './batch';
import { Batch, BatchBatchGetParams, BatchBatchUpdateParams } from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class PartnerClients extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * @example
   * ```ts
   * const simplePublicObject =
   *   await client.crm.objects.partnerClients.update(
   *     'partnerClientId',
   *     {
   *       properties: {
   *         property_checkbox: 'false',
   *         property_date: '1572480000000',
   *         property_dropdown: 'choice_b',
   *         property_multiple_checkboxes:
   *           'chocolate;strawberry',
   *         property_number: '17',
   *         property_radio: 'option_1',
   *         property_string: 'value',
   *       },
   *     },
   *   );
   * ```
   */
  update(
    partnerClientID: string,
    params: PartnerClientUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.SimplePublicObject> {
    const { idProperty, ...body } = params;
    return this._client.patch(path`/crm/v3/objects/partner_clients/${partnerClientID}`, {
      query: { idProperty },
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simplePublicObjectWithAssociations of client.crm.objects.partnerClients.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PartnerClientListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, CRMAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/v3/objects/partner_clients',
      Page<CRMAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * @example
   * ```ts
   * const simplePublicObjectWithAssociations =
   *   await client.crm.objects.partnerClients.get(
   *     'partnerClientId',
   *   );
   * ```
   */
  get(
    partnerClientID: string,
    query: PartnerClientGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CRMAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/v3/objects/partner_clients/${partnerClientID}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const collectionResponseWithTotalSimplePublicObject =
   *   await client.crm.objects.partnerClients.search();
   * ```
   */
  search(
    body: PartnerClientSearchParams,
    options?: RequestOptions,
  ): APIPromise<CRMAPI.CollectionResponseWithTotalSimplePublicObject> {
    return this._client.post('/crm/v3/objects/partner_clients/search', { body, ...options });
  }
}

export interface PartnerClientUpdateParams {
  /**
   * Body param: Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * Query param:
   */
  idProperty?: string;
}

export interface PartnerClientListParams extends PageParams {
  archived?: boolean;

  associations?: Array<string>;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface PartnerClientGetParams {
  archived?: boolean;

  associations?: Array<string>;

  idProperty?: string;

  properties?: Array<string>;

  propertiesWithHistory?: Array<string>;
}

export interface PartnerClientSearchParams {
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

PartnerClients.Associations = Associations;
PartnerClients.Batch = Batch;

export declare namespace PartnerClients {
  export {
    type PartnerClientUpdateParams as PartnerClientUpdateParams,
    type PartnerClientListParams as PartnerClientListParams,
    type PartnerClientGetParams as PartnerClientGetParams,
    type PartnerClientSearchParams as PartnerClientSearchParams,
  };

  export {
    Associations as Associations,
    type AssociationUpdateParams as AssociationUpdateParams,
    type AssociationListParams as AssociationListParams,
    type AssociationDeleteParams as AssociationDeleteParams,
  };

  export {
    Batch as Batch,
    type BatchBatchGetParams as BatchBatchGetParams,
    type BatchBatchUpdateParams as BatchBatchUpdateParams,
  };
}

export { type SimplePublicObjectWithAssociationsPage };
