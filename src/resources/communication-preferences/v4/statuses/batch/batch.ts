// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as UnsubscribeAllAPI from '../unsubscribe-all';
import * as BatchAPI from '../../../../crm/v3/associations/batch';
import * as BatchUnsubscribeAllAPI from './unsubscribe-all';
import {
  UnsubscribeAll,
  UnsubscribeAllRetrieveParams,
  UnsubscribeAllRetrieveResponse,
  UnsubscribeAllUnsubscribeAllParams,
  UnsubscribeAllUnsubscribeAllResponse,
} from './unsubscribe-all';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Batch extends APIResource {
  unsubscribeAll: BatchUnsubscribeAllAPI.UnsubscribeAll = new BatchUnsubscribeAllAPI.UnsubscribeAll(
    this._client,
  );

  /**
   * Batch retrieve subscription statuses
   */
  retrieve(params: BatchRetrieveParams, options?: RequestOptions): APIPromise<BatchRetrieveResponse> {
    const { channel, businessUnitId, ...body } = params;
    return this._client.post('/communication-preferences/v4/statuses/batch/read', {
      query: { channel, businessUnitId },
      body,
      ...options,
    });
  }

  /**
   * Batch update subscription status
   */
  update(body: BatchUpdateParams, options?: RequestOptions): APIPromise<BatchUpdateResponse> {
    return this._client.post('/communication-preferences/v4/statuses/batch/write', { body, ...options });
  }
}

export interface BatchRetrieveResponse {
  completedAt: string;

  results: Array<BatchRetrieveResponse.Result>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export namespace BatchRetrieveResponse {
  export interface Result {
    statuses: Array<UnsubscribeAllAPI.MarketingSubscriptionsPublicStatus>;

    subscriberIdString: string;
  }
}

export interface BatchUpdateResponse {
  completedAt: string;

  results: Array<UnsubscribeAllAPI.MarketingSubscriptionsPublicStatus>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchRetrieveParams {
  /**
   * Query param:
   */
  channel: 'EMAIL';

  /**
   * Body param:
   */
  inputs: Array<string>;

  /**
   * Query param:
   */
  businessUnitId?: number;
}

export interface BatchUpdateParams {
  inputs: Array<BatchUpdateParams.Input>;
}

export namespace BatchUpdateParams {
  export interface Input {
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
}

Batch.UnsubscribeAll = UnsubscribeAll;

export declare namespace Batch {
  export {
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchUpdateResponse as BatchUpdateResponse,
    type BatchRetrieveParams as BatchRetrieveParams,
    type BatchUpdateParams as BatchUpdateParams,
  };

  export {
    UnsubscribeAll as UnsubscribeAll,
    type UnsubscribeAllRetrieveResponse as UnsubscribeAllRetrieveResponse,
    type UnsubscribeAllUnsubscribeAllResponse as UnsubscribeAllUnsubscribeAllResponse,
    type UnsubscribeAllRetrieveParams as UnsubscribeAllRetrieveParams,
    type UnsubscribeAllUnsubscribeAllParams as UnsubscribeAllUnsubscribeAllParams,
  };
}
