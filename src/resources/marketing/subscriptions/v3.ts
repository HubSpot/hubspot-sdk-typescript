// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';

export class V3 extends APIResource {}

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

export interface MarketingSubscriptionsV3PublicSubscriptionStatusesResponse {
  recipient: string;

  subscriptionStatuses: Array<MarketingSubscriptionsV3PublicSubscriptionStatus>;
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

export interface MarketingSubscriptionsV3SubscriptionDefinitionsResponse {
  subscriptionDefinitions: Array<SubscriptionsAPI.MarketingSubscriptionsSubscriptionDefinition>;
}

export declare namespace V3 {
  export {
    type MarketingSubscriptionsV3PublicSubscriptionStatus as MarketingSubscriptionsV3PublicSubscriptionStatus,
    type MarketingSubscriptionsV3PublicSubscriptionStatusesResponse as MarketingSubscriptionsV3PublicSubscriptionStatusesResponse,
    type MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest as MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest,
    type MarketingSubscriptionsV3SubscriptionDefinitionsResponse as MarketingSubscriptionsV3SubscriptionDefinitionsResponse,
  };
}
