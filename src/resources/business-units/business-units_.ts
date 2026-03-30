// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BusinessUnitsAPI from './business-units';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BusinessUnits extends APIResource {
  /**
   * Retrieve the brands that a specific user can access.
   */
  getByUserID(
    userID: string,
    query: BusinessUnitGetByUserIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BusinessUnitsAPI.CollectionResponsePublicBusinessUnitNoPaging> {
    return this._client.get(path`/business-units/public/2026-03/business-units/user/${userID}`, {
      query,
      ...options,
    });
  }
}

export interface BusinessUnitGetByUserIDParams {
  name?: Array<string>;

  properties?: Array<string>;
}

export declare namespace BusinessUnits {
  export { type BusinessUnitGetByUserIDParams as BusinessUnitGetByUserIDParams };
}
