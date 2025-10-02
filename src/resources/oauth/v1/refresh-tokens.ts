// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class RefreshTokens extends APIResource {
  /**
   * Delete a refresh token
   */
  deleteRefreshToken(token: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/oauth/v1/refresh-tokens/${token}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve refresh token metadata
   */
  retrieveRefreshToken(
    token: string,
    options?: RequestOptions,
  ): APIPromise<RefreshTokenRetrieveRefreshTokenResponse> {
    return this._client.get(path`/oauth/v1/refresh-tokens/${token}`, options);
  }
}

export interface RefreshTokenRetrieveRefreshTokenResponse {
  token: string;

  client_id: string;

  hub_id: number;

  scopes: Array<string>;

  token_type: string;

  user_id: number;

  hub_domain?: string;

  user?: string;
}

export declare namespace RefreshTokens {
  export { type RefreshTokenRetrieveRefreshTokenResponse as RefreshTokenRetrieveRefreshTokenResponse };
}
