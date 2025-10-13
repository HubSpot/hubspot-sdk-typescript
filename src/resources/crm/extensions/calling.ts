// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Calling extends APIResource {
  /**
   * Configure
   * [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#create-channel-connection-settings)
   * for the app.
   *
   * @example
   * ```ts
   * const channelConnectionSettingsResponse =
   *   await client.crm.extensions.calling.create(0, {
   *     isReady: true,
   *     url: 'url',
   *   });
   * ```
   */
  create(
    appID: number,
    body: CallingCreateParams,
    options?: RequestOptions,
  ): APIPromise<ChannelConnectionSettingsResponse> {
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
   *   await client.crm.extensions.calling.update(0);
   * ```
   */
  update(
    appID: number,
    body: CallingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ChannelConnectionSettingsResponse> {
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
   * await client.crm.extensions.calling.delete(0);
   * ```
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the URL that is registered for
   * [call recording](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
   *
   * @example
   * ```ts
   * const recordingSettingsResponse =
   *   await client.crm.extensions.calling.getURLFormat(0);
   * ```
   */
  getURLFormat(appID: number, options?: RequestOptions): APIPromise<RecordingSettingsResponse> {
    return this._client.get(path`/crm/v3/extensions/calling/${appID}/settings/recording`, options);
  }

  /**
   * Mark a call recording as ready for transcription, specifying the call by its ID
   * (`engagementid`).
   *
   * @example
   * ```ts
   * await client.crm.extensions.calling.markAsReady({
   *   engagementId: 0,
   * });
   * ```
   */
  markAsReady(body: CallingMarkAsReadyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/extensions/calling/recordings/ready', {
      body,
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
   *   await client.crm.extensions.calling.read(0);
   * ```
   */
  read(appID: number, options?: RequestOptions): APIPromise<ChannelConnectionSettingsResponse> {
    return this._client.get(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, options);
  }

  /**
   * Register an external URL that HubSpot will use to retrieve
   * [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
   *
   * @example
   * ```ts
   * const recordingSettingsResponse =
   *   await client.crm.extensions.calling.registerURLFormat(0, {
   *     urlToRetrieveAuthedRecording:
   *       'urlToRetrieveAuthedRecording',
   *   });
   * ```
   */
  registerURLFormat(
    appID: number,
    body: CallingRegisterURLFormatParams,
    options?: RequestOptions,
  ): APIPromise<RecordingSettingsResponse> {
    return this._client.post(path`/crm/v3/extensions/calling/${appID}/settings/recording`, {
      body,
      ...options,
    });
  }

  /**
   * Update the URL that HubSpot will use to retrieve
   * [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
   *
   * @example
   * ```ts
   * const recordingSettingsResponse =
   *   await client.crm.extensions.calling.updateURLFormat(0);
   * ```
   */
  updateURLFormat(
    appID: number,
    body: CallingUpdateURLFormatParams,
    options?: RequestOptions,
  ): APIPromise<RecordingSettingsResponse> {
    return this._client.patch(path`/crm/v3/extensions/calling/${appID}/settings/recording`, {
      body,
      ...options,
    });
  }
}

export interface ChannelConnectionSettingsPatchRequest {
  /**
   * If true, this app will be considered to support channel connection
   */
  isReady?: boolean;

  /**
   * The URL to fetch phone numbers available for channel connection
   */
  url?: string;
}

export interface ChannelConnectionSettingsRequest {
  /**
   * If true, this app will be considered to support channel connection
   */
  isReady: boolean;

  /**
   * The URL to fetch phone numbers available for channel connection
   */
  url: string;
}

export interface ChannelConnectionSettingsResponse {
  /**
   * The timestamp this setting was created
   */
  createdAt: string;

  /**
   * If true, this app will be considered to support channel connection
   */
  isReady: boolean;

  /**
   * The timestamp this setting was last updated
   */
  updatedAt: string;

  /**
   * The URL to fetch phone numbers available for channel connection
   */
  url: string;
}

export interface MarkRecordingAsReadyRequest {
  engagementId: number;
}

export interface RecordingSettingsPatchRequest {
  urlToRetrieveAuthedRecording?: string;
}

export interface RecordingSettingsRequest {
  urlToRetrieveAuthedRecording: string;
}

export interface RecordingSettingsResponse {
  urlToRetrieveAuthedRecording: string;
}

export interface SettingsPatchRequest {
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

export interface SettingsRequest {
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

export interface SettingsResponse {
  /**
   * When this calling extension was created.
   */
  createdAt: string;

  /**
   * The target height of the iframe that will contain your phone/calling UI.
   */
  height: number;

  /**
   * When true, this indicates that your calling app is ready for production. Users
   * will be able to select your calling app as their provider and can then click to
   * dial within HubSpot.
   */
  isReady: boolean;

  /**
   * The name of your calling service to display to users.
   */
  name: string;

  /**
   * When true, users will be able to click to dial from custom objects.
   */
  supportsCustomObjects: boolean;

  /**
   * When true, this indicates that your calling app supports inbound calling within
   * HubSpot.
   */
  supportsInboundCalling: boolean;

  /**
   * The last time the settings for this calling extension were modified.
   */
  updatedAt: string;

  /**
   * The URL to your phone/calling UI, built with the [Calling SDK](#).
   */
  url: string;

  /**
   * When false, this indicates that your calling app does not require the use of the
   * separate calling window to hold the call connection.
   */
  usesCallingWindow: boolean;

  /**
   * When false, this indicates that your calling app does not use the anchored
   * calling remote within the HubSpot app.
   */
  usesRemote: boolean;

  /**
   * The target width of the iframe that will contain your phone/calling UI.
   */
  width: number;
}

export interface CallingCreateParams {
  /**
   * If true, this app will be considered to support channel connection
   */
  isReady: boolean;

  /**
   * The URL to fetch phone numbers available for channel connection
   */
  url: string;
}

export interface CallingUpdateParams {
  /**
   * If true, this app will be considered to support channel connection
   */
  isReady?: boolean;

  /**
   * The URL to fetch phone numbers available for channel connection
   */
  url?: string;
}

export interface CallingMarkAsReadyParams {
  engagementId: number;
}

export interface CallingRegisterURLFormatParams {
  urlToRetrieveAuthedRecording: string;
}

export interface CallingUpdateURLFormatParams {
  urlToRetrieveAuthedRecording?: string;
}

export declare namespace Calling {
  export {
    type ChannelConnectionSettingsPatchRequest as ChannelConnectionSettingsPatchRequest,
    type ChannelConnectionSettingsRequest as ChannelConnectionSettingsRequest,
    type ChannelConnectionSettingsResponse as ChannelConnectionSettingsResponse,
    type MarkRecordingAsReadyRequest as MarkRecordingAsReadyRequest,
    type RecordingSettingsPatchRequest as RecordingSettingsPatchRequest,
    type RecordingSettingsRequest as RecordingSettingsRequest,
    type RecordingSettingsResponse as RecordingSettingsResponse,
    type SettingsPatchRequest as SettingsPatchRequest,
    type SettingsRequest as SettingsRequest,
    type SettingsResponse as SettingsResponse,
    type CallingCreateParams as CallingCreateParams,
    type CallingUpdateParams as CallingUpdateParams,
    type CallingMarkAsReadyParams as CallingMarkAsReadyParams,
    type CallingRegisterURLFormatParams as CallingRegisterURLFormatParams,
    type CallingUpdateURLFormatParams as CallingUpdateURLFormatParams,
  };
}
