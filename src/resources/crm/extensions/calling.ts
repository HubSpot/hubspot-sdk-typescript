// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Calling extends APIResource {
  /**
   * Configure channel connection settings
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
   * Update channel connection settings
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
   * Delete channel connection settings
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve recording settings
   */
  getURLFormat(appID: number, options?: RequestOptions): APIPromise<RecordingSettingsResponse> {
    return this._client.get(path`/crm/v3/extensions/calling/${appID}/settings/recording`, options);
  }

  /**
   * Mark recording as ready for transcription
   */
  markAsReady(body: CallingMarkAsReadyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/extensions/calling/recordings/ready', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve channel connection settings
   */
  read(appID: number, options?: RequestOptions): APIPromise<ChannelConnectionSettingsResponse> {
    return this._client.get(path`/crm/v3/extensions/calling/${appID}/settings/channel-connection`, options);
  }

  /**
   * Enable the app for call recording
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
   * Update recording settings
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
  isReady?: boolean;

  url?: string;
}

export interface ChannelConnectionSettingsRequest {
  isReady: boolean;

  url: string;
}

export interface ChannelConnectionSettingsResponse {
  createdAt: string;

  isReady: boolean;

  updatedAt: string;

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

export interface SettingsRequest {
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

export interface SettingsResponse {
  createdAt: string;

  height: number;

  isReady: boolean;

  name: string;

  supportsCustomObjects: boolean;

  supportsInboundCalling: boolean;

  updatedAt: string;

  url: string;

  usesCallingWindow: boolean;

  usesRemote: boolean;

  width: number;
}

export interface CallingCreateParams {
  isReady: boolean;

  url: string;
}

export interface CallingUpdateParams {
  isReady?: boolean;

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
