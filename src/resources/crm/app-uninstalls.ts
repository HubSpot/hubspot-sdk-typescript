// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class AppUninstalls extends APIResource {
  /**
   * Use this endpoint to uninstall your app from a customer's HubSpot account. If
   * successful, this endpoint will return a 204 and the customer will receive an
   * email notification that the developer has uninstall the app from their account.
   *
   * @example
   * ```ts
   * await client.crm.appUninstalls.uninstall();
   * ```
   */
  uninstall(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/appinstalls/v3/external-install', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
