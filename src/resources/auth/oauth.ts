// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OAuth extends APIResource {
  /**
   * Refresh an access token
   */
  create(
    body: OAuthCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuthOAuthTokenResponseIf> {
    return this._client.post('/oauth/v1/token', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Delete a refresh token
   */
  delete(token: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/oauth/v1/refresh-tokens/${token}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve refresh token metadata
   */
  get(token: string, options?: RequestOptions): APIPromise<AuthOAuthRefreshTokenInfoResponse> {
    return this._client.get(path`/oauth/v1/refresh-tokens/${token}`, options);
  }
}

export interface AuthOAuthAccessTokenInfoResponse {
  token: string;

  app_id: number;

  expires_in: number;

  hub_id: number;

  scopes: Array<string>;

  token_type: string;

  user_id: number;

  hub_domain?: string;

  user?: string;
}

export interface AuthOAuthRefreshTokenInfoResponse {
  token: string;

  client_id: string;

  hub_id: number;

  scopes: Array<string>;

  token_type: string;

  user_id: number;

  hub_domain?: string;

  user?: string;
}

export interface AuthOAuthTokenResponseIf {
  access_token: string;

  expires_in: number;

  refresh_token: string;

  token_type: string;

  id_token?: string;
}

export interface OAuthCreateParams {
  client_id?: string;

  client_secret?: string;

  code?: string;

  grant_type?: 'authorization_code' | 'refresh_token';

  redirect_uri?: string;

  refresh_token?: string;
}

export declare namespace OAuth {
  export {
    type AuthOAuthAccessTokenInfoResponse as AuthOAuthAccessTokenInfoResponse,
    type AuthOAuthRefreshTokenInfoResponse as AuthOAuthRefreshTokenInfoResponse,
    type AuthOAuthTokenResponseIf as AuthOAuthTokenResponseIf,
    type OAuthCreateParams as OAuthCreateParams,
  };
}
