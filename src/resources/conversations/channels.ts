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
  defaultPageLength?: number;

  sort?: Array<string>;
}

export declare namespace Channels {
  export { type ChannelListParams as ChannelListParams };
}

export { type PublicChannelsPage };
