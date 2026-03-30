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
   */
  create(
    body: SmtpTokenCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionalAPI.SmtpAPITokenView> {
    return this._client.post('/marketing/transactional/2026-03/smtp-tokens', { body, ...options });
  }

  /**
   * Query multiple SMTP API tokens by campaign name or a single token by
   * emailCampaignId.
   */
  list(
    query: SmtpTokenListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SmtpAPITokenViewsPage, TransactionalAPI.SmtpAPITokenView> {
    return this._client.getAPIList(
      '/marketing/transactional/2026-03/smtp-tokens',
      Page<TransactionalAPI.SmtpAPITokenView>,
      { query, ...options },
    );
  }

  /**
   * Delete a single token by ID.
   */
  delete(tokenID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/marketing/transactional/2026-03/smtp-tokens/${tokenID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Query a single token by ID.
   */
  get(tokenID: string, options?: RequestOptions): APIPromise<TransactionalAPI.SmtpAPITokenView> {
    return this._client.get(path`/marketing/transactional/2026-03/smtp-tokens/${tokenID}`, options);
  }

  /**
   * Allows the creation of a replacement password for a given token. Once the
   * password is successfully reset, the old password for the token will be invalid.
   */
  resetPassword(tokenID: string, options?: RequestOptions): APIPromise<TransactionalAPI.SmtpAPITokenView> {
    return this._client.post(
      path`/marketing/transactional/2026-03/smtp-tokens/${tokenID}/password-reset`,
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
  campaignName?: string;

  emailCampaignId?: string;
}

export declare namespace SmtpTokens {
  export {
    type SmtpTokenCreateParams as SmtpTokenCreateParams,
    type SmtpTokenListParams as SmtpTokenListParams,
  };
}

export { type SmtpAPITokenViewsPage };
