// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as SubscriptionsAPI from './subscriptions';

export class V4 extends APIResource {}

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

  results: Array<SubscriptionsAPI.SubscriptionDefinition>;

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
  /**
   * The type of communication channel. Currently, only `EMAIL` is supported.
   */
  channel: 'EMAIL';

  /**
   * The status of the contact's subscription.
   */
  statusState: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  /**
   * The contact's email address.
   */
  subscriberIdString: string;

  /**
   * The ID of the subscription to update.
   */
  subscriptionId: number;

  /**
   * The legal basis for communication.
   */
  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  /**
   * The explanation for the legal basis.
   */
  legalBasisExplanation?: string;
}

export interface PublicSubscriptionTranslation {
  createdAt: number;

  description: string;

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

export declare namespace V4 {
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
  };
}
