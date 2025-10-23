// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomChannelsAPI from './custom-channels';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ChannelAccountStagingTokens extends APIResource {
  /**
   * Update a channel account staging token's account name and delivery identifier.
   * This information will be applied to the channel account created from this
   * staging token. This is used for public apps.
   *
   * @example
   * ```ts
   * const publicChannelAccountStagingToken =
   *   await client.conversations.customChannels.channelAccountStagingTokens.update(
   *     'accountToken',
   *     {
   *       channelId: 'channelId',
   *       accountName: 'accountName',
   *       deliveryIdentifier: { type: 'type', value: 'value' },
   *     },
   *   );
   * ```
   */
  update(
    accountToken: string,
    params: ChannelAccountStagingTokenUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomChannelsAPI.PublicChannelAccountStagingToken> {
    const { channelId, ...body } = params;
    return this._client.patch(
      path`/conversations/v3/custom-channels/${channelId}/channel-account-staging-tokens/${accountToken}`,
      { body, ...options },
    );
  }
}

export interface ChannelAccountStagingTokenUpdateParams {
  /**
   * Path param:
   */
  channelId: string;

  /**
   * Body param:
   */
  accountName: string;

  /**
   * Body param:
   */
  deliveryIdentifier: CustomChannelsAPI.PublicDeliveryIdentifier;
}

export declare namespace ChannelAccountStagingTokens {
  export { type ChannelAccountStagingTokenUpdateParams as ChannelAccountStagingTokenUpdateParams };
}
