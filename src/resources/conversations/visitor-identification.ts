// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class VisitorIdentification extends APIResource {
  /**
   * @example
   * ```ts
   * const identificationTokenResponse =
   *   await client.conversations.visitorIdentification.generateToken(
   *     { email: 'visitor-email@example.com' },
   *   );
   * ```
   */
  generateToken(
    body: VisitorIdentificationGenerateTokenParams,
    options?: RequestOptions,
  ): APIPromise<IdentificationTokenResponse> {
    return this._client.post('/visitor-identification/v3/tokens/create', { body, ...options });
  }
}

/**
 * Information used to generate a token
 */
export interface IdentificationTokenGenerationRequest {
  /**
   * The email of the visitor that you wish to identify
   */
  email: string;

  /**
   * The first name of the visitor that you wish to identify. This value will only be
   * set in HubSpot for new contacts and existing contacts where first name is
   * unknown. Optional.
   */
  firstName?: string;

  /**
   * The last name of the visitor that you wish to identify. This value will only be
   * set in HubSpot for new contacts and existing contacts where last name is
   * unknown. Optional.
   */
  lastName?: string;
}

/**
 * The identification token to be passed to the Conversations JS API to identify
 * the visitor
 */
export interface IdentificationTokenResponse {
  token: string;
}

export interface VisitorIdentificationGenerateTokenParams {
  /**
   * The email of the visitor that you wish to identify
   */
  email: string;

  /**
   * The first name of the visitor that you wish to identify. This value will only be
   * set in HubSpot for new contacts and existing contacts where first name is
   * unknown. Optional.
   */
  firstName?: string;

  /**
   * The last name of the visitor that you wish to identify. This value will only be
   * set in HubSpot for new contacts and existing contacts where last name is
   * unknown. Optional.
   */
  lastName?: string;
}

export declare namespace VisitorIdentification {
  export {
    type IdentificationTokenGenerationRequest as IdentificationTokenGenerationRequest,
    type IdentificationTokenResponse as IdentificationTokenResponse,
    type VisitorIdentificationGenerateTokenParams as VisitorIdentificationGenerateTokenParams,
  };
}
