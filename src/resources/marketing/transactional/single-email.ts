// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TransactionalAPI from './transactional';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class SingleEmail extends APIResource {
  /**
   * Asynchronously send a transactional email. Returns the status of the email send
   * with a statusId that can be used to continuously query for the status using the
   * Email Send Status API.
   *
   * @example
   * ```ts
   * const emailSendStatusView =
   *   await client.marketing.transactional.singleEmail.send({
   *     emailId: 0,
   *     message: { to: 'to' },
   *   });
   * ```
   */
  send(
    body: SingleEmailSendParams,
    options?: RequestOptions,
  ): APIPromise<TransactionalAPI.EmailSendStatusView> {
    return this._client.post('/marketing/v3/transactional/single-email/send', { body, ...options });
  }
}

export interface SingleEmailSendParams {
  /**
   * The content ID for the transactional email, which can be found in email tool UI.
   */
  emailId: number;

  /**
   * A JSON object containing anything you want to override.
   */
  message: TransactionalAPI.PublicSingleSendEmail;

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

export declare namespace SingleEmail {
  export { type SingleEmailSendParams as SingleEmailSendParams };
}
