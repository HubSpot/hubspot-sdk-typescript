// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CallingAPI from './calling';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ChannelConnectionSettings extends APIResource {
  /**
   * @example
   * ```ts
   * const channelConnectionSettingsResponse =
   *   await client.crm.extensions.calling.channelConnectionSettings.create(
   *     0,
   *     { isReady: true, url: 'url' },
   *   );
   * ```
   */
  create(
    appID: number,
    body: ChannelConnectionSettingCreateParams,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.ChannelConnectionSettingsResponse> {
    return this._client.post(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, {
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * const channelConnectionSettingsResponse =
   *   await client.crm.extensions.calling.channelConnectionSettings.update(
   *     0,
   *   );
   * ```
   */
  update(
    appID: number,
    body: ChannelConnectionSettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.ChannelConnectionSettingsResponse> {
    return this._client.patch(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, {
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * await client.crm.extensions.calling.channelConnectionSettings.delete(
   *   0,
   * );
   * ```
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * const channelConnectionSettingsResponse =
   *   await client.crm.extensions.calling.channelConnectionSettings.get(
   *     0,
   *   );
   * ```
   */
  get(appID: number, options?: RequestOptions): APIPromise<CallingAPI.ChannelConnectionSettingsResponse> {
    return this._client.get(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, options);
  }
}

export interface ChannelConnectionSettingCreateParams {
  isReady: boolean;

  url: string;
}

export interface ChannelConnectionSettingUpdateParams {
  isReady?: boolean;

  url?: string;
}

export declare namespace ChannelConnectionSettings {
  export {
    type ChannelConnectionSettingCreateParams as ChannelConnectionSettingCreateParams,
    type ChannelConnectionSettingUpdateParams as ChannelConnectionSettingUpdateParams,
  };
}
