// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as SingleEmailAPI from './single-email';
import { BaseSingleEmail, SingleEmail, SingleEmailSendParams } from './single-email';
import * as SmtpTokensAPI from './smtp-tokens';
import { BaseSmtpTokens, SmtpTokenCreateParams, SmtpTokenListParams, SmtpTokens } from './smtp-tokens';
import { Page } from '../../../core/pagination';

export class BaseTransactional extends APIResource {
  static override readonly _key: readonly ['marketing', 'transactional'] = Object.freeze([
    'marketing',
    'transactional',
  ] as const);
}
export class Transactional extends BaseTransactional {
  singleEmail: SingleEmailAPI.SingleEmail = new SingleEmailAPI.SingleEmail(this._client);
  smtpTokens: SmtpTokensAPI.SmtpTokens = new SmtpTokensAPI.SmtpTokens(this._client);
}

export type SmtpAPITokenViewsPage = Page<SmtpAPITokenView>;

export interface CollectionResponseSmtpAPITokenViewForwardPaging {
  results: Array<SmtpAPITokenView>;

  paging?: Shared.ForwardPaging;
}

export interface SmtpAPITokenRequestEgg {
  /**
   * A name for the campaign tied to the SMTP API token.
   */
  campaignName: string;

  /**
   * Indicates whether a contact should be created for email recipients.
   */
  createContact: boolean;
}

export interface SmtpAPITokenView {
  /**
   * User name to log into the HubSpot SMTP server.
   */
  id: string;

  /**
   * A name for the campaign tied to the token.
   */
  campaignName: string;

  /**
   * Indicates whether a contact should be created for email recipients.
   */
  createContact: boolean;

  /**
   * Timestamp generated when a token is created.
   */
  createdAt: string;

  /**
   * Email address of the user that sent the token creation request.
   */
  createdBy: string;

  /**
   * Identifier assigned to the campaign provided in the token creation request.
   */
  emailCampaignId: string;

  /**
   * Password used to log into the HubSpot SMTP server.
   */
  password?: string;
}

Transactional.SingleEmail = SingleEmail;
Transactional.BaseSingleEmail = BaseSingleEmail;
Transactional.SmtpTokens = SmtpTokens;
Transactional.BaseSmtpTokens = BaseSmtpTokens;

export declare namespace Transactional {
  export {
    type CollectionResponseSmtpAPITokenViewForwardPaging as CollectionResponseSmtpAPITokenViewForwardPaging,
    type SmtpAPITokenRequestEgg as SmtpAPITokenRequestEgg,
    type SmtpAPITokenView as SmtpAPITokenView,
  };

  export {
    SingleEmail as SingleEmail,
    BaseSingleEmail as BaseSingleEmail,
    type SingleEmailSendParams as SingleEmailSendParams,
  };

  export {
    SmtpTokens as SmtpTokens,
    BaseSmtpTokens as BaseSmtpTokens,
    type SmtpTokenCreateParams as SmtpTokenCreateParams,
    type SmtpTokenListParams as SmtpTokenListParams,
  };
}
