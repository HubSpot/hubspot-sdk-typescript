// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnablementAPI from './enablement';
import { Enablement, EnablementGetResponse, EnablementListResponse } from './enablement';

export class ObjectLibrary extends APIResource {
  enablement: EnablementAPI.Enablement = new EnablementAPI.Enablement(this._client);
}

ObjectLibrary.Enablement = Enablement;

export declare namespace ObjectLibrary {
  export {
    Enablement as Enablement,
    type EnablementListResponse as EnablementListResponse,
    type EnablementGetResponse as EnablementGetResponse,
  };
}
