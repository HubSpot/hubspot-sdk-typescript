// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as VideoconferencingAPI from '../videoconferencing';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * @example
   * ```ts
   * const externalSettings =
   *   await client.crm.extensions.videoConferencing.settings.update(
   *     0,
   *     {
   *       createMeetingUrl:
   *         'https://example.com/create-meeting',
   *     },
   *   );
   * ```
   */
  update(
    appID: number,
    body: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VideoconferencingAPI.ExternalSettings> {
    return this._client.put(path`/crm/v3/extensions/videoconferencing/settings/${appID}`, {
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * await client.crm.extensions.videoConferencing.settings.delete(
   *   0,
   * );
   * ```
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/extensions/videoconferencing/settings/${appID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * const externalSettings =
   *   await client.crm.extensions.videoConferencing.settings.get(
   *     0,
   *   );
   * ```
   */
  get(appID: number, options?: RequestOptions): APIPromise<VideoconferencingAPI.ExternalSettings> {
    return this._client.get(path`/crm/v3/extensions/videoconferencing/settings/${appID}`, options);
  }
}

export interface SettingUpdateParams {
  /**
   * The URL that HubSpot will send requests to create a new video conference.
   */
  createMeetingUrl: string;

  /**
   * The URL that HubSpot will send notifications of meetings that have been deleted
   * in HubSpot.
   */
  deleteMeetingUrl?: string;

  fetchAccountsUri?: string;

  /**
   * The URL that HubSpot will send updates to existing meetings. Typically called
   * when the user changes the topic or times of a meeting.
   */
  updateMeetingUrl?: string;

  /**
   * The URL that HubSpot will use to verify that a user exists in the video
   * conference application.
   */
  userVerifyUrl?: string;
}

export declare namespace Settings {
  export { type SettingUpdateParams as SettingUpdateParams };
}
