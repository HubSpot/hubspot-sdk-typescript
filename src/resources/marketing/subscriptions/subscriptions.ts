// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as V3API from './v3';
import {
  MarketingSubscriptionsV3PublicSubscriptionStatus,
  MarketingSubscriptionsV3PublicSubscriptionStatusesResponse,
  MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest,
  MarketingSubscriptionsV3SubscriptionDefinitionsResponse,
  V3,
} from './v3';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriptions extends APIResource {
  v3: V3API.V3 = new V3API.V3(this._client);

  /**
   * Get subscription definitions
   */
  list(options?: RequestOptions): APIPromise<V3API.MarketingSubscriptionsV3SubscriptionDefinitionsResponse> {
    return this._client.get('/communication-preferences/v3/definitions', options);
  }

  /**
   * Get subscription statuses for a contact
   */
  getEmailStatus(
    emailAddress: string,
    options?: RequestOptions,
  ): APIPromise<V3API.MarketingSubscriptionsV3PublicSubscriptionStatusesResponse> {
    return this._client.get(path`/communication-preferences/v3/status/email/${emailAddress}`, options);
  }

  /**
   * Subscribe a contact
   */
  subscribe(
    body: SubscriptionSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<V3API.MarketingSubscriptionsV3PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/v3/subscribe', { body, ...options });
  }

  /**
   * Unsubscribe a contact
   */
  unsubscribe(
    body: SubscriptionUnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<V3API.MarketingSubscriptionsV3PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/v3/unsubscribe', { body, ...options });
  }
}

export interface MarketingSubscriptionsActionResponseWithResultsPublicStatus {
  completedAt: string;

