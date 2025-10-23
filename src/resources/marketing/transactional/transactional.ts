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
 * Describes the status of an email send request.
 */
export interface EmailSendStatusView {
  /**
   * Status of the send request.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * Identifier used to query the status of the send.
   */
  statusId: string;

  /**
   * Time when the send was completed.
   */
  completedAt?: string;

  /**
   * The ID of a send event.
   */
  eventId?: EventIDView;

  /**
   * Time when the send was requested.
   */
  requestedAt?: string;

  /**
   * Result of the send.
   */
  sendResult?:
    | 'SENT'
    | 'IDEMPOTENT_IGNORE'
    | 'QUEUED'
    | 'IDEMPOTENT_FAIL'
    | 'THROTTLED'
    | 'EMAIL_DISABLED'
    | 'PORTAL_SUSPENDED'
    | 'INVALID_TO_ADDRESS'
    | 'BLOCKED_DOMAIN'
    | 'PREVIOUSLY_BOUNCED'
    | 'EMAIL_UNCONFIRMED'
    | 'PREVIOUS_SPAM'
    | 'PREVIOUSLY_UNSUBSCRIBED_MESSAGE'
    | 'PREVIOUSLY_UNSUBSCRIBED_PORTAL'
    | 'INVALID_FROM_ADDRESS'
    | 'CAMPAIGN_CANCELLED'
    | 'VALIDATION_FAILED'
    | 'MTA_IGNORE'
    | 'BLOCKED_ADDRESS'
    | 'PORTAL_OVER_LIMIT'
    | 'PORTAL_EXPIRED'
    | 'PORTAL_MISSING_MARKETING_SCOPE'
    | 'MISSING_TEMPLATE_PROPERTIES'
    | 'MISSING_REQUIRED_PARAMETER'
    | 'PORTAL_AUTHENTICATION_FAILURE'
    | 'MISSING_CONTENT'
    | 'CORRUPT_INPUT'
    | 'TEMPLATE_RENDER_EXCEPTION'
    | 'GRAYMAIL_SUPPRESSED'
    | 'UNCONFIGURED_SENDING_DOMAIN'
    | 'UNDELIVERABLE'
    | 'CANCELLED_ABUSE'
    | 'QUARANTINED_ADDRESS'
    | 'ADDRESS_ONLY_ACCEPTED_ON_PROD'
    | 'PORTAL_NOT_AUTHORIZED_FOR_APPLICATION'
    | 'ADDRESS_LIST_BOMBED'
    | 'ADDRESS_OPTED_OUT'
    | 'RECIPIENT_FATIGUE_SUPPRESSED'
    | 'TOO_MANY_RECIPIENTS'
    | 'PREVIOUSLY_UNSUBSCRIBED_BRAND'
    | 'NON_MARKETABLE_CONTACT'
    | 'PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT'
    | 'GDPR_DOI_ENABLED';

  /**
   * Time when the send began processing.
   */
  startedAt?: string;
}

/**
 * The ID of a send event.
 */
export interface EventIDView {
  /**
   * Identifier of event.
   */
  id: string;

  /**
   * Time of event creation.
   */
  created: string;
}

/**
 * A JSON object containing anything you want to override.
 */
export interface PublicSingleSendEmail {
  /**
   * The recipient of the email.
   */
  to: string;

  /**
   * List of email addresses to send as Bcc.
   */
  bcc?: Array<string>;

  /**
   * List of email addresses to send as Cc.
   */
  cc?: Array<string>;

  /**
   * The From header for the email.
   */
  from?: string;

  /**
   * List of Reply-To header values for the email.
   */
  replyTo?: Array<string>;

  /**
   * ID for a particular send. No more than one email will be sent per sendId.
   */
  sendId?: string;
}

/**
 * A request to send a single transactional email asynchronously.
 */
export interface PublicSingleSendRequestEgg {
  /**
   * The content ID for the transactional email, which can be found in email tool UI.
   */
  emailId: number;

  /**
   * A JSON object containing anything you want to override.
   */
  message: PublicSingleSendEmail;

  /**
   * The contactProperties field is a map of contact property values. Each contact
   * property value contains a name and value property. Each property will get set on
   * the contact record and will be visible in the template under {{ contact.NAME }}.
   * Use these properties when you want to set a contact property while you’re
   * sending the email. For example, when sending a reciept you may want to set a
   * last_paid_date property, as the sending of the receipt will have information
   * about the last payment.
   */
  contactProperties?: { [key: string]: string };

  /**
   * The customProperties field is a map of property values. Each property value
   * contains a name and value property. Each property will be visible in the
   * template under {{ custom.NAME }}. Note: Custom properties do not currently
   * support arrays. To provide a listing in an email, one workaround is to build an
   * HTML list (either with tables or ul) and specify it as a custom property.
   */
  customProperties?: { [key: string]: unknown };
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
    type EmailSendStatusView as EmailSendStatusView,
    type EventIDView as EventIDView,
    type PublicSingleSendEmail as PublicSingleSendEmail,
    type PublicSingleSendRequestEgg as PublicSingleSendRequestEgg,
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
