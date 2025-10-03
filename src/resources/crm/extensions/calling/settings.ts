// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WebhooksAPI from '../../../webhooks';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Configure a calling extension
   */
  create(
    appID: number,
    body: SettingCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.WebhooksSettingsResponse> {
    return this._client.post(path`/crm/v3/extensions/calling/${appID}/settings`, { body, ...options });
  }

  /**
   * Update settings
   */
  update(
    appID: number,
    body: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.WebhooksSettingsResponse> {
    return this._client.patch(path`/crm/v3/extensions/calling/${appID}/settings`, { body, ...options });
  }

  /**
   * Delete calling settings
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/extensions/calling/${appID}/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve settings
   */
  get(appID: number, options?: RequestOptions): APIPromise<WebhooksAPI.WebhooksSettingsResponse> {
    return this._client.get(path`/crm/v3/extensions/calling/${appID}/settings`, options);
  }
}

export interface SettingCreateParams {
  name: string;

  url: string;

  height?: number;

  isReady?: boolean;

  supportsCustomObjects?: boolean;

  supportsInboundCalling?: boolean;

  usesCallingWindow?: boolean;

  usesRemote?: boolean;

  width?: number;
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
