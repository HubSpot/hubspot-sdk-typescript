// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WebhooksAPI from '../../../webhooks/webhooks';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Set the menu label, target iframe URL, and dimensions for your calling
   * extension.
   *
   * @example
   * ```ts
   * const settingsResponse =
   *   await client.crm.extensions.calling.settings.create(0, {
   *     name: 'HubPhone',
   *     url: 'https://www.example.com/hubspot/iframe',
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
   * Update existing calling extension settings.
   *
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
   * Delete a calling extension. This will remove your service as an option for all
   * connected accounts.
   *
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
   * Retrieve the settings configured for the app.
   *
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
  /**
   * The name of your calling service to display to users.
   */
  name: string;

  /**
   * The URL to your phone/calling UI, built with the [Calling SDK](#).
   */
  url: string;

  /**
   * The target height of the iframe that will contain your phone/calling UI.
   */
  height?: number;

  /**
   * When true, this indicates that your calling app is ready for production. Users
   * will be able to select your calling app as their provider and can then click to
   * dial within HubSpot.
   */
  isReady?: boolean;

  /**
   * When true, users will be able to click to dial from custom objects.
   */
  supportsCustomObjects?: boolean;

  /**
   * When true, this indicates that your calling app supports inbound calling within
   * HubSpot.
   */
  supportsInboundCalling?: boolean;

  /**
   * When false, this indicates that your calling app does not require the use of the
   * separate calling window to hold the call connection.
   */
  usesCallingWindow?: boolean;

  /**
   * When false, this indicates that your calling app does not use the anchored
   * calling remote within the HubSpot app.
   */
  usesRemote?: boolean;

  /**
   * The target width of the iframe that will contain your phone/calling UI.
   */
  width?: number;
}

export interface SettingUpdateParams {
  /**
   * The target height of the iframe that will contain your phone/calling UI.
   */
  height?: number;

  /**
   * When true, this indicates that your calling app is ready for production. Users
   * will be able to select your calling app as their provider and can then click to
   * dial within HubSpot.
   */
  isReady?: boolean;

  /**
   * The name of your calling service to display to users.
   */
  name?: string;

  /**
   * When true, users will be able to click to dial from custom objects.
   */
  supportsCustomObjects?: boolean;

  /**
   * When true, this indicates that your calling app supports inbound calling within
   * HubSpot.
   */
  supportsInboundCalling?: boolean;

  /**
   * The URL to your phone/calling UI, built with the [Calling SDK](#).
   */
  url?: string;

  /**
   * When false, this indicates that your calling app does not require the use of the
   * separate calling window to hold the call connection.
   */
  usesCallingWindow?: boolean;

  /**
   * When false, this indicates that your calling app does not use the anchored
   * calling remote within the HubSpot app.
   */
  usesRemote?: boolean;

  /**
   * The target width of the iframe that will contain your phone/calling UI.
   */
  width?: number;
}

export declare namespace Settings {
  export { type SettingCreateParams as SettingCreateParams, type SettingUpdateParams as SettingUpdateParams };
}
