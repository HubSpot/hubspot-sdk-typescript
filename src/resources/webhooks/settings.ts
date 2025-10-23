// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebhooksAPI from './webhooks';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Update webhook settings for the specified app.
   *
   * @example
   * ```ts
   * const settingsResponse =
   *   await client.webhooks.settings.update(0, {
   *     targetUrl: 'https://www.example.com/hubspot/target',
   *     throttling: { maxConcurrentRequests: 10 },
   *   });
   * ```
   */
  update(
    appID: number,
    body: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.SettingsResponse> {
    return this._client.put(path`/webhooks/v3/${appID}/settings`, { body, ...options });
  }

  /**
   * Retrieve the webhook settings for the specified app, including the webhook’s
   * target URL, throttle configuration, and create/update date.
   *
   * @example
   * ```ts
   * const settingsResponse =
   *   await client.webhooks.settings.list(0);
   * ```
   */
  list(appID: number, options?: RequestOptions): APIPromise<WebhooksAPI.SettingsResponse> {
    return this._client.get(path`/webhooks/v3/${appID}/settings`, options);
  }

  /**
   * Delete the webhook settings for the specified app. Event subscriptions will not
   * be deleted, but will be paused until another webhook is created.
   *
   * @example
   * ```ts
   * await client.webhooks.settings.delete(0);
   * ```
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/v3/${appID}/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SettingUpdateParams {
  /**
   * A publicly available URL for HubSpot to call where event payloads will be
   * delivered.
   */
  targetUrl: string;

  /**
   * Configuration details for webhook throttling.
   */
  throttling: WebhooksAPI.ThrottlingSettings;
}

export declare namespace Settings {
  export { type SettingUpdateParams as SettingUpdateParams };
}
