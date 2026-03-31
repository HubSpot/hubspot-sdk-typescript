// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OAuthAPI from './oauth';
import {
  OAuth,
  OAuthCreateTokenParams,
  OAuthIntrospectTokenParams,
  OAuthRevokeTokenParams,
  PublicAccessTokenInfoResponse,
  PublicRefreshTokenInfoResponse,
  SignedAccessToken,
  TokenInfoResponseBaseIf,
} from './oauth';

export class Auth extends APIResource {
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
}

Auth.OAuth = OAuth;

export declare namespace Auth {
  export {
    OAuth as OAuth,
    type PublicAccessTokenInfoResponse as PublicAccessTokenInfoResponse,
    type PublicRefreshTokenInfoResponse as PublicRefreshTokenInfoResponse,
    type SignedAccessToken as SignedAccessToken,
    type TokenInfoResponseBaseIf as TokenInfoResponseBaseIf,
    type OAuthCreateTokenParams as OAuthCreateTokenParams,
    type OAuthIntrospectTokenParams as OAuthIntrospectTokenParams,
    type OAuthRevokeTokenParams as OAuthRevokeTokenParams,
  };
}
