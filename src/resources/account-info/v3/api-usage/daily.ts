// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ActivityAPI from '../activity';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Daily extends APIResource {
  /**
   * Retrieve private app daily API usage
   */
  retrievePrivateAppDailyUsage(
    options?: RequestOptions,
  ): APIPromise<DailyRetrievePrivateAppDailyUsageResponse> {
    return this._client.get('/account-info/v3/api-usage/daily/private-apps', options);
  }
}

export interface Paging {
  next?: ActivityAPI.NextPage;

  prev?: Paging.Prev;
}

export namespace Paging {
  export interface Prev {
    before: string;

    link?: string;
  }
}

export interface DailyRetrievePrivateAppDailyUsageResponse {
  results: Array<DailyRetrievePrivateAppDailyUsageResponse.Result>;

  paging?: Paging;
}

export namespace DailyRetrievePrivateAppDailyUsageResponse {
  export interface Result {
    collectedAt: string;

    currentUsage: number;

    fetchStatus: 'SUCCESS' | 'TIMEOUT' | 'FAILURE' | 'CACHED' | 'NOTFOUND';

    name: string;

    usageLimit: number;

    resetsAt?: string;
  }
}

export declare namespace Daily {
  export {
    type Paging as Paging,
    type DailyRetrievePrivateAppDailyUsageResponse as DailyRetrievePrivateAppDailyUsageResponse,
  };
}
