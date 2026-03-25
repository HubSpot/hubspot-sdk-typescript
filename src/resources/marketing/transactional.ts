// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Transactional extends APIResource {
  send(body: TransactionalSendParams, options?: RequestOptions): APIPromise<EmailSendStatusView> {
    return this._client.post('/marketing/transactional/2026-03/single-email/send', { body, ...options });
  }
}

export interface EmailSendStatusView {
  /**
   * Status of the send request.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * Identifier used to query the status of the send.
   */
  statusId: string;

  /**
   * Time when the send was completed.
   */
  completedAt?: string;

  eventId?: EventIDView;

  message?: string;

  /**
   * Time when the send was requested.
   */
  requestedAt?: string;

  /**
   * Result of the send.
   */
  sendResult?:
    | 'ADDRESS_LIST_BOMBED'
    | 'ADDRESS_ONLY_ACCEPTED_ON_PROD'
    | 'ADDRESS_OPTED_OUT'
    | 'ATTACHMENT_DOWNLOAD_QUEUE_FULL'
    | 'BLOCKED_ADDRESS'
    | 'BLOCKED_DOMAIN'
    | 'BRAND_RECIPIENT_FATIGUE_SUPPRESSED'
    | 'CAMPAIGN_CANCELLED'
    | 'CANCELLED_ABUSE'
    | 'CORRUPT_INPUT'
    | 'EMAIL_DISABLED'
    | 'EMAIL_UNCONFIRMED'
    | 'GDPR_DOI_ENABLED'
    | 'GRAYMAIL_SUPPRESSED'
    | 'HUBL_LIMIT_EXCEEDED'
    | 'IDEMPOTENT_FAIL'
    | 'IDEMPOTENT_IGNORE'
    | 'INVALID_APP_ID_ATTRIBUTION'
    | 'INVALID_FROM_ADDRESS'
    | 'INVALID_TO_ADDRESS'
    | 'LOW_CONTACT_QUALITY_SCORE'
    | 'MISSING_CONTENT'
    | 'MISSING_REQUIRED_PARAMETER'
    | 'MISSING_TEMPLATE_PROPERTIES'
    | 'MTA_IGNORE'
    | 'NON_MARKETABLE_CONTACT'
    | 'PORTAL_AUTHENTICATION_FAILURE'
    | 'PORTAL_EXPIRED'
    | 'PORTAL_MISSING_MARKETING_SCOPE'
    | 'PORTAL_NOT_AUTHORIZED_FOR_APPLICATION'
    | 'PORTAL_OVER_LIMIT'
    | 'PORTAL_SUSPENDED'
    | 'PREVIOUS_SPAM'
    | 'PREVIOUSLY_BOUNCED'
    | 'PREVIOUSLY_UNSUBSCRIBED_BRAND'
    | 'PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT'
    | 'PREVIOUSLY_UNSUBSCRIBED_MESSAGE'
    | 'PREVIOUSLY_UNSUBSCRIBED_PORTAL'
    | 'QUARANTINED_ADDRESS'
    | 'QUEUED'
    | 'RECIPIENT_FATIGUE_SUPPRESSED'
    | 'SENT'
    | 'TEMPLATE_RENDER_EXCEPTION'
    | 'THROTTLED'
    | 'TOO_MANY_RECIPIENTS'
    | 'UBB_GOVERNANCE_MISSING'
    | 'UNCONFIGURED_SENDING_DOMAIN'
    | 'UNDELIVERABLE'
    | 'VALIDATION_FAILED';

  /**
   * Time when the send began processing.
   */
  startedAt?: string;
}

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

export interface PublicSingleSendEmail {
  /**
   * List of email addresses to send as Bcc.
   */
  bcc: Array<string>;

  /**
   * List of email addresses to send as Cc.
   */
  cc: Array<string>;

  /**
   * List of Reply-To header values for the email.
   */
  replyTo: Array<string>;

  /**
   * The From header for the email.
   */
  from?: string;

  /**
   * ID for a particular send. No more than one email will be sent per sendId.
   */
  sendId?: string;

  /**
   * The recipient of the email.
   */
  to?: string;
}

export interface PublicSingleSendRequestEgg {
  /**
   * The contactProperties field is a map of contact property values. Each contact
   * property value contains a name and value property. Each property will get set on
   * the contact record and will be visible in the template under {{ contact.NAME }}.
   * Use these properties when you want to set a contact property while you’re
   * sending the email. For example, when sending a reciept you may want to set a
   * last_paid_date property, as the sending of the receipt will have information
   * about the last payment.
   */
  contactProperties: { [key: string]: string };

  /**
   * The customProperties field is a map of property values. Each property value
   * contains a name and value property. Each property will be visible in the
   * template under {{ custom.NAME }}. Note: Custom properties do not currently
   * support arrays. To provide a listing in an email, one workaround is to build an
   * HTML list (either with tables or ul) and specify it as a custom property.
   */
  customProperties: { [key: string]: unknown };

  /**
   * The content ID for the transactional email, which can be found in email tool UI.
   */
  emailId: number;

  message: PublicSingleSendEmail;
}

export interface TransactionalSendParams {
  /**
   * The contactProperties field is a map of contact property values. Each contact
   * property value contains a name and value property. Each property will get set on
   * the contact record and will be visible in the template under {{ contact.NAME }}.
   * Use these properties when you want to set a contact property while you’re
   * sending the email. For example, when sending a reciept you may want to set a
   * last_paid_date property, as the sending of the receipt will have information
   * about the last payment.
   */
  contactProperties: { [key: string]: string };

  /**
   * The customProperties field is a map of property values. Each property value
   * contains a name and value property. Each property will be visible in the
   * template under {{ custom.NAME }}. Note: Custom properties do not currently
   * support arrays. To provide a listing in an email, one workaround is to build an
   * HTML list (either with tables or ul) and specify it as a custom property.
   */
  customProperties: { [key: string]: unknown };

  /**
   * The content ID for the transactional email, which can be found in email tool UI.
   */
  emailId: number;

  message: PublicSingleSendEmail;
}

export declare namespace Transactional {
  export {
    type EmailSendStatusView as EmailSendStatusView,
    type EventIDView as EventIDView,
    type PublicSingleSendEmail as PublicSingleSendEmail,
    type PublicSingleSendRequestEgg as PublicSingleSendRequestEgg,
    type TransactionalSendParams as TransactionalSendParams,
  };
}
