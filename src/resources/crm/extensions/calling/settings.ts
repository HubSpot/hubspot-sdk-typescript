// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WebhooksAPI from '../../../webhooks/webhooks';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * @example
   * ```ts
   * const settingsResponse =
   *   await client.crm.extensions.calling.settings.create(0, {
   *     height: 0,
   *     isReady: true,
   *     name: 'name',
   *     supportsCustomObjects: true,
   *     supportsInboundCalling: true,
   *     url: 'url',
   *     usesCallingWindow: true,
   *     usesRemote: true,
   *     width: 0,
   *   });
   * ```
   */
  create(
    appID: number,
    body: SettingCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.SettingsResponse> {
    return this._client.post(path`/crm/v3/extensions/calling/${appID}/settings`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const settingsResponse =
   *   await client.crm.extensions.calling.settings.update(0);
   * ```
   */
  update(
    appID: number,
    body: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.SettingsResponse> {
    return this._client.patch(path`/crm/v3/extensions/calling/${appID}/settings`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * await client.crm.extensions.calling.settings.delete(0);
   * ```
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/extensions/calling/${appID}/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * const settingsResponse =
   *   await client.crm.extensions.calling.settings.get(0);
   * ```
   */
  get(appID: number, options?: RequestOptions): APIPromise<WebhooksAPI.SettingsResponse> {
    return this._client.get(path`/crm/v3/extensions/calling/${appID}/settings`, options);
  }
}

export interface SettingCreateParams {
  height: number;

  isReady: boolean;

  name: string;

  supportsCustomObjects: boolean;

  supportsInboundCalling: boolean;

  url: string;

  usesCallingWindow: boolean;

  usesRemote: boolean;

  width: number;
}

export interface SettingUpdateParams {
  height?: number;

  isReady?: boolean;

  name?: string;

  supportsCustomObjects?: boolean;

  supportsInboundCalling?: boolean;

  url?: string;

  usesCallingWindow?: boolean;

  usesRemote?: boolean;

  width?: number;
}

export declare namespace Settings {
  export { type SettingCreateParams as SettingCreateParams, type SettingUpdateParams as SettingUpdateParams };
}
