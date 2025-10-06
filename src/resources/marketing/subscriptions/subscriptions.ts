// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V4API from './v4/v4';
import {
  ActionResponseWithResultsPublicStatus,
  ActionResponseWithResultsPublicWideStatus,
  ActionResponseWithResultsSubscriptionDefinition,
  BatchInputPublicStatusRequest,
  BatchResponsePublicBulkOptOutFromAllResponse,
  BatchResponsePublicStatus,
  BatchResponsePublicStatusBulkResponse,
  BatchResponsePublicStatusBulkResponseWithErrors,
  BatchResponsePublicWideStatusBulkResponse,
  BatchResponsePublicWideStatusBulkResponseWithErrors,
  PartialPublicStatusRequest,
  PublicBulkOptOutFromAllResponse,
  PublicStatus,
  PublicStatusBulkResponse,
  PublicStatusRequest,
  PublicSubscriptionTranslation,
  PublicWideStatus,
  PublicWideStatusBulkResponse,
  V4,
} from './v4/v4';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriptions extends APIResource {
  v4: V4API.V4 = new V4API.V4(this._client);

  /**
   * Get subscription definitions
   */
  list(options?: RequestOptions): APIPromise<SubscriptionDefinitionsResponse> {
    return this._client.get('/communication-preferences/v3/definitions', options);
  }

  /**
   * Get subscription statuses for a contact
   */
  getEmailStatus(
    emailAddress: string,
    options?: RequestOptions,
  ): APIPromise<PublicSubscriptionStatusesResponse> {
    return this._client.get(path`/communication-preferences/v3/status/email/${emailAddress}`, options);
  }

  /**
   * Subscribe a contact
   */
  subscribe(
    body: SubscriptionSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/v3/subscribe', { body, ...options });
  }

  /**
   * Unsubscribe a contact
   */
  unsubscribe(
    body: SubscriptionUnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/v3/unsubscribe', { body, ...options });
  }
}

export interface PublicSubscriptionStatus {
  id: string;

  name: string;

  sourceOfStatus: 'PORTAL_WIDE_STATUS' | 'BRAND_WIDE_STATUS' | 'SUBSCRIPTION_STATUS';

  status: 'SUBSCRIBED' | 'NOT_SUBSCRIBED';

  brandId?: number;

  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  legalBasisExplanation?: string;

  preferenceGroupName?: string;
}

export interface PublicSubscriptionStatusesResponse {
  recipient: string;

  subscriptionStatuses: Array<PublicSubscriptionStatus>;
}

export interface PublicUpdateSubscriptionStatusRequest {
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
}

export interface SubscriptionDefinitionsResponse {
  subscriptionDefinitions: Array<SubscriptionDefinition>;
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

Subscriptions.V4 = V4;

export declare namespace Subscriptions {
  export {
    type PublicSubscriptionStatus as PublicSubscriptionStatus,
    type PublicSubscriptionStatusesResponse as PublicSubscriptionStatusesResponse,
    type PublicUpdateSubscriptionStatusRequest as PublicUpdateSubscriptionStatusRequest,
    type SubscriptionDefinition as SubscriptionDefinition,
    type SubscriptionDefinitionsResponse as SubscriptionDefinitionsResponse,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionUnsubscribeParams as SubscriptionUnsubscribeParams,
  };

  export {
    V4 as V4,
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
