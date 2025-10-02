// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AsyncAPI from './async/async';
import { Async, AsyncCreateParams, AsyncCreateResponse } from './async/async';

export class Update extends APIResource {
  async: AsyncAPI.Async = new AsyncAPI.Async(this._client);
}

Update.Async = Async;

export declare namespace Update {
  export {
    Async as Async,
    type AsyncCreateResponse as AsyncCreateResponse,
    type AsyncCreateParams as AsyncCreateParams,
  };
}
