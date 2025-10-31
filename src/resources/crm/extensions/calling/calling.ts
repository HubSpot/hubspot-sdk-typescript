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
import * as TranscriptsAPI from './transcripts';
import {
  Speaker,
  TranscriptCreateParams,
  TranscriptCreateRequest,
  TranscriptCreateResponse,
  TranscriptCreateUtterance,
  TranscriptResponse,
  TranscriptUtterance,
  Transcripts,
} from './transcripts';

export class Calling extends APIResource {
  channelConnectionSettings: ChannelConnectionSettingsAPI.ChannelConnectionSettings =
    new ChannelConnectionSettingsAPI.ChannelConnectionSettings(this._client);
  recordingSettings: RecordingSettingsAPI.RecordingSettings = new RecordingSettingsAPI.RecordingSettings(
    this._client,
  );
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  transcripts: TranscriptsAPI.Transcripts = new TranscriptsAPI.Transcripts(this._client);
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
  /**
   * The URL used to retrieve authenticated call recordings.
   */
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

Calling.ChannelConnectionSettings = ChannelConnectionSettings;
Calling.RecordingSettings = RecordingSettings;
Calling.Settings = Settings;
Calling.Transcripts = Transcripts;

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

  export {
    Transcripts as Transcripts,
    type Speaker as Speaker,
    type TranscriptCreateRequest as TranscriptCreateRequest,
    type TranscriptCreateResponse as TranscriptCreateResponse,
    type TranscriptCreateUtterance as TranscriptCreateUtterance,
    type TranscriptResponse as TranscriptResponse,
    type TranscriptUtterance as TranscriptUtterance,
    type TranscriptCreateParams as TranscriptCreateParams,
  };
}
