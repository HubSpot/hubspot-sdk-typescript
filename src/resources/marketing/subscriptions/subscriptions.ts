// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as V3API from './v3';
import {
  PublicSubscriptionStatus,
  PublicSubscriptionStatusesResponse,
  PublicUpdateSubscriptionStatusRequest,
  SubscriptionDefinitionsResponse,
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
  list(options?: RequestOptions): APIPromise<V3API.SubscriptionDefinitionsResponse> {
    return this._client.get('/communication-preferences/v3/definitions', options);
  }

  /**
   * Get subscription statuses for a contact
   */
  getEmailStatus(
    emailAddress: string,
    options?: RequestOptions,
  ): APIPromise<V3API.PublicSubscriptionStatusesResponse> {
    return this._client.get(path`/communication-preferences/v3/status/email/${emailAddress}`, options);
  }

  /**
   * Subscribe a contact
   */
  subscribe(
    body: SubscriptionSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<V3API.PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/v3/subscribe', { body, ...options });
  }

  /**
   * Unsubscribe a contact
   */
  unsubscribe(
    body: SubscriptionUnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<V3API.PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/v3/unsubscribe', { body, ...options });
  }
}

export interface ActionResponseWithResultsPublicStatus {
  completedAt: string;

  results: Array<PublicStatus>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface ActionResponseWithResultsPublicWideStatus {
  completedAt: string;

  results: Array<PublicWideStatus>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface ActionResponseWithResultsSubscriptionDefinition {
  completedAt: string;

  results: Array<SubscriptionDefinition>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchInputPublicStatusRequest {
  inputs: Array<PublicStatusRequest>;
}

export interface BatchResponsePublicBulkOptOutFromAllResponse {
  completedAt: string;

  results: Array<PublicBulkOptOutFromAllResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponsePublicStatus {
  completedAt: string;

  results: Array<PublicStatus>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponsePublicStatusBulkResponse {
  completedAt: string;

  results: Array<PublicStatusBulkResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponsePublicStatusBulkResponseWithErrors {
  completedAt: string;

  results: Array<PublicStatusBulkResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponsePublicWideStatusBulkResponse {
  completedAt: string;

  results: Array<PublicWideStatusBulkResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponsePublicWideStatusBulkResponseWithErrors {
  completedAt: string;

  results: Array<PublicWideStatusBulkResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface PartialPublicStatusRequest {
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

export interface PublicBulkOptOutFromAllResponse {
  subscriberIdString: string;

  statuses?: Array<PublicStatus>;
}

export interface PublicStatus {
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

export interface PublicStatusBulkResponse {
  statuses: Array<PublicStatus>;

  subscriberIdString: string;
}

export interface PublicStatusRequest {
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

export interface PublicSubscriptionTranslation {
  createdAt: number;

  languageCode: string;

  name: string;

  subscriptionId: number;

  updatedAt: number;
}

export interface PublicWideStatus {
  channel: 'EMAIL';

  status: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  subscriberIdString: string;

  timestamp: string;

  wideStatusType: 'PORTAL_WIDE' | 'BUSINESS_UNIT_WIDE';

  businessUnitId?: number;
}

export interface PublicWideStatusBulkResponse {
  subscriberIdString: string;

  wideStatuses: Array<PublicWideStatus>;
}

export interface SubscriptionDefinition {
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

  subscriptionTranslations?: Array<PublicSubscriptionTranslation>;
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
    type ActionResponseWithResultsPublicStatus as ActionResponseWithResultsPublicStatus,
    type ActionResponseWithResultsPublicWideStatus as ActionResponseWithResultsPublicWideStatus,
    type ActionResponseWithResultsSubscriptionDefinition as ActionResponseWithResultsSubscriptionDefinition,
    type BatchInputPublicStatusRequest as BatchInputPublicStatusRequest,
    type BatchResponsePublicBulkOptOutFromAllResponse as BatchResponsePublicBulkOptOutFromAllResponse,
    type BatchResponsePublicStatus as BatchResponsePublicStatus,
    type BatchResponsePublicStatusBulkResponse as BatchResponsePublicStatusBulkResponse,
    type BatchResponsePublicStatusBulkResponseWithErrors as BatchResponsePublicStatusBulkResponseWithErrors,
    type BatchResponsePublicWideStatusBulkResponse as BatchResponsePublicWideStatusBulkResponse,
    type BatchResponsePublicWideStatusBulkResponseWithErrors as BatchResponsePublicWideStatusBulkResponseWithErrors,
    type PartialPublicStatusRequest as PartialPublicStatusRequest,
    type PublicBulkOptOutFromAllResponse as PublicBulkOptOutFromAllResponse,
    type PublicStatus as PublicStatus,
    type PublicStatusBulkResponse as PublicStatusBulkResponse,
    type PublicStatusRequest as PublicStatusRequest,
    type PublicSubscriptionTranslation as PublicSubscriptionTranslation,
    type PublicWideStatus as PublicWideStatus,
    type PublicWideStatusBulkResponse as PublicWideStatusBulkResponse,
    type SubscriptionDefinition as SubscriptionDefinition,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionUnsubscribeParams as SubscriptionUnsubscribeParams,
  };

  export {
    V3 as V3,
    type PublicSubscriptionStatus as PublicSubscriptionStatus,
    type PublicSubscriptionStatusesResponse as PublicSubscriptionStatusesResponse,
    type PublicUpdateSubscriptionStatusRequest as PublicUpdateSubscriptionStatusRequest,
    type SubscriptionDefinitionsResponse as SubscriptionDefinitionsResponse,
  };
}
