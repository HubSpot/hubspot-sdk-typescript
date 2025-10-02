// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import {
  V1,
  V1RefreshAccessTokenParams,
  V1RefreshAccessTokenResponse,
  V1RetrieveAccessTokenResponse,
} from './v1/v1';

export class OAuth extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

OAuth.V1 = V1;

export declare namespace OAuth {
  export {
    V1 as V1,
    type V1RefreshAccessTokenResponse as V1RefreshAccessTokenResponse,
    type V1RetrieveAccessTokenResponse as V1RetrieveAccessTokenResponse,
    type V1RefreshAccessTokenParams as V1RefreshAccessTokenParams,
  };
}
