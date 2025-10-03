// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CallingAPI from './calling';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ChannelConnectionSettings extends APIResource {
  /**
   * Configure channel connection settings
   */
  create(
    appID: number,
    body: ChannelConnectionSettingCreateParams,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.CRMExtensionsCallingChannelConnectionSettingsResponse> {
    return this._client.post(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, {
      body,
      ...options,
    });
  }

  /**
   * Update channel connection settings
   */
  update(
    appID: number,
    body: ChannelConnectionSettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.CRMExtensionsCallingChannelConnectionSettingsResponse> {
    return this._client.patch(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, {
      body,
      ...options,
    });
  }

  /**
   * Delete channel connection settings
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve channel connection settings
   */
  get(
    appID: number,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.CRMExtensionsCallingChannelConnectionSettingsResponse> {
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
