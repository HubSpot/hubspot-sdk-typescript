// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CallingAPI from './calling';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ChannelConnectionSettings extends APIResource {
  /**
   * Configure
   * [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#create-channel-connection-settings)
   * for the app.
   *
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
   * Update existing
   * [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#manage-the-webhook-settings-for-channel-connection)
   * for your app.
   *
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
   * Delete the
   * [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#delete-existing-channel-connection-settings)
   * for the app.
   *
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
   * Retrieve the settings related to the app's
   * [channel connection](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#fetch-existing-channel-connection-settings).
   *
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
  /**
   * If true, this app will be considered to support channel connection
   */
  isReady: boolean;

  /**
   * The URL to fetch phone numbers available for channel connection
   */
  url: string;
}

export interface ChannelConnectionSettingUpdateParams {
  /**
   * If true, this app will be considered to support channel connection
   */
  isReady?: boolean;

  /**
   * The URL to fetch phone numbers available for channel connection
   */
  url?: string;
}

export declare namespace ChannelConnectionSettings {
  export {
    type ChannelConnectionSettingCreateParams as ChannelConnectionSettingCreateParams,
    type ChannelConnectionSettingUpdateParams as ChannelConnectionSettingUpdateParams,
  };
}
