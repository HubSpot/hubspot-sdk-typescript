// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CampaignsAPI from './marketing/campaigns/campaigns';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BusinessUnits extends APIResource {
  /**
   * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
   */
  getByUserID(
    userID: string,
    query: BusinessUnitGetByUserIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponsePublicBusinessUnitNoPaging> {
    return this._client.get(path`/business-units/v3/business-units/user/${userID}`, { query, ...options });
  }
}

/**
 * A response object containing a collection of Business Units
 */
export interface CollectionResponsePublicBusinessUnitNoPaging {
  /**
   * The collection of Business Units
   */
  results: Array<CampaignsAPI.PublicBusinessUnit>;
}

/**
 * A Business Unit
 */
export interface PublicBusinessUnit {
  /**
   * The Business Unit's unique ID
   */
  id: string;

  /**
   * The Business Unit's name
   */
  name: string;

  /**
   * A Business Unit's logo metadata
   */
  logoMetadata?: PublicBusinessUnitLogoMetadata;
}

/**
 * A Business Unit's logo metadata
 */
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

export interface BusinessUnitGetByUserIDParams {
  /**
   * The names of Business Units to retrieve. If empty or not provided, then all
   * associated Business Units will be returned.
   */
  name?: Array<string>;

  /**
   * The names of properties to optionally include in the response body. The only
   * valid value is `logoMetadata`.
   */
  properties?: Array<string>;
}

export declare namespace BusinessUnits {
  export {
    type CollectionResponsePublicBusinessUnitNoPaging as CollectionResponsePublicBusinessUnitNoPaging,
    type PublicBusinessUnit as PublicBusinessUnit,
    type PublicBusinessUnitLogoMetadata as PublicBusinessUnitLogoMetadata,
    type BusinessUnitGetByUserIDParams as BusinessUnitGetByUserIDParams,
  };
}
