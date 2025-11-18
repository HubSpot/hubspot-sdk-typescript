// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MeetingsAPI from './meetings';
import { ExternalLinkMetadataPage } from './meetings';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class MeetingsLinks extends APIResource {
  /**
   * Get a paged list meeting scheduling pages
   */
  list(
    query: MeetingsLinkListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExternalLinkMetadataPage, MeetingsAPI.ExternalLinkMetadata> {
    return this._client.getAPIList(
      '/scheduler/v3/meetings/meeting-links',
      Page<MeetingsAPI.ExternalLinkMetadata>,
      { query, ...options },
    );
  }

  /**
   * Book a meeting for a specified meeting page.
   */
  book(
    body: MeetingsLinkBookParams,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalMeetingBookingResponse> {
    return this._client.post('/scheduler/v3/meetings/meeting-links/book', { body, ...options });
  }

  /**
   * Get the next availability times for a meeting page.
   */
  getAvailabilityBySlug(
    slug: string,
    query: MeetingsLinkGetAvailabilityBySlugParams,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalLinkAvailabilityAndBusyTimes> {
    return this._client.get(path`/scheduler/v3/meetings/meeting-links/book/availability-page/${slug}`, {
      query,
      ...options,
    });
  }

  /**
   * Get details about the initial information necessary for a meeting scheduler.
   */
  getBookingInfoBySlug(
    slug: string,
    query: MeetingsLinkGetBookingInfoBySlugParams,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalBookingInfo> {
    return this._client.get(path`/scheduler/v3/meetings/meeting-links/book/${slug}`, { query, ...options });
  }
}

export interface MeetingsLinkListParams extends PageParams {
  /**
   * Retrieve scheduling pages with a specified name.
   */
  name?: string;

  /**
   * Filter the response to scheduling pages created by the specified user.
   */
  organizerUserId?: string;

  /**
   * Filter the response to the specific type of meeting.
   */
  type?: string;
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

export interface MeetingsLinkGetAvailabilityBySlugParams {
  /**
   * Return times in response based on specified time zone.
   */
  timezone: string;

  /**
   * Get times for a different month.
   */
  monthOffset?: number;
}

export interface MeetingsLinkGetBookingInfoBySlugParams {
  /**
   * Return times in response based on specified time zone.
   */
  timezone: string;
}

export declare namespace MeetingsLinks {
  export {
    type MeetingsLinkListParams as MeetingsLinkListParams,
    type MeetingsLinkBookParams as MeetingsLinkBookParams,
    type MeetingsLinkGetAvailabilityBySlugParams as MeetingsLinkGetAvailabilityBySlugParams,
    type MeetingsLinkGetBookingInfoBySlugParams as MeetingsLinkGetBookingInfoBySlugParams,
  };
}

export { type ExternalLinkMetadataPage };
