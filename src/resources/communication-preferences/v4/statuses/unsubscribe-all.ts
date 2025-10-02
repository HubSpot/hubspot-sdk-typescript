// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchAPI from '../../../crm/v3/associations/batch';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class UnsubscribeAll extends APIResource {
  /**
   * Retrieve a contact's unsubscribed status
   */
  retrieve(
    subscriberIDString: string,
    query: UnsubscribeAllRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<UnsubscribeAllRetrieveResponse> {
    return this._client.get(
      path`/communication-preferences/v4/statuses/${subscriberIDString}/unsubscribe-all`,
      { query, ...options },
    );
  }

  /**
   * Unsubscribe a contact from all subscriptions
   */
  unsubscribe(
    subscriberIDString: string,
    params: UnsubscribeAllUnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<MarketingSubscriptionsActionResponseWithResultsPublicStatus> {
    const { channel, businessUnitId, verbose } = params;
    return this._client.post(
      path`/communication-preferences/v4/statuses/${subscriberIDString}/unsubscribe-all`,
      { query: { channel, businessUnitId, verbose }, ...options },
    );
  }
}

export interface MarketingSubscriptionsActionResponseWithResultsPublicStatus {
  completedAt: string;

  results: Array<MarketingSubscriptionsPublicStatus>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
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

export interface MarketingSubscriptionsPublicWideStatus {
  channel: 'EMAIL';

  status: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  subscriberIdString: string;

  timestamp: string;

  wideStatusType: 'PORTAL_WIDE' | 'BUSINESS_UNIT_WIDE';

  businessUnitId?: number;
}

export interface UnsubscribeAllRetrieveResponse {
  completedAt: string;

  results: Array<MarketingSubscriptionsPublicWideStatus>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface UnsubscribeAllRetrieveParams {
  channel: 'EMAIL';

  businessUnitId?: number;

  verbose?: boolean;
}

export interface UnsubscribeAllUnsubscribeParams {
  channel: 'EMAIL';

  businessUnitId?: number;

  verbose?: boolean;
}

export declare namespace UnsubscribeAll {
  export {
    type MarketingSubscriptionsActionResponseWithResultsPublicStatus as MarketingSubscriptionsActionResponseWithResultsPublicStatus,
    type MarketingSubscriptionsPublicStatus as MarketingSubscriptionsPublicStatus,
    type MarketingSubscriptionsPublicWideStatus as MarketingSubscriptionsPublicWideStatus,
    type UnsubscribeAllRetrieveResponse as UnsubscribeAllRetrieveResponse,
    type UnsubscribeAllRetrieveParams as UnsubscribeAllRetrieveParams,
    type UnsubscribeAllUnsubscribeParams as UnsubscribeAllUnsubscribeParams,
  };
}
