// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SettingsAPI from './settings';
import { SettingUpdateParams, Settings } from './settings';

export class Videoconferencing extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

/**
 * The URLs of the various actions provided by the video conferencing application.
 * All URLs must use the `https` protocol.
 */
export interface ExternalSettings {
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

Videoconferencing.Settings = Settings;

export declare namespace Videoconferencing {
  export { type ExternalSettings as ExternalSettings };

  export { Settings as Settings, type SettingUpdateParams as SettingUpdateParams };
}
