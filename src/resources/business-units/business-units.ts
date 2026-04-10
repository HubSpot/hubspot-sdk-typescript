// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BusinessUnitEntriesAPI from './business-unit-entries';
import {
  BaseBusinessUnitEntries,
  BusinessUnitEntries,
  BusinessUnitEntryGetByUserIDParams,
} from './business-unit-entries';

export class BaseBusinessUnits extends APIResource {
  static override readonly _key: readonly ['businessUnits'] = Object.freeze(['businessUnits'] as const);
}
export class BusinessUnits extends BaseBusinessUnits {
  businessUnitEntries: BusinessUnitEntriesAPI.BusinessUnitEntries =
    new BusinessUnitEntriesAPI.BusinessUnitEntries(this._client);
}

export interface CollectionResponsePublicBusinessUnitNoPaging {
  /**
   * The collection of Business Units
   */
  results: Array<PublicBusinessUnit>;
}

export interface PublicBusinessUnit {
  /**
   * The Business Unit's unique ID
   */
  id: string;

  /**
   * The Business Unit's name
   */
  name: string;

  logoMetadata?: PublicBusinessUnitLogoMetadata;
}

export interface PublicBusinessUnitLogoMetadata {
  /**
   * The logo's alt text
   */
  logoAltText?: string;

  /**
   * The logo's url
   */
  logoUrl?: string;

  /**
   * The logo's resized url
   */
  resizedUrl?: string;
}

BusinessUnits.BusinessUnitEntries = BusinessUnitEntries;
BusinessUnits.BaseBusinessUnitEntries = BaseBusinessUnitEntries;

export declare namespace BusinessUnits {
  export {
    type CollectionResponsePublicBusinessUnitNoPaging as CollectionResponsePublicBusinessUnitNoPaging,
    type PublicBusinessUnit as PublicBusinessUnit,
    type PublicBusinessUnitLogoMetadata as PublicBusinessUnitLogoMetadata,
  };

  export {
    BusinessUnitEntries as BusinessUnitEntries,
    BaseBusinessUnitEntries as BaseBusinessUnitEntries,
    type BusinessUnitEntryGetByUserIDParams as BusinessUnitEntryGetByUserIDParams,
  };
}
