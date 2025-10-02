// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Read webhook settings
   */
  retrieve(appID: number, options?: RequestOptions): APIPromise<Settings> {
    return this._client.get(path`/webhooks/v3/${appID}/settings`, options);
  }

  /**
   * Update webhook settings
   */
  update(appID: number, body: SettingUpdateParams, options?: RequestOptions): APIPromise<Settings> {
    return this._client.put(path`/webhooks/v3/${appID}/settings`, { body, ...options });
  }

  /**
   * Delete webhook settings
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/v3/${appID}/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Settings {
  createdAt: string;

  targetUrl: string;

  throttling: ThrottlingSettings;

  updatedAt?: string;
}

export interface ThrottlingSettings {
  maxConcurrentRequests: number;
}

export interface SettingUpdateParams {
  targetUrl: string;

  throttling: ThrottlingSettings;
}

export declare namespace Settings {
  export {
    type Settings as Settings,
    type ThrottlingSettings as ThrottlingSettings,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
