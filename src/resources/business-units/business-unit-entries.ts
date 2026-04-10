// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BusinessUnitsAPI from './business-units';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseBusinessUnitEntries extends APIResource {
  static override readonly _key: readonly ['businessUnits', 'businessUnitEntries'] = Object.freeze([
    'businessUnits',
    'businessUnitEntries',
  ] as const);

  /**
   * Retrieve the brands that a specific user can access.
   */
  getByUserID(
    userID: string,
    query: BusinessUnitEntryGetByUserIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BusinessUnitsAPI.CollectionResponsePublicBusinessUnitNoPaging> {
    return this._client.get(path`/business-units/public/2026-03/business-units/user/${userID}`, {
      query,
      ...options,
    });
  }
}
export class BusinessUnitEntries extends BaseBusinessUnitEntries {}

export interface BusinessUnitEntryGetByUserIDParams {
  name?: Array<string>;

  properties?: Array<string>;
}

export declare namespace BusinessUnitEntries {
  export { type BusinessUnitEntryGetByUserIDParams as BusinessUnitEntryGetByUserIDParams };
}
