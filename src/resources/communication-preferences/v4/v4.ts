// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StatusesAPI from './statuses/statuses';
import { StatusRetrieveParams, StatusUpdateParams, Statuses } from './statuses/statuses';
import * as BatchAPI from '../../crm/v3/associations/batch';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V4 extends APIResource {
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);

  /**
   * Retrieve all subscription status definitions
   */
  retrieveDefinitions(
    query: V4RetrieveDefinitionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V4RetrieveDefinitionsResponse> {
    return this._client.get('/communication-preferences/v4/definitions', { query, ...options });
  }
}

export interface MarketingSubscriptionsSubscriptionDefinition {
  id: string;

  createdAt: string;

  isActive: boolean;

  isDefault: boolean;

  isInternal: boolean;

  name: string;

  updatedAt: string;

  businessUnitId?: number;

  communicationMethod?: string;

  purpose?: string;

  subscriptionTranslations?: Array<MarketingSubscriptionsSubscriptionDefinition.SubscriptionTranslation>;
}

export namespace MarketingSubscriptionsSubscriptionDefinition {
  export interface SubscriptionTranslation {
    createdAt: number;

    languageCode: string;

    name: string;

    subscriptionId: number;

    updatedAt: number;
  }
}

export interface V4RetrieveDefinitionsResponse {
  completedAt: string;

  results: Array<MarketingSubscriptionsSubscriptionDefinition>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface V4RetrieveDefinitionsParams {
  businessUnitId?: number;

  includeTranslations?: boolean;
}

V4.Statuses = Statuses;

export declare namespace V4 {
  export {
    type MarketingSubscriptionsSubscriptionDefinition as MarketingSubscriptionsSubscriptionDefinition,
    type V4RetrieveDefinitionsResponse as V4RetrieveDefinitionsResponse,
    type V4RetrieveDefinitionsParams as V4RetrieveDefinitionsParams,
  };

  export {
    Statuses as Statuses,
    type StatusRetrieveParams as StatusRetrieveParams,
    type StatusUpdateParams as StatusUpdateParams,
  };
}
