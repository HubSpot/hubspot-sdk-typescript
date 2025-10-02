// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V3API from './v3';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Status extends APIResource {
  /**
   * Get subscription statuses for a contact
   */
  retrieve(emailAddress: string, options?: RequestOptions): APIPromise<StatusRetrieveResponse> {
    return this._client.get(path`/communication-preferences/v3/status/email/${emailAddress}`, options);
  }
}

export interface StatusRetrieveResponse {
  recipient: string;

  subscriptionStatuses: Array<V3API.MarketingSubscriptionsV3PublicSubscriptionStatus>;
}

export declare namespace Status {
  export { type StatusRetrieveResponse as StatusRetrieveResponse };
}
