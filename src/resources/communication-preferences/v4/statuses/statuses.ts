// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UnsubscribeAllAPI from './unsubscribe-all';
import {
  MarketingSubscriptionsActionResponseWithResultsPublicStatus,
  MarketingSubscriptionsPublicStatus,
  MarketingSubscriptionsPublicWideStatus,
  UnsubscribeAll,
  UnsubscribeAllRetrieveParams,
  UnsubscribeAllRetrieveResponse,
  UnsubscribeAllUnsubscribeParams,
} from './unsubscribe-all';
import * as BatchAPI from './batch/batch';
import {
  Batch,
  BatchRetrieveParams,
  BatchRetrieveResponse,
  BatchUpdateParams,
  BatchUpdateResponse,
} from './batch/batch';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Statuses extends APIResource {
  unsubscribeAll: UnsubscribeAllAPI.UnsubscribeAll = new UnsubscribeAllAPI.UnsubscribeAll(this._client);
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Get subscription preferences for a specific contact
   */
  retrieve(
    subscriberIDString: string,
    query: StatusRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<UnsubscribeAllAPI.MarketingSubscriptionsActionResponseWithResultsPublicStatus> {
    return this._client.get(path`/communication-preferences/v4/statuses/${subscriberIDString}`, {
      query,
      ...options,
    });
  }

  /**
   * Update a contact's subscription status
   */
  update(
    subscriberIDString: string,
    body: StatusUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UnsubscribeAllAPI.MarketingSubscriptionsActionResponseWithResultsPublicStatus> {
    return this._client.post(path`/communication-preferences/v4/statuses/${subscriberIDString}`, {
      body,
      ...options,
    });
  }
}

export interface StatusRetrieveParams {
  channel: 'EMAIL';

  businessUnitId?: number;
}

export interface StatusUpdateParams {
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

Statuses.UnsubscribeAll = UnsubscribeAll;
Statuses.Batch = Batch;

export declare namespace Statuses {
  export { type StatusRetrieveParams as StatusRetrieveParams, type StatusUpdateParams as StatusUpdateParams };

  export {
    UnsubscribeAll as UnsubscribeAll,
    type MarketingSubscriptionsActionResponseWithResultsPublicStatus as MarketingSubscriptionsActionResponseWithResultsPublicStatus,
    type MarketingSubscriptionsPublicStatus as MarketingSubscriptionsPublicStatus,
    type MarketingSubscriptionsPublicWideStatus as MarketingSubscriptionsPublicWideStatus,
    type UnsubscribeAllRetrieveResponse as UnsubscribeAllRetrieveResponse,
    type UnsubscribeAllRetrieveParams as UnsubscribeAllRetrieveParams,
    type UnsubscribeAllUnsubscribeParams as UnsubscribeAllUnsubscribeParams,
  };

  export {
    Batch as Batch,
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchUpdateResponse as BatchUpdateResponse,
    type BatchRetrieveParams as BatchRetrieveParams,
    type BatchUpdateParams as BatchUpdateParams,
  };
}
