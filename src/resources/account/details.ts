// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountAPI from './account';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Details extends APIResource {
  /**
   * Retrieve account details such as the account type, time zone, currencies, and
   * data hosting location.
   */
  get(options?: RequestOptions): APIPromise<AccountAPI.PortalInformationResponse> {
    return this._client.get('/account-info/v3/details', options);
  }
}
