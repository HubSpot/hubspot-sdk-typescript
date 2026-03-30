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

export interface TokenInfoResponseBaseIf {
  active: boolean;
}

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
    type TokenInfoResponseBaseIf as TokenInfoResponseBaseIf,
    type OAuthCreateTokenParams as OAuthCreateTokenParams,
    type OAuthIntrospectTokenParams as OAuthIntrospectTokenParams,
    type OAuthRevokeTokenParams as OAuthRevokeTokenParams,
  };
}
