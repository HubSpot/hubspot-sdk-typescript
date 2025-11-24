// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as V4API from './v4';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Statuses extends APIResource {
  /**
   * Set the subscription status of a specific contact.
   *
   * @example
   * ```ts
   * const actionResponseWithResultsPublicStatus =
   *   await client.marketing.subscriptions.v4.statuses.update(
   *     'subscriberIdString',
   *     {
   *       channel: 'EMAIL',
   *       statusState: 'NOT_SPECIFIED',
   *       subscriptionId: 0,
   *     },
   *   );
   * ```
   */
  update(
    subscriberIDString: string,
    body: StatusUpdateParams,
    options?: RequestOptions,
  ): APIPromise<V4API.ActionResponseWithResultsPublicStatus> {
    return this._client.post(path`/communication-preferences/v4/statuses/${subscriberIDString}`, {
      body,
      ...options,
    });
  }

  /**
   * Batch retrieve subscription statuses for a set of contacts.
   *
   * @example
   * ```ts
   * const batchResponsePublicStatusBulkResponse =
   *   await client.marketing.subscriptions.v4.statuses.batchGet(
   *     { channel: 'EMAIL', inputs: ['string'] },
   *   );
   * ```
   */
  batchGet(
    params: StatusBatchGetParams,
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
   * Checks whether a set of contacts have opted out of all communications.
   *
   * @example
   * ```ts
   * const batchResponsePublicWideStatusBulkResponse =
   *   await client.marketing.subscriptions.v4.statuses.batchGetUnsubscribeAllStatus(
   *     { channel: 'EMAIL', inputs: ['string'] },
   *   );
   * ```
   */
  batchGetUnsubscribeAllStatus(
    params: StatusBatchGetUnsubscribeAllStatusParams,
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
   * Unsubscribe a set of contacts from all email subscriptions.
   *
   * @example
   * ```ts
   * const batchResponsePublicBulkOptOutFromAllResponse =
   *   await client.marketing.subscriptions.v4.statuses.batchUnsubscribeAll(
   *     { channel: 'EMAIL', inputs: ['string'] },
   *   );
   * ```
   */
  batchUnsubscribeAll(
    params: StatusBatchUnsubscribeAllParams,
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
   * Update the subscription status for a set of contacts.
   *
   * @example
   * ```ts
   * const batchResponsePublicStatus =
   *   await client.marketing.subscriptions.v4.statuses.batchUpdate(
   *     {
   *       inputs: [
   *         {
   *           channel: 'EMAIL',
   *           statusState: 'NOT_SPECIFIED',
   *           subscriberIdString: 'subscriberIdString',
   *           subscriptionId: 0,
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  batchUpdate(
    body: StatusBatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<V4API.BatchResponsePublicStatus> {
    return this._client.post('/communication-preferences/v4/statuses/batch/write', { body, ...options });
  }

  /**
   * Retrieve a contact's current email subscription preferences.
   *
   * @example
   * ```ts
   * const actionResponseWithResultsPublicStatus =
   *   await client.marketing.subscriptions.v4.statuses.get(
   *     'subscriberIdString',
   *     { channel: 'EMAIL' },
   *   );
   * ```
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
   * Check whether a contact has unsubscribed from all email subscriptions. If a
   * contact has not opted out of all communications, the response `results` array
   * will be empty.
   *
   * @example
   * ```ts
   * const actionResponseWithResultsPublicWideStatus =
   *   await client.marketing.subscriptions.v4.statuses.getUnsubscribeAllStatus(
   *     'subscriberIdString',
   *     { channel: 'EMAIL' },
   *   );
   * ```
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
   * Unsubscribe a contact from all email subscriptions.
   *
   * @example
   * ```ts
   * const actionResponseWithResultsPublicStatus =
   *   await client.marketing.subscriptions.v4.statuses.unsubscribeAll(
   *     'subscriberIdString',
   *     { channel: 'EMAIL' },
   *   );
   * ```
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
}

export interface StatusUpdateParams {
  /**
   * The type of communication channel, with 'EMAIL' as the only supported option.
   */
  channel: 'EMAIL';

  /**
   * The current subscription status of the contact, which can be 'SUBSCRIBED',
   * 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.
   */
  statusState: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

  /**
   * The unique identifier of the subscription to be updated.
   */
  subscriptionId: number;

  /**
   * The legal basis for communication, with options including
   * 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT',
   * 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR',
   * 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.
   */
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * An explanation for the legal basis used for communication.
   */
  legalBasisExplanation?: string;
}

export interface StatusBatchGetParams {
  /**
   * Query param: The channel type for the subscription type. Currently, the only
   * supported channel type is `EMAIL`.
   */
  channel: 'EMAIL';

  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: If you have the
   * [business unit add-on](https://developers.hubspot.com/beta-docs/guides/api/settings/business-units-api),
   * include this parameter to filter results by business unit ID. The default
   * Account business unit will always use `0`.
   */
  businessUnitId?: number;
}

export interface StatusBatchGetUnsubscribeAllStatusParams {
  /**
   * Query param: The channel type for the subscription type. Currently, the only
   * supported channel type is `EMAIL`.
   */
  channel: 'EMAIL';

  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: If you have the
   * [business unit add-on](https://developers.hubspot.com/beta-docs/guides/api/settings/business-units-api),
   * include this parameter to filter results by business unit ID. The default
   * Account business unit will always use `0`.
   */
  businessUnitId?: number;
}

export interface StatusBatchUnsubscribeAllParams {
  /**
   * Query param: The channel type for the subscription type. Currently, the only
   * supported channel type is `EMAIL`.
   */
  channel: 'EMAIL';

  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: If you have the
   * [business unit add-on](https://developers.hubspot.com/beta-docs/guides/api/settings/business-units-api),
   * include this parameter to filter results by business unit ID. The default
   * Account business unit will always use `0`.
   */
  businessUnitId?: number;

  /**
   * Query param: Set to `true` to include the details of the updated subscription
   * statuses in the response. Not including this parameter will result in an empty
   * response.
   */
  verbose?: boolean;
}

export interface StatusBatchUpdateParams {
  inputs: Array<V4API.PublicStatusRequest>;
}

export interface StatusGetParams {
  /**
   * The channel type for the subscription type. Currently, the only supported
   * channel type is `EMAIL`.
   */
  channel: 'EMAIL';

  /**
   * If you have the
   * [business unit add-on](https://developers.hubspot.com/beta-docs/guides/api/settings/business-units-api),
   * include this parameter to filter results by business unit ID. The default
   * Account business unit will always use `0`.
   */
  businessUnitId?: number;
}

export interface StatusGetUnsubscribeAllStatusParams {
  /**
   * The channel type for the subscription type. Currently, the only supported
   * channel type is `EMAIL`.
   */
  channel: 'EMAIL';

  /**
   * If you have the
   * [business unit add-on](https://developers.hubspot.com/beta-docs/guides/api/settings/business-units-api),
   * include this parameter to filter results by business unit ID. The default
   * Account business unit will always use `0`.
   */
  businessUnitId?: number;

  /**
   * Set to `true` to include the details of the updated subscription statuses in the
   * response. Not including this parameter will result in an empty response.
   */
  verbose?: boolean;
}

export interface StatusUnsubscribeAllParams {
  /**
   * The channel type for the subscription type. Currently, the only supported
   * channel type is `EMAIL`.
   */
  channel: 'EMAIL';

  /**
   * If you have the
   * [business unit add-on](https://developers.hubspot.com/beta-docs/guides/api/settings/business-units-api),
   * include this parameter to filter results by business unit ID. The default
   * Account business unit will always use `0`.
   */
  businessUnitId?: number;

  /**
   * Set to `true` to include the details of the updated subscription statuses in the
   * response. Not including this parameter will result in an empty response.
   */
  verbose?: boolean;
}

export declare namespace Statuses {
  export {
    type StatusUpdateParams as StatusUpdateParams,
    type StatusBatchGetParams as StatusBatchGetParams,
    type StatusBatchGetUnsubscribeAllStatusParams as StatusBatchGetUnsubscribeAllStatusParams,
    type StatusBatchUnsubscribeAllParams as StatusBatchUnsubscribeAllParams,
    type StatusBatchUpdateParams as StatusBatchUpdateParams,
    type StatusGetParams as StatusGetParams,
    type StatusGetUnsubscribeAllStatusParams as StatusGetUnsubscribeAllStatusParams,
    type StatusUnsubscribeAllParams as StatusUnsubscribeAllParams,
  };
}
