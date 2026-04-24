// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OAuthAPI from './oauth';
import {
  BaseOAuth,
  OAuth,
  OAuthCreateTokenParams,
  OAuthIntrospectTokenParams,
  OAuthRevokeTokenParams,
  PublicAccessTokenInfoResponse,
  PublicRefreshTokenInfoResponse,
  SignedAccessToken,
  TokenInfoResponseBaseIf,
} from './oauth';

export class BaseAuth extends APIResource {
  static override readonly _key: readonly ['auth'] = Object.freeze(['auth'] as const);
}
export class Auth extends BaseAuth {
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
}

Auth.OAuth = OAuth;
Auth.BaseOAuth = BaseOAuth;

export declare namespace Auth {
  export {
    OAuth as OAuth,
    BaseOAuth as BaseOAuth,
    type PublicAccessTokenInfoResponse as PublicAccessTokenInfoResponse,
    type PublicRefreshTokenInfoResponse as PublicRefreshTokenInfoResponse,
    type SignedAccessToken as SignedAccessToken,
    type TokenInfoResponseBaseIf as TokenInfoResponseBaseIf,
    type OAuthCreateTokenParams as OAuthCreateTokenParams,
    type OAuthIntrospectTokenParams as OAuthIntrospectTokenParams,
    type OAuthRevokeTokenParams as OAuthRevokeTokenParams,
  };
}
