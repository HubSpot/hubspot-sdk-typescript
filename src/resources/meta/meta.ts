// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OriginsAPI from './origins/origins';
import { BaseOrigins, CollectionResponseIPRangeNoPaging, IPRange, Origins } from './origins/origins';

export class BaseMeta extends APIResource {
  static override readonly _key: readonly ['meta'] = Object.freeze(['meta'] as const);
}
export class Meta extends BaseMeta {
  origins: OriginsAPI.Origins = new OriginsAPI.Origins(this._client);
}

Meta.Origins = Origins;
Meta.BaseOrigins = BaseOrigins;

export declare namespace Meta {
  export {
    Origins as Origins,
    BaseOrigins as BaseOrigins,
    type CollectionResponseIPRangeNoPaging as CollectionResponseIPRangeNoPaging,
    type IPRange as IPRange,
  };
}
