// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ChannelAccounts extends APIResource {
  /**
   * Retrieve a list of channel accounts, with optional filters and sorting.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalPublicChannelAccountForwardPaging =
   *   await client.conversations.channelAccounts.list();
   * ```
   */
  list(
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.CollectionResponseWithTotalPublicChannelAccountForwardPaging> {
    return this._client.get('/conversations/v3/conversations/channel-accounts', options);
  }

  /**
   * Retrieve details of a single channel account using the channel account ID.
   *
   * @example
   * ```ts
   * const publicChannelAccount =
   *   await client.conversations.channelAccounts.get(
   *     'channelAccountId',
   *   );
   * ```
   */
  get(channelAccountID: string, options?: RequestOptions): APIPromise<ConversationsAPI.PublicChannelAccount> {
    return this._client.get(
      path`/conversations/v3/conversations/channel-accounts/${channelAccountID}`,
      options,
    );
  }
}
