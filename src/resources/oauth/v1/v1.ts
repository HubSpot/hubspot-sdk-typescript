// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RefreshTokensAPI from './refresh-tokens';
import { RefreshTokenRetrieveRefreshTokenResponse, RefreshTokens } from './refresh-tokens';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class V1 extends APIResource {
  refreshTokens: RefreshTokensAPI.RefreshTokens = new RefreshTokensAPI.RefreshTokens(this._client);

  /**
   * Refresh an access token
   */
  refreshAccessToken(
    body: V1RefreshAccessTokenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1RefreshAccessTokenResponse> {
    return this._client.post('/oauth/v1/token', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Retrieve OAuth token metadata
   */
  retrieveAccessToken(token: string, options?: RequestOptions): APIPromise<V1RetrieveAccessTokenResponse> {
    return this._client.get(path`/oauth/v1/access-tokens/${token}`, options);
  }
}

export interface V1RefreshAccessTokenResponse {
  access_token: string;

  expires_in: number;

  refresh_token: string;

  token_type: string;

  id_token?: string;
}

export interface V1RetrieveAccessTokenResponse {
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

export interface V1RefreshAccessTokenParams {
  client_id?: string;

  client_secret?: string;

  code?: string;

  grant_type?: 'authorization_code' | 'refresh_token';

  redirect_uri?: string;

  refresh_token?: string;
}

V1.RefreshTokens = RefreshTokens;

export declare namespace V1 {
  export {
    type V1RefreshAccessTokenResponse as V1RefreshAccessTokenResponse,
    type V1RetrieveAccessTokenResponse as V1RetrieveAccessTokenResponse,
    type V1RefreshAccessTokenParams as V1RefreshAccessTokenParams,
  };

  export {
    RefreshTokens as RefreshTokens,
    type RefreshTokenRetrieveRefreshTokenResponse as RefreshTokenRetrieveRefreshTokenResponse,
  };
}
