// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OAuth extends APIResource {
  /**
   * Use a
   * [previously obtained refresh token](#get-oauth-2.0-access-and-refresh-tokens) to
   * generate a new access token.
   *
   * Access tokens are short lived. You can check the `expires_in` parameter when
   * generating an access token to determine its lifetime (in seconds). If you need
   * offline access to HubSpot data, store the refresh token you get when
   * [initiating your OAuth integration](https://developers.hubspot.com/docs/guides/api/app-management/oauth-tokens#initiating-oauth-access)
   * and use it to generate a new access token once the initial one expires.
   *
   * Note: HubSpot access tokens will fluctuate in size as the information that's
   * encoded in them changes over time. It's recommended to allow for tokens to be up
   * to 300 characters to account for any potential changes.
   */
  createAccessToken(
    params: OAuthCreateAccessTokenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TokenResponseIf> {
    const { query_client_secret, query_refresh_token, ...body } = params ?? {};
    return this._client.post('/oauth/v1/token', {
      query: { client_secret: query_client_secret, refresh_token: query_refresh_token },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Delete a refresh token, typically after a user uninstalls your app. Access
   * tokens generated with the refresh token will not be affected.
   *
   * This will not uninstall the application from HubSpot or inhibit data syncing
   * between an account and the app.
   *
   * @deprecated
   */
  deleteRefreshToken(token: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/oauth/v1/refresh-tokens/${token}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a token's metadata, including the email address of the user that the
   * token was created for and the ID of the account it's associated with.
   *
   * Note: HubSpot access tokens will fluctuate in size as the information that's
   * encoded in them changes over time. It's recommended to allow for tokens to be up
   * to 300 characters to account for any potential changes.
   *
   * @deprecated
   */
  getAccessToken(token: string, options?: RequestOptions): APIPromise<AccessTokenInfoResponse> {
    return this._client.get(path`/oauth/v1/access-tokens/${token}`, options);
  }

  /**
   * Retrieve a refresh token's metadata, including the email address of the user
   * that the token was created for and the ID of the account it's associated with.
   * Learn more about
   * [refresh tokens](https://developers.hubspot.com/docs/guides/api/app-management/oauth-tokens#generate-initial-access-and-refresh-tokens).
   *
   * @deprecated
   */
  getRefreshToken(token: string, options?: RequestOptions): APIPromise<RefreshTokenInfoResponse> {
    return this._client.get(path`/oauth/v1/refresh-tokens/${token}`, options);
  }
}

export interface AccessTokenInfoResponse {
  token: string;

  app_id: number;

  expires_in: number;

  hub_id: number;

  scopes: Array<string>;

  token_type: string;

  user_id: number;

  hub_domain?: string;

  is_private_distribution?: boolean;

  signed_access_token?: SignedAccessToken;

  user?: string;
}

export interface RefreshTokenInfoResponse {
  token: string;

  client_id: string;

  hub_id: number;

  scopes: Array<string>;

  token_type: string;

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

export interface TokenResponseIf {
  accessToken?: string;

  expiresIn?: number;

  hubId?: number;

  idToken?: string;

  scopes?: Array<string>;

  tokenType?: string;

  userId?: number;
}

export interface OAuthCreateAccessTokenParams {
  /**
   * Query param:
   */
  query_client_secret?: string;

  /**
   * Query param:
   */
  query_refresh_token?: string;

  /**
   * Body param:
   */
  client_id?: string;

  /**
   * Body param:
   */
  body_client_secret?: string;

  /**
   * Body param:
   */
  code?: string;

  /**
   * Body param:
   */
  code_verifier?: string;

  /**
   * Body param:
   */
  grant_type?: 'authorization_code' | 'client_credentials' | 'refresh_token';

  /**
   * Body param:
   */
  redirect_uri?: string;

  /**
   * Body param:
   */
  body_refresh_token?: string;

  /**
   * Body param:
   */
  scope?: string;
}

export declare namespace OAuth {
  export {
    type AccessTokenInfoResponse as AccessTokenInfoResponse,
    type RefreshTokenInfoResponse as RefreshTokenInfoResponse,
    type SignedAccessToken as SignedAccessToken,
    type TokenResponseIf as TokenResponseIf,
    type OAuthCreateAccessTokenParams as OAuthCreateAccessTokenParams,
  };
}
