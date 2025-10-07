// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MeetingsAPI from './meetings';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class MeetingsLinks extends APIResource {
  /**
   * Get meeting scheduling pages
   */
  list(
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.CollectionResponseWithTotalExternalLinkMetadataForwardPaging> {
    return this._client.get('/scheduler/v3/meetings/meeting-links', options);
  }

  /**
   * Book a meeeting
   */
  book(
    body: MeetingsLinkBookParams,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalMeetingBookingResponse> {
    return this._client.post('/scheduler/v3/meetings/meeting-links/book', { body, ...options });
  }

  /**
   * List booking information
   */
  getInitialBookingInfo(slug: string, options?: RequestOptions): APIPromise<MeetingsAPI.ExternalBookingInfo> {
    return this._client.get(path`/scheduler/v3/meetings/meeting-links/book/${slug}`, options);
  }

  /**
   * Get the availability for a meeting
   */
  getNextAvailability(
    slug: string,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalLinkAvailabilityAndBusyTimes> {
    return this._client.get(
      path`/scheduler/v3/meetings/meeting-links/book/availability-page/${slug}`,
      options,
    );
  }
}

export interface MeetingsLinkBookParams {
  duration: number;

  email: string;

  firstName: string;

  formFields: Array<MeetingsAPI.ExternalBookingFormField>;

  lastName: string;

  legalConsentResponses: Array<MeetingsAPI.ExternalLegalConsentResponse>;

  likelyAvailableUserIds: Array<string>;

  slug: string;

  startTime: string;

  locale?: string;

  timezone?: string;
}

export declare namespace MeetingsLinks {
  export { type MeetingsLinkBookParams as MeetingsLinkBookParams };
}
