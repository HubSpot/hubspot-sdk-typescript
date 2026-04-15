// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CommunicationPreferencesAPI from '../communication-preferences';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['communicationPreferences', 'statuses', 'batch'] = Object.freeze([
    'communicationPreferences',
    'statuses',
    'batch',
  ] as const);

  /**
   * Checks whether a set of contacts have opted out of all communications.
   */
  getUnsubscribeAllStatuses(
    params: BatchGetUnsubscribeAllStatusesParams,
    options?: RequestOptions,
  ): APIPromise<CommunicationPreferencesAPI.BatchResponsePublicWideStatusBulkResponse> {
    const { channel, businessUnitId, ...body } = params;
    return this._client.post('/communication-preferences/2026-03/statuses/batch/unsubscribe-all/read', {
      query: { channel, businessUnitId },
      body,
      ...options,
    });
  }

  /**
   * Batch retrieve subscription statuses for a set of contacts.
   */
  read(
    params: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<CommunicationPreferencesAPI.BatchResponsePublicStatusBulkResponse> {
    const { channel, businessUnitId, ...body } = params;
    return this._client.post('/communication-preferences/2026-03/statuses/batch/read', {
      query: { channel, businessUnitId },
      body,
      ...options,
    });
  }

  /**
   * Unsubscribe a set of contacts from all email subscriptions.
   */
  unsubscribeAll(
    params: BatchUnsubscribeAllParams,
    options?: RequestOptions,
  ): APIPromise<CommunicationPreferencesAPI.BatchResponsePublicBulkOptOutFromAllResponse> {
    const { channel, businessUnitId, verbose, ...body } = params;
    return this._client.post('/communication-preferences/2026-03/statuses/batch/unsubscribe-all', {
      query: { channel, businessUnitId, verbose },
      body,
      ...options,
    });
  }

  /**
   * Update the subscription status for a set of contacts.
   */
  updateStatuses(
    body: BatchUpdateStatusesParams,
    options?: RequestOptions,
  ): APIPromise<CommunicationPreferencesAPI.BatchResponsePublicStatus> {
    return this._client.post('/communication-preferences/2026-03/statuses/batch/write', { body, ...options });
  }
}
export class Batch extends BaseBatch {}

export interface BatchGetUnsubscribeAllStatusesParams {
  /**
   * Query param: The communication channel to filter the unsubscribe statuses. This
   * parameter is required and currently supports 'EMAIL' as a valid value.
   */
  channel: 'EMAIL';

  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: The ID of the business unit to filter the results. This is an
   * optional parameter.
   */
  businessUnitId?: number;
}

export interface BatchReadParams {
  /**
   * Query param: The communication channel to filter the subscription statuses. Must
   * be 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: An optional integer representing the business unit ID. This
   * parameter helps to filter the results based on the specific business unit.
   */
  businessUnitId?: number;
}

export interface BatchUnsubscribeAllParams {
  /**
   * Query param: The communication channel from which subscribers will be
   * unsubscribed. This parameter is required and currently supports only 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: An optional integer representing the business unit ID for which the
   * operation is being performed.
   */
  businessUnitId?: number;

  /**
   * Query param: A boolean indicating whether to include detailed information in the
   * response. Defaults to false.
   */
  verbose?: boolean;
}

export interface BatchUpdateStatusesParams {
  /**
   * An array of PublicStatusRequest objects, each representing a subscription status
   * update request. This property is required.
   */
  inputs: Array<CommunicationPreferencesAPI.PublicStatusRequest>;
}

export declare namespace Batch {
  export {
    type BatchGetUnsubscribeAllStatusesParams as BatchGetUnsubscribeAllStatusesParams,
    type BatchReadParams as BatchReadParams,
    type BatchUnsubscribeAllParams as BatchUnsubscribeAllParams,
    type BatchUpdateStatusesParams as BatchUpdateStatusesParams,
  };
}
