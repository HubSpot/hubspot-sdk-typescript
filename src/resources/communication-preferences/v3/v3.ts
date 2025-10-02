// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StatusAPI from './status';
import { Status, StatusRetrieveResponse } from './status';
import * as V4API from '../v4/v4';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V3 extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);

  /**
   * Get subscription definitions
   */
  retrieveDefinitions(options?: RequestOptions): APIPromise<V3RetrieveDefinitionsResponse> {
    return this._client.get('/communication-preferences/v3/definitions', options);
  }

  /**
   * Subscribe a contact
   */
  subscribe(
    body: V3SubscribeParams,
    options?: RequestOptions,
  ): APIPromise<MarketingSubscriptionsV3PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/v3/subscribe', { body, ...options });
  }

  /**
   * Unsubscribe a contact
   */
  unsubscribe(
    body: V3UnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<MarketingSubscriptionsV3PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/v3/unsubscribe', { body, ...options });
  }
}

export interface MarketingSubscriptionsV3PublicSubscriptionStatus {
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

export interface MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest {
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

export interface V3RetrieveDefinitionsResponse {
  subscriptionDefinitions: Array<V4API.MarketingSubscriptionsSubscriptionDefinition>;
}

export interface V3SubscribeParams {
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

export interface V3UnsubscribeParams {
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

V3.Status = Status;

export declare namespace V3 {
  export {
    type MarketingSubscriptionsV3PublicSubscriptionStatus as MarketingSubscriptionsV3PublicSubscriptionStatus,
    type MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest as MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest,
    type V3RetrieveDefinitionsResponse as V3RetrieveDefinitionsResponse,
    type V3SubscribeParams as V3SubscribeParams,
    type V3UnsubscribeParams as V3UnsubscribeParams,
  };

  export { Status as Status, type StatusRetrieveResponse as StatusRetrieveResponse };
}
