// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssociationsAPI from '../associations';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Report extends APIResource {
  /**
   * Requests a report of all objects in the portal which have a high usage of
   * associations
   *
   * @example
   * ```ts
   * const reportCreationResponse =
   *   await client.crm.associations.v4.report.getHighUsageReport(
   *     0,
   *   );
   * ```
   */
  getHighUsageReport(
    userID: number,
    options?: RequestOptions,
  ): APIPromise<AssociationsAPI.ReportCreationResponse> {
    return this._client.post(path`/crm/v4/associations/usage/high-usage-report/${userID}`, options);
  }
}
