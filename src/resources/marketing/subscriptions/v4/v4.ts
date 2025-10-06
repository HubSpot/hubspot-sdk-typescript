// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as SubscriptionsAPI from '../subscriptions';
import * as DefinitionsAPI from './definitions';
import { DefinitionListParams, Definitions } from './definitions';
import * as StatusesAPI from './statuses';
import {
  StatusGetBatchParams,
  StatusGetParams,
  StatusGetUnsubscribeAllStatusBatchParams,
  StatusGetUnsubscribeAllStatusParams,
  StatusSetParams,
  StatusUnsubscribeAllBatchParams,
  StatusUnsubscribeAllParams,
  StatusUpdateBatchParams,
  Statuses,
} from './statuses';

export class V4 extends APIResource {
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);
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

V4.Definitions = Definitions;
V4.Statuses = Statuses;

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

  export { Definitions as Definitions, type DefinitionListParams as DefinitionListParams };

  export {
    Statuses as Statuses,
    type StatusGetParams as StatusGetParams,
    type StatusGetBatchParams as StatusGetBatchParams,
    type StatusGetUnsubscribeAllStatusParams as StatusGetUnsubscribeAllStatusParams,
    type StatusGetUnsubscribeAllStatusBatchParams as StatusGetUnsubscribeAllStatusBatchParams,
    type StatusSetParams as StatusSetParams,
    type StatusUnsubscribeAllParams as StatusUnsubscribeAllParams,
    type StatusUnsubscribeAllBatchParams as StatusUnsubscribeAllBatchParams,
    type StatusUpdateBatchParams as StatusUpdateBatchParams,
  };
}
