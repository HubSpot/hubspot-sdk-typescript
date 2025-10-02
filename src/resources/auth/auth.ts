// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OAuthAPI from './oauth';
import {
  AuthOAuthAccessTokenInfoResponse,
  AuthOAuthRefreshTokenInfoResponse,
  AuthOAuthTokenResponseIf,
  OAuth,
  OAuthCreateParams,
} from './oauth';

export class Auth extends APIResource {
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
}

Auth.OAuth = OAuth;

export declare namespace Auth {
  export {
    OAuth as OAuth,
    type AuthOAuthAccessTokenInfoResponse as AuthOAuthAccessTokenInfoResponse,
    type AuthOAuthRefreshTokenInfoResponse as AuthOAuthRefreshTokenInfoResponse,
    type AuthOAuthTokenResponseIf as AuthOAuthTokenResponseIf,
    type OAuthCreateParams as OAuthCreateParams,
  };
}
