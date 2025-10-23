// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomChannelsAPI from './custom-channels';
import { APIPromise } from '../../../core/api-promise';
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
   *     'channelId',
   *     { authorized: true, inboxId: 'inboxId', name: 'name' },
   *   );
   * ```
   */
  create(
    channelID: string,
    body: ChannelAccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicChannelAccount> {
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
   *     'channelAccountId',
   *     { channelId: 'channelId' },
   *   );
   * ```
   */
  update(
    channelAccountID: string,
    params: ChannelAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicChannelAccount> {
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
   * const collectionResponseWithTotalPublicChannelAccountForwardPaging =
   *   await client.conversations.customChannels.channelAccounts.list(
   *     'channelId',
   *   );
   * ```
   */
  list(
    channelID: string,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.CollectionResponseWithTotalPublicChannelAccountForwardPaging> {
    return this._client.get(path`/conversations/v3/custom-channels/${channelID}/channel-accounts`, options);
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
   *     'channelAccountId',
   *     { channelId: 'channelId' },
   *   );
   * ```
   */
  get(
    channelAccountID: string,
    params: ChannelAccountGetParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicChannelAccount> {
    const { channelId } = params;
    return this._client.get(
      path`/conversations/v3/custom-channels/${channelId}/channel-accounts/${channelAccountID}`,
      options,
    );
  }
}

export interface ChannelAccountCreateParams {
  authorized: boolean;

  inboxId: string;

  name: string;

  deliveryIdentifier?: CustomChannelsAPI.PublicDeliveryIdentifier;
}

export interface ChannelAccountUpdateParams {
  /**
   * Path param:
   */
  channelId: string;

  /**
   * Body param:
   */
  authorized?: boolean;

  /**
   * Body param:
   */
  name?: string;
}

export interface ChannelAccountGetParams {
  channelId: string;
}

export declare namespace ChannelAccounts {
  export {
    type ChannelAccountCreateParams as ChannelAccountCreateParams,
    type ChannelAccountUpdateParams as ChannelAccountUpdateParams,
    type ChannelAccountGetParams as ChannelAccountGetParams,
  };
}
