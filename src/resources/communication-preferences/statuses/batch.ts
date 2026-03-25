// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CommunicationPreferencesAPI from '../communication-preferences';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Retrieve the unsubscribe-all status for a batch of subscribers in a specified
   * channel. This endpoint is useful for checking the current unsubscribe-all status
   * of multiple subscribers at once, helping to manage and audit communication
   * preferences efficiently.
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
   * Retrieve the subscription statuses for multiple subscribers in a batch
   * operation. This endpoint allows you to check the communication preferences of
   * several subscribers at once, which is useful for managing large lists of
   * contacts efficiently.
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

export interface BatchGetUnsubscribeAllStatusesParams {
  /**
   * Query param: The communication channel to check the unsubscribe-all status for.
   * Currently, only 'EMAIL' is supported. This parameter is required.
   */
  channel: 'EMAIL';

  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: The ID of the business unit for which the statuses are being
   * retrieved. This is an optional parameter.
   */
  businessUnitId?: number;
}

export interface BatchReadParams {
  /**
   * Query param: The communication channel to filter by. This parameter is required
   * and currently only supports 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: An optional identifier for the business unit. This is an integer
   * value.
   */
  businessUnitId?: number;
}

export interface BatchUnsubscribeAllParams {
  /**
   * Query param: A required string specifying the communication channel. Currently,
   * only 'EMAIL' is supported.
   */
  channel: 'EMAIL';

  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: The ID of the business unit to which the operation applies. It is
   * an optional parameter.
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
