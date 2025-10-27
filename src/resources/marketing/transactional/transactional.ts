// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as SingleEmailAPI from './single-email';
import { SingleEmail, SingleEmailSendParams } from './single-email';
import * as SmtpTokensAPI from './smtp-tokens';
import { SmtpTokenCreateParams, SmtpTokenListParams, SmtpTokens } from './smtp-tokens';
import { Page } from '../../../core/pagination';

export class Transactional extends APIResource {
  singleEmail: SingleEmailAPI.SingleEmail = new SingleEmailAPI.SingleEmail(this._client);
  smtpTokens: SmtpTokensAPI.SmtpTokens = new SmtpTokensAPI.SmtpTokens(this._client);
}

export type SmtpAPITokenViewsPage = Page<SmtpAPITokenView>;

export interface CollectionResponseSmtpAPITokenViewForwardPaging {
  results: Array<SmtpAPITokenView>;

  paging?: Shared.ForwardPaging;
}

/**
 * A request object to create a SMTP API token
 */
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

/**
 * A SMTP API token provides both an ID and password that can be used to send email
 * through the HubSpot SMTP API.
 */
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
Transactional.SmtpTokens = SmtpTokens;

export declare namespace Transactional {
  export {
    type CollectionResponseSmtpAPITokenViewForwardPaging as CollectionResponseSmtpAPITokenViewForwardPaging,
    type SmtpAPITokenRequestEgg as SmtpAPITokenRequestEgg,
    type SmtpAPITokenView as SmtpAPITokenView,
  };

  export { SingleEmail as SingleEmail, type SingleEmailSendParams as SingleEmailSendParams };

  export {
    SmtpTokens as SmtpTokens,
    type SmtpTokenCreateParams as SmtpTokenCreateParams,
    type SmtpTokenListParams as SmtpTokenListParams,
  };
}
