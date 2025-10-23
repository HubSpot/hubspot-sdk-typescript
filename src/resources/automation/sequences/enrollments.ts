// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SequencesAPI from './sequences';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Enrollments extends APIResource {
  /**
   * Enroll a contact into a sequence using the specified user ID and sequence
   * details.
   */
  enroll(
    body: EnrollmentEnrollParams,
    options?: RequestOptions,
  ): APIPromise<SequencesAPI.PublicSequenceEnrollmentLiteResponse> {
    return this._client.post('/automation/v4/sequences/enrollments', { body, ...options });
  }

  /**
   * Get the enrollment status of a contact in sequences by their contact ID.
   */
  getByContactID(
    contactID: string,
    options?: RequestOptions,
  ): APIPromise<SequencesAPI.PublicSequenceEnrollmentResponse> {
    return this._client.get(path`/automation/v4/sequences/enrollments/contact/${contactID}`, options);
  }
}

export interface EnrollmentEnrollParams {
  contactId: string;

  senderEmail: string;

  sequenceId: string;

  senderAliasAddress?: string;
}

export declare namespace Enrollments {
  export { type EnrollmentEnrollParams as EnrollmentEnrollParams };
}
