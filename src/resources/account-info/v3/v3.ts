// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActivityAPI from './activity';
import {
  Activity,
  ActivityRetrieveAuditLogsParams,
  ActivityRetrieveAuditLogsResponse,
  ActivityRetrieveLoginActivityParams,
  ActivityRetrieveLoginActivityResponse,
  ActivityRetrieveSecurityHistoryParams,
  ActivityRetrieveSecurityHistoryResponse,
  ForwardPaging,
  NextPage,
} from './activity';
import * as APIUsageAPI from './api-usage/api-usage';
import { APIUsage } from './api-usage/api-usage';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V3 extends APIResource {
  activity: ActivityAPI.Activity = new ActivityAPI.Activity(this._client);
  apiUsage: APIUsageAPI.APIUsage = new APIUsageAPI.APIUsage(this._client);

  /**
   * Retrieve account details
   */
  retrieveAccountDetails(options?: RequestOptions): APIPromise<V3RetrieveAccountDetailsResponse> {
    return this._client.get('/account-info/v3/details', options);
  }
}

export interface V3RetrieveAccountDetailsResponse {
  accountType: 'STANDARD' | 'DEVELOPER_TEST' | 'SANDBOX' | 'APP_DEVELOPER';

  additionalCurrencies: Array<string>;

  companyCurrency: string;

  dataHostingLocation: string;

  portalId: number;

  timeZone: string;

  uiDomain: string;

  utcOffset: string;

  utcOffsetMilliseconds: number;
}

V3.Activity = Activity;
V3.APIUsage = APIUsage;

export declare namespace V3 {
  export { type V3RetrieveAccountDetailsResponse as V3RetrieveAccountDetailsResponse };

  export {
    Activity as Activity,
    type ForwardPaging as ForwardPaging,
    type NextPage as NextPage,
    type ActivityRetrieveAuditLogsResponse as ActivityRetrieveAuditLogsResponse,
    type ActivityRetrieveLoginActivityResponse as ActivityRetrieveLoginActivityResponse,
    type ActivityRetrieveSecurityHistoryResponse as ActivityRetrieveSecurityHistoryResponse,
    type ActivityRetrieveAuditLogsParams as ActivityRetrieveAuditLogsParams,
    type ActivityRetrieveLoginActivityParams as ActivityRetrieveLoginActivityParams,
    type ActivityRetrieveSecurityHistoryParams as ActivityRetrieveSecurityHistoryParams,
  };

  export { APIUsage as APIUsage };
}
