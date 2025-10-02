// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Usage extends APIResource {
  /**
   * Report
   */
  report(userID: number, options?: RequestOptions): APIPromise<UsageReportResponse> {
    return this._client.post(path`/crm/v4/associations/usage/high-usage-report/${userID}`, options);
  }
}

export interface UsageReportResponse {
  enqueueTime: UsageReportResponse.EnqueueTime;

  userEmail: string;

  userId: number;
}

export namespace UsageReportResponse {
  export interface EnqueueTime {
    dateOnly: boolean;

    timeZoneShift: number;

    value: number;
  }
}

export declare namespace Usage {
  export { type UsageReportResponse as UsageReportResponse };
}
