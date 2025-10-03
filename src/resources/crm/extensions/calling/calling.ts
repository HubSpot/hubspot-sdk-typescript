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
  RecordingSettingMarkAsReadyParams,
  RecordingSettingRegisterURLFormatParams,
  RecordingSettingUpdateURLFormatParams,
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

export interface CRMExtensionsCallingChannelConnectionSettingsPatchRequest {
  isReady?: boolean;

  url?: string;
}

export interface CRMExtensionsCallingChannelConnectionSettingsRequest {
  isReady: boolean;

  url: string;
}

export interface CRMExtensionsCallingChannelConnectionSettingsResponse {
  createdAt: string;

  isReady: boolean;

  updatedAt: string;

  url: string;
}

export interface CRMExtensionsCallingMarkRecordingAsReadyRequest {
  engagementId: number;
}

export interface CRMExtensionsCallingRecordingSettingsPatchRequest {
  urlToRetrieveAuthedRecording?: string;
}

export interface CRMExtensionsCallingRecordingSettingsRequest {
  urlToRetrieveAuthedRecording: string;
}

export interface CRMExtensionsCallingRecordingSettingsResponse {
  urlToRetrieveAuthedRecording: string;
}

export interface CRMExtensionsCallingSettingsPatchRequest {
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

export interface CRMExtensionsCallingSettingsRequest {
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

export interface CRMExtensionsCallingSettingsResponse {
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

Calling.ChannelConnectionSettings = ChannelConnectionSettings;
Calling.RecordingSettings = RecordingSettings;
Calling.Settings = Settings;

export declare namespace Calling {
  export {
    type CRMExtensionsCallingChannelConnectionSettingsPatchRequest as CRMExtensionsCallingChannelConnectionSettingsPatchRequest,
    type CRMExtensionsCallingChannelConnectionSettingsRequest as CRMExtensionsCallingChannelConnectionSettingsRequest,
    type CRMExtensionsCallingChannelConnectionSettingsResponse as CRMExtensionsCallingChannelConnectionSettingsResponse,
    type CRMExtensionsCallingMarkRecordingAsReadyRequest as CRMExtensionsCallingMarkRecordingAsReadyRequest,
    type CRMExtensionsCallingRecordingSettingsPatchRequest as CRMExtensionsCallingRecordingSettingsPatchRequest,
    type CRMExtensionsCallingRecordingSettingsRequest as CRMExtensionsCallingRecordingSettingsRequest,
    type CRMExtensionsCallingRecordingSettingsResponse as CRMExtensionsCallingRecordingSettingsResponse,
    type CRMExtensionsCallingSettingsPatchRequest as CRMExtensionsCallingSettingsPatchRequest,
    type CRMExtensionsCallingSettingsRequest as CRMExtensionsCallingSettingsRequest,
    type CRMExtensionsCallingSettingsResponse as CRMExtensionsCallingSettingsResponse,
  };

  export {
    ChannelConnectionSettings as ChannelConnectionSettings,
    type ChannelConnectionSettingCreateParams as ChannelConnectionSettingCreateParams,
    type ChannelConnectionSettingUpdateParams as ChannelConnectionSettingUpdateParams,
  };

  export {
    RecordingSettings as RecordingSettings,
    type RecordingSettingMarkAsReadyParams as RecordingSettingMarkAsReadyParams,
    type RecordingSettingRegisterURLFormatParams as RecordingSettingRegisterURLFormatParams,
    type RecordingSettingUpdateURLFormatParams as RecordingSettingUpdateURLFormatParams,
  };

  export {
    Settings as Settings,
    type SettingCreateParams as SettingCreateParams,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
