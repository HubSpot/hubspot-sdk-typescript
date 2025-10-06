// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as V4API from './v4';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Statuses extends APIResource {
  /**
   * Get subscription preferences for a specific contact
   */
  get(
    subscriberIDString: string,
    query: StatusGetParams,
    options?: RequestOptions,
  ): APIPromise<V4API.ActionResponseWithResultsPublicStatus> {
    return this._client.get(path`/communication-preferences/v4/statuses/${subscriberIDString}`, {
      query,
      ...options,
    });
  }

  /**
   * Batch retrieve subscription statuses
   */
  getBatch(
    params: StatusGetBatchParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponsePublicStatusBulkResponse> {
    const { channel, businessUnitId, ...body } = params;
    return this._client.post('/communication-preferences/v4/statuses/batch/read', {
      query: { channel, businessUnitId },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a contact's unsubscribed status
   */
  getUnsubscribeAllStatus(
    subscriberIDString: string,
    query: StatusGetUnsubscribeAllStatusParams,
    options?: RequestOptions,
  ): APIPromise<V4API.ActionResponseWithResultsPublicWideStatus> {
    return this._client.get(
      path`/communication-preferences/v4/statuses/${subscriberIDString}/unsubscribe-all`,
      { query, ...options },
    );
  }

  /**
   * Batch retrieve contacts who have opted out of all communications
   */
  getUnsubscribeAllStatusBatch(
    params: StatusGetUnsubscribeAllStatusBatchParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponsePublicWideStatusBulkResponse> {
    const { channel, businessUnitId, ...body } = params;
    return this._client.post('/communication-preferences/v4/statuses/batch/unsubscribe-all/read', {
      query: { channel, businessUnitId },
      body,
      ...options,
    });
  }

  /**
   * Update a contact's subscription status
   */
  set(
    subscriberIDString: string,
    body: StatusSetParams,
    options?: RequestOptions,
  ): APIPromise<V4API.ActionResponseWithResultsPublicStatus> {
    return this._client.post(path`/communication-preferences/v4/statuses/${subscriberIDString}`, {
      body,
      ...options,
    });
  }

  /**
   * Unsubscribe a contact from all subscriptions
   */
  unsubscribeAll(
    subscriberIDString: string,
    params: StatusUnsubscribeAllParams,
    options?: RequestOptions,
  ): APIPromise<V4API.ActionResponseWithResultsPublicStatus> {
    const { channel, businessUnitId, verbose } = params;
    return this._client.post(
      path`/communication-preferences/v4/statuses/${subscriberIDString}/unsubscribe-all`,
      { query: { channel, businessUnitId, verbose }, ...options },
    );
  }

  /**
   * Batch unsubscribe contacts from all subscriptions
   */
  unsubscribeAllBatch(
    params: StatusUnsubscribeAllBatchParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponsePublicBulkOptOutFromAllResponse> {
    const { channel, businessUnitId, verbose, ...body } = params;
    return this._client.post('/communication-preferences/v4/statuses/batch/unsubscribe-all', {
      query: { channel, businessUnitId, verbose },
      body,
      ...options,
    });
  }

  /**
   * Batch update subscription status
   */
  updateBatch(
    body: StatusUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponsePublicStatus> {
    return this._client.post('/communication-preferences/v4/statuses/batch/write', { body, ...options });
  }
}

export interface StatusGetParams {
  channel: 'EMAIL';

  businessUnitId?: number;
}

export interface StatusGetBatchParams {
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

export interface StatusGetUnsubscribeAllStatusParams {
  channel: 'EMAIL';

  businessUnitId?: number;

  verbose?: boolean;
}

export interface StatusGetUnsubscribeAllStatusBatchParams {
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

export interface StatusSetParams {
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

export interface StatusUnsubscribeAllParams {
  channel: 'EMAIL';

  businessUnitId?: number;

  verbose?: boolean;
}

export interface StatusUnsubscribeAllBatchParams {
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

  /**
   * Query param:
   */
  verbose?: boolean;
}

export interface StatusUpdateBatchParams {
  inputs: Array<V4API.PublicStatusRequest>;
}

export declare namespace Statuses {
  export {
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
