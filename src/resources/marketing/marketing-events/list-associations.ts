// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketingEventsAPI from './marketing-events';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ListAssociations extends APIResource {
  /**
   * Gets lists associated with a marketing event by marketing event id
   */
  list(
    marketingEventID: string,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.CollectionResponseWithTotalPublicList> {
    return this._client.get(
      path`/marketing/marketing-events/2026-03/associations/${marketingEventID}/lists`,
      options,
    );
  }

  /**
   * Disassociates a list from a marketing event by marketing event id and ILS list
   * id
   */
  delete(listID: string, params: ListAssociationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { marketingEventId } = params;
    return this._client.delete(
      path`/marketing/marketing-events/2026-03/associations/${marketingEventId}/lists/${listID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Associates a list with a marketing event by marketing event id and ILS list id
   */
  associate(
    listID: string,
    params: ListAssociationAssociateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { marketingEventId } = params;
    return this._client.put(
      path`/marketing/marketing-events/2026-03/associations/${marketingEventId}/lists/${listID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Associates a list with a marketing event by external account id, external event
   * id, and ILS list id
   */
  associateByExternalAccount(
    listID: string,
    params: ListAssociationAssociateByExternalAccountParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { externalAccountId, externalEventId } = params;
    return this._client.put(
      path`/marketing/marketing-events/2026-03/associations/${externalAccountId}/${externalEventId}/lists/${listID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Disassociates a list from a marketing event by external account id, external
   * event id, and ILS list id
   */
  deleteByExternalAccount(
    listID: string,
    params: ListAssociationDeleteByExternalAccountParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { externalAccountId, externalEventId } = params;
    return this._client.delete(
      path`/marketing/marketing-events/2026-03/associations/${externalAccountId}/${externalEventId}/lists/${listID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Gets lists associated with a marketing event by external account id and external
   * event id
   */
  listByExternalAccount(
    externalEventID: string,
    params: ListAssociationListByExternalAccountParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.CollectionResponseWithTotalPublicList> {
    const { externalAccountId } = params;
    return this._client.get(
      path`/marketing/marketing-events/2026-03/associations/${externalAccountId}/${externalEventID}/lists`,
      options,
    );
  }
}

export interface ListAssociationDeleteParams {
  /**
   * The internal id of the marketing event in HubSpot.
   */
  marketingEventId: string;
}

export interface ListAssociationAssociateParams {
  /**
   * The internal id of the marketing event in HubSpot.
   */
  marketingEventId: string;
}

export interface ListAssociationAssociateByExternalAccountParams {
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

export interface ListAssociationDeleteByExternalAccountParams {
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

export interface ListAssociationListByExternalAccountParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;
}

export declare namespace ListAssociations {
  export {
    type ListAssociationDeleteParams as ListAssociationDeleteParams,
    type ListAssociationAssociateParams as ListAssociationAssociateParams,
    type ListAssociationAssociateByExternalAccountParams as ListAssociationAssociateByExternalAccountParams,
    type ListAssociationDeleteByExternalAccountParams as ListAssociationDeleteByExternalAccountParams,
    type ListAssociationListByExternalAccountParams as ListAssociationListByExternalAccountParams,
  };
}