  results: Array<MarketingSubscriptionsPublicStatus>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface MarketingSubscriptionsActionResponseWithResultsPublicWideStatus {
  completedAt: string;

  results: Array<MarketingSubscriptionsPublicWideStatus>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface MarketingSubscriptionsActionResponseWithResultsSubscriptionDefinition {
  completedAt: string;

  results: Array<MarketingSubscriptionsSubscriptionDefinition>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface MarketingSubscriptionsBatchInputPublicStatusRequest {
  inputs: Array<MarketingSubscriptionsPublicStatusRequest>;
}

export interface MarketingSubscriptionsBatchResponsePublicBulkOptOutFromAllResponse {
  completedAt: string;

  results: Array<MarketingSubscriptionsPublicBulkOptOutFromAllResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface MarketingSubscriptionsBatchResponsePublicStatus {
  completedAt: string;

  results: Array<MarketingSubscriptionsPublicStatus>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface MarketingSubscriptionsBatchResponsePublicStatusBulkResponse {
  completedAt: string;

  results: Array<MarketingSubscriptionsPublicStatusBulkResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface MarketingSubscriptionsBatchResponsePublicStatusBulkResponseWithErrors {
  completedAt: string;

  results: Array<MarketingSubscriptionsPublicStatusBulkResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponse {
  completedAt: string;

  results: Array<MarketingSubscriptionsPublicWideStatusBulkResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponseWithErrors {
  completedAt: string;

  results: Array<MarketingSubscriptionsPublicWideStatusBulkResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface MarketingSubscriptionsPartialPublicStatusRequest {
  channel: 'EMAIL';

  statusState: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  subscriptionId: number;

  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  legalBasisExplanation?: string;
}

export interface MarketingSubscriptionsPublicBulkOptOutFromAllResponse {
  subscriberIdString: string;

  statuses?: Array<MarketingSubscriptionsPublicStatus>;
}

export interface MarketingSubscriptionsPublicStatus {
  channel: 'EMAIL';

  source: string;

  status: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  subscriberIdString: string;

  subscriptionId: number;

  timestamp: string;

  businessUnitId?: number;

  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  legalBasisExplanation?: string;

  setStatusSuccessReason?:
    | 'RESUBSCRIBE_OCCURRED'
    | 'NO_STATUS_CHANGE'
    | 'UNSUBSCRIBE_FROM_ALL_OCCURRED'
    | 'REQUESTED_CHANGE_OCCURRED';

  subscriptionName?: string;
}

export interface MarketingSubscriptionsPublicStatusBulkResponse {
  statuses: Array<MarketingSubscriptionsPublicStatus>;

  subscriberIdString: string;
}

export interface MarketingSubscriptionsPublicStatusRequest {
  channel: 'EMAIL';

  statusState: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  subscriberIdString: string;

  subscriptionId: number;

  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  legalBasisExplanation?: string;
}

export interface MarketingSubscriptionsPublicSubscriptionTranslation {
  createdAt: number;

  languageCode: string;

  name: string;

  subscriptionId: number;

  updatedAt: number;
}

export interface MarketingSubscriptionsPublicWideStatus {
  channel: 'EMAIL';

  status: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  subscriberIdString: string;

  timestamp: string;

  wideStatusType: 'PORTAL_WIDE' | 'BUSINESS_UNIT_WIDE';

  businessUnitId?: number;
}

export interface MarketingSubscriptionsPublicWideStatusBulkResponse {
  subscriberIdString: string;

  wideStatuses: Array<MarketingSubscriptionsPublicWideStatus>;
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

  subscriptionTranslations?: Array<MarketingSubscriptionsPublicSubscriptionTranslation>;
}

export interface SubscriptionSubscribeParams {
  emailAddress: string;

  subscriptionId: string;

  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  legalBasisExplanation?: string;
}

export interface SubscriptionUnsubscribeParams {
  emailAddress: string;

  subscriptionId: string;

  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  legalBasisExplanation?: string;
}

Subscriptions.V3 = V3;

export declare namespace Subscriptions {
  export {
    type MarketingSubscriptionsActionResponseWithResultsPublicStatus as MarketingSubscriptionsActionResponseWithResultsPublicStatus,
    type MarketingSubscriptionsActionResponseWithResultsPublicWideStatus as MarketingSubscriptionsActionResponseWithResultsPublicWideStatus,
    type MarketingSubscriptionsActionResponseWithResultsSubscriptionDefinition as MarketingSubscriptionsActionResponseWithResultsSubscriptionDefinition,
    type MarketingSubscriptionsBatchInputPublicStatusRequest as MarketingSubscriptionsBatchInputPublicStatusRequest,
    type MarketingSubscriptionsBatchResponsePublicBulkOptOutFromAllResponse as MarketingSubscriptionsBatchResponsePublicBulkOptOutFromAllResponse,
    type MarketingSubscriptionsBatchResponsePublicStatus as MarketingSubscriptionsBatchResponsePublicStatus,
    type MarketingSubscriptionsBatchResponsePublicStatusBulkResponse as MarketingSubscriptionsBatchResponsePublicStatusBulkResponse,
    type MarketingSubscriptionsBatchResponsePublicStatusBulkResponseWithErrors as MarketingSubscriptionsBatchResponsePublicStatusBulkResponseWithErrors,
    type MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponse as MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponse,
    type MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponseWithErrors as MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponseWithErrors,
    type MarketingSubscriptionsPartialPublicStatusRequest as MarketingSubscriptionsPartialPublicStatusRequest,
    type MarketingSubscriptionsPublicBulkOptOutFromAllResponse as MarketingSubscriptionsPublicBulkOptOutFromAllResponse,
    type MarketingSubscriptionsPublicStatus as MarketingSubscriptionsPublicStatus,
    type MarketingSubscriptionsPublicStatusBulkResponse as MarketingSubscriptionsPublicStatusBulkResponse,
    type MarketingSubscriptionsPublicStatusRequest as MarketingSubscriptionsPublicStatusRequest,
    type MarketingSubscriptionsPublicSubscriptionTranslation as MarketingSubscriptionsPublicSubscriptionTranslation,
    type MarketingSubscriptionsPublicWideStatus as MarketingSubscriptionsPublicWideStatus,
    type MarketingSubscriptionsPublicWideStatusBulkResponse as MarketingSubscriptionsPublicWideStatusBulkResponse,
    type MarketingSubscriptionsSubscriptionDefinition as MarketingSubscriptionsSubscriptionDefinition,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionUnsubscribeParams as SubscriptionUnsubscribeParams,
  };

  export {
    V3 as V3,
    type MarketingSubscriptionsV3PublicSubscriptionStatus as MarketingSubscriptionsV3PublicSubscriptionStatus,
    type MarketingSubscriptionsV3PublicSubscriptionStatusesResponse as MarketingSubscriptionsV3PublicSubscriptionStatusesResponse,
    type MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest as MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest,
    type MarketingSubscriptionsV3SubscriptionDefinitionsResponse as MarketingSubscriptionsV3SubscriptionDefinitionsResponse,
  };
}
