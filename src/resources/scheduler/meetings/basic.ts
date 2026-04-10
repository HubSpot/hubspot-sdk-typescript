// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MeetingsAPI from './meetings';
import { ExternalLinkMetadataPage } from './meetings';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseBasic extends APIResource {
  static override readonly _key: readonly ['scheduler', 'meetings', 'basic'] = Object.freeze([
    'scheduler',
    'meetings',
    'basic',
  ] as const);

  /**
   * Get a paged list meeting scheduling pages
   */
  list(
    query: BasicListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExternalLinkMetadataPage, MeetingsAPI.ExternalLinkMetadata> {
    return this._client.getAPIList(
      '/scheduler/2026-03/meetings/meeting-links',
      Page<MeetingsAPI.ExternalLinkMetadata>,
      { query, ...options },
    );
  }

  /**
   * Get the next availability times for a meeting page.
   */
  getAvailabilityBySlug(
    slug: string,
    query: BasicGetAvailabilityBySlugParams,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalLinkAvailabilityAndBusyTimes> {
    return this._client.get(path`/scheduler/2026-03/meetings/meeting-links/book/availability-page/${slug}`, {
      query,
      ...options,
    });
  }

  /**
   * Get details about the initial information necessary for a meeting scheduler.
   */
  getBookingInfoBySlug(
    slug: string,
    query: BasicGetBookingInfoBySlugParams,
    options?: RequestOptions,
  ): APIPromise<MeetingsAPI.ExternalBookingInfo> {
    return this._client.get(path`/scheduler/2026-03/meetings/meeting-links/book/${slug}`, {
      query,
      ...options,
    });
  }
}
export class Basic extends BaseBasic {}

export interface BasicListParams extends PageParams {
  name?: string;

  organizerUserId?: string;

  type?: 'GROUP_CALENDAR' | 'PERSONAL_LINK' | 'ROUND_ROBIN_CALENDAR';
}

export interface BasicGetAvailabilityBySlugParams {
  timezone: string;

  monthOffset?: number;
}

export interface BasicGetBookingInfoBySlugParams {
  timezone: string;
}

export declare namespace Basic {
  export {
    type BasicListParams as BasicListParams,
    type BasicGetAvailabilityBySlugParams as BasicGetAvailabilityBySlugParams,
    type BasicGetBookingInfoBySlugParams as BasicGetBookingInfoBySlugParams,
  };
}

export { type ExternalLinkMetadataPage };
