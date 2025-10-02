// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AsyncAPI from './async/async';
import { Async, AsyncCreateParams, AsyncCreateResponse } from './async/async';

export class ImportFromURL extends APIResource {
  async: AsyncAPI.Async = new AsyncAPI.Async(this._client);
}

ImportFromURL.Async = Async;

export declare namespace ImportFromURL {
  export {
    Async as Async,
    type AsyncCreateResponse as AsyncCreateResponse,
    type AsyncCreateParams as AsyncCreateParams,
  };
}
