// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class VideoConferencing extends APIResource {
  /**
   * Create or update video conference extension settings for your app
   */
  update(
    appID: number,
    body: VideoConferencingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalSettings> {
    return this._client.put(path`/crm/extensions/videoconferencing/2026-03/settings/${appID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete video conference extension settings for your app
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/extensions/videoconferencing/2026-03/settings/${appID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch video conference extension settings for your app
   */
  get(appID: number, options?: RequestOptions): APIPromise<ExternalSettings> {
    return this._client.get(path`/crm/extensions/videoconferencing/2026-03/settings/${appID}`, options);
  }
}

export interface ExternalSettings {
  createMeetingUrl: string;

  deleteMeetingUrl?: string;

  fetchAccountsUri?: string;

  updateMeetingUrl?: string;

  userVerifyUrl?: string;
}

export interface VideoConferencingUpdateParams {
  createMeetingUrl: string;

  deleteMeetingUrl?: string;

  fetchAccountsUri?: string;

  updateMeetingUrl?: string;

  userVerifyUrl?: string;
}

export declare namespace VideoConferencing {
  export {
    type ExternalSettings as ExternalSettings,
    type VideoConferencingUpdateParams as VideoConferencingUpdateParams,
  };
}
