// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DailyAPI from './daily';
import { Daily, DailyRetrievePrivateAppDailyUsageResponse, Paging } from './daily';

export class APIUsage extends APIResource {
  daily: DailyAPI.Daily = new DailyAPI.Daily(this._client);
}

APIUsage.Daily = Daily;

export declare namespace APIUsage {
  export {
    Daily as Daily,
    type Paging as Paging,
    type DailyRetrievePrivateAppDailyUsageResponse as DailyRetrievePrivateAppDailyUsageResponse,
  };
}
