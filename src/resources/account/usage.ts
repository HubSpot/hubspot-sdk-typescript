// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountAPI from './account';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Usage extends APIResource {
  /**
   * Retrieve the daily API usage for private apps in the account, along with
   * information about usage limits.
   */
  getDailyPrivateAppsUsage(options?: RequestOptions): APIPromise<AccountAPI.CollectionResponseAPIUsage> {
    return this._client.get('/account-info/v3/api-usage/daily/private-apps', options);
  }
}
