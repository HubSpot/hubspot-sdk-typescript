// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { PublicChannelsPage } from './conversations';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Channels extends APIResource {
  /**
   * Retrieve a list of channels, with optional filters and sorting.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicChannel of client.conversations.channels.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ChannelListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicChannelsPage, ConversationsAPI.PublicChannel> {
    return this._client.getAPIList(
      '/conversations/v3/conversations/channels',
      Page<ConversationsAPI.PublicChannel>,
      { query, ...options },
    );
  }

  /**
   * Retrieve details of a single channel using the channel ID.
   *
   * @example
   * ```ts
   * const publicChannel =
   *   await client.conversations.channels.get(0);
   * ```
   */
  get(channelID: number, options?: RequestOptions): APIPromise<ConversationsAPI.PublicChannel> {
    return this._client.get(path`/conversations/v3/conversations/channels/${channelID}`, options);
  }
}

export interface ChannelListParams extends PageParams {
  /**
   * The default number of results to display per page.
   */
  defaultPageLength?: number;

  /**
   * Specify the sort order for the channels.
   */
  sort?: Array<string>;
}

export declare namespace Channels {
  export { type ChannelListParams as ChannelListParams };
}

export { type PublicChannelsPage };
