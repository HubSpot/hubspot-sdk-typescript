// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomChannelsAPI from './custom-channels';
import { PublicChannelAccountsPage } from './custom-channels';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ChannelAccounts extends APIResource {
  /**
   * Create a new account for a channel. Multiple accounts can communicate over a
   * single channel using different delivery identifiers.
   */
  create(
    channelID: number,
    body: ChannelAccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicChannelAccount> {
    return this._client.post(path`/conversations/custom-channels/2026-03/${channelID}/channel-accounts`, {
      body,
      ...options,
    });
  }

  /**
   * This API is used to update the name of the channel account and it's isAuthorized
   * status. Setting to isAuthorized flag to False disables the channel account.
   */
  update(
    channelAccountID: number,
    params: ChannelAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicChannelAccount> {
    const { channelId, ...body } = params;
    return this._client.patch(
      path`/conversations/custom-channels/2026-03/${channelId}/channel-accounts/${channelAccountID}`,
      { body, ...options },
    );
  }

  /**
   * Retrieve a list of accounts for a custom channel.
   */
  list(
    channelID: number,
    query: ChannelAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicChannelAccountsPage, CustomChannelsAPI.PublicChannelAccount> {
    return this._client.getAPIList(
      path`/conversations/custom-channels/2026-03/${channelID}/channel-accounts`,
      Page<CustomChannelsAPI.PublicChannelAccount>,
      { query, ...options },
    );
  }

  /**
   * Update a channel account staging token's account name and delivery identifier.
   * This information will be applied to the channel account created from this
   * staging token. This is used for public apps.
   */
  updateStagingToken(
    accountToken: string,
    params: ChannelAccountUpdateStagingTokenParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicChannelAccountStagingToken> {
    const { channelId, ...body } = params;
    return this._client.patch(
      path`/conversations/custom-channels/2026-03/${channelId}/channel-account-staging-tokens/${accountToken}`,
      { body, ...options },
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
   * Path param
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
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  defaultPageLength?: number;

  deliveryIdentifierType?: Array<
    'HS_EMAIL_ADDRESS' | 'HS_PHONE_NUMBER' | 'HS_SHORT_CODE' | 'CHANNEL_SPECIFIC_OPAQUE_ID'
  >;

  deliveryIdentifierValue?: Array<string>;

  sort?: Array<string>;
}

export interface ChannelAccountUpdateStagingTokenParams {
  /**
   * Path param
   */
  channelId: number;

  /**
   * Body param
   */
  accountName?: string;

  /**
   * Body param
   */
  deliveryIdentifier?: CustomChannelsAPI.PublicDeliveryIdentifier;
}

export declare namespace ChannelAccounts {
  export {
    type ChannelAccountCreateParams as ChannelAccountCreateParams,
    type ChannelAccountUpdateParams as ChannelAccountUpdateParams,
    type ChannelAccountListParams as ChannelAccountListParams,
    type ChannelAccountUpdateStagingTokenParams as ChannelAccountUpdateStagingTokenParams,
  };
}

export { type PublicChannelAccountsPage };
