// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TransactionalAPI from './transactional';
import { SmtpAPITokenViewsPage } from './transactional';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SmtpTokens extends APIResource {
  /**
   * Create a SMTP API token.
   *
   * @example
   * ```ts
   * const smtpAPITokenView =
   *   await client.marketing.transactional.smtpTokens.create({
   *     campaignName: 'campaignName',
   *     createContact: true,
   *   });
   * ```
   */
  create(
    body: SmtpTokenCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionalAPI.SmtpAPITokenView> {
    return this._client.post('/marketing/v3/transactional/smtp-tokens', { body, ...options });
  }

  /**
   * Query multiple SMTP API tokens by campaign name or a single token by
   * emailCampaignId.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const smtpAPITokenView of client.marketing.transactional.smtpTokens.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SmtpTokenListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SmtpAPITokenViewsPage, TransactionalAPI.SmtpAPITokenView> {
    return this._client.getAPIList(
      '/marketing/v3/transactional/smtp-tokens',
      Page<TransactionalAPI.SmtpAPITokenView>,
      { query, ...options },
    );
  }

  /**
   * Delete a single token by ID.
   *
   * @example
   * ```ts
   * await client.marketing.transactional.smtpTokens.delete(
   *   'tokenId',
   * );
   * ```
   */
  delete(tokenID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/marketing/v3/transactional/smtp-tokens/${tokenID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Query a single token by ID.
   *
   * @example
   * ```ts
   * const smtpAPITokenView =
   *   await client.marketing.transactional.smtpTokens.get(
   *     'tokenId',
   *   );
   * ```
   */
  get(tokenID: string, options?: RequestOptions): APIPromise<TransactionalAPI.SmtpAPITokenView> {
    return this._client.get(path`/marketing/v3/transactional/smtp-tokens/${tokenID}`, options);
  }

  /**
   * Allows the creation of a replacement password for a given token. Once the
   * password is successfully reset, the old password for the token will be invalid.
   *
   * @example
   * ```ts
   * const smtpAPITokenView =
   *   await client.marketing.transactional.smtpTokens.resetPassword(
   *     'tokenId',
   *   );
   * ```
   */
  resetPassword(tokenID: string, options?: RequestOptions): APIPromise<TransactionalAPI.SmtpAPITokenView> {
    return this._client.post(
      path`/marketing/v3/transactional/smtp-tokens/${tokenID}/password-reset`,
      options,
    );
  }
}

export interface SmtpTokenCreateParams {
  /**
   * A name for the campaign tied to the SMTP API token.
   */
  campaignName: string;

  /**
   * Indicates whether a contact should be created for email recipients.
   */
  createContact: boolean;
}

export interface SmtpTokenListParams extends PageParams {
  /**
   * A name for the campaign tied to the SMTP API token.
   */
  campaignName?: string;

  /**
   * Identifier assigned to the campaign provided during the token creation.
   */
  emailCampaignId?: string;
}

export declare namespace SmtpTokens {
  export {
    type SmtpTokenCreateParams as SmtpTokenCreateParams,
    type SmtpTokenListParams as SmtpTokenListParams,
  };
}

export { type SmtpAPITokenViewsPage };
