// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomChannelsAPI from './custom-channels';
import { PublicChannelAccountsPage } from './custom-channels';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ChannelAccounts extends APIResource {
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
  accountName: string;

  /**
   * Body param
   */
  deliveryIdentifier: CustomChannelsAPI.PublicDeliveryIdentifier;
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
