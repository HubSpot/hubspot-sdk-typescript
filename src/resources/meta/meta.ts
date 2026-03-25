// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OriginsAPI from './origins/origins';
import { CollectionResponseIPRangeNoPaging, IPRange, Origins } from './origins/origins';

export class Meta extends APIResource {
  origins: OriginsAPI.Origins = new OriginsAPI.Origins(this._client);
}

Meta.Origins = Origins;

export declare namespace Meta {
  export {
    Origins as Origins,
    type CollectionResponseIPRangeNoPaging as CollectionResponseIPRangeNoPaging,
    type IPRange as IPRange,
  };
}
