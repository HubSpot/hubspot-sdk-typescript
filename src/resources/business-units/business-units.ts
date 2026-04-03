// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BusinessUnitEntriesAPI from './business-unit-entries';
import { BusinessUnitEntries, BusinessUnitEntryGetByUserIDParams } from './business-unit-entries';

export class BusinessUnits extends APIResource {
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

export declare namespace BusinessUnits {
  export {
    type CollectionResponsePublicBusinessUnitNoPaging as CollectionResponsePublicBusinessUnitNoPaging,
    type PublicBusinessUnit as PublicBusinessUnit,
    type PublicBusinessUnitLogoMetadata as PublicBusinessUnitLogoMetadata,
  };

  export {
    BusinessUnitEntries as BusinessUnitEntries,
    type BusinessUnitEntryGetByUserIDParams as BusinessUnitEntryGetByUserIDParams,
  };
}
