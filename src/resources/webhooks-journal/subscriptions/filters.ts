// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseFilters extends APIResource {
  static override readonly _key: readonly ['webhooksJournal', 'subscriptions', 'filters'] = Object.freeze([
    'webhooksJournal',
    'subscriptions',
    'filters',
  ] as const);

  /**
   * Create a new filter for a specific webhook subscription in the HubSpot account.
   * This endpoint allows you to define conditions that determine when a webhook
   * should be triggered. The filter is associated with a subscription identified by
   * its ID, and the request must include the filter details.
   */
  create(body: FilterCreateParams, options?: RequestOptions): APIPromise<Shared.FilterCreateResponse> {
    return this._client.post('/webhooks-journal/subscriptions/2026-03/filters', { body, ...options });
  }

  /**
   * Retrieve the filters associated with a specific webhook subscription. This
   * endpoint allows you to view the filters applied to a subscription, which can
   * help in managing and understanding the conditions set for webhook events.
   */
  list(subscriptionID: number, options?: RequestOptions): APIPromise<FilterListResponse> {
    return this._client.get(
      path`/webhooks-journal/subscriptions/2026-03/filters/subscription/${subscriptionID}`,
      options,
    );
  }

  /**
   * Remove a specific filter from the webhooks journal subscriptions. This operation
   * is useful for managing and cleaning up filters that are no longer needed. Once
   * deleted, the filter cannot be recovered.
   */
  delete(filterID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks-journal/subscriptions/2026-03/filters/${filterID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific filter associated with a webhook journal subscription. This
   * endpoint allows you to access the details of the filter identified by the
   * filterId, which is useful for managing and understanding the conditions applied
   * to webhook events.
   */
  get(filterID: number, options?: RequestOptions): APIPromise<Shared.FilterResponse> {
    return this._client.get(path`/webhooks-journal/subscriptions/2026-03/filters/${filterID}`, options);
  }
}
export class Filters extends BaseFilters {}

export type FilterListResponse = Array<Shared.FilterResponse>;

export interface FilterCreateParams {
  /**
   * Defines a single condition for searching CRM objects, specifying the property to
   * filter on, the operator to use (such as equals, greater than, or contains), and
   * the value(s) to compare against.
   */
  filter: Shared.Filter;

  /**
   * The unique identifier of the subscription to which the filter will be applied.
   * It is an integer formatted as int64.
   */
  subscriptionId: number;
}

export declare namespace Filters {
  export { type FilterListResponse as FilterListResponse, type FilterCreateParams as FilterCreateParams };
}
