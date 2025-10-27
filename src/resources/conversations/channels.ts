// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Channels extends APIResource {
  /**
   * Retrieve a list of channels, with optional filters and sorting.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalPublicChannelForwardPaging =
   *   await client.conversations.channels.list();
   * ```
   */
  list(
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.CollectionResponseWithTotalPublicChannelForwardPaging> {
    return this._client.get('/conversations/v3/conversations/channels', options);
  }

  /**
   * Retrieve details of a single channel using the channel ID.
   *
   * @example
   * ```ts
   * const publicChannel =
   *   await client.conversations.channels.get('channelId');
   * ```
   */
  get(channelID: string, options?: RequestOptions): APIPromise<ConversationsAPI.PublicChannel> {
    return this._client.get(path`/conversations/v3/conversations/channels/${channelID}`, options);
  }
}
