// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ChannelConnectionSettingsAPI from './channel-connection-settings';
import {
  ChannelConnectionSettingCreateParams,
  ChannelConnectionSettingUpdateParams,
  ChannelConnectionSettings,
} from './channel-connection-settings';
import * as RecordingSettingsAPI from './recording-settings';
import {
  RecordingSettingCreateParams,
  RecordingSettingMarkReadyParams,
  RecordingSettingUpdateParams,
  RecordingSettings,
} from './recording-settings';
import * as SettingsAPI from './settings';
import { SettingCreateParams, SettingUpdateParams, Settings } from './settings';

export class Calling extends APIResource {
  channelConnectionSettings: ChannelConnectionSettingsAPI.ChannelConnectionSettings =
    new ChannelConnectionSettingsAPI.ChannelConnectionSettings(this._client);
  recordingSettings: RecordingSettingsAPI.RecordingSettings = new RecordingSettingsAPI.RecordingSettings(
    this._client,
  );
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
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

Calling.ChannelConnectionSettings = ChannelConnectionSettings;
Calling.RecordingSettings = RecordingSettings;
Calling.Settings = Settings;

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
  };

  export {
    ChannelConnectionSettings as ChannelConnectionSettings,
    type ChannelConnectionSettingCreateParams as ChannelConnectionSettingCreateParams,
    type ChannelConnectionSettingUpdateParams as ChannelConnectionSettingUpdateParams,
  };

  export {
    RecordingSettings as RecordingSettings,
    type RecordingSettingCreateParams as RecordingSettingCreateParams,
    type RecordingSettingUpdateParams as RecordingSettingUpdateParams,
    type RecordingSettingMarkReadyParams as RecordingSettingMarkReadyParams,
  };

  export {
    Settings as Settings,
    type SettingCreateParams as SettingCreateParams,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
