// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as UnsubscribeAllAPI from '../unsubscribe-all';
import * as BatchAPI from '../../../../crm/v3/associations/batch';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class UnsubscribeAll extends APIResource {
  /**
   * Batch retrieve contacts who have opted out of all communications
   */
  retrieve(
    params: UnsubscribeAllRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<UnsubscribeAllRetrieveResponse> {
    const { channel, businessUnitId, ...body } = params;
    return this._client.post('/communication-preferences/v4/statuses/batch/unsubscribe-all/read', {
      query: { channel, businessUnitId },
      body,
      ...options,
    });
  }

  /**
   * Batch unsubscribe contacts from all subscriptions
   */
  unsubscribeAll(
    params: UnsubscribeAllUnsubscribeAllParams,
    options?: RequestOptions,
  ): APIPromise<UnsubscribeAllUnsubscribeAllResponse> {
    const { channel, businessUnitId, verbose, ...body } = params;
    return this._client.post('/communication-preferences/v4/statuses/batch/unsubscribe-all', {
      query: { channel, businessUnitId, verbose },
      body,
      ...options,
    });
  }
}

export interface UnsubscribeAllRetrieveResponse {
  completedAt: string;

  results: Array<UnsubscribeAllRetrieveResponse.Result>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export namespace UnsubscribeAllRetrieveResponse {
  export interface Result {
    subscriberIdString: string;

    wideStatuses: Array<UnsubscribeAllAPI.MarketingSubscriptionsPublicWideStatus>;
  }
}

export interface UnsubscribeAllUnsubscribeAllResponse {
  completedAt: string;

  results: Array<UnsubscribeAllUnsubscribeAllResponse.Result>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export namespace UnsubscribeAllUnsubscribeAllResponse {
  export interface Result {
    subscriberIdString: string;

    statuses?: Array<UnsubscribeAllAPI.MarketingSubscriptionsPublicStatus>;
  }
}

export interface UnsubscribeAllRetrieveParams {
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

export interface UnsubscribeAllUnsubscribeAllParams {
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

export declare namespace UnsubscribeAll {
  export {
    type UnsubscribeAllRetrieveResponse as UnsubscribeAllRetrieveResponse,
    type UnsubscribeAllUnsubscribeAllResponse as UnsubscribeAllUnsubscribeAllResponse,
    type UnsubscribeAllRetrieveParams as UnsubscribeAllRetrieveParams,
    type UnsubscribeAllUnsubscribeAllParams as UnsubscribeAllUnsubscribeAllParams,
  };
}
