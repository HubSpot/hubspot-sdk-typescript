// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Associations extends APIResource {
  /**
   * Gets lists associated with a marketing event by marketing event id
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalPublicListNoPaging =
   *   await client.marketing.events.associations.list(
   *     'marketingEventId',
   *   );
   * ```
   */
  list(
    marketingEventID: string,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.CollectionResponseWithTotalPublicListNoPaging> {
    return this._client.get(
      path`/marketing/v3/marketing-events/associations/${marketingEventID}/lists`,
      options,
    );
  }

  /**
   * Disassociates a list from a marketing event by marketing event id and ILS list
   * id
   *
   * @example
   * ```ts
   * await client.marketing.events.associations.delete(
   *   'listId',
   *   { marketingEventId: 'marketingEventId' },
   * );
   * ```
   */
  delete(listID: string, params: AssociationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { marketingEventId } = params;
    return this._client.delete(
      path`/marketing/v3/marketing-events/associations/${marketingEventId}/lists/${listID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Associates a list with a marketing event by marketing event id and ILS list id
   *
   * @example
   * ```ts
   * await client.marketing.events.associations.associate(
   *   'listId',
   *   { marketingEventId: 'marketingEventId' },
   * );
   * ```
   */
  associate(listID: string, params: AssociationAssociateParams, options?: RequestOptions): APIPromise<void> {
    const { marketingEventId } = params;
    return this._client.put(
      path`/marketing/v3/marketing-events/associations/${marketingEventId}/lists/${listID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Associates a list with a marketing event by external account id, external event
   * id, and ILS list id
   *
   * @example
   * ```ts
   * await client.marketing.events.associations.associateByExternalAccount(
   *   'listId',
   *   {
   *     externalAccountId: 'externalAccountId',
   *     externalEventId: 'externalEventId',
   *   },
   * );
   * ```
   */
  associateByExternalAccount(
    listID: string,
    params: AssociationAssociateByExternalAccountParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { externalAccountId, externalEventId } = params;
    return this._client.put(
      path`/marketing/v3/marketing-events/associations/${externalAccountId}/${externalEventId}/lists/${listID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Disassociates a list from a marketing event by external account id, external
   * event id, and ILS list id
   *
   * @example
   * ```ts
   * await client.marketing.events.associations.deleteByExternalAccount(
   *   'listId',
   *   {
   *     externalAccountId: 'externalAccountId',
   *     externalEventId: 'externalEventId',
   *   },
   * );
   * ```
   */
  deleteByExternalAccount(
    listID: string,
    params: AssociationDeleteByExternalAccountParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { externalAccountId, externalEventId } = params;
    return this._client.delete(
      path`/marketing/v3/marketing-events/associations/${externalAccountId}/${externalEventId}/lists/${listID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Gets lists associated with a marketing event by external account id and external
   * event id
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalPublicListNoPaging =
   *   await client.marketing.events.associations.listByExternalAccount(
   *     'externalEventId',
   *     { externalAccountId: 'externalAccountId' },
   *   );
   * ```
   */
  listByExternalAccount(
    externalEventID: string,
    params: AssociationListByExternalAccountParams,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.CollectionResponseWithTotalPublicListNoPaging> {
    const { externalAccountId } = params;
    return this._client.get(
      path`/marketing/v3/marketing-events/associations/${externalAccountId}/${externalEventID}/lists`,
      options,
    );
  }
}

export interface AssociationDeleteParams {
  /**
   * The internal id of the marketing event in HubSpot.
   */
  marketingEventId: string;
}

export interface AssociationAssociateParams {
  /**
   * The internal id of the marketing event in HubSpot.
   */
  marketingEventId: string;
}

export interface AssociationAssociateByExternalAccountParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;

  /**
   * The id of the marketing event in the external event application.
   */
  externalEventId: string;
}

export interface AssociationDeleteByExternalAccountParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;

  /**
   * The id of the marketing event in the external event application.
   */
  externalEventId: string;
}

export interface AssociationListByExternalAccountParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application
   */
  externalAccountId: string;
}

export declare namespace Associations {
  export {
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationAssociateParams as AssociationAssociateParams,
    type AssociationAssociateByExternalAccountParams as AssociationAssociateByExternalAccountParams,
    type AssociationDeleteByExternalAccountParams as AssociationDeleteByExternalAccountParams,
    type AssociationListByExternalAccountParams as AssociationListByExternalAccountParams,
  };
}
