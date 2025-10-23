// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CallingAPI from './calling';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class RecordingSettings extends APIResource {
  /**
   * Register an external URL that HubSpot will use to retrieve
   * [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
   *
   * @example
   * ```ts
   * const recordingSettingsResponse =
   *   await client.crm.extensions.calling.recordingSettings.create(
   *     0,
   *     {
   *       urlToRetrieveAuthedRecording:
   *         'urlToRetrieveAuthedRecording',
   *     },
   *   );
   * ```
   */
  create(
    appID: number,
    body: RecordingSettingCreateParams,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.RecordingSettingsResponse> {
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
   *   await client.crm.extensions.calling.recordingSettings.update(
   *     0,
   *   );
   * ```
   */
  update(
    appID: number,
    body: RecordingSettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.RecordingSettingsResponse> {
    return this._client.patch(path`/crm/v3/extensions/calling/${appID}/settings/recording`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the URL that is registered for
   * [call recording](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
   *
   * @example
   * ```ts
   * const recordingSettingsResponse =
   *   await client.crm.extensions.calling.recordingSettings.get(
   *     0,
   *   );
   * ```
   */
  get(appID: number, options?: RequestOptions): APIPromise<CallingAPI.RecordingSettingsResponse> {
    return this._client.get(path`/crm/v3/extensions/calling/${appID}/settings/recording`, options);
  }

  /**
   * Mark a call recording as ready for transcription, specifying the call by its ID
   * (`engagementid`).
   *
   * @example
   * ```ts
   * await client.crm.extensions.calling.recordingSettings.markReady(
   *   { engagementId: 0 },
   * );
   * ```
   */
  markReady(body: RecordingSettingMarkReadyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/v3/extensions/calling/recordings/ready', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RecordingSettingCreateParams {
  urlToRetrieveAuthedRecording: string;
}

export interface RecordingSettingUpdateParams {
  urlToRetrieveAuthedRecording?: string;
}

export interface RecordingSettingMarkReadyParams {
  engagementId: number;
}

export declare namespace RecordingSettings {
  export {
    type RecordingSettingCreateParams as RecordingSettingCreateParams,
    type RecordingSettingUpdateParams as RecordingSettingUpdateParams,
    type RecordingSettingMarkReadyParams as RecordingSettingMarkReadyParams,
  };
}
