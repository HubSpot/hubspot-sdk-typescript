// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';

export class V3 extends APIResource {}

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

export interface SubscriptionDefinitionsResponse {
  subscriptionDefinitions: Array<SubscriptionsAPI.SubscriptionDefinition>;
}

export declare namespace V3 {
  export {
    type PublicSubscriptionStatus as PublicSubscriptionStatus,
    type PublicSubscriptionStatusesResponse as PublicSubscriptionStatusesResponse,
    type PublicUpdateSubscriptionStatusRequest as PublicUpdateSubscriptionStatusRequest,
    type SubscriptionDefinitionsResponse as SubscriptionDefinitionsResponse,
  };
}
