// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConversationsAPI from '../conversations';
import { PublicChannelAccountsPage } from '../conversations';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ChannelAccounts extends APIResource {
  /**
   * Create a new account for a channel. Multiple accounts can communicate over a
   * single channel using different delivery identifiers.
   *
   * @example
   * ```ts
   * const publicChannelAccount =
   *   await client.conversations.customChannels.channelAccounts.create(
   *     0,
   *     {
   *       authorized: true,
   *       inboxId: 'inboxId',
   *       name: 'name',
   *     },
   *   );
   * ```
   */
  create(
    channelID: number,
    body: ChannelAccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicChannelAccount> {
    return this._client.post(path`/conversations/v3/custom-channels/${channelID}/channel-accounts`, {
      body,
      ...options,
    });
  }

  /**
   * This API is used to update the name of the channel account and it's isAuthorized
   * status. Setting to isAuthorized flag to False disables the channel account.
   *
   * @example
   * ```ts
   * const publicChannelAccount =
   *   await client.conversations.customChannels.channelAccounts.update(
   *     0,
   *     { channelId: 0 },
   *   );
   * ```
   */
  update(
    channelAccountID: number,
    params: ChannelAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicChannelAccount> {
    const { channelId, ...body } = params;
    return this._client.patch(
      path`/conversations/v3/custom-channels/${channelId}/channel-accounts/${channelAccountID}`,
      { body, ...options },
    );
  }

  /**
   * Retrieve a list of accounts for a custom channel.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicChannelAccount of client.conversations.customChannels.channelAccounts.list(
   *   0,
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    channelID: number,
    query: ChannelAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicChannelAccountsPage, ConversationsAPI.PublicChannelAccount> {
    return this._client.getAPIList(
      path`/conversations/v3/custom-channels/${channelID}/channel-accounts`,
      Page<ConversationsAPI.PublicChannelAccount>,
      { query, ...options },
    );
  }

  /**
   * Retrieve the details for a specific channel account. This contains all the
   * metadata about your channel account, including its channel, associated inbox id,
   * and delivery identifier information.
   *
   * @example
   * ```ts
   * const publicChannelAccount =
   *   await client.conversations.customChannels.channelAccounts.get(
   *     0,
   *     { channelId: 0 },
   *   );
   * ```
   */
  get(
    channelAccountID: number,
    params: ChannelAccountGetParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicChannelAccount> {
    const { channelId, ...query } = params;
    return this._client.get(
      path`/conversations/v3/custom-channels/${channelId}/channel-accounts/${channelAccountID}`,
      { query, ...options },
    );
  }
}

export interface ChannelAccountCreateParams {
  authorized: boolean;

  inboxId: string;

  name: string;

  deliveryIdentifier?: ConversationsAPI.PublicDeliveryIdentifier;
}

export interface ChannelAccountUpdateParams {
  /**
   * Path param: The channel to update
   */
  channelId: number;

  /**
   * Body param
   */
  authorized?: boolean;

  /**
   * Body param
   */
  name?: string;
}

export interface ChannelAccountListParams extends PageParams {
  archived?: boolean;

  defaultPageLength?: number;

  deliveryIdentifierType?: Array<string>;

  deliveryIdentifierValue?: Array<string>;

  sort?: Array<string>;
}

export interface ChannelAccountGetParams {
  /**
   * Path param: The ID of the channel associated with the account being retrieved.
   */
  channelId: number;

  /**
   * Query param: Filter results to include only archived or non-archived channel
   * accounts.
   */
  archived?: boolean;
}

export declare namespace ChannelAccounts {
  export {
    type ChannelAccountCreateParams as ChannelAccountCreateParams,
    type ChannelAccountUpdateParams as ChannelAccountUpdateParams,
    type ChannelAccountListParams as ChannelAccountListParams,
    type ChannelAccountGetParams as ChannelAccountGetParams,
  };
}

export { type PublicChannelAccountsPage };
