// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class OAuth extends APIResource {
  /**
   * Authenticates a client and returns access and refresh tokens.
   */
  createToken(
    body: OAuthCreateTokenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post('/oauth/2026-03/token', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/x-www-form-urlencoded', Accept: '*/*' },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * Returns validity and metadata for access and refresh tokens.
   */
  introspectToken(
    body: OAuthIntrospectTokenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TokenInfoResponseBaseIf> {
    return this._client.post('/oauth/2026-03/token/introspect', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Deletes/Revokes provided Refresh Token
   */
  revokeToken(
    body: OAuthRevokeTokenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post('/oauth/2026-03/token/revoke', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/x-www-form-urlencoded', Accept: '*/*' },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }
}

export interface PublicAccessTokenInfoResponse {
  token: string;

  active: boolean;

  app_id: number;

  client_id: string;

  expires_in: number;

  hub_id: number;

  is_private_distribution: boolean;

  scopes: Array<string>;

  signed_access_token: SignedAccessToken;

  token_type: string;

  token_use: 'access_token';

  user_id: number;

  hub_domain?: string;

  user?: string;
}

export interface PublicRefreshTokenInfoResponse {
  token: string;

  active: boolean;

  app_id: number;

  client_id: string;

  hub_id: number;

  scopes: Array<string>;

  token_type: string;

  token_use: 'refresh_token';

  user_id: number;

  hub_domain?: string;

  user?: string;
}

export interface SignedAccessToken {
  appId: number;

  expiresAt: number;

  hubId: number;

  hublet: string;

  installingUserId: number;

  isPrivateDistribution: boolean;

  isServiceAccount: boolean;

  isUserLevel: boolean;

  newSignature: string;

  scopes: string;

  scopeToScopeGroupPks: string;

  signature: string;

  trialScopes: string;

  trialScopeToScopeGroupPks: string;

  userId: number;
}

export type TokenInfoResponseBaseIf = PublicAccessTokenInfoResponse | PublicRefreshTokenInfoResponse;

export interface OAuthCreateTokenParams {
  client_id?: string;

  client_secret?: string;

  code?: string;

  code_verifier?: string;

  grant_type?: 'authorization_code' | 'refresh_token';

  redirect_uri?: string;

  refresh_token?: string;

  scope?: string;
}

export interface OAuthIntrospectTokenParams {
  token?: string;

  client_id?: string;

  client_secret?: string;

  token_type_hint?: string;
}

export interface OAuthRevokeTokenParams {
  token?: string;

  client_id?: string;

  client_secret?: string;

  token_type_hint?: string;
}

export declare namespace OAuth {
  export {
    type PublicAccessTokenInfoResponse as PublicAccessTokenInfoResponse,
    type PublicRefreshTokenInfoResponse as PublicRefreshTokenInfoResponse,
    type SignedAccessToken as SignedAccessToken,
    type TokenInfoResponseBaseIf as TokenInfoResponseBaseIf,
    type OAuthCreateTokenParams as OAuthCreateTokenParams,
    type OAuthIntrospectTokenParams as OAuthIntrospectTokenParams,
    type OAuthRevokeTokenParams as OAuthRevokeTokenParams,
  };
}
