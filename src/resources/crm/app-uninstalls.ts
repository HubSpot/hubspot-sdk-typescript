// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseAppUninstalls extends APIResource {
  static override readonly _key: readonly ['crm', 'appUninstalls'] = Object.freeze([
    'crm',
    'appUninstalls',
  ] as const);

  /**
   * Use this endpoint to uninstall your app from a customer's HubSpot account. If
   * successful, this endpoint will return a 204 and the customer will receive an
   * email notification that the developer has uninstall the app from their account.
   */
  uninstall(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/appinstalls/2026-03/external-install', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class AppUninstalls extends BaseAppUninstalls {}
