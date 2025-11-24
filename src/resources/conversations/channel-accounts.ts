// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { PublicChannelAccountsPage } from './conversations';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ChannelAccounts extends APIResource {
  /**
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicChannelAccount of client.conversations.channelAccounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ChannelAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicChannelAccountsPage, ConversationsAPI.PublicChannelAccount> {
    return this._client.getAPIList(
      '/conversations/v3/conversations/channel-accounts',
      Page<ConversationsAPI.PublicChannelAccount>,
      { query, ...options },
    );
  }

  /**
   * @example
   * ```ts
   * const publicChannelAccount =
   *   await client.conversations.channelAccounts.get(0);
   * ```
   */
  get(
    channelAccountID: number,
    query: ChannelAccountGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicChannelAccount> {
    return this._client.get(path`/conversations/v3/conversations/channel-accounts/${channelAccountID}`, {
      query,
      ...options,
    });
  }
}

export interface ChannelAccountListParams extends PageParams {
  archived?: boolean;

  channelId?: Array<number>;

  defaultPageLength?: number;

  inboxId?: Array<number>;

  sort?: Array<string>;
}

export interface ChannelAccountGetParams {
  archived?: boolean;
}

export declare namespace ChannelAccounts {
  export {
    type ChannelAccountListParams as ChannelAccountListParams,
    type ChannelAccountGetParams as ChannelAccountGetParams,
  };
}

export { type PublicChannelAccountsPage };
