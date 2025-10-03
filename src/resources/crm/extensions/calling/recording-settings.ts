// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CallingAPI from './calling';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class RecordingSettings extends APIResource {
  /**
   * Retrieve recording settings
   */
  getURLFormat(
    appID: number,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.CRMExtensionsCallingRecordingSettingsResponse> {
    return this._client.get(path`/crm/v3/extensions/calling/${appID}/settings/recording`, options);
  }

  /**
   * Mark recording as ready for transcription
   */
  markAsReady(body: RecordingSettingMarkAsReadyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/extensions/calling/recordings/ready', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Enable the app for call recording
   */
  registerURLFormat(
    appID: number,
    body: RecordingSettingRegisterURLFormatParams,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.CRMExtensionsCallingRecordingSettingsResponse> {
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
    body: RecordingSettingUpdateURLFormatParams,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.CRMExtensionsCallingRecordingSettingsResponse> {
    return this._client.patch(path`/crm/v3/extensions/calling/${appID}/settings/recording`, {
      body,
      ...options,
    });
  }
}

export interface RecordingSettingMarkAsReadyParams {
  engagementId: number;
}

export interface RecordingSettingRegisterURLFormatParams {
  urlToRetrieveAuthedRecording: string;
}

export interface RecordingSettingUpdateURLFormatParams {
  urlToRetrieveAuthedRecording?: string;
}

export declare namespace RecordingSettings {
  export {
    type RecordingSettingMarkAsReadyParams as RecordingSettingMarkAsReadyParams,
    type RecordingSettingRegisterURLFormatParams as RecordingSettingRegisterURLFormatParams,
    type RecordingSettingUpdateURLFormatParams as RecordingSettingUpdateURLFormatParams,
  };
}
