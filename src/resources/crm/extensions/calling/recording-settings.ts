// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CallingAPI from './calling';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class RecordingSettings extends APIResource {
  /**
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
