// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseVisitorIdentification extends APIResource {
  static override readonly _key: readonly ['conversations', 'visitorIdentification'] = Object.freeze([
    'conversations',
    'visitorIdentification',
  ] as const);

  /**
   * Generate an identification token for a website visitor who has been
   * authenticated using your own system. An identification token returned from this
   * API can be used to pass information about your already-authenticated visitor to
   * the chat widget, so that it treats the visitor as a known contact. This allows
   * support agents to recognize and assist the visitor more effectively.
   */
  generateToken(
    body: VisitorIdentificationGenerateTokenParams,
    options?: RequestOptions,
  ): APIPromise<IdentificationTokenResponse> {
    return this._client.post('/visitor-identification/2026-03/tokens/create', { body, ...options });
  }
}
export class VisitorIdentification extends BaseVisitorIdentification {}

export interface IdentificationTokenGenerationRequest {
  /**
   * The email of the visitor that you wish to identify
   */
  email: string;

  hsCustomerAgentContext: { [key: string]: string };

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

export interface IdentificationTokenResponse {
  /**
   * An identification token that allows the visitor to be treated as a known
   * contact.
   */
  token: string;
}

export interface VisitorIdentificationGenerateTokenParams {
  /**
   * The email of the visitor that you wish to identify
   */
  email: string;

  hsCustomerAgentContext: { [key: string]: string };

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
