// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OAuthAPI from './oauth';
import {
  AccessTokenInfoResponse,
  OAuth,
  OAuthCreateParams,
  RefreshTokenInfoResponse,
  TokenResponseIf,
} from './oauth';

export class Auth extends APIResource {
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
}

Auth.OAuth = OAuth;

export declare namespace Auth {
  export {
    OAuth as OAuth,
    type AccessTokenInfoResponse as AccessTokenInfoResponse,
    type RefreshTokenInfoResponse as RefreshTokenInfoResponse,
    type TokenResponseIf as TokenResponseIf,
    type OAuthCreateParams as OAuthCreateParams,
  };
}
